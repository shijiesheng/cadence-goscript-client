// Generated file based on fd.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"
import "@goscript/errors/index.js"

$.registerTypePackagePath("internal/poll", ["poll.errNetClosing", "poll.DeadlineExceededError", "poll.String"])

export type String = string

export class errNetClosing {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errNetClosing {
		return new errNetClosing(this, true)
	}

	public __goscriptAssign(source: errNetClosing): void {
	}

	public Error(): string {
		const e = this;
		return "use of closed network connection"
	}

	public Temporary(): boolean {
		const e = this;
		return false
	}

	public Timeout(): boolean {
		const e = this;
		return false
	}

	static __typeInfo = $.registerStructType(
		"poll.errNetClosing",
		() => new errNetClosing(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])],
		errNetClosing,
		() => []
	)
}

export class DeadlineExceededError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DeadlineExceededError {
		return new DeadlineExceededError(this, true)
	}

	public __goscriptAssign(source: DeadlineExceededError): void {
	}

	public Error(): string {
		const e: DeadlineExceededError | $.VarRef<DeadlineExceededError> | null = this;
		return "i/o timeout"
	}

	public Temporary(): boolean {
		const e: DeadlineExceededError | $.VarRef<DeadlineExceededError> | null = this;
		return true
	}

	public Timeout(): boolean {
		const e: DeadlineExceededError | $.VarRef<DeadlineExceededError> | null = this;
		return true
	}

	static __typeInfo = $.registerStructType(
		"poll.DeadlineExceededError",
		() => new DeadlineExceededError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		DeadlineExceededError,
		() => []
	)
}

export let ErrNetClosing: errNetClosing = new errNetClosing(undefined, true)

export function __goscript_set_ErrNetClosing(__goscriptValue: errNetClosing): void {
	$.assignStruct(ErrNetClosing, __goscriptValue)
}

export let ErrFileClosing: $.GoError = errors.New("use of closed file")

export function __goscript_set_ErrFileClosing(__goscriptValue: $.GoError): void {
	ErrFileClosing = __goscriptValue
}

export let ErrNoDeadline: $.GoError = errors.New("file type does not support deadline")

export function __goscript_set_ErrNoDeadline(__goscriptValue: $.GoError): void {
	ErrNoDeadline = __goscriptValue
}

export function errClosing(isFile: boolean): $.GoError {
	if (isFile) {
		return ErrFileClosing
	}
	return $.interfaceValue<$.GoError>((ErrNetClosing).clone(), "poll.errNetClosing", "poll.errNetClosing")
}

export let ErrDeadlineExceeded: $.GoError = $.interfaceValue<$.GoError>(new DeadlineExceededError(), "*poll.DeadlineExceededError", /* @__PURE__ */ $.pointerType("poll.DeadlineExceededError"))

export function __goscript_set_ErrDeadlineExceeded(__goscriptValue: $.GoError): void {
	ErrDeadlineExceeded = __goscriptValue
}

export let ErrNotPollable: $.GoError = errors.New("not pollable")

export function __goscript_set_ErrNotPollable(__goscriptValue: $.GoError): void {
	ErrNotPollable = __goscriptValue
}

export function consume(v: $.VarRef<$.Slice<$.Slice<number>>> | null, n: bigint): void {
	while ($.sliceLen($.pointerValue<$.Slice<$.Slice<number>>>(v)) > 0) {
		let ln0 = $.int64($.sliceLen($.arrayIndex(($.pointerValue<$.Slice<$.Slice<number>>>(v))!, 0)))
		if (ln0 > n) {
			$.sliceElems(($.pointerValue<$.Slice<$.Slice<number>>>(v))!)[$.sliceSlot(($.pointerValue<$.Slice<$.Slice<number>>>(v))!, 0)] = $.goSlice($.arrayIndex(($.pointerValue<$.Slice<$.Slice<number>>>(v))!, 0), globalThis.Number(n), undefined)
			return
		}
		n = $.int64Sub(n, ln0)
		$.sliceElems(($.pointerValue<$.Slice<$.Slice<number>>>(v))!)[$.sliceSlot(($.pointerValue<$.Slice<$.Slice<number>>>(v))!, 0)] = null
		v!.value = $.goSlice(($.pointerValue<$.Slice<$.Slice<number>>>(v)), 1, undefined)
	}
}

export let TestHookDidWritev: ((wrote: number) => void) | null = $.functionValue((wrote: number): void => {
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))

export function __goscript_set_TestHookDidWritev(__goscriptValue: ((wrote: number) => void) | null): void {
	TestHookDidWritev = __goscriptValue
}
