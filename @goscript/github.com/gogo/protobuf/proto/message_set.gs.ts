// Generated file based on message_set.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import type * as sync from "@goscript/sync/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_text from "./text.gs.ts"
import "@goscript/errors/index.js"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./extensions_gogo.gs.ts"
import "./lib.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"
import "./text.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto._MessageSet_Item", "proto.messageSet", "proto.messageTypeIder"])

export type messageTypeIder = {
	MessageTypeId(): number
}

$.registerInterfaceType(
	"proto.messageTypeIder",
	null,
	[$.methodSignature("MessageTypeId", [], [/* @__PURE__ */ $.basicType("int32")])]
);

export class _MessageSet_Item {
	public get TypeId(): $.VarRef<number> | null {
		return this._fields.TypeId
	}

	public set TypeId(value: $.VarRef<number> | null) {
		this._fields.TypeId = value
	}

	public get Message(): $.Slice<number> {
		return this._fields.Message
	}

	public set Message(value: $.Slice<number>) {
		this._fields.Message = value
	}

	public _fields: {
		TypeId: $.VarRef<number> | null
		Message: $.Slice<number>
	}

	constructor(init?: Partial<{TypeId?: $.VarRef<number> | null, Message?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			TypeId: init?.TypeId ?? (null! as $.VarRef<number> | null),
			Message: init?.Message ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _MessageSet_Item {
		return new _MessageSet_Item(this, true)
	}

	public __goscriptAssign(source: _MessageSet_Item): void {
		const target = this._fields
		const values = source._fields
		target.TypeId = values.TypeId
		target.Message = values.Message
	}

	static __typeInfo = $.registerStructType(
		"proto._MessageSet_Item",
		() => new _MessageSet_Item(),
		() => [],
		_MessageSet_Item,
		() => [/* @__PURE__ */ $.structField("TypeId", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [0], 0, true, { tag: "protobuf:\"varint,2,req,name=type_id\"" }), /* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true, { tag: "protobuf:\"bytes,3,req,name=message\"" })]
	)
}

export class messageSet {
	public get Item(): $.Slice<_MessageSet_Item | $.VarRef<_MessageSet_Item> | null> {
		return this._fields.Item
	}

	public set Item(value: $.Slice<_MessageSet_Item | $.VarRef<_MessageSet_Item> | null>) {
		this._fields.Item = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public _fields: {
		Item: $.Slice<_MessageSet_Item | $.VarRef<_MessageSet_Item> | null>
		XXX_unrecognized: $.Slice<number>
	}

	constructor(init?: Partial<{Item?: $.Slice<_MessageSet_Item | $.VarRef<_MessageSet_Item> | null>, XXX_unrecognized?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Item: init?.Item ?? (null! as $.Slice<_MessageSet_Item | $.VarRef<_MessageSet_Item> | null>),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageSet {
		return new messageSet(this, true)
	}

	public __goscriptAssign(source: messageSet): void {
		const target = this._fields
		const values = source._fields
		target.Item = values.Item
		target.XXX_unrecognized = values.XXX_unrecognized
	}

	public async Has(pb: __goscript_lib.Message | null): globalThis.Promise<boolean> {
		const ms: messageSet | $.VarRef<messageSet> | null = this;
		return await (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as messageSet).find(pb) : messageSet.prototype.find.call(ms, pb)) != null
	}

	public async Marshal(pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
		let ms: messageSet | $.VarRef<messageSet> | null = this;
		const ms$: messageSet = ms == null ? $.pointerTarget<messageSet>(ms) : (ms as any).__isVarRef === true ? (ms as any).value : (ms as any).__goValue === undefined ? (ms as any) : $.pointerTarget<messageSet>(ms)
		let __goscriptTuple0: any = await __goscript_table_marshal.Marshal(pb)
		let msg: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		{
			let item: _MessageSet_Item | $.VarRef<_MessageSet_Item> | null = await (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as messageSet).find(pb) : messageSet.prototype.find.call(ms, pb))
			if (item != null) {
				// reuse existing item
				$.pointerValue<_MessageSet_Item>(item).Message = msg
				return null
			}
		}

		let [mti, ok] = $.typeAssertTuple<messageTypeIder | null>(pb, "proto.messageTypeIder")
		if (!ok) {
			return errNoMessageTypeID
		}

		let mtid = $.varRef((__goscriptAwait = (mti !== null && (mti as any).__isVarRef !== true && (mti as any).__goValue === undefined ? (mti as Exclude<messageTypeIder, null>) : $.pointerValue<Exclude<messageTypeIder, null>>(mti)).MessageTypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait));
		;(ms$ as messageSet).Item = $.appendOne((ms$ as messageSet).Item, new _MessageSet_Item({TypeId: mtid, Message: msg}), $.appendZeros.nil)
		return null
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let ms: messageSet | $.VarRef<messageSet> | null = this;
		$.assignStruct($.pointerValue<messageSet>(ms), $.markAsStructValue(new messageSet()))
	}

	public async String(): globalThis.Promise<string> {
		const ms: messageSet | $.VarRef<messageSet> | null = this;
		return __goscript_text.CompactTextString($.interfaceValue<__goscript_lib.Message | null>(ms, "*proto.messageSet", /* @__PURE__ */ $.pointerType("proto.messageSet")))
	}

	public async Unmarshal(pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
		const ms: messageSet | $.VarRef<messageSet> | null = this;
		{
			let item: _MessageSet_Item | $.VarRef<_MessageSet_Item> | null = await (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? ((ms as any) as messageSet).find(pb) : messageSet.prototype.find.call(ms, pb))
			if (item != null) {
				return __goscript_decode.Unmarshal($.pointerValue<_MessageSet_Item>(item).Message, pb)
			}
		}
		{
			let [, ok] = $.typeAssertTuple<messageTypeIder | null>(pb, "proto.messageTypeIder")
			if (!ok) {
				return errNoMessageTypeID
			}
		}
		return null
	}

	public async find(pb: __goscript_lib.Message | null): globalThis.Promise<_MessageSet_Item | $.VarRef<_MessageSet_Item> | null> {
		const ms: messageSet | $.VarRef<messageSet> | null = this;
		let [mti, ok] = $.typeAssertTuple<messageTypeIder | null>(pb, "proto.messageTypeIder")
		if (!ok) {
			return null
		}
		let id = (__goscriptAwait = (mti !== null && (mti as any).__isVarRef !== true && (mti as any).__goValue === undefined ? (mti as Exclude<messageTypeIder, null>) : $.pointerValue<Exclude<messageTypeIder, null>>(mti)).MessageTypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let __goscriptRangeTarget0 = $.pointerValue<messageSet>(ms).Item, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let item = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as _MessageSet_Item | $.VarRef<_MessageSet_Item> | null)
			if ($.pointerValue<number>($.pointerValue<_MessageSet_Item>(item).TypeId) == id) {
				return item
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"proto.messageSet",
		() => new messageSet(),
		() => [$.methodSignature("Has", [["pb", "proto.Message"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Marshal", [["pb", "proto.Message"]], ["error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["pb", "proto.Message"]], ["error"], true), $.methodSignature("find", [["pb", "proto.Message"]], [/* @__PURE__ */ $.pointerType("proto._MessageSet_Item")], true)],
		messageSet,
		() => [/* @__PURE__ */ $.structField("Item", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("proto._MessageSet_Item")), [0], 0, true, { tag: "protobuf:\"group,1,rep\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true)]
	)
}

export let errNoMessageTypeID: $.GoError = errors.New("proto does not have a message type ID")

export function __goscript_set_errNoMessageTypeID(__goscriptValue: $.GoError): void {
	errNoMessageTypeID = __goscriptValue
}

export function skipVarint(buf: $.Slice<number>): $.Slice<number> {
	let i = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(buf); $.uint((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) & 0x80), 8) != 0; i++) {
	}
	return $.goSlice(buf, i + 1, undefined)
}

export async function unmarshalMessageSet(buf: $.Slice<number>, exts: any): globalThis.Promise<$.GoError> {
	let m: globalThis.Map<number, __goscript_extensions.Extension> | null = null! as globalThis.Map<number, __goscript_extensions.Extension> | null
	{
		const __goscriptTypeSwitchValue = exts
		switch (true) {
			case $.typeAssert<__goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")).ok:
				{
					let exts: __goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null = $.typeAssert<__goscript_extensions.XXX_InternalExtensions | $.VarRef<__goscript_extensions.XXX_InternalExtensions> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("proto.XXX_InternalExtensions")).value
					m = (exts !== null && (exts as any).__isVarRef !== true && (exts as any).__goValue === undefined ? ((exts as any) as __goscript_extensions.XXX_InternalExtensions).extensionsWrite() : __goscript_extensions.XXX_InternalExtensions.prototype.extensionsWrite.call(exts))
				}
				break
			case $.typeAssert<globalThis.Map<number, __goscript_extensions.Extension> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")).ok:
				{
					let exts: globalThis.Map<number, __goscript_extensions.Extension> | null = $.typeAssert<globalThis.Map<number, __goscript_extensions.Extension> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "proto.Extension")).value
					m = exts
				}
				break
			default:
				{
					let exts: any = __goscriptTypeSwitchValue
					return errors.New("proto: not an extension map")
				}
				break
		}
	}

