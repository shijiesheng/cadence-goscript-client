// Generated file based on thrift_util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as thrift from "@goscript/github.com/apache/thrift/lib/go/thrift/index.js"

import * as bytes from "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/reflect/index.js"
import "@goscript/github.com/apache/thrift/lib/go/thrift/index.js"
import "@goscript/bytes/index.js"

export async function TListSerialize(ts: $.Slice<thrift.TStruct | null>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (ts == null) {
		return [null, null]
	}

	let t: thrift.TSerializer | $.VarRef<thrift.TSerializer> | null = await thrift.NewTSerializer()
	let t$: thrift.TSerializer = t == null ? $.pointerTarget<thrift.TSerializer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<thrift.TSerializer>(t)

	// NOTE: we don't write any markers as thrift by design being a streaming protocol doesn't
	// recommend writing length.

	// TODO populate context from argument
	let ctx = context.Background()
	for (let __goscriptRangeTarget0 = ts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as thrift.TStruct | null)
		{
			let e = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<thrift.TStruct, null>) : $.pointerValue<Exclude<thrift.TStruct, null>>(v)).Write(ctx, (t$ as thrift.TSerializer).Protocol), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (e != null) {
				return [null, await thrift.PrependError("error writing TStruct: ", e)]
			}
		}
	}

	return [$.pointerValue<bytes.Buffer>($.pointerValue<thrift.TMemoryBuffer>((t$ as thrift.TSerializer).Transport).Buffer).Bytes(), (__goscriptAwait = $.pointerValue<Exclude<thrift.TProtocol, null>>((t$ as thrift.TSerializer).Protocol).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
}

export async function TListDeserialize(ts: $.Slice<thrift.TStruct | null>, b: $.Slice<number>): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	let t: thrift.TDeserializer | $.VarRef<thrift.TDeserializer> | null = await thrift.NewTDeserializer()
	let t$: thrift.TDeserializer = t == null ? $.pointerTarget<thrift.TDeserializer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<thrift.TDeserializer>(t)
	err = null
	{
		let __goscriptTuple0: any = $.pointerValue<bytes.Buffer>($.pointerValue<thrift.TMemoryBuffer>((t$ as thrift.TDeserializer).Transport).Buffer).Write(b)
		err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
	}

	// TODO populate context from argument
	let ctx = context.Background()
	for (let __goscriptSliceWindow0 = $.sliceRange(ts), i = 0; i < __goscriptSliceWindow0.length; i++) {
		{
			let e = (__goscriptAwait = $.pointerValue<Exclude<thrift.TStruct, null>>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as thrift.TStruct | null)).Read(ctx, (t$ as thrift.TDeserializer).Protocol), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (e != null) {
				err = await thrift.PrependError("error reading TStruct: ", e)
				return err
			}
		}
	}

	return err
}

export async function IsUseThriftEncoding(objs: $.Slice<any>): globalThis.Promise<boolean> {
	if ($.sliceLen(objs) == 0) {
		return false
	}
	// NOTE: our criteria to use which encoder is simple if all the types are serializable using thrift then we use
	// thrift encoder. For everything else we default to gob.
	for (let __goscriptRangeTarget1 = objs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let obj = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as any)
		if (!await IsThriftType(obj)) {
			return false
		}
	}
	return true
}

export async function IsUseThriftDecoding(objs: $.Slice<any>): globalThis.Promise<boolean> {
	if ($.sliceLen(objs) == 0) {
		return false
	}
	// NOTE: our criteria to use which encoder is simple if all the types are de-serializable using thrift then we use
	// thrift decoder. For everything else we default to gob.
	for (let __goscriptRangeTarget2 = objs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let obj = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as any)
		let rVal = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(obj)))
		if (($.markAsStructValue($.cloneStructValue(rVal)).Kind() != 22) || !await IsThriftType($.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rVal))))).Interface())) {
			return false
		}
	}
	return true
}

export async function IsThriftType(v: any): globalThis.Promise<boolean> {
	// NOTE: Thrift serialization works only if the values are pointers.
	// Thrift has a validation that it meets thift.TStruct which has Read/Write pointer receivers.

	if ($.markAsStructValue($.cloneStructValue(reflect.ValueOf(v))).Kind() != 22) {
		return false
	}
	return $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(v)).Implements($.pointerValueOrNil(tStructType)!)
}

export let tStructType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*thrift.TStruct", /* @__PURE__ */ $.pointerType("thrift.TStruct")))).Elem()

export function __goscript_set_tStructType(__goscriptValue: reflect.Type | null): void {
	tStructType = __goscriptValue
}

var __goscriptAwait: any
