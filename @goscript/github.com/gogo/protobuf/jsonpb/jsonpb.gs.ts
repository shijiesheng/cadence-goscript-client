// Generated file based on jsonpb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as jsontext from "@goscript/encoding/json/jsontext/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/encoding/json/jsontext/index.js"

$.registerTypePackagePath("github.com/gogo/protobuf/jsonpb", ["jsonpb.Marshaler", "jsonpb.AnyResolver", "jsonpb.JSONPBMarshaler", "jsonpb.JSONPBUnmarshaler", "jsonpb.int32Slice", "jsonpb.isWkt", "jsonpb.Unmarshaler", "jsonpb.fieldNames", "jsonpb.errWriter", "jsonpb.mapKeys"])

export type AnyResolver = {
	Resolve(typeUrl: string): [proto.Message | null, $.GoError]
}

$.registerInterfaceType(
	"jsonpb.AnyResolver",
	null,
	[$.methodSignature("Resolve", [["typeUrl", /* @__PURE__ */ $.basicType("string")]], ["proto.Message", "error"])]
);

export type JSONPBMarshaler = {
	MarshalJSONPB(_p0: Marshaler | $.VarRef<Marshaler> | null): [$.Slice<number>, $.GoError]
}

$.registerInterfaceType(
	"jsonpb.JSONPBMarshaler",
	null,
	[$.methodSignature("MarshalJSONPB", [/* @__PURE__ */ $.pointerType("jsonpb.Marshaler")], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);

export type JSONPBUnmarshaler = {
	UnmarshalJSONPB(_p0: Unmarshaler | $.VarRef<Unmarshaler> | null, _p1: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"jsonpb.JSONPBUnmarshaler",
	null,
	[$.methodSignature("UnmarshalJSONPB", [/* @__PURE__ */ $.pointerType("jsonpb.Unmarshaler"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["error"])]
);

export type int32Slice = $.Slice<number>

$.registerNamedType("jsonpb.int32Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")));

$.registerNamedValueType(
	"jsonpb.int32Slice",
	{Len: (receiver: any, ...args: any[]) => (int32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*jsonpb.int32Slice",
	{Len: (receiver: any, ...args: any[]) => (int32Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int32Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int32Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type isWkt = {
	XXX_WellKnownType(): string
}

$.registerInterfaceType(
	"jsonpb.isWkt",
	null,
	[$.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type mapKeys = $.Slice<reflect.Value>

$.registerNamedType("jsonpb.mapKeys", /* @__PURE__ */ $.sliceType("reflect.Value"));

$.registerNamedValueType(
	"jsonpb.mapKeys",
	{Len: (receiver: any, ...args: any[]) => (mapKeys_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (mapKeys_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (mapKeys_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*jsonpb.mapKeys",
	{Len: (receiver: any, ...args: any[]) => (mapKeys_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (mapKeys_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (mapKeys_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class Marshaler {
	// Whether to render enum values as integers, as opposed to string values.
	public get EnumsAsInts(): boolean {
		return this._fields.EnumsAsInts
	}

	public set EnumsAsInts(value: boolean) {
		this._fields.EnumsAsInts = value
	}

	// Whether to render fields with zero values.
	public get EmitDefaults(): boolean {
		return this._fields.EmitDefaults
	}

	public set EmitDefaults(value: boolean) {
		this._fields.EmitDefaults = value
	}

	// A string to indent each level by. The presence of this field will
	// also cause a space to appear between the field separator and
	// value, and for newlines to be appear between fields and array
	// elements.
	public get Indent(): string {
		return this._fields.Indent
	}

	public set Indent(value: string) {
		this._fields.Indent = value
	}

	// Whether to use the original (.proto) name for fields.
	public get OrigName(): boolean {
		return this._fields.OrigName
	}

	public set OrigName(value: boolean) {
		this._fields.OrigName = value
	}

	// A custom URL resolver to use when marshaling Any messages to JSON.
	// If unset, the default resolution strategy is to extract the
	// fully-qualified type name from the type URL and pass that to
	// proto.MessageType(string).
	public get AnyResolver(): AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		EnumsAsInts: boolean
		EmitDefaults: boolean
		Indent: string
		OrigName: boolean
		AnyResolver: AnyResolver | null
	}

	constructor(init?: Partial<{EnumsAsInts?: boolean, EmitDefaults?: boolean, Indent?: string, OrigName?: boolean, AnyResolver?: AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			EnumsAsInts: init?.EnumsAsInts ?? (false as boolean),
			EmitDefaults: init?.EmitDefaults ?? (false as boolean),
			Indent: init?.Indent ?? ("" as string),
			OrigName: init?.OrigName ?? (false as boolean),
			AnyResolver: init?.AnyResolver ?? (null! as AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Marshaler {
		return new Marshaler(this, true)
	}

	public __goscriptAssign(source: Marshaler): void {
		const target = this._fields
		const values = source._fields
		target.EnumsAsInts = values.EnumsAsInts
		target.EmitDefaults = values.EmitDefaults
		target.Indent = values.Indent
		target.OrigName = values.OrigName
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	public async Marshal(out: io.Writer | null, pb: proto.Message | null): globalThis.Promise<$.GoError> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((pb as any))))
		if ((pb == null) || (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(v)).IsNil())) {
			return errors.New("Marshal called with nil")
		}
		// Check for unset required fields first.
		{
			let err = await checkRequiredFields(pb)
			if (err != null) {
				return err
			}
		}
		let writer: errWriter | $.VarRef<errWriter> | null = new errWriter({writer: out})
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalObject(writer, pb, "", "") : Marshaler.prototype.marshalObject.call(m, writer, pb, "", ""))
	}

	public async MarshalToString(pb: proto.Message | null): globalThis.Promise<[string, $.GoError]> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		{
			let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).Marshal($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), pb) : Marshaler.prototype.Marshal.call(m, $.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), pb))
			if (err != null) {
				return ["", err]
			}
		}
		return [buf.value.String(), null]
	}

	public async marshalAny(out: errWriter | $.VarRef<errWriter> | null, _any: proto.Message | null, indent: string): globalThis.Promise<$.GoError> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		const m$: Marshaler = m == null ? $.pointerTarget<Marshaler>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Marshaler>(m)
		// "If the Any contains a value that has a special JSON mapping,
		//  it will be converted as follows: {"@type": xxx, "value": yyy}.
		//  Otherwise, the value will be converted into a JSON object,
		//  and the "@type" field will be inserted to indicate the actual data type."
		let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((_any as any)))).Elem()))
		let turl = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(0))).String()
		let val: $.Slice<number> = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(1))).Bytes()

		let msg: proto.Message | null = null! as proto.Message | null
		let err: $.GoError = null! as $.GoError
		if ((m$ as Marshaler).AnyResolver != null) {
			let __goscriptTuple0: any = await $.pointerValue<Exclude<AnyResolver, null>>((m$ as Marshaler).AnyResolver).Resolve(turl)
			msg = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
		} else {
			let __goscriptTuple1: any = await defaultResolveAny(turl)
			msg = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
		}
		if (err != null) {
			return err
		}

		{
			let __goscriptShadow0 = await proto.Unmarshal(val, msg)
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}

		{
			let [, ok] = $.typeAssertTuple<isWkt | null>(msg, "jsonpb.isWkt")
			if (ok) {
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("{") : errWriter.prototype.write.call(out, "{"))
				if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
				}
				{
					let __goscriptShadow1 = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalTypeURL(out, indent, turl) : Marshaler.prototype.marshalTypeURL.call(m, out, indent, turl))
					if (__goscriptShadow1 != null) {
						return __goscriptShadow1
					}
				}
				await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).writeSep(out) : Marshaler.prototype.writeSep.call(m, out))
				if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"value\": ") : errWriter.prototype.write.call(out, "\"value\": "))
				} else {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"value\":") : errWriter.prototype.write.call(out, "\"value\":"))
				}
				{
					let __goscriptShadow2 = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalObject(out, msg, $.concatString(indent, (m$ as Marshaler).Indent), "") : Marshaler.prototype.marshalObject.call(m, out, msg, $.concatString(indent, (m$ as Marshaler).Indent), ""))
					if (__goscriptShadow2 != null) {
						return __goscriptShadow2
					}
				}
				if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
				}
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("}") : errWriter.prototype.write.call(out, "}"))
				return $.pointerValue<errWriter>(out).err
			}
		}

		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalObject(out, msg, indent, turl) : Marshaler.prototype.marshalObject.call(m, out, msg, indent, turl))
	}

	public async marshalField(out: errWriter | $.VarRef<errWriter> | null, prop: proto.Properties | $.VarRef<proto.Properties> | null, v: reflect.Value, indent: string): globalThis.Promise<$.GoError> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		const m$: Marshaler = m == null ? $.pointerTarget<Marshaler>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Marshaler>(m)
		if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
		}
		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"") : errWriter.prototype.write.call(out, "\""))
		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write($.pointerValue<proto.Properties>(prop).JSONName) : errWriter.prototype.write.call(out, $.pointerValue<proto.Properties>(prop).JSONName))
		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\":") : errWriter.prototype.write.call(out, "\":"))
		if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(" ") : errWriter.prototype.write.call(out, " "))
		}
		{
			let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalValue(out, prop, $.markAsStructValue($.cloneStructValue(v)), indent) : Marshaler.prototype.marshalValue.call(m, out, prop, $.markAsStructValue($.cloneStructValue(v)), indent))
			if (err != null) {
				return err
			}
		}
		return null
	}

	public async marshalObject(out: errWriter | $.VarRef<errWriter> | null, v: proto.Message | null, indent: string, typeURL: string): globalThis.Promise<$.GoError> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		const m$: Marshaler = m == null ? $.pointerTarget<Marshaler>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Marshaler>(m)
		const out$: errWriter = out == null ? $.pointerTarget<errWriter>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<errWriter>(out)
		{
			let [jsm, ok] = $.typeAssertTuple<JSONPBMarshaler | null>(v, "jsonpb.JSONPBMarshaler")
			if (ok) {
				let __goscriptTuple2: any = await (jsm !== null && (jsm as any).__isVarRef !== true && (jsm as any).__goValue === undefined ? (jsm as Exclude<JSONPBMarshaler, null>) : $.pointerValue<Exclude<JSONPBMarshaler, null>>(jsm)).MarshalJSONPB(m)
				let b: $.Slice<number> = __goscriptTuple2[0]
				let err = __goscriptTuple2[1]
				if (err != null) {
					return err
				}
				if (!$.stringEqual(typeURL, "")) {
					// we are marshaling this object to an Any type
					let js: $.VarRef<globalThis.Map<string, $.VarRef<jsontext.Value> | null> | null> = $.varRef(null! as globalThis.Map<string, $.VarRef<jsontext.Value> | null> | null)
					{
						err = await json.Unmarshal(b, $.interfaceValue(js, "*map[string]*jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"))))))
						if (err != null) {
							return fmt.Errorf("type %T produced invalid JSON: %v", (v as any), (err as any))
						}
					}
					let __goscriptTuple3: any = await json.Marshal(typeURL)
					let turl: $.VarRef<$.Slice<number>> = $.varRef(__goscriptTuple3[0])
					let __goscriptShadow3 = __goscriptTuple3[1]
					if (__goscriptShadow3 != null) {
						return fmt.Errorf("failed to marshal type URL %q to JSON: %v", typeURL, (__goscriptShadow3 as any))
					}
					$.mapSet(js.value, "@type", turl)
					if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
						let __goscriptTuple4: any = await json.MarshalIndent($.interfaceValue(js.value, "map[string]*jsontext.Value", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))), indent, (m$ as Marshaler).Indent)
						b = __goscriptTuple4[0]
						__goscriptShadow3 = __goscriptTuple4[1]
					} else {
						let __goscriptTuple5: any = await json.Marshal($.interfaceValue(js.value, "map[string]*jsontext.Value", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
						b = __goscriptTuple5[0]
						__goscriptShadow3 = __goscriptTuple5[1]
					}
					if (__goscriptShadow3 != null) {
						return __goscriptShadow3
					}
				}

				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write($.bytesToString(b)) : errWriter.prototype.write.call(out, $.bytesToString(b)))
				return (out$ as errWriter).err
			}
		}

		let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((v as any)))).Elem()))

		// Handle well-known types.
		{
			let [wkt, ok] = $.typeAssertTuple<isWkt | null>(v, "jsonpb.isWkt")
			if (ok) {
				switch ((__goscriptAwait = (wkt !== null && (wkt as any).__isVarRef !== true && (wkt as any).__goValue === undefined ? (wkt as Exclude<isWkt, null>) : $.pointerValue<Exclude<isWkt, null>>(wkt)).XXX_WellKnownType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					case "DoubleValue":
					case "FloatValue":
					case "Int64Value":
					case "UInt64Value":
					case "Int32Value":
					case "UInt32Value":
					case "BoolValue":
					case "StringValue":
					case "BytesValue":
					{
						let sprop: proto.StructProperties | $.VarRef<proto.StructProperties> | null = await proto.GetProperties($.markAsStructValue($.cloneStructValue(s)).Type())
						return Marshaler.prototype.marshalValue.call(m, out, $.arrayIndex($.pointerValue<proto.StructProperties>(sprop).Prop!, 0), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Field(0))), indent)
						break
					}
					case "Any":
					{
						return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalAny(out, v, indent) : Marshaler.prototype.marshalAny.call(m, out, v, indent))
						break
					}
					case "Duration":
					{
						let __goscriptShadow4 = s
						let __goscriptShadow5 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(__goscriptShadow4)).Field(0))).Int()
						let ns = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(__goscriptShadow4)).Field(1))).Int()
						if ((__goscriptShadow5 < -315576000000n) || (__goscriptShadow5 > 315576000000n)) {
							return fmt.Errorf("seconds out of range %v", $.basicInterfaceValue(__goscriptShadow5, "int64"))
						}
						if ((ns <= -1000000000n) || (ns >= 1000000000n)) {
							return fmt.Errorf("ns out of range (%v, %v)", $.basicInterfaceValue(-1000000000n, "int64"), $.basicInterfaceValue(1000000000n, "int64"))
						}
						if (((__goscriptShadow5 > 0n) && (ns < 0n)) || ((__goscriptShadow5 < 0n) && (ns > 0n))) {
							return errors.New("signs of seconds and nanos do not match")
						}
						// Generated output always contains 0, 3, 6, or 9 fractional digits,
						// depending on required precision, followed by the suffix "s".
						let f = "%d.%09d"
						if (ns < 0n) {
							ns = -ns
							if (__goscriptShadow5 == 0n) {
								f = "-%d.%09d"
							}
						}
						let x = await fmt.Sprintf(f, $.basicInterfaceValue(__goscriptShadow5, "int64"), $.basicInterfaceValue(ns, "int64"))
						x = strings.TrimSuffix(x, "000")
						x = strings.TrimSuffix(x, "000")
						x = strings.TrimSuffix(x, ".000")
						await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"") : errWriter.prototype.write.call(out, "\""))
						await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(x) : errWriter.prototype.write.call(out, x))
						await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("s\"") : errWriter.prototype.write.call(out, "s\""))
						return (out$ as errWriter).err
						break
					}
					case "Struct":
					case "ListValue":
					{
						return Marshaler.prototype.marshalValue.call(m, out, new proto.Properties(), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Field(0))), indent)
						break
					}
					case "Timestamp":
					{
						let __goscriptShadow6 = s
						let __goscriptShadow7 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(__goscriptShadow6)).Field(0))).Int()
						let ns = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(__goscriptShadow6)).Field(1))).Int()
						if ((ns < 0n) || (ns >= 1000000000n)) {
							return fmt.Errorf("ns out of range [0, %v)", $.basicInterfaceValue(1000000000n, "int64"))
						}
						let t = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Unix(__goscriptShadow7, ns))).UTC()))
						// time.RFC3339Nano isn't exactly right (we need to get 3/6/9 fractional digits).
						let x = $.markAsStructValue($.cloneStructValue(t)).Format("2006-01-02T15:04:05.000000000")
						x = strings.TrimSuffix(x, "000")
						x = strings.TrimSuffix(x, "000")
						x = strings.TrimSuffix(x, ".000")
						await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"") : errWriter.prototype.write.call(out, "\""))
						await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(x) : errWriter.prototype.write.call(out, x))
						await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("Z\"") : errWriter.prototype.write.call(out, "Z\""))
						return (out$ as errWriter).err
						break
					}
					case "Value":
					{
						let kind = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Field(0)))
						if ($.markAsStructValue($.cloneStructValue(kind)).IsNil()) {
							// "absence of any variant indicates an error"
							return errors.New("nil Value")
						}
						// oneof -> *T -> T -> T.F
						let x = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(kind)).Elem())).Elem())).Field(0)))
						// TODO: pass the correct Properties if needed.
						return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalValue(out, new proto.Properties(), $.markAsStructValue($.cloneStructValue(x)), indent) : Marshaler.prototype.marshalValue.call(m, out, new proto.Properties(), $.markAsStructValue($.cloneStructValue(x)), indent))
						break
					}
				}
			}
		}

		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("{") : errWriter.prototype.write.call(out, "{"))
		if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
		}

		let firstField = true

		if (!$.stringEqual(typeURL, "")) {
			{
				let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalTypeURL(out, indent, typeURL) : Marshaler.prototype.marshalTypeURL.call(m, out, indent, typeURL))
				if (err != null) {
					return err
				}
			}
			firstField = false
		}

		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(s)).NumField(); i++) {
			let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(s)).Field(i)))
			let valueField = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(s)).Type()).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
			if (strings.HasPrefix(valueField.Name, "XXX_")) {
				continue
			}

			//this is not a protobuf field
			if (($.stringEqual(reflect.StructTag_Get(valueField.Tag, "protobuf"), "")) && ($.stringEqual(reflect.StructTag_Get(valueField.Tag, "protobuf_oneof"), ""))) {
				continue
			}

			// IsNil will panic on most value kinds.
			switch ($.markAsStructValue($.cloneStructValue(value)).Kind()) {
				case reflect.Chan:
				case reflect.Func:
				case reflect.Interface:
				{
					if ($.markAsStructValue($.cloneStructValue(value)).IsNil()) {
						continue
					}
					break
				}
			}

			if (!(m$ as Marshaler).EmitDefaults) {
				switch ($.markAsStructValue($.cloneStructValue(value)).Kind()) {
					case reflect.Bool:
					{
						if (!$.markAsStructValue($.cloneStructValue(value)).Bool()) {
							continue
						}
						break
					}
					case reflect.Int32:
					case reflect.Int64:
					{
						if ($.markAsStructValue($.cloneStructValue(value)).Int() == 0n) {
							continue
						}
						break
					}
					case reflect.Uint32:
					case reflect.Uint64:
					{
						if ($.markAsStructValue($.cloneStructValue(value)).Uint() == 0n) {
							continue
						}
						break
					}
					case reflect.Float32:
					case reflect.Float64:
					{
						if ($.markAsStructValue($.cloneStructValue(value)).Float() == 0) {
							continue
						}
						break
					}
					case reflect.String:
					{
						if ($.markAsStructValue($.cloneStructValue(value)).Len() == 0) {
							continue
						}
						break
					}
					case reflect.Map:
					case reflect.Ptr:
					case reflect.Slice:
					{
						if ($.markAsStructValue($.cloneStructValue(value)).IsNil()) {
							continue
						}
						break
					}
				}
			}

			// Oneof fields need special handling.
			if (!$.stringEqual(reflect.StructTag_Get(valueField.Tag, "protobuf_oneof"), "")) {
				// value is an interface containing &T{real_value}.
				let sv: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(value)).Elem())).Elem()))
				value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(sv)).Field(0))
				valueField = $.assignStruct(valueField, ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(sv)).Type()).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))
			}
			let prop: proto.Properties | $.VarRef<proto.Properties> | null = await jsonProperties($.markAsStructValue($.cloneStructValue(valueField)), (m$ as Marshaler).OrigName)
			if (!firstField) {
				await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).writeSep(out) : Marshaler.prototype.writeSep.call(m, out))
			}
			// If the map value is a cast type, it may not implement proto.Message, therefore
			// allow the struct tag to declare the underlying message type. Change the property
			// of the child types, use CustomType as a passer. CastType currently property is
			// not used in json encoding.
			if ($.markAsStructValue($.cloneStructValue(value)).Kind() == 21) {
				{
					let tag = reflect.StructTag_Get(valueField.Tag, "protobuf")
					if (!$.stringEqual(tag, "")) {
						for (let __goscriptRangeTarget0 = strings.Split(tag, ","), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
							if (!strings.HasPrefix(v, "castvaluetype=")) {
								continue
							}
							v = strings.TrimPrefix(v, "castvaluetype=")
							$.pointerValue<proto.Properties>($.pointerValue<proto.Properties>(prop).MapValProp).CustomType = v
							break
						}
					}
				}
			}
			{
				let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalField(out, prop, value, indent) : Marshaler.prototype.marshalField.call(m, out, prop, value, indent))
				if (err != null) {
					return err
				}
			}
			firstField = false
		}

		// Handle proto2 extensions.
		{
			let [ep, ok] = $.typeAssertTuple<proto.Message | null>(v, "proto.Message")
			if (ok) {
				let extensions: globalThis.Map<number, proto.ExtensionDesc | $.VarRef<proto.ExtensionDesc> | null> | null = await proto.RegisteredExtensions(v)
				// Sort extensions for stable output.
				let ids: $.Slice<number> = $.makeSlice<number>(0, $.len(extensions), "number")
				for (const [id, desc] of extensions?.entries() ?? []) {
					if (!await proto.HasExtension(ep, desc)) {
						continue
					}
					ids = $.appendOne(ids, $.int(id, 32))
				}
				await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((ids as int32Slice), "jsonpb.int32Slice", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
				for (let __goscriptRangeTarget1 = ids, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let id = $.int((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 32)
					let desc: proto.ExtensionDesc | $.VarRef<proto.ExtensionDesc> | null = $.mapGet<number, proto.ExtensionDesc | $.VarRef<proto.ExtensionDesc> | null, proto.ExtensionDesc | $.VarRef<proto.ExtensionDesc> | null>(extensions, id, null)[0]
					let desc$: proto.ExtensionDesc = desc == null ? $.pointerTarget<proto.ExtensionDesc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<proto.ExtensionDesc>(desc)
					if (desc == null) {
						// unknown extension
						continue
					}
					let [ext, extErr] = await proto.GetExtension(ep, desc)
					if (extErr != null) {
						return extErr
					}
					let value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(ext)))
					let prop: $.VarRef<proto.Properties> = $.varRef(new proto.Properties(undefined, true))
					await prop.value.Parse((desc$ as proto.ExtensionDesc).Tag)
					prop.value.JSONName = await fmt.Sprintf("[%s]", (desc$ as proto.ExtensionDesc).Name)
					if (!firstField) {
						await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).writeSep(out) : Marshaler.prototype.writeSep.call(m, out))
					}
					{
						let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalField(out, prop, value, indent) : Marshaler.prototype.marshalField.call(m, out, prop, value, indent))
						if (err != null) {
							return err
						}
					}
					firstField = false
				}
			}
		}

		if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
		}
		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("}") : errWriter.prototype.write.call(out, "}"))
		return (out$ as errWriter).err
	}

	public async marshalTypeURL(out: errWriter | $.VarRef<errWriter> | null, indent: string, typeURL: string): globalThis.Promise<$.GoError> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		const m$: Marshaler = m == null ? $.pointerTarget<Marshaler>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Marshaler>(m)
		if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
		}
		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"@type\":") : errWriter.prototype.write.call(out, "\"@type\":"))
		if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(" ") : errWriter.prototype.write.call(out, " "))
		}
		let __goscriptTuple6: any = await json.Marshal(typeURL)
		let b: $.Slice<number> = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			return err
		}
		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write($.bytesToString(b)) : errWriter.prototype.write.call(out, $.bytesToString(b)))
		return $.pointerValue<errWriter>(out).err
	}

	public async marshalValue(out: errWriter | $.VarRef<errWriter> | null, prop: proto.Properties | $.VarRef<proto.Properties> | null, v: reflect.Value, indent: string): globalThis.Promise<$.GoError> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		const m$: Marshaler = m == null ? $.pointerTarget<Marshaler>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Marshaler>(m)
		const out$: errWriter = out == null ? $.pointerTarget<errWriter>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<errWriter>(out)
		const prop$: proto.Properties = prop == null ? $.pointerTarget<proto.Properties>(prop) : (prop as any).__isVarRef === true ? (prop as any).value : (prop as any).__goValue === undefined ? (prop as any) : $.pointerTarget<proto.Properties>(prop)

		v = $.assignStruct(v, reflect.Indirect($.markAsStructValue($.cloneStructValue(v))))

		// Handle nil pointer
		if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 0) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("null") : errWriter.prototype.write.call(out, "null"))
			return (out$ as errWriter).err
		}

		// Handle repeated elements.
		if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("[") : errWriter.prototype.write.call(out, "["))
			let comma = ""
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).Len(); i++) {
				let sliceVal = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i)))
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(comma) : errWriter.prototype.write.call(out, comma))
				if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
				}
				{
					let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalValue(out, prop, $.markAsStructValue($.cloneStructValue(sliceVal)), $.concatString(indent, (m$ as Marshaler).Indent)) : Marshaler.prototype.marshalValue.call(m, out, prop, $.markAsStructValue($.cloneStructValue(sliceVal)), $.concatString(indent, (m$ as Marshaler).Indent)))
					if (err != null) {
						return err
					}
				}
				comma = ","
			}
			if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
			}
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("]") : errWriter.prototype.write.call(out, "]"))
			return (out$ as errWriter).err
		}

		// Handle well-known types.
		// Most are handled up in marshalObject (because 99% are messages).
		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(wktType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			let wkt = $.mustTypeAssert<isWkt | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "jsonpb.isWkt")
			switch ((__goscriptAwait = (wkt !== null && (wkt as any).__isVarRef !== true && (wkt as any).__goValue === undefined ? (wkt as Exclude<isWkt, null>) : $.pointerValue<Exclude<isWkt, null>>(wkt)).XXX_WellKnownType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case "NullValue":
				{
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("null") : errWriter.prototype.write.call(out, "null"))
					return (out$ as errWriter).err
					break
				}
			}
		}

		{
			let [t, ok] = $.typeAssertTuple<time.Time>($.markAsStructValue($.cloneStructValue(v)).Interface(), "time.Time")
			if (ok) {
				let __goscriptTuple7: any = types.TimestampProto(t)
				let ts: types.Timestamp | $.VarRef<types.Timestamp> | null = __goscriptTuple7[0]
				let err = __goscriptTuple7[1]
				if (err != null) {
					return err
				}
				return Marshaler.prototype.marshalValue.call(m, out, prop, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(ts, "*types.Timestamp", /* @__PURE__ */ $.pointerType("types.Timestamp"))))), indent)
			}
		}

		{
			let [d, ok] = $.typeAssertTuple<time.Duration>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("int64", "time.Duration"))
			if (ok) {
				let dur: types.Duration | $.VarRef<types.Duration> | null = types.DurationProto(d)
				return Marshaler.prototype.marshalValue.call(m, out, prop, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(dur, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration"))))), indent)
			}
		}

		// Handle enumerations.
		if (!(m$ as Marshaler).EnumsAsInts && (!$.stringEqual((prop$ as proto.Properties).Enum, ""))) {
			// Unknown enum values will are stringified by the proto library as their
			// value. Such values should _not_ be quoted or they will be interpreted
			// as an enum string instead of their value.
			let enumStr = (__goscriptAwait = $.pointerValue<Exclude<fmt.Stringer, null>>($.mustTypeAssert<fmt.Stringer | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "fmt.Stringer")).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let valStr: string = ""
			if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
				valStr = strconv.Itoa($.int($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())).Int()))
			} else {
				valStr = strconv.Itoa($.int($.markAsStructValue($.cloneStructValue(v)).Int()))
			}

			{
				let [__goscriptShadow8, ok] = $.typeAssertTuple<any>($.markAsStructValue($.cloneStructValue(v)).Interface(), { kind: $.TypeKind.Interface, methods: [{ name: "MarshalJSON", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "_r1", type: "error" }] }] })
				if (ok) {
					let __goscriptTuple8: any = await (__goscriptShadow8 !== null && (__goscriptShadow8 as any).__isVarRef !== true && (__goscriptShadow8 as any).__goValue === undefined ? (__goscriptShadow8 as any) : $.pointerValue<any>(__goscriptShadow8)).MarshalJSON()
					let data: $.Slice<number> = __goscriptTuple8[0]
					let err = __goscriptTuple8[1]
					if (err != null) {
						return err
					}
					enumStr = $.bytesToString(data)
					let __goscriptTuple9: any = strconv.Unquote(enumStr)
					enumStr = __goscriptTuple9[0]
					err = __goscriptTuple9[1]
					if (err != null) {
						return err
					}
				}
			}

			let isKnownEnum = !$.stringEqual(enumStr, valStr)

			if (isKnownEnum) {
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"") : errWriter.prototype.write.call(out, "\""))
			}
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(enumStr) : errWriter.prototype.write.call(out, enumStr))
			if (isKnownEnum) {
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"") : errWriter.prototype.write.call(out, "\""))
			}
			return (out$ as errWriter).err
		}

		// Handle nested messages.
		if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 25) {
			let i = $.markAsStructValue($.cloneStructValue(v))
			if ($.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
				i = $.assignStruct(i, $.markAsStructValue($.cloneStructValue(v)).Addr())
			} else {
				i = $.assignStruct(i, reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!))
				$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(i)).Elem())).Set($.markAsStructValue($.cloneStructValue(v)))
			}
			let iface = $.markAsStructValue($.cloneStructValue(i)).Interface()
			if (iface == null) {
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("null") : errWriter.prototype.write.call(out, "null"))
				return (out$ as errWriter).err
			}

			{
				let [__goscriptShadow9, ok] = $.typeAssertTuple<any>($.markAsStructValue($.cloneStructValue(v)).Interface(), { kind: $.TypeKind.Interface, methods: [{ name: "MarshalJSON", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "_r1", type: "error" }] }] })
				if (ok) {
					let __goscriptTuple10: any = await (__goscriptShadow9 !== null && (__goscriptShadow9 as any).__isVarRef !== true && (__goscriptShadow9 as any).__goValue === undefined ? (__goscriptShadow9 as any) : $.pointerValue<any>(__goscriptShadow9)).MarshalJSON()
					let data: $.Slice<number> = __goscriptTuple10[0]
					let err = __goscriptTuple10[1]
					if (err != null) {
						return err
					}
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write($.bytesToString(data)) : errWriter.prototype.write.call(out, $.bytesToString(data)))
					return null
				}
			}

			let [pm, ok] = $.typeAssertTuple<proto.Message | null>(iface, "proto.Message")
			if (!ok) {
				if ($.stringEqual((prop$ as proto.Properties).CustomType, "")) {
					return fmt.Errorf("%v does not implement proto.Message", ($.markAsStructValue($.cloneStructValue(v)).Type() as any))
				}
				let t = proto.MessageType((prop$ as proto.Properties).CustomType)
				if ((t == null) || !(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(i)).Type()).ConvertibleTo($.pointerValueOrNil(t)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return fmt.Errorf("%v declared custom type %s but it is not convertible to %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any), (prop$ as proto.Properties).CustomType, (t as any))
				}
				pm = $.mustTypeAssert<proto.Message | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(i)).Convert($.pointerValueOrNil(t)!))).Interface(), "proto.Message")
			}
			return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Marshaler).marshalObject(out, pm, $.concatString(indent, (m$ as Marshaler).Indent), "") : Marshaler.prototype.marshalObject.call(m, out, pm, $.concatString(indent, (m$ as Marshaler).Indent), ""))
		}

		// Handle maps.
		// Since Go randomizes map iteration, we sort keys for stable output.
		if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 21) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("{") : errWriter.prototype.write.call(out, "{"))
			let keys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(v)).MapKeys()
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((keys as mapKeys), "jsonpb.mapKeys", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))!)
			for (let __goscriptRangeTarget2 = keys, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
				let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as reflect.Value)))
				if (i > 0) {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(",") : errWriter.prototype.write.call(out, ","))
				}
				if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
				}

				// TODO handle map key prop properly
				let __goscriptTuple11: any = await json.Marshal($.markAsStructValue($.cloneStructValue(k)).Interface())
				let b: $.Slice<number> = __goscriptTuple11[0]
				let err = __goscriptTuple11[1]
				if (err != null) {
					return err
				}
				let s = $.bytesToString(b)

				// If the JSON is not a string value, encode it again to make it one.
				if (!strings.HasPrefix(s, "\"")) {
					let __goscriptTuple12: any = await json.Marshal(s)
					let __goscriptShadow10: $.Slice<number> = __goscriptTuple12[0]
					let __goscriptShadow11 = __goscriptTuple12[1]
					if (__goscriptShadow11 != null) {
						return __goscriptShadow11
					}
					s = $.bytesToString(__goscriptShadow10)
				}

				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(s) : errWriter.prototype.write.call(out, s))
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(":") : errWriter.prototype.write.call(out, ":"))
				if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
					await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(" ") : errWriter.prototype.write.call(out, " "))
				}

				let vprop: proto.Properties | $.VarRef<proto.Properties> | null = prop
				if ((prop != null) && ((prop$ as proto.Properties).MapValProp != null)) {
					vprop = (prop$ as proto.Properties).MapValProp
				}
				{
					let __goscriptShadow12 = await Marshaler.prototype.marshalValue.call(m, out, vprop, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).MapIndex($.markAsStructValue($.cloneStructValue(k))))), $.concatString(indent, (m$ as Marshaler).Indent))
					if (__goscriptShadow12 != null) {
						return __goscriptShadow12
					}
				}
			}
			if (!$.stringEqual((m$ as Marshaler).Indent, "")) {
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\n") : errWriter.prototype.write.call(out, "\n"))
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(indent) : errWriter.prototype.write.call(out, indent))
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write((m$ as Marshaler).Indent) : errWriter.prototype.write.call(out, (m$ as Marshaler).Indent))
			}
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("}") : errWriter.prototype.write.call(out, "}"))
			return (out$ as errWriter).err
		}

		// Handle non-finite floats, e.g. NaN, Infinity and -Infinity.
		if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 13) || ($.markAsStructValue($.cloneStructValue(v)).Kind() == 14)) {
			let f = $.markAsStructValue($.cloneStructValue(v)).Float()
			let sval: string = ""
			switch ((true as boolean)) {
				case math.IsInf(f, 1):
				{
					sval = "\"Infinity\""
					break
				}
				case math.IsInf(f, -1):
				{
					sval = "\"-Infinity\""
					break
				}
				case math.IsNaN(f):
				{
					sval = "\"NaN\""
					break
				}
			}
			if (!$.stringEqual(sval, "")) {
				await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(sval) : errWriter.prototype.write.call(out, sval))
				return (out$ as errWriter).err
			}
		}

		// Default handling defers to the encoding/json library.
		let __goscriptTuple13: any = await json.Marshal($.markAsStructValue($.cloneStructValue(v)).Interface())
		let b: $.Slice<number> = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (err != null) {
			return err
		}
		let needToQuote = (!$.stringEqual($.runeToString($.arrayIndex(b!, 0)), "\"")) && (($.markAsStructValue($.cloneStructValue(v)).Kind() == 6) || ($.markAsStructValue($.cloneStructValue(v)).Kind() == 11))
		if (needToQuote) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"") : errWriter.prototype.write.call(out, "\""))
		}
		await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write($.bytesToString(b)) : errWriter.prototype.write.call(out, $.bytesToString(b)))
		if (needToQuote) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write("\"") : errWriter.prototype.write.call(out, "\""))
		}
		return (out$ as errWriter).err
	}

	public async writeSep(out: errWriter | $.VarRef<errWriter> | null): globalThis.Promise<void> {
		const m: Marshaler | $.VarRef<Marshaler> | null = this;
		if (!$.stringEqual($.pointerValue<Marshaler>(m).Indent, "")) {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(",\n") : errWriter.prototype.write.call(out, ",\n"))
		} else {
			await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as errWriter).write(",") : errWriter.prototype.write.call(out, ","))
		}
	}

	static __typeInfo = $.registerStructType(
		"jsonpb.Marshaler",
		() => new Marshaler(),
		() => [$.methodSignature("Marshal", [["out", "io.Writer"], ["pb", "proto.Message"]], ["error"], true), $.methodSignature("MarshalToString", [["pb", "proto.Message"]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("marshalAny", [["out", /* @__PURE__ */ $.pointerType("jsonpb.errWriter")], ["any", "proto.Message"], ["indent", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("marshalField", [["out", /* @__PURE__ */ $.pointerType("jsonpb.errWriter")], ["prop", /* @__PURE__ */ $.pointerType("proto.Properties")], ["v", "reflect.Value"], ["indent", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("marshalObject", [["out", /* @__PURE__ */ $.pointerType("jsonpb.errWriter")], ["v", "proto.Message"], ["indent", /* @__PURE__ */ $.basicType("string")], ["typeURL", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("marshalTypeURL", [["out", /* @__PURE__ */ $.pointerType("jsonpb.errWriter")], ["indent", /* @__PURE__ */ $.basicType("string")], ["typeURL", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("marshalValue", [["out", /* @__PURE__ */ $.pointerType("jsonpb.errWriter")], ["prop", /* @__PURE__ */ $.pointerType("proto.Properties")], ["v", "reflect.Value"], ["indent", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("writeSep", [["out", /* @__PURE__ */ $.pointerType("jsonpb.errWriter")]], [], true)],
		Marshaler,
		() => [/* @__PURE__ */ $.structField("EnumsAsInts", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("EmitDefaults", /* @__PURE__ */ $.basicType("bool"), [1], 1, true), /* @__PURE__ */ $.structField("Indent", /* @__PURE__ */ $.basicType("string"), [2], 8, true), /* @__PURE__ */ $.structField("OrigName", /* @__PURE__ */ $.basicType("bool"), [3], 24, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [4], 32, true)]
	)
}

export class Unmarshaler {
	// Whether to allow messages to contain unknown fields, as opposed to
	// failing to unmarshal.
	public get AllowUnknownFields(): boolean {
		return this._fields.AllowUnknownFields
	}

	public set AllowUnknownFields(value: boolean) {
		this._fields.AllowUnknownFields = value
	}

	// A custom URL resolver to use when unmarshaling Any messages from JSON.
	// If unset, the default resolution strategy is to extract the
	// fully-qualified type name from the type URL and pass that to
	// proto.MessageType(string).
	public get AnyResolver(): AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		AllowUnknownFields: boolean
		AnyResolver: AnyResolver | null
	}

	constructor(init?: Partial<{AllowUnknownFields?: boolean, AnyResolver?: AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			AllowUnknownFields: init?.AllowUnknownFields ?? (false as boolean),
			AnyResolver: init?.AnyResolver ?? (null! as AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Unmarshaler {
		return new Unmarshaler(this, true)
	}

	public __goscriptAssign(source: Unmarshaler): void {
		const target = this._fields
		const values = source._fields
		target.AllowUnknownFields = values.AllowUnknownFields
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	public async Unmarshal(r: io.Reader | null, pb: proto.Message | null): globalThis.Promise<$.GoError> {
		const u: Unmarshaler | $.VarRef<Unmarshaler> | null = this;
		let dec: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.pointerValueOrNil(r)!)
		return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Unmarshaler).UnmarshalNext(dec, pb) : Unmarshaler.prototype.UnmarshalNext.call(u, dec, pb))
	}

	public async UnmarshalNext(dec: json.Decoder | $.VarRef<json.Decoder> | null, pb: proto.Message | null): globalThis.Promise<$.GoError> {
		const u: Unmarshaler | $.VarRef<Unmarshaler> | null = this;
		let inputValue: $.VarRef<json.RawMessage> = $.varRef((new Uint8Array([]) as $.Slice<number> as json.RawMessage))
		{
			let err = await json.Decoder.prototype.Decode.call($.pointerValue<json.Decoder>(dec), $.namedValueInterfaceValue<any>(inputValue, "*jsontext.Value", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7()))
			if (err != null) {
				return err
			}
		}
		{
			let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((pb as any)))).Elem())), (inputValue.value as json.RawMessage), null)
			if (err != null) {
				return err
			}
		}
		return checkRequiredFields(pb)
	}

	public async unmarshalValue(target: reflect.Value, inputValue: json.RawMessage, prop: proto.Properties | $.VarRef<proto.Properties> | null): globalThis.Promise<$.GoError> {
		const u: Unmarshaler | $.VarRef<Unmarshaler> | null = this;
		const u$: Unmarshaler = u == null ? $.pointerTarget<Unmarshaler>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<Unmarshaler>(u)
		const prop$: proto.Properties = prop == null ? $.pointerTarget<proto.Properties>(prop) : (prop as any).__isVarRef === true ? (prop as any).value : (prop as any).__goValue === undefined ? (prop as any) : $.pointerTarget<proto.Properties>(prop)
		let targetType = $.markAsStructValue($.cloneStructValue(target)).Type()

		// Allocate memory for pointer fields.
		if ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			// If input value is "null" and target is a pointer type, then the field should be treated as not set
			// UNLESS the target is structpb.Value, in which case it should be set to structpb.NullValue.
			let [, isJSONPBUnmarshaler] = $.typeAssertTuple<JSONPBUnmarshaler | null>($.markAsStructValue($.cloneStructValue(target)).Interface(), "jsonpb.JSONPBUnmarshaler")
			if ((($.stringEqual($.bytesToString(inputValue), "null")) && (!$.comparableEqual(targetType, reflect.TypeOf($.interfaceValue(new types.Value(), "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")))))) && !isJSONPBUnmarshaler) {
				return null
			}
			$.markAsStructValue($.cloneStructValue(target)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))

			return Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Elem())), (inputValue as json.RawMessage), prop)
		}

		{
			let [jsu, ok] = $.typeAssertTuple<JSONPBUnmarshaler | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Addr())).Interface(), "jsonpb.JSONPBUnmarshaler")
			if (ok) {
				return (jsu !== null && (jsu as any).__isVarRef !== true && (jsu as any).__goValue === undefined ? (jsu as Exclude<JSONPBUnmarshaler, null>) : $.pointerValue<Exclude<JSONPBUnmarshaler, null>>(jsu)).UnmarshalJSONPB(u, inputValue)
			}
		}

		// Handle well-known types that are not pointers.
		{
			let [w, ok] = $.typeAssertTuple<isWkt | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Addr())).Interface(), "jsonpb.isWkt")
			if (ok) {
				switch ((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<isWkt, null>) : $.pointerValue<Exclude<isWkt, null>>(w)).XXX_WellKnownType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					case "DoubleValue":
					case "FloatValue":
					case "Int64Value":
					case "UInt64Value":
					case "Int32Value":
					case "UInt32Value":
					case "BoolValue":
					case "StringValue":
					case "BytesValue":
					{
						return Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))), (inputValue as json.RawMessage), prop)
						break
					}
					case "Any":
					{
						let jsonFields: $.VarRef<globalThis.Map<string, $.VarRef<jsontext.Value> | null> | null> = $.varRef(null! as globalThis.Map<string, $.VarRef<jsontext.Value> | null> | null)
						{
							let err = await json.Unmarshal(inputValue, $.interfaceValue(jsonFields, "*map[string]*jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"))))))
							if (err != null) {
								return err
							}
						}

						let __goscriptTuple14: any = $.mapGet<string, $.VarRef<jsontext.Value> | null, $.VarRef<jsontext.Value> | null>(jsonFields.value, "@type", null)
						let val: $.VarRef<jsontext.Value> | null = __goscriptTuple14[0]
						let __goscriptShadow13 = __goscriptTuple14[1]
						if (!__goscriptShadow13 || (val == null)) {
							return errors.New("Any JSON doesn't have '@type'")
						}

						let turl: $.VarRef<string> = $.varRef("")
						{
							let err = await json.Unmarshal($.pointerValue<json.RawMessage>(val), $.interfaceValue(turl, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
							if (err != null) {
								return fmt.Errorf("can't unmarshal Any's '@type': %q", $.namedValueInterfaceValue<any>($.pointerValue<json.RawMessage>(val), "jsontext.Value", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10()))
							}
						}
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).SetString(turl.value)

						let m: proto.Message | null = null! as proto.Message | null
						let err: $.GoError = null! as $.GoError
						if ((u$ as Unmarshaler).AnyResolver != null) {
							let __goscriptTuple15: any = await $.pointerValue<Exclude<AnyResolver, null>>((u$ as Unmarshaler).AnyResolver).Resolve(turl.value)
							m = __goscriptTuple15[0]
							err = __goscriptTuple15[1]
						} else {
							let __goscriptTuple16: any = await defaultResolveAny(turl.value)
							m = __goscriptTuple16[0]
							err = __goscriptTuple16[1]
						}
						if (err != null) {
							return err
						}

						{
							let [, __goscriptShadow14] = $.typeAssertTuple<isWkt | null>(m, "jsonpb.isWkt")
							if (__goscriptShadow14) {
								let __goscriptTuple17: any = $.mapGet<string, $.VarRef<jsontext.Value> | null, $.VarRef<jsontext.Value> | null>(jsonFields.value, "value", null)
								let __goscriptShadow15: $.VarRef<jsontext.Value> | null = __goscriptTuple17[0]
								let __goscriptShadow16 = __goscriptTuple17[1]
								if (!__goscriptShadow16) {
									return errors.New("Any JSON doesn't have 'value'")
								}

								{
									err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((m as any)))).Elem())), ($.pointerValue<json.RawMessage>(__goscriptShadow15) as json.RawMessage), null)
									if (err != null) {
										return fmt.Errorf("can't unmarshal Any nested proto %T: %v", (m as any), (err as any))
									}
								}
							} else {
								$.deleteMapEntry(jsonFields.value, "@type")
								let __goscriptTuple18: any = await json.Marshal($.interfaceValue(jsonFields.value, "map[string]*jsontext.Value", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
								let nestedProto: $.Slice<number> = __goscriptTuple18[0]
								let uerr = __goscriptTuple18[1]
								if (uerr != null) {
									return fmt.Errorf("can't generate JSON for Any's nested proto to be unmarshaled: %v", (uerr as any))
								}

								{
									err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf((m as any)))).Elem())), (nestedProto as json.RawMessage), null)
									if (err != null) {
										return fmt.Errorf("can't unmarshal Any nested proto %T: %v", (m as any), (err as any))
									}
								}
							}
						}

						let __goscriptTuple19: any = await proto.Marshal(m)
						let b: $.Slice<number> = __goscriptTuple19[0]
						err = __goscriptTuple19[1]
						if (err != null) {
							return fmt.Errorf("can't marshal proto %T into Any.Value: %v", (m as any), (err as any))
						}
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(1))).SetBytes(b)

						return null
						break
					}
					case "Duration":
					{
						let [unq, err] = await unquote($.bytesToString(inputValue))
						if (err != null) {
							return err
						}

						let __goscriptTuple20: any = time.ParseDuration(unq)
						let d = __goscriptTuple20[0]
						err = __goscriptTuple20[1]
						if (err != null) {
							return fmt.Errorf("bad Duration: %v", (err as any))
						}

						let ns = time.Duration_Nanoseconds(d)
						let s = $.int64Div(ns, 1000000000n)
						ns = $.int64Mod(ns, 1000000000n)
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).SetInt(s)
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(1))).SetInt(ns)
						return null
						break
					}
					case "Timestamp":
					{
						let [unq, err] = await unquote($.bytesToString(inputValue))
						if (err != null) {
							return err
						}

						let __goscriptTuple21: any = time.Parse(time.RFC3339Nano, unq)
						let t = __goscriptTuple21[0]
						err = __goscriptTuple21[1]
						if (err != null) {
							return fmt.Errorf("bad Timestamp: %v", (err as any))
						}

						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).SetInt($.markAsStructValue($.cloneStructValue(t)).Unix())
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(1))).SetInt($.int64($.markAsStructValue($.cloneStructValue(t)).Nanosecond()))
						return null
						break
					}
					case "Struct":
					{
						let m: $.VarRef<globalThis.Map<string, json.RawMessage> | null> = $.varRef(null! as globalThis.Map<string, json.RawMessage> | null)
						{
							let err = await json.Unmarshal(inputValue, $.interfaceValue(m, "*map[string]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
							if (err != null) {
								return fmt.Errorf("bad StructValue: %v", (err as any))
							}
						}
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.makeMap<string, types.Value | $.VarRef<types.Value> | null>([]), "map[string]*types.Value", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("types.Value")))))))
						for (const [k, jv] of m.value?.entries() ?? []) {
							let pv: types.Value | $.VarRef<types.Value> | null = new types.Value()
							{
								let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(pv, "*types.Value", /* @__PURE__ */ $.pointerType("types.Value"))))).Elem())), (jv as json.RawMessage), prop)
								if (err != null) {
									return fmt.Errorf("bad value in StructValue for key %q: %v", k, (err as any))
								}
							}
							$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).SetMapIndex($.markAsStructValue($.cloneStructValue(reflect.ValueOf(k))), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(pv, "*types.Value", /* @__PURE__ */ $.pointerType("types.Value"))))))
						}
						return null
						break
					}
					case "ListValue":
					{
						let s: $.VarRef<$.Slice<json.RawMessage>> = $.varRef(null! as $.Slice<json.RawMessage>)
						{
							let err = await json.Unmarshal(inputValue, $.interfaceValue(s, "*[]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
							if (err != null) {
								return fmt.Errorf("bad ListValue: %v", (err as any))
							}
						}

						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.makeSlice<types.Value | $.VarRef<types.Value> | null>($.sliceLen(s.value)), "[]*types.Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Value")))))))
						for (let __goscriptRangeTarget3 = s.value, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
							let sv = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as json.RawMessage) as json.RawMessage)
							{
								let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Index(i))), (sv as json.RawMessage), prop)
								if (err != null) {
									return err
								}
							}
						}
						return null
						break
					}
					case "Value":
					{
						let ivStr = $.bytesToString(inputValue)
						if ($.stringEqual(ivStr, "null")) {
							$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new types.Value_NullValue(), "*types.Value_NullValue", /* @__PURE__ */ $.pointerType("types.Value_NullValue"))))))
						} else {
							{
								let [v, err] = strconv.ParseFloat(ivStr, 0)
								if (err == null) {
									$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new types.Value_NumberValue({NumberValue: v}), "*types.Value_NumberValue", /* @__PURE__ */ $.pointerType("types.Value_NumberValue"))))))
								} else {
									{
										let [__goscriptShadow17, __goscriptShadow18] = await unquote(ivStr)
										if (__goscriptShadow18 == null) {
											$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new types.Value_StringValue({StringValue: __goscriptShadow17}), "*types.Value_StringValue", /* @__PURE__ */ $.pointerType("types.Value_StringValue"))))))
										} else {
											{
												let [__goscriptShadow19, __goscriptShadow20] = strconv.ParseBool(ivStr)
												if (__goscriptShadow20 == null) {
													$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new types.Value_BoolValue({BoolValue: __goscriptShadow19}), "*types.Value_BoolValue", /* @__PURE__ */ $.pointerType("types.Value_BoolValue"))))))
												} else {
													{
														let __goscriptShadow21 = await json.Unmarshal(inputValue, $.interfaceValue($.varRef($.arrayToSlice<json.RawMessage>([])), "*[]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
														if (__goscriptShadow21 == null) {
															let lv: types.ListValue | $.VarRef<types.ListValue> | null = new types.ListValue()
															$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new types.Value_ListValue({ListValue: lv}), "*types.Value_ListValue", /* @__PURE__ */ $.pointerType("types.Value_ListValue"))))))
															return Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(lv, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue"))))).Elem())), (inputValue as json.RawMessage), prop)
														} else {
															{
																let __goscriptShadow22 = await json.Unmarshal(inputValue, $.interfaceValue($.varRef($.makeMap<string, json.RawMessage>([])), "*map[string]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
																if (__goscriptShadow22 == null) {
																	let sv: types.Struct | $.VarRef<types.Struct> | null = new types.Struct()
																	$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new types.Value_StructValue({StructValue: sv}), "*types.Value_StructValue", /* @__PURE__ */ $.pointerType("types.Value_StructValue"))))))
																	return Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(sv, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct"))))).Elem())), (inputValue as json.RawMessage), prop)
																} else {
																	return fmt.Errorf("unrecognized type for Value %q", ivStr)
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
						return null
						break
					}
				}
			}
		}

		{
			let __goscriptTuple22: any = $.typeAssertTuple<time.Time | $.VarRef<time.Time> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Addr())).Interface(), /* @__PURE__ */ $.pointerType("time.Time"))
			let t: time.Time | $.VarRef<time.Time> | null = __goscriptTuple22[0]
			let ok = __goscriptTuple22[1]
			if (ok) {
				let ts: types.Timestamp | $.VarRef<types.Timestamp> | null = new types.Timestamp()
				{
					let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(ts, "*types.Timestamp", /* @__PURE__ */ $.pointerType("types.Timestamp"))))).Elem())), (inputValue as json.RawMessage), prop)
					if (err != null) {
						return err
					}
				}
				let [tt, err] = types.TimestampFromProto(ts)
				if (err != null) {
					return err
				}
				$.assignStruct($.pointerValue<time.Time>(t), tt)
				return null
			}
		}

		{
			let __goscriptTuple23: any = $.typeAssertTuple<$.VarRef<time.Duration> | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Addr())).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
			let d: $.VarRef<time.Duration> | null = __goscriptTuple23[0]
			let ok = __goscriptTuple23[1]
			if (ok) {
				let dur: types.Duration | $.VarRef<types.Duration> | null = new types.Duration()
				{
					let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(dur, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration"))))).Elem())), (inputValue as json.RawMessage), prop)
					if (err != null) {
						return err
					}
				}
				let [dd, err] = types.DurationFromProto(dur)
				if (err != null) {
					return err
				}
				d!.value = dd
				return null
			}
		}

		// Handle enums, which have an underlying type of int32,
		// and may appear as strings.
		// The case of an enum appearing as a number is handled
		// at the bottom of this function.
		if ((($.arrayIndex(inputValue!, 0) == 34) && (prop != null)) && (!$.stringEqual((prop$ as proto.Properties).Enum, ""))) {
			let vmap: globalThis.Map<string, number> | null = proto.EnumValueMap((prop$ as proto.Properties).Enum)
			// Don't need to do unquoting; valid enum names
			// are from a limited character set.
			let s: json.RawMessage = ($.goSlice(inputValue, 1, $.sliceLen((inputValue as json.RawMessage)) - 1) as json.RawMessage)
			let [n, ok] = $.mapGet<string, number, number>(vmap, $.bytesToString(s), 0)
			if (!ok) {
				return fmt.Errorf("unknown value %q for enum %s", $.namedValueInterfaceValue<any>(s, "jsontext.Value", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10()), (prop$ as proto.Properties).Enum)
			}
			if ($.markAsStructValue($.cloneStructValue(target)).Kind() == 22) {
				$.markAsStructValue($.cloneStructValue(target)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
				target = $.assignStruct(target, $.markAsStructValue($.cloneStructValue(target)).Elem())
			}
			if ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 5) {
				return fmt.Errorf("invalid target %q for enum %s", $.namedValueInterfaceValue<any>((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic13()), (prop$ as proto.Properties).Enum)
			}
			$.markAsStructValue($.cloneStructValue(target)).SetInt($.int64(n))
			return null
		}

		if (((prop != null) && ($.stringLen((prop$ as proto.Properties).CustomType) > 0)) && $.markAsStructValue($.cloneStructValue(target)).CanAddr()) {
			{
				let [m, ok] = $.typeAssertTuple<any>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Addr())).Interface(), { kind: $.TypeKind.Interface, methods: [{ name: "UnmarshalJSON", args: [{ name: "_p0", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], returns: [{ name: "_r0", type: "error" }] }] })
				if (ok) {
					return json.Unmarshal(inputValue, (m as any))
				}
			}
		}

		// Handle nested messages.
		if ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) {
			let jsonFields: $.VarRef<globalThis.Map<string, json.RawMessage> | null> = $.varRef(null! as globalThis.Map<string, json.RawMessage> | null)
			{
				let err = await json.Unmarshal(inputValue, $.interfaceValue(jsonFields, "*map[string]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
				if (err != null) {
					return err
				}
			}

			let consumeField: ((prop: proto.Properties | $.VarRef<proto.Properties> | null) => [json.RawMessage, boolean] | globalThis.Promise<[json.RawMessage, boolean]>) | null = $.functionValue((prop: proto.Properties | $.VarRef<proto.Properties> | null): [json.RawMessage, boolean] => {
				// Be liberal in what names we accept; both orig_name and camelName are okay.
				let __goscriptShadow23 = acceptedJSONFieldNames(prop)

				let __goscriptTuple24: any = $.mapGet<string, json.RawMessage, json.RawMessage>(jsonFields.value, __goscriptShadow23.orig, null)
				let vOrig: json.RawMessage = (__goscriptTuple24[0] as json.RawMessage)
				let okOrig = __goscriptTuple24[1]
				let __goscriptTuple25: any = $.mapGet<string, json.RawMessage, json.RawMessage>(jsonFields.value, __goscriptShadow23.camel, null)
				let vCamel: json.RawMessage = (__goscriptTuple25[0] as json.RawMessage)
				let okCamel = __goscriptTuple25[1]
				if (!okOrig && !okCamel) {
					return [(null as json.RawMessage), false]
				}
				// If, for some reason, both are present in the data, favour the camelName.
				let raw: json.RawMessage = null! as json.RawMessage
				if (okOrig) {
					raw = (vOrig as json.RawMessage)
					$.deleteMapEntry(jsonFields.value, __goscriptShadow23.orig)
				}
				if (okCamel) {
					raw = (vCamel as json.RawMessage)
					$.deleteMapEntry(jsonFields.value, __goscriptShadow23.camel)
				}
				return [(raw as json.RawMessage), true]
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("proto.Properties")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"), /* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

			let sprops: proto.StructProperties | $.VarRef<proto.StructProperties> | null = await proto.GetProperties(targetType)
			let sprops$: proto.StructProperties = sprops == null ? $.pointerTarget<proto.StructProperties>(sprops) : (sprops as any).__isVarRef === true ? (sprops as any).value : (sprops as any).__goValue === undefined ? (sprops as any) : $.pointerTarget<proto.StructProperties>(sprops)
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(target)).NumField(); i++) {
				let ft = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(target)).Type()).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				if (strings.HasPrefix(ft.Name, "XXX_")) {
					continue
				}
				let __goscriptTuple26: any = await consumeField!($.arrayIndex((sprops$ as proto.StructProperties).Prop!, i))
				let valueForField: json.RawMessage = (__goscriptTuple26[0] as json.RawMessage)
				let ok = __goscriptTuple26[1]
				if (!ok) {
					continue
				}

				{
					let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field(i))), (valueForField as json.RawMessage), $.arrayIndex((sprops$ as proto.StructProperties).Prop!, i))
					if (err != null) {
						return err
					}
				}
			}
			// Check for any oneof fields.
			if ($.len(jsonFields.value) > 0) {
				for (const [__rangeKey, oop] of (sprops$ as proto.StructProperties).OneofTypes?.entries() ?? []) {
					let __goscriptTuple27: any = await consumeField!($.pointerValue<proto.OneofProperties>(oop).Prop)
					let raw: json.RawMessage = (__goscriptTuple27[0] as json.RawMessage)
					let ok = __goscriptTuple27[1]
					if (!ok) {
						continue
					}
					let nv = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<proto.OneofProperties>(oop).Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Field($.pointerValue<proto.OneofProperties>(oop).Field))).Set($.markAsStructValue($.cloneStructValue(nv)))
					{
						let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(nv)).Elem())).Field(0))), (raw as json.RawMessage), $.pointerValue<proto.OneofProperties>(oop).Prop)
						if (err != null) {
							return err
						}
					}
				}
			}
			// Handle proto2 extensions.
			if ($.len(jsonFields.value) > 0) {
				{
					let [ep, ok] = $.typeAssertTuple<proto.Message | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Addr())).Interface(), "proto.Message")
					if (ok) {
						for (const [__rangeKey, ext] of (await proto.RegisteredExtensions(ep))?.entries() ?? []) {
							let name = await fmt.Sprintf("[%s]", $.pointerValue<proto.ExtensionDesc>(ext).Name)
							let __goscriptTuple28: any = $.mapGet<string, json.RawMessage, json.RawMessage>(jsonFields.value, name, null)
							let raw: json.RawMessage = (__goscriptTuple28[0] as json.RawMessage)
							let __goscriptShadow24 = __goscriptTuple28[1]
							if (!__goscriptShadow24) {
								continue
							}
							$.deleteMapEntry(jsonFields.value, name)
							let nv = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.pointerValue<proto.ExtensionDesc>(ext).ExtensionType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
							{
								let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(nv)).Elem())), (raw as json.RawMessage), null)
								if (err != null) {
									return err
								}
							}
							{
								let err = await proto.SetExtension(ep, ext, $.markAsStructValue($.cloneStructValue(nv)).Interface())
								if (err != null) {
									return err
								}
							}
						}
					}
				}
			}
			if (!(u$ as Unmarshaler).AllowUnknownFields && ($.len(jsonFields.value) > 0)) {
				// Pick any field to be the scapegoat.
				let f: string = ""
				for (const [fname, __rangeValue] of jsonFields.value?.entries() ?? []) {
					f = fname
					break
				}
				return fmt.Errorf("unknown field %q in %v", f, (targetType as any))
			}
			return null
		}

		// Handle arrays
		if ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
				let outRef = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(targetType)!)))
				let outVal = $.markAsStructValue($.cloneStructValue(outRef)).Interface()
				//CustomType with underlying type []byte
				{
					let [, ok] = $.typeAssertTuple<any>(outVal, { kind: $.TypeKind.Interface, methods: [{ name: "UnmarshalJSON", args: [{ name: "_p0", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], returns: [{ name: "_r0", type: "error" }] }] })
					if (ok) {
						{
							let err = await json.Unmarshal(inputValue, outVal)
							if (err != null) {
								return err
							}
						}
						$.markAsStructValue($.cloneStructValue(target)).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(outRef)).Elem())))
						return null
					}
				}
				// Special case for encoded bytes. Pre-go1.5 doesn't support unmarshalling
				// strings into aliased []byte types.
				// https://github.com/golang/go/commit/4302fd0409da5e4f1d71471a6770dacdc3301197
				// https://github.com/golang/go/commit/c60707b14d6be26bf4213114d13070bff00d0b0a
				let out: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
				{
					let err = await json.Unmarshal(inputValue, $.interfaceValue(out, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
					if (err != null) {
						return err
					}
				}
				$.markAsStructValue($.cloneStructValue(target)).SetBytes(out.value)
				return null
			}

			let slc: $.VarRef<$.Slice<json.RawMessage>> = $.varRef(null! as $.Slice<json.RawMessage>)
			{
				let err = await json.Unmarshal(inputValue, $.interfaceValue(slc, "*[]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
				if (err != null) {
					return err
				}
			}
			if (slc.value != null) {
				let l = $.sliceLen(slc.value)
				$.markAsStructValue($.cloneStructValue(target)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil(targetType)!, l, l))))
				for (let i = 0; i < l; i++) {
					{
						let err = await Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Index(i))), ($.arrayIndex(slc.value!, i) as json.RawMessage), prop)
						if (err != null) {
							return err
						}
					}
				}
			}
			return null
		}

		// Handle maps (whose keys are always strings)
		if ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 21) {
			let mp: $.VarRef<globalThis.Map<string, json.RawMessage> | null> = $.varRef(null! as globalThis.Map<string, json.RawMessage> | null)
			{
				let err = await json.Unmarshal(inputValue, $.interfaceValue(mp, "*map[string]jsontext.Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))))
				if (err != null) {
					return err
				}
			}
			if (mp.value != null) {
				$.markAsStructValue($.cloneStructValue(target)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil(targetType)!))))
				for (const [ks, raw] of mp.value?.entries() ?? []) {
					// Unmarshal map key. The core json library already decoded the key into a
					// string, so we handle that specially. Other types were quoted post-serialization.
					let k: reflect.Value = $.markAsStructValue(new reflect.Value())
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
						k = $.assignStruct(k, reflect.ValueOf(ks))
					} else {
						k = $.assignStruct(k, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem())
						let kprop: proto.Properties | $.VarRef<proto.Properties> | null = null! as proto.Properties | $.VarRef<proto.Properties> | null
						if ((prop != null) && ((prop$ as proto.Properties).MapKeyProp != null)) {
							kprop = (prop$ as proto.Properties).MapKeyProp
						}
						{
							let err = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Unmarshaler).unmarshalValue($.markAsStructValue($.cloneStructValue(k)), ($.stringToBytes(ks) as json.RawMessage), kprop) : Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue(k)), ($.stringToBytes(ks) as json.RawMessage), kprop))
							if (err != null) {
								return err
							}
						}
					}

					if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(k)).Type()).AssignableTo($.pointerValueOrNil((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						k = $.assignStruct(k, $.markAsStructValue($.cloneStructValue(k)).Convert($.pointerValueOrNil((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
					}

					// Unmarshal map value.
					let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem()))
					let vprop: proto.Properties | $.VarRef<proto.Properties> | null = null! as proto.Properties | $.VarRef<proto.Properties> | null
					if ((prop != null) && ((prop$ as proto.Properties).MapValProp != null)) {
						vprop = (prop$ as proto.Properties).MapValProp
					}
					{
						let err = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as Unmarshaler).unmarshalValue($.markAsStructValue($.cloneStructValue(v)), (raw as json.RawMessage), vprop) : Unmarshaler.prototype.unmarshalValue.call(u, $.markAsStructValue($.cloneStructValue(v)), (raw as json.RawMessage), vprop))
						if (err != null) {
							return err
						}
					}
					$.markAsStructValue($.cloneStructValue(target)).SetMapIndex($.markAsStructValue($.cloneStructValue(k)), $.markAsStructValue($.cloneStructValue(v)))
				}
			}
			return null
		}

		// Non-finite numbers can be encoded as strings.
		let isFloat = ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13) || ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14)
		if (isFloat) {
			{
				let [num, ok] = $.mapGet<string, number, number>(nonFinite, $.bytesToString(inputValue), 0)
				if (ok) {
					$.markAsStructValue($.cloneStructValue(target)).SetFloat(num)
					return null
				}
			}
		}

		// integers & floats can be encoded as strings. In this case we drop
		// the quotes and proceed as normal.
		let isNum = ((((((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 6) || ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11)) || ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 5)) || ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10)) || ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 13)) || ((__goscriptAwait = (targetType !== null && (targetType as any).__isVarRef !== true && (targetType as any).__goValue === undefined ? (targetType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(targetType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 14)
		if (isNum && strings.HasPrefix($.bytesToString(inputValue), "\"")) {
			inputValue = ($.goSlice(inputValue, 1, $.sliceLen((inputValue as json.RawMessage)) - 1) as json.RawMessage)
		}

		// Use the encoding/json for parsing other value types.
		return json.Unmarshal(inputValue, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(target)).Addr())).Interface())
	}

	static __typeInfo = $.registerStructType(
		"jsonpb.Unmarshaler",
		() => new Unmarshaler(),
		() => [$.methodSignature("Unmarshal", [["r", "io.Reader"], ["pb", "proto.Message"]], ["error"], true), $.methodSignature("UnmarshalNext", [["dec", /* @__PURE__ */ $.pointerType("json.Decoder")], ["pb", "proto.Message"]], ["error"], true), $.methodSignature("unmarshalValue", [["target", "reflect.Value"], ["inputValue", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")], ["prop", /* @__PURE__ */ $.pointerType("proto.Properties")]], ["error"], true)],
		Unmarshaler,
		() => [/* @__PURE__ */ $.structField("AllowUnknownFields", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [1], 8, true)]
	)
}

export class fieldNames {
	public get orig(): string {
		return this._fields.orig
	}

	public set orig(value: string) {
		this._fields.orig = value
	}

	public get camel(): string {
		return this._fields.camel
	}

	public set camel(value: string) {
		this._fields.camel = value
	}

	public _fields: {
		orig: string
		camel: string
	}

	constructor(init?: Partial<{orig?: string, camel?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			orig: init?.orig ?? ("" as string),
			camel: init?.camel ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fieldNames {
		return new fieldNames(this, true)
	}

	public __goscriptAssign(source: fieldNames): void {
		const target = this._fields
		const values = source._fields
		target.orig = values.orig
		target.camel = values.camel
	}

	static __typeInfo = $.registerStructType(
		"jsonpb.fieldNames",
		() => new fieldNames(),
		() => [],
		fieldNames,
		() => [/* @__PURE__ */ $.structField("orig", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/jsonpb" }), /* @__PURE__ */ $.structField("camel", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/jsonpb" })]
	)
}

export class errWriter {
	public get writer(): io.Writer | null {
		return this._fields.writer
	}

	public set writer(value: io.Writer | null) {
		this._fields.writer = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		writer: io.Writer | null
		err: $.GoError
	}

	constructor(init?: Partial<{writer?: io.Writer | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			writer: init?.writer ?? (null! as io.Writer | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errWriter {
		return new errWriter(this, true)
	}

	public __goscriptAssign(source: errWriter): void {
		const target = this._fields
		const values = source._fields
		target.writer = $.assignFieldValue(target.writer, values.writer, "io.Writer")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async write(str: string): globalThis.Promise<void> {
		let w: errWriter | $.VarRef<errWriter> | null = this;
		const w$: errWriter = w == null ? $.pointerTarget<errWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<errWriter>(w)
		if ((w$ as errWriter).err != null) {
			return
		}
		let __goscriptTuple29: any = await $.pointerValue<Exclude<io.Writer, null>>((w$ as errWriter).writer).Write($.stringToBytes(str));
		;(w$ as errWriter).err = __goscriptTuple29[1]
	}

	static __typeInfo = $.registerStructType(
		"jsonpb.errWriter",
		() => new errWriter(),
		() => [$.methodSignature("write", [["str", /* @__PURE__ */ $.basicType("string")]], [], true)],
		errWriter,
		() => [/* @__PURE__ */ $.structField("writer", "io.Writer", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/jsonpb" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "github.com/gogo/protobuf/jsonpb" })]
	)
}

export const secondInNanos: bigint = 1000000000n

export const maxSecondsInDuration: number = 315576000000

export async function defaultResolveAny(typeUrl: string): globalThis.Promise<[proto.Message | null, $.GoError]> {
	// Only the part of typeUrl after the last slash is relevant.
	let mname = typeUrl
	{
		let slash: number = strings.LastIndex(mname, "/")
		if (slash >= 0) {
			mname = $.sliceStringOrBytes(mname, slash + 1, undefined)
		}
	}
	let mt = proto.MessageType(mname)
	if (mt == null) {
		return [null, fmt.Errorf("unknown message type %q", mname)]
	}
	return [$.mustTypeAssert<proto.Message | null>($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface(), "proto.Message"), null]
}

export let nonFinite: globalThis.Map<string, number> | null = $.makeMap<string, number>([["\"NaN\"", math.NaN()], ["\"Infinity\"", math.Inf(1)], ["\"-Infinity\"", math.Inf(-1)]])

export function __goscript_set_nonFinite(__goscriptValue: globalThis.Map<string, number> | null): void {
	nonFinite = __goscriptValue
}

export function int32Slice_Len(s: int32Slice): number {
	return $.sliceLen((s as int32Slice))
}

export function int32Slice_Less(s: int32Slice, i: number, j: number): boolean {
	return $.arrayIndex(s!, i) < $.arrayIndex(s!, j)
}

export function int32Slice_Swap(s: int32Slice, i: number, j: number): void {
	let __goscriptAssign0_0: number = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: number = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export let wktType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*jsonpb.isWkt", /* @__PURE__ */ $.pointerType("jsonpb.isWkt")))).Elem()

export function __goscript_set_wktType(__goscriptValue: reflect.Type | null): void {
	wktType = __goscriptValue
}

export let messageType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*proto.Message", /* @__PURE__ */ $.pointerType("proto.Message")))).Elem()

export function __goscript_set_messageType(__goscriptValue: reflect.Type | null): void {
	messageType = __goscriptValue
}

export async function UnmarshalNext(dec: json.Decoder | $.VarRef<json.Decoder> | null, pb: proto.Message | null): globalThis.Promise<$.GoError> {
	return Unmarshaler.prototype.UnmarshalNext.call(new Unmarshaler(), dec, pb)
}

export async function Unmarshal(r: io.Reader | null, pb: proto.Message | null): globalThis.Promise<$.GoError> {
	return Unmarshaler.prototype.Unmarshal.call(new Unmarshaler(), r, pb)
}

export async function UnmarshalString(str: string, pb: proto.Message | null): globalThis.Promise<$.GoError> {
	return Unmarshaler.prototype.Unmarshal.call(new Unmarshaler(), $.interfaceValue<io.Reader | null>(strings.NewReader(str), "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")), pb)
}

export async function unquote(s: string): globalThis.Promise<[string, $.GoError]> {
	let ret: $.VarRef<string> = $.varRef("")
	let err = await json.Unmarshal($.stringToBytes(s), $.interfaceValue(ret, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
	return [ret.value, err]
}

export async function jsonProperties(__goscriptParam0: reflect.StructField, origName: boolean): globalThis.Promise<proto.Properties | $.VarRef<proto.Properties> | null> {
	let f: $.VarRef<reflect.StructField> = $.varRef(__goscriptParam0)
	let prop: $.VarRef<proto.Properties> = $.varRef(new proto.Properties(undefined, true))
	await prop.value.Init(f.value.Type, f.value.Name, reflect.StructTag_Get(f.value.Tag, "protobuf"), f)
	if (origName || ($.stringEqual(prop.value.JSONName, ""))) {
		prop.value.JSONName = prop.value.OrigName
	}
	return prop
}

export function acceptedJSONFieldNames(prop: proto.Properties | $.VarRef<proto.Properties> | null): fieldNames {
	const prop$: proto.Properties = prop == null ? $.pointerTarget<proto.Properties>(prop) : (prop as any).__isVarRef === true ? (prop as any).value : (prop as any).__goValue === undefined ? (prop as any) : $.pointerTarget<proto.Properties>(prop)
	let opts = new fieldNames({orig: (prop$ as proto.Properties).OrigName, camel: (prop$ as proto.Properties).OrigName}, true)
	if (!$.stringEqual((prop$ as proto.Properties).JSONName, "")) {
		opts.camel = (prop$ as proto.Properties).JSONName
	}
	return (opts).clone()
}

export function mapKeys_Len(s: mapKeys): number {
	return $.sliceLen((s as mapKeys))
}

export function mapKeys_Swap(s: mapKeys, i: number, j: number): void {
	let __goscriptAssign1_0: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, j)))
	let __goscriptAssign1_1: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, i)))
	$.assignStruct($.sliceElems(s!)[$.sliceSlot(s!, i)], __goscriptAssign1_0)
	$.assignStruct($.sliceElems(s!)[$.sliceSlot(s!, j)], __goscriptAssign1_1)
}

export async function mapKeys_Less(s: mapKeys, i: number, j: number): globalThis.Promise<boolean> {
	{
		let k = $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, i))).Kind()
		if (k == $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, j))).Kind()) {
			switch (k) {
				case reflect.String:
				{
					return $.stringCompare($.markAsStructValue($.cloneStructValue($.arrayIndex(s!, i))).String(), $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, j))).String()) < 0
					break
				}
				case reflect.Int32:
				case reflect.Int64:
				{
					return $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, i))).Int() < $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, j))).Int()
					break
				}
				case reflect.Uint32:
				case reflect.Uint64:
				{
					return $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, i))).Uint() < $.markAsStructValue($.cloneStructValue($.arrayIndex(s!, j))).Uint()
					break
				}
			}
		}
	}
	return $.stringCompare(await fmt.Sprint($.markAsStructValue($.cloneStructValue($.arrayIndex(s!, i))).Interface()), await fmt.Sprint($.markAsStructValue($.cloneStructValue($.arrayIndex(s!, j))).Interface())) < 0
}

