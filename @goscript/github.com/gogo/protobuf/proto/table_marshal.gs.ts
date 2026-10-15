// Generated file based on table_marshal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_custom_gogo from "./custom_gogo.gs.ts"

import type * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_discard from "./discard.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_lib_gogo from "./lib_gogo.gs.ts"

import * as __goscript_message_set from "./message_set.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_properties_gogo from "./properties_gogo.gs.ts"

import * as __goscript_table_marshal_gogo from "./table_marshal_gogo.gs.ts"

import * as __goscript_table_merge from "./table_merge.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"

import * as __goscript_wrappers from "./wrappers.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/unicode/utf8/index.js"
import "./custom_gogo.gs.ts"
import "./discard.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./lib_gogo.gs.ts"
import "./message_set.gs.ts"
import "./pointer_reflect.gs.ts"
import "./properties.gs.ts"
import "./properties_gogo.gs.ts"
import "./table_marshal_gogo.gs.ts"
import "./table_merge.gs.ts"
import "./table_unmarshal.gs.ts"
import "./wrappers.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.sizer", "proto.marshaler", "proto.marshalInfo", "proto.marshalFieldInfo", "proto.marshalElemInfo", "proto.byTag", "proto.newMarshaler"])

export type sizer = ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null

export type marshaler = ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null

export type byTag = $.Slice<marshalFieldInfo | $.VarRef<marshalFieldInfo> | null>

