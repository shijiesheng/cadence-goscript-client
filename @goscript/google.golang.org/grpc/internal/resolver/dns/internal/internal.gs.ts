// Generated file based on internal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/resolver/dns/internal", ["internal.NetResolver"])

export type NetResolver = {
	LookupHost(ctx: context.Context | null, host: string): [$.Slice<string>, $.GoError] | globalThis.Promise<[$.Slice<string>, $.GoError]>
	LookupSRV(ctx: context.Context | null, service: string, proto: string, name: string): [string, $.Slice<net.SRV | $.VarRef<net.SRV> | null>, $.GoError] | globalThis.Promise<[string, $.Slice<net.SRV | $.VarRef<net.SRV> | null>, $.GoError]>
	LookupTXT(ctx: context.Context | null, name: string): [$.Slice<string>, $.GoError] | globalThis.Promise<[$.Slice<string>, $.GoError]>
}

$.registerInterfaceType(
	"internal.NetResolver",
	null,
	[$.methodSignature("LookupHost", [["ctx", "context.Context"], ["host", /* @__PURE__ */ $.basicType("string")]], [["addrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]]), $.methodSignature("LookupSRV", [["ctx", "context.Context"], ["service", /* @__PURE__ */ $.basicType("string")], ["proto", /* @__PURE__ */ $.basicType("string")], ["name", /* @__PURE__ */ $.basicType("string")]], [["cname", /* @__PURE__ */ $.basicType("string")], ["addrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.SRV"))], ["err", "error"]]), $.methodSignature("LookupTXT", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [["txts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]])]
);

export let ErrMissingAddr: $.GoError = errors.New("dns resolver: missing address")

export function __goscript_set_ErrMissingAddr(__goscriptValue: $.GoError): void {
	ErrMissingAddr = __goscriptValue
}

export let ErrEndsWithColon: $.GoError = errors.New("dns resolver: missing port after port-separator colon")

export function __goscript_set_ErrEndsWithColon(__goscriptValue: $.GoError): void {
	ErrEndsWithColon = __goscriptValue
}

export let TimeAfterFunc: ((_p0: time.Duration) => $.Channel<time.Time> | null | globalThis.Promise<$.Channel<time.Time> | null>) | null = null! as ((_p0: time.Duration) => $.Channel<time.Time> | null | globalThis.Promise<$.Channel<time.Time> | null>) | null

export function __goscript_set_TimeAfterFunc(__goscriptValue: ((_p0: time.Duration) => $.Channel<time.Time> | null | globalThis.Promise<$.Channel<time.Time> | null>) | null): void {
	TimeAfterFunc = __goscriptValue
}

export let TimeNowFunc: (() => time.Time | globalThis.Promise<time.Time>) | null = null! as (() => time.Time | globalThis.Promise<time.Time>) | null

export function __goscript_set_TimeNowFunc(__goscriptValue: (() => time.Time | globalThis.Promise<time.Time>) | null): void {
	TimeNowFunc = __goscriptValue
}

export let TimeUntilFunc: ((_p0: time.Time) => time.Duration | globalThis.Promise<time.Duration>) | null = null! as ((_p0: time.Time) => time.Duration | globalThis.Promise<time.Duration>) | null

export function __goscript_set_TimeUntilFunc(__goscriptValue: ((_p0: time.Time) => time.Duration | globalThis.Promise<time.Duration>) | null): void {
	TimeUntilFunc = __goscriptValue
}

export let NewNetResolver: ((_p0: string) => [NetResolver | null, $.GoError] | globalThis.Promise<[NetResolver | null, $.GoError]>) | null = null! as ((_p0: string) => [NetResolver | null, $.GoError] | globalThis.Promise<[NetResolver | null, $.GoError]>) | null

export function __goscript_set_NewNetResolver(__goscriptValue: ((_p0: string) => [NetResolver | null, $.GoError] | globalThis.Promise<[NetResolver | null, $.GoError]>) | null): void {
	NewNetResolver = __goscriptValue
}

export let AddressDialer: ((address: string) => ((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null | globalThis.Promise<((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null>) | null = null! as ((address: string) => ((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null | globalThis.Promise<((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null>) | null

export function __goscript_set_AddressDialer(__goscriptValue: ((address: string) => ((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null | globalThis.Promise<((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null>) | null): void {
	AddressDialer = __goscriptValue
}
