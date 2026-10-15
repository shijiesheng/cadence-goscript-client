// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as pool from "@goscript/go.uber.org/zap/internal/pool/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_field from "./field.gs.ts"
import "@goscript/go.uber.org/zap/internal/pool/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "./field.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.errArray", "zap.errArrayElem"])

export type errArray = $.Slice<$.GoError>

$.registerNamedType("zap.errArray", /* @__PURE__ */ $.sliceType("error"));

$.registerNamedValueType(
	"zap.errArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (errArray_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.errArray",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (errArray_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["arr", "zapcore.ArrayEncoder"]], ["error"])]
);

export class errArrayElem {
	public get error(): $.GoError {
		return this._fields.error
	}

	public set error(value: $.GoError) {
		this._fields.error = value
	}

	public _fields: {
		error: $.GoError
	}

	constructor(init?: Partial<{error?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			error: init?.error ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errArrayElem {
		return new errArrayElem(this, true)
	}

	public __goscriptAssign(source: errArrayElem): void {
		const target = this._fields
		const values = source._fields
		target.error = $.assignFieldValue(target.error, values.error, "error")
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const e: errArrayElem | $.VarRef<errArrayElem> | null = this;
		// Re-use the error field's logic, which supports non-standard error types.
		await $.markAsStructValue($.cloneStructValue(Error($.pointerValue<errArrayElem>(e).error))).AddTo(enc)
		return null
	}

	public async Error(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<$.GoError, null>>(this.error).Error()
	}

	static __typeInfo = $.registerStructType(
		"zap.errArrayElem",
		() => new errArrayElem(),
		() => [$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		errArrayElem,
		() => [/* @__PURE__ */ $.structField("error", "error", [0], 0, false, { pkgPath: "go.uber.org/zap", anonymous: true })]
	)
}

export let _errArrayElemPool: pool.Pool | $.VarRef<pool.Pool> | null = await pool.New(__goscriptStatic0(), $.functionValue((): errArrayElem | $.VarRef<errArrayElem> | null => {
	return new errArrayElem()
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("zap.errArrayElem")] } as $.FunctionTypeInfo)))

export function __goscript_set__errArrayElemPool(__goscriptValue: pool.Pool | $.VarRef<pool.Pool> | null): void {
	_errArrayElemPool = __goscriptValue
}

export function Error(err: $.GoError): __goscript_field.Field {
	return NamedError("error", err)
}

export function NamedError(key: string, err: $.GoError): __goscript_field.Field {
	if (err == null) {
		return __goscript_field.Skip()
	}
	return new zapcore.Field({Key: key, Type: 26, Interface: (err as any)}, true)
}

export async function errArray_MarshalLogArray(errs: errArray, arr: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget0 = errs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		if (((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as $.GoError) == null) {
			continue
		}
		// To represent each error as an object with an "error" attribute and
		// potentially an "errorVerbose" attribute, we need to wrap it in a
		// type that implements LogObjectMarshaler. To prevent this from
		// allocating, pool the wrapper type.
		let elem: errArrayElem | $.VarRef<errArrayElem> | null = (await (_errArrayElemPool !== null && (_errArrayElemPool as any).__isVarRef !== true && (_errArrayElemPool as any).__goValue === undefined ? ((_errArrayElemPool as any) as pool.Pool).Get(__goscriptStatic0()) : pool.Pool.prototype.Get.call(_errArrayElemPool, __goscriptStatic0())) as errArrayElem | $.VarRef<errArrayElem> | null)
		let elem$: errArrayElem = elem == null ? $.pointerTarget<errArrayElem>(elem) : (elem as any).__isVarRef === true ? (elem as any).value : (elem as any).__goValue === undefined ? (elem as any) : $.pointerTarget<errArrayElem>(elem);
		;(elem$ as errArrayElem).error = ((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as $.GoError)
		let err = (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(arr)).AppendObject($.interfaceValue<zapcore.ObjectMarshaler | null>(elem, "*zap.errArrayElem", /* @__PURE__ */ $.pointerType("zap.errArrayElem"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(elem$ as errArrayElem).error = null
		void (_errArrayElemPool !== null && (_errArrayElemPool as any).__isVarRef !== true && (_errArrayElemPool as any).__goValue === undefined ? ((_errArrayElemPool as any) as pool.Pool).Put(__goscriptStatic0(), elem) : pool.Pool.prototype.Put.call(_errArrayElemPool, __goscriptStatic0(), elem))
		if (err != null) {
			return err
		}
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("zap.errArrayElem"), zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Error(...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalLogObject(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