$.registerNamedType("proto.byTag", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto.marshalFieldInfo")));

$.registerNamedValueType(
	"proto.byTag",
	{Len: (receiver: any, ...args: any[]) => (byTag_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTag_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTag_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*proto.byTag",
	{Len: (receiver: any, ...args: any[]) => (byTag_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTag_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTag_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type newMarshaler = {
	XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	XXX_Size(): number
}

$.registerInterfaceType(
	"proto.newMarshaler",
	null,
	[$.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")])]
);

export class marshalInfo {
	public get typ(): reflect.Type | null {
		return this._fields.typ
	}

	public set typ(value: reflect.Type | null) {
		this._fields.typ = value
	}

	public get fields(): $.Slice<marshalFieldInfo | $.VarRef<marshalFieldInfo> | null> {
		return this._fields.fields
	}

	public set fields(value: $.Slice<marshalFieldInfo | $.VarRef<marshalFieldInfo> | null>) {
		this._fields.fields = value
	}

	public get unrecognized(): __goscript_pointer_reflect.field {
		return this._fields.unrecognized
	}

	public set unrecognized(value: __goscript_pointer_reflect.field) {
		this._fields.unrecognized = value
	}

	public get extensions(): __goscript_pointer_reflect.field {
		return this._fields.extensions
	}

	public set extensions(value: __goscript_pointer_reflect.field) {
		this._fields.extensions = value
	}

	public get v1extensions(): __goscript_pointer_reflect.field {
		return this._fields.v1extensions
	}

	public set v1extensions(value: __goscript_pointer_reflect.field) {
		this._fields.v1extensions = value
	}

	public get sizecache(): __goscript_pointer_reflect.field {
		return this._fields.sizecache
	}

	public set sizecache(value: __goscript_pointer_reflect.field) {
		this._fields.sizecache = value
	}

	public get initialized(): number {
		return this._fields.initialized
	}

	public set initialized(value: number) {
		this._fields.initialized = value
	}

	public get messageset(): boolean {
		return this._fields.messageset
	}

	public set messageset(value: boolean) {
		this._fields.messageset = value
	}

	public get hasmarshaler(): boolean {
		return this._fields.hasmarshaler
	}

	public set hasmarshaler(value: boolean) {
		this._fields.hasmarshaler = value
	}

	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get extElems(): globalThis.Map<number, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null {
		return this._fields.extElems
	}

	public set extElems(value: globalThis.Map<number, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null) {
		this._fields.extElems = value
	}

	public get hassizer(): boolean {
		return this._fields.hassizer
	}

	public set hassizer(value: boolean) {
		this._fields.hassizer = value
	}

	public get hasprotosizer(): boolean {
		return this._fields.hasprotosizer
	}

	public set hasprotosizer(value: boolean) {
		this._fields.hasprotosizer = value
	}

	public get bytesExtensions(): __goscript_pointer_reflect.field {
		return this._fields.bytesExtensions
	}

	public set bytesExtensions(value: __goscript_pointer_reflect.field) {
		this._fields.bytesExtensions = value
	}

	public _fields: {
		typ: reflect.Type | null
		fields: $.Slice<marshalFieldInfo | $.VarRef<marshalFieldInfo> | null>
		unrecognized: __goscript_pointer_reflect.field
		extensions: __goscript_pointer_reflect.field
		v1extensions: __goscript_pointer_reflect.field
		sizecache: __goscript_pointer_reflect.field
		initialized: number
		messageset: boolean
		hasmarshaler: boolean
		RWMutex: sync.RWMutex
		extElems: globalThis.Map<number, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null
		hassizer: boolean
		hasprotosizer: boolean
		bytesExtensions: __goscript_pointer_reflect.field
	}

	constructor(init?: Partial<{typ?: reflect.Type | null, fields?: $.Slice<marshalFieldInfo | $.VarRef<marshalFieldInfo> | null>, unrecognized?: __goscript_pointer_reflect.field, extensions?: __goscript_pointer_reflect.field, v1extensions?: __goscript_pointer_reflect.field, sizecache?: __goscript_pointer_reflect.field, initialized?: number, messageset?: boolean, hasmarshaler?: boolean, RWMutex?: sync.RWMutex, extElems?: globalThis.Map<number, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null, hassizer?: boolean, hasprotosizer?: boolean, bytesExtensions?: __goscript_pointer_reflect.field}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (null! as reflect.Type | null),
			fields: init?.fields ?? (null! as $.Slice<marshalFieldInfo | $.VarRef<marshalFieldInfo> | null>),
			unrecognized: init?.unrecognized ?? (null! as __goscript_pointer_reflect.field),
			extensions: init?.extensions ?? (null! as __goscript_pointer_reflect.field),
			v1extensions: init?.v1extensions ?? (null! as __goscript_pointer_reflect.field),
			sizecache: init?.sizecache ?? (null! as __goscript_pointer_reflect.field),
			initialized: init?.initialized ?? (0 as number),
			messageset: init?.messageset ?? (false as boolean),
			hasmarshaler: init?.hasmarshaler ?? (false as boolean),
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			extElems: init?.extElems ?? (null! as globalThis.Map<number, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null),
			hassizer: init?.hassizer ?? (false as boolean),
			hasprotosizer: init?.hasprotosizer ?? (false as boolean),
			bytesExtensions: init?.bytesExtensions ?? (null! as __goscript_pointer_reflect.field)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): marshalInfo {
		return new marshalInfo(this, true)
	}

	public __goscriptAssign(source: marshalInfo): void {
		const target = this._fields
		const values = source._fields
		target.typ = $.assignFieldValue(target.typ, values.typ, "reflect.Type")
		target.fields = values.fields
		target.unrecognized = values.unrecognized
		target.extensions = values.extensions
		target.v1extensions = values.v1extensions
		target.sizecache = values.sizecache
		target.initialized = values.initialized
		target.messageset = values.messageset
		target.hasmarshaler = values.hasmarshaler
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.extElems = values.extElems
		target.hassizer = values.hassizer
		target.hasprotosizer = values.hasprotosizer
		target.bytesExtensions = values.bytesExtensions
	}

	public async appendExtensions(b: $.Slice<number>, ext: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple0: any = (ext !== null && (ext as any).__isVarRef !== true && (ext as any).__goValue === undefined ? ((ext as any) as __goscript_extensions.XXX_InternalExtensions).extensionsRead() : __goscript_extensions.XXX_InternalExtensions.prototype.extensionsRead.call(ext))
		let m: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple0[0]
		let mu = __goscriptTuple0[1]
		if (m == null) {
			return [b, null]
		}
		await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.Locker.Unlock-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let err: $.GoError = null! as $.GoError
		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))

		// Fast-path for common cases: zero or one extensions.
		// Don't bother sorting the keys.
		if ($.len(m) <= 1) {
			for (const [__rangeKey, e] of m?.entries() ?? []) {
				if ((e.value == null) || (e.desc == null)) {
					// Extension is only in its encoded form.
					b = $.appendSlice(b, e.enc, $.byteSliceHint)
					continue
				}

				// We don't skip extensions that have an encoded form set,
				// because the extension value may have been mutated after
				// the last time this function was called.

				let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
				let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
				let v = $.varRef(e.value)
				let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
				let __goscriptTuple1: any = await (ei$ as marshalElemInfo).marshaler!(b, (p).clone(), (ei$ as marshalElemInfo).wiretag, deterministic)
				b = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (!await nerr.value.Merge(err)) {
					return [b, err]
				}
			}
			return [b, nerr.value.E]
		}

		// Sort the keys to provide a deterministic encoding.
		// Not sure this is required, but the old code does it.
		let keys: $.Slice<number> = $.makeSlice<number>(0, $.len(m), "number")
		for (const [k, __rangeValue] of m?.entries() ?? []) {
			keys = $.appendOne(keys, $.int(k))
		}
		sort.Ints(keys)

		for (let __goscriptRangeTarget0 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
			let e = ($.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(m, $.int(k, 32), new __goscript_extensions.Extension(undefined, true))[0]).clone()
			if ((e.value == null) || (e.desc == null)) {
				// Extension is only in its encoded form.
				b = $.appendSlice(b, e.enc, $.byteSliceHint)
				continue
			}

			// We don't skip extensions that have an encoded form set,
			// because the extension value may have been mutated after
			// the last time this function was called.

			let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
			let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
			let v = $.varRef(e.value)
			let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
			let __goscriptTuple2: any = await (ei$ as marshalElemInfo).marshaler!(b, (p).clone(), (ei$ as marshalElemInfo).wiretag, deterministic)
			b = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			if (!await nerr.value.Merge(err)) {
				return [b, err]
			}
		}
		return [b, nerr.value.E]
	}

	public async appendMessageSet(b: $.Slice<number>, ext: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple3: any = (ext !== null && (ext as any).__isVarRef !== true && (ext as any).__goValue === undefined ? ((ext as any) as __goscript_extensions.XXX_InternalExtensions).extensionsRead() : __goscript_extensions.XXX_InternalExtensions.prototype.extensionsRead.call(ext))
		let m: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple3[0]
		let mu = __goscriptTuple3[1]
		if (m == null) {
			return [b, null]
		}
		await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.Locker.Unlock-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let err: $.GoError = null! as $.GoError
		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))

		// Fast-path for common cases: zero or one extensions.
		// Don't bother sorting the keys.
		if ($.len(m) <= 1) {
			for (const [id, e] of m?.entries() ?? []) {
				b = $.append(b, $.uint((8) | 3, 8), $.byteSliceHint)
				b = $.append(b, $.uint((16) | 0, 8), $.byteSliceHint)
				b = appendVarint(b, $.uint64(id))

				if ((e.value == null) || (e.desc == null)) {
					// Extension is only in its encoded form.
					let msgWithLen: $.Slice<number> = __goscript_message_set.skipVarint(e.enc)
					b = $.append(b, $.uint((24) | 2, 8), $.byteSliceHint)
					b = $.appendSlice(b, msgWithLen, $.byteSliceHint)
					b = $.append(b, $.uint((8) | 4, 8), $.byteSliceHint)
					continue
				}

				// We don't skip extensions that have an encoded form set,
				// because the extension value may have been mutated after
				// the last time this function was called.

				let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
				let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
				let v = $.varRef(e.value)
				let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
				let __goscriptTuple4: any = await (ei$ as marshalElemInfo).marshaler!(b, (p).clone(), 26n, deterministic)
				b = __goscriptTuple4[0]
				err = __goscriptTuple4[1]
				if (!await nerr.value.Merge(err)) {
					return [b, err]
				}
				b = $.append(b, $.uint((8) | 4, 8), $.byteSliceHint)
			}
			return [b, nerr.value.E]
		}

		// Sort the keys to provide a deterministic encoding.
		let keys: $.Slice<number> = $.makeSlice<number>(0, $.len(m), "number")
		for (const [k, __rangeValue] of m?.entries() ?? []) {
			keys = $.appendOne(keys, $.int(k))
		}
		sort.Ints(keys)

		for (let __goscriptRangeTarget1 = keys, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let id = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number)
			let e = ($.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(m, $.int(id, 32), new __goscript_extensions.Extension(undefined, true))[0]).clone()
			b = $.append(b, $.uint((8) | 3, 8), $.byteSliceHint)
			b = $.append(b, $.uint((16) | 0, 8), $.byteSliceHint)
			b = appendVarint(b, $.uint64(id))

			if ((e.value == null) || (e.desc == null)) {
				// Extension is only in its encoded form.
				let msgWithLen: $.Slice<number> = __goscript_message_set.skipVarint(e.enc)
				b = $.append(b, $.uint((24) | 2, 8), $.byteSliceHint)
				b = $.appendSlice(b, msgWithLen, $.byteSliceHint)
				b = $.append(b, $.uint((8) | 4, 8), $.byteSliceHint)
				continue
			}

			// We don't skip extensions that have an encoded form set,
			// because the extension value may have been mutated after
			// the last time this function was called.

			let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
			let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
			let v = $.varRef(e.value)
			let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
			let __goscriptTuple5: any = await (ei$ as marshalElemInfo).marshaler!(b, (p).clone(), 26n, deterministic)
			b = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
			b = $.append(b, $.uint((8) | 4, 8), $.byteSliceHint)
			if (!await nerr.value.Merge(err)) {
				return [b, err]
			}
		}
		return [b, nerr.value.E]
	}

	public async appendV1Extensions(b: $.Slice<number>, m: globalThis.Map<number, __goscript_extensions.Extension> | null, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		if (m == null) {
			return [b, null]
		}

		// Sort the keys to provide a deterministic encoding.
		let keys: $.Slice<number> = $.makeSlice<number>(0, $.len(m), "number")
		for (const [k, __rangeValue] of m?.entries() ?? []) {
			keys = $.appendOne(keys, $.int(k))
		}
		sort.Ints(keys)

		let err: $.GoError = null! as $.GoError
		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))
		for (let __goscriptRangeTarget2 = keys, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number)
			let e = ($.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(m, $.int(k, 32), new __goscript_extensions.Extension(undefined, true))[0]).clone()
			if ((e.value == null) || (e.desc == null)) {
				// Extension is only in its encoded form.
				b = $.appendSlice(b, e.enc, $.byteSliceHint)
				continue
			}

			// We don't skip extensions that have an encoded form set,
			// because the extension value may have been mutated after
			// the last time this function was called.

			let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
			let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
			let v = $.varRef(e.value)
			let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
			let __goscriptTuple6: any = await (ei$ as marshalElemInfo).marshaler!(b, (p).clone(), (ei$ as marshalElemInfo).wiretag, deterministic)
			b = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (!await nerr.value.Merge(err)) {
				return [b, err]
			}
		}
		return [b, nerr.value.E]
	}

	public async cachedsize(ptr: __goscript_pointer_reflect.pointer): globalThis.Promise<number> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		const u$: marshalInfo = u == null ? $.pointerTarget<marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<marshalInfo>(u)
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).sizecache)) {
			return $.int(atomic.LoadInt32($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).sizecache as __goscript_pointer_reflect.field)))).toInt32()))
		}
		return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).size(ptr) : marshalInfo.prototype.size.call(u, ptr))
	}

	public async computeMarshalInfo(): globalThis.Promise<void> {
		let u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		using __defer = new $.DisposableStack()
		const u$: marshalInfo = u == null ? $.pointerTarget<marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<marshalInfo>(u)
		await (u$ as marshalInfo).RWMutex.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((u$ as marshalInfo).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if ((u$ as marshalInfo).initialized != 0) {
			return
		}

		let t = (u$ as marshalInfo).typ;
		;(u$ as marshalInfo).unrecognized = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field);
		;(u$ as marshalInfo).extensions = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field);
		;(u$ as marshalInfo).v1extensions = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field);
		;(u$ as marshalInfo).bytesExtensions = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field);
		;(u$ as marshalInfo).sizecache = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field)
		let isOneofMessage = false

		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).Implements($.pointerValueOrNil(__goscript_properties_gogo.__goscript_get_sizerType())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			;(u$ as marshalInfo).hassizer = true
		}
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).Implements($.pointerValueOrNil(__goscript_properties_gogo.__goscript_get_protosizerType())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			;(u$ as marshalInfo).hasprotosizer = true
		}
		// If the message can marshal itself, let it do it, for compatibility.
		// NOTE: This is not efficient.
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).Implements($.pointerValueOrNil(__goscript_properties.__goscript_get_marshalerType())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			;(u$ as marshalInfo).hasmarshaler = true
			atomic.StoreInt32($.fieldRef((u$ as marshalInfo)._fields, "initialized"), 1)
			return
		}

		let n = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// deal with XXX fields first
		for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
			if (!$.stringEqual(reflect.StructTag_Get(f.value.Tag, "protobuf_oneof"), "")) {
				isOneofMessage = true
			}
			if (!strings.HasPrefix(f.value.Name, "XXX_")) {
				continue
			}
			switch (f.value.Name) {
				case "XXX_sizecache":
				{
					;(u$ as marshalInfo).sizecache = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
					break
				}
				case "XXX_unrecognized":
				{
					;(u$ as marshalInfo).unrecognized = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
					break
				}
				case "XXX_InternalExtensions":
				{
					;(u$ as marshalInfo).extensions = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field);
					;(u$ as marshalInfo).messageset = $.stringEqual(reflect.StructTag_Get(f.value.Tag, "protobuf_messageset"), "1")
					break
				}
				case "XXX_extensions":
				{
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.value.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 21) {
						;(u$ as marshalInfo).v1extensions = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
					} else {
						;(u$ as marshalInfo).bytesExtensions = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
					}
					break
				}
				case "XXX_NoUnkeyedLiteral":
				{
					break
				}
				default:
				{
					$.panic($.concatString("unknown XXX field: ", f.value.Name))
					break
				}
			}
			n--
		}

		// get oneof implementers
		let oneofImplementers: $.Slice<any> = null! as $.Slice<any>
		// gogo: isOneofMessage is needed for embedded oneof messages, without a marshaler and unmarshaler
		if (isOneofMessage) {
			{
				const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil(t)!))!))).Interface()
				switch (true) {
					case $.typeAssert<__goscript_properties.oneofFuncsIface | null>(__goscriptTypeSwitchValue, "proto.oneofFuncsIface").ok:
						{
							let m: __goscript_properties.oneofFuncsIface | null = $.typeAssert<__goscript_properties.oneofFuncsIface | null>(__goscriptTypeSwitchValue, "proto.oneofFuncsIface").value
							let __goscriptTuple7: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_properties.oneofFuncsIface, null>) : $.pointerValue<Exclude<__goscript_properties.oneofFuncsIface, null>>(m)).XXX_OneofFuncs()
							oneofImplementers = __goscriptTuple7[3]
						}
						break
					case $.typeAssert<__goscript_properties.oneofWrappersIface | null>(__goscriptTypeSwitchValue, "proto.oneofWrappersIface").ok:
						{
							let m: __goscript_properties.oneofWrappersIface | null = $.typeAssert<__goscript_properties.oneofWrappersIface | null>(__goscriptTypeSwitchValue, "proto.oneofWrappersIface").value
							oneofImplementers = ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_properties.oneofWrappersIface, null>) : $.pointerValue<Exclude<__goscript_properties.oneofWrappersIface, null>>(m)).XXX_OneofWrappers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<any>)
						}
						break
				}
			}
		}

		// normal fields
		let fields: $.Slice<marshalFieldInfo> = $.makeSlice<marshalFieldInfo>(n, undefined, undefined, () => new marshalFieldInfo(undefined, true));
		;(u$ as marshalInfo).fields = $.makeSlice<marshalFieldInfo | $.VarRef<marshalFieldInfo> | null>(0, n)
		for (let __goscriptSliceWindow0 = $.sliceRange(fields), i = 0, j = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))

			if (strings.HasPrefix(f.value.Name, "XXX_")) {
				continue
			}
			let __goscriptShadow0: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null = $.indexRef(fields!, j)
			j++
			$.pointerValue<marshalFieldInfo>(__goscriptShadow0).name = f.value.Name;
			;(u$ as marshalInfo).fields = $.appendOne((u$ as marshalInfo).fields, __goscriptShadow0, $.appendZeros.nil)
			if (!$.stringEqual(reflect.StructTag_Get(f.value.Tag, "protobuf_oneof"), "")) {
				await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as marshalFieldInfo).computeOneofFieldInfo(f, oneofImplementers) : marshalFieldInfo.prototype.computeOneofFieldInfo.call(__goscriptShadow0, f, oneofImplementers))
				continue
			}
			if ($.stringEqual(reflect.StructTag_Get(f.value.Tag, "protobuf"), "")) {
				// field has no tag (not in generated message), ignore it
				;(u$ as marshalInfo).fields = $.goSlice((u$ as marshalInfo).fields, undefined, $.sliceLen((u$ as marshalInfo).fields) - 1)
				j--
				continue
			}
			await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as marshalFieldInfo).computeMarshalFieldInfo(f) : marshalFieldInfo.prototype.computeMarshalFieldInfo.call(__goscriptShadow0, f))
		}

		// fields are marshaled in tag order on the wire.
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(((u$ as marshalInfo).fields as byTag), "proto.byTag", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

		atomic.StoreInt32($.fieldRef((u$ as marshalInfo)._fields, "initialized"), 1)
	}

	public async getExtElemInfo(desc: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null): globalThis.Promise<marshalElemInfo | $.VarRef<marshalElemInfo> | null> {
		let u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		const u$: marshalInfo = u == null ? $.pointerTarget<marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<marshalInfo>(u)
		const desc$: __goscript_extensions.ExtensionDesc = desc == null ? $.pointerTarget<__goscript_extensions.ExtensionDesc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_extensions.ExtensionDesc>(desc)
		// get from cache first
		await (u$ as marshalInfo).RWMutex.RLock()
		let __goscriptTuple8: any = $.mapGet<number, marshalElemInfo | $.VarRef<marshalElemInfo> | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null>((u$ as marshalInfo).extElems, (desc$ as __goscript_extensions.ExtensionDesc).Field, null)
		let e: marshalElemInfo | $.VarRef<marshalElemInfo> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		void (u$ as marshalInfo).RWMutex.RUnlock()
		if (ok) {
			return e
		}

		let t = reflect.TypeOf((desc$ as __goscript_extensions.ExtensionDesc).ExtensionType)
		let tags: $.Slice<string> = strings.Split((desc$ as __goscript_extensions.ExtensionDesc).Tag, ",")
		let [tag, err] = strconv.Atoi($.arrayIndex(tags!, 1))
		if (err != null) {
			$.panic("tag is not an integer")
		}
		let wt = wiretype($.arrayIndex(tags!, 0))
		let [sizr, marshalr] = await typeMarshaler(t, tags, false, false)
		e = (await (async () => { const __goscriptLiteralField0 = __goscript_encode.SizeVarint($.uint64Shl($.uint64(tag), 3n)); const __goscriptLiteralField1 = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22; return new marshalElemInfo({wiretag: $.uint64Or(($.uint64Shl($.uint64(tag), 3n)), wt), tagsize: __goscriptLiteralField0, sizer: sizr, marshaler: marshalr, isptr: __goscriptLiteralField1}) })())

		// update cache
		await (u$ as marshalInfo).RWMutex.Lock()
		if ((u$ as marshalInfo).extElems == null) {
			;(u$ as marshalInfo).extElems = $.makeMap<number, marshalElemInfo | $.VarRef<marshalElemInfo> | null>()
		}
		$.mapSet((u$ as marshalInfo).extElems, (desc$ as __goscript_extensions.ExtensionDesc).Field, e)
		void (u$ as marshalInfo).RWMutex.Unlock()
		return e
	}

	public async marshal(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		const u$: marshalInfo = u == null ? $.pointerTarget<marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<marshalInfo>(u)
		if (atomic.LoadInt32($.fieldRef((u$ as marshalInfo)._fields, "initialized")) == 0) {
			await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).computeMarshalInfo() : marshalInfo.prototype.computeMarshalInfo.call(u))
		}

		// If the message can marshal itself, let it do it, for compatibility.
		// NOTE: This is not efficient.
		if ((u$ as marshalInfo).hasmarshaler) {
			let m = $.mustTypeAssert<__goscript_encode.Marshaler | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as marshalInfo).typ))).Interface(), "proto.Marshaler")
			let __goscriptTuple9: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_encode.Marshaler, null>) : $.pointerValue<Exclude<__goscript_encode.Marshaler, null>>(m)).Marshal()
			let b1: $.Slice<number> = __goscriptTuple9[0]
			let err = __goscriptTuple9[1]
			b = $.appendSlice(b, b1, $.byteSliceHint)
			return [b, err]
		}

		let err: $.GoError = null! as $.GoError
		let errLater: $.GoError = null! as $.GoError
		// The old marshaler encodes extensions at beginning.
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).extensions)) {
			let e: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null = $.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).extensions as __goscript_pointer_reflect.field)))).toExtensions()
			if ((u$ as marshalInfo).messageset) {
				let __goscriptTuple10: any = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).appendMessageSet(b, e, deterministic) : marshalInfo.prototype.appendMessageSet.call(u, b, e, deterministic))
				b = __goscriptTuple10[0]
				err = __goscriptTuple10[1]
			} else {
				let __goscriptTuple11: any = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).appendExtensions(b, e, deterministic) : marshalInfo.prototype.appendExtensions.call(u, b, e, deterministic))
				b = __goscriptTuple11[0]
				err = __goscriptTuple11[1]
			}
			if (err != null) {
				return [b, err]
			}
		}
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).v1extensions)) {
			let m: globalThis.Map<number, __goscript_extensions.Extension> | null = $.pointerValue<globalThis.Map<number, __goscript_extensions.Extension> | null>($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).v1extensions as __goscript_pointer_reflect.field)))).toOldExtensions())
			let __goscriptTuple12: any = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).appendV1Extensions(b, m, deterministic) : marshalInfo.prototype.appendV1Extensions.call(u, b, m, deterministic))
			b = __goscriptTuple12[0]
			err = __goscriptTuple12[1]
			if (err != null) {
				return [b, err]
			}
		}
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).bytesExtensions)) {
			let s: $.Slice<number> = $.pointerValue<$.Slice<number>>($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).bytesExtensions as __goscript_pointer_reflect.field)))).toBytes())
			b = $.appendSlice(b, s, $.byteSliceHint)
		}
		for (let __goscriptRangeTarget3 = (u$ as marshalInfo).fields, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as marshalFieldInfo | $.VarRef<marshalFieldInfo> | null)
			if ($.pointerValue<marshalFieldInfo>(f).required) {
				if ($.pointerValue<marshalFieldInfo>(f).isPointer && $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.offset(($.pointerValue<marshalFieldInfo>(f).field as __goscript_pointer_reflect.field)))).getPointer())).isNil()) {
					// Required field is not set.
					// We record the error but keep going, to give a complete marshaling.
					if (errLater == null) {
						errLater = $.interfaceValue<$.GoError>(new __goscript_lib.RequiredNotSetError({field: $.pointerValue<marshalFieldInfo>(f).name}), "*proto.RequiredNotSetError", /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
					}
					continue
				}
			}
			if ($.pointerValue<marshalFieldInfo>(f).isPointer && $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.offset(($.pointerValue<marshalFieldInfo>(f).field as __goscript_pointer_reflect.field)))).getPointer())).isNil()) {
				// nil pointer always marshals to nothing
				continue
			}
			let __goscriptTuple13: any = await $.pointerValue<marshalFieldInfo>(f).marshaler!(b, ptr.offset(($.pointerValue<marshalFieldInfo>(f).field as __goscript_pointer_reflect.field)), $.pointerValue<marshalFieldInfo>(f).wiretag, deterministic)
			b = __goscriptTuple13[0]
			err = __goscriptTuple13[1]
			if (err != null) {
				{
					let __goscriptTuple14: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
					let err1: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple14[0]
					let ok = __goscriptTuple14[1]
					if (ok) {
						// Required field in submessage is not set.
						// We record the error but keep going, to give a complete marshaling.
						if (errLater == null) {
							errLater = $.interfaceValue<$.GoError>(new __goscript_lib.RequiredNotSetError({field: $.concatString(($.concatString($.pointerValue<marshalFieldInfo>(f).name, ".")), $.pointerValue<__goscript_lib.RequiredNotSetError>(err1).field)}), "*proto.RequiredNotSetError", /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
						}
						continue
					}
				}
				if ($.comparableEqual(err, __goscript_encode.errRepeatedHasNil)) {
					err = errors.New($.concatString(($.concatString("proto: repeated field ", $.pointerValue<marshalFieldInfo>(f).name)), " has nil element"))
				}
				if ($.comparableEqual(err, $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error")))) {
					if (errLater == null) {
						let fullName = $.concatString(($.concatString($.mapGet<reflect.Type | null, string, string>(__goscript_properties.__goscript_get_revProtoTypes(), reflect.PtrTo($.pointerValueOrNil((u$ as marshalInfo).typ)!), "")[0], ".")), $.pointerValue<marshalFieldInfo>(f).name)
						errLater = $.interfaceValue<$.GoError>(new __goscript_lib.invalidUTF8Error({field: fullName}), "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))
					}
					continue
				}
				return [b, err]
			}
		}
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).unrecognized)) {
			let s: $.Slice<number> = $.pointerValue<$.Slice<number>>($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).unrecognized as __goscript_pointer_reflect.field)))).toBytes())
			b = $.appendSlice(b, s, $.byteSliceHint)
		}
		return [b, errLater]
	}

	public async size(ptr: __goscript_pointer_reflect.pointer): globalThis.Promise<number> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		const u$: marshalInfo = u == null ? $.pointerTarget<marshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<marshalInfo>(u)
		if (atomic.LoadInt32($.fieldRef((u$ as marshalInfo)._fields, "initialized")) == 0) {
			await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).computeMarshalInfo() : marshalInfo.prototype.computeMarshalInfo.call(u))
		}

		// If the message can marshal itself, let it do it, for compatibility.
		// NOTE: This is not efficient.
		if ((u$ as marshalInfo).hasmarshaler) {
			// Uses the message's Size method if available
			if ((u$ as marshalInfo).hassizer) {
				let s = $.mustTypeAssert<__goscript_lib_gogo.Sizer | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as marshalInfo).typ))).Interface(), "proto.Sizer")
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_lib_gogo.Sizer, null>) : $.pointerValue<Exclude<__goscript_lib_gogo.Sizer, null>>(s)).Size()
			}
			// Uses the message's ProtoSize method if available
			if ((u$ as marshalInfo).hasprotosizer) {
				let s = $.mustTypeAssert<__goscript_lib_gogo.ProtoSizer | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as marshalInfo).typ))).Interface(), "proto.ProtoSizer")
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_lib_gogo.ProtoSizer, null>) : $.pointerValue<Exclude<__goscript_lib_gogo.ProtoSizer, null>>(s)).ProtoSize()
			}

			let m = $.mustTypeAssert<__goscript_encode.Marshaler | null>($.markAsStructValue($.cloneStructValue(ptr.asPointerTo((u$ as marshalInfo).typ))).Interface(), "proto.Marshaler")
			let __goscriptTuple15: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_encode.Marshaler, null>) : $.pointerValue<Exclude<__goscript_encode.Marshaler, null>>(m)).Marshal()
			let b: $.Slice<number> = __goscriptTuple15[0]
			return $.sliceLen(b)
		}

		let n = 0
		for (let __goscriptRangeTarget4 = (u$ as marshalInfo).fields, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as marshalFieldInfo | $.VarRef<marshalFieldInfo> | null)
			if ($.pointerValue<marshalFieldInfo>(f).isPointer && $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.offset(($.pointerValue<marshalFieldInfo>(f).field as __goscript_pointer_reflect.field)))).getPointer())).isNil()) {
				// nil pointer always marshals to nothing
				continue
			}
			n = n + ((__goscriptAwait = $.pointerValue<marshalFieldInfo>(f).sizer!(ptr.offset(($.pointerValue<marshalFieldInfo>(f).field as __goscript_pointer_reflect.field)), $.pointerValue<marshalFieldInfo>(f).tagsize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).extensions)) {
			let e: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null = $.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).extensions as __goscript_pointer_reflect.field)))).toExtensions()
			if ((u$ as marshalInfo).messageset) {
				n = n + (await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).sizeMessageSet(e) : marshalInfo.prototype.sizeMessageSet.call(u, e)))
			} else {
				n = n + (await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).sizeExtensions(e) : marshalInfo.prototype.sizeExtensions.call(u, e)))
			}
		}
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).v1extensions)) {
			let m: globalThis.Map<number, __goscript_extensions.Extension> | null = $.pointerValue<globalThis.Map<number, __goscript_extensions.Extension> | null>($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).v1extensions as __goscript_pointer_reflect.field)))).toOldExtensions())
			n = n + (await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).sizeV1Extensions(m) : marshalInfo.prototype.sizeV1Extensions.call(u, m)))
		}
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).bytesExtensions)) {
			let s: $.Slice<number> = $.pointerValue<$.Slice<number>>($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).bytesExtensions as __goscript_pointer_reflect.field)))).toBytes())
			n = n + ($.sliceLen(s))
		}
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).unrecognized)) {
			let s: $.Slice<number> = $.pointerValue<$.Slice<number>>($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).unrecognized as __goscript_pointer_reflect.field)))).toBytes())
			n = n + ($.sliceLen(s))
		}

		// cache the result for use in marshal
		if (__goscript_pointer_reflect.field_IsValid((u$ as marshalInfo).sizecache)) {
			atomic.StoreInt32($.markAsStructValue($.cloneStructValue(ptr.offset(((u$ as marshalInfo).sizecache as __goscript_pointer_reflect.field)))).toInt32(), $.int(n, 32))
		}
		return n
	}

	public async sizeExtensions(ext: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null): globalThis.Promise<number> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		let __goscriptTuple16: any = (ext !== null && (ext as any).__isVarRef !== true && (ext as any).__goValue === undefined ? ((ext as any) as __goscript_extensions.XXX_InternalExtensions).extensionsRead() : __goscript_extensions.XXX_InternalExtensions.prototype.extensionsRead.call(ext))
		let m: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple16[0]
		let mu = __goscriptTuple16[1]
		if (m == null) {
			return 0
		}
		await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()

		let n = 0
		for (const [__rangeKey, e] of m?.entries() ?? []) {
			if ((e.value == null) || (e.desc == null)) {
				// Extension is only in its encoded form.
				n = n + ($.sliceLen(e.enc))
				continue
			}

			// We don't skip extensions that have an encoded form set,
			// because the extension value may have been mutated after
			// the last time this function was called.
			let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
			let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
			let v = $.varRef(e.value)
			let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
			n = n + ((__goscriptAwait = (ei$ as marshalElemInfo).sizer!((p).clone(), (ei$ as marshalElemInfo).tagsize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		void (__goscriptAwait = (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return n
	}

	public async sizeMessageSet(ext: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null): globalThis.Promise<number> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		let __goscriptTuple17: any = (ext !== null && (ext as any).__isVarRef !== true && (ext as any).__goValue === undefined ? ((ext as any) as __goscript_extensions.XXX_InternalExtensions).extensionsRead() : __goscript_extensions.XXX_InternalExtensions.prototype.extensionsRead.call(ext))
		let m: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple17[0]
		let mu = __goscriptTuple17[1]
		if (m == null) {
			return 0
		}
		await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()

		let n = 0
		for (const [id, e] of m?.entries() ?? []) {
			n = n + (2)
			n = n + (__goscript_encode.SizeVarint($.uint64(id)) + 1)

			if ((e.value == null) || (e.desc == null)) {
				// Extension is only in its encoded form.
				let msgWithLen: $.Slice<number> = __goscript_message_set.skipVarint(e.enc)
				let siz = $.sliceLen(msgWithLen)
				n = n + (siz + 1)
				continue
			}

			// We don't skip extensions that have an encoded form set,
			// because the extension value may have been mutated after
			// the last time this function was called.

			let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
			let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
			let v = $.varRef(e.value)
			let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
			n = n + ((__goscriptAwait = (ei$ as marshalElemInfo).sizer!((p).clone(), 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		void (__goscriptAwait = (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return n
	}

	public async sizeV1Extensions(m: globalThis.Map<number, __goscript_extensions.Extension> | null): globalThis.Promise<number> {
		const u: marshalInfo | $.VarRef<marshalInfo> | null = this;
		if (m == null) {
			return 0
		}

		let n = 0
		for (const [__rangeKey, e] of m?.entries() ?? []) {
			if ((e.value == null) || (e.desc == null)) {
				// Extension is only in its encoded form.
				n = n + ($.sliceLen(e.enc))
				continue
			}

			// We don't skip extensions that have an encoded form set,
			// because the extension value may have been mutated after
			// the last time this function was called.

			let ei: marshalElemInfo | $.VarRef<marshalElemInfo> | null = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).getExtElemInfo(e.desc) : marshalInfo.prototype.getExtElemInfo.call(u, e.desc))
			let ei$: marshalElemInfo = ei == null ? $.pointerTarget<marshalElemInfo>(ei) : (ei as any).__isVarRef === true ? (ei as any).value : (ei as any).__goValue === undefined ? (ei as any) : $.pointerTarget<marshalElemInfo>(ei)
			let v = $.varRef(e.value)
			let p = __goscript_pointer_reflect.toAddrPointer(v, (ei$ as marshalElemInfo).isptr)
			n = n + ((__goscriptAwait = (ei$ as marshalElemInfo).sizer!((p).clone(), (ei$ as marshalElemInfo).tagsize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return n
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"proto.marshalInfo",
		() => new marshalInfo(),
		() => [$.methodSignature("appendExtensions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ext", /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("appendMessageSet", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ext", /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("appendV1Extensions", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("cachedsize", [["ptr", "proto.pointer"]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("computeMarshalInfo", [], [], true), $.methodSignature("getExtElemInfo", [["desc", /* @__PURE__ */ $.pointerType("proto.ExtensionDesc")]], [/* @__PURE__ */ $.pointerType("proto.marshalElemInfo")], true), $.methodSignature("marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ptr", "proto.pointer"], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("size", [["ptr", "proto.pointer"]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("sizeExtensions", [["ext", /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("sizeMessageSet", [["ext", /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("sizeV1Extensions", [["m", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		marshalInfo,
		() => [/* @__PURE__ */ $.structField("typ", "reflect.Type", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("fields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto.marshalFieldInfo")), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [2], 40, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("extensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [3], 64, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("v1extensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [4], 88, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("sizecache", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [5], 112, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("initialized", /* @__PURE__ */ $.basicType("int32"), [6], 136, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("messageset", /* @__PURE__ */ $.basicType("bool"), [7], 140, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("hasmarshaler", /* @__PURE__ */ $.basicType("bool"), [8], 141, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [9], 144, true, { anonymous: true }), /* @__PURE__ */ $.structField("extElems", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.pointerType("proto.marshalElemInfo")), [10], 168, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("hassizer", /* @__PURE__ */ $.basicType("bool"), [11], 176, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("hasprotosizer", /* @__PURE__ */ $.basicType("bool"), [12], 177, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("bytesExtensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [13], 184, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class marshalFieldInfo {
	public get field(): __goscript_pointer_reflect.field {
		return this._fields.field
	}

	public set field(value: __goscript_pointer_reflect.field) {
		this._fields.field = value
	}

	public get wiretag(): bigint {
		return this._fields.wiretag
	}

	public set wiretag(value: bigint) {
		this._fields.wiretag = value
	}

	public get tagsize(): number {
		return this._fields.tagsize
	}

	public set tagsize(value: number) {
		this._fields.tagsize = value
	}

	public get sizer(): ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null {
		return this._fields.sizer
	}

	public set sizer(value: ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null) {
		this._fields.sizer = value
	}

	public get marshaler(): ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.marshaler
	}

	public set marshaler(value: ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.marshaler = value
	}

	public get isPointer(): boolean {
		return this._fields.isPointer
	}

	public set isPointer(value: boolean) {
		this._fields.isPointer = value
	}

	public get required(): boolean {
		return this._fields.required
	}

	public set required(value: boolean) {
		this._fields.required = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get oneofElems(): globalThis.Map<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null {
		return this._fields.oneofElems
	}

	public set oneofElems(value: globalThis.Map<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null) {
		this._fields.oneofElems = value
	}

	public _fields: {
		field: __goscript_pointer_reflect.field
		wiretag: bigint
		tagsize: number
		sizer: ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null
		marshaler: ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		isPointer: boolean
		required: boolean
		name: string
		oneofElems: globalThis.Map<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null
	}

	constructor(init?: Partial<{field?: __goscript_pointer_reflect.field, wiretag?: bigint, tagsize?: number, sizer?: ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null, marshaler?: ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, isPointer?: boolean, required?: boolean, name?: string, oneofElems?: globalThis.Map<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? (null! as __goscript_pointer_reflect.field),
			wiretag: init?.wiretag ?? (0n as bigint),
			tagsize: init?.tagsize ?? (0 as number),
			sizer: init?.sizer ?? (null! as ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null),
			marshaler: init?.marshaler ?? (null! as ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			isPointer: init?.isPointer ?? (false as boolean),
			required: init?.required ?? (false as boolean),
			name: init?.name ?? ("" as string),
			oneofElems: init?.oneofElems ?? (null! as globalThis.Map<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): marshalFieldInfo {
		return new marshalFieldInfo(this, true)
	}

	public __goscriptAssign(source: marshalFieldInfo): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
		target.wiretag = values.wiretag
		target.tagsize = values.tagsize
		target.sizer = values.sizer
		target.marshaler = values.marshaler
		target.isPointer = values.isPointer
		target.required = values.required
		target.name = values.name
		target.oneofElems = values.oneofElems
	}

	public async computeMarshalFieldInfo(f: reflect.StructField | $.VarRef<reflect.StructField> | null): globalThis.Promise<void> {
		let fi: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null = this;
		// parse protobuf tag of the field.
		// tag has format of "bytes,49,opt,name=foo,def=hello!"
		let tags: $.Slice<string> = strings.Split(reflect.StructTag_Get($.pointerValue<reflect.StructField>(f).Tag, "protobuf"), ",")
		if ($.stringEqual($.arrayIndex(tags!, 0), "")) {
			return
		}
		let [tag, err] = strconv.Atoi($.arrayIndex(tags!, 1))
		if (err != null) {
			$.panic("tag is not an integer")
		}
		let wt = wiretype($.arrayIndex(tags!, 0))
		if ($.stringEqual($.arrayIndex(tags!, 2), "req")) {
			$.pointerValue<marshalFieldInfo>(fi).required = true
		}
		void (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? ((fi as any) as marshalFieldInfo).setTag(f, tag, wt) : marshalFieldInfo.prototype.setTag.call(fi, f, tag, wt))
		await (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? ((fi as any) as marshalFieldInfo).setMarshaler(f, tags) : marshalFieldInfo.prototype.setMarshaler.call(fi, f, tags))
	}

	public async computeOneofFieldInfo(f: reflect.StructField | $.VarRef<reflect.StructField> | null, oneofImplementers: $.Slice<any>): globalThis.Promise<void> {
		let fi: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null = this;
		const fi$: marshalFieldInfo = fi == null ? $.pointerTarget<marshalFieldInfo>(fi) : (fi as any).__isVarRef === true ? (fi as any).value : (fi as any).__goValue === undefined ? (fi as any) : $.pointerTarget<marshalFieldInfo>(fi);
		;(fi$ as marshalFieldInfo).field = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field);
		;(fi$ as marshalFieldInfo).wiretag = 2147483647n;
		;(fi$ as marshalFieldInfo).isPointer = true
		let __goscriptTuple18: any = makeOneOfMarshaler(fi, f);
		;(fi$ as marshalFieldInfo).sizer = __goscriptTuple18[0];
		;(fi$ as marshalFieldInfo).marshaler = __goscriptTuple18[1];
		;(fi$ as marshalFieldInfo).oneofElems = $.makeMap<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null>()

		let ityp = $.pointerValue<reflect.StructField>(f).Type
		for (let __goscriptRangeTarget5 = oneofImplementers, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let o = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as any)
			let t = reflect.TypeOf(o)
			if (!(__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil(ityp)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				continue
			}
			let sf = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
			let tags: $.Slice<string> = strings.Split(reflect.StructTag_Get(sf.Tag, "protobuf"), ",")
			let [tag, err] = strconv.Atoi($.arrayIndex(tags!, 1))
			if (err != null) {
				$.panic("tag is not an integer")
			}
			let wt = wiretype($.arrayIndex(tags!, 0))
			let [sizr, marshalr] = await typeMarshaler(sf.Type, tags, false, true)
			$.mapSet((fi$ as marshalFieldInfo).oneofElems, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (() => { const __goscriptLiteralField2 = __goscript_encode.SizeVarint($.uint64Shl($.uint64(tag), 3n)); return new marshalElemInfo({wiretag: $.uint64Or(($.uint64Shl($.uint64(tag), 3n)), wt), tagsize: __goscriptLiteralField2, sizer: sizr, marshaler: marshalr}) })())
		}
	}

	public async setMarshaler(f: reflect.StructField | $.VarRef<reflect.StructField> | null, tags: $.Slice<string>): globalThis.Promise<void> {
		let fi: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null = this;
		const fi$: marshalFieldInfo = fi == null ? $.pointerTarget<marshalFieldInfo>(fi) : (fi as any).__isVarRef === true ? (fi as any).value : (fi as any).__goValue === undefined ? (fi as any) : $.pointerTarget<marshalFieldInfo>(fi)
		const f$: reflect.StructField = f == null ? $.pointerTarget<reflect.StructField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<reflect.StructField>(f)
		switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((f$ as reflect.StructField).Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Map:
			{
				;(fi$ as marshalFieldInfo).isPointer = true
				let __goscriptTuple19: any = await makeMapMarshaler(f);
				;(fi$ as marshalFieldInfo).sizer = __goscriptTuple19[0];
				;(fi$ as marshalFieldInfo).marshaler = __goscriptTuple19[1]
				return
				break
			}
			case reflect.Ptr:
			case reflect.Slice:
			{
				;(fi$ as marshalFieldInfo).isPointer = true
				break
			}
		}
		let __goscriptTuple20: any = await typeMarshaler((f$ as reflect.StructField).Type, tags, true, false);
		;(fi$ as marshalFieldInfo).sizer = __goscriptTuple20[0];
		;(fi$ as marshalFieldInfo).marshaler = __goscriptTuple20[1]
	}

	public setTag(f: reflect.StructField | $.VarRef<reflect.StructField> | null, tag: number, wt: bigint): void {
		let fi: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null = this;
		const fi$: marshalFieldInfo = fi == null ? $.pointerTarget<marshalFieldInfo>(fi) : (fi as any).__isVarRef === true ? (fi as any).value : (fi as any).__goValue === undefined ? (fi as any) : $.pointerTarget<marshalFieldInfo>(fi);
		;(fi$ as marshalFieldInfo).field = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field);
		;(fi$ as marshalFieldInfo).wiretag = $.uint64Or(($.uint64Shl($.uint64(tag), 3n)), wt);
		;(fi$ as marshalFieldInfo).tagsize = __goscript_encode.SizeVarint($.uint64Shl($.uint64(tag), 3n))
	}

	static __typeInfo = $.registerStructType(
		"proto.marshalFieldInfo",
		() => new marshalFieldInfo(),
		() => [$.methodSignature("computeMarshalFieldInfo", [["f", /* @__PURE__ */ $.pointerType("reflect.StructField")]], [], true), $.methodSignature("computeOneofFieldInfo", [["f", /* @__PURE__ */ $.pointerType("reflect.StructField")], ["oneofImplementers", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("setMarshaler", [["f", /* @__PURE__ */ $.pointerType("reflect.StructField")], ["tags", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("setTag", [["f", /* @__PURE__ */ $.pointerType("reflect.StructField")], ["tag", /* @__PURE__ */ $.basicType("int")], ["wt", /* @__PURE__ */ $.basicType("uint64")]], [], true)],
		marshalFieldInfo,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("wiretag", /* @__PURE__ */ $.basicType("uint64"), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("tagsize", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("sizer", ({ kind: $.TypeKind.Function, name: "proto.sizer", params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo), [3], 40, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("marshaler", ({ kind: $.TypeKind.Function, name: "proto.marshaler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [4], 48, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("isPointer", /* @__PURE__ */ $.basicType("bool"), [5], 56, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("required", /* @__PURE__ */ $.basicType("bool"), [6], 57, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [7], 64, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("oneofElems", /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.pointerType("proto.marshalElemInfo")), [8], 80, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class marshalElemInfo {
	public get wiretag(): bigint {
		return this._fields.wiretag
	}

	public set wiretag(value: bigint) {
		this._fields.wiretag = value
	}

	public get tagsize(): number {
		return this._fields.tagsize
	}

	public set tagsize(value: number) {
		this._fields.tagsize = value
	}

	public get sizer(): ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null {
		return this._fields.sizer
	}

	public set sizer(value: ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null) {
		this._fields.sizer = value
	}

	public get marshaler(): ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.marshaler
	}

	public set marshaler(value: ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.marshaler = value
	}

	public get isptr(): boolean {
		return this._fields.isptr
	}

	public set isptr(value: boolean) {
		this._fields.isptr = value
	}

	public _fields: {
		wiretag: bigint
		tagsize: number
		sizer: ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null
		marshaler: ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		isptr: boolean
	}

	constructor(init?: Partial<{wiretag?: bigint, tagsize?: number, sizer?: ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null, marshaler?: ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, isptr?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			wiretag: init?.wiretag ?? (0n as bigint),
			tagsize: init?.tagsize ?? (0 as number),
			sizer: init?.sizer ?? (null! as ((_p0: __goscript_pointer_reflect.pointer, _p1: number) => number | globalThis.Promise<number>) | null),
			marshaler: init?.marshaler ?? (null! as ((b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			isptr: init?.isptr ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): marshalElemInfo {
		return new marshalElemInfo(this, true)
	}

	public __goscriptAssign(source: marshalElemInfo): void {
		const target = this._fields
		const values = source._fields
		target.wiretag = values.wiretag
		target.tagsize = values.tagsize
		target.sizer = values.sizer
		target.marshaler = values.marshaler
		target.isptr = values.isptr
	}

	static __typeInfo = $.registerStructType(
		"proto.marshalElemInfo",
		() => new marshalElemInfo(),
		() => [],
		marshalElemInfo,
		() => [/* @__PURE__ */ $.structField("wiretag", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("tagsize", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("sizer", ({ kind: $.TypeKind.Function, name: "proto.sizer", params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("marshaler", ({ kind: $.TypeKind.Function, name: "proto.marshaler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("isptr", /* @__PURE__ */ $.basicType("bool"), [4], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export let marshalInfoMap: globalThis.Map<reflect.Type | null, marshalInfo | $.VarRef<marshalInfo> | null> | null = $.makeMap<reflect.Type | null, marshalInfo | $.VarRef<marshalInfo> | null>([])

export function __goscript_set_marshalInfoMap(__goscriptValue: globalThis.Map<reflect.Type | null, marshalInfo | $.VarRef<marshalInfo> | null> | null): void {
	marshalInfoMap = __goscriptValue
}

export let marshalInfoLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_marshalInfoLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(marshalInfoLock.value, __goscriptValue)
}

export let uint8SliceType: reflect.Kind = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "[]uint8", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))).Kind()

export function __goscript_set_uint8SliceType(__goscriptValue: reflect.Kind): void {
	uint8SliceType = __goscriptValue
}

export async function getMarshalInfo(t: reflect.Type | null): globalThis.Promise<marshalInfo | $.VarRef<marshalInfo> | null> {
	await marshalInfoLock.value.Lock()
	let __goscriptTuple21: any = $.mapGet<reflect.Type | null, marshalInfo | $.VarRef<marshalInfo> | null, marshalInfo | $.VarRef<marshalInfo> | null>(marshalInfoMap, t, null)
	let u: marshalInfo | $.VarRef<marshalInfo> | null = __goscriptTuple21[0]
	let ok = __goscriptTuple21[1]
	if (!ok) {
		u = new marshalInfo({typ: t})
		$.mapSet(marshalInfoMap, t, u)
	}
	marshalInfoLock.value.Unlock()
	return u
}

export async function getMessageMarshalInfo(msg: any, a: __goscript_lib.InternalMessageInfo | $.VarRef<__goscript_lib.InternalMessageInfo> | null): globalThis.Promise<marshalInfo | $.VarRef<marshalInfo> | null> {
	const a$: __goscript_lib.InternalMessageInfo = a == null ? $.pointerTarget<__goscript_lib.InternalMessageInfo>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<__goscript_lib.InternalMessageInfo>(a)
	// u := a.marshal, but atomically.
	// We use an atomic here to ensure memory consistency.
	let u: marshalInfo | $.VarRef<marshalInfo> | null = await __goscript_pointer_reflect.atomicLoadMarshalInfo($.fieldRef((a$ as __goscript_lib.InternalMessageInfo)._fields, "marshal"))
	if (u == null) {
		// Get marshal information from type of message.
		let t = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(msg))).Type()
		if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			$.panic(await fmt.Sprintf("cannot handle non-pointer message type %v", (t as any)))
		}
		u = await getMarshalInfo((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		// Store it in the cache for later users.
		// a.marshal = u, but atomically.
		await __goscript_pointer_reflect.atomicStoreMarshalInfo($.fieldRef((a$ as __goscript_lib.InternalMessageInfo)._fields, "marshal"), u)
	}
	return u
}

export function byTag_Len(a: byTag): number {
	return $.sliceLen((a as byTag))
}

export function byTag_Swap(a: byTag, i: number, j: number): void {
	let __goscriptAssign0_0: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null = $.arrayIndex(a!, j)
	let __goscriptAssign0_1: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null = $.arrayIndex(a!, i)
	$.sliceElems(a!)[$.sliceSlot(a!, i)] = __goscriptAssign0_0
	$.sliceElems(a!)[$.sliceSlot(a!, j)] = __goscriptAssign0_1
}

export function byTag_Less(a: byTag, i: number, j: number): boolean {
	return $.pointerValue<marshalFieldInfo>($.arrayIndex(a!, i)).wiretag < $.pointerValue<marshalFieldInfo>($.arrayIndex(a!, j)).wiretag
}

export function wiretype(encoding: string): bigint {
	switch (encoding) {
		case "fixed32":
		{
			return 5n
			break
		}
		case "fixed64":
		{
			return 1n
			break
		}
		case "varint":
		case "zigzag32":
		case "zigzag64":
		{
			return 0n
			break
		}
		case "bytes":
		{
			return 2n
			break
		}
		case "group":
		{
			return 3n
			break
		}
	}
	$.panic($.concatString("unknown wire type ", encoding))
	throw new globalThis.Error("goscript: unreachable return")
}

export async function typeMarshaler(t: reflect.Type | null, tags: $.Slice<string>, nozero: boolean, oneof: boolean): globalThis.Promise<[sizer | null, marshaler | null]> {
	let encoding = $.arrayIndex(tags!, 0)

	let __goscriptShadow1 = false
	let slice = false
	if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)) {
		slice = true
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
		__goscriptShadow1 = true
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let packed = false
	let proto3 = false
	let ctype = false
	let isTime = false
	let isDuration = false
	let isWktPointer = false
	let validateUTF8 = true
	for (let __goscriptSliceWindow1 = $.sliceRange(tags), i = 2; i < __goscriptSliceWindow1.length; i++) {
		if ($.stringEqual(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string), "packed")) {
			packed = true
		}
		if ($.stringEqual(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string), "proto3")) {
			proto3 = true
		}
		if (strings.HasPrefix(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string), "customtype=")) {
			ctype = true
		}
		if ($.stringEqual(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string), "stdtime")) {
			isTime = true
		}
		if ($.stringEqual(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string), "stdduration")) {
			isDuration = true
		}
		if ($.stringEqual(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as string), "wktptr")) {
			isWktPointer = true
		}
	}
	validateUTF8 = validateUTF8 && proto3
	if ((!proto3 && !__goscriptShadow1) && !slice) {
		nozero = false
	}

	if (ctype) {
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).Implements($.pointerValueOrNil(__goscript_custom_gogo.customType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if (slice) {
				return __goscript_table_marshal_gogo.makeMessageRefSliceMarshaler(await getMarshalInfo(t))
			}
			if (__goscriptShadow1) {
				return __goscript_table_marshal_gogo.makeCustomPtrMarshaler(await getMarshalInfo(t))
			}
			return __goscript_table_marshal_gogo.makeCustomMarshaler(await getMarshalInfo(t))
		} else {
			$.panic(await fmt.Sprintf("custom type: type: %v, does not implement the proto.custom interface", (t as any)))
		}
	}

	if (isTime) {
		if (__goscriptShadow1) {
			if (slice) {
				return __goscript_table_marshal_gogo.makeTimePtrSliceMarshaler(await getMarshalInfo(t))
			}
			return __goscript_table_marshal_gogo.makeTimePtrMarshaler(await getMarshalInfo(t))
		}
		if (slice) {
			return __goscript_table_marshal_gogo.makeTimeSliceMarshaler(await getMarshalInfo(t))
		}
		return __goscript_table_marshal_gogo.makeTimeMarshaler(await getMarshalInfo(t))
	}

	if (isDuration) {
		if (__goscriptShadow1) {
			if (slice) {
				return __goscript_table_marshal_gogo.makeDurationPtrSliceMarshaler(await getMarshalInfo(t))
			}
			return __goscript_table_marshal_gogo.makeDurationPtrMarshaler(await getMarshalInfo(t))
		}
		if (slice) {
			return __goscript_table_marshal_gogo.makeDurationSliceMarshaler(await getMarshalInfo(t))
		}
		return __goscript_table_marshal_gogo.makeDurationMarshaler(await getMarshalInfo(t))
	}

	if (isWktPointer) {
		switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Float64:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdDoubleValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdDoubleValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdDoubleValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdDoubleValueMarshaler(await getMarshalInfo(t))
				break
			}
			case reflect.Float32:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdFloatValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdFloatValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdFloatValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdFloatValueMarshaler(await getMarshalInfo(t))
				break
			}
			case reflect.Int64:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdInt64ValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdInt64ValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdInt64ValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdInt64ValueMarshaler(await getMarshalInfo(t))
				break
			}
			case reflect.Uint64:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdUInt64ValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdUInt64ValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdUInt64ValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdUInt64ValueMarshaler(await getMarshalInfo(t))
				break
			}
			case reflect.Int32:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdInt32ValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdInt32ValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdInt32ValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdInt32ValueMarshaler(await getMarshalInfo(t))
				break
			}
			case reflect.Uint32:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdUInt32ValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdUInt32ValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdUInt32ValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdUInt32ValueMarshaler(await getMarshalInfo(t))
				break
			}
			case reflect.Bool:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdBoolValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdBoolValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdBoolValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdBoolValueMarshaler(await getMarshalInfo(t))
				break
			}
			case reflect.String:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdStringValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdStringValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdStringValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdStringValueMarshaler(await getMarshalInfo(t))
				break
			}
			case uint8SliceType:
			{
				if (__goscriptShadow1) {
					if (slice) {
						return __goscript_wrappers.makeStdBytesValuePtrSliceMarshaler(await getMarshalInfo(t))
					}
					return __goscript_wrappers.makeStdBytesValuePtrMarshaler(await getMarshalInfo(t))
				}
				if (slice) {
					return __goscript_wrappers.makeStdBytesValueSliceMarshaler(await getMarshalInfo(t))
				}
				return __goscript_wrappers.makeStdBytesValueMarshaler(await getMarshalInfo(t))
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("unknown wktpointer type %#v", (t as any)))
				break
			}
		}
	}

	switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Bool:
		{
			if (__goscriptShadow1) {
				return [sizeBoolPtr, appendBoolPtr]
			}
			if (slice) {
				if (packed) {
					return [sizeBoolPackedSlice, appendBoolPackedSlice]
				}
				return [sizeBoolSlice, appendBoolSlice]
			}
			if (nozero) {
				return [sizeBoolValueNoZero, appendBoolValueNoZero]
			}
			return [sizeBoolValue, appendBoolValue]
			break
		}
		case reflect.Uint32:
		{
			switch (encoding) {
				case "fixed32":
				{
					if (__goscriptShadow1) {
						return [sizeFixed32Ptr, appendFixed32Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeFixed32PackedSlice, appendFixed32PackedSlice]
						}
						return [sizeFixed32Slice, appendFixed32Slice]
					}
					if (nozero) {
						return [sizeFixed32ValueNoZero, appendFixed32ValueNoZero]
					}
					return [sizeFixed32Value, appendFixed32Value]
					break
				}
				case "varint":
				{
					if (__goscriptShadow1) {
						return [sizeVarint32Ptr, appendVarint32Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeVarint32PackedSlice, appendVarint32PackedSlice]
						}
						return [sizeVarint32Slice, appendVarint32Slice]
					}
					if (nozero) {
						return [sizeVarint32ValueNoZero, appendVarint32ValueNoZero]
					}
					return [sizeVarint32Value, appendVarint32Value]
					break
				}
			}
			break
		}
		case reflect.Int32:
		{
			switch (encoding) {
				case "fixed32":
				{
					if (__goscriptShadow1) {
						return [sizeFixedS32Ptr, appendFixedS32Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeFixedS32PackedSlice, appendFixedS32PackedSlice]
						}
						return [sizeFixedS32Slice, appendFixedS32Slice]
					}
					if (nozero) {
						return [sizeFixedS32ValueNoZero, appendFixedS32ValueNoZero]
					}
					return [sizeFixedS32Value, appendFixedS32Value]
					break
				}
				case "varint":
				{
					if (__goscriptShadow1) {
						return [sizeVarintS32Ptr, appendVarintS32Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeVarintS32PackedSlice, appendVarintS32PackedSlice]
						}
						return [sizeVarintS32Slice, appendVarintS32Slice]
					}
					if (nozero) {
						return [sizeVarintS32ValueNoZero, appendVarintS32ValueNoZero]
					}
					return [sizeVarintS32Value, appendVarintS32Value]
					break
				}
				case "zigzag32":
				{
					if (__goscriptShadow1) {
						return [sizeZigzag32Ptr, appendZigzag32Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeZigzag32PackedSlice, appendZigzag32PackedSlice]
						}
						return [sizeZigzag32Slice, appendZigzag32Slice]
					}
					if (nozero) {
						return [sizeZigzag32ValueNoZero, appendZigzag32ValueNoZero]
					}
					return [sizeZigzag32Value, appendZigzag32Value]
					break
				}
			}
			break
		}
		case reflect.Uint64:
		{
			switch (encoding) {
				case "fixed64":
				{
					if (__goscriptShadow1) {
						return [sizeFixed64Ptr, appendFixed64Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeFixed64PackedSlice, appendFixed64PackedSlice]
						}
						return [sizeFixed64Slice, appendFixed64Slice]
					}
					if (nozero) {
						return [sizeFixed64ValueNoZero, appendFixed64ValueNoZero]
					}
					return [sizeFixed64Value, appendFixed64Value]
					break
				}
				case "varint":
				{
					if (__goscriptShadow1) {
						return [sizeVarint64Ptr, appendVarint64Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeVarint64PackedSlice, appendVarint64PackedSlice]
						}
						return [sizeVarint64Slice, appendVarint64Slice]
					}
					if (nozero) {
						return [sizeVarint64ValueNoZero, appendVarint64ValueNoZero]
					}
					return [sizeVarint64Value, appendVarint64Value]
					break
				}
			}
			break
		}
		case reflect.Int64:
		{
			switch (encoding) {
				case "fixed64":
				{
					if (__goscriptShadow1) {
						return [sizeFixedS64Ptr, appendFixedS64Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeFixedS64PackedSlice, appendFixedS64PackedSlice]
						}
						return [sizeFixedS64Slice, appendFixedS64Slice]
					}
					if (nozero) {
						return [sizeFixedS64ValueNoZero, appendFixedS64ValueNoZero]
					}
					return [sizeFixedS64Value, appendFixedS64Value]
					break
				}
				case "varint":
				{
					if (__goscriptShadow1) {
						return [sizeVarintS64Ptr, appendVarintS64Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeVarintS64PackedSlice, appendVarintS64PackedSlice]
						}
						return [sizeVarintS64Slice, appendVarintS64Slice]
					}
					if (nozero) {
						return [sizeVarintS64ValueNoZero, appendVarintS64ValueNoZero]
					}
					return [sizeVarintS64Value, appendVarintS64Value]
					break
				}
				case "zigzag64":
				{
					if (__goscriptShadow1) {
						return [sizeZigzag64Ptr, appendZigzag64Ptr]
					}
					if (slice) {
						if (packed) {
							return [sizeZigzag64PackedSlice, appendZigzag64PackedSlice]
						}
						return [sizeZigzag64Slice, appendZigzag64Slice]
					}
					if (nozero) {
						return [sizeZigzag64ValueNoZero, appendZigzag64ValueNoZero]
					}
					return [sizeZigzag64Value, appendZigzag64Value]
					break
				}
			}
			break
		}
		case reflect.Float32:
		{
			if (__goscriptShadow1) {
				return [sizeFloat32Ptr, appendFloat32Ptr]
			}
			if (slice) {
				if (packed) {
					return [sizeFloat32PackedSlice, appendFloat32PackedSlice]
				}
				return [sizeFloat32Slice, appendFloat32Slice]
			}
			if (nozero) {
				return [sizeFloat32ValueNoZero, appendFloat32ValueNoZero]
			}
			return [sizeFloat32Value, appendFloat32Value]
			break
		}
		case reflect.Float64:
		{
			if (__goscriptShadow1) {
				return [sizeFloat64Ptr, appendFloat64Ptr]
			}
			if (slice) {
				if (packed) {
					return [sizeFloat64PackedSlice, appendFloat64PackedSlice]
				}
				return [sizeFloat64Slice, appendFloat64Slice]
			}
			if (nozero) {
				return [sizeFloat64ValueNoZero, appendFloat64ValueNoZero]
			}
			return [sizeFloat64Value, appendFloat64Value]
			break
		}
		case reflect.String:
		{
			if (validateUTF8) {
				if (__goscriptShadow1) {
					return [sizeStringPtr, appendUTF8StringPtr]
				}
				if (slice) {
					return [sizeStringSlice, appendUTF8StringSlice]
				}
				if (nozero) {
					return [sizeStringValueNoZero, appendUTF8StringValueNoZero]
				}
				return [sizeStringValue, appendUTF8StringValue]
			}
			if (__goscriptShadow1) {
				return [sizeStringPtr, appendStringPtr]
			}
			if (slice) {
				return [sizeStringSlice, appendStringSlice]
			}
			if (nozero) {
				return [sizeStringValueNoZero, appendStringValueNoZero]
			}
			return [sizeStringValue, appendStringValue]
			break
		}
		case reflect.Slice:
		{
			if (slice) {
				return [sizeBytesSlice, appendBytesSlice]
			}
			if (oneof) {
				// Oneof bytes field may also have "proto3" tag.
				// We want to marshal it as a oneof field. Do this
				// check before the proto3 check.
				return [sizeBytesOneof, appendBytesOneof]
			}
			if (proto3) {
				return [sizeBytes3, appendBytes3]
			}
			return [sizeBytes, appendBytes]
			break
		}
		case reflect.Struct:
		{
			switch (encoding) {
				case "group":
				{
					if (slice) {
						return makeGroupSliceMarshaler(await getMarshalInfo(t))
					}
					return makeGroupMarshaler(await getMarshalInfo(t))
					break
				}
				case "bytes":
				{
					if (__goscriptShadow1) {
						if (slice) {
							return makeMessageSliceMarshaler(await getMarshalInfo(t))
						}
						return makeMessageMarshaler(await getMarshalInfo(t))
					} else {
						if (slice) {
							return __goscript_table_marshal_gogo.makeMessageRefSliceMarshaler(await getMarshalInfo(t))
						}
						return __goscript_table_marshal_gogo.makeMessageRefMarshaler(await getMarshalInfo(t))
					}
					break
				}
			}
			break
		}
	}
	$.panic(await fmt.Sprintf("unknown or mismatched type: type: %v, wire type: %v", (t as any), encoding))
	throw new globalThis.Error("goscript: unreachable return")
}

export function sizeFixed32Value(_p0: __goscript_pointer_reflect.pointer, tagsize: number): number {
	return 4 + tagsize
}

export function sizeFixed32ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.uint($.pointerValue<number>(ptr.toUint32()), 32)
	if (v == 0) {
		return 0
	}
	return 4 + tagsize
}

export function sizeFixed32Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toUint32Ptr())
	if (p == null) {
		return 0
	}
	return 4 + tagsize
}

export function sizeFixed32Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	return (4 + tagsize) * $.sliceLen(s)
}

export function sizeFixed32PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	return ((4 * $.sliceLen(s)) + __goscript_encode.SizeVarint($.uint64(4 * $.sliceLen(s)))) + tagsize
}

export function sizeFixedS32Value(_p0: __goscript_pointer_reflect.pointer, tagsize: number): number {
	return 4 + tagsize
}

export function sizeFixedS32ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	if (v == 0) {
		return 0
	}
	return 4 + tagsize
}

export async function sizeFixedS32Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let p = await ptr.getInt32Ptr()
	if (p == null) {
		return 0
	}
	return 4 + tagsize
}

export async function sizeFixedS32Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	return (4 + tagsize) * $.sliceLen(s)
}

export async function sizeFixedS32PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	if ($.sliceLen(s) == 0) {
		return 0
	}
	return ((4 * $.sliceLen(s)) + __goscript_encode.SizeVarint($.uint64(4 * $.sliceLen(s)))) + tagsize
}

export function sizeFloat32Value(_p0: __goscript_pointer_reflect.pointer, tagsize: number): number {
	return 4 + tagsize
}

export function sizeFloat32ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = math.Float32bits($.pointerValue<number>(ptr.toFloat32()))
	if (v == 0) {
		return 0
	}
	return 4 + tagsize
}

export function sizeFloat32Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toFloat32Ptr())
	if (p == null) {
		return 0
	}
	return 4 + tagsize
}

export function sizeFloat32Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat32Slice())
	return (4 + tagsize) * $.sliceLen(s)
}

export function sizeFloat32PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	return ((4 * $.sliceLen(s)) + __goscript_encode.SizeVarint($.uint64(4 * $.sliceLen(s)))) + tagsize
}

export function sizeFixed64Value(_p0: __goscript_pointer_reflect.pointer, tagsize: number): number {
	return 8 + tagsize
}

export function sizeFixed64ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toUint64())
	if (v == 0n) {
		return 0
	}
	return 8 + tagsize
}

export function sizeFixed64Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toUint64Ptr())
	if (p == null) {
		return 0
	}
	return 8 + tagsize
}

