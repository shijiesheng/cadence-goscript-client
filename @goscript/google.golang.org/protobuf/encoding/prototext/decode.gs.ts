// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as text from "@goscript/google.golang.org/protobuf/internal/encoding/text/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as _set from "@goscript/google.golang.org/protobuf/internal/set/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/fmt/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/text/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/internal/set/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/encoding/prototext", ["prototext.UnmarshalOptions", "prototext.decoder"])

export class UnmarshalOptions {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	// AllowPartial accepts input for messages that will result in missing
	// required fields. If AllowPartial is false (the default), Unmarshal will
	// return error if there are any missing required fields.
	public get AllowPartial(): boolean {
		return this._fields.AllowPartial
	}

	public set AllowPartial(value: boolean) {
		this._fields.AllowPartial = value
	}

	// DiscardUnknown specifies whether to ignore unknown fields when parsing.
	// An unknown field is any field whose field name or field number does not
	// resolve to any known or extension field in the message.
	// By default, unmarshal rejects unknown fields as an error.
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

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		AllowPartial: boolean
		DiscardUnknown: boolean
		Resolver: any
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, AllowPartial?: boolean, DiscardUnknown?: boolean, Resolver?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			AllowPartial: init?.AllowPartial ?? (false as boolean),
			DiscardUnknown: init?.DiscardUnknown ?? (false as boolean),
			Resolver: init?.Resolver ?? (null! as any)
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

		let dec = (() => { const __goscriptLiteralField0 = text.NewDecoder(b); return new decoder({Decoder: __goscriptLiteralField0, opts: o}, true) })()
		{
			let err = await $.markAsStructValue($.cloneStructValue(dec)).unmarshalMessage((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), false)
			if (err != null) {
				return err
			}
		}
		if (o.AllowPartial) {
			return null
		}
		return proto.CheckInitialized(m)
	}

	static __typeInfo = $.registerStructType(
		"prototext.UnmarshalOptions",
		() => new UnmarshalOptions(),
		() => [$.methodSignature("Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], ["error"]), $.methodSignature("unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], ["error"])],
		UnmarshalOptions,
		() => [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("AllowPartial", /* @__PURE__ */ $.basicType("bool"), [1], 0, true), /* @__PURE__ */ $.structField("DiscardUnknown", /* @__PURE__ */ $.basicType("bool"), [2], 1, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])] }, [3], 8, true)]
	)
}

export class decoder {
	public get Decoder(): text.Decoder | $.VarRef<text.Decoder> | null {
		return this._fields.Decoder
	}

	public set Decoder(value: text.Decoder | $.VarRef<text.Decoder> | null) {
		this._fields.Decoder = value
	}

	public get opts(): UnmarshalOptions {
		return this._fields.opts
	}

	public set opts(value: UnmarshalOptions) {
		this._fields.opts = value
	}

	public _fields: {
		Decoder: text.Decoder | $.VarRef<text.Decoder> | null
		opts: UnmarshalOptions
	}