export async function checkRequiredFields(pb: proto.Message | null): globalThis.Promise<$.GoError> {
	// Most well-known type messages do not contain required fields.  The "Any" type may contain
	// a message that has required fields.
	//
	// When an Any message is being marshaled, the code will invoked proto.Unmarshal on Any.Value
	// field in order to transform that into JSON, and that should have returned an error if a
	// required field is not set in the embedded message.
	//
	// When an Any message is being unmarshaled, the code will have invoked proto.Marshal on the
	// embedded message to store the serialized message in Any.Value field, and that should have
	// returned an error if a required field is not set.
	{
		let [, ok] = $.typeAssertTuple<isWkt | null>(pb, "jsonpb.isWkt")
		if (ok) {
			return null
		}
	}

	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((pb as any))))
	// Skip message if it is not a struct pointer.
	if ($.markAsStructValue($.cloneStructValue(v)).Kind() != 22) {
		return null
	}
	v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	if ($.markAsStructValue($.cloneStructValue(v)).Kind() != 25) {
		return null
	}

	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).NumField(); i++) {
		let field = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i)))
		let sfield = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))

		if (!$.stringEqual(sfield.value.PkgPath, "")) {
			// blank PkgPath means the field is exported; skip if not exported
			continue
		}

		if (strings.HasPrefix(sfield.value.Name, "XXX_")) {
			continue
		}

		// Oneof field is an interface implemented by wrapper structs containing the actual oneof
		// field, i.e. an interface containing &T{real_value}.
		if (!$.stringEqual(reflect.StructTag_Get(sfield.value.Tag, "protobuf_oneof"), "")) {
			if ($.markAsStructValue($.cloneStructValue(field)).Kind() != 20) {
				continue
			}
			let __goscriptShadow25: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(field)).Elem()))
			if (($.markAsStructValue($.cloneStructValue(__goscriptShadow25)).Kind() != 22) || $.markAsStructValue($.cloneStructValue(__goscriptShadow25)).IsNil()) {
				continue
			}
			__goscriptShadow25 = $.assignStruct(__goscriptShadow25, $.markAsStructValue($.cloneStructValue(__goscriptShadow25)).Elem())
			if (($.markAsStructValue($.cloneStructValue(__goscriptShadow25)).Kind() != 25) || ($.markAsStructValue($.cloneStructValue(__goscriptShadow25)).NumField() < 1)) {
				continue
			}
			field = $.assignStruct(field, $.markAsStructValue($.cloneStructValue(__goscriptShadow25)).Field(0))
			sfield.value = $.assignStruct(sfield.value, ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(__goscriptShadow25)).Type()).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))
		}

		let protoTag = reflect.StructTag_Get(sfield.value.Tag, "protobuf")
		if ($.stringEqual(protoTag, "")) {
			continue
		}
		let prop: $.VarRef<proto.Properties> = $.varRef(new proto.Properties(undefined, true))
		await prop.value.Init(sfield.value.Type, sfield.value.Name, protoTag, sfield)

		switch ($.markAsStructValue($.cloneStructValue(field)).Kind()) {
			case reflect.Map:
			{
				if ($.markAsStructValue($.cloneStructValue(field)).IsNil()) {
					continue
				}
				// Check each map value.
				let keys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(field)).MapKeys()
				for (let __goscriptRangeTarget4 = keys, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
					let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as reflect.Value)))
					let __goscriptShadow26 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(field)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))
					{
						let err = await checkRequiredFieldsInValue(__goscriptShadow26)
						if (err != null) {
							return err
						}
					}
				}
				break
			}
			case reflect.Slice:
			{
				if (!prop.value.Repeated) {
					if (prop.value.Required && $.markAsStructValue($.cloneStructValue(field)).IsNil()) {
						return fmt.Errorf("required field %q is not set", prop.value.Name)
					}
					continue
				}

				// Handle repeated type.
				if ($.markAsStructValue($.cloneStructValue(field)).IsNil()) {
					continue
				}
				// Check each slice item.
				for (let __goscriptShadow27 = 0; __goscriptShadow27 < $.markAsStructValue($.cloneStructValue(field)).Len(); __goscriptShadow27++) {
					let __goscriptShadow28 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(field)).Index(__goscriptShadow27)))
					{
						let err = await checkRequiredFieldsInValue(__goscriptShadow28)
						if (err != null) {
							return err
						}
					}
				}
				break
			}
			case reflect.Ptr:
			{
				if ($.markAsStructValue($.cloneStructValue(field)).IsNil()) {
					if (prop.value.Required) {
						return fmt.Errorf("required field %q is not set", prop.value.Name)
					}
					continue
				}
				{
					let err = await checkRequiredFieldsInValue(field)
					if (err != null) {
						return err
					}
				}
				break
			}
		}
	}

	// Handle proto2 extensions.
	for (const [__rangeKey, ext] of (await proto.RegisteredExtensions(pb))?.entries() ?? []) {
		if (!await proto.HasExtension(pb, ext)) {
			continue
		}
		let [ep, err] = await proto.GetExtension(pb, ext)
		if (err != null) {
			return err
		}
		err = await checkRequiredFieldsInValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(ep))))
		if (err != null) {
			return err
		}
	}

	return null
}

