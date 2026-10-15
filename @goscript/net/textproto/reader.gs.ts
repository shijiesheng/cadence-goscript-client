// Generated file based on reader.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_textproto from "./textproto.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "./header.gs.ts"
import "./textproto.gs.ts"

$.registerTypePackagePath("net/textproto", ["textproto.Reader", "textproto.dotReader"])

export class Reader {
	public get R(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.R
	}

	public set R(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.R = value
	}

	public get dot(): dotReader | $.VarRef<dotReader> | null {
		return this._fields.dot
	}

	public set dot(value: dotReader | $.VarRef<dotReader> | null) {
		this._fields.dot = value
	}

	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public _fields: {
		R: bufio.Reader | $.VarRef<bufio.Reader> | null
		dot: dotReader | $.VarRef<dotReader> | null
		buf: $.Slice<number>
	}

	constructor(init?: Partial<{R?: bufio.Reader | $.VarRef<bufio.Reader> | null, dot?: dotReader | $.VarRef<dotReader> | null, buf?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			R: init?.R ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			dot: init?.dot ?? (null! as dotReader | $.VarRef<dotReader> | null),
			buf: init?.buf ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Reader {
		return new Reader(this, true)
	}

	public __goscriptAssign(source: Reader): void {
		const target = this._fields
		const values = source._fields
		target.R = values.R
		target.dot = values.dot
		target.buf = values.buf
	}

	public async DotReader(): globalThis.Promise<io.Reader | null> {
		let r: Reader | $.VarRef<Reader> | null = this;
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).closeDot() : Reader.prototype.closeDot.call(r));
		;(r$ as Reader).dot = new dotReader({r: r})
		return $.interfaceValue<io.Reader | null>((r$ as Reader).dot, "*textproto.dotReader", /* @__PURE__ */ $.pointerType("textproto.dotReader"))
	}