export function sizeFixed64Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	return (8 + tagsize) * $.sliceLen(s)
}

export function sizeFixed64PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	return ((8 * $.sliceLen(s)) + __goscript_encode.SizeVarint($.uint64(8 * $.sliceLen(s)))) + tagsize
}

export function sizeFixedS64Value(_p0: __goscript_pointer_reflect.pointer, tagsize: number): number {
	return 8 + tagsize
}

export function sizeFixedS64ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	if (v == 0n) {
		return 0
	}
	return 8 + tagsize
}

export function sizeFixedS64Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toInt64Ptr())
	if (p == null) {
		return 0
	}
	return 8 + tagsize
}

export function sizeFixedS64Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	return (8 + tagsize) * $.sliceLen(s)
}

export function sizeFixedS64PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	return ((8 * $.sliceLen(s)) + __goscript_encode.SizeVarint($.uint64(8 * $.sliceLen(s)))) + tagsize
}

export function sizeFloat64Value(_p0: __goscript_pointer_reflect.pointer, tagsize: number): number {
	return 8 + tagsize
}

export function sizeFloat64ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = math.Float64bits($.pointerValue<number>(ptr.toFloat64()))
	if (v == 0n) {
		return 0
	}
	return 8 + tagsize
}

export function sizeFloat64Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toFloat64Ptr())
	if (p == null) {
		return 0
	}
	return 8 + tagsize
}

