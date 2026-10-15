// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as text from "@goscript/google.golang.org/protobuf/internal/encoding/text/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as order from "@goscript/google.golang.org/protobuf/internal/order/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/text/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/order/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/encoding/prototext", ["prototext.MarshalOptions", "prototext.encoder"])

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

	// EmitASCII specifies whether to format strings and bytes as ASCII only
	// as opposed to using UTF-8 encoding when possible.
	public get EmitASCII(): boolean {
		return this._fields.EmitASCII
	}

	public set EmitASCII(value: boolean) {
		this._fields.EmitASCII = value
	}

	// allowInvalidUTF8 specifies whether to permit the encoding of strings
	// with invalid UTF-8. This is unexported as it is intended to only
	// be specified by the Format method.
	public get allowInvalidUTF8(): boolean {
		return this._fields.allowInvalidUTF8
	}

	public set allowInvalidUTF8(value: boolean) {
		this._fields.allowInvalidUTF8 = value
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

	// EmitUnknown specifies whether to emit unknown fields in the output.
	// If specified, the unmarshaler may be unable to parse the output.
	// The default is to exclude unknown fields.
	public get EmitUnknown(): boolean {
		return this._fields.EmitUnknown
	}

	public set EmitUnknown(value: boolean) {
		this._fields.EmitUnknown = value
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
		EmitASCII: boolean
		allowInvalidUTF8: boolean
		AllowPartial: boolean
		EmitUnknown: boolean
		Resolver: any
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, Multiline?: boolean, Indent?: string, EmitASCII?: boolean, allowInvalidUTF8?: boolean, AllowPartial?: boolean, EmitUnknown?: boolean, Resolver?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			Multiline: init?.Multiline ?? (false as boolean),
			Indent: init?.Indent ?? ("" as string),
			EmitASCII: init?.EmitASCII ?? (false as boolean),
			allowInvalidUTF8: init?.allowInvalidUTF8 ?? (false as boolean),
			AllowPartial: init?.AllowPartial ?? (false as boolean),
			EmitUnknown: init?.EmitUnknown ?? (false as boolean),
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
		target.EmitASCII = values.EmitASCII
		target.allowInvalidUTF8 = values.allowInvalidUTF8
		target.AllowPartial = values.AllowPartial
		target.EmitUnknown = values.EmitUnknown
		target.Resolver = $.assignFieldValue(target.Resolver, values.Resolver, { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])] })
	}

	public async Format(m: proto.Message | null): globalThis.Promise<string> {
		let o: MarshalOptions = this;
		if ((m == null) || !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return "<nil>"
		}
		o.allowInvalidUTF8 = true
		o.AllowPartial = true
		o.EmitUnknown = true
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
		let delims: Uint8Array = $.arrayValue(new Uint8Array([123, 125]))

		if (o.Multiline && ($.stringEqual(o.Indent, ""))) {
			o.Indent = "  "
		}
		if (o.Resolver == null) {
			o.Resolver = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
		}

		let __goscriptTuple1: any = await text.NewEncoder(b, o.Indent, $.cloneArrayValue(delims, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2)), o.EmitASCII)
		let internalEnc: text.Encoder | $.VarRef<text.Encoder> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}

		// Treat nil message interface as an empty message,
		// in which case there is nothing to output.
		if (m == null) {
			return [b, null]
		}

		let enc = $.varRef(new encoder({Encoder: internalEnc, opts: o}, true))
		err = await $.markAsStructValue($.cloneStructValue(enc.value)).marshalMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), false)
		if (err != null) {
			return [null, err]
		}
		let out: $.Slice<number> = $.pointerValue<text.Encoder>(enc.value.Encoder).Bytes()
		if (($.stringLen(o.Indent) > 0) && ($.sliceLen(out) > 0)) {
			out = $.append(out, $.uint(10, 8), $.byteSliceHint)
		}
		if (o.AllowPartial) {
			return [out, null]
		}
		return [out, await proto.CheckInitialized(m)]
	}

	static __typeInfo = $.registerStructType(
		"prototext.MarshalOptions",
		() => new MarshalOptions(),
		() => [$.methodSignature("Format", [["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Marshal", [["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalAppend", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])],
		MarshalOptions,
		() => [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Multiline", /* @__PURE__ */ $.basicType("bool"), [1], 0, true), /* @__PURE__ */ $.structField("Indent", /* @__PURE__ */ $.basicType("string"), [2], 8, true), /* @__PURE__ */ $.structField("EmitASCII", /* @__PURE__ */ $.basicType("bool"), [3], 24, true), /* @__PURE__ */ $.structField("allowInvalidUTF8", /* @__PURE__ */ $.basicType("bool"), [4], 25, false, { pkgPath: "google.golang.org/protobuf/encoding/prototext" }), /* @__PURE__ */ $.structField("AllowPartial", /* @__PURE__ */ $.basicType("bool"), [5], 26, true), /* @__PURE__ */ $.structField("EmitUnknown", /* @__PURE__ */ $.basicType("bool"), [6], 27, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])] }, [7], 32, true)]
	)
}

export class encoder {
	public get Encoder(): text.Encoder | $.VarRef<text.Encoder> | null {
		return this._fields.Encoder
	}

	public set Encoder(value: text.Encoder | $.VarRef<text.Encoder> | null) {
		this._fields.Encoder = value
	}

	public get opts(): MarshalOptions {
		return this._fields.opts
	}

	public set opts(value: MarshalOptions) {
		this._fields.opts = value
	}

	public _fields: {
		Encoder: text.Encoder | $.VarRef<text.Encoder> | null
		opts: MarshalOptions
	}

	constructor(init?: Partial<{Encoder?: text.Encoder | $.VarRef<text.Encoder> | null, opts?: MarshalOptions}>, __goscriptValue?: boolean) {
		this._fields = {
			Encoder: init?.Encoder ?? (null! as text.Encoder | $.VarRef<text.Encoder> | null),
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

	public async marshalAny(_any: protoreflect.Message | null): globalThis.Promise<boolean> {
		const e = $.varRef(this);
		// Construct the embedded message.
		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (_any !== null && (_any as any).__isVarRef !== true && (_any as any).__goValue === undefined ? (_any as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(_any)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdType = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let typeURL = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (_any !== null && (_any as any).__isVarRef !== true && (_any as any).__goValue === undefined ? (_any as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(_any)).Get(fdType), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).String()
		let [mt, err] = await $.pointerValue<any>(e.value.opts.Resolver).FindMessageByURL(typeURL)
		if (err != null) {
			return false
		}
		let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// Unmarshal bytes into embedded message.
		let fdValue = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let value = (((__goscriptAwait = (_any !== null && (_any as any).__isVarRef !== true && (_any as any).__goValue === undefined ? (_any as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(_any)).Get(fdValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		err = await $.markAsStructValue($.cloneStructValue(new proto.UnmarshalOptions({AllowPartial: true, Resolver: (e.value.opts.Resolver as any)}, true))).Unmarshal(await value.Bytes(), m)
		if (err != null) {
			return false
		}

		// Get current encoder position. If marshaling fails, reset encoder output
		// back to this position.
		let pos = $.pointerValue<text.Encoder>(e.value.Encoder).Snapshot()

		// Field name is the proto field name enclosed in [].
		$.pointerValue<text.Encoder>(e.value.Encoder).WriteName($.concatString(($.concatString("[", typeURL)), "]"))
		err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), true)
		if (err != null) {
			$.pointerValue<text.Encoder>(e.value.Encoder).Reset(pos)
			return false
		}
		return true
	}

	public async marshalField(name: string, val: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.markAsStructValue($.cloneStructValue(e.value)).marshalList(name, await val.List(), fd)
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.markAsStructValue($.cloneStructValue(e.value)).marshalMap(name, await val.Map(), fd)
				break
			}
			default:
			{
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteName(name)
				return $.markAsStructValue($.cloneStructValue(e.value)).marshalSingular(val, fd)
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async marshalList(name: string, list: protoreflect.List | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		let size = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0; i < size; i++) {
			$.pointerValue<text.Encoder>(e.value.Encoder).WriteName(name)
			{
				let err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalSingular((((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone(), fd)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async marshalMap(name: string, mmap: protoreflect.Map | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		let err: $.GoError = null! as $.GoError
		await order.RangeEntries((mmap as order.EntryRanger | null), order.GenericKeyOrder, $.functionValue(async (key: protoreflect.MapKey, val: protoreflect.Value): globalThis.Promise<boolean> => {
			using __defer = new $.DisposableStack()
			$.pointerValue<text.Encoder>(e.value.Encoder).WriteName(name)
			$.pointerValue<text.Encoder>(e.value.Encoder).StartMessage()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.EndMessage())($.pointerValue<text.Encoder>(e.value.Encoder)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/encoding/text.(*Encoder).EndMessage-fm")
			__defer.defer(() => { __goscriptDeferCallee0() })

			$.pointerValue<text.Encoder>(e.value.Encoder).WriteName(genid.MapEntry_Key_field_name)
			err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalSingular(key.Value(), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (err != null) {
				return false
			}

			$.pointerValue<text.Encoder>(e.value.Encoder).WriteName(genid.MapEntry_Value_field_name)
			err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalSingular(val, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (err != null) {
				return false
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return err
	}

	public async marshalMessage(m: protoreflect.Message | null, inclDelims: boolean): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		using __defer = new $.DisposableStack()
		let messageDesc = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!flags.ProtoLegacy && await messageset.IsMessageSet(messageDesc)) {
			return errors.New("no support for proto1 MessageSets", null)
		}

		if (inclDelims) {
			$.pointerValue<text.Encoder>(e.value.Encoder).StartMessage()
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.EndMessage())($.pointerValue<text.Encoder>(e.value.Encoder)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/protobuf/internal/encoding/text.(*Encoder).EndMessage-fm")
			__defer.defer(() => { __goscriptDeferCallee1() })
		}

		// Handle Any expansion.
		if ($.stringEqual((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), genid.Any_message_fullname)) {
			if (await $.markAsStructValue($.cloneStructValue(e.value)).marshalAny(m)) {
				return null
			}
		}

		// Marshal fields.
		let err: $.GoError = null! as $.GoError
		await order.RangeFields((m as order.FieldRanger | null), order.IndexNameFieldOrder, $.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			{
				err = await $.markAsStructValue($.cloneStructValue(e.value)).marshalField((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).TextName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), v, fd)
				if (err != null) {
					return false
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		if (err != null) {
			return err
		}

		// Marshal unknown fields.
		if (e.value.opts.EmitUnknown) {
			await $.markAsStructValue($.cloneStructValue(e.value)).marshalUnknown(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields))
		}

		return null
	}

	public async marshalSingular(val: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const e = $.varRef(this);
		let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch (kind) {
			case protoreflect.BoolKind:
			{
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteBool(await val.Bool())
				break
			}
			case protoreflect.StringKind:
			{
				let s = await val.String()
				if ((!e.value.opts.allowInvalidUTF8 && await strs.EnforceUTF8(fd)) && !utf8.ValidString(s)) {
					return errors.InvalidUTF8((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				}
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteString(s)
				break
			}
			case protoreflect.Int32Kind:
			case protoreflect.Int64Kind:
			case protoreflect.Sint32Kind:
			case protoreflect.Sint64Kind:
			case protoreflect.Sfixed32Kind:
			case protoreflect.Sfixed64Kind:
			{
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteInt(await val.Int())
				break
			}
			case protoreflect.Uint32Kind:
			case protoreflect.Uint64Kind:
			case protoreflect.Fixed32Kind:
			case protoreflect.Fixed64Kind:
			{
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteUint(await val.Uint())
				break
			}
			case protoreflect.FloatKind:
			{
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteFloat(await val.Float(), 32)
				break
			}
			case protoreflect.DoubleKind:
			{
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteFloat(await val.Float(), 64)
				break
			}
			case protoreflect.BytesKind:
			{
				$.pointerValue<text.Encoder>(e.value.Encoder).WriteString($.bytesToString(await val.Bytes()))
				break
			}
			case protoreflect.EnumKind:
			{
				let num = await val.Enum()
				{
					let desc = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (desc != null) {
						$.pointerValue<text.Encoder>(e.value.Encoder).WriteLiteral((__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(desc)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					} else {
						// Use numeric value if there is no enum description.
						$.pointerValue<text.Encoder>(e.value.Encoder).WriteInt($.int64(num))
					}
				}
				break
			}
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				return $.markAsStructValue($.cloneStructValue(e.value)).marshalMessage(await val.Message(), true)
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("%v has unknown kind: %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())))
				break
			}
		}
		return null
	}

	public async marshalUnknown(b: $.Slice<number>): globalThis.Promise<void> {
		const e = $.varRef(this);
		const dec: number = 10
		const hex: number = 16
		while ($.sliceLen(b) > 0) {
			let [num, wtype, n] = protowire.ConsumeTag(b)
			b = $.goSlice(b, n, undefined)
			$.pointerValue<text.Encoder>(e.value.Encoder).WriteName(strconv.FormatInt($.int64(num), 10))

			switch (wtype) {
				case protowire.VarintType:
				{
					let v: bigint = 0n
					let __goscriptTuple2: any = protowire.ConsumeVarint(b)
					v = __goscriptTuple2[0]
					n = __goscriptTuple2[1]
					$.pointerValue<text.Encoder>(e.value.Encoder).WriteUint(v)
					break
				}
				case protowire.Fixed32Type:
				{
					let v: number = 0
					let __goscriptTuple3: any = protowire.ConsumeFixed32(b)
					v = __goscriptTuple3[0]
					n = __goscriptTuple3[1]
					$.pointerValue<text.Encoder>(e.value.Encoder).WriteLiteral($.concatString("0x", strconv.FormatUint($.uint64(v), 16)))
					break
				}
				case protowire.Fixed64Type:
				{
					let v: bigint = 0n
					let __goscriptTuple4: any = protowire.ConsumeFixed64(b)
					v = __goscriptTuple4[0]
					n = __goscriptTuple4[1]
					$.pointerValue<text.Encoder>(e.value.Encoder).WriteLiteral($.concatString("0x", strconv.FormatUint(v, 16)))
					break
				}
				case protowire.BytesType:
				{
					let v: $.Slice<number> = null! as $.Slice<number>
					let __goscriptTuple5: any = protowire.ConsumeBytes(b)
					v = __goscriptTuple5[0]
					n = __goscriptTuple5[1]
					$.pointerValue<text.Encoder>(e.value.Encoder).WriteString($.bytesToString(v))
					break
				}
				case protowire.StartGroupType:
				{
					$.pointerValue<text.Encoder>(e.value.Encoder).StartMessage()
					let v: $.Slice<number> = null! as $.Slice<number>
					let __goscriptTuple6: any = protowire.ConsumeGroup(num, b)
					v = __goscriptTuple6[0]
					n = __goscriptTuple6[1]
					await $.markAsStructValue($.cloneStructValue(e.value)).marshalUnknown(v)
					$.pointerValue<text.Encoder>(e.value.Encoder).EndMessage()
					break
				}
				default:
				{
					$.panic(await fmt.Sprintf("prototext: error parsing unknown field wire type: %v", $.namedValueInterfaceValue<any>(wtype, "protowire.Type", {}, /* @__PURE__ */ $.basicType("int8", "protowire.Type"))))
					break
				}
			}

			b = $.goSlice(b, n, undefined)
		}
	}

	public Bytes(): any {
		return $.pointerValue<text.Encoder>(this.Encoder).Bytes()
	}

	public EndMessage(): any {
		return $.pointerValue<text.Encoder>(this.Encoder).EndMessage()
	}

	public Reset(es: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).Reset(es)
	}

	public Snapshot(): any {
		return $.pointerValue<text.Encoder>(this.Encoder).Snapshot()
	}

	public StartMessage(): any {
		return $.pointerValue<text.Encoder>(this.Encoder).StartMessage()
	}

	public WriteBool(b: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).WriteBool(b)
	}

	public WriteFloat(n: any, bitSize: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).WriteFloat(n, bitSize)
	}

	public WriteInt(n: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).WriteInt(n)
	}

	public WriteLiteral(s: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).WriteLiteral(s)
	}

	public WriteName(s: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).WriteName(s)
	}

	public WriteString(s: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).WriteString(s)
	}

	public WriteUint(n: any): any {
		return $.pointerValue<text.Encoder>(this.Encoder).WriteUint(n)
	}

	static __typeInfo = $.registerStructType(
		"prototext.encoder",
		() => new encoder(),
		() => [$.methodSignature("marshalAny", [["any", "protoreflect.Message"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("marshalField", [["name", /* @__PURE__ */ $.basicType("string")], ["val", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalList", [["name", /* @__PURE__ */ $.basicType("string")], ["list", "protoreflect.List"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalMap", [["name", /* @__PURE__ */ $.basicType("string")], ["mmap", "protoreflect.Map"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalMessage", [["m", "protoreflect.Message"], ["inclDelims", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("marshalSingular", [["val", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("marshalUnknown", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("EndMessage"), $.methodSignature("Reset", [["es", "text.encoderState"]]), $.methodSignature("Snapshot", [], ["text.encoderState"]), $.methodSignature("StartMessage"), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("WriteFloat", [["n", /* @__PURE__ */ $.basicType("float64")], ["bitSize", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("WriteInt", [["n", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("WriteLiteral", [["s", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("WriteName", [["s", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("WriteUint", [["n", /* @__PURE__ */ $.basicType("uint64")]])],
		encoder,
		() => [/* @__PURE__ */ $.structField("Encoder", /* @__PURE__ */ $.pointerType("text.Encoder"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("opts", "prototext.MarshalOptions", [1], 8, false, { pkgPath: "google.golang.org/protobuf/encoding/prototext" })]
	)
}

export const defaultIndent: string = "  "

export async function Format(m: proto.Message | null): globalThis.Promise<string> {
	return $.markAsStructValue($.cloneStructValue(new MarshalOptions({Multiline: true}, true))).Format(m)
}

export async function Marshal(m: proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(new MarshalOptions(undefined, true))).Marshal(m)
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
	return __goscriptStatic3$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
