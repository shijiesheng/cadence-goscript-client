// Generated file based on observer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as yarpctls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/zap/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/transport/internal/tls/metrics", ["metrics.Params", "metrics.Observer"])

export class Params {
	public get Meter(): metrics.Scope | $.VarRef<metrics.Scope> | null {
		return this._fields.Meter
	}

	public set Meter(value: metrics.Scope | $.VarRef<metrics.Scope> | null) {
		this._fields.Meter = value
	}

	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public get TransportName(): string {
		return this._fields.TransportName
	}

	public set TransportName(value: string) {
		this._fields.TransportName = value
	}

	public get Direction(): string {
		return this._fields.Direction
	}

	public set Direction(value: string) {
		this._fields.Direction = value
	}

	public get Dest(): string {
		return this._fields.Dest
	}

	public set Dest(value: string) {
		this._fields.Dest = value
	}

	public get Mode(): yarpctls.Mode {
		return this._fields.Mode
	}

	public set Mode(value: yarpctls.Mode) {
		this._fields.Mode = value
	}

	public _fields: {
		Meter: metrics.Scope | $.VarRef<metrics.Scope> | null
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
		ServiceName: string
		TransportName: string
		Direction: string
		Dest: string
		Mode: yarpctls.Mode
	}

	constructor(init?: Partial<{Meter?: metrics.Scope | $.VarRef<metrics.Scope> | null, Logger?: zap.Logger | $.VarRef<zap.Logger> | null, ServiceName?: string, TransportName?: string, Direction?: string, Dest?: string, Mode?: yarpctls.Mode}>, __goscriptValue?: boolean) {
		this._fields = {
			Meter: init?.Meter ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			ServiceName: init?.ServiceName ?? ("" as string),
			TransportName: init?.TransportName ?? ("" as string),
			Direction: init?.Direction ?? ("" as string),
			Dest: init?.Dest ?? ("" as string),
			Mode: init?.Mode ?? (0 as yarpctls.Mode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Params {
		return new Params(this, true)
	}

	public __goscriptAssign(source: Params): void {
		const target = this._fields
		const values = source._fields
		target.Meter = values.Meter
		target.Logger = values.Logger
		target.ServiceName = values.ServiceName
		target.TransportName = values.TransportName
		target.Direction = values.Direction
		target.Dest = values.Dest
		target.Mode = values.Mode
	}

	static __typeInfo = $.registerStructType(
		"metrics.Params",
		() => new Params(),
		() => [],
		Params,
		() => [{ name: "Meter", key: "Meter", type: /* @__PURE__ */ $.pointerType("metrics.Scope") }, { name: "Logger", key: "Logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }, { name: "ServiceName", key: "ServiceName", type: /* @__PURE__ */ $.basicType("string") }, { name: "TransportName", key: "TransportName", type: /* @__PURE__ */ $.basicType("string") }, { name: "Direction", key: "Direction", type: /* @__PURE__ */ $.basicType("string") }, { name: "Dest", key: "Dest", type: /* @__PURE__ */ $.basicType("string") }, { name: "Mode", key: "Mode", type: /* @__PURE__ */ $.basicType("uint16", "tls.Mode") }]
	)
}

export class Observer {
	public get plaintextConnectionsCounter(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.plaintextConnectionsCounter
	}

	public set plaintextConnectionsCounter(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.plaintextConnectionsCounter = value
	}

	public get tlsConnectionsCounter(): metrics.CounterVector | $.VarRef<metrics.CounterVector> | null {
		return this._fields.tlsConnectionsCounter
	}

	public set tlsConnectionsCounter(value: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null) {
		this._fields.tlsConnectionsCounter = value
	}

	public get tlsFailuresCounter(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.tlsFailuresCounter
	}

	public set tlsFailuresCounter(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.tlsFailuresCounter = value
	}

	public _fields: {
		plaintextConnectionsCounter: metrics.Counter | $.VarRef<metrics.Counter> | null
		tlsConnectionsCounter: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null
		tlsFailuresCounter: metrics.Counter | $.VarRef<metrics.Counter> | null
	}

	constructor(init?: Partial<{plaintextConnectionsCounter?: metrics.Counter | $.VarRef<metrics.Counter> | null, tlsConnectionsCounter?: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null, tlsFailuresCounter?: metrics.Counter | $.VarRef<metrics.Counter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			plaintextConnectionsCounter: init?.plaintextConnectionsCounter ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			tlsConnectionsCounter: init?.tlsConnectionsCounter ?? (null! as metrics.CounterVector | $.VarRef<metrics.CounterVector> | null),
			tlsFailuresCounter: init?.tlsFailuresCounter ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Observer {
		return new Observer(this, true)
	}

	public __goscriptAssign(source: Observer): void {
		const target = this._fields
		const values = source._fields
		target.plaintextConnectionsCounter = values.plaintextConnectionsCounter
		target.tlsConnectionsCounter = values.tlsConnectionsCounter
		target.tlsFailuresCounter = values.tlsFailuresCounter
	}

	public IncPlaintextConnections(): void {
		const o: Observer | $.VarRef<Observer> | null = this;
		metrics.Counter.prototype.Inc.call($.pointerValue<Observer>(o).plaintextConnectionsCounter)
	}

	public IncTLSConnections(version: number): void {
		const o: Observer | $.VarRef<Observer> | null = this;
		metrics.Counter.prototype.Inc.call(metrics.CounterVector.prototype.MustGet.call($.pointerValue<Observer>(o).tlsConnectionsCounter, $.arrayToSlice<string>(["version", tlsVersionString(version)])))
	}

	public IncTLSHandshakeFailures(): void {
		const o: Observer | $.VarRef<Observer> | null = this;
		metrics.Counter.prototype.Inc.call($.pointerValue<Observer>(o).tlsFailuresCounter)
	}

	static __typeInfo = $.registerStructType(
		"metrics.Observer",
		() => new Observer(),
		() => [{ name: "IncPlaintextConnections", args: [], returns: [], pointerReceiver: true }, { name: "IncTLSConnections", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "IncTLSHandshakeFailures", args: [], returns: [], pointerReceiver: true }],
		Observer,
		() => [{ name: "plaintextConnectionsCounter", key: "plaintextConnectionsCounter", type: /* @__PURE__ */ $.pointerType("metrics.Counter") }, { name: "tlsConnectionsCounter", key: "tlsConnectionsCounter", type: /* @__PURE__ */ $.pointerType("metrics.CounterVector") }, { name: "tlsFailuresCounter", key: "tlsFailuresCounter", type: /* @__PURE__ */ $.pointerType("metrics.Counter") }]
	)
}

export const _serviceTag: string = "service"

export const _transportTag: string = "transport"

export const _versionTag: string = "version"

export const _destTag: string = "dest"

export const _directionTag: string = "direction"

export const _modeTag: string = "mode"

export const _componentTag: string = "component"

export function NewObserver(p: Params): Observer | $.VarRef<Observer> | null {
	let tags: metrics.Tags = $.makeMap<string, string>([["component", "yarpc"], ["service", p.ServiceName], ["transport", p.TransportName], ["mode", yarpctls.Mode_String(p.Mode)], ["direction", p.Direction], ["dest", p.Dest]])

	let __goscriptTuple0: any = metrics.Scope.prototype.Counter.call(p.Meter, new metrics.Spec({Name: "plaintext_connections", Help: "Total number of plaintext connections established.", ConstTags: tags}, true))
	let plaintextConns: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		zap.Logger.prototype.Error.call(p.Logger, "failed to create plaintext connections counter", $.arrayToSlice<zap.Field>([zap.Error(err)]))
	}

	let __goscriptTuple1: any = metrics.Scope.prototype.CounterVector.call(p.Meter, new metrics.Spec({Name: "tls_connections", Help: "Total number of TLS connections established.", ConstTags: tags, VarTags: $.arrayToSlice<string>(["version"])}, true))
	let tlsConns: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		zap.Logger.prototype.Error.call(p.Logger, "failed to create tls connections counter", $.arrayToSlice<zap.Field>([zap.Error(err)]))
	}

	let __goscriptTuple2: any = metrics.Scope.prototype.Counter.call(p.Meter, new metrics.Spec({Name: "tls_handshake_failures", Help: "Total number of TLS handshake failures.", ConstTags: tags}, true))
	let tlsHandshakeFailures: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		zap.Logger.prototype.Error.call(p.Logger, "failed to create tls handshake failures counter", $.arrayToSlice<zap.Field>([zap.Error(err)]))
	}

	return new Observer({tlsConnectionsCounter: tlsConns, tlsFailuresCounter: tlsHandshakeFailures, plaintextConnectionsCounter: plaintextConns})
}

export function tlsVersionString(version: number): string {
	switch (version) {
		case tls.VersionTLS10:
		{
			return "1.0"
			break
		}
		case tls.VersionTLS11:
		{
			return "1.1"
			break
		}
		case tls.VersionTLS12:
		{
			return "1.2"
			break
		}
		case tls.VersionTLS13:
		{
			return "1.3"
			break
		}
		default:
		{
			return "unknown"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
