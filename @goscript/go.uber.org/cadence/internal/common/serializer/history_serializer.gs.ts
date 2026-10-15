// Generated file based on history_serializer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/serializer", ["serializer.ThriftObject"])

export type ThriftObject = {
	FromWire(w: wire.Value): $.GoError | globalThis.Promise<$.GoError>
	ToWire(): [wire.Value, $.GoError]
}

$.registerInterfaceType(
	"serializer.ThriftObject",
	null,
	[$.methodSignature("FromWire", [["w", "wire.Value"]], ["error"]), $.methodSignature("ToWire", [], ["wire.Value", "error"])]
);

export const preambleVersion0: number = 89

export let MissingBinaryEncodingVersion: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null = new shared.BadRequestError({Message: "Missing binary encoding version."})

export function __goscript_set_MissingBinaryEncodingVersion(__goscriptValue: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null): void {
	MissingBinaryEncodingVersion = __goscriptValue
}

export let InvalidBinaryEncodingVersion: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null = new shared.BadRequestError({Message: "Invalid binary encoding version."})

export function __goscript_set_InvalidBinaryEncodingVersion(__goscriptValue: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null): void {
	InvalidBinaryEncodingVersion = __goscriptValue
}

export let MsgPayloadNotThriftEncoded: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null = new shared.BadRequestError({Message: "Message payload is not thrift encoded."})

export function __goscript_set_MsgPayloadNotThriftEncoded(__goscriptValue: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null): void {
	MsgPayloadNotThriftEncoded = __goscriptValue
}

export async function Decode(binary: $.Slice<number>, val: ThriftObject | null): globalThis.Promise<$.GoError> {
	if ($.sliceLen(binary) < 1) {
		return $.interfaceValue<$.GoError>(MissingBinaryEncodingVersion, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))
	}

	let version = $.arrayIndex(binary!, 0)
	if (version != 89) {
		return $.interfaceValue<$.GoError>(InvalidBinaryEncodingVersion, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))
	}

	let reader: bytes.Reader | $.VarRef<bytes.Reader> | null = bytes.NewReader($.goSlice(binary, 1, undefined))
	let [wireVal, err] = await $.pointerValue<Exclude<protocol.Protocol, null>>(protocol.Binary).Decode($.interfaceValue<io.ReaderAt | null>(reader, "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")), 12)
	if (err != null) {
		return err
	}

	return (val !== null && (val as any).__isVarRef !== true && (val as any).__goValue === undefined ? (val as Exclude<ThriftObject, null>) : $.pointerValue<Exclude<ThriftObject, null>>(val)).FromWire((wireVal).clone())
}

