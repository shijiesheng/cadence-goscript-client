// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_connectionstatus_string from "./connectionstatus_string.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import type * as __goscript_status_stringer from "./status_stringer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/fmt/index.js"
import "./connectionstatus_string.gs.ts"
import "./peer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/peer", ["peer.ErrPeerHasNoReferenceToSubscriber", "peer.ErrTransportHasNoReferenceToPeer", "peer.ErrInvalidPeerType", "peer.ErrPeerListAlreadyStarted", "peer.ErrPeerListNotStarted", "peer.ErrInvalidPeerConversion", "peer.ErrInvalidTransportConversion", "peer.ErrPeerAddAlreadyInList", "peer.ErrPeerRemoveNotInList", "peer.ErrChooseContextHasNoDeadline"])

export type ErrPeerListAlreadyStarted = string

$.registerNamedValueType(
	"peer.ErrPeerListAlreadyStarted",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerListAlreadyStarted_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*peer.ErrPeerListAlreadyStarted",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerListAlreadyStarted_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ErrPeerListNotStarted = string

$.registerNamedValueType(
	"peer.ErrPeerListNotStarted",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerListNotStarted_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*peer.ErrPeerListNotStarted",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerListNotStarted_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ErrPeerAddAlreadyInList = string

$.registerNamedValueType(
	"peer.ErrPeerAddAlreadyInList",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerAddAlreadyInList_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*peer.ErrPeerAddAlreadyInList",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerAddAlreadyInList_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ErrPeerRemoveNotInList = string

$.registerNamedValueType(
	"peer.ErrPeerRemoveNotInList",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerRemoveNotInList_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*peer.ErrPeerRemoveNotInList",
	{Error: (receiver: any, ...args: any[]) => (ErrPeerRemoveNotInList_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ErrChooseContextHasNoDeadline = string

$.registerNamedValueType(
	"peer.ErrChooseContextHasNoDeadline",
	{Error: (receiver: any, ...args: any[]) => (ErrChooseContextHasNoDeadline_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*peer.ErrChooseContextHasNoDeadline",
	{Error: (receiver: any, ...args: any[]) => (ErrChooseContextHasNoDeadline_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class ErrPeerHasNoReferenceToSubscriber {
	public get PeerIdentifier(): __goscript_peer.Identifier | null {
		return this._fields.PeerIdentifier
	}

	public set PeerIdentifier(value: __goscript_peer.Identifier | null) {
		this._fields.PeerIdentifier = value
	}

	public get PeerSubscriber(): __goscript_transport.Subscriber | null {
		return this._fields.PeerSubscriber
	}

	public set PeerSubscriber(value: __goscript_transport.Subscriber | null) {
		this._fields.PeerSubscriber = value
	}

	public _fields: {
		PeerIdentifier: __goscript_peer.Identifier | null
		PeerSubscriber: __goscript_transport.Subscriber | null
	}

	constructor(init?: Partial<{PeerIdentifier?: __goscript_peer.Identifier | null, PeerSubscriber?: __goscript_transport.Subscriber | null}>, __goscriptValue?: boolean) {
		this._fields = {
			PeerIdentifier: init?.PeerIdentifier ?? (null! as __goscript_peer.Identifier | null),
			PeerSubscriber: init?.PeerSubscriber ?? (null! as __goscript_transport.Subscriber | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrPeerHasNoReferenceToSubscriber {
		return new ErrPeerHasNoReferenceToSubscriber(this, true)
	}

	public __goscriptAssign(source: ErrPeerHasNoReferenceToSubscriber): void {
		const target = this._fields
		const values = source._fields
		target.PeerIdentifier = $.assignFieldValue(target.PeerIdentifier, values.PeerIdentifier, "peer.Identifier")
		target.PeerSubscriber = $.assignFieldValue(target.PeerSubscriber, values.PeerSubscriber, "peer.Subscriber")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("peer (%v) has no reference to peer subscriber (%v)", (e.PeerIdentifier as any), (e.PeerSubscriber as any))
	}

	static __typeInfo = $.registerStructType(
		"peer.ErrPeerHasNoReferenceToSubscriber",
		() => new ErrPeerHasNoReferenceToSubscriber(),
		() => [{ name: "Error", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		ErrPeerHasNoReferenceToSubscriber,
		() => [{ name: "PeerIdentifier", key: "PeerIdentifier", type: "peer.Identifier" }, { name: "PeerSubscriber", key: "PeerSubscriber", type: "peer.Subscriber" }]
	)
}

export class ErrTransportHasNoReferenceToPeer {
	public get TransportName(): string {
		return this._fields.TransportName
	}

	public set TransportName(value: string) {
		this._fields.TransportName = value
	}

	public get PeerIdentifier(): string {
		return this._fields.PeerIdentifier
	}

	public set PeerIdentifier(value: string) {
		this._fields.PeerIdentifier = value
	}

	public _fields: {
		TransportName: string
		PeerIdentifier: string
	}

	constructor(init?: Partial<{TransportName?: string, PeerIdentifier?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			TransportName: init?.TransportName ?? ("" as string),
			PeerIdentifier: init?.PeerIdentifier ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrTransportHasNoReferenceToPeer {
		return new ErrTransportHasNoReferenceToPeer(this, true)
	}

	public __goscriptAssign(source: ErrTransportHasNoReferenceToPeer): void {
		const target = this._fields
		const values = source._fields
		target.TransportName = values.TransportName
		target.PeerIdentifier = values.PeerIdentifier
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("transport %q has no reference to peer %q", e.TransportName, e.PeerIdentifier)
	}

	static __typeInfo = $.registerStructType(
		"peer.ErrTransportHasNoReferenceToPeer",
		() => new ErrTransportHasNoReferenceToPeer(),
		() => [{ name: "Error", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		ErrTransportHasNoReferenceToPeer,
		() => [{ name: "TransportName", key: "TransportName", type: /* @__PURE__ */ $.basicType("string") }, { name: "PeerIdentifier", key: "PeerIdentifier", type: /* @__PURE__ */ $.basicType("string") }]
	)
}

export class ErrInvalidPeerType {
	public get ExpectedType(): string {
		return this._fields.ExpectedType
	}

	public set ExpectedType(value: string) {
		this._fields.ExpectedType = value
	}

	public get PeerIdentifier(): __goscript_peer.Identifier | null {
		return this._fields.PeerIdentifier
	}

	public set PeerIdentifier(value: __goscript_peer.Identifier | null) {
		this._fields.PeerIdentifier = value
	}

	public _fields: {
		ExpectedType: string
		PeerIdentifier: __goscript_peer.Identifier | null
	}

	constructor(init?: Partial<{ExpectedType?: string, PeerIdentifier?: __goscript_peer.Identifier | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ExpectedType: init?.ExpectedType ?? ("" as string),
			PeerIdentifier: init?.PeerIdentifier ?? (null! as __goscript_peer.Identifier | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrInvalidPeerType {
		return new ErrInvalidPeerType(this, true)
	}

	public __goscriptAssign(source: ErrInvalidPeerType): void {
		const target = this._fields
		const values = source._fields
		target.ExpectedType = values.ExpectedType
		target.PeerIdentifier = $.assignFieldValue(target.PeerIdentifier, values.PeerIdentifier, "peer.Identifier")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("expected peer type (%s) but got peer (%v)", e.ExpectedType, (e.PeerIdentifier as any))
	}

	static __typeInfo = $.registerStructType(
		"peer.ErrInvalidPeerType",
		() => new ErrInvalidPeerType(),
		() => [{ name: "Error", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		ErrInvalidPeerType,
		() => [{ name: "ExpectedType", key: "ExpectedType", type: /* @__PURE__ */ $.basicType("string") }, { name: "PeerIdentifier", key: "PeerIdentifier", type: "peer.Identifier" }]
	)
}

export class ErrInvalidPeerConversion {
	public get Peer(): __goscript_peer.Peer | null {
		return this._fields.Peer
	}

	public set Peer(value: __goscript_peer.Peer | null) {
		this._fields.Peer = value
	}

	public get ExpectedType(): string {
		return this._fields.ExpectedType
	}

	public set ExpectedType(value: string) {
		this._fields.ExpectedType = value
	}

	public _fields: {
		Peer: __goscript_peer.Peer | null
		ExpectedType: string
	}

	constructor(init?: Partial<{Peer?: __goscript_peer.Peer | null, ExpectedType?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Peer: init?.Peer ?? (null! as __goscript_peer.Peer | null),
			ExpectedType: init?.ExpectedType ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrInvalidPeerConversion {
		return new ErrInvalidPeerConversion(this, true)
	}

	public __goscriptAssign(source: ErrInvalidPeerConversion): void {
		const target = this._fields
		const values = source._fields
		target.Peer = $.assignFieldValue(target.Peer, values.Peer, "peer.Peer")
		target.ExpectedType = values.ExpectedType
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("cannot convert peer (%v) to type %s", (e.Peer as any), e.ExpectedType)
	}

	static __typeInfo = $.registerStructType(
		"peer.ErrInvalidPeerConversion",
		() => new ErrInvalidPeerConversion(),
		() => [{ name: "Error", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		ErrInvalidPeerConversion,
		() => [{ name: "Peer", key: "Peer", type: "peer.Peer" }, { name: "ExpectedType", key: "ExpectedType", type: /* @__PURE__ */ $.basicType("string") }]
	)
}

export class ErrInvalidTransportConversion {
	public get Transport(): __goscript_transport.Transport | null {
		return this._fields.Transport
	}

	public set Transport(value: __goscript_transport.Transport | null) {
		this._fields.Transport = value
	}

	public get ExpectedType(): string {
		return this._fields.ExpectedType
	}

	public set ExpectedType(value: string) {
		this._fields.ExpectedType = value
	}

	public _fields: {
		Transport: __goscript_transport.Transport | null
		ExpectedType: string
	}

	constructor(init?: Partial<{Transport?: __goscript_transport.Transport | null, ExpectedType?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Transport: init?.Transport ?? (null! as __goscript_transport.Transport | null),
			ExpectedType: init?.ExpectedType ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrInvalidTransportConversion {
		return new ErrInvalidTransportConversion(this, true)
	}

	public __goscriptAssign(source: ErrInvalidTransportConversion): void {
		const target = this._fields
		const values = source._fields
		target.Transport = $.assignFieldValue(target.Transport, values.Transport, "peer.Transport")
		target.ExpectedType = values.ExpectedType
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("cannot convert transport (%v) to type %s", (e.Transport as any), e.ExpectedType)
	}

	static __typeInfo = $.registerStructType(
		"peer.ErrInvalidTransportConversion",
		() => new ErrInvalidTransportConversion(),
		() => [{ name: "Error", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		ErrInvalidTransportConversion,
		() => [{ name: "Transport", key: "Transport", type: "peer.Transport" }, { name: "ExpectedType", key: "ExpectedType", type: /* @__PURE__ */ $.basicType("string") }]
	)
}

export async function ErrPeerListAlreadyStarted_Error(e: ErrPeerListAlreadyStarted): globalThis.Promise<string> {
	return fmt.Sprintf("%s has already been started", e)
}

export async function ErrPeerListNotStarted_Error(e: ErrPeerListNotStarted): globalThis.Promise<string> {
	return fmt.Sprintf("%s has not been started or was stopped", e)
}

export async function ErrPeerAddAlreadyInList_Error(e: ErrPeerAddAlreadyInList): globalThis.Promise<string> {
	return fmt.Sprintf("can't add peer %q because is already in peerlist", e)
}

export async function ErrPeerRemoveNotInList_Error(e: ErrPeerRemoveNotInList): globalThis.Promise<string> {
	return fmt.Sprintf("can't remove peer (%s) because it is not in peerlist", e)
}

export async function ErrChooseContextHasNoDeadline_Error(e: ErrChooseContextHasNoDeadline): globalThis.Promise<string> {
	return fmt.Sprintf("can't wait for peer without a context deadline for peerlist %q", e)
}
