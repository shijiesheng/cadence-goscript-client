// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as json from "@goscript/google.golang.org/protobuf/internal/encoding/json/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as _set from "@goscript/google.golang.org/protobuf/internal/set/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as time from "@goscript/time/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as __goscript_well_known_types from "./well_known_types.gs.ts"
import "@goscript/encoding/base64/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/json/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/internal/set/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/bytes/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "./well_known_types.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/encoding/protojson", ["protojson.UnmarshalOptions", "protojson.decoder"])

export class UnmarshalOptions {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	// If AllowPartial is set, input for messages that will result in missing
	// required fields will not return an error.
	public get AllowPartial(): boolean {
		return this._fields.AllowPartial
	}

	public set AllowPartial(value: boolean) {
		this._fields.AllowPartial = value
	}

	// If DiscardUnknown is set, unknown fields and enum name values are ignored.
	public get DiscardUnknown(): boolean {
		return this._fields.DiscardUnknown
	}

	public set DiscardUnknown(value: boolean) {
		this._fields.DiscardUnknown = value
	}

	// Resolver is used for looking up types when unmarshaling
	// google.protobuf.Any messages or extension fields.
	// If nil, this defaults to using protoregistry.GlobalTypes.
	public get Resolver(): any {
		return this._fields.Resolver
	}

	public set Resolver(value: any) {
		this._fields.Resolver = value
	}

	// RecursionLimit limits how deeply messages may be nested.
	// If zero, a default limit is applied.
	public get RecursionLimit(): number {
		return this._fields.RecursionLimit
	}

	public set RecursionLimit(value: number) {
		this._fields.RecursionLimit = value
	}

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		AllowPartial: boolean
		DiscardUnknown: boolean
		Resolver: any
		RecursionLimit: number
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, AllowPartial?: boolean, DiscardUnknown?: boolean, Resolver?: any, RecursionLimit?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			AllowPartial: init?.AllowPartial ?? (false as boolean),
			DiscardUnknown: init?.DiscardUnknown ?? (false as boolean),
			Resolver: init?.Resolver ?? (null! as any),
			RecursionLimit: init?.RecursionLimit ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnmarshalOptions {
		return new UnmarshalOptions(this, true)
	}

	public __goscriptAssign(source: UnmarshalOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NoUnkeyedLiterals, values.NoUnkeyedLiterals)
		target.AllowPartial = values.AllowPartial
		target.DiscardUnknown = values.DiscardUnknown
		target.Resolver = $.assignFieldValue(target.Resolver, values.Resolver, { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])] })
		target.RecursionLimit = values.RecursionLimit
	}

	public async Unmarshal(b: $.Slice<number>, m: proto.Message | null): globalThis.Promise<$.GoError> {
		const o = this;
		return $.markAsStructValue($.cloneStructValue(o)).unmarshal(b, m)
	}

	public async unmarshal(b: $.Slice<number>, m: proto.Message | null): globalThis.Promise<$.GoError> {
		let o: UnmarshalOptions = this;
		await proto.Reset(m)

		if (o.Resolver == null) {
			o.Resolver = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
		}
		if (o.RecursionLimit == 0) {
			o.RecursionLimit = 10000
		}

		let dec = $.varRef((() => { const __goscriptLiteralField0 = json.NewDecoder(b); return new decoder({Decoder: __goscriptLiteralField0, opts: o}, true) })())
		{
			let err = await $.markAsStructValue($.cloneStructValue(dec.value)).unmarshalMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), false)
			if (err != null) {
				return err
			}
		}

		// Check for EOF.
		let [tok, err] = await $.pointerValue<json.Decoder>(dec.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 1) {
			return $.markAsStructValue($.cloneStructValue(dec.value)).unexpectedTokenError(tok)
		}

		if (o.AllowPartial) {
			return null
		}
		return proto.CheckInitialized(m)
	}

	static __typeInfo = $.registerStructType(
		"protojson.UnmarshalOptions",
		() => new UnmarshalOptions(),
		() => [$.methodSignature("Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], ["error"]), $.methodSignature("unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], ["error"])],
		UnmarshalOptions,
		() => [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("AllowPartial", /* @__PURE__ */ $.basicType("bool"), [1], 0, true), /* @__PURE__ */ $.structField("DiscardUnknown", /* @__PURE__ */ $.basicType("bool"), [2], 1, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])] }, [3], 8, true), /* @__PURE__ */ $.structField("RecursionLimit", /* @__PURE__ */ $.basicType("int"), [4], 24, true)]
	)
}

export class decoder {
	public get Decoder(): json.Decoder | $.VarRef<json.Decoder> | null {
		return this._fields.Decoder
	}

	public set Decoder(value: json.Decoder | $.VarRef<json.Decoder> | null) {
		this._fields.Decoder = value
	}

	public get opts(): UnmarshalOptions {
		return this._fields.opts
	}

	public set opts(value: UnmarshalOptions) {
		this._fields.opts = value
	}

	public _fields: {
		Decoder: json.Decoder | $.VarRef<json.Decoder> | null
		opts: UnmarshalOptions
	}

