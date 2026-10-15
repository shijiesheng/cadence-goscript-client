// Generated file based on table_unmarshal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_custom_gogo from "./custom_gogo.gs.ts"

import type * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_discard from "./discard.gs.ts"

import type * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_message_set from "./message_set.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_table_merge from "./table_merge.gs.ts"

import * as __goscript_table_unmarshal_gogo from "./table_unmarshal_gogo.gs.ts"

import * as __goscript_wrappers from "./wrappers.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/unicode/utf8/index.js"
import "./custom_gogo.gs.ts"
import "./discard.gs.ts"
import "./extensions.gs.ts"
import "./extensions_gogo.gs.ts"
import "./lib.gs.ts"
import "./message_set.gs.ts"
import "./pointer_reflect.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"
import "./table_merge.gs.ts"
import "./table_unmarshal_gogo.gs.ts"
import "./wrappers.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.unmarshalInfo", "proto.unmarshaler", "proto.unmarshalFieldInfo", "proto.oneofField"])

export type unmarshaler = ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null

export class unmarshalInfo {
	public get typ(): reflect.Type | null {
		return this._fields.typ
	}

	public set typ(value: reflect.Type | null) {
		this._fields.typ = value
	}

	// 0 = only typ field is initialized
	// 1 = completely initialized
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

	public get dense(): $.Slice<unmarshalFieldInfo> {
		return this._fields.dense
	}

	public set dense(value: $.Slice<unmarshalFieldInfo>) {
		this._fields.dense = value
	}

	public get sparse(): globalThis.Map<bigint, unmarshalFieldInfo> | null {
		return this._fields.sparse
	}

	public set sparse(value: globalThis.Map<bigint, unmarshalFieldInfo> | null) {
		this._fields.sparse = value
	}

	public get reqFields(): $.Slice<string> {
		return this._fields.reqFields
	}

	public set reqFields(value: $.Slice<string>) {
		this._fields.reqFields = value
	}

	public get reqMask(): bigint {
		return this._fields.reqMask
	}

