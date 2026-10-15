// Generated file based on check.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as hmac from "@goscript/crypto/internal/fips140/hmac/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as godebug from "@goscript/crypto/internal/fips140deps/godebug/index.js"

import * as io from "@goscript/io/index.js"

import * as unsafe from "@goscript/unsafe/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/hmac/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/crypto/internal/fips140deps/godebug/index.js"
import "@goscript/io/index.js"
import "@goscript/unsafe/index.js"

export const fipsMagic: string = " Go fipsinfo \xff\x00"

export let Verified: boolean = false

export function __goscript_set_Verified(__goscriptValue: boolean): void {
	Verified = __goscriptValue
}

export let Linkinfo: {"Magic": Uint8Array, "Sum": Uint8Array, "Self": number, "Sects": {"Start": any, "End": any}[]} = $.anonymousStructValue({"Magic": $.arrayValue(new Uint8Array(16)), "Sum": $.arrayValue(new Uint8Array(32)), "Self": 0, "Sects": $.arrayValue(globalThis.Array.from({ length: 4 }, () => $.anonymousStructValue({"Start": null, "End": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("unknown"), [0], 0, true), /* @__PURE__ */ $.structField("End", /* @__PURE__ */ $.basicType("unknown"), [1], 8, true)] })), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("unknown"), [0], 0, true), /* @__PURE__ */ $.structField("End", /* @__PURE__ */ $.basicType("unknown"), [1], 8, true)] }, 4))}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Magic", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [0], 0, true), /* @__PURE__ */ $.structField("Sum", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [1], 16, true), /* @__PURE__ */ $.structField("Self", /* @__PURE__ */ $.basicType("uintptr"), [2], 48, true), /* @__PURE__ */ $.structField("Sects", /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("unknown"), [0], 0, true), /* @__PURE__ */ $.structField("End", /* @__PURE__ */ $.basicType("unknown"), [1], 8, true)] }, 4), [3], 56, true)] })

export function __goscript_set_Linkinfo(__goscriptValue: {"Magic": Uint8Array, "Sum": Uint8Array, "Self": number, "Sects": {"Start": any, "End": any}[]}): void {
	$.assignStruct(Linkinfo, __goscriptValue)
}

export let zeroSum: Uint8Array = $.arrayValue(new Uint8Array(32))

export function __goscript_set_zeroSum(__goscriptValue: Uint8Array): void {
	zeroSum = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	if (!fips140.Enabled) {
		return
	}

	{
		let err = fips140.Supported()
		if (err != null) {
			$.panic($.concatString("fips140: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
	}

	if ((($.arrayIndex(Linkinfo.Magic, 0) != 0xff) || (!$.stringEqual($.bytesToString($.goSlice(Linkinfo.Magic, 1, undefined)), " Go fipsinfo \xff\x00"))) || ($.arrayEqual(Linkinfo.Sum, zeroSum))) {
		$.panic("fips140: no verification checksum found")
	}

	let h: hmac.HMAC | $.VarRef<hmac.HMAC> | null = await hmac.New(__goscriptStatic0(), sha256.New, $.makeSlice<number>(32, undefined, "byte"))
	let w = $.interfaceValue<io.Writer | null>(h, "*hmac.HMAC", /* @__PURE__ */ $.pointerType("hmac.HMAC"))

	/*
			// Uncomment for debugging.
			// Commented (as opposed to a const bool flag)
			// to avoid import "os" in default builds.
			f, err := os.Create("fipscheck.o")
			if err != nil {
				panic(err)
			}
			w = io.MultiWriter(h, f)
		*/

	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(new Uint8Array([103, 111, 32, 102, 105, 112, 115, 32, 111, 98, 106, 101, 99, 116, 32, 118, 49, 10]))

	let nbuf: Uint8Array = $.arrayValue(new Uint8Array(8))
	for (let __goscriptRangeTarget0 = Linkinfo.Sects, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let sect = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as {"Start": any, "End": any})))
		let n = $.uint($.uint($.uint64Sub((sect.End as any), (sect.Start as any)), 64), 64)
		byteorder.BEPutUint64($.goSlice(nbuf, undefined, undefined), $.uint64(n))
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(nbuf, undefined, undefined))
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write((unsafe.Slice!(sect.Start, n) as $.Slice<number>))
	}
	let sum: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum(null) : hmac.HMAC.prototype.Sum.call(h, null))

	if (!$.arrayEqual(($.sliceToArray<number>(sum, 32, "byte") as Uint8Array), Linkinfo.Sum)) {
		$.panic("fips140: verification mismatch")
	}

	// "The temporary value(s) generated during the integrity test of the
	// module’s software or firmware shall [05.10] be zeroised from the module
	// upon completion of the integrity test"
	$.clear(sum)
	$.clear($.goSlice(nbuf, undefined, undefined))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Reset() : hmac.HMAC.prototype.Reset.call(h))

	if ($.stringEqual(godebug.Value("fips140"), "debug")) {
		await $.println("fips140: verified code+data")
	}

	Verified = true
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: /* @__PURE__ */ $.pointerType("sha256.Digest"), zero: () => null, methods: {AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), BlockSize: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BlockSize(...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clone(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sum(...$.stripGenericTypeArgs(args)), UnmarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalBinary(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Write(...$.stripGenericTypeArgs(args)), checkSum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).checkSum(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any

await __goscriptInit0()
