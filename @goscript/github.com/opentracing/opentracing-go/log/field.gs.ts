// Generated file based on field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"

$.registerTypePackagePath("github.com/opentracing/opentracing-go/log", ["log.fieldType", "log.Field", "log.LazyLogger", "log.Encoder"])

export type fieldType = number

export type LazyLogger = ((fv: Encoder | null) => void) | null

export type Encoder = {
	EmitBool(key: string, value: boolean): void
	EmitFloat32(key: string, value: number): void
	EmitFloat64(key: string, value: number): void
	EmitInt(key: string, value: number): void
	EmitInt32(key: string, value: number): void
	EmitInt64(key: string, value: bigint): void
	EmitLazyLogger(value: LazyLogger | null): void
	EmitObject(key: string, value: any): void
	EmitString(key: string, value: string): void
	EmitUint32(key: string, value: number): void
	EmitUint64(key: string, value: bigint): void
}

$.registerInterfaceType(
	"log.Encoder",
	null,
	[$.methodSignature("EmitBool", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("EmitFloat32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float32")]]), $.methodSignature("EmitFloat64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("EmitInt", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("EmitInt32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("EmitInt64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("EmitLazyLogger", [["value", ({ kind: $.TypeKind.Function, name: "log.LazyLogger", params: ["log.Encoder"], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("EmitObject", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("EmitString", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("EmitUint32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("EmitUint64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint64")]])]
);

export class Field {
	public get key(): string {
		return this._fields.key
	}

	public set key(value: string) {
		this._fields.key = value
	}

	public get fieldType(): fieldType {
		return this._fields.fieldType
	}

	public set fieldType(value: fieldType) {
		this._fields.fieldType = value
	}

	public get numericVal(): bigint {
		return this._fields.numericVal
	}

	public set numericVal(value: bigint) {
		this._fields.numericVal = value
	}

	public get stringVal(): string {
		return this._fields.stringVal
	}

	public set stringVal(value: string) {
		this._fields.stringVal = value
	}

	public get interfaceVal(): any {
		return this._fields.interfaceVal
	}

	public set interfaceVal(value: any) {
		this._fields.interfaceVal = value
	}

	public _fields: {
		key: string
		fieldType: fieldType
		numericVal: bigint
		stringVal: string
		interfaceVal: any
	}

