// Generated file based on desc_list.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as descfmt from "@goscript/google.golang.org/protobuf/internal/descfmt/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/descfmt/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/filedesc", ["filedesc.FileImports", "filedesc.Names", "filedesc.EnumRanges", "filedesc.enumRange", "filedesc.FieldRanges", "filedesc.fieldRange", "filedesc.FieldNumbers", "filedesc.OneofFields", "filedesc.SourceLocations", "filedesc.pathKey"])

export type FileImports = $.Slice<protoreflect.FileImport>

$.registerNamedType("filedesc.FileImports", /* @__PURE__ */ $.sliceType("protoreflect.FileImport"));

$.registerNamedValueType(
	"*filedesc.FileImports",
	{Format: (receiver: any, ...args: any[]) => (FileImports_Format as any)(receiver, ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (FileImports_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (FileImports_Len as any)(receiver, ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (FileImports_ProtoInternal as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FileImport"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export type enumRange = protoreflect.EnumNumber[]

$.registerNamedType("filedesc.enumRange", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2));

$.registerNamedValueType(
	"filedesc.enumRange",
	{End: (receiver: any, ...args: any[]) => (enumRange_End as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Start: (receiver: any, ...args: any[]) => (enumRange_Start as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (enumRange_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("End", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Start", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*filedesc.enumRange",
	{End: (receiver: any, ...args: any[]) => (enumRange_End as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Start: (receiver: any, ...args: any[]) => (enumRange_Start as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (enumRange_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("End", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Start", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type fieldRange = protoreflect.FieldNumber[]

$.registerNamedType("filedesc.fieldRange", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2));

$.registerNamedValueType(
	"filedesc.fieldRange",
	{End: (receiver: any, ...args: any[]) => (fieldRange_End as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Start: (receiver: any, ...args: any[]) => (fieldRange_Start as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (fieldRange_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("End", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Start", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*filedesc.fieldRange",
	{End: (receiver: any, ...args: any[]) => (fieldRange_End as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Start: (receiver: any, ...args: any[]) => (fieldRange_Start as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (fieldRange_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("End", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Start", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Names {
	public get List(): $.Slice<protoreflect.Name> {
		return this._fields.List
	}

	public set List(value: $.Slice<protoreflect.Name>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get has(): globalThis.Map<protoreflect.Name, number> | null {
		return this._fields.has
	}

	public set has(value: globalThis.Map<protoreflect.Name, number> | null) {
		this._fields.has = value
	}

	public _fields: {
		List: $.Slice<protoreflect.Name>
		once: sync.Once
		has: globalThis.Map<protoreflect.Name, number> | null
	}

	constructor(init?: Partial<{List?: $.Slice<protoreflect.Name>, once?: sync.Once, has?: globalThis.Map<protoreflect.Name, number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<protoreflect.Name>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			has: init?.has ?? (null! as globalThis.Map<protoreflect.Name, number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Names {
		return new Names(this, true)
	}

	public __goscriptAssign(source: Names): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.has = values.has
	}

	public async CheckValid(): globalThis.Promise<$.GoError> {
		const p: Names | $.VarRef<Names> | null = this;
		for (const [s, n] of $.pointerValue<Names>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Names).lazyInit() : Names.prototype.lazyInit.call(p))).has?.entries() ?? []) {
			switch ((true as boolean)) {
				case n > 1:
				{
					return errors.New("duplicate name: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s, "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
					break
				}
				case false && !protoreflect.Name_IsValid(s):
				{
					return errors.New("invalid name: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s, "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
					break
				}
			}
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: Names | $.VarRef<Names> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.Names", /* @__PURE__ */ $.pointerType("filedesc.Names")))
	}

	public Get(i: number): protoreflect.Name {
		const p: Names | $.VarRef<Names> | null = this;
		return $.arrayIndex($.pointerValue<Names>(p).List!, i)
	}

	public async Has(s: protoreflect.Name): globalThis.Promise<boolean> {
		const p: Names | $.VarRef<Names> | null = this;
		return $.mapGet<protoreflect.Name, number, number>($.pointerValue<Names>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Names).lazyInit() : Names.prototype.lazyInit.call(p))).has, s, 0)[0] > 0
	}

	public Len(): number {
		const p: Names | $.VarRef<Names> | null = this;
		return $.sliceLen($.pointerValue<Names>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: Names | $.VarRef<Names> | null = this;
	}

	public async lazyInit(): globalThis.Promise<Names | $.VarRef<Names> | null> {
		const p: Names | $.VarRef<Names> | null = this;
		const p$: Names = p == null ? $.pointerTarget<Names>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Names>(p)
		await (p$ as Names).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as Names).List) > 0) {
				;(p$ as Names).has = $.makeMap<protoreflect.Name, number>()
				for (let __goscriptRangeTarget0 = (p$ as Names).List, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as protoreflect.Name)
					$.mapSet((p$ as Names).has, s, $.mapGet<protoreflect.Name, number, number>((p$ as Names).has, s, 0)[0] + 1)
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.Names",
		() => new Names(),
		() => [$.methodSignature("CheckValid", [], ["error"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")], true), $.methodSignature("Has", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.Names")], true)],
		Names,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name")), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("has", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), /* @__PURE__ */ $.basicType("int")), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class EnumRanges {
	public get List(): $.Slice<protoreflect.EnumNumber[]> {
		return this._fields.List
	}

	public set List(value: $.Slice<protoreflect.EnumNumber[]>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get sorted(): $.Slice<protoreflect.EnumNumber[]> {
		return this._fields.sorted
	}

	public set sorted(value: $.Slice<protoreflect.EnumNumber[]>) {
		this._fields.sorted = value
	}

	public _fields: {
		List: $.Slice<protoreflect.EnumNumber[]>
		once: sync.Once
		sorted: $.Slice<protoreflect.EnumNumber[]>
	}

	constructor(init?: Partial<{List?: $.Slice<protoreflect.EnumNumber[]>, once?: sync.Once, sorted?: $.Slice<protoreflect.EnumNumber[]>}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<protoreflect.EnumNumber[]>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			sorted: init?.sorted ?? (null! as $.Slice<protoreflect.EnumNumber[]>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumRanges {
		return new EnumRanges(this, true)
	}

	public __goscriptAssign(source: EnumRanges): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.sorted = values.sorted
	}

	public async CheckValid(): globalThis.Promise<$.GoError> {
		const p: EnumRanges | $.VarRef<EnumRanges> | null = this;
		let rp: enumRange = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
		for (let __goscriptRangeTarget1 = $.pointerValue<EnumRanges>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as EnumRanges).lazyInit() : EnumRanges.prototype.lazyInit.call(p))).sorted, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let r = $.cloneArrayValue((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as protoreflect.EnumNumber[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2))
			let __goscriptShadow0 = r
			let __goscriptShadow1 = $.cloneArrayValue(__goscriptShadow0, "filedesc.enumRange")
			switch ((true as boolean)) {
				case !(enumRange_Start(__goscriptShadow1) <= enumRange_End(__goscriptShadow1)):
				{
					return errors.New("invalid range: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(__goscriptShadow1, "filedesc.enumRange", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())]))
					break
				}
				case !(enumRange_End(rp) < enumRange_Start(__goscriptShadow1)) && (i > 0):
				{
					return errors.New("overlapping ranges: %v with %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(rp, "filedesc.enumRange", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.namedValueInterfaceValue<any>(__goscriptShadow1, "filedesc.enumRange", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())]))
					break
				}
			}
			rp = $.cloneArrayValue(__goscriptShadow1, "filedesc.enumRange")
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: EnumRanges | $.VarRef<EnumRanges> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.EnumRanges", /* @__PURE__ */ $.pointerType("filedesc.EnumRanges")))
	}

	public Get(i: number): protoreflect.EnumNumber[] {
		const p: EnumRanges | $.VarRef<EnumRanges> | null = this;
		return $.cloneArrayValue($.arrayIndex($.pointerValue<EnumRanges>(p).List!, i), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2))
	}

	public async Has(n: protoreflect.EnumNumber): globalThis.Promise<boolean> {
		const p: EnumRanges | $.VarRef<EnumRanges> | null = this;
		for (let ls: $.Slice<protoreflect.EnumNumber[]> = $.pointerValue<EnumRanges>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as EnumRanges).lazyInit() : EnumRanges.prototype.lazyInit.call(p))).sorted; $.sliceLen(ls) > 0; ) {
			let i: number = globalThis.Math.trunc($.sliceLen(ls) / 2)
			{
				let r = $.cloneArrayValue($.arrayIndex(ls!, i), "filedesc.enumRange")
				switch ((true as boolean)) {
					case n < enumRange_Start(r):
					{
						ls = $.goSlice(ls, undefined, i)
						break
					}
					case n > enumRange_End(r):
					{
						ls = $.goSlice(ls, i + 1, undefined)
						break
					}
					default:
					{
						return true
						break
					}
				}
			}
		}
		return false
	}

	public Len(): number {
		const p: EnumRanges | $.VarRef<EnumRanges> | null = this;
		return $.sliceLen($.pointerValue<EnumRanges>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: EnumRanges | $.VarRef<EnumRanges> | null = this;
	}

	public async lazyInit(): globalThis.Promise<EnumRanges | $.VarRef<EnumRanges> | null> {
		const p: EnumRanges | $.VarRef<EnumRanges> | null = this;
		const p$: EnumRanges = p == null ? $.pointerTarget<EnumRanges>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<EnumRanges>(p)
		await (p$ as EnumRanges).once.Do($.functionValue((): void => {
			;(p$ as EnumRanges).sorted = $.appendSlice((p$ as EnumRanges).sorted, (p$ as EnumRanges).List)
			sort.Slice($.interfaceValue((p$ as EnumRanges).sorted, "[][2]protoreflect.EnumNumber", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2))), $.functionValue((i: number, j: number): boolean => {
				return $.arrayIndex($.arrayIndex((p$ as EnumRanges).sorted!, i), 0) < $.arrayIndex($.arrayIndex((p$ as EnumRanges).sorted!, j), 0)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.EnumRanges",
		() => new EnumRanges(),
		() => [$.methodSignature("CheckValid", [], ["error"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2)], true), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.EnumRanges")], true)],
		EnumRanges,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2)), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("sorted", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2)), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class FieldRanges {
	public get List(): $.Slice<protoreflect.FieldNumber[]> {
		return this._fields.List
	}

	public set List(value: $.Slice<protoreflect.FieldNumber[]>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get sorted(): $.Slice<protoreflect.FieldNumber[]> {
		return this._fields.sorted
	}

	public set sorted(value: $.Slice<protoreflect.FieldNumber[]>) {
		this._fields.sorted = value
	}

	public _fields: {
		List: $.Slice<protoreflect.FieldNumber[]>
		once: sync.Once
		sorted: $.Slice<protoreflect.FieldNumber[]>
	}

	constructor(init?: Partial<{List?: $.Slice<protoreflect.FieldNumber[]>, once?: sync.Once, sorted?: $.Slice<protoreflect.FieldNumber[]>}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<protoreflect.FieldNumber[]>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			sorted: init?.sorted ?? (null! as $.Slice<protoreflect.FieldNumber[]>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldRanges {
		return new FieldRanges(this, true)
	}

	public __goscriptAssign(source: FieldRanges): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.sorted = values.sorted
	}

	public async CheckOverlap(q: FieldRanges | $.VarRef<FieldRanges> | null): globalThis.Promise<$.GoError> {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
		let rps: $.Slice<protoreflect.FieldNumber[]> = $.pointerValue<FieldRanges>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as FieldRanges).lazyInit() : FieldRanges.prototype.lazyInit.call(p))).sorted
		let rqs: $.Slice<protoreflect.FieldNumber[]> = $.pointerValue<FieldRanges>(await (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as FieldRanges).lazyInit() : FieldRanges.prototype.lazyInit.call(q))).sorted
		for (let __goscriptSliceWindow0 = $.sliceRange(rps), __goscriptSliceWindow1 = $.sliceRange(rqs), pi = 0, qi = 0; (pi < __goscriptSliceWindow0.length) && (qi < __goscriptSliceWindow1.length); ) {
			let rp = $.cloneArrayValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, pi)] as protoreflect.FieldNumber[]), "filedesc.fieldRange")
			let rq = $.cloneArrayValue(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, qi)] as protoreflect.FieldNumber[]), "filedesc.fieldRange")
			if (!((fieldRange_End(rp) < fieldRange_Start(rq)) || (fieldRange_End(rq) < fieldRange_Start(rp)))) {
				return errors.New("overlapping ranges: %v with %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(rp, "filedesc.fieldRange", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()), $.namedValueInterfaceValue<any>(rq, "filedesc.fieldRange", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11())]))
			}
			if (fieldRange_Start(rp) < fieldRange_Start(rq)) {
				pi++
			} else {
				qi++
			}
		}
		return null
	}

	public async CheckValid(isMessageSet: boolean): globalThis.Promise<$.GoError> {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
		let rp: fieldRange = $.arrayValue(globalThis.Array.from({ length: 2 }, () => 0))
		for (let __goscriptRangeTarget2 = $.pointerValue<FieldRanges>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as FieldRanges).lazyInit() : FieldRanges.prototype.lazyInit.call(p))).sorted, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let r = $.cloneArrayValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as protoreflect.FieldNumber[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2))
			let __goscriptShadow2 = r
			let __goscriptShadow3 = $.cloneArrayValue(__goscriptShadow2, "filedesc.fieldRange")
			switch ((true as boolean)) {
				case !isValidFieldNumber(fieldRange_Start(__goscriptShadow3), isMessageSet):
				{
					return errors.New("invalid field number: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(fieldRange_Start(__goscriptShadow3), "protowire.Number", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic5())]))
					break
				}
				case !isValidFieldNumber(fieldRange_End(__goscriptShadow3), isMessageSet):
				{
					return errors.New("invalid field number: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(fieldRange_End(__goscriptShadow3), "protowire.Number", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic5())]))
					break
				}
				case !(fieldRange_Start(__goscriptShadow3) <= fieldRange_End(__goscriptShadow3)):
				{
					return errors.New("invalid range: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(__goscriptShadow3, "filedesc.fieldRange", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11())]))
					break
				}
				case !(fieldRange_End(rp) < fieldRange_Start(__goscriptShadow3)) && (i > 0):
				{
					return errors.New("overlapping ranges: %v with %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(rp, "filedesc.fieldRange", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()), $.namedValueInterfaceValue<any>(__goscriptShadow3, "filedesc.fieldRange", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11())]))
					break
				}
			}
			rp = $.cloneArrayValue(__goscriptShadow3, "filedesc.fieldRange")
		}
		return null
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.FieldRanges", /* @__PURE__ */ $.pointerType("filedesc.FieldRanges")))
	}

	public Get(i: number): protoreflect.FieldNumber[] {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
		return $.cloneArrayValue($.arrayIndex($.pointerValue<FieldRanges>(p).List!, i), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2))
	}

	public async Has(n: protoreflect.FieldNumber): globalThis.Promise<boolean> {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
		for (let ls: $.Slice<protoreflect.FieldNumber[]> = $.pointerValue<FieldRanges>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as FieldRanges).lazyInit() : FieldRanges.prototype.lazyInit.call(p))).sorted; $.sliceLen(ls) > 0; ) {
			let i: number = globalThis.Math.trunc($.sliceLen(ls) / 2)
			{
				let r = $.cloneArrayValue($.arrayIndex(ls!, i), "filedesc.fieldRange")
				switch ((true as boolean)) {
					case n < fieldRange_Start(r):
					{
						ls = $.goSlice(ls, undefined, i)
						break
					}
					case n > fieldRange_End(r):
					{
						ls = $.goSlice(ls, i + 1, undefined)
						break
					}
					default:
					{
						return true
						break
					}
				}
			}
		}
		return false
	}

	public Len(): number {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
		return $.sliceLen($.pointerValue<FieldRanges>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
	}

	public async lazyInit(): globalThis.Promise<FieldRanges | $.VarRef<FieldRanges> | null> {
		const p: FieldRanges | $.VarRef<FieldRanges> | null = this;
		const p$: FieldRanges = p == null ? $.pointerTarget<FieldRanges>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<FieldRanges>(p)
		await (p$ as FieldRanges).once.Do($.functionValue((): void => {
			;(p$ as FieldRanges).sorted = $.appendSlice((p$ as FieldRanges).sorted, (p$ as FieldRanges).List)
			sort.Slice($.interfaceValue((p$ as FieldRanges).sorted, "[][2]protowire.Number", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2))), $.functionValue((i: number, j: number): boolean => {
				return $.arrayIndex($.arrayIndex((p$ as FieldRanges).sorted!, i), 0) < $.arrayIndex($.arrayIndex((p$ as FieldRanges).sorted!, j), 0)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.FieldRanges",
		() => new FieldRanges(),
		() => [$.methodSignature("CheckOverlap", [["q", /* @__PURE__ */ $.pointerType("filedesc.FieldRanges")]], ["error"], true), $.methodSignature("CheckValid", [["isMessageSet", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2)], true), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.FieldRanges")], true)],
		FieldRanges,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2)), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("sorted", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2)), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class FieldNumbers {
	public get List(): $.Slice<protoreflect.FieldNumber> {
		return this._fields.List
	}

	public set List(value: $.Slice<protoreflect.FieldNumber>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get has(): globalThis.Map<protoreflect.FieldNumber, {}> | null {
		return this._fields.has
	}

	public set has(value: globalThis.Map<protoreflect.FieldNumber, {}> | null) {
		this._fields.has = value
	}

	public _fields: {
		List: $.Slice<protoreflect.FieldNumber>
		once: sync.Once
		has: globalThis.Map<protoreflect.FieldNumber, {}> | null
	}

	constructor(init?: Partial<{List?: $.Slice<protoreflect.FieldNumber>, once?: sync.Once, has?: globalThis.Map<protoreflect.FieldNumber, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<protoreflect.FieldNumber>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			has: init?.has ?? (null! as globalThis.Map<protoreflect.FieldNumber, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldNumbers {
		return new FieldNumbers(this, true)
	}

	public __goscriptAssign(source: FieldNumbers): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.has = values.has
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: FieldNumbers | $.VarRef<FieldNumbers> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.FieldNumbers", /* @__PURE__ */ $.pointerType("filedesc.FieldNumbers")))
	}

	public Get(i: number): protoreflect.FieldNumber {
		const p: FieldNumbers | $.VarRef<FieldNumbers> | null = this;
		return $.arrayIndex($.pointerValue<FieldNumbers>(p).List!, i)
	}

	public async Has(n: protoreflect.FieldNumber): globalThis.Promise<boolean> {
		const p: FieldNumbers | $.VarRef<FieldNumbers> | null = this;
		const p$: FieldNumbers = p == null ? $.pointerTarget<FieldNumbers>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<FieldNumbers>(p)
		await (p$ as FieldNumbers).once.Do($.functionValue((): void => {
			if ($.sliceLen((p$ as FieldNumbers).List) > 0) {
				;(p$ as FieldNumbers).has = $.makeMap<protoreflect.FieldNumber, {}>()
				for (let __goscriptRangeTarget3 = (p$ as FieldNumbers).List, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
					let n = $.int((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as protoreflect.FieldNumber), 32)
					$.mapSet((p$ as FieldNumbers).has, n, {})
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		let [, ok] = $.mapGet<protoreflect.FieldNumber, {}, {}>((p$ as FieldNumbers).has, n, {})
		return ok
	}

	public Len(): number {
		const p: FieldNumbers | $.VarRef<FieldNumbers> | null = this;
		return $.sliceLen($.pointerValue<FieldNumbers>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: FieldNumbers | $.VarRef<FieldNumbers> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"filedesc.FieldNumbers",
		() => new FieldNumbers(),
		() => [$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")], true), $.methodSignature("Has", [["n", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true)],
		FieldNumbers,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32", "protowire.Number")), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("has", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class OneofFields {
	public get List(): $.Slice<protoreflect.FieldDescriptor | null> {
		return this._fields.List
	}

	public set List(value: $.Slice<protoreflect.FieldDescriptor | null>) {
		this._fields.List = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byName(): globalThis.Map<protoreflect.Name, protoreflect.FieldDescriptor | null> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<protoreflect.Name, protoreflect.FieldDescriptor | null> | null) {
		this._fields.byName = value
	}

	public get byJSON(): globalThis.Map<string, protoreflect.FieldDescriptor | null> | null {
		return this._fields.byJSON
	}

	public set byJSON(value: globalThis.Map<string, protoreflect.FieldDescriptor | null> | null) {
		this._fields.byJSON = value
	}

	public get byText(): globalThis.Map<string, protoreflect.FieldDescriptor | null> | null {
		return this._fields.byText
	}

	public set byText(value: globalThis.Map<string, protoreflect.FieldDescriptor | null> | null) {
		this._fields.byText = value
	}

	public get byNum(): globalThis.Map<protoreflect.FieldNumber, protoreflect.FieldDescriptor | null> | null {
		return this._fields.byNum
	}

	public set byNum(value: globalThis.Map<protoreflect.FieldNumber, protoreflect.FieldDescriptor | null> | null) {
		this._fields.byNum = value
	}

	public _fields: {
		List: $.Slice<protoreflect.FieldDescriptor | null>
		once: sync.Once
		byName: globalThis.Map<protoreflect.Name, protoreflect.FieldDescriptor | null> | null
		byJSON: globalThis.Map<string, protoreflect.FieldDescriptor | null> | null
		byText: globalThis.Map<string, protoreflect.FieldDescriptor | null> | null
		byNum: globalThis.Map<protoreflect.FieldNumber, protoreflect.FieldDescriptor | null> | null
	}

	constructor(init?: Partial<{List?: $.Slice<protoreflect.FieldDescriptor | null>, once?: sync.Once, byName?: globalThis.Map<protoreflect.Name, protoreflect.FieldDescriptor | null> | null, byJSON?: globalThis.Map<string, protoreflect.FieldDescriptor | null> | null, byText?: globalThis.Map<string, protoreflect.FieldDescriptor | null> | null, byNum?: globalThis.Map<protoreflect.FieldNumber, protoreflect.FieldDescriptor | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<protoreflect.FieldDescriptor | null>),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byName: init?.byName ?? (null! as globalThis.Map<protoreflect.Name, protoreflect.FieldDescriptor | null> | null),
			byJSON: init?.byJSON ?? (null! as globalThis.Map<string, protoreflect.FieldDescriptor | null> | null),
			byText: init?.byText ?? (null! as globalThis.Map<string, protoreflect.FieldDescriptor | null> | null),
			byNum: init?.byNum ?? (null! as globalThis.Map<protoreflect.FieldNumber, protoreflect.FieldDescriptor | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OneofFields {
		return new OneofFields(this, true)
	}

	public __goscriptAssign(source: OneofFields): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		$.assignStruct(target.once, values.once)
		target.byName = values.byName
		target.byJSON = values.byJSON
		target.byText = values.byText
		target.byNum = values.byNum
	}

	public async ByJSONName(s: string): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		return $.mapGet<string, protoreflect.FieldDescriptor | null, protoreflect.FieldDescriptor | null>($.pointerValue<OneofFields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as OneofFields).lazyInit() : OneofFields.prototype.lazyInit.call(p))).byJSON, s, null)[0]
	}

	public async ByName(s: protoreflect.Name): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		return $.mapGet<protoreflect.Name, protoreflect.FieldDescriptor | null, protoreflect.FieldDescriptor | null>($.pointerValue<OneofFields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as OneofFields).lazyInit() : OneofFields.prototype.lazyInit.call(p))).byName, s, null)[0]
	}

	public async ByNumber(n: protoreflect.FieldNumber): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		return $.mapGet<protoreflect.FieldNumber, protoreflect.FieldDescriptor | null, protoreflect.FieldDescriptor | null>($.pointerValue<OneofFields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as OneofFields).lazyInit() : OneofFields.prototype.lazyInit.call(p))).byNum, n, null)[0]
	}

	public async ByTextName(s: string): globalThis.Promise<protoreflect.FieldDescriptor | null> {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		return $.mapGet<string, protoreflect.FieldDescriptor | null, protoreflect.FieldDescriptor | null>($.pointerValue<OneofFields>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as OneofFields).lazyInit() : OneofFields.prototype.lazyInit.call(p))).byText, s, null)[0]
	}

	public async Format(s: fmt.State | null, r: number): globalThis.Promise<void> {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		await descfmt.FormatList(s, r, $.interfaceValue<descfmt.list | null>(p, "*filedesc.OneofFields", /* @__PURE__ */ $.pointerType("filedesc.OneofFields")))
	}

	public Get(i: number): protoreflect.FieldDescriptor | null {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		return $.arrayIndex($.pointerValue<OneofFields>(p).List!, i)
	}

	public Len(): number {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		return $.sliceLen($.pointerValue<OneofFields>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
	}

	public async lazyInit(): globalThis.Promise<OneofFields | $.VarRef<OneofFields> | null> {
		const p: OneofFields | $.VarRef<OneofFields> | null = this;
		const p$: OneofFields = p == null ? $.pointerTarget<OneofFields>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<OneofFields>(p)
		await (p$ as OneofFields).once.Do($.functionValue(async (): globalThis.Promise<void> => {
			if ($.sliceLen((p$ as OneofFields).List) > 0) {
				;(p$ as OneofFields).byName = $.makeMap<protoreflect.Name, protoreflect.FieldDescriptor | null>();
				;(p$ as OneofFields).byJSON = $.makeMap<string, protoreflect.FieldDescriptor | null>();
				;(p$ as OneofFields).byText = $.makeMap<string, protoreflect.FieldDescriptor | null>();
				;(p$ as OneofFields).byNum = $.makeMap<protoreflect.FieldNumber, protoreflect.FieldDescriptor | null>()
				for (let __goscriptRangeTarget4 = (p$ as OneofFields).List, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
					let f = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as protoreflect.FieldDescriptor | null)
					// Field names and numbers are guaranteed to be unique.
					$.mapSet((p$ as OneofFields).byName, (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), f)
					$.mapSet((p$ as OneofFields).byJSON, (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).JSONName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), f)
					$.mapSet((p$ as OneofFields).byText, (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).TextName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), f)
					$.mapSet((p$ as OneofFields).byNum, (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(f)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), f)
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.OneofFields",
		() => new OneofFields(),
		() => [$.methodSignature("ByJSONName", [["s", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("ByName", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("ByNumber", [["n", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("ByTextName", [["s", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FieldDescriptor"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.OneofFields")], true)],
		OneofFields,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("protoreflect.FieldDescriptor"), [0], 0, true), /* @__PURE__ */ $.structField("once", "sync.Once", [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.Name"), "protoreflect.FieldDescriptor"), [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byJSON", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "protoreflect.FieldDescriptor"), [3], 48, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byText", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "protoreflect.FieldDescriptor"), [4], 56, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byNum", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), "protoreflect.FieldDescriptor"), [5], 64, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class SourceLocations {
	// List is a list of SourceLocations.
	// The SourceLocation.Next field does not need to be populated
	// as it will be lazily populated upon first need.
	public get List(): $.Slice<protoreflect.SourceLocation> {
		return this._fields.List
	}

	public set List(value: $.Slice<protoreflect.SourceLocation>) {
		this._fields.List = value
	}

	// File is the parent file descriptor that these locations are relative to.
	// If non-nil, ByDescriptor verifies that the provided descriptor
	// is a child of this file descriptor.
	public get File(): protoreflect.FileDescriptor | null {
		return this._fields.File
	}

	public set File(value: protoreflect.FileDescriptor | null) {
		this._fields.File = value
	}

	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get byPath(): globalThis.Map<pathKey, number> | null {
		return this._fields.byPath
	}

	public set byPath(value: globalThis.Map<pathKey, number> | null) {
		this._fields.byPath = value
	}

	public _fields: {
		List: $.Slice<protoreflect.SourceLocation>
		File: protoreflect.FileDescriptor | null
		once: sync.Once
		byPath: globalThis.Map<pathKey, number> | null
	}

	constructor(init?: Partial<{List?: $.Slice<protoreflect.SourceLocation>, File?: protoreflect.FileDescriptor | null, once?: sync.Once, byPath?: globalThis.Map<pathKey, number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			List: init?.List ?? (null! as $.Slice<protoreflect.SourceLocation>),
			File: init?.File ?? (null! as protoreflect.FileDescriptor | null),
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			byPath: init?.byPath ?? (null! as globalThis.Map<pathKey, number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SourceLocations {
		return new SourceLocations(this, true)
	}

	public __goscriptAssign(source: SourceLocations): void {
		const target = this._fields
		const values = source._fields
		target.List = values.List
		target.File = $.assignFieldValue(target.File, values.File, "protoreflect.FileDescriptor")
		$.assignStruct(target.once, values.once)
		target.byPath = values.byPath
	}

	public async ByDescriptor(desc: protoreflect.Descriptor | null): globalThis.Promise<protoreflect.SourceLocation> {
		const p: SourceLocations | $.VarRef<SourceLocations> | null = this;
		const p$: SourceLocations = p == null ? $.pointerTarget<SourceLocations>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<SourceLocations>(p)
		if ((((p$ as SourceLocations).File != null) && (desc != null)) && (!$.comparableEqual((p$ as SourceLocations).File, (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))) {
			return new protoreflect.SourceLocation(undefined, true)
		}
		let pathArr: number[] = $.arrayValue(globalThis.Array.from({ length: 16 }, () => 0))
		let path: $.Slice<number> = $.goSlice(pathArr, undefined, 0)
		while (true) {
			{
				const __goscriptTypeSwitchValue = desc
				switch (true) {
					case $.typeAssert<protoreflect.FileDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FileDescriptor").ok:
						{
							for (let __goscriptSliceWindow2 = $.sliceRange(path), i = 0, j = $.sliceLen(path) - 1; i < j; [i, j] = [i + 1, j - 1]) {
								let __goscriptAssign0_0: number = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] as number)
								let __goscriptAssign0_1: number = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number);
								;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = __goscriptAssign0_0;
								;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] = __goscriptAssign0_1
							}
							return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as SourceLocations).byKey(await newPathKey((path as protoreflect.SourcePath))) : SourceLocations.prototype.byKey.call(p, await newPathKey((path as protoreflect.SourcePath))))
						}
						break
					case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
						{
							path = $.appendOne(path, $.int($.int((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), 32))
							desc = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							{
								const __goscriptTypeSwitchValue = desc
								switch (true) {
									case $.typeAssert<protoreflect.FileDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FileDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.FileDescriptorProto_MessageType_field_number, 32), 32))
										}
										break
									case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.DescriptorProto_NestedType_field_number, 32), 32))
										}
										break
									default:
										{
											return new protoreflect.SourceLocation(undefined, true)
										}
										break
								}
							}
						}
						break
					case $.typeAssert<protoreflect.FieldDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FieldDescriptor").ok:
						{
							let isExtension = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>($.mustTypeAssert<protoreflect.FieldDescriptor | null>(desc, "protoreflect.FieldDescriptor")).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							path = $.appendOne(path, $.int($.int((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), 32))
							desc = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if (isExtension) {
								{
									const __goscriptTypeSwitchValue = desc
									switch (true) {
										case $.typeAssert<protoreflect.FileDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FileDescriptor").ok:
											{
												path = $.appendOne(path, $.int($.int(genid.FileDescriptorProto_Extension_field_number, 32), 32))
											}
											break
										case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
											{
												path = $.appendOne(path, $.int($.int(genid.DescriptorProto_Extension_field_number, 32), 32))
											}
											break
										default:
											{
												return new protoreflect.SourceLocation(undefined, true)
											}
											break
									}
								}
							} else {
								{
									const __goscriptTypeSwitchValue = desc
									switch (true) {
										case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
											{
												path = $.appendOne(path, $.int($.int(genid.DescriptorProto_Field_field_number, 32), 32))
											}
											break
										default:
											{
												return new protoreflect.SourceLocation(undefined, true)
											}
											break
									}
								}
							}
						}
						break
					case $.typeAssert<protoreflect.OneofDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.OneofDescriptor").ok:
						{
							path = $.appendOne(path, $.int($.int((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), 32))
							desc = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							{
								const __goscriptTypeSwitchValue = desc
								switch (true) {
									case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.DescriptorProto_OneofDecl_field_number, 32), 32))
										}
										break
									default:
										{
											return new protoreflect.SourceLocation(undefined, true)
										}
										break
								}
							}
						}
						break
					case $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").ok:
						{
							path = $.appendOne(path, $.int($.int((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), 32))
							desc = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							{
								const __goscriptTypeSwitchValue = desc
								switch (true) {
									case $.typeAssert<protoreflect.FileDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FileDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.FileDescriptorProto_EnumType_field_number, 32), 32))
										}
										break
									case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.DescriptorProto_EnumType_field_number, 32), 32))
										}
										break
									default:
										{
											return new protoreflect.SourceLocation(undefined, true)
										}
										break
								}
							}
						}
						break
					case $.typeAssert<protoreflect.EnumValueDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumValueDescriptor").ok:
						{
							path = $.appendOne(path, $.int($.int((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), 32))
							desc = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							{
								const __goscriptTypeSwitchValue = desc
								switch (true) {
									case $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.EnumDescriptorProto_Value_field_number, 32), 32))
										}
										break
									default:
										{
											return new protoreflect.SourceLocation(undefined, true)
										}
										break
								}
							}
						}
						break
					case $.typeAssert<protoreflect.ServiceDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.ServiceDescriptor").ok:
						{
							path = $.appendOne(path, $.int($.int((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), 32))
							desc = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							{
								const __goscriptTypeSwitchValue = desc
								switch (true) {
									case $.typeAssert<protoreflect.FileDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FileDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.FileDescriptorProto_Service_field_number, 32), 32))
										}
										break
									default:
										{
											return new protoreflect.SourceLocation(undefined, true)
										}
										break
								}
							}
						}
						break
					case $.typeAssert<protoreflect.MethodDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MethodDescriptor").ok:
						{
							path = $.appendOne(path, $.int($.int((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), 32))
							desc = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).Parent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							{
								const __goscriptTypeSwitchValue = desc
								switch (true) {
									case $.typeAssert<protoreflect.ServiceDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.ServiceDescriptor").ok:
										{
											path = $.appendOne(path, $.int($.int(genid.ServiceDescriptorProto_Method_field_number, 32), 32))
										}
										break
									default:
										{
											return new protoreflect.SourceLocation(undefined, true)
										}
										break
								}
							}
						}
						break
					default:
						{
							return new protoreflect.SourceLocation(undefined, true)
						}
						break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ByPath(path: protoreflect.SourcePath): globalThis.Promise<protoreflect.SourceLocation> {
		const p: SourceLocations | $.VarRef<SourceLocations> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as SourceLocations).byKey(await newPathKey((path as protoreflect.SourcePath))) : SourceLocations.prototype.byKey.call(p, await newPathKey((path as protoreflect.SourcePath))))
	}

	public async Get(i: number): globalThis.Promise<protoreflect.SourceLocation> {
		const p: SourceLocations | $.VarRef<SourceLocations> | null = this;
		return ($.arrayIndex($.pointerValue<SourceLocations>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as SourceLocations).lazyInit() : SourceLocations.prototype.lazyInit.call(p))).List!, i)).clone()
	}

	public Len(): number {
		const p: SourceLocations | $.VarRef<SourceLocations> | null = this;
		return $.sliceLen($.pointerValue<SourceLocations>(p).List)
	}

	public ProtoInternal(_p0: pragma.DoNotImplement | null): void {
		const p: SourceLocations | $.VarRef<SourceLocations> | null = this;
	}

	public async byKey(k: pathKey): globalThis.Promise<protoreflect.SourceLocation> {
		const p: SourceLocations | $.VarRef<SourceLocations> | null = this;
		{
			let [i, ok] = $.mapGet<pathKey, number, number>($.pointerValue<SourceLocations>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as SourceLocations).lazyInit() : SourceLocations.prototype.lazyInit.call(p))).byPath, k, 0)
			if (ok) {
				return ($.arrayIndex($.pointerValue<SourceLocations>(p).List!, i)).clone()
			}
		}
		return new protoreflect.SourceLocation(undefined, true)
	}

	public async lazyInit(): globalThis.Promise<SourceLocations | $.VarRef<SourceLocations> | null> {
		const p: SourceLocations | $.VarRef<SourceLocations> | null = this;
		const p$: SourceLocations = p == null ? $.pointerTarget<SourceLocations>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<SourceLocations>(p)
		await (p$ as SourceLocations).once.Do($.functionValue(async (): globalThis.Promise<void> => {
			if ($.sliceLen((p$ as SourceLocations).List) > 0) {
				// Collect all the indexes for a given path.
				let pathIdxs: globalThis.Map<pathKey, $.Slice<number>> | null = $.makeMap<pathKey, $.Slice<number>>()
				for (let __goscriptRangeTarget5 = (p$ as SourceLocations).List, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
					let l = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as protoreflect.SourceLocation)).clone()
					let k = await newPathKey((l.Path as protoreflect.SourcePath))
					$.mapSet(pathIdxs, (k).clone(), $.appendOne($.mapGet<pathKey, $.Slice<number>, $.Slice<number>>(pathIdxs, k, null)[0], i))
				}

				// Update the next index for all locations.
				;(p$ as SourceLocations).byPath = $.makeMap<pathKey, number>()
				for (let [k, idxs] of pathIdxs?.entries() ?? []) {
					for (let __goscriptSliceWindow3 = $.sliceRange(idxs), i = 0; i < (__goscriptSliceWindow3.length - 1); i++) {
						$.arrayIndex((p$ as SourceLocations).List!, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as number)).Next = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i + 1)] as number)
					}
					$.arrayIndex((p$ as SourceLocations).List!, $.arrayIndex(idxs!, $.sliceLen(idxs) - 1)).Next = 0
					$.mapSet((p$ as SourceLocations).byPath, (k).clone(), $.arrayIndex(idxs!, 0))
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return p
	}

	static __typeInfo = $.registerStructType(
		"filedesc.SourceLocations",
		() => new SourceLocations(),
		() => [$.methodSignature("ByDescriptor", [["desc", "protoreflect.Descriptor"]], ["protoreflect.SourceLocation"], true), $.methodSignature("ByPath", [["path", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.SourcePath")]], ["protoreflect.SourceLocation"], true), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.SourceLocation"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"], [], true), $.methodSignature("byKey", [["k", "filedesc.pathKey"]], ["protoreflect.SourceLocation"], true), $.methodSignature("lazyInit", [], [/* @__PURE__ */ $.pointerType("filedesc.SourceLocations")], true)],
		SourceLocations,
		() => [/* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.sliceType("protoreflect.SourceLocation"), [0], 0, true), /* @__PURE__ */ $.structField("File", "protoreflect.FileDescriptor", [1], 24, true), /* @__PURE__ */ $.structField("once", "sync.Once", [2], 40, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("byPath", /* @__PURE__ */ $.mapType("filedesc.pathKey", /* @__PURE__ */ $.basicType("int")), [3], 56, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export class pathKey {
	public get arr(): Uint8Array {
		return this._fields.arr
	}

	public set arr(value: Uint8Array) {
		this._fields.arr = value
	}

	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public _fields: {
		arr: Uint8Array
		str: string
	}

	constructor(init?: Partial<{arr?: Uint8Array, str?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			arr: init?.arr !== undefined ? $.cloneArrayValue(init.arr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16)),
			str: init?.str ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pathKey {
		return new pathKey(this, true)
	}

	public __goscriptAssign(source: pathKey): void {
		const target = this._fields
		const values = source._fields
		target.arr = $.assignFieldValue(target.arr, values.arr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		target.str = values.str
	}

	static __typeInfo = $.registerStructType(
		"filedesc.pathKey",
		() => new pathKey(),
		() => [],
		pathKey,
		() => [/* @__PURE__ */ $.structField("arr", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export function FileImports_Len(p: $.VarRef<FileImports> | null): number {
	return $.sliceLen(($.pointerValue<FileImports>(p) as FileImports))
}

export function FileImports_Get(p: $.VarRef<FileImports> | null, i: number): protoreflect.FileImport {
	return ($.arrayIndex(($.pointerValue<FileImports>(p))!, i)).clone()
}

export async function FileImports_Format(p: $.VarRef<FileImports> | null, s: fmt.State | null, r: number): globalThis.Promise<void> {
	await descfmt.FormatList(s, r, $.namedValueInterfaceValue<descfmt.list | null>(p, "*filedesc.FileImports", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export function FileImports_ProtoInternal(p: $.VarRef<FileImports> | null, _p0: pragma.DoNotImplement | null): void {
}

export function enumRange_Start(r: enumRange): protoreflect.EnumNumber {
	return $.arrayIndex(r, 0)
}

export function enumRange_End(r: enumRange): protoreflect.EnumNumber {
	return $.arrayIndex(r, 1)
}

export async function enumRange_String(r: enumRange): globalThis.Promise<string> {
	if (enumRange_Start(r) == enumRange_End(r)) {
		return fmt.Sprintf("%d", $.namedValueInterfaceValue<any>(enumRange_Start(r), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")))
	}
	return fmt.Sprintf("%d to %d", $.namedValueInterfaceValue<any>(enumRange_Start(r), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")), $.namedValueInterfaceValue<any>(enumRange_End(r), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")))
}

export function isValidFieldNumber(n: protoreflect.FieldNumber, isMessageSet: boolean): boolean {
	return (1 <= n) && ((n <= 536870911) || isMessageSet)
}

export function fieldRange_Start(r: fieldRange): protoreflect.FieldNumber {
	return $.arrayIndex(r, 0)
}

export function fieldRange_End(r: fieldRange): protoreflect.FieldNumber {
	return $.int((($.arrayIndex(r, 1) - 1) | 0), 32)
}

export async function fieldRange_String(r: fieldRange): globalThis.Promise<string> {
	if (fieldRange_Start(r) == fieldRange_End(r)) {
		return fmt.Sprintf("%d", $.namedValueInterfaceValue<any>(fieldRange_Start(r), "protowire.Number", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic5()))
	}
	return fmt.Sprintf("%d to %d", $.namedValueInterfaceValue<any>(fieldRange_Start(r), "protowire.Number", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic5()), $.namedValueInterfaceValue<any>(fieldRange_End(r), "protowire.Number", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic5()))
}

export async function newPathKey(p: protoreflect.SourcePath): globalThis.Promise<pathKey> {
	let k: pathKey = new pathKey(undefined, true)
	if ($.sliceLen((p as protoreflect.SourcePath)) < 16) {
		for (let __goscriptRangeTarget6 = p, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
			let ps = $.int((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + i] as number), 32)
			if ((ps < 0) || (255 <= ps)) {
				return (await (async () => { const __goscriptLiteralField0 = await protoreflect.SourcePath_String(p); return new pathKey({str: __goscriptLiteralField0}, true) })())
			}
			k.arr[i] = $.uint(ps, 8)
		}
		k.arr[$.len(k.arr) - 1] = $.uint($.sliceLen((p as protoreflect.SourcePath)), 8)
		return (k).clone()
	}
	return (await (async () => { const __goscriptLiteralField1 = await protoreflect.SourcePath_String(p); return new pathKey({str: __goscriptLiteralField1}, true) })())
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Format: (receiver: any, ...args: any[]) => (FileImports_Format as any)(receiver, ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (FileImports_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (FileImports_Len as any)(receiver, ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (FileImports_ProtoInternal as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("protoreflect.FileImport", "filedesc.FileImports")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Format", [["s", "fmt.State"], ["r", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Get", [["i", /* @__PURE__ */ $.basicType("int")]], ["protoreflect.FileImport"]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.Name"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({End: (receiver: any, ...args: any[]) => (enumRange_End as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Start: (receiver: any, ...args: any[]) => (enumRange_Start as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (enumRange_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ("filedesc.enumRange")
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("End", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Start", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({End: (receiver: any, ...args: any[]) => (fieldRange_End as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Start: (receiver: any, ...args: any[]) => (fieldRange_Start as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (fieldRange_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ("filedesc.fieldRange")
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("End", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("Start", [], [/* @__PURE__ */ $.basicType("int32", "protowire.Number")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptAwait: any
