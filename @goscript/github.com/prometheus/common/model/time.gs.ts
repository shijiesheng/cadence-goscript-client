// Generated file based on time.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.Time", "model.Interval", "model.Duration"])

export type Time = bigint

$.registerNamedValueType(
	"model.Time",
	{Add: (receiver: any, ...args: any[]) => (Time_Add as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => (Time_After as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => (Time_Before as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (Time_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Time_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Time_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => (Time_Sub as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Time: (receiver: any, ...args: any[]) => (Time_Time as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => (Time_Unix as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => (Time_UnixNano as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Add", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "model.Time")]), $.methodSignature("After", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Before", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Sub", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Time", [], ["time.Time"]), $.methodSignature("Unix", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnixNano", [], [/* @__PURE__ */ $.basicType("int64")])]
);

$.registerNamedValueType(
	"*model.Time",
	{Add: (receiver: any, ...args: any[]) => (Time_Add as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => (Time_After as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => (Time_Before as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (Time_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Time_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Time_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => (Time_Sub as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Time: (receiver: any, ...args: any[]) => (Time_Time as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => (Time_Unix as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => (Time_UnixNano as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Time_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Add", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "model.Time")]), $.methodSignature("After", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Before", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Sub", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Time", [], ["time.Time"]), $.methodSignature("Unix", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnixNano", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type Duration = bigint

$.registerNamedValueType(
	"model.Duration",
	{MarshalJSON: (receiver: any, ...args: any[]) => (Duration_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalYAML: (receiver: any, ...args: any[]) => (Duration_MarshalYAML as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalYAML", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*model.Duration",
	{MarshalJSON: (receiver: any, ...args: any[]) => (Duration_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Duration_MarshalText as any)(receiver, ...$.stripGenericTypeArgs(args)), MarshalYAML: (receiver: any, ...args: any[]) => (Duration_MarshalYAML as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (Duration_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Duration_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Duration_Type as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Duration_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (Duration_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalYAML: (receiver: any, ...args: any[]) => (Duration_UnmarshalYAML as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalYAML", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalYAML", [["unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])]
);

export class Interval {
	public get Start(): Time {
		return this._fields.Start
	}

	public set Start(value: Time) {
		this._fields.Start = value
	}

	public get End(): Time {
		return this._fields.End
	}

	public set End(value: Time) {
		this._fields.End = value
	}

	public _fields: {
		Start: Time
		End: Time
	}

	constructor(init?: Partial<{Start?: Time, End?: Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Start: init?.Start ?? (0n as Time),
			End: init?.End ?? (0n as Time)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Interval {
		return new Interval(this, true)
	}

	public __goscriptAssign(source: Interval): void {
		const target = this._fields
		const values = source._fields
		target.Start = values.Start
		target.End = values.End
	}

	static __typeInfo = $.registerStructType(
		"model.Interval",
		() => new Interval(),
		() => [],
		Interval,
		() => [/* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("int64", "model.Time"), [0], 0, true), /* @__PURE__ */ $.structField("End", /* @__PURE__ */ $.basicType("int64", "model.Time"), [1], 8, true)]
	)
}

export const minimumTick: time.Duration = 1000000n

export const second: bigint = 1000n

export const nanosPerTick: bigint = 1000000n

export const Earliest: Time = -9223372036854775808n

export const Latest: Time = 9223372036854775807n

export function Now(): Time {
	return TimeFromUnixNano($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
}

export function TimeFromUnix(t: bigint): Time {
	return $.int64($.int64Mul(t, 1000n))
}

export function TimeFromUnixNano(t: bigint): Time {
	return $.int64($.int64Div(t, 1000000n))
}

export function Time_Equal(t: Time, o: Time): boolean {
	return t == o
}

export function Time_Before(t: Time, o: Time): boolean {
	return t < o
}

export function Time_After(t: Time, o: Time): boolean {
	return t > o
}

export function Time_Add(t: Time, d: time.Duration): Time {
	return $.int64Add(t, $.int64($.int64Div(d, 1000000n)))
}

export function Time_Sub(t: Time, o: Time): time.Duration {
	return $.int64Mul($.int64($.int64Sub(t, o)), 1000000n)
}

export function Time_Time(t: Time): time.Time {
	return $.markAsStructValue($.cloneStructValue(time.Unix($.int64Div($.int64(t), 1000n), $.int64Mul(($.int64Mod($.int64(t), 1000n)), 1000000n))))
}

export function Time_Unix(t: Time): bigint {
	return $.int64Div($.int64(t), 1000n)
}

export function Time_UnixNano(t: Time): bigint {
	return $.int64Mul($.int64(t), 1000000n)
}

export let dotPrecision: number = $.int(math.Log10(globalThis.Number(1000n)))

export function __goscript_set_dotPrecision(__goscriptValue: number): void {
	dotPrecision = __goscriptValue
}

export function Time_String(t: Time): string {
	return strconv.FormatFloat(globalThis.Number(t) / globalThis.Number(1000n), 102, -1, 64)
}

export function Time_MarshalJSON(t: Time): [$.Slice<number>, $.GoError] {
	return [$.stringToBytes(Time_String(t)), null]
}

export function Time_UnmarshalJSON(t: $.VarRef<Time> | null, b: $.Slice<number>): $.GoError {
	let p: $.Slice<string> = strings.Split($.bytesToString(b), ".")
	switch ($.sliceLen(p)) {
		case 1:
		{
			let [v, err] = strconv.ParseInt($.arrayIndex(p!, 0), 10, 64)
			if (err != null) {
				return err
			}
			t!.value = $.int64($.int64Mul(v, 1000n))
			break
		}
		case 2:
		{
			let [v, err] = strconv.ParseInt($.arrayIndex(p!, 0), 10, 64)
			if (err != null) {
				return err
			}
			v = $.int64Mul(v, 1000n)

			let prec = dotPrecision - $.stringLen($.arrayIndex(p!, 1))
			if (prec < 0) {
				$.sliceElems(p!)[$.sliceSlot(p!, 1)] = $.sliceStringOrBytes($.arrayIndex(p!, 1), undefined, dotPrecision)
			} else {
				if (prec > 0) {
					$.sliceElems(p!)[$.sliceSlot(p!, 1)] = $.concatString($.arrayIndex(p!, 1), strings.Repeat("0", prec))
				}
			}

			let __goscriptTuple0: any = strconv.ParseInt($.arrayIndex(p!, 1), 10, 32)
			let va = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return err
			}

			// If the value was something like -0.1 the negative is lost in the
			// parsing because of the leading zero, this ensures that we capture it.
			if ((($.stringLen($.arrayIndex(p!, 0)) > 0) && ($.indexString($.arrayIndex(p!, 0), 0) == 45)) && (($.int64Add(v, va)) > 0n)) {
				t!.value = $.int64Mul($.int64($.int64Add(v, va)), -1n)
			} else {
				t!.value = $.int64($.int64Add(v, va))
			}
			break
		}
		default:
		{
			return fmt.Errorf("invalid time %q", $.bytesToString(b))
			break
		}
	}
	return null
}

export async function Duration_Set(d: $.VarRef<Duration> | null, s: string): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple1: any = await ParseDuration(s)
	d!.value = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	return err
}

export function Duration_Type(d: $.VarRef<Duration> | null): string {
	return "duration"
}

export let durationRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$")

export function __goscript_set_durationRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	durationRE = __goscriptValue
}

export async function ParseDuration(durationStr: string): globalThis.Promise<[Duration, $.GoError]> {
	switch (durationStr) {
		case "0":
		{
			return [0n, null]
			break
		}
		case "":
		{
			return [0n, fmt.Errorf("empty duration string")]
			break
		}
	}
	let matches: $.Slice<string> = await (durationRE !== null && (durationRE as any).__isVarRef !== true && (durationRE as any).__goValue === undefined ? ((durationRE as any) as regexp.Regexp).FindStringSubmatch(durationStr) : regexp.Regexp.prototype.FindStringSubmatch.call(durationRE, durationStr))
	if (matches == null) {
		return [0n, fmt.Errorf("not a valid duration string: %q", durationStr)]
	}
	let dur: time.Duration = 0n

	// Parse the match at pos `pos` in the regex and use `mult` to turn that
	// into ms, then add that value to the total parsed duration.
	let overflowErr: $.GoError = null! as $.GoError
	let m: ((pos: number, mult: time.Duration) => void) | null = $.functionValue((pos: number, mult: time.Duration): void => {
		if ($.stringEqual($.arrayIndex(matches!, pos), "")) {
			return
		}
		let [n, ] = strconv.Atoi($.arrayIndex(matches!, pos))

		// Check if the provided duration overflows time.Duration (> ~ 290years).
		if (n > $.int($.int64Div(($.int64Div(9223372036854775807n, mult)), 1000000n))) {
			overflowErr = errors.New("duration out of range")
		}
		let d = $.int64Mul($.int64(n), 1000000n)
		dur = $.int64Add(dur, $.int64Mul(d, mult))

		if (dur < 0n) {
			overflowErr = errors.New("duration out of range")
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [] } as $.FunctionTypeInfo))

	void (__goscriptAwait = m!(2, 31536000000n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = m!(4, 604800000n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = m!(6, 86400000n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = m!(8, 3600000n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = m!(10, 60000n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = m!(12, 1000n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = m!(14, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return [$.int64(dur), overflowErr]
}

export async function Duration_String(d: Duration): globalThis.Promise<string> {
	let ms: bigint = $.int64($.int64Div($.int64(d), 1000000n))
	let r: string = ""
	if (ms == 0n) {
		return "0s"
	}

	let f: ((unit: string, mult: bigint, exact: boolean) => void) | null = $.functionValue(async (unit: string, mult: bigint, exact: boolean): globalThis.Promise<void> => {
		if (exact && (($.int64Mod(ms, mult)) != 0n)) {
			return
		}
		{
			let v = $.int64Div(ms, mult)
			if (v > 0n) {
				r = $.concatString(r, await fmt.Sprintf("%d%s", $.basicInterfaceValue(v, "int64"), unit))
				ms = $.int64Sub(ms, $.int64Mul(v, mult))
			}
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo))

	// Only format years and weeks if the remainder is zero, as it is often
	// easier to read 90d than 12w6d.
	void (__goscriptAwait = f!("y", 31536000000n, true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = f!("w", 604800000n, true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	void (__goscriptAwait = f!("d", 86400000n, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = f!("h", 3600000n, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = f!("m", 60000n, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = f!("s", 1000n, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = f!("ms", 1n, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return r
}

export async function Duration_MarshalJSON(d: Duration): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return json.Marshal(await Duration_String(d))
}

export async function Duration_UnmarshalJSON(d: $.VarRef<Duration> | null, bytes: $.Slice<number>): globalThis.Promise<$.GoError> {
	let s: $.VarRef<string> = $.varRef("")
	{
		let err = await json.Unmarshal(bytes, $.interfaceValue(s, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
		if (err != null) {
			return err
		}
	}
	let [dur, err] = await ParseDuration(s.value)
	if (err != null) {
		return err
	}
	d!.value = dur
	return null
}

export async function Duration_MarshalText(d: $.VarRef<Duration> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return [$.stringToBytes(await Duration_String($.pointerValue<Duration>(d))), null]
}

export async function Duration_UnmarshalText(d: $.VarRef<Duration> | null, text: $.Slice<number>): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple2: any = await ParseDuration($.bytesToString(text))
	d!.value = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	return err
}

export async function Duration_MarshalYAML(d: Duration): globalThis.Promise<[any, $.GoError]> {
	return [await Duration_String(d), null]
}

export async function Duration_UnmarshalYAML(d: $.VarRef<Duration> | null, unmarshal: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	let s: $.VarRef<string> = $.varRef("")
	{
		let err = (__goscriptAwait = unmarshal!($.interfaceValue(s, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return err
		}
	}
	let [dur, err] = await ParseDuration(s.value)
	if (err != null) {
		return err
	}
	d!.value = dur
	return null
}

var __goscriptAwait: any
