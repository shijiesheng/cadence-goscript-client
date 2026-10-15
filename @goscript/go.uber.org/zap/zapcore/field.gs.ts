// Generated file based on field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_marshaler from "./marshaler.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "./encoder.gs.ts"
import "./error.gs.ts"
import "./marshaler.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.FieldType", "zapcore.Field"])

export type FieldType = number

export class Field {
	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get Type(): FieldType {
		return this._fields.Type
	}

	public set Type(value: FieldType) {
		this._fields.Type = value
	}

	public get Integer(): bigint {
		return this._fields.Integer
	}

	public set Integer(value: bigint) {
		this._fields.Integer = value
	}

	public get String(): string {
		return this._fields.String
	}

	public set String(value: string) {
		this._fields.String = value
	}

	public get Interface(): any {
		return this._fields.Interface
	}

	public set Interface(value: any) {
		this._fields.Interface = value
	}

	public _fields: {
		Key: string
		Type: FieldType
		Integer: bigint
		String: string
		Interface: any
	}

	constructor(init?: Partial<{Key?: string, Type?: FieldType, Integer?: bigint, String?: string, Interface?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? ("" as string),
			Type: init?.Type ?? (0 as FieldType),
			Integer: init?.Integer ?? (0n as bigint),
			String: init?.String ?? ("" as string),
			Interface: init?.Interface ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Field {
		return new Field(this, true)
	}

	public __goscriptAssign(source: Field): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.Type = values.Type
		target.Integer = values.Integer
		target.String = values.String
		target.Interface = $.assignFieldValue(target.Interface, values.Interface, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async AddTo(enc: __goscript_encoder.ObjectEncoder | null): globalThis.Promise<void> {
		const f = this;
		let err: $.GoError = null! as $.GoError

		switch (f.Type) {
			case 1:
			{
				err = (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddArray(f.Key, $.mustTypeAssert<__goscript_marshaler.ArrayMarshaler | null>(f.Interface, "zapcore.ArrayMarshaler")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 2:
			{
				err = (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddObject(f.Key, $.mustTypeAssert<__goscript_marshaler.ObjectMarshaler | null>(f.Interface, "zapcore.ObjectMarshaler")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 28:
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_marshaler.ObjectMarshaler, null>>($.mustTypeAssert<__goscript_marshaler.ObjectMarshaler | null>(f.Interface, "zapcore.ObjectMarshaler")).MarshalLogObject(enc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 3:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddBinary(f.Key, $.mustTypeAssert<$.Slice<number>>(f.Interface, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 4:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddBool(f.Key, f.Integer == 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 5:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddByteString(f.Key, $.mustTypeAssert<$.Slice<number>>(f.Interface, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 6:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddComplex128(f.Key, $.mustTypeAssert<$.Complex>(f.Interface, /* @__PURE__ */ $.basicType("complex128"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 7:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddComplex64(f.Key, $.complex64($.mustTypeAssert<$.Complex>(f.Interface, /* @__PURE__ */ $.basicType("complex64")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 8:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddDuration(f.Key, $.int64(f.Integer)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 9:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddFloat64(f.Key, math.Float64frombits($.uint64(f.Integer))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 10:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddFloat32(f.Key, math.Float32frombits($.uint(f.Integer, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 11:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddInt64(f.Key, f.Integer), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 12:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddInt32(f.Key, $.int(f.Integer, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 13:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddInt16(f.Key, $.int(f.Integer, 16)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 14:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddInt8(f.Key, $.int(f.Integer, 8)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 15:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddString(f.Key, f.String), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 16:
			{
				if (f.Interface != null) {
					void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddTime(f.Key, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Unix(0n, f.Integer))).In($.mustTypeAssert<time.Location | $.VarRef<time.Location> | null>(f.Interface, /* @__PURE__ */ $.pointerType("time.Location")))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					// Fall back to UTC if location is nil.
					void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddTime(f.Key, $.markAsStructValue($.cloneStructValue(time.Unix(0n, f.Integer)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				break
			}
			case 17:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddTime(f.Key, $.markAsStructValue($.cloneStructValue($.mustTypeAssert<time.Time>(f.Interface, "time.Time")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 18:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddUint64(f.Key, $.uint64(f.Integer)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 19:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddUint32(f.Key, $.uint(f.Integer, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 20:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddUint16(f.Key, $.uint(f.Integer, 16)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 21:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddUint8(f.Key, $.uint(f.Integer, 8)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 22:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddUintptr(f.Key, $.uint(f.Integer, 64)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 23:
			{
				err = (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddReflected(f.Key, f.Interface), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 24:
			{
				void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).OpenNamespace(f.Key), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 25:
			{
				err = await encodeStringer(f.Key, f.Interface, enc)
				break
			}
			case 26:
			{
				err = await __goscript_error.encodeError(f.Key, $.mustTypeAssert<$.GoError>(f.Interface, "error"), enc)
				break
			}
			case 27:
			{
				break
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("unknown field type: %v", $.interfaceValue((f).clone(), "zapcore.Field", "zapcore.Field")))
				break
			}
		}

		if (err != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddString(await fmt.Sprintf("%sError", f.Key), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public Equals(other: Field): boolean {
		const f = this;
		if (f.Type != other.Type) {
			return false
		}
		if (!$.stringEqual(f.Key, other.Key)) {
			return false
		}

		switch (f.Type) {
			case 3:
			case 5:
			{
				return bytes.Equal($.mustTypeAssert<$.Slice<number>>(f.Interface, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.mustTypeAssert<$.Slice<number>>(other.Interface, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
				break
			}
			case 1:
			case 2:
			case 26:
			case 23:
			{
				return reflect.DeepEqual(f.Interface, other.Interface)
				break
			}
			default:
			{
				return $.structEqual(f, other)
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"zapcore.Field",
		() => new Field(),
		() => [$.methodSignature("AddTo", [["enc", "zapcore.ObjectEncoder"]]), $.methodSignature("Equals", [["other", "zapcore.Field"]], [/* @__PURE__ */ $.basicType("bool")])],
		Field,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint8", "zapcore.FieldType"), [1], 16, true), /* @__PURE__ */ $.structField("Integer", /* @__PURE__ */ $.basicType("int64"), [2], 24, true), /* @__PURE__ */ $.structField("String", /* @__PURE__ */ $.basicType("string"), [3], 32, true), /* @__PURE__ */ $.structField("Interface", { kind: $.TypeKind.Interface, methods: [] }, [4], 48, true)]
	)
}

export const UnknownType: FieldType = 0

export const ArrayMarshalerType: FieldType = 1

export const ObjectMarshalerType: FieldType = 2

export const BinaryType: FieldType = 3

export const BoolType: FieldType = 4

export const ByteStringType: FieldType = 5

export const Complex128Type: FieldType = 6

export const Complex64Type: FieldType = 7

export const DurationType: FieldType = 8

export const Float64Type: FieldType = 9

export const Float32Type: FieldType = 10

export const Int64Type: FieldType = 11

export const Int32Type: FieldType = 12

export const Int16Type: FieldType = 13

export const Int8Type: FieldType = 14

export const StringType: FieldType = 15

export const TimeType: FieldType = 16

export const TimeFullType: FieldType = 17

export const Uint64Type: FieldType = 18

export const Uint32Type: FieldType = 19

export const Uint16Type: FieldType = 20

export const Uint8Type: FieldType = 21

export const UintptrType: FieldType = 22

export const ReflectType: FieldType = 23

export const NamespaceType: FieldType = 24

export const StringerType: FieldType = 25

export const ErrorType: FieldType = 26

export const SkipType: FieldType = 27

export const InlineMarshalerType: FieldType = 28

export async function addFields(enc: __goscript_encoder.ObjectEncoder | null, fields: $.Slice<Field>): globalThis.Promise<void> {
	for (let __goscriptRangeTarget0 = fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		await $.markAsStructValue($.cloneStructValue(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as Field))).AddTo(enc)
	}
}

export async function encodeStringer(key: string, stringer: any, enc: __goscript_encoder.ObjectEncoder | null): globalThis.Promise<$.GoError> {
	let retErr: $.GoError = null! as $.GoError
	const __defer = new $.AsyncDisposableStack()
	try {
		// Try to capture panics (from nil references or otherwise) when calling
		// the String() method, similar to https://golang.org/src/fmt/print.go#L540
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			{
				let err = $.recover()
				if (err != null) {
					// If it's a nil pointer, just say "<nil>". The likeliest causes are a
					// Stringer that fails to guard against nil or a nil pointer for a
					// value receiver, and in either case, "<nil>" is a nice result.
					{
						let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(stringer)))
						if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(v)).IsNil()) {
							void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddString(key, "<nil>"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							return
						}
					}

					retErr = fmt.Errorf("PANIC=%v", err)
				}
			}
		})() })

		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<__goscript_encoder.ObjectEncoder, null>) : $.pointerValue<Exclude<__goscript_encoder.ObjectEncoder, null>>(enc)).AddString(key, (__goscriptAwait = $.pointerValue<Exclude<fmt.Stringer, null>>($.mustTypeAssert<fmt.Stringer | null>(stringer, "fmt.Stringer")).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptReturn0: $.GoError = null
		retErr = __goscriptReturn0
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

var __goscriptAwait: any
