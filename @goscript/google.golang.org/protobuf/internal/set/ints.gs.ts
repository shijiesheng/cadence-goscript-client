// Generated file based on ints.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"
import "@goscript/math/bits/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/set", ["set.int64s", "set.Ints"])

export type int64s = bigint

$.registerNamedValueType(
	"*set.int64s",
	{Clear: (receiver: any, ...args: any[]) => (int64s_Clear as any)(receiver, ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (int64s_Has as any)(receiver, ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (int64s_Len as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (int64s_Set as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Clear", [["n", /* @__PURE__ */ $.basicType("uint64")]]), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Set", [["n", /* @__PURE__ */ $.basicType("uint64")]])]
);

export class Ints {
	public get lo(): int64s {
		return this._fields.lo
	}

	public set lo(value: int64s) {
		this._fields.lo = value
	}

	public get hi(): globalThis.Map<bigint, {}> | null {
		return this._fields.hi
	}

	public set hi(value: globalThis.Map<bigint, {}> | null) {
		this._fields.hi = value
	}

	public _fields: {
		lo: int64s
		hi: globalThis.Map<bigint, {}> | null
	}

	constructor(init?: Partial<{lo?: int64s, hi?: globalThis.Map<bigint, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			lo: init?.lo ?? (0n as int64s),
			hi: init?.hi ?? (null! as globalThis.Map<bigint, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Ints {
		return new Ints(this, true)
	}

	public __goscriptAssign(source: Ints): void {
		const target = this._fields
		const values = source._fields
		target.lo = values.lo
		target.hi = values.hi
	}

	public Clear(n: bigint): void {
		const bs: Ints | $.VarRef<Ints> | null = this;
		const bs$: Ints = bs == null ? $.pointerTarget<Ints>(bs) : (bs as any).__isVarRef === true ? (bs as any).value : (bs as any).__goValue === undefined ? (bs as any) : $.pointerTarget<Ints>(bs)
		if (n < 64n) {
			int64s_Clear($.fieldRef((bs$ as Ints)._fields, "lo"), n)
			return
		}
		$.deleteMapEntry((bs$ as Ints).hi, n)
	}

	public Has(n: bigint): boolean {
		const bs: Ints | $.VarRef<Ints> | null = this;
		const bs$: Ints = bs == null ? $.pointerTarget<Ints>(bs) : (bs as any).__isVarRef === true ? (bs as any).value : (bs as any).__goValue === undefined ? (bs as any) : $.pointerTarget<Ints>(bs)
		if (n < 64n) {
			return int64s_Has($.fieldRef((bs$ as Ints)._fields, "lo"), n)
		}
		let [, ok] = $.mapGet<bigint, {}, {}>((bs$ as Ints).hi, n, {})
		return ok
	}

	public Len(): number {
		const bs: Ints | $.VarRef<Ints> | null = this;
		const bs$: Ints = bs == null ? $.pointerTarget<Ints>(bs) : (bs as any).__isVarRef === true ? (bs as any).value : (bs as any).__goValue === undefined ? (bs as any) : $.pointerTarget<Ints>(bs)
		return int64s_Len($.fieldRef((bs$ as Ints)._fields, "lo")) + $.len((bs$ as Ints).hi)
	}

	public Set(n: bigint): void {
		let bs: Ints | $.VarRef<Ints> | null = this;
		const bs$: Ints = bs == null ? $.pointerTarget<Ints>(bs) : (bs as any).__isVarRef === true ? (bs as any).value : (bs as any).__goValue === undefined ? (bs as any) : $.pointerTarget<Ints>(bs)
		if (n < 64n) {
			int64s_Set($.fieldRef((bs$ as Ints)._fields, "lo"), n)
			return
		}
		if ((bs$ as Ints).hi == null) {
			;(bs$ as Ints).hi = $.makeMap<bigint, {}>()
		}
		$.mapSet((bs$ as Ints).hi, n, {})
	}

	static __typeInfo = $.registerStructType(
		"set.Ints",
		() => new Ints(),
		() => [$.methodSignature("Clear", [["n", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Set", [["n", /* @__PURE__ */ $.basicType("uint64")]], [], true)],
		Ints,
		() => [/* @__PURE__ */ $.structField("lo", /* @__PURE__ */ $.basicType("uint64", "set.int64s"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/set" }), /* @__PURE__ */ $.structField("hi", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/set" })]
	)
}

export function int64s_Len(bs: $.VarRef<int64s> | null): number {
	return bits.OnesCount64($.uint64($.pointerValue<int64s>(bs)))
}

export function int64s_Has(bs: $.VarRef<int64s> | null, n: bigint): boolean {
	return ($.uint64And($.uint64($.pointerValue<int64s>(bs)), ($.uint64Shl(1n, n)))) > 0n
}

export function int64s_Set(bs: $.VarRef<int64s> | null, n: bigint): void {
	bs!.value = $.uint64Or(bs!.value, $.uint64Shl(1n, n))
}

export function int64s_Clear(bs: $.VarRef<int64s> | null, n: bigint): void {
	bs!.value = $.uint64AndNot(bs!.value, $.uint64Shl(1n, n))
}