	public set reqMask(value: bigint) {
		this._fields.reqMask = value
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

	public get oldExtensions(): __goscript_pointer_reflect.field {
		return this._fields.oldExtensions
	}

	public set oldExtensions(value: __goscript_pointer_reflect.field) {
		this._fields.oldExtensions = value
	}

	public get extensionRanges(): $.Slice<__goscript_extensions.ExtensionRange> {
		return this._fields.extensionRanges
	}

	public set extensionRanges(value: $.Slice<__goscript_extensions.ExtensionRange>) {
		this._fields.extensionRanges = value
	}

	public get isMessageSet(): boolean {
		return this._fields.isMessageSet
	}

	public set isMessageSet(value: boolean) {
		this._fields.isMessageSet = value
	}

	public get bytesExtensions(): __goscript_pointer_reflect.field {
		return this._fields.bytesExtensions
	}

	public set bytesExtensions(value: __goscript_pointer_reflect.field) {
		this._fields.bytesExtensions = value
	}

	public _fields: {
		typ: reflect.Type | null
		initialized: number
		lock: sync.Mutex
		dense: $.Slice<unmarshalFieldInfo>
		sparse: globalThis.Map<bigint, unmarshalFieldInfo> | null
		reqFields: $.Slice<string>
		reqMask: bigint
		unrecognized: __goscript_pointer_reflect.field
		extensions: __goscript_pointer_reflect.field
		oldExtensions: __goscript_pointer_reflect.field
		extensionRanges: $.Slice<__goscript_extensions.ExtensionRange>
		isMessageSet: boolean
		bytesExtensions: __goscript_pointer_reflect.field
	}

	constructor(init?: Partial<{typ?: reflect.Type | null, initialized?: number, lock?: sync.Mutex, dense?: $.Slice<unmarshalFieldInfo>, sparse?: globalThis.Map<bigint, unmarshalFieldInfo> | null, reqFields?: $.Slice<string>, reqMask?: bigint, unrecognized?: __goscript_pointer_reflect.field, extensions?: __goscript_pointer_reflect.field, oldExtensions?: __goscript_pointer_reflect.field, extensionRanges?: $.Slice<__goscript_extensions.ExtensionRange>, isMessageSet?: boolean, bytesExtensions?: __goscript_pointer_reflect.field}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (null! as reflect.Type | null),
			initialized: init?.initialized ?? (0 as number),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.Mutex()),
			dense: init?.dense ?? (null! as $.Slice<unmarshalFieldInfo>),
			sparse: init?.sparse ?? (null! as globalThis.Map<bigint, unmarshalFieldInfo> | null),
			reqFields: init?.reqFields ?? (null! as $.Slice<string>),
			reqMask: init?.reqMask ?? (0n as bigint),
			unrecognized: init?.unrecognized ?? (null! as __goscript_pointer_reflect.field),
			extensions: init?.extensions ?? (null! as __goscript_pointer_reflect.field),
			oldExtensions: init?.oldExtensions ?? (null! as __goscript_pointer_reflect.field),
			extensionRanges: init?.extensionRanges ?? (null! as $.Slice<__goscript_extensions.ExtensionRange>),
			isMessageSet: init?.isMessageSet ?? (false as boolean),
			bytesExtensions: init?.bytesExtensions ?? (null! as __goscript_pointer_reflect.field)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unmarshalInfo {
		return new unmarshalInfo(this, true)
	}

	public __goscriptAssign(source: unmarshalInfo): void {
		const target = this._fields
		const values = source._fields
		target.typ = $.assignFieldValue(target.typ, values.typ, "reflect.Type")
		target.initialized = values.initialized
		$.assignStruct(target.lock, values.lock)
		target.dense = values.dense
		target.sparse = values.sparse
		target.reqFields = values.reqFields
		target.reqMask = values.reqMask
		target.unrecognized = values.unrecognized
		target.extensions = values.extensions
		target.oldExtensions = values.oldExtensions
		target.extensionRanges = values.extensionRanges
		target.isMessageSet = values.isMessageSet
		target.bytesExtensions = values.bytesExtensions
	}

	public async computeUnmarshalInfo(): globalThis.Promise<void> {
		let u: unmarshalInfo | $.VarRef<unmarshalInfo> | null = this;
		using __defer = new $.DisposableStack()
		const u$: unmarshalInfo = u == null ? $.pointerTarget<unmarshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<unmarshalInfo>(u)
		await (u$ as unmarshalInfo).lock.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((u$ as unmarshalInfo).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((u$ as unmarshalInfo).initialized != 0) {
			return
		}
		let t = (u$ as unmarshalInfo).typ
		let n = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);

		// Set up the "not found" value for the unrecognized byte buffer.
		// This is the default for proto3.
		;(u$ as unmarshalInfo).unrecognized = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field);
		;(u$ as unmarshalInfo).extensions = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field);
		;(u$ as unmarshalInfo).oldExtensions = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field);
		;(u$ as unmarshalInfo).bytesExtensions = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field)

		// List of the generated type and offset for each oneof field.
		class oneofField {
			public get ityp(): reflect.Type | null {
				return this._fields.ityp
			}

			public set ityp(value: reflect.Type | null) {
				this._fields.ityp = value
			}

			public get field(): __goscript_pointer_reflect.field {
				return this._fields.field
			}

			public set field(value: __goscript_pointer_reflect.field) {
				this._fields.field = value
			}

			public _fields: {
				ityp: reflect.Type | null
				field: __goscript_pointer_reflect.field
			}

			constructor(init?: Partial<{ityp?: reflect.Type | null, field?: __goscript_pointer_reflect.field}>, __goscriptValue?: boolean) {
				this._fields = {
					ityp: init?.ityp ?? (null! as reflect.Type | null),
					field: init?.field ?? (null! as __goscript_pointer_reflect.field)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): oneofField {
				return new oneofField(this, true)
			}

			public __goscriptAssign(source: oneofField): void {
				const target = this._fields
				const values = source._fields
				target.ityp = $.assignFieldValue(target.ityp, values.ityp, "reflect.Type")
				target.field = values.field
			}

			static __typeInfo = $.registerStructType(
				"proto.oneofField",
				() => new oneofField(),
				() => [],
				oneofField,
				() => [/* @__PURE__ */ $.structField("ityp", "reflect.Type", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
			)
		}
		let oneofFields: $.Slice<oneofField> = null! as $.Slice<oneofField>

		for (let i = 0; i < n; i++) {
			let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
			if ($.stringEqual(f.value.Name, "XXX_unrecognized")) {
				// The byte slice used to hold unrecognized input is special.
				if (!$.comparableEqual(f.value.Type, reflect.TypeOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) {
					$.panic($.concatString("bad type for XXX_unrecognized field: ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.value.Type).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
				;(u$ as unmarshalInfo).unrecognized = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
				continue
			}
			if ($.stringEqual(f.value.Name, "XXX_InternalExtensions")) {
				// Ditto here.
				if (!$.comparableEqual(f.value.Type, reflect.TypeOf($.interfaceValue(new __goscript_extensions.XXX_InternalExtensions(undefined, true), "proto.XXX_InternalExtensions", "proto.XXX_InternalExtensions")))) {
					$.panic($.concatString("bad type for XXX_InternalExtensions field: ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.value.Type).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
				;(u$ as unmarshalInfo).extensions = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
				if ($.stringEqual(reflect.StructTag_Get(f.value.Tag, "protobuf_messageset"), "1")) {
					;(u$ as unmarshalInfo).isMessageSet = true
				}
				continue
			}
			if ($.stringEqual(f.value.Name, "XXX_extensions")) {
				// An older form of the extensions field.
				if ($.comparableEqual(f.value.Type, reflect.TypeOf($.interfaceValue(null, "map[int32]proto.Extension", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension"))))) {
					;(u$ as unmarshalInfo).oldExtensions = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
					continue
				} else {
					if ($.comparableEqual(f.value.Type, reflect.TypeOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) {
						;(u$ as unmarshalInfo).bytesExtensions = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
						continue
					}
				}
				$.panic($.concatString("bad type for XXX_extensions field: ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.value.Type).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			}
			if (($.stringEqual(f.value.Name, "XXX_NoUnkeyedLiteral")) || ($.stringEqual(f.value.Name, "XXX_sizecache"))) {
				continue
			}

			let oneof = reflect.StructTag_Get(f.value.Tag, "protobuf_oneof")
			if (!$.stringEqual(oneof, "")) {
				oneofFields = $.appendOne(oneofFields, (() => { const __goscriptLiteralField0 = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field); return $.markAsStructValue(new oneofField({ityp: f.value.Type, field: __goscriptLiteralField0})) })())
				// The rest of oneof processing happens below.
				continue
			}

			let tags = reflect.StructTag_Get(f.value.Tag, "protobuf")
			let tagArray: $.Slice<string> = strings.Split(tags, ",")
			if ($.sliceLen(tagArray) < 2) {
				$.panic($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("protobuf tag not enough fields in ", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), ".")), f.value.Name)), ": ")), tags))
			}
			let [tag, err] = strconv.Atoi($.arrayIndex(tagArray!, 1))
			if (err != null) {
				$.panic($.concatString("protobuf tag field not an integer: ", $.arrayIndex(tagArray!, 1)))
			}

			let name = ""
			for (let __goscriptRangeTarget0 = $.goSlice(tagArray, 3, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let tag = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				if (strings.HasPrefix(tag, "name=")) {
					name = $.sliceStringOrBytes(tag, 5, undefined)
				}
			}

			// Extract unmarshaling function from the field (its type and tags).
			let unmarshal = await fieldUnmarshaler(f)

			// Required field?
			let reqMask: bigint = 0n
			if ($.stringEqual($.arrayIndex(tagArray!, 2), "req")) {
				let bit = $.sliceLen((u$ as unmarshalInfo).reqFields);
				;(u$ as unmarshalInfo).reqFields = $.appendOne((u$ as unmarshalInfo).reqFields, name)
				reqMask = $.uint64Shl(1n, $.uint(bit, 64))
			}

			// Store the info in the correct slot in the message.
			await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as unmarshalInfo).setTag(tag, (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field), unmarshal, reqMask, name) : unmarshalInfo.prototype.setTag.call(u, tag, (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field), unmarshal, reqMask, name))
		}

		// Find any types associated with oneof fields.
		// gogo: len(oneofFields) > 0 is needed for embedded oneof messages, without a marshaler and unmarshaler
		if ($.sliceLen(oneofFields) > 0) {
			let oneofImplementers: $.Slice<any> = null! as $.Slice<any>
			{
				const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil(t)!))!))).Interface()
				switch (true) {
					case $.typeAssert<__goscript_properties.oneofFuncsIface | null>(__goscriptTypeSwitchValue, "proto.oneofFuncsIface").ok:
						{
							let m: __goscript_properties.oneofFuncsIface | null = $.typeAssert<__goscript_properties.oneofFuncsIface | null>(__goscriptTypeSwitchValue, "proto.oneofFuncsIface").value
							let __goscriptTuple0: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_properties.oneofFuncsIface, null>) : $.pointerValue<Exclude<__goscript_properties.oneofFuncsIface, null>>(m)).XXX_OneofFuncs()
							oneofImplementers = __goscriptTuple0[3]
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
			for (let __goscriptRangeTarget3 = oneofImplementers, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as any)
				let tptr = reflect.TypeOf(v)
				let typ = (__goscriptAwait = (tptr !== null && (tptr as any).__isVarRef !== true && (tptr as any).__goValue === undefined ? (tptr as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tptr)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

				let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
				let baseUnmarshal = await fieldUnmarshaler(f)
				let tags: $.Slice<string> = strings.Split(reflect.StructTag_Get(f.value.Tag, "protobuf"), ",")
				let [fieldNum, err] = strconv.Atoi($.arrayIndex(tags!, 1))
				if (err != null) {
					$.panic($.concatString("protobuf tag field not an integer: ", $.arrayIndex(tags!, 1)))
				}
				let name: string = ""
				for (let __goscriptRangeTarget1 = tags, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let tag = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
					if (strings.HasPrefix(tag, "name=")) {
						name = strings.TrimPrefix(tag, "name=")
						break
					}
				}

				// Find the oneof field that this struct implements.
				// Might take O(n^2) to process all of the oneofs, but who cares.
				for (let __goscriptRangeTarget2 = oneofFields, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
					let _of = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as oneofField)))
					if ((__goscriptAwait = (tptr !== null && (tptr as any).__isVarRef !== true && (tptr as any).__goValue === undefined ? (tptr as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tptr)).Implements($.pointerValueOrNil(_of.ityp)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						// We have found the corresponding interface for this struct.
						// That lets us know where this struct should be stored
						// when we encounter it during unmarshaling.
						let unmarshal = await makeUnmarshalOneof(typ, _of.ityp, baseUnmarshal)
						await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as unmarshalInfo).setTag(fieldNum, (_of.field as __goscript_pointer_reflect.field), unmarshal, 0n, name) : unmarshalInfo.prototype.setTag.call(u, fieldNum, (_of.field as __goscript_pointer_reflect.field), unmarshal, 0n, name))
					}
				}
			}
		}

		// Get extension ranges, if any.
		let fn = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil(t)!))!))).MethodByName("ExtensionRangeArray")))
		if ($.markAsStructValue($.cloneStructValue(fn)).IsValid()) {
			if ((!__goscript_pointer_reflect.field_IsValid((u$ as unmarshalInfo).extensions) && !__goscript_pointer_reflect.field_IsValid((u$ as unmarshalInfo).oldExtensions)) && !__goscript_pointer_reflect.field_IsValid((u$ as unmarshalInfo).bytesExtensions)) {
				$.panic($.concatString("a message with extensions, but no extensions field in ", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			}
			;(u$ as unmarshalInfo).extensionRanges = $.mustTypeAssert<$.Slice<__goscript_extensions.ExtensionRange>>($.markAsStructValue($.cloneStructValue($.arrayIndex((await $.markAsStructValue($.cloneStructValue(fn)).Call(null))!, 0))).Interface(), /* @__PURE__ */ $.sliceType("proto.ExtensionRange"))
		}

		// Explicitly disallow tag 0. This will ensure we flag an error
		// when decoding a buffer of all zeros. Without this code, we
		// would decode and skip an all-zero buffer of even length.
		// [0 0] is [tag=0/wiretype=varint varint-encoded-0].
		await unmarshalInfo.prototype.setTag.call(u, 0, (__goscript_pointer_reflect.zeroField as __goscript_pointer_reflect.field), $.functionValue((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] => {
			return [null, fmt.Errorf("proto: %s: illegal tag 0 (wire type %d)", (t as any), $.basicInterfaceValue(w, "int"))]
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), 0n, "");

		// Set mask for required field check.
		;(u$ as unmarshalInfo).reqMask = $.uint64Sub(($.uint64Shl(1n, $.uint($.sliceLen((u$ as unmarshalInfo).reqFields), 64))), 1n)

		atomic.StoreInt32($.fieldRef((u$ as unmarshalInfo)._fields, "initialized"), 1)
	}

	public async setTag(tag: number, field: __goscript_pointer_reflect.field, unmarshal: ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, reqMask: bigint, name: string): globalThis.Promise<void> {
		let u: unmarshalInfo | $.VarRef<unmarshalInfo> | null = this;
		const u$: unmarshalInfo = u == null ? $.pointerTarget<unmarshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<unmarshalInfo>(u)
		let i = new unmarshalFieldInfo({field: (field as __goscript_pointer_reflect.field), unmarshal: unmarshal, reqMask: reqMask, name: name}, true)
		let n = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((u$ as unmarshalInfo).typ).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((tag >= 0) && ((tag < 16) || (tag < (2 * n)))) {
			while ($.sliceLen((u$ as unmarshalInfo).dense) <= tag) {
				;(u$ as unmarshalInfo).dense = $.appendOne((u$ as unmarshalInfo).dense, new unmarshalFieldInfo(undefined, true))
			}
			$.assignStruct($.sliceElems((u$ as unmarshalInfo).dense!)[$.sliceSlot((u$ as unmarshalInfo).dense!, tag)], i)
			return
		}
		if ((u$ as unmarshalInfo).sparse == null) {
			;(u$ as unmarshalInfo).sparse = $.makeMap<bigint, unmarshalFieldInfo>([])
		}
		$.mapSet((u$ as unmarshalInfo).sparse, $.uint64(tag), (i).clone())
	}

	public async unmarshal(m: __goscript_pointer_reflect.pointer, b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const u: unmarshalInfo | $.VarRef<unmarshalInfo> | null = this;
		const u$: unmarshalInfo = u == null ? $.pointerTarget<unmarshalInfo>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<unmarshalInfo>(u)
		if (atomic.LoadInt32($.fieldRef((u$ as unmarshalInfo)._fields, "initialized")) == 0) {
			await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as unmarshalInfo).computeUnmarshalInfo() : unmarshalInfo.prototype.computeUnmarshalInfo.call(u))
		}
		if ((u$ as unmarshalInfo).isMessageSet) {
			return __goscript_message_set.unmarshalMessageSet(b, $.interfaceValue($.markAsStructValue($.cloneStructValue(m.offset(((u$ as unmarshalInfo).extensions as __goscript_pointer_reflect.field)))).toExtensions(), "*proto.XXX_InternalExtensions", /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")))
		}
		let reqMask: bigint = 0n
		let errLater: $.GoError = null! as $.GoError
		while ($.sliceLen(b) > 0) {
			// Read tag and wire type.
			// Special case 1 and 2 byte varints.
			let x: bigint = 0n
			if ($.arrayIndex(b!, 0) < 128) {
				x = $.uint64($.arrayIndex(b!, 0))
				b = $.goSlice(b, 1, undefined)
			} else {
				if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
					x = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
					b = $.goSlice(b, 2, undefined)
				} else {
					let n: number = 0
					let __goscriptTuple1: any = decodeVarint(b)
					x = __goscriptTuple1[0]
					n = __goscriptTuple1[1]
					if (n == 0) {
						return io.ErrUnexpectedEOF
					}
					b = $.goSlice(b, n, undefined)
				}
			}
			let tag = $.uint64Shr(x, 3n)
			let wire = $.int(x) & 7

			// Dispatch on the tag to one of the unmarshal* functions below.
			let f: unmarshalFieldInfo = new unmarshalFieldInfo(undefined, true)
			if (tag < $.uint64($.sliceLen((u$ as unmarshalInfo).dense))) {
				f = $.assignStruct(f, $.arrayIndex((u$ as unmarshalInfo).dense!, globalThis.Number(tag)))
			} else {
				f = $.assignStruct(f, $.mapGet<bigint, unmarshalFieldInfo, unmarshalFieldInfo>((u$ as unmarshalInfo).sparse, tag, new unmarshalFieldInfo(undefined, true))[0])
			}
			{
				let fn = f.unmarshal
				if (fn != null) {
					let err: $.GoError = null! as $.GoError
					let __goscriptTuple2: any = await fn!(b, m.offset((f.field as __goscript_pointer_reflect.field)), wire)
					b = __goscriptTuple2[0]
					err = __goscriptTuple2[1]
					if (err == null) {
						reqMask = $.uint64Or(reqMask, f.reqMask)
						continue
					}
					{
						let __goscriptTuple3: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
						let r: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple3[0]
						let ok = __goscriptTuple3[1]
						if (ok) {
							// Remember this error, but keep parsing. We need to produce
							// a full parse even if a required field is missing.
							if (errLater == null) {
								errLater = $.interfaceValue<$.GoError>(r, "*proto.RequiredNotSetError", /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
							}
							reqMask = $.uint64Or(reqMask, f.reqMask)
							continue
						}
					}
					if (!$.comparableEqual(err, errInternalBadWireType)) {
						if ($.comparableEqual(err, $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error")))) {
							if (errLater == null) {
								let fullName = $.concatString(($.concatString($.mapGet<reflect.Type | null, string, string>(__goscript_properties.__goscript_get_revProtoTypes(), reflect.PtrTo($.pointerValueOrNil((u$ as unmarshalInfo).typ)!), "")[0], ".")), f.name)
								errLater = $.interfaceValue<$.GoError>(new __goscript_lib.invalidUTF8Error({field: fullName}), "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))
							}
							continue
						}
						return err
					}
				}
			}

			// Unknown tag.
			if (!__goscript_pointer_reflect.field_IsValid((u$ as unmarshalInfo).unrecognized)) {
				// Don't keep unrecognized data; just skip it.
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple4: any = skipField(b, wire)
				b = __goscriptTuple4[0]
				err = __goscriptTuple4[1]
				if (err != null) {
					return err
				}
				continue
			}
			// Keep unrecognized data around.
			// maybe in extensions, maybe in the unrecognized field.
			let z = $.markAsStructValue($.cloneStructValue(m.offset(((u$ as unmarshalInfo).unrecognized as __goscript_pointer_reflect.field)))).toBytes()
			let emap: globalThis.Map<number, __goscript_extensions.Extension> | null = null! as globalThis.Map<number, __goscript_extensions.Extension> | null
			let e: __goscript_extensions.Extension = new __goscript_extensions.Extension(undefined, true)
			for (let __goscriptRangeTarget4 = (u$ as unmarshalInfo).extensionRanges, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let r = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_extensions.ExtensionRange)).clone()
				if (($.uint64(r.Start) <= tag) && (tag <= $.uint64(r.End))) {
					if (__goscript_pointer_reflect.field_IsValid((u$ as unmarshalInfo).extensions)) {
						let mp: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null = $.markAsStructValue($.cloneStructValue(m.offset(((u$ as unmarshalInfo).extensions as __goscript_pointer_reflect.field)))).toExtensions()
						emap = (mp !== null && (mp as any).__isVarRef !== true && (mp as any).__goValue === undefined ? ((mp as any) as __goscript_extensions.XXX_InternalExtensions).extensionsWrite() : __goscript_extensions.XXX_InternalExtensions.prototype.extensionsWrite.call(mp))
						e = $.assignStruct(e, $.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(emap, $.int(tag, 32), new __goscript_extensions.Extension(undefined, true))[0])
						z = $.fieldRef(e._fields, "enc")
						break
					}
					if (__goscript_pointer_reflect.field_IsValid((u$ as unmarshalInfo).oldExtensions)) {
						let p = $.markAsStructValue($.cloneStructValue(m.offset(((u$ as unmarshalInfo).oldExtensions as __goscript_pointer_reflect.field)))).toOldExtensions()
						emap = $.pointerValue<globalThis.Map<number, __goscript_extensions.Extension> | null>(p)
						if (emap == null) {
							emap = $.makeMap<number, __goscript_extensions.Extension>([])
							p!.value = emap
						}
						e = $.assignStruct(e, $.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(emap, $.int(tag, 32), new __goscript_extensions.Extension(undefined, true))[0])
						z = $.fieldRef(e._fields, "enc")
						break
					}
					if (__goscript_pointer_reflect.field_IsValid((u$ as unmarshalInfo).bytesExtensions)) {
						z = $.markAsStructValue($.cloneStructValue(m.offset(((u$ as unmarshalInfo).bytesExtensions as __goscript_pointer_reflect.field)))).toBytes()
						break
					}
					$.panic("no extensions field available")
				}
			}
			// Use wire type to skip data.
			let err: $.GoError = null! as $.GoError
			let b0: $.Slice<number> = b
			let __goscriptTuple5: any = skipField(b, wire)
			b = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
			if (err != null) {
				return err
			}
			z!.value = encodeVarint($.pointerValue<$.Slice<number>>(z), $.uint64Or(($.uint64Shl(tag, 3n)), $.uint64(wire)))
			z!.value = $.appendSlice($.pointerValue<$.Slice<number>>(z), $.goSlice(b0, undefined, $.sliceLen(b0) - $.sliceLen(b)), $.byteSliceHint)

			if (emap != null) {
				$.mapSet(emap, $.int(tag, 32), (e).clone())
			}
		}
		if ((reqMask != (u$ as unmarshalInfo).reqMask) && (errLater == null)) {
			// A required field of this message is missing.
			for (let __goscriptRangeTarget5 = (u$ as unmarshalInfo).reqFields, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let n = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
				if (($.uint64And(reqMask, 1n)) == 0n) {
					errLater = $.interfaceValue<$.GoError>(new __goscript_lib.RequiredNotSetError({field: n}), "*proto.RequiredNotSetError", /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
				}
				reqMask = $.uint64Shr(reqMask, 1n)
			}
		}
		return errLater
	}

	static __typeInfo = $.registerStructType(
		"proto.unmarshalInfo",
		() => new unmarshalInfo(),
		() => [$.methodSignature("computeUnmarshalInfo", [], [], true), $.methodSignature("setTag", [["tag", /* @__PURE__ */ $.basicType("int")], ["field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field")], ["unmarshal", ({ kind: $.TypeKind.Function, name: "proto.unmarshaler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)], ["reqMask", /* @__PURE__ */ $.basicType("uint64")], ["name", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("unmarshal", [["m", "proto.pointer"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		unmarshalInfo,
		() => [/* @__PURE__ */ $.structField("typ", "reflect.Type", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("initialized", /* @__PURE__ */ $.basicType("int32"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("lock", "sync.Mutex", [2], 20, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("dense", /* @__PURE__ */ $.sliceType("proto.unmarshalFieldInfo"), [3], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("sparse", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), "proto.unmarshalFieldInfo"), [4], 56, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("reqFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 64, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("reqMask", /* @__PURE__ */ $.basicType("uint64"), [6], 88, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [7], 96, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("extensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [8], 120, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("oldExtensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [9], 144, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("extensionRanges", /* @__PURE__ */ $.sliceType("proto.ExtensionRange"), [10], 168, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("isMessageSet", /* @__PURE__ */ $.basicType("bool"), [11], 192, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("bytesExtensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [12], 200, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class unmarshalFieldInfo {
	// location of the field in the proto message structure.
	public get field(): __goscript_pointer_reflect.field {
		return this._fields.field
	}

	public set field(value: __goscript_pointer_reflect.field) {
		this._fields.field = value
	}

	// function to unmarshal the data for the field.
	public get unmarshal(): ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.unmarshal
	}

	public set unmarshal(value: ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.unmarshal = value
	}

	// if a required field, contains a single set bit at this field's index in the required field list.
	public get reqMask(): bigint {
		return this._fields.reqMask
	}

	public set reqMask(value: bigint) {
		this._fields.reqMask = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public _fields: {
		field: __goscript_pointer_reflect.field
		unmarshal: ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		reqMask: bigint
		name: string
	}

	constructor(init?: Partial<{field?: __goscript_pointer_reflect.field, unmarshal?: ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, reqMask?: bigint, name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? (null! as __goscript_pointer_reflect.field),
			unmarshal: init?.unmarshal ?? (null! as ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			reqMask: init?.reqMask ?? (0n as bigint),
			name: init?.name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unmarshalFieldInfo {
		return new unmarshalFieldInfo(this, true)
	}

	public __goscriptAssign(source: unmarshalFieldInfo): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
		target.unmarshal = values.unmarshal
		target.reqMask = values.reqMask
		target.name = values.name
	}

	static __typeInfo = $.registerStructType(
		"proto.unmarshalFieldInfo",
		() => new unmarshalFieldInfo(),
		() => [],
		unmarshalFieldInfo,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("unmarshal", ({ kind: $.TypeKind.Function, name: "proto.unmarshaler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("reqMask", /* @__PURE__ */ $.basicType("uint64"), [2], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [3], 40, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export let unmarshalInfoMap: globalThis.Map<reflect.Type | null, unmarshalInfo | $.VarRef<unmarshalInfo> | null> | null = $.makeMap<reflect.Type | null, unmarshalInfo | $.VarRef<unmarshalInfo> | null>([])

export function __goscript_set_unmarshalInfoMap(__goscriptValue: globalThis.Map<reflect.Type | null, unmarshalInfo | $.VarRef<unmarshalInfo> | null> | null): void {
	unmarshalInfoMap = __goscriptValue
}

export let unmarshalInfoLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_unmarshalInfoLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(unmarshalInfoLock.value, __goscriptValue)
}

export async function getUnmarshalInfo(t: reflect.Type | null): globalThis.Promise<unmarshalInfo | $.VarRef<unmarshalInfo> | null> {
	using __defer = new $.DisposableStack()
	// It would be correct to return a new unmarshalInfo
	// unconditionally. We would end up allocating one
	// per occurrence of that type as a message or submessage.
	// We use a cache here just to reduce memory usage.
	await unmarshalInfoLock.value.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(unmarshalInfoLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	let u: unmarshalInfo | $.VarRef<unmarshalInfo> | null = $.mapGet<reflect.Type | null, unmarshalInfo | $.VarRef<unmarshalInfo> | null, unmarshalInfo | $.VarRef<unmarshalInfo> | null>(unmarshalInfoMap, t, null)[0]
	if (u == null) {
		u = new unmarshalInfo({typ: t})
		// Note: we just set the type here. The rest of the fields
		// will be initialized on first use.
		$.mapSet(unmarshalInfoMap, t, u)
	}
	return u
}

export async function fieldUnmarshaler(f: reflect.StructField | $.VarRef<reflect.StructField> | null): globalThis.Promise<unmarshaler | null> {
	const f$: reflect.StructField = f == null ? $.pointerTarget<reflect.StructField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<reflect.StructField>(f)
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((f$ as reflect.StructField).Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 21) {
		return makeUnmarshalMap(f)
	}
	return typeUnmarshaler((f$ as reflect.StructField).Type, reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf"))
}

export async function typeUnmarshaler(t: reflect.Type | null, tags: string): globalThis.Promise<unmarshaler | null> {
	let tagArray: $.Slice<string> = strings.Split(tags, ",")
	let encoding = $.arrayIndex(tagArray!, 0)
	let name = "unknown"
	let ctype = false
	let isTime = false
	let isDuration = false
	let isWktPointer = false
	let proto3 = false
	let validateUTF8 = true
	for (let __goscriptRangeTarget6 = $.goSlice(tagArray, 3, undefined), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let tag = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
		if (strings.HasPrefix(tag, "name=")) {
			name = $.sliceStringOrBytes(tag, 5, undefined)
		}
		if ($.stringEqual(tag, "proto3")) {
			proto3 = true
		}
		if (strings.HasPrefix(tag, "customtype=")) {
			ctype = true
		}
		if ($.stringEqual(tag, "stdtime")) {
			isTime = true
		}
		if ($.stringEqual(tag, "stdduration")) {
			isDuration = true
		}
		if ($.stringEqual(tag, "wktptr")) {
			isWktPointer = true
		}
	}
	validateUTF8 = validateUTF8 && proto3

	// Figure out packaging (pointer, slice, or both)
	let slice = false
	let __goscriptShadow0 = false
	if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)) {
		slice = true
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
		__goscriptShadow0 = true
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	if (ctype) {
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(t)!)).Implements($.pointerValueOrNil(__goscript_custom_gogo.customType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if (slice) {
				return __goscript_table_unmarshal_gogo.makeUnmarshalCustomSlice(await getUnmarshalInfo(t), name)
			}
			if (__goscriptShadow0) {
				return __goscript_table_unmarshal_gogo.makeUnmarshalCustomPtr(await getUnmarshalInfo(t), name)
			}
			return __goscript_table_unmarshal_gogo.makeUnmarshalCustom(await getUnmarshalInfo(t), name)
		} else {
			$.panic(await fmt.Sprintf("custom type: type: %v, does not implement the proto.custom interface", (t as any)))
		}
	}

	if (isTime) {
		if (__goscriptShadow0) {
			if (slice) {
				return __goscript_table_unmarshal_gogo.makeUnmarshalTimePtrSlice(await getUnmarshalInfo(t), name)
			}
			return __goscript_table_unmarshal_gogo.makeUnmarshalTimePtr(await getUnmarshalInfo(t), name)
		}
		if (slice) {
			return __goscript_table_unmarshal_gogo.makeUnmarshalTimeSlice(await getUnmarshalInfo(t), name)
		}
		return __goscript_table_unmarshal_gogo.makeUnmarshalTime(await getUnmarshalInfo(t), name)
	}

	if (isDuration) {
		if (__goscriptShadow0) {
			if (slice) {
				return __goscript_table_unmarshal_gogo.makeUnmarshalDurationPtrSlice(await getUnmarshalInfo(t), name)
			}
			return __goscript_table_unmarshal_gogo.makeUnmarshalDurationPtr(await getUnmarshalInfo(t), name)
		}
		if (slice) {
			return __goscript_table_unmarshal_gogo.makeUnmarshalDurationSlice(await getUnmarshalInfo(t), name)
		}
		return __goscript_table_unmarshal_gogo.makeUnmarshalDuration(await getUnmarshalInfo(t), name)
	}

	if (isWktPointer) {
		switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Float64:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdDoubleValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdDoubleValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdDoubleValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdDoubleValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case reflect.Float32:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdFloatValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdFloatValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdFloatValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdFloatValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case reflect.Int64:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdInt64ValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdInt64ValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdInt64ValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdInt64ValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case reflect.Uint64:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdUInt64ValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdUInt64ValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdUInt64ValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdUInt64ValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case reflect.Int32:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdInt32ValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdInt32ValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdInt32ValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdInt32ValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case reflect.Uint32:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdUInt32ValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdUInt32ValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdUInt32ValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdUInt32ValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case reflect.Bool:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdBoolValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdBoolValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdBoolValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdBoolValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case reflect.String:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdStringValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdStringValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdStringValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdStringValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			case __goscript_table_marshal.uint8SliceType:
			{
				if (__goscriptShadow0) {
					if (slice) {
						return __goscript_wrappers.makeStdBytesValuePtrSliceUnmarshaler(await getUnmarshalInfo(t), name)
					}
					return __goscript_wrappers.makeStdBytesValuePtrUnmarshaler(await getUnmarshalInfo(t), name)
				}
				if (slice) {
					return __goscript_wrappers.makeStdBytesValueSliceUnmarshaler(await getUnmarshalInfo(t), name)
				}
				return __goscript_wrappers.makeStdBytesValueUnmarshaler(await getUnmarshalInfo(t), name)
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("unknown wktpointer type %#v", (t as any)))
				break
			}
		}
	}

	// We'll never have both pointer and slice for basic types.
	if ((__goscriptShadow0 && slice) && ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
		$.panic($.concatString("both pointer and slice for basic type in ", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}

	switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Bool:
		{
			if (__goscriptShadow0) {
				return unmarshalBoolPtr
			}
			if (slice) {
				return unmarshalBoolSlice
			}
			return unmarshalBoolValue
			break
		}
		case reflect.Int32:
		{
			switch (encoding) {
				case "fixed32":
				{
					if (__goscriptShadow0) {
						return unmarshalFixedS32Ptr
					}
					if (slice) {
						return unmarshalFixedS32Slice
					}
					return unmarshalFixedS32Value
					break
				}
				case "varint":
				{
					if (__goscriptShadow0) {
						return unmarshalInt32Ptr
					}
					if (slice) {
						return unmarshalInt32Slice
					}
					return unmarshalInt32Value
					break
				}
				case "zigzag32":
				{
					if (__goscriptShadow0) {
						return unmarshalSint32Ptr
					}
					if (slice) {
						return unmarshalSint32Slice
					}
					return unmarshalSint32Value
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
					if (__goscriptShadow0) {
						return unmarshalFixedS64Ptr
					}
					if (slice) {
						return unmarshalFixedS64Slice
					}
					return unmarshalFixedS64Value
					break
				}
				case "varint":
				{
					if (__goscriptShadow0) {
						return unmarshalInt64Ptr
					}
					if (slice) {
						return unmarshalInt64Slice
					}
					return unmarshalInt64Value
					break
				}
				case "zigzag64":
				{
					if (__goscriptShadow0) {
						return unmarshalSint64Ptr
					}
					if (slice) {
						return unmarshalSint64Slice
					}
					return unmarshalSint64Value
					break
				}
			}
			break
		}
		case reflect.Uint32:
		{
			switch (encoding) {
				case "fixed32":
				{
					if (__goscriptShadow0) {
						return unmarshalFixed32Ptr
					}
					if (slice) {
						return unmarshalFixed32Slice
					}
					return unmarshalFixed32Value
					break
				}
				case "varint":
				{
					if (__goscriptShadow0) {
						return unmarshalUint32Ptr
					}
					if (slice) {
						return unmarshalUint32Slice
					}
					return unmarshalUint32Value
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
					if (__goscriptShadow0) {
						return unmarshalFixed64Ptr
					}
					if (slice) {
						return unmarshalFixed64Slice
					}
					return unmarshalFixed64Value
					break
				}
				case "varint":
				{
					if (__goscriptShadow0) {
						return unmarshalUint64Ptr
					}
					if (slice) {
						return unmarshalUint64Slice
					}
					return unmarshalUint64Value
					break
				}
			}
			break
		}
		case reflect.Float32:
		{
			if (__goscriptShadow0) {
				return unmarshalFloat32Ptr
			}
			if (slice) {
				return unmarshalFloat32Slice
			}
			return unmarshalFloat32Value
			break
		}
		case reflect.Float64:
		{
			if (__goscriptShadow0) {
				return unmarshalFloat64Ptr
			}
			if (slice) {
				return unmarshalFloat64Slice
			}
			return unmarshalFloat64Value
			break
		}
		case reflect.Map:
		{
			$.panic($.concatString("map type in typeUnmarshaler in ", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			break
		}
		case reflect.Slice:
		{
			if (__goscriptShadow0) {
				$.panic($.concatString("bad pointer in slice case in ", (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			}
			if (slice) {
				return unmarshalBytesSlice
			}
			return unmarshalBytesValue
			break
		}
		case reflect.String:
		{
			if (validateUTF8) {
				if (__goscriptShadow0) {
					return unmarshalUTF8StringPtr
				}
				if (slice) {
					return unmarshalUTF8StringSlice
				}
				return unmarshalUTF8StringValue
			}
			if (__goscriptShadow0) {
				return unmarshalStringPtr
			}
			if (slice) {
				return unmarshalStringSlice
			}
			return unmarshalStringValue
			break
		}
		case reflect.Struct:
		{
			if (!__goscriptShadow0) {
				switch (encoding) {
					case "bytes":
					{
						if (slice) {
							return __goscript_table_unmarshal_gogo.makeUnmarshalMessageSlice(await getUnmarshalInfo(t), name)
						}
						return __goscript_table_unmarshal_gogo.makeUnmarshalMessage(await getUnmarshalInfo(t), name)
						break
					}
				}
			}
			switch (encoding) {
				case "bytes":
				{
					if (slice) {
						return makeUnmarshalMessageSlicePtr(await getUnmarshalInfo(t), name)
					}
					return makeUnmarshalMessagePtr(await getUnmarshalInfo(t), name)
					break
				}
				case "group":
				{
					if (slice) {
						return makeUnmarshalGroupSlicePtr(await getUnmarshalInfo(t), name)
					}
					return makeUnmarshalGroupPtr(await getUnmarshalInfo(t), name)
					break
				}
			}
			break
		}
	}
	$.panic(await fmt.Sprintf("unmarshaler not found type:%s encoding:%s", (t as any), encoding))
	throw new globalThis.Error("goscript: unreachable return")
}

export function unmarshalInt64Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int64(x)
	f.toInt64()!.value = v
	return [b, null]
}

export function unmarshalInt64Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.varRef($.int64(x))
	f.toInt64Ptr()!.value = v
	return [b, null]
}

export function unmarshalInt64Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			let __goscriptTuple6: any = decodeVarint(b)
			x = __goscriptTuple6[0]
			n = __goscriptTuple6[1]
			if (n == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, n, undefined)
			let v = $.int64(x)
			let s = f.toInt64Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
		}
		return [res, null]
	}
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int64(x)
	let s = f.toInt64Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
	return [b, null]
}

export function unmarshalSint64Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int64Xor($.int64($.uint64Shr(x, 1n)), ($.int64Shr(($.int64Shl($.int64(x), 63n)), 63n)))
	f.toInt64()!.value = v
	return [b, null]
}

export function unmarshalSint64Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.varRef($.int64Xor($.int64($.uint64Shr(x, 1n)), ($.int64Shr(($.int64Shl($.int64(x), 63n)), 63n))))
	f.toInt64Ptr()!.value = v
	return [b, null]
}

export function unmarshalSint64Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			let __goscriptTuple7: any = decodeVarint(b)
			x = __goscriptTuple7[0]
			n = __goscriptTuple7[1]
			if (n == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, n, undefined)
			let v = $.int64Xor($.int64($.uint64Shr(x, 1n)), ($.int64Shr(($.int64Shl($.int64(x), 63n)), 63n)))
			let s = f.toInt64Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
		}
		return [res, null]
	}
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int64Xor($.int64($.uint64Shr(x, 1n)), ($.int64Shr(($.int64Shl($.int64(x), 63n)), 63n)))
	let s = f.toInt64Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
	return [b, null]
}

export function unmarshalUint64Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.uint64(x)
	f.toUint64()!.value = v
	return [b, null]
}

export function unmarshalUint64Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.varRef($.uint64(x))
	f.toUint64Ptr()!.value = v
	return [b, null]
}

export function unmarshalUint64Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			let __goscriptTuple8: any = decodeVarint(b)
			x = __goscriptTuple8[0]
			n = __goscriptTuple8[1]
			if (n == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, n, undefined)
			let v = $.uint64(x)
			let s = f.toUint64Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
		}
		return [res, null]
	}
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.uint64(x)
	let s = f.toUint64Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
	return [b, null]
}

export function unmarshalInt32Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int(x, 32)
	f.toInt32()!.value = v
	return [b, null]
}

export async function unmarshalInt32Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int(x, 32)
	await f.setInt32Ptr(v)
	return [b, null]
}

export async function unmarshalInt32Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			let __goscriptTuple9: any = decodeVarint(b)
			x = __goscriptTuple9[0]
			n = __goscriptTuple9[1]
			if (n == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, n, undefined)
			let v = $.int(x, 32)
			await f.appendInt32Slice(v)
		}
		return [res, null]
	}
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int(x, 32)
	await f.appendInt32Slice(v)
	return [b, null]
}

export function unmarshalSint32Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int($.int($.uint64Shr(x, 1n), 32) ^ (($.int(x, 32) << 31) >> 31), 32)
	f.toInt32()!.value = v
	return [b, null]
}

export async function unmarshalSint32Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int($.int($.uint64Shr(x, 1n), 32) ^ (($.int(x, 32) << 31) >> 31), 32)
	await f.setInt32Ptr(v)
	return [b, null]
}

export async function unmarshalSint32Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			let __goscriptTuple10: any = decodeVarint(b)
			x = __goscriptTuple10[0]
			n = __goscriptTuple10[1]
			if (n == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, n, undefined)
			let v = $.int($.int($.uint64Shr(x, 1n), 32) ^ (($.int(x, 32) << 31) >> 31), 32)
			await f.appendInt32Slice(v)
		}
		return [res, null]
	}
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.int($.int($.uint64Shr(x, 1n), 32) ^ (($.int(x, 32) << 31) >> 31), 32)
	await f.appendInt32Slice(v)
	return [b, null]
}

export function unmarshalUint32Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.uint(x, 32)
	f.toUint32()!.value = v
	return [b, null]
}

