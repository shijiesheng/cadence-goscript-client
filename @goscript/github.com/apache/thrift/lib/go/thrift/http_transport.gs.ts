// Generated file based on http_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as gzip from "@goscript/compress/gzip/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import type * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_iostream_transport from "./iostream_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_processor_factory from "./processor_factory.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_factory from "./protocol_factory.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/compress/gzip/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./header_transport.gs.ts"
import "./iostream_transport.gs.ts"
import "./processor_factory.gs.ts"
import "./protocol.gs.ts"
import "./protocol_factory.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.gzipResponseWriter"])

export class gzipResponseWriter {
	public get Writer(): io.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: io.Writer | null) {
		this._fields.Writer = value
	}

	public get ResponseWriter(): http.ResponseWriter | null {
		return this._fields.ResponseWriter
	}

	public set ResponseWriter(value: http.ResponseWriter | null) {
		this._fields.ResponseWriter = value
	}

	public _fields: {
		Writer: io.Writer | null
		ResponseWriter: http.ResponseWriter | null
	}

	constructor(init?: Partial<{Writer?: io.Writer | null, ResponseWriter?: http.ResponseWriter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Writer: init?.Writer ?? (null! as io.Writer | null),
			ResponseWriter: init?.ResponseWriter ?? (null! as http.ResponseWriter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gzipResponseWriter {
		return new gzipResponseWriter(this, true)
	}

	public __goscriptAssign(source: gzipResponseWriter): void {
		const target = this._fields
		const values = source._fields
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "io.Writer")
		target.ResponseWriter = $.assignFieldValue(target.ResponseWriter, values.ResponseWriter, "http.ResponseWriter")
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const w = this;
		return $.pointerValue<Exclude<io.Writer, null>>(w.Writer).Write(b)
	}

	public Header(): any {
		return $.pointerValue<Exclude<http.ResponseWriter | null, null>>(this.ResponseWriter).Header()
	}

	public async WriteHeader(statusCode: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<http.ResponseWriter | null, null>>(this.ResponseWriter).WriteHeader(statusCode)
	}

	static __typeInfo = $.registerStructType(
		"thrift.gzipResponseWriter",
		() => new gzipResponseWriter(),
		() => [$.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("Header", [], ["http.Header"]), $.methodSignature("WriteHeader", [["statusCode", /* @__PURE__ */ $.basicType("int")]])],
		gzipResponseWriter,
		() => [/* @__PURE__ */ $.structField("Writer", "io.Writer", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ResponseWriter", "http.ResponseWriter", [1], 16, true, { anonymous: true })]
	)
}

export async function NewThriftHandlerFunc(processor: __goscript_processor_factory.TProcessor | null, inPfactory: __goscript_protocol_factory.TProtocolFactory | null, outPfactory: __goscript_protocol_factory.TProtocolFactory | null): globalThis.Promise<((w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null) => void) | null> {

	return gz($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		http.Header_Add(((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Content-Type", "application/x-thrift")

		let transport: __goscript_iostream_transport.StreamTransport | $.VarRef<__goscript_iostream_transport.StreamTransport> | null = __goscript_iostream_transport.NewStreamTransport(($.pointerValue<http.Request>(r).Body as io.Reader | null), (w as io.Writer | null))
		await (processor !== null && (processor as any).__isVarRef !== true && (processor as any).__goValue === undefined ? (processor as Exclude<__goscript_processor_factory.TProcessor, null>) : $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>(processor)).Process(http.Request.prototype.Context.call($.pointerValue<http.Request>(r)), (__goscriptAwait = (inPfactory !== null && (inPfactory as any).__isVarRef !== true && (inPfactory as any).__goValue === undefined ? (inPfactory as Exclude<__goscript_protocol_factory.TProtocolFactory, null>) : $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>(inPfactory)).GetProtocol($.interfaceValue<__goscript_transport.TTransport | null>(transport, "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (outPfactory !== null && (outPfactory as any).__isVarRef !== true && (outPfactory as any).__goValue === undefined ? (outPfactory as Exclude<__goscript_protocol_factory.TProtocolFactory, null>) : $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>(outPfactory)).GetProtocol($.interfaceValue<__goscript_transport.TTransport | null>(transport, "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)))
}

export async function gz(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null): globalThis.Promise<http.HandlerFunc | null> {
	let sp: sync.Pool | $.VarRef<sync.Pool> | null = new sync.Pool({New: $.functionValue((): any => {
		return $.interfaceValue(gzip.NewWriter(null!), "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})

	return $.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		await using __defer = new $.AsyncDisposableStack()
		if (!strings.Contains(await http.Header_Get($.pointerValue<http.Request>(r).Header, "Accept-Encoding"), "gzip")) {
			void (__goscriptAwait = handler!(w, r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		http.Header_Set(((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Content-Encoding", "gzip")
		let __goscriptShadow0: gzip.Writer | $.VarRef<gzip.Writer> | null = $.mustTypeAssert<gzip.Writer | $.VarRef<gzip.Writer> | null>(await sync.Pool.prototype.Get.call($.pointerValue<sync.Pool>(sp)), /* @__PURE__ */ $.pointerType("gzip.Writer"))
		gzip.Writer.prototype.Reset.call($.pointerValue<gzip.Writer>(__goscriptShadow0), $.pointerValueOrNil((w as io.Writer | null))!)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await gzip.Writer.prototype.Close.call($.pointerValue<gzip.Writer>(__goscriptShadow0))
			sync.Pool.prototype.Put.call($.pointerValue<sync.Pool>(sp), $.interfaceValue(__goscriptShadow0, "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer")))
		})() })
		let gzw = new gzipResponseWriter({Writer: $.interfaceValue<io.Writer | null>(__goscriptShadow0, "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer")), ResponseWriter: w}, true)
		void (__goscriptAwait = handler!($.interfaceValue<http.ResponseWriter | null>((gzw).clone(), "thrift.gzipResponseWriter", "thrift.gzipResponseWriter"), r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptAwait: any