	constructor(init?: Partial<{key?: string, fieldType?: fieldType, numericVal?: bigint, stringVal?: string, interfaceVal?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? ("" as string),
			fieldType: init?.fieldType ?? (0 as fieldType),
			numericVal: init?.numericVal ?? (0n as bigint),
			stringVal: init?.stringVal ?? ("" as string),
			interfaceVal: init?.interfaceVal ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Field {
		return new Field(this, true)
	}

	public __goscriptAssign(source: Field): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
		target.fieldType = values.fieldType
		target.numericVal = values.numericVal
		target.stringVal = values.stringVal
		target.interfaceVal = $.assignFieldValue(target.interfaceVal, values.interfaceVal, { kind: $.TypeKind.Interface, methods: [] })
	}

	public Key(): string {
		const lf = this;
		return lf.key
	}

	public async Marshal(visitor: Encoder | null): globalThis.Promise<void> {
		const lf = this;
		switch (lf.fieldType) {
			case 0:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitString(lf.key, lf.stringVal), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 1:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitBool(lf.key, lf.numericVal != 0n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 2:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitInt(lf.key, $.int(lf.numericVal)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 3:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitInt32(lf.key, $.int(lf.numericVal, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 5:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitInt64(lf.key, $.int64(lf.numericVal)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 4:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitUint32(lf.key, $.uint(lf.numericVal, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 6:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitUint64(lf.key, $.uint64(lf.numericVal)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 7:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitFloat32(lf.key, math.Float32frombits($.uint(lf.numericVal, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 8:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitFloat64(lf.key, math.Float64frombits($.uint64(lf.numericVal))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 9:
			{
				{
					let [err, ok] = $.typeAssertTuple<$.GoError>(lf.interfaceVal, "error")
					if (ok) {
						void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitString(lf.key, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitString(lf.key, "<nil>"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				break
			}
			case 10:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitObject(lf.key, lf.interfaceVal), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 11:
			{
				void (__goscriptAwait = (visitor !== null && (visitor as any).__isVarRef !== true && (visitor as any).__goValue === undefined ? (visitor as Exclude<Encoder, null>) : $.pointerValue<Exclude<Encoder, null>>(visitor)).EmitLazyLogger($.mustTypeAssert<((fv: Encoder | null) => void) | null>(lf.interfaceVal, ({ kind: $.TypeKind.Function, name: "log.LazyLogger", params: ["log.Encoder"], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 12:
			{
				break
			}
		}
	}

	public async String(): globalThis.Promise<string> {
		const lf = this;
		return fmt.Sprint(lf.key, ":", lf.Value())
	}

	public Value(): any {
		const lf = this;
		switch (lf.fieldType) {
			case 0:
			{
				return lf.stringVal
				break
			}
			case 1:
			{
				return lf.numericVal != 0n
				break
			}
			case 2:
			{
				return $.basicInterfaceValue($.int(lf.numericVal), "int")
				break
			}
			case 3:
			{
				return $.basicInterfaceValue($.int(lf.numericVal, 32), "int32")
				break
			}
			case 5:
			{
				return $.basicInterfaceValue($.int64(lf.numericVal), "int64")
				break
			}
			case 4:
			{
				return $.basicInterfaceValue($.uint(lf.numericVal, 32), "uint32")
				break
			}
			case 6:
			{
				return $.basicInterfaceValue($.uint64(lf.numericVal), "uint64")
				break
			}
			case 7:
			{
				return $.basicInterfaceValue(math.Float32frombits($.uint(lf.numericVal, 32)), "float32")
				break
			}
			case 8:
			{
				return $.basicInterfaceValue(math.Float64frombits($.uint64(lf.numericVal)), "float64")
				break
			}
			case 9:
			case 10:
			case 11:
			{
				return lf.interfaceVal
				break
			}
			case 12:
			{
				return null
				break
			}
			default:
			{
				return null
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"log.Field",
		() => new Field(),
		() => [$.methodSignature("Key", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Marshal", [["visitor", "log.Encoder"]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [], [{ kind: $.TypeKind.Interface, methods: [] }])],
		Field,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/opentracing/opentracing-go/log" }), /* @__PURE__ */ $.structField("fieldType", /* @__PURE__ */ $.basicType("int", "log.fieldType"), [1], 16, false, { pkgPath: "github.com/opentracing/opentracing-go/log" }), /* @__PURE__ */ $.structField("numericVal", /* @__PURE__ */ $.basicType("int64"), [2], 24, false, { pkgPath: "github.com/opentracing/opentracing-go/log" }), /* @__PURE__ */ $.structField("stringVal", /* @__PURE__ */ $.basicType("string"), [3], 32, false, { pkgPath: "github.com/opentracing/opentracing-go/log" }), /* @__PURE__ */ $.structField("interfaceVal", { kind: $.TypeKind.Interface, methods: [] }, [4], 48, false, { pkgPath: "github.com/opentracing/opentracing-go/log" })]
	)
}

export const stringType: fieldType = 0

export const boolType: fieldType = 1

export const intType: fieldType = 2

export const int32Type: fieldType = 3

export const uint32Type: fieldType = 4

export const int64Type: fieldType = 5

export const uint64Type: fieldType = 6

export const float32Type: fieldType = 7

export const float64Type: fieldType = 8

export const errorType: fieldType = 9

export const objectType: fieldType = 10

export const lazyLoggerType: fieldType = 11

export const noopType: fieldType = 12

export function String(key: string, val: string): Field {
	return new Field({key: key, fieldType: 0, stringVal: val}, true)
}

export function Bool(key: string, val: boolean): Field {
	let numericVal: bigint = 0n
	if (val) {
		numericVal = 1n
	}
	return new Field({key: key, fieldType: 1, numericVal: numericVal}, true)
}

export function Int(key: string, val: number): Field {
	return new Field({key: key, fieldType: 2, numericVal: $.int64(val)}, true)
}

export function Int32(key: string, val: number): Field {
	return new Field({key: key, fieldType: 3, numericVal: $.int64(val)}, true)
}

export function Int64(key: string, val: bigint): Field {
	return new Field({key: key, fieldType: 5, numericVal: val}, true)
}

export function Uint32(key: string, val: number): Field {
	return new Field({key: key, fieldType: 4, numericVal: $.int64(val)}, true)
}

export function Uint64(key: string, val: bigint): Field {
	return new Field({key: key, fieldType: 6, numericVal: $.int64(val)}, true)
}

export function Float32(key: string, val: number): Field {
	return (() => { const __goscriptLiteralField0 = $.int64(math.Float32bits(val)); return new Field({key: key, fieldType: 7, numericVal: __goscriptLiteralField0}, true) })()
}

export function Float64(key: string, val: number): Field {
	return (() => { const __goscriptLiteralField1 = $.int64(math.Float64bits(val)); return new Field({key: key, fieldType: 8, numericVal: __goscriptLiteralField1}, true) })()
}

export function Error(err: $.GoError): Field {
	return new Field({key: "error.object", fieldType: 9, interfaceVal: (err as any)}, true)
}

export function Object(key: string, obj: any): Field {
	return new Field({key: key, fieldType: 10, interfaceVal: obj}, true)
}

export function Event(val: string): Field {
	return String("event", val)
}

export function Message(val: string): Field {
	return String("message", val)
}

export function Lazy(ll: LazyLogger | null): Field {
	return new Field({fieldType: 11, interfaceVal: $.interfaceValue(ll, "log.LazyLogger", ({ kind: $.TypeKind.Function, name: "log.LazyLogger", params: ["log.Encoder"], results: [] } as $.FunctionTypeInfo))}, true)
}

export function Noop(): Field {
	return new Field({fieldType: 12}, true)
}

var __goscriptAwait: any