export function unmarshalUint32Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.varRef($.uint(x, 32))
	f.toUint32Ptr()!.value = v
	return [b, null]
}

export function unmarshalUint32Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			let __goscriptTuple11: any = decodeVarint(b)
			x = __goscriptTuple11[0]
			n = __goscriptTuple11[1]
			if (n == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, n, undefined)
			let v = $.uint(x, 32)
			let s = f.toUint32Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), $.uint(v, 32))
		}
		return [res, null]
	}
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	let v = $.uint(x, 32)
	let s = f.toUint32Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), $.uint(v, 32))
	return [b, null]
}

export function unmarshalFixed64Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56))))
	f.toUint64()!.value = v
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFixed64Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56)))))
	f.toUint64Ptr()!.value = v
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFixed64Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			if ($.sliceLen(b) < 8) {
				return [null, io.ErrUnexpectedEOF]
			}
			let v = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56))))
			let s = f.toUint64Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
			b = $.goSlice(b, 8, undefined)
		}
		return [res, null]
	}
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56))))
	let s = f.toUint64Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFixedS64Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or($.int64($.arrayIndex(b!, 0)), ($.int64Shl($.int64($.arrayIndex(b!, 1)), 8n)))), ($.int64Shl($.int64($.arrayIndex(b!, 2)), 16n)))), ($.int64Shl($.int64($.arrayIndex(b!, 3)), 24n)))), ($.int64Shl($.int64($.arrayIndex(b!, 4)), 32n)))), ($.int64Shl($.int64($.arrayIndex(b!, 5)), 40n)))), ($.int64Shl($.int64($.arrayIndex(b!, 6)), 48n)))), ($.int64Shl($.int64($.arrayIndex(b!, 7)), 56n)))
	f.toInt64()!.value = v
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFixedS64Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or($.int64($.arrayIndex(b!, 0)), ($.int64Shl($.int64($.arrayIndex(b!, 1)), 8n)))), ($.int64Shl($.int64($.arrayIndex(b!, 2)), 16n)))), ($.int64Shl($.int64($.arrayIndex(b!, 3)), 24n)))), ($.int64Shl($.int64($.arrayIndex(b!, 4)), 32n)))), ($.int64Shl($.int64($.arrayIndex(b!, 5)), 40n)))), ($.int64Shl($.int64($.arrayIndex(b!, 6)), 48n)))), ($.int64Shl($.int64($.arrayIndex(b!, 7)), 56n))))
	f.toInt64Ptr()!.value = v
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFixedS64Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			if ($.sliceLen(b) < 8) {
				return [null, io.ErrUnexpectedEOF]
			}
			let v = $.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or($.int64($.arrayIndex(b!, 0)), ($.int64Shl($.int64($.arrayIndex(b!, 1)), 8n)))), ($.int64Shl($.int64($.arrayIndex(b!, 2)), 16n)))), ($.int64Shl($.int64($.arrayIndex(b!, 3)), 24n)))), ($.int64Shl($.int64($.arrayIndex(b!, 4)), 32n)))), ($.int64Shl($.int64($.arrayIndex(b!, 5)), 40n)))), ($.int64Shl($.int64($.arrayIndex(b!, 6)), 48n)))), ($.int64Shl($.int64($.arrayIndex(b!, 7)), 56n)))
			let s = f.toInt64Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
			b = $.goSlice(b, 8, undefined)
		}
		return [res, null]
	}
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or(($.int64Or($.int64($.arrayIndex(b!, 0)), ($.int64Shl($.int64($.arrayIndex(b!, 1)), 8n)))), ($.int64Shl($.int64($.arrayIndex(b!, 2)), 16n)))), ($.int64Shl($.int64($.arrayIndex(b!, 3)), 24n)))), ($.int64Shl($.int64($.arrayIndex(b!, 4)), 32n)))), ($.int64Shl($.int64($.arrayIndex(b!, 5)), 40n)))), ($.int64Shl($.int64($.arrayIndex(b!, 6)), 48n)))), ($.int64Shl($.int64($.arrayIndex(b!, 7)), 56n)))
	let s = f.toInt64Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<bigint>>(s), v)
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFixed32Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32)
	f.toUint32()!.value = v
	return [$.goSlice(b, 4, undefined), null]
}

