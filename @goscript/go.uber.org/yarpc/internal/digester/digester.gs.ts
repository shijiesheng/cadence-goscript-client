// Generated file based on digester.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/digester", ["digester.Digester"])

export class Digester {
	public get bs(): $.Slice<number> {
		return this._fields.bs
	}

	public set bs(value: $.Slice<number>) {
		this._fields.bs = value
	}

	public _fields: {
		bs: $.Slice<number>
	}

	constructor(init?: Partial<{bs?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			bs: init?.bs ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Digester {
		return new Digester(this, true)
	}

	public __goscriptAssign(source: Digester): void {
		const target = this._fields
		const values = source._fields
		target.bs = values.bs
	}

	public Add(s: string): void {
		let d: Digester | $.VarRef<Digester> | null = this;
		const d$: Digester = d == null ? $.pointerTarget<Digester>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digester>(d)
		if ($.sliceLen((d$ as Digester).bs) > 0) {
			// separate labels with a null byte
			;(d$ as Digester).bs = $.append((d$ as Digester).bs, $.uint(0, 8), $.byteSliceHint)
		}
		;(d$ as Digester).bs = $.appendSlice((d$ as Digester).bs, $.stringToBytes(s), $.byteSliceHint)
	}

	public Digest(): $.Slice<number> {
		const d: Digester | $.VarRef<Digester> | null = this;
		return $.pointerValue<Digester>(d).bs
	}

	public Free(): void {
		const d: Digester | $.VarRef<Digester> | null = this;
		_digesterPool.value.Put($.interfaceValue(d, "*digester.Digester", /* @__PURE__ */ $.pointerType("digester.Digester")))
	}

	static __typeInfo = $.registerStructType(
		"digester.Digester",
		() => new Digester(),
		() => [$.methodSignature("Add", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Digest", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Free", [], [], true)],
		Digester,
		() => [/* @__PURE__ */ $.structField("bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/digester" })]
	)
}

export let _digesterPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new Digester({bs: $.makeSlice<number>(0, 128, "byte")}), "*digester.Digester", /* @__PURE__ */ $.pointerType("digester.Digester"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set__digesterPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(_digesterPool.value, __goscriptValue)
}

export async function New(): globalThis.Promise<Digester | $.VarRef<Digester> | null> {
	let d: Digester | $.VarRef<Digester> | null = $.mustTypeAssert<Digester | $.VarRef<Digester> | null>(await _digesterPool.value.Get(), /* @__PURE__ */ $.pointerType("digester.Digester"))
	let d$: Digester = d == null ? $.pointerTarget<Digester>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Digester>(d);
	;(d$ as Digester).bs = $.goSlice((d$ as Digester).bs, undefined, 0)
	return d
}