	constructor(init?: Partial<{Decoder?: json.Decoder | $.VarRef<json.Decoder> | null, opts?: UnmarshalOptions}>, __goscriptValue?: boolean) {
		this._fields = {
			Decoder: init?.Decoder ?? (null! as json.Decoder | $.VarRef<json.Decoder> | null),
			opts: init?.opts ? init.opts.clone() : new UnmarshalOptions(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decoder {
		return new decoder(this, true)
	}

	public __goscriptAssign(source: decoder): void {
		const target = this._fields
		const values = source._fields
		target.Decoder = values.Decoder
		$.assignStruct(target.opts, values.opts)
	}

	public async newError(pos: number, f: string, x: $.Slice<any>): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [line, column] = $.pointerValue<json.Decoder>(d.value.Decoder).Position(pos)
		let head = await fmt.Sprintf("(line %d:%d): ", $.basicInterfaceValue(line, "int"), $.basicInterfaceValue(column, "int"))
		return errors.New($.concatString(head, f), x)
	}

	public async skipJSONValue(): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let open: number = 0
		while (true) {
			let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}
			switch (tok.Kind()) {
				case json.ObjectClose:
				case json.ArrayClose:
				{
					open--
					break
				}
				case json.ObjectOpen:
				case json.ArrayOpen:
				{
					open++
					if (open > d.value.opts.RecursionLimit) {
						return errors.New("exceeded max recursion depth", null)
					}
					break
				}
				case json.EOF:
				{
					return errors.New("unexpected EOF", null)
					break
				}
			}
			if (open == 0) {
				return null
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async syntaxError(pos: number, f: string, x: $.Slice<any>): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [line, column] = $.pointerValue<json.Decoder>(d.value.Decoder).Position(pos)
		let head = await fmt.Sprintf("syntax error (line %d:%d): ", $.basicInterfaceValue(line, "int"), $.basicInterfaceValue(column, "int"))
		return errors.New($.concatString(head, f), x)
	}

	public async unexpectedTokenError(tok: json.Token): globalThis.Promise<$.GoError> {
		const d = this;
		return $.markAsStructValue($.cloneStructValue(d)).syntaxError(tok.Pos(), "unexpected token %s", $.arrayToSlice<any>([tok.RawString()]))
	}

	public async unmarshalAny(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);

		let [start, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Peek()
		if (err != null) {
			return err
		}
		if (start.Kind() != 64) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError((start).clone())
		}

		// Only extension names are in [name] format.

		let dec = (() => { const __goscriptLiteralField1 = $.pointerValue<json.Decoder>(d.value.Decoder).Clone(); return new decoder({Decoder: __goscriptLiteralField1, opts: new UnmarshalOptions({RecursionLimit: d.value.opts.RecursionLimit}, true)}, true) })()
		let __goscriptTuple0: any = await __goscript_well_known_types.findTypeURL((dec).clone())
		let tok = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		{
			let __goscriptSwitch0 = err
			switch ((true as boolean)) {
				case $.comparableEqual(__goscriptSwitch0, __goscript_well_known_types.errEmptyObject):
				{
					await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
					await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
					return null
					break
				}
				case $.comparableEqual(__goscriptSwitch0, __goscript_well_known_types.errMissingType):
				{
					if (d.value.opts.DiscardUnknown) {

						return $.markAsStructValue($.cloneStructValue(d.value)).skipJSONValue()
					}

					return $.markAsStructValue($.cloneStructValue(d.value)).newError(start.Pos(), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)
					break
				}
				default:
				{
					if (err != null) {
						return err
					}
					break
				}
			}
		}

		let typeURL = await $.markAsStructValue($.cloneStructValue(tok)).ParsedString()
		let __goscriptTuple1: any = await $.pointerValue<any>(d.value.opts.Resolver).FindMessageByURL(typeURL)
		let emt = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "unable to resolve %v: %q", $.arrayToSlice<any>([tok.RawString(), (err as any)]))
		}