	let ms: messageSet | $.VarRef<messageSet> | null = new messageSet()
	{
		let err = await __goscript_decode.Unmarshal(buf, $.interfaceValue<__goscript_lib.Message | null>(ms, "*proto.messageSet", /* @__PURE__ */ $.pointerType("proto.messageSet")))
		if (err != null) {
			return err
		}
	}
	for (let __goscriptRangeTarget1 = $.pointerValue<messageSet>(ms).Item, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let item = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as _MessageSet_Item | $.VarRef<_MessageSet_Item> | null)
		let id = $.pointerValue<number>($.pointerValue<_MessageSet_Item>(item).TypeId)
		let msg: $.Slice<number> = $.pointerValue<_MessageSet_Item>(item).Message

		// Restore wire type and field number varint, plus length varint.
		// Be careful to preserve duplicate items.
		let b: $.Slice<number> = __goscript_encode.EncodeVarint($.uint64Or(($.uint64Shl($.uint64(id), 3n)), 2n))
		{
			let [ext, ok] = $.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(m, id, new __goscript_extensions.Extension(undefined, true))
			if (ok) {
				// Existing data; rip off the tag and length varint
				// so we join the new data correctly.
				// We can assume that ext.enc is set because we are unmarshaling.
				let o: $.Slice<number> = $.goSlice(ext.enc, $.sliceLen(b), undefined)
				let [, n] = __goscript_decode.DecodeVarint(o)
				o = $.goSlice(o, n, undefined)
				msg = $.appendSlice(o, msg, $.byteSliceHint)
			}
		}
		b = $.appendSlice(b, __goscript_encode.EncodeVarint($.uint64($.sliceLen(msg))), $.byteSliceHint)
		b = $.appendSlice(b, msg, $.byteSliceHint)

		$.mapSet(m, id, new __goscript_extensions.Extension({enc: b}, true))
	}
	return null
}

var __goscriptAwait: any
