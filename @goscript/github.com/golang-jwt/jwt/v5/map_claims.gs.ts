// Generated file based on map_claims.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./types.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.MapClaims"])

export type MapClaims = globalThis.Map<string, any> | null

$.registerNamedType("jwt.MapClaims", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }));

$.registerNamedValueType(
	"jwt.MapClaims",
	{GetAudience: (receiver: any, ...args: any[]) => (MapClaims_GetAudience as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetExpirationTime: (receiver: any, ...args: any[]) => (MapClaims_GetExpirationTime as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetIssuedAt: (receiver: any, ...args: any[]) => (MapClaims_GetIssuedAt as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetIssuer: (receiver: any, ...args: any[]) => (MapClaims_GetIssuer as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetNotBefore: (receiver: any, ...args: any[]) => (MapClaims_GetNotBefore as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetSubject: (receiver: any, ...args: any[]) => (MapClaims_GetSubject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseClaimsString: (receiver: any, ...args: any[]) => (MapClaims_parseClaimsString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseNumericDate: (receiver: any, ...args: any[]) => (MapClaims_parseNumericDate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseString: (receiver: any, ...args: any[]) => (MapClaims_parseString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GetAudience", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("GetExpirationTime", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuedAt", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuer", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("GetNotBefore", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetSubject", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("parseClaimsString", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("parseNumericDate", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("parseString", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"])]
);

$.registerNamedValueType(
	"*jwt.MapClaims",
	{GetAudience: (receiver: any, ...args: any[]) => (MapClaims_GetAudience as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetExpirationTime: (receiver: any, ...args: any[]) => (MapClaims_GetExpirationTime as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetIssuedAt: (receiver: any, ...args: any[]) => (MapClaims_GetIssuedAt as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetIssuer: (receiver: any, ...args: any[]) => (MapClaims_GetIssuer as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetNotBefore: (receiver: any, ...args: any[]) => (MapClaims_GetNotBefore as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetSubject: (receiver: any, ...args: any[]) => (MapClaims_GetSubject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseClaimsString: (receiver: any, ...args: any[]) => (MapClaims_parseClaimsString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseNumericDate: (receiver: any, ...args: any[]) => (MapClaims_parseNumericDate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseString: (receiver: any, ...args: any[]) => (MapClaims_parseString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GetAudience", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("GetExpirationTime", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuedAt", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuer", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("GetNotBefore", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetSubject", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("parseClaimsString", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("parseNumericDate", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("parseString", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"])]
);

export async function MapClaims_GetExpirationTime(m: MapClaims): globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]> {
	return MapClaims_parseNumericDate(m, "exp")
}

export async function MapClaims_GetNotBefore(m: MapClaims): globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]> {
	return MapClaims_parseNumericDate(m, "nbf")
}

export async function MapClaims_GetIssuedAt(m: MapClaims): globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]> {
	return MapClaims_parseNumericDate(m, "iat")
}

export async function MapClaims_GetAudience(m: MapClaims): globalThis.Promise<[__goscript_types.ClaimStrings, $.GoError]> {
	const __goscriptReturn3 = await MapClaims_parseClaimsString(m, "aud")
	return [(__goscriptReturn3[0] as __goscript_types.ClaimStrings), __goscriptReturn3[1]]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function MapClaims_GetIssuer(m: MapClaims): globalThis.Promise<[string, $.GoError]> {
	return MapClaims_parseString(m, "iss")
}

export async function MapClaims_GetSubject(m: MapClaims): globalThis.Promise<[string, $.GoError]> {
	return MapClaims_parseString(m, "sub")
}

export async function MapClaims_parseNumericDate(m: MapClaims, key: string): globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]> {
	let [v, ok] = $.mapGet<string, any, any>(m, key, null)
	if (!ok) {
		return [null, null]
	}

	{
		const __goscriptTypeSwitchValue = v
		switch (true) {
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
				{
					let exp: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
					if (exp == 0) {
						return [null, null]
					}

					return [__goscript_types.newNumericDateFromSeconds(exp), null]
				}
				break
			case $.typeAssert<json.Number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "json.Number")).ok:
				{
					let exp: json.Number = $.typeAssert<json.Number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "json.Number")).value
					let [__goscriptShadow0, ] = json.Number_Float64(exp)

					return [__goscript_types.newNumericDateFromSeconds(__goscriptShadow0), null]
				}
				break
		}
	}

	return [null, __goscript_errors_go1_20.newError(await fmt.Sprintf("%s is invalid", key), __goscript_errors.ErrInvalidType, null)]
}

export async function MapClaims_parseClaimsString(m: MapClaims, key: string): globalThis.Promise<[__goscript_types.ClaimStrings, $.GoError]> {
	let cs: $.Slice<string> = null! as $.Slice<string>
	{
		const __goscriptTypeSwitchValue = $.mapGet<string, any, any>(m, key, null)[0]
		switch (true) {
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					let v: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
					cs = $.appendOne(cs, v)
				}
				break
			case $.typeAssert<$.Slice<string>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))).ok:
				{
					let v: $.Slice<string> = $.typeAssert<$.Slice<string>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))).value
					cs = v
				}
				break
			case $.typeAssert<$.Slice<any>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })).ok:
				{
					let v: $.Slice<any> = $.typeAssert<$.Slice<any>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })).value
					for (let __goscriptRangeTarget0 = v, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
						let a = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
						let [vs, ok] = $.typeAssertTuple<string>(a, /* @__PURE__ */ $.basicType("string"))
						if (!ok) {
							return [(null as __goscript_types.ClaimStrings), __goscript_errors_go1_20.newError(await fmt.Sprintf("%s is invalid", key), __goscript_errors.ErrInvalidType, null)]
						}
						cs = $.appendOne(cs, vs)
					}
				}
				break
		}
	}

	return [(cs as __goscript_types.ClaimStrings), null]
}

export async function MapClaims_parseString(m: MapClaims, key: string): globalThis.Promise<[string, $.GoError]> {
	let ok: boolean = false
	let raw: any = null! as any
	let iss: string = ""
	let __goscriptTuple0: any = $.mapGet<string, any, any>(m, key, null)
	raw = __goscriptTuple0[0]
	ok = __goscriptTuple0[1]
	if (!ok) {
		return ["", null]
	}

	let __goscriptTuple1: any = $.typeAssertTuple<string>(raw, /* @__PURE__ */ $.basicType("string"))
	iss = __goscriptTuple1[0]
	ok = __goscriptTuple1[1]
	if (!ok) {
		return ["", __goscript_errors_go1_20.newError(await fmt.Sprintf("%s is invalid", key), __goscript_errors.ErrInvalidType, null)]
	}

	return [iss, null]
}
