// Generated file based on lib.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as log from "@goscript/log/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as math from "@goscript/math/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_discard from "./discard.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import type * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_table_merge from "./table_merge.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/log/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/math/index.js"
import "@goscript/unicode/utf8/index.js"
import "./decode.gs.ts"
import "./discard.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./pointer_reflect.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"
import "./table_merge.gs.ts"
import "./table_unmarshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.RequiredNotSetError", "proto.invalidUTF8Error", "proto.nonFatal", "proto.Message", "proto.Buffer", "proto.defaultMessage", "proto.scalarField", "proto.mapKeySorter", "proto.InternalMessageInfo"])

export type Message = {
	ProtoMessage(): void
	Reset(): void
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"proto.Message",
	null,
	[$.methodSignature("ProtoMessage"), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class RequiredNotSetError {
	public get field(): string {
		return this._fields.field
	}

	public set field(value: string) {
		this._fields.field = value
	}

	public _fields: {
		field: string
	}

	constructor(init?: Partial<{field?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequiredNotSetError {
		return new RequiredNotSetError(this, true)
	}

	public __goscriptAssign(source: RequiredNotSetError): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
	}

	public async Error(): globalThis.Promise<string> {
		const e: RequiredNotSetError | $.VarRef<RequiredNotSetError> | null = this;
		const e$: RequiredNotSetError = e == null ? $.pointerTarget<RequiredNotSetError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<RequiredNotSetError>(e)
		if ($.stringEqual((e$ as RequiredNotSetError).field, "")) {
			return fmt.Sprintf("proto: required field not set")
		}
		return fmt.Sprintf("proto: required field %q not set", (e$ as RequiredNotSetError).field)
	}

	public RequiredNotSet(): boolean {
		const e: RequiredNotSetError | $.VarRef<RequiredNotSetError> | null = this;
		return true
	}

	static __typeInfo = $.registerStructType(
		"proto.RequiredNotSetError",
		() => new RequiredNotSetError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RequiredNotSet", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		RequiredNotSetError,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class invalidUTF8Error {
	public get field(): string {
		return this._fields.field
	}

	public set field(value: string) {
		this._fields.field = value
	}

	public _fields: {
		field: string
	}

	constructor(init?: Partial<{field?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): invalidUTF8Error {
		return new invalidUTF8Error(this, true)
	}

	public __goscriptAssign(source: invalidUTF8Error): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
	}

	public async Error(): globalThis.Promise<string> {
		const e: invalidUTF8Error | $.VarRef<invalidUTF8Error> | null = this;
		const e$: invalidUTF8Error = e == null ? $.pointerTarget<invalidUTF8Error>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<invalidUTF8Error>(e)
		if ($.stringEqual((e$ as invalidUTF8Error).field, "")) {
			return "proto: invalid UTF-8 detected"
		}
		return fmt.Sprintf("proto: field %q contains invalid UTF-8", (e$ as invalidUTF8Error).field)
	}

	public InvalidUTF8(): boolean {
		const e: invalidUTF8Error | $.VarRef<invalidUTF8Error> | null = this;
		return true
	}

	static __typeInfo = $.registerStructType(
		"proto.invalidUTF8Error",
		() => new invalidUTF8Error(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("InvalidUTF8", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		invalidUTF8Error,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class nonFatal {
	public get E(): $.GoError {
		return this._fields.E
	}

	public set E(value: $.GoError) {
		this._fields.E = value
	}

	public _fields: {
		E: $.GoError
	}

	constructor(init?: Partial<{E?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			E: init?.E ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nonFatal {
		return new nonFatal(this, true)
	}

	public __goscriptAssign(source: nonFatal): void {
		const target = this._fields
		const values = source._fields
		target.E = $.assignFieldValue(target.E, values.E, "error")
	}

	public async Merge(err: $.GoError): globalThis.Promise<boolean> {
		let nf: nonFatal | $.VarRef<nonFatal> | null = this;
		let ok: boolean = false
		const nf$: nonFatal = nf == null ? $.pointerTarget<nonFatal>(nf) : (nf as any).__isVarRef === true ? (nf as any).value : (nf as any).__goValue === undefined ? (nf as any) : $.pointerTarget<nonFatal>(nf)
		if (err == null) {
			return true
		}
		if (!await isNonFatal(err)) {
			return false
		}
		if ((nf$ as nonFatal).E == null) {
			;(nf$ as nonFatal).E = err
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"proto.nonFatal",
		() => new nonFatal(),
		() => [$.methodSignature("Merge", [["err", "error"]], [["ok", /* @__PURE__ */ $.basicType("bool")]], true)],
		nonFatal,
		() => [/* @__PURE__ */ $.structField("E", "error", [0], 0, true)]
	)
}

export class Buffer {
	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get deterministic(): boolean {
		return this._fields.deterministic
	}

	public set deterministic(value: boolean) {
		this._fields.deterministic = value
	}

	public _fields: {
		buf: $.Slice<number>
		index: number
		deterministic: boolean
	}

	constructor(init?: Partial<{buf?: $.Slice<number>, index?: number, deterministic?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			buf: init?.buf ?? (null! as $.Slice<number>),
			index: init?.index ?? (0 as number),
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
		target.index = values.index
		target.deterministic = values.deterministic
	}

	public Bytes(): $.Slice<number> {
		const p: Buffer | $.VarRef<Buffer> | null = this;
		return $.pointerValue<Buffer>(p).buf
	}

	public async DebugPrint(s: string, b: $.Slice<number>): globalThis.Promise<void> {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		let u: bigint = 0n

		let obuf: $.Slice<number> = (p$ as Buffer).buf
		let sindex = (p$ as Buffer).index;
		;(p$ as Buffer).buf = b;
		;(p$ as Buffer).index = 0
		let depth = 0

		await fmt.Printf("\n--- %s ---\n", s)

		out: while (true) {
			for (let i = 0; i < depth; i++) {
				await fmt.Print("  ")
			}

			let index = (p$ as Buffer).index
			if (index == $.sliceLen((p$ as Buffer).buf)) {
				break
			}

			let [op, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeVarint() : Buffer.prototype.DecodeVarint.call(p))
			if (err != null) {
				await fmt.Printf("%3d: fetching op err %v\n", $.basicInterfaceValue(index, "int"), (err as any))
				break out
			}
			let tag = $.uint64Shr(op, 3n)
			let wire = $.uint64And(op, 7n)

			switch (wire) {
				default:
				{
					await fmt.Printf("%3d: t=%3d unknown wire=%d\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), $.basicInterfaceValue(wire, "uint64"))
					break out
					break
				}
				case 2n:
				{
					let r: $.Slice<number> = null! as $.Slice<number>

					let __goscriptTuple0: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeRawBytes(false) : Buffer.prototype.DecodeRawBytes.call(p, false))
					r = __goscriptTuple0[0]
					err = __goscriptTuple0[1]
					if (err != null) {
						break out
					}
					await fmt.Printf("%3d: t=%3d bytes [%d]", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), $.basicInterfaceValue($.sliceLen(r), "int"))
					if ($.sliceLen(r) <= 6) {
						for (let __goscriptSliceWindow0 = $.sliceRange(r), i = 0; i < __goscriptSliceWindow0.length; i++) {
							await fmt.Printf(" %.2x", $.basicInterfaceValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number), "byte", "uint8"))
						}
					} else {
						for (let __goscriptSliceWindow1 = $.sliceRange(r), i = 0; i < 3; i++) {
							await fmt.Printf(" %.2x", $.basicInterfaceValue(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number), "byte", "uint8"))
						}
						await fmt.Printf(" ..")
						for (let __goscriptSliceWindow2 = $.sliceRange(r), i = $.sliceLen(r) - 3; i < __goscriptSliceWindow2.length; i++) {
							await fmt.Printf(" %.2x", $.basicInterfaceValue(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number), "byte", "uint8"))
						}
					}
					await fmt.Printf("\n")
					break
				}
				case 5n:
				{
					let __goscriptTuple1: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeFixed32() : Buffer.prototype.DecodeFixed32.call(p))
					u = __goscriptTuple1[0]
					err = __goscriptTuple1[1]
					if (err != null) {
						await fmt.Printf("%3d: t=%3d fix32 err %v\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), (err as any))
						break out
					}
					await fmt.Printf("%3d: t=%3d fix32 %d\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), $.basicInterfaceValue(u, "uint64"))
					break
				}
				case 1n:
				{
					let __goscriptTuple2: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeFixed64() : Buffer.prototype.DecodeFixed64.call(p))
					u = __goscriptTuple2[0]
					err = __goscriptTuple2[1]
					if (err != null) {
						await fmt.Printf("%3d: t=%3d fix64 err %v\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), (err as any))
						break out
					}
					await fmt.Printf("%3d: t=%3d fix64 %d\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), $.basicInterfaceValue(u, "uint64"))
					break
				}
				case 0n:
				{
					let __goscriptTuple3: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeVarint() : Buffer.prototype.DecodeVarint.call(p))
					u = __goscriptTuple3[0]
					err = __goscriptTuple3[1]
					if (err != null) {
						await fmt.Printf("%3d: t=%3d varint err %v\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), (err as any))
						break out
					}
					await fmt.Printf("%3d: t=%3d varint %d\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"), $.basicInterfaceValue(u, "uint64"))
					break
				}
				case 3n:
				{
					await fmt.Printf("%3d: t=%3d start\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"))
					depth++
					break
				}
				case 4n:
				{
					depth--
					await fmt.Printf("%3d: t=%3d end\n", $.basicInterfaceValue(index, "int"), $.basicInterfaceValue(tag, "uint64"))
					break
				}
			}
		}

		if (depth != 0) {
			await fmt.Printf("%3d: start-end not balanced %d\n", $.basicInterfaceValue((p$ as Buffer).index, "int"), $.basicInterfaceValue(depth, "int"))
		}
		await fmt.Printf("\n");

		;(p$ as Buffer).buf = obuf;
		;(p$ as Buffer).index = sindex
	}

	public DecodeFixed32(): [bigint, $.GoError] {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		let x: bigint = 0n
		let err: $.GoError = null! as $.GoError
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)

		let i = (p$ as Buffer).index + 4
		if ((i < 0) || (i > $.sliceLen((p$ as Buffer).buf))) {
			err = io.ErrUnexpectedEOF
			return [x, err]
		}
		;(p$ as Buffer).index = i

		x = $.uint64($.arrayIndex((p$ as Buffer).buf!, i - 4))
		x = $.uint64Or(x, $.uint64Shl($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 3)), 8n))
		x = $.uint64Or(x, $.uint64Shl($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 2)), 16n))
		x = $.uint64Or(x, $.uint64Shl($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 1)), 24n))
		return [x, err]
	}

	public DecodeFixed64(): [bigint, $.GoError] {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		let x: bigint = 0n
		let err: $.GoError = null! as $.GoError
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)

		let i = (p$ as Buffer).index + 8
		if ((i < 0) || (i > $.sliceLen((p$ as Buffer).buf))) {
			err = io.ErrUnexpectedEOF
			return [x, err]
		}
		;(p$ as Buffer).index = i

		x = $.uint64($.arrayIndex((p$ as Buffer).buf!, i - 8))
		x = $.uint64Or(x, $.uint64Shl($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 7)), 8n))
		x = $.uint64Or(x, $.uint64Shl($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 6)), 16n))
		x = $.uint64Or(x, $.uint64Shl($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 5)), 24n))
		x = $.uint64Or(x, $.uint64Mul($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 4)), (2 ** 32)))
		x = $.uint64Or(x, $.uint64Mul($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 3)), (2 ** 40)))
		x = $.uint64Or(x, $.uint64Mul($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 2)), (2 ** 48)))
		x = $.uint64Or(x, $.uint64Mul($.uint64($.arrayIndex((p$ as Buffer).buf!, i - 1)), (2 ** 56)))
		return [x, err]
	}

	public async DecodeGroup(pb: Message | null): globalThis.Promise<$.GoError> {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		let b: $.Slice<number> = $.goSlice((p$ as Buffer).buf, (p$ as Buffer).index, undefined)
		let [x, y] = __goscript_table_unmarshal.findEndGroup(b)
		if (x < 0) {
			return io.ErrUnexpectedEOF
		}
		let err = await __goscript_decode.Unmarshal($.goSlice(b, undefined, x), pb);
		;(p$ as Buffer).index = (p$ as Buffer).index + (y)
		return err
	}

	public async DecodeMessage(pb: Message | null): globalThis.Promise<$.GoError> {
		const p: Buffer | $.VarRef<Buffer> | null = this;
		let __goscriptTuple4: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeRawBytes(false) : Buffer.prototype.DecodeRawBytes.call(p, false))
		let enc: $.Slice<number> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return err
		}
		return Buffer.prototype.Unmarshal.call(NewBuffer(enc), pb)
	}

	public DecodeRawBytes(alloc: boolean): [$.Slice<number>, $.GoError] {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		let buf: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		let __goscriptTuple5: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeVarint() : Buffer.prototype.DecodeVarint.call(p))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}

		let nb = $.int(n)
		if (nb < 0) {
			return [null, fmt.Errorf("proto: bad byte length %d", $.basicInterfaceValue(nb, "int"))]
		}
		let end = (p$ as Buffer).index + nb
		if ((end < (p$ as Buffer).index) || (end > $.sliceLen((p$ as Buffer).buf))) {
			return [null, io.ErrUnexpectedEOF]
		}

		if (!alloc) {

			buf = $.goSlice((p$ as Buffer).buf, (p$ as Buffer).index, end);
			;(p$ as Buffer).index = (p$ as Buffer).index + (nb)
			return [buf, err]
		}

		buf = $.makeSlice<number>(nb, undefined, "byte")
		$.copy(buf, $.goSlice((p$ as Buffer).buf, (p$ as Buffer).index, undefined));
		;(p$ as Buffer).index = (p$ as Buffer).index + (nb)
		return [buf, err]
	}

	public DecodeStringBytes(): [string, $.GoError] {
		const p: Buffer | $.VarRef<Buffer> | null = this;
		let s: string = ""
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple6: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeRawBytes(false) : Buffer.prototype.DecodeRawBytes.call(p, false))
		let buf: $.Slice<number> = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [s, err]
		}
		return [$.bytesToString(buf), null]
	}

	public DecodeVarint(): [bigint, $.GoError] {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		let x: bigint = 0n
		let err: $.GoError = null! as $.GoError
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		let i = (p$ as Buffer).index
		let buf: $.Slice<number> = (p$ as Buffer).buf

		if (i >= $.sliceLen(buf)) {
			return [0n, io.ErrUnexpectedEOF]
		} else {
			if ($.arrayIndex(buf!, i) < 0x80) {
				;(p$ as Buffer).index++
				return [$.uint64($.arrayIndex(buf!, i)), null]
			} else {
				if (($.sliceLen(buf) - i) < 10) {
					return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).decodeVarintSlow() : Buffer.prototype.decodeVarintSlow.call(p))
				}
			}
		}

		let b: bigint = 0n

		x = $.uint64Sub($.uint64($.arrayIndex(buf!, i)), 128n)
		i++

		b = $.uint64($.arrayIndex(buf!, i))
		i++
		x = $.uint64Add(x, $.uint64Shl(b, 7n))
		done: {
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 16384n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Shl(b, 14n))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 2097152n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Shl(b, 21n))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 268435456n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Shl(b, 28n))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 34359738368n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Mul(b, (2 ** 35)))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 4398046511104n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Mul(b, (2 ** 42)))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 562949953421312n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Mul(b, (2 ** 49)))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 72057594037927936n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Mul(b, (2 ** 56)))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}
			x = $.uint64Sub(x, 9223372036854775808n)

			b = $.uint64($.arrayIndex(buf!, i))
			i++
			x = $.uint64Add(x, $.uint64Mul(b, (2 ** 63)))
			if (($.uint64And(b, 128n)) == 0n) {
				break done
			}

			return [0n, __goscript_decode.errOverflow]
		}
		;(p$ as Buffer).index = i
		return [x, null]
	}

	public DecodeZigzag32(): [bigint, $.GoError] {
		const p: Buffer | $.VarRef<Buffer> | null = this;
		let x: bigint = 0n
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple7: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeVarint() : Buffer.prototype.DecodeVarint.call(p))
		x = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [x, err]
		}
		x = $.uint64(($.uintShr($.uint(x, 32), 1, 32)) ^ $.uint(($.int($.uint64And(x, 1n), 32) << 31) >> 31, 32))
		return [x, err]
	}

	public DecodeZigzag64(): [bigint, $.GoError] {
		const p: Buffer | $.VarRef<Buffer> | null = this;
		let x: bigint = 0n
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple8: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).DecodeVarint() : Buffer.prototype.DecodeVarint.call(p))
		x = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [x, err]
		}
		x = $.uint64Xor(($.uint64Shr(x, 1n)), $.uint64($.int64Shr(($.int64Shl($.int64($.uint64And(x, 1n)), 63n)), 63n)))
		return [x, err]
	}

	public EncodeFixed32(x: bigint): $.GoError {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p);
		;(p$ as Buffer).buf = $.append((p$ as Buffer).buf, $.uint($.uint(x, 8), 8), $.uint($.uint($.uint64Shr(x, 8n), 8), 8), $.uint($.uint($.uint64Shr(x, 16n), 8), 8), $.uint($.uint($.uint64Shr(x, 24n), 8), 8), $.byteSliceHint)
		return null
	}

	public EncodeFixed64(x: bigint): $.GoError {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p);
		;(p$ as Buffer).buf = $.append((p$ as Buffer).buf, $.uint($.uint(x, 8), 8), $.uint($.uint($.uint64Shr(x, 8n), 8), 8), $.uint($.uint($.uint64Shr(x, 16n), 8), 8), $.uint($.uint($.uint64Shr(x, 24n), 8), 8), $.uint($.uint($.uint64Shr(x, 32n), 8), 8), $.uint($.uint($.uint64Shr(x, 40n), 8), 8), $.uint($.uint($.uint64Shr(x, 48n), 8), 8), $.uint($.uint($.uint64Shr(x, 56n), 8), 8), $.byteSliceHint)
		return null
	}

	public async EncodeMessage(pb: Message | null): globalThis.Promise<$.GoError> {
		const p: Buffer | $.VarRef<Buffer> | null = this;
		let siz = await __goscript_table_marshal.Size(pb)
		let sizVar = __goscript_encode.SizeVarint($.uint64(siz))
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).grow(siz + sizVar) : Buffer.prototype.grow.call(p, siz + sizVar))
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).EncodeVarint($.uint64(siz)) : Buffer.prototype.EncodeVarint.call(p, $.uint64(siz)))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).Marshal(pb) : Buffer.prototype.Marshal.call(p, pb))
	}

	public EncodeRawBytes(b: $.Slice<number>): $.GoError {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).EncodeVarint($.uint64($.sliceLen(b))) : Buffer.prototype.EncodeVarint.call(p, $.uint64($.sliceLen(b))));
		;(p$ as Buffer).buf = $.appendSlice((p$ as Buffer).buf, b, $.byteSliceHint)
		return null
	}

	public EncodeStringBytes(s: string): $.GoError {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).EncodeVarint($.uint64($.stringLen(s))) : Buffer.prototype.EncodeVarint.call(p, $.uint64($.stringLen(s))));
		;(p$ as Buffer).buf = $.appendSlice((p$ as Buffer).buf, $.stringToBytes(s), $.byteSliceHint)
		return null
	}

	public EncodeVarint(x: bigint): $.GoError {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		while (x >= 128n) {
			;(p$ as Buffer).buf = $.append((p$ as Buffer).buf, $.uint($.uint($.uint64Or(($.uint64And(x, 127n)), 128n), 8), 8), $.byteSliceHint)
			x = $.uint64Shr(x, 7n)
		}
		;(p$ as Buffer).buf = $.append((p$ as Buffer).buf, $.uint($.uint(x, 8), 8), $.byteSliceHint)
		return null
	}

	public EncodeZigzag32(x: bigint): $.GoError {
		const p: Buffer | $.VarRef<Buffer> | null = this;

		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).EncodeVarint($.uint64(((($.uint(x, 32) << 1) >>> 0)) ^ $.uint(($.int(x, 32) >> 31), 32))) : Buffer.prototype.EncodeVarint.call(p, $.uint64(((($.uint(x, 32) << 1) >>> 0)) ^ $.uint(($.int(x, 32) >> 31), 32))))
	}

	public EncodeZigzag64(x: bigint): $.GoError {
		const p: Buffer | $.VarRef<Buffer> | null = this;

		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).EncodeVarint($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n)))))) : Buffer.prototype.EncodeVarint.call(p, $.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n)))))))
	}

	public async Marshal(pb: Message | null): globalThis.Promise<$.GoError> {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		let err: $.GoError = null! as $.GoError
		if ((p$ as Buffer).deterministic) {
			{
				let [, ok] = $.typeAssertTuple<__goscript_encode.Marshaler | null>(pb, "proto.Marshaler")
				if (ok) {
					return fmt.Errorf("proto: deterministic not supported by the Marshal method of %T", (pb as any))
				}
			}
		}
		{
			let [m, ok] = $.typeAssertTuple<__goscript_table_marshal.newMarshaler | null>(pb, "proto.newMarshaler")
			if (ok) {
				let siz = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_table_marshal.newMarshaler, null>) : $.pointerValue<Exclude<__goscript_table_marshal.newMarshaler, null>>(m)).XXX_Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).grow(siz) : Buffer.prototype.grow.call(p, siz))
				let pp: $.Slice<number> = $.goSlice((p$ as Buffer).buf, $.sliceLen((p$ as Buffer).buf), $.sliceLen((p$ as Buffer).buf), $.sliceLen((p$ as Buffer).buf) + siz)
				let __goscriptTuple9: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_table_marshal.newMarshaler, null>) : $.pointerValue<Exclude<__goscript_table_marshal.newMarshaler, null>>(m)).XXX_Marshal(pp, (p$ as Buffer).deterministic)
				pp = __goscriptTuple9[0]
				err = __goscriptTuple9[1];
				;(p$ as Buffer).buf = $.appendSlice((p$ as Buffer).buf, pp, $.byteSliceHint)
				return err
			}
		}
		{
			let [m, ok] = $.typeAssertTuple<__goscript_encode.Marshaler | null>(pb, "proto.Marshaler")
			if (ok) {

				let b: $.Slice<number> = null! as $.Slice<number>
				let __goscriptTuple10: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_encode.Marshaler, null>) : $.pointerValue<Exclude<__goscript_encode.Marshaler, null>>(m)).Marshal()
				b = __goscriptTuple10[0]
				err = __goscriptTuple10[1];
				;(p$ as Buffer).buf = $.appendSlice((p$ as Buffer).buf, b, $.byteSliceHint)
				return err
			}
		}

		if (pb == null) {
			return __goscript_encode.ErrNil
		}
		let info: $.VarRef<InternalMessageInfo> = $.varRef(new InternalMessageInfo(undefined, true))
		let siz = await info.value.Size(pb)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Buffer).grow(siz) : Buffer.prototype.grow.call(p, siz))
		let __goscriptTuple11: any = await info.value.Marshal((p$ as Buffer).buf, pb, (p$ as Buffer).deterministic);
		;(p$ as Buffer).buf = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		return err
	}

	public Reset(): void {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p);
		;(p$ as Buffer).buf = $.goSlice((p$ as Buffer).buf, 0, 0);
		;(p$ as Buffer).index = 0
	}

	public SetBuf(s: $.Slice<number>): void {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p);
		;(p$ as Buffer).buf = s;
		;(p$ as Buffer).index = 0
	}

	public SetDeterministic(deterministic: boolean): void {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		$.pointerValue<Buffer>(p).deterministic = deterministic
	}

	public async Unmarshal(pb: Message | null): globalThis.Promise<$.GoError> {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)

		{
			let [u, ok] = $.typeAssertTuple<__goscript_decode.newUnmarshaler | null>(pb, "proto.newUnmarshaler")
			if (ok) {
				let err = (__goscriptAwait = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<__goscript_decode.newUnmarshaler, null>) : $.pointerValue<Exclude<__goscript_decode.newUnmarshaler, null>>(u)).XXX_Unmarshal($.goSlice((p$ as Buffer).buf, (p$ as Buffer).index, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
				;(p$ as Buffer).index = $.sliceLen((p$ as Buffer).buf)
				return err
			}
		}
		{
			let [u, ok] = $.typeAssertTuple<__goscript_decode.Unmarshaler | null>(pb, "proto.Unmarshaler")
			if (ok) {

				// Bool is a helper routine that allocates a new bool value
				// to store v and returns a pointer to it.

				let err = (__goscriptAwait = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<__goscript_decode.Unmarshaler, null>) : $.pointerValue<Exclude<__goscript_decode.Unmarshaler, null>>(u)).Unmarshal($.goSlice((p$ as Buffer).buf, (p$ as Buffer).index, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
				;(p$ as Buffer).index = $.sliceLen((p$ as Buffer).buf)
				return err
			}
		}

		// Int is a helper routine that allocates a new int32 value
		// to store v and returns a pointer to it, but unlike Int32
		// its argument value is an int.

		let info: $.VarRef<InternalMessageInfo> = $.varRef(new InternalMessageInfo(undefined, true))
		let err = await info.value.Unmarshal(pb, $.goSlice((p$ as Buffer).buf, (p$ as Buffer).index, undefined));
		;(p$ as Buffer).index = $.sliceLen((p$ as Buffer).buf)
		return err
	}

	public decodeVarintSlow(): [bigint, $.GoError] {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		let x: bigint = 0n
		let err: $.GoError = null! as $.GoError
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		let i = (p$ as Buffer).index
		let l = $.sliceLen((p$ as Buffer).buf)

		for (let shift = 0; shift < 64; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (i >= l) {
				err = io.ErrUnexpectedEOF
				return [x, err]
			}
			let b = $.arrayIndex((p$ as Buffer).buf!, i)
			i++
			x = $.uint64Or(x, $.uint64Shl(($.uint64And($.uint64(b), 127n)), shift))
			if (b < 0x80) {
				;(p$ as Buffer).index = i
				return [x, err]
			}
		}

		err = __goscript_decode.errOverflow
		return [x, err]
	}

	public grow(n: number): void {
		let p: Buffer | $.VarRef<Buffer> | null = this;
		const p$: Buffer = p == null ? $.pointerTarget<Buffer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Buffer>(p)
		let need = $.sliceLen((p$ as Buffer).buf) + n
		if (need <= $.cap((p$ as Buffer).buf)) {
			return
		}
		let newCap = $.sliceLen((p$ as Buffer).buf) * 2
		if (newCap < need) {
			newCap = need
		}
		;(p$ as Buffer).buf = $.appendSlice($.makeSlice<number>(0, newCap, "byte"), (p$ as Buffer).buf, $.byteSliceHint)
	}

	static __typeInfo = $.registerStructType(
		"proto.Buffer",
		() => new Buffer(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("DebugPrint", [["s", /* @__PURE__ */ $.basicType("string")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("DecodeFixed32", [], [["x", /* @__PURE__ */ $.basicType("uint64")], ["err", "error"]], true), $.methodSignature("DecodeFixed64", [], [["x", /* @__PURE__ */ $.basicType("uint64")], ["err", "error"]], true), $.methodSignature("DecodeGroup", [["pb", "proto.Message"]], ["error"], true), $.methodSignature("DecodeMessage", [["pb", "proto.Message"]], ["error"], true), $.methodSignature("DecodeRawBytes", [["alloc", /* @__PURE__ */ $.basicType("bool")]], [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("DecodeStringBytes", [], [["s", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("DecodeVarint", [], [["x", /* @__PURE__ */ $.basicType("uint64")], ["err", "error"]], true), $.methodSignature("DecodeZigzag32", [], [["x", /* @__PURE__ */ $.basicType("uint64")], ["err", "error"]], true), $.methodSignature("DecodeZigzag64", [], [["x", /* @__PURE__ */ $.basicType("uint64")], ["err", "error"]], true), $.methodSignature("EncodeFixed32", [["x", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeFixed64", [["x", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeMessage", [["pb", "proto.Message"]], ["error"], true), $.methodSignature("EncodeRawBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("EncodeStringBytes", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("EncodeVarint", [["x", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeZigzag32", [["x", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("EncodeZigzag64", [["x", /* @__PURE__ */ $.basicType("uint64")]], ["error"], true), $.methodSignature("Marshal", [["pb", "proto.Message"]], ["error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("SetBuf", [["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("SetDeterministic", [["deterministic", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("Unmarshal", [["pb", "proto.Message"]], ["error"], true), $.methodSignature("decodeVarintSlow", [], [["x", /* @__PURE__ */ $.basicType("uint64")], ["err", "error"]], true), $.methodSignature("grow", [["n", /* @__PURE__ */ $.basicType("int")]], [], true)],
		Buffer,
		() => [/* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("deterministic", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class defaultMessage {
	public get scalars(): $.Slice<scalarField> {
		return this._fields.scalars
	}

	public set scalars(value: $.Slice<scalarField>) {
		this._fields.scalars = value
	}

	public get nested(): $.Slice<number> {
		return this._fields.nested
	}

	public set nested(value: $.Slice<number>) {
		this._fields.nested = value
	}

	public _fields: {
		scalars: $.Slice<scalarField>
		nested: $.Slice<number>
	}

	constructor(init?: Partial<{scalars?: $.Slice<scalarField>, nested?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			scalars: init?.scalars ?? (null! as $.Slice<scalarField>),
			nested: init?.nested ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): defaultMessage {
		return new defaultMessage(this, true)
	}

	public __goscriptAssign(source: defaultMessage): void {
		const target = this._fields
		const values = source._fields
		target.scalars = values.scalars
		target.nested = values.nested
	}

	static __typeInfo = $.registerStructType(
		"proto.defaultMessage",
		() => new defaultMessage(),
		() => [],
		defaultMessage,
		() => [/* @__PURE__ */ $.structField("scalars", /* @__PURE__ */ $.sliceType("proto.scalarField"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("nested", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class scalarField {
	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get kind(): reflect.Kind {
		return this._fields.kind
	}

	public set kind(value: reflect.Kind) {
		this._fields.kind = value
	}

	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public _fields: {
		index: number
		kind: reflect.Kind
		value: any
	}

	constructor(init?: Partial<{index?: number, kind?: reflect.Kind, value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			index: init?.index ?? (0 as number),
			kind: init?.kind ?? (0 as reflect.Kind),
			value: init?.value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scalarField {
		return new scalarField(this, true)
	}

	public __goscriptAssign(source: scalarField): void {
		const target = this._fields
		const values = source._fields
		target.index = values.index
		target.kind = values.kind
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"proto.scalarField",
		() => new scalarField(),
		() => [],
		scalarField,
		() => [/* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("kind", /* @__PURE__ */ $.basicType("uint", "reflect.Kind"), [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [2], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class mapKeySorter {
	public get vs(): $.Slice<reflect.Value> {
		return this._fields.vs
	}

	public set vs(value: $.Slice<reflect.Value>) {
		this._fields.vs = value
	}

	public get less(): ((a: reflect.Value, b: reflect.Value) => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.less
	}

	public set less(value: ((a: reflect.Value, b: reflect.Value) => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.less = value
	}

	public _fields: {
		vs: $.Slice<reflect.Value>
		less: ((a: reflect.Value, b: reflect.Value) => boolean | globalThis.Promise<boolean>) | null
	}

	constructor(init?: Partial<{vs?: $.Slice<reflect.Value>, less?: ((a: reflect.Value, b: reflect.Value) => boolean | globalThis.Promise<boolean>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			vs: init?.vs ?? (null! as $.Slice<reflect.Value>),
			less: init?.less ?? (null! as ((a: reflect.Value, b: reflect.Value) => boolean | globalThis.Promise<boolean>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mapKeySorter {
		return new mapKeySorter(this, true)
	}

	public __goscriptAssign(source: mapKeySorter): void {
		const target = this._fields
		const values = source._fields
		target.vs = values.vs
		target.less = values.less
	}

	public Len(): number {
		const s = this;
		return $.sliceLen(s.vs)
	}

	public async Less(i: number, j: number): globalThis.Promise<boolean> {
		const s = this;
		return s.less!($.markAsStructValue($.cloneStructValue($.arrayIndex(s.vs!, i))), $.markAsStructValue($.cloneStructValue($.arrayIndex(s.vs!, j))))
	}

	public Swap(i: number, j: number): void {
		let s: mapKeySorter = this;
		let __goscriptAssign0_0: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(s.vs!, j)))
		let __goscriptAssign0_1: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(s.vs!, i)))
		$.assignStruct($.sliceElems(s.vs!)[$.sliceSlot(s.vs!, i)], __goscriptAssign0_0)
		$.assignStruct($.sliceElems(s.vs!)[$.sliceSlot(s.vs!, j)], __goscriptAssign0_1)
	}

	static __typeInfo = $.registerStructType(
		"proto.mapKeySorter",
		() => new mapKeySorter(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])],
		mapKeySorter,
		() => [/* @__PURE__ */ $.structField("vs", /* @__PURE__ */ $.sliceType("reflect.Value"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("less", ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class InternalMessageInfo {
	public get marshal(): __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null {
		return this._fields.marshal
	}

	public set marshal(value: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null) {
		this._fields.marshal = value
	}

	public get unmarshal(): __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null {
		return this._fields.unmarshal
	}

	public set unmarshal(value: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null) {
		this._fields.unmarshal = value
	}

	public get merge(): __goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null {
		return this._fields.merge
	}

	public set merge(value: __goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null) {
		this._fields.merge = value
	}

	public get discard(): __goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null {
		return this._fields.discard
	}

	public set discard(value: __goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null) {
		this._fields.discard = value
	}

	public _fields: {
		marshal: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null
		unmarshal: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null
		merge: __goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null
		discard: __goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null
	}

	constructor(init?: Partial<{marshal?: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null, unmarshal?: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null, merge?: __goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null, discard?: __goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			marshal: init?.marshal ?? (null! as __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null),
			unmarshal: init?.unmarshal ?? (null! as __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null),
			merge: init?.merge ?? (null! as __goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null),
			discard: init?.discard ?? (null! as __goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InternalMessageInfo {
		return new InternalMessageInfo(this, true)
	}

	public __goscriptAssign(source: InternalMessageInfo): void {
		const target = this._fields
		const values = source._fields
		target.marshal = values.marshal
		target.unmarshal = values.unmarshal
		target.merge = values.merge
		target.discard = values.discard
	}

	public async DiscardUnknown(__goscriptParam8: Message | null): globalThis.Promise<void> {
		const a: InternalMessageInfo | $.VarRef<InternalMessageInfo> | null = this;
		let m: $.VarRef<Message | null> = $.varRef(__goscriptParam8)
		const a$: InternalMessageInfo = a == null ? $.pointerTarget<InternalMessageInfo>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<InternalMessageInfo>(a)
		let di: __goscript_discard.discardInfo | $.VarRef<__goscript_discard.discardInfo> | null = await __goscript_pointer_reflect.atomicLoadDiscardInfo($.fieldRef((a$ as InternalMessageInfo)._fields, "discard"))
		if (di == null) {
			di = await __goscript_discard.getDiscardInfo((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((m.value as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			await __goscript_pointer_reflect.atomicStoreDiscardInfo($.fieldRef((a$ as InternalMessageInfo)._fields, "discard"), di)
		}
		await (di !== null && (di as any).__isVarRef !== true && (di as any).__goValue === undefined ? ((di as any) as __goscript_discard.discardInfo).discard(__goscript_pointer_reflect.toPointer(m)) : __goscript_discard.discardInfo.prototype.discard.call(di, __goscript_pointer_reflect.toPointer(m)))
	}

	public async Marshal(b: $.Slice<number>, __goscriptParam9: Message | null, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const a: InternalMessageInfo | $.VarRef<InternalMessageInfo> | null = this;
		let msg: $.VarRef<Message | null> = $.varRef(__goscriptParam9)
		let u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null = await __goscript_table_marshal.getMessageMarshalInfo((msg.value as any), a)
		let ptr = __goscript_pointer_reflect.toPointer(msg)
		if ($.markAsStructValue($.cloneStructValue(ptr)).isNil()) {

			return [b, __goscript_encode.ErrNil]
		}
		return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).marshal(b, (ptr).clone(), deterministic) : __goscript_table_marshal.marshalInfo.prototype.marshal.call(u, b, (ptr).clone(), deterministic))
	}

	public async Merge(__goscriptParam10: Message | null, __goscriptParam11: Message | null): globalThis.Promise<void> {
		const a: InternalMessageInfo | $.VarRef<InternalMessageInfo> | null = this;
		let dst: $.VarRef<Message | null> = $.varRef(__goscriptParam10)
		let src: $.VarRef<Message | null> = $.varRef(__goscriptParam11)
		const a$: InternalMessageInfo = a == null ? $.pointerTarget<InternalMessageInfo>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<InternalMessageInfo>(a)
		let mi: __goscript_table_merge.mergeInfo | $.VarRef<__goscript_table_merge.mergeInfo> | null = await __goscript_pointer_reflect.atomicLoadMergeInfo($.fieldRef((a$ as InternalMessageInfo)._fields, "merge"))
		if (mi == null) {
			mi = await __goscript_table_merge.getMergeInfo((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((dst.value as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			await __goscript_pointer_reflect.atomicStoreMergeInfo($.fieldRef((a$ as InternalMessageInfo)._fields, "merge"), mi)
		}
		await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as __goscript_table_merge.mergeInfo).merge(__goscript_pointer_reflect.toPointer(dst), __goscript_pointer_reflect.toPointer(src)) : __goscript_table_merge.mergeInfo.prototype.merge.call(mi, __goscript_pointer_reflect.toPointer(dst), __goscript_pointer_reflect.toPointer(src)))
	}

	public async Size(__goscriptParam12: Message | null): globalThis.Promise<number> {
		const a: InternalMessageInfo | $.VarRef<InternalMessageInfo> | null = this;
		let msg: $.VarRef<Message | null> = $.varRef(__goscriptParam12)
		let u: __goscript_table_marshal.marshalInfo | $.VarRef<__goscript_table_marshal.marshalInfo> | null = await __goscript_table_marshal.getMessageMarshalInfo((msg.value as any), a)
		let ptr = __goscript_pointer_reflect.toPointer(msg)
		if ($.markAsStructValue($.cloneStructValue(ptr)).isNil()) {

			return 0
		}
		return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_marshal.marshalInfo).size((ptr).clone()) : __goscript_table_marshal.marshalInfo.prototype.size.call(u, (ptr).clone()))
	}

	public async Unmarshal(__goscriptParam13: Message | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const a: InternalMessageInfo | $.VarRef<InternalMessageInfo> | null = this;
		let msg: $.VarRef<Message | null> = $.varRef(__goscriptParam13)
		const a$: InternalMessageInfo = a == null ? $.pointerTarget<InternalMessageInfo>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<InternalMessageInfo>(a)

		let u: __goscript_table_unmarshal.unmarshalInfo | $.VarRef<__goscript_table_unmarshal.unmarshalInfo> | null = await __goscript_pointer_reflect.atomicLoadUnmarshalInfo($.fieldRef((a$ as InternalMessageInfo)._fields, "unmarshal"))
		if (u == null) {

			u = await __goscript_table_unmarshal.getUnmarshalInfo((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((msg.value as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			await __goscript_pointer_reflect.atomicStoreUnmarshalInfo($.fieldRef((a$ as InternalMessageInfo)._fields, "unmarshal"), u)
		}

		let err = await (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as __goscript_table_unmarshal.unmarshalInfo).unmarshal(__goscript_pointer_reflect.toPointer(msg), b) : __goscript_table_unmarshal.unmarshalInfo.prototype.unmarshal.call(u, __goscript_pointer_reflect.toPointer(msg), b))
		return err
	}

	static __typeInfo = $.registerStructType(
		"proto.InternalMessageInfo",
		() => new InternalMessageInfo(),
		() => [$.methodSignature("DiscardUnknown", [["m", "proto.Message"]], [], true), $.methodSignature("Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["msg", "proto.Message"], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Merge", [["dst", "proto.Message"], ["src", "proto.Message"]], [], true), $.methodSignature("Size", [["msg", "proto.Message"]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Unmarshal", [["msg", "proto.Message"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		InternalMessageInfo,
		() => [/* @__PURE__ */ $.structField("marshal", /* @__PURE__ */ $.pointerType("proto.marshalInfo"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("unmarshal", /* @__PURE__ */ $.pointerType("proto.unmarshalInfo"), [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("merge", /* @__PURE__ */ $.pointerType("proto.mergeInfo"), [2], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("discard", /* @__PURE__ */ $.pointerType("proto.discardInfo"), [3], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export const GoGoProtoPackageIsVersion3: boolean = true

export const GoGoProtoPackageIsVersion2: boolean = true

export const GoGoProtoPackageIsVersion1: boolean = true

export let errInvalidUTF8: invalidUTF8Error | $.VarRef<invalidUTF8Error> | null = new invalidUTF8Error()

export function __goscript_set_errInvalidUTF8(__goscriptValue: invalidUTF8Error | $.VarRef<invalidUTF8Error> | null): void {
	errInvalidUTF8 = __goscriptValue
}

export async function isNonFatal(err: $.GoError): globalThis.Promise<boolean> {
	{
		let [re, ok] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "RequiredNotSet", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
		if (ok && (__goscriptAwait = (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? (re as any) : $.pointerValue<any>(re)).RequiredNotSet(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return true
		}
	}
	{
		let [re, ok] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "InvalidUTF8", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
		if (ok && (__goscriptAwait = (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? (re as any) : $.pointerValue<any>(re)).InvalidUTF8(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return true
		}
	}
	return false
}

export function NewBuffer(e: $.Slice<number>): Buffer | $.VarRef<Buffer> | null {
	return new Buffer({buf: e})
}

export function Bool(__goscriptParam0: boolean): $.VarRef<boolean> | null {
	let v: $.VarRef<boolean> = $.varRef(__goscriptParam0)
	return v
}

export function Int32(__goscriptParam1: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam1)
	return v
}

export function Int(v: number): $.VarRef<number> | null {
	let p = $.varRef<number>(0)
	p!.value = $.int(v, 32)
	return p
}

export function Int64(__goscriptParam2: bigint): $.VarRef<bigint> | null {
	let v: $.VarRef<bigint> = $.varRef(__goscriptParam2)
	return v
}

export function Float32(__goscriptParam3: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam3)
	return v
}

export function Float64(__goscriptParam4: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam4)
	return v
}

export function Uint32(__goscriptParam5: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam5)
	return v
}

export function Uint64(__goscriptParam6: bigint): $.VarRef<bigint> | null {
	let v: $.VarRef<bigint> = $.varRef(__goscriptParam6)
	return v
}

export function String(__goscriptParam7: string): $.VarRef<string> | null {
	let v: $.VarRef<string> = $.varRef(__goscriptParam7)
	return v
}

export function EnumName(m: globalThis.Map<number, string> | null, v: number): string {
	let [s, ok] = $.mapGet<number, string, string>(m, v, "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(v))
}

export async function UnmarshalJSONEnum(m: globalThis.Map<string, number> | null, data: $.Slice<number>, enumName: string): globalThis.Promise<[number, $.GoError]> {
	if ($.arrayIndex(data!, 0) == 34) {
		// New style: enums are strings.
		let repr: $.VarRef<string> = $.varRef("")
		{
			let err = await json.Unmarshal(data, $.interfaceValue(repr, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
			if (err != null) {
				return [-1, err]
			}
		}
		let [val, ok] = $.mapGet<string, number, number>(m, repr.value, 0)
		if (!ok) {
			return [0, fmt.Errorf("unrecognized enum %s value %q", enumName, repr.value)]
		}
		return [val, null]
	}
	// Old style: enums are ints.
	let val: $.VarRef<number> = $.varRef(0)
	{
		let err = await json.Unmarshal(data, $.interfaceValue(val, "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))))
		if (err != null) {
			return [0, fmt.Errorf("cannot unmarshal %#q into enum %s", $.interfaceValue(data, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), enumName)]
		}
	}
	return [val.value, null]
}

export async function SetDefaults(pb: Message | null): globalThis.Promise<void> {
	await setDefaults($.markAsStructValue($.cloneStructValue(reflect.ValueOf((pb as any)))), true, false)
}

export async function setDefaults(v: reflect.Value, recur: boolean, zeros: boolean): globalThis.Promise<void> {
	if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
		v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	}

	await defaultMu.value.RLock()
	let [dm, ok] = $.mapGet<reflect.Type | null, defaultMessage, defaultMessage>(defaults, $.markAsStructValue($.cloneStructValue(v)).Type(), new defaultMessage(undefined, true))
	defaultMu.value.RUnlock()
	if (!ok) {
		dm = $.assignStruct(dm, await buildDefaultMessage($.markAsStructValue($.cloneStructValue(v)).Type()))
		await defaultMu.value.Lock()
		$.mapSet(defaults, $.markAsStructValue($.cloneStructValue(v)).Type(), (dm).clone())
		defaultMu.value.Unlock()
	}

	for (let __goscriptRangeTarget0 = dm.scalars, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let sf = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as scalarField)).clone()
		let f = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(sf.index)))
		if (!$.markAsStructValue($.cloneStructValue(f)).IsNil()) {
			// field already set
			continue
		}
		let dv = sf.value
		if ((dv == null) && !zeros) {
			// no explicit default, and don't want to set zeros
			continue
		}
		let fptr = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f)).Addr())).Interface()
		// TODO: Consider batching the allocations we do here.
		switch (sf.kind) {
			case reflect.Bool:
			{
				let b = $.varRef<boolean>(false)
				if (dv != null) {
					b!.value = $.mustTypeAssert<boolean>(dv, /* @__PURE__ */ $.basicType("bool"))
				}
				;($.mustTypeAssert<$.VarRef<$.VarRef<boolean> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))))!.value = b
				break
			}
			case reflect.Float32:
			{
				let __goscriptShadow0 = $.varRef<number>(0)
				if (dv != null) {
					__goscriptShadow0!.value = $.mustTypeAssert<number>(dv, /* @__PURE__ */ $.basicType("float32"))
				}
				;($.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))))!.value = __goscriptShadow0
				break
			}
			case reflect.Float64:
			{
				let __goscriptShadow1 = $.varRef<number>(0)
				if (dv != null) {
					__goscriptShadow1!.value = $.mustTypeAssert<number>(dv, /* @__PURE__ */ $.basicType("float64"))
				}
				;($.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))))!.value = __goscriptShadow1
				break
			}
			case reflect.Int32:
			{
				{
					let ft = $.markAsStructValue($.cloneStructValue(f)).Type()
					if (!$.comparableEqual(ft, int32PtrType)) {
						// enum
						$.markAsStructValue($.cloneStructValue(f)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
						if (dv != null) {
							$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f)).Elem())).SetInt($.int64($.mustTypeAssert<number>(dv, /* @__PURE__ */ $.basicType("int32"))))
						}
					} else {
						// int32 field
						let i = $.varRef<number>(0)
						if (dv != null) {
							i!.value = $.int($.mustTypeAssert<number>(dv, /* @__PURE__ */ $.basicType("int32")), 32)
						}
						;($.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))))!.value = i
					}
				}
				break
			}
			case reflect.Int64:
			{
				let i = $.varRef<bigint>(0n)
				if (dv != null) {
					i!.value = $.mustTypeAssert<bigint>(dv, /* @__PURE__ */ $.basicType("int64"))
				}
				;($.mustTypeAssert<$.VarRef<$.VarRef<bigint> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))))!.value = i
				break
			}
			case reflect.String:
			{
				let s = $.varRef<string>("")
				if (dv != null) {
					s!.value = $.mustTypeAssert<string>(dv, /* @__PURE__ */ $.basicType("string"))
				}
				;($.mustTypeAssert<$.VarRef<$.VarRef<string> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))))!.value = s
				break
			}
			case reflect.Uint8:
			{
				let b: $.Slice<number> = null! as $.Slice<number>
				if (dv != null) {
					let db: $.Slice<number> = $.mustTypeAssert<$.Slice<number>>(dv, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
					b = $.makeSlice<number>($.sliceLen(db), undefined, "byte")
					$.copy(b, db)
				} else {
					b = new Uint8Array([]) as $.Slice<number>
				}
				;($.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))!.value = b
				break
			}
			case reflect.Uint32:
			{
				let u = $.varRef<number>(0)
				if (dv != null) {
					u!.value = $.uint($.mustTypeAssert<number>(dv, /* @__PURE__ */ $.basicType("uint32")), 32)
				}
				;($.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))))!.value = u
				break
			}
			case reflect.Uint64:
			{
				let u = $.varRef<bigint>(0n)
				if (dv != null) {
					u!.value = $.mustTypeAssert<bigint>(dv, /* @__PURE__ */ $.basicType("uint64"))
				}
				;($.mustTypeAssert<$.VarRef<$.VarRef<bigint> | null> | null>(fptr, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))))!.value = u
				break
			}
			default:
			{
				await log.Printf("proto: can't set default for field %v (sf.kind=%v)", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(f)), "reflect.Value", "reflect.Value"), $.namedValueInterfaceValue<any>(sf.kind, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				break
			}
		}
	}

	for (let __goscriptRangeTarget2 = dm.nested, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let ni = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number)
		let f = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(ni)))
		// f is *T or T or []*T or []T
		switch ($.markAsStructValue($.cloneStructValue(f)).Kind()) {
			case reflect.Struct:
			{
				await setDefaults($.markAsStructValue($.cloneStructValue(f)), recur, zeros)
				break
			}
			case reflect.Ptr:
			{
				if ($.markAsStructValue($.cloneStructValue(f)).IsNil()) {
					continue
				}
				await setDefaults($.markAsStructValue($.cloneStructValue(f)), recur, zeros)
				break
			}
			case reflect.Slice:
			{
				for (let i = 0; i < $.markAsStructValue($.cloneStructValue(f)).Len(); i++) {
					let e = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f)).Index(i)))
					if (($.markAsStructValue($.cloneStructValue(e)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(e)).IsNil()) {
						continue
					}
					await setDefaults($.markAsStructValue($.cloneStructValue(e)), recur, zeros)
				}
				break
			}
			case reflect.Map:
			{
				for (let __goscriptRangeTarget1 = $.markAsStructValue($.cloneStructValue(f)).MapKeys(), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as reflect.Value)))
					let e = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(f)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))
					if ($.markAsStructValue($.cloneStructValue(e)).IsNil()) {
						continue
					}
					await setDefaults($.markAsStructValue($.cloneStructValue(e)), recur, zeros)
				}
				break
			}
		}
	}
}

export let defaultMu: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_defaultMu(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(defaultMu.value, __goscriptValue)
}

export let defaults: globalThis.Map<reflect.Type | null, defaultMessage> | null = $.makeMap<reflect.Type | null, defaultMessage>()

export function __goscript_set_defaults(__goscriptValue: globalThis.Map<reflect.Type | null, defaultMessage> | null): void {
	defaults = __goscriptValue
}

export let int32PtrType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))))

export function __goscript_set_int32PtrType(__goscriptValue: reflect.Type | null): void {
	int32PtrType = __goscriptValue
}

export async function buildDefaultMessage(t: reflect.Type | null): globalThis.Promise<defaultMessage> {
	let dm: defaultMessage = new defaultMessage(undefined, true)
	let sprop: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null = await __goscript_properties.GetProperties(t)
	let sprop$: __goscript_properties.StructProperties = sprop == null ? $.pointerTarget<__goscript_properties.StructProperties>(sprop) : (sprop as any).__isVarRef === true ? (sprop as any).value : (sprop as any).__goValue === undefined ? (sprop as any) : $.pointerTarget<__goscript_properties.StructProperties>(sprop)
	for (let __goscriptRangeTarget3 = (sprop$ as __goscript_properties.StructProperties).Prop, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let prop = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null)
		let [fi, ok] = (sprop$ as __goscript_properties.StructProperties).decoderTags.get($.pointerValue<__goscript_properties.Properties>(prop).Tag)
		if (!ok) {
			// XXX_unrecognized
			continue
		}
		let ft = ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(fi), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type

		let __goscriptTuple12: any = await fieldDefault(ft, prop)
		let sf: scalarField | $.VarRef<scalarField> | null = __goscriptTuple12[0]
		let nested = __goscriptTuple12[1]
		let err = __goscriptTuple12[2]
		switch ((true as boolean)) {
			case err != null:
			{
				await log.Print($.arrayToSlice<any>([(err as any)]))
				break
			}
			case nested:
			{
				dm.nested = $.appendOne(dm.nested, fi)
				break
			}
			case sf != null:
			{
				$.pointerValue<scalarField>(sf).index = fi
				dm.scalars = $.appendOne(dm.scalars, ($.pointerValue<scalarField>(sf)).clone())
				break
			}
		}
	}

	return (dm).clone()
}

export async function fieldDefault(ft: reflect.Type | null, prop: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null): globalThis.Promise<[scalarField | $.VarRef<scalarField> | null, boolean, $.GoError]> {
	let sf: scalarField | $.VarRef<scalarField> | null = null! as scalarField | $.VarRef<scalarField> | null
	let nestedMessage: boolean = false
	let err: $.GoError = null! as $.GoError
	const prop$: __goscript_properties.Properties = prop == null ? $.pointerTarget<__goscript_properties.Properties>(prop) : (prop as any).__isVarRef === true ? (prop as any).value : (prop as any).__goValue === undefined ? (prop as any) : $.pointerTarget<__goscript_properties.Properties>(prop)
	let canHaveDefault: boolean = false
	switch ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Struct:
		{
			nestedMessage = true
			break
		}
		case reflect.Ptr:
		{
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) {
				nestedMessage = true
			} else {
				canHaveDefault = true
			}
			break
		}
		case reflect.Slice:
		{
			switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Ptr:
				case reflect.Struct:
				{
					nestedMessage = true
					break
				}
				case reflect.Uint8:
				{
					canHaveDefault = true
					break
				}
			}
			break
		}
		case reflect.Map:
		{
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				nestedMessage = true
			}
			break
		}
	}

	if (!canHaveDefault) {
		if (nestedMessage) {
			return [null, true, null]
		}
		return [null, false, null]
	}

	// We now know that ft is a pointer or slice.
	sf = (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new scalarField({kind: __goscriptLiteralField0}) })())

	// scalar fields without defaults
	if (!(prop$ as __goscript_properties.Properties).HasDefault) {
		return [sf, false, null]
	}

	// a scalar field: either *T or []byte
	switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Bool:
		{
			let [x, __goscriptShadow2] = strconv.ParseBool((prop$ as __goscript_properties.Properties).Default)
			if (__goscriptShadow2 != null) {
				return [null, false, fmt.Errorf("proto: bad default bool %q: %v", (prop$ as __goscript_properties.Properties).Default, (__goscriptShadow2 as any))]
			}
			$.pointerValue<scalarField>(sf).value = x
			break
		}
		case reflect.Float32:
		{
			let [x, __goscriptShadow3] = strconv.ParseFloat((prop$ as __goscript_properties.Properties).Default, 32)
			if (__goscriptShadow3 != null) {
				return [null, false, fmt.Errorf("proto: bad default float32 %q: %v", (prop$ as __goscript_properties.Properties).Default, (__goscriptShadow3 as any))]
			}
			$.pointerValue<scalarField>(sf).value = $.basicInterfaceValue(globalThis.Math.fround(x), "float32")
			break
		}
		case reflect.Float64:
		{
			let [x, __goscriptShadow4] = strconv.ParseFloat((prop$ as __goscript_properties.Properties).Default, 64)
			if (__goscriptShadow4 != null) {
				return [null, false, fmt.Errorf("proto: bad default float64 %q: %v", (prop$ as __goscript_properties.Properties).Default, (__goscriptShadow4 as any))]
			}
			$.pointerValue<scalarField>(sf).value = $.basicInterfaceValue(x, "float64")
			break
		}
		case reflect.Int32:
		{
			let [x, __goscriptShadow5] = strconv.ParseInt((prop$ as __goscript_properties.Properties).Default, 10, 32)
			if (__goscriptShadow5 != null) {
				return [null, false, fmt.Errorf("proto: bad default int32 %q: %v", (prop$ as __goscript_properties.Properties).Default, (__goscriptShadow5 as any))]
			}
			$.pointerValue<scalarField>(sf).value = $.basicInterfaceValue($.int(x, 32), "int32")
			break
		}
		case reflect.Int64:
		{
			let [x, __goscriptShadow6] = strconv.ParseInt((prop$ as __goscript_properties.Properties).Default, 10, 64)
			if (__goscriptShadow6 != null) {
				return [null, false, fmt.Errorf("proto: bad default int64 %q: %v", (prop$ as __goscript_properties.Properties).Default, (__goscriptShadow6 as any))]
			}
			$.pointerValue<scalarField>(sf).value = $.basicInterfaceValue(x, "int64")
			break
		}
		case reflect.String:
		{
			$.pointerValue<scalarField>(sf).value = (prop$ as __goscript_properties.Properties).Default
			break
		}
		case reflect.Uint8:
		{
			$.pointerValue<scalarField>(sf).value = $.interfaceValue($.stringToBytes((prop$ as __goscript_properties.Properties).Default), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
			break
		}
		case reflect.Uint32:
		{
			let [x, __goscriptShadow7] = strconv.ParseUint((prop$ as __goscript_properties.Properties).Default, 10, 32)
			if (__goscriptShadow7 != null) {
				return [null, false, fmt.Errorf("proto: bad default uint32 %q: %v", (prop$ as __goscript_properties.Properties).Default, (__goscriptShadow7 as any))]
			}
			$.pointerValue<scalarField>(sf).value = $.basicInterfaceValue($.uint(x, 32), "uint32")
			break
		}
		case reflect.Uint64:
		{
			let [x, __goscriptShadow8] = strconv.ParseUint((prop$ as __goscript_properties.Properties).Default, 10, 64)
			if (__goscriptShadow8 != null) {
				return [null, false, fmt.Errorf("proto: bad default uint64 %q: %v", (prop$ as __goscript_properties.Properties).Default, (__goscriptShadow8 as any))]
			}
			$.pointerValue<scalarField>(sf).value = $.basicInterfaceValue(x, "uint64")
			break
		}
		default:
		{
			return [null, false, fmt.Errorf("proto: unhandled def kind %v", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
			break
		}
	}

	return [sf, false, null]
}

export async function mapKeys(vs: $.Slice<reflect.Value>): globalThis.Promise<sort.Interface | null> {
	let s = new mapKeySorter({vs: vs}, true)

	// Type specialization per https://developers.google.com/protocol-buffers/docs/proto#maps.
	if ($.sliceLen(vs) == 0) {
		return $.interfaceValue<sort.Interface | null>((s).clone(), "proto.mapKeySorter", "proto.mapKeySorter")
	}
	switch ($.markAsStructValue($.cloneStructValue($.arrayIndex(vs!, 0))).Kind()) {
		case reflect.Int32:
		case reflect.Int64:
		{
			s.less = $.functionValue((a: reflect.Value, b: reflect.Value): boolean => {
				return $.markAsStructValue($.cloneStructValue(a)).Int() < $.markAsStructValue($.cloneStructValue(b)).Int()
			}, ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			break
		}
		case reflect.Uint32:
		case reflect.Uint64:
		{
			s.less = $.functionValue((a: reflect.Value, b: reflect.Value): boolean => {
				return $.markAsStructValue($.cloneStructValue(a)).Uint() < $.markAsStructValue($.cloneStructValue(b)).Uint()
			}, ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			break
		}
		case reflect.Bool:
		{
			s.less = $.functionValue((a: reflect.Value, b: reflect.Value): boolean => {
				return !$.markAsStructValue($.cloneStructValue(a)).Bool() && $.markAsStructValue($.cloneStructValue(b)).Bool()
			}, ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			break
		}
		case reflect.String:
		{
			s.less = $.functionValue((a: reflect.Value, b: reflect.Value): boolean => {
				return $.stringCompare($.markAsStructValue($.cloneStructValue(a)).String(), $.markAsStructValue($.cloneStructValue(b)).String()) < 0
			}, ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("unsupported map key type: %v", $.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue($.arrayIndex(vs!, 0))).Kind(), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			break
		}
	}

	return $.interfaceValue<sort.Interface | null>((s).clone(), "proto.mapKeySorter", "proto.mapKeySorter")
}

export function isProto3Zero(v: reflect.Value): boolean {
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Bool:
		{
			return !$.markAsStructValue($.cloneStructValue(v)).Bool()
			break
		}
		case reflect.Int32:
		case reflect.Int64:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Int() == 0n
			break
		}
		case reflect.Uint32:
		case reflect.Uint64:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Uint() == 0n
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Float() == 0
			break
		}
		case reflect.String:
		{
			return $.stringEqual($.markAsStructValue($.cloneStructValue(v)).String(), "")
			break
		}
	}
	return false
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
