// Generated file based on encoded.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import * as __goscript_encoding from "./encoding.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "./encoding.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.Value", "internal.Values", "internal.DataConverter", "internal.defaultDataConverter"])

export type Value = {
	Get(valuePtr: any): $.GoError | globalThis.Promise<$.GoError>
	HasValue(): boolean
}

$.registerInterfaceType(
	"internal.Value",
	null,
	[$.methodSignature("Get", [["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("HasValue", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type Values = {
	Get(valuePtr: $.Slice<any>): $.GoError | globalThis.Promise<$.GoError>
	HasValues(): boolean
}

$.registerInterfaceType(
	"internal.Values",
	null,
	[$.methodSignature("Get", [["valuePtr", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("HasValues", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type DataConverter = {
	FromData(input: $.Slice<number>, valuePtr: $.Slice<any>): $.GoError | globalThis.Promise<$.GoError>
	ToData(value: $.Slice<any>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"internal.DataConverter",
	null,
	[$.methodSignature("FromData", [["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["valuePtr", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("ToData", [["value", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);

export class defaultDataConverter {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): defaultDataConverter {
		return new defaultDataConverter(this, true)
	}

	public __goscriptAssign(source: defaultDataConverter): void {
	}

	public async FromData(data: $.Slice<number>, to: $.Slice<any>): globalThis.Promise<$.GoError> {
		const dc: defaultDataConverter | $.VarRef<defaultDataConverter> | null = this;
		if (($.sliceLen(to) == 1) && util.IsTypeByteSlice(reflect.TypeOf($.arrayIndex(to!, 0)))) {
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.arrayIndex(to!, 0)))).Elem())).SetBytes(data)
			return null
		}

		let encoder: __goscript_encoding.encoding | null = null! as __goscript_encoding.encoding | null
		if (await common.IsUseThriftDecoding(to)) {
			encoder = $.interfaceValue<__goscript_encoding.encoding | null>(new __goscript_encoding.thriftEncoding(), "*internal.thriftEncoding", /* @__PURE__ */ $.pointerType("internal.thriftEncoding"))
		} else {
			encoder = $.interfaceValue<__goscript_encoding.encoding | null>(new __goscript_encoding.jsonEncoding(), "*internal.jsonEncoding", /* @__PURE__ */ $.pointerType("internal.jsonEncoding"))
		}

		return (encoder !== null && (encoder as any).__isVarRef !== true && (encoder as any).__goValue === undefined ? (encoder as Exclude<__goscript_encoding.encoding, null>) : $.pointerValue<Exclude<__goscript_encoding.encoding, null>>(encoder)).Unmarshal(data, to)
	}

	public async ToData(r: $.Slice<any>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const dc: defaultDataConverter | $.VarRef<defaultDataConverter> | null = this;
		if (($.sliceLen(r) == 1) && util.IsTypeByteSlice(reflect.TypeOf($.arrayIndex(r!, 0)))) {
			return [$.mustTypeAssert<$.Slice<number>>($.arrayIndex(r!, 0), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), null]
		}

		let encoder: __goscript_encoding.encoding | null = null! as __goscript_encoding.encoding | null
		if (await common.IsUseThriftEncoding(r)) {
			encoder = $.interfaceValue<__goscript_encoding.encoding | null>(new __goscript_encoding.thriftEncoding(), "*internal.thriftEncoding", /* @__PURE__ */ $.pointerType("internal.thriftEncoding"))
		} else {
			encoder = $.interfaceValue<__goscript_encoding.encoding | null>(new __goscript_encoding.jsonEncoding(), "*internal.jsonEncoding", /* @__PURE__ */ $.pointerType("internal.jsonEncoding"))
		}

		let __goscriptTuple0: any = await (encoder !== null && (encoder as any).__isVarRef !== true && (encoder as any).__goValue === undefined ? (encoder as Exclude<__goscript_encoding.encoding, null>) : $.pointerValue<Exclude<__goscript_encoding.encoding, null>>(encoder)).Marshal(r)
		let data: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [data, null]
	}

	static __typeInfo = $.registerStructType(
		"internal.defaultDataConverter",
		() => new defaultDataConverter(),
		() => [$.methodSignature("FromData", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["to", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("ToData", [["r", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		defaultDataConverter,
		() => []
	)
}

export let defaultJSONDataConverter: defaultDataConverter | $.VarRef<defaultDataConverter> | null = new defaultDataConverter()

export function __goscript_set_defaultJSONDataConverter(__goscriptValue: defaultDataConverter | $.VarRef<defaultDataConverter> | null): void {
	defaultJSONDataConverter = __goscriptValue
}

export let DefaultDataConverter: DataConverter | null = getDefaultDataConverter()

export function __goscript_set_DefaultDataConverter(__goscriptValue: DataConverter | null): void {
	DefaultDataConverter = __goscriptValue
}

export function getDefaultDataConverter(): DataConverter | null {
	return $.interfaceValue<DataConverter | null>(defaultJSONDataConverter, "*internal.defaultDataConverter", /* @__PURE__ */ $.pointerType("internal.defaultDataConverter"))
}

var __goscriptAwait: any
