// Generated file based on conn_state_evaluator.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"

$.registerTypePackagePath("google.golang.org/grpc/balancer", ["balancer.ConnectivityStateEvaluator"])

export class ConnectivityStateEvaluator {
	public get numReady(): bigint {
		return this._fields.numReady
	}

	public set numReady(value: bigint) {
		this._fields.numReady = value
	}

	public get numConnecting(): bigint {
		return this._fields.numConnecting
	}

	public set numConnecting(value: bigint) {
		this._fields.numConnecting = value
	}

	public get numTransientFailure(): bigint {
		return this._fields.numTransientFailure
	}

	public set numTransientFailure(value: bigint) {
		this._fields.numTransientFailure = value
	}

	public get numIdle(): bigint {
		return this._fields.numIdle
	}

	public set numIdle(value: bigint) {
		this._fields.numIdle = value
	}

	public _fields: {
		numReady: bigint
		numConnecting: bigint
		numTransientFailure: bigint
		numIdle: bigint
	}

	constructor(init?: Partial<{numReady?: bigint, numConnecting?: bigint, numTransientFailure?: bigint, numIdle?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			numReady: init?.numReady ?? (0n as bigint),
			numConnecting: init?.numConnecting ?? (0n as bigint),
			numTransientFailure: init?.numTransientFailure ?? (0n as bigint),
			numIdle: init?.numIdle ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnectivityStateEvaluator {
		return new ConnectivityStateEvaluator(this, true)
	}

	public __goscriptAssign(source: ConnectivityStateEvaluator): void {
		const target = this._fields
		const values = source._fields
		target.numReady = values.numReady
		target.numConnecting = values.numConnecting
		target.numTransientFailure = values.numTransientFailure
		target.numIdle = values.numIdle
	}

	public CurrentState(): connectivity.State {
		const cse: ConnectivityStateEvaluator | $.VarRef<ConnectivityStateEvaluator> | null = this;
		const cse$: ConnectivityStateEvaluator = cse == null ? $.pointerTarget<ConnectivityStateEvaluator>(cse) : (cse as any).__isVarRef === true ? (cse as any).value : (cse as any).__goValue === undefined ? (cse as any) : $.pointerTarget<ConnectivityStateEvaluator>(cse)
		// Evaluate.
		if ((cse$ as ConnectivityStateEvaluator).numReady > 0n) {
			return 2
		}
		if ((cse$ as ConnectivityStateEvaluator).numConnecting > 0n) {
			return 1
		}
		if ((cse$ as ConnectivityStateEvaluator).numIdle > 0n) {
			return 0
		}
		return 3
	}

	public RecordTransition(oldState: connectivity.State, newState: connectivity.State): connectivity.State {
		let cse: ConnectivityStateEvaluator | $.VarRef<ConnectivityStateEvaluator> | null = this;
		const cse$: ConnectivityStateEvaluator = cse == null ? $.pointerTarget<ConnectivityStateEvaluator>(cse) : (cse as any).__isVarRef === true ? (cse as any).value : (cse as any).__goValue === undefined ? (cse as any) : $.pointerTarget<ConnectivityStateEvaluator>(cse)
		// Update counters.
		for (let __goscriptRangeTarget0 = $.arrayToSlice<connectivity.State>([oldState, newState]), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), idx = 0; idx < __goscriptRangeWindow0.length; idx++) {
			let state = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + idx] as connectivity.State)
			let updateVal = $.uint64Sub(($.uint64Mul(2n, $.uint64(idx))), 1n)
			switch (state) {
				case connectivity.Ready:
				{
					;(cse$ as ConnectivityStateEvaluator).numReady = $.uint64Add((cse$ as ConnectivityStateEvaluator).numReady, updateVal)
					break
				}
				case connectivity.Connecting:
				{
					;(cse$ as ConnectivityStateEvaluator).numConnecting = $.uint64Add((cse$ as ConnectivityStateEvaluator).numConnecting, updateVal)
					break
				}
				case connectivity.TransientFailure:
				{
					;(cse$ as ConnectivityStateEvaluator).numTransientFailure = $.uint64Add((cse$ as ConnectivityStateEvaluator).numTransientFailure, updateVal)
					break
				}
				case connectivity.Idle:
				{
					;(cse$ as ConnectivityStateEvaluator).numIdle = $.uint64Add((cse$ as ConnectivityStateEvaluator).numIdle, updateVal)
					break
				}
			}
		}
		return (cse !== null && (cse as any).__isVarRef !== true && (cse as any).__goValue === undefined ? ((cse as any) as ConnectivityStateEvaluator).CurrentState() : ConnectivityStateEvaluator.prototype.CurrentState.call(cse))
	}

	static __typeInfo = $.registerStructType(
		"balancer.ConnectivityStateEvaluator",
		() => new ConnectivityStateEvaluator(),
		() => [$.methodSignature("CurrentState", [], [/* @__PURE__ */ $.basicType("int", "connectivity.State")], true), $.methodSignature("RecordTransition", [["oldState", /* @__PURE__ */ $.basicType("int", "connectivity.State")], ["newState", /* @__PURE__ */ $.basicType("int", "connectivity.State")]], [/* @__PURE__ */ $.basicType("int", "connectivity.State")], true)],
		ConnectivityStateEvaluator,
		() => [/* @__PURE__ */ $.structField("numReady", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer" }), /* @__PURE__ */ $.structField("numConnecting", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "google.golang.org/grpc/balancer" }), /* @__PURE__ */ $.structField("numTransientFailure", /* @__PURE__ */ $.basicType("uint64"), [2], 16, false, { pkgPath: "google.golang.org/grpc/balancer" }), /* @__PURE__ */ $.structField("numIdle", /* @__PURE__ */ $.basicType("uint64"), [3], 24, false, { pkgPath: "google.golang.org/grpc/balancer" })]
	)
}
