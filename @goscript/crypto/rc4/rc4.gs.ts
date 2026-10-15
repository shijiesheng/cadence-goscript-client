// Generated file based on rc4.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as alias from "@goscript/crypto/internal/fips140/alias/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/crypto/internal/fips140/alias/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/errors/index.js"
import "@goscript/strconv/index.js"

$.registerTypePackagePath("crypto/rc4", ["rc4.Cipher", "rc4.KeySizeError"])

export type KeySizeError = number

$.registerNamedValueType(
	"rc4.KeySizeError",
	{Error: (receiver: any, ...args: any[]) => (KeySizeError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*rc4.KeySizeError",
	{Error: (receiver: any, ...args: any[]) => (KeySizeError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Cipher {
	public get s(): number[] {
		return this._fields.s
	}

	public set s(value: number[]) {
		this._fields.s = value
	}

	public get i(): number {
		return this._fields.i
	}

	public set i(value: number) {
		this._fields.i = value
	}

	public get j(): number {
		return this._fields.j
	}

	public set j(value: number) {
		this._fields.j = value
	}

	public _fields: {
		s: number[]
		i: number
		j: number
	}

	constructor(init?: Partial<{s?: number[], i?: number, j?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s !== undefined ? $.cloneArrayValue(init.s, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 256)) : $.arrayValue(globalThis.Array.from({ length: 256 }, () => 0)),
			i: init?.i ?? (0 as number),
			j: init?.j ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Cipher {
		return new Cipher(this, true)
	}

	public __goscriptAssign(source: Cipher): void {
		const target = this._fields
		const values = source._fields
		target.s = $.assignFieldValue(target.s, values.s, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 256))
		target.i = values.i
		target.j = values.j
	}

	public Reset(): void {
		let c: Cipher | $.VarRef<Cipher> | null = this;
		const c$: Cipher = c == null ? $.pointerTarget<Cipher>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cipher>(c)
		$.clear($.goSlice((c$ as Cipher).s, undefined, undefined))
		let __goscriptAssign0_0: number = 0
		let __goscriptAssign0_1: number = 0;
		;(c$ as Cipher).i = __goscriptAssign0_0;
		;(c$ as Cipher).j = __goscriptAssign0_1
	}

	public XORKeyStream(dst: $.Slice<number>, src: $.Slice<number>): void {
		let c: Cipher | $.VarRef<Cipher> | null = this;
		const c$: Cipher = c == null ? $.pointerTarget<Cipher>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cipher>(c)
		if ($.sliceLen(src) == 0) {
			return
		}
		if (alias.InexactOverlap($.goSlice(dst, undefined, $.sliceLen(src)), src)) {
			$.panic("crypto/rc4: invalid buffer overlap")
		}
		let i = (c$ as Cipher).i
		let j = (c$ as Cipher).j
		$.arrayIndex(dst!, $.sliceLen(src) - 1)
		dst = $.goSlice(dst, undefined, $.sliceLen(src))
		for (let __goscriptRangeTarget0 = src, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(dst), k = 0; k < __goscriptRangeWindow0.length; k++) {
			let v = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + k] as number), 8)
			i = $.uint(i + (1), 8)
			let x = $.arrayIndex((c$ as Cipher).s, i)
			j = $.uint(j + ($.uint(x, 8)), 8)
			let y = $.arrayIndex((c$ as Cipher).s, j)
			let __goscriptAssign1_0: number = y
			let __goscriptAssign1_1: number = x;
			;(c$ as Cipher).s[i] = __goscriptAssign1_0;
			;(c$ as Cipher).s[j] = __goscriptAssign1_1;
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, k)] = $.uint(v ^ $.uint($.arrayIndex((c$ as Cipher).s, $.uint($.uint(((x + y) >>> 0), 32), 8)), 8), 8)
		}
		let __goscriptAssign2_0: number = i
		let __goscriptAssign2_1: number = j;
		;(c$ as Cipher).i = __goscriptAssign2_0;
		;(c$ as Cipher).j = __goscriptAssign2_1
	}

	static __typeInfo = $.registerStructType(
		"rc4.Cipher",
		() => new Cipher(),
		() => [$.methodSignature("Reset", [], [], true), $.methodSignature("XORKeyStream", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		Cipher,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 256), [0], 0, false, { pkgPath: "crypto/rc4" }), /* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("uint8"), [1], 1024, false, { pkgPath: "crypto/rc4" }), /* @__PURE__ */ $.structField("j", /* @__PURE__ */ $.basicType("uint8"), [2], 1025, false, { pkgPath: "crypto/rc4" })]
	)
}

export function KeySizeError_Error(k: KeySizeError): string {
	return $.concatString("crypto/rc4: invalid key size ", strconv.Itoa($.int(k)))
}

export function NewCipher(key: $.Slice<number>): [Cipher | $.VarRef<Cipher> | null, $.GoError] {
	if (fips140only.Enforced()) {
		return [null, errors.New("crypto/rc4: use of RC4 is not allowed in FIPS 140-only mode")]
	}
	let k = $.sliceLen(key)
	if ((k < 1) || (k > 256)) {
		return [null, $.namedValueInterfaceValue<$.GoError>($.int(k), "rc4.KeySizeError", {"Error": KeySizeError_Error}, /* @__PURE__ */ $.basicType("int", "rc4.KeySizeError"))]
	}
	let c: $.VarRef<Cipher> = $.varRef(new Cipher(undefined, true))
	for (let i = 0; i < 256; i++) {
		c.value.s[i] = $.uint(i, 32)
	}
	let j: number = 0
	for (let __goscriptSliceWindow1 = $.sliceRange(key), i = 0; i < 256; i++) {
		j = $.uint(j + ($.uint((($.uint($.arrayIndex(c.value.s, i), 8) + ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i % k)] as number)) & 0xff), 8)), 8)
		let __goscriptAssign3_0: number = $.arrayIndex(c.value.s, j)
		let __goscriptAssign3_1: number = $.arrayIndex(c.value.s, i)
		c.value.s[i] = __goscriptAssign3_0
		c.value.s[j] = __goscriptAssign3_1
	}
	return [c, null]
}