export function unmarshalFixed32Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef($.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32))
	f.toUint32Ptr()!.value = v
	return [$.goSlice(b, 4, undefined), null]
}

export function unmarshalFixed32Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			if ($.sliceLen(b) < 4) {
				return [null, io.ErrUnexpectedEOF]
			}
			let v = $.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32)
			let s = f.toUint32Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), $.uint(v, 32))
			b = $.goSlice(b, 4, undefined)
		}
		return [res, null]
	}
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32)
	let s = f.toUint32Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), $.uint(v, 32))
	return [$.goSlice(b, 4, undefined), null]
}

export function unmarshalFixedS32Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.int((($.int($.arrayIndex(b!, 0), 32) | ($.int($.arrayIndex(b!, 1), 32) << 8)) | ($.int($.arrayIndex(b!, 2), 32) << 16)) | ($.int($.arrayIndex(b!, 3), 32) << 24), 32)
	f.toInt32()!.value = v
	return [$.goSlice(b, 4, undefined), null]
}

export async function unmarshalFixedS32Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.int((($.int($.arrayIndex(b!, 0), 32) | ($.int($.arrayIndex(b!, 1), 32) << 8)) | ($.int($.arrayIndex(b!, 2), 32) << 16)) | ($.int($.arrayIndex(b!, 3), 32) << 24), 32)
	await f.setInt32Ptr(v)
	return [$.goSlice(b, 4, undefined), null]
}