export function sizeFloat64Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat64Slice())
	return (8 + tagsize) * $.sliceLen(s)
}

export function sizeFloat64PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	return ((8 * $.sliceLen(s)) + __goscript_encode.SizeVarint($.uint64(8 * $.sliceLen(s)))) + tagsize
}

export function sizeVarint32Value(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.uint($.pointerValue<number>(ptr.toUint32()), 32)
	return __goscript_encode.SizeVarint($.uint64(v)) + tagsize
}

export function sizeVarint32ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.uint($.pointerValue<number>(ptr.toUint32()), 32)
	if (v == 0) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64(v)) + tagsize
}

export function sizeVarint32Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toUint32Ptr())
	if (p == null) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64($.pointerValue<number>(p))) + tagsize
}

export function sizeVarint32Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	let n = 0
	for (let __goscriptRangeTarget6 = s, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)) + tagsize)
	}
	return n
}

export function sizeVarint32PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget7 = s, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)))
	}
	return (n + __goscript_encode.SizeVarint($.uint64(n))) + tagsize
}

export function sizeVarintS32Value(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	return __goscript_encode.SizeVarint($.uint64(v)) + tagsize
}

export function sizeVarintS32ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	if (v == 0) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64(v)) + tagsize
}

export async function sizeVarintS32Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let p = await ptr.getInt32Ptr()
	if (p == null) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64($.pointerValue<number>(p))) + tagsize
}

