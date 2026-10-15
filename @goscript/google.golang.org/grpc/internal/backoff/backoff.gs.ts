// Generated file based on backoff.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as time from "@goscript/time/index.js"

import * as grpcbackoff from "@goscript/google.golang.org/grpc/backoff/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/backoff/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/backoff", ["backoff.Strategy", "backoff.Exponential"])

export type Strategy = {
	Backoff(retries: number): time.Duration | globalThis.Promise<time.Duration>
}

$.registerInterfaceType(
	"backoff.Strategy",
	null,
	[$.methodSignature("Backoff", [["retries", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")])]
);

export class Exponential {
	// Config contains all options to configure the backoff algorithm.
	public get Config(): grpcbackoff.Config {
		return this._fields.Config
	}

	public set Config(value: grpcbackoff.Config) {
		this._fields.Config = value
	}

	public _fields: {
		Config: grpcbackoff.Config
	}

	constructor(init?: Partial<{Config?: grpcbackoff.Config}>, __goscriptValue?: boolean) {
		this._fields = {
			Config: init?.Config ? init.Config.clone() : new grpcbackoff.Config(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Exponential {
		return new Exponential(this, true)
	}

	public __goscriptAssign(source: Exponential): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Config, values.Config)
	}

	public async Backoff(retries: number): globalThis.Promise<time.Duration> {
		const bc = this;
		if (retries == 0) {
			return bc.Config.BaseDelay
		}
		let backoff = globalThis.Number(bc.Config.BaseDelay)
		let max = globalThis.Number(bc.Config.MaxDelay)
		while ((backoff < max) && (retries > 0)) {
			backoff = backoff * (bc.Config.Multiplier)
			retries--
		}
		if (backoff > max) {
			backoff = max
		}
		// Randomize backoff delays so that if a cluster of requests start at
		// the same time, they won't operate in lockstep.
		backoff = backoff * (1 + (bc.Config.Jitter * ((await rand.Float64() * 2) - 1)))
		if (backoff < 0) {
			return 0n
		}
		return $.int64(backoff)
	}

	static __typeInfo = $.registerStructType(
		"backoff.Exponential",
		() => new Exponential(),
		() => [$.methodSignature("Backoff", [["retries", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")])],
		Exponential,
		() => [/* @__PURE__ */ $.structField("Config", "backoff.Config", [0], 0, true)]
	)
}

export let DefaultExponential: Exponential = new Exponential({Config: $.pointerValue<grpcbackoff.Config>(grpcbackoff.DefaultConfig)}, true)

export function __goscript_set_DefaultExponential(__goscriptValue: Exponential): void {
	$.assignStruct(DefaultExponential, __goscriptValue)
}

export let ErrResetBackoff: $.GoError = errors.New("reset backoff state")

export function __goscript_set_ErrResetBackoff(__goscriptValue: $.GoError): void {
	ErrResetBackoff = __goscriptValue
}

export async function RunF(ctx: context.Context | null, f: (() => $.GoError | globalThis.Promise<$.GoError>) | null, backoff: ((_p0: number) => time.Duration | globalThis.Promise<time.Duration>) | null): globalThis.Promise<void> {
	let attempt = 0
	let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(0n)
	while ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
					return $.selectVoidReturn()
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}

		let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(ErrResetBackoff)!)) {
			time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(timer), 0n)
			attempt = 0
			continue
		}
		if (err != null) {
			return
		}
		time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(timer), (__goscriptAwait = backoff!(attempt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		attempt++
	}
}

var __goscriptAwait: any