export async function unmarshalFixedS32Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			if ($.sliceLen(b) < 4) {
				return [null, io.ErrUnexpectedEOF]
			}
			let v = $.int((($.int($.arrayIndex(b!, 0), 32) | ($.int($.arrayIndex(b!, 1), 32) << 8)) | ($.int($.arrayIndex(b!, 2), 32) << 16)) | ($.int($.arrayIndex(b!, 3), 32) << 24), 32)
			await f.appendInt32Slice(v)
			b = $.goSlice(b, 4, undefined)
		}
		return [res, null]
	}
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.int((($.int($.arrayIndex(b!, 0), 32) | ($.int($.arrayIndex(b!, 1), 32) << 8)) | ($.int($.arrayIndex(b!, 2), 32) << 16)) | ($.int($.arrayIndex(b!, 3), 32) << 24), 32)
	await f.appendInt32Slice(v)
	return [$.goSlice(b, 4, undefined), null]
}

export function unmarshalBoolValue(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	// Note: any length varint is allowed, even though any sane
	// encoder will use one byte.
	// See https://github.com/golang/protobuf/issues/76
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	// TODO: check if x>1? Tests seem to indicate no.
	let v = x != 0n
	f.toBool()!.value = v
	return [$.goSlice(b, n, undefined), null]
}

