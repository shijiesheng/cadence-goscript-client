// Generated file based on request.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as iter from "@goscript/iter/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_header from "./header.gs.ts"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "./header.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Request", "transport.Encoding", "transport.RequestMeta"])

export type Encoding = string

export class Request {
	// Name of the service making the request.
	public get Caller(): string {
		return this._fields.Caller
	}

	public set Caller(value: string) {
		this._fields.Caller = value
	}

	// Name of the service to which the request is being made.
	// The service refers to the canonical traffic group for the service.
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	// Name of the transport used for the call.
	public get Transport(): string {
		return this._fields.Transport
	}

	public set Transport(value: string) {
		this._fields.Transport = value
	}

	// Name of the encoding used for the request body.
	public get Encoding(): Encoding {
		return this._fields.Encoding
	}

	public set Encoding(value: Encoding) {
		this._fields.Encoding = value
	}

	// Name of the procedure being called.
	public get Procedure(): string {
		return this._fields.Procedure
	}

	public set Procedure(value: string) {
		this._fields.Procedure = value
	}

	// Headers for the request.
	public get Headers(): __goscript_header.Headers {
		return this._fields.Headers
	}

	public set Headers(value: __goscript_header.Headers) {
		this._fields.Headers = value
	}

	// ShardKey is an opaque string that is meaningful to the destined service
	// for how to relay a request within a cluster to the shard that owns the
	// key.
	public get ShardKey(): string {
		return this._fields.ShardKey
	}

	public set ShardKey(value: string) {
		this._fields.ShardKey = value
	}

	// RoutingKey refers to a traffic group for the destined service, and when
	// present may override the service name for purposes of routing.
	public get RoutingKey(): string {
		return this._fields.RoutingKey
	}

	public set RoutingKey(value: string) {
		this._fields.RoutingKey = value
	}

	// RoutingDelegate refers to the traffic group for a service that proxies
	// for the destined service for routing purposes. The routing delegate may
	// override the routing key and service.
	public get RoutingDelegate(): string {
		return this._fields.RoutingDelegate
	}

	public set RoutingDelegate(value: string) {
		this._fields.RoutingDelegate = value
	}

	// CallerProcedure refers to the name of the rpc procedure from the service making this request.
	public get CallerProcedure(): string {
		return this._fields.CallerProcedure
	}

	public set CallerProcedure(value: string) {
		this._fields.CallerProcedure = value
	}

	// Request payload.
	public get Body(): io.Reader | null {
		return this._fields.Body
	}

	public set Body(value: io.Reader | null) {
		this._fields.Body = value
	}

	// Request payload size before any compression applied by the protocol
	// When using the HTTP transport, this value is set from the HTTP header
	// content-length. It should be noted that this value is set manually and
	// will not be updated automatically if the body is being modified
	public get BodySize(): number {
		return this._fields.BodySize
	}

	public set BodySize(value: number) {
		this._fields.BodySize = value
	}

	public _fields: {
		Caller: string
		Service: string
		Transport: string
		Encoding: Encoding
		Procedure: string
		Headers: __goscript_header.Headers
		ShardKey: string
		RoutingKey: string
		RoutingDelegate: string
		CallerProcedure: string
		Body: io.Reader | null
		BodySize: number
	}

