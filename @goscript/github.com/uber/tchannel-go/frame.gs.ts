// Generated file based on frame.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.FrameHeader", "tchannel.Frame"])

export class FrameHeader {
	// The size of the frame including the header
	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	// The type of message represented by the frame
	public get messageType(): __goscript_messages.messageType {
		return this._fields.messageType
	}

	public set messageType(value: __goscript_messages.messageType) {
		this._fields.messageType = value
	}

	// Left empty
	public get reserved1(): number {
		return this._fields.reserved1
	}

	public set reserved1(value: number) {
		this._fields.reserved1 = value
	}

	// The id of the message represented by the frame
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	// Left empty
	public get reserved(): Uint8Array {
		return this._fields.reserved
	}

	public set reserved(value: Uint8Array) {
		this._fields.reserved = value
	}

	public _fields: {
		size: number
		messageType: __goscript_messages.messageType
		reserved1: number
		ID: number
		reserved: Uint8Array
	}

	constructor(init?: Partial<{size?: number, messageType?: __goscript_messages.messageType, reserved1?: number, ID?: number, reserved?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			size: init?.size ?? (0 as number),
			messageType: init?.messageType ?? (0 as __goscript_messages.messageType),
			reserved1: init?.reserved1 ?? (0 as number),
			ID: init?.ID ?? (0 as number),
			reserved: init?.reserved !== undefined ? $.cloneArrayValue(init.reserved, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FrameHeader {
		return new FrameHeader(this, true)
	}

	public __goscriptAssign(source: FrameHeader): void {
		const target = this._fields
		const values = source._fields
		target.size = values.size
		target.messageType = values.messageType
		target.reserved1 = values.reserved1
		target.ID = values.ID
		target.reserved = $.assignFieldValue(target.reserved, values.reserved, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
	}

	public FrameSize(): number {
		const fh = this;
		return fh.size
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const fh = this;
		let s = $.anonymousStructValue({ID: fh.ID, MsgType: fh.messageType, Size: fh.size}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("MsgType", /* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"), [1], 4, true, { tag: "json:\"msgType\"" }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("uint16"), [2], 6, true, { tag: "json:\"size\"" })] })
		return json.Marshal($.interfaceValue($.markAsStructValue($.cloneStructValue(s)), "struct{ID uint32 \"json:\\\"id\\\"\"; MsgType tchannel.messageType \"json:\\\"msgType\\\"\"; Size uint16 \"json:\\\"size\\\"\"}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("MsgType", /* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"), [1], 4, true, { tag: "json:\"msgType\"" }), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("uint16"), [2], 6, true, { tag: "json:\"size\"" })] }))
	}

	public MessageType(): number {
		const fh = this;
		return $.uint(fh.messageType, 8)
	}

	public PayloadSize(): number {
		const fh = this;
		return $.uint(((fh.size - 16) & 0xffff), 16)
	}

	public SetPayloadSize(size: number): void {
		let fh: FrameHeader | $.VarRef<FrameHeader> | null = this;
		$.pointerValue<FrameHeader>(fh).size = $.uint(((size + 16) & 0xffff), 16)
	}

	public async String(): globalThis.Promise<string> {
		const fh = this;
		return fmt.Sprintf("%v[%d]", $.namedValueInterfaceValue<any>(fh.messageType, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(fh.ID, "uint32"))
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		let fh: FrameHeader | $.VarRef<FrameHeader> | null = this;
		const fh$: FrameHeader = fh == null ? $.pointerTarget<FrameHeader>(fh) : (fh as any).__isVarRef === true ? (fh as any).value : (fh as any).__goValue === undefined ? (fh as any) : $.pointerTarget<FrameHeader>(fh);
		;(fh$ as FrameHeader).size = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(r));
		;(fh$ as FrameHeader).messageType = $.uint((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(r)), 8);
		;(fh$ as FrameHeader).reserved1 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(r));
		;(fh$ as FrameHeader).ID = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint32() : typed.ReadBuffer.prototype.ReadUint32.call(r))
		void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadBytes(8) : typed.ReadBuffer.prototype.ReadBytes.call(r, 8))
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(r))
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const fh: FrameHeader | $.VarRef<FrameHeader> | null = this;
		const fh$: FrameHeader = fh == null ? $.pointerTarget<FrameHeader>(fh) : (fh as any).__isVarRef === true ? (fh as any).value : (fh as any).__goValue === undefined ? (fh as any) : $.pointerTarget<FrameHeader>(fh)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint16((fh$ as FrameHeader).size) : typed.WriteBuffer.prototype.WriteUint16.call(w, (fh$ as FrameHeader).size))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteSingleByte($.uint((fh$ as FrameHeader).messageType, 8)) : typed.WriteBuffer.prototype.WriteSingleByte.call(w, $.uint((fh$ as FrameHeader).messageType, 8)))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteSingleByte((fh$ as FrameHeader).reserved1) : typed.WriteBuffer.prototype.WriteSingleByte.call(w, (fh$ as FrameHeader).reserved1))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint32((fh$ as FrameHeader).ID) : typed.WriteBuffer.prototype.WriteUint32.call(w, (fh$ as FrameHeader).ID))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteBytes($.goSlice((fh$ as FrameHeader).reserved, undefined, undefined)) : typed.WriteBuffer.prototype.WriteBytes.call(w, $.goSlice((fh$ as FrameHeader).reserved, undefined, undefined)))
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(w))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.FrameHeader",
		() => new FrameHeader(),
		() => [$.methodSignature("FrameSize", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MessageType", [], [/* @__PURE__ */ $.basicType("uint8")]), $.methodSignature("PayloadSize", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("SetPayloadSize", [["size", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		FrameHeader,
		() => [/* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("messageType", /* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"), [1], 2, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("reserved1", /* @__PURE__ */ $.basicType("uint8"), [2], 3, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [3], 4, true), /* @__PURE__ */ $.structField("reserved", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [4], 8, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class Frame {
	public get buffer(): $.Slice<number> {
		return this._fields.buffer
	}

	public set buffer(value: $.Slice<number>) {
		this._fields.buffer = value
	}

	public get headerBuffer(): $.Slice<number> {
		return this._fields.headerBuffer
	}

	public set headerBuffer(value: $.Slice<number>) {
		this._fields.headerBuffer = value
	}

	// The header for the frame
	public get Header(): FrameHeader {
		return this._fields.Header
	}

	public set Header(value: FrameHeader) {
		this._fields.Header = value
	}

	// The payload for the frame
	public get Payload(): $.Slice<number> {
		return this._fields.Payload
	}

	public set Payload(value: $.Slice<number>) {
		this._fields.Payload = value
	}

	public _fields: {
		buffer: $.Slice<number>
		headerBuffer: $.Slice<number>
		Header: FrameHeader
		Payload: $.Slice<number>
	}

	constructor(init?: Partial<{buffer?: $.Slice<number>, headerBuffer?: $.Slice<number>, Header?: FrameHeader, Payload?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			buffer: init?.buffer ?? (null! as $.Slice<number>),
			headerBuffer: init?.headerBuffer ?? (null! as $.Slice<number>),
			Header: init?.Header ? init.Header.clone() : new FrameHeader(undefined, true),
			Payload: init?.Payload ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Frame {
		return new Frame(this, true)
	}

	public __goscriptAssign(source: Frame): void {
		const target = this._fields
		const values = source._fields
		target.buffer = values.buffer
		target.headerBuffer = values.headerBuffer
		$.assignStruct(target.Header, values.Header)
		target.Payload = values.Payload
	}

	public async ReadBody(header: $.Slice<number>, r: io.Reader | null): globalThis.Promise<$.GoError> {
		const f: Frame | $.VarRef<Frame> | null = this;
		const f$: Frame = f == null ? $.pointerTarget<Frame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Frame>(f)
		// Copy the header into the underlying buffer so we have an assembled frame
		// that can be directly forwarded.
		$.copy((f$ as Frame).buffer, header)

		// Parse the header into our typed struct.
		{
			let err = (f$ as Frame).Header.read(typed.NewReadBuffer(header))
			if (err != null) {
				return err
			}
		}

		{
			let payloadSize = (f$ as Frame).Header.PayloadSize()
			switch ((true as boolean)) {
				case payloadSize > 65519:
				{
					return fmt.Errorf("invalid frame size %v", $.basicInterfaceValue((f$ as Frame).Header.size, "uint16"))
					break
				}
				case payloadSize > 0:
				{
					let [, err] = await io.ReadFull($.pointerValueOrNil(r)!, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Frame).SizedPayload() : Frame.prototype.SizedPayload.call(f)))
					return err
					break
				}
				default:
				{
					return null
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadIn(r: io.Reader | null): globalThis.Promise<$.GoError> {
		const f: Frame | $.VarRef<Frame> | null = this;
		let header: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")
		{
			let [, err] = await io.ReadFull($.pointerValueOrNil(r)!, header)
			if (err != null) {
				return err
			}
		}

		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Frame).ReadBody(header, r) : Frame.prototype.ReadBody.call(f, header, r))
	}

	public SizedPayload(): $.Slice<number> {
		const f: Frame | $.VarRef<Frame> | null = this;
		const f$: Frame = f == null ? $.pointerTarget<Frame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Frame>(f)
		return $.goSlice((f$ as Frame).Payload, undefined, (f$ as Frame).Header.PayloadSize())
	}

	public async WriteOut(w: io.Writer | null): globalThis.Promise<$.GoError> {
		const f: Frame | $.VarRef<Frame> | null = this;
		const f$: Frame = f == null ? $.pointerTarget<Frame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Frame>(f)
		let wbuf: $.VarRef<typed.WriteBuffer> = $.varRef(new typed.WriteBuffer(undefined, true))
		wbuf.value.Wrap((f$ as Frame).headerBuffer)

		{
			let err = (f$ as Frame).Header.write(wbuf)
			if (err != null) {
				return err
			}
		}

		let fullFrame: $.Slice<number> = $.goSlice((f$ as Frame).buffer, undefined, (f$ as Frame).Header.FrameSize())
		{
			let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(fullFrame)
			if (err != null) {
				return err
			}
		}

		return null
	}

	public messageType(): __goscript_messages.messageType {
		const f: Frame | $.VarRef<Frame> | null = this;
		return $.pointerValue<Frame>(f).Header.messageType
	}

	public read(msg: __goscript_messages.message | null): $.GoError {
		const f: Frame | $.VarRef<Frame> | null = this;
		let rbuf: $.VarRef<typed.ReadBuffer> = $.varRef(new typed.ReadBuffer(undefined, true))
		rbuf.value.Wrap((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Frame).SizedPayload() : Frame.prototype.SizedPayload.call(f)))
		return (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(msg)).read(rbuf)
	}

	public write(msg: __goscript_messages.message | null): $.GoError {
		let f: Frame | $.VarRef<Frame> | null = this;
		const f$: Frame = f == null ? $.pointerTarget<Frame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Frame>(f)
		let wbuf: $.VarRef<typed.WriteBuffer> = $.varRef(new typed.WriteBuffer(undefined, true))
		wbuf.value.Wrap($.goSlice((f$ as Frame).Payload, undefined, undefined))
		{
			let err = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(msg)).write(wbuf)
			if (err != null) {
				return err
			}
		}

		;(f$ as Frame).Header.ID = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(msg)).ID();
		;(f$ as Frame).Header.reserved1 = 0;
		;(f$ as Frame).Header.messageType = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(msg)).messageType()
		void (f$ as Frame).Header.SetPayloadSize($.uint(wbuf.value.BytesWritten(), 16))
		return null
	}

	static __typeInfo = $.registerStructType(
		"tchannel.Frame",
		() => new Frame(),
		() => [$.methodSignature("ReadBody", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["r", "io.Reader"]], ["error"], true), $.methodSignature("ReadIn", [["r", "io.Reader"]], ["error"], true), $.methodSignature("SizedPayload", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("WriteOut", [["w", "io.Writer"]], ["error"], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["msg", "tchannel.message"]], ["error"], true), $.methodSignature("write", [["msg", "tchannel.message"]], ["error"], true)],
		Frame,
		() => [/* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("headerBuffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("Header", "tchannel.FrameHeader", [2], 48, true), /* @__PURE__ */ $.structField("Payload", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 64, true)]
	)
}

export const MaxFrameSize: number = 65535

export const FrameHeaderSize: number = 16

export const MaxFramePayloadSize: number = 65519

export function NewFrame(payloadCapacity: number): Frame | $.VarRef<Frame> | null {
	let f: Frame | $.VarRef<Frame> | null = new Frame()
	let f$: Frame = f == null ? $.pointerTarget<Frame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Frame>(f);
	;(f$ as Frame).buffer = $.makeSlice<number>(payloadCapacity + 16, undefined, "byte");
	;(f$ as Frame).Payload = $.goSlice((f$ as Frame).buffer, 16, undefined);
	;(f$ as Frame).headerBuffer = $.goSlice((f$ as Frame).buffer, undefined, 16)
	return f
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_messagetype_string.messageType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
