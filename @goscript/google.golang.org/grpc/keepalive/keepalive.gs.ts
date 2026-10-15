// Generated file based on keepalive.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("google.golang.org/grpc/keepalive", ["keepalive.ClientParameters", "keepalive.ServerParameters", "keepalive.EnforcementPolicy"])

export class ClientParameters {
	// After a duration of this time if the client doesn't see any activity it
	// pings the server to see if the transport is still alive.
	// If set below 10s, a minimum value of 10s will be used instead.
	//
	// Note that gRPC servers have a default EnforcementPolicy.MinTime of 5
	// minutes (which means the client shouldn't ping more frequently than every
	// 5 minutes).
	//
	// Though not ideal, it's not a strong requirement for Time to be less than
	// EnforcementPolicy.MinTime.  Time will automatically double if the server
	// disconnects due to its enforcement policy.
	//
	// For more details, see
	// https://github.com/grpc/proposal/blob/master/A8-client-side-keepalive.md
	public get Time(): time.Duration {
		return this._fields.Time
	}

	public set Time(value: time.Duration) {
		this._fields.Time = value
	}

	// After having pinged for keepalive check, the client waits for a duration
	// of Timeout and if no activity is seen even after that the connection is
	// closed.
	//
	// If keepalive is enabled, and this value is not explicitly set, the default
	// is 20 seconds.
	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	// If true, client sends keepalive pings even with no active RPCs. If false,
	// when there are no active RPCs, Time and Timeout will be ignored and no
	// keepalive pings will be sent.
	public get PermitWithoutStream(): boolean {
		return this._fields.PermitWithoutStream
	}

	public set PermitWithoutStream(value: boolean) {
		this._fields.PermitWithoutStream = value
	}

	public _fields: {
		Time: time.Duration
		Timeout: time.Duration
		PermitWithoutStream: boolean
	}