export async function sizeVarintS32Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	let n = 0
	for (let __goscriptRangeTarget8 = s, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)) + tagsize)
	}
	return n
}

export async function sizeVarintS32PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget9 = s, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)))
	}
	return (n + __goscript_encode.SizeVarint($.uint64(n))) + tagsize
}

export function sizeVarint64Value(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toUint64())
	return __goscript_encode.SizeVarint(v) + tagsize
}

export function sizeVarint64ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toUint64())
	if (v == 0n) {
		return 0
	}
	return __goscript_encode.SizeVarint(v) + tagsize
}

export function sizeVarint64Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toUint64Ptr())
	if (p == null) {
		return 0
	}
	return __goscript_encode.SizeVarint($.pointerValue<bigint>(p)) + tagsize
}

export function sizeVarint64Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	let n = 0
	for (let __goscriptRangeTarget10 = s, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint(v) + tagsize)
	}
	return n
}

export function sizeVarint64PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget11 = s, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint(v))
	}
	return (n + __goscript_encode.SizeVarint($.uint64(n))) + tagsize
}

export function sizeVarintS64Value(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	return __goscript_encode.SizeVarint($.uint64(v)) + tagsize
}

export function sizeVarintS64ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	if (v == 0n) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64(v)) + tagsize
}

export function sizeVarintS64Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toInt64Ptr())
	if (p == null) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64($.pointerValue<bigint>(p))) + tagsize
}

