// Generated file based on exception.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as thriftreflect from "@goscript/go.uber.org/thriftrw/thriftreflect/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/thriftreflect/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/internal/envelope/exception", ["exception.ExceptionType", "exception.TApplicationException"])

export type ExceptionType = number

$.registerNamedValueType(
	"exception.ExceptionType",
	{Encode: (receiver: any, ...args: any[]) => (ExceptionType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (ExceptionType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (ExceptionType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (ExceptionType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (ExceptionType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (ExceptionType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ExceptionType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (ExceptionType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "exception.ExceptionType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "exception.ExceptionType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])]
);

$.registerNamedValueType(
	"*exception.ExceptionType",
	{Decode: (receiver: any, ...args: any[]) => (ExceptionType_Decode as any)(receiver, ...$.stripGenericTypeArgs(args)), Encode: (receiver: any, ...args: any[]) => (ExceptionType_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (ExceptionType_Equals as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FromWire: (receiver: any, ...args: any[]) => (ExceptionType_FromWire as any)(receiver, ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (ExceptionType_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (ExceptionType_MarshalLogObject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (ExceptionType_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (ExceptionType_Ptr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ExceptionType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (ExceptionType_ToWire as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (ExceptionType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (ExceptionType_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"]), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "exception.ExceptionType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "exception.ExceptionType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"]), $.methodSignature("UnmarshalJSON", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export class TApplicationException {
	public get Message(): $.VarRef<string> | null {
		return this._fields.Message
	}

	public set Message(value: $.VarRef<string> | null) {
		this._fields.Message = value
	}

	public get Type(): $.VarRef<ExceptionType> | null {
		return this._fields.Type
	}

	public set Type(value: $.VarRef<ExceptionType> | null) {
		this._fields.Type = value
	}

	public _fields: {
		Message: $.VarRef<string> | null
		Type: $.VarRef<ExceptionType> | null
	}

	constructor(init?: Partial<{Message?: $.VarRef<string> | null, Type?: $.VarRef<ExceptionType> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? (null! as $.VarRef<string> | null),
			Type: init?.Type ?? (null! as $.VarRef<ExceptionType> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TApplicationException {
		return new TApplicationException(this, true)
	}

	public __goscriptAssign(source: TApplicationException): void {
		const target = this._fields
		const values = source._fields
		target.Message = values.Message
		target.Type = values.Type
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 1) && (fh.Type == 11):
				{
					let x: $.VarRef<string> = $.varRef("")
					let __goscriptTuple0: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadString()
					x.value = __goscriptTuple0[0]
					err = __goscriptTuple0[1];
					;(v$ as TApplicationException).Message = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 2) && (fh.Type == 8):
				{
					let x: $.VarRef<ExceptionType> = $.varRef(0)
					let __goscriptTuple1: any = await _ExceptionType_Decode(sr)
					x.value = __goscriptTuple1[0]
					err = __goscriptTuple1[1];
					;(v$ as TApplicationException).Type = x
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow1 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow1 != null) {
							return __goscriptShadow1
						}
					}
					break
				}
			}

			{
				let __goscriptShadow2 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow2 != null) {
					return __goscriptShadow2
				}
			}

			{
				let __goscriptTuple2: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple2[0])
				ok = __goscriptTuple2[1]
				err = __goscriptTuple2[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow3 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow3 != null) {
				return __goscriptShadow3
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as TApplicationException).Message != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 1, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteString($.pointerValue<string>(((v$ as TApplicationException).Message))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as TApplicationException).Type != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 2, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = await ExceptionType_Encode($.pointerValue<ExceptionType>((v$ as TApplicationException).Type), sw)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: TApplicationException | $.VarRef<TApplicationException> | null): boolean {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		const rhs$: TApplicationException = rhs == null ? $.pointerTarget<TApplicationException>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<TApplicationException>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!_String_EqualsPtr((v$ as TApplicationException).Message, (rhs$ as TApplicationException).Message)) {
			return false
		}
		if (!_ExceptionType_EqualsPtr((v$ as TApplicationException).Type, (rhs$ as TApplicationException).Type)) {
			return false
		}

		return true
	}

	public async Error(): globalThis.Promise<string> {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as TApplicationException).String() : TApplicationException.prototype.String.call(v))
	}

	public ErrorName(): string {
		return "TApplicationException"
	}

	public FromWire(__goscriptParam1: wire.Value): $.GoError {
		let v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam1)
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget0 = w.value.GetStruct().Fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 1:
				{
					if (field.Value.Type() == 11) {
						let x: $.VarRef<string> = $.varRef("")
						let __goscriptAssign0_0: string = field.Value.GetString()
						let __goscriptAssign0_1: $.GoError = null
						x.value = __goscriptAssign0_0
						err = __goscriptAssign0_1;
						;(v$ as TApplicationException).Message = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 2:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<ExceptionType> = $.varRef(0)
						let __goscriptTuple3: any = _ExceptionType_Read((field.Value).clone())
						x.value = __goscriptTuple3[0]
						err = __goscriptTuple3[1];
						;(v$ as TApplicationException).Type = x
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetMessage(): string {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		let o: string = ""
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		if ((v != null) && ((v$ as TApplicationException).Message != null)) {
			return $.pointerValue<string>((v$ as TApplicationException).Message)
		}

		return o
	}

	public GetType(): ExceptionType {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		let o: ExceptionType = 0
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		if ((v != null) && ((v$ as TApplicationException).Type != null)) {
			return $.pointerValue<ExceptionType>((v$ as TApplicationException).Type)
		}

		return o
	}

	public IsSetMessage(): boolean {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		return (v != null) && ($.pointerValue<TApplicationException>(v).Message != null)
	}

	public IsSetType(): boolean {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		return (v != null) && ($.pointerValue<TApplicationException>(v).Type != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		if (v == null) {
			return null
		}
		if ((v$ as TApplicationException).Message != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("message", $.pointerValue<string>((v$ as TApplicationException).Message)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as TApplicationException).Type != null) {
			err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddObject("type", $.namedValueInterfaceValue<zapcore.ObjectMarshaler | null>($.pointerValue<ExceptionType>((v$ as TApplicationException).Type), "exception.ExceptionType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => ""))
		let i = 0
		if ((v$ as TApplicationException).Message != null) {
			fields[i] = await fmt.Sprintf("Message: %v", $.pointerValue<string>(((v$ as TApplicationException).Message)))
			i++
		}
		if ((v$ as TApplicationException).Type != null) {
			fields[i] = await fmt.Sprintf("Type: %v", $.namedValueInterfaceValue<any>($.pointerValue<ExceptionType>(((v$ as TApplicationException).Type)), "exception.ExceptionType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			i++
		}

		return fmt.Sprintf("TApplicationException{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: TApplicationException | $.VarRef<TApplicationException> | null = this;
		const v$: TApplicationException = v == null ? $.pointerTarget<TApplicationException>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TApplicationException>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 2))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as TApplicationException).Message != null) {
			let __goscriptAssign1_0: wire.Value = wire.NewValueString($.pointerValue<string>(((v$ as TApplicationException).Message)))
			let __goscriptAssign1_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign1_0)
			err = __goscriptAssign1_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 1, Value: w}, true))
			i++
		}
		if ((v$ as TApplicationException).Type != null) {
			let __goscriptTuple4: any = ExceptionType_ToWire($.pointerValue<ExceptionType>((v$ as TApplicationException).Type))
			w = $.assignStruct(w, __goscriptTuple4[0])
			err = __goscriptTuple4[1]
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 2, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"exception.TApplicationException",
		() => new TApplicationException(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("exception.TApplicationException")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ErrorName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetMessage", [], [["o", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("GetType", [], [["o", /* @__PURE__ */ $.basicType("int32", "exception.ExceptionType")]], true), $.methodSignature("IsSetMessage", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetType", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		TApplicationException,
		() => [/* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, true, { tag: "json:\"message,omitempty\"" }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "exception.ExceptionType")), [1], 8, true, { tag: "json:\"type,omitempty\"" })]
	)
}

export const ExceptionTypeUnknown: ExceptionType = 0

export const ExceptionTypeUnknownMethod: ExceptionType = 1

export const ExceptionTypeInvalidMessageType: ExceptionType = 2

export const ExceptionTypeWrongMethodName: ExceptionType = 3

export const ExceptionTypeBadSequenceID: ExceptionType = 4

export const ExceptionTypeMissingResult: ExceptionType = 5

export const ExceptionTypeInternalError: ExceptionType = 6

export const ExceptionTypeProtocolError: ExceptionType = 7

export const ExceptionTypeInvalidTransform: ExceptionType = 8

export const ExceptionTypeInvalidProtocol: ExceptionType = 9

export const ExceptionTypeUnsupportedClientType: ExceptionType = 10

export const rawIDL: string = "enum ExceptionType {\n  UNKNOWN = 0\n  UNKNOWN_METHOD = 1\n  INVALID_MESSAGE_TYPE = 2\n  WRONG_METHOD_NAME = 3\n  BAD_SEQUENCE_ID = 4\n  MISSING_RESULT = 5\n  INTERNAL_ERROR = 6\n  PROTOCOL_ERROR = 7\n  INVALID_TRANSFORM = 8\n  INVALID_PROTOCOL = 9\n  UNSUPPORTED_CLIENT_TYPE = 10\n}\n\nexception TApplicationException {\n  1: optional string message\n  2: optional ExceptionType type\n}\n"

export function ExceptionType_Values(): $.Slice<ExceptionType> {
	return $.arrayToSlice<ExceptionType>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
}

export function ExceptionType_UnmarshalText(v: $.VarRef<ExceptionType> | null, value: $.Slice<number>): $.GoError {
	{
		let s = $.bytesToString(value)
		switch (s) {
			case "UNKNOWN":
			{
				v!.value = 0
				return null
				break
			}
			case "UNKNOWN_METHOD":
			{
				v!.value = 1
				return null
				break
			}
			case "INVALID_MESSAGE_TYPE":
			{
				v!.value = 2
				return null
				break
			}
			case "WRONG_METHOD_NAME":
			{
				v!.value = 3
				return null
				break
			}
			case "BAD_SEQUENCE_ID":
			{
				v!.value = 4
				return null
				break
			}
			case "MISSING_RESULT":
			{
				v!.value = 5
				return null
				break
			}
			case "INTERNAL_ERROR":
			{
				v!.value = 6
				return null
				break
			}
			case "PROTOCOL_ERROR":
			{
				v!.value = 7
				return null
				break
			}
			case "INVALID_TRANSFORM":
			{
				v!.value = 8
				return null
				break
			}
			case "INVALID_PROTOCOL":
			{
				v!.value = 9
				return null
				break
			}
			case "UNSUPPORTED_CLIENT_TYPE":
			{
				v!.value = 10
				return null
				break
			}
			default:
			{
				let [val, err] = strconv.ParseInt(s, 10, 32)
				if (err != null) {
					return fmt.Errorf("unknown enum value %q for %q: %v", s, "ExceptionType", (err as any))
				}
				v!.value = $.int(val, 32)
				return null
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function ExceptionType_MarshalText(v: ExceptionType): [$.Slice<number>, $.GoError] {
	switch ($.int(v, 32)) {
		case 0:
		{
			return [new Uint8Array([85, 78, 75, 78, 79, 87, 78]), null]
			break
		}
		case 1:
		{
			return [new Uint8Array([85, 78, 75, 78, 79, 87, 78, 95, 77, 69, 84, 72, 79, 68]), null]
			break
		}
		case 2:
		{
			return [new Uint8Array([73, 78, 86, 65, 76, 73, 68, 95, 77, 69, 83, 83, 65, 71, 69, 95, 84, 89, 80, 69]), null]
			break
		}
		case 3:
		{
			return [new Uint8Array([87, 82, 79, 78, 71, 95, 77, 69, 84, 72, 79, 68, 95, 78, 65, 77, 69]), null]
			break
		}
		case 4:
		{
			return [new Uint8Array([66, 65, 68, 95, 83, 69, 81, 85, 69, 78, 67, 69, 95, 73, 68]), null]
			break
		}
		case 5:
		{
			return [new Uint8Array([77, 73, 83, 83, 73, 78, 71, 95, 82, 69, 83, 85, 76, 84]), null]
			break
		}
		case 6:
		{
			return [new Uint8Array([73, 78, 84, 69, 82, 78, 65, 76, 95, 69, 82, 82, 79, 82]), null]
			break
		}
		case 7:
		{
			return [new Uint8Array([80, 82, 79, 84, 79, 67, 79, 76, 95, 69, 82, 82, 79, 82]), null]
			break
		}
		case 8:
		{
			return [new Uint8Array([73, 78, 86, 65, 76, 73, 68, 95, 84, 82, 65, 78, 83, 70, 79, 82, 77]), null]
			break
		}
		case 9:
		{
			return [new Uint8Array([73, 78, 86, 65, 76, 73, 68, 95, 80, 82, 79, 84, 79, 67, 79, 76]), null]
			break
		}
		case 10:
		{
			return [new Uint8Array([85, 78, 83, 85, 80, 80, 79, 82, 84, 69, 68, 95, 67, 76, 73, 69, 78, 84, 95, 84, 89, 80, 69]), null]
			break
		}
	}
	return [$.stringToBytes(strconv.FormatInt($.int64(v), 10)), null]
}

export async function ExceptionType_MarshalLogObject(v: ExceptionType, enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("value", $.int(v, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	switch ($.int(v, 32)) {
		case 0:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "UNKNOWN"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 1:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "UNKNOWN_METHOD"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 2:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "INVALID_MESSAGE_TYPE"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 3:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "WRONG_METHOD_NAME"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 4:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "BAD_SEQUENCE_ID"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 5:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "MISSING_RESULT"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 6:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "INTERNAL_ERROR"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 7:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "PROTOCOL_ERROR"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 8:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "INVALID_TRANSFORM"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 9:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "INVALID_PROTOCOL"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 10:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "UNSUPPORTED_CLIENT_TYPE"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
	}
	return null
}

export function ExceptionType_Ptr(__goscriptReceiver0: ExceptionType): $.VarRef<ExceptionType> | null {
	let v: $.VarRef<ExceptionType> = $.varRef(__goscriptReceiver0)
	return v
}

export async function ExceptionType_Encode(v: ExceptionType, sw: stream.Writer | null): globalThis.Promise<$.GoError> {
	return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.int(v, 32))
}

export function ExceptionType_ToWire(v: ExceptionType): [wire.Value, $.GoError] {
	return [wire.NewValueI32($.int(v, 32)), null]
}

export function ExceptionType_FromWire(v: $.VarRef<ExceptionType> | null, __goscriptParam0: wire.Value): $.GoError {
	let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam0)
	v!.value = $.int(w.value.GetI32(), 32)
	return null
}

export async function ExceptionType_Decode(v: $.VarRef<ExceptionType> | null, sr: stream.Reader | null): globalThis.Promise<$.GoError> {
	let [i, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
	if (err != null) {
		return err
	}
	v!.value = $.int(i, 32)
	return null
}

export async function ExceptionType_String(v: ExceptionType): globalThis.Promise<string> {
	let w = $.int(v, 32)
	switch (w) {
		case 0:
		{
			return "UNKNOWN"
			break
		}
		case 1:
		{
			return "UNKNOWN_METHOD"
			break
		}
		case 2:
		{
			return "INVALID_MESSAGE_TYPE"
			break
		}
		case 3:
		{
			return "WRONG_METHOD_NAME"
			break
		}
		case 4:
		{
			return "BAD_SEQUENCE_ID"
			break
		}
		case 5:
		{
			return "MISSING_RESULT"
			break
		}
		case 6:
		{
			return "INTERNAL_ERROR"
			break
		}
		case 7:
		{
			return "PROTOCOL_ERROR"
			break
		}
		case 8:
		{
			return "INVALID_TRANSFORM"
			break
		}
		case 9:
		{
			return "INVALID_PROTOCOL"
			break
		}
		case 10:
		{
			return "UNSUPPORTED_CLIENT_TYPE"
			break
		}
	}
	return fmt.Sprintf("ExceptionType(%d)", $.basicInterfaceValue(w, "int32"))
}

export function ExceptionType_Equals(v: ExceptionType, rhs: ExceptionType): boolean {
	return v == rhs
}

export function ExceptionType_MarshalJSON(v: ExceptionType): [$.Slice<number>, $.GoError] {
	switch ($.int(v, 32)) {
		case 0:
		{
			return [new Uint8Array([34, 85, 78, 75, 78, 79, 87, 78, 34]), null]
			break
		}
		case 1:
		{
			return [new Uint8Array([34, 85, 78, 75, 78, 79, 87, 78, 95, 77, 69, 84, 72, 79, 68, 34]), null]
			break
		}
		case 2:
		{
			return [new Uint8Array([34, 73, 78, 86, 65, 76, 73, 68, 95, 77, 69, 83, 83, 65, 71, 69, 95, 84, 89, 80, 69, 34]), null]
			break
		}
		case 3:
		{
			return [new Uint8Array([34, 87, 82, 79, 78, 71, 95, 77, 69, 84, 72, 79, 68, 95, 78, 65, 77, 69, 34]), null]
			break
		}
		case 4:
		{
			return [new Uint8Array([34, 66, 65, 68, 95, 83, 69, 81, 85, 69, 78, 67, 69, 95, 73, 68, 34]), null]
			break
		}
		case 5:
		{
			return [new Uint8Array([34, 77, 73, 83, 83, 73, 78, 71, 95, 82, 69, 83, 85, 76, 84, 34]), null]
			break
		}
		case 6:
		{
			return [new Uint8Array([34, 73, 78, 84, 69, 82, 78, 65, 76, 95, 69, 82, 82, 79, 82, 34]), null]
			break
		}
		case 7:
		{
			return [new Uint8Array([34, 80, 82, 79, 84, 79, 67, 79, 76, 95, 69, 82, 82, 79, 82, 34]), null]
			break
		}
		case 8:
		{
			return [new Uint8Array([34, 73, 78, 86, 65, 76, 73, 68, 95, 84, 82, 65, 78, 83, 70, 79, 82, 77, 34]), null]
			break
		}
		case 9:
		{
			return [new Uint8Array([34, 73, 78, 86, 65, 76, 73, 68, 95, 80, 82, 79, 84, 79, 67, 79, 76, 34]), null]
			break
		}
		case 10:
		{
			return [new Uint8Array([34, 85, 78, 83, 85, 80, 80, 79, 82, 84, 69, 68, 95, 67, 76, 73, 69, 78, 84, 95, 84, 89, 80, 69, 34]), null]
			break
		}
	}
	return [$.stringToBytes(strconv.FormatInt($.int64(v), 10)), null]
}

export async function ExceptionType_UnmarshalJSON(v: $.VarRef<ExceptionType> | null, text: $.Slice<number>): globalThis.Promise<$.GoError> {
	let d: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewReader(text), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))!)
	json.Decoder.prototype.UseNumber.call($.pointerValue<json.Decoder>(d))
	let [t, err] = await json.Decoder.prototype.Token.call($.pointerValue<json.Decoder>(d))
	if (err != null) {
		return err
	}

	{
		const __goscriptTypeSwitchValue = t
		switch (true) {
			case $.typeAssert<json.Number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "json.Number")).ok:
				{
					let w: json.Number = $.typeAssert<json.Number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "json.Number")).value
					let [x, __goscriptShadow0] = json.Number_Int64(w)
					if (__goscriptShadow0 != null) {
						return __goscriptShadow0
					}
					if (x > 2147483647n) {
						return fmt.Errorf("enum overflow from JSON %q for %q", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), "ExceptionType")
					}
					if (x < -2147483648n) {
						return fmt.Errorf("enum underflow from JSON %q for %q", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), "ExceptionType")
					}
					v!.value = $.int(x, 32)
					return null
				}
				break
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					let w: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
					return ExceptionType_UnmarshalText(v, $.stringToBytes(w))
				}
				break
			default:
				{
					let w: any = __goscriptTypeSwitchValue
					return fmt.Errorf("invalid JSON value %q (%T) to unmarshal into %q", (t as any), (t as any), "ExceptionType")
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function _ExceptionType_Read(w: wire.Value): [ExceptionType, $.GoError] {
	let v: $.VarRef<ExceptionType> = $.varRef(0)
	let err = ExceptionType_FromWire(v, (w).clone())
	return [v.value, err]
}

export async function _ExceptionType_Decode(sr: stream.Reader | null): globalThis.Promise<[ExceptionType, $.GoError]> {
	let v: $.VarRef<ExceptionType> = $.varRef(0)
	let err = await ExceptionType_Decode(v, sr)
	return [v.value, err]
}

export function _String_EqualsPtr(lhs: $.VarRef<string> | null, rhs: $.VarRef<string> | null): boolean {
	if ((lhs != null) && (rhs != null)) {

		let x = $.pointerValue<string>(lhs)
		let y = $.pointerValue<string>(rhs)
		return ($.stringEqual(x, y))
	}
	return (lhs == null) && (rhs == null)
}

export function _ExceptionType_EqualsPtr(lhs: $.VarRef<ExceptionType> | null, rhs: $.VarRef<ExceptionType> | null): boolean {
	if ((lhs != null) && (rhs != null)) {

		let x = $.pointerValue<ExceptionType>(lhs)
		let y = $.pointerValue<ExceptionType>(rhs)
		return ExceptionType_Equals(x, y)
	}
	return (lhs == null) && (rhs == null)
}

export let ThriftModule: thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null = new thriftreflect.ThriftModule({Name: "exception", Package: "go.uber.org/thriftrw/internal/envelope/exception", FilePath: "exception.thrift", SHA1: "88105bcd404d4aee06542af9452f7cf76647ae98", Raw: "enum ExceptionType {\n  UNKNOWN = 0\n  UNKNOWN_METHOD = 1\n  INVALID_MESSAGE_TYPE = 2\n  WRONG_METHOD_NAME = 3\n  BAD_SEQUENCE_ID = 4\n  MISSING_RESULT = 5\n  INTERNAL_ERROR = 6\n  PROTOCOL_ERROR = 7\n  INVALID_TRANSFORM = 8\n  INVALID_PROTOCOL = 9\n  UNSUPPORTED_CLIENT_TYPE = 10\n}\n\nexception TApplicationException {\n  1: optional string message\n  2: optional ExceptionType type\n}\n"})

export function __goscript_set_ThriftModule(__goscriptValue: thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null): void {
	ThriftModule = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (ExceptionType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (ExceptionType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (ExceptionType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (ExceptionType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (ExceptionType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (ExceptionType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ExceptionType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (ExceptionType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "exception.ExceptionType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "exception.ExceptionType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "exception.ExceptionType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptAwait: any
