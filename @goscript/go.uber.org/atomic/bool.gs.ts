// Generated file based on bool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_bool_ext from "./bool_ext.gs.ts"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_uint32 from "./uint32.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/strconv/index.js"
import "./bool_ext.gs.ts"
import "./nocmp.gs.ts"
import "./uint32.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Bool"])

export class Bool {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): __goscript_uint32.Uint32 {
		return this._fields.v
	}

	public set v(value: __goscript_uint32.Uint32) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: __goscript_uint32.Uint32
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: __goscript_uint32.Uint32}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ? init.v.clone() : new __goscript_uint32.Uint32(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Bool {
		return new Bool(this, true)
	}

	public __goscriptAssign(source: Bool): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.v, values.v)
	}

	public CAS(old: boolean, _new: boolean): boolean {
		const x: Bool | $.VarRef<Bool> | null = this;
		let swapped: boolean = false
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Bool).CompareAndSwap(old, _new) : Bool.prototype.CompareAndSwap.call(x, old, _new))
	}

	public CompareAndSwap(old: boolean, _new: boolean): boolean {
		const x: Bool | $.VarRef<Bool> | null = this;
		let swapped: boolean = false
		return $.pointerValue<Bool>(x).v.CompareAndSwap(__goscript_bool_ext.boolToInt(old), __goscript_bool_ext.boolToInt(_new))
	}

	public Load(): boolean {
		const x: Bool | $.VarRef<Bool> | null = this;
		return __goscript_bool_ext.truthy($.pointerValue<Bool>(x).v.Load())
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Bool | $.VarRef<Bool> | null = this;
		return json.Marshal((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Bool).Load() : Bool.prototype.Load.call(x)))
	}

	public Store(val: boolean): void {
		const x: Bool | $.VarRef<Bool> | null = this;
		$.pointerValue<Bool>(x).v.Store(__goscript_bool_ext.boolToInt(val))
	}

	public String(): string {
		const b: Bool | $.VarRef<Bool> | null = this;
		return strconv.FormatBool((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Bool).Load() : Bool.prototype.Load.call(b)))
	}

	public Swap(val: boolean): boolean {
		const x: Bool | $.VarRef<Bool> | null = this;
		let old: boolean = false
		return __goscript_bool_ext.truthy($.pointerValue<Bool>(x).v.Swap(__goscript_bool_ext.boolToInt(val)))
	}

	public Toggle(): boolean {
		const b: Bool | $.VarRef<Bool> | null = this;
		let old: boolean = false
		while (true) {
			let __goscriptShadow0 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Bool).Load() : Bool.prototype.Load.call(b))
			if ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Bool).CAS(__goscriptShadow0, !__goscriptShadow0) : Bool.prototype.CAS.call(b, __goscriptShadow0, !__goscriptShadow0))) {
				return __goscriptShadow0
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const x: Bool | $.VarRef<Bool> | null = this;
		let v: $.VarRef<boolean> = $.varRef(false)
		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*bool", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))))
			if (err != null) {
				return err
			}
		}
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Bool).Store(v.value) : Bool.prototype.Store.call(x, v.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.Bool",
		() => new Bool(),
		() => [$.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("bool")], ["new", /* @__PURE__ */ $.basicType("bool")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("bool")], ["new", /* @__PURE__ */ $.basicType("bool")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("bool")]], [["old", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Toggle", [], [["old", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Bool,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", "atomic.Uint32", [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export let _zeroBool: boolean = false

export function __goscript_set__zeroBool(__goscriptValue: boolean): void {
	_zeroBool = __goscriptValue
}

export function NewBool(val: boolean): Bool | $.VarRef<Bool> | null {
	let x: Bool | $.VarRef<Bool> | null = new Bool()
	if (val != _zeroBool) {
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Bool).Store(val) : Bool.prototype.Store.call(x, val))
	}
	return x
}
