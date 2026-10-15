// Generated file based on exponential.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as rand2 from "@goscript/math/rand/index.js"

import * as time from "@goscript/time/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/backoff", ["backoff.ExponentialOption", "backoff.exponentialOptions", "backoff.ExponentialStrategy", "backoff.exponentialBackoff"])

export type ExponentialOption = ((_p0: exponentialOptions | $.VarRef<exponentialOptions> | null) => void) | null

export class exponentialOptions {
	public get first(): time.Duration {
		return this._fields.first
	}

	public set first(value: time.Duration) {
		this._fields.first = value
	}

	public get max(): time.Duration {
		return this._fields.max
	}

	public set max(value: time.Duration) {
		this._fields.max = value
	}

	public get newRand(): (() => rand2.Rand | $.VarRef<rand2.Rand> | null | globalThis.Promise<rand2.Rand | $.VarRef<rand2.Rand> | null>) | null {
		return this._fields.newRand
	}

	public set newRand(value: (() => rand2.Rand | $.VarRef<rand2.Rand> | null | globalThis.Promise<rand2.Rand | $.VarRef<rand2.Rand> | null>) | null) {
		this._fields.newRand = value
	}

	public _fields: {
		first: time.Duration
		max: time.Duration
		newRand: (() => rand2.Rand | $.VarRef<rand2.Rand> | null | globalThis.Promise<rand2.Rand | $.VarRef<rand2.Rand> | null>) | null
	}

	constructor(init?: Partial<{first?: time.Duration, max?: time.Duration, newRand?: (() => rand2.Rand | $.VarRef<rand2.Rand> | null | globalThis.Promise<rand2.Rand | $.VarRef<rand2.Rand> | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			first: init?.first ?? (0n as time.Duration),
			max: init?.max ?? (0n as time.Duration),
			newRand: init?.newRand ?? (null! as (() => rand2.Rand | $.VarRef<rand2.Rand> | null | globalThis.Promise<rand2.Rand | $.VarRef<rand2.Rand> | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): exponentialOptions {
		return new exponentialOptions(this, true)
	}

	public __goscriptAssign(source: exponentialOptions): void {
		const target = this._fields
		const values = source._fields
		target.first = values.first
		target.max = values.max
		target.newRand = values.newRand
	}

	public validate(): $.GoError {
		const e = this;
		let err: $.GoError = null! as $.GoError
		if (e.first <= 0n) {
			err = multierr.Append(err, errInvalidFirst)
		}
		if (e.max < 0n) {
			err = multierr.Append(err, errInvalidMax)
		}
		return err
	}

	static __typeInfo = $.registerStructType(
		"backoff.exponentialOptions",
		() => new exponentialOptions(),
		() => [{ name: "validate", args: [], returns: [{ type: "error" }] }],
		exponentialOptions,
		() => [{ name: "first", key: "first", type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }, { name: "max", key: "max", type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }, { name: "newRand", key: "newRand", type: ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("rand.Rand")] } as $.FunctionTypeInfo) }]
	)
}

export class ExponentialStrategy {
	public get opts(): exponentialOptions {
		return this._fields.opts
	}

	public set opts(value: exponentialOptions) {
		this._fields.opts = value
	}

	public _fields: {
		opts: exponentialOptions
	}

