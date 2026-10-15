// Generated file based on empty.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"

export let _bufPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let b: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(128, undefined, "byte"))
	return $.interfaceValue(b, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set__bufPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(_bufPool.value, __goscriptValue)
}

export async function EnsureEmpty(r: io.Reader | null, stage: string): globalThis.Promise<$.GoError> {
	using __defer = new $.DisposableStack()
	let buf = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await _bufPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))(_bufPool.value), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
	const __goscriptDeferArg0 = $.interfaceValue(buf, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })

	let [n, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(r)).Read($.pointerValue<$.Slice<number>>(buf))
	if (n > 0) {
		return fmt.Errorf("found unexpected bytes after %s, found (upto 128 bytes): %x", stage, $.interfaceValue($.goSlice(($.pointerValue<$.Slice<number>>(buf)), undefined, n), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}
	if ($.comparableEqual(err, io.EOF)) {
		return null
	}
	return err
}