export async function Encode(obj: ThriftObject | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (obj == null) {
		return [null, $.interfaceValue<$.GoError>(MsgPayloadNotThriftEncoded, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
	}
	let writer: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	// use the first byte to version the serialization
	let err: $.GoError = writer.value.WriteByte(89)
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple0: any = await (obj !== null && (obj as any).__isVarRef !== true && (obj as any).__goValue === undefined ? (obj as Exclude<ThriftObject, null>) : $.pointerValue<Exclude<ThriftObject, null>>(obj)).ToWire()
	let val = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	err = (__goscriptAwait = $.pointerValue<Exclude<protocol.Protocol, null>>(protocol.Binary).Encode((val).clone(), $.interfaceValue<io.Writer | null>(writer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (err != null) {
		return [null, err]
	}
	return [writer.value.Bytes(), null]
}

export async function SerializeBatchEvents(events: $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>, encodingType: shared.EncodingType): globalThis.Promise<[shared.DataBlob | $.VarRef<shared.DataBlob> | null, $.GoError]> {
	return serialize($.interfaceValue(events, "[]*shared.HistoryEvent", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent"))), encodingType)
}

export async function DeserializeBatchEvents(data: shared.DataBlob | $.VarRef<shared.DataBlob> | null): globalThis.Promise<[$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>, $.GoError]> {
	if (data == null) {
		return [null, null]
	}
	let events: $.VarRef<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>> = $.varRef(null! as $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>)
	if ($.sliceLen($.pointerValue<shared.DataBlob>(data).Data) == 0) {
		return [events.value, null]
	}
	let err = await deserialize(data, $.interfaceValue(events, "*[]*shared.HistoryEvent", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")))))
	return [events.value, err]
}

export async function serialize(input: any, encodingType: shared.EncodingType): globalThis.Promise<[shared.DataBlob | $.VarRef<shared.DataBlob> | null, $.GoError]> {
	if (input == null) {
		return [null, null]
	}

	let data: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError

	switch (encodingType) {
		case shared.EncodingTypeThriftRW:
		{
			let __goscriptTuple1: any = await thriftrwEncode(input)
			data = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			break
		}
		case shared.EncodingTypeJSON:
		{
			encodingType = 1
			let __goscriptTuple2: any = await json.Marshal(input)
			data = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			break
		}
		default:
		{
			return [null, fmt.Errorf("unknown or unsupported encoding type %v", $.namedValueInterfaceValue<any>(encodingType, "shared.EncodingType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
			break
		}
	}

	if (err != null) {
		return [null, fmt.Errorf("cadence serialization error: %v", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
	}
	return [NewDataBlob(data, encodingType), null]
}

export async function thriftrwEncode(input: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	{
		const __goscriptTypeSwitchValue = input
		switch (true) {
			case $.typeAssert<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent"))).ok:
				{
					return Encode($.interfaceValue<ThriftObject | null>(new shared.History({Events: $.mustTypeAssert<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>>(input, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")))}), "*shared.History", /* @__PURE__ */ $.pointerType("shared.History")))
				}
				break
			case $.typeAssert<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.HistoryEvent")).ok:
				{
					return Encode($.interfaceValue<ThriftObject | null>(((input as any)?.__goType === "*shared.HistoryEvent" && (input as any).__goValue === undefined && (input as any).__isTypedNil !== true ? ((input as any) as shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null) : $.mustTypeAssert<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>(input, /* @__PURE__ */ $.pointerType("shared.HistoryEvent"))), "*shared.HistoryEvent", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")))
				}
				break
			case $.typeAssert<shared.Memo | $.VarRef<shared.Memo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.Memo")).ok:
				{
					return Encode($.interfaceValue<ThriftObject | null>(((input as any)?.__goType === "*shared.Memo" && (input as any).__goValue === undefined && (input as any).__isTypedNil !== true ? ((input as any) as shared.Memo | $.VarRef<shared.Memo> | null) : $.mustTypeAssert<shared.Memo | $.VarRef<shared.Memo> | null>(input, /* @__PURE__ */ $.pointerType("shared.Memo"))), "*shared.Memo", /* @__PURE__ */ $.pointerType("shared.Memo")))
				}
				break
			case $.typeAssert<shared.ResetPoints | $.VarRef<shared.ResetPoints> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ResetPoints")).ok:
				{
					return Encode($.interfaceValue<ThriftObject | null>(((input as any)?.__goType === "*shared.ResetPoints" && (input as any).__goValue === undefined && (input as any).__isTypedNil !== true ? ((input as any) as shared.ResetPoints | $.VarRef<shared.ResetPoints> | null) : $.mustTypeAssert<shared.ResetPoints | $.VarRef<shared.ResetPoints> | null>(input, /* @__PURE__ */ $.pointerType("shared.ResetPoints"))), "*shared.ResetPoints", /* @__PURE__ */ $.pointerType("shared.ResetPoints")))
				}
				break
			case $.typeAssert<shared.BadBinaries | $.VarRef<shared.BadBinaries> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadBinaries")).ok:
				{
					return Encode($.interfaceValue<ThriftObject | null>(((input as any)?.__goType === "*shared.BadBinaries" && (input as any).__goValue === undefined && (input as any).__isTypedNil !== true ? ((input as any) as shared.BadBinaries | $.VarRef<shared.BadBinaries> | null) : $.mustTypeAssert<shared.BadBinaries | $.VarRef<shared.BadBinaries> | null>(input, /* @__PURE__ */ $.pointerType("shared.BadBinaries"))), "*shared.BadBinaries", /* @__PURE__ */ $.pointerType("shared.BadBinaries")))
				}
				break
			case $.typeAssert<shared.VersionHistories | $.VarRef<shared.VersionHistories> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.VersionHistories")).ok:
				{
					return Encode($.interfaceValue<ThriftObject | null>(((input as any)?.__goType === "*shared.VersionHistories" && (input as any).__goValue === undefined && (input as any).__isTypedNil !== true ? ((input as any) as shared.VersionHistories | $.VarRef<shared.VersionHistories> | null) : $.mustTypeAssert<shared.VersionHistories | $.VarRef<shared.VersionHistories> | null>(input, /* @__PURE__ */ $.pointerType("shared.VersionHistories"))), "*shared.VersionHistories", /* @__PURE__ */ $.pointerType("shared.VersionHistories")))
				}
				break
			default:
				{
					return [null, null]
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function deserialize(data: shared.DataBlob | $.VarRef<shared.DataBlob> | null, target: any): globalThis.Promise<$.GoError> {
	const data$: shared.DataBlob = data == null ? $.pointerTarget<shared.DataBlob>(data) : (data as any).__isVarRef === true ? (data as any).value : (data as any).__goValue === undefined ? (data as any) : $.pointerTarget<shared.DataBlob>(data)
	if (data == null) {
		return null
	}
	if ($.sliceLen((data$ as shared.DataBlob).Data) == 0) {
		return errors.New("DeserializeEvent empty data")
	}
	let err: $.GoError = null! as $.GoError

	switch ($.pointerValue<shared.EncodingType>(((data$ as shared.DataBlob).EncodingType))) {
		case shared.EncodingTypeThriftRW:
		{
			err = await thriftrwDecode((data$ as shared.DataBlob).Data, target)
			break
		}
		case shared.EncodingTypeJSON:
		{
			err = await json.Unmarshal((data$ as shared.DataBlob).Data, target)
			break
		}
	}

	if (err != null) {
		return fmt.Errorf("DeserializeBatchEvents encoding: \"%v\", error: %v", $.namedValueInterfaceValue<any>((data$ as shared.DataBlob).EncodingType, "*shared.EncodingType", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return null
}

export async function thriftrwDecode(data: $.Slice<number>, target: any): globalThis.Promise<$.GoError> {
	{
		const __goscriptTypeSwitchValue = target
		switch (true) {
			case $.typeAssert<$.VarRef<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")))).ok:
				{
					let target: $.VarRef<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>> | null = $.typeAssert<$.VarRef<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")))).value
					let history = $.varRef(new shared.History({Events: $.pointerValue<$.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>>(target)}, true))
					{
						let err = await Decode(data, $.interfaceValue<ThriftObject | null>(history, "*shared.History", /* @__PURE__ */ $.pointerType("shared.History")))
						if (err != null) {
							return err
						}
					}
					target!.value = history.value.Events
					return null
				}
				break
			case $.typeAssert<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.HistoryEvent")).ok:
				{
					let target: shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null = $.typeAssert<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.HistoryEvent")).value
					return Decode(data, $.interfaceValue<ThriftObject | null>(target, "*shared.HistoryEvent", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")))
				}
				break
			case $.typeAssert<shared.Memo | $.VarRef<shared.Memo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.Memo")).ok:
				{
					let target: shared.Memo | $.VarRef<shared.Memo> | null = $.typeAssert<shared.Memo | $.VarRef<shared.Memo> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.Memo")).value
					return Decode(data, $.interfaceValue<ThriftObject | null>(target, "*shared.Memo", /* @__PURE__ */ $.pointerType("shared.Memo")))
				}
				break
			case $.typeAssert<shared.ResetPoints | $.VarRef<shared.ResetPoints> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ResetPoints")).ok:
				{
					let target: shared.ResetPoints | $.VarRef<shared.ResetPoints> | null = $.typeAssert<shared.ResetPoints | $.VarRef<shared.ResetPoints> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ResetPoints")).value
					return Decode(data, $.interfaceValue<ThriftObject | null>(target, "*shared.ResetPoints", /* @__PURE__ */ $.pointerType("shared.ResetPoints")))
				}
				break
			case $.typeAssert<shared.BadBinaries | $.VarRef<shared.BadBinaries> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadBinaries")).ok:
				{
					let target: shared.BadBinaries | $.VarRef<shared.BadBinaries> | null = $.typeAssert<shared.BadBinaries | $.VarRef<shared.BadBinaries> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadBinaries")).value
					return Decode(data, $.interfaceValue<ThriftObject | null>(target, "*shared.BadBinaries", /* @__PURE__ */ $.pointerType("shared.BadBinaries")))
				}
				break
			case $.typeAssert<shared.VersionHistories | $.VarRef<shared.VersionHistories> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.VersionHistories")).ok:
				{
					let target: shared.VersionHistories | $.VarRef<shared.VersionHistories> | null = $.typeAssert<shared.VersionHistories | $.VarRef<shared.VersionHistories> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.VersionHistories")).value
					return Decode(data, $.interfaceValue<ThriftObject | null>(target, "*shared.VersionHistories", /* @__PURE__ */ $.pointerType("shared.VersionHistories")))
				}
				break
			default:
				{
					let target: any = __goscriptTypeSwitchValue
					return null
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewDataBlob(data: $.Slice<number>, __goscriptParam0: shared.EncodingType): shared.DataBlob | $.VarRef<shared.DataBlob> | null {
	let encodingType: $.VarRef<shared.EncodingType> = $.varRef(__goscriptParam0)
	if ((data == null) || ($.sliceLen(data) == 0)) {
		return null
	}

	return new shared.DataBlob({Data: data, EncodingType: encodingType})
}

export async function DeserializeBlobDataToHistoryEvents(dataBlobs: $.Slice<shared.DataBlob | $.VarRef<shared.DataBlob> | null>, filterType: shared.HistoryEventFilterType): globalThis.Promise<[shared.History | $.VarRef<shared.History> | null, $.GoError]> {

	let historyEvents: $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null> = null! as $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>

	for (let __goscriptRangeTarget0 = dataBlobs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let batch = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as shared.DataBlob | $.VarRef<shared.DataBlob> | null)
		let __goscriptTuple3: any = await DeserializeBatchEvents(batch)
		let events: $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		if ($.sliceLen(events) == 0) {
			return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("corrupted history event batch, empty events"); return new shared.InternalServiceError({Message: __goscriptLiteralField0}) })()), "*shared.InternalServiceError", /* @__PURE__ */ $.pointerType("shared.InternalServiceError"))]
		}

		historyEvents = $.appendSlice(historyEvents, events, $.appendZeros.nil)
	}

	if (filterType == 1) {
		historyEvents = $.arrayToSlice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>([$.arrayIndex(historyEvents!, $.sliceLen(historyEvents) - 1)])
	}
	return [new shared.History({Events: historyEvents}), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (shared.EncodingType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (shared.EncodingType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (shared.EncodingType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (shared.EncodingType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (shared.EncodingType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (shared.EncodingType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (shared.EncodingType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (shared.EncodingType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "shared.EncodingType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.EncodingType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.EncodingType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Decode: (receiver: any, ...args: any[]) => (shared.EncodingType_Decode as any)(receiver, ...$.stripGenericTypeArgs(args)), Encode: (receiver: any, ...args: any[]) => (shared.EncodingType_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (shared.EncodingType_Equals as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FromWire: (receiver: any, ...args: any[]) => (shared.EncodingType_FromWire as any)(receiver, ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (shared.EncodingType_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (shared.EncodingType_MarshalLogObject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (shared.EncodingType_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (shared.EncodingType_Ptr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (shared.EncodingType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (shared.EncodingType_ToWire as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (shared.EncodingType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (shared.EncodingType_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.EncodingType")))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"]), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.EncodingType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.EncodingType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"]), $.methodSignature("UnmarshalJSON", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])])
}

var __goscriptAwait: any
