// Generated file based on textproto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as __goscript_header from "./header.gs.ts"

import * as __goscript_pipeline from "./pipeline.gs.ts"

import * as __goscript_reader from "./reader.gs.ts"

import * as __goscript_writer from "./writer.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "./pipeline.gs.ts"
import "./reader.gs.ts"
import "./writer.gs.ts"

$.registerTypePackagePath("net/textproto", ["textproto.Error", "textproto.ProtocolError", "textproto.Conn"])

export type ProtocolError = string

$.registerNamedValueType(
	"textproto.ProtocolError",
	{Error: (receiver: any, ...args: any[]) => (ProtocolError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*textproto.ProtocolError",
	{Error: (receiver: any, ...args: any[]) => (ProtocolError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Error {
	public get Code(): number {
		return this._fields.Code
	}

	public set Code(value: number) {
		this._fields.Code = value
	}

	public get Msg(): string {
		return this._fields.Msg
	}

	public set Msg(value: string) {
		this._fields.Msg = value
	}

	public _fields: {
		Code: number
		Msg: string
	}

	constructor(init?: Partial<{Code?: number, Msg?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Code: init?.Code ?? (0 as number),
			Msg: init?.Msg ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Error {
		return new Error(this, true)
	}

	public __goscriptAssign(source: Error): void {
		const target = this._fields
		const values = source._fields
		target.Code = values.Code
		target.Msg = values.Msg
	}

	public async Error(): globalThis.Promise<string> {
		const e: Error | $.VarRef<Error> | null = this;
		const e$: Error = e == null ? $.pointerTarget<Error>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Error>(e)
		return fmt.Sprintf("%03d %q", $.basicInterfaceValue((e$ as Error).Code, "int"), (e$ as Error).Msg)
	}

	static __typeInfo = $.registerStructType(
		"textproto.Error",
		() => new Error(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Error,
		() => [/* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Msg", /* @__PURE__ */ $.basicType("string"), [1], 8, true)]
	)
}

export class Conn {
	public get Reader(): __goscript_reader.Reader {
		return this._fields.Reader
	}

	public set Reader(value: __goscript_reader.Reader) {
		this._fields.Reader = value
	}

	public get Writer(): __goscript_writer.Writer {
		return this._fields.Writer
	}

	public set Writer(value: __goscript_writer.Writer) {
		this._fields.Writer = value
	}

	public get Pipeline(): __goscript_pipeline.Pipeline {
		return this._fields.Pipeline
	}

	public set Pipeline(value: __goscript_pipeline.Pipeline) {
		this._fields.Pipeline = value
	}

	public get conn(): io.ReadWriteCloser | null {
		return this._fields.conn
	}

	public set conn(value: io.ReadWriteCloser | null) {
		this._fields.conn = value
	}

	public _fields: {
		Reader: __goscript_reader.Reader
		Writer: __goscript_writer.Writer
		Pipeline: __goscript_pipeline.Pipeline
		conn: io.ReadWriteCloser | null
	}

	constructor(init?: Partial<{Reader?: __goscript_reader.Reader, Writer?: __goscript_writer.Writer, Pipeline?: __goscript_pipeline.Pipeline, conn?: io.ReadWriteCloser | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ? init.Reader.clone() : new __goscript_reader.Reader(undefined, true),
			Writer: init?.Writer ? init.Writer.clone() : new __goscript_writer.Writer(undefined, true),
			Pipeline: init?.Pipeline ? init.Pipeline.clone() : new __goscript_pipeline.Pipeline(undefined, true),
			conn: init?.conn ?? (null! as io.ReadWriteCloser | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Conn {
		return new Conn(this, true)
	}

	public __goscriptAssign(source: Conn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Reader, values.Reader)
		$.assignStruct(target.Writer, values.Writer)
		$.assignStruct(target.Pipeline, values.Pipeline)
		target.conn = $.assignFieldValue(target.conn, values.conn, "io.ReadWriteCloser")
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const c: Conn | $.VarRef<Conn> | null = this;
		return $.pointerValue<Exclude<io.ReadWriteCloser, null>>($.pointerValue<Conn>(c).conn).Close()
	}

	public async Cmd(format: string, args: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
		const c: Conn | $.VarRef<Conn> | null = this;
		let id: number = 0
		let err: $.GoError = null! as $.GoError
		id = await $.pointerValue<Conn>(c).Pipeline.Next()
		await $.pointerValue<Conn>(c).Pipeline.StartRequest(id)
		err = await $.pointerValue<Conn>(c).Writer.PrintfLine(format, args)
		await $.pointerValue<Conn>(c).Pipeline.EndRequest(id)
		if (err != null) {
			return [0, err]
		}
		return [id, null]
	}

	public async DotReader(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).DotReader()
	}

	public async ReadCodeLine(expectCode: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadCodeLine(expectCode)
	}

	public async ReadContinuedLine(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadContinuedLine()
	}

	public async ReadContinuedLineBytes(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadContinuedLineBytes()
	}

	public async ReadDotBytes(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadDotBytes()
	}

	public async ReadDotLines(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadDotLines()
	}

	public async ReadLine(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadLine()
	}

	public async ReadLineBytes(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadLineBytes()
	}

	public async ReadMIMEHeader(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadMIMEHeader()
	}

	public async ReadResponse(expectCode: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).ReadResponse(expectCode)
	}

	public async closeDot(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).closeDot()
	}

	public async readCodeLine(expectCode: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).readCodeLine(expectCode)
	}

	public async readContinuedLineSlice(lim: any, validateFirstLine: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).readContinuedLineSlice(lim, validateFirstLine)
	}

	public async readLineSlice(lim: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).readLineSlice(lim)
	}

	public async skipSpace(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).skipSpace()
	}

	public async upcomingHeaderKeys(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reader.Reader>(this.Reader).upcomingHeaderKeys()
	}

	public async DotWriter(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_writer.Writer>(this.Writer).DotWriter()
	}

	public async PrintfLine(format: any, args: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_writer.Writer>(this.Writer).PrintfLine(format, args)
	}

	public async EndRequest(id: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_pipeline.Pipeline>(this.Pipeline).EndRequest(id)
	}

	public async EndResponse(id: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_pipeline.Pipeline>(this.Pipeline).EndResponse(id)
	}

	public async Next(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_pipeline.Pipeline>(this.Pipeline).Next()
	}

	public async StartRequest(id: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_pipeline.Pipeline>(this.Pipeline).StartRequest(id)
	}

	public async StartResponse(id: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_pipeline.Pipeline>(this.Pipeline).StartResponse(id)
	}

	static __typeInfo = $.registerStructType(
		"textproto.Conn",
		() => new Conn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Cmd", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["id", /* @__PURE__ */ $.basicType("uint")], ["err", "error"]], true), $.methodSignature("DotReader", [], ["io.Reader"], true), $.methodSignature("ReadCodeLine", [["expectCode", /* @__PURE__ */ $.basicType("int")]], [["code", /* @__PURE__ */ $.basicType("int")], ["message", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadContinuedLine", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadContinuedLineBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadDotBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadDotLines", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("ReadLine", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadLineBytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadMIMEHeader", [], ["textproto.MIMEHeader", "error"], true), $.methodSignature("ReadResponse", [["expectCode", /* @__PURE__ */ $.basicType("int")]], [["code", /* @__PURE__ */ $.basicType("int")], ["message", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("closeDot", [], [], true), $.methodSignature("readCodeLine", [["expectCode", /* @__PURE__ */ $.basicType("int")]], [["code", /* @__PURE__ */ $.basicType("int")], ["continued", /* @__PURE__ */ $.basicType("bool")], ["message", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("readContinuedLineSlice", [["lim", /* @__PURE__ */ $.basicType("int64")], ["validateFirstLine", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("readLineSlice", [["lim", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("skipSpace", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("upcomingHeaderKeys", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("DotWriter", [], ["io.WriteCloser"], true), $.methodSignature("PrintfLine", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("EndRequest", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("EndResponse", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("Next", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("StartRequest", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("StartResponse", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true)],
		Conn,
		() => [/* @__PURE__ */ $.structField("Reader", "textproto.Reader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Writer", "textproto.Writer", [1], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pipeline", "textproto.Pipeline", [2], 56, true, { anonymous: true }), /* @__PURE__ */ $.structField("conn", "io.ReadWriteCloser", [3], 120, false, { pkgPath: "net/textproto" })]
	)
}

export function ProtocolError_Error(p: ProtocolError): string {
	return p
}

export function NewConn(conn: io.ReadWriteCloser | null): Conn | $.VarRef<Conn> | null {
	return new Conn({Reader: (() => { const __goscriptLiteralField0 = bufio.NewReader((conn as io.Reader | null)); return new __goscript_reader.Reader({R: __goscriptLiteralField0}, true) })(), Writer: (() => { const __goscriptLiteralField1 = bufio.NewWriter((conn as io.Writer | null)); return new __goscript_writer.Writer({W: __goscriptLiteralField1}, true) })(), conn: conn})
}

export async function Dial(network: string, addr: string): globalThis.Promise<[Conn | $.VarRef<Conn> | null, $.GoError]> {
	let [c, err] = await net.Dial(network, addr)
	if (err != null) {
		return [null, err]
	}
	return [NewConn((c as io.ReadWriteCloser | null)), null]
}

export function TrimString(s: string): string {
	while (($.stringLen(s) > 0) && isASCIISpace($.indexString(s, 0))) {
		s = $.sliceStringOrBytes(s, 1, undefined)
	}
	while (($.stringLen(s) > 0) && isASCIISpace($.indexString(s, $.stringLen(s) - 1))) {
		s = $.sliceStringOrBytes(s, undefined, $.stringLen(s) - 1)
	}
	return s
}

export function TrimBytes(b: $.Slice<number>): $.Slice<number> {
	while (($.sliceLen(b) > 0) && isASCIISpace($.arrayIndex(b!, 0))) {
		b = $.goSlice(b, 1, undefined)
	}
	while (($.sliceLen(b) > 0) && isASCIISpace($.arrayIndex(b!, $.sliceLen(b) - 1))) {
		b = $.goSlice(b, undefined, $.sliceLen(b) - 1)
	}
	return b
}

export function isASCIISpace(b: number): boolean {
	return (((b == 32) || (b == 9)) || (b == 10)) || (b == 13)
}

export function isASCIILetter(b: number): boolean {
	b = b | (0x20)
	return (97 <= b) && (b <= 122)
}
