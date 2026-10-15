// Generated file based on peer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_connectionstatus_string from "./connectionstatus_string.gs.ts"

import type * as __goscript_status_stringer from "./status_stringer.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/fmt/index.js"
import "./connectionstatus_string.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/peer", ["peer.ConnectionStatus", "peer.Status", "peer.Identifier", "peer.StatusPeer", "peer.Peer"])

export type ConnectionStatus = number

$.registerNamedValueType(
	"peer.ConnectionStatus",
	{String: (receiver: any, ...args: any[]) => (__goscript_connectionstatus_string.ConnectionStatus_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*peer.ConnectionStatus",
	{String: (receiver: any, ...args: any[]) => (__goscript_connectionstatus_string.ConnectionStatus_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Identifier = {
	Identifier(): string
}

$.registerInterfaceType(
	"peer.Identifier",
	null,
	[{ name: "Identifier", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }]
);

export type StatusPeer = {
	Identifier(): string
	Status(): Status
}

$.registerInterfaceType(
	"peer.StatusPeer",
	null,
	[{ name: "Identifier", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Status", args: [], returns: [{ type: "peer.Status" }] }]
);

export type Peer = {
	EndRequest(): void
	Identifier(): string
	StartRequest(): void
	Status(): Status
}

$.registerInterfaceType(
	"peer.Peer",
	null,
	[{ name: "EndRequest", args: [], returns: [] }, { name: "Identifier", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "StartRequest", args: [], returns: [] }, { name: "Status", args: [], returns: [{ type: "peer.Status" }] }]
);

export class Status {
	// Current number of pending requests on this peer
	public get PendingRequestCount(): number {
		return this._fields.PendingRequestCount
	}

	public set PendingRequestCount(value: number) {
		this._fields.PendingRequestCount = value
	}

	// Current status of the Peer's connection
	public get ConnectionStatus(): ConnectionStatus {
		return this._fields.ConnectionStatus
	}

	public set ConnectionStatus(value: ConnectionStatus) {
		this._fields.ConnectionStatus = value
	}

	public _fields: {
		PendingRequestCount: number
		ConnectionStatus: ConnectionStatus
	}

	constructor(init?: Partial<{PendingRequestCount?: number, ConnectionStatus?: ConnectionStatus}>, __goscriptValue?: boolean) {
		this._fields = {
			PendingRequestCount: init?.PendingRequestCount ?? (0 as number),
			ConnectionStatus: init?.ConnectionStatus ?? (0 as ConnectionStatus)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Status {
		return new Status(this, true)
	}

	public __goscriptAssign(source: Status): void {
		const target = this._fields
		const values = source._fields
		target.PendingRequestCount = values.PendingRequestCount
		target.ConnectionStatus = values.ConnectionStatus
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		return fmt.Sprintf("{%v Pending:%d}", $.namedValueInterfaceValue<any>(s.ConnectionStatus, "peer.ConnectionStatus", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(s.PendingRequestCount, "int"))
	}

	static __typeInfo = $.registerStructType(
		"peer.Status",
		() => new Status(),
		() => [{ name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		Status,
		() => [{ name: "PendingRequestCount", key: "PendingRequestCount", type: /* @__PURE__ */ $.basicType("int") }, { name: "ConnectionStatus", key: "ConnectionStatus", type: /* @__PURE__ */ $.basicType("int", "peer.ConnectionStatus") }]
	)
}

export const Unavailable: ConnectionStatus = 0

export const Connecting: ConnectionStatus = 1

export const Available: ConnectionStatus = 2

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_connectionstatus_string.ConnectionStatus_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "peer.ConnectionStatus"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
