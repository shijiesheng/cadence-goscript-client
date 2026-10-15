// Generated file based on buffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as prototext from "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_wire from "./wire.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./proto.gs.ts"
import "./wire.gs.ts"

$.registerTypePackagePath("github.com/golang/protobuf/proto", ["proto.Buffer", "proto.unknownFields"])

export class Buffer {
	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get idx(): number {
		return this._fields.idx
	}

	public set idx(value: number) {
		this._fields.idx = value
	}

	public get deterministic(): boolean {
		return this._fields.deterministic
	}

	public set deterministic(value: boolean) {
		this._fields.deterministic = value
	}

	public _fields: {
		buf: $.Slice<number>
		idx: number
		deterministic: boolean
	}

	constructor(init?: Partial<{buf?: $.Slice<number>, idx?: number, deterministic?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			buf: init?.buf ?? (null! as $.Slice<number>),
			idx: init?.idx ?? (0 as number),
			deterministic: init?.deterministic ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Buffer {
		return new Buffer(this, true)
	}

	public __goscriptAssign(source: Buffer): void {
		const target = this._fields
		const values = source._fields
		target.buf = values.buf
		target.idx = values.idx
		target.deterministic = values.deterministic
	}

	public Bytes(): $.Slice<number> {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return $.pointerValue<Buffer>(b).buf
	}

	public async DebugPrint(s: string, b: $.Slice<number>): globalThis.Promise<void> {
		let m = await __goscript_proto.MessageReflect($.interfaceValue<__goscript_proto.Message | null>(new unknownFields(), "*proto.unknownFields", /* @__PURE__ */ $.pointerType("proto.unknownFields")))
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).SetUnknown((b as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple0: any = await $.markAsStructValue($.cloneStructValue(new prototext.MarshalOptions({AllowPartial: true, Indent: "\t"}, true))).Marshal((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		b = __goscriptTuple0[0]
		await fmt.Printf("==== %s ====\n%s==== %s ====\n", s, $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), s)
	}

	public DecodeFixed32(): [bigint, $.GoError] {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let [v, n] = protowire.ConsumeFixed32($.goSlice((b$ as Buffer).buf, (b$ as Buffer).idx, undefined))
		if (n < 0) {
			return [0n, protowire.ParseError(n)]
		}
		;(b$ as Buffer).idx = (b$ as Buffer).idx + (n)
		return [$.uint64(v), null]
	}

	public DecodeFixed64(): [bigint, $.GoError] {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let [v, n] = protowire.ConsumeFixed64($.goSlice((b$ as Buffer).buf, (b$ as Buffer).idx, undefined))
		if (n < 0) {
			return [0n, protowire.ParseError(n)]
		}
		;(b$ as Buffer).idx = (b$ as Buffer).idx + (n)
		return [$.uint64(v), null]
	}

	public async DecodeGroup(m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let __goscriptTuple1: any = consumeGroup($.goSlice((b$ as Buffer).buf, (b$ as Buffer).idx, undefined))
		let v: $.Slice<number> = __goscriptTuple1[0]
		let n = __goscriptTuple1[1]
		let err = __goscriptTuple1[2]
		if (err != null) {
			return err
		}
		;(b$ as Buffer).idx = (b$ as Buffer).idx + (n)
		return __goscript_wire.UnmarshalMerge(v, m)
	}

	public async DecodeMessage(m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let __goscriptTuple2: any = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).DecodeRawBytes(false) : Buffer.prototype.DecodeRawBytes.call(b, false))
		let v: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		return __goscript_wire.UnmarshalMerge(v, m)
	}

	public DecodeRawBytes(alloc: boolean): [$.Slice<number>, $.GoError] {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let __goscriptTuple3: any = protowire.ConsumeBytes($.goSlice((b$ as Buffer).buf, (b$ as Buffer).idx, undefined))
		let v: $.Slice<number> = __goscriptTuple3[0]
		let n = __goscriptTuple3[1]
		if (n < 0) {
			return [null, protowire.ParseError(n)]
		}
		;(b$ as Buffer).idx = (b$ as Buffer).idx + (n)
		if (alloc) {
			v = $.appendSlice<number>(null, v, $.byteSliceHint)
		}
		return [v, null]
	}

	public DecodeStringBytes(): [string, $.GoError] {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let [v, n] = protowire.ConsumeString($.goSlice((b$ as Buffer).buf, (b$ as Buffer).idx, undefined))
		if (n < 0) {
			return ["", protowire.ParseError(n)]
		}
		;(b$ as Buffer).idx = (b$ as Buffer).idx + (n)
		return [v, null]
	}

	public DecodeVarint(): [bigint, $.GoError] {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let [v, n] = protowire.ConsumeVarint($.goSlice((b$ as Buffer).buf, (b$ as Buffer).idx, undefined))
		if (n < 0) {
			return [0n, protowire.ParseError(n)]
		}
		;(b$ as Buffer).idx = (b$ as Buffer).idx + (n)
		return [$.uint64(v), null]
	}

	public DecodeZigzag32(): [bigint, $.GoError] {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let [v, err] = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).DecodeVarint() : Buffer.prototype.DecodeVarint.call(b))
		if (err != null) {
			return [0n, err]
		}
		return [$.uint64(($.uintShr($.uint(v, 32), 1, 32)) ^ $.uint(($.int($.uint64And(v, 1n), 32) << 31) >> 31, 32)), null]
	}

