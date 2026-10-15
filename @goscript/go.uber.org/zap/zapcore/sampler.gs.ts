// Generated file based on sampler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_core from "./core.gs.ts"

import type * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_write_syncer from "./write_syncer.gs.ts"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./core.gs.ts"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./write_syncer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.counter", "zapcore.counters", "zapcore.SamplingDecision", "zapcore.optionFunc", "zapcore.SamplerOption", "zapcore.sampler"])

export type counters = counter[][]

$.registerNamedType("zapcore.counters", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.arrayType("zapcore.counter", 4096), 7));

$.registerNamedValueType(
	"*zapcore.counters",
	{get: (receiver: any, ...args: any[]) => (counters__get as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("get", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("zapcore.counter")])]
);

export type SamplingDecision = number

export type optionFunc = ((_p0: sampler | $.VarRef<sampler> | null) => void) | null

$.registerNamedValueType(
	"zapcore.optionFunc",
	{apply: (receiver: any, ...args: any[]) => (optionFunc_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["s", /* @__PURE__ */ $.pointerType("zapcore.sampler")]])]
);

$.registerNamedValueType(
	"*zapcore.optionFunc",
	{apply: (receiver: any, ...args: any[]) => (optionFunc_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["s", /* @__PURE__ */ $.pointerType("zapcore.sampler")]])]
);

export type SamplerOption = {
	apply(_p0: sampler | $.VarRef<sampler> | null): void
}

$.registerInterfaceType(
	"zapcore.SamplerOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("zapcore.sampler")])]
);

export class counter {
	public get resetAt(): atomic.Int64 {
		return this._fields.resetAt
	}

	public set resetAt(value: atomic.Int64) {
		this._fields.resetAt = value
	}

	public get counter(): atomic.Uint64 {
		return this._fields.counter
	}

	public set counter(value: atomic.Uint64) {
		this._fields.counter = value
	}

	public _fields: {
		resetAt: atomic.Int64
		counter: atomic.Uint64
	}

	constructor(init?: Partial<{resetAt?: atomic.Int64, counter?: atomic.Uint64}>, __goscriptValue?: boolean) {
		this._fields = {
			resetAt: init?.resetAt ? $.markAsStructValue($.cloneStructValue(init.resetAt)) : $.markAsStructValue(new atomic.Int64()),
			counter: init?.counter ? $.markAsStructValue($.cloneStructValue(init.counter)) : $.markAsStructValue(new atomic.Uint64())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): counter {
		return new counter(this, true)
	}

	public __goscriptAssign(source: counter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.resetAt, values.resetAt)
		$.assignStruct(target.counter, values.counter)
	}

	public IncCheckReset(t: time.Time, tick: time.Duration): bigint {
		const c: counter | $.VarRef<counter> | null = this;
		const c$: counter = c == null ? $.pointerTarget<counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<counter>(c)
		let tn = $.markAsStructValue($.cloneStructValue(t)).UnixNano()
		let resetAfter = (c$ as counter).resetAt.Load()
		if (resetAfter > tn) {
			return (c$ as counter).counter.Add(1n)
		}

		void (c$ as counter).counter.Store(1n)

		let newResetAfter = $.int64Add(tn, time.Duration_Nanoseconds(tick))
		if (!(c$ as counter).resetAt.CompareAndSwap(resetAfter, newResetAfter)) {
			// We raced with another goroutine trying to reset, and it also reset
			// the counter to 1, so we need to reincrement the counter.
			return (c$ as counter).counter.Add(1n)
		}

		return 1n
	}

