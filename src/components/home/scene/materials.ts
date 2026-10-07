import * as THREE from "three";

// Ortak malzeme dili: mat beyaz paneller, koyu satine metal, açık metal, sınırlı kırmızı.
// Paylaşılan malzemeler dispose edilmez; sahne yeniden kurulsa da aynı örnekler kullanılır.
const std = (params: THREE.MeshStandardMaterialParameters) =>
  new THREE.MeshStandardMaterial(params);

export const mat = {
  white: std({ color: "#F4F4F2", roughness: 0.82 }),
  floor: std({ color: "#FBFBF9", roughness: 0.72 }),
  base: std({ color: "#ECECEA", roughness: 0.92 }),
  plinth: std({ color: "#1A1A1A", roughness: 0.6, metalness: 0.2 }),
  dark: std({ color: "#2B2B2B", roughness: 0.42, metalness: 0.45 }),
  darker: std({ color: "#0D0D0D", roughness: 0.5, metalness: 0.3 }),
  grey: std({ color: "#767676", roughness: 0.7 }),
  metal: std({ color: "#B3B3B3", roughness: 0.3, metalness: 0.8 }),
  red: std({ color: "#E31B23", roughness: 0.45 }),
  wood: std({ color: "#CDB79B", roughness: 0.78 }),
  neighbor: std({ color: "#E6E6E6", roughness: 0.92 }),
  aisle: std({ color: "#E0E0DE", roughness: 0.96 }),
  road: std({ color: "#CFCFCD", roughness: 0.96 }),
  glass: std({
    color: "#E2E6E8",
    roughness: 0.08,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  }),
  light: std({
    color: "#FFFFFF",
    emissive: "#FFF3E0",
    emissiveIntensity: 1,
    roughness: 0.4,
  }),
  screen: std({
    color: "#15171A",
    emissive: "#B9C3CC",
    emissiveIntensity: 0.4,
    roughness: 0.3,
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

export const palette = {
  red: "#E31B23",
  dark: "#2B2B2B",
  grey: "#767676",
  metal: "#B3B3B3",
};
