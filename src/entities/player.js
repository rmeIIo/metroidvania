import { state } from "../state/globalStateManager.js";

export function makePlayer(k) {
  return k.make([
    k.pos(),
    k.sprite("player"),
    k.area({
      shape: new k.Rect(k.vec2(0, 18), 12, 12),
    }),
    k.anchor("center"),
    k.body({
      mass: 100,
      jumpForce: 320,
    }),
    k.doubleJump(state.current().isDoubleJumpUnlocked ? 2 : 1),
    k.opacity(),
    k.health(state.current().playerHp),
    "player",
    {},
  ]);
}
