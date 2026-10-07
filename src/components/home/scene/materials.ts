import * as THREE from "three";
import {
  blobShadowTexture,
  carpetTexture,
  hallFloorTexture,
  lightboxTexture,
  screenTexture,
  wallGraphicTexture,
  woodTexture,
} from "./textures";

// Mimari maket malzeme dili: mat kart beyazı paneller, huş ahşap, saten metal,
// koyu satine yüzeyler ve sınırlı kırmızı. Paylaşılan malzemeler dispose edilmez.
const std = (params: THREE.MeshStandardMaterialParameters) =>
  new THREE.MeshStandardMaterial(params);

export const mat = {
  white: std({ color: "#F7F6F3", roughness: 0.86 }),
  whiteSoft: std({ color: "#EFEDE8", roughness: 0.9 }),
  floor: std({ color: "#FFFFFF", map: carpetTexture(), roughness: 0.95 }),
  base: std({ color: "#FFFFFF", map: hallFloorTexture(), roughness: 0.9 }),
  plinth: std({ color: "#161616", roughness: 0.55, metalness: 0.25 }),
  dark: std({ color: "#2B2B2B", roughness: 0.5, metalness: 0.35 }),
  darker: std({ color: "#161718", roughness: 0.45, metalness: 0.3 }),
  grey: std({ color: "#767676", roughness: 0.7 }),
  metal: std({ color: "#C9CDD1", roughness: 0.28, metalness: 0.85 }),
  red: std({ color: "#E31B23", roughness: 0.42 }),
  wood: std({ color: "#FFFFFF", map: woodTexture(), roughness: 0.72 }),
  woodBand: std({ color: "#FFFFFF", map: woodTexture(14, 1), roughness: 0.7 }),
  neighbor: std({ color: "#ECEBE7", roughness: 0.92 }),
  neighborDark: std({ color: "#3A3B3D", roughness: 0.7 }),
  aisle: std({ color: "#DCD9D3", roughness: 0.96 }),
  road: std({ color: "#C9C9C6", roughness: 0.96 }),
  glass: std({
    color: "#E4EAED",
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
  }),
  light: std({
    color: "#FFFFFF",
    emissive: "#FFF1DE",
    emissiveIntensity: 1,
    roughness: 0.4,
  }),
  screen: std({
    color: "#FFFFFF",
    map: screenTexture(),
    emissive: "#FFFFFF",
    emissiveMap: screenTexture(),
    emissiveIntensity: 0.4,
    roughness: 0.25,
  }),
  lightbox: std({
    color: "#FFFFFF",
    map: lightboxTexture(),
    emissive: "#FFFFFF",
    emissiveMap: lightboxTexture(),
    emissiveIntensity: 0.35,
    roughness: 0.5,
  }),
  wallGraphic: std({
    color: "#FFFFFF",
    map: wallGraphicTexture(),
    roughness: 0.6,
    metalness: 0.1,
  }),
  leaf: std({ color: "#8E9E80", roughness: 0.9, flatShading: true }),
  leafDark: std({ color: "#6F8063", roughness: 0.9, flatShading: true }),
  pot: std({ color: "#2B2B2B", roughness: 0.75 }),
  fabric: std({ color: "#3A3B3D", roughness: 0.95 }),
  shadow: new THREE.MeshBasicMaterial({
    color: "#000000",
    alphaMap: blobShadowTexture(),
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  }),
  highlight: new THREE.MeshBasicMaterial({
    color: "#E31B23",
    transparent: true,
    opacity: 0,
    depthWrite: false,
    side: THREE.DoubleSide,
  }),
  highlightFill: new THREE.MeshBasicMaterial({
    color: "#E31B23",
    transparent: true,
    opacity: 0,
    depthWrite: false,
  }),
};

/** Mimari maket figürleri: kart beyazı, birkaç koyu ve bir kırmızı vurgu. */
export const figureColors = {
  paper: "#EEECE7",
  stone: "#C9C7C2",
  graphite: "#4A4B4D",
  red: "#E31B23",
};

export const palette = {
  red: "#E31B23",
  dark: "#2B2B2B",
  grey: "#767676",
  metal: "#B3B3B3",
};
