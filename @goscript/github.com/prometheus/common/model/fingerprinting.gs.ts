// Generated file based on fingerprinting.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.Fingerprint", "model.Fingerprints", "model.FingerprintSet"])

export type Fingerprint = bigint

$.registerNamedValueType(
	"model.Fingerprint",
	{String: (receiver: any, ...args: any[]) => (Fingerprint_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*model.Fingerprint",
	{String: (receiver: any, ...args: any[]) => (Fingerprint_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Fingerprints = $.Slice<Fingerprint>

$.registerNamedType("model.Fingerprints", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")));

$.registerNamedValueType(
	"model.Fingerprints",
	{Len: (receiver: any, ...args: any[]) => (Fingerprints_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Fingerprints_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Fingerprints_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*model.Fingerprints",
	{Len: (receiver: any, ...args: any[]) => (Fingerprints_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Fingerprints_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Fingerprints_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type FingerprintSet = globalThis.Map<Fingerprint, {}> | null

$.registerNamedType("model.FingerprintSet", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint"), { kind: $.TypeKind.Struct, methods: [], fields: [] }));

$.registerNamedValueType(
	"model.FingerprintSet",
	{Equal: (receiver: any, ...args: any[]) => (FingerprintSet_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Intersection: (receiver: any, ...args: any[]) => (FingerprintSet_Intersection as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", "model.FingerprintSet"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Intersection", [["o", "model.FingerprintSet"]], ["model.FingerprintSet"])]
);

$.registerNamedValueType(
	"*model.FingerprintSet",
	{Equal: (receiver: any, ...args: any[]) => (FingerprintSet_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Intersection: (receiver: any, ...args: any[]) => (FingerprintSet_Intersection as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", "model.FingerprintSet"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Intersection", [["o", "model.FingerprintSet"]], ["model.FingerprintSet"])]
);

export function FingerprintFromString(s: string): [Fingerprint, $.GoError] {
	let [num, err] = strconv.ParseUint(s, 16, 64)
	return [$.uint64(num), err]
}

export function ParseFingerprint(s: string): [Fingerprint, $.GoError] {
	let [num, err] = strconv.ParseUint(s, 16, 64)
	if (err != null) {
		return [0n, err]
	}
	return [$.uint64(num), null]
}

export async function Fingerprint_String(f: Fingerprint): globalThis.Promise<string> {
	return fmt.Sprintf("%016x", $.basicInterfaceValue($.uint64(f), "uint64"))
}

export function Fingerprints_Len(f: Fingerprints): number {
	return $.sliceLen((f as Fingerprints))
}

export function Fingerprints_Less(f: Fingerprints, i: number, j: number): boolean {
	return $.arrayIndex(f!, i) < $.arrayIndex(f!, j)
}

export function Fingerprints_Swap(f: Fingerprints, i: number, j: number): void {
	let __goscriptAssign0_0: Fingerprint = $.arrayIndex(f!, j)
	let __goscriptAssign0_1: Fingerprint = $.arrayIndex(f!, i)
	$.sliceElems(f!)[$.sliceSlot(f!, i)] = __goscriptAssign0_0
	$.sliceElems(f!)[$.sliceSlot(f!, j)] = __goscriptAssign0_1
}

export function FingerprintSet_Equal(s: FingerprintSet, o: FingerprintSet): boolean {
	if ($.len(s) != $.len(o)) {
		return false
	}

	for (const [k, __rangeValue] of s?.entries() ?? []) {
		{
			let [, ok] = $.mapGet<Fingerprint, {}, {}>(o, k, {})
			if (!ok) {
				return false
			}
		}
	}

	return true
}

export function FingerprintSet_Intersection(s: FingerprintSet, o: FingerprintSet): FingerprintSet {
	let myLength = $.len(s)
	let otherLength = $.len(o)
	if ((myLength == 0) || (otherLength == 0)) {
		return $.makeMap<Fingerprint, {}>([])
	}

	let subSet: FingerprintSet = s
	let superSet: FingerprintSet = o

	if (otherLength < myLength) {
		subSet = o
		superSet = s
	}

	let out: FingerprintSet = $.makeMap<Fingerprint, {}>([])

	for (let [k, __rangeValue] of subSet?.entries() ?? []) {
		{
			let [, ok] = $.mapGet<Fingerprint, {}, {}>(superSet, k, {})
			if (ok) {
				$.mapSet(out, k, {})
			}
		}
	}

	return out
}
