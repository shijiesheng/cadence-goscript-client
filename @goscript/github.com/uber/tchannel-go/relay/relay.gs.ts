// Generated file based on relay.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go/relay", ["relay.KeyVal", "relay.CallFrame", "relay.RespFrame", "relay.Conn", "relay.RateLimitDropError"])

export type CallFrame = {
	Arg2Append(key: $.Slice<number>, val: $.Slice<number>): void
	Arg2EndOffset(): [number, boolean]
	Arg2Iterator(): [arg2.KeyValIterator, $.GoError]
	Arg2StartOffset(): number
	Caller(): $.Slice<number>
	Method(): $.Slice<number>
	RoutingDelegate(): $.Slice<number>
	RoutingKey(): $.Slice<number>
	Service(): $.Slice<number>
	TTL(): time.Duration
}

$.registerInterfaceType(
	"relay.CallFrame",
	null,
	[$.methodSignature("Arg2Append", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Arg2EndOffset", [], [["_", /* @__PURE__ */ $.basicType("int")], ["hasMore", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Arg2Iterator", [], ["arg2.KeyValIterator", "error"]), $.methodSignature("Arg2StartOffset", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Caller", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Method", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Service", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("TTL", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")])]
);

export type RespFrame = {
	Arg2(): $.Slice<number>
	Arg2IsFragmented(): boolean
	ArgScheme(): $.Slice<number>
	OK(): boolean
}

$.registerInterfaceType(
	"relay.RespFrame",
	null,
	[$.methodSignature("Arg2", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Arg2IsFragmented", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ArgScheme", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("OK", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class KeyVal {
	public get Key(): $.Slice<number> {
		return this._fields.Key
	}

	public set Key(value: $.Slice<number>) {
		this._fields.Key = value
	}

	public get Val(): $.Slice<number> {
		return this._fields.Val
	}

	public set Val(value: $.Slice<number>) {
		this._fields.Val = value
	}

	public _fields: {
		Key: $.Slice<number>
		Val: $.Slice<number>
	}

	constructor(init?: Partial<{Key?: $.Slice<number>, Val?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? (null! as $.Slice<number>),
			Val: init?.Val ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): KeyVal {
		return new KeyVal(this, true)
	}

	public __goscriptAssign(source: KeyVal): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.Val = values.Val
	}

	static __typeInfo = $.registerStructType(
		"relay.KeyVal",
		() => new KeyVal(),
		() => [],
		KeyVal,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("Val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true)]
	)
}

export class Conn {
	// RemoteAddr is the remote address of the underlying TCP connection.
	public get RemoteAddr(): string {
		return this._fields.RemoteAddr
	}

	public set RemoteAddr(value: string) {
		this._fields.RemoteAddr = value
	}

	// RemoteProcessName is the process name sent in the TChannel handshake.
	public get RemoteProcessName(): string {
		return this._fields.RemoteProcessName
	}

	public set RemoteProcessName(value: string) {
		this._fields.RemoteProcessName = value
	}

	// IsOutbound returns whether this connection is an outbound connection
	// initiated via the relay.
	public get IsOutbound(): boolean {
		return this._fields.IsOutbound
	}

	public set IsOutbound(value: boolean) {
		this._fields.IsOutbound = value
	}

	// Context contains connection-specific context which can be accessed via
	// RelayHost.Start()
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public _fields: {
		RemoteAddr: string
		RemoteProcessName: string
		IsOutbound: boolean
		Context: context.Context | null
	}

	constructor(init?: Partial<{RemoteAddr?: string, RemoteProcessName?: string, IsOutbound?: boolean, Context?: context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RemoteAddr: init?.RemoteAddr ?? ("" as string),
			RemoteProcessName: init?.RemoteProcessName ?? ("" as string),
			IsOutbound: init?.IsOutbound ?? (false as boolean),
			Context: init?.Context ?? (null! as context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Conn {
		return new Conn(this, true)
	}

	public __goscriptAssign(source: Conn): void {
		const target = this._fields
		const values = source._fields
		target.RemoteAddr = values.RemoteAddr
		target.RemoteProcessName = values.RemoteProcessName
		target.IsOutbound = values.IsOutbound
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
	}

	static __typeInfo = $.registerStructType(
		"relay.Conn",
		() => new Conn(),
		() => [],
		Conn,
		() => [/* @__PURE__ */ $.structField("RemoteAddr", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RemoteProcessName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("IsOutbound", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("Context", "context.Context", [3], 40, true)]
	)
}

export class RateLimitDropError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RateLimitDropError {
		return new RateLimitDropError(this, true)
	}

	public __goscriptAssign(source: RateLimitDropError): void {
	}

	public Error(): string {
		const e = this;
		return "frame dropped silently due to rate limiting"
	}

	static __typeInfo = $.registerStructType(
		"relay.RateLimitDropError",
		() => new RateLimitDropError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		RateLimitDropError,
		() => []
	)
}
