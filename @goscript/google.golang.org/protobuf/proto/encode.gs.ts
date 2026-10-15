// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as order from "@goscript/google.golang.org/protobuf/internal/order/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as protoerrors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as math from "@goscript/math/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as errors2 from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as flags2 from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_decode_gen from "./decode_gen.gs.ts"

import * as __goscript_encode_gen from "./encode_gen.gs.ts"

import * as __goscript_messageset from "./messageset.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_proto_methods from "./proto_methods.gs.ts"

import * as __goscript_size from "./size.gs.ts"

import * as __goscript_size_gen from "./size_gen.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/order/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/math/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "./checkinit.gs.ts"
import "./decode_gen.gs.ts"
import "./encode_gen.gs.ts"
import "./messageset.gs.ts"
import "./proto.gs.ts"
import "./proto_methods.gs.ts"
import "./size.gs.ts"
import "./size_gen.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/proto", ["proto.MarshalOptions"])

export class MarshalOptions {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	// AllowPartial allows messages that have missing required fields to marshal
	// without returning an error. If AllowPartial is false (the default),
	// Marshal will return an error if there are any missing required fields.
	public get AllowPartial(): boolean {
		return this._fields.AllowPartial
	}

	public set AllowPartial(value: boolean) {
		this._fields.AllowPartial = value
	}

	// Deterministic controls whether the same message will always be
	// serialized to the same bytes within the same binary.
	//
	// Setting this option guarantees that repeated serialization of
	// the same message will return the same bytes, and that different
	// processes of the same binary (which may be executing on different
	// machines) will serialize equal messages to the same bytes.
	// It has no effect on the resulting size of the encoded message compared
	// to a non-deterministic marshal.
	//
	// Note that the deterministic serialization is NOT canonical across
	// languages. It is not guaranteed to remain stable over time. It is
	// unstable across different builds with schema changes due to unknown
	// fields. Users who need canonical serialization (e.g., persistent
	// storage in a canonical form, fingerprinting, etc.) must define
	// their own canonicalization specification and implement their own
	// serializer rather than relying on this API.
	//
	// If deterministic serialization is requested, map entries will be
	// sorted by keys in lexographical order. This is an implementation
	// detail and subject to change.
	public get Deterministic(): boolean {
		return this._fields.Deterministic
	}

	public set Deterministic(value: boolean) {
		this._fields.Deterministic = value
	}

	// UseCachedSize indicates that the result of a previous Size call
	// may be reused.
	//
	// Setting this option asserts that:
	//
	// 1. Size has previously been called on this message with identical
	// options (except for UseCachedSize itself).
	//
	// 2. The message and all its submessages have not changed in any
	// way since the Size call.
	//
	// If either of these invariants is violated,
	// the results are undefined and may include panics or corrupted output.
	//
	// Implementations MAY take this option into account to provide
	// better performance, but there is no guarantee that they will do so.
	// There is absolutely no guarantee that Size followed by Marshal with
	// UseCachedSize set will perform equivalently to Marshal alone.
	public get UseCachedSize(): boolean {
		return this._fields.UseCachedSize
	}