export function unmarshalBoolPtr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef(x != 0n)
	f.toBoolPtr()!.value = v
	return [$.goSlice(b, n, undefined), null]
}

export function unmarshalBoolSlice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			let __goscriptTuple12: any = decodeVarint(b)
			x = __goscriptTuple12[0]
			n = __goscriptTuple12[1]
			if (n == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			let v = x != 0n
			let s = f.toBoolSlice()
			s!.value = $.appendOne($.pointerValue<$.Slice<boolean>>(s), v)
			b = $.goSlice(b, n, undefined)
		}
		return [res, null]
	}
	if (w != 0) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = x != 0n
	let s = f.toBoolSlice()
	s!.value = $.appendOne($.pointerValue<$.Slice<boolean>>(s), v)
	return [$.goSlice(b, n, undefined), null]
}

export function unmarshalFloat64Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = math.Float64frombits($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56)))))
	f.toFloat64()!.value = v
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFloat64Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef(math.Float64frombits($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56))))))
	f.toFloat64Ptr()!.value = v
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFloat64Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			if ($.sliceLen(b) < 8) {
				return [null, io.ErrUnexpectedEOF]
			}
			let v = math.Float64frombits($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56)))))
			let s = f.toFloat64Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), v)
			b = $.goSlice(b, 8, undefined)
		}
		return [res, null]
	}
	if (w != 1) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 8) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = math.Float64frombits($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or($.uint64($.arrayIndex(b!, 0)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56)))))
	let s = f.toFloat64Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), v)
	return [$.goSlice(b, 8, undefined), null]
}

export function unmarshalFloat32Value(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = math.Float32frombits($.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32))
	f.toFloat32()!.value = v
	return [$.goSlice(b, 4, undefined), null]
}

export function unmarshalFloat32Ptr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef(math.Float32frombits($.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32)))
	f.toFloat32Ptr()!.value = v
	return [$.goSlice(b, 4, undefined), null]
}

