// Generated file based on exception.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import type * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_application_exception from "./application_exception.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/errors/index.js"
import "./application_exception.gs.ts"
import "./protocol_exception.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TException", "thrift.TExceptionType", "thrift.wrappedTException"])

export type TException = {
	Error(): string | globalThis.Promise<string>
	TExceptionType(): TExceptionType
}

$.registerInterfaceType(
	"thrift.TException",
	null,
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("TExceptionType", [], [/* @__PURE__ */ $.basicType("uint8", "thrift.TExceptionType")])]
);

export type TExceptionType = number

export class wrappedTException {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get msg(): string {
		return this._fields.msg
	}

	public set msg(value: string) {
		this._fields.msg = value
	}

	public get tExceptionType(): TExceptionType {
		return this._fields.tExceptionType
	}

	public set tExceptionType(value: TExceptionType) {
		this._fields.tExceptionType = value
	}

	public _fields: {
		err: $.GoError
		msg: string
		tExceptionType: TExceptionType
	}

	constructor(init?: Partial<{err?: $.GoError, msg?: string, tExceptionType?: TExceptionType}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			msg: init?.msg ?? ("" as string),
			tExceptionType: init?.tExceptionType ?? (0 as TExceptionType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): wrappedTException {
		return new wrappedTException(this, true)
	}

	public __goscriptAssign(source: wrappedTException): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.msg = values.msg
		target.tExceptionType = values.tExceptionType
	}

	public Error(): string {
		const w = this;
		return w.msg
	}

	public TExceptionType(): TExceptionType {
		const w = this;
		return w.tExceptionType
	}

	public Unwrap(): $.GoError {
		const w = this;
		return w.err
	}

	static __typeInfo = $.registerStructType(
		"thrift.wrappedTException",
		() => new wrappedTException(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("TExceptionType", [], [/* @__PURE__ */ $.basicType("uint8", "thrift.TExceptionType")]), $.methodSignature("Unwrap", [], ["error"])],
		wrappedTException,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("tExceptionType", /* @__PURE__ */ $.basicType("uint8", "thrift.TExceptionType"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const TExceptionTypeUnknown: TExceptionType = 0

export const TExceptionTypeCompiled: TExceptionType = 1

export const TExceptionTypeApplication: TExceptionType = 2

export const TExceptionTypeProtocol: TExceptionType = 3

export const TExceptionTypeTransport: TExceptionType = 4

export async function PrependError(prepend: string, err: $.GoError): globalThis.Promise<$.GoError> {
	let msg = $.concatString(prepend, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))

	let te: $.VarRef<TException | null> = $.varRef(null! as TException | null)
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(te, "*thrift.TException", /* @__PURE__ */ $.pointerType("thrift.TException")))) {
		switch ((__goscriptAwait = $.pointerValue<Exclude<TException, null>>(te.value).TExceptionType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case 4:
			{
				{
					let [t, ok] = $.typeAssertTuple<__goscript_transport_exception.TTransportException | null>(err, "thrift.TTransportException")
					if (ok) {
						return (await __goscript_transport_exception.prependTTransportException(prepend, t) as $.GoError)
					}
				}
				break
			}
			case 3:
			{
				{
					let [t, ok] = $.typeAssertTuple<__goscript_protocol_exception.TProtocolException | null>(err, "thrift.TProtocolException")
					if (ok) {
						return (await __goscript_protocol_exception.prependTProtocolException(prepend, t) as $.GoError)
					}
				}
				break
			}
			case 2:
			{
				let t: $.VarRef<__goscript_application_exception.TApplicationException | null> = $.varRef(null! as __goscript_application_exception.TApplicationException | null)
				if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(t, "*thrift.TApplicationException", /* @__PURE__ */ $.pointerType("thrift.TApplicationException")))) {
					return (__goscript_application_exception.NewTApplicationException((__goscriptAwait = $.pointerValue<Exclude<__goscript_application_exception.TApplicationException, null>>(t.value).TypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), msg) as $.GoError)
				}
				break
			}
		}

		return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<TException, null>>(te.value).TExceptionType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new wrappedTException({err: err, msg: msg, tExceptionType: __goscriptLiteralField0}, true) })()), "thrift.wrappedTException", "thrift.wrappedTException")
	}

	return errors.New(msg)
}

export async function WrapTException(err: $.GoError): globalThis.Promise<TException | null> {
	if (err == null) {
		return null
	}

	{
		let [te, ok] = $.typeAssertTuple<TException | null>(err, "thrift.TException")
		if (ok) {
			return te
		}
	}

	return $.interfaceValue<TException | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new wrappedTException({err: err, msg: __goscriptLiteralField1, tExceptionType: 0}, true) })()), "thrift.wrappedTException", "thrift.wrappedTException")
}

var __goscriptAwait: any