export function sizeVarintS64Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	let n = 0
	for (let __goscriptRangeTarget12 = s, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)) + tagsize)
	}
	return n
}

export function sizeVarintS64PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget13 = s, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)))
	}
	return (n + __goscript_encode.SizeVarint($.uint64(n))) + tagsize
}

export function sizeZigzag32Value(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	return __goscript_encode.SizeVarint($.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))) + tagsize
}

export function sizeZigzag32ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	if (v == 0) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))) + tagsize
}

export async function sizeZigzag32Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let p = await ptr.getInt32Ptr()
	if (p == null) {
		return 0
	}
	let v = $.pointerValue<number>(p)
	return __goscript_encode.SizeVarint($.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))) + tagsize
}

export async function sizeZigzag32Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	let n = 0
	for (let __goscriptRangeTarget14 = s, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))) + tagsize)
	}
	return n
}

export async function sizeZigzag32PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget15 = s, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))))
	}
	return (n + __goscript_encode.SizeVarint($.uint64(n))) + tagsize
}

export function sizeZigzag64Value(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	return __goscript_encode.SizeVarint($.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n))))) + tagsize
}

export function sizeZigzag64ValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	if (v == 0n) {
		return 0
	}
	return __goscript_encode.SizeVarint($.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n))))) + tagsize
}

export function sizeZigzag64Ptr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toInt64Ptr())
	if (p == null) {
		return 0
	}
	let v = $.pointerValue<bigint>(p)
	return __goscript_encode.SizeVarint($.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n))))) + tagsize
}

export function sizeZigzag64Slice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	let n = 0
	for (let __goscriptRangeTarget16 = s, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint($.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n))))) + tagsize)
	}
	return n
}

export function sizeZigzag64PackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	let n = 0
	for (let __goscriptRangeTarget17 = s, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint($.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n))))))
	}
	return (n + __goscript_encode.SizeVarint($.uint64(n))) + tagsize
}

export function sizeBoolValue(_p0: __goscript_pointer_reflect.pointer, tagsize: number): number {
	return 1 + tagsize
}

export function sizeBoolValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<boolean>(ptr.toBool())
	if (!v) {
		return 0
	}
	return 1 + tagsize
}

export function sizeBoolPtr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<boolean> | null>(ptr.toBoolPtr())
	if (p == null) {
		return 0
	}
	return 1 + tagsize
}

export function sizeBoolSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(ptr.toBoolSlice())
	return (1 + tagsize) * $.sliceLen(s)
}

export function sizeBoolPackedSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(ptr.toBoolSlice())
	if ($.sliceLen(s) == 0) {
		return 0
	}
	return ($.sliceLen(s) + __goscript_encode.SizeVarint($.uint64($.sliceLen(s)))) + tagsize
}

export function sizeStringValue(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<string>(ptr.toString())
	return ($.stringLen(v) + __goscript_encode.SizeVarint($.uint64($.stringLen(v)))) + tagsize
}

export function sizeStringValueNoZero(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v = $.pointerValue<string>(ptr.toString())
	if ($.stringEqual(v, "")) {
		return 0
	}
	return ($.stringLen(v) + __goscript_encode.SizeVarint($.uint64($.stringLen(v)))) + tagsize
}

export function sizeStringPtr(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let p = $.pointerValue<$.VarRef<string> | null>(ptr.toStringPtr())
	if (p == null) {
		return 0
	}
	let v = $.pointerValue<string>(p)
	return ($.stringLen(v) + __goscript_encode.SizeVarint($.uint64($.stringLen(v)))) + tagsize
}

export function sizeStringSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<string> = $.pointerValue<$.Slice<string>>(ptr.toStringSlice())
	let n = 0
	for (let __goscriptRangeTarget18 = s, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as string)
		n = n + (($.stringLen(v) + __goscript_encode.SizeVarint($.uint64($.stringLen(v)))) + tagsize)
	}
	return n
}

export function sizeBytes(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toBytes())
	if (v == null) {
		return 0
	}
	return ($.sliceLen(v) + __goscript_encode.SizeVarint($.uint64($.sliceLen(v)))) + tagsize
}

export function sizeBytes3(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toBytes())
	if ($.sliceLen(v) == 0) {
		return 0
	}
	return ($.sliceLen(v) + __goscript_encode.SizeVarint($.uint64($.sliceLen(v)))) + tagsize
}

export function sizeBytesOneof(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toBytes())
	return ($.sliceLen(v) + __goscript_encode.SizeVarint($.uint64($.sliceLen(v)))) + tagsize
}

export function sizeBytesSlice(ptr: __goscript_pointer_reflect.pointer, tagsize: number): number {
	let s: $.Slice<$.Slice<number>> = $.pointerValue<$.Slice<$.Slice<number>>>(ptr.toBytesSlice())
	let n = 0
	for (let __goscriptRangeTarget19 = s, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as $.Slice<number>)
		n = n + (($.sliceLen(v) + __goscript_encode.SizeVarint($.uint64($.sliceLen(v)))) + tagsize)
	}
	return n
}

export function appendFixed32(b: $.Slice<number>, v: number): $.Slice<number> {
	b = $.append(b, $.uint($.uint(v, 8), 8), $.uint($.uint($.uintShr(v, 8, 32), 8), 8), $.uint($.uint($.uintShr(v, 16, 32), 8), 8), $.uint($.uint($.uintShr(v, 24, 32), 8), 8), $.byteSliceHint)
	return b
}

export function appendFixed64(b: $.Slice<number>, v: bigint): $.Slice<number> {
	b = $.append(b, $.uint($.uint(v, 8), 8), $.uint($.uint($.uint64Shr(v, 8n), 8), 8), $.uint($.uint($.uint64Shr(v, 16n), 8), 8), $.uint($.uint($.uint64Shr(v, 24n), 8), 8), $.uint($.uint($.uint64Shr(v, 32n), 8), 8), $.uint($.uint($.uint64Shr(v, 40n), 8), 8), $.uint($.uint($.uint64Shr(v, 48n), 8), 8), $.uint($.uint($.uint64Shr(v, 56n), 8), 8), $.byteSliceHint)
	return b
}

export function appendVarint(b: $.Slice<number>, v: bigint): $.Slice<number> {
	// TODO: make 1-byte (maybe 2-byte) case inline-able, once we
	// have non-leaf inliner.
	switch ((true as boolean)) {
		case v < 128n:
		{
			b = $.append(b, $.uint($.uint(v, 8), 8), $.byteSliceHint)
			break
		}
		case v < 16384n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 7n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 2097152n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 14n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 268435456n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 21n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 34359738368n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 28n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 4398046511104n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 35n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 562949953421312n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 42n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 72057594037927936n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 42n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 49n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 9223372036854775808n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 42n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 49n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 56n), 8), 8), $.byteSliceHint)
			break
		}
		default:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 42n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 49n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 56n)), 127n)), 128n), 8), 8), $.uint(1, 8), $.byteSliceHint)
			break
		}
	}
	return b
}

export function appendFixed32Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(ptr.toUint32()), 32)
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, v)
	return [b, null]
}

export function appendFixed32ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(ptr.toUint32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, v)
	return [b, null]
}

export function appendFixed32Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toUint32Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, $.pointerValue<number>(p))
	return [b, null]
}

export function appendFixed32Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	for (let __goscriptRangeTarget20 = s, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, wiretag)
		b = appendFixed32(b, v)
	}
	return [b, null]
}

export function appendFixed32PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	b = appendVarint(b, $.uint64(4 * $.sliceLen(s)))
	for (let __goscriptRangeTarget21 = s, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as number), 32)
		b = appendFixed32(b, v)
	}
	return [b, null]
}

export function appendFixedS32Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, $.uint(v, 32))
	return [b, null]
}

export function appendFixedS32ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, $.uint(v, 32))
	return [b, null]
}

export async function appendFixedS32Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let p = await ptr.getInt32Ptr()
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, $.uint($.pointerValue<number>(p), 32))
	return [b, null]
}

export async function appendFixedS32Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	for (let __goscriptRangeTarget22 = s, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, wiretag)
		b = appendFixed32(b, $.uint(v, 32))
	}
	return [b, null]
}

export async function appendFixedS32PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	b = appendVarint(b, $.uint64(4 * $.sliceLen(s)))
	for (let __goscriptRangeTarget23 = s, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow23.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow23.backing[__goscriptRangeWindow23.offset + __rangeIndex] as number), 32)
		b = appendFixed32(b, $.uint(v, 32))
	}
	return [b, null]
}

export function appendFloat32Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = math.Float32bits($.pointerValue<number>(ptr.toFloat32()))
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, v)
	return [b, null]
}

export function appendFloat32ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = math.Float32bits($.pointerValue<number>(ptr.toFloat32()))
	if (v == 0) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, v)
	return [b, null]
}

export function appendFloat32Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toFloat32Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed32(b, math.Float32bits($.pointerValue<number>(p)))
	return [b, null]
}

export function appendFloat32Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat32Slice())
	for (let __goscriptRangeTarget24 = s, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow24.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow24.backing[__goscriptRangeWindow24.offset + __rangeIndex] as number)
		b = appendVarint(b, wiretag)
		b = appendFixed32(b, math.Float32bits(v))
	}
	return [b, null]
}

export function appendFloat32PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	b = appendVarint(b, $.uint64(4 * $.sliceLen(s)))
	for (let __goscriptRangeTarget25 = s, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow25.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow25.backing[__goscriptRangeWindow25.offset + __rangeIndex] as number)
		b = appendFixed32(b, math.Float32bits(v))
	}
	return [b, null]
}

export function appendFixed64Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toUint64())
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, v)
	return [b, null]
}

export function appendFixed64ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toUint64())
	if (v == 0n) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, v)
	return [b, null]
}

export function appendFixed64Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toUint64Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, $.pointerValue<bigint>(p))
	return [b, null]
}

export function appendFixed64Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	for (let __goscriptRangeTarget26 = s, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow26.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow26.backing[__goscriptRangeWindow26.offset + __rangeIndex] as bigint)
		b = appendVarint(b, wiretag)
		b = appendFixed64(b, v)
	}
	return [b, null]
}

export function appendFixed64PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	b = appendVarint(b, $.uint64(8 * $.sliceLen(s)))
	for (let __goscriptRangeTarget27 = s, __goscriptRangeWindow27 = $.sliceRange(__goscriptRangeTarget27), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow27.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow27.backing[__goscriptRangeWindow27.offset + __rangeIndex] as bigint)
		b = appendFixed64(b, v)
	}
	return [b, null]
}

export function appendFixedS64Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, $.uint64(v))
	return [b, null]
}

export function appendFixedS64ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	if (v == 0n) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, $.uint64(v))
	return [b, null]
}

export function appendFixedS64Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toInt64Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, $.uint64($.pointerValue<bigint>(p)))
	return [b, null]
}

export function appendFixedS64Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	for (let __goscriptRangeTarget28 = s, __goscriptRangeWindow28 = $.sliceRange(__goscriptRangeTarget28), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow28.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow28.backing[__goscriptRangeWindow28.offset + __rangeIndex] as bigint)
		b = appendVarint(b, wiretag)
		b = appendFixed64(b, $.uint64(v))
	}
	return [b, null]
}

export function appendFixedS64PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	b = appendVarint(b, $.uint64(8 * $.sliceLen(s)))
	for (let __goscriptRangeTarget29 = s, __goscriptRangeWindow29 = $.sliceRange(__goscriptRangeTarget29), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow29.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow29.backing[__goscriptRangeWindow29.offset + __rangeIndex] as bigint)
		b = appendFixed64(b, $.uint64(v))
	}
	return [b, null]
}

export function appendFloat64Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = math.Float64bits($.pointerValue<number>(ptr.toFloat64()))
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, v)
	return [b, null]
}

export function appendFloat64ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = math.Float64bits($.pointerValue<number>(ptr.toFloat64()))
	if (v == 0n) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, v)
	return [b, null]
}

export function appendFloat64Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toFloat64Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendFixed64(b, math.Float64bits($.pointerValue<number>(p)))
	return [b, null]
}

export function appendFloat64Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat64Slice())
	for (let __goscriptRangeTarget30 = s, __goscriptRangeWindow30 = $.sliceRange(__goscriptRangeTarget30), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow30.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow30.backing[__goscriptRangeWindow30.offset + __rangeIndex] as number)
		b = appendVarint(b, wiretag)
		b = appendFixed64(b, math.Float64bits(v))
	}
	return [b, null]
}

export function appendFloat64PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toFloat64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	b = appendVarint(b, $.uint64(8 * $.sliceLen(s)))
	for (let __goscriptRangeTarget31 = s, __goscriptRangeWindow31 = $.sliceRange(__goscriptRangeTarget31), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow31.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow31.backing[__goscriptRangeWindow31.offset + __rangeIndex] as number)
		b = appendFixed64(b, math.Float64bits(v))
	}
	return [b, null]
}

export function appendVarint32Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(ptr.toUint32()), 32)
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(v))
	return [b, null]
}

export function appendVarint32ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.uint($.pointerValue<number>(ptr.toUint32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(v))
	return [b, null]
}

export function appendVarint32Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<number> | null>(ptr.toUint32Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.pointerValue<number>(p)))
	return [b, null]
}

export function appendVarint32Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	for (let __goscriptRangeTarget32 = s, __goscriptRangeWindow32 = $.sliceRange(__goscriptRangeTarget32), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow32.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow32.backing[__goscriptRangeWindow32.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function appendVarint32PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toUint32Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	// compute size
	let n = 0
	for (let __goscriptRangeTarget33 = s, __goscriptRangeWindow33 = $.sliceRange(__goscriptRangeTarget33), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow33.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow33.backing[__goscriptRangeWindow33.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)))
	}
	b = appendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget34 = s, __goscriptRangeWindow34 = $.sliceRange(__goscriptRangeTarget34), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow34.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow34.backing[__goscriptRangeWindow34.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function appendVarintS32Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(v))
	return [b, null]
}

