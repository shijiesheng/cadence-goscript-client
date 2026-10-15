// Generated file based on envelope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_lazy_list from "./lazy_list.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/fmt/index.js"
import "./type.gs.ts"
import "./type_string.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/wire", ["wire.EnvelopeType", "wire.Envelope"])

export type EnvelopeType = number

$.registerNamedValueType(
	"wire.EnvelopeType",
	{String: (receiver: any, ...args: any[]) => (EnvelopeType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*wire.EnvelopeType",
	{String: (receiver: any, ...args: any[]) => (EnvelopeType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Envelope {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Type(): EnvelopeType {
		return this._fields.Type
	}

	public set Type(value: EnvelopeType) {
		this._fields.Type = value
	}

	public get SeqID(): number {
		return this._fields.SeqID
	}

	public set SeqID(value: number) {
		this._fields.SeqID = value
	}

	public get Value(): __goscript_value.Value {
		return this._fields.Value
	}

	public set Value(value: __goscript_value.Value) {
		this._fields.Value = value
	}

	public _fields: {
		Name: string
		Type: EnvelopeType
		SeqID: number
		Value: __goscript_value.Value
	}

	constructor(init?: Partial<{Name?: string, Type?: EnvelopeType, SeqID?: number, Value?: __goscript_value.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Type: init?.Type ?? (0 as EnvelopeType),
			SeqID: init?.SeqID ?? (0 as number),
			Value: init?.Value ? init.Value.clone() : new __goscript_value.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Envelope {
		return new Envelope(this, true)
	}

	public __goscriptAssign(source: Envelope): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Type = values.Type
		target.SeqID = values.SeqID
		$.assignStruct(target.Value, values.Value)
	}

	static __typeInfo = $.registerStructType(
		"wire.Envelope",
		() => new Envelope(),
		() => [],
		Envelope,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), [1], 16, true), /* @__PURE__ */ $.structField("SeqID", /* @__PURE__ */ $.basicType("int32"), [2], 20, true), /* @__PURE__ */ $.structField("Value", "wire.Value", [3], 24, true)]
	)
}

export const Call: EnvelopeType = 1

export const Reply: EnvelopeType = 2

export const Exception: EnvelopeType = 3

export const OneWay: EnvelopeType = 4

export async function EnvelopeType_String(et: EnvelopeType): globalThis.Promise<string> {
	switch (et) {
		case 1:
		{
			return "Call"
			break
		}
		case 2:
		{
			return "Reply"
			break
		}
		case 3:
		{
			return "Exception"
			break
		}
		case 4:
		{
			return "OneWay"
			break
		}
		default:
		{
			return fmt.Sprintf("EnvelopeType(%v)", $.basicInterfaceValue($.int(et, 8), "int8"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
