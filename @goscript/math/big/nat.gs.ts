// Generated file based on nat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as rand2 from "@goscript/math/rand/index.js"

import * as strings from "@goscript/strings/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as slices from "@goscript/slices/index.js"

import * as sync from "@goscript/sync/index.js"

import * as errors from "@goscript/errors/index.js"

import * as math from "@goscript/math/index.js"

import type * as __goscript_accuracy_string from "./accuracy_string.gs.ts"

import * as __goscript_arith from "./arith.gs.ts"

import * as __goscript_arith_decl_pure from "./arith_decl_pure.gs.ts"

import type * as __goscript_float from "./float.gs.ts"

import * as __goscript_int from "./int.gs.ts"

import * as __goscript_intconv from "./intconv.gs.ts"

import * as __goscript_intmarsh from "./intmarsh.gs.ts"

import * as __goscript_natconv from "./natconv.gs.ts"

import * as __goscript_natdiv from "./natdiv.gs.ts"

import * as __goscript_natmul from "./natmul.gs.ts"

import * as __goscript_prime from "./prime.gs.ts"

import * as __goscript_rat from "./rat.gs.ts"

import type * as __goscript_roundingmode_string from "./roundingmode_string.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/strings/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/slices/index.js"
import "@goscript/sync/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/index.js"
import "./arith.gs.ts"
import "./arith_decl_pure.gs.ts"
import "./int.gs.ts"
import "./intconv.gs.ts"
import "./intmarsh.gs.ts"
import "./natconv.gs.ts"
import "./natdiv.gs.ts"
import "./natmul.gs.ts"
import "./prime.gs.ts"
import "./rat.gs.ts"

$.registerTypePackagePath("math/big", ["big.nat", "big.stackInner", "big.stack"])

export type nat = $.Slice<__goscript_arith.Word>

