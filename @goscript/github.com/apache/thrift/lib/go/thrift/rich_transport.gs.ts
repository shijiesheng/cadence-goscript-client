// Generated file based on rich_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import type * as context from "@goscript/context/index.js"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.RichTransport"])

export class RichTransport {
	public get TTransport(): __goscript_transport.TTransport | null {
		return this._fields.TTransport
	}

	public set TTransport(value: __goscript_transport.TTransport | null) {
		this._fields.TTransport = value
	}

	public _fields: {
		TTransport: __goscript_transport.TTransport | null
	}

	constructor(init?: Partial<{TTransport?: __goscript_transport.TTransport | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TTransport: init?.TTransport ?? (null! as __goscript_transport.TTransport | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RichTransport {
		return new RichTransport(this, true)
	}

	public __goscriptAssign(source: RichTransport): void {
		const target = this._fields
		const values = source._fields
		target.TTransport = $.assignFieldValue(target.TTransport, values.TTransport, "thrift.TTransport")
	}

	public async ReadByte(): globalThis.Promise<[number, $.GoError]> {
		const r: RichTransport | $.VarRef<RichTransport> | null = this;
		let c: number = 0
		let err: $.GoError = null! as $.GoError
		return readByte(($.pointerValue<RichTransport>(r).TTransport as io.Reader | null))
	}

	public async RemainingBytes(): globalThis.Promise<bigint> {
		const r: RichTransport | $.VarRef<RichTransport> | null = this;
		let num_bytes: bigint = 0n
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<RichTransport>(r).TTransport).RemainingBytes()
	}

	public async WriteByte(c: number): globalThis.Promise<$.GoError> {
		const r: RichTransport | $.VarRef<RichTransport> | null = this;
		return writeByte(($.pointerValue<RichTransport>(r).TTransport as io.Writer | null), c)
	}

	public async WriteString(s: string): globalThis.Promise<[number, $.GoError]> {
		const r: RichTransport | $.VarRef<RichTransport> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<RichTransport>(r).TTransport).Write($.stringToBytes(s))
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_transport.TTransport | null, null>>(this.TTransport).Close()
	}

	public async Flush(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_transport.TTransport | null, null>>(this.TTransport).Flush(ctx)
	}

	public async IsOpen(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_transport.TTransport | null, null>>(this.TTransport).IsOpen()
	}

	public async Open(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_transport.TTransport | null, null>>(this.TTransport).Open()
	}

	public async Read(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_transport.TTransport | null, null>>(this.TTransport).Read(p)
	}

	public async Write(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_transport.TTransport | null, null>>(this.TTransport).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"thrift.RichTransport",
		() => new RichTransport(),
		() => [$.methodSignature("ReadByte", [], [["c", /* @__PURE__ */ $.basicType("uint8")], ["err", "error"]], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Close", [], ["error"]), $.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]]), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Open", [], ["error"]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		RichTransport,
		() => [/* @__PURE__ */ $.structField("TTransport", "thrift.TTransport", [0], 0, true, { anonymous: true })]
	)
}

export function NewTRichTransport(trans: __goscript_transport.TTransport | null): RichTransport | $.VarRef<RichTransport> | null {
	return new RichTransport({TTransport: trans})
}

export async function readByte(r: io.Reader | null): globalThis.Promise<[number, $.GoError]> {
	let c: number = 0
	let err: $.GoError = null! as $.GoError
	let v = $.arrayValue(new Uint8Array([0]))
	let __goscriptTuple0: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(r)).Read($.goSlice(v, 0, 1))
	let n = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if ((n > 0) && ((err == null) || errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.EOF)!))) {
		return [$.arrayIndex(v, 0), null]
	}
	if ((n > 0) && (err != null)) {
		return [$.arrayIndex(v, 0), err]
	}
	if (err != null) {
		return [0, err]
	}
	return [$.arrayIndex(v, 0), null]
}

export async function writeByte(w: io.Writer | null, c: number): globalThis.Promise<$.GoError> {
	let v = $.arrayValue(new Uint8Array([c]))
	let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(v, 0, 1))
	return err
}

var __goscriptAwait: any
