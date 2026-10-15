// Generated file based on parse.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as time from "@goscript/time/index.js"

import * as fs from "@goscript/io/fs/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/time/index.js"
import "@goscript/io/fs/index.js"

export class file {
	public get file(): os.File | $.VarRef<os.File> | null {
		return this._fields.file
	}

	public set file(value: os.File | $.VarRef<os.File> | null) {
		this._fields.file = value
	}

	public get data(): $.Slice<number> {
		return this._fields.data
	}

	public set data(value: $.Slice<number>) {
		this._fields.data = value
	}

	public get atEOF(): boolean {
		return this._fields.atEOF
	}

	public set atEOF(value: boolean) {
		this._fields.atEOF = value
	}

	public _fields: {
		file: os.File | $.VarRef<os.File> | null
		data: $.Slice<number>
		atEOF: boolean
	}

	constructor(init?: Partial<{file?: os.File | $.VarRef<os.File> | null, data?: $.Slice<number>, atEOF?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			file: init?.file ?? (null! as os.File | $.VarRef<os.File> | null),
			data: init?.data ?? (null! as $.Slice<number>),
			atEOF: init?.atEOF ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): file {
		return new file(this, true)
	}

	public __goscriptAssign(source: file): void {
		const target = this._fields
		const values = source._fields
		target.file = values.file
		target.data = values.data
		target.atEOF = values.atEOF
	}

	public async close(): globalThis.Promise<void> {
		const f: file | $.VarRef<file> | null = this;
		await os.File.prototype.Close.call($.pointerValue<os.File>($.pointerValue<file>(f).file))
	}

	public getLineFromData(): [string, boolean] {
		let f: file | $.VarRef<file> | null = this;
		let s: string = ""
		let ok: boolean = false
		const f$: file = f == null ? $.pointerTarget<file>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<file>(f)
		let data: $.Slice<number> = (f$ as file).data
		let i = 0
		for (i = 0; i < $.sliceLen(data); i++) {
			if ($.arrayIndex(data!, i) == 10) {
				s = $.bytesToString($.goSlice(data, 0, i))
				ok = true
				// move data
				i++
				let n = $.sliceLen(data) - i
				$.copyByteRanges(data, 0, undefined, data, i, undefined);
				;(f$ as file).data = $.goSlice(data, 0, n)
				return [s, ok]
			}
		}
		if ((f$ as file).atEOF && ($.sliceLen((f$ as file).data) > 0)) {
			// EOF, return all we have
			s = $.bytesToString(data);
			;(f$ as file).data = $.goSlice((f$ as file).data, 0, 0)
			ok = true
		}
		return [s, ok]
	}

	public async readLine(): globalThis.Promise<[string, boolean]> {
		let f: file | $.VarRef<file> | null = this;
		let s: string = ""
		let ok: boolean = false
		const f$: file = f == null ? $.pointerTarget<file>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<file>(f)
		{
			let __goscriptTuple0: any = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as file).getLineFromData() : file.prototype.getLineFromData.call(f))
			s = __goscriptTuple0[0]
			ok = __goscriptTuple0[1]
			if (ok) {
				return [s, ok]
			}
		}
		if ($.sliceLen((f$ as file).data) < $.cap((f$ as file).data)) {
			let ln = $.sliceLen((f$ as file).data)
			let [n, err] = await io.ReadFull($.pointerValueOrNil($.interfaceValue<io.Reader | null>((f$ as file).file, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, $.goSlice((f$ as file).data, ln, $.cap((f$ as file).data)))
			if (n >= 0) {
				;(f$ as file).data = $.goSlice((f$ as file).data, 0, ln + n)
			}
			if (($.comparableEqual(err, io.EOF)) || ($.comparableEqual(err, io.ErrUnexpectedEOF))) {
				;(f$ as file).atEOF = true
			}
		}
		let __goscriptTuple1: any = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as file).getLineFromData() : file.prototype.getLineFromData.call(f))
		s = __goscriptTuple1[0]
		ok = __goscriptTuple1[1]
		return [s, ok]
	}

	public async stat(): globalThis.Promise<[time.Time, bigint, $.GoError]> {
		const f: file | $.VarRef<file> | null = this;
		let mtime: time.Time = $.markAsStructValue(new time.Time())
		let size: bigint = 0n
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple2: any = await os.File.prototype.Stat.call($.pointerValue<os.File>($.pointerValue<file>(f).file))
		let st = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [$.markAsStructValue(new time.Time()), 0n, err]
		}
		return [$.markAsStructValue($.cloneStructValue(((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(st)).ModTime(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))), (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(st)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null]
	}

	static __typeInfo = $.registerStructType(
		"net.file",
		() => new file(),
		() => [$.methodSignature("close", [], [], true), $.methodSignature("getLineFromData", [], [["s", /* @__PURE__ */ $.basicType("string")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("readLine", [], [["s", /* @__PURE__ */ $.basicType("string")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("stat", [], [["mtime", "time.Time"], ["size", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]], true)],
		file,
		() => [/* @__PURE__ */ $.structField("file", /* @__PURE__ */ $.pointerType("os.File"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("atEOF", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "net" })]
	)
}

export const big: number = 16777215

export async function open(name: string): globalThis.Promise<[file | $.VarRef<file> | null, $.GoError]> {
	let __goscriptTuple3: any = await os.Open(name)
	let fd: os.File | $.VarRef<os.File> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	return [new file({file: fd, data: $.makeSlice<number>(0, 64 * 1024, "byte"), atEOF: false}), null]
}

export async function stat(name: string): globalThis.Promise<[time.Time, bigint, $.GoError]> {
	let mtime: time.Time = $.markAsStructValue(new time.Time())
	let size: bigint = 0n
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple4: any = await os.Stat(name)
	let st = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [$.markAsStructValue(new time.Time()), 0n, err]
	}
	return [$.markAsStructValue($.cloneStructValue(((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(st)).ModTime(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))), (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(st)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null]
}

export function countAnyByte(s: string, t: string): number {
	let n = 0
	for (let i = 0; i < $.stringLen(s); i++) {
		if (bytealg.IndexByteString(t, $.indexString(s, i)) >= 0) {
			n++
		}
	}
	return n
}

export function splitAtBytes(s: string, t: string): $.Slice<string> {
	let a: $.Slice<string> = $.makeSlice<string>(1 + countAnyByte(s, t), undefined, "string")
	let n = 0
	let last = 0
	for (let __goscriptSliceWindow1 = $.sliceRange(a), i = 0; i < $.stringLen(s); i++) {
		if (bytealg.IndexByteString(t, $.indexString(s, i)) >= 0) {
			if (last < i) {
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, n)] = $.sliceStringOrBytes(s, last, i)
				n++
			}
			last = i + 1
		}
	}
	if (last < $.stringLen(s)) {
		$.sliceElems(a!)[$.sliceSlot(a!, n)] = $.sliceStringOrBytes(s, last, undefined)
		n++
	}
	return $.goSlice(a, 0, n)
}

export function getFields(s: string): $.Slice<string> {
	return splitAtBytes(s, " \r\t\n")
}

export function dtoi(s: string): [number, number, boolean] {
	let n: number = 0
	let i: number = 0
	let ok: boolean = false
	n = 0
	for (i = 0; ((i < $.stringLen(s)) && (48 <= $.indexString(s, i))) && ($.indexString(s, i) <= 57); i++) {
		n = (n * 10) + $.int($.uint((($.indexString(s, i) - 48) & 0xff), 8))
		if (n >= 16777215) {
			return [16777215, i, false]
		}
	}
	if (i == 0) {
		return [0, 0, false]
	}
	return [n, i, true]
}

export function xtoi(s: string): [number, number, boolean] {
	let n: number = 0
	let i: number = 0
	let ok: boolean = false
	n = 0
	for (i = 0; i < $.stringLen(s); i++) {
		if ((48 <= $.indexString(s, i)) && ($.indexString(s, i) <= 57)) {
			n = n * (16)
			n = n + ($.int($.uint((($.indexString(s, i) - 48) & 0xff), 8)))
		} else {
			if ((97 <= $.indexString(s, i)) && ($.indexString(s, i) <= 102)) {
				n = n * (16)
				n = n + ($.int($.uint((($.indexString(s, i) - 97) & 0xff), 8)) + 10)
			} else {
				if ((65 <= $.indexString(s, i)) && ($.indexString(s, i) <= 70)) {
					n = n * (16)
					n = n + ($.int($.uint((($.indexString(s, i) - 65) & 0xff), 8)) + 10)
				} else {
					break
				}
			}
		}
		if (n >= 16777215) {
			return [0, i, false]
		}
	}
	if (i == 0) {
		return [0, i, false]
	}
	return [n, i, true]
}

export function xtoi2(s: string, e: number): [number, boolean] {
	if (($.stringLen(s) > 2) && ($.indexString(s, 2) != e)) {
		return [0, false]
	}
	let [n, ei, ok] = xtoi($.sliceStringOrBytes(s, undefined, 2))
	return [$.uint(n, 8), ok && (ei == 2)]
}

export function hasUpperCase(s: string): boolean {
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const i = __goscriptRunes0.index
		if ((65 <= $.indexString(s, i)) && ($.indexString(s, i) <= 90)) {
			return true
		}
	}
	return false
}

export function lowerASCIIBytes(x: $.Slice<number>): void {
	for (let __goscriptRangeTarget0 = x, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
		if ((65 <= b) && (b <= 90)) {
			;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = $.uint((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] + (32), 8)
		}
	}
}

export function lowerASCII(b: number): number {
	if ((65 <= b) && (b <= 90)) {
		return $.uint(((b + (((97 - 65) & 0xff))) & 0xff), 8)
	}
	return b
}

export function trimSpace(x: string): string {
	while (($.stringLen(x) > 0) && isSpace($.indexString(x, 0))) {
		x = $.sliceStringOrBytes(x, 1, undefined)
	}
	while (($.stringLen(x) > 0) && isSpace($.indexString(x, $.stringLen(x) - 1))) {
		x = $.sliceStringOrBytes(x, undefined, $.stringLen(x) - 1)
	}
	return x
}

export function isSpace(b: number): boolean {
	return (((b == 32) || (b == 9)) || (b == 10)) || (b == 13)
}

export function removeComment(line: string): string {
	{
		let i = bytealg.IndexByteString(line, 35)
		if (i != -1) {
			return $.sliceStringOrBytes(line, undefined, i)
		}
	}
	return line
}

export async function foreachField(x: string, fn: ((field: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	x = trimSpace(x)
	while ($.stringLen(x) > 0) {
		let sp: number = bytealg.IndexByteString(x, 32)
		if (sp == -1) {
			return fn!(x)
		}
		{
			let field = trimSpace($.sliceStringOrBytes(x, undefined, sp))
			if ($.stringLen(field) > 0) {
				{
					let err = (__goscriptAwait = fn!(field), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						return err
					}
				}
			}
		}
		x = trimSpace($.sliceStringOrBytes(x, sp + 1, undefined))
	}
	return null
}

export function stringsHasSuffixFold(s: string, suffix: string): boolean {
	return ($.stringLen(s) >= $.stringLen(suffix)) && stringsEqualFold($.sliceStringOrBytes(s, $.stringLen(s) - $.stringLen(suffix), undefined), suffix)
}

export function stringsEqualFold(s: string, t: string): boolean {
	if ($.stringLen(s) != $.stringLen(t)) {
		return false
	}
	for (let i = 0; i < $.stringLen(s); i++) {
		if (lowerASCII($.indexString(s, i)) != lowerASCII($.indexString(t, i))) {
			return false
		}
	}
	return true
}

var __goscriptAwait: any
