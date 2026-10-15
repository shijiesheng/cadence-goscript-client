export type { Option } from "./bufferpool.gs.ts"
export { AutoReleaseBuffer, Buffer, NewAutoReleaseBuffer } from "./buffer.gs.ts"
export { DetectUseAfterFreeForTests, Get, NewPool, Pool, Put } from "./bufferpool.gs.ts"
import "./bufferpool.gs.ts"
import { __goscript_package_init } from "./__goscript_package_init.gs.ts"
await __goscript_package_init()
