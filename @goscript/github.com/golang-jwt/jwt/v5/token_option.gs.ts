// Generated file based on token_option.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_claims from "./claims.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"

import type * as __goscript_token from "./token.gs.ts"

import type * as __goscript_types from "./types.gs.ts"
import "@goscript/time/index.js"
import "./claims.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.TokenOption"])

export type TokenOption = ((_p0: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null) => void) | null
