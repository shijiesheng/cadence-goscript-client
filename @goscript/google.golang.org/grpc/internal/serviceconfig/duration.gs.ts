// Generated file based on duration.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/serviceconfig", ["serviceconfig.Duration"])

export type Duration = bigint

$.registerNamedValueType(
	"serviceconfig.Duration",
	{MarshalJSON: (receiver: any, ...args: any[]) => (Duration_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*serviceconfig.Duration",
	{MarshalJSON: (receiver: any, ...args: any[]) => (Duration_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Duration_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Duration_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export async function Duration_String(d: Duration): globalThis.Promise<string> {
	return fmt.Sprint($.namedValueInterfaceValue<any>($.int64(d), "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export async function Duration_MarshalJSON(d: Duration): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let ns = time.Duration_Nanoseconds($.int64(d))
	let sec = $.int64Div(ns, 1000000000n)
	ns = $.int64Mod(ns, 1000000000n)

	let sign: string = ""
	if ((sec < 0n) || (ns < 0n)) {
		let __goscriptAssign0_0: string = "-"
		let __goscriptAssign0_1: bigint = $.int64Mul(-1n, sec)
		let __goscriptAssign0_2: bigint = $.int64Mul(-1n, ns)
		sign = __goscriptAssign0_0
		sec = __goscriptAssign0_1
		ns = __goscriptAssign0_2
	}

	// Generated output always contains 0, 3, 6, or 9 fractional digits,
	// depending on required precision.
	let str = await fmt.Sprintf("%s%d.%09d", sign, $.basicInterfaceValue(sec, "int64"), $.basicInterfaceValue(ns, "int64"))
	str = strings.TrimSuffix(str, "000")
	str = strings.TrimSuffix(str, "000")
	str = strings.TrimSuffix(str, ".000")
	return [$.stringToBytes(await fmt.Sprintf("\"%ss\"", str)), null]
}

export async function Duration_UnmarshalJSON(d: $.VarRef<Duration> | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
	let s: $.VarRef<string> = $.varRef("")
	{
		let err = await json.Unmarshal(b, $.interfaceValue(s, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
		if (err != null) {
			return err
		}
	}
	if (!strings.HasSuffix(s.value, "s")) {
		return fmt.Errorf("malformed duration %q: missing seconds unit", s.value)
	}
	let neg = false
	if ($.indexString(s.value, 0) == 45) {
		neg = true
		s.value = $.sliceStringOrBytes(s.value, 1, undefined)
	}
	let ss: $.Slice<string> = strings.SplitN($.sliceStringOrBytes(s.value, undefined, $.stringLen(s.value) - 1), ".", 3)
	if ($.sliceLen(ss) > 2) {
		return fmt.Errorf("malformed duration %q: too many decimals", s.value)
	}
	// hasDigits is set if either the whole or fractional part of the number is
	// present, since both are optional but one is required.
	let hasDigits = false
	let sec: bigint = 0n
	let ns: bigint = 0n
	if ($.stringLen($.arrayIndex(ss!, 0)) > 0) {
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple0: any = strconv.ParseInt($.arrayIndex(ss!, 0), 10, 64)
			sec = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return fmt.Errorf("malformed duration %q: %v", s.value, (err as any))
			}
		}
		// Maximum seconds value per the durationpb spec.
		const maxProtoSeconds: number = 315576000000
		if (sec > 315576000000n) {
			return fmt.Errorf("out of range: %q", s.value)
		}
		hasDigits = true
	}
	if (($.sliceLen(ss) == 2) && ($.stringLen($.arrayIndex(ss!, 1)) > 0)) {
		if ($.stringLen($.arrayIndex(ss!, 1)) > 9) {
			return fmt.Errorf("malformed duration %q: too many digits after decimal", s.value)
		}
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple1: any = strconv.ParseInt($.arrayIndex(ss!, 1), 10, 64)
			ns = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return fmt.Errorf("malformed duration %q: %v", s.value, (err as any))
			}
		}
		for (let __goscriptSliceWindow0 = $.sliceRange(ss), i = 9; i > $.stringLen(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 1)] as string)); i--) {
			ns = $.int64Mul(ns, 10n)
		}
		hasDigits = true
	}
	if (!hasDigits) {
		return fmt.Errorf("malformed duration %q: contains no numbers", s.value)
	}

	if (neg) {
		sec = $.int64Mul(sec, -1n)
		ns = $.int64Mul(ns, -1n)
	}

	// Maximum/minimum seconds/nanoseconds representable by Go's time.Duration.
	const maxSeconds: bigint = 9223372036n
	const maxNanosAtMaxSeconds: bigint = 854775807n
	const minSeconds: bigint = -9223372036n
	const minNanosAtMinSeconds: bigint = -854775808n

	if ((sec > 9223372036n) || ((sec == 9223372036n) && (ns >= 854775807n))) {
		d!.value = 9223372036854775807n
	} else {
		if ((sec < -9223372036n) || ((sec == -9223372036n) && (ns <= -854775808n))) {
			d!.value = -9223372036854775808n
		} else {
			d!.value = $.int64($.int64Add(($.int64Mul(sec, 1000000000n)), ns))
		}
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}
