// Generated file based on writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/bufio/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("net/textproto", ["textproto.Writer", "textproto.dotWriter"])

export class Writer {
	public get W(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.W
	}

	public set W(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.W = value
	}

	public get dot(): dotWriter | $.VarRef<dotWriter> | null {
		return this._fields.dot
	}

	public set dot(value: dotWriter | $.VarRef<dotWriter> | null) {
		this._fields.dot = value
	}

	public _fields: {
		W: bufio.Writer | $.VarRef<bufio.Writer> | null
		dot: dotWriter | $.VarRef<dotWriter> | null
	}

	constructor(init?: Partial<{W?: bufio.Writer | $.VarRef<bufio.Writer> | null, dot?: dotWriter | $.VarRef<dotWriter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			W: init?.W ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null),
			dot: init?.dot ?? (null! as dotWriter | $.VarRef<dotWriter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Writer {
		return new Writer(this, true)
	}

	public __goscriptAssign(source: Writer): void {
		const target = this._fields
		const values = source._fields
		target.W = values.W
		target.dot = values.dot
	}

	public async DotWriter(): globalThis.Promise<io.WriteCloser | null> {
		let w: Writer | $.VarRef<Writer> | null = this;
		const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as Writer).closeDot() : Writer.prototype.closeDot.call(w));
		;(w$ as Writer).dot = new dotWriter({w: w})
		return $.interfaceValue<io.WriteCloser | null>((w$ as Writer).dot, "*textproto.dotWriter", /* @__PURE__ */ $.pointerType("textproto.dotWriter"))
	}

	public async PrintfLine(format: string, args: $.Slice<any>): globalThis.Promise<$.GoError> {
		const w: Writer | $.VarRef<Writer> | null = this;
		const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as Writer).closeDot() : Writer.prototype.closeDot.call(w))
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>((w$ as Writer).W, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")))!, format, ...(args ?? []))
		await bufio.Writer.prototype.Write.call((w$ as Writer).W, crnl)
		return bufio.Writer.prototype.Flush.call((w$ as Writer).W)
	}

	public async closeDot(): globalThis.Promise<void> {
		const w: Writer | $.VarRef<Writer> | null = this;
		const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
		if ((w$ as Writer).dot != null) {
			await dotWriter.prototype.Close.call((w$ as Writer).dot)
		}
	}

	static __typeInfo = $.registerStructType(
		"textproto.Writer",
		() => new Writer(),
		() => [$.methodSignature("DotWriter", [], ["io.WriteCloser"], true), $.methodSignature("PrintfLine", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("closeDot", [], [], true)],
		Writer,
		() => [/* @__PURE__ */ $.structField("W", /* @__PURE__ */ $.pointerType("bufio.Writer"), [0], 0, true), /* @__PURE__ */ $.structField("dot", /* @__PURE__ */ $.pointerType("textproto.dotWriter"), [1], 8, false, { pkgPath: "net/textproto" })]
	)
}

export class dotWriter {
	public get w(): Writer | $.VarRef<Writer> | null {
		return this._fields.w
	}

	public set w(value: Writer | $.VarRef<Writer> | null) {
		this._fields.w = value
	}

	public get state(): number {
		return this._fields.state
	}

	public set state(value: number) {
		this._fields.state = value
	}

	public _fields: {
		w: Writer | $.VarRef<Writer> | null
		state: number
	}

	constructor(init?: Partial<{w?: Writer | $.VarRef<Writer> | null, state?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			w: init?.w ?? (null! as Writer | $.VarRef<Writer> | null),
			state: init?.state ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dotWriter {
		return new dotWriter(this, true)
	}

	public __goscriptAssign(source: dotWriter): void {
		const target = this._fields
		const values = source._fields
		target.w = values.w
		target.state = values.state
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let d: dotWriter | $.VarRef<dotWriter> | null = this;
		const d$: dotWriter = d == null ? $.pointerTarget<dotWriter>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dotWriter>(d)
		if ($.pointerEqual($.pointerValue<Writer>((d$ as dotWriter).w).dot, d)) {
			$.pointerValue<Writer>((d$ as dotWriter).w).dot = null
		}
		let bw: bufio.Writer | $.VarRef<bufio.Writer> | null = $.pointerValue<Writer>((d$ as dotWriter).w).W
		switch ((d$ as dotWriter).state) {
			default:
			{
				await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).WriteByte(13) : bufio.Writer.prototype.WriteByte.call(bw, 13))
			}
			case 2:
			{
				await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).WriteByte(10) : bufio.Writer.prototype.WriteByte.call(bw, 10))
			}
			case 1:
			{
				await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).Write(dotcrnl) : bufio.Writer.prototype.Write.call(bw, dotcrnl))
				break
			}
		}
		return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(bw))
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let d: dotWriter | $.VarRef<dotWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: dotWriter = d == null ? $.pointerTarget<dotWriter>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dotWriter>(d)
		let bw: bufio.Writer | $.VarRef<bufio.Writer> | null = $.pointerValue<Writer>((d$ as dotWriter).w).W
		for (let __goscriptSliceWindow0 = $.sliceRange(b); n < __goscriptSliceWindow0.length; ) {
			let c = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, n)] as number)
			switch ((d$ as dotWriter).state) {
				case 0:
				case 1:
				{
					;(d$ as dotWriter).state = 3
					if (c == 46) {
						// escape leading dot
						await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).WriteByte(46) : bufio.Writer.prototype.WriteByte.call(bw, 46))
					}
				}
				case 3:
				{
					if (c == 13) {
						;(d$ as dotWriter).state = 2
					}
					if (c == 10) {
						await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).WriteByte(13) : bufio.Writer.prototype.WriteByte.call(bw, 13));
						;(d$ as dotWriter).state = 1
					}
					break
				}
				case 2:
				{
					;(d$ as dotWriter).state = 3
					if (c == 10) {
						;(d$ as dotWriter).state = 1
					}
					break
				}
			}
			{
				err = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).WriteByte(c) : bufio.Writer.prototype.WriteByte.call(bw, c))
				if (err != null) {
					break
				}
			}
			n++
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"textproto.dotWriter",
		() => new dotWriter(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		dotWriter,
		() => [/* @__PURE__ */ $.structField("w", /* @__PURE__ */ $.pointerType("textproto.Writer"), [0], 0, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "net/textproto" })]
	)
}

export const wstateBegin: number = 0

export const wstateBeginLine: number = 1

export const wstateCR: number = 2

export const wstateData: number = 3

export function NewWriter(w: bufio.Writer | $.VarRef<bufio.Writer> | null): Writer | $.VarRef<Writer> | null {
	return new Writer({W: w})
}

export let crnl: $.Slice<number> = new Uint8Array([13, 10]) as $.Slice<number>

export function __goscript_set_crnl(__goscriptValue: $.Slice<number>): void {
	crnl = __goscriptValue
}

export let dotcrnl: $.Slice<number> = new Uint8Array([46, 13, 10]) as $.Slice<number>

export function __goscript_set_dotcrnl(__goscriptValue: $.Slice<number>): void {
	dotcrnl = __goscriptValue
}
