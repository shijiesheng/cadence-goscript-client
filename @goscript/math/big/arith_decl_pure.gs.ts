// Generated file based on arith_decl_pure.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_arith from "./arith.gs.ts"
import "./arith.gs.ts"

export function addVV(z: $.Slice<__goscript_arith.Word>, x: $.Slice<__goscript_arith.Word>, y: $.Slice<__goscript_arith.Word>): __goscript_arith.Word {
	let c: __goscript_arith.Word = 0
	return __goscript_arith.addVV_g(z, x, y)
}

export function subVV(z: $.Slice<__goscript_arith.Word>, x: $.Slice<__goscript_arith.Word>, y: $.Slice<__goscript_arith.Word>): __goscript_arith.Word {
	let c: __goscript_arith.Word = 0
	return __goscript_arith.subVV_g(z, x, y)
}

export function lshVU(z: $.Slice<__goscript_arith.Word>, x: $.Slice<__goscript_arith.Word>, s: number): __goscript_arith.Word {
	let c: __goscript_arith.Word = 0
	return __goscript_arith.lshVU_g(z, x, s)
}

export function rshVU(z: $.Slice<__goscript_arith.Word>, x: $.Slice<__goscript_arith.Word>, s: number): __goscript_arith.Word {
	let c: __goscript_arith.Word = 0
	return __goscript_arith.rshVU_g(z, x, s)
}

export function mulAddVWW(z: $.Slice<__goscript_arith.Word>, x: $.Slice<__goscript_arith.Word>, y: __goscript_arith.Word, r: __goscript_arith.Word): __goscript_arith.Word {
	let c: __goscript_arith.Word = 0
	return __goscript_arith.mulAddVWW_g(z, x, y, r)
}

export function addMulVVWW(z: $.Slice<__goscript_arith.Word>, x: $.Slice<__goscript_arith.Word>, y: $.Slice<__goscript_arith.Word>, m: __goscript_arith.Word, a: __goscript_arith.Word): __goscript_arith.Word {
	let c: __goscript_arith.Word = 0
	return __goscript_arith.addMulVVWW_g(z, x, y, m, a)
}
