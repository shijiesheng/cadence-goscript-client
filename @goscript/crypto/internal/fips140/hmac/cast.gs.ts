// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash from "@goscript/hash/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_hmac from "./hmac.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "./hmac.gs.ts"

async function __goscriptInit0(): globalThis.Promise<void> {
	await fips140.CAST("HMAC-SHA2-256", $.functionValue(async (): globalThis.Promise<$.GoError> => {
		let input: $.Slice<number> = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) as $.Slice<number>
		let want: $.Slice<number> = new Uint8Array([240, 141, 130, 141, 76, 158, 173, 61, 220, 18, 156, 78, 112, 196, 25, 42, 79, 18, 115, 35, 115, 119, 102, 5, 16, 238, 87, 107, 58, 199, 20, 65]) as $.Slice<number>
		let h: __goscript_hmac.HMAC | $.VarRef<__goscript_hmac.HMAC> | null = await __goscript_hmac.New(__goscriptStatic0(), sha256.New, input)
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_hmac.HMAC).Write(input) : __goscript_hmac.HMAC.prototype.Write.call(h, input))
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_hmac.HMAC).Write(input) : __goscript_hmac.HMAC.prototype.Write.call(h, input))
		{
			let got: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_hmac.HMAC).Sum(null) : __goscript_hmac.HMAC.prototype.Sum.call(h, null))
			if (!bytes.Equal(got, want)) {
				return errors.New("unexpected result")
			}
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: /* @__PURE__ */ $.pointerType("sha256.Digest"), zero: () => null, methods: {AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), BlockSize: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BlockSize(...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clone(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sum(...$.stripGenericTypeArgs(args)), UnmarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalBinary(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Write(...$.stripGenericTypeArgs(args)), checkSum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).checkSum(...$.stripGenericTypeArgs(args))} }})
}

export { __goscriptInit0 }
