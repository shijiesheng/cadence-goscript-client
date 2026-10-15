// Generated file based on protocol_exception.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_exception from "./exception.gs.ts"
import "@goscript/encoding/base64/index.js"
import "@goscript/errors/index.js"
import "./exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TProtocolException", "thrift.tProtocolException"])

export type TProtocolException = {
	Error(): string | globalThis.Promise<string>
	TExceptionType(): __goscript_exception.TExceptionType
	TypeId(): number
}

$.registerInterfaceType(
	"thrift.TProtocolException",
	null,
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("TExceptionType", [], [/* @__PURE__ */ $.basicType("uint8", "thrift.TExceptionType")]), $.methodSignature("TypeId", [], [/* @__PURE__ */ $.basicType("int")])]
);

export class tProtocolException {
	public get typeId(): number {
		return this._fields.typeId
	}

	public set typeId(value: number) {
		this._fields.typeId = value
	}

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

	public _fields: {
		typeId: number
		err: $.GoError
		msg: string
	}

	constructor(init?: Partial<{typeId?: number, err?: $.GoError, msg?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			typeId: init?.typeId ?? (0 as number),
			err: init?.err ?? (null! as $.GoError),
			msg: init?.msg ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tProtocolException {
		return new tProtocolException(this, true)
	}

	public __goscriptAssign(source: tProtocolException): void {
		const target = this._fields
		const values = source._fields
		target.typeId = values.typeId
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.msg = values.msg
	}

	public Error(): string {
		const p: tProtocolException | $.VarRef<tProtocolException> | null = this;
		return $.pointerValue<tProtocolException>(p).msg
	}

	public String(): string {
		const p: tProtocolException | $.VarRef<tProtocolException> | null = this;
		return $.pointerValue<tProtocolException>(p).msg
	}

	public TExceptionType(): __goscript_exception.TExceptionType {
		return 3
	}

	public TypeId(): number {
		const p: tProtocolException | $.VarRef<tProtocolException> | null = this;
		return $.pointerValue<tProtocolException>(p).typeId
	}

	public Unwrap(): $.GoError {
		const p: tProtocolException | $.VarRef<tProtocolException> | null = this;
		return $.pointerValue<tProtocolException>(p).err
	}

	static __typeInfo = $.registerStructType(
		"thrift.tProtocolException",
		() => new tProtocolException(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("TExceptionType", [], [/* @__PURE__ */ $.basicType("uint8", "thrift.TExceptionType")]), $.methodSignature("TypeId", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		tProtocolException,
		() => [/* @__PURE__ */ $.structField("typeId", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("err", "error", [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const UNKNOWN_PROTOCOL_EXCEPTION: number = 0

export const INVALID_DATA: number = 1

export const NEGATIVE_SIZE: number = 2

export const SIZE_LIMIT: number = 3

export const BAD_VERSION: number = 4

export const NOT_IMPLEMENTED: number = 5

export const DEPTH_LIMIT: number = 6

export async function NewTProtocolException(err: $.GoError): globalThis.Promise<TProtocolException | null> {
	if (err == null) {
		return null
	}

	{
		let [e, ok] = $.typeAssertTuple<TProtocolException | null>(err, "thrift.TProtocolException")
		if (ok) {
			return e
		}
	}

	if (errors.As($.pointerValueOrNil(err)!, $.namedValueInterfaceValue<any>($.varRef<base64.CorruptInputError>(0n), "*base64.CorruptInputError", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))) {
		return NewTProtocolExceptionWithType(1, err)
	}

	return NewTProtocolExceptionWithType(0, err)
}

export async function NewTProtocolExceptionWithType(errType: number, err: $.GoError): globalThis.Promise<TProtocolException | null> {
	if (err == null) {
		return null
	}
	return $.interfaceValue<TProtocolException | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new tProtocolException({typeId: errType, err: err, msg: __goscriptLiteralField0}) })()), "*thrift.tProtocolException", /* @__PURE__ */ $.pointerType("thrift.tProtocolException"))
}

export async function prependTProtocolException(prepend: string, err: TProtocolException | null): globalThis.Promise<TProtocolException | null> {
	return $.interfaceValue<TProtocolException | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<TProtocolException, null>) : $.pointerValue<Exclude<TProtocolException, null>>(err)).TypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = $.concatString(prepend, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<TProtocolException, null>) : $.pointerValue<Exclude<TProtocolException, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new tProtocolException({typeId: __goscriptLiteralField1, err: (err as $.GoError), msg: __goscriptLiteralField2}) })()), "*thrift.tProtocolException", /* @__PURE__ */ $.pointerType("thrift.tProtocolException"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Error: (receiver: any, ...args: any[]) => (base64.CorruptInputError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
