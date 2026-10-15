export type { spongeDirection } from "./sha3.gs.ts"
export { Digest } from "./sha3.gs.ts"
export { New224, New256, New384, New512, NewLegacyKeccak256, NewLegacyKeccak512 } from "./hashes.gs.ts"
export { NewCShake128, NewCShake256, NewShake128, NewShake256, SHAKE } from "./shake.gs.ts"
import "./cast.gs.ts"
import "./keccakf.gs.ts"
import { __goscript_package_init } from "./__goscript_package_init.gs.ts"
await __goscript_package_init()