	constructor(init?: Partial<{Time?: time.Duration, Timeout?: time.Duration, PermitWithoutStream?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Time: init?.Time ?? (0n as time.Duration),
			Timeout: init?.Timeout ?? (0n as time.Duration),
			PermitWithoutStream: init?.PermitWithoutStream ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientParameters {
		return new ClientParameters(this, true)
	}

	public __goscriptAssign(source: ClientParameters): void {
		const target = this._fields
		const values = source._fields
		target.Time = values.Time
		target.Timeout = values.Timeout
		target.PermitWithoutStream = values.PermitWithoutStream
	}

	static __typeInfo = $.registerStructType(
		"keepalive.ClientParameters",
		() => new ClientParameters(),
		() => [],
		ClientParameters,
		() => [/* @__PURE__ */ $.structField("Time", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("PermitWithoutStream", /* @__PURE__ */ $.basicType("bool"), [2], 16, true)]
	)
}

export class ServerParameters {
	// MaxConnectionIdle is a duration for the amount of time after which an
	// idle connection would be closed by sending a GoAway. Idleness duration is
	// defined since the most recent time the number of outstanding RPCs became
	// zero or the connection establishment.
	public get MaxConnectionIdle(): time.Duration {
		return this._fields.MaxConnectionIdle
	}

	public set MaxConnectionIdle(value: time.Duration) {
		this._fields.MaxConnectionIdle = value
	}

	// MaxConnectionAge is a duration for the maximum amount of time a
	// connection may exist before it will be closed by sending a GoAway. A
	// random jitter of +/-10% will be added to MaxConnectionAge to spread out
	// connection storms.
	public get MaxConnectionAge(): time.Duration {
		return this._fields.MaxConnectionAge
	}

	public set MaxConnectionAge(value: time.Duration) {
		this._fields.MaxConnectionAge = value
	}

	// MaxConnectionAgeGrace is an additive period after MaxConnectionAge after
	// which the connection will be forcibly closed.
	public get MaxConnectionAgeGrace(): time.Duration {
		return this._fields.MaxConnectionAgeGrace
	}

	public set MaxConnectionAgeGrace(value: time.Duration) {
		this._fields.MaxConnectionAgeGrace = value
	}

	// After a duration of this time if the server doesn't see any activity it
	// pings the client to see if the transport is still alive.
	// If set below 1s, a minimum value of 1s will be used instead.
	public get Time(): time.Duration {
		return this._fields.Time
	}

	public set Time(value: time.Duration) {
		this._fields.Time = value
	}

	// After having pinged for keepalive check, the server waits for a duration
	// of Timeout and if no activity is seen even after that the connection is
	// closed.
	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	public _fields: {
		MaxConnectionIdle: time.Duration
		MaxConnectionAge: time.Duration
		MaxConnectionAgeGrace: time.Duration
		Time: time.Duration
		Timeout: time.Duration
	}

	constructor(init?: Partial<{MaxConnectionIdle?: time.Duration, MaxConnectionAge?: time.Duration, MaxConnectionAgeGrace?: time.Duration, Time?: time.Duration, Timeout?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxConnectionIdle: init?.MaxConnectionIdle ?? (0n as time.Duration),
			MaxConnectionAge: init?.MaxConnectionAge ?? (0n as time.Duration),
			MaxConnectionAgeGrace: init?.MaxConnectionAgeGrace ?? (0n as time.Duration),
			Time: init?.Time ?? (0n as time.Duration),
			Timeout: init?.Timeout ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerParameters {
		return new ServerParameters(this, true)
	}

	public __goscriptAssign(source: ServerParameters): void {
		const target = this._fields
		const values = source._fields
		target.MaxConnectionIdle = values.MaxConnectionIdle
		target.MaxConnectionAge = values.MaxConnectionAge
		target.MaxConnectionAgeGrace = values.MaxConnectionAgeGrace
		target.Time = values.Time
		target.Timeout = values.Timeout
	}

	static __typeInfo = $.registerStructType(
		"keepalive.ServerParameters",
		() => new ServerParameters(),
		() => [],
		ServerParameters,
		() => [/* @__PURE__ */ $.structField("MaxConnectionIdle", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("MaxConnectionAge", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("MaxConnectionAgeGrace", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true), /* @__PURE__ */ $.structField("Time", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 24, true), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 32, true)]
	)
}

export class EnforcementPolicy {
	// MinTime is the minimum amount of time a client should wait before sending
	// a keepalive ping.
	public get MinTime(): time.Duration {
		return this._fields.MinTime
	}

	public set MinTime(value: time.Duration) {
		this._fields.MinTime = value
	}

	// If true, server allows keepalive pings even when there are no active
	// streams(RPCs). If false, and client sends ping when there are no active
	// streams, server will send GOAWAY and close the connection.
	public get PermitWithoutStream(): boolean {
		return this._fields.PermitWithoutStream
	}

	public set PermitWithoutStream(value: boolean) {
		this._fields.PermitWithoutStream = value
	}

	public _fields: {
		MinTime: time.Duration
		PermitWithoutStream: boolean
	}

	constructor(init?: Partial<{MinTime?: time.Duration, PermitWithoutStream?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			MinTime: init?.MinTime ?? (0n as time.Duration),
			PermitWithoutStream: init?.PermitWithoutStream ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnforcementPolicy {
		return new EnforcementPolicy(this, true)
	}

	public __goscriptAssign(source: EnforcementPolicy): void {
		const target = this._fields
		const values = source._fields
		target.MinTime = values.MinTime
		target.PermitWithoutStream = values.PermitWithoutStream
	}

	static __typeInfo = $.registerStructType(
		"keepalive.EnforcementPolicy",
		() => new EnforcementPolicy(),
		() => [],
		EnforcementPolicy,
		() => [/* @__PURE__ */ $.structField("MinTime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("PermitWithoutStream", /* @__PURE__ */ $.basicType("bool"), [1], 8, true)]
	)
}
