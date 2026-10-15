// Generated file based on encoding.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as thrift from "@goscript/github.com/apache/thrift/lib/go/thrift/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/github.com/apache/thrift/lib/go/thrift/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.encoding", "internal.jsonEncoding", "internal.thriftEncoding"])

export type encoding = {
	Marshal(_p0: $.Slice<any>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	Unmarshal(_p0: $.Slice<number>, _p1: $.Slice<any>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.encoding",
	null,
	[$.methodSignature("Marshal", [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Unmarshal", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], ["error"])]
);

export class jsonEncoding {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): jsonEncoding {
		return new jsonEncoding(this, true)
	}

	public __goscriptAssign(source: jsonEncoding): void {
	}

	public async Marshal(objs: $.Slice<any>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const g = this;
		let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		let enc: json.Encoder | $.VarRef<json.Encoder> | null = json.NewEncoder($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
		for (let __goscriptRangeTarget0 = objs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let obj = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any)
			{
				let err = await json.Encoder.prototype.Encode.call($.pointerValue<json.Encoder>(enc), obj)
				if (err != null) {
					if ($.comparableEqual(err, io.EOF)) {
						return [null, fmt.Errorf("missing argument at index %d of type %T", $.basicInterfaceValue(i, "int"), obj)]
					}
					return [null, fmt.Errorf("unable to encode argument: %d, %v, with json error: %v", $.basicInterfaceValue(i, "int"), (reflect.TypeOf(obj) as any), (err as any))]
				}
			}
		}
		return [buf.value.Bytes(), null]
	}

	public async Unmarshal(data: $.Slice<number>, objs: $.Slice<any>): globalThis.Promise<$.GoError> {
		const g = this;
		let dec: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewBuffer(data), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
		json.Decoder.prototype.UseNumber.call($.pointerValue<json.Decoder>(dec))
		for (let __goscriptRangeTarget1 = objs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let obj = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as any)
			{
				let err = await json.Decoder.prototype.Decode.call($.pointerValue<json.Decoder>(dec), obj)
				if (err != null) {
					return fmt.Errorf("unable to decode argument: %d, %v, with json error: %v", $.basicInterfaceValue(i, "int"), (reflect.TypeOf(obj) as any), (err as any))
				}
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.jsonEncoding",
		() => new jsonEncoding(),
		() => [$.methodSignature("Marshal", [["objs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["objs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"])],
		jsonEncoding,
		() => []
	)
}

export class thriftEncoding {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thriftEncoding {
		return new thriftEncoding(this, true)
	}

	public __goscriptAssign(source: thriftEncoding): void {
	}

	public async Marshal(objs: $.Slice<any>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const g = this;
		let tlist: $.Slice<thrift.TStruct | null> = null! as $.Slice<thrift.TStruct | null>
		for (let __goscriptSliceWindow0 = $.sliceRange(objs), i = 0; i < __goscriptSliceWindow0.length; i++) {
			if (!await common.IsThriftType(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any))) {
				return [null, fmt.Errorf("pointer to thrift.TStruct type is required for %v argument", $.basicInterfaceValue(i + 1, "int"))]
			}
			let t = $.mustTypeAssert<thrift.TStruct | null>($.markAsStructValue($.cloneStructValue(reflect.ValueOf(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any)))).Interface(), "thrift.TStruct")
			tlist = $.appendOne(tlist, t, $.appendZeros.nil)
		}
		return common.TListSerialize(tlist)
	}

	public async Unmarshal(data: $.Slice<number>, objs: $.Slice<any>): globalThis.Promise<$.GoError> {
		const g = this;
		let tlist: $.Slice<thrift.TStruct | null> = null! as $.Slice<thrift.TStruct | null>
		for (let __goscriptSliceWindow1 = $.sliceRange(objs), i = 0; i < __goscriptSliceWindow1.length; i++) {
			let rVal = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as any))))
			if (($.markAsStructValue($.cloneStructValue(rVal)).Kind() != 22) || !await common.IsThriftType($.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rVal))))).Interface())) {
				return fmt.Errorf("pointer to pointer thrift.TStruct type is required for %v argument", $.basicInterfaceValue(i + 1, "int"))
			}
			let t = $.mustTypeAssert<thrift.TStruct | null>($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rVal)).Elem())).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface(), "thrift.TStruct")
			tlist = $.appendOne(tlist, t, $.appendZeros.nil)
		}

		{
			let err = await common.TListDeserialize(tlist, data)
			if (err != null) {
				return err
			}
		}

		for (let __goscriptSliceWindow2 = $.sliceRange(objs), __goscriptSliceWindow3 = $.sliceRange(tlist), i = 0; i < __goscriptSliceWindow3.length; i++) {
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as any)))).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf((((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as thrift.TStruct | null) as any)))))
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.thriftEncoding",
		() => new thriftEncoding(),
		() => [$.methodSignature("Marshal", [["objs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["objs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"])],
		thriftEncoding,
		() => []
	)
}

var __goscriptAwait: any
