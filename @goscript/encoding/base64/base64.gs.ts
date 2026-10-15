// Generated file based on base64.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as io from "@goscript/io/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/io/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"

$.registerTypePackagePath("encoding/base64", ["base64.Encoding", "base64.encoder", "base64.CorruptInputError", "base64.decoder", "base64.newlineFilteringReader"])

export type CorruptInputError = bigint

$.registerNamedValueType(
	"base64.CorruptInputError",
	{Error: (receiver: any, ...args: any[]) => (CorruptInputError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*base64.CorruptInputError",
	{Error: (receiver: any, ...args: any[]) => (CorruptInputError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Encoding {
	public get encode(): Uint8Array {
		return this._fields.encode
	}

	public set encode(value: Uint8Array) {
		this._fields.encode = value
	}

	public get decodeMap(): Uint8Array {
		return this._fields.decodeMap
	}

	public set decodeMap(value: Uint8Array) {
		this._fields.decodeMap = value
	}

	public get padChar(): number {
		return this._fields.padChar
	}

	public set padChar(value: number) {
		this._fields.padChar = value
	}

	public get strict(): boolean {
		return this._fields.strict
	}

	public set strict(value: boolean) {
		this._fields.strict = value
	}

	public _fields: {
		encode: Uint8Array
		decodeMap: Uint8Array
		padChar: number
		strict: boolean
	}

	constructor(init?: Partial<{encode?: Uint8Array, decodeMap?: Uint8Array, padChar?: number, strict?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			encode: init?.encode !== undefined ? $.cloneArrayValue(init.encode, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64)),
			decodeMap: init?.decodeMap !== undefined ? $.cloneArrayValue(init.decodeMap, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256)) : $.arrayValue(new Uint8Array(256)),
			padChar: init?.padChar ?? (0 as number),
			strict: init?.strict ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Encoding {
		return new Encoding(this, true)
	}

	public __goscriptAssign(source: Encoding): void {
		const target = this._fields
		const values = source._fields
		target.encode = $.assignFieldValue(target.encode, values.encode, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
		target.decodeMap = $.assignFieldValue(target.decodeMap, values.decodeMap, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256))
		target.padChar = values.padChar
		target.strict = values.strict
	}

	public AppendDecode(dst: $.Slice<number>, src: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		// Compute the output size without padding to avoid over allocating.
		let n = $.sliceLen(src)
		for (let __goscriptSliceWindow0 = $.sliceRange(src); (n > 0) && ($.int(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n - 1)] as number), 32) == $.pointerValue<Encoding>(enc).padChar); ) {
			n--
		}
		n = decodedLen(n, -1)

		dst = (slices.Grow(dst, n) as $.Slice<number>)
		let __goscriptTuple0: any = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).Decode($.goSlice($.goSlice(dst, $.sliceLen(dst), undefined), undefined, n), src) : Encoding.prototype.Decode.call(enc, $.goSlice($.goSlice(dst, $.sliceLen(dst), undefined), undefined, n), src))
		n = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		return [$.goSlice(dst, undefined, $.sliceLen(dst) + n), err]
	}

	public AppendEncode(dst: $.Slice<number>, src: $.Slice<number>): $.Slice<number> {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		let n = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).EncodedLen($.sliceLen(src)) : Encoding.prototype.EncodedLen.call(enc, $.sliceLen(src)))
		dst = (slices.Grow(dst, n) as $.Slice<number>)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).Encode($.goSlice($.goSlice(dst, $.sliceLen(dst), undefined), undefined, n), src) : Encoding.prototype.Encode.call(enc, $.goSlice($.goSlice(dst, $.sliceLen(dst), undefined), undefined, n), src))
		return $.goSlice(dst, undefined, $.sliceLen(dst) + n)
	}

	public Decode(dst: $.Slice<number>, src: $.Slice<number>): [number, $.GoError] {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const enc$: Encoding = enc == null ? $.pointerTarget<Encoding>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoding>(enc)
		if ($.sliceLen(src) == 0) {
			return [0, null]
		}

		// Lift the nil check outside of the loop. enc.decodeMap is directly
		// used later in this function, to let the compiler know that the
		// receiver can't be nil.
		;(enc$ as Encoding).decodeMap

		let si = 0
		while (((64 >= 64) && (($.sliceLen(src) - si) >= 8)) && (($.sliceLen(dst) - n) >= 8)) {
			let src2: $.Slice<number> = $.goSlice(src, si, si + 8)
			{
				let [dn, ok] = assemble64($.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 0)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 1)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 2)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 3)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 4)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 5)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 6)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 7)))
				if (ok) {
					byteorder.BEPutUint64($.goSlice(dst, n, undefined), dn)
					n = n + (6)
					si = si + (8)
				} else {
					let ninc: number = 0
					let __goscriptTuple1: any = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).decodeQuantum($.goSlice(dst, n, undefined), src, si) : Encoding.prototype.decodeQuantum.call(enc, $.goSlice(dst, n, undefined), src, si))
					si = __goscriptTuple1[0]
					ninc = __goscriptTuple1[1]
					err = __goscriptTuple1[2]
					n = n + (ninc)
					if (err != null) {
						return [n, err]
					}
				}
			}
		}

		while ((($.sliceLen(src) - si) >= 4) && (($.sliceLen(dst) - n) >= 4)) {
			let src2: $.Slice<number> = $.goSlice(src, si, si + 4)
			{
				let [dn, ok] = assemble32($.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 0)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 1)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 2)), $.arrayIndex((enc$ as Encoding).decodeMap, $.arrayIndex(src2!, 3)))
				if (ok) {
					byteorder.BEPutUint32($.goSlice(dst, n, undefined), dn)
					n = n + (3)
					si = si + (4)
				} else {
					let ninc: number = 0
					let __goscriptTuple2: any = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).decodeQuantum($.goSlice(dst, n, undefined), src, si) : Encoding.prototype.decodeQuantum.call(enc, $.goSlice(dst, n, undefined), src, si))
					si = __goscriptTuple2[0]
					ninc = __goscriptTuple2[1]
					err = __goscriptTuple2[2]
					n = n + (ninc)
					if (err != null) {
						return [n, err]
					}
				}
			}
		}

		while (si < $.sliceLen(src)) {
			let ninc: number = 0
			let __goscriptTuple3: any = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).decodeQuantum($.goSlice(dst, n, undefined), src, si) : Encoding.prototype.decodeQuantum.call(enc, $.goSlice(dst, n, undefined), src, si))
			si = __goscriptTuple3[0]
			ninc = __goscriptTuple3[1]
			err = __goscriptTuple3[2]
			n = n + (ninc)
			if (err != null) {
				return [n, err]
			}
		}
		return [n, err]
	}

	public DecodeString(s: string): [$.Slice<number>, $.GoError] {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		let dbuf: $.Slice<number> = $.makeSlice<number>((enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).DecodedLen($.stringLen(s)) : Encoding.prototype.DecodedLen.call(enc, $.stringLen(s))), undefined, "byte")
		let [n, err] = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).Decode(dbuf, $.stringToBytes(s)) : Encoding.prototype.Decode.call(enc, dbuf, $.stringToBytes(s)))
		return [$.goSlice(dbuf, undefined, n), err]
	}

	public DecodedLen(n: number): number {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		return decodedLen(n, $.pointerValue<Encoding>(enc).padChar)
	}

	public Encode(dst: $.Slice<number>, src: $.Slice<number>): void {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		const enc$: Encoding = enc == null ? $.pointerTarget<Encoding>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoding>(enc)
		if ($.sliceLen(src) == 0) {
			return
		}
		// enc is a pointer receiver, so the use of enc.encode within the hot
		// loop below means a nil check at every operation. Lift that nil check
		// outside of the loop to speed up the encoder.
		;(enc$ as Encoding).encode

		while ($.sliceLen(src) >= 3) {
			// Convert 3x 8bit source bytes into 4 bytes
			let val = $.uint($.uint64Or(($.uint($.uint64Or(($.uint($.uint64Shl($.uint($.arrayIndex(src!, 0), 64), 16n), 64)), ($.uint($.uint64Shl($.uint($.arrayIndex(src!, 1), 64), 8n), 64))), 64)), $.uint($.arrayIndex(src!, 2), 64)), 64)

			$.arrayIndex(dst!, 3)
			$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 18n), 64)), 63n), 64))
			$.sliceElems(dst!)[$.sliceSlot(dst!, 1)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 12n), 64)), 63n), 64))
			$.sliceElems(dst!)[$.sliceSlot(dst!, 2)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 6n), 64)), 63n), 64))
			$.sliceElems(dst!)[$.sliceSlot(dst!, 3)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(val, 63n), 64))

			src = $.goSlice(src, 3, undefined)
			dst = $.goSlice(dst, 4, undefined)
		}

		// Add the remaining small block (if any).
		switch ($.sliceLen(src)) {
			case 0:
			{
				return
				break
			}
			case 1:
			{
				let val = $.uint($.uint64Shl($.uint($.arrayIndex(src!, 0), 64), 16n), 64)
				$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 18n), 64)), 63n), 64))
				$.sliceElems(dst!)[$.sliceSlot(dst!, 1)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 12n), 64)), 63n), 64))
				if ((enc$ as Encoding).padChar != -1) {
					$.sliceElems(dst!)[$.sliceSlot(dst!, 2)] = $.uint((enc$ as Encoding).padChar, 8)
					$.sliceElems(dst!)[$.sliceSlot(dst!, 3)] = $.uint((enc$ as Encoding).padChar, 8)
				}
				break
			}
			case 2:
			{
				let val = $.uint($.uint64Or(($.uint($.uint64Shl($.uint($.arrayIndex(src!, 0), 64), 16n), 64)), ($.uint($.uint64Shl($.uint($.arrayIndex(src!, 1), 64), 8n), 64))), 64)
				$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 18n), 64)), 63n), 64))
				$.sliceElems(dst!)[$.sliceSlot(dst!, 1)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 12n), 64)), 63n), 64))
				$.sliceElems(dst!)[$.sliceSlot(dst!, 2)] = $.arrayIndex((enc$ as Encoding).encode, $.uint($.uint64And(($.uint($.uint64Shr(val, 6n), 64)), 63n), 64))
				if ((enc$ as Encoding).padChar != -1) {
					$.sliceElems(dst!)[$.sliceSlot(dst!, 3)] = $.uint((enc$ as Encoding).padChar, 8)
				}
				break
			}
		}
	}

	public EncodeToString(src: $.Slice<number>): string {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		let buf: $.Slice<number> = $.makeSlice<number>((enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).EncodedLen($.sliceLen(src)) : Encoding.prototype.EncodedLen.call(enc, $.sliceLen(src))), undefined, "byte")
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoding).Encode(buf, src) : Encoding.prototype.Encode.call(enc, buf, src))
		return $.bytesToString(buf)
	}

	public EncodedLen(n: number): number {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		if ($.pointerValue<Encoding>(enc).padChar == -1) {
			return ((globalThis.Math.trunc(n / 3)) * 4) + (globalThis.Math.trunc((((n % 3) * 8) + 5) / 6))
		}
		return (globalThis.Math.trunc((n + 2) / 3)) * 4
	}

	public Strict(): Encoding | $.VarRef<Encoding> | null {
		let enc = $.varRef(this);
		enc.value.strict = true
		return enc
	}

	public WithPadding(padding: number): Encoding | $.VarRef<Encoding> | null {
		let enc = $.varRef(this);
		switch ((true as boolean)) {
			case (((padding < -1) || (padding == 13)) || (padding == 10)) || (padding > 0xff):
			{
				$.panic("invalid padding")
				break
			}
			case (padding != -1) && ($.arrayIndex(enc.value.decodeMap, $.uint(padding, 8)) != 255):
			{
				$.panic("padding contained in alphabet")
				break
			}
		}
		enc.value.padChar = padding
		return enc
	}

	public decodeQuantum(dst: $.Slice<number>, src: $.Slice<number>, si: number): [number, number, $.GoError] {
		const enc: Encoding | $.VarRef<Encoding> | null = this;
		let nsi: number = 0
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const enc$: Encoding = enc == null ? $.pointerTarget<Encoding>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoding>(enc)
		// Decode quantum using the base64 alphabet
		let dbuf: Uint8Array = $.arrayValue(new Uint8Array(4))
		let dlen = 4;

		// Lift the nil check outside of the loop.
		;(enc$ as Encoding).decodeMap

		for (let __goscriptSliceWindow1 = $.sliceRange(src), j = 0; j < 4; j++) {
			if (__goscriptSliceWindow1.length == si) {
				switch ((true as boolean)) {
					case j == 0:
					{
						return [si, 0, null]
						break
					}
					case j == 1:
					case (enc$ as Encoding).padChar != -1:
					{
						return [si, 0, $.namedValueInterfaceValue<$.GoError>($.int64(si - j), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))]
						break
					}
				}
				dlen = j
				break
			}
			let _in = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, si)] as number)
			si++

			let out = $.arrayIndex((enc$ as Encoding).decodeMap, _in)
			if (out != 0xff) {
				dbuf[j] = out
				continue
			}

			if ((_in == 10) || (_in == 13)) {
				j--
				continue
			}

			if ($.int(_in, 32) != (enc$ as Encoding).padChar) {
				return [si, 0, $.namedValueInterfaceValue<$.GoError>($.int64(si - 1), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))]
			}

			// We've reached the end and there's padding
			switch (j) {
				case 0:
				case 1:
				{
					return [si, 0, $.namedValueInterfaceValue<$.GoError>($.int64(si - 1), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))]
					break
				}
				case 2:
				{
					while ((si < __goscriptSliceWindow1.length) && ((((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, si)] as number) == 10) || (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, si)] as number) == 13))) {
						si++
					}
					if (si == __goscriptSliceWindow1.length) {
						// not enough padding
						return [si, 0, $.namedValueInterfaceValue<$.GoError>($.int64(__goscriptSliceWindow1.length), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))]
					}
					if ($.int(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, si)] as number), 32) != (enc$ as Encoding).padChar) {
						// incorrect padding
						return [si, 0, $.namedValueInterfaceValue<$.GoError>($.int64(si - 1), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))]
					}

					si++
					break
				}
			}

			// skip over newlines
			while ((si < __goscriptSliceWindow1.length) && ((((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, si)] as number) == 10) || (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, si)] as number) == 13))) {
				si++
			}
			if (si < __goscriptSliceWindow1.length) {
				// trailing garbage
				err = $.namedValueInterfaceValue<$.GoError>($.int64(si), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))
			}
			dlen = j
			break
		}

		// Convert 4x 6bit source bytes into 3 bytes
		let val = $.uint($.uint64Or(($.uint($.uint64Or(($.uint($.uint64Or(($.uint($.uint64Shl($.uint($.arrayIndex(dbuf, 0), 64), 18n), 64)), ($.uint($.uint64Shl($.uint($.arrayIndex(dbuf, 1), 64), 12n), 64))), 64)), ($.uint($.uint64Shl($.uint($.arrayIndex(dbuf, 2), 64), 6n), 64))), 64)), $.uint($.arrayIndex(dbuf, 3), 64)), 64)
		let __goscriptAssign0_0: number = $.uint($.uint($.uint64Shr(val, 0n), 64), 8)
		let __goscriptAssign0_1: number = $.uint($.uint($.uint64Shr(val, 8n), 64), 8)
		let __goscriptAssign0_2: number = $.uint($.uint($.uint64Shr(val, 16n), 64), 8)
		dbuf[2] = __goscriptAssign0_0
		dbuf[1] = __goscriptAssign0_1
		dbuf[0] = __goscriptAssign0_2
		switch (dlen) {
			case 4:
			{
				$.sliceElems(dst!)[$.sliceSlot(dst!, 2)] = $.arrayIndex(dbuf, 2)
				dbuf[2] = 0
			}
			case 3:
			{
				$.sliceElems(dst!)[$.sliceSlot(dst!, 1)] = $.arrayIndex(dbuf, 1)
				if ((enc$ as Encoding).strict && ($.arrayIndex(dbuf, 2) != 0)) {
					return [si, 0, $.namedValueInterfaceValue<$.GoError>($.int64(si - 1), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))]
				}
				dbuf[1] = 0
			}
			case 2:
			{
				$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.arrayIndex(dbuf, 0)
				if ((enc$ as Encoding).strict && (($.arrayIndex(dbuf, 1) != 0) || ($.arrayIndex(dbuf, 2) != 0))) {
					return [si, 0, $.namedValueInterfaceValue<$.GoError>($.int64(si - 2), "base64.CorruptInputError", {"Error": CorruptInputError_Error}, /* @__PURE__ */ $.basicType("int64", "base64.CorruptInputError"))]
				}
				break
			}
		}

		return [si, dlen - 1, err]
	}

	static __typeInfo = $.registerStructType(
		"base64.Encoding",
		() => new Encoding(),
		() => [$.methodSignature("AppendDecode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("AppendEncode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Decode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("DecodeString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("DecodedLen", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("EncodeToString", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("EncodedLen", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Strict", [], [/* @__PURE__ */ $.pointerType("base64.Encoding")]), $.methodSignature("WithPadding", [["padding", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.pointerType("base64.Encoding")]), $.methodSignature("decodeQuantum", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["si", /* @__PURE__ */ $.basicType("int")]], [["nsi", /* @__PURE__ */ $.basicType("int")], ["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		Encoding,
		() => [/* @__PURE__ */ $.structField("encode", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [0], 0, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("decodeMap", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 256), [1], 64, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("padChar", /* @__PURE__ */ $.basicType("int32"), [2], 320, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("strict", /* @__PURE__ */ $.basicType("bool"), [3], 324, false, { pkgPath: "encoding/base64" })]
	)
}

export class encoder {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get enc(): Encoding | $.VarRef<Encoding> | null {
		return this._fields.enc
	}

	public set enc(value: Encoding | $.VarRef<Encoding> | null) {
		this._fields.enc = value
	}

	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get nbuf(): number {
		return this._fields.nbuf
	}

	public set nbuf(value: number) {
		this._fields.nbuf = value
	}

	public get out(): Uint8Array {
		return this._fields.out
	}

	public set out(value: Uint8Array) {
		this._fields.out = value
	}

	public _fields: {
		err: $.GoError
		enc: Encoding | $.VarRef<Encoding> | null
		w: io.Writer | null
		buf: Uint8Array
		nbuf: number
		out: Uint8Array
	}

	constructor(init?: Partial<{err?: $.GoError, enc?: Encoding | $.VarRef<Encoding> | null, w?: io.Writer | null, buf?: Uint8Array, nbuf?: number, out?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			enc: init?.enc ?? (null! as Encoding | $.VarRef<Encoding> | null),
			w: init?.w ?? (null! as io.Writer | null),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 3)) : $.arrayValue(new Uint8Array(3)),
			nbuf: init?.nbuf ?? (0 as number),
			out: init?.out !== undefined ? $.cloneArrayValue(init.out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024)) : $.arrayValue(new Uint8Array(1024))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encoder {
		return new encoder(this, true)
	}

	public __goscriptAssign(source: encoder): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.enc = values.enc
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 3))
		target.nbuf = values.nbuf
		target.out = $.assignFieldValue(target.out, values.out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024))
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		// If there's anything left in the buffer, flush it out
		if (((e$ as encoder).err == null) && ((e$ as encoder).nbuf > 0)) {
			Encoding.prototype.Encode.call((e$ as encoder).enc, $.goSlice((e$ as encoder).out, undefined, undefined), $.goSlice((e$ as encoder).buf, undefined, (e$ as encoder).nbuf))
			let __goscriptTuple4: any = await $.pointerValue<Exclude<io.Writer, null>>((e$ as encoder).w).Write($.goSlice((e$ as encoder).out, undefined, Encoding.prototype.EncodedLen.call((e$ as encoder).enc, (e$ as encoder).nbuf)));
			;(e$ as encoder).err = __goscriptTuple4[1];
			;(e$ as encoder).nbuf = 0
		}
		return (e$ as encoder).err
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let e: encoder | $.VarRef<encoder> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		if ((e$ as encoder).err != null) {
			return [0, (e$ as encoder).err]
		}

		// Leading fringe.
		if ((e$ as encoder).nbuf > 0) {
			let i: number = 0
			for (i = 0; (i < $.sliceLen(p)) && ((e$ as encoder).nbuf < 3); i++) {
				;(e$ as encoder).buf[(e$ as encoder).nbuf] = $.arrayIndex(p!, i);
				;(e$ as encoder).nbuf++
			}
			n = n + (i)
			p = $.goSlice(p, i, undefined)
			if ((e$ as encoder).nbuf < 3) {
				return [n, err]
			}
			Encoding.prototype.Encode.call((e$ as encoder).enc, $.goSlice((e$ as encoder).out, undefined, undefined), $.goSlice((e$ as encoder).buf, undefined, undefined))
			{
				let __goscriptTuple5: any = await $.pointerValue<Exclude<io.Writer, null>>((e$ as encoder).w).Write($.goSlice((e$ as encoder).out, undefined, 4));
				;(e$ as encoder).err = __goscriptTuple5[1]
				if ((e$ as encoder).err != null) {
					return [n, (e$ as encoder).err]
				}
			}
			;(e$ as encoder).nbuf = 0
		}

		// Large interior chunks.
		while ($.sliceLen(p) >= 3) {
			let nn = 768
			if (nn > $.sliceLen(p)) {
				nn = $.sliceLen(p)
				nn = nn - (nn % 3)
			}
			Encoding.prototype.Encode.call((e$ as encoder).enc, $.goSlice((e$ as encoder).out, undefined, undefined), $.goSlice(p, undefined, nn))
			{
				let __goscriptTuple6: any = await $.pointerValue<Exclude<io.Writer, null>>((e$ as encoder).w).Write($.goSlice((e$ as encoder).out, 0, (globalThis.Math.trunc(nn / 3)) * 4));
				;(e$ as encoder).err = __goscriptTuple6[1]
				if ((e$ as encoder).err != null) {
					return [n, (e$ as encoder).err]
				}
			}
			n = n + (nn)
			p = $.goSlice(p, nn, undefined)
		}

		// Trailing fringe.
		$.copy($.goSlice((e$ as encoder).buf, undefined, undefined), p);
		;(e$ as encoder).nbuf = $.sliceLen(p)
		n = n + ($.sliceLen(p))
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"base64.encoder",
		() => new encoder(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		encoder,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("enc", /* @__PURE__ */ $.pointerType("base64.Encoding"), [1], 16, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("w", "io.Writer", [2], 24, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 3), [3], 40, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("nbuf", /* @__PURE__ */ $.basicType("int"), [4], 48, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("out", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024), [5], 56, false, { pkgPath: "encoding/base64" })]
	)
}

export class decoder {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get readErr(): $.GoError {
		return this._fields.readErr
	}

	public set readErr(value: $.GoError) {
		this._fields.readErr = value
	}

	public get enc(): Encoding | $.VarRef<Encoding> | null {
		return this._fields.enc
	}

	public set enc(value: Encoding | $.VarRef<Encoding> | null) {
		this._fields.enc = value
	}

	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get nbuf(): number {
		return this._fields.nbuf
	}

	public set nbuf(value: number) {
		this._fields.nbuf = value
	}

	public get out(): $.Slice<number> {
		return this._fields.out
	}

	public set out(value: $.Slice<number>) {
		this._fields.out = value
	}

	public get outbuf(): Uint8Array {
		return this._fields.outbuf
	}

	public set outbuf(value: Uint8Array) {
		this._fields.outbuf = value
	}

	public _fields: {
		err: $.GoError
		readErr: $.GoError
		enc: Encoding | $.VarRef<Encoding> | null
		r: io.Reader | null
		buf: Uint8Array
		nbuf: number
		out: $.Slice<number>
		outbuf: Uint8Array
	}

	constructor(init?: Partial<{err?: $.GoError, readErr?: $.GoError, enc?: Encoding | $.VarRef<Encoding> | null, r?: io.Reader | null, buf?: Uint8Array, nbuf?: number, out?: $.Slice<number>, outbuf?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			readErr: init?.readErr ?? (null! as $.GoError),
			enc: init?.enc ?? (null! as Encoding | $.VarRef<Encoding> | null),
			r: init?.r ?? (null! as io.Reader | null),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024)) : $.arrayValue(new Uint8Array(1024)),
			nbuf: init?.nbuf ?? (0 as number),
			out: init?.out ?? (null! as $.Slice<number>),
			outbuf: init?.outbuf !== undefined ? $.cloneArrayValue(init.outbuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 768)) : $.arrayValue(new Uint8Array(768))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decoder {
		return new decoder(this, true)
	}

	public __goscriptAssign(source: decoder): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.readErr = $.assignFieldValue(target.readErr, values.readErr, "error")
		target.enc = values.enc
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024))
		target.nbuf = values.nbuf
		target.out = values.out
		target.outbuf = $.assignFieldValue(target.outbuf, values.outbuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 768))
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		// Use leftover decoded output from last read.
		if ($.sliceLen((d$ as decoder).out) > 0) {
			n = $.copy(p, (d$ as decoder).out);
			;(d$ as decoder).out = $.goSlice((d$ as decoder).out, n, undefined)
			return [n, null]
		}

		if ((d$ as decoder).err != null) {
			return [0, (d$ as decoder).err]
		}

		// This code assumes that d.r strips supported whitespace ('\r' and '\n').

		// Refill buffer.
		while (((d$ as decoder).nbuf < 4) && ((d$ as decoder).readErr == null)) {
			let nn = (globalThis.Math.trunc($.sliceLen(p) / 3)) * 4
			if (nn < 4) {
				nn = 4
			}
			if (nn > 1024) {
				nn = 1024
			}
			let __goscriptTuple7: any = await $.pointerValue<Exclude<io.Reader, null>>((d$ as decoder).r).Read($.goSlice((d$ as decoder).buf, (d$ as decoder).nbuf, nn))
			nn = __goscriptTuple7[0];
			;(d$ as decoder).readErr = __goscriptTuple7[1];
			;(d$ as decoder).nbuf = (d$ as decoder).nbuf + (nn)
		}

		if ((d$ as decoder).nbuf < 4) {
			if (($.pointerValue<Encoding>((d$ as decoder).enc).padChar == -1) && ((d$ as decoder).nbuf > 0)) {
				// Decode final fragment, without padding.
				let nw: number = 0
				let __goscriptTuple8: any = Encoding.prototype.Decode.call((d$ as decoder).enc, $.goSlice((d$ as decoder).outbuf, undefined, undefined), $.goSlice((d$ as decoder).buf, undefined, (d$ as decoder).nbuf))
				nw = __goscriptTuple8[0];
				;(d$ as decoder).err = __goscriptTuple8[1];
				;(d$ as decoder).nbuf = 0;
				;(d$ as decoder).out = $.goSlice((d$ as decoder).outbuf, undefined, nw)
				n = $.copy(p, (d$ as decoder).out);
				;(d$ as decoder).out = $.goSlice((d$ as decoder).out, n, undefined)
				if ((n > 0) || (($.sliceLen(p) == 0) && ($.sliceLen((d$ as decoder).out) > 0))) {
					return [n, null]
				}
				if ((d$ as decoder).err != null) {
					return [0, (d$ as decoder).err]
				}
			}
			;(d$ as decoder).err = (d$ as decoder).readErr
			if (($.comparableEqual((d$ as decoder).err, io.EOF)) && ((d$ as decoder).nbuf > 0)) {
				;(d$ as decoder).err = io.ErrUnexpectedEOF
			}
			return [0, (d$ as decoder).err]
		}

		// Decode chunk into p, or d.out and then p if p is too small.
		let nr = (globalThis.Math.trunc((d$ as decoder).nbuf / 4)) * 4
		let nw = (globalThis.Math.trunc((d$ as decoder).nbuf / 4)) * 3
		if (nw > $.sliceLen(p)) {
			let __goscriptTuple9: any = Encoding.prototype.Decode.call((d$ as decoder).enc, $.goSlice((d$ as decoder).outbuf, undefined, undefined), $.goSlice((d$ as decoder).buf, undefined, nr))
			nw = __goscriptTuple9[0];
			;(d$ as decoder).err = __goscriptTuple9[1];
			;(d$ as decoder).out = $.goSlice((d$ as decoder).outbuf, undefined, nw)
			n = $.copy(p, (d$ as decoder).out);
			;(d$ as decoder).out = $.goSlice((d$ as decoder).out, n, undefined)
		} else {
			let __goscriptTuple10: any = Encoding.prototype.Decode.call((d$ as decoder).enc, p, $.goSlice((d$ as decoder).buf, undefined, nr))
			n = __goscriptTuple10[0];
			;(d$ as decoder).err = __goscriptTuple10[1]
		}
		;(d$ as decoder).nbuf = (d$ as decoder).nbuf - (nr)
		$.copy($.goSlice((d$ as decoder).buf, undefined, (d$ as decoder).nbuf), $.goSlice((d$ as decoder).buf, nr, undefined))
		return [n, (d$ as decoder).err]
	}

	static __typeInfo = $.registerStructType(
		"base64.decoder",
		() => new decoder(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		decoder,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("readErr", "error", [1], 16, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("enc", /* @__PURE__ */ $.pointerType("base64.Encoding"), [2], 32, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("r", "io.Reader", [3], 40, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024), [4], 56, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("nbuf", /* @__PURE__ */ $.basicType("int"), [5], 1080, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 1088, false, { pkgPath: "encoding/base64" }), /* @__PURE__ */ $.structField("outbuf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 768), [7], 1112, false, { pkgPath: "encoding/base64" })]
	)
}

export class newlineFilteringReader {
	public get wrapped(): io.Reader | null {
		return this._fields.wrapped
	}

	public set wrapped(value: io.Reader | null) {
		this._fields.wrapped = value
	}

	public _fields: {
		wrapped: io.Reader | null
	}

	constructor(init?: Partial<{wrapped?: io.Reader | null}>, __goscriptValue?: boolean) {
		this._fields = {
			wrapped: init?.wrapped ?? (null! as io.Reader | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): newlineFilteringReader {
		return new newlineFilteringReader(this, true)
	}

	public __goscriptAssign(source: newlineFilteringReader): void {
		const target = this._fields
		const values = source._fields
		target.wrapped = $.assignFieldValue(target.wrapped, values.wrapped, "io.Reader")
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const r: newlineFilteringReader | $.VarRef<newlineFilteringReader> | null = this;
		const r$: newlineFilteringReader = r == null ? $.pointerTarget<newlineFilteringReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<newlineFilteringReader>(r)
		let [n, err] = await $.pointerValue<Exclude<io.Reader, null>>((r$ as newlineFilteringReader).wrapped).Read(p)
		for (let __goscriptSliceWindow3 = $.sliceRange(p); n > 0; ) {
			let offset = 0
			for (let __goscriptRangeTarget0 = $.goSlice(p, undefined, n), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
				if ((b != 13) && (b != 10)) {
					if (i != offset) {
						;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, offset)] = b
					}
					offset++
				}
			}
			if (offset > 0) {
				return [offset, err]
			}
			// Previous buffer entirely whitespace, read again
			let __goscriptTuple11: any = await $.pointerValue<Exclude<io.Reader, null>>((r$ as newlineFilteringReader).wrapped).Read(p)
			n = __goscriptTuple11[0]
			err = __goscriptTuple11[1]
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"base64.newlineFilteringReader",
		() => new newlineFilteringReader(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		newlineFilteringReader,
		() => [/* @__PURE__ */ $.structField("wrapped", "io.Reader", [0], 0, false, { pkgPath: "encoding/base64" })]
	)
}

export const StdPadding: number = 61

export const NoPadding: number = -1

export const decodeMapInitialize: string = "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"

export const invalidIndex: number = 255

export function NewEncoding(encoder: string): Encoding | $.VarRef<Encoding> | null {
	if ($.stringLen(encoder) != 64) {
		$.panic("encoding alphabet is not 64-bytes long")
	}

	let e: Encoding | $.VarRef<Encoding> | null = new Encoding()
	let e$: Encoding = e == null ? $.pointerTarget<Encoding>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoding>(e);
	;(e$ as Encoding).padChar = 61
	$.copy($.goSlice((e$ as Encoding).encode, undefined, undefined), encoder)
	$.copy($.goSlice((e$ as Encoding).decodeMap, undefined, undefined), "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff")

	for (let i = 0; i < $.stringLen(encoder); i++) {
		// Note: While we document that the alphabet cannot contain
		// the padding character, we do not enforce it since we do not know
		// if the caller intends to switch the padding from StdPadding later.
		switch ((true as boolean)) {
			case ($.indexString(encoder, i) == 10) || ($.indexString(encoder, i) == 13):
			{
				$.panic("encoding alphabet contains newline character")
				break
			}
			case $.arrayIndex((e$ as Encoding).decodeMap, $.indexString(encoder, i)) != 255:
			{
				$.panic("encoding alphabet includes duplicate symbols")
				break
			}
		}
		;(e$ as Encoding).decodeMap[$.indexString(encoder, i)] = $.uint(i, 8)
	}
	return e
}

export let StdEncoding: Encoding | $.VarRef<Encoding> | null = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")

export function __goscript_set_StdEncoding(__goscriptValue: Encoding | $.VarRef<Encoding> | null): void {
	StdEncoding = __goscriptValue
}

export let URLEncoding: Encoding | $.VarRef<Encoding> | null = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_")

export function __goscript_set_URLEncoding(__goscriptValue: Encoding | $.VarRef<Encoding> | null): void {
	URLEncoding = __goscriptValue
}

export let RawStdEncoding: Encoding | $.VarRef<Encoding> | null = $.markAsStructValue($.cloneStructValue($.pointerValue<Encoding>(StdEncoding))).WithPadding(-1)

export function __goscript_set_RawStdEncoding(__goscriptValue: Encoding | $.VarRef<Encoding> | null): void {
	RawStdEncoding = __goscriptValue
}

export let RawURLEncoding: Encoding | $.VarRef<Encoding> | null = $.markAsStructValue($.cloneStructValue($.pointerValue<Encoding>(URLEncoding))).WithPadding(-1)

export function __goscript_set_RawURLEncoding(__goscriptValue: Encoding | $.VarRef<Encoding> | null): void {
	RawURLEncoding = __goscriptValue
}

export function NewEncoder(enc: Encoding | $.VarRef<Encoding> | null, w: io.Writer | null): io.WriteCloser | null {
	return $.interfaceValue<io.WriteCloser | null>(new encoder({enc: enc, w: w}), "*base64.encoder", /* @__PURE__ */ $.pointerType("base64.encoder"))
}

export function CorruptInputError_Error(e: CorruptInputError): string {
	return $.concatString("illegal base64 data at input byte ", strconv.FormatInt($.int64(e), 10))
}

export function assemble32(n1: number, n2: number, n3: number, n4: number): [number, boolean] {
	let dn: number = 0
	let ok: boolean = false
	// Check that all the digits are valid. If any of them was 0xff, their
	// bitwise OR will be 0xff.
	if ($.uint((((n1 | n2) | n3) | n4), 8) == 0xff) {
		return [0, false]
	}
	return [$.uint(((((($.uint(n1, 32) << 26) >>> 0)) | ((($.uint(n2, 32) << 20) >>> 0))) | ((($.uint(n3, 32) << 14) >>> 0))) | ((($.uint(n4, 32) << 8) >>> 0)), 32), true]
}

export function assemble64(n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number): [bigint, boolean] {
	let dn: bigint = 0n
	let ok: boolean = false
	// Check that all the digits are valid. If any of them was 0xff, their
	// bitwise OR will be 0xff.
	if ($.uint((((((((n1 | n2) | n3) | n4) | n5) | n6) | n7) | n8), 8) == 0xff) {
		return [0n, false]
	}
	return [$.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Mul($.uint64(n1), (2 ** 58))), ($.uint64Mul($.uint64(n2), (2 ** 52))))), ($.uint64Mul($.uint64(n3), (2 ** 46))))), ($.uint64Mul($.uint64(n4), (2 ** 40))))), ($.uint64Mul($.uint64(n5), (2 ** 34))))), ($.uint64Shl($.uint64(n6), 28n)))), ($.uint64Shl($.uint64(n7), 22n)))), ($.uint64Shl($.uint64(n8), 16n))), true]
}

export function NewDecoder(enc: Encoding | $.VarRef<Encoding> | null, r: io.Reader | null): io.Reader | null {
	return $.interfaceValue<io.Reader | null>(new decoder({enc: enc, r: $.interfaceValue<io.Reader | null>(new newlineFilteringReader({wrapped: r}), "*base64.newlineFilteringReader", /* @__PURE__ */ $.pointerType("base64.newlineFilteringReader"))}), "*base64.decoder", /* @__PURE__ */ $.pointerType("base64.decoder"))
}

export function decodedLen(n: number, padChar: number): number {
	if (padChar == -1) {
		// Unpadded data may end with partial block of 2-3 characters.
		return ((globalThis.Math.trunc(n / 4)) * 3) + (globalThis.Math.trunc(((n % 4) * 6) / 8))
	}
	// Padded base64 should always be a multiple of 4 characters in length.
	return (globalThis.Math.trunc(n / 4)) * 3
}
