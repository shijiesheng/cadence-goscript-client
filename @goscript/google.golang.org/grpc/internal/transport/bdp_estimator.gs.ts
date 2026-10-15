// Generated file based on bdp_estimator.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_controlbuf from "./controlbuf.gs.ts"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./controlbuf.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.bdpEstimator"])

export class bdpEstimator {
	// sentAt is the time when the ping was sent.
	public get sentAt(): time.Time {
		return this._fields.sentAt
	}

	public set sentAt(value: time.Time) {
		this._fields.sentAt = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	// bdp is the current bdp estimate.
	public get bdp(): number {
		return this._fields.bdp
	}

	public set bdp(value: number) {
		this._fields.bdp = value
	}

	// sample is the number of bytes received in one measurement cycle.
	public get sample(): number {
		return this._fields.sample
	}

	public set sample(value: number) {
		this._fields.sample = value
	}

	// bwMax is the maximum bandwidth noted so far (bytes/sec).
	public get bwMax(): number {
		return this._fields.bwMax
	}

	public set bwMax(value: number) {
		this._fields.bwMax = value
	}

	// bool to keep track of the beginning of a new measurement cycle.
	public get isSent(): boolean {
		return this._fields.isSent
	}

	public set isSent(value: boolean) {
		this._fields.isSent = value
	}

	// Callback to update the window sizes.
	public get updateFlowControl(): ((n: number) => void) | null {
		return this._fields.updateFlowControl
	}

	public set updateFlowControl(value: ((n: number) => void) | null) {
		this._fields.updateFlowControl = value
	}

	// sampleCount is the number of samples taken so far.
	public get sampleCount(): bigint {
		return this._fields.sampleCount
	}

	public set sampleCount(value: bigint) {
		this._fields.sampleCount = value
	}

	// round trip time (seconds)
	public get rtt(): number {
		return this._fields.rtt
	}

	public set rtt(value: number) {
		this._fields.rtt = value
	}

	public _fields: {
		sentAt: time.Time
		mu: sync.Mutex
		bdp: number
		sample: number
		bwMax: number
		isSent: boolean
		updateFlowControl: ((n: number) => void) | null
		sampleCount: bigint
		rtt: number
	}

	constructor(init?: Partial<{sentAt?: time.Time, mu?: sync.Mutex, bdp?: number, sample?: number, bwMax?: number, isSent?: boolean, updateFlowControl?: ((n: number) => void) | null, sampleCount?: bigint, rtt?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			sentAt: init?.sentAt ? $.markAsStructValue($.cloneStructValue(init.sentAt)) : $.markAsStructValue(new time.Time()),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			bdp: init?.bdp ?? (0 as number),
			sample: init?.sample ?? (0 as number),
			bwMax: init?.bwMax ?? (0 as number),
			isSent: init?.isSent ?? (false as boolean),
			updateFlowControl: init?.updateFlowControl ?? (null! as ((n: number) => void) | null),
			sampleCount: init?.sampleCount ?? (0n as bigint),
			rtt: init?.rtt ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bdpEstimator {
		return new bdpEstimator(this, true)
	}

	public __goscriptAssign(source: bdpEstimator): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.sentAt, values.sentAt)
		$.assignStruct(target.mu, values.mu)
		target.bdp = values.bdp
		target.sample = values.sample
		target.bwMax = values.bwMax
		target.isSent = values.isSent
		target.updateFlowControl = values.updateFlowControl
		target.sampleCount = values.sampleCount
		target.rtt = values.rtt
	}

	public async add(n: number): globalThis.Promise<boolean> {
		let b: bdpEstimator | $.VarRef<bdpEstimator> | null = this;
		using __defer = new $.DisposableStack()
		const b$: bdpEstimator = b == null ? $.pointerTarget<bdpEstimator>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<bdpEstimator>(b)
		await (b$ as bdpEstimator).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((b$ as bdpEstimator).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((b$ as bdpEstimator).bdp == 16777216) {
			return false
		}
		if (!(b$ as bdpEstimator).isSent) {
			;(b$ as bdpEstimator).isSent = true;
			;(b$ as bdpEstimator).sample = n
			$.assignStruct((b$ as bdpEstimator).sentAt, $.markAsStructValue(new time.Time()));
			;(b$ as bdpEstimator).sampleCount++
			return true
		}
		;(b$ as bdpEstimator).sample = $.uint((b$ as bdpEstimator).sample + (n), 32)
		return false
	}

	public async calculate(d: Uint8Array): globalThis.Promise<void> {
		let b: bdpEstimator | $.VarRef<bdpEstimator> | null = this;
		const b$: bdpEstimator = b == null ? $.pointerTarget<bdpEstimator>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<bdpEstimator>(b)
		// Check if the ping acked for was the bdp ping.
		if (!$.arrayEqual($.pointerValue<__goscript_controlbuf.ping>(__goscript_get_bdpPing()).data, d)) {
			return
		}
		await (b$ as bdpEstimator).mu.Lock()
		let rttSample = time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue((b$ as bdpEstimator).sentAt))))
		if ((b$ as bdpEstimator).sampleCount < 10n) {
			// Bootstrap rtt with an average of first 10 rtt samples.
			;(b$ as bdpEstimator).rtt = (b$ as bdpEstimator).rtt + ((rttSample - (b$ as bdpEstimator).rtt) / globalThis.Number((b$ as bdpEstimator).sampleCount))
		} else {
			// Heed to the recent past more.
			;(b$ as bdpEstimator).rtt = (b$ as bdpEstimator).rtt + ((rttSample - (b$ as bdpEstimator).rtt) * 9/10)
		}
		;(b$ as bdpEstimator).isSent = false
		// The number of bytes accumulated so far in the sample is smaller
		// than or equal to 1.5 times the real BDP on a saturated connection.
		let bwCurrent = (b$ as bdpEstimator).sample / ((b$ as bdpEstimator).rtt * 1.5)
		if (bwCurrent > (b$ as bdpEstimator).bwMax) {
			;(b$ as bdpEstimator).bwMax = bwCurrent
		}
		// If the current sample (which is smaller than or equal to the 1.5 times the real BDP) is
		// greater than or equal to 2/3rd our perceived bdp AND this is the maximum bandwidth seen so far, we
		// should update our perception of the network BDP.
		if ((((b$ as bdpEstimator).sample >= (33/50 * (b$ as bdpEstimator).bdp)) && (bwCurrent == (b$ as bdpEstimator).bwMax)) && ((b$ as bdpEstimator).bdp != 16777216)) {
			let sampleFloat = (b$ as bdpEstimator).sample;
			;(b$ as bdpEstimator).bdp = $.uint(2 * sampleFloat, 32)
			if ((b$ as bdpEstimator).bdp > 16777216) {
				;(b$ as bdpEstimator).bdp = 16777216
			}
			let bdp = (b$ as bdpEstimator).bdp
			void (b$ as bdpEstimator).mu.Unlock()
			void (__goscriptAwait = (b$ as bdpEstimator).updateFlowControl!(bdp), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		void (b$ as bdpEstimator).mu.Unlock()
	}

	public timesnap(d: Uint8Array): void {
		let b: bdpEstimator | $.VarRef<bdpEstimator> | null = this;
		if (!$.arrayEqual($.pointerValue<__goscript_controlbuf.ping>(__goscript_get_bdpPing()).data, d)) {
			return
		}
		$.assignStruct($.pointerValue<bdpEstimator>(b).sentAt, time.Now())
	}

	static __typeInfo = $.registerStructType(
		"transport.bdpEstimator",
		() => new bdpEstimator(),
		() => [$.methodSignature("add", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("calculate", [["d", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)]], [], true), $.methodSignature("timesnap", [["d", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)]], [], true)],
		bdpEstimator,
		() => [/* @__PURE__ */ $.structField("sentAt", "time.Time", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bdp", /* @__PURE__ */ $.basicType("uint32"), [2], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("sample", /* @__PURE__ */ $.basicType("uint32"), [3], 36, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bwMax", /* @__PURE__ */ $.basicType("float64"), [4], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("isSent", /* @__PURE__ */ $.basicType("bool"), [5], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("updateFlowControl", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), [6], 56, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("sampleCount", /* @__PURE__ */ $.basicType("uint64"), [7], 64, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("rtt", /* @__PURE__ */ $.basicType("float64"), [8], 72, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export const bdpLimit: number = 16777216

export const alpha: number = 9/10

export const beta: number = 33/50

export const gamma: number = 2

export var bdpPing: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null

export function __goscript_init_bdpPing(): void {
	if (((bdpPing) as any) === undefined) {
		bdpPing = new __goscript_controlbuf.ping({data: $.arrayValue(new Uint8Array([2, 4, 16, 16, 9, 14, 7, 7]))})
	}
}

export function __goscript_get_bdpPing(): __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null {
	if (((bdpPing) as any) === undefined) {
		__goscript_init_bdpPing()
	}
	return bdpPing
}

export function __goscript_set_bdpPing(__goscriptValue: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null): void {
	bdpPing = __goscriptValue
}

var __goscriptAwait: any
