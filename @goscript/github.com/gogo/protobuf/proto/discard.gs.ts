// Generated file based on discard.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_table_merge from "./table_merge.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"
import "./table_merge.gs.ts"
import "./table_unmarshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.generatedDiscarder", "proto.discardInfo", "proto.discardFieldInfo"])

export type generatedDiscarder = {
	XXX_DiscardUnknown(): void
}

$.registerInterfaceType(
	"proto.generatedDiscarder",
	null,
	[$.methodSignature("XXX_DiscardUnknown")]
);

export class discardInfo {
	public get typ(): reflect.Type | null {
		return this._fields.typ
	}

	public set typ(value: reflect.Type | null) {
		this._fields.typ = value
	}

	public get initialized(): number {
		return this._fields.initialized
	}

	public set initialized(value: number) {
		this._fields.initialized = value
	}

	public get lock(): sync.Mutex {
		return this._fields.lock
	}

	public set lock(value: sync.Mutex) {
		this._fields.lock = value
	}

	public get fields(): $.Slice<discardFieldInfo> {
		return this._fields.fields
	}

	public set fields(value: $.Slice<discardFieldInfo>) {
		this._fields.fields = value
	}

	public get unrecognized(): __goscript_pointer_reflect.field {
		return this._fields.unrecognized
	}

	public set unrecognized(value: __goscript_pointer_reflect.field) {
		this._fields.unrecognized = value
	}

	public _fields: {
		typ: reflect.Type | null
		initialized: number
		lock: sync.Mutex
		fields: $.Slice<discardFieldInfo>
		unrecognized: __goscript_pointer_reflect.field
	}

