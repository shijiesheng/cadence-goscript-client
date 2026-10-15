// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_nocmp from "./nocmp.gs.ts"
import "@goscript/sync/atomic/index.js"
import "./nocmp.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Value"])

export class Value {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get Value(): atomic.Value {
		return this._fields.Value
	}

	public set Value(value: atomic.Value) {
		this._fields.Value = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		Value: atomic.Value
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, Value?: atomic.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			Value: init?.Value ? $.markAsStructValue($.cloneStructValue(init.Value)) : $.markAsStructValue(new atomic.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value {
		return new Value(this, true)
	}

	public __goscriptAssign(source: Value): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.Value, values.Value)
	}

	public CompareAndSwap(old: any, _new: any): any {
		return $.pointerValue<atomic.Value>(this.Value).CompareAndSwap(old, _new)
	}

	public Load(): any {
		return $.pointerValue<atomic.Value>(this.Value).Load()
	}

	public Store(val: any): any {
		return $.pointerValue<atomic.Value>(this.Value).Store(val)
	}

	public Swap(_new: any): any {
		return $.pointerValue<atomic.Value>(this.Value).Swap(_new)
	}

	static __typeInfo = $.registerStructType(
		"atomic.Value",
		() => new Value(),
		() => [$.methodSignature("CompareAndSwap", [["old", { kind: $.TypeKind.Interface, methods: [] }], ["new", { kind: $.TypeKind.Interface, methods: [] }]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], [["val", { kind: $.TypeKind.Interface, methods: [] }]], true), $.methodSignature("Store", [["val", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Swap", [["new", { kind: $.TypeKind.Interface, methods: [] }]], [["old", { kind: $.TypeKind.Interface, methods: [] }]], true)],
		Value,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("Value", "atomic.Value", [1], 0, true, { anonymous: true })]
	)
}
