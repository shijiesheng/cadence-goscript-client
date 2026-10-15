// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "./connection.gs.ts"
import "./connectionstate_string.gs.ts"
import "./systemerrcode_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.SystemErrCode", "tchannel.SystemError", "tchannel.errConnNotActive"])

export type SystemErrCode = number

$.registerNamedValueType(
	"tchannel.SystemErrCode",
	{MetricsKey: (receiver: any, ...args: any[]) => (SystemErrCode_MetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_systemerrcode_string.SystemErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), relayMetricsKey: (receiver: any, ...args: any[]) => (SystemErrCode_relayMetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MetricsKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("relayMetricsKey", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.SystemErrCode",
	{MetricsKey: (receiver: any, ...args: any[]) => (SystemErrCode_MetricsKey as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_systemerrcode_string.SystemErrCode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), relayMetricsKey: (receiver: any, ...args: any[]) => (SystemErrCode_relayMetricsKey as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MetricsKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("relayMetricsKey", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class SystemError {
	public get code(): SystemErrCode {
		return this._fields.code
	}

	public set code(value: SystemErrCode) {
		this._fields.code = value
	}

	public get msg(): string {
		return this._fields.msg
	}

	public set msg(value: string) {
		this._fields.msg = value
	}

	public get wrapped(): $.GoError {
		return this._fields.wrapped
	}

	public set wrapped(value: $.GoError) {
		this._fields.wrapped = value
	}

	public _fields: {
		code: SystemErrCode
		msg: string
		wrapped: $.GoError
	}

	constructor(init?: Partial<{code?: SystemErrCode, msg?: string, wrapped?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			code: init?.code ?? (0 as SystemErrCode),
			msg: init?.msg ?? ("" as string),
			wrapped: init?.wrapped ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SystemError {
		return new SystemError(this, true)
	}

	public __goscriptAssign(source: SystemError): void {
		const target = this._fields
		const values = source._fields
		target.code = values.code
		target.msg = values.msg
		target.wrapped = $.assignFieldValue(target.wrapped, values.wrapped, "error")
	}

	public Code(): SystemErrCode {
		const se = this;
		return se.code
	}

	public async Error(): globalThis.Promise<string> {
		const se = this;
		return fmt.Sprintf("tchannel error %v: %s", $.namedValueInterfaceValue<any>(se.Code(), "tchannel.SystemErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), se.msg)
	}

	public Message(): string {
		const se = this;
		return se.msg
	}

	public Wrapped(): $.GoError {
		const se = this;
		return se.wrapped
	}

	static __typeInfo = $.registerStructType(
		"tchannel.SystemError",
		() => new SystemError(),
		() => [$.methodSignature("Code", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.SystemErrCode")]), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Message", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Wrapped", [], ["error"])],
		SystemError,
		() => [/* @__PURE__ */ $.structField("code", /* @__PURE__ */ $.basicType("uint8", "tchannel.SystemErrCode"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("wrapped", "error", [2], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class errConnNotActive {
	public get info(): string {
		return this._fields.info
	}

	public set info(value: string) {
		this._fields.info = value
	}

	public get state(): __goscript_connection.connectionState {
		return this._fields.state
	}

	public set state(value: __goscript_connection.connectionState) {
		this._fields.state = value
	}

	public _fields: {
		info: string
		state: __goscript_connection.connectionState
	}

	constructor(init?: Partial<{info?: string, state?: __goscript_connection.connectionState}>, __goscriptValue?: boolean) {
		this._fields = {
			info: init?.info ?? ("" as string),
			state: init?.state ?? (0 as __goscript_connection.connectionState)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errConnNotActive {
		return new errConnNotActive(this, true)
	}

	public __goscriptAssign(source: errConnNotActive): void {
		const target = this._fields
		const values = source._fields
		target.info = values.info
		target.state = values.state
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("%v connection is not active: %v", e.info, $.namedValueInterfaceValue<any>(e.state, "tchannel.connectionState", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.errConnNotActive",
		() => new errConnNotActive(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		errConnNotActive,
		() => [/* @__PURE__ */ $.structField("info", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.connectionState"), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const invalidMessageID: number = 4294967295

export const ErrCodeInvalid: SystemErrCode = 0

export const ErrCodeTimeout: SystemErrCode = 1

export const ErrCodeCancelled: SystemErrCode = 2

export const ErrCodeBusy: SystemErrCode = 3

export const ErrCodeDeclined: SystemErrCode = 4

export const ErrCodeUnexpected: SystemErrCode = 5

export const ErrCodeBadRequest: SystemErrCode = 6

export const ErrCodeNetwork: SystemErrCode = 7

export const ErrCodeProtocol: SystemErrCode = 255

export let ErrServerBusy: $.GoError = await NewSystemError(3, "server busy", null)

export function __goscript_set_ErrServerBusy(__goscriptValue: $.GoError): void {
	ErrServerBusy = __goscriptValue
}

export let ErrRequestCancelled: $.GoError = await NewSystemError(2, "request cancelled", null)

export function __goscript_set_ErrRequestCancelled(__goscriptValue: $.GoError): void {
	ErrRequestCancelled = __goscriptValue
}

export let ErrTimeout: $.GoError = await NewSystemError(1, "timeout", null)

export function __goscript_set_ErrTimeout(__goscriptValue: $.GoError): void {
	ErrTimeout = __goscriptValue
}

export let ErrTimeoutRequired: $.GoError = await NewSystemError(6, "timeout required", null)

export function __goscript_set_ErrTimeoutRequired(__goscriptValue: $.GoError): void {
	ErrTimeoutRequired = __goscriptValue
}

export let ErrChannelClosed: $.GoError = await NewSystemError(4, "closed channel", null)

export function __goscript_set_ErrChannelClosed(__goscriptValue: $.GoError): void {
	ErrChannelClosed = __goscriptValue
}

export let ErrMethodTooLarge: $.GoError = await NewSystemError(255, "method too large", null)

export function __goscript_set_ErrMethodTooLarge(__goscriptValue: $.GoError): void {
	ErrMethodTooLarge = __goscriptValue
}

export async function SystemErrCode_MetricsKey(c: SystemErrCode): globalThis.Promise<string> {
	switch (c) {
		case 0:
		{
			return "invalid"
			break
		}
		case 1:
		{
			return "timeout"
			break
		}
		case 2:
		{
			return "cancelled"
			break
		}
		case 3:
		{
			return "busy"
			break
		}
		case 4:
		{
			return "declined"
			break
		}
		case 5:
		{
			return "unexpected-error"
			break
		}
		case 6:
		{
			return "bad-request"
			break
		}
		case 7:
		{
			return "network-error"
			break
		}
		case 255:
		{
			return "protocol-error"
			break
		}
		default:
		{
			return __goscript_systemerrcode_string.SystemErrCode_String(c)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function SystemErrCode_relayMetricsKey(c: SystemErrCode): globalThis.Promise<string> {
	switch (c) {
		case 0:
		{
			return "relay-invalid"
			break
		}
		case 1:
		{
			return "relay-timeout"
			break
		}
		case 2:
		{
			return "relay-cancelled"
			break
		}
		case 3:
		{
			return "relay-busy"
			break
		}
		case 4:
		{
			return "relay-declined"
			break
		}
		case 5:
		{
			return "relay-unexpected-error"
			break
		}
		case 6:
		{
			return "relay-bad-request"
			break
		}
		case 7:
		{
			return "relay-network-error"
			break
		}
		case 255:
		{
			return "relay-protocol-error"
			break
		}
		default:
		{
			return $.concatString("relay-", await __goscript_systemerrcode_string.SystemErrCode_String(c))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function NewSystemError(code: SystemErrCode, msg: string, args: $.Slice<any>): globalThis.Promise<$.GoError> {
	return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf(msg, ...(args ?? [])); return new SystemError({code: code, msg: __goscriptLiteralField0}, true) })()), "tchannel.SystemError", "tchannel.SystemError")
}

export async function NewWrappedSystemError(code: SystemErrCode, wrapped: $.GoError): globalThis.Promise<$.GoError> {
	{
		let [se, ok] = $.typeAssertTuple<SystemError>(wrapped, "tchannel.SystemError")
		if (ok) {
			return $.interfaceValue<$.GoError>((se).clone(), "tchannel.SystemError", "tchannel.SystemError")
		}
	}

	return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField1 = await fmt.Sprint((wrapped as any)); return new SystemError({code: code, msg: __goscriptLiteralField1, wrapped: wrapped}, true) })()), "tchannel.SystemError", "tchannel.SystemError")
}

export function GetContextError(err: $.GoError): $.GoError {
	if ($.comparableEqual(err, context.DeadlineExceeded)) {
		return ErrTimeout
	}
	if ($.comparableEqual(err, context.Canceled)) {
		return ErrRequestCancelled
	}
	return err
}

export function GetSystemErrorCode(err: $.GoError): SystemErrCode {
	if (err == null) {
		return 0
	}

	{
		let [se, ok] = $.typeAssertTuple<SystemError>(err, "tchannel.SystemError")
		if (ok) {
			return se.Code()
		}
	}

	return 5
}

export async function GetSystemErrorMessage(err: $.GoError): globalThis.Promise<string> {
	{
		let [se, ok] = $.typeAssertTuple<SystemError>(err, "tchannel.SystemError")
		if (ok) {
			return se.Message()
		}
	}

	return (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MetricsKey: (receiver: any, ...args: any[]) => (SystemErrCode_MetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_systemerrcode_string.SystemErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), relayMetricsKey: (receiver: any, ...args: any[]) => (SystemErrCode_relayMetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.SystemErrCode"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MetricsKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("relayMetricsKey", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_connectionstate_string.connectionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.connectionState"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
