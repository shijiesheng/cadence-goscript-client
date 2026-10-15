// Generated file based on tags.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"

$.registerTypePackagePath("github.com/opentracing/opentracing-go/ext", ["ext.SpanKindEnum", "ext.spanKindTagName", "ext.rpcServerOption", "ext.StringTagName", "ext.Uint32TagName", "ext.Uint16TagName", "ext.BoolTagName", "ext.IPv4TagName"])

export type SpanKindEnum = string

export type spanKindTagName = string

$.registerNamedValueType(
	"ext.spanKindTagName",
	{Set: (receiver: any, ...args: any[]) => (spanKindTagName_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("string", "ext.SpanKindEnum")]])]
);

$.registerNamedValueType(
	"*ext.spanKindTagName",
	{Set: (receiver: any, ...args: any[]) => (spanKindTagName_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("string", "ext.SpanKindEnum")]])]
);

export type StringTagName = string

$.registerNamedValueType(
	"ext.StringTagName",
	{Set: (receiver: any, ...args: any[]) => (StringTagName_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*ext.StringTagName",
	{Set: (receiver: any, ...args: any[]) => (StringTagName_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

export type Uint32TagName = string

$.registerNamedValueType(
	"ext.Uint32TagName",
	{Set: (receiver: any, ...args: any[]) => (Uint32TagName_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("uint32")]])]
);

$.registerNamedValueType(
	"*ext.Uint32TagName",
	{Set: (receiver: any, ...args: any[]) => (Uint32TagName_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("uint32")]])]
);

export type Uint16TagName = string

$.registerNamedValueType(
	"ext.Uint16TagName",
	{Set: (receiver: any, ...args: any[]) => (Uint16TagName_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("uint16")]])]
);

$.registerNamedValueType(
	"*ext.Uint16TagName",
	{Set: (receiver: any, ...args: any[]) => (Uint16TagName_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("uint16")]])]
);

export type BoolTagName = string

$.registerNamedValueType(
	"ext.BoolTagName",
	{Set: (receiver: any, ...args: any[]) => (BoolTagName_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("bool")]])]
);

$.registerNamedValueType(
	"*ext.BoolTagName",
	{Set: (receiver: any, ...args: any[]) => (BoolTagName_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("bool")]])]
);

export type IPv4TagName = string

