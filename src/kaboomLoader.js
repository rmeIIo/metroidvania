import kaboom from "../lib/kaboom.mjs";

export const scale = 2;
export const k = kaboom({
  with: 640 * scale,
  height: 360 * scale,
  scale,
  letterbox: true,
  global: false,
})