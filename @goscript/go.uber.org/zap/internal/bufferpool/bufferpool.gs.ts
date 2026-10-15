// Generated file based on bufferpool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as buffer from "@goscript/go.uber.org/zap/buffer/index.js"
import "@goscript/go.uber.org/zap/buffer/index.js"

export let _pool: buffer.Pool = await buffer.NewPool()

export function __goscript_set__pool(__goscriptValue: buffer.Pool): void {
	$.assignStruct(_pool, __goscriptValue)
}

export let Get: (() => buffer.Buffer | $.VarRef<buffer.Buffer> | null | globalThis.Promise<buffer.Buffer | $.VarRef<buffer.Buffer> | null>) | null = $.functionValue(((__receiver) => () => __receiver.Get())($.markAsStructValue($.cloneStructValue(_pool))), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("buffer.Buffer")] } as $.FunctionTypeInfo), "go.uber.org/zap/buffer.Pool.Get-fm")

export function __goscript_set_Get(__goscriptValue: (() => buffer.Buffer | $.VarRef<buffer.Buffer> | null | globalThis.Promise<buffer.Buffer | $.VarRef<buffer.Buffer> | null>) | null): void {
	Get = __goscriptValue
}