export function unmarshalFloat32Slice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w == 2) {
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let res: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))
		while ($.sliceLen(b) > 0) {
			if ($.sliceLen(b) < 4) {
				return [null, io.ErrUnexpectedEOF]
			}
			let v = math.Float32frombits($.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32))
			let s = f.toFloat32Slice()
			s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), v)
			b = $.goSlice(b, 4, undefined)
		}
		return [res, null]
	}
	if (w != 5) {
		return [b, errInternalBadWireType]
	}
	if ($.sliceLen(b) < 4) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = math.Float32frombits($.uint((($.uint($.arrayIndex(b!, 0), 32) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32))
	let s = f.toFloat32Slice()
	s!.value = $.appendOne($.pointerValue<$.Slice<number>>(s), v)
	return [$.goSlice(b, 4, undefined), null]
}

export function unmarshalStringValue(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.bytesToString($.goSlice(b, undefined, globalThis.Number(x)))
	f.toString()!.value = v
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export function unmarshalStringPtr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef($.bytesToString($.goSlice(b, undefined, globalThis.Number(x))))
	f.toStringPtr()!.value = v
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export function unmarshalStringSlice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.bytesToString($.goSlice(b, undefined, globalThis.Number(x)))
	let s = f.toStringSlice()
	s!.value = $.appendOne($.pointerValue<$.Slice<string>>(s), v)
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export function unmarshalUTF8StringValue(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.bytesToString($.goSlice(b, undefined, globalThis.Number(x)))
	f.toString()!.value = v
	if (!utf8.ValidString(v)) {
		return [$.goSlice(b, globalThis.Number(x), undefined), $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))]
	}
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export function unmarshalUTF8StringPtr(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.varRef($.bytesToString($.goSlice(b, undefined, globalThis.Number(x))))
	f.toStringPtr()!.value = v
	if (!utf8.ValidString(v.value)) {
		return [$.goSlice(b, globalThis.Number(x), undefined), $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))]
	}
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export function unmarshalUTF8StringSlice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v = $.bytesToString($.goSlice(b, undefined, globalThis.Number(x)))
	let s = f.toStringSlice()
	s!.value = $.appendOne($.pointerValue<$.Slice<string>>(s), v)
	if (!utf8.ValidString(v)) {
		return [$.goSlice(b, globalThis.Number(x), undefined), $.interfaceValue<$.GoError>(__goscript_lib.errInvalidUTF8, "*proto.invalidUTF8Error", /* @__PURE__ */ $.pointerType("proto.invalidUTF8Error"))]
	}
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export let emptyBuf: Uint8Array = $.arrayValue(new Uint8Array(0))

export function __goscript_set_emptyBuf(__goscriptValue: Uint8Array): void {
	emptyBuf = __goscriptValue
}

export function unmarshalBytesValue(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	// The use of append here is a trick which avoids the zeroing
	// that would be required if we used a make/copy pair.
	// We append to emptyBuf instead of nil because we want
	// a non-nil result even when the length is 0.
	let v: $.Slice<number> = $.appendSlice($.goSlice(emptyBuf, undefined, undefined), $.goSlice(b, undefined, globalThis.Number(x)), $.byteSliceHint)
	f.toBytes()!.value = v
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export function unmarshalBytesSlice(b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): [$.Slice<number>, $.GoError] {
	if (w != 2) {
		return [b, errInternalBadWireType]
	}
	let [x, n] = decodeVarint(b)
	if (n == 0) {
		return [null, io.ErrUnexpectedEOF]
	}
	b = $.goSlice(b, n, undefined)
	if (x > $.uint64($.sliceLen(b))) {
		return [null, io.ErrUnexpectedEOF]
	}
	let v: $.Slice<number> = $.appendSlice($.goSlice(emptyBuf, undefined, undefined), $.goSlice(b, undefined, globalThis.Number(x)), $.byteSliceHint)
	let s = f.toBytesSlice()
	s!.value = $.appendOne($.pointerValue<$.Slice<$.Slice<number>>>(s), v, $.appendZeros.nil)
	return [$.goSlice(b, globalThis.Number(x), undefined), null]
}

export function makeUnmarshalMessagePtr(sub: unmarshalInfo | $.VarRef<unmarshalInfo> | null, name: string): unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [b, errInternalBadWireType]
		}
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		// First read the message field to see if something is there.
		// The semantics of multiple submessages are weird.  Instead of
		// the last one winning (as it is for all other fields), multiple
		// submessages are merged.
		let v = f.getPointer()
		if (v.isNil()) {
			v = $.assignStruct(v, __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil($.pointerValue<unmarshalInfo>(sub).typ)!)))
			f.setPointer(v)
		}
		let err = await (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as unmarshalInfo).unmarshal(v, $.goSlice(b, undefined, globalThis.Number(x))) : unmarshalInfo.prototype.unmarshal.call(sub, v, $.goSlice(b, undefined, globalThis.Number(x))))
		if (err != null) {
			{
				let __goscriptTuple13: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
				let r: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple13[0]
				let ok = __goscriptTuple13[1]
				if (ok) {
					$.pointerValue<__goscript_lib.RequiredNotSetError>(r).field = $.concatString(($.concatString(name, ".")), $.pointerValue<__goscript_lib.RequiredNotSetError>(r).field)
				} else {
					return [null, err]
				}
			}
		}
		return [$.goSlice(b, globalThis.Number(x), undefined), err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalMessageSlicePtr(sub: unmarshalInfo | $.VarRef<unmarshalInfo> | null, name: string): unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 2) {
			return [b, errInternalBadWireType]
		}
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let v = __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil($.pointerValue<unmarshalInfo>(sub).typ)!))
		let err = await (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as unmarshalInfo).unmarshal(v, $.goSlice(b, undefined, globalThis.Number(x))) : unmarshalInfo.prototype.unmarshal.call(sub, v, $.goSlice(b, undefined, globalThis.Number(x))))
		if (err != null) {
			{
				let __goscriptTuple14: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
				let r: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple14[0]
				let ok = __goscriptTuple14[1]
				if (ok) {
					$.pointerValue<__goscript_lib.RequiredNotSetError>(r).field = $.concatString(($.concatString(name, ".")), $.pointerValue<__goscript_lib.RequiredNotSetError>(r).field)
				} else {
					return [null, err]
				}
			}
		}
		await f.appendPointer(v)
		return [$.goSlice(b, globalThis.Number(x), undefined), err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalGroupPtr(sub: unmarshalInfo | $.VarRef<unmarshalInfo> | null, name: string): unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 3) {
			return [b, errInternalBadWireType]
		}
		let [x, y] = findEndGroup(b)
		if (x < 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		let v = f.getPointer()
		if (v.isNil()) {
			v = $.assignStruct(v, __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil($.pointerValue<unmarshalInfo>(sub).typ)!)))
			f.setPointer(v)
		}
		let err = await (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as unmarshalInfo).unmarshal(v, $.goSlice(b, undefined, x)) : unmarshalInfo.prototype.unmarshal.call(sub, v, $.goSlice(b, undefined, x)))
		if (err != null) {
			{
				let __goscriptTuple15: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
				let r: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple15[0]
				let ok = __goscriptTuple15[1]
				if (ok) {
					$.pointerValue<__goscript_lib.RequiredNotSetError>(r).field = $.concatString(($.concatString(name, ".")), $.pointerValue<__goscript_lib.RequiredNotSetError>(r).field)
				} else {
					return [null, err]
				}
			}
		}
		return [$.goSlice(b, y, undefined), err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export function makeUnmarshalGroupSlicePtr(sub: unmarshalInfo | $.VarRef<unmarshalInfo> | null, name: string): unmarshaler | null {
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		if (w != 3) {
			return [b, errInternalBadWireType]
		}
		let [x, y] = findEndGroup(b)
		if (x < 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		let v = __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil($.pointerValue<unmarshalInfo>(sub).typ)!))
		let err = await (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? ((sub as any) as unmarshalInfo).unmarshal(v, $.goSlice(b, undefined, x)) : unmarshalInfo.prototype.unmarshal.call(sub, v, $.goSlice(b, undefined, x)))
		if (err != null) {
			{
				let __goscriptTuple16: any = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
				let r: __goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null = __goscriptTuple16[0]
				let ok = __goscriptTuple16[1]
				if (ok) {
					$.pointerValue<__goscript_lib.RequiredNotSetError>(r).field = $.concatString(($.concatString(name, ".")), $.pointerValue<__goscript_lib.RequiredNotSetError>(r).field)
				} else {
					return [null, err]
				}
			}
		}
		await f.appendPointer(v)
		return [$.goSlice(b, y, undefined), err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export async function makeUnmarshalMap(f: reflect.StructField | $.VarRef<reflect.StructField> | null): globalThis.Promise<unmarshaler | null> {
	const f$: reflect.StructField = f == null ? $.pointerTarget<reflect.StructField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<reflect.StructField>(f)
	let t = (f$ as reflect.StructField).Type
	let kt = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let vt = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tagArray: $.Slice<string> = strings.Split(reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf"), ",")
	let valTags: $.Slice<string> = strings.Split(reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_val"), ",")
	for (let __goscriptRangeTarget7 = tagArray, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let t = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as string)
		if (strings.HasPrefix(t, "customtype=")) {
			valTags = $.appendOne(valTags, t)
		}
		if ($.stringEqual(t, "stdtime")) {
			valTags = $.appendOne(valTags, t)
		}
		if ($.stringEqual(t, "stdduration")) {
			valTags = $.appendOne(valTags, t)
		}
		if ($.stringEqual(t, "wktptr")) {
			valTags = $.appendOne(valTags, t)
		}
	}
	let unmarshalKey = await typeUnmarshaler(kt, reflect.StructTag_Get((f$ as reflect.StructField).Tag, "protobuf_key"))
	let unmarshalVal = await typeUnmarshaler(vt, strings.Join(valTags, ","))
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		// The map entry is a submessage. Figure out how big it is.
		if (w != 2) {
			return [null, fmt.Errorf("proto: bad wiretype for map field: got %d want %d", $.basicInterfaceValue(w, "int"), $.basicInterfaceValue(2, "int"))]
		}
		let [x, n] = decodeVarint(b)
		if (n == 0) {
			return [null, io.ErrUnexpectedEOF]
		}
		b = $.goSlice(b, n, undefined)
		if (x > $.uint64($.sliceLen(b))) {
			return [null, io.ErrUnexpectedEOF]
		}
		let r: $.Slice<number> = $.goSlice(b, globalThis.Number(x), undefined)
		b = $.goSlice(b, undefined, globalThis.Number(x))

		// Note: we could use #keys * #values ~= 200 functions
		// to do map decoding without reflection. Probably not worth it.
		// Maps will be somewhat slow. Oh well.

		// Read key and value from data.
		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))
		let k = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(kt)!)))
		let v = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(vt)!)))
		while ($.sliceLen(b) > 0) {
			let [__goscriptShadow1, __goscriptShadow2] = decodeVarint(b)
			if (__goscriptShadow2 == 0) {
				return [null, io.ErrUnexpectedEOF]
			}
			let wire = $.int(__goscriptShadow1) & 7
			b = $.goSlice(b, __goscriptShadow2, undefined)

			let err: $.GoError = null! as $.GoError
			switch ($.uint64Shr(__goscriptShadow1, 3n)) {
				case 1n:
				{
					let __goscriptTuple17: any = await unmarshalKey!(b, __goscript_pointer_reflect.valToPointer(k), wire)
					b = __goscriptTuple17[0]
					err = __goscriptTuple17[1]
					break
				}
				case 2n:
				{
					let __goscriptTuple18: any = await unmarshalVal!(b, __goscript_pointer_reflect.valToPointer(v), wire)
					b = __goscriptTuple18[0]
					err = __goscriptTuple18[1]
					break
				}
				default:
				{
					err = errInternalBadWireType
					break
				}
			}

			if (await nerr.value.Merge(err)) {
				continue
			}
			if (!$.comparableEqual(err, errInternalBadWireType)) {
				return [null, err]
			}

			// Skip past unknown fields.
			let __goscriptTuple19: any = skipField(b, wire)
			b = __goscriptTuple19[0]
			err = __goscriptTuple19[1]
			if (err != null) {
				return [null, err]
			}
		}

		// Get map, allocate if needed.
		let m = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(t))).Elem()))
		if ($.markAsStructValue($.cloneStructValue(m)).IsNil()) {
			$.markAsStructValue($.cloneStructValue(m)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil(t)!))))
		}

		// Insert into map.
		$.markAsStructValue($.cloneStructValue(m)).SetMapIndex($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(k)).Elem())), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())))

		return [r, nerr.value.E]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export async function makeUnmarshalOneof(typ: reflect.Type | null, ityp: reflect.Type | null, unmarshal: ((b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null): globalThis.Promise<unmarshaler | null> {
	let sf = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
	let field0: __goscript_pointer_reflect.field = (__goscript_pointer_reflect.toField(sf) as __goscript_pointer_reflect.field)
	return $.functionValue(async (b: $.Slice<number>, f: __goscript_pointer_reflect.pointer, w: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		// Allocate holder for value.
		let v = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!)))

		// Unmarshal data into holder.
		// We unmarshal into the first field of the holder object.
		let err: $.GoError = null! as $.GoError
		let nerr: $.VarRef<__goscript_lib.nonFatal> = $.varRef(new __goscript_lib.nonFatal(undefined, true))
		let __goscriptTuple20: any = await unmarshal!(b, $.markAsStructValue($.cloneStructValue(__goscript_pointer_reflect.valToPointer(v))).offset((field0 as __goscript_pointer_reflect.field)), w)
		b = __goscriptTuple20[0]
		err = __goscriptTuple20[1]
		if (!await nerr.value.Merge(err)) {
			return [null, err]
		}

		// Write pointer to holder into target field.
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f.asPointerTo(ityp))).Elem())).Set($.markAsStructValue($.cloneStructValue(v)))

		return [b, nerr.value.E]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "proto.pointer", /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

