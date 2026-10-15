// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as json from "@goscript/google.golang.org/protobuf/internal/encoding/json/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as order from "@goscript/google.golang.org/protobuf/internal/order/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as __goscript_well_known_types from "./well_known_types.gs.ts"
import "@goscript/encoding/base64/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/json/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/order/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/bytes/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "./well_known_types.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/encoding/protojson", ["protojson.MarshalOptions", "protojson.encoder", "protojson.typeURLFieldRanger", "protojson.unpopulatedFieldRanger"])

export class MarshalOptions {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	// Multiline specifies whether the marshaler should format the output in
	// indented-form with every textual element on a new line.
	// If Indent is an empty string, then an arbitrary indent is chosen.
	public get Multiline(): boolean {
		return this._fields.Multiline
	}

	public set Multiline(value: boolean) {
		this._fields.Multiline = value
	}

	// Indent specifies the set of indentation characters to use in a multiline
	// formatted output such that every entry is preceded by Indent and
	// terminated by a newline. If non-empty, then Multiline is treated as true.
	// Indent can only be composed of space or tab characters.
	public get Indent(): string {
		return this._fields.Indent
	}

	public set Indent(value: string) {
		this._fields.Indent = value
	}

	// AllowPartial allows messages that have missing required fields to marshal
	// without returning an error. If AllowPartial is false (the default),
	// Marshal will return error if there are any missing required fields.
	public get AllowPartial(): boolean {
		return this._fields.AllowPartial
	}

	public set AllowPartial(value: boolean) {
		this._fields.AllowPartial = value
	}

	// UseProtoNames uses proto field name instead of lowerCamelCase name in JSON
	// field names.
	public get UseProtoNames(): boolean {
		return this._fields.UseProtoNames
	}

	public set UseProtoNames(value: boolean) {
		this._fields.UseProtoNames = value
	}

	// UseEnumNumbers emits enum values as numbers.
	public get UseEnumNumbers(): boolean {
		return this._fields.UseEnumNumbers
	}

	public set UseEnumNumbers(value: boolean) {
		this._fields.UseEnumNumbers = value
	}

	// EmitUnpopulated specifies whether to emit unpopulated fields. It does not
	// emit unpopulated oneof fields or unpopulated extension fields.
	// The JSON value emitted for unpopulated fields are as follows:
	//  ╔═══════╤════════════════════════════╗
	//  ║ JSON  │ Protobuf field             ║
	//  ╠═══════╪════════════════════════════╣
	//  ║ false │ proto3 boolean fields      ║
	//  ║ 0     │ proto3 numeric fields      ║
	//  ║ ""    │ proto3 string/bytes fields ║
	//  ║ null  │ proto2 scalar fields       ║
	//  ║ null  │ message fields             ║
	//  ║ []    │ list fields                ║
	//  ║ {}    │ map fields                 ║
	//  ╚═══════╧════════════════════════════╝
	public get EmitUnpopulated(): boolean {
		return this._fields.EmitUnpopulated
	}

	public set EmitUnpopulated(value: boolean) {
		this._fields.EmitUnpopulated = value
	}

	// EmitDefaultValues specifies whether to emit default-valued primitive fields,
	// empty lists, and empty maps. The fields affected are as follows:
	//  ╔═══════╤════════════════════════════════════════╗
	//  ║ JSON  │ Protobuf field                         ║
	//  ╠═══════╪════════════════════════════════════════╣
	//  ║ false │ non-optional scalar boolean fields     ║
	//  ║ 0     │ non-optional scalar numeric fields     ║
	//  ║ ""    │ non-optional scalar string/byte fields ║
	//  ║ []    │ empty repeated fields                  ║
	//  ║ {}    │ empty map fields                       ║
	//  ╚═══════╧════════════════════════════════════════╝
	//
	// Behaves similarly to EmitUnpopulated, but does not emit "null"-value fields,
	// i.e. presence-sensing fields that are omitted will remain omitted to preserve
	// presence-sensing.
	// EmitUnpopulated takes precedence over EmitDefaultValues since the former generates
	// a strict superset of the latter.
	public get EmitDefaultValues(): boolean {
		return this._fields.EmitDefaultValues
	}

	public set EmitDefaultValues(value: boolean) {
		this._fields.EmitDefaultValues = value
	}

