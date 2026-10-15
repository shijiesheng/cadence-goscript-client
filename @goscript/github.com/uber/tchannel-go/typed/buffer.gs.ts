// Generated file based on buffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go/typed", ["typed.ReadBuffer", "typed.WriteBuffer", "typed.ByteRef", "typed.Uint16Ref", "typed.Uint32Ref", "typed.Uint64Ref", "typed.BytesRef"])

export type ByteRef = $.Slice<number>

$.registerNamedType("typed.ByteRef", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"typed.ByteRef",
	{Update: (receiver: any, ...args: any[]) => (ByteRef_Update as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["b", /* @__PURE__ */ $.basicType("uint8")]])]
);

$.registerNamedValueType(
	"*typed.ByteRef",
	{Update: (receiver: any, ...args: any[]) => (ByteRef_Update as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["b", /* @__PURE__ */ $.basicType("uint8")]])]
);

export type Uint16Ref = $.Slice<number>

$.registerNamedType("typed.Uint16Ref", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"typed.Uint16Ref",
	{Update: (receiver: any, ...args: any[]) => (Uint16Ref_Update as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["n", /* @__PURE__ */ $.basicType("uint16")]])]
);

$.registerNamedValueType(
	"*typed.Uint16Ref",
	{Update: (receiver: any, ...args: any[]) => (Uint16Ref_Update as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["n", /* @__PURE__ */ $.basicType("uint16")]])]
);

export type Uint32Ref = $.Slice<number>

$.registerNamedType("typed.Uint32Ref", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"typed.Uint32Ref",
	{Update: (receiver: any, ...args: any[]) => (Uint32Ref_Update as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["n", /* @__PURE__ */ $.basicType("uint32")]])]
);

$.registerNamedValueType(
	"*typed.Uint32Ref",
	{Update: (receiver: any, ...args: any[]) => (Uint32Ref_Update as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["n", /* @__PURE__ */ $.basicType("uint32")]])]
);

export type Uint64Ref = $.Slice<number>

$.registerNamedType("typed.Uint64Ref", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"typed.Uint64Ref",
	{Update: (receiver: any, ...args: any[]) => (Uint64Ref_Update as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["n", /* @__PURE__ */ $.basicType("uint64")]])]
);

$.registerNamedValueType(
	"*typed.Uint64Ref",
	{Update: (receiver: any, ...args: any[]) => (Uint64Ref_Update as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["n", /* @__PURE__ */ $.basicType("uint64")]])]
);

export type BytesRef = $.Slice<number>