export function appendVarintS32ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(v))
	return [b, null]
}

export async function appendVarintS32Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let p = await ptr.getInt32Ptr()
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.pointerValue<number>(p)))
	return [b, null]
}

export async function appendVarintS32Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	for (let __goscriptRangeTarget35 = s, __goscriptRangeWindow35 = $.sliceRange(__goscriptRangeTarget35), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow35.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow35.backing[__goscriptRangeWindow35.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export async function appendVarintS32PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	// compute size
	let n = 0
	for (let __goscriptRangeTarget36 = s, __goscriptRangeWindow36 = $.sliceRange(__goscriptRangeTarget36), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow36.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow36.backing[__goscriptRangeWindow36.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)))
	}
	b = appendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget37 = s, __goscriptRangeWindow37 = $.sliceRange(__goscriptRangeTarget37), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow37.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow37.backing[__goscriptRangeWindow37.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function appendVarint64Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toUint64())
	b = appendVarint(b, wiretag)
	b = appendVarint(b, v)
	return [b, null]
}

export function appendVarint64ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toUint64())
	if (v == 0n) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, v)
	return [b, null]
}

export function appendVarint64Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toUint64Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.pointerValue<bigint>(p))
	return [b, null]
}

export function appendVarint64Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	for (let __goscriptRangeTarget38 = s, __goscriptRangeWindow38 = $.sliceRange(__goscriptRangeTarget38), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow38.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow38.backing[__goscriptRangeWindow38.offset + __rangeIndex] as bigint)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, v)
	}
	return [b, null]
}

export function appendVarint64PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toUint64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	// compute size
	let n = 0
	for (let __goscriptRangeTarget39 = s, __goscriptRangeWindow39 = $.sliceRange(__goscriptRangeTarget39), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow39.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow39.backing[__goscriptRangeWindow39.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint(v))
	}
	b = appendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget40 = s, __goscriptRangeWindow40 = $.sliceRange(__goscriptRangeTarget40), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow40.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow40.backing[__goscriptRangeWindow40.offset + __rangeIndex] as bigint)
		b = appendVarint(b, v)
	}
	return [b, null]
}

export function appendVarintS64Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(v))
	return [b, null]
}

export function appendVarintS64ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	if (v == 0n) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(v))
	return [b, null]
}

export function appendVarintS64Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toInt64Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.pointerValue<bigint>(p)))
	return [b, null]
}

export function appendVarintS64Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	for (let __goscriptRangeTarget41 = s, __goscriptRangeWindow41 = $.sliceRange(__goscriptRangeTarget41), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow41.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow41.backing[__goscriptRangeWindow41.offset + __rangeIndex] as bigint)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function appendVarintS64PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	// compute size
	let n = 0
	for (let __goscriptRangeTarget42 = s, __goscriptRangeWindow42 = $.sliceRange(__goscriptRangeTarget42), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow42.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow42.backing[__goscriptRangeWindow42.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint($.uint64(v)))
	}
	b = appendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget43 = s, __goscriptRangeWindow43 = $.sliceRange(__goscriptRangeTarget43), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow43.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow43.backing[__goscriptRangeWindow43.offset + __rangeIndex] as bigint)
		b = appendVarint(b, $.uint64(v))
	}
	return [b, null]
}

export function appendZigzag32Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32)))
	return [b, null]
}

export function appendZigzag32ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.int($.pointerValue<number>(ptr.toInt32()), 32)
	if (v == 0) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32)))
	return [b, null]
}

export async function appendZigzag32Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let p = await ptr.getInt32Ptr()
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	let v = $.pointerValue<number>(p)
	b = appendVarint(b, $.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32)))
	return [b, null]
}

export async function appendZigzag32Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	for (let __goscriptRangeTarget44 = s, __goscriptRangeWindow44 = $.sliceRange(__goscriptRangeTarget44), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow44.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow44.backing[__goscriptRangeWindow44.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32)))
	}
	return [b, null]
}

export async function appendZigzag32PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let s: $.Slice<number> = await ptr.getInt32Slice()
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	// compute size
	let n = 0
	for (let __goscriptRangeTarget45 = s, __goscriptRangeWindow45 = $.sliceRange(__goscriptRangeTarget45), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow45.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow45.backing[__goscriptRangeWindow45.offset + __rangeIndex] as number), 32)
		n = n + (__goscript_encode.SizeVarint($.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))))
	}
	b = appendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget46 = s, __goscriptRangeWindow46 = $.sliceRange(__goscriptRangeTarget46), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow46.length; __rangeIndex++) {
		let v = $.int((__goscriptRangeWindow46.backing[__goscriptRangeWindow46.offset + __rangeIndex] as number), 32)
		b = appendVarint(b, $.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32)))
	}
	return [b, null]
}

export function appendZigzag64Value(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n)))))
	return [b, null]
}

export function appendZigzag64ValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<bigint>(ptr.toInt64())
	if (v == 0n) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n)))))
	return [b, null]
}

export function appendZigzag64Ptr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<bigint> | null>(ptr.toInt64Ptr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	let v = $.pointerValue<bigint>(p)
	b = appendVarint(b, $.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n)))))
	return [b, null]
}

export function appendZigzag64Slice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	for (let __goscriptRangeTarget47 = s, __goscriptRangeWindow47 = $.sliceRange(__goscriptRangeTarget47), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow47.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow47.backing[__goscriptRangeWindow47.offset + __rangeIndex] as bigint)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n)))))
	}
	return [b, null]
}

export function appendZigzag64PackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<bigint> = $.pointerValue<$.Slice<bigint>>(ptr.toInt64Slice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	// compute size
	let n = 0
	for (let __goscriptRangeTarget48 = s, __goscriptRangeWindow48 = $.sliceRange(__goscriptRangeTarget48), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow48.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow48.backing[__goscriptRangeWindow48.offset + __rangeIndex] as bigint)
		n = n + (__goscript_encode.SizeVarint($.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n))))))
	}
	b = appendVarint(b, $.uint64(n))
	for (let __goscriptRangeTarget49 = s, __goscriptRangeWindow49 = $.sliceRange(__goscriptRangeTarget49), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow49.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow49.backing[__goscriptRangeWindow49.offset + __rangeIndex] as bigint)
		b = appendVarint(b, $.uint64Xor($.uint64($.int64Shl(v, 1n)), $.uint64(($.int64Shr($.int64(v), 63n)))))
	}
	return [b, null]
}

export function appendBoolValue(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<boolean>(ptr.toBool())
	b = appendVarint(b, wiretag)
	if (v) {
		b = $.append(b, $.uint(1, 8), $.byteSliceHint)
	} else {
		b = $.append(b, $.uint(0, 8), $.byteSliceHint)
	}
	return [b, null]
}

export function appendBoolValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<boolean>(ptr.toBool())
	if (!v) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = $.append(b, $.uint(1, 8), $.byteSliceHint)
	return [b, null]
}

export function appendBoolPtr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<boolean> | null>(ptr.toBoolPtr())
	if (p == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	if ($.pointerValue<boolean>(p)) {
		b = $.append(b, $.uint(1, 8), $.byteSliceHint)
	} else {
		b = $.append(b, $.uint(0, 8), $.byteSliceHint)
	}
	return [b, null]
}

export function appendBoolSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(ptr.toBoolSlice())
	for (let __goscriptRangeTarget50 = s, __goscriptRangeWindow50 = $.sliceRange(__goscriptRangeTarget50), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow50.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow50.backing[__goscriptRangeWindow50.offset + __rangeIndex] as boolean)
		b = appendVarint(b, wiretag)
		if (v) {
			b = $.append(b, $.uint(1, 8), $.byteSliceHint)
		} else {
			b = $.append(b, $.uint(0, 8), $.byteSliceHint)
		}
	}
	return [b, null]
}

export function appendBoolPackedSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<boolean> = $.pointerValue<$.Slice<boolean>>(ptr.toBoolSlice())
	if ($.sliceLen(s) == 0) {
		return [b, null]
	}
	b = appendVarint(b, $.uint64Or(($.uint64AndNot(wiretag, 7n)), 2n))
	b = appendVarint(b, $.uint64($.sliceLen(s)))
	for (let __goscriptRangeTarget51 = s, __goscriptRangeWindow51 = $.sliceRange(__goscriptRangeTarget51), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow51.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow51.backing[__goscriptRangeWindow51.offset + __rangeIndex] as boolean)
		if (v) {
			b = $.append(b, $.uint(1, 8), $.byteSliceHint)
		} else {
			b = $.append(b, $.uint(0, 8), $.byteSliceHint)
		}
	}
	return [b, null]
}

export function appendStringValue(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>(ptr.toString())
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.stringLen(v)))
	b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	return [b, null]
}

export function appendStringValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v = $.pointerValue<string>(ptr.toString())
	if ($.stringEqual(v, "")) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.stringLen(v)))
	b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	return [b, null]
}

export function appendStringPtr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let p = $.pointerValue<$.VarRef<string> | null>(ptr.toStringPtr())
	if (p == null) {
		return [b, null]
	}
	let v = $.pointerValue<string>(p)
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.stringLen(v)))
	b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	return [b, null]
}

export function appendStringSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<string> = $.pointerValue<$.Slice<string>>(ptr.toStringSlice())
	for (let __goscriptRangeTarget52 = s, __goscriptRangeWindow52 = $.sliceRange(__goscriptRangeTarget52), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow52.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow52.backing[__goscriptRangeWindow52.offset + __rangeIndex] as string)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64($.stringLen(v)))
		b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	}
	return [b, null]
}

export function appendUTF8StringValue(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let invalidUTF8: boolean = false
	let v = $.pointerValue<string>(ptr.toString())
	if (!utf8.ValidString(v)) {
		invalidUTF8 = true
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.stringLen(v)))
	b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	if (invalidUTF8) {
		return [b, $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))]
	}
	return [b, null]
}

export function appendUTF8StringValueNoZero(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let invalidUTF8: boolean = false
	let v = $.pointerValue<string>(ptr.toString())
	if ($.stringEqual(v, "")) {
		return [b, null]
	}
	if (!utf8.ValidString(v)) {
		invalidUTF8 = true
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.stringLen(v)))
	b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	if (invalidUTF8) {
		return [b, $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))]
	}
	return [b, null]
}

export function appendUTF8StringPtr(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let invalidUTF8: boolean = false
	let p = $.pointerValue<$.VarRef<string> | null>(ptr.toStringPtr())
	if (p == null) {
		return [b, null]
	}
	let v = $.pointerValue<string>(p)
	if (!utf8.ValidString(v)) {
		invalidUTF8 = true
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.stringLen(v)))
	b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	if (invalidUTF8) {
		return [b, $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))]
	}
	return [b, null]
}

export function appendUTF8StringSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let invalidUTF8: boolean = false
	let s: $.Slice<string> = $.pointerValue<$.Slice<string>>(ptr.toStringSlice())
	for (let __goscriptRangeTarget53 = s, __goscriptRangeWindow53 = $.sliceRange(__goscriptRangeTarget53), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow53.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow53.backing[__goscriptRangeWindow53.offset + __rangeIndex] as string)
		if (!utf8.ValidString(v)) {
			invalidUTF8 = true
		}
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64($.stringLen(v)))
		b = $.appendSlice(b, $.stringToBytes(v), $.byteSliceHint)
	}
	if (invalidUTF8) {
		return [b, $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))]
	}
	return [b, null]
}

export function appendBytes(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toBytes())
	if (v == null) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.sliceLen(v)))
	b = $.appendSlice(b, v, $.byteSliceHint)
	return [b, null]
}

export function appendBytes3(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toBytes())
	if ($.sliceLen(v) == 0) {
		return [b, null]
	}
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.sliceLen(v)))
	b = $.appendSlice(b, v, $.byteSliceHint)
	return [b, null]
}

export function appendBytesOneof(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let v: $.Slice<number> = $.pointerValue<$.Slice<number>>(ptr.toBytes())
	b = appendVarint(b, wiretag)
	b = appendVarint(b, $.uint64($.sliceLen(v)))
	b = $.appendSlice(b, v, $.byteSliceHint)
	return [b, null]
}

export function appendBytesSlice(b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, _p3: boolean): [$.Slice<number>, $.GoError] {
	let s: $.Slice<$.Slice<number>> = $.pointerValue<$.Slice<$.Slice<number>>>(ptr.toBytesSlice())
	for (let __goscriptRangeTarget54 = s, __goscriptRangeWindow54 = $.sliceRange(__goscriptRangeTarget54), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow54.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow54.backing[__goscriptRangeWindow54.offset + __rangeIndex] as $.Slice<number>)
		b = appendVarint(b, wiretag)
		b = appendVarint(b, $.uint64($.sliceLen(v)))
		b = $.appendSlice(b, v, $.byteSliceHint)
	}
	return [b, null]
}

