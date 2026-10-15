// Generated file based on buf_pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/bytes/index.js"
import "@goscript/sync/index.js"

export let bufPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new bytes.Buffer(), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_bufPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bufPool.value, __goscriptValue)
}

export async function getBufFromPool(): globalThis.Promise<bytes.Buffer | $.VarRef<bytes.Buffer> | null> {
	let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = $.mustTypeAssert<bytes.Buffer | $.VarRef<bytes.Buffer> | null>(await bufPool.value.Get(), /* @__PURE__ */ $.pointerType("bytes.Buffer"))
	bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))
	return buf
}

export function returnBufToPool(buf: $.VarRef<bytes.Buffer | $.VarRef<bytes.Buffer> | null> | null): void {
	bufPool.value.Put($.interfaceValue($.pointerValue<bytes.Buffer | $.VarRef<bytes.Buffer> | null>(buf), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))
	buf!.value = null
}
