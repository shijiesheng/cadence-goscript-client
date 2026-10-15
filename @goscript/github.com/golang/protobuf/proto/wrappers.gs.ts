// Generated file based on wrappers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

export function Bool(__goscriptParam0: boolean): $.VarRef<boolean> | null {
	let v: $.VarRef<boolean> = $.varRef(__goscriptParam0)
	return v
}

export function Int(v: number): $.VarRef<number> | null {
	return Int32($.int(v, 32))
}

export function Int32(__goscriptParam1: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam1)
	return v
}

export function Int64(__goscriptParam2: bigint): $.VarRef<bigint> | null {
	let v: $.VarRef<bigint> = $.varRef(__goscriptParam2)
	return v
}

export function Uint32(__goscriptParam3: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam3)
	return v
}

export function Uint64(__goscriptParam4: bigint): $.VarRef<bigint> | null {
	let v: $.VarRef<bigint> = $.varRef(__goscriptParam4)
	return v
}

export function Float32(__goscriptParam5: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam5)
	return v
}

export function Float64(__goscriptParam6: number): $.VarRef<number> | null {
	let v: $.VarRef<number> = $.varRef(__goscriptParam6)
	return v
}

export function String(__goscriptParam7: string): $.VarRef<string> | null {
	let v: $.VarRef<string> = $.varRef(__goscriptParam7)
	return v
}