		let em = (__goscriptAwait = (emt !== null && (emt as any).__isVarRef !== true && (emt as any).__goValue === undefined ? (emt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(emt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let unmarshal = __goscript_well_known_types.wellKnownTypeUnmarshaler((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (emt !== null && (emt as any).__isVarRef !== true && (emt as any).__goValue === undefined ? (emt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(emt)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (unmarshal != null) {

				// Do not allow duplicate fields.
				{
					let __goscriptShadow0 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalAnyValue(unmarshal, em)
					if (__goscriptShadow0 != null) {
						return __goscriptShadow0
					}
				}
			} else {

				{
					let __goscriptShadow1 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMessage(em, true)
					if (__goscriptShadow1 != null) {
						return __goscriptShadow1
					}
				}
			}
		}

		let __goscriptTuple2: any = await $.markAsStructValue($.cloneStructValue(new proto.MarshalOptions({AllowPartial: true, Deterministic: true}, true))).Marshal((__goscriptAwait = (em !== null && (em as any).__isVarRef !== true && (em as any).__goValue === undefined ? (em as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(em)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let b: $.Slice<number> = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return $.markAsStructValue($.cloneStructValue(d.value)).newError(start.Pos(), "error in marshaling Any.value field: %v", $.arrayToSlice<any>([(err as any)]))
		}

		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdType = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdValue = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fdType, protoreflect.ValueOfString(typeURL)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fdValue, protoreflect.ValueOfBytes(b)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async unmarshalAnyValue(unmarshal: ((_p0: decoder, _p1: protoreflect.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null, m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);

		await $.pointerValue<json.Decoder>(d.value.Decoder).Read()

		let found: boolean = false
		while (true) {
			let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}
			switch (tok.Kind()) {
				case json.ObjectClose:
				{
					if (!found) {
						return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "missing \"value\" field", null)
					}
					return null
					break
				}
				case json.Name:
				{
					switch (await $.markAsStructValue($.cloneStructValue(tok)).Name()) {
						case "@type":
						{
							await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
							break
						}
						case "value":
						{
							if (found) {
								return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "duplicate \"value\" field", null)
							}

							{
								let __goscriptShadow2 = (__goscriptAwait = unmarshal!((d.value).clone(), m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								if (__goscriptShadow2 != null) {
									return __goscriptShadow2
								}
							}
							found = true
							break
						}
						default:
						{
							if (d.value.opts.DiscardUnknown) {
								{
									let __goscriptShadow3 = await $.markAsStructValue($.cloneStructValue(d.value)).skipJSONValue()
									if (__goscriptShadow3 != null) {
										return __goscriptShadow3
									}
								}
								continue
							}
							return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "unknown field %v", $.arrayToSlice<any>([tok.RawString()]))
							break
						}
					}
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async unmarshalDuration(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 16) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError((tok).clone())
		}
		// Unmarshal field name.
		let [secs, nanos, ok] = __goscript_well_known_types.parseDuration(await $.markAsStructValue($.cloneStructValue(tok)).ParsedString())
		if (!ok) {
			return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid %v value %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Duration_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), tok.RawString()]))
		}

		// Check for duplicate field name.
		if ((secs < -315576000000n) || (secs > 315576000000n)) {
			return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "%v value out of range: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Duration_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), tok.RawString()]))
		}

		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdSeconds = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdNanos = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fdSeconds, protoreflect.ValueOfInt64(secs)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fdNanos, protoreflect.ValueOfInt32(nanos)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async unmarshalEmpty(_p0: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 64) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError((tok).clone())
		}

		while (true) {
			let [__goscriptShadow4, __goscriptShadow5] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
			if (__goscriptShadow5 != null) {
				return __goscriptShadow5
			}
			switch (__goscriptShadow4.Kind()) {
				case json.ObjectClose:
				{
					return null
					break
				}
				case json.Name:
				{
					if (d.value.opts.DiscardUnknown) {
						{
							let __goscriptShadow6 = await $.markAsStructValue($.cloneStructValue(d.value)).skipJSONValue()
							if (__goscriptShadow6 != null) {
								return __goscriptShadow6
							}
						}
						continue
					}
					return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow4.Pos(), "unknown field %v", $.arrayToSlice<any>([__goscriptShadow4.RawString()]))
					break
				}
				default:
				{
					return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError((__goscriptShadow4).clone())
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async unmarshalFieldMask(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 16) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError((tok).clone())
		}
		let str = strings.TrimSpace(await $.markAsStructValue($.cloneStructValue(tok)).ParsedString())
		if ($.stringEqual(str, "")) {
			return null
		}
		let paths: $.Slice<string> = strings.Split(str, ",")

		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let list = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List()

		for (let __goscriptRangeTarget0 = paths, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let s0 = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			let s = strs.JSONSnakeCase(s0)
			if (strings.Contains(s0, "_") || !protoreflect.FullName_IsValid(s)) {
				return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "%v contains invalid path: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.FieldMask_Paths_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), s0]))
			}
			void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfString(s)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	public async unmarshalKnownValue(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Peek()
		if (err != null) {
			return err
		}

		let fd: protoreflect.FieldDescriptor | null = null! as protoreflect.FieldDescriptor | null
		let val: protoreflect.Value = new protoreflect.Value(undefined, true)
		switch (tok.Kind()) {
			case json.Null:
			{
				await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
				fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				val = $.assignStruct(val, protoreflect.ValueOfEnum(0))
				break
			}
			case json.Bool:
			{
				let [__goscriptShadow7, __goscriptShadow8] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
				if (__goscriptShadow8 != null) {
					return __goscriptShadow8
				}
				fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				val = $.assignStruct(val, protoreflect.ValueOfBool(await $.markAsStructValue($.cloneStructValue(__goscriptShadow7)).Bool()))
				break
			}
			case json.Number:
			{
				let [__goscriptShadow9, __goscriptShadow10] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
				if (__goscriptShadow10 != null) {
					return __goscriptShadow10
				}
				fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let ok: boolean = false
				let __goscriptTuple3: any = await unmarshalFloat((__goscriptShadow9).clone(), 64)
				val = $.assignStruct(val, __goscriptTuple3[0])
				ok = __goscriptTuple3[1]
				if (!ok) {
					return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow9.Pos(), "invalid %v: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Value_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), __goscriptShadow9.RawString()]))
				}
				break
			}
			case json.String:
			{
				let [__goscriptShadow11, __goscriptShadow12] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
				if (__goscriptShadow12 != null) {
					return __goscriptShadow12
				}
				fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(3), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				val = $.assignStruct(val, protoreflect.ValueOfString(await $.markAsStructValue($.cloneStructValue(__goscriptShadow11)).ParsedString()))
				break
			}
			case json.ObjectOpen:
			{
				fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				val = $.assignStruct(val, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).NewField(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
				{
					let __goscriptShadow13 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalStruct(await $.markAsStructValue($.cloneStructValue(val)).Message())
					if (__goscriptShadow13 != null) {
						return __goscriptShadow13
					}
				}
				break
			}
			case json.ArrayOpen:
			{
				fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(6), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				val = $.assignStruct(val, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).NewField(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
				{
					let __goscriptShadow14 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalListValue(await $.markAsStructValue($.cloneStructValue(val)).Message())
					if (__goscriptShadow14 != null) {
						return __goscriptShadow14
					}
				}
				break
			}
			default:
			{
				return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid %v: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Value_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), tok.RawString()]))
				break
			}
		}

		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fd, (val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async unmarshalList(list: protoreflect.List | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 256) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
		}

		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				while (true) {
					let [__goscriptShadow15, __goscriptShadow16] = await $.pointerValue<json.Decoder>(d.value.Decoder).Peek()
					if (__goscriptShadow16 != null) {
						return __goscriptShadow16
					}

					if (__goscriptShadow15.Kind() == 512) {
						await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
						return null
					}

					let val = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
					{
						let __goscriptShadow17 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMessage(await val.Message(), false)
						if (__goscriptShadow17 != null) {
							return __goscriptShadow17
						}
					}
					void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				break
			}
			default:
			{
				while (true) {
					let [__goscriptShadow18, __goscriptShadow19] = await $.pointerValue<json.Decoder>(d.value.Decoder).Peek()
					if (__goscriptShadow19 != null) {
						return __goscriptShadow19
					}

					if (__goscriptShadow18.Kind() == 512) {
						await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
						return null
					}

					let __goscriptTuple4: any = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalScalar(fd)
					let val = __goscriptTuple4[0]
					__goscriptShadow19 = __goscriptTuple4[1]
					if (__goscriptShadow19 != null) {
						return __goscriptShadow19
					}
					if (val.IsValid()) {
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				break
			}
		}

		return null
	}

	public async unmarshalListValue(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.markAsStructValue($.cloneStructValue(d)).unmarshalList(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List(), fd)
	}

	public async unmarshalMap(mmap: protoreflect.Map | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 64) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
		}

		// Determine ahead whether map entry is a scalar type or a message type in
		// order to call the appropriate unmarshalMapValue func inside the for loop
		// below.
		let unmarshalMapValue: (() => [protoreflect.Value, $.GoError] | globalThis.Promise<[protoreflect.Value, $.GoError]>) | null = null! as (() => [protoreflect.Value, $.GoError] | globalThis.Promise<[protoreflect.Value, $.GoError]>) | null
		switch ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				unmarshalMapValue = $.functionValue(async (): globalThis.Promise<[protoreflect.Value, $.GoError]> => {
					let val = (((__goscriptAwait = (mmap !== null && (mmap as any).__isVarRef !== true && (mmap as any).__goValue === undefined ? (mmap as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mmap)).NewValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
					{
						let __goscriptShadow20 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMessage(await val.Message(), false)
						if (__goscriptShadow20 != null) {
							return [new protoreflect.Value(undefined, true), __goscriptShadow20]
						}
					}
					return [(val).clone(), null]
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value", "error"] } as $.FunctionTypeInfo))
				break
			}
			default:
			{
				unmarshalMapValue = $.functionValue(async (): globalThis.Promise<[protoreflect.Value, $.GoError]> => {
					return $.markAsStructValue($.cloneStructValue(d.value)).unmarshalScalar((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				}, ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value", "error"] } as $.FunctionTypeInfo))
				break
			}
		}

		Loop: while (true) {
			// Read field name.
			let [__goscriptShadow21, __goscriptShadow22] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
			if (__goscriptShadow22 != null) {
				return __goscriptShadow22
			}
			switch (__goscriptShadow21.Kind()) {
				default:
				{
					return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(__goscriptShadow21)
					break
				}
				case json.ObjectClose:
				{
					break Loop
					break
				}
				case json.Name:
				{
					break
				}
			}

			// Unmarshal field name.
			let __goscriptTuple5: any = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMapKey(__goscriptShadow21, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			let pkey = __goscriptTuple5[0]
			__goscriptShadow22 = __goscriptTuple5[1]
			if (__goscriptShadow22 != null) {
				return __goscriptShadow22
			}

			// Check for duplicate field name.
			if ((__goscriptAwait = (mmap !== null && (mmap as any).__isVarRef !== true && (mmap as any).__goValue === undefined ? (mmap as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mmap)).Has((pkey).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow21.Pos(), "duplicate map key %v", $.arrayToSlice<any>([__goscriptShadow21.RawString()]))
			}

			// Read and unmarshal field value.
			let __goscriptTuple6: any = await unmarshalMapValue!()
			let pval = __goscriptTuple6[0]
			__goscriptShadow22 = __goscriptTuple6[1]
			if (__goscriptShadow22 != null) {
				return __goscriptShadow22
			}
			if (pval.IsValid()) {
				void (__goscriptAwait = (mmap !== null && (mmap as any).__isVarRef !== true && (mmap as any).__goValue === undefined ? (mmap as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mmap)).Set((pkey).clone(), (pval).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		return null
	}

	public async unmarshalMapKey(tok: json.Token, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[protoreflect.MapKey, $.GoError]> {
		const d = this;
		const b32: number = 32
		const b64: number = 64
		const base10: number = 10

		let name = await tok.Name()
		let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch (kind) {
			case protoreflect.StringKind:
			{
				return [await $.markAsStructValue($.cloneStructValue(protoreflect.ValueOfString(name))).MapKey(), null]
				break
			}
			case protoreflect.BoolKind:
			{
				switch (name) {
					case "true":
					{
						return [await $.markAsStructValue($.cloneStructValue(protoreflect.ValueOfBool(true))).MapKey(), null]
						break
					}
					case "false":
					{
						return [await $.markAsStructValue($.cloneStructValue(protoreflect.ValueOfBool(false))).MapKey(), null]
						break
					}
				}
				break
			}
			case protoreflect.Int32Kind:
			case protoreflect.Sint32Kind:
			case protoreflect.Sfixed32Kind:
			{
				{
					let [n, err] = strconv.ParseInt(name, 10, 32)
					if (err == null) {
						return [await $.markAsStructValue($.cloneStructValue(protoreflect.ValueOfInt32($.int(n, 32)))).MapKey(), null]
					}
				}
				break
			}
			case protoreflect.Int64Kind:
			case protoreflect.Sint64Kind:
			case protoreflect.Sfixed64Kind:
			{
				{
					let [n, err] = strconv.ParseInt(name, 10, 64)
					if (err == null) {
						return [await $.markAsStructValue($.cloneStructValue(protoreflect.ValueOfInt64($.int64(n)))).MapKey(), null]
					}
				}
				break
			}
			case protoreflect.Uint32Kind:
			case protoreflect.Fixed32Kind:
			{
				{
					let [n, err] = strconv.ParseUint(name, 10, 32)
					if (err == null) {
						return [await $.markAsStructValue($.cloneStructValue(protoreflect.ValueOfUint32($.uint(n, 32)))).MapKey(), null]
					}
				}
				break
			}
			case protoreflect.Uint64Kind:
			case protoreflect.Fixed64Kind:
			{
				{
					let [n, err] = strconv.ParseUint(name, 10, 64)
					if (err == null) {
						return [await $.markAsStructValue($.cloneStructValue(protoreflect.ValueOfUint64($.uint64(n)))).MapKey(), null]
					}
				}
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("invalid kind for map key: %v", $.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())))
				break
			}
		}

		return [new protoreflect.MapKey(undefined, true), await $.markAsStructValue($.cloneStructValue(d)).newError(tok.Pos(), "invalid value for %v key: %s", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), tok.RawString()]))]
	}

	public async unmarshalMessage(m: protoreflect.Message | null, skipTypeURL: boolean): globalThis.Promise<$.GoError> {
		let d = $.varRef(this);
		d.value.opts.RecursionLimit--
		if (d.value.opts.RecursionLimit < 0) {
			return errors.New("exceeded max recursion depth", null)
		}
		{
			let unmarshal = __goscript_well_known_types.wellKnownTypeUnmarshaler((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (unmarshal != null) {
				return unmarshal!((d.value).clone(), m)
			}
		}

		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 64) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
		}

		let messageDesc = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!flags.ProtoLegacy && await messageset.IsMessageSet(messageDesc)) {
			return errors.New("no support for proto1 MessageSets", null)
		}

		let seenNums: $.VarRef<_set.Ints> = $.varRef(new _set.Ints(undefined, true))
		let seenOneofs: $.VarRef<_set.Ints> = $.varRef(new _set.Ints(undefined, true))
		let fieldDescs = (__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		while (true) {
			// Read field name.
			let [__goscriptShadow23, __goscriptShadow24] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
			if (__goscriptShadow24 != null) {
				return __goscriptShadow24
			}
			switch (__goscriptShadow23.Kind()) {
				default:
				{
					return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(__goscriptShadow23)
					break
				}
				case json.ObjectClose:
				{
					return null
					break
				}
				case json.Name:
				{
					break
				}
			}

			let name = await __goscriptShadow23.Name()
			// Unmarshaling a non-custom embedded message in Any will contain the
			// JSON field "@type" which should be skipped because it is not a field
			// of the embedded message, but simply an artifact of the Any format.
			if (skipTypeURL && ($.stringEqual(name, "@type"))) {
				await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
				continue
			}

			// Get the FieldDescriptor.
			let fd: protoreflect.FieldDescriptor | null = null! as protoreflect.FieldDescriptor | null
			if (strings.HasPrefix(name, "[") && strings.HasSuffix(name, "]")) {
				// Only extension names are in [name] format.
				let extName = $.sliceStringOrBytes(name, 1, $.stringLen(name) - 1)
				let [extType, __goscriptShadow25] = await $.pointerValue<any>(d.value.opts.Resolver).FindExtensionByName(extName)
				if ((__goscriptShadow25 != null) && (!$.comparableEqual(__goscriptShadow25, protoregistry.NotFound))) {
					return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow23.Pos(), "unable to resolve %s: %v", $.arrayToSlice<any>([__goscriptShadow23.RawString(), (__goscriptShadow25 as any)]))
				}
				if (extType != null) {
					fd = ((__goscriptAwait = (extType !== null && (extType as any).__isVarRef !== true && (extType as any).__goValue === undefined ? (extType as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(extType)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FieldDescriptor | null)
					if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))) {
						return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow23.Pos(), "message %v cannot be extended by %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
					}
				}
			} else {
				// The name can either be the JSON name or the proto field name.
				fd = (__goscriptAwait = (fieldDescs !== null && (fieldDescs as any).__isVarRef !== true && (fieldDescs as any).__goValue === undefined ? (fieldDescs as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fieldDescs)).ByJSONName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (fd == null) {
					fd = (__goscriptAwait = (fieldDescs !== null && (fieldDescs as any).__isVarRef !== true && (fieldDescs as any).__goValue === undefined ? (fieldDescs as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fieldDescs)).ByTextName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			if (flags.ProtoLegacy) {
				if (((fd != null) && (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					fd = null
				}
			}

			if (fd == null) {
				// Field is unknown.
				if (d.value.opts.DiscardUnknown) {
					{
						let __goscriptShadow26 = await $.markAsStructValue($.cloneStructValue(d.value)).skipJSONValue()
						if (__goscriptShadow26 != null) {
							return __goscriptShadow26
						}
					}
					continue
				}
				return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow23.Pos(), "unknown field %v", $.arrayToSlice<any>([__goscriptShadow23.RawString()]))
			}

			// Do not allow duplicate fields.
			let num = $.uint64((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (seenNums.value.Has(num)) {
				return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow23.Pos(), "duplicate field %v", $.arrayToSlice<any>([__goscriptShadow23.RawString()]))
			}
			seenNums.value.Set(num)

			// No need to set values for JSON null unless the field type is
			// google.protobuf.Value or google.protobuf.NullValue.
			{
				let [__goscriptShadow27, ] = await $.pointerValue<json.Decoder>(d.value.Decoder).Peek()
				if (((__goscriptShadow27.Kind() == 2) && !await isKnownValue(fd)) && !await isNullValue(fd)) {
					await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
					continue
				}
			}

			switch ((true as boolean)) {
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let list = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List()
					{
						let __goscriptShadow28 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalList(list, fd)
						if (__goscriptShadow28 != null) {
							return __goscriptShadow28
						}
					}
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let mmap = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map()
					{
						let __goscriptShadow29 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMap(mmap, fd)
						if (__goscriptShadow29 != null) {
							return __goscriptShadow29
						}
					}
					break
				}
				default:
				{
					{
						let od = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (od != null) {
							let idx = $.uint64((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
							if (seenOneofs.value.Has(idx)) {
								return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow23.Pos(), "error parsing %s, oneof %v is already set", $.arrayToSlice<any>([__goscriptShadow23.RawString(), $.namedValueInterfaceValue<any>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
							}
							seenOneofs.value.Set(idx)
						}
					}

					// Required or optional fields.
					{
						let __goscriptShadow30 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalSingular(m, fd)
						if (__goscriptShadow30 != null) {
							return __goscriptShadow30
						}
					}
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async unmarshalScalar(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[protoreflect.Value, $.GoError]> {
		const d = $.varRef(this);
		const b32: number = 32
		const b64: number = 64

		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return [new protoreflect.Value(undefined, true), err]
		}

		let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch (kind) {
			case protoreflect.BoolKind:
			{
				if (tok.Kind() == 4) {
					return [protoreflect.ValueOfBool(await tok.Bool()), null]
				}
				break
			}
			case protoreflect.Int32Kind:
			case protoreflect.Sint32Kind:
			case protoreflect.Sfixed32Kind:
			{
				{
					let [v, ok] = await unmarshalInt(tok, 32)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			case protoreflect.Int64Kind:
			case protoreflect.Sint64Kind:
			case protoreflect.Sfixed64Kind:
			{
				{
					let [v, ok] = await unmarshalInt(tok, 64)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			case protoreflect.Uint32Kind:
			case protoreflect.Fixed32Kind:
			{
				{
					let [v, ok] = await unmarshalUint(tok, 32)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			case protoreflect.Uint64Kind:
			case protoreflect.Fixed64Kind:
			{
				{
					let [v, ok] = await unmarshalUint(tok, 64)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			case protoreflect.FloatKind:
			{
				{
					let [v, ok] = await unmarshalFloat(tok, 32)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			case protoreflect.DoubleKind:
			{
				{
					let [v, ok] = await unmarshalFloat(tok, 64)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			case protoreflect.StringKind:
			{
				if (tok.Kind() == 16) {
					return [protoreflect.ValueOfString(await tok.ParsedString()), null]
				}
				break
			}
			case protoreflect.BytesKind:
			{
				{
					let [v, ok] = await unmarshalBytes(tok)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			case protoreflect.EnumKind:
			{
				{
					let [v, ok] = await unmarshalEnum(tok, fd, d.value.opts.DiscardUnknown)
					if (ok) {
						return [(v).clone(), null]
					}
				}
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("unmarshalScalar: invalid scalar kind %v", $.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())))
				break
			}
		}

		return [new protoreflect.Value(undefined, true), await $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid value for %v type: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), tok.RawString()]))]
	}

	public async unmarshalSingular(m: protoreflect.Message | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const d = this;
		let val: protoreflect.Value = new protoreflect.Value(undefined, true)
		let err: $.GoError = null! as $.GoError
		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				val = $.assignStruct(val, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).NewField(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
				err = await $.markAsStructValue($.cloneStructValue(d)).unmarshalMessage(await val.Message(), false)
				break
			}
			default:
			{
				let __goscriptTuple7: any = await $.markAsStructValue($.cloneStructValue(d)).unmarshalScalar(fd)
				val = $.assignStruct(val, __goscriptTuple7[0])
				err = __goscriptTuple7[1]
				break
			}
		}

		if (err != null) {
			return err
		}
		if (val.IsValid()) {
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fd, (val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	public async unmarshalStruct(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.markAsStructValue($.cloneStructValue(d)).unmarshalMap(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map(), fd)
	}

	public async unmarshalTimestamp(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<json.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		if (tok.Kind() != 16) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError((tok).clone())
		}

		let s = await $.markAsStructValue($.cloneStructValue(tok)).ParsedString()
		let __goscriptTuple8: any = time.Parse(time.RFC3339Nano, s)
		let t = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid %v value %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Timestamp_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), tok.RawString()]))
		}

		let secs = $.markAsStructValue($.cloneStructValue(t)).Unix()
		if ((secs < -62135596800n) || (secs > 253402300799n)) {
			return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "%v value out of range: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Timestamp_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), tok.RawString()]))
		}

		let i = strings.LastIndexByte(s, 46)
		let j = strings.LastIndexAny(s, "Z-+")
		if (((i >= 0) && (j >= i)) && ((j - i) > 10)) {
			return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid %v value %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Timestamp_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), tok.RawString()]))
		}

		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdSeconds = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdNanos = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fdSeconds, protoreflect.ValueOfInt64(secs)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fdNanos, protoreflect.ValueOfInt32($.int($.markAsStructValue($.cloneStructValue(t)).Nanosecond(), 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async unmarshalWrapperType(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = this;
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let [val, err] = await $.markAsStructValue($.cloneStructValue(d)).unmarshalScalar(fd)
		if (err != null) {
			return err
		}
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fd, (val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public Clone(): any {
		return $.pointerValue<json.Decoder>(this.Decoder).Clone()
	}

	public async Peek(): globalThis.Promise<any> {
		return await $.pointerValue<json.Decoder>(this.Decoder).Peek()
	}

	public Position(idx: any): any {
		return $.pointerValue<json.Decoder>(this.Decoder).Position(idx)
	}

	public async Read(): globalThis.Promise<any> {
		return await $.pointerValue<json.Decoder>(this.Decoder).Read()
	}

	static __typeInfo = $.registerStructType(
		"protojson.decoder",
		() => new decoder(),
		() => [$.methodSignature("newError", [["pos", /* @__PURE__ */ $.basicType("int")], ["f", /* @__PURE__ */ $.basicType("string")], ["x", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("skipJSONValue", [], ["error"]), $.methodSignature("syntaxError", [["pos", /* @__PURE__ */ $.basicType("int")], ["f", /* @__PURE__ */ $.basicType("string")], ["x", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("unexpectedTokenError", [["tok", "json.Token"]], ["error"]), $.methodSignature("unmarshalAny", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalAnyValue", [["unmarshal", ({ kind: $.TypeKind.Function, name: "protojson.unmarshalFunc", params: ["protojson.decoder", "protoreflect.Message"], results: ["error"] } as $.FunctionTypeInfo)], ["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalDuration", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalEmpty", ["protoreflect.Message"], ["error"]), $.methodSignature("unmarshalFieldMask", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalKnownValue", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalList", [["list", "protoreflect.List"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("unmarshalListValue", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalMap", [["mmap", "protoreflect.Map"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("unmarshalMapKey", [["tok", "json.Token"], ["fd", "protoreflect.FieldDescriptor"]], ["protoreflect.MapKey", "error"]), $.methodSignature("unmarshalMessage", [["m", "protoreflect.Message"], ["skipTypeURL", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("unmarshalScalar", [["fd", "protoreflect.FieldDescriptor"]], ["protoreflect.Value", "error"]), $.methodSignature("unmarshalSingular", [["m", "protoreflect.Message"], ["fd", "protoreflect.FieldDescriptor"]], ["error"]), $.methodSignature("unmarshalStruct", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalTimestamp", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalWrapperType", [["m", "protoreflect.Message"]], ["error"]), $.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("json.Decoder")]), $.methodSignature("Peek", [], ["json.Token", "error"]), $.methodSignature("Position", [["idx", /* @__PURE__ */ $.basicType("int")]], [["line", /* @__PURE__ */ $.basicType("int")], ["column", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Read", [], ["json.Token", "error"])],
		decoder,
		() => [/* @__PURE__ */ $.structField("Decoder", /* @__PURE__ */ $.pointerType("json.Decoder"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("opts", "protojson.UnmarshalOptions", [1], 8, false, { pkgPath: "google.golang.org/protobuf/encoding/protojson" })]
	)
}

export async function Unmarshal(b: $.Slice<number>, m: proto.Message | null): globalThis.Promise<$.GoError> {
	return $.markAsStructValue($.cloneStructValue(new UnmarshalOptions(undefined, true))).Unmarshal(b, m)
}

export async function isKnownValue(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	let md = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return (md != null) && ($.stringEqual((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), genid.Value_message_fullname))
}

export async function isNullValue(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	let ed = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return (ed != null) && ($.stringEqual((__goscriptAwait = (ed !== null && (ed as any).__isVarRef !== true && (ed as any).__goValue === undefined ? (ed as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(ed)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), genid.NullValue_enum_fullname))
}

export async function unmarshalInt(tok: json.Token, bitSize: number): globalThis.Promise<[protoreflect.Value, boolean]> {
	switch (tok.Kind()) {
		case json.Number:
		{
			return getInt(tok, bitSize)
			break
		}
		case json.String:
		{
			let s = strings.TrimSpace(await tok.ParsedString())
			if ($.stringLen(s) != $.stringLen(await tok.ParsedString())) {
				return [new protoreflect.Value(undefined, true), false]
			}
			let dec: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.stringToBytes(s))
			let [__goscriptShadow31, err] = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as json.Decoder).Read() : json.Decoder.prototype.Read.call(dec))
			if (err != null) {
				return [new protoreflect.Value(undefined, true), false]
			}
			return getInt(__goscriptShadow31, bitSize)
			break
		}
	}
	return [new protoreflect.Value(undefined, true), false]
}

export function getInt(tok: json.Token, bitSize: number): [protoreflect.Value, boolean] {
	let [n, ok] = tok.Int(bitSize)
	if (!ok) {
		return [new protoreflect.Value(undefined, true), false]
	}
	if (bitSize == 32) {
		return [protoreflect.ValueOfInt32($.int(n, 32)), true]
	}
	return [protoreflect.ValueOfInt64(n), true]
}

export async function unmarshalUint(tok: json.Token, bitSize: number): globalThis.Promise<[protoreflect.Value, boolean]> {
	switch (tok.Kind()) {
		case json.Number:
		{
			return getUint(tok, bitSize)
			break
		}
		case json.String:
		{
			let s = strings.TrimSpace(await tok.ParsedString())
			if ($.stringLen(s) != $.stringLen(await tok.ParsedString())) {
				return [new protoreflect.Value(undefined, true), false]
			}
			let dec: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.stringToBytes(s))
			let [__goscriptShadow32, err] = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as json.Decoder).Read() : json.Decoder.prototype.Read.call(dec))
			if (err != null) {
				return [new protoreflect.Value(undefined, true), false]
			}
			return getUint(__goscriptShadow32, bitSize)
			break
		}
	}
	return [new protoreflect.Value(undefined, true), false]
}

export function getUint(tok: json.Token, bitSize: number): [protoreflect.Value, boolean] {
	let [n, ok] = tok.Uint(bitSize)
	if (!ok) {
		return [new protoreflect.Value(undefined, true), false]
	}
	if (bitSize == 32) {
		return [protoreflect.ValueOfUint32($.uint(n, 32)), true]
	}
	return [protoreflect.ValueOfUint64(n), true]
}

export async function unmarshalFloat(tok: json.Token, bitSize: number): globalThis.Promise<[protoreflect.Value, boolean]> {
	switch (tok.Kind()) {
		case json.Number:
		{
			return getFloat(tok, bitSize)
			break
		}
		case json.String:
		{
			let s = await tok.ParsedString()
			switch (s) {
				case "NaN":
				{
					if (bitSize == 32) {
						return [protoreflect.ValueOfFloat32(globalThis.Math.fround(math.NaN())), true]
					}
					return [protoreflect.ValueOfFloat64(math.NaN()), true]
					break
				}
				case "Infinity":
				{
					if (bitSize == 32) {
						return [protoreflect.ValueOfFloat32(globalThis.Math.fround(math.Inf(1))), true]
					}
					return [protoreflect.ValueOfFloat64(math.Inf(1)), true]
					break
				}
				case "-Infinity":
				{
					if (bitSize == 32) {
						return [protoreflect.ValueOfFloat32(globalThis.Math.fround(math.Inf(-1))), true]
					}
					return [protoreflect.ValueOfFloat64(math.Inf(-1)), true]
					break
				}
			}

			// Decode number from string.
			if ($.stringLen(s) != $.stringLen(strings.TrimSpace(s))) {
				return [new protoreflect.Value(undefined, true), false]
			}
			let dec: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.stringToBytes(s))
			let [__goscriptShadow33, err] = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as json.Decoder).Read() : json.Decoder.prototype.Read.call(dec))
			if (err != null) {
				return [new protoreflect.Value(undefined, true), false]
			}
			return getFloat(__goscriptShadow33, bitSize)
			break
		}
	}
	return [new protoreflect.Value(undefined, true), false]
}

export function getFloat(tok: json.Token, bitSize: number): [protoreflect.Value, boolean] {
	let [n, ok] = tok.Float(bitSize)
	if (!ok) {
		return [new protoreflect.Value(undefined, true), false]
	}
	if (bitSize == 32) {
		return [protoreflect.ValueOfFloat32(globalThis.Math.fround(n)), true]
	}
	return [protoreflect.ValueOfFloat64(n), true]
}

export async function unmarshalBytes(tok: json.Token): globalThis.Promise<[protoreflect.Value, boolean]> {
	if (tok.Kind() != 16) {
		return [new protoreflect.Value(undefined, true), false]
	}

	let s = await tok.ParsedString()
	let enc: base64.Encoding | $.VarRef<base64.Encoding> | null = base64.StdEncoding
	if (strings.ContainsAny(s, "-_")) {
		enc = base64.URLEncoding
	}
	if (($.stringLen(s) % 4) != 0) {
		enc = $.markAsStructValue($.cloneStructValue($.pointerValue<base64.Encoding>(enc))).WithPadding(-1)
	}
	let __goscriptTuple9: any = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as base64.Encoding).DecodeString(s) : base64.Encoding.prototype.DecodeString.call(enc, s))
	let b: $.Slice<number> = __goscriptTuple9[0]
	let err = __goscriptTuple9[1]
	if (err != null) {
		return [new protoreflect.Value(undefined, true), false]
	}
	return [protoreflect.ValueOfBytes(b), true]
}

export async function unmarshalEnum(tok: json.Token, fd: protoreflect.FieldDescriptor | null, discardUnknown: boolean): globalThis.Promise<[protoreflect.Value, boolean]> {
	switch (tok.Kind()) {
		case json.String:
		{
			let s = await tok.ParsedString()
			{
				let enumVal = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (enumVal != null) {
					return [protoreflect.ValueOfEnum((__goscriptAwait = (enumVal !== null && (enumVal as any).__isVarRef !== true && (enumVal as any).__goValue === undefined ? (enumVal as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(enumVal)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), true]
				}
			}
			if (discardUnknown) {
				return [new protoreflect.Value(undefined, true), true]
			}
			break
		}
		case json.Number:
		{
			{
				let [n, ok] = tok.Int(32)
				if (ok) {
					return [protoreflect.ValueOfEnum($.int(n, 32)), true]
				}
			}
			break
		}
		case json.Null:
		{
			if (await isNullValue(fd)) {
				return [protoreflect.ValueOfEnum(0), true]
			}
			break
		}
	}

	return [new protoreflect.Value(undefined, true), false]
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
