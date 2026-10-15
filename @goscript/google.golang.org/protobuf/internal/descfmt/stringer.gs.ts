// Generated file based on stringer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as detrand from "@goscript/google.golang.org/protobuf/internal/detrand/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/protobuf/internal/detrand/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/descfmt", ["descfmt.list", "descfmt.methodAndName", "descfmt.records"])

export type list = {
	Len(): number
	ProtoInternal(_p0: pragma.DoNotImplement | null): void
}

$.registerInterfaceType(
	"descfmt.list",
	null,
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"])]
);

export class methodAndName {
	public get method(): reflect.Value {
		return this._fields.method
	}

	public set method(value: reflect.Value) {
		this._fields.method = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public _fields: {
		method: reflect.Value
		name: string
	}

	constructor(init?: Partial<{method?: reflect.Value, name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			method: init?.method ? $.markAsStructValue($.cloneStructValue(init.method)) : $.markAsStructValue(new reflect.Value()),
			name: init?.name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): methodAndName {
		return new methodAndName(this, true)
	}

	public __goscriptAssign(source: methodAndName): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.method, values.method)
		target.name = values.name
	}

	static __typeInfo = $.registerStructType(
		"descfmt.methodAndName",
		() => new methodAndName(),
		() => [],
		methodAndName,
		() => [/* @__PURE__ */ $.structField("method", "reflect.Value", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/descfmt" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/descfmt" })]
	)
}

export class records {
	public get recs(): $.Slice<string[]> {
		return this._fields.recs
	}

	public set recs(value: $.Slice<string[]>) {
		this._fields.recs = value
	}

	public get allowMulti(): boolean {
		return this._fields.allowMulti
	}

	public set allowMulti(value: boolean) {
		this._fields.allowMulti = value
	}

	// record is a function that will be called for every Append() or
	// AppendRecs() call, to be used for testing with the
	// InternalFormatDescOptForTesting function.
	public get record(): ((_p0: string) => void) | null {
		return this._fields.record
	}

	public set record(value: ((_p0: string) => void) | null) {
		this._fields.record = value
	}

	public _fields: {
		recs: $.Slice<string[]>
		allowMulti: boolean
		record: ((_p0: string) => void) | null
	}