$.registerNamedValueType(
	"ext.IPv4TagName",
	{Set: (receiver: any, ...args: any[]) => (IPv4TagName_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SetString: (receiver: any, ...args: any[]) => (IPv4TagName_SetString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("SetString", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*ext.IPv4TagName",
	{Set: (receiver: any, ...args: any[]) => (IPv4TagName_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), SetString: (receiver: any, ...args: any[]) => (IPv4TagName_SetString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("SetString", [["span", "opentracing.Span"], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

export class rpcServerOption {
	public get clientContext(): opentracing.SpanContext | null {
		return this._fields.clientContext
	}

	public set clientContext(value: opentracing.SpanContext | null) {
		this._fields.clientContext = value
	}

	public _fields: {
		clientContext: opentracing.SpanContext | null
	}

	constructor(init?: Partial<{clientContext?: opentracing.SpanContext | null}>, __goscriptValue?: boolean) {
		this._fields = {
			clientContext: init?.clientContext ?? (null! as opentracing.SpanContext | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rpcServerOption {
		return new rpcServerOption(this, true)
	}

	public __goscriptAssign(source: rpcServerOption): void {
		const target = this._fields
		const values = source._fields
		target.clientContext = $.assignFieldValue(target.clientContext, values.clientContext, "opentracing.SpanContext")
	}

	public Apply(o: opentracing.StartSpanOptions | $.VarRef<opentracing.StartSpanOptions> | null): void {
		const r = this;
		if (r.clientContext != null) {
			$.markAsStructValue($.cloneStructValue(opentracing.ChildOf(r.clientContext))).Apply(o)
		}
		$.markAsStructValue($.cloneStructValue(SpanKindRPCServer)).Apply(o)
	}

	static __typeInfo = $.registerStructType(
		"ext.rpcServerOption",
		() => new rpcServerOption(),
		() => [$.methodSignature("Apply", [["o", /* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")]])],
		rpcServerOption,
		() => [/* @__PURE__ */ $.structField("clientContext", "opentracing.SpanContext", [0], 0, false, { pkgPath: "github.com/opentracing/opentracing-go/ext" })]
	)
}

export let SpanKind: spanKindTagName = "span.kind"

export function __goscript_set_SpanKind(__goscriptValue: spanKindTagName): void {
	SpanKind = __goscriptValue
}

export let SpanKindRPCClientEnum: SpanKindEnum = "client"

export function __goscript_set_SpanKindRPCClientEnum(__goscriptValue: SpanKindEnum): void {
	SpanKindRPCClientEnum = __goscriptValue
}

export let SpanKindRPCClient: opentracing.Tag = new opentracing.Tag({Key: SpanKind, Value: $.namedValueInterfaceValue<any>(SpanKindRPCClientEnum, "ext.SpanKindEnum", {}, /* @__PURE__ */ $.basicType("string", "ext.SpanKindEnum"))}, true)

export function __goscript_set_SpanKindRPCClient(__goscriptValue: opentracing.Tag): void {
	$.assignStruct(SpanKindRPCClient, __goscriptValue)
}

export let SpanKindRPCServerEnum: SpanKindEnum = "server"

export function __goscript_set_SpanKindRPCServerEnum(__goscriptValue: SpanKindEnum): void {
	SpanKindRPCServerEnum = __goscriptValue
}

export let SpanKindRPCServer: opentracing.Tag = new opentracing.Tag({Key: SpanKind, Value: $.namedValueInterfaceValue<any>(SpanKindRPCServerEnum, "ext.SpanKindEnum", {}, /* @__PURE__ */ $.basicType("string", "ext.SpanKindEnum"))}, true)

export function __goscript_set_SpanKindRPCServer(__goscriptValue: opentracing.Tag): void {
	$.assignStruct(SpanKindRPCServer, __goscriptValue)
}

export let SpanKindProducerEnum: SpanKindEnum = "producer"

export function __goscript_set_SpanKindProducerEnum(__goscriptValue: SpanKindEnum): void {
	SpanKindProducerEnum = __goscriptValue
}

export let SpanKindProducer: opentracing.Tag = new opentracing.Tag({Key: SpanKind, Value: $.namedValueInterfaceValue<any>(SpanKindProducerEnum, "ext.SpanKindEnum", {}, /* @__PURE__ */ $.basicType("string", "ext.SpanKindEnum"))}, true)

export function __goscript_set_SpanKindProducer(__goscriptValue: opentracing.Tag): void {
	$.assignStruct(SpanKindProducer, __goscriptValue)
}

export let SpanKindConsumerEnum: SpanKindEnum = "consumer"

export function __goscript_set_SpanKindConsumerEnum(__goscriptValue: SpanKindEnum): void {
	SpanKindConsumerEnum = __goscriptValue
}

export let SpanKindConsumer: opentracing.Tag = new opentracing.Tag({Key: SpanKind, Value: $.namedValueInterfaceValue<any>(SpanKindConsumerEnum, "ext.SpanKindEnum", {}, /* @__PURE__ */ $.basicType("string", "ext.SpanKindEnum"))}, true)

export function __goscript_set_SpanKindConsumer(__goscriptValue: opentracing.Tag): void {
	$.assignStruct(SpanKindConsumer, __goscriptValue)
}

export let Component: StringTagName = "component"

export function __goscript_set_Component(__goscriptValue: StringTagName): void {
	Component = __goscriptValue
}

export let SamplingPriority: Uint16TagName = "sampling.priority"

export function __goscript_set_SamplingPriority(__goscriptValue: Uint16TagName): void {
	SamplingPriority = __goscriptValue
}

export let PeerService: StringTagName = "peer.service"

export function __goscript_set_PeerService(__goscriptValue: StringTagName): void {
	PeerService = __goscriptValue
}

export let PeerAddress: StringTagName = "peer.address"

export function __goscript_set_PeerAddress(__goscriptValue: StringTagName): void {
	PeerAddress = __goscriptValue
}

export let PeerHostname: StringTagName = "peer.hostname"

export function __goscript_set_PeerHostname(__goscriptValue: StringTagName): void {
	PeerHostname = __goscriptValue
}

export let PeerHostIPv4: IPv4TagName = "peer.ipv4"

export function __goscript_set_PeerHostIPv4(__goscriptValue: IPv4TagName): void {
	PeerHostIPv4 = __goscriptValue
}

export let PeerHostIPv6: StringTagName = "peer.ipv6"

export function __goscript_set_PeerHostIPv6(__goscriptValue: StringTagName): void {
	PeerHostIPv6 = __goscriptValue
}

export let PeerPort: Uint16TagName = "peer.port"

export function __goscript_set_PeerPort(__goscriptValue: Uint16TagName): void {
	PeerPort = __goscriptValue
}

export let HTTPUrl: StringTagName = "http.url"

export function __goscript_set_HTTPUrl(__goscriptValue: StringTagName): void {
	HTTPUrl = __goscriptValue
}

export let HTTPMethod: StringTagName = "http.method"

export function __goscript_set_HTTPMethod(__goscriptValue: StringTagName): void {
	HTTPMethod = __goscriptValue
}

export let HTTPStatusCode: Uint16TagName = "http.status_code"

export function __goscript_set_HTTPStatusCode(__goscriptValue: Uint16TagName): void {
	HTTPStatusCode = __goscriptValue
}

export let DBInstance: StringTagName = "db.instance"

export function __goscript_set_DBInstance(__goscriptValue: StringTagName): void {
	DBInstance = __goscriptValue
}

export let DBStatement: StringTagName = "db.statement"

export function __goscript_set_DBStatement(__goscriptValue: StringTagName): void {
	DBStatement = __goscriptValue
}

export let DBType: StringTagName = "db.type"

export function __goscript_set_DBType(__goscriptValue: StringTagName): void {
	DBType = __goscriptValue
}

export let DBUser: StringTagName = "db.user"

export function __goscript_set_DBUser(__goscriptValue: StringTagName): void {
	DBUser = __goscriptValue
}

export let MessageBusDestination: StringTagName = "message_bus.destination"

export function __goscript_set_MessageBusDestination(__goscriptValue: StringTagName): void {
	MessageBusDestination = __goscriptValue
}

export let Error: BoolTagName = "error"

export function __goscript_set_Error(__goscriptValue: BoolTagName): void {
	Error = __goscriptValue
}

export async function spanKindTagName_Set(tag: spanKindTagName, span: opentracing.Span | null, value: SpanKindEnum): globalThis.Promise<void> {
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag(tag, $.namedValueInterfaceValue<any>(value, "ext.SpanKindEnum", {}, /* @__PURE__ */ $.basicType("string", "ext.SpanKindEnum"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function RPCServerOption(client: opentracing.SpanContext | null): opentracing.StartSpanOption | null {
	return $.interfaceValue<opentracing.StartSpanOption | null>(new rpcServerOption({clientContext: client}, true), "ext.rpcServerOption", "ext.rpcServerOption")
}

export async function StringTagName_Set(tag: StringTagName, span: opentracing.Span | null, value: string): globalThis.Promise<void> {
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag(tag, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Uint32TagName_Set(tag: Uint32TagName, span: opentracing.Span | null, value: number): globalThis.Promise<void> {
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag(tag, $.basicInterfaceValue(value, "uint32")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Uint16TagName_Set(tag: Uint16TagName, span: opentracing.Span | null, value: number): globalThis.Promise<void> {
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag(tag, $.basicInterfaceValue(value, "uint16")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function BoolTagName_Set(tag: BoolTagName, span: opentracing.Span | null, value: boolean): globalThis.Promise<void> {
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag(tag, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function IPv4TagName_Set(tag: IPv4TagName, span: opentracing.Span | null, value: number): globalThis.Promise<void> {
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag(tag, $.basicInterfaceValue(value, "uint32")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function IPv4TagName_SetString(tag: IPv4TagName, span: opentracing.Span | null, value: string): globalThis.Promise<void> {
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag(tag, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptAwait: any
