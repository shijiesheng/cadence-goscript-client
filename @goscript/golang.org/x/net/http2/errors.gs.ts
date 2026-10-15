// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as log from "@goscript/log/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as httpguts from "@goscript/golang.org/x/net/http/httpguts/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"

import * as __goscript_write from "./write.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/bytes/index.js"
import "@goscript/log/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/golang.org/x/net/http/httpguts/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/io/index.js"
import "./frame.gs.ts"
import "./http2.gs.ts"
import "./write.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.ErrCode", "http2.ConnectionError", "http2.StreamError", "http2.goAwayFlowError", "http2.connError", "http2.pseudoHeaderError", "http2.duplicatePseudoHeaderError", "http2.headerFieldNameError", "http2.headerFieldValueError"])

export type ErrCode = number

$.registerNamedValueType(
	"http2.ErrCode",
	{String: (receiver: any, ...args: any[]) => (ErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), stringToken: (receiver: any, ...args: any[]) => (ErrCode_stringToken as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("stringToken", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.ErrCode",
	{String: (receiver: any, ...args: any[]) => (ErrCode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), stringToken: (receiver: any, ...args: any[]) => (ErrCode_stringToken as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("stringToken", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ConnectionError = number

$.registerNamedValueType(
	"http2.ConnectionError",
	{Error: (receiver: any, ...args: any[]) => (ConnectionError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.ConnectionError",
	{Error: (receiver: any, ...args: any[]) => (ConnectionError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type pseudoHeaderError = string

$.registerNamedValueType(
	"http2.pseudoHeaderError",
	{Error: (receiver: any, ...args: any[]) => (pseudoHeaderError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.pseudoHeaderError",
	{Error: (receiver: any, ...args: any[]) => (pseudoHeaderError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type duplicatePseudoHeaderError = string

$.registerNamedValueType(
	"http2.duplicatePseudoHeaderError",
	{Error: (receiver: any, ...args: any[]) => (duplicatePseudoHeaderError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.duplicatePseudoHeaderError",
	{Error: (receiver: any, ...args: any[]) => (duplicatePseudoHeaderError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type headerFieldNameError = string

$.registerNamedValueType(
	"http2.headerFieldNameError",
	{Error: (receiver: any, ...args: any[]) => (headerFieldNameError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.headerFieldNameError",
	{Error: (receiver: any, ...args: any[]) => (headerFieldNameError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type headerFieldValueError = string

$.registerNamedValueType(
	"http2.headerFieldValueError",
	{Error: (receiver: any, ...args: any[]) => (headerFieldValueError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.headerFieldValueError",
	{Error: (receiver: any, ...args: any[]) => (headerFieldValueError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class StreamError {
	public get StreamID(): number {
		return this._fields.StreamID
	}

	public set StreamID(value: number) {
		this._fields.StreamID = value
	}

	public get Code(): ErrCode {
		return this._fields.Code
	}

	public set Code(value: ErrCode) {
		this._fields.Code = value
	}

	public get Cause(): $.GoError {
		return this._fields.Cause
	}

	public set Cause(value: $.GoError) {
		this._fields.Cause = value
	}

	public _fields: {
		StreamID: number
		Code: ErrCode
		Cause: $.GoError
	}

	constructor(init?: Partial<{StreamID?: number, Code?: ErrCode, Cause?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamID: init?.StreamID ?? (0 as number),
			Code: init?.Code ?? (0 as ErrCode),
			Cause: init?.Cause ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamError {
		return new StreamError(this, true)
	}

	public __goscriptAssign(source: StreamError): void {
		const target = this._fields
		const values = source._fields
		target.StreamID = values.StreamID
		target.Code = values.Code
		target.Cause = $.assignFieldValue(target.Cause, values.Cause, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		if (e.Cause != null) {
			return fmt.Sprintf("stream error: stream ID %d; %v; %v", $.basicInterfaceValue(e.StreamID, "uint32"), $.namedValueInterfaceValue<any>(e.Code, "http2.ErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (e.Cause as any))
		}
		return fmt.Sprintf("stream error: stream ID %d; %v", $.basicInterfaceValue(e.StreamID, "uint32"), $.namedValueInterfaceValue<any>(e.Code, "http2.ErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public staysWithinBuffer(max: number): boolean {
		const se = this;
		return 13 <= max
	}

	public async writeFrame(ctx: __goscript_write.writeContext | null): globalThis.Promise<$.GoError> {
		const se = this;
		return __goscript_frame.Framer.prototype.WriteRSTStream.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_write.writeContext, null>) : $.pointerValue<Exclude<__goscript_write.writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), se.StreamID, se.Code)
	}

	static __typeInfo = $.registerStructType(
		"http2.StreamError",
		() => new StreamError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])],
		StreamError,
		() => [/* @__PURE__ */ $.structField("StreamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [1], 4, true), /* @__PURE__ */ $.structField("Cause", "error", [2], 8, true)]
	)
}

export class goAwayFlowError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): goAwayFlowError {
		return new goAwayFlowError(this, true)
	}

	public __goscriptAssign(source: goAwayFlowError): void {
	}

	public Error(): string {
		return "connection exceeded flow control window size"
	}

	static __typeInfo = $.registerStructType(
		"http2.goAwayFlowError",
		() => new goAwayFlowError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		goAwayFlowError,
		() => []
	)
}

export class connError {
	public get Code(): ErrCode {
		return this._fields.Code
	}

	public set Code(value: ErrCode) {
		this._fields.Code = value
	}

	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	public _fields: {
		Code: ErrCode
		Reason: string
	}

	constructor(init?: Partial<{Code?: ErrCode, Reason?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Code: init?.Code ?? (0 as ErrCode),
			Reason: init?.Reason ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): connError {
		return new connError(this, true)
	}

	public __goscriptAssign(source: connError): void {
		const target = this._fields
		const values = source._fields
		target.Code = values.Code
		target.Reason = values.Reason
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("http2: connection error: %v: %v", $.namedValueInterfaceValue<any>(e.Code, "http2.ErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), e.Reason)
	}

	static __typeInfo = $.registerStructType(
		"http2.connError",
		() => new connError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		connError,
		() => [/* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [0], 0, true), /* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("string"), [1], 8, true)]
	)
}

export const ErrCodeNo: ErrCode = 0

export const ErrCodeProtocol: ErrCode = 1

export const ErrCodeInternal: ErrCode = 2

export const ErrCodeFlowControl: ErrCode = 3

export const ErrCodeSettingsTimeout: ErrCode = 4

export const ErrCodeStreamClosed: ErrCode = 5

export const ErrCodeFrameSize: ErrCode = 6

export const ErrCodeRefusedStream: ErrCode = 7

export const ErrCodeCancel: ErrCode = 8

export const ErrCodeCompression: ErrCode = 9

export const ErrCodeConnect: ErrCode = 10

export const ErrCodeEnhanceYourCalm: ErrCode = 11

export const ErrCodeInadequateSecurity: ErrCode = 12

export const ErrCodeHTTP11Required: ErrCode = 13

export let errCodeName: globalThis.Map<ErrCode, string> | null = $.makeMap<ErrCode, string>([[0, "NO_ERROR"], [1, "PROTOCOL_ERROR"], [2, "INTERNAL_ERROR"], [3, "FLOW_CONTROL_ERROR"], [4, "SETTINGS_TIMEOUT"], [5, "STREAM_CLOSED"], [6, "FRAME_SIZE_ERROR"], [7, "REFUSED_STREAM"], [8, "CANCEL"], [9, "COMPRESSION_ERROR"], [10, "CONNECT_ERROR"], [11, "ENHANCE_YOUR_CALM"], [12, "INADEQUATE_SECURITY"], [13, "HTTP_1_1_REQUIRED"]])

export function __goscript_set_errCodeName(__goscriptValue: globalThis.Map<ErrCode, string> | null): void {
	errCodeName = __goscriptValue
}

export async function ErrCode_String(e: ErrCode): globalThis.Promise<string> {
	{
		let [s, ok] = $.mapGet<ErrCode, string, string>(errCodeName, e, "")
		if (ok) {
			return s
		}
	}
	return fmt.Sprintf("unknown error code 0x%x", $.basicInterfaceValue($.uint(e, 32), "uint32"))
}

export async function ErrCode_stringToken(e: ErrCode): globalThis.Promise<string> {
	{
		let [s, ok] = $.mapGet<ErrCode, string, string>(errCodeName, e, "")
		if (ok) {
			return s
		}
	}
	return fmt.Sprintf("ERR_UNKNOWN_%d", $.basicInterfaceValue($.uint(e, 32), "uint32"))
}

export async function ConnectionError_Error(e: ConnectionError): globalThis.Promise<string> {
	return fmt.Sprintf("connection error: %s", $.namedValueInterfaceValue<any>($.uint(e, 32), "http2.ErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export let errFromPeer: $.GoError = errors.New("received from peer")

export function __goscript_set_errFromPeer(__goscriptValue: $.GoError): void {
	errFromPeer = __goscriptValue
}

export function streamError(id: number, code: ErrCode): StreamError {
	return new StreamError({StreamID: id, Code: code}, true)
}

export async function pseudoHeaderError_Error(e: pseudoHeaderError): globalThis.Promise<string> {
	return fmt.Sprintf("invalid pseudo-header %q", e)
}

export async function duplicatePseudoHeaderError_Error(e: duplicatePseudoHeaderError): globalThis.Promise<string> {
	return fmt.Sprintf("duplicate pseudo-header %q", e)
}

export async function headerFieldNameError_Error(e: headerFieldNameError): globalThis.Promise<string> {
	return fmt.Sprintf("invalid header field name %q", e)
}

export async function headerFieldValueError_Error(e: headerFieldValueError): globalThis.Promise<string> {
	return fmt.Sprintf("invalid header field value for %q", e)
}

export let errMixPseudoHeaderTypes: $.GoError = errors.New("mix of request and response pseudo headers")

export function __goscript_set_errMixPseudoHeaderTypes(__goscriptValue: $.GoError): void {
	errMixPseudoHeaderTypes = __goscriptValue
}

export let errPseudoAfterRegular: $.GoError = errors.New("pseudo header field after regular")

export function __goscript_set_errPseudoAfterRegular(__goscriptValue: $.GoError): void {
	errPseudoAfterRegular = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (ErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), stringToken: (receiver: any, ...args: any[]) => (ErrCode_stringToken as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("stringToken", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
