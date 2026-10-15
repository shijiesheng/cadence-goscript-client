// Generated file based on rand.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go/trand", ["trand.lockedSource"])

export class lockedSource {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get src(): rand.Source | null {
		return this._fields.src
	}

	public set src(value: rand.Source | null) {
		this._fields.src = value
	}

	public _fields: {
		Mutex: sync.Mutex
		src: rand.Source | null
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, src?: rand.Source | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			src: init?.src ?? (null! as rand.Source | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lockedSource {
		return new lockedSource(this, true)
	}

	public __goscriptAssign(source: lockedSource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.src = $.assignFieldValue(target.src, values.src, "rand.Source")
	}

	public async Int63(): globalThis.Promise<bigint> {
		const r: lockedSource | $.VarRef<lockedSource> | null = this;
		let n: bigint = 0n
		await $.pointerValue<lockedSource>(r).Mutex.Lock()
		n = (__goscriptAwait = $.pointerValue<Exclude<rand.Source, null>>($.pointerValue<lockedSource>(r).src).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.pointerValue<lockedSource>(r).Mutex.Unlock()
		return n
	}

	public async Seed(seed: bigint): globalThis.Promise<void> {
		const r: lockedSource | $.VarRef<lockedSource> | null = this;
		await $.pointerValue<lockedSource>(r).Mutex.Lock()
		void (__goscriptAwait = $.pointerValue<Exclude<rand.Source, null>>($.pointerValue<lockedSource>(r).src).Seed(seed), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.pointerValue<lockedSource>(r).Mutex.Unlock()
	}

	public Lock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Lock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).TryLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"trand.lockedSource",
		() => new lockedSource(),
		() => [$.methodSignature("Int63", [], [["n", /* @__PURE__ */ $.basicType("int64")]], true), $.methodSignature("Seed", [["seed", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		lockedSource,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("src", "rand.Source", [1], 8, false, { pkgPath: "github.com/uber/tchannel-go/trand" })]
	)
}

export function New(seed: bigint): rand.Rand | $.VarRef<rand.Rand> | null {
	return rand.New($.interfaceValue<rand.Source | null>((() => { const __goscriptLiteralField0 = rand.NewSource(seed); return new lockedSource({src: __goscriptLiteralField0}) })(), "*trand.lockedSource", /* @__PURE__ */ $.pointerType("trand.lockedSource")))
}

export function NewSeeded(): rand.Rand | $.VarRef<rand.Rand> | null {
	return New($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
}

var __goscriptAwait: any
