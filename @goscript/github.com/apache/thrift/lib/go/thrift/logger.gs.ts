// Generated file based on logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as log from "@goscript/log/index.js"

import * as os from "@goscript/os/index.js"

import * as testing from "@goscript/testing/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/os/index.js"
import "@goscript/testing/index.js"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.Logger"])

export type Logger = ((msg: string) => void) | null

export function NopLogger(msg: string): void {
}

export async function StdLogger(logger: log.Logger | $.VarRef<log.Logger> | null): globalThis.Promise<Logger | null> {
	if (logger == null) {
		logger = await log.New($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), "", 3)
	}
	return $.functionValue(async (msg: string): globalThis.Promise<void> => {
		await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as log.Logger).Print($.arrayToSlice<any>([msg])) : log.Logger.prototype.Print.call(logger, $.arrayToSlice<any>([msg])))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))
}

export function TestLogger(tb: testing.TB | null): Logger | null {
	return $.functionValue(async (msg: string): globalThis.Promise<void> => {
		void (__goscriptAwait = (tb !== null && (tb as any).__isVarRef !== true && (tb as any).__goValue === undefined ? (tb as Exclude<testing.TB, null>) : $.pointerValue<Exclude<testing.TB, null>>(tb)).Errorf("logger called with msg: %q", msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))
}

export async function fallbackLogger(logger: ((msg: string) => void) | null): globalThis.Promise<Logger | null> {
	if (logger == null) {
		return StdLogger(null)
	}
	return logger
}

var __goscriptAwait: any
