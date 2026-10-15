// Generated file based on buffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_bufferpool from "./bufferpool.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./bufferpool.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/bufferpool", ["bufferpool.Buffer", "bufferpool.AutoReleaseBuffer"])

export class Buffer {
	public get pool(): __goscript_bufferpool.Pool | $.VarRef<__goscript_bufferpool.Pool> | null {
		return this._fields.pool
	}

	public set pool(value: __goscript_bufferpool.Pool | $.VarRef<__goscript_bufferpool.Pool> | null) {
		this._fields.pool = value
	}

	// version is an ever-incrementing integer on every operation.
	// it ensures that we don't perform multiple overlapping operations.
	public get version(): number {
		return this._fields.version
	}

	public set version(value: number) {
		this._fields.version = value
	}

	// released tracks whether the buffer has been released.
	public get released(): boolean {
		return this._fields.released
	}

	public set released(value: boolean) {
		this._fields.released = value
	}

	public get buf(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.buf
	}

	public set buf(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.buf = value
	}

	public _fields: {
		pool: __goscript_bufferpool.Pool | $.VarRef<__goscript_bufferpool.Pool> | null
		version: number
		released: boolean
		buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null
	}

	constructor(init?: Partial<{pool?: __goscript_bufferpool.Pool | $.VarRef<__goscript_bufferpool.Pool> | null, version?: number, released?: boolean, buf?: bytes.Buffer | $.VarRef<bytes.Buffer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ?? (null! as __goscript_bufferpool.Pool | $.VarRef<__goscript_bufferpool.Pool> | null),
			version: init?.version ?? (0 as number),
			released: init?.released ?? (false as boolean),
			buf: init?.buf ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Buffer {
		return new Buffer(this, true)
	}

	public __goscriptAssign(source: Buffer): void {
		const target = this._fields
		const values = source._fields
		target.pool = values.pool
		target.version = values.version
		target.released = values.released
		target.buf = values.buf
	}

	public Bytes(): $.Slice<number> {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>($.pointerValue<Buffer>(b).buf))
	}

	public Len(): number {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let version = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).preOp() : Buffer.prototype.preOp.call(b))
		let n = bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>($.pointerValue<Buffer>(b).buf))
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).postOp(version) : Buffer.prototype.postOp.call(b, version))
		return n
	}

	public Read(p: $.Slice<number>): [number, $.GoError] {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let version = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).preOp() : Buffer.prototype.preOp.call(b))
		let [n, err] = bytes.Buffer.prototype.Read.call($.pointerValue<bytes.Buffer>($.pointerValue<Buffer>(b).buf), p)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).postOp(version) : Buffer.prototype.postOp.call(b, version))
		return [n, err]
	}

	public async ReadFrom(r: io.Reader | null): globalThis.Promise<[bigint, $.GoError]> {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let version = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).preOp() : Buffer.prototype.preOp.call(b))
		let [n, err] = await bytes.Buffer.prototype.ReadFrom.call($.pointerValue<bytes.Buffer>($.pointerValue<Buffer>(b).buf), $.pointerValueOrNil(r)!)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).postOp(version) : Buffer.prototype.postOp.call(b, version))
		return [n, err]
	}

	public Release(): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		// Increment the version so overlapping operations fail.
		Buffer.prototype.postOp.call(b, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).preOp() : Buffer.prototype.preOp.call(b)))

		if ($.pointerValue<__goscript_bufferpool.Pool>((b$ as Buffer).pool).testDetectUseAfterFree) {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).releaseDetectUseAfterFree() : Buffer.prototype.releaseDetectUseAfterFree.call(b))
			return
		}

		// Before releasing a buffer, we should reset it to "clear" the buffer
		// while holding on to the capacity of the buffer.
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).Reset() : Buffer.prototype.Reset.call(b));

		// We must mark released after the `Reset`, so that `Reset` doesn't
		// trigger use-after-free.
		;(b$ as Buffer).released = true

		__goscript_bufferpool.Pool.prototype.release.call((b$ as Buffer).pool, b)
	}

	public Reset(): void {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let version = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).preOp() : Buffer.prototype.preOp.call(b))
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>($.pointerValue<Buffer>(b).buf))
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).postOp(version) : Buffer.prototype.postOp.call(b, version))
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let version = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).preOp() : Buffer.prototype.preOp.call(b))
		let [n, err] = bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>($.pointerValue<Buffer>(b).buf), p)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).postOp(version) : Buffer.prototype.postOp.call(b, version))
		return [n, err]
	}

	public async WriteTo(w: io.Writer | null): globalThis.Promise<[bigint, $.GoError]> {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		let version = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).preOp() : Buffer.prototype.preOp.call(b))
		let [n, err] = await bytes.Buffer.prototype.WriteTo.call($.pointerValue<bytes.Buffer>($.pointerValue<Buffer>(b).buf), $.pointerValueOrNil(w)!)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).postOp(version) : Buffer.prototype.postOp.call(b, version))
		return [n, err]
	}

	public checkUseAfterFree(): void {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		if ((b$ as Buffer).released || ((b$ as Buffer).buf == null)) {
			$.panic("use-after-free of pooled buffer")
		}
	}

	public postOp(v: number): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).checkUseAfterFree() : Buffer.prototype.checkUseAfterFree.call(b))
		if ((v != (b$ as Buffer).version) || (b$ as Buffer).released) {
			$.panic("concurrent use of pooled buffer")
		}
		;(b$ as Buffer).version++
	}

	public preOp(): number {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).checkUseAfterFree() : Buffer.prototype.checkUseAfterFree.call(b));
		;(b$ as Buffer).version++
		return (b$ as Buffer).version
	}

	public releaseDetectUseAfterFree(): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		// Detect any lingering reads of the underlying data by resetting the data.
		// We repeat it in a goroutine to trigger the race detector.
		overwriteData((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).Bytes() : Buffer.prototype.Bytes.call(b)))
		const __goscriptDeferArg0 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).Bytes() : Buffer.prototype.Bytes.call(b))
		queueMicrotask(async () => { overwriteData(__goscriptDeferArg0) });

		// This will cause any future accesses to panic.
		;(b$ as Buffer).released = true;
		;(b$ as Buffer).buf = null
	}

	public reuse(): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		$.pointerValue<Buffer>(b).released = false
	}

	static __typeInfo = $.registerStructType(
		"bufferpool.Buffer",
		() => new Buffer(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("Release", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteTo", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("checkUseAfterFree", [], [], true), $.methodSignature("postOp", [["v", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("preOp", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("releaseDetectUseAfterFree", [], [], true), $.methodSignature("reuse", [], [], true)],
		Buffer,
		() => [/* @__PURE__ */ $.structField("pool", /* @__PURE__ */ $.pointerType("bufferpool.Pool"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/bufferpool" }), /* @__PURE__ */ $.structField("version", /* @__PURE__ */ $.basicType("uint"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/internal/bufferpool" }), /* @__PURE__ */ $.structField("released", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "go.uber.org/yarpc/internal/bufferpool" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [3], 24, false, { pkgPath: "go.uber.org/yarpc/internal/bufferpool" })]
	)
}

export class AutoReleaseBuffer {
	public get Buffer(): Buffer | $.VarRef<Buffer> | null {
		return this._fields.Buffer
	}

	public set Buffer(value: Buffer | $.VarRef<Buffer> | null) {
		this._fields.Buffer = value
	}

	public _fields: {
		Buffer: Buffer | $.VarRef<Buffer> | null
	}

	constructor(init?: Partial<{Buffer?: Buffer | $.VarRef<Buffer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Buffer: init?.Buffer ?? (null! as Buffer | $.VarRef<Buffer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AutoReleaseBuffer {
		return new AutoReleaseBuffer(this, true)
	}

	public __goscriptAssign(source: AutoReleaseBuffer): void {
		const target = this._fields
		const values = source._fields
		target.Buffer = values.Buffer
	}

	public Close(): $.GoError {
		const arb = this;
		__goscript_bufferpool.Put(arb.Buffer)
		return null
	}

	public Bytes(): any {
		return $.pointerValue<Buffer>(this.Buffer).Bytes()
	}

	public Len(): any {
		return $.pointerValue<Buffer>(this.Buffer).Len()
	}

	public Read(p: any): any {
		return $.pointerValue<Buffer>(this.Buffer).Read(p)
	}

	public async ReadFrom(r: any): globalThis.Promise<any> {
		return await $.pointerValue<Buffer>(this.Buffer).ReadFrom(r)
	}

	public Release(): any {
		return $.pointerValue<Buffer>(this.Buffer).Release()
	}

	public Reset(): any {
		return $.pointerValue<Buffer>(this.Buffer).Reset()
	}

	public Write(p: any): any {
		return $.pointerValue<Buffer>(this.Buffer).Write(p)
	}

	public async WriteTo(w: any): globalThis.Promise<any> {
		return await $.pointerValue<Buffer>(this.Buffer).WriteTo(w)
	}

	public checkUseAfterFree(): any {
		return $.pointerValue<Buffer>(this.Buffer).checkUseAfterFree()
	}

	public postOp(v: any): any {
		return $.pointerValue<Buffer>(this.Buffer).postOp(v)
	}

	public preOp(): any {
		return $.pointerValue<Buffer>(this.Buffer).preOp()
	}

	public releaseDetectUseAfterFree(): any {
		return $.pointerValue<Buffer>(this.Buffer).releaseDetectUseAfterFree()
	}

	public reuse(): any {
		return $.pointerValue<Buffer>(this.Buffer).reuse()
	}

	static __typeInfo = $.registerStructType(
		"bufferpool.AutoReleaseBuffer",
		() => new AutoReleaseBuffer(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("Release"), $.methodSignature("Reset"), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteTo", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("checkUseAfterFree"), $.methodSignature("postOp", [["v", /* @__PURE__ */ $.basicType("uint")]]), $.methodSignature("preOp", [], [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("releaseDetectUseAfterFree"), $.methodSignature("reuse")],
		AutoReleaseBuffer,
		() => [/* @__PURE__ */ $.structField("Buffer", /* @__PURE__ */ $.pointerType("bufferpool.Buffer"), [0], 0, true, { anonymous: true })]
	)
}

export function newBuffer(pool: __goscript_bufferpool.Pool | $.VarRef<__goscript_bufferpool.Pool> | null): Buffer | $.VarRef<Buffer> | null {
	return new Buffer({pool: pool, buf: new bytes.Buffer()})
}

export function overwriteData(bs: $.Slice<number>): void {
	for (let __goscriptRangeTarget0 = bs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = $.uint(i, 8)
	}
}

export async function NewAutoReleaseBuffer(): globalThis.Promise<AutoReleaseBuffer> {
	let buf: Buffer | $.VarRef<Buffer> | null = await __goscript_bufferpool.Get()
	return new AutoReleaseBuffer({Buffer: buf}, true)
}
