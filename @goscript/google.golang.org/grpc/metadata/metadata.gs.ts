// Generated file based on metadata.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/metadata", ["metadata.MD", "metadata.mdIncomingKey", "metadata.mdOutgoingKey", "metadata.rawMD"])

export type MD = globalThis.Map<string, $.Slice<string>> | null

$.registerNamedType("metadata.MD", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))));

$.registerNamedValueType(
	"metadata.MD",
	{Append: (receiver: any, ...args: any[]) => (MD_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (MD_Copy as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Delete: (receiver: any, ...args: any[]) => (MD_Delete as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (MD_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (MD_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (MD_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Append", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("Copy", [], ["metadata.MD"]), $.methodSignature("Delete", [["k", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Get", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Set", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]])]
);

$.registerNamedValueType(
	"*metadata.MD",
	{Append: (receiver: any, ...args: any[]) => (MD_Append as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (MD_Copy as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Delete: (receiver: any, ...args: any[]) => (MD_Delete as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (MD_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (MD_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (MD_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Append", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("Copy", [], ["metadata.MD"]), $.methodSignature("Delete", [["k", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Get", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Set", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]])]
);

export class mdIncomingKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mdIncomingKey {
		return new mdIncomingKey(this, true)
	}

	public __goscriptAssign(source: mdIncomingKey): void {
	}

	static __typeInfo = $.registerStructType(
		"metadata.mdIncomingKey",
		() => new mdIncomingKey(),
		() => [],
		mdIncomingKey,
		() => []
	)
}

export class mdOutgoingKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mdOutgoingKey {
		return new mdOutgoingKey(this, true)
	}

	public __goscriptAssign(source: mdOutgoingKey): void {
	}

	static __typeInfo = $.registerStructType(
		"metadata.mdOutgoingKey",
		() => new mdOutgoingKey(),
		() => [],
		mdOutgoingKey,
		() => []
	)
}

export class rawMD {
	public get md(): MD {
		return this._fields.md
	}

	public set md(value: MD) {
		this._fields.md = value
	}

	public get added(): $.Slice<$.Slice<string>> {
		return this._fields.added
	}

	public set added(value: $.Slice<$.Slice<string>>) {
		this._fields.added = value
	}

	public _fields: {
		md: MD
		added: $.Slice<$.Slice<string>>
	}

	constructor(init?: Partial<{md?: MD, added?: $.Slice<$.Slice<string>>}>, __goscriptValue?: boolean) {
		this._fields = {
			md: init?.md ?? (null! as MD),
			added: init?.added ?? (null! as $.Slice<$.Slice<string>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rawMD {
		return new rawMD(this, true)
	}

	public __goscriptAssign(source: rawMD): void {
		const target = this._fields
		const values = source._fields
		target.md = values.md
		target.added = values.added
	}

	static __typeInfo = $.registerStructType(
		"metadata.rawMD",
		() => new rawMD(),
		() => [],
		rawMD,
		() => [/* @__PURE__ */ $.structField("md", "metadata.MD", [0], 0, false, { pkgPath: "google.golang.org/grpc/metadata" }), /* @__PURE__ */ $.structField("added", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [1], 8, false, { pkgPath: "google.golang.org/grpc/metadata" })]
	)
}

function __goscriptInit0(): void {
	internal.__goscript_set_FromOutgoingContextRaw($.interfaceValue($.goFunc(fromOutgoingContextRaw, "google.golang.org/grpc/metadata.fromOutgoingContextRaw"), "func(ctx context.Context) (metadata.MD, [][]string, bool)", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["metadata.MD", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), /* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
}

export function DecodeKeyValue(k: string, v: string): [string, string, $.GoError] {
	return [k, v, null]
}

export function New(m: globalThis.Map<string, string> | null): MD {
	let md: MD = $.makeMap<string, $.Slice<string>>()
	for (const [k, val] of m?.entries() ?? []) {
		let key = strings.ToLower(k)
		$.mapSet(md, key, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(md, key, null)[0], val))
	}
	return md
}

export async function Pairs(kv: $.Slice<string>): globalThis.Promise<MD> {
	if (($.sliceLen(kv) % 2) == 1) {
		$.panic(await fmt.Sprintf("metadata: Pairs got the odd number of input pairs for metadata: %d", $.basicInterfaceValue($.sliceLen(kv), "int")))
	}
	let md: MD = $.makeMap<string, $.Slice<string>>()
	for (let __goscriptSliceWindow0 = $.sliceRange(kv), i = 0; i < __goscriptSliceWindow0.length; i = i + (2)) {
		let key = strings.ToLower(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string))
		$.mapSet(md, key, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(md, key, null)[0], ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i + 1)] as string)))
	}
	return md
}

export function MD_Len(md: MD): number {
	return $.len(md)
}

export function MD_Copy(md: MD): MD {
	let out: MD = $.makeMap<string, $.Slice<string>>()
	for (let [k, v] of md?.entries() ?? []) {
		$.mapSet(out, k, copyOf(v))
	}
	return out
}

export function MD_Get(md: MD, k: string): $.Slice<string> {
	k = strings.ToLower(k)
	return $.mapGet<string, $.Slice<string>, $.Slice<string>>(md, k, null)[0]
}

export function MD_Set(md: MD, k: string, vals: $.Slice<string>): void {
	if ($.sliceLen(vals) == 0) {
		return
	}
	k = strings.ToLower(k)
	$.mapSet(md, k, vals)
}

export function MD_Append(md: MD, k: string, vals: $.Slice<string>): void {
	if ($.sliceLen(vals) == 0) {
		return
	}
	k = strings.ToLower(k)
	$.mapSet(md, k, $.appendSlice($.mapGet<string, $.Slice<string>, $.Slice<string>>(md, k, null)[0], vals))
}

export function MD_Delete(md: MD, k: string): void {
	k = strings.ToLower(k)
	$.deleteMapEntry(md, k)
}

export function Join(mds: $.Slice<MD>): MD {
	let out: MD = $.makeMap<string, $.Slice<string>>([])
	for (let __goscriptRangeTarget0 = mds, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let md = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as MD)
		for (let [k, v] of md?.entries() ?? []) {
			$.mapSet(out, k, $.appendSlice($.mapGet<string, $.Slice<string>, $.Slice<string>>(out, k, null)[0], v))
		}
	}
	return out
}

export function NewIncomingContext(ctx: context.Context | null, md: MD): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new mdIncomingKey(undefined, true), "metadata.mdIncomingKey", "metadata.mdIncomingKey"), $.namedValueInterfaceValue<any>(md, "metadata.MD", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export function NewOutgoingContext(ctx: context.Context | null, md: MD): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new mdOutgoingKey(undefined, true), "metadata.mdOutgoingKey", "metadata.mdOutgoingKey"), $.interfaceValue(new rawMD({md: md}, true), "metadata.rawMD", "metadata.rawMD"))
}

export async function AppendToOutgoingContext(ctx: context.Context | null, kv: $.Slice<string>): globalThis.Promise<context.Context | null> {
	if (($.sliceLen(kv) % 2) == 1) {
		$.panic(await fmt.Sprintf("metadata: AppendToOutgoingContext got an odd number of input pairs for metadata: %d", $.basicInterfaceValue($.sliceLen(kv), "int")))
	}
	let [md, ] = $.typeAssertTuple<rawMD>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new mdOutgoingKey(undefined, true), "metadata.mdOutgoingKey", "metadata.mdOutgoingKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "metadata.rawMD")
	let added: $.Slice<$.Slice<string>> = $.makeSlice<$.Slice<string>>($.sliceLen(md.added) + 1)
	$.copy(added, md.added)
	let kvCopy: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(kv), "string")
	for (let __goscriptSliceWindow1 = $.sliceRange(kv), i = 0; i < __goscriptSliceWindow1.length; i = i + (2)) {
		kvCopy = $.append(kvCopy, strings.ToLower(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string)), ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 1)] as string))
	}
	$.sliceElems(added!)[$.sliceSlot(added!, $.sliceLen(added) - 1)] = kvCopy
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new mdOutgoingKey(undefined, true), "metadata.mdOutgoingKey", "metadata.mdOutgoingKey"), $.interfaceValue(new rawMD({md: md.md, added: added}, true), "metadata.rawMD", "metadata.rawMD"))
}

export async function FromIncomingContext(ctx: context.Context | null): globalThis.Promise<[MD, boolean]> {
	let __goscriptTuple0: any = $.typeAssertTuple<MD>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new mdIncomingKey(undefined, true), "metadata.mdIncomingKey", "metadata.mdIncomingKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "metadata.MD")
	let md: MD = __goscriptTuple0[0]
	let ok = __goscriptTuple0[1]
	if (!ok) {
		return [null, false]
	}
	let out: MD = $.makeMap<string, $.Slice<string>>()
	for (const [k, v] of md?.entries() ?? []) {
		// We need to manually convert all keys to lower case, because MD is a
		// map, and there's no guarantee that the MD attached to the context is
		// created using our helper functions.
		let key = strings.ToLower(k)
		$.mapSet(out, key, copyOf(v))
	}
	return [out, true]
}

export async function ValueFromIncomingContext(ctx: context.Context | null, key: string): globalThis.Promise<$.Slice<string>> {
	let __goscriptTuple1: any = $.typeAssertTuple<MD>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new mdIncomingKey(undefined, true), "metadata.mdIncomingKey", "metadata.mdIncomingKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "metadata.MD")
	let md: MD = __goscriptTuple1[0]
	let ok = __goscriptTuple1[1]
	if (!ok) {
		return null
	}

	{
		let __goscriptTuple2: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>(md, key, null)
		let v: $.Slice<string> = __goscriptTuple2[0]
		let __goscriptShadow0 = __goscriptTuple2[1]
		if (__goscriptShadow0) {
			return copyOf(v)
		}
	}
	for (const [k, v] of md?.entries() ?? []) {
		// Case insensitive comparison: MD is a map, and there's no guarantee
		// that the MD attached to the context is created using our helper
		// functions.
		if (strings.EqualFold(k, key)) {
			return copyOf(v)
		}
	}
	return null
}

export function copyOf(v: $.Slice<string>): $.Slice<string> {
	let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(v), undefined, "string")
	$.copy(vals, v)
	return vals
}

export async function fromOutgoingContextRaw(ctx: context.Context | null): globalThis.Promise<[MD, $.Slice<$.Slice<string>>, boolean]> {
	let [raw, ok] = $.typeAssertTuple<rawMD>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new mdOutgoingKey(undefined, true), "metadata.mdOutgoingKey", "metadata.mdOutgoingKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "metadata.rawMD")
	if (!ok) {
		return [null, null, false]
	}

	return [raw.md, raw.added, true]
}

export async function FromOutgoingContext(ctx: context.Context | null): globalThis.Promise<[MD, boolean]> {
	let [raw, ok] = $.typeAssertTuple<rawMD>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new mdOutgoingKey(undefined, true), "metadata.mdOutgoingKey", "metadata.mdOutgoingKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "metadata.rawMD")
	if (!ok) {
		return [null, false]
	}

	let mdSize = $.len(raw.md)
	for (let __goscriptRangeTarget1 = raw.added, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		mdSize = mdSize + (globalThis.Math.trunc($.sliceLen($.arrayIndex(raw.added!, i)) / 2))
	}

	let out: MD = $.makeMap<string, $.Slice<string>>()
	for (const [k, v] of raw.md?.entries() ?? []) {
		// We need to manually convert all keys to lower case, because MD is a
		// map, and there's no guarantee that the MD attached to the context is
		// created using our helper functions.
		let key = strings.ToLower(k)
		$.mapSet(out, key, copyOf(v))
	}
	for (let __goscriptRangeTarget2 = raw.added, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let __goscriptRangeShadow0 = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as $.Slice<string>)
		if (($.sliceLen(__goscriptRangeShadow0) % 2) == 1) {
			$.panic(await fmt.Sprintf("metadata: FromOutgoingContext got an odd number of input pairs for metadata: %d", $.basicInterfaceValue($.sliceLen(__goscriptRangeShadow0), "int")))
		}

		for (let __goscriptSliceWindow2 = $.sliceRange(__goscriptRangeShadow0), i = 0; i < __goscriptSliceWindow2.length; i = i + (2)) {
			let key = strings.ToLower(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as string))
			$.mapSet(out, key, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(out, key, null)[0], ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i + 1)] as string)))
		}
	}
	return [out, ok]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Append: (receiver: any, ...args: any[]) => (MD_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Copy: (receiver: any, ...args: any[]) => (MD_Copy as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Delete: (receiver: any, ...args: any[]) => (MD_Delete as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (MD_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (MD_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (MD_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("metadata.MD")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Append", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("Copy", [], ["metadata.MD"]), $.methodSignature("Delete", [["k", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Get", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Set", [["k", /* @__PURE__ */ $.basicType("string")], ["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]])])
}

var __goscriptAwait: any

__goscriptInit0()
