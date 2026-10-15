// Generated file based on util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_uuid from "./uuid.gs.ts"
import "@goscript/io/index.js"
import "./uuid.gs.ts"

export async function randomBits(b: $.Slice<number>): globalThis.Promise<void> {
	{
		let [, err] = await io.ReadFull($.pointerValueOrNil(__goscript_uuid.rander)!, b)
		if (err != null) {
			$.panic((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
	}
}

export var xvalues: Uint8Array

export function __goscript_init_xvalues(): void {
	if (((xvalues) as any) === undefined) {
		xvalues = $.arrayValue(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 255, 255, 255, 255, 255, 255, 255, 10, 11, 12, 13, 14, 15, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 10, 11, 12, 13, 14, 15, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]))
	}
}

export function __goscript_get_xvalues(): Uint8Array {
	if (((xvalues) as any) === undefined) {
		__goscript_init_xvalues()
	}
	return xvalues
}

export function __goscript_set_xvalues(__goscriptValue: Uint8Array): void {
	xvalues = __goscriptValue
}

export function xtob(x: string): [number, boolean] {
	let b1 = $.arrayIndex(__goscript_get_xvalues(), $.indexString(x, 0))
	let b2 = $.arrayIndex(__goscript_get_xvalues(), $.indexString(x, 1))
	return [$.uint((((b1 << 4) & 0xff)) | b2, 8), (b1 != 255) && (b2 != 255)]
}

var __goscriptAwait: any
