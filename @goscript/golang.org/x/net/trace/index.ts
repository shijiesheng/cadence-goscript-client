export type { EventLog, eventLogs } from "./events.gs.ts"
export type { Trace, cond, contextKeyT, discarded, minCond, traceList } from "./trace.gs.ts"
export { AuthRequest, DebugUseAfterFinish, Events, FromContext, New, NewContext, Render, Traces, __goscript_set_AuthRequest, __goscript_set_DebugUseAfterFinish, discarded_String, errorCond, event, family, lazySprintf, minCond_String, trace, traceBucket, traceList_Free, traceList_Len, traceList_Less, traceList_Swap, traceSet } from "./trace.gs.ts"
export { NewEventLog, RenderEvents, bucket, eventFamily, eventLog, eventLogs_Free, eventLogs_Len, eventLogs_Less, eventLogs_Swap, logEntry } from "./events.gs.ts"
export { bucketData, data, histogram } from "./histogram.gs.ts"
import "./events.gs.ts"
import "./trace.gs.ts"
import { __goscript_package_init } from "./__goscript_package_init.gs.ts"
await __goscript_package_init()
