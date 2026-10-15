// Generated file based on printer_writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_app from "./app.gs.ts"
import "@goscript/io/index.js"
import "./app.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.printerWriter"])

export class printerWriter {
	public get p(): __goscript_app.Printer | null {
		return this._fields.p
	}

	public set p(value: __goscript_app.Printer | null) {
		this._fields.p = value
	}

	public _fields: {
		p: __goscript_app.Printer | null
	}

	constructor(init?: Partial<{p?: __goscript_app.Printer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as __goscript_app.Printer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): printerWriter {
		return new printerWriter(this, true)
	}

	public __goscriptAssign(source: printerWriter): void {
		const target = this._fields
		const values = source._fields
		target.p = $.assignFieldValue(target.p, values.p, "fx.Printer")
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const w: printerWriter | $.VarRef<printerWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_app.Printer, null>>($.pointerValue<printerWriter>(w).p).Printf($.bytesToString(b), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [$.sliceLen(b), null]
	}

	static __typeInfo = $.registerStructType(
		"fx.printerWriter",
		() => new printerWriter(),
		() => [$.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		printerWriter,
		() => [/* @__PURE__ */ $.structField("p", "fx.Printer", [0], 0, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export function writerFromPrinter(p: __goscript_app.Printer | null): io.Writer | null {
	return $.interfaceValue<io.Writer | null>(new printerWriter({p: p}), "*fx.printerWriter", /* @__PURE__ */ $.pointerType("fx.printerWriter"))
}

var __goscriptAwait: any
