"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics";

/** Tıklandığında analitik olayı gönderen bağlantı (sunucu sayfalarında kullanılabilir). */
export default function TrackedLink({
  event,
  eventParams,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  eventParams?: Record<string, unknown>;
}) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, eventParams);
        props.onClick?.(e);
      }}
    />
  );
}
