// Generated file based on roundrobin.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as base from "@goscript/google.golang.org/grpc/balancer/base/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/balancer/base/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/balancer/roundrobin", ["roundrobin.rrPickerBuilder", "roundrobin.rrPicker"])

export class rrPickerBuilder {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rrPickerBuilder {
		return new rrPickerBuilder(this, true)
	}

	public __goscriptAssign(source: rrPickerBuilder): void {
	}

	public async Build(info: base.PickerBuildInfo): globalThis.Promise<balancer.Picker | null> {
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Infof("roundrobinPicker: Build called with info: %v", $.arrayToSlice<any>([$.interfaceValue((info).clone(), "base.PickerBuildInfo", "base.PickerBuildInfo")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.len(info.ReadySCs) == 0) {
			return base.NewErrPicker(balancer.ErrNoSubConnAvailable)
		}
		let scs: $.Slice<balancer.SubConn | null> = $.makeSlice<balancer.SubConn | null>(0, $.len(info.ReadySCs))
		for (const [sc, __rangeValue] of info.ReadySCs?.entries() ?? []) {
			scs = $.appendOne(scs, sc, $.appendZeros.nil)
		}
		return $.interfaceValue<balancer.Picker | null>((await (async () => { const __goscriptLiteralField0 = $.uint(await rand.Intn($.sliceLen(scs)), 32); return new rrPicker({subConns: scs, next: __goscriptLiteralField0}) })()), "*roundrobin.rrPicker", /* @__PURE__ */ $.pointerType("roundrobin.rrPicker"))
	}

	static __typeInfo = $.registerStructType(
		"roundrobin.rrPickerBuilder",
		() => new rrPickerBuilder(),
		() => [$.methodSignature("Build", [["info", "base.PickerBuildInfo"]], ["balancer.Picker"], true)],
		rrPickerBuilder,
		() => []
	)
}

export class rrPicker {
	// subConns is the snapshot of the roundrobin balancer when this picker was
	// created. The slice is immutable. Each Get() will do a round robin
	// selection from it and return the selected SubConn.
	public get subConns(): $.Slice<balancer.SubConn | null> {
		return this._fields.subConns
	}

	public set subConns(value: $.Slice<balancer.SubConn | null>) {
		this._fields.subConns = value
	}

	public get next(): number {
		return this._fields.next
	}

	public set next(value: number) {
		this._fields.next = value
	}

	public _fields: {
		subConns: $.Slice<balancer.SubConn | null>
		next: number
	}

	constructor(init?: Partial<{subConns?: $.Slice<balancer.SubConn | null>, next?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			subConns: init?.subConns ?? (null! as $.Slice<balancer.SubConn | null>),
			next: init?.next ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rrPicker {
		return new rrPicker(this, true)
	}

	public __goscriptAssign(source: rrPicker): void {
		const target = this._fields
		const values = source._fields
		target.subConns = values.subConns
		target.next = values.next
	}

	public Pick(_p0: balancer.PickInfo): [balancer.PickResult, $.GoError] {
		const p: rrPicker | $.VarRef<rrPicker> | null = this;
		const p$: rrPicker = p == null ? $.pointerTarget<rrPicker>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<rrPicker>(p)
		let subConnsLen = $.uint($.sliceLen((p$ as rrPicker).subConns), 32)
		let nextIndex = atomic.AddUint32($.fieldRef((p$ as rrPicker)._fields, "next"), 1)

		let sc = $.arrayIndex((p$ as rrPicker).subConns!, nextIndex % subConnsLen)
		return [new balancer.PickResult({SubConn: sc}, true), null]
	}

	static __typeInfo = $.registerStructType(
		"roundrobin.rrPicker",
		() => new rrPicker(),
		() => [$.methodSignature("Pick", ["balancer.PickInfo"], ["balancer.PickResult", "error"], true)],
		rrPicker,
		() => [/* @__PURE__ */ $.structField("subConns", /* @__PURE__ */ $.sliceType("balancer.SubConn"), [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer/roundrobin" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.basicType("uint32"), [1], 24, false, { pkgPath: "google.golang.org/grpc/balancer/roundrobin" })]
	)
}

export const Name: string = "round_robin"

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("roundrobin")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export function newBuilder(): balancer.Builder | null {
	return base.NewBalancerBuilder("round_robin", $.interfaceValue<base.PickerBuilder | null>(new rrPickerBuilder(), "*roundrobin.rrPickerBuilder", /* @__PURE__ */ $.pointerType("roundrobin.rrPickerBuilder")), new base.Config({HealthCheck: true}, true))
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await balancer.Register(newBuilder())
}

var __goscriptAwait: any

await __goscriptInit0()
