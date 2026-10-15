// Generated file based on parser_option.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_claims from "./claims.gs.ts"

import type * as __goscript_parser from "./parser.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"

import type * as __goscript_token from "./token.gs.ts"

import type * as __goscript_types from "./types.gs.ts"

import * as __goscript_validator from "./validator.gs.ts"
import "@goscript/time/index.js"
import "./claims.gs.ts"
import "./signing_method.gs.ts"
import "./validator.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.ParserOption"])

export type ParserOption = ((_p0: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null) => void) | null

export function WithValidMethods(methods: $.Slice<string>): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_parser.Parser>(p).validMethods = methods
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithJSONNumber(): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_parser.Parser>(p).useJSONNumber = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithoutClaimsValidation(): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_parser.Parser>(p).skipClaimsValidation = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithLeeway(leeway: time.Duration): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_validator.Validator>($.pointerValue<__goscript_parser.Parser>(p).validator).leeway = leeway
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithTimeFunc(f: (() => time.Time | globalThis.Promise<time.Time>) | null): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_validator.Validator>($.pointerValue<__goscript_parser.Parser>(p).validator).timeFunc = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithIssuedAt(): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_validator.Validator>($.pointerValue<__goscript_parser.Parser>(p).validator).verifyIat = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithExpirationRequired(): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_validator.Validator>($.pointerValue<__goscript_parser.Parser>(p).validator).requireExp = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithAudience(aud: string): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_validator.Validator>($.pointerValue<__goscript_parser.Parser>(p).validator).expectedAud = aud
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithIssuer(iss: string): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_validator.Validator>($.pointerValue<__goscript_parser.Parser>(p).validator).expectedIss = iss
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithSubject(sub: string): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_validator.Validator>($.pointerValue<__goscript_parser.Parser>(p).validator).expectedSub = sub
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithPaddingAllowed(): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_parser.Parser>(p).decodePaddingAllowed = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}

export function WithStrictDecoding(): ParserOption | null {
	return $.functionValue((p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null): void => {
		$.pointerValue<__goscript_parser.Parser>(p).decodeStrict = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("jwt.Parser")], results: [] } as $.FunctionTypeInfo))
}
