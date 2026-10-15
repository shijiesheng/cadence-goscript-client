export type { signalError, stringer } from "./signal.gs.ts"
export { Ignore, Ignored, Notify, NotifyContext, Reset, Stop, handler, signalCtx, signalError_Error, signalError_Is, stopping } from "./signal.gs.ts"
import "./signal.gs.ts"
import "./signal_unix.gs.ts"
import { __goscript_package_init } from "./__goscript_package_init.gs.ts"
await __goscript_package_init()
