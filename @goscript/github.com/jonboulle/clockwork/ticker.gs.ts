// Generated file based on ticker.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_clockwork from "./clockwork.gs.ts"
import "@goscript/time/index.js"
import "./clockwork.gs.ts"

$.registerTypePackagePath("github.com/jonboulle/clockwork", ["clockwork.Ticker", "clockwork.realTicker", "clockwork.fakeTicker"])

export type Ticker = {
	Chan(): $.Channel<time.Time> | null
	Reset(d: time.Duration): void
	Stop(): void
}

$.registerInterfaceType(
	"clockwork.Ticker",
	null,
	[$.methodSignature("Chan", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("Stop")]
);

export class realTicker {
	public get Ticker(): time.Ticker | $.VarRef<time.Ticker> | null {
		return this._fields.Ticker
	}

	public set Ticker(value: time.Ticker | $.VarRef<time.Ticker> | null) {
		this._fields.Ticker = value
	}

	public _fields: {
		Ticker: time.Ticker | $.VarRef<time.Ticker> | null
	}

	constructor(init?: Partial<{Ticker?: time.Ticker | $.VarRef<time.Ticker> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Ticker: init?.Ticker ?? (null! as time.Ticker | $.VarRef<time.Ticker> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): realTicker {
		return new realTicker(this, true)
	}

	public __goscriptAssign(source: realTicker): void {
		const target = this._fields
		const values = source._fields
		target.Ticker = values.Ticker
	}

	public Chan(): $.Channel<time.Time> | null {
		const r = this;
		return $.pointerValue<time.Ticker>(r.Ticker).C
	}

	public Reset(d: any): any {
		return $.pointerValue<time.Ticker>(this.Ticker).Reset(d)
	}

	public Stop(): any {
		return $.pointerValue<time.Ticker>(this.Ticker).Stop()
	}

	static __typeInfo = $.registerStructType(
		"clockwork.realTicker",
		() => new realTicker(),
		() => [$.methodSignature("Chan", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("Stop")],
		realTicker,
		() => [/* @__PURE__ */ $.structField("Ticker", /* @__PURE__ */ $.pointerType("time.Ticker"), [0], 0, true, { anonymous: true })]
	)
}

export class fakeTicker {
	public get firer(): __goscript_clockwork.firer {
		return this._fields.firer
	}

	public set firer(value: __goscript_clockwork.firer) {
		this._fields.firer = value
	}

	// reset and stop provide the implementation of the respective exported
	// functions.
	public get reset(): ((d: time.Duration) => void) | null {
		return this._fields.reset
	}

	public set reset(value: ((d: time.Duration) => void) | null) {
		this._fields.reset = value
	}

	public get stop(): (() => void) | null {
		return this._fields.stop
	}

	public set stop(value: (() => void) | null) {
		this._fields.stop = value
	}

	// The duration of the ticker.
	public get d(): time.Duration {
		return this._fields.d
	}

	public set d(value: time.Duration) {
		this._fields.d = value
	}

	public _fields: {
		firer: __goscript_clockwork.firer
		reset: ((d: time.Duration) => void) | null
		stop: (() => void) | null
		d: time.Duration
	}

	constructor(init?: Partial<{firer?: __goscript_clockwork.firer, reset?: ((d: time.Duration) => void) | null, stop?: (() => void) | null, d?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			firer: init?.firer ? init.firer.clone() : new __goscript_clockwork.firer(undefined, true),
			reset: init?.reset ?? (null! as ((d: time.Duration) => void) | null),
			stop: init?.stop ?? (null! as (() => void) | null),
			d: init?.d ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fakeTicker {
		return new fakeTicker(this, true)
	}

	public __goscriptAssign(source: fakeTicker): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.firer, values.firer)
		target.reset = values.reset
		target.stop = values.stop
		target.d = values.d
	}

	public async Reset(d: time.Duration): globalThis.Promise<void> {
		const f: fakeTicker | $.VarRef<fakeTicker> | null = this;
		void (__goscriptAwait = $.pointerValue<fakeTicker>(f).reset!(d), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Stop(): globalThis.Promise<void> {
		const f: fakeTicker | $.VarRef<fakeTicker> | null = this;
		void (__goscriptAwait = $.pointerValue<fakeTicker>(f).stop!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async expire(now: time.Time): globalThis.Promise<$.VarRef<time.Duration> | null> {
		const f: fakeTicker | $.VarRef<fakeTicker> | null = this;
		const f$: fakeTicker = f == null ? $.pointerTarget<fakeTicker>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<fakeTicker>(f)
		// Never block on expiration.
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.VarRef<time.Duration> | null>([
			{
				id: 0,
				isSend: true,
				channel: (f$ as fakeTicker).firer.c,
				value: now,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		return $.fieldRef((f$ as fakeTicker)._fields, "d")
	}

	public Chan(): any {
		return $.pointerValue<__goscript_clockwork.firer>(this.firer).Chan()
	}

	public expiry(): any {
		return $.pointerValue<__goscript_clockwork.firer>(this.firer).expiry()
	}

	public setExpiry(t: any): any {
		return $.pointerValue<__goscript_clockwork.firer>(this.firer).setExpiry(t)
	}

	static __typeInfo = $.registerStructType(
		"clockwork.fakeTicker",
		() => new fakeTicker(),
		() => [$.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("Stop", [], [], true), $.methodSignature("expire", [["now", "time.Time"]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], true), $.methodSignature("Chan", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("expiry", [], ["time.Time"], true), $.methodSignature("setExpiry", [["t", "time.Time"]], [], true)],
		fakeTicker,
		() => [/* @__PURE__ */ $.structField("firer", "clockwork.firer", [0], 0, false, { pkgPath: "github.com/jonboulle/clockwork", anonymous: true }), /* @__PURE__ */ $.structField("reset", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [] } as $.FunctionTypeInfo), [1], 32, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("stop", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [2], 40, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 48, false, { pkgPath: "github.com/jonboulle/clockwork" })]
	)
}

var __goscriptAwait: any
