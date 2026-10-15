// Generated file based on claims.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_types from "./types.gs.ts"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.Claims"])

export type Claims = {
	GetAudience(): [__goscript_types.ClaimStrings, $.GoError] | globalThis.Promise<[__goscript_types.ClaimStrings, $.GoError]>
	GetExpirationTime(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] | globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]>
	GetIssuedAt(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] | globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]>
	GetIssuer(): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
	GetNotBefore(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] | globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]>
	GetSubject(): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
}

$.registerInterfaceType(
	"jwt.Claims",
	null,
	[$.methodSignature("GetAudience", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("GetExpirationTime", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuedAt", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuer", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("GetNotBefore", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetSubject", [], [/* @__PURE__ */ $.basicType("string"), "error"])]
);