	public set UseCachedSize(value: boolean) {
		this._fields.UseCachedSize = value
	}

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		AllowPartial: boolean
		Deterministic: boolean
		UseCachedSize: boolean
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, AllowPartial?: boolean, Deterministic?: boolean, UseCachedSize?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			AllowPartial: init?.AllowPartial ?? (false as boolean),
			Deterministic: init?.Deterministic ?? (false as boolean),
			UseCachedSize: init?.UseCachedSize ?? (false as boolean)
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
		target.AllowPartial = values.AllowPartial
		target.Deterministic = values.Deterministic
		target.UseCachedSize = values.UseCachedSize
	}

	public async Marshal(m: __goscript_proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		// Treat nil message interface as an empty message; nothing to output.
		if (m == null) {
			return [null, null]
		}

		let [out, err] = await $.markAsStructValue($.cloneStructValue(o)).marshal(null, (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		if (($.sliceLen(out.Buf) == 0) && (err == null)) {
			out.Buf = await emptyBytesForMessage(m)
		}
		return [out.Buf, err]
	}

	public async MarshalAppend(b: $.Slice<number>, m: __goscript_proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		// Treat nil message interface as an empty message; nothing to append.
		if (m == null) {
			return [b, null]
		}

		let [out, err] = await $.markAsStructValue($.cloneStructValue(o)).marshal(b, (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		return [out.Buf, err]
	}

	public async MarshalState(_in: protoiface.MarshalInput): globalThis.Promise<[protoiface.MarshalOutput, $.GoError]> {
		const o = this;
		return $.markAsStructValue($.cloneStructValue(o)).marshal(_in.Buf, _in.Message)
	}

	public async Size(m: __goscript_proto.Message | null): globalThis.Promise<number> {
		const o = this;

		if (m == null) {
			return 0
		}

		return $.markAsStructValue($.cloneStructValue(o)).size((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public flags(): protoiface.MarshalInputFlags {
		const o = this;
		let flags: protoiface.MarshalInputFlags = 0

		// Note: o.AllowPartial is always forced to true by MarshalOptions.marshal,
		// which is why it is not a part of MarshalInputFlags.

		if (o.Deterministic) {
			flags = flags | (1)
		}

		if (o.UseCachedSize) {
			flags = flags | (2)
		}

		return flags
	}

	public async marshal(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<[protoiface.MarshalOutput, $.GoError]> {
		let o: MarshalOptions = this;
		let out: protoiface.MarshalOutput = $.anonymousStructValue({"NoUnkeyedLiterals": new pragma.NoUnkeyedLiterals(undefined, true), "Buf": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] })
		let err: $.GoError = null! as $.GoError
		let allowPartial = o.AllowPartial
		o.AllowPartial = true
		{
			let methods = await __goscript_proto_methods.protoMethods(m)
			if (((methods != null) && ($.pointerValue<protoiface.Methods>(methods).Marshal != null)) && !(o.Deterministic && (($.uint64And($.pointerValue<protoiface.Methods>(methods).Flags, 1n)) == 0n))) {
				let _in = $.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: m, Buf: b, Flags: o.flags()}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] })
				if ($.pointerValue<protoiface.Methods>(methods).Size != null) {
					let sout = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<protoiface.Methods>(methods).Size!($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: m, Flags: _in.Flags}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] })), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoiface.SizeOutput)))
					if ($.cap(b) < ($.sliceLen(b) + sout.Size)) {
						_in.Buf = $.makeSlice<number>($.sliceLen(b), growcap($.cap(b), $.sliceLen(b) + sout.Size), "byte")
						$.copy(_in.Buf, b)
					}
					_in.Flags = _in.Flags | (2)
				}
				let __goscriptTuple0: any = await $.pointerValue<protoiface.Methods>(methods).Marshal!($.markAsStructValue($.cloneStructValue(_in)))
				out = $.assignStruct(out, __goscriptTuple0[0])
				err = __goscriptTuple0[1]
			} else {
				let __goscriptTuple1: any = await $.markAsStructValue($.cloneStructValue(o)).marshalMessageSlow(b, m)
				out.Buf = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
			}
		}
		if (err != null) {
			let mismatch: $.VarRef<errors2.SizeMismatchError | $.VarRef<errors2.SizeMismatchError> | null> = $.varRef(null! as errors2.SizeMismatchError | $.VarRef<errors2.SizeMismatchError> | null)
			if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(mismatch, "**errors.SizeMismatchError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("errors.SizeMismatchError"))))) {
				return [$.markAsStructValue($.cloneStructValue(out)), fmt.Errorf("marshaling %s: %v", (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (err as any))]
			}
			return [$.markAsStructValue($.cloneStructValue(out)), err]
		}
		if (allowPartial) {
			return [$.markAsStructValue($.cloneStructValue(out)), null]
		}
		return [$.markAsStructValue($.cloneStructValue(out)), await __goscript_checkinit.checkInitialized(m)]
	}

	public async marshalField(b: $.Slice<number>, fd: protoreflect.FieldDescriptor | null, value: protoreflect.Value): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return o.marshalList(b, fd, await value.List())
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.markAsStructValue($.cloneStructValue(o)).marshalMap(b, fd, await value.Map())
				break
			}
			default:
			{
				b = protowire.AppendTag(b, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_encode_gen.wireTypes, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0])
				return o.marshalSingular(b, fd, value)
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async marshalList(b: $.Slice<number>, fd: protoreflect.FieldDescriptor | null, list: protoreflect.List | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0)) {
			b = protowire.AppendTag(b, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 2)
			let __goscriptShadow0 = b
			let __goscriptTuple2: any = appendSpeculativeLength(__goscriptShadow0)
			let __goscriptShadow1: $.Slice<number> = __goscriptTuple2[0]
			let pos = __goscriptTuple2[1]
			for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple3: any = await o.marshalSingular(__goscriptShadow1, fd, (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone())
				__goscriptShadow1 = __goscriptTuple3[0]
				err = __goscriptTuple3[1]
				if (err != null) {
					return [__goscriptShadow1, err]
				}
			}
			__goscriptShadow1 = finishSpeculativeLength(__goscriptShadow1, pos)
			return [__goscriptShadow1, null]
		}

		let kind = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
			let err: $.GoError = null! as $.GoError
			b = protowire.AppendTag(b, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_encode_gen.wireTypes, kind, 0)[0])
			let __goscriptTuple4: any = await o.marshalSingular(b, fd, (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone())
			b = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return [b, err]
			}
		}
		return [b, null]
	}

	public async marshalMap(b: $.Slice<number>, fd: protoreflect.FieldDescriptor | null, mapv: protoreflect.Map | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		let keyf = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let valf = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let keyOrder = order.AnyKeyOrder
		if (o.Deterministic) {
			keyOrder = order.GenericKeyOrder
		}
		let err: $.GoError = null! as $.GoError
		await order.RangeEntries((mapv as order.EntryRanger | null), keyOrder, $.functionValue(async (key: protoreflect.MapKey, value: protoreflect.Value): globalThis.Promise<boolean> => {
			b = protowire.AppendTag(b, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 2)
			let pos: number = 0
			let __goscriptTuple5: any = appendSpeculativeLength(b)
			b = __goscriptTuple5[0]
			pos = __goscriptTuple5[1]

			let __goscriptTuple6: any = await $.markAsStructValue($.cloneStructValue(o)).marshalField(b, keyf, key.Value())
			b = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return false
			}
			let __goscriptTuple7: any = await $.markAsStructValue($.cloneStructValue(o)).marshalField(b, valf, value)
			b = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			if (err != null) {
				return false
			}
			b = finishSpeculativeLength(b, pos)
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return [b, err]
	}

	public async marshalMessage(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		let [out, err] = await $.markAsStructValue($.cloneStructValue(o)).marshal(b, m)
		return [out.Buf, err]
	}

	public async marshalMessageSet(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		if (!flags2.ProtoLegacy) {
			return [b, await errors2.New("no support for message_set_wire_format", null)]
		}
		let fieldOrder = order.AnyFieldOrder
		if (o.Deterministic) {
			fieldOrder = order.NumberFieldOrder
		}
		let err: $.GoError = null! as $.GoError
		await order.RangeFields((m as order.FieldRanger | null), fieldOrder, $.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			let __goscriptTuple8: any = await $.markAsStructValue($.cloneStructValue(o)).marshalMessageSetField(b, fd, (v).clone())
			b = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			return err == null
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [b, err]
		}
		return messageset.AppendUnknown(b, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields))
	}

	public async marshalMessageSetField(b: $.Slice<number>, fd: protoreflect.FieldDescriptor | null, value: protoreflect.Value): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		b = messageset.AppendFieldStart(b, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		b = protowire.AppendTag(b, 3, 2)
		let calculatedSize = await $.markAsStructValue($.cloneStructValue(o)).Size((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await $.markAsStructValue($.cloneStructValue(value)).Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		b = protowire.AppendVarint(b, $.uint64(calculatedSize))
		let before = $.sliceLen(b)
		let __goscriptTuple9: any = await $.markAsStructValue($.cloneStructValue(o)).marshalMessage(b, await $.markAsStructValue($.cloneStructValue(value)).Message())
		b = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (err != null) {
			return [b, err]
		}
		{
			let measuredSize = $.sliceLen(b) - before
			if (calculatedSize != measuredSize) {
				return [null, errors2.MismatchedSizeCalculation(calculatedSize, measuredSize)]
			}
		}
		b = messageset.AppendFieldEnd(b)
		return [b, null]
	}

	public async marshalMessageSlow(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		if (await messageset.IsMessageSet((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return $.markAsStructValue($.cloneStructValue(o)).marshalMessageSet(b, m)
		}
		let fieldOrder = order.AnyFieldOrder
		if (o.Deterministic) {
			// TODO: This should use a more natural ordering like NumberFieldOrder,
			// but doing so breaks golden tests that make invalid assumption about
			// output stability of this implementation.
			fieldOrder = order.LegacyFieldOrder
		}
		let err: $.GoError = null! as $.GoError
		await order.RangeFields((m as order.FieldRanger | null), fieldOrder, $.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			let __goscriptTuple10: any = await $.markAsStructValue($.cloneStructValue(o)).marshalField(b, fd, v)
			b = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
			return err == null
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [b, err]
		}
		b = $.appendSlice(b, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields), $.byteSliceHint)
		return [b, null]
	}

	public async marshalSingular(b: $.Slice<number>, fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.BoolKind:
			{
				b = protowire.AppendVarint(b, protowire.EncodeBool(await $.markAsStructValue($.cloneStructValue(v)).Bool()))
				break
			}
			case protoreflect.EnumKind:
			{
				b = protowire.AppendVarint(b, $.uint64(await $.markAsStructValue($.cloneStructValue(v)).Enum()))
				break
			}
			case protoreflect.Int32Kind:
			{
				b = protowire.AppendVarint(b, $.uint64($.int(await $.markAsStructValue($.cloneStructValue(v)).Int(), 32)))
				break
			}
			case protoreflect.Sint32Kind:
			{
				b = protowire.AppendVarint(b, protowire.EncodeZigZag($.int64($.int(await $.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
				break
			}
			case protoreflect.Uint32Kind:
			{
				b = protowire.AppendVarint(b, $.uint64($.uint(await $.markAsStructValue($.cloneStructValue(v)).Uint(), 32)))
				break
			}
			case protoreflect.Int64Kind:
			{
				b = protowire.AppendVarint(b, $.uint64(await $.markAsStructValue($.cloneStructValue(v)).Int()))
				break
			}
			case protoreflect.Sint64Kind:
			{
				b = protowire.AppendVarint(b, protowire.EncodeZigZag(await $.markAsStructValue($.cloneStructValue(v)).Int()))
				break
			}
			case protoreflect.Uint64Kind:
			{
				b = protowire.AppendVarint(b, await $.markAsStructValue($.cloneStructValue(v)).Uint())
				break
			}
			case protoreflect.Sfixed32Kind:
			{
				b = protowire.AppendFixed32(b, $.uint(await $.markAsStructValue($.cloneStructValue(v)).Int(), 32))
				break
			}
			case protoreflect.Fixed32Kind:
			{
				b = protowire.AppendFixed32(b, $.uint(await $.markAsStructValue($.cloneStructValue(v)).Uint(), 32))
				break
			}
			case protoreflect.FloatKind:
			{
				b = protowire.AppendFixed32(b, math.Float32bits(globalThis.Math.fround(await $.markAsStructValue($.cloneStructValue(v)).Float())))
				break
			}
			case protoreflect.Sfixed64Kind:
			{
				b = protowire.AppendFixed64(b, $.uint64(await $.markAsStructValue($.cloneStructValue(v)).Int()))
				break
			}
			case protoreflect.Fixed64Kind:
			{
				b = protowire.AppendFixed64(b, await $.markAsStructValue($.cloneStructValue(v)).Uint())
				break
			}
			case protoreflect.DoubleKind:
			{
				b = protowire.AppendFixed64(b, math.Float64bits(await $.markAsStructValue($.cloneStructValue(v)).Float()))
				break
			}
			case protoreflect.StringKind:
			{
				if (await strs.EnforceUTF8(fd) && !utf8.ValidString(await $.markAsStructValue($.cloneStructValue(v)).String())) {
					return [b, await errors2.InvalidUTF8((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
				b = protowire.AppendString(b, await $.markAsStructValue($.cloneStructValue(v)).String())
				break
			}
			case protoreflect.BytesKind:
			{
				b = protowire.AppendBytes(b, await $.markAsStructValue($.cloneStructValue(v)).Bytes())
				break
			}
			case protoreflect.MessageKind:
			{
				let pos: number = 0
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple11: any = appendSpeculativeLength(b)
				b = __goscriptTuple11[0]
				pos = __goscriptTuple11[1]
				let __goscriptTuple12: any = await $.markAsStructValue($.cloneStructValue(o)).marshalMessage(b, await $.markAsStructValue($.cloneStructValue(v)).Message())
				b = __goscriptTuple12[0]
				err = __goscriptTuple12[1]
				if (err != null) {
					return [b, err]
				}
				b = finishSpeculativeLength(b, pos)
				break
			}
			case protoreflect.GroupKind:
			{
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple13: any = await $.markAsStructValue($.cloneStructValue(o)).marshalMessage(b, await $.markAsStructValue($.cloneStructValue(v)).Message())
				b = __goscriptTuple13[0]
				err = __goscriptTuple13[1]
				if (err != null) {
					return [b, err]
				}
				b = protowire.AppendVarint(b, protowire.EncodeTag((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 4))
				break
			}
			default:
			{
				return [b, await errors2.New("invalid kind %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))]
				break
			}
		}
		return [b, null]
	}

	public async size(m: protoreflect.Message | null): globalThis.Promise<number> {
		const o = this;
		let size: number = 0
		let methods = await __goscript_proto_methods.protoMethods(m)
		let methods$: protoiface.Methods = methods == null ? $.pointerTarget<protoiface.Methods>(methods) : (methods as any).__isVarRef === true ? (methods as any).value : (methods as any).__goValue === undefined ? (methods as any) : $.pointerTarget<protoiface.Methods>(methods)
		if ((methods != null) && ((methods$ as protoiface.Methods).Size != null)) {
			let out = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (methods$ as protoiface.Methods).Size!($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: m, Flags: o.flags()}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [2], 16, true)] })), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoiface.SizeOutput)))
			return out.Size
		}
		if ((methods != null) && ((methods$ as protoiface.Methods).Marshal != null)) {

			let [out, ] = await (methods$ as protoiface.Methods).Marshal!($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: m, Buf: (null as $.Slice<number>), Flags: o.flags()}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }))
			return $.sliceLen(out.Buf)
		}
		return $.markAsStructValue($.cloneStructValue(o)).sizeMessageSlow(m)
	}

	public async sizeField(fd: protoreflect.FieldDescriptor | null, value: protoreflect.Value): globalThis.Promise<number> {
		const o = this;
		let size: number = 0
		let num = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.markAsStructValue($.cloneStructValue(o)).sizeList(num, fd, await $.markAsStructValue($.cloneStructValue(value)).List())
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				return $.markAsStructValue($.cloneStructValue(o)).sizeMap(num, fd, await $.markAsStructValue($.cloneStructValue(value)).Map())
				break
			}
			default:
			{
				return protowire.SizeTag(num) + await $.markAsStructValue($.cloneStructValue(o)).sizeSingular(num, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (value).clone())
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async sizeList(num: protowire.Number, fd: protoreflect.FieldDescriptor | null, list: protoreflect.List | null): globalThis.Promise<number> {
		const o = this;
		let size: number = 0
		let sizeTag = protowire.SizeTag(num)

		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0)) {
			let content = 0
			for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
				content = content + (await $.markAsStructValue($.cloneStructValue(o)).sizeSingular(num, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()))
			}
			return sizeTag + protowire.SizeBytes(content)
		}

		for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
			size = size + (sizeTag + await $.markAsStructValue($.cloneStructValue(o)).sizeSingular(num, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()))
		}
		return size
	}

	public async sizeMap(num: protowire.Number, fd: protoreflect.FieldDescriptor | null, mapv: protoreflect.Map | null): globalThis.Promise<number> {
		const o = this;
		let size: number = 0
		let sizeTag = protowire.SizeTag(num)

		void (__goscriptAwait = (mapv !== null && (mapv as any).__isVarRef !== true && (mapv as any).__goValue === undefined ? (mapv as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mapv)).Range($.functionValue(async (key: protoreflect.MapKey, value: protoreflect.Value): globalThis.Promise<boolean> => {
			size = size + (sizeTag)
			size = size + (protowire.SizeBytes(await $.markAsStructValue($.cloneStructValue(o)).sizeField((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), key.Value()) + await $.markAsStructValue($.cloneStructValue(o)).sizeField((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (value).clone())))
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return size
	}

	public async sizeMessageSet(m: protoreflect.Message | null): globalThis.Promise<number> {
		const o = this;
		let size: number = 0
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			size = size + (messageset.SizeField((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			size = size + (protowire.SizeTag(3))
			size = size + (protowire.SizeBytes(await $.markAsStructValue($.cloneStructValue(o)).size(await $.markAsStructValue($.cloneStructValue(v)).Message())))
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		size = size + (messageset.SizeUnknown(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields)))
		return size
	}

	public async sizeMessageSlow(m: protoreflect.Message | null): globalThis.Promise<number> {
		const o = this;
		let size: number = 0
		if (await messageset.IsMessageSet((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return $.markAsStructValue($.cloneStructValue(o)).sizeMessageSet(m)
		}
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			size = size + (await $.markAsStructValue($.cloneStructValue(o)).sizeField(fd, (v).clone()))
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		size = size + ($.sliceLen((((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)))
		return size
	}

	public async sizeSingular(num: protowire.Number, kind: protoreflect.Kind, v: protoreflect.Value): globalThis.Promise<number> {
		const o = this;
		switch (kind) {
			case protoreflect.BoolKind:
			{
				return protowire.SizeVarint(protowire.EncodeBool(await $.markAsStructValue($.cloneStructValue(v)).Bool()))
				break
			}
			case protoreflect.EnumKind:
			{
				return protowire.SizeVarint($.uint64(await $.markAsStructValue($.cloneStructValue(v)).Enum()))
				break
			}
			case protoreflect.Int32Kind:
			{
				return protowire.SizeVarint($.uint64($.int(await $.markAsStructValue($.cloneStructValue(v)).Int(), 32)))
				break
			}
			case protoreflect.Sint32Kind:
			{
				return protowire.SizeVarint(protowire.EncodeZigZag($.int64($.int(await $.markAsStructValue($.cloneStructValue(v)).Int(), 32))))
				break
			}
			case protoreflect.Uint32Kind:
			{
				return protowire.SizeVarint($.uint64($.uint(await $.markAsStructValue($.cloneStructValue(v)).Uint(), 32)))
				break
			}
			case protoreflect.Int64Kind:
			{
				return protowire.SizeVarint($.uint64(await $.markAsStructValue($.cloneStructValue(v)).Int()))
				break
			}
			case protoreflect.Sint64Kind:
			{
				return protowire.SizeVarint(protowire.EncodeZigZag(await $.markAsStructValue($.cloneStructValue(v)).Int()))
				break
			}
			case protoreflect.Uint64Kind:
			{
				return protowire.SizeVarint(await $.markAsStructValue($.cloneStructValue(v)).Uint())
				break
			}
			case protoreflect.Sfixed32Kind:
			{
				return protowire.SizeFixed32()
				break
			}
			case protoreflect.Fixed32Kind:
			{
				return protowire.SizeFixed32()
				break
			}
			case protoreflect.FloatKind:
			{
				return protowire.SizeFixed32()
				break
			}
			case protoreflect.Sfixed64Kind:
			{
				return protowire.SizeFixed64()
				break
			}
			case protoreflect.Fixed64Kind:
			{
				return protowire.SizeFixed64()
				break
			}
			case protoreflect.DoubleKind:
			{
				return protowire.SizeFixed64()
				break
			}
			case protoreflect.StringKind:
			{
				return protowire.SizeBytes($.stringLen(await $.markAsStructValue($.cloneStructValue(v)).String()))
				break
			}
			case protoreflect.BytesKind:
			{
				return protowire.SizeBytes($.sliceLen(await $.markAsStructValue($.cloneStructValue(v)).Bytes()))
				break
			}
			case protoreflect.MessageKind:
			{
				return protowire.SizeBytes(await $.markAsStructValue($.cloneStructValue(o)).size(await $.markAsStructValue($.cloneStructValue(v)).Message()))
				break
			}
			case protoreflect.GroupKind:
			{
				return protowire.SizeGroup(num, await $.markAsStructValue($.cloneStructValue(o)).size(await $.markAsStructValue($.cloneStructValue(v)).Message()))
				break
			}
			default:
			{
				return 0
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"proto.MarshalOptions",
		() => new MarshalOptions(),
		() => [$.methodSignature("Marshal", [["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalAppend", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalState", [["in", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true)] }]], [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }, "error"]), $.methodSignature("Size", [["m", "protoreflect.ProtoMessage"]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("flags", [], [/* @__PURE__ */ $.basicType("uint8")]), $.methodSignature("marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], [["out", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true)] }], ["err", "error"]]), $.methodSignature("marshalField", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["fd", "protoreflect.FieldDescriptor"], ["value", "protoreflect.Value"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshalList", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["fd", "protoreflect.FieldDescriptor"], ["list", "protoreflect.List"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshalMap", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["fd", "protoreflect.FieldDescriptor"], ["mapv", "protoreflect.Map"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshalMessage", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshalMessageSet", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshalMessageSetField", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["fd", "protoreflect.FieldDescriptor"], ["value", "protoreflect.Value"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshalMessageSlow", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("marshalSingular", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["fd", "protoreflect.FieldDescriptor"], ["v", "protoreflect.Value"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("size", [["m", "protoreflect.Message"]], [["size", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("sizeField", [["fd", "protoreflect.FieldDescriptor"], ["value", "protoreflect.Value"]], [["size", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("sizeList", [["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")], ["fd", "protoreflect.FieldDescriptor"], ["list", "protoreflect.List"]], [["size", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("sizeMap", [["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")], ["fd", "protoreflect.FieldDescriptor"], ["mapv", "protoreflect.Map"]], [["size", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("sizeMessageSet", [["m", "protoreflect.Message"]], [["size", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("sizeMessageSlow", [["m", "protoreflect.Message"]], [["size", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("sizeSingular", [["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")], ["kind", /* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")], ["v", "protoreflect.Value"]], [/* @__PURE__ */ $.basicType("int")])],
		MarshalOptions,
		() => [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("AllowPartial", /* @__PURE__ */ $.basicType("bool"), [1], 0, true), /* @__PURE__ */ $.structField("Deterministic", /* @__PURE__ */ $.basicType("bool"), [2], 1, true), /* @__PURE__ */ $.structField("UseCachedSize", /* @__PURE__ */ $.basicType("bool"), [3], 2, true)]
	)
}

export const speculativeLength: number = 1

export async function Marshal(m: __goscript_proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	// Treat nil message interface as an empty message; nothing to output.
	if (m == null) {
		return [null, null]
	}

	let [out, err] = await $.markAsStructValue($.cloneStructValue(new MarshalOptions(undefined, true))).marshal(null, (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	if (($.sliceLen(out.Buf) == 0) && (err == null)) {
		out.Buf = await emptyBytesForMessage(m)
	}
	return [out.Buf, err]
}

export async function emptyBytesForMessage(m: __goscript_proto.Message | null): globalThis.Promise<$.Slice<number>> {
	if ((m == null) || !(__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return null
	}
	return $.goSlice(__goscript_decode_gen.emptyBuf, undefined, undefined)
}

export function growcap(oldcap: number, wantcap: number): number {
	let newcap: number = 0
	if (wantcap > (oldcap * 2)) {
		newcap = wantcap
	} else {
		if (oldcap < 1024) {
			// The Go 1.14 runtime takes this case when len(s) < 1024,
			// not when cap(s) < 1024. The difference doesn't seem
			// significant here.
			newcap = oldcap * 2
		} else {
			newcap = oldcap
			while ((0 < newcap) && (newcap < wantcap)) {
				newcap = newcap + (globalThis.Math.trunc(newcap / 4))
			}
			if (newcap <= 0) {
				newcap = wantcap
			}
		}
	}
	return newcap
}

export function appendSpeculativeLength(b: $.Slice<number>): [$.Slice<number>, number] {
	let pos = $.sliceLen(b)
	b = $.appendSlice(b, $.stringToBytes($.sliceStringOrBytes("\x00\x00\x00\x00", undefined, 1)), $.byteSliceHint)
	return [b, pos]
}

export function finishSpeculativeLength(b: $.Slice<number>, pos: number): $.Slice<number> {
	let mlen: number = ($.sliceLen(b) - pos) - 1
	let msiz = protowire.SizeVarint($.uint64(mlen))
	if (msiz != 1) {
		for (let i = 0; i < (msiz - 1); i++) {
			b = $.append(b, $.uint(0, 8), $.byteSliceHint)
		}
		$.copyByteRanges(b, pos + msiz, undefined, b, pos + 1, undefined)
		b = $.goSlice(b, undefined, (pos + msiz) + mlen)
	}
	protowire.AppendVarint($.goSlice(b, undefined, pos), $.uint64(mlen))
	return b
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