	constructor(init?: Partial<{recs?: $.Slice<string[]>, allowMulti?: boolean, record?: ((_p0: string) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			recs: init?.recs ?? (null! as $.Slice<string[]>),
			allowMulti: init?.allowMulti ?? (false as boolean),
			record: init?.record ?? (null! as ((_p0: string) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): records {
		return new records(this, true)
	}

	public __goscriptAssign(source: records): void {
		const target = this._fields
		const values = source._fields
		target.recs = values.recs
		target.allowMulti = values.allowMulti
		target.record = values.record
	}

	public async Append(v: reflect.Value, accessors: $.Slice<methodAndName>): globalThis.Promise<void> {
		let rs: records | $.VarRef<records> | null = this;
		const rs$: records = rs == null ? $.pointerTarget<records>(rs) : (rs as any).__isVarRef === true ? (rs as any).value : (rs as any).__goValue === undefined ? (rs as any) : $.pointerTarget<records>(rs)
		for (let __goscriptRangeTarget1 = accessors, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let a = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as methodAndName)).clone()
			if ((rs$ as records).record != null) {
				void (__goscriptAwait = (rs$ as records).record!(a.name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			let rv: reflect.Value = $.markAsStructValue(new reflect.Value())
			if ($.markAsStructValue($.cloneStructValue(a.method)).IsValid()) {
				rv = $.assignStruct(rv, $.arrayIndex((await $.markAsStructValue($.cloneStructValue(a.method)).Call(null))!, 0))
			}
			if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 25) && !$.markAsStructValue($.cloneStructValue(rv)).IsValid()) {
				rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue(v)).FieldByName(a.name))
			}
			if (!$.markAsStructValue($.cloneStructValue(rv)).IsValid()) {
				$.panic(await fmt.Sprintf("unknown accessor: %v.%s", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), a.name))
			}
			{
				let [, ok] = $.typeAssertTuple<protoreflect.Value>($.markAsStructValue($.cloneStructValue(rv)).Interface(), "protoreflect.Value")
				if (ok) {
					rv = $.assignStruct(rv, $.arrayIndex((await $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Interface"))).Call(null))!, 0))
					if (!$.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
						rv = $.assignStruct(rv, $.markAsStructValue($.cloneStructValue(rv)).Elem())
					}
				}
			}

			// Ignore zero values.
			let isZero: boolean = false
			switch ($.markAsStructValue($.cloneStructValue(rv)).Kind()) {
				case reflect.Interface:
				case reflect.Slice:
				{
					isZero = $.markAsStructValue($.cloneStructValue(rv)).IsNil()
					break
				}
				case reflect.Bool:
				{
					isZero = $.markAsStructValue($.cloneStructValue(rv)).Bool() == false
					break
				}
				case reflect.Int:
				case reflect.Int8:
				case reflect.Int16:
				case reflect.Int32:
				case reflect.Int64:
				{
					isZero = $.markAsStructValue($.cloneStructValue(rv)).Int() == 0n
					break
				}
				case reflect.Uint:
				case reflect.Uint8:
				case reflect.Uint16:
				case reflect.Uint32:
				case reflect.Uint64:
				{
					isZero = $.markAsStructValue($.cloneStructValue(rv)).Uint() == 0n
					break
				}
				case reflect.String:
				{
					isZero = $.stringEqual($.markAsStructValue($.cloneStructValue(rv)).String(), "")
					break
				}
			}
			{
				let [n, ok] = $.typeAssertTuple<list | null>($.markAsStructValue($.cloneStructValue(rv)).Interface(), "descfmt.list")
				if (ok) {
					isZero = (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<list, null>) : $.pointerValue<Exclude<list, null>>(n)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0
				}
			}
			if (isZero) {
				continue
			}

			// Format the value.
			let s: string = ""
			let __goscriptShadow0 = $.markAsStructValue($.cloneStructValue(rv)).Interface()
			{
				const __goscriptTypeSwitchValue = __goscriptShadow0
				switch (true) {
					case $.typeAssert<list | null>(__goscriptTypeSwitchValue, "descfmt.list").ok:
						{
							let v: list | null = $.typeAssert<list | null>(__goscriptTypeSwitchValue, "descfmt.list").value
							s = await formatListOpt(v, false, (rs$ as records).allowMulti)
						}
						break
					case $.is(__goscriptTypeSwitchValue, "protoreflect.FieldDescriptor") || $.is(__goscriptTypeSwitchValue, "protoreflect.OneofDescriptor") || $.is(__goscriptTypeSwitchValue, "protoreflect.EnumValueDescriptor") || $.is(__goscriptTypeSwitchValue, "protoreflect.MethodDescriptor"):
						{
							let v = __goscriptTypeSwitchValue
							s = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Descriptor, null>>($.mustTypeAssert<protoreflect.Descriptor | null>(v, "protoreflect.Descriptor")).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
					case $.typeAssert<protoreflect.Descriptor | null>(__goscriptTypeSwitchValue, "protoreflect.Descriptor").ok:
						{
							let v: protoreflect.Descriptor | null = $.typeAssert<protoreflect.Descriptor | null>(__goscriptTypeSwitchValue, "protoreflect.Descriptor").value
							s = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(v)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
					case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
						{
							let v: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
							s = strconv.Quote(v)
						}
						break
					case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).ok:
						{
							let v: $.Slice<number> = $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).value
							s = await fmt.Sprintf("%q", $.interfaceValue(v, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						}
						break
					default:
						{
							let v: any = __goscriptTypeSwitchValue
							s = await fmt.Sprint(v)
						}
						break
				}
			}
			;(rs$ as records).recs = $.appendOne((rs$ as records).recs, $.arrayValue([a.name, s]))
		}
	}

	public async AppendRecs(fieldName: string, newRecs: string[]): globalThis.Promise<void> {
		let rs: records | $.VarRef<records> | null = this;
		const rs$: records = rs == null ? $.pointerTarget<records>(rs) : (rs as any).__isVarRef === true ? (rs as any).value : (rs as any).__goValue === undefined ? (rs as any) : $.pointerTarget<records>(rs)
		if ((rs$ as records).record != null) {
			void (__goscriptAwait = (rs$ as records).record!(fieldName), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(rs$ as records).recs = $.appendOne((rs$ as records).recs, $.cloneArrayValue(newRecs, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 2)))
	}

	public async Join(): globalThis.Promise<string> {
		const rs: records | $.VarRef<records> | null = this;
		const rs$: records = rs == null ? $.pointerTarget<records>(rs) : (rs as any).__isVarRef === true ? (rs as any).value : (rs as any).__goValue === undefined ? (rs as any) : $.pointerTarget<records>(rs)
		let ss: $.Slice<string> = null! as $.Slice<string>

		// In single line mode, simply join all records with commas.
		if (!(rs$ as records).allowMulti) {
			for (let __goscriptRangeTarget2 = (rs$ as records).recs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let r = $.cloneArrayValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 2))
				ss = $.appendOne(ss, $.concatString(($.concatString($.arrayIndex(r, 0), formatColon(0))), $.arrayIndex(r, 1)))
			}
			return joinStrings(ss, false)
		}

		// In allowMulti line mode, align single line records for more readable output.
		let maxLen: number = 0
		let flush: ((i: number) => void) | null = $.functionValue((i: number): void => {
			for (let __goscriptRangeTarget3 = $.goSlice((rs$ as records).recs, $.sliceLen(ss), i), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let r = $.cloneArrayValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 2))
				ss = $.appendOne(ss, $.concatString(($.concatString($.arrayIndex(r, 0), formatColon(maxLen - $.stringLen($.arrayIndex(r, 0))))), $.arrayIndex(r, 1)))
			}
			maxLen = 0
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))
		for (let __goscriptRangeTarget4 = (rs$ as records).recs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let r = $.cloneArrayValue((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as string[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 2))
			{
				let isMulti = strings.Contains($.arrayIndex(r, 1), "\n")
				if (isMulti) {
					void (__goscriptAwait = flush!(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					ss = $.appendOne(ss, $.concatString(($.concatString($.arrayIndex(r, 0), formatColon(0))), strings.Join(strings.Split($.arrayIndex(r, 1), "\n"), "\n\t")))
				} else {
					if (maxLen < $.stringLen($.arrayIndex(r, 0))) {
						maxLen = $.stringLen($.arrayIndex(r, 0))
					}
				}
			}
		}
		void (__goscriptAwait = flush!($.sliceLen((rs$ as records).recs)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return joinStrings(ss, true)
	}

	static __typeInfo = $.registerStructType(
		"descfmt.records",
		() => new records(),
		() => [$.methodSignature("Append", [["v", "reflect.Value"], ["accessors", /* @__PURE__ */ $.sliceType("descfmt.methodAndName")]], [], true), $.methodSignature("AppendRecs", [["fieldName", /* @__PURE__ */ $.basicType("string")], ["newRecs", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 2)]], [], true), $.methodSignature("Join", [], [/* @__PURE__ */ $.basicType("string")], true)],
		records,
		() => [/* @__PURE__ */ $.structField("recs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("string"), 2)), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/descfmt" }), /* @__PURE__ */ $.structField("allowMulti", /* @__PURE__ */ $.basicType("bool"), [1], 24, false, { pkgPath: "google.golang.org/protobuf/internal/descfmt" }), /* @__PURE__ */ $.structField("record", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [2], 32, false, { pkgPath: "google.golang.org/protobuf/internal/descfmt" })]
	)
}

export async function FormatList(s: fmt.State | null, r: number, vs: list | null): globalThis.Promise<void> {
	await io.WriteString($.pointerValueOrNil((s as io.Writer | null))!, await formatListOpt(vs, true, (r == 118) && ((__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(35), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))))
}

export async function formatListOpt(vs: list | null, isRoot: boolean, allowMulti: boolean): globalThis.Promise<string> {
	let start = "["
	let end = "]"
	if (isRoot) {
		let name: string = ""
		{
			const __goscriptTypeSwitchValue = vs
			switch (true) {
				case $.typeAssert<protoreflect.Names | null>(__goscriptTypeSwitchValue, "protoreflect.Names").ok:
					{
						name = "Names"
					}
					break
				case $.typeAssert<protoreflect.FieldNumbers | null>(__goscriptTypeSwitchValue, "protoreflect.FieldNumbers").ok:
					{
						name = "FieldNumbers"
					}
					break
				case $.typeAssert<protoreflect.FieldRanges | null>(__goscriptTypeSwitchValue, "protoreflect.FieldRanges").ok:
					{
						name = "FieldRanges"
					}
					break
				case $.typeAssert<protoreflect.EnumRanges | null>(__goscriptTypeSwitchValue, "protoreflect.EnumRanges").ok:
					{
						name = "EnumRanges"
					}
					break
				case $.typeAssert<protoreflect.FileImports | null>(__goscriptTypeSwitchValue, "protoreflect.FileImports").ok:
					{
						name = "FileImports"
					}
					break
				case $.typeAssert<protoreflect.Descriptor | null>(__goscriptTypeSwitchValue, "protoreflect.Descriptor").ok:
					{
						name = $.concatString((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((vs as any)))).MethodByName("Get"))).Type()).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "s")
					}
					break
				default:
					{
						name = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((vs as any)))).Elem())).Type()).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
			}
		}
		let __goscriptAssign0_0: string = $.concatString(name, "{")
		let __goscriptAssign0_1: string = "}"
		start = __goscriptAssign0_0
		end = __goscriptAssign0_1
	}

	let ss: $.Slice<string> = null! as $.Slice<string>
	{
		const __goscriptTypeSwitchValue = vs
		switch (true) {
			case $.typeAssert<protoreflect.Names | null>(__goscriptTypeSwitchValue, "protoreflect.Names").ok:
				{
					let vs: protoreflect.Names | null = $.typeAssert<protoreflect.Names | null>(__goscriptTypeSwitchValue, "protoreflect.Names").value
					for (let i = 0; i < (__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.Names, null>) : $.pointerValue<Exclude<protoreflect.Names, null>>(vs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						ss = $.appendOne(ss, await fmt.Sprint($.namedValueInterfaceValue<any>((__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.Names, null>) : $.pointerValue<Exclude<protoreflect.Names, null>>(vs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
					}
					return $.concatString(($.concatString(start, joinStrings(ss, false))), end)
				}
				break
			case $.typeAssert<protoreflect.FieldNumbers | null>(__goscriptTypeSwitchValue, "protoreflect.FieldNumbers").ok:
				{
					let vs: protoreflect.FieldNumbers | null = $.typeAssert<protoreflect.FieldNumbers | null>(__goscriptTypeSwitchValue, "protoreflect.FieldNumbers").value
					for (let i = 0; i < (__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.FieldNumbers, null>) : $.pointerValue<Exclude<protoreflect.FieldNumbers, null>>(vs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						ss = $.appendOne(ss, await fmt.Sprint($.namedValueInterfaceValue<any>((__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.FieldNumbers, null>) : $.pointerValue<Exclude<protoreflect.FieldNumbers, null>>(vs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
					}
					return $.concatString(($.concatString(start, joinStrings(ss, false))), end)
				}
				break
			case $.typeAssert<protoreflect.FieldRanges | null>(__goscriptTypeSwitchValue, "protoreflect.FieldRanges").ok:
				{
					let vs: protoreflect.FieldRanges | null = $.typeAssert<protoreflect.FieldRanges | null>(__goscriptTypeSwitchValue, "protoreflect.FieldRanges").value
					for (let i = 0; i < (__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.FieldRanges, null>) : $.pointerValue<Exclude<protoreflect.FieldRanges, null>>(vs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						let r = $.cloneArrayValue(((__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.FieldRanges, null>) : $.pointerValue<Exclude<protoreflect.FieldRanges, null>>(vs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FieldNumber[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), 2))
						if ($.int(((($.arrayIndex(r, 0) + 1) | 0)), 32) == $.arrayIndex(r, 1)) {
							ss = $.appendOne(ss, await fmt.Sprintf("%d", $.namedValueInterfaceValue<any>($.arrayIndex(r, 0), "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
						} else {
							ss = $.appendOne(ss, await fmt.Sprintf("%d:%d", $.namedValueInterfaceValue<any>($.arrayIndex(r, 0), "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), $.namedValueInterfaceValue<any>($.arrayIndex(r, 1), "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
						}
					}
					return $.concatString(($.concatString(start, joinStrings(ss, false))), end)
				}
				break
			case $.typeAssert<protoreflect.EnumRanges | null>(__goscriptTypeSwitchValue, "protoreflect.EnumRanges").ok:
				{
					let vs: protoreflect.EnumRanges | null = $.typeAssert<protoreflect.EnumRanges | null>(__goscriptTypeSwitchValue, "protoreflect.EnumRanges").value
					for (let i = 0; i < (__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.EnumRanges, null>) : $.pointerValue<Exclude<protoreflect.EnumRanges, null>>(vs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						let r = $.cloneArrayValue(((__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.EnumRanges, null>) : $.pointerValue<Exclude<protoreflect.EnumRanges, null>>(vs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.EnumNumber[]), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"), 2))
						if ($.arrayIndex(r, 0) == $.arrayIndex(r, 1)) {
							ss = $.appendOne(ss, await fmt.Sprintf("%d", $.namedValueInterfaceValue<any>($.arrayIndex(r, 0), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))))
						} else {
							ss = $.appendOne(ss, await fmt.Sprintf("%d:%d", $.namedValueInterfaceValue<any>($.arrayIndex(r, 0), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")), $.basicInterfaceValue($.int64Add($.int64($.arrayIndex(r, 1)), 1n), "int64")))
						}
					}
					return $.concatString(($.concatString(start, joinStrings(ss, false))), end)
				}
				break
			case $.typeAssert<protoreflect.FileImports | null>(__goscriptTypeSwitchValue, "protoreflect.FileImports").ok:
				{
					let vs: protoreflect.FileImports | null = $.typeAssert<protoreflect.FileImports | null>(__goscriptTypeSwitchValue, "protoreflect.FileImports").value
					for (let i = 0; i < (__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.FileImports, null>) : $.pointerValue<Exclude<protoreflect.FileImports, null>>(vs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						let rs: $.VarRef<records> = $.varRef(new records(undefined, true))
						let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue((((__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<protoreflect.FileImports, null>) : $.pointerValue<Exclude<protoreflect.FileImports, null>>(vs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FileImport)).clone(), "protoreflect.FileImport", "protoreflect.FileImport"))))
						await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Path"))); return new methodAndName({method: __goscriptLiteralField0, name: "Path"}, true) })(), (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Package"))); return new methodAndName({method: __goscriptLiteralField1, name: "Package"}, true) })(), (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsPublic"))); return new methodAndName({method: __goscriptLiteralField2, name: "IsPublic"}, true) })(), (() => { const __goscriptLiteralField3 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsWeak"))); return new methodAndName({method: __goscriptLiteralField3, name: "IsWeak"}, true) })()]))
						ss = $.appendOne(ss, $.concatString(($.concatString("{", await rs.value.Join())), "}"))
					}
					return $.concatString(($.concatString(start, joinStrings(ss, allowMulti))), end)
				}
				break
			default:
				{
					let vs: any = __goscriptTypeSwitchValue
					let [, isEnumValue] = $.typeAssertTuple<protoreflect.EnumValueDescriptors | null>(vs, "protoreflect.EnumValueDescriptors")
					for (let i = 0; i < (__goscriptAwait = (vs !== null && (vs as any).__isVarRef !== true && (vs as any).__goValue === undefined ? (vs as Exclude<list, null>) : $.pointerValue<Exclude<list, null>>(vs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						let m = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((vs as any)))).MethodByName("Get")))
						let v = $.markAsStructValue($.cloneStructValue($.arrayIndex((await $.markAsStructValue($.cloneStructValue(m)).Call($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue(i, "int"))))])))!, 0))).Interface()
						ss = $.appendOne(ss, await formatDescOpt($.mustTypeAssert<protoreflect.Descriptor | null>(v, "protoreflect.Descriptor"), false, allowMulti && !isEnumValue, (null as ((_p0: string) => void) | null)))
					}
					return $.concatString(($.concatString(start, joinStrings(ss, allowMulti && isEnumValue))), end)
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function FormatDesc(s: fmt.State | null, r: number, t: protoreflect.Descriptor | null): globalThis.Promise<void> {
	await io.WriteString($.pointerValueOrNil((s as io.Writer | null))!, await formatDescOpt(t, true, (r == 118) && ((__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Flag(35), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), (null as ((_p0: string) => void) | null)))
}

export async function InternalFormatDescOptForTesting(t: protoreflect.Descriptor | null, isRoot: boolean, allowMulti: boolean, record: ((_p0: string) => void) | null): globalThis.Promise<string> {
	return formatDescOpt(t, isRoot, allowMulti, record)
}

export async function formatDescOpt(t: protoreflect.Descriptor | null, isRoot: boolean, allowMulti: boolean, record: ((_p0: string) => void) | null): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((t as any))))
	let rt = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ProtoType"))).Type()).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	let start = "{"
	let end = "}"
	if (isRoot) {
		start = $.concatString((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "{")
	}

	let [, isFile] = $.typeAssertTuple<protoreflect.FileDescriptor | null>(t, "protoreflect.FileDescriptor")
	let rs = $.varRef(new records({allowMulti: allowMulti, record: record}, true))
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(t)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		if (isFile) {
			await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField4 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Path"))); return new methodAndName({method: __goscriptLiteralField4, name: "Path"}, true) })(), (() => { const __goscriptLiteralField5 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Package"))); return new methodAndName({method: __goscriptLiteralField5, name: "Package"}, true) })(), (() => { const __goscriptLiteralField6 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsPlaceholder"))); return new methodAndName({method: __goscriptLiteralField6, name: "IsPlaceholder"}, true) })()]))
		} else {
			await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField7 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("FullName"))); return new methodAndName({method: __goscriptLiteralField7, name: "FullName"}, true) })(), (() => { const __goscriptLiteralField8 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsPlaceholder"))); return new methodAndName({method: __goscriptLiteralField8, name: "IsPlaceholder"}, true) })()]))
		}
	} else {
		switch ((true as boolean)) {
			case isFile:
			{
				await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField9 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Syntax"))); return new methodAndName({method: __goscriptLiteralField9, name: "Syntax"}, true) })()]))
				break
			}
			case isRoot:
			{
				await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField10 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Syntax"))); return new methodAndName({method: __goscriptLiteralField10, name: "Syntax"}, true) })(), (() => { const __goscriptLiteralField11 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("FullName"))); return new methodAndName({method: __goscriptLiteralField11, name: "FullName"}, true) })()]))
				break
			}
			default:
			{
				await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField12 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Name"))); return new methodAndName({method: __goscriptLiteralField12, name: "Name"}, true) })()]))
				break
			}
		}
		{
			const __goscriptTypeSwitchValue = t
			switch (true) {
				case $.typeAssert<protoreflect.FieldDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FieldDescriptor").ok:
					{
						let t: protoreflect.FieldDescriptor | null = $.typeAssert<protoreflect.FieldDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FieldDescriptor").value
						let accessors: $.Slice<methodAndName> = $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField13 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Number"))); return new methodAndName({method: __goscriptLiteralField13, name: "Number"}, true) })(), (() => { const __goscriptLiteralField14 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Cardinality"))); return new methodAndName({method: __goscriptLiteralField14, name: "Cardinality"}, true) })(), (() => { const __goscriptLiteralField15 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Kind"))); return new methodAndName({method: __goscriptLiteralField15, name: "Kind"}, true) })(), (() => { const __goscriptLiteralField16 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("HasJSONName"))); return new methodAndName({method: __goscriptLiteralField16, name: "HasJSONName"}, true) })(), (() => { const __goscriptLiteralField17 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("JSONName"))); return new methodAndName({method: __goscriptLiteralField17, name: "JSONName"}, true) })(), (() => { const __goscriptLiteralField18 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("HasPresence"))); return new methodAndName({method: __goscriptLiteralField18, name: "HasPresence"}, true) })(), (() => { const __goscriptLiteralField19 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsExtension"))); return new methodAndName({method: __goscriptLiteralField19, name: "IsExtension"}, true) })(), (() => { const __goscriptLiteralField20 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsPacked"))); return new methodAndName({method: __goscriptLiteralField20, name: "IsPacked"}, true) })(), (() => { const __goscriptLiteralField21 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsWeak"))); return new methodAndName({method: __goscriptLiteralField21, name: "IsWeak"}, true) })(), (() => { const __goscriptLiteralField22 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsList"))); return new methodAndName({method: __goscriptLiteralField22, name: "IsList"}, true) })(), (() => { const __goscriptLiteralField23 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsMap"))); return new methodAndName({method: __goscriptLiteralField23, name: "IsMap"}, true) })(), (() => { const __goscriptLiteralField24 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("MapKey"))); return new methodAndName({method: __goscriptLiteralField24, name: "MapKey"}, true) })(), (() => { const __goscriptLiteralField25 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("MapValue"))); return new methodAndName({method: __goscriptLiteralField25, name: "MapValue"}, true) })(), (() => { const __goscriptLiteralField26 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("HasDefault"))); return new methodAndName({method: __goscriptLiteralField26, name: "HasDefault"}, true) })(), (() => { const __goscriptLiteralField27 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Default"))); return new methodAndName({method: __goscriptLiteralField27, name: "Default"}, true) })(), (() => { const __goscriptLiteralField28 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ContainingOneof"))); return new methodAndName({method: __goscriptLiteralField28, name: "ContainingOneof"}, true) })(), (() => { const __goscriptLiteralField29 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ContainingMessage"))); return new methodAndName({method: __goscriptLiteralField29, name: "ContainingMessage"}, true) })(), (() => { const __goscriptLiteralField30 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Message"))); return new methodAndName({method: __goscriptLiteralField30, name: "Message"}, true) })(), (() => { const __goscriptLiteralField31 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Enum"))); return new methodAndName({method: __goscriptLiteralField31, name: "Enum"}, true) })()])
						for (let __goscriptRangeTarget0 = accessors, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let s = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as methodAndName)).clone()
							switch (s.name) {
								case "MapKey":
								{
									{
										let k = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(t)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
										if (k != null) {
											rs.value.recs = $.appendOne(rs.value.recs, $.arrayValue(["MapKey", await protoreflect.Kind_String((__goscriptAwait = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? (k as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(k)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]))
										}
									}
									break
								}
								case "MapValue":
								{
									{
										let v = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(t)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
										if (v != null) {
											switch ((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(v)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
												case protoreflect.EnumKind:
												{
													await rs.value.AppendRecs("MapValue", $.arrayValue(["MapValue", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(v)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
													break
												}
												case protoreflect.MessageKind:
												case protoreflect.GroupKind:
												{
													await rs.value.AppendRecs("MapValue", $.arrayValue(["MapValue", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(v)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
													break
												}
												default:
												{
													await rs.value.AppendRecs("MapValue", $.arrayValue(["MapValue", await protoreflect.Kind_String((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(v)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]))
													break
												}
											}
										}
									}
									break
								}
								case "ContainingOneof":
								{
									{
										let od = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(t)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
										if (od != null) {
											await rs.value.AppendRecs("ContainingOneof", $.arrayValue(["Oneof", (__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
										}
									}
									break
								}
								case "ContainingMessage":
								{
									if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(t)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										await rs.value.AppendRecs("ContainingMessage", $.arrayValue(["Extendee", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(t)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
									}
									break
								}
								case "Message":
								{
									if (!(__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(t)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(s).clone()]))
									}
									break
								}
								default:
								{
									await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(s).clone()]))
									break
								}
							}
						}
					}
					break
				case $.typeAssert<protoreflect.OneofDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.OneofDescriptor").ok:
					{
						let t: protoreflect.OneofDescriptor | null = $.typeAssert<protoreflect.OneofDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.OneofDescriptor").value
						let ss: $.Slice<string> = null! as $.Slice<string>
						let fs = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(t)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						for (let i = 0; i < (__goscriptAwait = (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? (fs as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
							ss = $.appendOne(ss, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? (fs as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fs)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
						if ($.sliceLen(ss) > 0) {
							await rs.value.AppendRecs("Fields", $.arrayValue(["Fields", $.concatString(($.concatString("[", joinStrings(ss, false))), "]")]))
						}
					}
					break
				case $.typeAssert<protoreflect.FileDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FileDescriptor").ok:
					{
						let t: protoreflect.FileDescriptor | null = $.typeAssert<protoreflect.FileDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FileDescriptor").value
						await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField32 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Path"))); return new methodAndName({method: __goscriptLiteralField32, name: "Path"}, true) })(), (() => { const __goscriptLiteralField33 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Package"))); return new methodAndName({method: __goscriptLiteralField33, name: "Package"}, true) })(), (() => { const __goscriptLiteralField34 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Imports"))); return new methodAndName({method: __goscriptLiteralField34, name: "Imports"}, true) })(), (() => { const __goscriptLiteralField35 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Messages"))); return new methodAndName({method: __goscriptLiteralField35, name: "Messages"}, true) })(), (() => { const __goscriptLiteralField36 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Enums"))); return new methodAndName({method: __goscriptLiteralField36, name: "Enums"}, true) })(), (() => { const __goscriptLiteralField37 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Extensions"))); return new methodAndName({method: __goscriptLiteralField37, name: "Extensions"}, true) })(), (() => { const __goscriptLiteralField38 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Services"))); return new methodAndName({method: __goscriptLiteralField38, name: "Services"}, true) })()]))
					}
					break
				case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
					{
						let t: protoreflect.MessageDescriptor | null = $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").value
						await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField39 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsMapEntry"))); return new methodAndName({method: __goscriptLiteralField39, name: "IsMapEntry"}, true) })(), (() => { const __goscriptLiteralField40 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Fields"))); return new methodAndName({method: __goscriptLiteralField40, name: "Fields"}, true) })(), (() => { const __goscriptLiteralField41 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Oneofs"))); return new methodAndName({method: __goscriptLiteralField41, name: "Oneofs"}, true) })(), (() => { const __goscriptLiteralField42 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ReservedNames"))); return new methodAndName({method: __goscriptLiteralField42, name: "ReservedNames"}, true) })(), (() => { const __goscriptLiteralField43 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ReservedRanges"))); return new methodAndName({method: __goscriptLiteralField43, name: "ReservedRanges"}, true) })(), (() => { const __goscriptLiteralField44 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("RequiredNumbers"))); return new methodAndName({method: __goscriptLiteralField44, name: "RequiredNumbers"}, true) })(), (() => { const __goscriptLiteralField45 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ExtensionRanges"))); return new methodAndName({method: __goscriptLiteralField45, name: "ExtensionRanges"}, true) })(), (() => { const __goscriptLiteralField46 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Messages"))); return new methodAndName({method: __goscriptLiteralField46, name: "Messages"}, true) })(), (() => { const __goscriptLiteralField47 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Enums"))); return new methodAndName({method: __goscriptLiteralField47, name: "Enums"}, true) })(), (() => { const __goscriptLiteralField48 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Extensions"))); return new methodAndName({method: __goscriptLiteralField48, name: "Extensions"}, true) })()]))
					}
					break
				case $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").ok:
					{
						let t: protoreflect.EnumDescriptor | null = $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").value
						await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField49 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Values"))); return new methodAndName({method: __goscriptLiteralField49, name: "Values"}, true) })(), (() => { const __goscriptLiteralField50 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ReservedNames"))); return new methodAndName({method: __goscriptLiteralField50, name: "ReservedNames"}, true) })(), (() => { const __goscriptLiteralField51 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("ReservedRanges"))); return new methodAndName({method: __goscriptLiteralField51, name: "ReservedRanges"}, true) })(), (() => { const __goscriptLiteralField52 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsClosed"))); return new methodAndName({method: __goscriptLiteralField52, name: "IsClosed"}, true) })()]))
					}
					break
				case $.typeAssert<protoreflect.EnumValueDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumValueDescriptor").ok:
					{
						let t: protoreflect.EnumValueDescriptor | null = $.typeAssert<protoreflect.EnumValueDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumValueDescriptor").value
						await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField53 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Number"))); return new methodAndName({method: __goscriptLiteralField53, name: "Number"}, true) })()]))
					}
					break
				case $.typeAssert<protoreflect.ServiceDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.ServiceDescriptor").ok:
					{
						let t: protoreflect.ServiceDescriptor | null = $.typeAssert<protoreflect.ServiceDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.ServiceDescriptor").value
						await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField54 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Methods"))); return new methodAndName({method: __goscriptLiteralField54, name: "Methods"}, true) })()]))
					}
					break
				case $.typeAssert<protoreflect.MethodDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MethodDescriptor").ok:
					{
						let t: protoreflect.MethodDescriptor | null = $.typeAssert<protoreflect.MethodDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MethodDescriptor").value
						await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([(() => { const __goscriptLiteralField55 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Input"))); return new methodAndName({method: __goscriptLiteralField55, name: "Input"}, true) })(), (() => { const __goscriptLiteralField56 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("Output"))); return new methodAndName({method: __goscriptLiteralField56, name: "Output"}, true) })(), (() => { const __goscriptLiteralField57 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsStreamingClient"))); return new methodAndName({method: __goscriptLiteralField57, name: "IsStreamingClient"}, true) })(), (() => { const __goscriptLiteralField58 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("IsStreamingServer"))); return new methodAndName({method: __goscriptLiteralField58, name: "IsStreamingServer"}, true) })()]))
					}
					break
			}
		}
		{
			let m = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).MethodByName("GoType")))
			if ($.markAsStructValue($.cloneStructValue(m)).IsValid()) {
				await rs.value.Append($.markAsStructValue($.cloneStructValue(rv)), $.arrayToSlice<methodAndName>([new methodAndName({method: $.markAsStructValue($.cloneStructValue(m)), name: "GoType"}, true)]))
			}
		}
	}
	return $.concatString(($.concatString(start, await rs.value.Join())), end)
}

export function formatColon(padding: number): string {
	// Deliberately introduce instability into the debug output to
	// discourage users from performing string comparisons.
	// This provides us flexibility to change the output in the future.
	if (detrand.Bool()) {
		return $.concatString(":", strings.Repeat("\xc2\xa0", 1 + padding))
	} else {
		return $.concatString(":", strings.Repeat(" ", 1 + padding))
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function joinStrings(ss: $.Slice<string>, isMulti: boolean): string {
	if ($.sliceLen(ss) == 0) {
		return ""
	}
	if (isMulti) {
		return $.concatString(($.concatString("\n\t", strings.Join(ss, "\n\t"))), "\n")
	}
	return strings.Join(ss, ", ")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.Name"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptAwait: any
