// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as pbutil from "@goscript/github.com/matttproud/golang_protobuf_extensions/pbutil/index.js"

import * as goautoneg from "@goscript/github.com/prometheus/common/internal/bitbucket.org/ww/goautoneg/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_expfmt from "./expfmt.gs.ts"

import * as __goscript_openmetrics_create from "./openmetrics_create.gs.ts"

import * as __goscript_text_create from "./text_create.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/matttproud/golang_protobuf_extensions/pbutil/index.js"
import "@goscript/github.com/prometheus/common/internal/bitbucket.org/ww/goautoneg/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./expfmt.gs.ts"
import "./openmetrics_create.gs.ts"
import "./text_create.gs.ts"

$.registerTypePackagePath("github.com/prometheus/common/expfmt", ["expfmt.Encoder", "expfmt.Closer", "expfmt.encoderCloser"])

export type Encoder = {
	Encode(_p0: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"expfmt.Encoder",
	null,
	[$.methodSignature("Encode", [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], ["error"])]
);

export type Closer = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"expfmt.Closer",
	null,
	[$.methodSignature("Close", [], ["error"])]
);

export class encoderCloser {
	public get encode(): ((_p0: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.encode
	}

	public set encode(value: ((_p0: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.encode = value
	}

	public get close(): (() => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.close
	}

	public set close(value: (() => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.close = value
	}

	public _fields: {
		encode: ((_p0: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		close: (() => $.GoError | globalThis.Promise<$.GoError>) | null
	}

	constructor(init?: Partial<{encode?: ((_p0: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, close?: (() => $.GoError | globalThis.Promise<$.GoError>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			encode: init?.encode ?? (null! as ((_p0: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			close: init?.close ?? (null! as (() => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encoderCloser {
		return new encoderCloser(this, true)
	}

	public __goscriptAssign(source: encoderCloser): void {
		const target = this._fields
		const values = source._fields
		target.encode = values.encode
		target.close = values.close
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const ec = this;
		return ec.close!()
	}

	public async Encode(v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> {
		const ec = this;
		return ec.encode!(v)
	}

	static __typeInfo = $.registerStructType(
		"expfmt.encoderCloser",
		() => new encoderCloser(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("Encode", [["v", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")]], ["error"])],
		encoderCloser,
		() => [/* @__PURE__ */ $.structField("encode", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], results: ["error"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("close", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "github.com/prometheus/common/expfmt" })]
	)
}

export async function Negotiate(h: http.Header): globalThis.Promise<__goscript_expfmt.Format> {
	for (let __goscriptRangeTarget0 = await goautoneg.ParseAccept(await http.Header_Get(h, "Accept")), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let ac = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as goautoneg.Accept)).clone()
		let ver = $.mapGet<string, string, string>(ac.Params, "version", "")[0]
		if (($.stringEqual(($.concatString(($.concatString(ac.Type, "/")), ac.SubType)), "application/vnd.google.protobuf")) && ($.stringEqual($.mapGet<string, string, string>(ac.Params, "proto", "")[0], "io.prometheus.client.MetricFamily"))) {
			switch ($.mapGet<string, string, string>(ac.Params, "encoding", "")[0]) {
				case "delimited":
				{
					return "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=delimited"
					break
				}
				case "text":
				{
					return "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=text"
					break
				}
				case "compact-text":
				{
					return "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=compact-text"
					break
				}
			}
		}
		if ((($.stringEqual(ac.Type, "text")) && ($.stringEqual(ac.SubType, "plain"))) && (($.stringEqual(ver, "0.0.4")) || ($.stringEqual(ver, "")))) {
			return "text/plain; version=0.0.4; charset=utf-8"
		}
	}
	return "text/plain; version=0.0.4; charset=utf-8"
}

export async function NegotiateIncludingOpenMetrics(h: http.Header): globalThis.Promise<__goscript_expfmt.Format> {
	for (let __goscriptRangeTarget1 = await goautoneg.ParseAccept(await http.Header_Get(h, "Accept")), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let ac = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as goautoneg.Accept)).clone()
		let ver = $.mapGet<string, string, string>(ac.Params, "version", "")[0]
		if (($.stringEqual(($.concatString(($.concatString(ac.Type, "/")), ac.SubType)), "application/vnd.google.protobuf")) && ($.stringEqual($.mapGet<string, string, string>(ac.Params, "proto", "")[0], "io.prometheus.client.MetricFamily"))) {
			switch ($.mapGet<string, string, string>(ac.Params, "encoding", "")[0]) {
				case "delimited":
				{
					return "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=delimited"
					break
				}
				case "text":
				{
					return "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=text"
					break
				}
				case "compact-text":
				{
					return "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=compact-text"
					break
				}
			}
		}
		if ((($.stringEqual(ac.Type, "text")) && ($.stringEqual(ac.SubType, "plain"))) && (($.stringEqual(ver, "0.0.4")) || ($.stringEqual(ver, "")))) {
			return "text/plain; version=0.0.4; charset=utf-8"
		}
		if (($.stringEqual(($.concatString(($.concatString(ac.Type, "/")), ac.SubType)), "application/openmetrics-text")) && (($.stringEqual(ver, "0.0.1")) || ($.stringEqual(ver, "")))) {
			return "application/openmetrics-text; version=0.0.1; charset=utf-8"
		}
	}
	return "text/plain; version=0.0.4; charset=utf-8"
}

export function NewEncoder(w: io.Writer | null, format: __goscript_expfmt.Format): Encoder | null {
	switch (format) {
		case "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=delimited":
		{
			return $.interfaceValue<Encoder | null>(new encoderCloser({encode: $.functionValue(async (v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> => {
				let [, err] = await pbutil.WriteDelimited(w, $.interfaceValue<proto.Message | null>(v, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))
				return err
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], results: ["error"] } as $.FunctionTypeInfo)), close: $.functionValue((): $.GoError => {
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))}, true), "expfmt.encoderCloser", "expfmt.encoderCloser")
			break
		}
		case "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=compact-text":
		{
			return $.interfaceValue<Encoder | null>(new encoderCloser({encode: $.functionValue(async (v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> => {
				let [, err] = await fmt.Fprintln($.pointerValueOrNil(w)!, (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as dto.MetricFamily).String() : dto.MetricFamily.prototype.String.call(v)))
				return err
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], results: ["error"] } as $.FunctionTypeInfo)), close: $.functionValue((): $.GoError => {
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))}, true), "expfmt.encoderCloser", "expfmt.encoderCloser")
			break
		}
		case "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=text":
		{
			return $.interfaceValue<Encoder | null>(new encoderCloser({encode: $.functionValue(async (v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> => {
				let [, err] = await fmt.Fprintln($.pointerValueOrNil(w)!, await proto.MarshalTextString($.interfaceValue<proto.Message | null>(v, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily"))))
				return err
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], results: ["error"] } as $.FunctionTypeInfo)), close: $.functionValue((): $.GoError => {
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))}, true), "expfmt.encoderCloser", "expfmt.encoderCloser")
			break
		}
		case "text/plain; version=0.0.4; charset=utf-8":
		{
			return $.interfaceValue<Encoder | null>(new encoderCloser({encode: $.functionValue(async (v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> => {
				let [, err] = await __goscript_text_create.MetricFamilyToText(w, v)
				return err
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], results: ["error"] } as $.FunctionTypeInfo)), close: $.functionValue((): $.GoError => {
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))}, true), "expfmt.encoderCloser", "expfmt.encoderCloser")
			break
		}
		case "application/openmetrics-text; version=0.0.1; charset=utf-8":
		{
			return $.interfaceValue<Encoder | null>(new encoderCloser({encode: $.functionValue(async (v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> => {
				let [, err] = await __goscript_openmetrics_create.MetricFamilyToOpenMetrics(w, v)
				return err
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], results: ["error"] } as $.FunctionTypeInfo)), close: $.functionValue(async (): globalThis.Promise<$.GoError> => {
				let [, err] = await __goscript_openmetrics_create.FinalizeOpenMetrics(w)
				return err
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))}, true), "expfmt.encoderCloser", "expfmt.encoderCloser")
			break
		}
	}
	$.panic((fmt.Errorf("expfmt.NewEncoder: unknown format %q", $.namedValueInterfaceValue<any>(format, "expfmt.Format", {}, /* @__PURE__ */ $.basicType("string", "expfmt.Format"))) as any))
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
