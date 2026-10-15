// Generated file based on pem.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("encoding/pem", ["pem.Block", "pem.lineBreaker"])

export class Block {
	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	public get Headers(): globalThis.Map<string, string> | null {
		return this._fields.Headers
	}

	public set Headers(value: globalThis.Map<string, string> | null) {
		this._fields.Headers = value
	}

	public get Bytes(): $.Slice<number> {
		return this._fields.Bytes
	}

	public set Bytes(value: $.Slice<number>) {
		this._fields.Bytes = value
	}

	public _fields: {
		Type: string
		Headers: globalThis.Map<string, string> | null
		Bytes: $.Slice<number>
	}

	constructor(init?: Partial<{Type?: string, Headers?: globalThis.Map<string, string> | null, Bytes?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? ("" as string),
			Headers: init?.Headers ?? (null! as globalThis.Map<string, string> | null),
			Bytes: init?.Bytes ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Block {
		return new Block(this, true)
	}

	public __goscriptAssign(source: Block): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Headers = values.Headers
		target.Bytes = values.Bytes
	}

	static __typeInfo = $.registerStructType(
		"pem.Block",
		() => new Block(),
		() => [],
		Block,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Headers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 16, true), /* @__PURE__ */ $.structField("Bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true)]
	)
}

export class lineBreaker {
	public get line(): Uint8Array {
		return this._fields.line
	}

	public set line(value: Uint8Array) {
		this._fields.line = value
	}

	public get used(): number {
		return this._fields.used
	}

	public set used(value: number) {
		this._fields.used = value
	}

	public get out(): io.Writer | null {
		return this._fields.out
	}

	public set out(value: io.Writer | null) {
		this._fields.out = value
	}

	public _fields: {
		line: Uint8Array
		used: number
		out: io.Writer | null
	}

	constructor(init?: Partial<{line?: Uint8Array, used?: number, out?: io.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			line: init?.line !== undefined ? $.cloneArrayValue(init.line, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64)),
			used: init?.used ?? (0 as number),
			out: init?.out ?? (null! as io.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lineBreaker {
		return new lineBreaker(this, true)
	}

	public __goscriptAssign(source: lineBreaker): void {
		const target = this._fields
		const values = source._fields
		target.line = $.assignFieldValue(target.line, values.line, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
		target.used = values.used
		target.out = $.assignFieldValue(target.out, values.out, "io.Writer")
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const l: lineBreaker | $.VarRef<lineBreaker> | null = this;
		let err: $.GoError = null! as $.GoError
		const l$: lineBreaker = l == null ? $.pointerTarget<lineBreaker>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lineBreaker>(l)
		if ((l$ as lineBreaker).used > 0) {
			let __goscriptTuple5: any = await $.pointerValue<Exclude<io.Writer, null>>((l$ as lineBreaker).out).Write($.goSlice((l$ as lineBreaker).line, 0, (l$ as lineBreaker).used))
			err = __goscriptTuple5[1]
			if (err != null) {
				return err
			}
			let __goscriptTuple6: any = await $.pointerValue<Exclude<io.Writer, null>>((l$ as lineBreaker).out).Write(nl)
			err = __goscriptTuple6[1]
		}

		return err
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let l: lineBreaker | $.VarRef<lineBreaker> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const l$: lineBreaker = l == null ? $.pointerTarget<lineBreaker>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lineBreaker>(l)
		if (((l$ as lineBreaker).used + $.sliceLen(b)) < 64) {
			$.copy($.goSlice((l$ as lineBreaker).line, (l$ as lineBreaker).used, undefined), b);
			;(l$ as lineBreaker).used = (l$ as lineBreaker).used + ($.sliceLen(b))
			return [$.sliceLen(b), null]
		}

		let __goscriptTuple7: any = await $.pointerValue<Exclude<io.Writer, null>>((l$ as lineBreaker).out).Write($.goSlice((l$ as lineBreaker).line, 0, (l$ as lineBreaker).used))
		n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [n, err]
		}
		let excess = 64 - (l$ as lineBreaker).used;
		;(l$ as lineBreaker).used = 0

		let __goscriptTuple8: any = await $.pointerValue<Exclude<io.Writer, null>>((l$ as lineBreaker).out).Write($.goSlice(b, 0, excess))
		n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [n, err]
		}

		let __goscriptTuple9: any = await $.pointerValue<Exclude<io.Writer, null>>((l$ as lineBreaker).out).Write(nl)
		n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [n, err]
		}

		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lineBreaker).Write($.goSlice(b, excess, undefined)) : lineBreaker.prototype.Write.call(l, $.goSlice(b, excess, undefined)))
	}

	static __typeInfo = $.registerStructType(
		"pem.lineBreaker",
		() => new lineBreaker(),
		() => [$.methodSignature("Close", [], [["err", "error"]], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		lineBreaker,
		() => [/* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [0], 0, false, { pkgPath: "encoding/pem" }), /* @__PURE__ */ $.structField("used", /* @__PURE__ */ $.basicType("int"), [1], 64, false, { pkgPath: "encoding/pem" }), /* @__PURE__ */ $.structField("out", "io.Writer", [2], 72, false, { pkgPath: "encoding/pem" })]
	)
}

export const pemLineLength: number = 64

export function getLine(data: $.Slice<number>): [$.Slice<number>, $.Slice<number>, number] {
	let line: $.Slice<number> = null! as $.Slice<number>
	let rest: $.Slice<number> = null! as $.Slice<number>
	let consumed: number = 0
	let i = bytes.IndexByte(data, 10)
	let j: number = 0
	if (i < 0) {
		i = $.sliceLen(data)
		j = i
	} else {
		j = i + 1
		if ((i > 0) && ($.arrayIndex(data!, i - 1) == 13)) {
			i--
		}
	}
	return [bytes.TrimRight($.goSlice(data, 0, i), " \t"), $.goSlice(data, j, undefined), j]
}

export function removeSpacesAndTabs(data: $.Slice<number>): $.Slice<number> {
	if (!bytes.ContainsAny(data, " \t")) {
		// Fast path; most base64 data within PEM contains newlines, but
		// no spaces nor tabs. Skip the extra alloc and work.
		return data
	}
	let result: $.Slice<number> = $.makeSlice<number>($.sliceLen(data), undefined, "byte")
	let n = 0

	for (let __goscriptRangeTarget0 = data, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(result), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		if ((b == 32) || (b == 9)) {
			continue
		}
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] = b
		n++
	}

	return $.goSlice(result, 0, n)
}

