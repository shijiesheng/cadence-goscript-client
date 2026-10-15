// Generated file based on writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_stream_envelope from "./stream_envelope.gs.ts"

import * as __goscript_stream_writer from "./stream_writer.gs.ts"

import * as __goscript_string_post_go120 from "./string_post_go120.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./envelope.gs.ts"
import "./stream_envelope.gs.ts"
import "./stream_writer.gs.ts"
import "./string_post_go120.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.Writer"])

export class Writer {
	public get sw(): __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null {
		return this._fields.sw
	}

	public set sw(value: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null) {
		this._fields.sw = value
	}

	// NOTE:
	// This is a hack to avoid memory allocation in closures. Passing the
	// bound WriteValue or realWriteMapItem methods into a function results in
	// a memory allocation because the system doesn't know we're going to
	// reuse the closure. So we create that bound reference in advance when
	// the writer is created.
	public get writeValue(): ((_p0: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.writeValue
	}

	public set writeValue(value: ((_p0: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.writeValue = value
	}

	public get writeMapItem(): ((_p0: wire.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.writeMapItem
	}

	public set writeMapItem(value: ((_p0: wire.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.writeMapItem = value
	}

	public _fields: {
		sw: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null
		writeValue: ((_p0: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null
		writeMapItem: ((_p0: wire.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null
	}

	constructor(init?: Partial<{sw?: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null, writeValue?: ((_p0: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null, writeMapItem?: ((_p0: wire.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			sw: init?.sw ?? (null! as __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null),
			writeValue: init?.writeValue ?? (null! as ((_p0: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null),
			writeMapItem: init?.writeMapItem ?? (null! as ((_p0: wire.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Writer {
		return new Writer(this, true)
	}

	public __goscriptAssign(source: Writer): void {
		const target = this._fields
		const values = source._fields
		target.sw = values.sw
		target.writeValue = values.writeValue
		target.writeMapItem = values.writeMapItem
	}

	public async WriteEnveloped(e: wire.Envelope): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		{
			let err = await __goscript_stream_writer.StreamWriter.prototype.WriteEnvelopeBegin.call((bw$ as Writer).sw, new stream.EnvelopeHeader({Name: e.Name, Type: e.Type, SeqID: e.SeqID}, true))
			if (err != null) {
				return err
			}
		}

		{
			let err = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).WriteValue((e.Value).clone()) : Writer.prototype.WriteValue.call(bw, (e.Value).clone()))
			if (err != null) {
				return err
			}
		}

		return __goscript_stream_writer.StreamWriter.prototype.WriteEnvelopeEnd.call((bw$ as Writer).sw)
	}

	public async WriteLegacyEnveloped(e: wire.Envelope): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		{
			let err = await __goscript_stream_writer.StreamWriter.prototype.WriteLegacyEnvelopeBegin.call((bw$ as Writer).sw, new stream.EnvelopeHeader({Name: e.Name, Type: e.Type, SeqID: e.SeqID}, true))
			if (err != null) {
				return err
			}
		}
		// ReturnWriter returns a previously borrowed Writer back to the system.
		{
			let err = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).WriteValue((e.Value).clone()) : Writer.prototype.WriteValue.call(bw, (e.Value).clone()))
			if (err != null) {
				return err
			}
		}

		return __goscript_stream_writer.StreamWriter.prototype.WriteLegacyEnvelopeEnd.call((bw$ as Writer).sw)
	}

	public async WriteValue(__goscriptParam0: wire.Value): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		let v: $.VarRef<wire.Value> = $.varRef(__goscriptParam0)
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		switch (v.value.Type()) {
			case wire.TBool:
			{
				return __goscript_stream_writer.StreamWriter.prototype.WriteBool.call((bw$ as Writer).sw, v.value.GetBool())
				break
			}
			case wire.TI8:
			{
				return __goscript_stream_writer.StreamWriter.prototype.WriteInt8.call((bw$ as Writer).sw, v.value.GetI8())
				break
			}
			case wire.TDouble:
			{
				return __goscript_stream_writer.StreamWriter.prototype.WriteDouble.call((bw$ as Writer).sw, v.value.GetDouble())
				break
			}
			case wire.TI16:
			{
				return __goscript_stream_writer.StreamWriter.prototype.WriteInt16.call((bw$ as Writer).sw, v.value.GetI16())
				break
			}
			case wire.TI32:
			{
				return __goscript_stream_writer.StreamWriter.prototype.WriteInt32.call((bw$ as Writer).sw, v.value.GetI32())
				break
			}
			case wire.TI64:
			{
				return __goscript_stream_writer.StreamWriter.prototype.WriteInt64.call((bw$ as Writer).sw, v.value.GetI64())
				break
			}
			case wire.TBinary:
			{
				return __goscript_stream_writer.StreamWriter.prototype.WriteBinary.call((bw$ as Writer).sw, v.value.GetBinary())
				break
			}
			case wire.TStruct:
			{
				return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).writeStruct(v.value.GetStruct()) : Writer.prototype.writeStruct.call(bw, v.value.GetStruct()))
				break
			}
			case wire.TMap:
			{
				return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).writeMap(v.value.GetMap()) : Writer.prototype.writeMap.call(bw, v.value.GetMap()))
				break
			}
			case wire.TSet:
			{
				return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).writeSet(v.value.GetSet()) : Writer.prototype.writeSet.call(bw, v.value.GetSet()))
				break
			}
			case wire.TList:
			{
				return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).writeList(v.value.GetList()) : Writer.prototype.writeList.call(bw, v.value.GetList()))
				break
			}
			default:
			{
				return fmt.Errorf("unknown ttype %v", $.namedValueInterfaceValue<any>(v.value.Type(), "wire.Type", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async realWriteMapItem(item: wire.MapItem): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		{
			let err = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).WriteValue((item.Key).clone()) : Writer.prototype.WriteValue.call(bw, (item.Key).clone()))
			if (err != null) {
				return err
			}
		}
		return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).WriteValue((item.Value).clone()) : Writer.prototype.WriteValue.call(bw, (item.Value).clone()))
	}

	public async writeField(f: wire.Field): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		let fh = (() => { const __goscriptLiteralField0 = f.Value.Type(); return new stream.FieldHeader({ID: f.ID, Type: __goscriptLiteralField0}, true) })()
		{
			let err = await __goscript_stream_writer.StreamWriter.prototype.WriteFieldBegin.call((bw$ as Writer).sw, fh)
			if (err != null) {
				return err
			}
		}

		// value
		{
			let err = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).WriteValue((f.Value).clone()) : Writer.prototype.WriteValue.call(bw, (f.Value).clone()))
			if (err != null) {
				// TODO(abg): Figure out better error handling story. We need access
				// to the underlying error object if it's a network error.
				return fmt.Errorf("failed to write field %d (%v): %s", $.basicInterfaceValue(f.ID, "int16"), $.namedValueInterfaceValue<any>(f.Value.Type(), "wire.Type", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any))
			}
		}

		return __goscript_stream_writer.StreamWriter.prototype.WriteFieldEnd.call((bw$ as Writer).sw)
	}

	public async writeList(l: wire.ValueList | null): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		let lh = (await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(l)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(l)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new stream.ListHeader({Type: __goscriptLiteralField1, Length: __goscriptLiteralField2}, true) })())
		{
			let err = await __goscript_stream_writer.StreamWriter.prototype.WriteListBegin.call((bw$ as Writer).sw, lh)
			if (err != null) {
				return err
			}
		}

		{
			let err = (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(l)).ForEach((bw$ as Writer).writeValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		return __goscript_stream_writer.StreamWriter.prototype.WriteListEnd.call((bw$ as Writer).sw)
	}

	public async writeMap(m: wire.MapItemList | null): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		let mh = (await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<wire.MapItemList, null>) : $.pointerValue<Exclude<wire.MapItemList, null>>(m)).KeyType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField4 = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<wire.MapItemList, null>) : $.pointerValue<Exclude<wire.MapItemList, null>>(m)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField5 = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<wire.MapItemList, null>) : $.pointerValue<Exclude<wire.MapItemList, null>>(m)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new stream.MapHeader({KeyType: __goscriptLiteralField3, ValueType: __goscriptLiteralField4, Length: __goscriptLiteralField5}, true) })())
		{
			let err = await __goscript_stream_writer.StreamWriter.prototype.WriteMapBegin.call((bw$ as Writer).sw, mh)
			if (err != null) {
				return err
			}
		}

		{
			let err = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<wire.MapItemList, null>) : $.pointerValue<Exclude<wire.MapItemList, null>>(m)).ForEach((bw$ as Writer).writeMapItem), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		return __goscript_stream_writer.StreamWriter.prototype.WriteMapEnd.call((bw$ as Writer).sw)
	}

	public async writeSet(s: wire.ValueList | null): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		let sh = (await (async () => { const __goscriptLiteralField6 = (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(s)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField7 = (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(s)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new stream.SetHeader({Type: __goscriptLiteralField6, Length: __goscriptLiteralField7}, true) })())
		{
			let err = await __goscript_stream_writer.StreamWriter.prototype.WriteSetBegin.call((bw$ as Writer).sw, sh)
			if (err != null) {
				return err
			}
		}

		{
			let err = (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(s)).ForEach((bw$ as Writer).writeValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		return __goscript_stream_writer.StreamWriter.prototype.WriteSetEnd.call((bw$ as Writer).sw)
	}

	public async writeStruct(s: wire.Struct): globalThis.Promise<$.GoError> {
		const bw: Writer | $.VarRef<Writer> | null = this;
		const bw$: Writer = bw == null ? $.pointerTarget<Writer>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<Writer>(bw)
		{
			let err = __goscript_stream_writer.StreamWriter.prototype.WriteStructBegin.call((bw$ as Writer).sw)
			if (err != null) {
				return err
			}
		}

		for (let __goscriptRangeTarget0 = s.Fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as wire.Field)).clone()
			{
				let err = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Writer).writeField((f).clone()) : Writer.prototype.writeField.call(bw, (f).clone()))
				if (err != null) {
					return err
				}
			}
		}
		return __goscript_stream_writer.StreamWriter.prototype.WriteStructEnd.call((bw$ as Writer).sw)
	}

	static __typeInfo = $.registerStructType(
		"binary.Writer",
		() => new Writer(),
		() => [$.methodSignature("WriteEnveloped", [["e", "wire.Envelope"]], ["error"], true), $.methodSignature("WriteLegacyEnveloped", [["e", "wire.Envelope"]], ["error"], true), $.methodSignature("WriteValue", [["v", "wire.Value"]], ["error"], true), $.methodSignature("realWriteMapItem", [["item", "wire.MapItem"]], ["error"], true), $.methodSignature("writeField", [["f", "wire.Field"]], ["error"], true), $.methodSignature("writeList", [["l", "wire.ValueList"]], ["error"], true), $.methodSignature("writeMap", [["m", "wire.MapItemList"]], ["error"], true), $.methodSignature("writeSet", [["s", "wire.ValueList"]], ["error"], true), $.methodSignature("writeStruct", [["s", "wire.Struct"]], ["error"], true)],
		Writer,
		() => [/* @__PURE__ */ $.structField("sw", /* @__PURE__ */ $.pointerType("binary.StreamWriter"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("writeValue", ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("writeMapItem", ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export let writerPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let writer: Writer | $.VarRef<Writer> | null = new Writer()
	$.pointerValue<Writer>(writer).writeValue = $.functionValue(((__receiver) => (v: wire.Value) => __receiver.WriteValue(v))($.pointerValue<Writer>(writer)), ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/binary.(*Writer).WriteValue-fm")
	$.pointerValue<Writer>(writer).writeMapItem = $.functionValue(((__receiver) => (item: wire.MapItem) => __receiver.realWriteMapItem(item))($.pointerValue<Writer>(writer)), ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/binary.(*Writer).realWriteMapItem-fm")
	return $.interfaceValue(writer, "*binary.Writer", /* @__PURE__ */ $.pointerType("binary.Writer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_writerPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(writerPool.value, __goscriptValue)
}

export async function BorrowWriter(w: io.Writer | null): globalThis.Promise<Writer | $.VarRef<Writer> | null> {
	let streamWriter: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null = await __goscript_stream_writer.NewStreamWriter(w)
	let writer: Writer | $.VarRef<Writer> | null = $.mustTypeAssert<Writer | $.VarRef<Writer> | null>(await writerPool.value.Get(), /* @__PURE__ */ $.pointerType("binary.Writer"))
	$.pointerValue<Writer>(writer).sw = streamWriter
	return writer
}

export function ReturnWriter(w: Writer | $.VarRef<Writer> | null): void {
	const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
	let sw: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null = (w$ as Writer).sw;
	;(w$ as Writer).sw = null
	__goscript_stream_writer.returnStreamWriter(sw)
	writerPool.value.Put($.interfaceValue(w, "*binary.Writer", /* @__PURE__ */ $.pointerType("binary.Writer")))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (wire.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "wire.Type"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