export function makeGroupMarshaler(u: marshalInfo | $.VarRef<marshalInfo> | null): [sizer | null, marshaler | null] {
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let p = ptr.getPointer()
		if (p.isNil()) {
			return 0
		}
		return await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).size(p) : marshalInfo.prototype.size.call(u, p)) + (2 * tagsize)
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let p = ptr.getPointer()
		if (p.isNil()) {
			return [b, null]
		}
		let err: $.GoError = null! as $.GoError
		b = appendVarint(b, wiretag)
		let __goscriptTuple22: any = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).marshal(b, p, deterministic) : marshalInfo.prototype.marshal.call(u, b, p, deterministic))
		b = __goscriptTuple22[0]
		err = __goscriptTuple22[1]
		b = appendVarint(b, $.uint64Add(wiretag, 1n))
		return [b, err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeGroupSliceMarshaler(u: marshalInfo | $.VarRef<marshalInfo> | null): [sizer | null, marshaler | null] {
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s: $.Slice<__goscript_pointer_reflect.pointer> = ptr.getPointerSlice()
		let n = 0
		for (let __goscriptRangeTarget55 = s, __goscriptRangeWindow55 = $.sliceRange(__goscriptRangeTarget55), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow55.length; __rangeIndex++) {
			let v = ((__goscriptRangeWindow55.backing[__goscriptRangeWindow55.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
			if ($.markAsStructValue($.cloneStructValue(v)).isNil()) {
				continue
			}
			n = n + (await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).size((v).clone()) : marshalInfo.prototype.size.call(u, (v).clone())) + (2 * tagsize))
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s: $.Slice<__goscript_pointer_reflect.pointer> = ptr.getPointerSlice()
		let err: $.GoError = null! as $.GoError
		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))
		for (let __goscriptRangeTarget56 = s, __goscriptRangeWindow56 = $.sliceRange(__goscriptRangeTarget56), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow56.length; __rangeIndex++) {
			let v = ((__goscriptRangeWindow56.backing[__goscriptRangeWindow56.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
			if ($.markAsStructValue($.cloneStructValue(v)).isNil()) {
				return [b, __goscript_encode.errRepeatedHasNil]
			}
			b = appendVarint(b, wiretag)
			let __goscriptTuple23: any = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).marshal(b, (v).clone(), deterministic) : marshalInfo.prototype.marshal.call(u, b, (v).clone(), deterministic))
			b = __goscriptTuple23[0]
			err = __goscriptTuple23[1]
			b = appendVarint(b, $.uint64Add(wiretag, 1n))
			if (!await nerr.value.Merge(err)) {
				if ($.comparableEqual(err, __goscript_encode.ErrNil)) {
					err = __goscript_encode.errRepeatedHasNil
				}
				return [b, err]
			}
		}
		return [b, nerr.value.E]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeMessageMarshaler(u: marshalInfo | $.VarRef<marshalInfo> | null): [sizer | null, marshaler | null] {
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let p = ptr.getPointer()
		if (p.isNil()) {
			return 0
		}
		let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).size(p) : marshalInfo.prototype.size.call(u, p))
		return (siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let p = ptr.getPointer()
		if (p.isNil()) {
			return [b, null]
		}
		b = appendVarint(b, wiretag)
		let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).cachedsize(p) : marshalInfo.prototype.cachedsize.call(u, p))
		b = appendVarint(b, $.uint64(siz))
		return await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).marshal(b, p, deterministic) : marshalInfo.prototype.marshal.call(u, b, p, deterministic))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeMessageSliceMarshaler(u: marshalInfo | $.VarRef<marshalInfo> | null): [sizer | null, marshaler | null] {
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let s: $.Slice<__goscript_pointer_reflect.pointer> = ptr.getPointerSlice()
		let n = 0
		for (let __goscriptRangeTarget57 = s, __goscriptRangeWindow57 = $.sliceRange(__goscriptRangeTarget57), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow57.length; __rangeIndex++) {
			let v = ((__goscriptRangeWindow57.backing[__goscriptRangeWindow57.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
			if ($.markAsStructValue($.cloneStructValue(v)).isNil()) {
				continue
			}
			let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).size((v).clone()) : marshalInfo.prototype.size.call(u, (v).clone()))
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, wiretag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let s: $.Slice<__goscript_pointer_reflect.pointer> = ptr.getPointerSlice()
		let err: $.GoError = null! as $.GoError
		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))
		for (let __goscriptRangeTarget58 = s, __goscriptRangeWindow58 = $.sliceRange(__goscriptRangeTarget58), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow58.length; __rangeIndex++) {
			let v = ((__goscriptRangeWindow58.backing[__goscriptRangeWindow58.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
			if ($.markAsStructValue($.cloneStructValue(v)).isNil()) {
				return [b, __goscript_encode.errRepeatedHasNil]
			}
			b = appendVarint(b, wiretag)
			let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).cachedsize((v).clone()) : marshalInfo.prototype.cachedsize.call(u, (v).clone()))
			b = appendVarint(b, $.uint64(siz))
			let __goscriptTuple24: any = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).marshal(b, (v).clone(), deterministic) : marshalInfo.prototype.marshal.call(u, b, (v).clone(), deterministic))
			b = __goscriptTuple24[0]
			err = __goscriptTuple24[1]

			if (!await nerr.value.Merge(err)) {
				if ($.comparableEqual(err, __goscript_encode.ErrNil)) {
					err = __goscript_encode.errRepeatedHasNil
				}
				return [b, err]
			}
		}
		return [b, nerr.value.E]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export async function makeMapMarshaler(f: reflect.StructField | $.VarRef<reflect.StructField> | null): globalThis.Promise<[sizer | null, marshaler | null]> {
	const f$: reflect.StructField = f == null ? $.pointerTarget<reflect.StructField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<reflect.StructField>(f)
	// figure out key and value type
	let t = (f$ as reflect.StructField).Type
	let keyType = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let valType = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tags: $.Slice<string> = strings.Split(reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf"), ",")
	let keyTags: $.Slice<string> = strings.Split(reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_key"), ",")
	let valTags: $.Slice<string> = strings.Split(reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_val"), ",")
	let stdOptions = false
	for (let __goscriptRangeTarget59 = tags, __goscriptRangeWindow59 = $.sliceRange(__goscriptRangeTarget59), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow59.length; __rangeIndex++) {
		let t = (__goscriptRangeWindow59.backing[__goscriptRangeWindow59.offset + __rangeIndex] as string)
		if (strings.HasPrefix(t, "customtype=")) {
			valTags = $.appendOne(valTags, t)
		}
		if ($.stringEqual(t, "stdtime")) {
			valTags = $.appendOne(valTags, t)
			stdOptions = true
		}
		if ($.stringEqual(t, "stdduration")) {
			valTags = $.appendOne(valTags, t)
			stdOptions = true
		}
		if ($.stringEqual(t, "wktptr")) {
			valTags = $.appendOne(valTags, t)
		}
	}
	let [keySizer, keyMarshaler] = await typeMarshaler(keyType, keyTags, false, false)
	let [valSizer, valMarshaler] = await typeMarshaler(valType, valTags, false, false)
	let keyWireTag = $.uint64Or(8n, wiretype($.arrayIndex(keyTags!, 0)))
	let valWireTag = $.uint64Or(16n, wiretype($.arrayIndex(valTags!, 0)))

	// We create an interface to get the addresses of the map key and value.
	// If value is pointer-typed, the interface is a direct interface, the
	// idata itself is the value. Otherwise, the idata is the pointer to the
	// value.
	// Key cannot be pointer-typed.
	let valIsPtr = (__goscriptAwait = (valType !== null && (valType as any).__isVarRef !== true && (valType as any).__goValue === undefined ? (valType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(valType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22

	// If value is a message with nested maps, calling
	// valSizer in marshal may be quadratic. We should use
	// cached version in marshal (but not in size).
	// If value is not message type, we don't have size cache,
	// but it cannot be nested either. Just use valSizer.
	let valCachedSizer = valSizer
	if ((valIsPtr && !stdOptions) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (valType !== null && (valType as any).__isVarRef !== true && (valType as any).__goValue === undefined ? (valType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(valType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25)) {
		let u: marshalInfo | $.VarRef<marshalInfo> | null = await getMarshalInfo((__goscriptAwait = (valType !== null && (valType as any).__isVarRef !== true && (valType as any).__goValue === undefined ? (valType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(valType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		valCachedSizer = $.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
			// Same as message sizer, but use cache.
			let p = ptr.getPointer()
			if (p.isNil()) {
				return 0
			}
			let siz = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as marshalInfo).cachedsize(p) : marshalInfo.prototype.cachedsize.call(u, p))
			return (siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize
		}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo))
	}
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, tagsize: number): globalThis.Promise<number> => {
		let m = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(t))).Elem()))
		let n = 0
		for (let __goscriptRangeTarget60 = $.markAsStructValue($.cloneStructValue(m)).MapKeys(), __goscriptRangeWindow60 = $.sliceRange(__goscriptRangeTarget60), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow60.length; __rangeIndex++) {
			let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow60.backing[__goscriptRangeWindow60.offset + __rangeIndex] as reflect.Value)))
			let ki = $.varRef($.markAsStructValue($.cloneStructValue(k)).Interface())
			let vi = $.varRef($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(m)).MapIndex($.markAsStructValue($.cloneStructValue(k))))).Interface())
			let kaddr = __goscript_pointer_reflect.toAddrPointer(ki, false)
			let vaddr = __goscript_pointer_reflect.toAddrPointer(vi, valIsPtr)
			let siz = (__goscriptAwait = keySizer!((kaddr).clone(), 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + (__goscriptAwait = valSizer!((vaddr).clone(), 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			n = n + ((siz + __goscript_encode.SizeVarint($.uint64(siz))) + tagsize)
		}
		return n
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, tag: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let m = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(t))).Elem()))
		let err: $.GoError = null! as $.GoError
		let keys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(m)).MapKeys()
		if (($.sliceLen(keys) > 1) && deterministic) {
			await sort.Sort($.pointerValueOrNil(await __goscript_lib.mapKeys(keys))!)
		}

		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))
		for (let __goscriptRangeTarget61 = keys, __goscriptRangeWindow61 = $.sliceRange(__goscriptRangeTarget61), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow61.length; __rangeIndex++) {
			let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow61.backing[__goscriptRangeWindow61.offset + __rangeIndex] as reflect.Value)))
			let ki = $.varRef($.markAsStructValue($.cloneStructValue(k)).Interface())
			let vi = $.varRef($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(m)).MapIndex($.markAsStructValue($.cloneStructValue(k))))).Interface())
			let kaddr = __goscript_pointer_reflect.toAddrPointer(ki, false)
			let vaddr = __goscript_pointer_reflect.toAddrPointer(vi, valIsPtr)
			b = appendVarint(b, tag)
			let siz = (__goscriptAwait = keySizer!((kaddr).clone(), 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + (__goscriptAwait = valCachedSizer!((vaddr).clone(), 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			b = appendVarint(b, $.uint64(siz))
			let __goscriptTuple25: any = await keyMarshaler!(b, (kaddr).clone(), keyWireTag, deterministic)
			b = __goscriptTuple25[0]
			err = __goscriptTuple25[1]
			if (!await nerr.value.Merge(err)) {
				return [b, err]
			}
			let __goscriptTuple26: any = await valMarshaler!(b, (vaddr).clone(), valWireTag, deterministic)
			b = __goscriptTuple26[0]
			err = __goscriptTuple26[1]
			if ((!$.comparableEqual(err, __goscript_encode.ErrNil)) && !await nerr.value.Merge(err)) {
				return [b, err]
			}
		}
		return [b, nerr.value.E]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export function makeOneOfMarshaler(fi: marshalFieldInfo | $.VarRef<marshalFieldInfo> | null, f: reflect.StructField | $.VarRef<reflect.StructField> | null): [sizer | null, marshaler | null] {
	const fi$: marshalFieldInfo = fi == null ? $.pointerTarget<marshalFieldInfo>(fi) : (fi as any).__isVarRef === true ? (fi as any).value : (fi as any).__goValue === undefined ? (fi as any) : $.pointerTarget<marshalFieldInfo>(fi)
	// Oneof field is an interface. We need to get the actual data type on the fly.
	let t = $.pointerValue<reflect.StructField>(f).Type
	return [$.functionValue(async (ptr: __goscript_pointer_reflect.pointer, _p1: number): globalThis.Promise<number> => {
		let p = ptr.getInterfacePointer()
		if (p.isNil()) {
			return 0
		}
		let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(t))).Elem())).Elem())).Elem()))
		let telem = $.markAsStructValue($.cloneStructValue(v)).Type()
		let e: marshalElemInfo | $.VarRef<marshalElemInfo> | null = $.mapGet<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null>((fi$ as marshalFieldInfo).oneofElems, telem, null)[0]
		let e$: marshalElemInfo = e == null ? $.pointerTarget<marshalElemInfo>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<marshalElemInfo>(e)
		return await (e$ as marshalElemInfo).sizer!((p).clone(), (e$ as marshalElemInfo).tagsize)
	}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), $.functionValue(async (b: $.Slice<number>, ptr: __goscript_pointer_reflect.pointer, _p2: bigint, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let p = ptr.getInterfacePointer()
		if (p.isNil()) {
			return [b, null]
		}
		let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr.asPointerTo(t))).Elem())).Elem())).Elem()))
		let telem = $.markAsStructValue($.cloneStructValue(v)).Type()
		if (($.pointerValue<Exclude<reflect.Type, null>>((telem !== null && (telem as any).__isVarRef !== true && (telem as any).__goValue === undefined ? (telem as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(telem)).Field(0).Type).Kind() == 22) && $.markAsStructValue($.cloneStructValue(p.getPointer())).isNil()) {
			return [b, __goscript_encode.errOneofHasNil]
		}
		let e: marshalElemInfo | $.VarRef<marshalElemInfo> | null = $.mapGet<reflect.Type | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null, marshalElemInfo | $.VarRef<marshalElemInfo> | null>((fi$ as marshalFieldInfo).oneofElems, telem, null)[0]
		let e$: marshalElemInfo = e == null ? $.pointerTarget<marshalElemInfo>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<marshalElemInfo>(e)
		return await (e$ as marshalElemInfo).marshaler!(b, (p).clone(), (e$ as marshalElemInfo).wiretag, deterministic)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))]
}

export async function Size(pb: __goscript_lib.Message | null): globalThis.Promise<number> {
	{
		let [m, ok] = $.typeAssertTuple<newMarshaler | null>(pb, "proto.newMarshaler")
		if (ok) {
			return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<newMarshaler, null>) : $.pointerValue<Exclude<newMarshaler, null>>(m)).XXX_Size()
		}
	}
	{
		let [m, ok] = $.typeAssertTuple<__goscript_encode.Marshaler | null>(pb, "proto.Marshaler")
		if (ok) {
			// If the message can marshal itself, let it do it, for compatibility.
			// NOTE: This is not efficient.
			let __goscriptTuple27: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_encode.Marshaler, null>) : $.pointerValue<Exclude<__goscript_encode.Marshaler, null>>(m)).Marshal()
			let b: $.Slice<number> = __goscriptTuple27[0]
			return $.sliceLen(b)
		}
	}
	// in case somehow we didn't generate the wrapper
	if (pb == null) {
		return 0
	}
	let info: $.VarRef<__goscript_lib.InternalMessageInfo> = $.varRef(new __goscript_lib.InternalMessageInfo(undefined, true))
	return info.value.Size(pb)
}

export async function Marshal(pb: __goscript_lib.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	{
		let [m, ok] = $.typeAssertTuple<newMarshaler | null>(pb, "proto.newMarshaler")
		if (ok) {
			let siz = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<newMarshaler, null>) : $.pointerValue<Exclude<newMarshaler, null>>(m)).XXX_Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let b: $.Slice<number> = $.makeSlice<number>(0, siz, "byte")
			return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<newMarshaler, null>) : $.pointerValue<Exclude<newMarshaler, null>>(m)).XXX_Marshal(b, false)
		}
	}
	{
		let [m, ok] = $.typeAssertTuple<__goscript_encode.Marshaler | null>(pb, "proto.Marshaler")
		if (ok) {
			// If the message can marshal itself, let it do it, for compatibility.
			// NOTE: This is not efficient.
			return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_encode.Marshaler, null>) : $.pointerValue<Exclude<__goscript_encode.Marshaler, null>>(m)).Marshal()
		}
	}
	// in case somehow we didn't generate the wrapper
	if (pb == null) {
		return [null, __goscript_encode.ErrNil]
	}
	let info: $.VarRef<__goscript_lib.InternalMessageInfo> = $.varRef(new __goscript_lib.InternalMessageInfo(undefined, true))
	let siz = await info.value.Size(pb)
	let b: $.Slice<number> = $.makeSlice<number>(0, siz, "byte")
	return info.value.Marshal(b, pb, false)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (byTag_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTag_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTag_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto.marshalFieldInfo"), "proto.byTag"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