	constructor(init?: Partial<{Decoder?: text.Decoder | $.VarRef<text.Decoder> | null, opts?: UnmarshalOptions}>, __goscriptValue?: boolean) {
		this._fields = {
			Decoder: init?.Decoder ?? (null! as text.Decoder | $.VarRef<text.Decoder> | null),
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
		let [line, column] = $.pointerValue<text.Decoder>(d.value.Decoder).Position(pos)
		let head = await fmt.Sprintf("(line %d:%d): ", $.basicInterfaceValue(line, "int"), $.basicInterfaceValue(column, "int"))
		return errors.New($.concatString(head, f), x)
	}

	public async skipMessageValue(): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		while (true) {
			let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}
			switch (tok.Kind()) {
				case text.MessageClose:
				{
					return null
					break
				}
				case text.Name:
				{
					{
						let __goscriptShadow0 = await $.markAsStructValue($.cloneStructValue(d.value)).skipValue()
						if (__goscriptShadow0 != null) {
							return __goscriptShadow0
						}
					}
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async skipValue(): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		// Only need to continue reading for messages and lists.
		switch (tok.Kind()) {
			case text.MessageOpen:
			{
				return $.markAsStructValue($.cloneStructValue(d.value)).skipMessageValue()
				break
			}
			case text.ListOpen:
			{
				while (true) {
					let [__goscriptShadow1, __goscriptShadow2] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
					if (__goscriptShadow2 != null) {
						return __goscriptShadow2
					}
					switch (__goscriptShadow1.Kind()) {
						case text.ListClose:
						{
							return null
							break
						}
						case text.MessageOpen:
						{
							{
								let __goscriptShadow3 = await $.markAsStructValue($.cloneStructValue(d.value)).skipMessageValue()
								if (__goscriptShadow3 != null) {
									return __goscriptShadow3
								}
							}
							break
						}
						default:
						{
							break
						}
					}
				}
				break
			}
		}
		return null
	}

	public async syntaxError(pos: number, f: string, x: $.Slice<any>): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [line, column] = $.pointerValue<text.Decoder>(d.value.Decoder).Position(pos)
		let head = await fmt.Sprintf("syntax error (line %d:%d): ", $.basicInterfaceValue(line, "int"), $.basicInterfaceValue(column, "int"))
		return errors.New($.concatString(head, f), x)
	}

	public async unexpectedTokenError(tok: text.Token): globalThis.Promise<$.GoError> {
		const d = this;
		return $.markAsStructValue($.cloneStructValue(d)).syntaxError(tok.Pos(), "unexpected token: %s", $.arrayToSlice<any>([tok.RawString()]))
	}

	public async unmarshalAny(m: protoreflect.Message | null, checkDelims: boolean): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let typeURL: string = ""
		let bValue: $.Slice<number> = null! as $.Slice<number>
		let seenTypeUrl: boolean = false
		let seenValue: boolean = false
		let isExpanded: boolean = false

		if (checkDelims) {
			let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}

			if (tok.Kind() != 4) {
				return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
			}
		}

		Loop: while (true) {
			// Read field name. Can only have 3 possible field names, i.e. type_url,
			// value and type URL name inside [].
			let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}
			{
				let typ = tok.Kind()
				if (typ != 2) {
					if (checkDelims) {
						if (typ == 5) {
							break Loop
						}
					} else {
						if (typ == 1) {
							break Loop
						}
					}
					return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
				}
			}

