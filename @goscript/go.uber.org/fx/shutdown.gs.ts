// Generated file based on shutdown.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import type * as context from "@goscript/context/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"

import * as fxclock from "@goscript/go.uber.org/fx/internal/fxclock/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import * as lifecycle from "@goscript/go.uber.org/fx/internal/lifecycle/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as __goscript__module from "./module.gs.ts"

import * as __goscript_app from "./app.gs.ts"

import * as __goscript_app_wasm from "./app_wasm.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_lifecycle from "./lifecycle.gs.ts"

import type * as __goscript_log from "./log.gs.ts"

import * as __goscript_signal from "./signal.gs.ts"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "./module.gs.ts"
import "./app.gs.ts"
import "./app_wasm.gs.ts"
import "./decorate.gs.ts"
import "./lifecycle.gs.ts"
import "./signal.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.Shutdowner", "fx.ShutdownOption", "fx.exitCodeOption", "fx.shutdownTimeoutOption", "fx.shutdowner"])

export type Shutdowner = {
	Shutdown(_p0: $.Slice<ShutdownOption | null>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"fx.Shutdowner",
	null,
	[$.methodSignature("Shutdown", [/* @__PURE__ */ $.sliceType("fx.ShutdownOption")], ["error"])]
);

export type ShutdownOption = {
	apply(_p0: shutdowner | $.VarRef<shutdowner> | null): void
}

$.registerInterfaceType(
	"fx.ShutdownOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("fx.shutdowner")])]
);

export type exitCodeOption = number

$.registerNamedValueType(
	"fx.exitCodeOption",
	{apply: (receiver: any, ...args: any[]) => (exitCodeOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["s", /* @__PURE__ */ $.pointerType("fx.shutdowner")]])]
);

$.registerNamedValueType(
	"*fx.exitCodeOption",
	{apply: (receiver: any, ...args: any[]) => (exitCodeOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["s", /* @__PURE__ */ $.pointerType("fx.shutdowner")]])]
);

export type shutdownTimeoutOption = bigint

$.registerNamedValueType(
	"fx.shutdownTimeoutOption",
	{apply: (receiver: any, ...args: any[]) => (shutdownTimeoutOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("fx.shutdowner")])]
);

$.registerNamedValueType(
	"*fx.shutdownTimeoutOption",
	{apply: (receiver: any, ...args: any[]) => (shutdownTimeoutOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("fx.shutdowner")])]
);

export class shutdowner {
	public get app(): __goscript_app.App | $.VarRef<__goscript_app.App> | null {
		return this._fields.app
	}

	public set app(value: __goscript_app.App | $.VarRef<__goscript_app.App> | null) {
		this._fields.app = value
	}

	public get exitCode(): number {
		return this._fields.exitCode
	}

	public set exitCode(value: number) {
		this._fields.exitCode = value
	}

	public _fields: {
		app: __goscript_app.App | $.VarRef<__goscript_app.App> | null
		exitCode: number
	}

	constructor(init?: Partial<{app?: __goscript_app.App | $.VarRef<__goscript_app.App> | null, exitCode?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			app: init?.app ?? (null! as __goscript_app.App | $.VarRef<__goscript_app.App> | null),
			exitCode: init?.exitCode ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): shutdowner {
		return new shutdowner(this, true)
	}

	public __goscriptAssign(source: shutdowner): void {
		const target = this._fields
		const values = source._fields
		target.app = values.app
		target.exitCode = values.exitCode
	}

	public async Shutdown(opts: $.Slice<ShutdownOption | null>): globalThis.Promise<$.GoError> {
		const s: shutdowner | $.VarRef<shutdowner> | null = this;
		const s$: shutdowner = s == null ? $.pointerTarget<shutdowner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<shutdowner>(s)
		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ShutdownOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<ShutdownOption, null>) : $.pointerValue<Exclude<ShutdownOption, null>>(opt)).apply(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		return $.pointerValue<__goscript_app.App>((s$ as shutdowner).app).receivers.Broadcast(new __goscript_signal.ShutdownSignal({Signal: $.namedValueInterfaceValue<os.Signal | null>(6, "syscall.Signal", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), ExitCode: (s$ as shutdowner).exitCode}, true))
	}

	static __typeInfo = $.registerStructType(
		"fx.shutdowner",
		() => new shutdowner(),
		() => [$.methodSignature("Shutdown", [["opts", /* @__PURE__ */ $.sliceType("fx.ShutdownOption")]], ["error"], true)],
		shutdowner,
		() => [/* @__PURE__ */ $.structField("app", /* @__PURE__ */ $.pointerType("fx.App"), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("exitCode", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export function exitCodeOption_apply(code: exitCodeOption, s: shutdowner | $.VarRef<shutdowner> | null): void {
	$.pointerValue<shutdowner>(s).exitCode = $.int(code)
}

export function ExitCode(code: number): ShutdownOption | null {
	return $.namedValueInterfaceValue<ShutdownOption | null>($.int(code), "fx.exitCodeOption", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function shutdownTimeoutOption_apply(recv: shutdownTimeoutOption, _p0: shutdowner | $.VarRef<shutdowner> | null): void {
}

export function ShutdownTimeout(timeout: time.Duration): ShutdownOption | null {
	return $.namedValueInterfaceValue<ShutdownOption | null>($.int64(timeout), "fx.shutdownTimeoutOption", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({apply: (receiver: any, ...args: any[]) => (exitCodeOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "fx.exitCodeOption"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("apply", [["s", /* @__PURE__ */ $.pointerType("fx.shutdowner")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({apply: (receiver: any, ...args: any[]) => (shutdownTimeoutOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "fx.shutdownTimeoutOption"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("fx.shutdowner")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Signal: (receiver: any, ...args: any[]) => (syscall.Signal_Signal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (syscall.Signal_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int", "syscall.Signal"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Signal"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
