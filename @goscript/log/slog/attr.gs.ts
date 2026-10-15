// Generated file based on attr.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_record from "./record.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/time/index.js"
import "./record.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.Attr"])

export class Attr {
	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get Value(): __goscript_value.Value {
		return this._fields.Value
	}

	public set Value(value: __goscript_value.Value) {
		this._fields.Value = value
	}

	public _fields: {
		Key: string
		Value: __goscript_value.Value
	}

	constructor(init?: Partial<{Key?: string, Value?: __goscript_value.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? ("" as string),
			Value: init?.Value ? init.Value.clone() : new __goscript_value.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Attr {
		return new Attr(this, true)
	}

	public __goscriptAssign(source: Attr): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		$.assignStruct(target.Value, values.Value)
	}

	public async Equal(b: Attr): globalThis.Promise<boolean> {
		const a = this;
		return ($.stringEqual(a.Key, b.Key)) && await a.Value.Equal(b.Value)
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return $.concatString(($.concatString(a.Key, "=")), await a.Value.String())
	}

	public isEmpty(): boolean {
		const a = this;
		return (($.stringEqual(a.Key, "")) && (a.Value.num == 0n)) && (a.Value._any == null)
	}

	static __typeInfo = $.registerStructType(
		"slog.Attr",
		() => new Attr(),
		() => [$.methodSignature("Equal", [["b", "slog.Attr"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("isEmpty", [], [/* @__PURE__ */ $.basicType("bool")])],
		Attr,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Value", "slog.Value", [1], 16, true)]
	)
}

export function String(key: string, value: string): Attr {
	return (() => { const __goscriptLiteralField0 = __goscript_value.StringValue(value); return new Attr({Key: key, Value: __goscriptLiteralField0}, true) })()
}

export function Int64(key: string, value: bigint): Attr {
	return (() => { const __goscriptLiteralField1 = __goscript_value.Int64Value(value); return new Attr({Key: key, Value: __goscriptLiteralField1}, true) })()
}

export function Int(key: string, value: number): Attr {
	return Int64(key, $.int64(value))
}

export function Uint64(key: string, v: bigint): Attr {
	return (() => { const __goscriptLiteralField2 = __goscript_value.Uint64Value(v); return new Attr({Key: key, Value: __goscriptLiteralField2}, true) })()
}

export function Float64(key: string, v: number): Attr {
	return (() => { const __goscriptLiteralField3 = __goscript_value.Float64Value(v); return new Attr({Key: key, Value: __goscriptLiteralField3}, true) })()
}

export function Bool(key: string, v: boolean): Attr {
	return (() => { const __goscriptLiteralField4 = __goscript_value.BoolValue(v); return new Attr({Key: key, Value: __goscriptLiteralField4}, true) })()
}

export function Time(key: string, v: time.Time): Attr {
	return (() => { const __goscriptLiteralField5 = __goscript_value.TimeValue(v); return new Attr({Key: key, Value: __goscriptLiteralField5}, true) })()
}

export function Duration(key: string, v: time.Duration): Attr {
	return (() => { const __goscriptLiteralField6 = __goscript_value.DurationValue(v); return new Attr({Key: key, Value: __goscriptLiteralField6}, true) })()
}

export function Group(key: string, args: $.Slice<any>): Attr {
	return (() => { const __goscriptLiteralField7 = __goscript_value.GroupValue(argsToAttrSlice(args)); return new Attr({Key: key, Value: __goscriptLiteralField7}, true) })()
}

export function GroupAttrs(key: string, attrs: $.Slice<Attr>): Attr {
	return (() => { const __goscriptLiteralField8 = __goscript_value.GroupValue(attrs); return new Attr({Key: key, Value: __goscriptLiteralField8}, true) })()
}

export function argsToAttrSlice(args: $.Slice<any>): $.Slice<Attr> {
	let attr: Attr = new Attr(undefined, true)
	let attrs: $.Slice<Attr> = null! as $.Slice<Attr>
	while ($.sliceLen(args) > 0) {
		let __goscriptTuple0: any = __goscript_record.argsToAttr(args)
		attr = $.assignStruct(attr, __goscriptTuple0[0])
		args = __goscriptTuple0[1]
		attrs = $.appendOne(attrs, (attr).clone())
	}
	return attrs
}

export function Any(key: string, value: any): Attr {
	return (() => { const __goscriptLiteralField9 = __goscript_value.AnyValue(value); return new Attr({Key: key, Value: __goscriptLiteralField9}, true) })()
}