$.registerNamedType("big.nat", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word")));

$.registerNamedValueType(
	"big.nat",
	{String: (receiver: any, ...args: any[]) => (nat_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), add: (receiver: any, ...args: any[]) => (nat_add as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), and: (receiver: any, ...args: any[]) => (nat_and as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), andNot: (receiver: any, ...args: any[]) => (nat_andNot as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), bit: (receiver: any, ...args: any[]) => (nat_bit as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), bitLen: (receiver: any, ...args: any[]) => (nat_bitLen as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => (nat_bytes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), cmp: (receiver: any, ...args: any[]) => (nat_cmp as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), convertWords: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_convertWords as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), div: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_div as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), divBasic: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divBasic as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), divLarge: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divLarge as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), divRecursive: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divRecursive as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), divRecursiveStep: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divRecursiveStep as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), divW: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divW as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), expNN: (receiver: any, ...args: any[]) => (nat_expNN as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), expNNMontgomery: (receiver: any, ...args: any[]) => (nat_expNNMontgomery as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), expNNMontgomeryEven: (receiver: any, ...args: any[]) => (nat_expNNMontgomeryEven as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), expNNWindowed: (receiver: any, ...args: any[]) => (nat_expNNWindowed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), expWW: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_expWW as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), isPow2: (receiver: any, ...args: any[]) => (nat_isPow2 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), itoa: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_itoa as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), lsh: (receiver: any, ...args: any[]) => (nat_lsh as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), make: (receiver: any, ...args: any[]) => (nat_make as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), modInverse: (receiver: any, ...args: any[]) => (__goscript_int.nat_modInverse as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), modW: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_modW as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), montgomery: (receiver: any, ...args: any[]) => (nat_montgomery as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), mul: (receiver: any, ...args: any[]) => (__goscript_natmul.nat_mul as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), mulAddWW: (receiver: any, ...args: any[]) => (__goscript_natmul.nat_mulAddWW as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), mulRange: (receiver: any, ...args: any[]) => (nat_mulRange as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), norm: (receiver: any, ...args: any[]) => (nat_norm as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), or: (receiver: any, ...args: any[]) => (nat_or as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), probablyPrimeLucas: (receiver: any, ...args: any[]) => (__goscript_prime.nat_probablyPrimeLucas as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), probablyPrimeMillerRabin: (receiver: any, ...args: any[]) => (__goscript_prime.nat_probablyPrimeMillerRabin as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), random: (receiver: any, ...args: any[]) => (nat_random as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), rem: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_rem as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), rsh: (receiver: any, ...args: any[]) => (nat_rsh as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), scan: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_scan as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), set: (receiver: any, ...args: any[]) => (nat__set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), setBit: (receiver: any, ...args: any[]) => (nat_setBit as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), setBytes: (receiver: any, ...args: any[]) => (nat_setBytes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), setUint64: (receiver: any, ...args: any[]) => (nat_setUint64 as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), setWord: (receiver: any, ...args: any[]) => (nat_setWord as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), sqr: (receiver: any, ...args: any[]) => (__goscript_natmul.nat_sqr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), sqrt: (receiver: any, ...args: any[]) => (nat_sqrt as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), sticky: (receiver: any, ...args: any[]) => (nat_sticky as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), sub: (receiver: any, ...args: any[]) => (nat_sub as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), subMod2N: (receiver: any, ...args: any[]) => (nat_subMod2N as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), trailingZeroBits: (receiver: any, ...args: any[]) => (nat_trailingZeroBits as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), trunc: (receiver: any, ...args: any[]) => (nat_trunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), utoa: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_utoa as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), xor: (receiver: any, ...args: any[]) => (nat_xor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("add", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("and", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("andNot", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("bit", [["i", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("bitLen", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("bytes", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["i", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("cmp", [["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["r", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("convertWords", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["b", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["ndigits", /* @__PURE__ */ $.basicType("int")], ["bb", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["table", /* @__PURE__ */ $.sliceType("big.divisor")]]), $.methodSignature("div", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["z2", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divBasic", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divLarge", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["uIn", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["vIn", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divRecursive", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divRecursiveStep", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["depth", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("divW", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [["q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["r", /* @__PURE__ */ $.basicType("uint", "big.Word")]]), $.methodSignature("expNN", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["slow", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expNNMontgomery", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expNNMontgomeryEven", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expNNWindowed", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["logM", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expWW", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["y", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("isPow2", [], [/* @__PURE__ */ $.basicType("uint"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("itoa", [["neg", /* @__PURE__ */ $.basicType("bool")], ["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("lsh", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["s", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("make", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("modInverse", [["g", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("modW", [["d", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [["r", /* @__PURE__ */ $.basicType("uint", "big.Word")]]), $.methodSignature("montgomery", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["k", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("mul", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("mulAddWW", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["r", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("mulRange", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["a", /* @__PURE__ */ $.basicType("uint64")], ["b", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("norm", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("or", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("probablyPrimeLucas", [["stk", /* @__PURE__ */ $.pointerType("big.stack")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("probablyPrimeMillerRabin", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["reps", /* @__PURE__ */ $.basicType("int")], ["force2", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("random", [["rand", /* @__PURE__ */ $.pointerType("rand.Rand")], ["limit", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("rem", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("rsh", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["s", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("scan", [["r", "io.ByteScanner"], ["base", /* @__PURE__ */ $.basicType("int")], ["fracOk", /* @__PURE__ */ $.basicType("bool")]], [["res", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["b", /* @__PURE__ */ $.basicType("int")], ["count", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("set", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setBit", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["i", /* @__PURE__ */ $.basicType("uint")], ["b", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setBytes", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setUint64", [["x", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setWord", [["x", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("sqr", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("sqrt", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("sticky", [["i", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("sub", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("subMod2N", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("trailingZeroBits", [], [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("trunc", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("utoa", [["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("xor", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")])]
);

$.registerNamedValueType(
	"*big.nat",
	{String: (receiver: any, ...args: any[]) => (nat_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), add: (receiver: any, ...args: any[]) => (nat_add as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), and: (receiver: any, ...args: any[]) => (nat_and as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), andNot: (receiver: any, ...args: any[]) => (nat_andNot as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), bit: (receiver: any, ...args: any[]) => (nat_bit as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), bitLen: (receiver: any, ...args: any[]) => (nat_bitLen as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => (nat_bytes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), cmp: (receiver: any, ...args: any[]) => (nat_cmp as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), convertWords: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_convertWords as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), div: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_div as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), divBasic: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divBasic as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), divLarge: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divLarge as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), divRecursive: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divRecursive as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), divRecursiveStep: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divRecursiveStep as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), divW: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_divW as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), expNN: (receiver: any, ...args: any[]) => (nat_expNN as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), expNNMontgomery: (receiver: any, ...args: any[]) => (nat_expNNMontgomery as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), expNNMontgomeryEven: (receiver: any, ...args: any[]) => (nat_expNNMontgomeryEven as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), expNNWindowed: (receiver: any, ...args: any[]) => (nat_expNNWindowed as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), expWW: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_expWW as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), isPow2: (receiver: any, ...args: any[]) => (nat_isPow2 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), itoa: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_itoa as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), lsh: (receiver: any, ...args: any[]) => (nat_lsh as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), make: (receiver: any, ...args: any[]) => (nat_make as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), modInverse: (receiver: any, ...args: any[]) => (__goscript_int.nat_modInverse as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), modW: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_modW as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), montgomery: (receiver: any, ...args: any[]) => (nat_montgomery as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), mul: (receiver: any, ...args: any[]) => (__goscript_natmul.nat_mul as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), mulAddWW: (receiver: any, ...args: any[]) => (__goscript_natmul.nat_mulAddWW as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), mulRange: (receiver: any, ...args: any[]) => (nat_mulRange as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), norm: (receiver: any, ...args: any[]) => (nat_norm as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), or: (receiver: any, ...args: any[]) => (nat_or as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), probablyPrimeLucas: (receiver: any, ...args: any[]) => (__goscript_prime.nat_probablyPrimeLucas as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), probablyPrimeMillerRabin: (receiver: any, ...args: any[]) => (__goscript_prime.nat_probablyPrimeMillerRabin as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), random: (receiver: any, ...args: any[]) => (nat_random as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), rem: (receiver: any, ...args: any[]) => (__goscript_natdiv.nat_rem as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), rsh: (receiver: any, ...args: any[]) => (nat_rsh as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), scan: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_scan as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), set: (receiver: any, ...args: any[]) => (nat__set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), setBit: (receiver: any, ...args: any[]) => (nat_setBit as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), setBytes: (receiver: any, ...args: any[]) => (nat_setBytes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), setUint64: (receiver: any, ...args: any[]) => (nat_setUint64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), setWord: (receiver: any, ...args: any[]) => (nat_setWord as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), sqr: (receiver: any, ...args: any[]) => (__goscript_natmul.nat_sqr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), sqrt: (receiver: any, ...args: any[]) => (nat_sqrt as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), sticky: (receiver: any, ...args: any[]) => (nat_sticky as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), sub: (receiver: any, ...args: any[]) => (nat_sub as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), subMod2N: (receiver: any, ...args: any[]) => (nat_subMod2N as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), trailingZeroBits: (receiver: any, ...args: any[]) => (nat_trailingZeroBits as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), trunc: (receiver: any, ...args: any[]) => (nat_trunc as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), utoa: (receiver: any, ...args: any[]) => (__goscript_natconv.nat_utoa as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), xor: (receiver: any, ...args: any[]) => (nat_xor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("add", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("and", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("andNot", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("bit", [["i", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("bitLen", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("bytes", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["i", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("cmp", [["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["r", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("convertWords", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["b", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["ndigits", /* @__PURE__ */ $.basicType("int")], ["bb", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["table", /* @__PURE__ */ $.sliceType("big.divisor")]]), $.methodSignature("div", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["z2", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divBasic", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divLarge", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["uIn", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["vIn", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divRecursive", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("divRecursiveStep", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["depth", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("divW", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [["q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["r", /* @__PURE__ */ $.basicType("uint", "big.Word")]]), $.methodSignature("expNN", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["slow", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expNNMontgomery", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expNNMontgomeryEven", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expNNWindowed", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["logM", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("expWW", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["y", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("isPow2", [], [/* @__PURE__ */ $.basicType("uint"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("itoa", [["neg", /* @__PURE__ */ $.basicType("bool")], ["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("lsh", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["s", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("make", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("modInverse", [["g", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("modW", [["d", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [["r", /* @__PURE__ */ $.basicType("uint", "big.Word")]]), $.methodSignature("montgomery", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["k", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("mul", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("mulAddWW", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.basicType("uint", "big.Word")], ["r", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("mulRange", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["a", /* @__PURE__ */ $.basicType("uint64")], ["b", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("norm", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("or", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("probablyPrimeLucas", [["stk", /* @__PURE__ */ $.pointerType("big.stack")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("probablyPrimeMillerRabin", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["reps", /* @__PURE__ */ $.basicType("int")], ["force2", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("random", [["rand", /* @__PURE__ */ $.pointerType("rand.Rand")], ["limit", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("rem", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["u", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [["r", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]]), $.methodSignature("rsh", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["s", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("scan", [["r", "io.ByteScanner"], ["base", /* @__PURE__ */ $.basicType("int")], ["fracOk", /* @__PURE__ */ $.basicType("bool")]], [["res", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["b", /* @__PURE__ */ $.basicType("int")], ["count", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("set", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setBit", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["i", /* @__PURE__ */ $.basicType("uint")], ["b", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setBytes", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setUint64", [["x", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("setWord", [["x", /* @__PURE__ */ $.basicType("uint", "big.Word")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("sqr", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("sqrt", [["stk", /* @__PURE__ */ $.pointerType("big.stack")], ["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("sticky", [["i", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("sub", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("subMod2N", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("trailingZeroBits", [], [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("trunc", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["n", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]), $.methodSignature("utoa", [["base", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("xor", [["x", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], ["y", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")])]
);

export class stackInner {
	public get w(): $.Slice<__goscript_arith.Word> {
		return this._fields.w
	}

	public set w(value: $.Slice<__goscript_arith.Word>) {
		this._fields.w = value
	}

	public _fields: {
		w: $.Slice<__goscript_arith.Word>
	}

	constructor(init?: Partial<{w?: $.Slice<__goscript_arith.Word>}>, __goscriptValue?: boolean) {
		this._fields = {
			w: init?.w ?? (null! as $.Slice<__goscript_arith.Word>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stackInner {
		return new stackInner(this, true)
	}

	public __goscriptAssign(source: stackInner): void {
		const target = this._fields
		const values = source._fields
		target.w = values.w
	}

	public free(): void {
		let s: stackInner | $.VarRef<stackInner> | null = this;
		const s$: stackInner = s == null ? $.pointerTarget<stackInner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stackInner>(s);
		;(s$ as stackInner).w = $.goSlice((s$ as stackInner).w, undefined, 0)
		$.pointerValue<sync.Pool>(__goscript_get_stackPool()).Put($.interfaceValue(s, "*big.stackInner", /* @__PURE__ */ $.pointerType("big.stackInner")))
	}

	public nat(n: number): nat {
		let s: stackInner | $.VarRef<stackInner> | null = this;
		const s$: stackInner = s == null ? $.pointerTarget<stackInner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stackInner>(s)
		let nr = (n + 3) & ~(3)
		let off = $.sliceLen((s$ as stackInner).w);
		;(s$ as stackInner).w = (slices.Grow((s$ as stackInner).w, nr) as $.Slice<__goscript_arith.Word>);
		;(s$ as stackInner).w = $.goSlice((s$ as stackInner).w, undefined, off + nr)
		let x: $.Slice<__goscript_arith.Word> = $.goSlice((s$ as stackInner).w, off, off + n, off + n)
		if (n > 0) {
			$.sliceElems(x!)[$.sliceSlot(x!, 0)] = 0xfedcb
		}
		return (x as nat)
	}

	public restore(n: number): void {
		let s: stackInner | $.VarRef<stackInner> | null = this;
		const s$: stackInner = s == null ? $.pointerTarget<stackInner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stackInner>(s);
		;(s$ as stackInner).w = $.goSlice((s$ as stackInner).w, undefined, n)
	}

	public save(): number {
		const s: stackInner | $.VarRef<stackInner> | null = this;
		return $.sliceLen($.pointerValue<stackInner>(s).w)
	}

	static __typeInfo = $.registerStructType(
		"big.stackInner",
		() => new stackInner(),
		() => [$.methodSignature("free", [], [], true), $.methodSignature("nat", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], true), $.methodSignature("restore", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("save", [], [/* @__PURE__ */ $.basicType("int")], true)],
		stackInner,
		() => [/* @__PURE__ */ $.structField("w", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word")), [0], 0, false, { pkgPath: "math/big" })]
	)
}

export class stack {
	public get si(): stackInner | $.VarRef<stackInner> | null {
		return this._fields.si
	}

	public set si(value: stackInner | $.VarRef<stackInner> | null) {
		this._fields.si = value
	}

	public _fields: {
		si: stackInner | $.VarRef<stackInner> | null
	}

	constructor(init?: Partial<{si?: stackInner | $.VarRef<stackInner> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			si: init?.si ?? (null! as stackInner | $.VarRef<stackInner> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stack {
		return new stack(this, true)
	}

	public __goscriptAssign(source: stack): void {
		const target = this._fields
		const values = source._fields
		target.si = values.si
	}

	public free(): void {
		const s: stack | $.VarRef<stack> | null = this;
		let si: stackInner | $.VarRef<stackInner> | null = $.pointerValue<stack>(s).si
		if (si != null) {
			void (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as stackInner).free() : stackInner.prototype.free.call(si))
		}
	}

	public async nat(n: number): globalThis.Promise<nat> {
		let s: stack | $.VarRef<stack> | null = this;
		const s$: stack = s == null ? $.pointerTarget<stack>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stack>(s)
		let si: stackInner | $.VarRef<stackInner> | null = (s$ as stack).si
		if (si == null) {
			if (n <= 4) {
				// For small allocations, just ask the allocator.
				// It isn't worth pooling these allocations.
				// See issue 73999.
				let r: nat = ((slices.Grow(((null as nat) as nat), n) as nat) as nat)
				r = ($.goSlice(r, undefined, n) as nat)
				if (n > 0) {
					$.sliceElems(r!)[$.sliceSlot(r!, 0)] = 0xabcdef
				}
				return (r as nat)
			}
			let __goscriptTuple1: any = $.typeAssertTuple<stackInner | $.VarRef<stackInner> | null>(await $.pointerValue<sync.Pool>(__goscript_get_stackPool()).Get(), /* @__PURE__ */ $.pointerType("big.stackInner"))
			si = __goscriptTuple1[0]
			if (si == null) {
				si = new stackInner()
			}
			;(s$ as stack).si = si
		}
		return ((si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as stackInner).nat(n) : stackInner.prototype.nat.call(si, n)) as nat)
	}

	public restore(n: number): void {
		const s: stack | $.VarRef<stack> | null = this;
		let si: stackInner | $.VarRef<stackInner> | null = $.pointerValue<stack>(s).si
		if (si == null) {
			return
		}
		void (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as stackInner).restore(n) : stackInner.prototype.restore.call(si, n))
	}

	public save(): number {
		const s: stack | $.VarRef<stack> | null = this;
		let si: stackInner | $.VarRef<stackInner> | null = $.pointerValue<stack>(s).si
		if (si == null) {
			return 0
		}
		return (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as stackInner).save() : stackInner.prototype.save.call(si))
	}

	static __typeInfo = $.registerStructType(
		"big.stack",
		() => new stack(),
		() => [$.methodSignature("free", [], [], true), $.methodSignature("nat", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint", "big.Word"), "big.nat")], true), $.methodSignature("restore", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("save", [], [/* @__PURE__ */ $.basicType("int")], true)],
		stack,
		() => [/* @__PURE__ */ $.structField("si", /* @__PURE__ */ $.pointerType("big.stackInner"), [0], 0, false, { pkgPath: "math/big" })]
	)
}

export var natOne: nat

export function __goscript_init_natOne(): void {
	if (((natOne) as any) === undefined) {
		natOne = ($.arrayToSlice<__goscript_arith.Word>([1]) as nat)
	}
}

export function __goscript_get_natOne(): nat {
	if (((natOne) as any) === undefined) {
		__goscript_init_natOne()
	}
	return natOne
}

export function __goscript_set_natOne(__goscriptValue: nat): void {
	natOne = __goscriptValue
}

export let natTwo: nat = ($.arrayToSlice<__goscript_arith.Word>([2]) as nat)

export function __goscript_set_natTwo(__goscriptValue: nat): void {
	natTwo = __goscriptValue
}

export let natFive: nat = ($.arrayToSlice<__goscript_arith.Word>([5]) as nat)

export function __goscript_set_natFive(__goscriptValue: nat): void {
	natFive = __goscriptValue
}

export let natTen: nat = ($.arrayToSlice<__goscript_arith.Word>([10]) as nat)

export function __goscript_set_natTen(__goscriptValue: nat): void {
	natTen = __goscriptValue
}

export async function nat_String(z: nat): globalThis.Promise<string> {
	return $.concatString("0x", $.bytesToString(await __goscript_natconv.nat_itoa(z, false, 16)))
}

export function nat_norm(z: nat): nat {
	let i = $.sliceLen((z as nat))
	for (let __goscriptSliceWindow0 = $.sliceRange(z); (i > 0) && (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i - 1)] as __goscript_arith.Word) == 0); ) {
		i--
	}
	return ($.goSlice(z, 0, i) as nat)
}

export function nat_make(z: nat, n: number): nat {
	if (n <= $.cap((z as nat))) {
		return ($.goSlice(z, undefined, n) as nat)
	}
	if (n == 1) {
		// Most nats start small and stay that way; don't over-allocate.
		return ($.makeSlice<__goscript_arith.Word>(1, undefined, "number") as nat)
	}
	// Choosing a good value for e has significant performance impact
	// because it increases the chance that a value can be reused.
	const e: number = 4
	return ($.makeSlice<__goscript_arith.Word>(n, n + 4, "number") as nat)
}

export function nat_setWord(z: nat, x: __goscript_arith.Word): nat {
	if (x == 0) {
		return ($.goSlice(z, undefined, 0) as nat)
	}
	z = (nat_make(z, 1) as nat)
	$.sliceElems(z!)[$.sliceSlot(z!, 0)] = x
	return (z as nat)
}

export function nat_setUint64(z: nat, x: bigint): nat {
	// single-word value
	{
		let w = $.uint(x, 64)
		if ($.uint64(w) == x) {
			return (nat_setWord(z, w) as nat)
		}
	}
	// 2-word value
	z = (nat_make(z, 2) as nat)
	$.sliceElems(z!)[$.sliceSlot(z!, 1)] = $.uint($.uint64Shr(x, 32n), 64)
	$.sliceElems(z!)[$.sliceSlot(z!, 0)] = $.uint(x, 64)
	return (z as nat)
}

export function nat__set(z: nat, x: nat): nat {
	z = (nat_make(z, $.sliceLen((x as nat))) as nat)
	$.copy((z as nat), (x as nat))
	return (z as nat)
}

export function nat_add(z: nat, x: nat, y: nat): nat {
	let m = $.sliceLen((x as nat))
	let n = $.sliceLen((y as nat))

	switch ((true as boolean)) {
		case m < n:
		{
			return (nat_add(z, (y as nat), (x as nat)) as nat)
			break
		}
		case m == 0:
		{
			return ($.goSlice(z, undefined, 0) as nat)
			break
		}
		case n == 0:
		{
			return (nat__set(z, (x as nat)) as nat)
			break
		}
	}
	// m > 0

	z = (nat_make(z, m + 1) as nat)
	let c = __goscript_arith_decl_pure.addVV($.goSlice(z, undefined, n), $.goSlice(x, undefined, n), $.goSlice(y, undefined, n))
	if (m > n) {
		c = __goscript_arith.addVW($.goSlice(z, n, m), $.goSlice(x, n, undefined), c)
	}
	$.sliceElems(z!)[$.sliceSlot(z!, m)] = c

	return (nat_norm(z) as nat)
}

export function nat_sub(z: nat, x: nat, y: nat): nat {
	let m = $.sliceLen((x as nat))
	let n = $.sliceLen((y as nat))

	switch ((true as boolean)) {
		case m < n:
		{
			$.panic("underflow")
			break
		}
		case m == 0:
		{
			return ($.goSlice(z, undefined, 0) as nat)
			break
		}
		case n == 0:
		{
			return (nat__set(z, (x as nat)) as nat)
			break
		}
	}
	// m > 0

	z = (nat_make(z, m) as nat)
	let c = __goscript_arith_decl_pure.subVV($.goSlice(z, undefined, n), $.goSlice(x, undefined, n), $.goSlice(y, undefined, n))
	if (m > n) {
		c = __goscript_arith.subVW($.goSlice(z, n, undefined), $.goSlice(x, n, undefined), c)
	}
	if (c != 0) {
		$.panic("underflow")
	}

	return (nat_norm(z) as nat)
}

export function nat_cmp(x: nat, y: nat): number {
	let r: number = 0
	let m = $.sliceLen((x as nat))
	let n = $.sliceLen((y as nat))
	if ((m != n) || (m == 0)) {
		switch ((true as boolean)) {
			case m < n:
			{
				r = -1
				break
			}
			case m > n:
			{
				r = 1
				break
			}
		}
		return r
	}

	let i = m - 1
	for (let __goscriptSliceWindow1 = $.sliceRange(x), __goscriptSliceWindow2 = $.sliceRange(y); (i > 0) && (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as __goscript_arith.Word) == ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as __goscript_arith.Word)); ) {
		i--
	}

	switch ((true as boolean)) {
		case $.arrayIndex(x!, i) < $.arrayIndex(y!, i):
		{
			r = -1
			break
		}
		case $.arrayIndex(x!, i) > $.arrayIndex(y!, i):
		{
			r = 1
			break
		}
	}
	return r
}

export function nat_montgomery(z: nat, x: nat, y: nat, m: nat, k: __goscript_arith.Word, n: number): nat {
	// This code assumes x, y, m are all the same length, n.
	// (required by addMulVVW and the for loop).
	// It also assumes that x, y are already reduced mod m,
	// or else the result will not be properly reduced.
	if ((($.sliceLen((x as nat)) != n) || ($.sliceLen((y as nat)) != n)) || ($.sliceLen((m as nat)) != n)) {
		$.panic("math/big: mismatched montgomery number lengths")
	}
	z = (nat_make(z, n * 2) as nat)
	$.clear((z as nat))
	let c: __goscript_arith.Word = 0
	for (let __goscriptSliceWindow3 = $.sliceRange(y), __goscriptSliceWindow4 = $.sliceRange(z), i = 0; i < n; i++) {
		let d = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as __goscript_arith.Word)
		let c2 = __goscript_arith_decl_pure.addMulVVWW($.goSlice(z, i, n + i), $.goSlice(z, i, n + i), x, d, 0)
		let t = $.uint($.uint64Mul(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as __goscript_arith.Word), k), 64)
		let c3 = __goscript_arith_decl_pure.addMulVVWW($.goSlice(z, i, n + i), $.goSlice(z, i, n + i), m, t, 0)
		let cx = $.uint($.uint64Add(c, c2), 64)
		let cy = $.uint($.uint64Add(cx, c3), 64);
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, n + i)] = cy
		if ((cx < c2) || (cy < c3)) {
			c = 1
		} else {
			c = 0
		}
	}
	if (c != 0) {
		__goscript_arith_decl_pure.subVV($.goSlice(z, undefined, n), $.goSlice(z, n, undefined), m)
	} else {
		$.copy(($.goSlice(z, undefined, n) as nat), ($.goSlice(z, n, undefined) as nat))
	}
	return ($.goSlice(z, undefined, n) as nat)
}

export function alias(x: nat, y: nat): boolean {
	return (($.cap((x as nat)) > 0) && ($.cap((y as nat)) > 0)) && ($.indexAddress($.goSlice(x, 0, $.cap((x as nat)))!, $.cap((x as nat)) - 1) == $.indexAddress($.goSlice(y, 0, $.cap((y as nat)))!, $.cap((y as nat)) - 1))
}

export function addTo(z: nat, x: nat): void {
	{
		let n = $.sliceLen((x as nat))
		if (n > 0) {
			{
				let c = __goscript_arith_decl_pure.addVV($.goSlice(z, undefined, n), $.goSlice(z, undefined, n), $.goSlice(x, undefined, n))
				if (c != 0) {
					if (n < $.sliceLen((z as nat))) {
						__goscript_arith.addVW($.goSlice(z, n, undefined), $.goSlice(z, n, undefined), c)
					}
				}
			}
		}
	}
}

export async function nat_mulRange(z: nat, stk: stack | $.VarRef<stack> | null, a: bigint, b: bigint): globalThis.Promise<nat> {
	using __defer = new $.DisposableStack()
	switch ((true as boolean)) {
		case a == 0n:
		{
			return (nat_setUint64(z, 0n) as nat)
			break
		}
		case a > b:
		{
			return (nat_setUint64(z, 1n) as nat)
			break
		}
		case a == b:
		{
			return (nat_setUint64(z, a) as nat)
			break
		}
		case ($.uint64Add(a, 1n)) == b:
		{
			return (await __goscript_natmul.nat_mul(z, stk, (nat_setUint64((null as nat), a) as nat), (nat_setUint64((null as nat), b) as nat)) as nat)
			break
		}
	}

	if (stk == null) {
		stk = getStack()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
	}

	let m = $.uint64Add(a, ($.uint64Div(($.uint64Sub(b, a)), 2n)))
	return (await __goscript_natmul.nat_mul(z, stk, (await nat_mulRange((null as nat), stk, a, m) as nat), (await nat_mulRange((null as nat), stk, $.uint64Add(m, 1n), b) as nat)) as nat)
}

export var stackPool: $.VarRef<sync.Pool>

export function __goscript_init_stackPool(): void {
	if (((stackPool) as any) === undefined) {
		stackPool = $.varRef($.markAsStructValue(new sync.Pool()))
	}
}

export function __goscript_get_stackPool(): $.VarRef<sync.Pool> {
	if (((stackPool) as any) === undefined) {
		__goscript_init_stackPool()
	}
	return stackPool
}

export function __goscript_set_stackPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(__goscript_get_stackPool().value, __goscriptValue)
}

export async function getStackInner(): globalThis.Promise<stackInner | $.VarRef<stackInner> | null> {
	let __goscriptTuple0: any = $.typeAssertTuple<stackInner | $.VarRef<stackInner> | null>(await $.pointerValue<sync.Pool>(__goscript_get_stackPool()).Get(), /* @__PURE__ */ $.pointerType("big.stackInner"))
	let s: stackInner | $.VarRef<stackInner> | null = __goscriptTuple0[0]
	if (s == null) {
		s = new stackInner()
	}
	return s
}

export function getStack(): stack | $.VarRef<stack> | null {
	return new stack()
}

export function nat_bitLen(x: nat): number {
	// This function is used in cryptographic operations. It must not leak
	// anything but the Int's sign and bit size through side-channels. Any
	// changes must be reviewed by a security expert.
	{
		let i = $.sliceLen((x as nat)) - 1
		if (i >= 0) {
			// bits.Len uses a lookup table for the low-order bits on some
			// architectures. Neutralize any input-dependent behavior by setting all
			// bits after the first one bit.
			let top = $.uint($.arrayIndex(x!, i), 64)
			top = $.uint($.uint64Or(top, $.uint($.uint64Shr(top, 1n), 64)), 64)
			top = $.uint($.uint64Or(top, $.uint($.uint64Shr(top, 2n), 64)), 64)
			top = $.uint($.uint64Or(top, $.uint($.uint64Shr(top, 4n), 64)), 64)
			top = $.uint($.uint64Or(top, $.uint($.uint64Shr(top, 8n), 64)), 64)
			top = $.uint($.uint64Or(top, $.uint($.uint64Shr(top, 16n), 64)), 64)
			top = $.uint($.uint64Or(top, $.uint($.uint64Shr(($.uint($.uint64Shr(top, 16n), 64)), 16n), 64)), 64)
			return (i * 64) + bits.Len(top)
		}
	}
	return 0
}

export function nat_trailingZeroBits(x: nat): number {
	if ($.sliceLen((x as nat)) == 0) {
		return 0
	}
	let i: number = 0
	for (let __goscriptSliceWindow5 = $.sliceRange(x); ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] as __goscript_arith.Word) == 0; ) {
		i++
	}
	// x[i] != 0
	return $.uint($.uint64Add(($.uint($.uint64Mul(i, 64n), 64)), $.uint(bits.TrailingZeros($.uint($.arrayIndex(x!, i), 64)), 64)), 64)
}

export function nat_isPow2(x: nat): [number, boolean] {
	let i: number = 0
	for (let __goscriptSliceWindow6 = $.sliceRange(x); ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] as __goscript_arith.Word) == 0; ) {
		i++
	}
	if ((i == ($.uint($.uint64Sub($.uint($.sliceLen((x as nat)), 64), 1n), 64))) && (($.uint($.uint64And($.arrayIndex(x!, i), ($.uint($.uint64Sub($.arrayIndex(x!, i), 1n), 64))), 64)) == 0)) {
		return [$.uint($.uint64Add(($.uint($.uint64Mul(i, 64n), 64)), $.uint(bits.TrailingZeros($.uint($.arrayIndex(x!, i), 64)), 64)), 64), true]
	}
	return [0, false]
}

export function same(x: nat, y: nat): boolean {
	return (($.sliceLen((x as nat)) == $.sliceLen((y as nat))) && ($.sliceLen((x as nat)) > 0)) && ($.indexAddress(x!, 0) == $.indexAddress(y!, 0))
}

export function nat_lsh(z: nat, x: nat, s: number): nat {
	if (s == 0) {
		if (same((z as nat), (x as nat))) {
			return (z as nat)
		}
		if (!alias((z as nat), (x as nat))) {
			return (nat__set(z, (x as nat)) as nat)
		}
	}

	let m = $.sliceLen((x as nat))
	if (m == 0) {
		return ($.goSlice(z, undefined, 0) as nat)
	}
	// m > 0

	let n = m + $.int($.uint($.uint64Div(s, 64n), 64))
	z = (nat_make(z, n + 1) as nat)
	{
		s = $.uint($.uint64Mod(s, 64), 64)
		if (s == 0) {
			$.copy(($.goSlice(z, n - m, n) as nat), (x as nat))
			$.sliceElems(z!)[$.sliceSlot(z!, n)] = 0
		} else {
			$.sliceElems(z!)[$.sliceSlot(z!, n)] = __goscript_arith_decl_pure.lshVU($.goSlice(z, n - m, n), x, s)
		}
	}
	$.clear(($.goSlice(z, 0, n - m) as nat))

	return (nat_norm(z) as nat)
}

export function nat_rsh(z: nat, x: nat, s: number): nat {
	if (s == 0) {
		if (same((z as nat), (x as nat))) {
			return (z as nat)
		}
		if (!alias((z as nat), (x as nat))) {
			return (nat__set(z, (x as nat)) as nat)
		}
	}

	let m = $.sliceLen((x as nat))
	let n = m - $.int($.uint($.uint64Div(s, 64n), 64))
	if (n <= 0) {
		return ($.goSlice(z, undefined, 0) as nat)
	}
	// n > 0

	z = (nat_make(z, n) as nat)
	{
		s = $.uint($.uint64Mod(s, 64), 64)
		if (s == 0) {
			$.copy((z as nat), ($.goSlice(x, m - n, undefined) as nat))
		} else {
			__goscript_arith_decl_pure.rshVU(z, $.goSlice(x, m - n, undefined), s)
		}
	}

	return (nat_norm(z) as nat)
}

export function nat_setBit(z: nat, x: nat, i: number, b: number): nat {
	let j = $.int($.uint($.uint64Div(i, 64n), 64))
	let m = $.uint($.uint64Shl(1n, ($.uint($.uint64Mod(i, 64n), 64))), 64)
	let n = $.sliceLen((x as nat))
	switch (b) {
		case 0:
		{
			z = (nat_make(z, n) as nat)
			$.copy((z as nat), (x as nat))
			if (j >= n) {
				// no need to grow
				return (z as nat)
			}
			$.sliceElems(z!)[$.sliceSlot(z!, j)] = $.uint($.uint64AndNot($.sliceElems(z!)[$.sliceSlot(z!, j)], m), 64)
			return (nat_norm(z) as nat)
			break
		}
		case 1:
		{
			if (j >= n) {
				z = (nat_make(z, j + 1) as nat)
				$.clear(($.goSlice(z, n, undefined) as nat))
			} else {
				z = (nat_make(z, n) as nat)
			}
			$.copy((z as nat), (x as nat))
			$.sliceElems(z!)[$.sliceSlot(z!, j)] = $.uint($.uint64Or($.sliceElems(z!)[$.sliceSlot(z!, j)], m), 64)
			// no need to normalize
			return (z as nat)
			break
		}
	}
	$.panic("set bit is not 0 or 1")
	throw new globalThis.Error("goscript: unreachable return")
}

export function nat_bit(x: nat, i: number): number {
	let j = $.uint($.uint64Div(i, 64n), 64)
	if (j >= $.uint($.sliceLen((x as nat)), 64)) {
		return 0
	}
	// 0 <= j < len(x)
	return $.uint($.uint($.uint64And(($.uint($.uint64Shr($.arrayIndex(x!, j), ($.uint($.uint64Mod(i, 64n), 64))), 64)), 1n), 64), 64)
}

export function nat_sticky(x: nat, i: number): number {
	let j = $.uint($.uint64Div(i, 64n), 64)
	if (j >= $.uint($.sliceLen((x as nat)), 64)) {
		if ($.sliceLen((x as nat)) == 0) {
			return 0
		}
		return 1
	}
	// 0 <= j < len(x)
	for (let __goscriptRangeTarget0 = $.goSlice(x, undefined, j), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let __goscriptRangeShadow0 = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_arith.Word)
		if (__goscriptRangeShadow0 != 0) {
			return 1
		}
	}
	if (($.uint($.uint64Shl($.arrayIndex(x!, j), ($.uint($.uint64Sub(64n, ($.uint($.uint64Mod(i, 64n), 64))), 64))), 64)) != 0) {
		return 1
	}
	return 0
}

export function nat_and(z: nat, x: nat, y: nat): nat {
	let m = $.sliceLen((x as nat))
	let n = $.sliceLen((y as nat))
	if (m > n) {
		m = n
	}
	// m <= n

	z = (nat_make(z, m) as nat)
	for (let __goscriptSliceWindow7 = $.sliceRange(z), __goscriptSliceWindow8 = $.sliceRange(x), __goscriptSliceWindow9 = $.sliceRange(y), i = 0; i < m; i++) {
		;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = $.uint($.uint64And(((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] as __goscript_arith.Word), ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] as __goscript_arith.Word)), 64)
	}

	return (nat_norm(z) as nat)
}

export function nat_trunc(z: nat, x: nat, n: number): nat {
	let w = $.uint($.uint64Div(($.uint($.uint64Sub(($.uint($.uint64Add(n, 64n), 64)), 1n), 64)), 64n), 64)
	if ($.uint($.sliceLen((x as nat)), 64) < w) {
		return (nat__set(z, (x as nat)) as nat)
	}
	z = (nat_make(z, $.int(w)) as nat)
	$.copy((z as nat), (x as nat))
	if (($.uint($.uint64Mod(n, 64n), 64)) != 0) {
		const __goscriptOperand0 = $.sliceLen((z as nat)) - 1
		$.sliceElems(z!)[$.sliceSlot(z!, __goscriptOperand0)] = $.uint($.uint64And($.sliceElems(z!)[$.sliceSlot(z!, __goscriptOperand0)], $.uint($.uint64Sub(($.uint($.uint64Shl(1n, ($.uint($.uint64Mod(n, 64n), 64))), 64)), 1n), 64)), 64)
	}
	return (nat_norm(z) as nat)
}

export function nat_andNot(z: nat, x: nat, y: nat): nat {
	let m = $.sliceLen((x as nat))
	let n = $.sliceLen((y as nat))
	if (n > m) {
		n = m
	}
	// m >= n

	z = (nat_make(z, m) as nat)
	for (let __goscriptSliceWindow10 = $.sliceRange(z), __goscriptSliceWindow11 = $.sliceRange(x), __goscriptSliceWindow12 = $.sliceRange(y), i = 0; i < n; i++) {
		;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] = $.uint($.uint64AndNot(((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, i)] as __goscript_arith.Word), ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, i)] as __goscript_arith.Word)), 64)
	}
	$.copy(($.goSlice(z, n, m) as nat), ($.goSlice(x, n, m) as nat))

	return (nat_norm(z) as nat)
}

export function nat_or(z: nat, x: nat, y: nat): nat {
	let m = $.sliceLen((x as nat))
	let n = $.sliceLen((y as nat))
	let s: nat = (x as nat)
	if (m < n) {
		let __goscriptAssign0_0: number = m
		let __goscriptAssign0_1: number = n
		n = __goscriptAssign0_0
		m = __goscriptAssign0_1
		s = (y as nat)
	}
	// m >= n

	z = (nat_make(z, m) as nat)
	for (let __goscriptSliceWindow13 = $.sliceRange(z), __goscriptSliceWindow14 = $.sliceRange(x), __goscriptSliceWindow15 = $.sliceRange(y), i = 0; i < n; i++) {
		;(__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, i)] = $.uint($.uint64Or(((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, i)] as __goscript_arith.Word), ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, i)] as __goscript_arith.Word)), 64)
	}
	$.copy(($.goSlice(z, n, m) as nat), ($.goSlice(s, n, m) as nat))

	return (nat_norm(z) as nat)
}

export function nat_xor(z: nat, x: nat, y: nat): nat {
	let m = $.sliceLen((x as nat))
	let n = $.sliceLen((y as nat))
	let s: nat = (x as nat)
	if (m < n) {
		let __goscriptAssign1_0: number = m
		let __goscriptAssign1_1: number = n
		n = __goscriptAssign1_0
		m = __goscriptAssign1_1
		s = (y as nat)
	}
	// m >= n

	z = (nat_make(z, m) as nat)
	for (let __goscriptSliceWindow16 = $.sliceRange(z), __goscriptSliceWindow17 = $.sliceRange(x), __goscriptSliceWindow18 = $.sliceRange(y), i = 0; i < n; i++) {
		;(__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, i)] = $.uint($.uint64Xor(((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, i)] as __goscript_arith.Word), ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, i)] as __goscript_arith.Word)), 64)
	}
	$.copy(($.goSlice(z, n, m) as nat), ($.goSlice(s, n, m) as nat))

	return (nat_norm(z) as nat)
}

export async function nat_random(z: nat, rand: rand2.Rand | $.VarRef<rand2.Rand> | null, limit: nat, n: number): globalThis.Promise<nat> {
	if (alias((z as nat), (limit as nat))) {
		z = (null as nat)
	}
	z = (nat_make(z, $.sliceLen((limit as nat))) as nat)

	let bitLengthOfMSW = $.uint(n % 64, 64)
	if (bitLengthOfMSW == 0) {
		bitLengthOfMSW = 64
	}
	let mask = $.uint($.uint($.uint64Sub(($.uint($.uint64Shl(1n, bitLengthOfMSW), 64)), 1n), 64), 64)

	for (let __goscriptSliceWindow19 = $.sliceRange(z); true; ) {
		switch ((64 as number)) {
			case 32:
			{
				for (let __goscriptRangeTarget1 = z, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
					;(__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] = $.uint(await (rand !== null && (rand as any).__isVarRef !== true && (rand as any).__goValue === undefined ? ((rand as any) as rand2.Rand).Uint32() : rand2.Rand.prototype.Uint32.call(rand)), 64)
				}
				break
			}
			case 64:
			{
				for (let __goscriptRangeTarget2 = z, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
					;(__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] = $.uint($.uint64Or($.uint(await (rand !== null && (rand as any).__isVarRef !== true && (rand as any).__goValue === undefined ? ((rand as any) as rand2.Rand).Uint32() : rand2.Rand.prototype.Uint32.call(rand)), 64), ($.uint($.uint64Mul($.uint(await (rand !== null && (rand as any).__isVarRef !== true && (rand as any).__goValue === undefined ? ((rand as any) as rand2.Rand).Uint32() : rand2.Rand.prototype.Uint32.call(rand)), 64), (2 ** 32)), 64))), 64)
				}
				break
			}
			default:
			{
				$.panic("unknown word size")
				break
			}
		}
		const __goscriptOperand1 = $.sliceLen((limit as nat)) - 1;
		;(__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, __goscriptOperand1)] = $.uint($.uint64And((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, __goscriptOperand1)], mask), 64)
		if (nat_cmp(z, (limit as nat)) < 0) {
			break
		}
	}

	return (nat_norm(z) as nat)
}

export async function nat_expNN(z: nat, stk: stack | $.VarRef<stack> | null, x: nat, y: nat, m: nat, slow: boolean): globalThis.Promise<nat> {
	using __defer = new $.DisposableStack()
	if (alias((z as nat), (x as nat)) || alias((z as nat), (y as nat))) {
		// We cannot allow in-place modification of x or y.
		z = (null as nat)
	}

	// x**y mod 1 == 0
	if (($.sliceLen((m as nat)) == 1) && ($.arrayIndex(m!, 0) == 1)) {
		return (nat_setWord(z, 0) as nat)
	}
	// m == 0 || m > 1

	// x**0 == 1
	if ($.sliceLen((y as nat)) == 0) {
		return (nat_setWord(z, 1) as nat)
	}
	// y > 0

	// 0**y = 0
	if ($.sliceLen((x as nat)) == 0) {
		return (nat_setWord(z, 0) as nat)
	}
	// x > 0

	// 1**y = 1
	if (($.sliceLen((x as nat)) == 1) && ($.arrayIndex(x!, 0) == 1)) {
		return (nat_setWord(z, 1) as nat)
	}
	// x > 1

	// x**1 == x
	if ((($.sliceLen((y as nat)) == 1) && ($.arrayIndex(y!, 0) == 1)) && ($.sliceLen((m as nat)) == 0)) {
		return (nat__set(z, (x as nat)) as nat)
	}
	if (stk == null) {
		stk = getStack()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
	}
	if (($.sliceLen((y as nat)) == 1) && ($.arrayIndex(y!, 0) == 1)) {
		return (await __goscript_natdiv.nat_rem(z, stk, (x as nat), (m as nat)) as nat)
	}

	// y > 1

	if ($.sliceLen((m as nat)) != 0) {
		// We likely end up being as long as the modulus.
		z = (nat_make(z, $.sliceLen((m as nat))) as nat)

		// If the exponent is large, we use the Montgomery method for odd values,
		// and a 4-bit, windowed exponentiation for powers of two,
		// and a CRT-decomposed Montgomery method for the remaining values
		// (even values times non-trivial odd values, which decompose into one
		// instance of each of the first two cases).
		if (($.sliceLen((y as nat)) > 1) && !slow) {
			if (($.uint($.uint64And($.arrayIndex(m!, 0), 1n), 64)) == 1) {
				return (await nat_expNNMontgomery(z, stk, (x as nat), (y as nat), (m as nat)) as nat)
			}
			{
				let [logM, ok] = nat_isPow2(m)
				if (ok) {
					return (await nat_expNNWindowed(z, stk, (x as nat), (y as nat), logM) as nat)
				}
			}
			return (await nat_expNNMontgomeryEven(z, stk, (x as nat), (y as nat), (m as nat)) as nat)
		}
	}

	z = (nat__set(z, (x as nat)) as nat)
	let v = $.arrayIndex(y!, $.sliceLen((y as nat)) - 1)
	let shift = $.uint($.uint64Add(__goscript_arith.nlz(v), 1n), 64)
	v = $.uint($.uint64Shl(v, shift), 64)
	let q: nat = null! as nat

	const mask: number = 9223372036854775808

	// We walk through the bits of the exponent one by one. Each time we
	// see a bit, we square, thus doubling the power. If the bit is a one,
	// we also multiply by x, thus adding one to the power.

	let w = 64 - $.int(shift)
	// zz and r are used to avoid allocating in mul and div as
	// otherwise the arguments would alias.
	let zz: nat = null! as nat
	let r: nat = null! as nat
	for (let j = 0; j < w; j++) {
		zz = (await __goscript_natmul.nat_sqr(zz, stk, (z as nat)) as nat)
		let __goscriptAssign2_0: nat = (z as nat)
		let __goscriptAssign2_1: nat = (zz as nat)
		zz = __goscriptAssign2_0
		z = __goscriptAssign2_1

		if (($.uint($.uint64And(v, 9223372036854775808n), 64)) != 0) {
			zz = (await __goscript_natmul.nat_mul(zz, stk, (z as nat), (x as nat)) as nat)
			let __goscriptAssign3_0: nat = (z as nat)
			let __goscriptAssign3_1: nat = (zz as nat)
			zz = __goscriptAssign3_0
			z = __goscriptAssign3_1
		}

		if ($.sliceLen((m as nat)) != 0) {
			let __goscriptTuple2: any = await __goscript_natdiv.nat_div(zz, stk, (r as nat), (z as nat), (m as nat))
			zz = (__goscriptTuple2[0] as nat)
			r = (__goscriptTuple2[1] as nat)
			let __goscriptAssign4_0: nat = (q as nat)
			let __goscriptAssign4_1: nat = (z as nat)
			let __goscriptAssign4_2: nat = (zz as nat)
			let __goscriptAssign4_3: nat = (r as nat)
			zz = __goscriptAssign4_0
			r = __goscriptAssign4_1
			q = __goscriptAssign4_2
			z = __goscriptAssign4_3
		}

		v = $.uint($.uint64Shl(v, 1), 64)
	}

	for (let __goscriptSliceWindow20 = $.sliceRange(y), i = $.sliceLen((y as nat)) - 2; i >= 0; i--) {
		v = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, i)] as __goscript_arith.Word)

		for (let j = 0; j < 64; j++) {
			zz = (await __goscript_natmul.nat_sqr(zz, stk, (z as nat)) as nat)
			let __goscriptAssign5_0: nat = (z as nat)
			let __goscriptAssign5_1: nat = (zz as nat)
			zz = __goscriptAssign5_0
			z = __goscriptAssign5_1

			if (($.uint($.uint64And(v, 9223372036854775808n), 64)) != 0) {
				zz = (await __goscript_natmul.nat_mul(zz, stk, (z as nat), (x as nat)) as nat)
				let __goscriptAssign6_0: nat = (z as nat)
				let __goscriptAssign6_1: nat = (zz as nat)
				zz = __goscriptAssign6_0
				z = __goscriptAssign6_1
			}

			if ($.sliceLen((m as nat)) != 0) {
				let __goscriptTuple3: any = await __goscript_natdiv.nat_div(zz, stk, (r as nat), (z as nat), (m as nat))
				zz = (__goscriptTuple3[0] as nat)
				r = (__goscriptTuple3[1] as nat)
				let __goscriptAssign7_0: nat = (q as nat)
				let __goscriptAssign7_1: nat = (z as nat)
				let __goscriptAssign7_2: nat = (zz as nat)
				let __goscriptAssign7_3: nat = (r as nat)
				zz = __goscriptAssign7_0
				r = __goscriptAssign7_1
				q = __goscriptAssign7_2
				z = __goscriptAssign7_3
			}

			v = $.uint($.uint64Shl(v, 1), 64)
		}
	}

	return (nat_norm(z) as nat)
}

export async function nat_expNNMontgomeryEven(z: nat, stk: stack | $.VarRef<stack> | null, x: nat, y: nat, m: nat): globalThis.Promise<nat> {
	// Split m = m₁ × m₂ where m₁ = 2ⁿ
	let n = nat_trailingZeroBits(m)
	let m1: nat = (nat_lsh((null as nat), (__goscript_get_natOne() as nat), n) as nat)
	let m2: nat = (nat_rsh((null as nat), (m as nat), n) as nat)

	// We want z = x**y mod m.
	// z₁ = x**y mod m1 = (x**y mod m) mod m1 = z mod m1
	// z₂ = x**y mod m2 = (x**y mod m) mod m2 = z mod m2
	// (We are using the math/big convention for names here,
	// where the computation is z = x**y mod m, so its parts are z1 and z2.
	// The paper is computing x = a**e mod n; it refers to these as x2 and z1.)
	let z1: nat = (await nat_expNN((null as nat), stk, (x as nat), (y as nat), (m1 as nat), false) as nat)
	let z2: nat = (await nat_expNN((null as nat), stk, (x as nat), (y as nat), (m2 as nat), false) as nat)

	// Reconstruct z from z₁, z₂ using CRT, using algorithm from paper,
	// which uses only a single modInverse (and an easy one at that).
	//	p = (z₁ - z₂) × m₂⁻¹ (mod m₁)
	//	z = z₂ + p × m₂
	// The final addition is in range because:
	//	z = z₂ + p × m₂
	//	  ≤ z₂ + (m₁-1) × m₂
	//	  < m₂ + (m₁-1) × m₂
	//	  = m₁ × m₂
	//	  = m.
	z = (nat__set(z, (z2 as nat)) as nat)

	// Compute (z₁ - z₂) mod m1 [m1 == 2**n] into z1.
	z1 = (nat_subMod2N(z1, (z1 as nat), (z2 as nat), n) as nat)

	// Reuse z2 for p = (z₁ - z₂) [in z1] * m2⁻¹ (mod m₁ [= 2ⁿ]).
	let m2inv: nat = (await __goscript_int.nat_modInverse((null as nat), (m2 as nat), (m1 as nat)) as nat)
	z2 = (await __goscript_natmul.nat_mul(z2, stk, (z1 as nat), (m2inv as nat)) as nat)
	z2 = (nat_trunc(z2, (z2 as nat), n) as nat)

	// Reuse z1 for p * m2.
	z = (nat_add(z, (z as nat), (await __goscript_natmul.nat_mul(z1, stk, (z2 as nat), (m2 as nat)) as nat)) as nat)

	return (z as nat)
}

export async function nat_expNNWindowed(z: nat, stk: stack | $.VarRef<stack> | null, x: nat, y: nat, logM: number): globalThis.Promise<nat> {
	using __defer = new $.DisposableStack()
	if ($.sliceLen((y as nat)) <= 1) {
		$.panic("big: misuse of expNNWindowed")
	}
	if (($.uint($.uint64And($.arrayIndex(x!, 0), 1n), 64)) == 0) {
		// len(y) > 1, so y  > logM.
		// x is even, so x**y is a multiple of 2**y which is a multiple of 2**logM.
		return (nat_setWord(z, 0) as nat)
	}
	if (logM == 1) {
		return (nat_setWord(z, 1) as nat)
	}

	// zz is used to avoid allocating in mul as otherwise
	// the arguments would alias.
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (n: number) => __receiver.restore(n))($.pointerValue<stack>(stk)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).restore-fm")
	const __goscriptDeferArg0 = (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as stack).save() : stack.prototype.save.call(stk))
	__defer.defer(() => { __goscriptDeferCallee2(__goscriptDeferArg0) })
	let w = $.int($.uint($.uint64Div(($.uint($.uint64Sub(($.uint($.uint64Add(logM, 64n), 64)), 1n), 64)), 64n), 64))
	let zz: nat = (await (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as stack).nat(w) : stack.prototype.nat.call(stk, w)) as nat)

	const n: number = 4
	// powers[i] contains x^i.
	let powers: nat[] = $.arrayValue(globalThis.Array.from({ length: 16 }, () => null))
	for (let __goscriptRangeTarget3 = powers, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		powers[i] = (await (stk !== null && (stk as any).__isVarRef !== true && (stk as any).__goValue === undefined ? ((stk as any) as stack).nat(w) : stack.prototype.nat.call(stk, w)) as nat)
	}
	powers[0] = (nat__set($.arrayIndex(powers, 0), (__goscript_get_natOne() as nat)) as nat)
	powers[1] = (nat_trunc($.arrayIndex(powers, 1), (x as nat), logM) as nat)
	for (let i = 2; i < 16; i = i + (2)) {
		let p2: $.VarRef<nat> | null = $.indexRef(powers, globalThis.Math.trunc(i / 2))
		let p: $.VarRef<nat> | null = $.indexRef(powers, i)
		let p1: $.VarRef<nat> | null = $.indexRef(powers, i + 1)
		p!.value = (await __goscript_natmul.nat_sqr($.pointerValue<nat>(p), stk, ($.pointerValue<nat>(p2) as nat)) as nat)
		p!.value = (nat_trunc($.pointerValue<nat>(p), ($.pointerValue<nat>(p) as nat), logM) as nat)
		p1!.value = (await __goscript_natmul.nat_mul($.pointerValue<nat>(p1), stk, ($.pointerValue<nat>(p) as nat), (x as nat)) as nat)
		p1!.value = (nat_trunc($.pointerValue<nat>(p1), ($.pointerValue<nat>(p1) as nat), logM) as nat)
	}

	// Because phi(2**logM) = 2**(logM-1), x**(2**(logM-1)) = 1,
	// so we can compute x**(y mod 2**(logM-1)) instead of x**y.
	// That is, we can throw away all but the bottom logM-1 bits of y.
	// Instead of allocating a new y, we start reading y at the right word
	// and truncate it appropriately at the start of the loop.
	let i = $.sliceLen((y as nat)) - 1
	let mtop = $.int($.uint($.uint64Div(($.uint($.uint64Sub(logM, 2n), 64)), 64n), 64))
	let mmask = $.uint("18446744073709551615", 64)
	{
		let mbits = $.uint($.uint64And(($.uint($.uint64Sub(logM, 1n), 64)), 63n), 64)
		if (mbits != 0) {
			mmask = $.uint($.uint64Sub(($.uint($.uint64Shl(1n, mbits), 64)), 1n), 64)
		}
	}
	if (i > mtop) {
		i = mtop
	}
	let advance = false
	z = (nat_setWord(z, 1) as nat)
	for (let __goscriptSliceWindow21 = $.sliceRange(y); i >= 0; i--) {
		let yi = ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, i)] as __goscript_arith.Word)
		if (i == mtop) {
			yi = $.uint($.uint64And(yi, mmask), 64)
		}
		for (let j = 0; j < 64; j = j + (4)) {
			if (advance) {
				// Account for use of 4 bits in previous iteration.
				// Unrolled loop for significant performance
				// gain. Use go test -bench=".*" in crypto/rsa
				// to check performance before making changes.
				zz = (await __goscript_natmul.nat_sqr(zz, stk, (z as nat)) as nat)
				let __goscriptAssign8_0: nat = (z as nat)
				let __goscriptAssign8_1: nat = (zz as nat)
				zz = __goscriptAssign8_0
				z = __goscriptAssign8_1
				z = (nat_trunc(z, (z as nat), logM) as nat)

				zz = (await __goscript_natmul.nat_sqr(zz, stk, (z as nat)) as nat)
				let __goscriptAssign9_0: nat = (z as nat)
				let __goscriptAssign9_1: nat = (zz as nat)
				zz = __goscriptAssign9_0
				z = __goscriptAssign9_1
				z = (nat_trunc(z, (z as nat), logM) as nat)

				zz = (await __goscript_natmul.nat_sqr(zz, stk, (z as nat)) as nat)
				let __goscriptAssign10_0: nat = (z as nat)
				let __goscriptAssign10_1: nat = (zz as nat)
				zz = __goscriptAssign10_0
				z = __goscriptAssign10_1
				z = (nat_trunc(z, (z as nat), logM) as nat)

				zz = (await __goscript_natmul.nat_sqr(zz, stk, (z as nat)) as nat)
				let __goscriptAssign11_0: nat = (z as nat)
				let __goscriptAssign11_1: nat = (zz as nat)
				zz = __goscriptAssign11_0
				z = __goscriptAssign11_1
				z = (nat_trunc(z, (z as nat), logM) as nat)
			}

			zz = (await __goscript_natmul.nat_mul(zz, stk, (z as nat), ($.arrayIndex(powers, $.uint($.uint64Shr(yi, 60n), 64)) as nat)) as nat)
			let __goscriptAssign12_0: nat = (z as nat)
			let __goscriptAssign12_1: nat = (zz as nat)
			zz = __goscriptAssign12_0
			z = __goscriptAssign12_1
			z = (nat_trunc(z, (z as nat), logM) as nat)

			yi = $.uint($.uint64Shl(yi, 4), 64)
			advance = true
		}
	}

	return (nat_norm(z) as nat)
}

export async function nat_expNNMontgomery(z: nat, stk: stack | $.VarRef<stack> | null, x: nat, y: nat, m: nat): globalThis.Promise<nat> {
	let numWords = $.sliceLen((m as nat))

	// We want the lengths of x and m to be equal.
	// It is OK if x >= m as long as len(x) == len(m).
	if ($.sliceLen((x as nat)) > numWords) {
		let __goscriptTuple4: any = await __goscript_natdiv.nat_div((null as nat), stk, (null as nat), (x as nat), (m as nat))
		x = (__goscriptTuple4[1] as nat)
	}
	if ($.sliceLen((x as nat)) < numWords) {
		let rr: nat = ($.makeSlice<__goscript_arith.Word>(numWords, undefined, "number") as nat)
		$.copy((rr as nat), (x as nat))
		x = (rr as nat)
	}

	// Ideally the precomputations would be performed outside, and reused
	// k0 = -m**-1 mod 2**_W. Algorithm from: Dumas, J.G. "On Newton–Raphson
	// Iteration for Multiplicative Inverses Modulo Prime Powers".
	let k0 = $.uint($.uint64Sub(2n, $.arrayIndex(m!, 0)), 64)
	let t = $.uint($.uint64Sub($.arrayIndex(m!, 0), 1n), 64)
	for (let i = 1; i < 64; i = i << (1)) {
		t = $.uint($.uint64Mul(t, t), 64)
		k0 = $.uint($.uint64Mul(k0, ($.uint($.uint64Add(t, 1n), 64))), 64)
	}
	k0 = -k0

	// RR = 2**(2*_W*len(m)) mod m
	let RR: nat = (nat_setWord((null as nat), 1) as nat)
	let zz: nat = (nat_lsh((null as nat), (RR as nat), $.uint((2 * numWords) * 64, 64)) as nat)
	let __goscriptTuple5: any = await __goscript_natdiv.nat_div((null as nat), stk, (RR as nat), (zz as nat), (m as nat))
	RR = (__goscriptTuple5[1] as nat)
	if ($.sliceLen((RR as nat)) < numWords) {
		zz = (nat_make(zz, numWords) as nat)
		$.copy((zz as nat), (RR as nat))
		RR = (zz as nat)
	}
	// one = 1, with equal length to that of m
	let one: nat = ($.makeSlice<__goscript_arith.Word>(numWords, undefined, "number") as nat)
	$.sliceElems(one!)[$.sliceSlot(one!, 0)] = 1

	const n: number = 4
	// powers[i] contains x^i
	let powers: nat[] = $.arrayValue(globalThis.Array.from({ length: 16 }, () => null))
	powers[0] = (nat_montgomery($.arrayIndex(powers, 0), (one as nat), (RR as nat), (m as nat), k0, numWords) as nat)
	powers[1] = (nat_montgomery($.arrayIndex(powers, 1), (x as nat), (RR as nat), (m as nat), k0, numWords) as nat)
	for (let i = 2; i < 16; i++) {
		powers[i] = (nat_montgomery($.arrayIndex(powers, i), ($.arrayIndex(powers, i - 1) as nat), ($.arrayIndex(powers, 1) as nat), (m as nat), k0, numWords) as nat)
	}

	// initialize z = 1 (Montgomery 1)
	z = (nat_make(z, numWords) as nat)
	$.copy((z as nat), ($.arrayIndex(powers, 0) as nat))

	zz = (nat_make(zz, numWords) as nat)

	// same windowed exponent, but with Montgomery multiplications
	for (let __goscriptSliceWindow22 = $.sliceRange(y), i = $.sliceLen((y as nat)) - 1; i >= 0; i--) {
		let yi = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, i)] as __goscript_arith.Word)
		for (let j = 0; j < 64; j = j + (4)) {
			if ((i != (__goscriptSliceWindow22.length - 1)) || (j != 0)) {
				zz = (nat_montgomery(zz, (z as nat), (z as nat), (m as nat), k0, numWords) as nat)
				z = (nat_montgomery(z, (zz as nat), (zz as nat), (m as nat), k0, numWords) as nat)
				zz = (nat_montgomery(zz, (z as nat), (z as nat), (m as nat), k0, numWords) as nat)
				z = (nat_montgomery(z, (zz as nat), (zz as nat), (m as nat), k0, numWords) as nat)
			}
			zz = (nat_montgomery(zz, (z as nat), ($.arrayIndex(powers, $.uint($.uint64Shr(yi, 60n), 64)) as nat), (m as nat), k0, numWords) as nat)
			let __goscriptAssign13_0: nat = (zz as nat)
			let __goscriptAssign13_1: nat = (z as nat)
			z = __goscriptAssign13_0
			zz = __goscriptAssign13_1
			yi = $.uint($.uint64Shl(yi, 4), 64)
		}
	}
	// convert to regular number
	zz = (nat_montgomery(zz, (z as nat), (one as nat), (m as nat), k0, numWords) as nat)

	// One last reduction, just in case.
	// See golang.org/issue/13907.
	if (nat_cmp(zz, (m as nat)) >= 0) {
		// Common case is m has high bit set; in that case,
		// since zz is the same length as m, there can be just
		// one multiple of m to remove. Just subtract.
		// We think that the subtract should be sufficient in general,
		// so do that unconditionally, but double-check,
		// in case our beliefs are wrong.
		// The div is not expected to be reached.
		zz = (nat_sub(zz, (zz as nat), (m as nat)) as nat)
		if (nat_cmp(zz, (m as nat)) >= 0) {
			let __goscriptTuple6: any = await __goscript_natdiv.nat_div((null as nat), stk, (null as nat), (zz as nat), (m as nat))
			zz = (__goscriptTuple6[1] as nat)
		}
	}

	return (nat_norm(zz) as nat)
}

export function nat_bytes(z: nat, buf: $.Slice<number>): number {
	let i: number = 0
	// This function is used in cryptographic operations. It must not leak
	// anything but the Int's sign and bit size through side-channels. Any
	// changes must be reviewed by a security expert.
	i = $.sliceLen(buf)
	for (let __goscriptRangeTarget4 = z, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow23 = $.sliceRange(buf), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let d = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_arith.Word)
		for (let j = 0; j < 8; j++) {
			i--
			if (i >= 0) {
				;(__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, i)] = $.uint(d, 8)
			} else {
				if ($.uint(d, 8) != 0) {
					$.panic("math/big: buffer too small to fit value")
				}
			}
			d = $.uint($.uint64Shr(d, 8), 64)
		}
	}

	if (i < 0) {
		i = 0
	}
	for (let __goscriptSliceWindow24 = $.sliceRange(buf); (i < __goscriptSliceWindow24.length) && (((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, i)] as number) == 0); ) {
		i++
	}

	return i
}

export function bigEndianWord(buf: $.Slice<number>): __goscript_arith.Word {
	if ((64 as number) == 64) {
		return $.uint(byteorder.BEUint64(buf), 64)
	}
	return $.uint(byteorder.BEUint32(buf), 64)
}

export function nat_setBytes(z: nat, buf: $.Slice<number>): nat {
	z = (nat_make(z, globalThis.Math.trunc((($.sliceLen(buf) + 8) - 1) / 8)) as nat)

	let i = $.sliceLen(buf)
	for (let __goscriptSliceWindow25 = $.sliceRange(z), k = 0; i >= 8; k++) {
		;(__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, k)] = bigEndianWord($.goSlice(buf, i - 8, i))
		i = i - (8)
	}
	if (i > 0) {
		let d: __goscript_arith.Word = 0
		for (let __goscriptSliceWindow26 = $.sliceRange(buf), s = 0; i > 0; s = $.uint($.uint64Add(s, 8), 64)) {
			d = $.uint($.uint64Or(d, $.uint($.uint64Shl($.uint(((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, i - 1)] as number), 64), s), 64)), 64)
			i--
		}
		$.sliceElems(z!)[$.sliceSlot(z!, $.sliceLen((z as nat)) - 1)] = d
	}

	return (nat_norm(z) as nat)
}

export async function nat_sqrt(z: nat, stk: stack | $.VarRef<stack> | null, x: nat): globalThis.Promise<nat> {
	using __defer = new $.DisposableStack()
	if (nat_cmp(x, (__goscript_get_natOne() as nat)) <= 0) {
		return (nat__set(z, (x as nat)) as nat)
	}
	if (alias((z as nat), (x as nat))) {
		z = (null as nat)
	}

	if (stk == null) {
		stk = getStack()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<stack>(stk)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "math/big.(*stack).free-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
	}

	// Start with value known to be too large and repeat "z = ⌊(z + ⌊x/z⌋)/2⌋" until it stops getting smaller.
	// See Brent and Zimmermann, Modern Computer Arithmetic, Algorithm 1.13 (SqrtInt).
	// https://members.loria.fr/PZimmermann/mca/pub226.html
	// If x is one less than a perfect square, the sequence oscillates between the correct z and z+1;
	// otherwise it converges to the correct z and stays there.
	let z1: nat = null! as nat
	let z2: nat = null! as nat
	z1 = (z as nat)
	z1 = (nat_setUint64(z1, 1n) as nat)
	z1 = (nat_lsh(z1, (z1 as nat), $.uint($.uint64Div($.uint(nat_bitLen(x) + 1, 64), 2n), 64)) as nat)
	for (let n = 0; ; n++) {
		let __goscriptTuple7: any = await __goscript_natdiv.nat_div(z2, stk, (null as nat), (x as nat), (z1 as nat))
		z2 = (__goscriptTuple7[0] as nat)
		z2 = (nat_add(z2, (z2 as nat), (z1 as nat)) as nat)
		z2 = (nat_rsh(z2, (z2 as nat), 1) as nat)
		if (nat_cmp(z2, (z1 as nat)) >= 0) {
			// z1 is answer.
			// Figure out whether z1 or z2 is currently aliased to z by looking at loop count.
			if ((n & 1) == 0) {
				return (z1 as nat)
			}
			return (nat__set(z, (z1 as nat)) as nat)
		}
		let __goscriptAssign14_0: nat = (z2 as nat)
		let __goscriptAssign14_1: nat = (z1 as nat)
		z1 = __goscriptAssign14_0
		z2 = __goscriptAssign14_1
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function nat_subMod2N(z: nat, x: nat, y: nat, n: number): nat {
	if ($.uint(nat_bitLen(x), 64) > n) {
		if (alias((z as nat), (x as nat))) {
			// ok to overwrite x in place
			x = (nat_trunc(x, (x as nat), n) as nat)
		} else {
			x = (nat_trunc((null as nat), (x as nat), n) as nat)
		}
	}
	if ($.uint(nat_bitLen(y), 64) > n) {
		if (alias((z as nat), (y as nat))) {
			// ok to overwrite y in place
			y = (nat_trunc(y, (y as nat), n) as nat)
		} else {
			y = (nat_trunc((null as nat), (y as nat), n) as nat)
		}
	}
	if (nat_cmp(x, (y as nat)) >= 0) {
		return (nat_sub(z, (x as nat), (y as nat)) as nat)
	}
	// x - y < 0; x - y mod 2ⁿ = x - y + 2ⁿ = 2ⁿ - (y - x) = 1 + 2ⁿ-1 - (y - x) = 1 + ^(y - x).
	z = (nat_sub(z, (y as nat), (x as nat)) as nat)
	while (($.uint($.uint64Mul($.uint($.sliceLen((z as nat)), 64), 64n), 64)) < n) {
		z = ($.appendOne((z as nat), 0) as nat)
	}
	for (let __goscriptRangeTarget5 = z, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
		;(__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] = $.uint($.uint64Xor(((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as __goscript_arith.Word), -1n), 64)
	}
	z = (nat_trunc(z, (z as nat), n) as nat)
	return (nat_add(z, (z as nat), (__goscript_get_natOne() as nat)) as nat)
}
