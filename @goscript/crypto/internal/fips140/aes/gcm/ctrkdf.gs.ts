// Generated file based on ctrkdf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as aes from "@goscript/crypto/internal/fips140/aes/index.js"

import * as __goscript_cmac from "./cmac.gs.ts"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "./cmac.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/aes/gcm", ["gcm.CounterKDF"])

export class CounterKDF {
	public get mac(): __goscript_cmac.CMAC {
		return this._fields.mac
	}

	public set mac(value: __goscript_cmac.CMAC) {
		this._fields.mac = value
	}

	public _fields: {
		mac: __goscript_cmac.CMAC
	}

	constructor(init?: Partial<{mac?: __goscript_cmac.CMAC}>, __goscriptValue?: boolean) {
		this._fields = {
			mac: init?.mac ? init.mac.clone() : new __goscript_cmac.CMAC(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CounterKDF {
		return new CounterKDF(this, true)
	}

	public __goscriptAssign(source: CounterKDF): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mac, values.mac)
	}

	public DeriveKey(label: number, context: Uint8Array): Uint8Array {
		const kdf: CounterKDF | $.VarRef<CounterKDF> | null = this;
		const kdf$: CounterKDF = kdf == null ? $.pointerTarget<CounterKDF>(kdf) : (kdf as any).__isVarRef === true ? (kdf as any).value : (kdf as any).__goValue === undefined ? (kdf as any) : $.pointerTarget<CounterKDF>(kdf)
		fips140.RecordApproved()
		let output: Uint8Array = $.arrayValue(new Uint8Array(32))

		let input: Uint8Array = $.arrayValue(new Uint8Array(16))
		input[2] = label
		$.copy($.goSlice(input, 4, undefined), $.goSlice(context, undefined, undefined))

		input[1] = 0x01
		let K1 = (kdf$ as CounterKDF).mac.MAC($.goSlice(input, undefined, undefined))

		input[1] = 0x02
		let K2 = (kdf$ as CounterKDF).mac.MAC($.goSlice(input, undefined, undefined))

		$.copy($.goSlice(output, undefined, undefined), $.goSlice(K1, undefined, undefined))
		$.copy($.goSlice(output, aes.BlockSize, undefined), $.goSlice(K2, undefined, undefined))
		return $.cloneArrayValue(output, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	}

	static __typeInfo = $.registerStructType(
		"gcm.CounterKDF",
		() => new CounterKDF(),
		() => [$.methodSignature("DeriveKey", [["label", /* @__PURE__ */ $.basicType("uint8")], ["context", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12)]], [/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)], true)],
		CounterKDF,
		() => [/* @__PURE__ */ $.structField("mac", "gcm.CMAC", [0], 0, false, { pkgPath: "crypto/internal/fips140/aes/gcm" })]
	)
}

export function NewCounterKDF(b: aes.Block | $.VarRef<aes.Block> | null): CounterKDF | $.VarRef<CounterKDF> | null {
	return (() => { const __goscriptLiteralField0 = $.pointerValue<__goscript_cmac.CMAC>(__goscript_cmac.NewCMAC(b)); return new CounterKDF({mac: __goscriptLiteralField0}) })()
}