export let errInternalBadWireType: $.GoError = errors.New("proto: internal error: bad wiretype")

export function __goscript_set_errInternalBadWireType(__goscriptValue: $.GoError): void {
	errInternalBadWireType = __goscriptValue
}

export function skipField(b: $.Slice<number>, wire: number): [$.Slice<number>, $.GoError] {
	switch (wire) {
		case 0:
		{
			let [, k] = decodeVarint(b)
			if (k == 0) {
				return [b, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, k, undefined)
			break
		}
		case 5:
		{
			if ($.sliceLen(b) < 4) {
				return [b, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, 4, undefined)
			break
		}
		case 1:
		{
			if ($.sliceLen(b) < 8) {
				return [b, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, 8, undefined)
			break
		}
		case 2:
		{
			let [m, k] = decodeVarint(b)
			if ((k == 0) || ($.uint64($.sliceLen(b) - k) < m)) {
				return [b, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, globalThis.Number($.uint64Add($.uint64(k), m)), undefined)
			break
		}
		case 3:
		{
			let [, i] = findEndGroup(b)
			if (i == -1) {
				return [b, io.ErrUnexpectedEOF]
			}
			b = $.goSlice(b, i, undefined)
			break
		}
		default:
		{
			return [b, fmt.Errorf("proto: can't skip unknown wire type %d", $.basicInterfaceValue(wire, "int"))]
			break
		}
	}
	return [b, null]
}

export function findEndGroup(b: $.Slice<number>): [number, number] {
	let depth = 1
	let i = 0
	while (true) {
		let [x, n] = decodeVarint($.goSlice(b, i, undefined))
		if (n == 0) {
			return [-1, -1]
		}
		let j = i
		i = i + (n)
		switch ($.uint64And(x, 7n)) {
			case 0n:
			{
				let [, k] = decodeVarint($.goSlice(b, i, undefined))
				if (k == 0) {
					return [-1, -1]
				}
				i = i + (k)
				break
			}
			case 5n:
			{
				if (($.sliceLen(b) - 4) < i) {
					return [-1, -1]
				}
				i = i + (4)
				break
			}
			case 1n:
			{
				if (($.sliceLen(b) - 8) < i) {
					return [-1, -1]
				}
				i = i + (8)
				break
			}
			case 2n:
			{
				let [m, k] = decodeVarint($.goSlice(b, i, undefined))
				if (k == 0) {
					return [-1, -1]
				}
				i = i + (k)
				if ($.uint64($.sliceLen(b) - i) < m) {
					return [-1, -1]
				}
				i = i + ($.int(m))
				break
			}
			case 3n:
			{
				depth++
				break
			}
			case 4n:
			{
				depth--
				if (depth == 0) {
					return [j, i]
				}
				break
			}
			default:
			{
				return [-1, -1]
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function encodeVarint(b: $.Slice<number>, x: bigint): $.Slice<number> {
	while (x >= 128n) {
		b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(x, 127n)), 128n), 8), 8), $.byteSliceHint)
		x = $.uint64Shr(x, 7n)
	}
	return $.append(b, $.uint($.uint(x, 8), 8), $.byteSliceHint)
}

export function decodeVarint(b: $.Slice<number>): [bigint, number] {
	let x: bigint = 0n
	let y: bigint = 0n
	bad: {
		if ($.sliceLen(b) == 0) {
			break bad
		}
		x = $.uint64($.arrayIndex(b!, 0))
		if (x < 128n) {
			return [x, 1]
		}
		x = $.uint64Sub(x, 128n)

		if ($.sliceLen(b) <= 1) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 1))
		x = $.uint64Add(x, $.uint64Shl(y, 7n))
		if (y < 128n) {
			return [x, 2]
		}
		x = $.uint64Sub(x, 16384n)

		if ($.sliceLen(b) <= 2) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 2))
		x = $.uint64Add(x, $.uint64Shl(y, 14n))
		if (y < 128n) {
			return [x, 3]
		}
		x = $.uint64Sub(x, 2097152n)

		if ($.sliceLen(b) <= 3) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 3))
		x = $.uint64Add(x, $.uint64Shl(y, 21n))
		if (y < 128n) {
			return [x, 4]
		}
		x = $.uint64Sub(x, 268435456n)

		if ($.sliceLen(b) <= 4) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 4))
		x = $.uint64Add(x, $.uint64Shl(y, 28n))
		if (y < 128n) {
			return [x, 5]
		}
		x = $.uint64Sub(x, 34359738368n)

		if ($.sliceLen(b) <= 5) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 5))
		x = $.uint64Add(x, $.uint64Mul(y, (2 ** 35)))
		if (y < 128n) {
			return [x, 6]
		}
		x = $.uint64Sub(x, 4398046511104n)

		if ($.sliceLen(b) <= 6) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 6))
		x = $.uint64Add(x, $.uint64Mul(y, (2 ** 42)))
		if (y < 128n) {
			return [x, 7]
		}
		x = $.uint64Sub(x, 562949953421312n)

		if ($.sliceLen(b) <= 7) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 7))
		x = $.uint64Add(x, $.uint64Mul(y, (2 ** 49)))
		if (y < 128n) {
			return [x, 8]
		}
		x = $.uint64Sub(x, 72057594037927936n)

		if ($.sliceLen(b) <= 8) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 8))
		x = $.uint64Add(x, $.uint64Mul(y, (2 ** 56)))
		if (y < 128n) {
			return [x, 9]
		}
		x = $.uint64Sub(x, 9223372036854775808n)

		if ($.sliceLen(b) <= 9) {
			break bad
		}
		y = $.uint64($.arrayIndex(b!, 9))
		x = $.uint64Add(x, $.uint64Mul(y, (2 ** 63)))
		if (y < 2n) {
			return [x, 10]
		}
	}
	return [0n, 0]
}

var __goscriptAwait: any
