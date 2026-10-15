// Generated file based on pointer_go119.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_pointer_go118 from "./pointer_go118.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/atomic/index.js"
import "./nocmp.gs.ts"
import "./pointer_go118.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Pointer"])

export class Pointer {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get p(): atomic.Pointer<any> {
		return this._fields.p
	}

	public set p(value: atomic.Pointer<any>) {
		this._fields.p = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		p: atomic.Pointer<any>
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, p?: atomic.Pointer<any>}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			p: init?.p ? $.markAsStructValue($.cloneStructValue(init.p)) : $.markAsStructValue(new atomic.Pointer<any>())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Pointer {
		return new Pointer(this, true)
	}

	public __goscriptAssign(source: Pointer): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.p, values.p)
	}

	public CompareAndSwap(__typeArgs: $.GenericTypeArgs | undefined, old: any, _new: any): boolean {
		const p: Pointer | $.VarRef<Pointer> | null = this;
		let swapped: boolean = false
		return $.pointerValue<Pointer>(p).p.CompareAndSwap(old, _new)
	}

	public Load(__typeArgs: $.GenericTypeArgs | undefined): any {
		const p: Pointer | $.VarRef<Pointer> | null = this;
		return ($.pointerValue<Pointer>(p).p.Load() as any)
	}

	public Store(__typeArgs: $.GenericTypeArgs | undefined, val: any): void {
		const p: Pointer | $.VarRef<Pointer> | null = this;
		$.pointerValue<Pointer>(p).p.Store(val)
	}

	public async String(__typeArgs: $.GenericTypeArgs | undefined): globalThis.Promise<string> {
		const p: Pointer | $.VarRef<Pointer> | null = this;
		return fmt.Sprint($.typeParamPointerInterfaceValue(Pointer.prototype.Load.call(p, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}), __typeArgs?.["T"], "*T", /* @__PURE__ */ $.pointerType(__typeArgs?.["T"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })))
	}

	public Swap(__typeArgs: $.GenericTypeArgs | undefined, val: any): any {
		const p: Pointer | $.VarRef<Pointer> | null = this;
		let old: any = null! as any
		return ($.pointerValue<Pointer>(p).p.Swap(val) as any)
	}

	static __typeInfo = $.registerStructType(
		"atomic.Pointer",
		() => new Pointer(),
		() => [$.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], ["new", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })]], [["old", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })]], true)],
		Pointer,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("p", "atomic.Pointer", [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export function NewPointer(__typeArgs: $.GenericTypeArgs | undefined, v: any): Pointer | $.VarRef<Pointer> | null {
	let p: $.VarRef<Pointer> = $.varRef($.markAsStructValue(new Pointer()))
	if (v != null) {
		p.value.p.Store(v)
	}
	return p
}