			switch (await tok.NameKind()) {
				case text.IdentName:
				{
					if (!await tok.HasSeparator()) {
						return $.markAsStructValue($.cloneStructValue(d.value)).syntaxError(tok.Pos(), "missing field separator :", null)
					}

					{
						let name = await tok.IdentName()
						switch (name) {
							case genid.Any_TypeUrl_field_name:
							{
								if (seenTypeUrl) {
									return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "duplicate %v field", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Any_TypeUrl_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
								}
								if (isExpanded) {
									return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "conflict with [%s] field", $.arrayToSlice<any>([typeURL]))
								}
								let [__goscriptShadow4, __goscriptShadow5] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
								if (__goscriptShadow5 != null) {
									return __goscriptShadow5
								}
								let ok: boolean = false
								let __goscriptTuple0: any = __goscriptShadow4.String()
								typeURL = __goscriptTuple0[0]
								ok = __goscriptTuple0[1]
								if (!ok) {
									return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow4.Pos(), "invalid %v field value: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Any_TypeUrl_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), __goscriptShadow4.RawString()]))
								}
								seenTypeUrl = true
								break
							}
							case genid.Any_Value_field_name:
							{
								if (seenValue) {
									return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "duplicate %v field", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Any_Value_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
								}
								if (isExpanded) {
									return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "conflict with [%s] field", $.arrayToSlice<any>([typeURL]))
								}
								let [__goscriptShadow6, __goscriptShadow7] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
								if (__goscriptShadow7 != null) {
									return __goscriptShadow7
								}
								let [s, ok] = __goscriptShadow6.String()
								if (!ok) {
									return $.markAsStructValue($.cloneStructValue(d.value)).newError(__goscriptShadow6.Pos(), "invalid %v field value: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(genid.Any_Value_field_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), __goscriptShadow6.RawString()]))
								}
								bValue = $.stringToBytes(s)
								seenValue = true
								break
							}
							default:
							{
								if (!d.value.opts.DiscardUnknown) {
									return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid field name %q in %v message", $.arrayToSlice<any>([tok.RawString(), $.namedValueInterfaceValue<any>(genid.Any_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
								}
								break
							}
						}
					}
					break
				}
				case text.TypeName:
				{
					if (isExpanded) {
						return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "cannot have more than one type", null)
					}
					if (seenTypeUrl) {
						return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "conflict with type_url field", null)
					}
					typeURL = await tok.TypeName()
					let __goscriptShadow8: $.GoError = null! as $.GoError
					let __goscriptTuple1: any = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalExpandedAny(typeURL, tok.Pos())
					bValue = __goscriptTuple1[0]
					__goscriptShadow8 = __goscriptTuple1[1]
					if (__goscriptShadow8 != null) {
						return __goscriptShadow8
					}
					isExpanded = true
					break
				}
				default:
				{
					if (!d.value.opts.DiscardUnknown) {
						return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid field name %q in %v message", $.arrayToSlice<any>([tok.RawString(), $.namedValueInterfaceValue<any>(genid.Any_message_fullname, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
					}
					break
				}
			}
		}

		let fds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.stringLen(typeURL) > 0) {
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set((__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), protoreflect.ValueOfString(typeURL)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ($.sliceLen(bValue) > 0) {
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set((__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), protoreflect.ValueOfBytes(bValue)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	public async unmarshalExpandedAny(typeURL: string, pos: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const d = this;
		let [mt, err] = await $.pointerValue<any>(d.opts.Resolver).FindMessageByURL(typeURL)
		if (err != null) {
			return [null, await $.markAsStructValue($.cloneStructValue(d)).newError(pos, "unable to resolve message [%v]: %v", $.arrayToSlice<any>([typeURL, (err as any)]))]
		}
		// Create new message for the embedded message type and unmarshal the value
		// field into it.
		let m = (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let __goscriptShadow9 = await $.markAsStructValue($.cloneStructValue(d)).unmarshalMessage(m, true)
			if (__goscriptShadow9 != null) {
				return [null, __goscriptShadow9]
			}
		}
		// Serialize the embedded message and return the resulting bytes.
		let __goscriptTuple2: any = await $.markAsStructValue($.cloneStructValue(new proto.MarshalOptions({AllowPartial: true, Deterministic: true}, true))).Marshal((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let b: $.Slice<number> = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, await $.markAsStructValue($.cloneStructValue(d)).newError(pos, "error in marshaling message into Any.value: %v", $.arrayToSlice<any>([(err as any)]))]
		}
		return [b, null]
	}

	public async unmarshalList(fd: protoreflect.FieldDescriptor | null, list: protoreflect.List | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Peek()
		if (err != null) {
			return err
		}

		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				switch (tok.Kind()) {
					case text.ListOpen:
					{
						await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
						while (true) {
							let [__goscriptShadow10, __goscriptShadow11] = await $.pointerValue<text.Decoder>(d.value.Decoder).Peek()
							if (__goscriptShadow11 != null) {
								return __goscriptShadow11
							}

							switch (__goscriptShadow10.Kind()) {
								case text.ListClose:
								{
									await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
									return null
									break
								}
								case text.MessageOpen:
								{
									let pval = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
									{
										let __goscriptShadow12 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMessage(await pval.Message(), true)
										if (__goscriptShadow12 != null) {
											return __goscriptShadow12
										}
									}
									void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((pval).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									break
								}
								default:
								{
									return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(__goscriptShadow10)
									break
								}
							}
						}
						break
					}
					case text.MessageOpen:
					{
						let pval = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
						{
							let __goscriptShadow13 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMessage(await pval.Message(), true)
							if (__goscriptShadow13 != null) {
								return __goscriptShadow13
							}
						}
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((pval).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return null
						break
					}
				}
				break
			}
			default:
			{
				switch (tok.Kind()) {
					case text.ListOpen:
					{
						await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
						while (true) {
							let [__goscriptShadow14, __goscriptShadow15] = await $.pointerValue<text.Decoder>(d.value.Decoder).Peek()
							if (__goscriptShadow15 != null) {
								return __goscriptShadow15
							}

							switch (__goscriptShadow14.Kind()) {
								case text.ListClose:
								{
									await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
									return null
									break
								}
								case text.Scalar:
								{
									let [pval, __goscriptShadow16] = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalScalar(fd)
									if (__goscriptShadow16 != null) {
										return __goscriptShadow16
									}
									void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((pval).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									break
								}
								default:
								{
									return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(__goscriptShadow14)
									break
								}
							}
						}
						break
					}
					case text.Scalar:
					{
						let [pval, __goscriptShadow17] = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalScalar(fd)
						if (__goscriptShadow17 != null) {
							return __goscriptShadow17
						}
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((pval).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return null
						break
					}
				}
				break
			}
		}

		return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
	}

	public async unmarshalMap(fd: protoreflect.FieldDescriptor | null, mmap: protoreflect.Map | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		// Determine ahead whether map entry is a scalar type or a message type in
		// order to call the appropriate unmarshalMapValue func inside
		// unmarshalMapEntry.
		let unmarshalMapValue: (() => [protoreflect.Value, $.GoError] | globalThis.Promise<[protoreflect.Value, $.GoError]>) | null = null! as (() => [protoreflect.Value, $.GoError] | globalThis.Promise<[protoreflect.Value, $.GoError]>) | null
		switch ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				unmarshalMapValue = $.functionValue(async (): globalThis.Promise<[protoreflect.Value, $.GoError]> => {
					let pval = (((__goscriptAwait = (mmap !== null && (mmap as any).__isVarRef !== true && (mmap as any).__goValue === undefined ? (mmap as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mmap)).NewValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
					{
						let err = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMessage(await pval.Message(), true)
						if (err != null) {
							return [new protoreflect.Value(undefined, true), err]
						}
					}
					return [(pval).clone(), null]
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

		let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return err
		}
		switch (tok.Kind()) {
			case text.MessageOpen:
			{
				return $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMapEntry(fd, mmap, unmarshalMapValue)
				break
			}
			case text.ListOpen:
			{
				while (true) {
					let [__goscriptShadow18, __goscriptShadow19] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
					if (__goscriptShadow19 != null) {
						return __goscriptShadow19
					}
					switch (__goscriptShadow18.Kind()) {
						case text.ListClose:
						{
							return null
							break
						}
						case text.MessageOpen:
						{
							{
								let __goscriptShadow20 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMapEntry(fd, mmap, unmarshalMapValue)
								if (__goscriptShadow20 != null) {
									return __goscriptShadow20
								}
							}
							break
						}
						default:
						{
							return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(__goscriptShadow18)
							break
						}
					}
				}
				break
			}
			default:
			{
				return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async unmarshalMapEntry(fd: protoreflect.FieldDescriptor | null, mmap: protoreflect.Map | null, unmarshalMapValue: (() => [protoreflect.Value, $.GoError] | globalThis.Promise<[protoreflect.Value, $.GoError]>) | null): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let key: protoreflect.MapKey = new protoreflect.MapKey(undefined, true)
		let pval: protoreflect.Value = new protoreflect.Value(undefined, true)
		Loop: while (true) {
			// Read field name.
			let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}
			switch (tok.Kind()) {
				case text.Name:
				{
					if (await tok.NameKind() != 1) {
						if (!d.value.opts.DiscardUnknown) {
							return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "unknown map entry field %q", $.arrayToSlice<any>([tok.RawString()]))
						}
						await $.markAsStructValue($.cloneStructValue(d.value)).skipValue()
						continue Loop
					}
					break
				}
				case text.MessageClose:
				{
					break Loop
					break
				}
				default:
				{
					return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
					break
				}
			}

			{
				let name = await tok.IdentName()
				switch (name) {
					case genid.MapEntry_Key_field_name:
					{
						if (!await tok.HasSeparator()) {
							return $.markAsStructValue($.cloneStructValue(d.value)).syntaxError(tok.Pos(), "missing field separator :", null)
						}
						if (key.IsValid()) {
							return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "map entry %q cannot be repeated", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(name, "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
						}
						let [val, __goscriptShadow21] = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalScalar((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						if (__goscriptShadow21 != null) {
							return __goscriptShadow21
						}
						key = $.assignStruct(key, await val.MapKey())
						break
					}
					case genid.MapEntry_Value_field_name:
					{
						{
							let kind = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if ((kind != 11) && (kind != 10)) {
								if (!await tok.HasSeparator()) {
									return $.markAsStructValue($.cloneStructValue(d.value)).syntaxError(tok.Pos(), "missing field separator :", null)
								}
							}
						}
						if (pval.IsValid()) {
							return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "map entry %q cannot be repeated", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(name, "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
						}
						let __goscriptTuple3: any = await unmarshalMapValue!()
						pval = $.assignStruct(pval, __goscriptTuple3[0])
						err = __goscriptTuple3[1]
						if (err != null) {
							return err
						}
						break
					}
					default:
					{
						if (!d.value.opts.DiscardUnknown) {
							return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "unknown map entry field %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(name, "protoreflect.Name", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
						}
						await $.markAsStructValue($.cloneStructValue(d.value)).skipValue()
						break
					}
				}
			}
		}

		if (!key.IsValid()) {
			key = $.assignStruct(key, await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).MapKey())
		}
		if (!pval.IsValid()) {
			switch ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.MessageKind:
				case protoreflect.GroupKind:
				{
					pval = $.assignStruct(pval, ((__goscriptAwait = (mmap !== null && (mmap as any).__isVarRef !== true && (mmap as any).__goValue === undefined ? (mmap as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mmap)).NewValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
					break
				}
				default:
				{
					pval = $.assignStruct(pval, ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
					break
				}
			}
		}
		void (__goscriptAwait = (mmap !== null && (mmap as any).__isVarRef !== true && (mmap as any).__goValue === undefined ? (mmap as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mmap)).Set((key).clone(), (pval).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async unmarshalMessage(m: protoreflect.Message | null, checkDelims: boolean): globalThis.Promise<$.GoError> {
		const d = $.varRef(this);
		let messageDesc = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!flags.ProtoLegacy && await messageset.IsMessageSet(messageDesc)) {
			return errors.New("no support for proto1 MessageSets", null)
		}

		if ($.stringEqual((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), genid.Any_message_fullname)) {
			return $.markAsStructValue($.cloneStructValue(d.value)).unmarshalAny(m, checkDelims)
		}

		if (checkDelims) {
			let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}

			if (tok.Kind() != 4) {
				return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
			}
		}

		let seenNums: $.VarRef<_set.Ints> = $.varRef(new _set.Ints(undefined, true))
		let seenOneofs: $.VarRef<_set.Ints> = $.varRef(new _set.Ints(undefined, true))
		let fieldDescs = (__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		while (true) {
			// Read field name.
			let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
			if (err != null) {
				return err
			}
			{
				let typ = tok.Kind()
				switch (typ) {
					case text.Name:
					{
						break
					}
					case text.EOF:
					{
						if (checkDelims) {
							return text.ErrUnexpectedEOF
						}
						return null
						break
					}
					default:
					{
						if (checkDelims && (typ == 5)) {
							return null
						}
						return $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)
						break
					}
				}
			}

			// Resolve the field descriptor.
			let name: protoreflect.Name = ""
			let fd: protoreflect.FieldDescriptor | null = null! as protoreflect.FieldDescriptor | null
			let xt: protoreflect.ExtensionType | null = null! as protoreflect.ExtensionType | null
			let xtErr: $.GoError = null! as $.GoError
			let isFieldNumberName: boolean = false

			switch (await tok.NameKind()) {
				case text.IdentName:
				{
					name = await tok.IdentName()
					fd = (__goscriptAwait = (fieldDescs !== null && (fieldDescs as any).__isVarRef !== true && (fieldDescs as any).__goValue === undefined ? (fieldDescs as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fieldDescs)).ByTextName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case text.TypeName:
				{
					let __goscriptTuple4: any = await $.pointerValue<any>(d.value.opts.Resolver).FindExtensionByName(await tok.TypeName())
					xt = __goscriptTuple4[0]
					xtErr = __goscriptTuple4[1]
					break
				}
				case text.FieldNumber:
				{
					isFieldNumberName = true
					let num = $.int(await tok.FieldNumber(), 32)
					if (!protowire.Number_IsValid(num)) {
						return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid field number: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic5())]))
					}
					fd = (__goscriptAwait = (fieldDescs !== null && (fieldDescs as any).__isVarRef !== true && (fieldDescs as any).__goValue === undefined ? (fieldDescs as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fieldDescs)).ByNumber(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (fd == null) {
						let __goscriptTuple5: any = await $.pointerValue<any>(d.value.opts.Resolver).FindExtensionByNumber((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), num)
						xt = __goscriptTuple5[0]
						xtErr = __goscriptTuple5[1]
					}
					break
				}
			}

			if (xt != null) {
				fd = ((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FieldDescriptor | null)
				if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))) {
					return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "message %v cannot be extended by %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
			} else {
				if ((xtErr != null) && (!$.comparableEqual(xtErr, protoregistry.NotFound))) {
					return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "unable to resolve [%s]: %v", $.arrayToSlice<any>([tok.RawString(), (xtErr as any)]))
				}
			}
			if (flags.ProtoLegacy) {
				if (((fd != null) && (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					fd = null
				}
			}

			// Handle unknown fields.
			if (fd == null) {
				if (d.value.opts.DiscardUnknown || (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Names, null>>((__goscriptAwait = (messageDesc !== null && (messageDesc as any).__isVarRef !== true && (messageDesc as any).__goValue === undefined ? (messageDesc as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(messageDesc)).ReservedNames(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					await $.markAsStructValue($.cloneStructValue(d.value)).skipValue()
					continue
				}
				return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "unknown field: %v", $.arrayToSlice<any>([tok.RawString()]))
			}

			// Handle fields identified by field number.
			if (isFieldNumberName) {
				// TODO: Add an option to permit parsing field numbers.
				//
				// This requires careful thought as the MarshalOptions.EmitUnknown
				// option allows formatting unknown fields as the field number and the
				// best-effort textual representation of the field value.  In that case,
				// it may not be possible to unmarshal the value from a parser that does
				// have information about the unknown field.
				return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "cannot specify field by number: %v", $.arrayToSlice<any>([tok.RawString()]))
			}

			switch ((true as boolean)) {
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (((kind != 11) && (kind != 10)) && !await tok.HasSeparator()) {
						return $.markAsStructValue($.cloneStructValue(d.value)).syntaxError(tok.Pos(), "missing field separator :", null)
					}

					let list = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List()
					{
						let __goscriptShadow22 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalList(fd, list)
						if (__goscriptShadow22 != null) {
							return __goscriptShadow22
						}
					}
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let mmap = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map()
					{
						let __goscriptShadow23 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalMap(fd, mmap)
						if (__goscriptShadow23 != null) {
							return __goscriptShadow23
						}
					}
					break
				}
				default:
				{
					let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (((kind != 11) && (kind != 10)) && !await tok.HasSeparator()) {
						return $.markAsStructValue($.cloneStructValue(d.value)).syntaxError(tok.Pos(), "missing field separator :", null)
					}

					// If field is a oneof, check if it has already been set.
					{
						let od = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (od != null) {
							let idx = $.uint64((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Index(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
							if (seenOneofs.value.Has(idx)) {
								return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "error parsing %q, oneof %v is already set", $.arrayToSlice<any>([tok.RawString(), $.namedValueInterfaceValue<any>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
							}
							seenOneofs.value.Set(idx)
						}
					}

					let num = $.uint64((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					if (seenNums.value.Has(num)) {
						return $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "non-repeated field %q is repeated", $.arrayToSlice<any>([tok.RawString()]))
					}

					{
						let __goscriptShadow24 = await $.markAsStructValue($.cloneStructValue(d.value)).unmarshalSingular(fd, m)
						if (__goscriptShadow24 != null) {
							return __goscriptShadow24
						}
					}
					seenNums.value.Set(num)
					break
				}
			}
		}

		return null
	}

	public async unmarshalScalar(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[protoreflect.Value, $.GoError]> {
		const d = $.varRef(this);
		let [tok, err] = await $.pointerValue<text.Decoder>(d.value.Decoder).Read()
		if (err != null) {
			return [new protoreflect.Value(undefined, true), err]
		}

		if (tok.Kind() != 3) {
			return [new protoreflect.Value(undefined, true), await $.markAsStructValue($.cloneStructValue(d.value)).unexpectedTokenError(tok)]
		}

		let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch (kind) {
			case protoreflect.BoolKind:
			{
				{
					let [b, ok] = tok.Bool()
					if (ok) {
						return [protoreflect.ValueOfBool(b), null]
					}
				}
				break
			}
			case protoreflect.Int32Kind:
			case protoreflect.Sint32Kind:
			case protoreflect.Sfixed32Kind:
			{
				{
					let [n, ok] = tok.Int32()
					if (ok) {
						return [protoreflect.ValueOfInt32(n), null]
					}
				}
				break
			}
			case protoreflect.Int64Kind:
			case protoreflect.Sint64Kind:
			case protoreflect.Sfixed64Kind:
			{
				{
					let [n, ok] = tok.Int64()
					if (ok) {
						return [protoreflect.ValueOfInt64(n), null]
					}
				}
				break
			}
			case protoreflect.Uint32Kind:
			case protoreflect.Fixed32Kind:
			{
				{
					let [n, ok] = tok.Uint32()
					if (ok) {
						return [protoreflect.ValueOfUint32(n), null]
					}
				}
				break
			}
			case protoreflect.Uint64Kind:
			case protoreflect.Fixed64Kind:
			{
				{
					let [n, ok] = tok.Uint64()
					if (ok) {
						return [protoreflect.ValueOfUint64(n), null]
					}
				}
				break
			}
			case protoreflect.FloatKind:
			{
				{
					let [n, ok] = tok.Float32()
					if (ok) {
						return [protoreflect.ValueOfFloat32(n), null]
					}
				}
				break
			}
			case protoreflect.DoubleKind:
			{
				{
					let [n, ok] = tok.Float64()
					if (ok) {
						return [protoreflect.ValueOfFloat64(n), null]
					}
				}
				break
			}
			case protoreflect.StringKind:
			{
				{
					let [s, ok] = tok.String()
					if (ok) {
						if (await strs.EnforceUTF8(fd) && !utf8.ValidString(s)) {
							return [new protoreflect.Value(undefined, true), await $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "contains invalid UTF-8", null)]
						}
						return [protoreflect.ValueOfString(s), null]
					}
				}
				break
			}
			case protoreflect.BytesKind:
			{
				{
					let [b, ok] = tok.String()
					if (ok) {
						return [protoreflect.ValueOfBytes($.stringToBytes(b)), null]
					}
				}
				break
			}
			case protoreflect.EnumKind:
			{
				{
					let [lit, ok] = tok.Enum()
					if (ok) {
						// Lookup EnumNumber based on name.
						{
							let enumVal = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(lit), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if (enumVal != null) {
								return [protoreflect.ValueOfEnum((__goscriptAwait = (enumVal !== null && (enumVal as any).__isVarRef !== true && (enumVal as any).__goValue === undefined ? (enumVal as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(enumVal)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), null]
							}
						}
					}
				}
				{
					let [num, ok] = tok.Int32()
					if (ok) {
						return [protoreflect.ValueOfEnum($.int(num, 32)), null]
					}
				}
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("invalid scalar kind %v", $.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10())))
				break
			}
		}

		return [new protoreflect.Value(undefined, true), await $.markAsStructValue($.cloneStructValue(d.value)).newError(tok.Pos(), "invalid value for %v type: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(kind, "protoreflect.Kind", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10()), tok.RawString()]))]
	}

	public async unmarshalSingular(fd: protoreflect.FieldDescriptor | null, m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const d = this;
		let val: protoreflect.Value = new protoreflect.Value(undefined, true)
		let err: $.GoError = null! as $.GoError
		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				val = $.assignStruct(val, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).NewField(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
				err = await $.markAsStructValue($.cloneStructValue(d)).unmarshalMessage(await val.Message(), true)
				break
			}
			default:
			{
				let __goscriptTuple6: any = await $.markAsStructValue($.cloneStructValue(d)).unmarshalScalar(fd)
				val = $.assignStruct(val, __goscriptTuple6[0])
				err = __goscriptTuple6[1]
				break
			}
		}
		if (err == null) {
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fd, (val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async Peek(): globalThis.Promise<any> {
		return await $.pointerValue<text.Decoder>(this.Decoder).Peek()
	}

	public Position(idx: any): any {
		return $.pointerValue<text.Decoder>(this.Decoder).Position(idx)
	}

	public async Read(): globalThis.Promise<any> {
		return await $.pointerValue<text.Decoder>(this.Decoder).Read()
	}

	static __typeInfo = $.registerStructType(
		"prototext.decoder",
		() => new decoder(),
		() => [$.methodSignature("newError", [["pos", /* @__PURE__ */ $.basicType("int")], ["f", /* @__PURE__ */ $.basicType("string")], ["x", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("skipMessageValue", [], ["error"]), $.methodSignature("skipValue", [], ["error"]), $.methodSignature("syntaxError", [["pos", /* @__PURE__ */ $.basicType("int")], ["f", /* @__PURE__ */ $.basicType("string")], ["x", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("unexpectedTokenError", [["tok", "text.Token"]], ["error"]), $.methodSignature("unmarshalAny", [["m", "protoreflect.Message"], ["checkDelims", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("unmarshalExpandedAny", [["typeURL", /* @__PURE__ */ $.basicType("string")], ["pos", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("unmarshalList", [["fd", "protoreflect.FieldDescriptor"], ["list", "protoreflect.List"]], ["error"]), $.methodSignature("unmarshalMap", [["fd", "protoreflect.FieldDescriptor"], ["mmap", "protoreflect.Map"]], ["error"]), $.methodSignature("unmarshalMapEntry", [["fd", "protoreflect.FieldDescriptor"], ["mmap", "protoreflect.Map"], ["unmarshalMapValue", ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value", "error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("unmarshalMessage", [["m", "protoreflect.Message"], ["checkDelims", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("unmarshalScalar", [["fd", "protoreflect.FieldDescriptor"]], ["protoreflect.Value", "error"]), $.methodSignature("unmarshalSingular", [["fd", "protoreflect.FieldDescriptor"], ["m", "protoreflect.Message"]], ["error"]), $.methodSignature("Peek", [], ["text.Token", "error"]), $.methodSignature("Position", [["idx", /* @__PURE__ */ $.basicType("int")]], [["line", /* @__PURE__ */ $.basicType("int")], ["column", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Read", [], ["text.Token", "error"])],
		decoder,
		() => [/* @__PURE__ */ $.structField("Decoder", /* @__PURE__ */ $.pointerType("text.Decoder"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("opts", "prototext.UnmarshalOptions", [1], 8, false, { pkgPath: "google.golang.org/protobuf/encoding/prototext" })]
	)
}

export async function Unmarshal(b: $.Slice<number>, m: proto.Message | null): globalThis.Promise<$.GoError> {
	return $.markAsStructValue($.cloneStructValue(new UnmarshalOptions(undefined, true))).Unmarshal(b, m)
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
	return __goscriptStatic6$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