$.registerNamedType("typed.BytesRef", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"typed.BytesRef",
	{Update: (receiver: any, ...args: any[]) => (BytesRef_Update as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), UpdateString: (receiver: any, ...args: any[]) => (BytesRef_UpdateString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("UpdateString", [["s", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*typed.BytesRef",
	{Update: (receiver: any, ...args: any[]) => (BytesRef_Update as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UpdateString: (receiver: any, ...args: any[]) => (BytesRef_UpdateString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Update", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("UpdateString", [["s", /* @__PURE__ */ $.basicType("string")]])]
);

export class ReadBuffer {
	public get initialLength(): number {
		return this._fields.initialLength
	}

	public set initialLength(value: number) {
		this._fields.initialLength = value
	}

	public get remaining(): $.Slice<number> {
		return this._fields.remaining
	}

	public set remaining(value: $.Slice<number>) {
		this._fields.remaining = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		initialLength: number
		remaining: $.Slice<number>
		err: $.GoError
	}

	constructor(init?: Partial<{initialLength?: number, remaining?: $.Slice<number>, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			initialLength: init?.initialLength ?? (0 as number),
			remaining: init?.remaining ?? (null! as $.Slice<number>),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ReadBuffer {
		return new ReadBuffer(this, true)
	}

	public __goscriptAssign(source: ReadBuffer): void {
		const target = this._fields
		const values = source._fields
		target.initialLength = values.initialLength
		target.remaining = values.remaining
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public BytesRead(): number {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		const r$: ReadBuffer = r == null ? $.pointerTarget<ReadBuffer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<ReadBuffer>(r)
		return (r$ as ReadBuffer).initialLength - $.sliceLen((r$ as ReadBuffer).remaining)
	}

	public BytesRemaining(): number {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		return $.sliceLen((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).Remaining() : ReadBuffer.prototype.Remaining.call(r)))
	}

	public Err(): $.GoError {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		return $.pointerValue<ReadBuffer>(r).err
	}

	public ReadByte(): [number, $.GoError] {
		let r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		const r$: ReadBuffer = r == null ? $.pointerTarget<ReadBuffer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<ReadBuffer>(r)
		if ((r$ as ReadBuffer).err != null) {
			return [0, (r$ as ReadBuffer).err]
		}

		if ($.sliceLen((r$ as ReadBuffer).remaining) < 1) {
			;(r$ as ReadBuffer).err = ErrEOF
			return [0, (r$ as ReadBuffer).err]
		}

		let b = $.arrayIndex((r$ as ReadBuffer).remaining!, 0);
		;(r$ as ReadBuffer).remaining = $.goSlice((r$ as ReadBuffer).remaining, 1, undefined)
		return [b, null]
	}

	public ReadBytes(n: number): $.Slice<number> {
		let r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		const r$: ReadBuffer = r == null ? $.pointerTarget<ReadBuffer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<ReadBuffer>(r)
		if ((r$ as ReadBuffer).err != null) {
			return null
		}

		if ($.sliceLen((r$ as ReadBuffer).remaining) < n) {
			;(r$ as ReadBuffer).err = ErrEOF
			return null
		}

		let b: $.Slice<number> = $.goSlice((r$ as ReadBuffer).remaining, 0, n);
		;(r$ as ReadBuffer).remaining = $.goSlice((r$ as ReadBuffer).remaining, n, undefined)
		return b
	}

	public ReadLen16String(): string {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		let n = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadUint16() : ReadBuffer.prototype.ReadUint16.call(r))
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadString($.int(n)) : ReadBuffer.prototype.ReadString.call(r, $.int(n)))
	}

	public ReadLen8String(): string {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		let n = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadSingleByte() : ReadBuffer.prototype.ReadSingleByte.call(r))
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadString($.int(n)) : ReadBuffer.prototype.ReadString.call(r, $.int(n)))
	}

	public ReadSingleByte(): number {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		let [b, ] = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadByte() : ReadBuffer.prototype.ReadByte.call(r))
		return b
	}

	public ReadString(n: number): string {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		{
			let b: $.Slice<number> = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadBytes(n) : ReadBuffer.prototype.ReadBytes.call(r, n))
			if (b != null) {
				// TODO(mmihic): This creates a copy, which sucks
				return $.bytesToString(b)
			}
		}

		return ""
	}

	public ReadUint16(): number {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		{
			let b: $.Slice<number> = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadBytes(2) : ReadBuffer.prototype.ReadBytes.call(r, 2))
			if (b != null) {
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16(b)
			}
		}

		return 0
	}

	public ReadUint32(): number {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		{
			let b: $.Slice<number> = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadBytes(4) : ReadBuffer.prototype.ReadBytes.call(r, 4))
			if (b != null) {
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32(b)
			}
		}

		return 0
	}

	public ReadUint64(): bigint {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		{
			let b: $.Slice<number> = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as ReadBuffer).ReadBytes(8) : ReadBuffer.prototype.ReadBytes.call(r, 8))
			if (b != null) {
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint64(b)
			}
		}

		return 0n
	}

	public async ReadUvarint(): globalThis.Promise<bigint> {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		let [v, ] = await binary.ReadUvarint($.pointerValueOrNil($.interfaceValue<io.ByteReader | null>(r, "*typed.ReadBuffer", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")))!)
		return v
	}

	public Remaining(): $.Slice<number> {
		const r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		return $.pointerValue<ReadBuffer>(r).remaining
	}

	public SkipBytes(n: number): void {
		let r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		const r$: ReadBuffer = r == null ? $.pointerTarget<ReadBuffer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<ReadBuffer>(r)
		if ((r$ as ReadBuffer).err != null) {
			return
		}

		if ($.sliceLen((r$ as ReadBuffer).remaining) < n) {
			;(r$ as ReadBuffer).err = ErrEOF
			return
		}

		;(r$ as ReadBuffer).remaining = $.goSlice((r$ as ReadBuffer).remaining, n, undefined)
	}

	public Wrap(b: $.Slice<number>): void {
		let r: ReadBuffer | $.VarRef<ReadBuffer> | null = this;
		const r$: ReadBuffer = r == null ? $.pointerTarget<ReadBuffer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<ReadBuffer>(r);
		;(r$ as ReadBuffer).initialLength = $.sliceLen(b);
		;(r$ as ReadBuffer).remaining = b;
		;(r$ as ReadBuffer).err = null
	}

	static __typeInfo = $.registerStructType(
		"typed.ReadBuffer",
		() => new ReadBuffer(),
		() => [$.methodSignature("BytesRead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("BytesRemaining", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"], true), $.methodSignature("ReadBytes", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ReadLen16String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ReadLen8String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ReadSingleByte", [], [/* @__PURE__ */ $.basicType("uint8")], true), $.methodSignature("ReadString", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ReadUint16", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("ReadUint32", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("ReadUint64", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("ReadUvarint", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("Remaining", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("SkipBytes", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("Wrap", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		ReadBuffer,
		() => [/* @__PURE__ */ $.structField("initialLength", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go/typed" }), /* @__PURE__ */ $.structField("remaining", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go/typed" }), /* @__PURE__ */ $.structField("err", "error", [2], 32, false, { pkgPath: "github.com/uber/tchannel-go/typed" })]
	)
}

export class WriteBuffer {
	public get buffer(): $.Slice<number> {
		return this._fields.buffer
	}

	public set buffer(value: $.Slice<number>) {
		this._fields.buffer = value
	}

	public get remaining(): $.Slice<number> {
		return this._fields.remaining
	}

	public set remaining(value: $.Slice<number>) {
		this._fields.remaining = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		buffer: $.Slice<number>
		remaining: $.Slice<number>
		err: $.GoError
	}

	constructor(init?: Partial<{buffer?: $.Slice<number>, remaining?: $.Slice<number>, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			buffer: init?.buffer ?? (null! as $.Slice<number>),
			remaining: init?.remaining ?? (null! as $.Slice<number>),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WriteBuffer {
		return new WriteBuffer(this, true)
	}

	public __goscriptAssign(source: WriteBuffer): void {
		const target = this._fields
		const values = source._fields
		target.buffer = values.buffer
		target.remaining = values.remaining
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public BytesRemaining(): number {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		return $.sliceLen($.pointerValue<WriteBuffer>(w).remaining)
	}

	public BytesWritten(): number {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		const w$: WriteBuffer = w == null ? $.pointerTarget<WriteBuffer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WriteBuffer>(w)
		return $.sliceLen((w$ as WriteBuffer).buffer) - $.sliceLen((w$ as WriteBuffer).remaining)
	}

	public DeferByte(): ByteRef {
		let w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		const w$: WriteBuffer = w == null ? $.pointerTarget<WriteBuffer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WriteBuffer>(w)
		if ($.sliceLen((w$ as WriteBuffer).remaining) == 0) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).setErr(ErrBufferFull) : WriteBuffer.prototype.setErr.call(w, ErrBufferFull))
			return ((null as ByteRef) as ByteRef)
		}

		// Always zero out references, since the caller expects the default to be 0.
		$.sliceElems((w$ as WriteBuffer).remaining!)[$.sliceSlot((w$ as WriteBuffer).remaining!, 0)] = 0
		let bufRef: ByteRef = (($.goSlice((w$ as WriteBuffer).remaining, 0, undefined) as ByteRef) as ByteRef);
		;(w$ as WriteBuffer).remaining = $.goSlice((w$ as WriteBuffer).remaining, 1, undefined)
		return (bufRef as ByteRef)
	}

	public DeferBytes(n: number): BytesRef {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		return (((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).deferred(n) : WriteBuffer.prototype.deferred.call(w, n)) as BytesRef) as BytesRef)
	}

	public DeferUint16(): Uint16Ref {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		return (((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).deferred(2) : WriteBuffer.prototype.deferred.call(w, 2)) as Uint16Ref) as Uint16Ref)
	}

	public DeferUint32(): Uint32Ref {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		return (((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).deferred(4) : WriteBuffer.prototype.deferred.call(w, 4)) as Uint32Ref) as Uint32Ref)
	}

	public DeferUint64(): Uint64Ref {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		return (((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).deferred(8) : WriteBuffer.prototype.deferred.call(w, 8)) as Uint64Ref) as Uint64Ref)
	}

	public Err(): $.GoError {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		return $.pointerValue<WriteBuffer>(w).err
	}

	public async FlushTo(iow: io.Writer | null): globalThis.Promise<[number, $.GoError]> {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		let dirty: $.Slice<number> = $.goSlice($.pointerValue<WriteBuffer>(w).buffer, 0, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).BytesWritten() : WriteBuffer.prototype.BytesWritten.call(w)))
		return (iow !== null && (iow as any).__isVarRef !== true && (iow as any).__goValue === undefined ? (iow as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(iow)).Write(dirty)
	}

	public Reset(): void {
		let w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		const w$: WriteBuffer = w == null ? $.pointerTarget<WriteBuffer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WriteBuffer>(w);
		;(w$ as WriteBuffer).remaining = (w$ as WriteBuffer).buffer;
		;(w$ as WriteBuffer).err = null
	}

	public Wrap(b: $.Slice<number>): void {
		let w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		const w$: WriteBuffer = w == null ? $.pointerTarget<WriteBuffer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WriteBuffer>(w);
		;(w$ as WriteBuffer).buffer = b;
		;(w$ as WriteBuffer).remaining = b
	}

	public WriteBytes(_in: $.Slice<number>): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		{
			let b: $.Slice<number> = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).reserve($.sliceLen(_in)) : WriteBuffer.prototype.reserve.call(w, $.sliceLen(_in)))
			if (b != null) {
				$.copy(b, _in)
			}
		}
	}

	public WriteLen16String(s: string): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		if ($.int($.uint($.stringLen(s), 16)) != $.stringLen(s)) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).setErr(errStringTooLong) : WriteBuffer.prototype.setErr.call(w, errStringTooLong))
		}

		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).WriteUint16($.uint($.stringLen(s), 16)) : WriteBuffer.prototype.WriteUint16.call(w, $.uint($.stringLen(s), 16)))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).WriteString(s) : WriteBuffer.prototype.WriteString.call(w, s))
	}

	public WriteLen8String(s: string): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		if ($.int($.uint($.stringLen(s), 8)) != $.stringLen(s)) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).setErr(errStringTooLong) : WriteBuffer.prototype.setErr.call(w, errStringTooLong))
		}

		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).WriteSingleByte($.uint($.stringLen(s), 8)) : WriteBuffer.prototype.WriteSingleByte.call(w, $.uint($.stringLen(s), 8)))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).WriteString(s) : WriteBuffer.prototype.WriteString.call(w, s))
	}

	public WriteSingleByte(n: number): void {
		let w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		const w$: WriteBuffer = w == null ? $.pointerTarget<WriteBuffer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WriteBuffer>(w)
		if ((w$ as WriteBuffer).err != null) {
			return
		}

		if ($.sliceLen((w$ as WriteBuffer).remaining) == 0) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).setErr(ErrBufferFull) : WriteBuffer.prototype.setErr.call(w, ErrBufferFull))
			return
		}

		$.sliceElems((w$ as WriteBuffer).remaining!)[$.sliceSlot((w$ as WriteBuffer).remaining!, 0)] = n;
		;(w$ as WriteBuffer).remaining = $.goSlice((w$ as WriteBuffer).remaining, 1, undefined)
	}

	public WriteString(s: string): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		// NB(mmihic): Don't just call WriteBytes; that will make a double copy
		// of the string due to the cast
		{
			let b: $.Slice<number> = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).reserve($.stringLen(s)) : WriteBuffer.prototype.reserve.call(w, $.stringLen(s)))
			if (b != null) {
				$.copy(b, s)
			}
		}
	}

	public WriteUint16(n: number): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		{
			let b: $.Slice<number> = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).reserve(2) : WriteBuffer.prototype.reserve.call(w, 2))
			if (b != null) {
				$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16(b, n)
			}
		}
	}

	public WriteUint32(n: number): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		{
			let b: $.Slice<number> = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).reserve(4) : WriteBuffer.prototype.reserve.call(w, 4))
			if (b != null) {
				$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32(b, n)
			}
		}
	}

	public WriteUint64(n: bigint): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		{
			let b: $.Slice<number> = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).reserve(8) : WriteBuffer.prototype.reserve.call(w, 8))
			if (b != null) {
				$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint64(b, n)
			}
		}
	}

	public WriteUvarint(n: bigint): void {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		// A uvarint could be up to 10 bytes long.
		let buf: $.Slice<number> = $.makeSlice<number>(10, undefined, "byte")
		let varBytes = binary.PutUvarint(buf, n)
		{
			let b: $.Slice<number> = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).reserve(varBytes) : WriteBuffer.prototype.reserve.call(w, varBytes))
			if (b != null) {
				$.copy(b, $.goSlice(buf, 0, varBytes))
			}
		}
	}

	public deferred(n: number): $.Slice<number> {
		const w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		let bs: $.Slice<number> = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).reserve(n) : WriteBuffer.prototype.reserve.call(w, n))
		for (let __goscriptRangeTarget0 = bs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = 0
		}
		return bs
	}

	public reserve(n: number): $.Slice<number> {
		let w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		const w$: WriteBuffer = w == null ? $.pointerTarget<WriteBuffer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WriteBuffer>(w)
		if ((w$ as WriteBuffer).err != null) {
			return null
		}

		if ($.sliceLen((w$ as WriteBuffer).remaining) < n) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as WriteBuffer).setErr(ErrBufferFull) : WriteBuffer.prototype.setErr.call(w, ErrBufferFull))
			return null
		}

		let b: $.Slice<number> = $.goSlice((w$ as WriteBuffer).remaining, 0, n);
		;(w$ as WriteBuffer).remaining = $.goSlice((w$ as WriteBuffer).remaining, n, undefined)
		return b
	}

	public setErr(err: $.GoError): void {
		let w: WriteBuffer | $.VarRef<WriteBuffer> | null = this;
		const w$: WriteBuffer = w == null ? $.pointerTarget<WriteBuffer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WriteBuffer>(w)
		// Only store the first error
		if ((w$ as WriteBuffer).err != null) {
			return
		}

		;(w$ as WriteBuffer).err = err
	}

	static __typeInfo = $.registerStructType(
		"typed.WriteBuffer",
		() => new WriteBuffer(),
		() => [$.methodSignature("BytesRemaining", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("BytesWritten", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("DeferByte", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.ByteRef")], true), $.methodSignature("DeferBytes", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.BytesRef")], true), $.methodSignature("DeferUint16", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.Uint16Ref")], true), $.methodSignature("DeferUint32", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.Uint32Ref")], true), $.methodSignature("DeferUint64", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.Uint64Ref")], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("FlushTo", [["iow", "io.Writer"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Wrap", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("WriteBytes", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("WriteLen16String", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("WriteLen8String", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("WriteSingleByte", [["n", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("WriteUint16", [["n", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("WriteUint32", [["n", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("WriteUint64", [["n", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("WriteUvarint", [["n", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("deferred", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("reserve", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("setErr", [["err", "error"]], [], true)],
		WriteBuffer,
		() => [/* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go/typed" }), /* @__PURE__ */ $.structField("remaining", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go/typed" }), /* @__PURE__ */ $.structField("err", "error", [2], 48, false, { pkgPath: "github.com/uber/tchannel-go/typed" })]
	)
}

export let ErrEOF: $.GoError = errors.New("buffer is too small")

export function __goscript_set_ErrEOF(__goscriptValue: $.GoError): void {
	ErrEOF = __goscriptValue
}

export let ErrBufferFull: $.GoError = errors.New("no more room in buffer")

export function __goscript_set_ErrBufferFull(__goscriptValue: $.GoError): void {
	ErrBufferFull = __goscriptValue
}

export let errStringTooLong: $.GoError = errors.New("string is too long")

export function __goscript_set_errStringTooLong(__goscriptValue: $.GoError): void {
	errStringTooLong = __goscriptValue
}

export function NewReadBuffer(buffer: $.Slice<number>): ReadBuffer | $.VarRef<ReadBuffer> | null {
	return new ReadBuffer({initialLength: $.sliceLen(buffer), remaining: buffer})
}

export function NewWriteBuffer(buffer: $.Slice<number>): WriteBuffer | $.VarRef<WriteBuffer> | null {
	return new WriteBuffer({buffer: buffer, remaining: buffer})
}

export function NewWriteBufferWithSize(size: number): WriteBuffer | $.VarRef<WriteBuffer> | null {
	return NewWriteBuffer($.makeSlice<number>(size, undefined, "byte"))
}

export function ByteRef_Update(ref: ByteRef, b: number): void {
	if (ref != null) {
		$.sliceElems(ref!)[$.sliceSlot(ref!, 0)] = b
	}
}

export function Uint16Ref_Update(ref: Uint16Ref, n: number): void {
	if (ref != null) {
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16(ref, n)
	}
}

export function Uint32Ref_Update(ref: Uint32Ref, n: number): void {
	if (ref != null) {
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32(ref, n)
	}
}

export function Uint64Ref_Update(ref: Uint64Ref, n: bigint): void {
	if (ref != null) {
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint64(ref, n)
	}
}

export function BytesRef_Update(ref: BytesRef, b: $.Slice<number>): void {
	if (ref != null) {
		$.copy((ref as BytesRef), b)
	}
}

export function BytesRef_UpdateString(ref: BytesRef, s: string): void {
	if (ref != null) {
		$.copy((ref as BytesRef), s)
	}
}
