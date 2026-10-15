// Generated file based on transport_exception.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_exception from "./exception.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "./exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.timeoutable", "thrift.TTransportException", "thrift.tTransportException"])

export type timeoutable = {
	Timeout(): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"thrift.timeoutable",
	null,
	[$.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type TTransportException = {
	Err(): $.GoError
	Error(): string | globalThis.Promise<string>
	TExceptionType(): __goscript_exception.TExceptionType
	TypeId(): number
}

$.registerInterfaceType(
	"thrift.TTransportException",
	null,
	[$.methodSignature("Err", [], ["error"]), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("TExceptionType", [], [/* @__PURE__ */ $.basicType("uint8", "thrift.TExceptionType")]), $.methodSignature("TypeId", [], [/* @__PURE__ */ $.basicType("int")])]
);

export class tTransportException {
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

	public clone(): tTransportException {
		return new tTransportException(this, true)
	}

	public __goscriptAssign(source: tTransportException): void {
		const target = this._fields
		const values = source._fields
		target.typeId = values.typeId
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.msg = values.msg
	}

	public Err(): $.GoError {
		const p: tTransportException | $.VarRef<tTransportException> | null = this;
		return $.pointerValue<tTransportException>(p).err
	}

	public Error(): string {
		const p: tTransportException | $.VarRef<tTransportException> | null = this;
		return $.pointerValue<tTransportException>(p).msg
	}

	public TExceptionType(): __goscript_exception.TExceptionType {
		return 4
	}

	public async Timeout(): globalThis.Promise<boolean> {
		const p: tTransportException | $.VarRef<tTransportException> | null = this;
		const p$: tTransportException = p == null ? $.pointerTarget<tTransportException>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<tTransportException>(p)
		return ((p$ as tTransportException).typeId == 3) || await isTimeoutError((p$ as tTransportException).err)
	}

	public TypeId(): number {
		const p: tTransportException | $.VarRef<tTransportException> | null = this;
		return $.pointerValue<tTransportException>(p).typeId
	}

	public Unwrap(): $.GoError {
		const p: tTransportException | $.VarRef<tTransportException> | null = this;
		return $.pointerValue<tTransportException>(p).err
	}

	static __typeInfo = $.registerStructType(
		"thrift.tTransportException",
		() => new tTransportException(),
		() => [$.methodSignature("Err", [], ["error"], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("TExceptionType", [], [/* @__PURE__ */ $.basicType("uint8", "thrift.TExceptionType")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TypeId", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		tTransportException,
		() => [/* @__PURE__ */ $.structField("typeId", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("err", "error", [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const UNKNOWN_TRANSPORT_EXCEPTION: number = 0

export const NOT_OPEN: number = 1

export const ALREADY_OPEN: number = 2

export const TIMED_OUT: number = 3

export const END_OF_FILE: number = 4

export function NewTTransportException(t: number, e: string): TTransportException | null {
	return $.interfaceValue<TTransportException | null>((() => { const __goscriptLiteralField0 = errors.New(e); return new tTransportException({typeId: t, err: __goscriptLiteralField0, msg: e}) })(), "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
}

export async function NewTTransportExceptionFromError(e: $.GoError): globalThis.Promise<TTransportException | null> {
	if (e == null) {
		return null
	}

	{
		let [t, ok] = $.typeAssertTuple<TTransportException | null>(e, "thrift.TTransportException")
		if (ok) {
			return t
		}
	}

	let te: tTransportException | $.VarRef<tTransportException> | null = (await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(e)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new tTransportException({typeId: 0, err: e, msg: __goscriptLiteralField1}) })())
	let te$: tTransportException = te == null ? $.pointerTarget<tTransportException>(te) : (te as any).__isVarRef === true ? (te as any).value : (te as any).__goValue === undefined ? (te as any) : $.pointerTarget<tTransportException>(te)

	if (await isTimeoutError(e)) {
		;(te$ as tTransportException).typeId = 3
		return $.interfaceValue<TTransportException | null>(te, "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
	}

	if (errors.Is($.pointerValueOrNil(e)!, $.pointerValueOrNil(io.EOF)!)) {
		;(te$ as tTransportException).typeId = 4
		return $.interfaceValue<TTransportException | null>(te, "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
	}

	return $.interfaceValue<TTransportException | null>(te, "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
}

export async function prependTTransportException(prepend: string, e: TTransportException | null): globalThis.Promise<TTransportException | null> {
	return $.interfaceValue<TTransportException | null>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<TTransportException, null>) : $.pointerValue<Exclude<TTransportException, null>>(e)).TypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField3 = $.concatString(prepend, (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<TTransportException, null>) : $.pointerValue<Exclude<TTransportException, null>>(e)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new tTransportException({typeId: __goscriptLiteralField2, err: (e as $.GoError), msg: __goscriptLiteralField3}) })()), "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
}

export async function isTimeoutError(err: $.GoError): globalThis.Promise<boolean> {
	let t: $.VarRef<timeoutable | null> = $.varRef(null! as timeoutable | null)
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(t, "*thrift.timeoutable", /* @__PURE__ */ $.pointerType("thrift.timeoutable")))) {
		return $.pointerValue<Exclude<timeoutable, null>>(t.value).Timeout()
	}
	return false
}

var __goscriptAwait: any