	constructor(init?: Partial<{opts?: exponentialOptions}>, __goscriptValue?: boolean) {
		this._fields = {
			opts: init?.opts ? init.opts.clone() : new exponentialOptions(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExponentialStrategy {
		return new ExponentialStrategy(this, true)
	}

	public __goscriptAssign(source: ExponentialStrategy): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.opts, values.opts)
	}

	public async Backoff(): globalThis.Promise<backoff.Backoff | null> {
		const e: ExponentialStrategy | $.VarRef<ExponentialStrategy> | null = this;
		const e$: ExponentialStrategy = e == null ? $.pointerTarget<ExponentialStrategy>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<ExponentialStrategy>(e)
		return $.interfaceValue<backoff.Backoff | null>((await (async () => { const __goscriptLiteralField0 = time.Duration_Nanoseconds((e$ as ExponentialStrategy).opts.max); const __goscriptLiteralField1 = ((__goscriptAwait = (e$ as ExponentialStrategy).opts.newRand!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as rand2.Rand | $.VarRef<rand2.Rand> | null); return new exponentialBackoff({first: (e$ as ExponentialStrategy).opts.first, max: __goscriptLiteralField0, rand: __goscriptLiteralField1}) })()), "*backoff.exponentialBackoff", /* @__PURE__ */ $.pointerType("backoff.exponentialBackoff"))
	}

	public IsEqual(o: ExponentialStrategy | $.VarRef<ExponentialStrategy> | null): boolean {
		const e: ExponentialStrategy | $.VarRef<ExponentialStrategy> | null = this;
		const e$: ExponentialStrategy = e == null ? $.pointerTarget<ExponentialStrategy>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<ExponentialStrategy>(e)
		const o$: ExponentialStrategy = o == null ? $.pointerTarget<ExponentialStrategy>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ExponentialStrategy>(o)
		if ((e$ as ExponentialStrategy).opts.first != (o$ as ExponentialStrategy).opts.first) {
			return false
		}
		if ((e$ as ExponentialStrategy).opts.max != (o$ as ExponentialStrategy).opts.max) {
			return false
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"backoff.ExponentialStrategy",
		() => new ExponentialStrategy(),
		() => [{ name: "Backoff", args: [], returns: [{ type: "backoff.Backoff" }], pointerReceiver: true }, { name: "IsEqual", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }],
		ExponentialStrategy,
		() => [{ name: "opts", key: "opts", type: "backoff.exponentialOptions" }]
	)
}

export class exponentialBackoff {
	public get first(): time.Duration {
		return this._fields.first
	}

	public set first(value: time.Duration) {
		this._fields.first = value
	}

	public get max(): bigint {
		return this._fields.max
	}

	public set max(value: bigint) {
		this._fields.max = value
	}

	public get rand(): rand2.Rand | $.VarRef<rand2.Rand> | null {
		return this._fields.rand
	}

	public set rand(value: rand2.Rand | $.VarRef<rand2.Rand> | null) {
		this._fields.rand = value
	}

	public _fields: {
		first: time.Duration
		max: bigint
		rand: rand2.Rand | $.VarRef<rand2.Rand> | null
	}

	constructor(init?: Partial<{first?: time.Duration, max?: bigint, rand?: rand2.Rand | $.VarRef<rand2.Rand> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			first: init?.first ?? (0n as time.Duration),
			max: init?.max ?? (0n as bigint),
			rand: init?.rand ?? (null! as rand2.Rand | $.VarRef<rand2.Rand> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): exponentialBackoff {
		return new exponentialBackoff(this, true)
	}

	public __goscriptAssign(source: exponentialBackoff): void {
		const target = this._fields
		const values = source._fields
		target.first = values.first
		target.max = values.max
		target.rand = values.rand
	}

	public Duration(attempts: number): time.Duration {
		const e: exponentialBackoff | $.VarRef<exponentialBackoff> | null = this;
		const e$: exponentialBackoff = e == null ? $.pointerTarget<exponentialBackoff>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<exponentialBackoff>(e)
		let spread = $.int64Mul(($.int64Shl(1n, attempts)), time.Duration_Nanoseconds((e$ as exponentialBackoff).first))
		if ((spread <= 0n) || (spread > (e$ as exponentialBackoff).max)) {
			spread = (e$ as exponentialBackoff).max
		}
		// Adding 1 to the spread ensures that the upper bound of the range of
		// possible durations includes the maximum.
		return $.int64(rand2.Rand.prototype.Int63n.call((e$ as exponentialBackoff).rand, $.int64Add(spread, 1n)))
	}

	static __typeInfo = $.registerStructType(
		"backoff.exponentialBackoff",
		() => new exponentialBackoff(),
		() => [{ name: "Duration", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }], pointerReceiver: true }],
		exponentialBackoff,
		() => [{ name: "first", key: "first", type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }, { name: "max", key: "max", type: /* @__PURE__ */ $.basicType("int64") }, { name: "rand", key: "rand", type: /* @__PURE__ */ $.pointerType("rand.Rand") }]
	)
}

export let errInvalidFirst: $.GoError = errors.New("invalid first duration for exponential backoff, need greater than zero")

export function __goscript_set_errInvalidFirst(__goscriptValue: $.GoError): void {
	errInvalidFirst = __goscriptValue
}

export let errInvalidMax: $.GoError = errors.New("invalid max for exponential backoff, need greater than or equal to zero")

export function __goscript_set_errInvalidMax(__goscriptValue: $.GoError): void {
	errInvalidMax = __goscriptValue
}

export function newRand(): rand2.Rand | $.VarRef<rand2.Rand> | null {
	return rand2.New(rand2.NewSource($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()))
}

export let defaultExponentialOpts: exponentialOptions = new exponentialOptions({first: 10000000n, max: 60000000000n, newRand: newRand}, true)

export function __goscript_set_defaultExponentialOpts(__goscriptValue: exponentialOptions): void {
	$.assignStruct(defaultExponentialOpts, __goscriptValue)
}

export let DefaultExponential: ExponentialStrategy | $.VarRef<ExponentialStrategy> | null = new ExponentialStrategy({opts: defaultExponentialOpts})

export function __goscript_set_DefaultExponential(__goscriptValue: ExponentialStrategy | $.VarRef<ExponentialStrategy> | null): void {
	DefaultExponential = __goscriptValue
}

export function FirstBackoff(t: time.Duration): ExponentialOption | null {
	return $.functionValue((options: exponentialOptions | $.VarRef<exponentialOptions> | null): void => {
		$.pointerValue<exponentialOptions>(options).first = t
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("backoff.exponentialOptions")], results: [] } as $.FunctionTypeInfo))
}

export function MaxBackoff(t: time.Duration): ExponentialOption | null {
	return $.functionValue((options: exponentialOptions | $.VarRef<exponentialOptions> | null): void => {
		$.pointerValue<exponentialOptions>(options).max = t
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("backoff.exponentialOptions")], results: [] } as $.FunctionTypeInfo))
}

export function randGenerator(newRand: (() => rand2.Rand | $.VarRef<rand2.Rand> | null | globalThis.Promise<rand2.Rand | $.VarRef<rand2.Rand> | null>) | null): ExponentialOption | null {
	return $.functionValue((options: exponentialOptions | $.VarRef<exponentialOptions> | null): void => {
		$.pointerValue<exponentialOptions>(options).newRand = newRand
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("backoff.exponentialOptions")], results: [] } as $.FunctionTypeInfo))
}

export async function NewExponential(opts: $.Slice<ExponentialOption | null>): globalThis.Promise<[ExponentialStrategy | $.VarRef<ExponentialStrategy> | null, $.GoError]> {
	let options = $.varRef((defaultExponentialOpts).clone())
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ExponentialOption | null)
		void (__goscriptAwait = opt!(options), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	{
		let err = $.markAsStructValue($.cloneStructValue(options.value)).validate()
		if (err != null) {
			return [null, err]
		}
	}

	return [new ExponentialStrategy({opts: options.value}), null]
}

var __goscriptAwait: any
