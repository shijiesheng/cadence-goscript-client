// Generated file based on signal_unix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as __goscript_signal from "./signal.gs.ts"
import "@goscript/os/index.js"
import "@goscript/syscall/index.js"
import "./signal.gs.ts"

export const numSig: number = 65

export function signal_disable(_p0: number): void {
}

export function signal_enable(_p0: number): void {
}

export function signal_ignore(_p0: number): void {
}

export function signal_ignored(_p0: number): boolean {
	return false
}

export function signal_recv(): number {
	return 0
}

export async function loop(): globalThis.Promise<void> {
	while (true) {
		await __goscript_signal.process($.namedValueInterfaceValue<os.Signal | null>($.int(signal_recv()), "syscall.Signal", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
}

function __goscriptInit0(): void {
	__goscript_signal.__goscript_set_watchSignalLoop(loop)
}

export function signum(sig: os.Signal | null): number {
	{
		const __goscriptTypeSwitchValue = sig
		switch (true) {
			case $.typeAssert<syscall.Signal>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "syscall.Signal")).ok:
				{
					let sig: syscall.Signal = $.typeAssert<syscall.Signal>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "syscall.Signal")).value
					let i = $.int(sig)
					if ((i < 0) || (i >= 65)) {
						return -1
					}
					return i
				}
				break
			default:
				{
					let sig: any = __goscriptTypeSwitchValue
					return -1
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function enableSignal(sig: number): void {
	signal_enable($.uint(sig, 32))
}

export function disableSignal(sig: number): void {
	signal_disable($.uint(sig, 32))
}

export function ignoreSignal(sig: number): void {
	signal_ignore($.uint(sig, 32))
}

export function signalIgnored(sig: number): boolean {
	return signal_ignored($.uint(sig, 32))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Signal: (receiver: any, ...args: any[]) => (syscall.Signal_Signal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (syscall.Signal_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "syscall.Signal"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Signal"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

export { __goscriptInit0 }
