// Generated file based on nat_noasm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as __goscript_nat from "./nat.gs.ts"
import "@goscript/unsafe/index.js"
import "./nat.gs.ts"

export function addMulVVW1024(z: $.VarRef<number> | null, x: $.VarRef<number> | null, y: number): number {
	let c: number = 0
	return __goscript_nat.addMulVVW((unsafe.Slice!(z, 16) as $.Slice<number>), (unsafe.Slice!(x, 16) as $.Slice<number>), y)
}

export function addMulVVW1536(z: $.VarRef<number> | null, x: $.VarRef<number> | null, y: number): number {
	let c: number = 0
	return __goscript_nat.addMulVVW((unsafe.Slice!(z, 24) as $.Slice<number>), (unsafe.Slice!(x, 24) as $.Slice<number>), y)
}

export function addMulVVW2048(z: $.VarRef<number> | null, x: $.VarRef<number> | null, y: number): number {
	let c: number = 0
	return __goscript_nat.addMulVVW((unsafe.Slice!(z, 32) as $.Slice<number>), (unsafe.Slice!(x, 32) as $.Slice<number>), y)
}
