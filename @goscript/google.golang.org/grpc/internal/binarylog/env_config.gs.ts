// Generated file based on env_config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as context from "@goscript/context/index.js"

import type * as grpc_binarylog_v1 from "@goscript/google.golang.org/grpc/binarylog/grpc_binarylog_v1/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_binarylog from "./binarylog.gs.ts"

import type * as __goscript_method_logger from "./method_logger.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./binarylog.gs.ts"

export const maxUInt: bigint = 18446744073709551615n

export const longMethodConfigRegexpStr: string = "^([\\w./]+)/((?:\\w+)|[*])(.+)?$"

export const optionalLengthRegexpStr: string = "(?::(\\d+))?"

export const headerConfigRegexpStr: string = "^{h(?::(\\d+))?}$"

export const messageConfigRegexpStr: string = "^{m(?::(\\d+))?}$"

export const headerMessageConfigRegexpStr: string = "^{h(?::(\\d+))?;m(?::(\\d+))?}$"

export async function NewLoggerFromConfigString(s: string): globalThis.Promise<__goscript_binarylog.Logger | null> {
	if ($.stringEqual(s, "")) {
		return null
	}
	let l: __goscript_binarylog.logger | $.VarRef<__goscript_binarylog.logger> | null = __goscript_binarylog.newEmptyLogger()
	let methods: $.Slice<string> = strings.Split(s, ",")
	for (let __goscriptRangeTarget0 = methods, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let method = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		{
			let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as __goscript_binarylog.logger).fillMethodLoggerWithConfigString(method) : __goscript_binarylog.logger.prototype.fillMethodLoggerWithConfigString.call(l, method))
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Warningf("failed to parse binary log config: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return null
			}
		}
	}
	return $.interfaceValue<__goscript_binarylog.Logger | null>(l, "*binarylog.logger", /* @__PURE__ */ $.pointerType("binarylog.logger"))
}

export let longMethodConfigRegexp: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^([\\w./]+)/((?:\\w+)|[*])(.+)?$")

export function __goscript_set_longMethodConfigRegexp(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	longMethodConfigRegexp = __goscriptValue
}

export let headerConfigRegexp: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^{h(?::(\\d+))?}$")

export function __goscript_set_headerConfigRegexp(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	headerConfigRegexp = __goscriptValue
}

export let messageConfigRegexp: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^{m(?::(\\d+))?}$")

export function __goscript_set_messageConfigRegexp(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	messageConfigRegexp = __goscriptValue
}

export let headerMessageConfigRegexp: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^{h(?::(\\d+))?;m(?::(\\d+))?}$")

export function __goscript_set_headerMessageConfigRegexp(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	headerMessageConfigRegexp = __goscriptValue
}

export async function parseMethodConfigAndSuffix(c: string): globalThis.Promise<[string, string, string, $.GoError]> {
	let service: string = ""
	let method: string = ""
	let suffix: string = ""
	// Regexp result:
	//
	// in:  "p.s/m{h:123,m:123}",
	// out: []string{"p.s/m{h:123,m:123}", "p.s", "m", "{h:123,m:123}"},
	let match: $.Slice<string> = await (longMethodConfigRegexp !== null && (longMethodConfigRegexp as any).__isVarRef !== true && (longMethodConfigRegexp as any).__goValue === undefined ? ((longMethodConfigRegexp as any) as regexp.Regexp).FindStringSubmatch(c) : regexp.Regexp.prototype.FindStringSubmatch.call(longMethodConfigRegexp, c))
	if (match == null) {
		return ["", "", "", fmt.Errorf("%q contains invalid substring", c)]
	}
	service = $.arrayIndex(match!, 1)
	method = $.arrayIndex(match!, 2)
	suffix = $.arrayIndex(match!, 3)
	return [service, method, suffix, null! as $.GoError]
}

export async function parseHeaderMessageLengthConfig(c: string): globalThis.Promise<[bigint, bigint, $.GoError]> {
	let hdrLenStr: bigint = 0n
	let msgLenStr: bigint = 0n
	let err: $.GoError = null! as $.GoError
	if ($.stringEqual(c, "")) {
		return [18446744073709551615n, 18446744073709551615n, null]
	}
	// Header config only.
	{
		let match: $.Slice<string> = await (headerConfigRegexp !== null && (headerConfigRegexp as any).__isVarRef !== true && (headerConfigRegexp as any).__goValue === undefined ? ((headerConfigRegexp as any) as regexp.Regexp).FindStringSubmatch(c) : regexp.Regexp.prototype.FindStringSubmatch.call(headerConfigRegexp, c))
		if (match != null) {
			{
				let s = $.arrayIndex(match!, 1)
				if (!$.stringEqual(s, "")) {
					let __goscriptTuple0: any = strconv.ParseUint(s, 10, 64)
					hdrLenStr = __goscriptTuple0[0]
					err = __goscriptTuple0[1]
					if (err != null) {
						return [0n, 0n, fmt.Errorf("failed to convert %q to uint", s)]
					}
					return [hdrLenStr, 0n, null]
				}
			}
			return [18446744073709551615n, 0n, null]
		}
	}

	// Message config only.
	{
		let match: $.Slice<string> = await (messageConfigRegexp !== null && (messageConfigRegexp as any).__isVarRef !== true && (messageConfigRegexp as any).__goValue === undefined ? ((messageConfigRegexp as any) as regexp.Regexp).FindStringSubmatch(c) : regexp.Regexp.prototype.FindStringSubmatch.call(messageConfigRegexp, c))
		if (match != null) {
			{
				let s = $.arrayIndex(match!, 1)
				if (!$.stringEqual(s, "")) {
					let __goscriptTuple1: any = strconv.ParseUint(s, 10, 64)
					msgLenStr = __goscriptTuple1[0]
					err = __goscriptTuple1[1]
					if (err != null) {
						return [0n, 0n, fmt.Errorf("failed to convert %q to uint", s)]
					}
					return [0n, msgLenStr, null]
				}
			}
			return [0n, 18446744073709551615n, null]
		}
	}

	// Header and message config both.
	{
		let match: $.Slice<string> = await (headerMessageConfigRegexp !== null && (headerMessageConfigRegexp as any).__isVarRef !== true && (headerMessageConfigRegexp as any).__goValue === undefined ? ((headerMessageConfigRegexp as any) as regexp.Regexp).FindStringSubmatch(c) : regexp.Regexp.prototype.FindStringSubmatch.call(headerMessageConfigRegexp, c))
		if (match != null) {
			// Both hdr and msg are specified, but one or two of them might be empty.
			hdrLenStr = 18446744073709551615n
			msgLenStr = 18446744073709551615n
			{
				let s = $.arrayIndex(match!, 1)
				if (!$.stringEqual(s, "")) {
					let __goscriptTuple2: any = strconv.ParseUint(s, 10, 64)
					hdrLenStr = __goscriptTuple2[0]
					err = __goscriptTuple2[1]
					if (err != null) {
						return [0n, 0n, fmt.Errorf("failed to convert %q to uint", s)]
					}
				}
			}
			{
				let s = $.arrayIndex(match!, 2)
				if (!$.stringEqual(s, "")) {
					let __goscriptTuple3: any = strconv.ParseUint(s, 10, 64)
					msgLenStr = __goscriptTuple3[0]
					err = __goscriptTuple3[1]
					if (err != null) {
						return [0n, 0n, fmt.Errorf("failed to convert %q to uint", s)]
					}
				}
			}
			return [hdrLenStr, msgLenStr, null]
		}
	}
	return [0n, 0n, fmt.Errorf("%q contains invalid substring", c)]
}

var __goscriptAwait: any