	constructor(init?: Partial<{typ?: reflect.Type | null, initialized?: number, lock?: sync.Mutex, fields?: $.Slice<discardFieldInfo>, unrecognized?: __goscript_pointer_reflect.field}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (null! as reflect.Type | null),
			initialized: init?.initialized ?? (0 as number),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.Mutex()),
			fields: init?.fields ?? (null! as $.Slice<discardFieldInfo>),
			unrecognized: init?.unrecognized ?? (null! as __goscript_pointer_reflect.field)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): discardInfo {
		return new discardInfo(this, true)
	}

	public __goscriptAssign(source: discardInfo): void {
		const target = this._fields
		const values = source._fields
		target.typ = $.assignFieldValue(target.typ, values.typ, "reflect.Type")
		target.initialized = values.initialized
		$.assignStruct(target.lock, values.lock)
		target.fields = values.fields
		target.unrecognized = values.unrecognized
	}

	public async computeDiscardInfo(): globalThis.Promise<void> {
		let di: discardInfo | $.VarRef<discardInfo> | null = this;
		using __defer = new $.DisposableStack()
		const di$: discardInfo = di == null ? $.pointerTarget<discardInfo>(di) : (di as any).__isVarRef === true ? (di as any).value : (di as any).__goValue === undefined ? (di as any) : $.pointerTarget<discardInfo>(di)
		await (di$ as discardInfo).lock.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((di$ as discardInfo).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((di$ as discardInfo).initialized != 0) {
			return
		}
		let t = (di$ as discardInfo).typ
		let n = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		for (let i = 0; i < n; i++) {
			let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
			if (strings.HasPrefix(f.value.Name, "XXX_")) {
				continue
			}

			let dfi = (() => { const __goscriptLiteralField0 = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field); return new discardFieldInfo({field: __goscriptLiteralField0}, true) })()
			let tf = f.value.Type

			// Unwrap tf to get its most basic type.
			let isPointer: boolean = false
			let isSlice: boolean = false
			if (((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)) {
				isSlice = true
				tf = (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				isPointer = true
				tf = (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if ((isPointer && isSlice) && ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
				$.panic(await fmt.Sprintf("%v.%s cannot be a slice of pointers to primitive types", (t as any), f.value.Name))
			}

			switch ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Struct:
				{
					switch ((true as boolean)) {
						case !isPointer:
						{
							$.panic(await fmt.Sprintf("%v.%s cannot be a direct struct value", (t as any), f.value.Name))
							break
						}
						case isSlice:
						{
							let __goscriptShadow2: discardInfo | $.VarRef<discardInfo> | null = await getDiscardInfo(tf)
							dfi.discard = $.functionValue(async (src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								let sps: $.Slice<__goscript_pointer_reflect.pointer> = src.getPointerSlice()
								for (let __goscriptRangeTarget0 = sps, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
									let sp = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
									if (!$.markAsStructValue($.cloneStructValue(sp)).isNil()) {
										await (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? ((__goscriptShadow2 as any) as discardInfo).discard((sp).clone()) : discardInfo.prototype.discard.call(__goscriptShadow2, (sp).clone()))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							let __goscriptShadow3: discardInfo | $.VarRef<discardInfo> | null = await getDiscardInfo(tf)
							dfi.discard = $.functionValue(async (src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								let sp = src.getPointer()
								if (!sp.isNil()) {
									await (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as discardInfo).discard(sp) : discardInfo.prototype.discard.call(__goscriptShadow3, sp))
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Map:
				{
					switch ((true as boolean)) {
						case isPointer || isSlice:
						{
							$.panic(await fmt.Sprintf("%v.%s cannot be a pointer to a map or a slice of map values", (t as any), f.value.Name))
							break
						}
						default:
						{
							if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
								dfi.discard = $.functionValue(async (src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
									let sm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.asPointerTo(tf))).Elem()))
									if ($.markAsStructValue($.cloneStructValue(sm)).Len() == 0) {
										return
									}
									for (let __goscriptRangeTarget1 = $.markAsStructValue($.cloneStructValue(sm)).MapKeys(), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
										let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as reflect.Value)))
										let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sm)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))
										await DiscardUnknown($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(val)).Interface(), "proto.Message"))
									}
								}, ({ kind: $.TypeKind.Function, params: ["proto.pointer"], results: [] } as $.FunctionTypeInfo))
							} else {
								dfi.discard = $.functionValue((_p0: __goscript_pointer_reflect.pointer): void => {
								}, ({ kind: $.TypeKind.Function, params: ["proto.pointer"], results: [] } as $.FunctionTypeInfo))
							}
							break
						}
					}
					break
				}
				case reflect.Interface:
				{
					switch ((true as boolean)) {
						case isPointer || isSlice:
						{
							$.panic(await fmt.Sprintf("%v.%s cannot be a pointer to a interface or a slice of interface values", (t as any), f.value.Name))
							break
						}
						default:
						{
							dfi.discard = $.functionValue(async (src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								let su = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.asPointerTo(tf))).Elem()))
								if (!$.markAsStructValue($.cloneStructValue(su)).IsNil()) {
									let sv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(su)).Elem())).Elem())).Field(0)))
									if (($.markAsStructValue($.cloneStructValue(sv)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(sv)).IsNil()) {
										return
									}
									switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(sv)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										case reflect.Ptr:
										{
											await DiscardUnknown($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(sv)).Interface(), "proto.Message"))
											break
										}
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				default:
				{
					continue
					break
				}
			}
			;(di$ as discardInfo).fields = $.appendOne((di$ as discardInfo).fields, (dfi).clone())
		}

		;(di$ as discardInfo).unrecognized = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field)
		{
			let __goscriptTuple1: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).FieldByName("XXX_unrecognized")
			let f = $.varRef(__goscriptTuple1[0])
			let ok = __goscriptTuple1[1]
			if (ok) {
				if (!$.comparableEqual(f.value.Type, reflect.TypeOf($.interfaceValue(new Uint8Array([]) as $.Slice<number>, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) {
					$.panic("expected XXX_unrecognized to be of type []byte")
				}
				;(di$ as discardInfo).unrecognized = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
			}
		}

		atomic.StoreInt32($.fieldRef((di$ as discardInfo)._fields, "initialized"), 1)
	}

	public async discard(src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> {
		let di: discardInfo | $.VarRef<discardInfo> | null = this;
		const di$: discardInfo = di == null ? $.pointerTarget<discardInfo>(di) : (di as any).__isVarRef === true ? (di as any).value : (di as any).__goValue === undefined ? (di as any) : $.pointerTarget<discardInfo>(di)
		if (src.isNil()) {
			return
		}

		if (atomic.LoadInt32($.fieldRef((di$ as discardInfo)._fields, "initialized")) == 0) {
			await (di !== null && (di as any).__isVarRef !== true && (di as any).__goValue === undefined ? ((di as any) as discardInfo).computeDiscardInfo() : discardInfo.prototype.computeDiscardInfo.call(di))
		}

		for (let __goscriptRangeTarget2 = (di$ as discardInfo).fields, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let fi = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as discardFieldInfo)).clone()
			let sfp = src.offset((fi.field as __goscript_pointer_reflect.field))
			void (__goscriptAwait = fi.discard!((sfp).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// For proto2 messages, only discard unknown fields in message extensions
		// that have been accessed via GetExtension.
		{
			let [em, err] = __goscript_extensions.extendable($.markAsStructValue($.cloneStructValue(src.asPointerTo((di$ as discardInfo).typ))).Interface())
			if (err == null) {
				// Ignore lock since DiscardUnknown is not concurrency safe.
				let __goscriptTuple2: any = await (em !== null && (em as any).__isVarRef !== true && (em as any).__goValue === undefined ? (em as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(em)).extensionsRead()
				let emm: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple2[0]
				for (const [__rangeKey, mx] of emm?.entries() ?? []) {
					{
						let [m, ok] = $.typeAssertTuple<__goscript_lib.Message | null>(mx.value, "proto.Message")
						if (ok) {
							await DiscardUnknown(m)
						}
					}
				}
			}
		}

		if (__goscript_pointer_reflect.field_IsValid((di$ as discardInfo).unrecognized)) {
			$.markAsStructValue($.cloneStructValue(src.offset(((di$ as discardInfo).unrecognized as __goscript_pointer_reflect.field)))).toBytes()!.value = null
		}
	}

	static __typeInfo = $.registerStructType(
		"proto.discardInfo",
		() => new discardInfo(),
		() => [$.methodSignature("computeDiscardInfo", [], [], true), $.methodSignature("discard", [["src", "proto.pointer"]], [], true)],
		discardInfo,
		() => [/* @__PURE__ */ $.structField("typ", "reflect.Type", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("initialized", /* @__PURE__ */ $.basicType("int32"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("lock", "sync.Mutex", [2], 20, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("fields", /* @__PURE__ */ $.sliceType("proto.discardFieldInfo"), [3], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [4], 56, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class discardFieldInfo {
	public get field(): __goscript_pointer_reflect.field {
		return this._fields.field
	}

	public set field(value: __goscript_pointer_reflect.field) {
		this._fields.field = value
	}

	public get discard(): ((src: __goscript_pointer_reflect.pointer) => void) | null {
		return this._fields.discard
	}

	public set discard(value: ((src: __goscript_pointer_reflect.pointer) => void) | null) {
		this._fields.discard = value
	}

	public _fields: {
		field: __goscript_pointer_reflect.field
		discard: ((src: __goscript_pointer_reflect.pointer) => void) | null
	}

	constructor(init?: Partial<{field?: __goscript_pointer_reflect.field, discard?: ((src: __goscript_pointer_reflect.pointer) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? (null! as __goscript_pointer_reflect.field),
			discard: init?.discard ?? (null! as ((src: __goscript_pointer_reflect.pointer) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): discardFieldInfo {
		return new discardFieldInfo(this, true)
	}

	public __goscriptAssign(source: discardFieldInfo): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
		target.discard = values.discard
	}

	static __typeInfo = $.registerStructType(
		"proto.discardFieldInfo",
		() => new discardFieldInfo(),
		() => [],
		discardFieldInfo,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("discard", ({ kind: $.TypeKind.Function, params: ["proto.pointer"], results: [] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export async function DiscardUnknown(m: __goscript_lib.Message | null): globalThis.Promise<void> {
	let __goscriptShadow0 = m
	{
		let __goscriptTuple0: any = $.typeAssertTuple<generatedDiscarder | null>(__goscriptShadow0, "proto.generatedDiscarder")
		let __goscriptShadow1 = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			void (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<generatedDiscarder, null>) : $.pointerValue<Exclude<generatedDiscarder, null>>(__goscriptShadow1)).XXX_DiscardUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
	}
	// TODO: Dynamically populate a InternalMessageInfo for legacy messages,
	// but the master branch has no implementation for InternalMessageInfo,
	// so it would be more work to replicate that approach.
	await discardLegacy(m)
}

export let discardInfoMap: globalThis.Map<reflect.Type | null, discardInfo | $.VarRef<discardInfo> | null> | null = $.makeMap<reflect.Type | null, discardInfo | $.VarRef<discardInfo> | null>([])

export function __goscript_set_discardInfoMap(__goscriptValue: globalThis.Map<reflect.Type | null, discardInfo | $.VarRef<discardInfo> | null> | null): void {
	discardInfoMap = __goscriptValue
}

export let discardInfoLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_discardInfoLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(discardInfoLock.value, __goscriptValue)
}

export async function getDiscardInfo(t: reflect.Type | null): globalThis.Promise<discardInfo | $.VarRef<discardInfo> | null> {
	using __defer = new $.DisposableStack()
	await discardInfoLock.value.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(discardInfoLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	let di: discardInfo | $.VarRef<discardInfo> | null = $.mapGet<reflect.Type | null, discardInfo | $.VarRef<discardInfo> | null, discardInfo | $.VarRef<discardInfo> | null>(discardInfoMap, t, null)[0]
	if (di == null) {
		di = new discardInfo({typ: t})
		$.mapSet(discardInfoMap, t, di)
	}
	return di
}

export async function discardLegacy(m: __goscript_lib.Message | null): globalThis.Promise<void> {
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((m as any))))
	if (($.markAsStructValue($.cloneStructValue(v)).Kind() != 22) || $.markAsStructValue($.cloneStructValue(v)).IsNil()) {
		return
	}
	v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	if ($.markAsStructValue($.cloneStructValue(v)).Kind() != 25) {
		return
	}
	let t = $.markAsStructValue($.cloneStructValue(v)).Type()

	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).NumField(); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		if (strings.HasPrefix(f.Name, "XXX_")) {
			continue
		}
		let vf = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i)))
		let tf = f.Type

		// Unwrap tf to get its most basic type.
		let isPointer: boolean = false
		let isSlice: boolean = false
		if (((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)) {
			isSlice = true
			tf = (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			isPointer = true
			tf = (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((isPointer && isSlice) && ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
			$.panic(await fmt.Sprintf("%T.%s cannot be a slice of pointers to primitive types", (m as any), f.Name))
		}

		switch ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Struct:
			{
				switch ((true as boolean)) {
					case !isPointer:
					{
						$.panic(await fmt.Sprintf("%T.%s cannot be a direct struct value", (m as any), f.Name))
						break
					}
					case isSlice:
					{
						for (let j = 0; j < $.markAsStructValue($.cloneStructValue(vf)).Len(); j++) {
							await discardLegacy($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(vf)).Index(j))).Interface(), "proto.Message"))
						}
						break
					}
					default:
					{
						await discardLegacy($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(vf)).Interface(), "proto.Message"))
						break
					}
				}
				break
			}
			case reflect.Map:
			{
				switch ((true as boolean)) {
					case isPointer || isSlice:
					{
						$.panic(await fmt.Sprintf("%T.%s cannot be a pointer to a map or a slice of map values", (m as any), f.Name))
						break
					}
					default:
					{
						let tv = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(vf)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (((__goscriptAwait = (tv !== null && (tv as any).__isVarRef !== true && (tv as any).__goValue === undefined ? (tv as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tv)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && (__goscriptAwait = (tv !== null && (tv as any).__isVarRef !== true && (tv as any).__goValue === undefined ? (tv as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tv)).Implements($.pointerValueOrNil(__goscript_properties.__goscript_get_protoMessageType())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							for (let __goscriptRangeTarget3 = $.markAsStructValue($.cloneStructValue(vf)).MapKeys(), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
								let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Value)))
								let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(vf)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))
								await discardLegacy($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(val)).Interface(), "proto.Message"))
							}
						}
						break
					}
				}
				break
			}
			case reflect.Interface:
			{
				switch ((true as boolean)) {
					case isPointer || isSlice:
					{
						$.panic(await fmt.Sprintf("%T.%s cannot be a pointer to a interface or a slice of interface values", (m as any), f.Name))
						break
					}
					default:
					{
						if (!$.markAsStructValue($.cloneStructValue(vf)).IsNil() && (!$.stringEqual(reflect.StructTag_Get(f.Tag, "protobuf_oneof"), ""))) {
							vf = $.assignStruct(vf, $.markAsStructValue($.cloneStructValue(vf)).Elem())
							if (!$.markAsStructValue($.cloneStructValue(vf)).IsNil()) {
								vf = $.assignStruct(vf, $.markAsStructValue($.cloneStructValue(vf)).Elem())
								vf = $.assignStruct(vf, $.markAsStructValue($.cloneStructValue(vf)).Field(0))
								if ($.markAsStructValue($.cloneStructValue(vf)).Kind() == 22) {
									await discardLegacy($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(vf)).Interface(), "proto.Message"))
								}
							}
						}
						break
					}
				}
				break
			}
		}
	}

	{
		let vf = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).FieldByName("XXX_unrecognized")))
		if ($.markAsStructValue($.cloneStructValue(vf)).IsValid()) {
			if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(vf)).Type(), reflect.TypeOf($.interfaceValue(new Uint8Array([]) as $.Slice<number>, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) {
				$.panic("expected XXX_unrecognized to be of type []byte")
			}
			$.markAsStructValue($.cloneStructValue(vf)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
		}
	}

	// For proto2 messages, only discard unknown fields in message extensions
	// that have been accessed via GetExtension.
	{
		let [em, err] = __goscript_extensions.extendable((m as any))
		if (err == null) {
			// Ignore lock since discardLegacy is not concurrency safe.
			let __goscriptTuple3: any = await (em !== null && (em as any).__isVarRef !== true && (em as any).__goValue === undefined ? (em as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(em)).extensionsRead()
			let emm: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple3[0]
			for (const [__rangeKey, mx] of emm?.entries() ?? []) {
				{
					let [__goscriptShadow4, ok] = $.typeAssertTuple<__goscript_lib.Message | null>(mx.value, "proto.Message")
					if (ok) {
						await discardLegacy(__goscriptShadow4)
					}
				}
			}
		}
	}
}

var __goscriptAwait: any
