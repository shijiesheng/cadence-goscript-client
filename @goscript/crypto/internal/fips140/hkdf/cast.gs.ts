// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import "@goscript/crypto/internal/fips140/check/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as errors from "@goscript/errors/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_hkdf from "./hkdf.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/errors/index.js"
import "./hkdf.gs.ts"

async function __goscriptInit0(): globalThis.Promise<void> {
	await fips140.CAST("HKDF-SHA2-256", $.functionValue(async (): globalThis.Promise<$.GoError> => {
		let input: $.Slice<number> = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) as $.Slice<number>
		let want: $.Slice<number> = new Uint8Array([182, 83, 0, 91, 81, 109, 43, 201, 74, 228, 249, 81, 115, 31, 113, 33, 166, 193, 222, 66, 79, 44, 153, 96, 100, 219, 102, 62, 236, 166, 55, 255]) as $.Slice<number>
		let got: $.Slice<number> = await __goscript_hkdf.Key(__goscriptStatic0(), sha256.New, input, input, $.bytesToString(input), $.sliceLen(want))
		if (!bytes.Equal(got, want)) {
			return errors.New("unexpected result")
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: /* @__PURE__ */ $.pointerType("sha256.Digest"), zero: () => null, methods: {AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), BlockSize: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BlockSize(...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clone(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sum(...$.stripGenericTypeArgs(args)), UnmarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalBinary(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Write(...$.stripGenericTypeArgs(args)), checkSum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).checkSum(...$.stripGenericTypeArgs(args))} }})
}

export { __goscriptInit0 }