export async function checkRequiredFieldsInValue(v: reflect.Value): globalThis.Promise<$.GoError> {
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(messageType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return checkRequiredFields($.mustTypeAssert<proto.Message | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "proto.Message"))
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (int32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "jsonpb.int32Slice"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Len: (receiver: any, ...args: any[]) => (mapKeys_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (mapKeys_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (mapKeys_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType("reflect.Value", "jsonpb.mapKeys"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Canonicalize: (receiver: any, ...args: any[]) => (jsontext.Value_Canonicalize as any)(receiver, ...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => (jsontext.Value_Clone as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Compact: (receiver: any, ...args: any[]) => (jsontext.Value_Compact as any)(receiver, ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (jsontext.Value_Format as any)(receiver, ...$.stripGenericTypeArgs(args)), Indent: (receiver: any, ...args: any[]) => (jsontext.Value_Indent as any)(receiver, ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (jsontext.Value_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Kind: (receiver: any, ...args: any[]) => (jsontext.Value_Kind as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (jsontext.Value_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (jsontext.Value_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (jsontext.Value_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (jsontext.Value_format as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ([$.methodSignature("Canonicalize", [["opts", /* @__PURE__ */ $.sliceType("jsonopts.Options")]], ["error"]), $.methodSignature("Clone", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")]), $.methodSignature("Compact", [["opts", /* @__PURE__ */ $.sliceType("jsonopts.Options")]], ["error"]), $.methodSignature("Format", [["opts", /* @__PURE__ */ $.sliceType("jsonopts.Options")]], ["error"]), $.methodSignature("Indent", [["opts", /* @__PURE__ */ $.sliceType("jsonopts.Options")]], ["error"]), $.methodSignature("IsValid", [["opts", /* @__PURE__ */ $.sliceType("jsonopts.Options")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("uint8", "jsontext.Kind")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("format", [["opts1", /* @__PURE__ */ $.sliceType("jsonopts.Options")], ["opts2", /* @__PURE__ */ $.sliceType("jsonopts.Options")]], ["error"])])
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({Clone: (receiver: any, ...args: any[]) => (jsontext.Value_Clone as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (jsontext.Value_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Kind: (receiver: any, ...args: any[]) => (jsontext.Value_Kind as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (jsontext.Value_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (jsontext.Value_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"))
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ([$.methodSignature("Clone", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")]), $.methodSignature("IsValid", [["opts", /* @__PURE__ */ $.sliceType("jsonopts.Options")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("uint8", "jsontext.Kind")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