	constructor(init?: Partial<{Caller?: string, Service?: string, Transport?: string, Encoding?: Encoding, Procedure?: string, Headers?: __goscript_header.Headers, ShardKey?: string, RoutingKey?: string, RoutingDelegate?: string, CallerProcedure?: string, Body?: io.Reader | null, BodySize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Caller: init?.Caller ?? ("" as string),
			Service: init?.Service ?? ("" as string),
			Transport: init?.Transport ?? ("" as string),
			Encoding: init?.Encoding ?? ("" as Encoding),
			Procedure: init?.Procedure ?? ("" as string),
			Headers: init?.Headers ? init.Headers.clone() : new __goscript_header.Headers(undefined, true),
			ShardKey: init?.ShardKey ?? ("" as string),
			RoutingKey: init?.RoutingKey ?? ("" as string),
			RoutingDelegate: init?.RoutingDelegate ?? ("" as string),
			CallerProcedure: init?.CallerProcedure ?? ("" as string),
			Body: init?.Body ?? (null! as io.Reader | null),
			BodySize: init?.BodySize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Request {
		return new Request(this, true)
	}

	public __goscriptAssign(source: Request): void {
		const target = this._fields
		const values = source._fields
		target.Caller = values.Caller
		target.Service = values.Service
		target.Transport = values.Transport
		target.Encoding = values.Encoding
		target.Procedure = values.Procedure
		$.assignStruct(target.Headers, values.Headers)
		target.ShardKey = values.ShardKey
		target.RoutingKey = values.RoutingKey
		target.RoutingDelegate = values.RoutingDelegate
		target.CallerProcedure = values.CallerProcedure
		target.Body = $.assignFieldValue(target.Body, values.Body, "io.Reader")
		target.BodySize = values.BodySize
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const r: Request | $.VarRef<Request> | null = this;
		const r$: Request = r == null ? $.pointerTarget<Request>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Request>(r)
		// TODO (#788): Include headers once we can omit PII.
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("caller", (r$ as Request).Caller), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("service", (r$ as Request).Service), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("transport", (r$ as Request).Transport), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("encoding", (r$ as Request).Encoding), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("procedure", (r$ as Request).Procedure), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("shardKey", (r$ as Request).ShardKey), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("routingKey", (r$ as Request).RoutingKey), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("routingDelegate", (r$ as Request).RoutingDelegate), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("callerProcedure", (r$ as Request).CallerProcedure), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public ToRequestMeta(): RequestMeta | $.VarRef<RequestMeta> | null {
		const r: Request | $.VarRef<Request> | null = this;
		const r$: Request = r == null ? $.pointerTarget<Request>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Request>(r)
		return new RequestMeta({Caller: (r$ as Request).Caller, Service: (r$ as Request).Service, Transport: (r$ as Request).Transport, Encoding: (r$ as Request).Encoding, Procedure: (r$ as Request).Procedure, Headers: (r$ as Request).Headers, ShardKey: (r$ as Request).ShardKey, RoutingKey: (r$ as Request).RoutingKey, RoutingDelegate: (r$ as Request).RoutingDelegate, CallerProcedure: (r$ as Request).CallerProcedure})
	}

	static __typeInfo = $.registerStructType(
		"transport.Request",
		() => new Request(),
		() => [$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"], true), $.methodSignature("ToRequestMeta", [], [/* @__PURE__ */ $.pointerType("transport.RequestMeta")], true)],
		Request,
		() => [/* @__PURE__ */ $.structField("Caller", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding"), [3], 48, true), /* @__PURE__ */ $.structField("Procedure", /* @__PURE__ */ $.basicType("string"), [4], 64, true), /* @__PURE__ */ $.structField("Headers", "transport.Headers", [5], 80, true), /* @__PURE__ */ $.structField("ShardKey", /* @__PURE__ */ $.basicType("string"), [6], 112, true), /* @__PURE__ */ $.structField("RoutingKey", /* @__PURE__ */ $.basicType("string"), [7], 128, true), /* @__PURE__ */ $.structField("RoutingDelegate", /* @__PURE__ */ $.basicType("string"), [8], 144, true), /* @__PURE__ */ $.structField("CallerProcedure", /* @__PURE__ */ $.basicType("string"), [9], 160, true), /* @__PURE__ */ $.structField("Body", "io.Reader", [10], 176, true), /* @__PURE__ */ $.structField("BodySize", /* @__PURE__ */ $.basicType("int"), [11], 192, true)]
	)
}

export class RequestMeta {
	// Name of the service making the request.
	public get Caller(): string {
		return this._fields.Caller
	}

	public set Caller(value: string) {
		this._fields.Caller = value
	}

	// Name of the service to which the request is being made.
	// The service refers to the canonical traffic group for the service.
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	// Name of the transport used for the call.
	public get Transport(): string {
		return this._fields.Transport
	}

	public set Transport(value: string) {
		this._fields.Transport = value
	}

	// Name of the encoding used for the request body.
	public get Encoding(): Encoding {
		return this._fields.Encoding
	}

	public set Encoding(value: Encoding) {
		this._fields.Encoding = value
	}

	// Name of the procedure being called.
	public get Procedure(): string {
		return this._fields.Procedure
	}

	public set Procedure(value: string) {
		this._fields.Procedure = value
	}

	// Headers for the request.
	public get Headers(): __goscript_header.Headers {
		return this._fields.Headers
	}

	public set Headers(value: __goscript_header.Headers) {
		this._fields.Headers = value
	}

	// ShardKey is an opaque string that is meaningful to the destined service
	// for how to relay a request within a cluster to the shard that owns the
	// key.
	public get ShardKey(): string {
		return this._fields.ShardKey
	}

	public set ShardKey(value: string) {
		this._fields.ShardKey = value
	}

	// RoutingKey refers to a traffic group for the destined service, and when
	// present may override the service name for purposes of routing.
	public get RoutingKey(): string {
		return this._fields.RoutingKey
	}

	public set RoutingKey(value: string) {
		this._fields.RoutingKey = value
	}

	// RoutingDelegate refers to the traffic group for a service that proxies
	// for the destined service for routing purposes. The routing delegate may
	// override the routing key and service.
	public get RoutingDelegate(): string {
		return this._fields.RoutingDelegate
	}

	public set RoutingDelegate(value: string) {
		this._fields.RoutingDelegate = value
	}

	// CallerProcedure refers to the name of the rpc procedure of the service making this request.
	public get CallerProcedure(): string {
		return this._fields.CallerProcedure
	}

	public set CallerProcedure(value: string) {
		this._fields.CallerProcedure = value
	}

	public _fields: {
		Caller: string
		Service: string
		Transport: string
		Encoding: Encoding
		Procedure: string
		Headers: __goscript_header.Headers
		ShardKey: string
		RoutingKey: string
		RoutingDelegate: string
		CallerProcedure: string
	}

	constructor(init?: Partial<{Caller?: string, Service?: string, Transport?: string, Encoding?: Encoding, Procedure?: string, Headers?: __goscript_header.Headers, ShardKey?: string, RoutingKey?: string, RoutingDelegate?: string, CallerProcedure?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Caller: init?.Caller ?? ("" as string),
			Service: init?.Service ?? ("" as string),
			Transport: init?.Transport ?? ("" as string),
			Encoding: init?.Encoding ?? ("" as Encoding),
			Procedure: init?.Procedure ?? ("" as string),
			Headers: init?.Headers ? init.Headers.clone() : new __goscript_header.Headers(undefined, true),
			ShardKey: init?.ShardKey ?? ("" as string),
			RoutingKey: init?.RoutingKey ?? ("" as string),
			RoutingDelegate: init?.RoutingDelegate ?? ("" as string),
			CallerProcedure: init?.CallerProcedure ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequestMeta {
		return new RequestMeta(this, true)
	}

	public __goscriptAssign(source: RequestMeta): void {
		const target = this._fields
		const values = source._fields
		target.Caller = values.Caller
		target.Service = values.Service
		target.Transport = values.Transport
		target.Encoding = values.Encoding
		target.Procedure = values.Procedure
		$.assignStruct(target.Headers, values.Headers)
		target.ShardKey = values.ShardKey
		target.RoutingKey = values.RoutingKey
		target.RoutingDelegate = values.RoutingDelegate
		target.CallerProcedure = values.CallerProcedure
	}

	public ToRequest(): Request | $.VarRef<Request> | null {
		const r: RequestMeta | $.VarRef<RequestMeta> | null = this;
		const r$: RequestMeta = r == null ? $.pointerTarget<RequestMeta>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<RequestMeta>(r)
		if (r == null) {
			return new Request()
		}
		return new Request({Caller: (r$ as RequestMeta).Caller, Service: (r$ as RequestMeta).Service, Transport: (r$ as RequestMeta).Transport, Encoding: (r$ as RequestMeta).Encoding, Procedure: (r$ as RequestMeta).Procedure, Headers: (r$ as RequestMeta).Headers, ShardKey: (r$ as RequestMeta).ShardKey, RoutingKey: (r$ as RequestMeta).RoutingKey, RoutingDelegate: (r$ as RequestMeta).RoutingDelegate, CallerProcedure: (r$ as RequestMeta).CallerProcedure})
	}

	static __typeInfo = $.registerStructType(
		"transport.RequestMeta",
		() => new RequestMeta(),
		() => [$.methodSignature("ToRequest", [], [/* @__PURE__ */ $.pointerType("transport.Request")], true)],
		RequestMeta,
		() => [/* @__PURE__ */ $.structField("Caller", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding"), [3], 48, true), /* @__PURE__ */ $.structField("Procedure", /* @__PURE__ */ $.basicType("string"), [4], 64, true), /* @__PURE__ */ $.structField("Headers", "transport.Headers", [5], 80, true), /* @__PURE__ */ $.structField("ShardKey", /* @__PURE__ */ $.basicType("string"), [6], 112, true), /* @__PURE__ */ $.structField("RoutingKey", /* @__PURE__ */ $.basicType("string"), [7], 128, true), /* @__PURE__ */ $.structField("RoutingDelegate", /* @__PURE__ */ $.basicType("string"), [8], 144, true), /* @__PURE__ */ $.structField("CallerProcedure", /* @__PURE__ */ $.basicType("string"), [9], 160, true)]
	)
}

export function ValidateRequest(req: Request | $.VarRef<Request> | null): $.GoError {
	const req$: Request = req == null ? $.pointerTarget<Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<Request>(req)
	let missingParams: $.Slice<string> = null! as $.Slice<string>
	if ($.stringEqual((req$ as Request).Service, "")) {
		missingParams = $.appendOne(missingParams, "service name")
	}
	if ($.stringEqual((req$ as Request).Procedure, "")) {
		missingParams = $.appendOne(missingParams, "procedure")
	}
	if ($.stringEqual((req$ as Request).Caller, "")) {
		missingParams = $.appendOne(missingParams, "caller name")
	}
	if ($.stringEqual((req$ as Request).Encoding, "")) {
		missingParams = $.appendOne(missingParams, "encoding")
	}
	if ($.sliceLen(missingParams) > 0) {
		return $.interfaceValue<$.GoError>(yarpcerrors.Newf(3, "missing %s", $.arrayToSlice<any>([strings.Join(missingParams, ", ")])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
	}
	return null
}

export async function ValidateUnaryContext(ctx: context.Context | null): globalThis.Promise<$.GoError> {
	{
		let [, hasDeadline] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
		if (!hasDeadline) {
			return $.interfaceValue<$.GoError>(yarpcerrors.Newf(3, "missing TTL", null), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
		}
	}
	return null
}

export async function ValidateRequestContext(ctx: context.Context | null): globalThis.Promise<$.GoError> {
	{
		let [, hasDeadline] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
		if (!hasDeadline) {
			return $.interfaceValue<$.GoError>(yarpcerrors.Newf(3, "missing TTL", null), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
		}
	}
	return null
}

var __goscriptAwait: any