export let pemStart: $.Slice<number> = new Uint8Array([10, 45, 45, 45, 45, 45, 66, 69, 71, 73, 78, 32])

export function __goscript_set_pemStart(__goscriptValue: $.Slice<number>): void {
	pemStart = __goscriptValue
}

export let pemEnd: $.Slice<number> = new Uint8Array([10, 45, 45, 45, 45, 45, 69, 78, 68, 32])

export function __goscript_set_pemEnd(__goscriptValue: $.Slice<number>): void {
	pemEnd = __goscriptValue
}

export let pemEndOfLine: $.Slice<number> = new Uint8Array([45, 45, 45, 45, 45])

export function __goscript_set_pemEndOfLine(__goscriptValue: $.Slice<number>): void {
	pemEndOfLine = __goscriptValue
}

export let colon: $.Slice<number> = new Uint8Array([58])

export function __goscript_set_colon(__goscriptValue: $.Slice<number>): void {
	colon = __goscriptValue
}

export function Decode(data: $.Slice<number>): [Block | $.VarRef<Block> | null, $.Slice<number>] {
	let p: Block | $.VarRef<Block> | null = null! as Block | $.VarRef<Block> | null
	let rest: $.Slice<number> = null! as $.Slice<number>
	// pemStart begins with a newline. However, at the very beginning of
	// the byte array, we'll accept the start string without it.
	rest = data

	let endTrailerIndex = 0
	while (true) {
		// If we've already tried parsing a block, skip past the END we already
		// saw.
		if ((endTrailerIndex < 0) || (endTrailerIndex > $.sliceLen(rest))) {
			return [null, data]
		}
		rest = $.goSlice(rest, endTrailerIndex, undefined)

		// Find the first END line, and then find the last BEGIN line before
		// the end line. This lets us skip any repeated BEGIN lines that don't
		// have a matching END.
		let endIndex = bytes.Index(rest, pemEnd)
		if (endIndex < 0) {
			return [null, data]
		}
		endTrailerIndex = endIndex + $.sliceLen(pemEnd)
		let beginIndex: number = bytes.LastIndex($.goSlice(rest, undefined, endIndex), $.goSlice(pemStart, 1, undefined))
		if ((beginIndex < 0) || ((beginIndex > 0) && ($.arrayIndex(rest!, beginIndex - 1) != 10))) {
			continue
		}
		rest = $.goSlice(rest, (beginIndex + $.sliceLen(pemStart)) - 1, undefined)
		endIndex = endIndex - ((beginIndex + $.sliceLen(pemStart)) - 1)
		endTrailerIndex = endTrailerIndex - ((beginIndex + $.sliceLen(pemStart)) - 1)

		let typeLine: $.Slice<number> = null! as $.Slice<number>
		let consumed: number = 0
		let __goscriptTuple0: any = getLine(rest)
		typeLine = __goscriptTuple0[0]
		rest = __goscriptTuple0[1]
		consumed = __goscriptTuple0[2]
		endIndex = endIndex - (consumed)
		endTrailerIndex = endTrailerIndex - (consumed)
		if (!bytes.HasSuffix(typeLine, pemEndOfLine)) {
			continue
		}
		typeLine = $.goSlice(typeLine, 0, $.sliceLen(typeLine) - $.sliceLen(pemEndOfLine))

		p = new Block({Headers: $.makeMap<string, string>(), Type: $.bytesToString(typeLine)})

		while (true) {
			// This loop terminates because getLine's second result is
			// always smaller than its argument.
			if ($.sliceLen(rest) == 0) {
				return [null, data]
			}
			let __goscriptTuple1: any = getLine(rest)
			let line: $.Slice<number> = __goscriptTuple1[0]
			let next: $.Slice<number> = __goscriptTuple1[1]
			let __goscriptShadow0 = __goscriptTuple1[2]

			let __goscriptTuple2: any = bytes.Cut(line, colon)
			let key: $.Slice<number> = __goscriptTuple2[0]
			let val: $.Slice<number> = __goscriptTuple2[1]
			let ok = __goscriptTuple2[2]
			if (!ok) {
				break
			}

			// TODO(agl): need to cope with values that spread across lines.
			key = bytes.TrimSpace(key)
			val = bytes.TrimSpace(val)
			$.mapSet($.pointerValue<Block>(p).Headers, $.bytesToString(key), $.bytesToString(val))
			rest = next
			endIndex = endIndex - (__goscriptShadow0)
			endTrailerIndex = endTrailerIndex - (__goscriptShadow0)
		}

		// If there were headers, there must be a newline between the headers
		// and the END line, so endIndex should be >= 0.
		if (($.len($.pointerValue<Block>(p).Headers) > 0) && (endIndex < 0)) {
			continue
		}

		// After the "-----" of the ending line, there should be the same type
		// and then a final five dashes.
		let endTrailer: $.Slice<number> = $.goSlice(rest, endTrailerIndex, undefined)
		let endTrailerLen = $.sliceLen(typeLine) + $.sliceLen(pemEndOfLine)
		if ($.sliceLen(endTrailer) < endTrailerLen) {
			continue
		}

		let restOfEndLine: $.Slice<number> = $.goSlice(endTrailer, endTrailerLen, undefined)
		endTrailer = $.goSlice(endTrailer, undefined, endTrailerLen)
		if (!bytes.HasPrefix(endTrailer, typeLine) || !bytes.HasSuffix(endTrailer, pemEndOfLine)) {
			continue
		}

		// The line must end with only whitespace.
		{
			let __goscriptTuple3: any = getLine(restOfEndLine)
			let s: $.Slice<number> = __goscriptTuple3[0]
			if ($.sliceLen(s) != 0) {
				continue
			}
		}

		$.pointerValue<Block>(p).Bytes = new Uint8Array([]) as $.Slice<number>
		if (endIndex > 0) {
			let base64Data: $.Slice<number> = removeSpacesAndTabs($.goSlice(rest, undefined, endIndex))
			$.pointerValue<Block>(p).Bytes = $.makeSlice<number>(base64.Encoding.prototype.DecodedLen.call(base64.StdEncoding, $.sliceLen(base64Data)), undefined, "byte")
			let [n, err] = base64.Encoding.prototype.Decode.call(base64.StdEncoding, $.pointerValue<Block>(p).Bytes, base64Data)
			if (err != null) {
				continue
			}
			$.pointerValue<Block>(p).Bytes = $.goSlice($.pointerValue<Block>(p).Bytes, undefined, n)
		}

		// the -1 is because we might have only matched pemEnd without the
		// leading newline if the PEM block was empty.
		let __goscriptTuple4: any = getLine($.goSlice(rest, (endIndex + $.sliceLen(pemEnd)) - 1, undefined))
		rest = __goscriptTuple4[1]
		return [p, rest]
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let nl: $.Slice<number> = new Uint8Array([10]) as $.Slice<number>

export function __goscript_set_nl(__goscriptValue: $.Slice<number>): void {
	nl = __goscriptValue
}

export async function writeHeader(out: io.Writer | null, k: string, v: string): globalThis.Promise<$.GoError> {
	let [, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(out)).Write($.stringToBytes($.concatString(($.concatString(($.concatString(k, ": ")), v)), "\n")))
	return err
}

export async function Encode(out: io.Writer | null, b: Block | $.VarRef<Block> | null): globalThis.Promise<$.GoError> {
	const b$: Block = b == null ? $.pointerTarget<Block>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Block>(b)
	// Check for invalid block before writing any output.
	for (const [k, __rangeValue] of (b$ as Block).Headers?.entries() ?? []) {
		if (strings.Contains(k, ":")) {
			return errors.New("pem: cannot encode a header key that contains a colon")
		}
	}

	// All errors below are relayed from underlying io.Writer,
	// so it is now safe to write data.

	{
		let [, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(out)).Write($.goSlice(pemStart, 1, undefined))
		if (err != null) {
			return err
		}
	}
	{
		let [, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(out)).Write($.stringToBytes($.concatString((b$ as Block).Type, "-----\n")))
		if (err != null) {
			return err
		}
	}

	if ($.len((b$ as Block).Headers) > 0) {
		const procType: string = "Proc-Type"
		let h: $.Slice<string> = $.makeSlice<string>(0, $.len((b$ as Block).Headers), "string")
		let hasProcType = false
		for (const [k, __rangeValue] of (b$ as Block).Headers?.entries() ?? []) {
			if ($.stringEqual(k, "Proc-Type")) {
				hasProcType = true
				continue
			}
			h = $.appendOne(h, k)
		}
		// The Proc-Type header must be written first.
		// See RFC 1421, section 4.6.1.1
		if (hasProcType) {
			{
				let err = await writeHeader(out, "Proc-Type", $.mapGet<string, string, string>((b$ as Block).Headers, "Proc-Type", "")[0])
				if (err != null) {
					return err
				}
			}
		}
		// For consistency of output, write other headers sorted by key.
		slices.Sort(h)
		for (let __goscriptRangeTarget1 = h, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			{
				let err = await writeHeader(out, k, $.mapGet<string, string, string>((b$ as Block).Headers, k, "")[0])
				if (err != null) {
					return err
				}
			}
		}
		{
			let [, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(out)).Write(nl)
			if (err != null) {
				return err
			}
		}
	}

	let breaker: $.VarRef<lineBreaker> = $.varRef(new lineBreaker(undefined, true))
	breaker.value.out = out

	let b64 = base64.NewEncoder(base64.StdEncoding, $.interfaceValue<io.Writer | null>(breaker, "*pem.lineBreaker", /* @__PURE__ */ $.pointerType("pem.lineBreaker")))
	{
		let [, err] = await (b64 !== null && (b64 as any).__isVarRef !== true && (b64 as any).__goValue === undefined ? (b64 as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(b64)).Write((b$ as Block).Bytes)
		if (err != null) {
			return err
		}
	}
	{
		let err = await (b64 !== null && (b64 as any).__isVarRef !== true && (b64 as any).__goValue === undefined ? (b64 as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(b64)).Close()
		if (err != null) {
			return err
		}
	}
	{
		let err = await breaker.value.Close()
		if (err != null) {
			return err
		}
	}

	{
		let [, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(out)).Write($.goSlice(pemEnd, 1, undefined))
		if (err != null) {
			return err
		}
	}
	let [, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(out)).Write($.stringToBytes($.concatString((b$ as Block).Type, "-----\n")))
	return err
}

export async function EncodeToMemory(b: Block | $.VarRef<Block> | null): globalThis.Promise<$.Slice<number>> {
	let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	{
		let err = await Encode($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), b)
		if (err != null) {
			return null
		}
	}
	return buf.value.Bytes()
}