	public DecodeZigzag64(): [bigint, $.GoError] {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let [v, err] = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).DecodeVarint() : Buffer.prototype.DecodeVarint.call(b))
		if (err != null) {
			return [0n, err]
		}
		return [$.uint64($.uint64Xor(($.uint64Shr($.uint64(v), 1n)), $.uint64($.int64Shr(($.int64Shl($.int64($.uint64And(v, 1n)), 63n)), 63n)))), null]
	}

	public EncodeFixed32(v: bigint): $.GoError {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).buf = protowire.AppendFixed32((b$ as Buffer).buf, $.uint(v, 32))
		return null
	}

	public EncodeFixed64(v: bigint): $.GoError {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).buf = protowire.AppendFixed64((b$ as Buffer).buf, $.uint64(v))
		return null
	}

	public async EncodeMessage(m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let err: $.GoError = null! as $.GoError;
		;(b$ as Buffer).buf = protowire.AppendVarint((b$ as Buffer).buf, $.uint64(await __goscript_wire.Size(m)))
		let __goscriptTuple4: any = await __goscript_wire.marshalAppend((b$ as Buffer).buf, m, (b$ as Buffer).deterministic);
		;(b$ as Buffer).buf = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		return err
	}

	public EncodeRawBytes(v: $.Slice<number>): $.GoError {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).buf = protowire.AppendBytes((b$ as Buffer).buf, v)
		return null
	}

	public EncodeStringBytes(v: string): $.GoError {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).buf = protowire.AppendString((b$ as Buffer).buf, v)
		return null
	}

	public EncodeVarint(v: bigint): $.GoError {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).buf = protowire.AppendVarint((b$ as Buffer).buf, v)
		return null
	}

	public EncodeZigzag32(v: bigint): $.GoError {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).EncodeVarint($.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))) : Buffer.prototype.EncodeVarint.call(b, $.uint64(((($.uint(v, 32) << 1) >>> 0)) ^ $.uint(($.int(v, 32) >> 31), 32))))
	}

	public EncodeZigzag64(v: bigint): $.GoError {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).EncodeVarint($.uint64($.uint64Xor(($.uint64Shl($.uint64(v), 1n)), $.uint64(($.int64Shr($.int64(v), 63n)))))) : Buffer.prototype.EncodeVarint.call(b, $.uint64($.uint64Xor(($.uint64Shl($.uint64(v), 1n)), $.uint64(($.int64Shr($.int64(v), 63n)))))))
	}

	public async Marshal(m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple5: any = await __goscript_wire.marshalAppend((b$ as Buffer).buf, m, (b$ as Buffer).deterministic);
		;(b$ as Buffer).buf = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		return err
	}

	public Reset(): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).buf = $.goSlice((b$ as Buffer).buf, undefined, 0);
		;(b$ as Buffer).idx = 0
	}

	public SetBuf(buf: $.Slice<number>): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).buf = buf;
		;(b$ as Buffer).idx = 0
	}

	public SetDeterministic(deterministic: boolean): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		$.pointerValue<Buffer>(b).deterministic = deterministic
	}

	public async Unmarshal(m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		let err = await __goscript_wire.UnmarshalMerge((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).Unread() : Buffer.prototype.Unread.call(b)), m);
		;(b$ as Buffer).idx = $.sliceLen((b$ as Buffer).buf)
		return err
	}

	public Unread(): $.Slice<number> {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		return $.goSlice((b$ as Buffer).buf, (b$ as Buffer).idx, undefined)
	}

	static __typeInfo = $.registerStructType(
		"proto.Buffer",
		() => new Buffer(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("DebugPrint", [["s", /* @__PURE__ */ $.basicType("string")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("DecodeFixed32", [], [/* @__PURE__ */ $.basicType("uint64"), "error"], true), $.methodSignature("DecodeFixed64", [], [/* @__PURE__ */ $.basicType("uint64"), "error"], true), $.methodSignature("DecodeGroup", [["m", "protoiface.MessageV1"]], ["error"], true), $.methodSignature("DecodeMessage", [["m", "protoiface.MessageV1"]], ["error"], true), $.methodSignature("DecodeRawBytes", [["alloc", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("DecodeStringBytes", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("DecodeVarint", [], [/* @__PURE__ */ $.basicType("uint64"), "error"], true), $.methodSignature("DecodeZigzag32", [], [/* @__PURE__ */ $.basicType("uint64"), "error"], true), $.methodSignature("DecodeZigzag64", [], [/* @__PURE__ */ $.basicType("uint64"), "error"], true), $.methodSignature("EncodeFixed32", [["v", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeFixed64", [["v", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeMessage", [["m", "protoiface.MessageV1"]], ["error"], true), $.methodSignature("EncodeRawBytes", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("EncodeStringBytes", [["v", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("EncodeVarint", [["v", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeZigzag32", [["v", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeZigzag64", [["v", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("Marshal", [["m", "protoiface.MessageV1"]], ["error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("SetBuf", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("SetDeterministic", [["deterministic", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("Unmarshal", [["m", "protoiface.MessageV1"]], ["error"], true), $.methodSignature("Unread", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		Buffer,
		() => [/* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("idx", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("deterministic", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "github.com/golang/protobuf/proto" })]
	)
}

export class unknownFields {
	public get XXX_unrecognized(): protoimpl.UnknownFields {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: protoimpl.UnknownFields) {
		this._fields.XXX_unrecognized = value
	}

	public _fields: {
		XXX_unrecognized: protoimpl.UnknownFields
	}

	constructor(init?: Partial<{XXX_unrecognized?: protoimpl.UnknownFields}>, __goscriptValue?: boolean) {
		this._fields = {
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as protoimpl.UnknownFields)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unknownFields {
		return new unknownFields(this, true)
	}

	public __goscriptAssign(source: unknownFields): void {
		const target = this._fields
		const values = source._fields
		target.XXX_unrecognized = values.XXX_unrecognized
	}

	public ProtoMessage(): void {
		const m: unknownFields | $.VarRef<unknownFields> | null = this;
		$.panic("not implemented")
	}

	public Reset(): void {
		const m: unknownFields | $.VarRef<unknownFields> | null = this;
		$.panic("not implemented")
	}

	public String(): string {
		const m: unknownFields | $.VarRef<unknownFields> | null = this;
		$.panic("not implemented")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"proto.unknownFields",
		() => new unknownFields(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		unknownFields,
		() => [/* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true)]
	)
}

export const WireVarint: number = 0

export const WireFixed32: number = 5

export const WireFixed64: number = 1

export const WireBytes: number = 2

export const WireStartGroup: number = 3

export const WireEndGroup: number = 4

export function EncodeVarint(v: bigint): $.Slice<number> {
	return protowire.AppendVarint(null, v)
}

export function SizeVarint(v: bigint): number {
	return protowire.SizeVarint(v)
}

export function DecodeVarint(b: $.Slice<number>): [bigint, number] {
	let [v, n] = protowire.ConsumeVarint(b)
	if (n < 0) {
		return [0n, 0]
	}
	return [v, n]
}

export function NewBuffer(buf: $.Slice<number>): Buffer | $.VarRef<Buffer> | null {
	return new Buffer({buf: buf})
}

export function consumeGroup(b: $.Slice<number>): [$.Slice<number>, number, $.GoError] {
	let b0: $.Slice<number> = b
	let depth = 1
	while (true) {
		let [, wtyp, tagLen] = protowire.ConsumeTag(b)
		if (tagLen < 0) {
			return [null, 0, protowire.ParseError(tagLen)]
		}
		b = $.goSlice(b, tagLen, undefined)

		let valLen: number = 0
		switch (wtyp) {
			case protowire.VarintType:
			{
				let __goscriptTuple6: any = protowire.ConsumeVarint(b)
				valLen = __goscriptTuple6[1]
				break
			}
			case protowire.Fixed32Type:
			{
				let __goscriptTuple7: any = protowire.ConsumeFixed32(b)
				valLen = __goscriptTuple7[1]
				break
			}
			case protowire.Fixed64Type:
			{
				let __goscriptTuple8: any = protowire.ConsumeFixed64(b)
				valLen = __goscriptTuple8[1]
				break
			}
			case protowire.BytesType:
			{
				let __goscriptTuple9: any = protowire.ConsumeBytes(b)
				valLen = __goscriptTuple9[1]
				break
			}
			case protowire.StartGroupType:
			{
				depth++
				break
			}
			case protowire.EndGroupType:
			{
				depth--
				break
			}
			default:
			{
				return [null, 0, errors.New("proto: cannot parse reserved wire type")]
				break
			}
		}
		if (valLen < 0) {
			return [null, 0, protowire.ParseError(valLen)]
		}
		b = $.goSlice(b, valLen, undefined)

		if (depth == 0) {
			return [$.goSlice(b0, undefined, ($.sliceLen(b0) - $.sliceLen(b)) - tagLen), $.sliceLen(b0) - $.sliceLen(b), null]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