	public async ReadCodeLine(expectCode: number): globalThis.Promise<[number, string, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let code: number = 0
		let message: string = ""
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple0: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readCodeLine(expectCode) : Reader.prototype.readCodeLine.call(r, expectCode))
		code = __goscriptTuple0[0]
		let continued = __goscriptTuple0[1]
		message = __goscriptTuple0[2]
		err = __goscriptTuple0[3]
		if ((err == null) && continued) {
			err = $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("unexpected multi-line response: %q", message), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))
		}
		return [code, message, err]
	}

	public async ReadContinuedLine(): globalThis.Promise<[string, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let __goscriptTuple1: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readContinuedLineSlice(-1n, noValidation) : Reader.prototype.readContinuedLineSlice.call(r, -1n, noValidation))
		let line: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		return [$.bytesToString(line), err]
	}

	public async ReadContinuedLineBytes(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let __goscriptTuple2: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readContinuedLineSlice(-1n, noValidation) : Reader.prototype.readContinuedLineSlice.call(r, -1n, noValidation))
		let line: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (line != null) {
			line = bytes.Clone(line)
		}
		return [line, err]
	}

	public async ReadDotBytes(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		return io.ReadAll($.pointerValueOrNil(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).DotReader() : Reader.prototype.DotReader.call(r)))!)
	}

	public async ReadDotLines(): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		// We could use ReadDotBytes and then Split it,
		// but reading a line at a time avoids needing a
		// large contiguous block of memory and is simpler.
		let v: $.Slice<string> = null! as $.Slice<string>
		let err: $.GoError = null! as $.GoError
		while (true) {
			let line: string = ""
			let __goscriptTuple3: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).ReadLine() : Reader.prototype.ReadLine.call(r))
			line = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				if ($.comparableEqual(err, io.EOF)) {
					err = io.ErrUnexpectedEOF
				}
				break
			}

			// Dot by itself marks end; otherwise cut one dot.
			if (($.stringLen(line) > 0) && ($.indexString(line, 0) == 46)) {
				if ($.stringLen(line) == 1) {
					break
				}
				line = $.sliceStringOrBytes(line, 1, undefined)
			}
			v = $.appendOne(v, line)
		}
		return [v, err]
	}

	public async ReadLine(): globalThis.Promise<[string, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let __goscriptTuple4: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readLineSlice(-1n) : Reader.prototype.readLineSlice.call(r, -1n))
		let line: $.Slice<number> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		return [$.bytesToString(line), err]
	}

	public async ReadLineBytes(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let __goscriptTuple5: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readLineSlice(-1n) : Reader.prototype.readLineSlice.call(r, -1n))
		let line: $.Slice<number> = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (line != null) {
			line = bytes.Clone(line)
		}
		return [line, err]
	}

	public async ReadMIMEHeader(): globalThis.Promise<[__goscript_header.MIMEHeader, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		return readMIMEHeader(r, 9223372036854775807n, 9223372036854775807n)
	}

	public async ReadResponse(expectCode: number): globalThis.Promise<[number, string, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let code: number = 0
		let message: string = ""
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple6: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readCodeLine(expectCode) : Reader.prototype.readCodeLine.call(r, expectCode))
		code = __goscriptTuple6[0]
		let continued = __goscriptTuple6[1]
		let first = __goscriptTuple6[2]
		err = __goscriptTuple6[3]
		let multi = continued
		let messageBuilder: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		messageBuilder.value.WriteString(first)
		while (continued) {
			let [line, __goscriptShadow0] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).ReadLine() : Reader.prototype.ReadLine.call(r))
			if (__goscriptShadow0 != null) {
				return [0, "", __goscriptShadow0]
			}

			let code2: number = 0
			let moreMessage: string = ""
			let __goscriptTuple7: any = await parseCodeLine(line, 0)
			code2 = __goscriptTuple7[0]
			continued = __goscriptTuple7[1]
			moreMessage = __goscriptTuple7[2]
			__goscriptShadow0 = __goscriptTuple7[3]
			if ((__goscriptShadow0 != null) || (code2 != code)) {
				messageBuilder.value.WriteByte(10)
				messageBuilder.value.WriteString(strings.TrimRight(line, "\r\n"))
				continued = true
				continue
			}
			messageBuilder.value.WriteByte(10)
			messageBuilder.value.WriteString(moreMessage)
		}
		message = messageBuilder.value.String()
		if (((err != null) && multi) && (!$.stringEqual(message, ""))) {
			// replace one line error message with all lines (full message)
			err = $.interfaceValue<$.GoError>(new __goscript_textproto.Error({Code: code, Msg: message}), "*textproto.Error", /* @__PURE__ */ $.pointerType("textproto.Error"))
		}
		return [code, message, err]
	}

	public async closeDot(): globalThis.Promise<void> {
		const r: Reader | $.VarRef<Reader> | null = this;
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		if ((r$ as Reader).dot == null) {
			return
		}
		let buf: $.Slice<number> = $.makeSlice<number>(128, undefined, "byte")
		while ((r$ as Reader).dot != null) {
			// When Read reaches EOF or an error,
			// it will set r.dot == nil.
			await dotReader.prototype.Read.call((r$ as Reader).dot, buf)
		}
	}

	public async readCodeLine(expectCode: number): globalThis.Promise<[number, boolean, string, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let code: number = 0
		let continued: boolean = false
		let message: string = ""
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple8: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).ReadLine() : Reader.prototype.ReadLine.call(r))
		let line = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [code, continued, message, err]
		}
		return parseCodeLine(line, expectCode)
	}

	public async readContinuedLineSlice(lim: bigint, validateFirstLine: ((_p0: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let r: Reader | $.VarRef<Reader> | null = this;
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		if (validateFirstLine == null) {
			return [null, fmt.Errorf("missing validateFirstLine func")]
		}

		// Read the first line.
		let __goscriptTuple9: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readLineSlice(lim) : Reader.prototype.readLineSlice.call(r, lim))
		let line: $.Slice<number> = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		if ($.sliceLen(line) == 0) {
			return [line, null]
		}

		{
			let __goscriptShadow1 = (__goscriptAwait = validateFirstLine!(line), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow1 != null) {
				return [null, __goscriptShadow1]
			}
		}

		// Optimistically assume that we have started to buffer the next line
		// and it starts with an ASCII letter (the next header key), or a blank
		// line, so we can avoid copying that buffered data around in memory
		// and skipping over non-existent whitespace.
		if (bufio.Reader.prototype.Buffered.call((r$ as Reader).R) > 1) {
			let __goscriptTuple10: any = await bufio.Reader.prototype.Peek.call((r$ as Reader).R, 2)
			let peek: $.Slice<number> = __goscriptTuple10[0]
			if ((($.sliceLen(peek) > 0) && (__goscript_textproto.isASCIILetter($.arrayIndex(peek!, 0)) || ($.arrayIndex(peek!, 0) == 10))) || ((($.sliceLen(peek) == 2) && ($.arrayIndex(peek!, 0) == 13)) && ($.arrayIndex(peek!, 1) == 10))) {
				return [trim(line), null]
			}
		}

		// ReadByte or the next readLineSlice will flush the read buffer;
		// copy the slice into buf.
		;(r$ as Reader).buf = $.appendSlice($.goSlice((r$ as Reader).buf, undefined, 0), trim(line), $.byteSliceHint)

		if (lim < 0n) {
			lim = 9223372036854775807n
		}
		lim = $.int64Sub(lim, $.int64($.sliceLen((r$ as Reader).buf)))

		// Read continuation lines.
		while (await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).skipSpace() : Reader.prototype.skipSpace.call(r)) > 0) {
			;(r$ as Reader).buf = $.append((r$ as Reader).buf, $.uint(32, 8), $.byteSliceHint)
			if ($.int64($.sliceLen((r$ as Reader).buf)) >= lim) {
				return [null, errMessageTooLarge]
			}
			let __goscriptTuple11: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readLineSlice($.int64Sub(lim, $.int64($.sliceLen((r$ as Reader).buf)))) : Reader.prototype.readLineSlice.call(r, $.int64Sub(lim, $.int64($.sliceLen((r$ as Reader).buf)))))
			let __goscriptShadow2: $.Slice<number> = __goscriptTuple11[0]
			let __goscriptShadow3 = __goscriptTuple11[1]
			if (__goscriptShadow3 != null) {
				return [null, __goscriptShadow3]
			}
			;(r$ as Reader).buf = $.appendSlice((r$ as Reader).buf, trim(__goscriptShadow2), $.byteSliceHint)
		}
		return [(r$ as Reader).buf, null]
	}

	public async readLineSlice(lim: bigint): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const r: Reader | $.VarRef<Reader> | null = this;
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).closeDot() : Reader.prototype.closeDot.call(r))
		let line: $.Slice<number> = null! as $.Slice<number>
		while (true) {
			let __goscriptTuple12: any = await bufio.Reader.prototype.ReadLine.call($.pointerValue<Reader>(r).R)
			let l: $.Slice<number> = __goscriptTuple12[0]
			let more = __goscriptTuple12[1]
			let err = __goscriptTuple12[2]
			if (err != null) {
				return [null, err]
			}
			if ((lim >= 0n) && (($.int64Add($.int64($.sliceLen(line)), $.int64($.sliceLen(l)))) > lim)) {
				return [null, errMessageTooLarge]
			}
			// Avoid the copy if the first call produced a full line.
			if ((line == null) && !more) {
				return [l, null]
			}
			line = $.appendSlice(line, l, $.byteSliceHint)
			if (!more) {
				break
			}
		}
		return [line, null]
	}

	public async skipSpace(): globalThis.Promise<number> {
		const r: Reader | $.VarRef<Reader> | null = this;
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		let n = 0
		while (true) {
			let [c, err] = await bufio.Reader.prototype.ReadByte.call((r$ as Reader).R)
			if (err != null) {
				// Bufio will keep err until next read.
				break
			}
			if ((c != 32) && (c != 9)) {
				bufio.Reader.prototype.UnreadByte.call((r$ as Reader).R)
				break
			}
			n++
		}
		return n
	}

	public async upcomingHeaderKeys(): globalThis.Promise<number> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let n: number = 0
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		// Try to determine the 'hint' size.
		await bufio.Reader.prototype.Peek.call((r$ as Reader).R, 1)
		let s = bufio.Reader.prototype.Buffered.call((r$ as Reader).R)
		if (s == 0) {
			return n
		}
		let __goscriptTuple13: any = await bufio.Reader.prototype.Peek.call((r$ as Reader).R, s)
		let peek: $.Slice<number> = __goscriptTuple13[0]
		while (($.sliceLen(peek) > 0) && (n < 1000)) {
			let line: $.Slice<number> = null! as $.Slice<number>
			let __goscriptTuple14: any = bytes.Cut(peek, nl)
			line = __goscriptTuple14[0]
			peek = __goscriptTuple14[1]
			if (($.sliceLen(line) == 0) || (($.sliceLen(line) == 1) && ($.arrayIndex(line!, 0) == 13))) {
				// Blank line separating headers from the body.
				break
			}
			if (($.arrayIndex(line!, 0) == 32) || ($.arrayIndex(line!, 0) == 9)) {
				// Folded continuation of the previous line.
				continue
			}
			n++
		}
		return n
	}

	static __typeInfo = $.registerStructType(
		"textproto.Reader",
		() => new Reader(),
		() => [$.methodSignature("DotReader", [], ["io.Reader"], true), $.methodSignature("ReadCodeLine", [["expectCode", /* @__PURE__ */ $.basicType("int")]], [["code", /* @__PURE__ */ $.basicType("int")], ["message", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadContinuedLine", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadContinuedLineBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadDotBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadDotLines", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("ReadLine", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadLineBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadMIMEHeader", [], ["textproto.MIMEHeader", "error"], true), $.methodSignature("ReadResponse", [["expectCode", /* @__PURE__ */ $.basicType("int")]], [["code", /* @__PURE__ */ $.basicType("int")], ["message", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("closeDot", [], [], true), $.methodSignature("readCodeLine", [["expectCode", /* @__PURE__ */ $.basicType("int")]], [["code", /* @__PURE__ */ $.basicType("int")], ["continued", /* @__PURE__ */ $.basicType("bool")], ["message", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("readContinuedLineSlice", [["lim", /* @__PURE__ */ $.basicType("int64")], ["validateFirstLine", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("readLineSlice", [["lim", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("skipSpace", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("upcomingHeaderKeys", [], [["n", /* @__PURE__ */ $.basicType("int")]], true)],
		Reader,
		() => [/* @__PURE__ */ $.structField("R", /* @__PURE__ */ $.pointerType("bufio.Reader"), [0], 0, true), /* @__PURE__ */ $.structField("dot", /* @__PURE__ */ $.pointerType("textproto.dotReader"), [1], 8, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "net/textproto" })]
	)
}

export class dotReader {
	public get r(): Reader | $.VarRef<Reader> | null {
		return this._fields.r
	}

	public set r(value: Reader | $.VarRef<Reader> | null) {
		this._fields.r = value
	}

	public get state(): number {
		return this._fields.state
	}

	public set state(value: number) {
		this._fields.state = value
	}

	public _fields: {
		r: Reader | $.VarRef<Reader> | null
		state: number
	}

	constructor(init?: Partial<{r?: Reader | $.VarRef<Reader> | null, state?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as Reader | $.VarRef<Reader> | null),
			state: init?.state ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dotReader {
		return new dotReader(this, true)
	}

	public __goscriptAssign(source: dotReader): void {
		const target = this._fields
		const values = source._fields
		target.r = values.r
		target.state = values.state
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let d: dotReader | $.VarRef<dotReader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: dotReader = d == null ? $.pointerTarget<dotReader>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dotReader>(d)
		// Run data through a simple state machine to
		// elide leading dots, rewrite trailing \r\n into \n,
		// and detect ending .\r\n line.
		const stateBeginLine: number = 0
		const stateDot: number = 1
		const stateDotCR: number = 2
		const stateCR: number = 3
		const stateData: number = 4
		const stateEOF: number = 5
		let br: bufio.Reader | $.VarRef<bufio.Reader> | null = $.pointerValue<Reader>((d$ as dotReader).r).R
		for (let __goscriptSliceWindow2 = $.sliceRange(b); (n < __goscriptSliceWindow2.length) && ((d$ as dotReader).state != 5); ) {
			let c: number = 0
			let __goscriptTuple16: any = await (br !== null && (br as any).__isVarRef !== true && (br as any).__goValue === undefined ? ((br as any) as bufio.Reader).ReadByte() : bufio.Reader.prototype.ReadByte.call(br))
			c = __goscriptTuple16[0]
			err = __goscriptTuple16[1]
			if (err != null) {
				if ($.comparableEqual(err, io.EOF)) {
					err = io.ErrUnexpectedEOF
				}
				break
			}
			switch ((d$ as dotReader).state) {
				case 0:
				{
					if (c == 46) {
						;(d$ as dotReader).state = 1
						continue
					}
					if (c == 13) {
						;(d$ as dotReader).state = 3
						continue
					}
					;(d$ as dotReader).state = 4
					break
				}
				case 1:
				{
					if (c == 13) {
						;(d$ as dotReader).state = 2
						continue
					}
					if (c == 10) {
						;(d$ as dotReader).state = 5
						continue
					}
					;(d$ as dotReader).state = 4
					break
				}
				case 2:
				{
					if (c == 10) {
						;(d$ as dotReader).state = 5
						continue
					}
					// Not part of .\r\n.
					// Consume leading dot and emit saved \r.
					void (br !== null && (br as any).__isVarRef !== true && (br as any).__goValue === undefined ? ((br as any) as bufio.Reader).UnreadByte() : bufio.Reader.prototype.UnreadByte.call(br))
					c = 13;
					;(d$ as dotReader).state = 4
					break
				}
				case 3:
				{
					if (c == 10) {
						;(d$ as dotReader).state = 0
						break
					}
					// Not part of \r\n. Emit saved \r
					void (br !== null && (br as any).__isVarRef !== true && (br as any).__goValue === undefined ? ((br as any) as bufio.Reader).UnreadByte() : bufio.Reader.prototype.UnreadByte.call(br))
					c = 13;
					;(d$ as dotReader).state = 4
					break
				}
				case 4:
				{
					if (c == 13) {
						;(d$ as dotReader).state = 3
						continue
					}
					if (c == 10) {
						;(d$ as dotReader).state = 0
					}
					break
				}
			}
			;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, n)] = c
			n++
		}
		if ((err == null) && ((d$ as dotReader).state == 5)) {
			err = io.EOF
		}
		if ((err != null) && ($.pointerEqual($.pointerValue<Reader>((d$ as dotReader).r).dot, d))) {
			$.pointerValue<Reader>((d$ as dotReader).r).dot = null
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"textproto.dotReader",
		() => new dotReader(),
		() => [$.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		dotReader,
		() => [/* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.pointerType("textproto.Reader"), [0], 0, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "net/textproto" })]
	)
}

export const toLower: number = 32

export let errMessageTooLarge: $.GoError = errors.New("message too large")

export function __goscript_set_errMessageTooLarge(__goscriptValue: $.GoError): void {
	errMessageTooLarge = __goscriptValue
}

export function NewReader(r: bufio.Reader | $.VarRef<bufio.Reader> | null): Reader | $.VarRef<Reader> | null {
	return new Reader({R: r})
}

export function trim(s: $.Slice<number>): $.Slice<number> {
	let i = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(s); (i < __goscriptSliceWindow0.length) && ((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) == 32) || (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) == 9)); ) {
		i++
	}
	s = $.goSlice(s, i, undefined)
	let n = $.sliceLen(s) - 1
	for (let __goscriptSliceWindow1 = $.sliceRange(s); (n >= 0) && ((((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, n)] as number) == 32) || (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, n)] as number) == 9)); ) {
		n--
	}
	return $.goSlice(s, undefined, n + 1)
}

export async function parseCodeLine(line: string, expectCode: number): globalThis.Promise<[number, boolean, string, $.GoError]> {
	let code: number = 0
	let continued: boolean = false
	let message: string = ""
	let err: $.GoError = null! as $.GoError
	if (($.stringLen(line) < 4) || (($.indexString(line, 3) != 32) && ($.indexString(line, 3) != 45))) {
		err = $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("short response: %q", line), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))
		return [code, continued, message, err]
	}
	continued = $.indexString(line, 3) == 45
	let __goscriptTuple15: any = strconv.Atoi($.sliceStringOrBytes(line, 0, 3))
	code = __goscriptTuple15[0]
	err = __goscriptTuple15[1]
	if ((err != null) || (code < 100)) {
		err = $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("invalid response code: %q", line), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))
		return [code, continued, message, err]
	}
	message = $.sliceStringOrBytes(line, 4, undefined)
	if (((((1 <= expectCode) && (expectCode < 10)) && ((globalThis.Math.trunc(code / 100)) != expectCode)) || (((10 <= expectCode) && (expectCode < 100)) && ((globalThis.Math.trunc(code / 10)) != expectCode))) || (((100 <= expectCode) && (expectCode < 1000)) && (code != expectCode))) {
		err = $.interfaceValue<$.GoError>(new __goscript_textproto.Error({Code: code, Msg: message}), "*textproto.Error", /* @__PURE__ */ $.pointerType("textproto.Error"))
	}
	return [code, continued, message, err]
}

export let colon: $.Slice<number> = new Uint8Array([58])

export function __goscript_set_colon(__goscriptValue: $.Slice<number>): void {
	colon = __goscriptValue
}

export async function readMIMEHeader(r: Reader | $.VarRef<Reader> | null, maxMemory: bigint, maxHeaders: bigint): globalThis.Promise<[__goscript_header.MIMEHeader, $.GoError]> {
	if (maxMemory < 0n) {
		return [null, errMessageTooLarge]
	}

	// Avoid lots of small slice allocations later by allocating one
	// large one ahead of time which we'll cut up into smaller
	// slices. If this isn't big enough later, we allocate small ones.
	let strs: $.Slice<string> = null! as $.Slice<string>
	let hint = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).upcomingHeaderKeys() : Reader.prototype.upcomingHeaderKeys.call(r))
	if (hint > 0) {
		if (hint > 1000) {
			hint = 1000
		}
		strs = $.makeSlice<string>(hint, undefined, "string")
	}

	let m: __goscript_header.MIMEHeader = $.makeMap<string, $.Slice<string>>()

	// The first line cannot start with a leading space.
	{
		let __goscriptTuple17: any = await bufio.Reader.prototype.Peek.call($.pointerValue<Reader>(r).R, 1)
		let buf: $.Slice<number> = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		if ((err == null) && (($.arrayIndex(buf!, 0) == 32) || ($.arrayIndex(buf!, 0) == 9))) {
			const errorLimit: number = 80
			let __goscriptTuple18: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readLineSlice(80n) : Reader.prototype.readLineSlice.call(r, 80n))
			let line: $.Slice<number> = __goscriptTuple18[0]
			let __goscriptShadow4 = __goscriptTuple18[1]
			if (__goscriptShadow4 != null) {
				return [m, __goscriptShadow4]
			}
			return [m, $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("malformed MIME header initial line: %q", $.interfaceValue(line, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))]
		}
	}

	while (true) {
		let __goscriptTuple19: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).readContinuedLineSlice(maxMemory, mustHaveFieldNameColon) : Reader.prototype.readContinuedLineSlice.call(r, maxMemory, mustHaveFieldNameColon))
		let kv: $.Slice<number> = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if ($.sliceLen(kv) == 0) {
			return [m, err]
		}

		// Key ends at first colon.
		let __goscriptTuple20: any = bytes.Cut(kv, colon)
		let k: $.Slice<number> = __goscriptTuple20[0]
		let v: $.Slice<number> = __goscriptTuple20[1]
		let ok = __goscriptTuple20[2]
		if (!ok) {
			return [m, $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("malformed MIME header line: %q", $.interfaceValue(kv, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))]
		}
		let __goscriptTuple21: any = await canonicalMIMEHeaderKey(k)
		let key = __goscriptTuple21[0]
		ok = __goscriptTuple21[1]
		if (!ok) {
			return [m, $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("malformed MIME header line: %q", $.interfaceValue(kv, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))]
		}
		for (let __goscriptRangeTarget0 = v, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let c = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			if (!validHeaderValueByte(c)) {
				return [m, $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("malformed MIME header line: %q", $.interfaceValue(kv, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))]
			}
		}

		maxHeaders--
		if (maxHeaders < 0n) {
			return [null, errMessageTooLarge]
		}

		// Skip initial spaces in value.
		let value = $.bytesToString(bytes.TrimLeft(v, " \t"))

		let vv: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(m, key, null)[0]
		if (vv == null) {
			// Account for per-entry overhead.
			// 200 bytes is based on benchmarks circa Go 1.20.
			const mapEntryOverhead: number = 200

			maxMemory = $.int64Sub(maxMemory, $.int64($.stringLen(key)))
			maxMemory = $.int64Sub(maxMemory, 200n)
		}
		maxMemory = $.int64Sub(maxMemory, $.int64($.stringLen(value)))
		if (maxMemory < 0n) {
			return [m, errMessageTooLarge]
		}
		if ((vv == null) && ($.sliceLen(strs) > 0)) {
			// More than likely this will be a single-element key.
			// Most headers aren't multi-valued.
			// Set the capacity on strs[0] to 1, so any future append
			// won't extend the slice into the other strings.
			let __goscriptAssign0_0: $.Slice<string> = $.goSlice(strs, undefined, 1, 1)
			let __goscriptAssign0_1: $.Slice<string> = $.goSlice(strs, 1, undefined)
			vv = __goscriptAssign0_0
			strs = __goscriptAssign0_1
			$.sliceElems(vv!)[$.sliceSlot(vv!, 0)] = value
			$.mapSet(m, key, vv)
		} else {
			$.mapSet(m, key, $.appendOne(vv, value))
		}

		if (err != null) {
			return [m, err]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function noValidation(_p0: $.Slice<number>): $.GoError {
	return null
}

export async function mustHaveFieldNameColon(line: $.Slice<number>): globalThis.Promise<$.GoError> {
	if (bytes.IndexByte(line, 58) < 0) {
		return $.namedValueInterfaceValue<$.GoError>(await fmt.Sprintf("malformed MIME header: missing colon: %q", $.interfaceValue(line, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), "textproto.ProtocolError", {"Error": __goscript_textproto.ProtocolError_Error}, /* @__PURE__ */ $.basicType("string", "textproto.ProtocolError"))
	}
	return null
}

export let nl: $.Slice<number> = new Uint8Array([10])

export function __goscript_set_nl(__goscriptValue: $.Slice<number>): void {
	nl = __goscriptValue
}

export async function CanonicalMIMEHeaderKey(s: string): globalThis.Promise<string> {
	// Quick check for canonical encoding.
	let upper = true
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		if (!validHeaderFieldByte(c)) {
			return s
		}
		if ((upper && (97 <= c)) && (c <= 122)) {
			let __goscriptTuple22: any = await canonicalMIMEHeaderKey($.stringToBytes(s))
			s = __goscriptTuple22[0]
			return s
		}
		if ((!upper && (65 <= c)) && (c <= 90)) {
			let __goscriptTuple23: any = await canonicalMIMEHeaderKey($.stringToBytes(s))
			s = __goscriptTuple23[0]
			return s
		}
		upper = c == 45
	}
	return s
}

export function validHeaderFieldByte(c: number): boolean {
	// mask is a 128-bit bitmap with 1s for allowed bytes,
	// so that the byte c can be tested with a shift and an and.
	// If c >= 128, then 1<<c and 1<<(c-64) will both be zero,
	// and this function will return false.
	const mask: number = 116972063611741436228934278030836105216
	return ($.uint64Or(($.uint64And(($.uint64Shl(1n, c)), 288068722172624896n)), ($.uint64And(($.uint64Shl(1n, (((c - 64) & 0xff)))), 6341068274398134270n)))) != 0n
}

export function validHeaderValueByte(c: number): boolean {
	// mask is a 128-bit bitmap with 1s for allowed bytes,
	// so that the byte c can be tested with a shift and an and.
	// If c >= 128, then 1<<c and 1<<(c-64) will both be zero.
	// Since this is the obs-text range, we invert the mask to
	// create a bitmap with 1s for disallowed bytes.
	const mask: number = 170141183460469231731687303711589138944
	return ($.uint64Or(($.uint64AndNot(($.uint64Shl(1n, c)), 18446744069414584832n)), ($.uint64AndNot(($.uint64Shl(1n, (((c - 64) & 0xff)))), 9223372036854775807n)))) == 0n
}

export async function canonicalMIMEHeaderKey(a: $.Slice<number>): globalThis.Promise<[string, boolean]> {
	let ok: boolean = false
	if ($.sliceLen(a) == 0) {
		return ["", false]
	}

	// See if a looks like a header key. If not, return it unchanged.
	let noCanon = false
	for (let __goscriptRangeTarget1 = a, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let c = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 8)
		if (validHeaderFieldByte(c)) {
			continue
		}
		// Don't canonicalize.
		if (c == 32) {
			// We accept invalid headers with a space before the
			// colon, but must not canonicalize them.
			// See https://go.dev/issue/34540.
			noCanon = true
			continue
		}
		return [$.bytesToString(a), false]
	}
	if (noCanon) {
		return [$.bytesToString(a), true]
	}

	let upper = true
	for (let __goscriptRangeTarget2 = a, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let c = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as number), 8)
		// Canonicalize: first letter upper case
		// and upper case after each dash.
		// (Host, User-Agent, If-Modified-Since).
		// MIME headers are ASCII only, so no Unicode issues.
		if ((upper && (97 <= c)) && (c <= 122)) {
			c = $.uint(c - (32), 8)
		} else {
			if ((!upper && (65 <= c)) && (c <= 90)) {
				c = $.uint(c + (32), 8)
			}
		}
		;(__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] = c
		upper = c == 45
	}
	await commonHeaderOnce.value.Do(initCommonHeader)
	// The compiler recognizes m[string(byteSlice)] as a special
	// case, so a copy of a's bytes into a new string does not
	// happen in this map lookup:
	{
		let v = $.mapGet<string, string, string>(commonHeader, $.bytesToString(a), "")[0]
		if (!$.stringEqual(v, "")) {
			return [v, true]
		}
	}
	return [$.bytesToString(a), true]
}

export let commonHeader: globalThis.Map<string, string> | null = null! as globalThis.Map<string, string> | null

export function __goscript_set_commonHeader(__goscriptValue: globalThis.Map<string, string> | null): void {
	commonHeader = __goscriptValue
}

export let commonHeaderOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_commonHeaderOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(commonHeaderOnce.value, __goscriptValue)
}

export function initCommonHeader(): void {
	commonHeader = $.makeMap<string, string>()
	for (let __goscriptRangeTarget3 = $.arrayToSlice<string>(["Accept", "Accept-Charset", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Cache-Control", "Cc", "Connection", "Content-Id", "Content-Language", "Content-Length", "Content-Transfer-Encoding", "Content-Type", "Cookie", "Date", "Dkim-Signature", "Etag", "Expires", "From", "Host", "If-Modified-Since", "If-None-Match", "In-Reply-To", "Last-Modified", "Location", "Message-Id", "Mime-Version", "Pragma", "Received", "Referer", "Return-Path", "Server", "Set-Cookie", "Subject", "To", "User-Agent", "Via", "X-Forwarded-For", "X-Imforwards", "X-Powered-By"]), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		$.mapSet(commonHeader, v, v)
	}
}

var __goscriptAwait: any