	// Resolver is used for looking up types when expanding google.protobuf.Any
	// messages. If nil, this defaults to using protoregistry.GlobalTypes.
	public get Resolver(): any {
		return this._fields.Resolver
	}

	public set Resolver(value: any) {
		this._fields.Resolver = value
	}

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		Multiline: boolean
		Indent: string
		AllowPartial: boolean
		UseProtoNames: boolean
		UseEnumNumbers: boolean
		EmitUnpopulated: boolean
		EmitDefaultValues: boolean
		Resolver: any
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, Multiline?: boolean, Indent?: string, AllowPartial?: boolean, UseProtoNames?: boolean, UseEnumNumbers?: boolean, EmitUnpopulated?: boolean, EmitDefaultValues?: boolean, Resolver?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			Multiline: init?.Multiline ?? (false as boolean),
			Indent: init?.Indent ?? ("" as string),
			AllowPartial: init?.AllowPartial ?? (false as boolean),
			UseProtoNames: init?.UseProtoNames ?? (false as boolean),
			UseEnumNumbers: init?.UseEnumNumbers ?? (false as boolean),
			EmitUnpopulated: init?.EmitUnpopulated ?? (false as boolean),
			EmitDefaultValues: init?.EmitDefaultValues ?? (false as boolean),
			Resolver: init?.Resolver ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MarshalOptions {
		return new MarshalOptions(this, true)
	}

