// Generated file based on arguments.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as io from "@goscript/io/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as argreader from "@goscript/github.com/uber/tchannel-go/internal/argreader/index.js"
import "@goscript/bufio/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/io/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/github.com/uber/tchannel-go/internal/argreader/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.ArgReader", "tchannel.ArgWriter", "tchannel.ArgWritable", "tchannel.ArgReadable", "tchannel.ArgReadHelper", "tchannel.ArgWriteHelper"])

export type ArgReader = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Read(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"tchannel.ArgReader",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type ArgWriter = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Flush(): $.GoError | globalThis.Promise<$.GoError>
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"tchannel.ArgWriter",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("Flush", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type ArgWritable = {
	Arg2Writer(): [ArgWriter | null, $.GoError] | globalThis.Promise<[ArgWriter | null, $.GoError]>
	Arg3Writer(): [ArgWriter | null, $.GoError] | globalThis.Promise<[ArgWriter | null, $.GoError]>
}

$.registerInterfaceType(
	"tchannel.ArgWritable",
	null,
	[$.methodSignature("Arg2Writer", [], ["tchannel.ArgWriter", "error"]), $.methodSignature("Arg3Writer", [], ["tchannel.ArgWriter", "error"])]
);

export type ArgReadable = {
	Arg2Reader(): [ArgReader | null, $.GoError] | globalThis.Promise<[ArgReader | null, $.GoError]>
	Arg3Reader(): [ArgReader | null, $.GoError] | globalThis.Promise<[ArgReader | null, $.GoError]>
}

$.registerInterfaceType(
	"tchannel.ArgReadable",
	null,
	[$.methodSignature("Arg2Reader", [], ["tchannel.ArgReader", "error"]), $.methodSignature("Arg3Reader", [], ["tchannel.ArgReader", "error"])]
);

export class ArgReadHelper {
	public get reader(): ArgReader | null {
		return this._fields.reader
	}

	public set reader(value: ArgReader | null) {
		this._fields.reader = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		reader: ArgReader | null
		err: $.GoError
	}

	constructor(init?: Partial<{reader?: ArgReader | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			reader: init?.reader ?? (null! as ArgReader | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ArgReadHelper {
		return new ArgReadHelper(this, true)
	}

	public __goscriptAssign(source: ArgReadHelper): void {
		const target = this._fields
		const values = source._fields
		target.reader = $.assignFieldValue(target.reader, values.reader, "tchannel.ArgReader")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Read(bs: $.VarRef<$.Slice<number>> | null): globalThis.Promise<$.GoError> {
		const r = this;
		return $.markAsStructValue($.cloneStructValue(r)).read($.functionValue(async (): globalThis.Promise<$.GoError> => {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple0: any = await ioutil.ReadAll((r.reader as io.Reader | null))
			bs!.value = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			return err
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async ReadJSON(data: any): globalThis.Promise<$.GoError> {
		const r = this;
		return $.markAsStructValue($.cloneStructValue(r)).read($.functionValue(async (): globalThis.Promise<$.GoError> => {
			// TChannel allows for 0 length values (not valid JSON), so we use a bufio.Reader
			// to check whether data is of 0 length.
			let reader: bufio.Reader | $.VarRef<bufio.Reader> | null = bufio.NewReader((r.reader as io.Reader | null))
			{
				let [, err] = await (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? ((reader as any) as bufio.Reader).Peek(1) : bufio.Reader.prototype.Peek.call(reader, 1))
				if ($.comparableEqual(err, io.EOF)) {
					// If the data is 0 length, then we don't try to read anything.
					return null
				} else {
					if (err != null) {
						return err
					}
				}
			}

			let d: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.pointerValueOrNil($.interfaceValue<io.Reader | null>(reader, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")))!)
			return await json.Decoder.prototype.Decode.call($.pointerValue<json.Decoder>(d), data)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async read(f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const r = this;
		if (r.err != null) {
			return r.err
		}
		{
			let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		{
			let err = await argreader.EnsureEmpty((r.reader as io.Reader | null), "read arg")
			if (err != null) {
				return err
			}
		}
		return $.pointerValue<Exclude<ArgReader, null>>(r.reader).Close()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ArgReadHelper",
		() => new ArgReadHelper(),
		() => [$.methodSignature("Read", [["bs", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], ["error"]), $.methodSignature("ReadJSON", [["data", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("read", [["f", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])],
		ArgReadHelper,
		() => [/* @__PURE__ */ $.structField("reader", "tchannel.ArgReader", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class ArgWriteHelper {
	public get writer(): io.WriteCloser | null {
		return this._fields.writer
	}

	public set writer(value: io.WriteCloser | null) {
		this._fields.writer = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		writer: io.WriteCloser | null
		err: $.GoError
	}

	constructor(init?: Partial<{writer?: io.WriteCloser | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			writer: init?.writer ?? (null! as io.WriteCloser | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ArgWriteHelper {
		return new ArgWriteHelper(this, true)
	}

	public __goscriptAssign(source: ArgWriteHelper): void {
		const target = this._fields
		const values = source._fields
		target.writer = $.assignFieldValue(target.writer, values.writer, "io.WriteCloser")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Write(bs: $.Slice<number>): globalThis.Promise<$.GoError> {
		const w = this;
		return $.markAsStructValue($.cloneStructValue(w)).write($.functionValue(async (): globalThis.Promise<$.GoError> => {
			let [, err] = await $.pointerValue<Exclude<io.WriteCloser, null>>(w.writer).Write(bs)
			return err
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async WriteJSON(data: any): globalThis.Promise<$.GoError> {
		const w = this;
		return $.markAsStructValue($.cloneStructValue(w)).write($.functionValue(async (): globalThis.Promise<$.GoError> => {
			let e: json.Encoder | $.VarRef<json.Encoder> | null = json.NewEncoder($.pointerValueOrNil((w.writer as io.Writer | null))!)
			return await json.Encoder.prototype.Encode.call($.pointerValue<json.Encoder>(e), data)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async write(f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const w = this;
		if (w.err != null) {
			return w.err
		}

		{
			let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		return $.pointerValue<Exclude<io.WriteCloser, null>>(w.writer).Close()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ArgWriteHelper",
		() => new ArgWriteHelper(),
		() => [$.methodSignature("Write", [["bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("WriteJSON", [["data", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("write", [["f", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])],
		ArgWriteHelper,
		() => [/* @__PURE__ */ $.structField("writer", "io.WriteCloser", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export function NewArgReader(reader: ArgReader | null, err: $.GoError): ArgReadHelper {
	return new ArgReadHelper({reader: reader, err: err}, true)
}

export function NewArgWriter(writer: io.WriteCloser | null, err: $.GoError): ArgWriteHelper {
	return new ArgWriteHelper({writer: writer, err: err}, true)
}

var __goscriptAwait: any
