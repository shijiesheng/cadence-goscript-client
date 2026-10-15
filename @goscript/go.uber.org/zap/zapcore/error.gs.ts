// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as pool from "@goscript/go.uber.org/zap/internal/pool/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_encoder from "./encoder.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/zap/internal/pool/index.js"
import "./encoder.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.errorGroup", "zapcore.errArray", "zapcore.errArrayElem"])

export type errorGroup = {
	Errors(): $.Slice<$.GoError>
}

$.registerInterfaceType(
	"zapcore.errorGroup",
	null,
	[$.methodSignature("Errors", [], [/* @__PURE__ */ $.sliceType("error")])]
);

export type errArray = $.Slice<$.GoError>

$.registerNamedType("zapcore.errArray", /* @__PURE__ */ $.sliceType("error"));

$.registerNamedValueType(
	"zapcore.errArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (errArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zapcore.errArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (errArray_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export class errArrayElem {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errArrayElem {
		return new errArrayElem(this, true)
	}

	public __goscriptAssign(source: errArrayElem): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Free(): void {
		let e: errArrayElem | $.VarRef<errArrayElem> | null = this;
		$.pointerValue<errArrayElem>(e).err = null
		void (_errArrayElemPool !== null && (_errArrayElemPool as any).__isVarRef !== true && (_errArrayElemPool as any).__goValue === undefined ? ((_errArrayElemPool as any) as pool.Pool).Put(__goscriptStatic3(), e) : pool.Pool.prototype.Put.call(_errArrayElemPool, __goscriptStatic3(), e))
	}

	public async MarshalLogArray(arr: __goscript_encoder.ArrayEncoder | null): globalThis.Promise<$.GoError> {
		const e: errArrayElem | $.VarRef<errArrayElem> | null = this;
		return (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<__goscript_encoder.ArrayEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ArrayEncoder, null>>(arr)).AppendObject($.interfaceValue<__goscript_marshaler.ObjectMarshaler | null>(e, "*zapcore.errArrayElem", /* @__PURE__ */ $.pointerType("zapcore.errArrayElem")))
	}

	public async MarshalLogObject(enc: __goscript_encoder.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const e: errArrayElem | $.VarRef<errArrayElem> | null = this;
		return encodeError("error", $.pointerValue<errArrayElem>(e).err, enc)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.errArrayElem",
		() => new errArrayElem(),
		() => [$.methodSignature("Free", [], [], true), $.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"], true)],
		errArrayElem,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export async function encodeError(key: string, err: $.GoError, enc: __goscript_encoder.ObjectEncoder | null): globalThis.Promise<$.GoError> {
	let retErr: $.GoError = null! as $.GoError
	const __defer = new $.AsyncDisposableStack()
	try {
		// Try to capture panics (from nil references or otherwise) when calling
		// the Error() method
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			{
				let rerr = $.recover()
				if (rerr != null) {
					// If it's a nil pointer, just say "<nil>". The likeliest causes are a
					// error that fails to guard against nil or a nil pointer for a
					// value receiver, and in either case, "<nil>" is a nice result.
					{
						let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((err as any))))
						if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(v)).IsNil()) {
							void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddString(key, "<nil>"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							return
						}
					}

					retErr = fmt.Errorf("PANIC=%v", rerr)
				}
			}
		})() })

		let basic = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddString(key, basic), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		{
			const __goscriptTypeSwitchValue = err
			switch (true) {
				case $.typeAssert<errorGroup | null>(__goscriptTypeSwitchValue, "zapcore.errorGroup").ok:
					{
						let e: errorGroup | null = $.typeAssert<errorGroup | null>(__goscriptTypeSwitchValue, "zapcore.errorGroup").value
						const __goscriptReturn0: $.GoError = (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddArray($.concatString(key, "Causes"), $.namedValueInterfaceValue<__goscript_marshaler.ArrayMarshaler | null>((((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<errorGroup, null>) : $.pointerValue<Exclude<errorGroup, null>>(e)).Errors(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<$.GoError>) as errArray), "zapcore.errArray", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						retErr = __goscriptReturn0
						await __defer.dispose()
						return retErr
					}
					break
				case $.typeAssert<fmt.Formatter | null>(__goscriptTypeSwitchValue, "fmt.Formatter").ok:
					{
						let e: fmt.Formatter | null = $.typeAssert<fmt.Formatter | null>(__goscriptTypeSwitchValue, "fmt.Formatter").value
						let verbose = await fmt.Sprintf("%+v", (e as any))
						if (!$.stringEqual(verbose, basic)) {
							// This is a rich error type, like those produced by
							// github.com/pkg/errors.
							void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddString($.concatString(key, "Verbose"), verbose), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
					break
			}
		}
		const __goscriptReturn1: $.GoError = null
		retErr = __goscriptReturn1
		await __defer.dispose()
		return retErr
		await __defer.dispose()
	} catch (e) {
		await __defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return retErr
}

export async function errArray_MarshalLogArray(errs: errArray, arr: __goscript_encoder.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget0 = errs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		if (((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as $.GoError) == null) {
			continue
		}

		let el: errArrayElem | $.VarRef<errArrayElem> | null = await newErrArrayElem(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as $.GoError))
		let err = (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<__goscript_encoder.ArrayEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ArrayEncoder, null>>(arr)).AppendObject($.interfaceValue<__goscript_marshaler.ObjectMarshaler | null>(el, "*zapcore.errArrayElem", /* @__PURE__ */ $.pointerType("zapcore.errArrayElem"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as errArrayElem).Free() : errArrayElem.prototype.Free.call(el))
		if (err != null) {
			return err
		}
	}
	return null
}

export let _errArrayElemPool: pool.Pool | $.VarRef<pool.Pool> | null = await pool.New(__goscriptStatic3(), $.functionValue((): errArrayElem | $.VarRef<errArrayElem> | null => {
	return new errArrayElem()
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("zapcore.errArrayElem")] } as $.FunctionTypeInfo)))

export function __goscript_set__errArrayElemPool(__goscriptValue: pool.Pool | $.VarRef<pool.Pool> | null): void {
	_errArrayElemPool = __goscriptValue
}

export async function newErrArrayElem(err: $.GoError): globalThis.Promise<errArrayElem | $.VarRef<errArrayElem> | null> {
	let e: errArrayElem | $.VarRef<errArrayElem> | null = (await (_errArrayElemPool !== null && (_errArrayElemPool as any).__isVarRef !== true && (_errArrayElemPool as any).__goValue === undefined ? ((_errArrayElemPool as any) as pool.Pool).Get(__goscriptStatic3()) : pool.Pool.prototype.Get.call(_errArrayElemPool, __goscriptStatic3())) as errArrayElem | $.VarRef<errArrayElem> | null)
	$.pointerValue<errArrayElem>(e).err = err
	return e
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (errArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("error", "zapcore.errArray"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("zapcore.errArrayElem"), zero: () => null, methods: {Free: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Free(...$.stripGenericTypeArgs(args)), MarshalLogArray: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalLogArray(...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalLogObject(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