	static __typeInfo = $.registerStructType(
		"zapcore.counter",
		() => new counter(),
		() => [$.methodSignature("IncCheckReset", [["t", "time.Time"], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("uint64")], true)],
		counter,
		() => [/* @__PURE__ */ $.structField("resetAt", "atomic.Int64", [0], 0, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("counter", "atomic.Uint64", [1], 8, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export class sampler {
	public get Core(): __goscript_core.Core | null {
		return this._fields.Core
	}

	public set Core(value: __goscript_core.Core | null) {
		this._fields.Core = value
	}

	public get counts(): $.VarRef<counters> | null {
		return this._fields.counts
	}

	public set counts(value: $.VarRef<counters> | null) {
		this._fields.counts = value
	}

	public get tick(): time.Duration {
		return this._fields.tick
	}

	public set tick(value: time.Duration) {
		this._fields.tick = value
	}

	public get first(): bigint {
		return this._fields.first
	}

	public set first(value: bigint) {
		this._fields.first = value
	}

	public get thereafter(): bigint {
		return this._fields.thereafter
	}

	public set thereafter(value: bigint) {
		this._fields.thereafter = value
	}

	public get hook(): ((_p0: __goscript_entry.Entry, _p1: SamplingDecision) => void) | null {
		return this._fields.hook
	}

	public set hook(value: ((_p0: __goscript_entry.Entry, _p1: SamplingDecision) => void) | null) {
		this._fields.hook = value
	}

	public _fields: {
		Core: __goscript_core.Core | null
		counts: $.VarRef<counters> | null
		tick: time.Duration
		first: bigint
		thereafter: bigint
		hook: ((_p0: __goscript_entry.Entry, _p1: SamplingDecision) => void) | null
	}

	constructor(init?: Partial<{Core?: __goscript_core.Core | null, counts?: $.VarRef<counters> | null, tick?: time.Duration, first?: bigint, thereafter?: bigint, hook?: ((_p0: __goscript_entry.Entry, _p1: SamplingDecision) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Core: init?.Core ?? (null! as __goscript_core.Core | null),
			counts: init?.counts ?? (null! as $.VarRef<counters> | null),
			tick: init?.tick ?? (0n as time.Duration),
			first: init?.first ?? (0n as bigint),
			thereafter: init?.thereafter ?? (0n as bigint),
			hook: init?.hook ?? (null! as ((_p0: __goscript_entry.Entry, _p1: SamplingDecision) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sampler {
		return new sampler(this, true)
	}

	public __goscriptAssign(source: sampler): void {
		const target = this._fields
		const values = source._fields
		target.Core = $.assignFieldValue(target.Core, values.Core, "zapcore.Core")
		target.counts = values.counts
		target.tick = values.tick
		target.first = values.first
		target.thereafter = values.thereafter
		target.hook = values.hook
	}

	public async Check(ent: __goscript_entry.Entry, ce: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): globalThis.Promise<__goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null> {
		const s: sampler | $.VarRef<sampler> | null = this;
		const s$: sampler = s == null ? $.pointerTarget<sampler>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sampler>(s)
		if (!await $.pointerValue<Exclude<__goscript_core.Core, null>>((s$ as sampler).Core).Enabled(ent.Level)) {
			return ce
		}

		if ((ent.Level >= -1) && (ent.Level <= 5)) {
			let __goscriptShadow0: counter | $.VarRef<counter> | null = counters__get((s$ as sampler).counts, ent.Level, ent.Message)
			let n = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as counter).IncCheckReset(ent.Time, (s$ as sampler).tick) : counter.prototype.IncCheckReset.call(__goscriptShadow0, ent.Time, (s$ as sampler).tick))
			if ((n > (s$ as sampler).first) && (((s$ as sampler).thereafter == 0n) || (($.uint64Mod(($.uint64Sub(n, (s$ as sampler).first)), (s$ as sampler).thereafter)) != 0n))) {
				void (__goscriptAwait = (s$ as sampler).hook!((ent).clone(), 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return ce
			}
			void (__goscriptAwait = (s$ as sampler).hook!((ent).clone(), 2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return $.pointerValue<Exclude<__goscript_core.Core, null>>((s$ as sampler).Core).Check((ent).clone(), ce)
	}

	public async Level(): globalThis.Promise<__goscript_level.Level> {
		const s: sampler | $.VarRef<sampler> | null = this;
		return __goscript_level.LevelOf(($.pointerValue<sampler>(s).Core as __goscript_level.LevelEnabler | null))
	}

	public async With(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<__goscript_core.Core | null> {
		const s: sampler | $.VarRef<sampler> | null = this;
		const s$: sampler = s == null ? $.pointerTarget<sampler>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sampler>(s)
		return $.interfaceValue<__goscript_core.Core | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>((s$ as sampler).Core).With(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new sampler({Core: __goscriptLiteralField1, tick: (s$ as sampler).tick, counts: (s$ as sampler).counts, first: (s$ as sampler).first, thereafter: (s$ as sampler).thereafter, hook: (s$ as sampler).hook}) })()), "*zapcore.sampler", /* @__PURE__ */ $.pointerType("zapcore.sampler"))
	}

	public async Enabled(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Enabled(_p0)
	}

	public async Sync(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Sync()
	}

	public async Write(_p0: any, _p1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Write(_p0, _p1)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.sampler",
		() => new sampler(),
		() => [$.methodSignature("Check", [["ent", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], true), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"], true), $.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", ["zapcore.Entry", /* @__PURE__ */ $.sliceType("zapcore.Field")], ["error"])],
		sampler,
		() => [/* @__PURE__ */ $.structField("Core", "zapcore.Core", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("counts", /* @__PURE__ */ $.pointerType("zapcore.counters"), [1], 16, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("tick", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("first", /* @__PURE__ */ $.basicType("uint64"), [3], 32, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("thereafter", /* @__PURE__ */ $.basicType("uint64"), [4], 40, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("hook", ({ kind: $.TypeKind.Function, params: ["zapcore.Entry", /* @__PURE__ */ $.basicType("uint32", "zapcore.SamplingDecision")], results: [] } as $.FunctionTypeInfo), [5], 48, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export const _numLevels: __goscript_level.Level = 7

export const _countersPerLevel: number = 4096

export const LogDropped: SamplingDecision = 1

export const LogSampled: SamplingDecision = 2

export function newCounters(): $.VarRef<counters> | null {
	return $.varRef($.arrayValue(globalThis.Array.from({ length: 7 }, () => $.arrayValue(globalThis.Array.from({ length: 4096 }, () => new counter(undefined, true)), /* @__PURE__ */ $.arrayType("zapcore.counter", 4096))), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.arrayType("zapcore.counter", 4096), 7)))
}

export function counters__get(cs: $.VarRef<counters> | null, lvl: __goscript_level.Level, key: string): counter | $.VarRef<counter> | null {
	let i = $.int(((lvl - -1) << 24 >> 24), 8)
	let j = $.uint(fnv32a(key) % 4096, 32)
	return $.indexRef($.arrayIndex($.pointerValue<counter[][]>(cs), i), j)
}

export function fnv32a(s: string): number {
	const offset32: number = 2166136261
	const prime32: number = 16777619
	let hash = 2166136261
	for (let i = 0; i < $.stringLen(s); i++) {
		hash = hash ^ ($.uint($.indexString(s, i), 32))
		hash = globalThis.Math.imul(hash, 16777619) >>> 0
	}
	return hash
}

export async function optionFunc_apply(f: optionFunc | null, s: sampler | $.VarRef<sampler> | null): globalThis.Promise<void> {
	void (__goscriptAwait = f!(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function nopSamplingHook(_p0: __goscript_entry.Entry, _p1: SamplingDecision): void {
}

export function SamplerHook(hook: ((entry: __goscript_entry.Entry, dec: SamplingDecision) => void) | null): SamplerOption | null {
	return $.namedValueInterfaceValue<SamplerOption | null>($.namedFunction($.functionValue((s: sampler | $.VarRef<sampler> | null): void => {
		$.pointerValue<sampler>(s).hook = hook
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("zapcore.sampler")], results: [] } as $.FunctionTypeInfo)), "zapcore.optionFunc", ({ kind: $.TypeKind.Function, name: "zapcore.optionFunc", params: [/* @__PURE__ */ $.pointerType("zapcore.sampler")], results: [] } as $.FunctionTypeInfo)), "zapcore.optionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function NewSamplerWithOptions(core: __goscript_core.Core | null, tick: time.Duration, first: number, thereafter: number, opts: $.Slice<SamplerOption | null>): globalThis.Promise<__goscript_core.Core | null> {
	let s: sampler | $.VarRef<sampler> | null = (() => { const __goscriptLiteralField0 = newCounters(); return new sampler({Core: core, tick: tick, counts: __goscriptLiteralField0, first: $.uint64(first), thereafter: $.uint64(thereafter), hook: nopSamplingHook}) })()
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as SamplerOption | null)
		void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<SamplerOption, null>) : $.pointerValue<Exclude<SamplerOption, null>>(opt)).apply(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	return $.interfaceValue<__goscript_core.Core | null>(s, "*zapcore.sampler", /* @__PURE__ */ $.pointerType("zapcore.sampler"))
}

export async function NewSampler(core: __goscript_core.Core | null, tick: time.Duration, first: number, thereafter: number): globalThis.Promise<__goscript_core.Core | null> {
	return NewSamplerWithOptions(core, tick, first, thereafter, null)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({apply: (receiver: any, ...args: any[]) => (optionFunc_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "zapcore.optionFunc", params: [/* @__PURE__ */ $.pointerType("zapcore.sampler")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("apply", [["s", /* @__PURE__ */ $.pointerType("zapcore.sampler")]])])
}

var __goscriptAwait: any
