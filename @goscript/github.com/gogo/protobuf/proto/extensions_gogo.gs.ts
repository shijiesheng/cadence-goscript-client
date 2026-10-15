// Generated file based on extensions_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.extensionsBytes", "proto.slowExtensionAdapter", "proto.sortableMapElem", "proto.sortableExtensions"])

export type extensionsBytes = {
	ExtensionRangeArray(): $.Slice<__goscript_extensions.ExtensionRange>
	GetExtensions(): $.VarRef<$.Slice<number>> | null
	ProtoMessage(): void
	Reset(): void
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"proto.extensionsBytes",
	null,
	[$.methodSignature("ExtensionRangeArray", [], [/* @__PURE__ */ $.sliceType("proto.ExtensionRange")]), $.methodSignature("GetExtensions", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]), $.methodSignature("ProtoMessage"), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type sortableExtensions = $.Slice<sortableMapElem | $.VarRef<sortableMapElem> | null>

$.registerNamedType("proto.sortableExtensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto.sortableMapElem")));

$.registerNamedValueType(
	"proto.sortableExtensions",
	{Len: (receiver: any, ...args: any[]) => (sortableExtensions_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortableExtensions_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (sortableExtensions_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortableExtensions_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*proto.sortableExtensions",
	{Len: (receiver: any, ...args: any[]) => (sortableExtensions_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortableExtensions_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (sortableExtensions_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortableExtensions_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class slowExtensionAdapter {
	public get extensionsBytes(): extensionsBytes | null {
		return this._fields.extensionsBytes
	}

	public set extensionsBytes(value: extensionsBytes | null) {
		this._fields.extensionsBytes = value
	}

	public _fields: {
		extensionsBytes: extensionsBytes | null
	}

	constructor(init?: Partial<{extensionsBytes?: extensionsBytes | null}>, __goscriptValue?: boolean) {
		this._fields = {
			extensionsBytes: init?.extensionsBytes ?? (null! as extensionsBytes | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): slowExtensionAdapter {
		return new slowExtensionAdapter(this, true)
	}

	public __goscriptAssign(source: slowExtensionAdapter): void {
		const target = this._fields
		const values = source._fields
		target.extensionsBytes = $.assignFieldValue(target.extensionsBytes, values.extensionsBytes, "proto.extensionsBytes")
	}

	public async extensionsRead(): globalThis.Promise<[globalThis.Map<number, __goscript_extensions.Extension> | null, sync.Locker | null]> {
		const s = this;
		let b = $.pointerValue<Exclude<extensionsBytes, null>>(s.extensionsBytes).GetExtensions()
		let __goscriptTuple0: any = BytesToExtensionsMap($.pointerValue<$.Slice<number>>(b))
		let m: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			$.panic((err as any))
		}
		return [m, $.interfaceValue<sync.Locker | null>(new __goscript_extensions.notLocker(undefined, true), "proto.notLocker", "proto.notLocker")]
	}

	public extensionsWrite(): globalThis.Map<number, __goscript_extensions.Extension> | null {
		const s = this;
		$.panic("Please report a bug to github.com/gogo/protobuf if you see this message: Writing extensions is not supported for extensions stored in a byte slice field.")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public ExtensionRangeArray(): any {
		return $.pointerValue<Exclude<extensionsBytes | null, null>>(this.extensionsBytes).ExtensionRangeArray()
	}

	public GetExtensions(): any {
		return $.pointerValue<Exclude<extensionsBytes | null, null>>(this.extensionsBytes).GetExtensions()
	}

	public ProtoMessage(): any {
		return $.pointerValue<Exclude<extensionsBytes | null, null>>(this.extensionsBytes).ProtoMessage()
	}

	public async Reset(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<extensionsBytes | null, null>>(this.extensionsBytes).Reset()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<extensionsBytes | null, null>>(this.extensionsBytes).String()
	}

	static __typeInfo = $.registerStructType(
		"proto.slowExtensionAdapter",
		() => new slowExtensionAdapter(),
		() => [$.methodSignature("extensionsRead", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"), "sync.Locker"]), $.methodSignature("extensionsWrite", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")]), $.methodSignature("ExtensionRangeArray", [], [/* @__PURE__ */ $.sliceType("proto.ExtensionRange")]), $.methodSignature("GetExtensions", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]), $.methodSignature("ProtoMessage"), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		slowExtensionAdapter,
		() => [/* @__PURE__ */ $.structField("extensionsBytes", "proto.extensionsBytes", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto", anonymous: true })]
	)
}

export class sortableMapElem {
	public get field(): number {
		return this._fields.field
	}

	public set field(value: number) {
		this._fields.field = value
	}

	public get ext(): __goscript_extensions.Extension {
		return this._fields.ext
	}

	public set ext(value: __goscript_extensions.Extension) {
		this._fields.ext = value
	}

	public _fields: {
		field: number
		ext: __goscript_extensions.Extension
	}

	constructor(init?: Partial<{field?: number, ext?: __goscript_extensions.Extension}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? (0 as number),
			ext: init?.ext ? init.ext.clone() : new __goscript_extensions.Extension(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sortableMapElem {
		return new sortableMapElem(this, true)
	}

	public __goscriptAssign(source: sortableMapElem): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
		$.assignStruct(target.ext, values.ext)
	}

	static __typeInfo = $.registerStructType(
		"proto.sortableMapElem",
		() => new sortableMapElem(),
		() => [],
		sortableMapElem,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.basicType("int32"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("ext", "proto.Extension", [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export async function GetBoolExtension(pb: __goscript_lib.Message | null, extension: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null, ifnotset: boolean): globalThis.Promise<boolean> {
	if ($.markAsStructValue($.cloneStructValue(reflect.ValueOf((pb as any)))).IsNil()) {
		return ifnotset
	}
	let [value, err] = await __goscript_extensions.GetExtension(pb, extension)
	if (err != null) {
		return ifnotset
	}
	if (value == null) {
		return ifnotset
	}
	if ($.mustTypeAssert<$.VarRef<boolean> | null>(value, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))) == null) {
		return ifnotset
	}
	return $.pointerValue<boolean>(($.mustTypeAssert<$.VarRef<boolean> | null>(value, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))))
}

export async function SizeOfInternalExtension(m: __goscript_extensions.extendableProto | null): globalThis.Promise<number> {
	let n: number = 0
	let info: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null = await __goscript_table_marshal.getMarshalInfo(reflect.TypeOf((m as any)))
	return __goscript_table_marshal.marshalInfo.prototype.sizeV1Extensions.call(info, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(m)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, __goscript_extensions.Extension> | null))
}

export function newSortableExtensionsFromMap(m: globalThis.Map<number, __goscript_extensions.Extension> | null): sortableExtensions {
	let s: sortableExtensions = ($.makeSlice<sortableMapElem | $.VarRef<sortableMapElem> | null>(0, $.len(m)) as sortableExtensions)
	for (const [k, v] of m?.entries() ?? []) {
		s = ($.appendOne((s as sortableExtensions), new sortableMapElem({field: k, ext: v}), $.appendZeros.nil) as sortableExtensions)
	}
	return (s as sortableExtensions)
}

export function sortableExtensions_Len(_this: sortableExtensions): number {
	return $.sliceLen((_this as sortableExtensions))
}

export function sortableExtensions_Swap(_this: sortableExtensions, i: number, j: number): void {
	let __goscriptAssign0_0: sortableMapElem | $.VarRef<sortableMapElem> | null = $.arrayIndex(_this!, j)
	let __goscriptAssign0_1: sortableMapElem | $.VarRef<sortableMapElem> | null = $.arrayIndex(_this!, i)
	$.sliceElems(_this!)[$.sliceSlot(_this!, i)] = __goscriptAssign0_0
	$.sliceElems(_this!)[$.sliceSlot(_this!, j)] = __goscriptAssign0_1
}

export function sortableExtensions_Less(_this: sortableExtensions, i: number, j: number): boolean {
	return $.pointerValue<sortableMapElem>($.arrayIndex(_this!, i)).field < $.pointerValue<sortableMapElem>($.arrayIndex(_this!, j)).field
}

export async function sortableExtensions_String(_this: sortableExtensions): globalThis.Promise<string> {
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(_this, "proto.sortableExtensions", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
	let ss: $.Slice<string> = $.makeSlice<string>($.sliceLen((_this as sortableExtensions)), undefined, "string")
	for (let __goscriptRangeTarget0 = _this, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(ss), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await fmt.Sprintf("%d: %v", $.basicInterfaceValue($.pointerValue<sortableMapElem>(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as sortableMapElem | $.VarRef<sortableMapElem> | null)).field, "int32"), $.interfaceValue(($.pointerValue<sortableMapElem>(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as sortableMapElem | $.VarRef<sortableMapElem> | null)).ext).clone(), "proto.Extension", "proto.Extension"))
	}
	return $.concatString(($.concatString("map[", strings.Join(ss, ","))), "]")
}

export async function StringFromInternalExtension(m: __goscript_extensions.extendableProto | null): globalThis.Promise<string> {
	return StringFromExtensionsMap(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(m)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, __goscript_extensions.Extension> | null))
}

export async function StringFromExtensionsMap(m: globalThis.Map<number, __goscript_extensions.Extension> | null): globalThis.Promise<string> {
	return sortableExtensions_String(newSortableExtensionsFromMap(m))
}

export async function StringFromExtensionsBytes(ext: $.Slice<number>): globalThis.Promise<string> {
	let __goscriptTuple1: any = BytesToExtensionsMap(ext)
	let m: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		$.panic((err as any))
	}
	return StringFromExtensionsMap(m)
}

export async function EncodeInternalExtension(m: __goscript_extensions.extendableProto | null, data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return EncodeExtensionMap(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(m)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, __goscript_extensions.Extension> | null), data)
}

export async function EncodeInternalExtensionBackwards(m: __goscript_extensions.extendableProto | null, data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return EncodeExtensionMapBackwards(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(m)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, __goscript_extensions.Extension> | null), data)
}

export async function EncodeExtensionMap(m: globalThis.Map<number, __goscript_extensions.Extension> | null, data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let o = 0
	for (const [__rangeKey, __goscriptRangeValue0] of m?.entries() ?? []) {
		let e: $.VarRef<__goscript_extensions.Extension> = $.varRef((__goscriptRangeValue0).clone())
		{
			let __goscriptShadow0 = await e.value.Encode()
			if (__goscriptShadow0 != null) {
				return [0, __goscriptShadow0]
			}
		}
		let __goscriptShadow1 = $.copy($.goSlice(data, o, undefined), e.value.enc)
		if (__goscriptShadow1 != $.sliceLen(e.value.enc)) {
			return [0, io.ErrShortBuffer]
		}
		o = o + (__goscriptShadow1)
	}
	return [o, null]
}

export async function EncodeExtensionMapBackwards(m: globalThis.Map<number, __goscript_extensions.Extension> | null, data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let o = 0
	let end = $.sliceLen(data)
	for (const [__rangeKey, __goscriptRangeValue1] of m?.entries() ?? []) {
		let e: $.VarRef<__goscript_extensions.Extension> = $.varRef((__goscriptRangeValue1).clone())
		{
			let __goscriptShadow2 = await e.value.Encode()
			if (__goscriptShadow2 != null) {
				return [0, __goscriptShadow2]
			}
		}
		let __goscriptShadow3 = $.copy($.goSlice(data, end - $.sliceLen(e.value.enc), undefined), e.value.enc)
		if (__goscriptShadow3 != $.sliceLen(e.value.enc)) {
			return [0, io.ErrShortBuffer]
		}
		end = end - (__goscriptShadow3)
		o = o + (__goscriptShadow3)
	}
	return [o, null]
}

export async function GetRawExtension(m: globalThis.Map<number, __goscript_extensions.Extension> | null, id: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let e = $.varRef(($.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(m, id, new __goscript_extensions.Extension(undefined, true))[0]).clone())
	{
		let err = await e.value.Encode()
		if (err != null) {
			return [null, err]
		}
	}
	return [e.value.enc, null]
}

export function size(buf: $.Slice<number>, wire: number): [number, $.GoError] {
	switch (wire) {
		case 0:
		{
			let [, n] = __goscript_decode.DecodeVarint(buf)
			return [n, null]
			break
		}
		case 1:
		{
			return [8, null]
			break
		}
		case 2:
		{
			let [v, n] = __goscript_decode.DecodeVarint(buf)
			return [$.int(v) + n, null]
			break
		}
		case 5:
		{
			return [4, null]
			break
		}
		case 3:
		{
			let offset = 0
			while (true) {
				let [u, n] = __goscript_decode.DecodeVarint($.goSlice(buf, offset, undefined))
				let fwire = $.int($.uint64And(u, 7n))
				offset = offset + (n)
				if (fwire == 4) {
					return [offset, null]
				}
				let [s, err] = size($.goSlice(buf, offset, undefined), wire)
				if (err != null) {
					return [0, err]
				}
				offset = offset + (s)
			}
			break
		}
	}
	return [0, fmt.Errorf("proto: can't get size for unknown wire type %d", $.basicInterfaceValue(wire, "int"))]
}

export function BytesToExtensionsMap(buf: $.Slice<number>): [globalThis.Map<number, __goscript_extensions.Extension> | null, $.GoError] {
	let m: globalThis.Map<number, __goscript_extensions.Extension> | null = $.makeMap<number, __goscript_extensions.Extension>()
	let i = 0
	while (i < $.sliceLen(buf)) {
		let [tag, n] = __goscript_decode.DecodeVarint($.goSlice(buf, i, undefined))
		if (n <= 0) {
			return [null, fmt.Errorf("unable to decode varint")]
		}
		let fieldNum = $.int($.uint64Shr(tag, 3n), 32)
		let wireType = $.int($.uint64And(tag, 7n))
		let [l, err] = size($.goSlice(buf, i + n, undefined), wireType)
		if (err != null) {
			return [null, err]
		}
		let end: number = (i + $.int(l)) + n
		$.mapSet(m, $.int(fieldNum, 32), new __goscript_extensions.Extension({enc: $.goSlice(buf, i, end)}, true))
		i = end
	}
	return [m, null]
}

export function NewExtension(e: $.Slice<number>): __goscript_extensions.Extension {
	let ee = new __goscript_extensions.Extension({enc: $.makeSlice<number>($.sliceLen(e), undefined, "byte")}, true)
	$.copy(ee.enc, e)
	return (ee).clone()
}

export async function AppendExtension(e: __goscript_lib.Message | null, tag: number, buf: $.Slice<number>): globalThis.Promise<void> {
	{
		let [ee, eok] = $.typeAssertTuple<extensionsBytes | null>(e, "proto.extensionsBytes")
		if (eok) {
			let ext = ((__goscriptAwait = (ee !== null && (ee as any).__isVarRef !== true && (ee as any).__goValue === undefined ? (ee as Exclude<extensionsBytes, null>) : $.pointerValue<Exclude<extensionsBytes, null>>(ee)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			ext!.value = $.appendSlice($.pointerValue<$.Slice<number>>(ext), buf, $.byteSliceHint)
			return
		}
	}
	{
		let [ee, eok] = $.typeAssertTuple<__goscript_extensions.extendableProto | null>(e, "proto.extendableProto")
		if (eok) {
			let m: globalThis.Map<number, __goscript_extensions.Extension> | null = ((__goscriptAwait = (ee !== null && (ee as any).__isVarRef !== true && (ee as any).__goValue === undefined ? (ee as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(ee)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, __goscript_extensions.Extension> | null)
			let ext = ($.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(m, $.int(tag, 32), new __goscript_extensions.Extension(undefined, true))[0]).clone()
			ext.enc = $.appendSlice(ext.enc, buf, $.byteSliceHint)
			$.mapSet(m, $.int(tag, 32), (ext).clone())
		}
	}
}

export async function encodeExtension(extension: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null, value: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null = await __goscript_table_marshal.getMarshalInfo(reflect.TypeOf(($.pointerValue<__goscript_extensions.ExtensionDesc>(extension).ExtendedType as any)))
	let ei: __goscript_table_marshal.marshalElemInfo | $.VarRef<__goscript_table_marshal.marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).getExtElemInfo(extension) : __goscript_table_marshal.marshalInfo.prototype.getExtElemInfo.call(u, extension))
	let ei$: __goscript_table_marshal.marshalElemInfo = ei == null ? $.pointerTarget<__goscript_table_marshal.marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<__goscript_table_marshal.marshalElemInfo>(ei)
	let v: $.VarRef<any> = $.varRef(value)
	let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as __goscript_table_marshal.marshalElemInfo).isptr)
	let siz = (__goscriptAwait = (ei$ as __goscript_table_marshal.marshalElemInfo).sizer!((p).clone(), __goscript_encode.SizeVarint((ei$ as __goscript_table_marshal.marshalElemInfo).wiretag)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let buf: $.Slice<number> = $.makeSlice<number>(0, siz, "byte")
	return (ei$ as __goscript_table_marshal.marshalElemInfo).marshaler!(buf, (p).clone(), (ei$ as __goscript_table_marshal.marshalElemInfo).wiretag, false)
}

export async function decodeExtensionFromBytes(extension: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null, buf: $.Slice<number>): globalThis.Promise<[any, $.GoError]> {
	let o = 0
	while (o < $.sliceLen(buf)) {
		let [tag, n] = __goscript_decode.DecodeVarint($.goSlice((buf), o, undefined))
		let fieldNum = $.int($.uint64Shr(tag, 3n), 32)
		let wireType = $.int($.uint64And(tag, 7n))
		if ((o + n) > $.sliceLen(buf)) {
			return [null, fmt.Errorf("unable to decode extension")]
		}
		let [l, err] = size($.goSlice((buf), o + n, undefined), wireType)
		if (err != null) {
			return [null, err]
		}
		if ($.int(fieldNum, 32) == $.pointerValue<__goscript_extensions.ExtensionDesc>(extension).Field) {
			if (((o + n) + l) > $.sliceLen(buf)) {
				return [null, fmt.Errorf("unable to decode extension")]
			}
			let [v, __goscriptShadow4] = await __goscript_extensions.decodeExtension($.goSlice((buf), o, (o + n) + l), extension)
			if (__goscriptShadow4 != null) {
				return [null, __goscriptShadow4]
			}
			return [v, null]
		}
		o = o + (n + l)
	}
	return __goscript_extensions.defaultExtensionValue(extension)
}

export async function SetUnsafeExtension(pb: __goscript_lib.Message | null, fieldNum: number, value: any): globalThis.Promise<$.GoError> {
	let typ = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((pb as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let __goscriptTuple2: any = $.mapGet<reflect.Type | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null>(__goscript_extensions.extensionMaps, typ, null)
	let ext: globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null = __goscriptTuple2[0]
	let ok = __goscriptTuple2[1]
	if (!ok) {
		return fmt.Errorf("proto: bad extended type; %s is not extendable", (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	let __goscriptTuple3: any = $.mapGet<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null>(ext, fieldNum, null)
	let desc: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null = __goscriptTuple3[0]
	ok = __goscriptTuple3[1]
	if (!ok) {
		return errors.New("proto: bad extension number; not in declared ranges")
	}
	return __goscript_extensions.SetExtension(pb, desc, value)
}

export async function GetUnsafeExtension(pb: __goscript_lib.Message | null, fieldNum: number): globalThis.Promise<[any, $.GoError]> {
	let typ = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((pb as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let __goscriptTuple4: any = $.mapGet<reflect.Type | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null>(__goscript_extensions.extensionMaps, typ, null)
	let ext: globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null = __goscriptTuple4[0]
	let ok = __goscriptTuple4[1]
	if (!ok) {
		return [null, fmt.Errorf("proto: bad extended type; %s is not extendable", (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
	}
	let __goscriptTuple5: any = $.mapGet<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null>(ext, fieldNum, null)
	let desc: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null = __goscriptTuple5[0]
	ok = __goscriptTuple5[1]
	if (!ok) {
		return [null, fmt.Errorf("unregistered field number %d", $.basicInterfaceValue(fieldNum, "int32"))]
	}
	return __goscript_extensions.GetExtension(pb, desc)
}

export function NewUnsafeXXX_InternalExtensions(m: globalThis.Map<number, __goscript_extensions.Extension> | null): __goscript_extensions.XXX_InternalExtensions {
	let x: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null = new __goscript_extensions.XXX_InternalExtensions({p: $.varRef<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, __goscript_extensions.Extension> | null}>($.anonymousStructValue({"mu": $.markAsStructValue(new sync.Mutex()), "extensionMap": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("extensionMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"), [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" })] }))})
	$.pointerValue<{"mu": sync.Mutex, "extensionMap": globalThis.Map<number, __goscript_extensions.Extension> | null}>($.pointerValue<__goscript_extensions.XXX_InternalExtensions>(x).p).extensionMap = m
	return ($.pointerValue<__goscript_extensions.XXX_InternalExtensions>(x)).clone()
}

export async function GetUnsafeExtensionsMap(extendable: __goscript_lib.Message | null): globalThis.Promise<globalThis.Map<number, __goscript_extensions.Extension> | null> {
	let pb = $.mustTypeAssert<__goscript_extensions.extendableProto | null>(extendable, "proto.extendableProto")
	return (pb !== null && (pb as any).__isVarRef !== true && (pb as any).__goValue === undefined ? (pb as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(pb)).extensionsWrite()
}

export async function deleteExtension(pb: extensionsBytes | null, theFieldNum: number, offset: number): globalThis.Promise<number> {
	let ext = ((__goscriptAwait = (pb !== null && (pb as any).__isVarRef !== true && (pb as any).__goValue === undefined ? (pb as Exclude<extensionsBytes, null>) : $.pointerValue<Exclude<extensionsBytes, null>>(pb)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
	while (offset < $.sliceLen($.pointerValue<$.Slice<number>>(ext))) {
		let [tag, n1] = __goscript_decode.DecodeVarint($.goSlice(($.pointerValue<$.Slice<number>>(ext)), offset, undefined))
		let fieldNum = $.int($.uint64Shr(tag, 3n), 32)
		let wireType = $.int($.uint64And(tag, 7n))
		let [n2, err] = size($.goSlice(($.pointerValue<$.Slice<number>>(ext)), offset + n1, undefined), wireType)
		if (err != null) {
			$.panic((err as any))
		}
		let newOffset: number = (offset + n1) + n2
		if (fieldNum == theFieldNum) {
			ext!.value = $.appendSlice($.goSlice(($.pointerValue<$.Slice<number>>(ext)), undefined, offset), $.goSlice(($.pointerValue<$.Slice<number>>(ext)), newOffset, undefined), $.byteSliceHint)
			return offset
		}
		offset = newOffset
	}
	return -1
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (sortableExtensions_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortableExtensions_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (sortableExtensions_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortableExtensions_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto.sortableMapElem"), "proto.sortableExtensions"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
