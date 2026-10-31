# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Leyonex is a Next.js 15 (App Router) marketing site + member dashboard for a Turkish trade-show/exhibition organization company. Primary language is Turkish (routes, copy, code comments are largely Turkish); the codebase mixes Turkish and English identifiers.

## Commands

```bash
npm install --legacy-peer-deps   # required due to Next 15 / React 19 peer-dep conflicts
npm run dev                      # dev server (Turbopack) on http://localhost:3000
npm run dev:normal               # dev server without --turbo, for debugging turbopack-specific issues
npm run build                    # prisma generate && next build
npm start                        # production server
npm run lint                     # next lint (ESLint, eslint-config-next core-web-vitals)
npm run prisma:generate          # regenerate Prisma client (also runs on postinstall)
npm run prisma:migrate           # prisma migrate dev
npm run prisma:studio            # Prisma Studio GUI
```

There is no test runner configured in this repo.

## Architecture

### Two parallel content systems (don't confuse them)

- `src/data/*.ts` (`services.ts`, `projects.ts`, `fairs.ts`, `activeFairs.ts`) are static, hardcoded, bilingual (TR/EN) TypeScript data arrays. `src/lib/data.ts` exposes getter functions (`getAllServices`, `getFairBySlug`, etc.) over these arrays. The public marketing pages (`hizmetler`, `projeler`, `fuarlar`) currently read from **this static data**, not the database.
- `prisma/schema.prisma` defines a full Postgres relational model (`User`, `Company`, `Fair`, `QuoteRequest`, `UserFair`, `FairPreparation`, `Reminder`, `FairEvaluation`, `Document`, `ContactMessage`) intended for the authenticated member dashboard (`/uye/dashboard`) and a 10-module client portal (firma tanımlama, teklif al, fuar takibi, hazırlık skoru, hatırlatmalar, değerlendirme, dökümanlar, etc. — see the Turkish comments above each model for which module it backs). `src/lib/prisma.ts` wires Prisma to Postgres via `@prisma/adapter-pg` + a `pg` `Pool`.
- When adding dashboard/member features, build against the Prisma models. When editing public marketing content, edit the static `src/data` files — there is no CMS wiring live (Sanity packages are installed but unused/dead).

### Internationalization

Despite `next-intl` being a dependency, there is no live `messages/*.json` i18n setup — that approach was abandoned. Current bilingual support is two separate mechanisms:
1. Static data files carry both `tr`/`en` fields directly on each record (e.g. `title: { tr: "...", en: "..." }`).
2. A site-wide Google Translate widget (`src/components/GoogleTranslate.tsx`), injected in the root layout, that machine-translates the rendered TR page on the client. Recent commits show active iteration on this widget (cookie-based reload approach) — check recent git log before assuming its current behavior.

### Auth & routing

- Clerk handles auth, with Turkish localization (`@clerk/localizations` `trTR`) applied in `src/app/layout.tsx`. Sign-in/up routes are Turkish: `/giris` (sign-in), `/kayit` (sign-up).
- `src/middleware.ts` uses `clerkMiddleware` + `createRouteMatcher` to protect `/uye/dashboard`, `/uye/admin`, `/uye/firma-tanimla`. Its matcher is deliberately limited to `/uye`, `/giris`, `/kayit`: running it on public pages with a Clerk development key sends Googlebot into a handshake redirect loop and blocks indexing. Calling `auth()`/`currentUser()` outside those paths throws, so add a path to the matcher only if it isn't public.
- `src/lib/auth/utils.ts` is the bridge between Clerk and the Prisma `User` table: `getCurrentClerkUser()` reads Clerk's `currentUser()`; `getCurrentUserWithCompany()` / `syncUserToDatabase()` lazily create/update the corresponding Prisma row on demand (no webhook-based sync). Role gating (`GUEST`/`CLIENT`/`ADMIN`) is read from Clerk's `publicMetadata.role` and mirrored onto the Prisma `User.role` enum. Use `requireAuth()` / `requireRole()` / `checkCompanyAccess()` from this file rather than re-deriving auth state.

### Route groups

- `src/app/(main)/` — public marketing pages: `fuarlar` (fair calendar), `hizmetler` (services), `projeler` (project portfolio), `hakkimizda` (about), `iletisim` (contact). Slugged detail pages use `[slug]/page.tsx` resolved against the static data getters.
- `src/app/giris`, `src/app/kayit` — Clerk auth pages, each with an `sso-callback` subroute.
- `src/app/uye/dashboard` — authenticated member dashboard.
- `src/app/api/quote-request` — sends the "teklif al" (quote request) form via Resend; other dashboard-related API routes (`contact`, `contact-message`, `upload`, `admin/update-fairs`) are not live yet.

### UI layer

Shadcn UI (`components.json`: style `default`, baseColor `slate`, no prefix) over Radix primitives, Tailwind CSS, Framer Motion for animation, Lucide for icons. Path alias `@/*` → `src/*` (see `tsconfig.json` / `components.json` aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`).

### Brand palette

Defined in `tailwind.config.ts`, based on RAL colors: primary red `#CB3234` (RAL 3028), secondary grey `#4A4A4A` (RAL 7017), background off-white `#F1F0EA` (RAL 9016). Gradients were deliberately removed site-wide — don't reintroduce gradient backgrounds/buttons.

## Environment variables

See `.env.example` for the full list. Only Clerk keys are strictly required to run the app locally; Sanity, Resend, Sentry, and the site URL/WhatsApp number are optional and the app degrades gracefully without them (the quote-request API route returns a clean error if `RESEND_API_KEY` is missing rather than crashing).