	public __goscriptAssign(source: MarshalOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NoUnkeyedLiterals, values.NoUnkeyedLiterals)
		target.Multiline = values.Multiline
		target.Indent = values.Indent
		target.AllowPartial = values.AllowPartial
		target.UseProtoNames = values.UseProtoNames
		target.UseEnumNumbers = values.UseEnumNumbers
		target.EmitUnpopulated = values.EmitUnpopulated
		target.EmitDefaultValues = values.EmitDefaultValues
		target.Resolver = $.assignFieldValue(target.Resolver, values.Resolver, { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])] })
	}

	public async Format(m: proto.Message | null): globalThis.Promise<string> {
		let o: MarshalOptions = this;
		if ((m == null) || !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return "<nil>"
		}
		o.AllowPartial = true
		let __goscriptTuple0: any = await o.Marshal(m)
		let b: $.Slice<number> = __goscriptTuple0[0]
		return $.bytesToString(b)
	}

	public async Marshal(m: proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		return $.markAsStructValue($.cloneStructValue(o)).marshal(null, m)
	}

	public async MarshalAppend(b: $.Slice<number>, m: proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		return $.markAsStructValue($.cloneStructValue(o)).marshal(b, m)
	}

	public async marshal(b: $.Slice<number>, m: proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let o: MarshalOptions = this;
		if (o.Multiline && ($.stringEqual(o.Indent, ""))) {
			o.Indent = "  "
		}
		if (o.Resolver == null) {
			o.Resolver = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
		}

		let __goscriptTuple1: any = await json.NewEncoder(b, o.Indent)
		let internalEnc: json.Encoder | $.VarRef<json.Encoder> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}

		// Treat nil message interface as an empty message,
		// in which case the output in an empty JSON object.
		if (m == null) {
			return [$.append(b, $.uint(123, 8), $.uint(125, 8), $.byteSliceHint), null]
		}

		let enc = $.varRef(new encoder({Encoder: internalEnc, opts: o}, true))
		{
			let __goscriptShadow0 = await $.markAsStructValue($.cloneStructValue(enc.value)).marshalMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "")
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
		}
		if (o.AllowPartial) {
			return [$.pointerValue<json.Encoder>(enc.value.Encoder).Bytes(), null]
		}
		return [$.pointerValue<json.Encoder>(enc.value.Encoder).Bytes(), await proto.CheckInitialized(m)]
	}

	static __typeInfo = $.registerStructType(
		"protojson.MarshalOptions",
		() => new MarshalOptions(),
		() => [$.methodSignature("Format", [["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Marshal", [["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalAppend", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])],
		MarshalOptions,
		() => [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Multiline", /* @__PURE__ */ $.basicType("bool"), [1], 0, true), /* @__PURE__ */ $.structField("Indent", /* @__PURE__ */ $.basicType("string"), [2], 8, true), /* @__PURE__ */ $.structField("AllowPartial", /* @__PURE__ */ $.basicType("bool"), [3], 24, true), /* @__PURE__ */ $.structField("UseProtoNames", /* @__PURE__ */ $.basicType("bool"), [4], 25, true), /* @__PURE__ */ $.structField("UseEnumNumbers", /* @__PURE__ */ $.basicType("bool"), [5], 26, true), /* @__PURE__ */ $.structField("EmitUnpopulated", /* @__PURE__ */ $.basicType("bool"), [6], 27, true), /* @__PURE__ */ $.structField("EmitDefaultValues", /* @__PURE__ */ $.basicType("bool"), [7], 28, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])] }, [8], 32, true)]
	)
}

export class encoder {
	public get Encoder(): json.Encoder | $.VarRef<json.Encoder> | null {
		return this._fields.Encoder
	}

	public set Encoder(value: json.Encoder | $.VarRef<json.Encoder> | null) {
		this._fields.Encoder = value
	}

	public get opts(): MarshalOptions {
		return this._fields.opts
	}

	public set opts(value: MarshalOptions) {
		this._fields.opts = value
	}

	public _fields: {
		Encoder: json.Encoder | $.VarRef<json.Encoder> | null
		opts: MarshalOptions
	}

	constructor(init?: Partial<{Encoder?: json.Encoder | $.VarRef<json.Encoder> | null, opts?: MarshalOptions}>, __goscriptValue?: boolean) {
		this._fields = {
			Encoder: init?.Encoder ?? (null! as json.Encoder | $.VarRef<json.Encoder> | null),
			opts: init?.opts ? init.opts.clone() : new MarshalOptions(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encoder {
		return new encoder(this, true)
	}

	public __goscriptAssign(source: encoder): void {
		const target = this._fields
		const values = source._fields
		target.Encoder = values.Encoder
		$.assignStruct(target.opts, values.opts)
	}

	public async marshalAny(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		using __defer = new $.DisposableStack()
		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdType = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdValue = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Has(fdType), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Has(fdValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {

				$.pointerValue<json.Encoder>(e.value.Encoder).StartObject()
				$.pointerValue<json.Encoder>(e.value.Encoder).EndObject()
				return null
			} else {

				return errors.New("%s: %v is not set", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Any_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(genid.Any_TypeUrl_field_name, "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
			}
		}

		let typeVal = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdType), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		let valueVal = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()

		let typeURL = await $.markAsStructValue($.cloneStructValue(typeVal)).String()
		let [emt, err] = await $.pointerValue<any>(e.value.opts.Resolver).FindMessageByURL(typeURL)
		if (err != null) {
			return errors.New("%s: unable to resolve %q: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Any_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), typeURL, (err as any)]))
		}

		let em = (__goscriptAwait = (emt !== null && (emt as any).__isVarRef !== true && (emt as any).__goValue === undefined ? (emt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(emt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		err = await $.markAsStructValue($.cloneStructValue(new proto.UnmarshalOptions({AllowPartial: true, Resolver: (e.value.opts.Resolver as any)}, true))).Unmarshal(await $.markAsStructValue($.cloneStructValue(valueVal)).Bytes(), (__goscriptAwait = (em !== null && (em as any).__isVarRef !== true && (em as any).__goValue === undefined ? (em as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(em)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		if (err != null) {
			return errors.New("%s: unable to unmarshal %q: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Any_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), typeURL, (err as any)]))
		}

		// marshal is a centralized function that all marshal operations go through.
		// For profiling purposes, avoid changing the name of this function or
		// introducing other code paths for marshal that do not go through this.
		{
			let marshal = __goscript_well_known_types.wellKnownTypeMarshaler((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (emt !== null && (emt as any).__isVarRef !== true && (emt as any).__goValue === undefined ? (emt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(emt)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (marshal != null) {
				$.pointerValue<json.Encoder>(e.value.Encoder).StartObject()
				const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.EndObject())($.pointerValue<json.Encoder>(e.value.Encoder)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/encoding/json.(*Encoder).EndObject-fm")
				__defer.defer(() => { __goscriptDeferCallee0() })

				$.pointerValue<json.Encoder>(e.value.Encoder).WriteName("@type")
				{
					let __goscriptShadow1 = $.pointerValue<json.Encoder>(e.value.Encoder).WriteString(typeURL)
					if (__goscriptShadow1 != null) {
						return __goscriptShadow1
					}
				}

				$.pointerValue<json.Encoder>(e.value.Encoder).WriteName("value")
				return (__goscriptAwait = marshal!((e.value).clone(), em), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		// Treat nil message interface as an empty message,
		// in which case the output in an empty JSON object.
		{
			let __goscriptShadow2 = await $.markAsStructValue($.cloneStructValue(e.value)).marshalMessage(em, typeURL)
			if (__goscriptShadow2 != null) {
				return __goscriptShadow2
			}
		}

		return null
	}

	public async marshalDuration(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdSeconds = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdNanos = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let secsVal = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdSeconds), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		let nanosVal = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdNanos), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		let secs = await $.markAsStructValue($.cloneStructValue(secsVal)).Int()
		let nanos = await $.markAsStructValue($.cloneStructValue(nanosVal)).Int()
		if ((secs < -315576000000n) || (secs > 315576000000n)) {
			return errors.New("%s: seconds out of range %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Duration_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(secs, "int64")]))
		}
		if ((nanos < -999999999n) || (nanos > 999999999n)) {
			return errors.New("%s: nanos out of range %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Duration_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(nanos, "int64")]))
		}
		if (((secs > 0n) && (nanos < 0n)) || ((secs < 0n) && (nanos > 0n))) {
			return errors.New("%s: signs of seconds and nanos do not match", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Duration_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}

		let sign: string = ""
		if ((secs < 0n) || (nanos < 0n)) {
			let __goscriptAssign0_0: string = "-"
			let __goscriptAssign0_1: bigint = $.int64Mul(-1n, secs)
			let __goscriptAssign0_2: bigint = $.int64Mul(-1n, nanos)
			sign = __goscriptAssign0_0
			secs = __goscriptAssign0_1
			nanos = __goscriptAssign0_2
		}
		let x = await fmt.Sprintf("%s%d.%09d", sign, $.basicInterfaceValue(secs, "int64"), $.basicInterfaceValue(nanos, "int64"))
		x = strings.TrimSuffix(x, "000")
		x = strings.TrimSuffix(x, "000")
		x = strings.TrimSuffix(x, ".000")
		$.pointerValue<json.Encoder>(e.value.Encoder).WriteString($.concatString(x, "s"))
		return null
	}

	public marshalEmpty(_p0: protoreflect.Message | null): $.GoError {
		const e = $.varRef(this);
		$.pointerValue<json.Encoder>(e.value.Encoder).StartObject()
		$.pointerValue<json.Encoder>(e.value.Encoder).EndObject()
		return null
	}

	public async marshalFieldMask(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let list = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List()
		let paths: $.Slice<string> = $.makeSlice<string>(0, (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "string")

		for (let i = 0; i < (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let s = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).String()
			if (!protoreflect.FullName_IsValid(s)) {
				return errors.New("%s contains invalid path: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.FieldMask_Paths_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), s]))
			}

			let cc = strs.JSONCamelCase(s)
			if (!$.stringEqual(s, strs.JSONSnakeCase(cc))) {
				return errors.New("%s contains irreversible value %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.FieldMask_Paths_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), s]))
			}
			paths = $.appendOne(paths, cc)
		}

		$.pointerValue<json.Encoder>(e.value.Encoder).WriteString(strings.Join(paths, ","))
		return null
	}

	public async marshalKnownValue(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = this;
		let od = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Oneofs(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(genid.Value_Kind_oneof_name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fd = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).WhichOneof(od), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (fd == null) {
			return errors.New("%s: none of the oneof fields is set", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Value_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
		}
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2) {
			{
				let v = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Float()
				if (math.IsNaN(v) || math.IsInf(v, 0)) {
					return errors.New("%s: invalid %v value", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Value_NumberValue_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(v, "float64")]))
				}
			}
		}
		return $.markAsStructValue($.cloneStructValue(e)).marshalSingular((((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone(), fd)
	}

	public async marshalList(list: protoreflect.List | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		using __defer = new $.DisposableStack()
		$.pointerValue<json.Encoder>(e.value.Encoder).StartArray()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.EndArray())($.pointerValue<json.Encoder>(e.value.Encoder)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/encoding/json.(*Encoder).EndArray-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		for (let i = 0; i < (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let item = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			{
				let err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalSingular(item, fd)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async marshalListValue(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.markAsStructValue($.cloneStructValue(e)).marshalList(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List(), fd)
	}

	public async marshalMap(mmap: protoreflect.Map | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		using __defer = new $.DisposableStack()
		$.pointerValue<json.Encoder>(e.value.Encoder).StartObject()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.EndObject())($.pointerValue<json.Encoder>(e.value.Encoder)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/encoding/json.(*Encoder).EndObject-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		let err: $.GoError = null! as $.GoError
		await order.RangeEntries((mmap as order.EntryRanger | null), order.GenericKeyOrder, $.functionValue(async (k: protoreflect.MapKey, v: protoreflect.Value): globalThis.Promise<boolean> => {
			{
				err = $.pointerValue<json.Encoder>(e.value.Encoder).WriteName(await k.String())
				if (err != null) {
					return false
				}
			}
			{
				err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalSingular(v, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				if (err != null) {
					return false
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return err
	}

	public async marshalMessage(m: protoreflect.Message | null, typeURL: string): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		using __defer = new $.DisposableStack()
		if (!flags.ProtoLegacy && await messageset.IsMessageSet((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return errors.New("no support for proto1 MessageSets", null)
		}

		{
			let marshal = __goscript_well_known_types.wellKnownTypeMarshaler((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (marshal != null) {
				return marshal!((e.value).clone(), m)
			}
		}

		$.pointerValue<json.Encoder>(e.value.Encoder).StartObject()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.EndObject())($.pointerValue<json.Encoder>(e.value.Encoder)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/encoding/json.(*Encoder).EndObject-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		let fields: order.FieldRanger | null = (m as order.FieldRanger | null)
		switch ((true as boolean)) {
			case e.value.opts.EmitUnpopulated:
			{
				fields = $.interfaceValue<order.FieldRanger | null>(new unpopulatedFieldRanger({Message: m, skipNull: false}, true), "protojson.unpopulatedFieldRanger", "protojson.unpopulatedFieldRanger")
				break
			}
			case e.value.opts.EmitDefaultValues:
			{
				fields = $.interfaceValue<order.FieldRanger | null>(new unpopulatedFieldRanger({Message: m, skipNull: true}, true), "protojson.unpopulatedFieldRanger", "protojson.unpopulatedFieldRanger")
				break
			}
		}
		if (!$.stringEqual(typeURL, "")) {
			fields = $.interfaceValue<order.FieldRanger | null>(new typeURLFieldRanger({FieldRanger: fields, typeURL: typeURL}, true), "protojson.typeURLFieldRanger", "protojson.typeURLFieldRanger")
		}

		let err: $.GoError = null! as $.GoError
		await order.RangeFields(fields, order.IndexNameFieldOrder, $.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			let name = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).JSONName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (e.value.opts.UseProtoNames) {
				name = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).TextName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			{
				err = $.pointerValue<json.Encoder>(e.value.Encoder).WriteName(name)
				if (err != null) {
					return false
				}
			}
			{
				err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalValue(v, fd)
				if (err != null) {
					return false
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return err
	}

	public async marshalSingular(val: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		if (!val.IsValid()) {
			$.pointerValue<json.Encoder>(e.value.Encoder).WriteNull()
			return null
		}

		{
			let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch (kind) {
				case protoreflect.BoolKind:
				{
					$.pointerValue<json.Encoder>(e.value.Encoder).WriteBool(await val.Bool())
					break
				}
				case protoreflect.StringKind:
				{
					if ($.pointerValue<json.Encoder>(e.value.Encoder).WriteString(await val.String()) != null) {
						return errors.InvalidUTF8((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
					break
				}
				case protoreflect.Int32Kind:
				case protoreflect.Sint32Kind:
				case protoreflect.Sfixed32Kind:
				{
					$.pointerValue<json.Encoder>(e.value.Encoder).WriteInt(await val.Int())
					break
				}
				case protoreflect.Uint32Kind:
				case protoreflect.Fixed32Kind:
				{
					$.pointerValue<json.Encoder>(e.value.Encoder).WriteUint(await val.Uint())
					break
				}
				case protoreflect.Int64Kind:
				case protoreflect.Sint64Kind:
				case protoreflect.Uint64Kind:
				case protoreflect.Sfixed64Kind:
				case protoreflect.Fixed64Kind:
				{
					$.pointerValue<json.Encoder>(e.value.Encoder).WriteString(await val.String())
					break
				}
				case protoreflect.FloatKind:
				{
					$.pointerValue<json.Encoder>(e.value.Encoder).WriteFloat(await val.Float(), 32)
					break
				}
				case protoreflect.DoubleKind:
				{
					$.pointerValue<json.Encoder>(e.value.Encoder).WriteFloat(await val.Float(), 64)
					break
				}
				case protoreflect.BytesKind:
				{
					$.pointerValue<json.Encoder>(e.value.Encoder).WriteString(base64.Encoding.prototype.EncodeToString.call(base64.StdEncoding, await val.Bytes()))
					break
				}
				case protoreflect.EnumKind:
				{
					if ($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), genid.NullValue_enum_fullname)) {
						$.pointerValue<json.Encoder>(e.value.Encoder).WriteNull()
					} else {
						let desc = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(await val.Enum()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (e.value.opts.UseEnumNumbers || (desc == null)) {
							$.pointerValue<json.Encoder>(e.value.Encoder).WriteInt($.int64(await val.Enum()))
						} else {
							$.pointerValue<json.Encoder>(e.value.Encoder).WriteString((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(desc)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
					}
					break
				}
				case protoreflect.MessageKind:
				case protoreflect.GroupKind:
				{
					{
						let err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalMessage(await val.Message(), "")
						if (err != null) {
							return err
						}
					}
					break
				}
				default:
				{
					$.panic(await fmt.Sprintf("%v has unknown kind: %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())))
					break
				}
			}
		}
		return null
	}

	public async marshalStruct(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.markAsStructValue($.cloneStructValue(e)).marshalMap(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map(), fd)
	}

	public async marshalTimestamp(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdSeconds = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdNanos = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let secsVal = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdSeconds), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		let nanosVal = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdNanos), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		let secs = await $.markAsStructValue($.cloneStructValue(secsVal)).Int()
		let nanos = await $.markAsStructValue($.cloneStructValue(nanosVal)).Int()
		if ((secs < -62135596800n) || (secs > 253402300799n)) {
			return errors.New("%s: seconds out of range %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Timestamp_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(secs, "int64")]))
		}
		if ((nanos < 0n) || (nanos > 999999999n)) {
			return errors.New("%s: nanos out of range %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Timestamp_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(nanos, "int64")]))
		}

		let t = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Unix(secs, nanos))).UTC()))
		let x = $.markAsStructValue($.cloneStructValue(t)).Format("2006-01-02T15:04:05.000000000")
		x = strings.TrimSuffix(x, "000")
		x = strings.TrimSuffix(x, "000")
		x = strings.TrimSuffix(x, ".000")
		$.pointerValue<json.Encoder>(e.value.Encoder).WriteString($.concatString(x, "Z"))
		return null
	}

	public async marshalValue(val: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = this;
		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.markAsStructValue($.cloneStructValue(e)).marshalList(await val.List(), fd)
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.markAsStructValue($.cloneStructValue(e)).marshalMap(await val.Map(), fd)
				break
			}
			default:
			{
				return $.markAsStructValue($.cloneStructValue(e)).marshalSingular(val, fd)
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async marshalWrapperType(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const e = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let val = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		return $.markAsStructValue($.cloneStructValue(e)).marshalSingular((val).clone(), fd)
	}

	public Bytes(): any {
		return $.pointerValue<json.Encoder>(this.Encoder).Bytes()
	}

	public EndArray(): any {
		return $.pointerValue<json.Encoder>(this.Encoder).EndArray()
	}

	public EndObject(): any {
		return $.pointerValue<json.Encoder>(this.Encoder).EndObject()
	}

	public StartArray(): any {
		return $.pointerValue<json.Encoder>(this.Encoder).StartArray()
	}

	public StartObject(): any {
		return $.pointerValue<json.Encoder>(this.Encoder).StartObject()
	}

	public WriteBool(b: any): any {
		return $.pointerValue<json.Encoder>(this.Encoder).WriteBool(b)
	}

	public WriteFloat(n: any, bitSize: any): any {
		return $.pointerValue<json.Encoder>(this.Encoder).WriteFloat(n, bitSize)
	}

	public WriteInt(n: any): any {
		return $.pointerValue<json.Encoder>(this.Encoder).WriteInt(n)
	}

	public WriteName(s: any): any {
		return $.pointerValue<json.Encoder>(this.Encoder).WriteName(s)
	}

	public WriteNull(): any {
		return $.pointerValue<json.Encoder>(this.Encoder).WriteNull()
	}

	public WriteString(s: any): any {
		return $.pointerValue<json.Encoder>(this.Encoder).WriteString(s)
	}

	public WriteUint(n: any): any {
		return $.pointerValue<json.Encoder>(this.Encoder).WriteUint(n)
	}

	static __typeInfo = $.registerStructType(
		"protojson.encoder",
		() => new encoder(),
		() => [$.methodSignature("marshalAny", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("marshalDuration", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("marshalEmpty", ["protoreflect.Message"], ["error"]), $.methodSignature("marshalFieldMask", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("marshalKnownValue", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("marshalList", [["list", "protoreflect.List"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalListValue", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("marshalMap", [["mmap", "protoreflect.Map"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalMessage", [["m", "protoreflect.Message"], ["typeURL", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("marshalSingular", [["val", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalStruct", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("marshalTimestamp", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("marshalValue", [["val", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalWrapperType", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("EndArray"), $.methodSignature("EndObject"), $.methodSignature("StartArray"), $.methodSignature("StartObject"), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("WriteFloat", [["n", /* @__PURE__ */ $.basicType("float64")], ["bitSize", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("WriteInt", [["n", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("WriteName", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteNull"), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteUint", [["n", /* @__PURE__ */ $.basicType("uint64")]])],
		encoder,
		() => [/* @__PURE__ */ $.structField("Encoder", /* @__PURE__ */ $.pointerType("json.Encoder"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("opts", "protojson.MarshalOptions", [1], 8, false, { pkgPath: "google.golang.org/protobuf/encoding/protojson" })]
	)
}

export class typeURLFieldRanger {
	public get FieldRanger(): order.FieldRanger | null {
		return this._fields.FieldRanger
	}

	public set FieldRanger(value: order.FieldRanger | null) {
		this._fields.FieldRanger = value
	}

	public get typeURL(): string {
		return this._fields.typeURL
	}

	public set typeURL(value: string) {
		this._fields.typeURL = value
	}

	public _fields: {
		FieldRanger: order.FieldRanger | null
		typeURL: string
	}

	constructor(init?: Partial<{FieldRanger?: order.FieldRanger | null, typeURL?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			FieldRanger: init?.FieldRanger ?? (null! as order.FieldRanger | null),
			typeURL: init?.typeURL ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): typeURLFieldRanger {
		return new typeURLFieldRanger(this, true)
	}

	public __goscriptAssign(source: typeURLFieldRanger): void {
		const target = this._fields
		const values = source._fields
		target.FieldRanger = $.assignFieldValue(target.FieldRanger, values.FieldRanger, "order.FieldRanger")
		target.typeURL = values.typeURL
	}

	public async Range(f: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const m = this;
		if (!(__goscriptAwait = f!(typeFieldDesc, protoreflect.ValueOfString(m.typeURL)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<order.FieldRanger, null>>(m.FieldRanger).Range(f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"protojson.typeURLFieldRanger",
		() => new typeURLFieldRanger(),
		() => [$.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]])],
		typeURLFieldRanger,
		() => [/* @__PURE__ */ $.structField("FieldRanger", "order.FieldRanger", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("typeURL", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "google.golang.org/protobuf/encoding/protojson" })]
	)
}

export class unpopulatedFieldRanger {
	public get Message(): protoreflect.Message | null {
		return this._fields.Message
	}

	public set Message(value: protoreflect.Message | null) {
		this._fields.Message = value
	}

	public get skipNull(): boolean {
		return this._fields.skipNull
	}

	public set skipNull(value: boolean) {
		this._fields.skipNull = value
	}

	public _fields: {
		Message: protoreflect.Message | null
		skipNull: boolean
	}

	constructor(init?: Partial<{Message?: protoreflect.Message | null, skipNull?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? (null! as protoreflect.Message | null),
			skipNull: init?.skipNull ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unpopulatedFieldRanger {
		return new unpopulatedFieldRanger(this, true)
	}

	public __goscriptAssign(source: unpopulatedFieldRanger): void {
		const target = this._fields
		const values = source._fields
		target.Message = $.assignFieldValue(target.Message, values.Message, "protoreflect.Message")
		target.skipNull = values.skipNull
	}

	public async Range(f: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const m = this;
		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((await $.pointerValue<Exclude<protoreflect.Message, null>>(m.Message).Descriptor())).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0; i < (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (await $.pointerValue<Exclude<protoreflect.Message, null>>(m.Message).Has(fd) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)) {
				continue
			}

			let v = (await $.pointerValue<Exclude<protoreflect.Message, null>>(m.Message).Get(fd)).clone()
			let isProto2Scalar = ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Syntax(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2) && ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value).IsValid()
			let isSingularMessage = ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 3) && ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)
			if (isProto2Scalar || isSingularMessage) {
				if (m.skipNull) {
					continue
				}
				v = $.assignStruct(v, new protoreflect.Value(undefined, true))
			}
			if (!(__goscriptAwait = f!(fd, (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
		void (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>(m.Message).Range(f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Clear(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Clear(_p0)
	}

	public async Descriptor(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Descriptor()
	}

	public async Get(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Get(_p0)
	}

	public async GetUnknown(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).GetUnknown()
	}

	public async Has(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Has(_p0)
	}

	public async Interface(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Interface()
	}

	public IsValid(): any {
		return $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).IsValid()
	}

	public async Mutable(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Mutable(_p0)
	}

	public async New(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).New()
	}

	public async NewField(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).NewField(_p0)
	}

	public async ProtoMethods(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).ProtoMethods()
	}

	public async Set(_p0: any, _p1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Set(_p0, _p1)
	}

	public async SetUnknown(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).SetUnknown(_p0)
	}

	public async Type(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).Type()
	}

	public async WhichOneof(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protoreflect.Message | null, null>>(this.Message).WhichOneof(_p0)
	}

	static __typeInfo = $.registerStructType(
		"protojson.unpopulatedFieldRanger",
		() => new unpopulatedFieldRanger(),
		() => [$.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]]), $.methodSignature("Clear", ["protoreflect.FieldDescriptor"]), $.methodSignature("Descriptor", [], ["protoreflect.MessageDescriptor"]), $.methodSignature("Get", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("GetUnknown", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")]), $.methodSignature("Has", ["protoreflect.FieldDescriptor"], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Interface", [], ["protoreflect.ProtoMessage"]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Mutable", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("New", [], ["protoreflect.Message"]), $.methodSignature("NewField", ["protoreflect.FieldDescriptor"], ["protoreflect.Value"]), $.methodSignature("ProtoMethods", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint64"), [1], 0, true), /* @__PURE__ */ $.structField("Size", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 0, true)] }] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("Marshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [3], 16, true), /* @__PURE__ */ $.structField("Unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"] } as $.FunctionTypeInfo), [4], 24, true), /* @__PURE__ */ $.structField("Merge", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }] } as $.FunctionTypeInfo), [5], 32, true), /* @__PURE__ */ $.structField("CheckInitialized", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }], results: [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true })] }, "error"] } as $.FunctionTypeInfo), [6], 40, true)] })]), $.methodSignature("Set", ["protoreflect.FieldDescriptor", "protoreflect.Value"]), $.methodSignature("SetUnknown", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields")]), $.methodSignature("Type", [], ["protoreflect.MessageType"]), $.methodSignature("WhichOneof", ["protoreflect.OneofDescriptor"], ["protoreflect.FieldDescriptor"])],
		unpopulatedFieldRanger,
		() => [/* @__PURE__ */ $.structField("Message", "protoreflect.Message", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("skipNull", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "google.golang.org/protobuf/encoding/protojson" })]
	)
}

export const defaultIndent: string = "  "

export async function Format(m: proto.Message | null): globalThis.Promise<string> {
	return $.markAsStructValue($.cloneStructValue(new MarshalOptions({Multiline: true}, true))).Format(m)
}

export async function Marshal(m: proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(new MarshalOptions(undefined, true))).Marshal(m)
}

export let typeFieldDesc: protoreflect.FieldDescriptor | null = ((): protoreflect.FieldDescriptor | null => {
	let fd: $.VarRef<filedesc.Field> = $.varRef(new filedesc.Field(undefined, true))
	fd.value.Base.L0.FullName = "@type"
	fd.value.Base.L0.Index = -1
	fd.value.L1.Cardinality = 1
	fd.value.L1.Kind = 9
	return $.interfaceValue<protoreflect.FieldDescriptor | null>(fd, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field"))
})()

export function __goscript_set_typeFieldDesc(__goscriptValue: protoreflect.FieldDescriptor | null): void {
	typeFieldDesc = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.Name"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
