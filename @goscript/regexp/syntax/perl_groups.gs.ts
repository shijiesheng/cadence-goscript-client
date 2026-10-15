// Generated file based on perl_groups.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_parse from "./parse.gs.ts"
import "./parse.gs.ts"

export let code1: $.Slice<number> = $.arrayToSlice<number>([0x30, 0x39])

export function __goscript_set_code1(__goscriptValue: $.Slice<number>): void {
	code1 = __goscriptValue
}

export let code2: $.Slice<number> = $.arrayToSlice<number>([0x9, 0xa, 0xc, 0xd, 0x20, 0x20])

export function __goscript_set_code2(__goscriptValue: $.Slice<number>): void {
	code2 = __goscriptValue
}

export let code3: $.Slice<number> = $.arrayToSlice<number>([0x30, 0x39, 0x41, 0x5a, 0x5f, 0x5f, 0x61, 0x7a])

export function __goscript_set_code3(__goscriptValue: $.Slice<number>): void {
	code3 = __goscriptValue
}

export var perlGroup: globalThis.Map<string, __goscript_parse.charGroup> | null

export function __goscript_init_perlGroup(): void {
	if (((perlGroup) as any) === undefined) {
		perlGroup = $.makeMap<string, __goscript_parse.charGroup>([["\\d", new __goscript_parse.charGroup({sign: 1, _class: code1}, true)], ["\\D", new __goscript_parse.charGroup({sign: -1, _class: code1}, true)], ["\\s", new __goscript_parse.charGroup({sign: 1, _class: code2}, true)], ["\\S", new __goscript_parse.charGroup({sign: -1, _class: code2}, true)], ["\\w", new __goscript_parse.charGroup({sign: 1, _class: code3}, true)], ["\\W", new __goscript_parse.charGroup({sign: -1, _class: code3}, true)]])
	}
}

export function __goscript_get_perlGroup(): globalThis.Map<string, __goscript_parse.charGroup> | null {
	if (((perlGroup) as any) === undefined) {
		__goscript_init_perlGroup()
	}
	return perlGroup
}

export function __goscript_set_perlGroup(__goscriptValue: globalThis.Map<string, __goscript_parse.charGroup> | null): void {
	perlGroup = __goscriptValue
}

export let code4: $.Slice<number> = $.arrayToSlice<number>([0x30, 0x39, 0x41, 0x5a, 0x61, 0x7a])

export function __goscript_set_code4(__goscriptValue: $.Slice<number>): void {
	code4 = __goscriptValue
}

export let code5: $.Slice<number> = $.arrayToSlice<number>([0x41, 0x5a, 0x61, 0x7a])

export function __goscript_set_code5(__goscriptValue: $.Slice<number>): void {
	code5 = __goscriptValue
}

export let code6: $.Slice<number> = $.arrayToSlice<number>([0x0, 0x7f])

export function __goscript_set_code6(__goscriptValue: $.Slice<number>): void {
	code6 = __goscriptValue
}

export let code7: $.Slice<number> = $.arrayToSlice<number>([0x9, 0x9, 0x20, 0x20])

export function __goscript_set_code7(__goscriptValue: $.Slice<number>): void {
	code7 = __goscriptValue
}

export let code8: $.Slice<number> = $.arrayToSlice<number>([0x0, 0x1f, 0x7f, 0x7f])

export function __goscript_set_code8(__goscriptValue: $.Slice<number>): void {
	code8 = __goscriptValue
}

export let code9: $.Slice<number> = $.arrayToSlice<number>([0x30, 0x39])

export function __goscript_set_code9(__goscriptValue: $.Slice<number>): void {
	code9 = __goscriptValue
}

export let code10: $.Slice<number> = $.arrayToSlice<number>([0x21, 0x7e])

export function __goscript_set_code10(__goscriptValue: $.Slice<number>): void {
	code10 = __goscriptValue
}

export let code11: $.Slice<number> = $.arrayToSlice<number>([0x61, 0x7a])

export function __goscript_set_code11(__goscriptValue: $.Slice<number>): void {
	code11 = __goscriptValue
}

export let code12: $.Slice<number> = $.arrayToSlice<number>([0x20, 0x7e])

export function __goscript_set_code12(__goscriptValue: $.Slice<number>): void {
	code12 = __goscriptValue
}

export let code13: $.Slice<number> = $.arrayToSlice<number>([0x21, 0x2f, 0x3a, 0x40, 0x5b, 0x60, 0x7b, 0x7e])

export function __goscript_set_code13(__goscriptValue: $.Slice<number>): void {
	code13 = __goscriptValue
}

export let code14: $.Slice<number> = $.arrayToSlice<number>([0x9, 0xd, 0x20, 0x20])

export function __goscript_set_code14(__goscriptValue: $.Slice<number>): void {
	code14 = __goscriptValue
}

export let code15: $.Slice<number> = $.arrayToSlice<number>([0x41, 0x5a])

export function __goscript_set_code15(__goscriptValue: $.Slice<number>): void {
	code15 = __goscriptValue
}

export let code16: $.Slice<number> = $.arrayToSlice<number>([0x30, 0x39, 0x41, 0x5a, 0x5f, 0x5f, 0x61, 0x7a])

export function __goscript_set_code16(__goscriptValue: $.Slice<number>): void {
	code16 = __goscriptValue
}

export let code17: $.Slice<number> = $.arrayToSlice<number>([0x30, 0x39, 0x41, 0x46, 0x61, 0x66])

export function __goscript_set_code17(__goscriptValue: $.Slice<number>): void {
	code17 = __goscriptValue
}

export var posixGroup: globalThis.Map<string, __goscript_parse.charGroup> | null

export function __goscript_init_posixGroup(): void {
	if (((posixGroup) as any) === undefined) {
		posixGroup = $.makeMap<string, __goscript_parse.charGroup>([["[:alnum:]", new __goscript_parse.charGroup({sign: 1, _class: code4}, true)], ["[:^alnum:]", new __goscript_parse.charGroup({sign: -1, _class: code4}, true)], ["[:alpha:]", new __goscript_parse.charGroup({sign: 1, _class: code5}, true)], ["[:^alpha:]", new __goscript_parse.charGroup({sign: -1, _class: code5}, true)], ["[:ascii:]", new __goscript_parse.charGroup({sign: 1, _class: code6}, true)], ["[:^ascii:]", new __goscript_parse.charGroup({sign: -1, _class: code6}, true)], ["[:blank:]", new __goscript_parse.charGroup({sign: 1, _class: code7}, true)], ["[:^blank:]", new __goscript_parse.charGroup({sign: -1, _class: code7}, true)], ["[:cntrl:]", new __goscript_parse.charGroup({sign: 1, _class: code8}, true)], ["[:^cntrl:]", new __goscript_parse.charGroup({sign: -1, _class: code8}, true)], ["[:digit:]", new __goscript_parse.charGroup({sign: 1, _class: code9}, true)], ["[:^digit:]", new __goscript_parse.charGroup({sign: -1, _class: code9}, true)], ["[:graph:]", new __goscript_parse.charGroup({sign: 1, _class: code10}, true)], ["[:^graph:]", new __goscript_parse.charGroup({sign: -1, _class: code10}, true)], ["[:lower:]", new __goscript_parse.charGroup({sign: 1, _class: code11}, true)], ["[:^lower:]", new __goscript_parse.charGroup({sign: -1, _class: code11}, true)], ["[:print:]", new __goscript_parse.charGroup({sign: 1, _class: code12}, true)], ["[:^print:]", new __goscript_parse.charGroup({sign: -1, _class: code12}, true)], ["[:punct:]", new __goscript_parse.charGroup({sign: 1, _class: code13}, true)], ["[:^punct:]", new __goscript_parse.charGroup({sign: -1, _class: code13}, true)], ["[:space:]", new __goscript_parse.charGroup({sign: 1, _class: code14}, true)], ["[:^space:]", new __goscript_parse.charGroup({sign: -1, _class: code14}, true)], ["[:upper:]", new __goscript_parse.charGroup({sign: 1, _class: code15}, true)], ["[:^upper:]", new __goscript_parse.charGroup({sign: -1, _class: code15}, true)], ["[:word:]", new __goscript_parse.charGroup({sign: 1, _class: code16}, true)], ["[:^word:]", new __goscript_parse.charGroup({sign: -1, _class: code16}, true)], ["[:xdigit:]", new __goscript_parse.charGroup({sign: 1, _class: code17}, true)], ["[:^xdigit:]", new __goscript_parse.charGroup({sign: -1, _class: code17}, true)]])
	}
}

export function __goscript_get_posixGroup(): globalThis.Map<string, __goscript_parse.charGroup> | null {
	if (((posixGroup) as any) === undefined) {
		__goscript_init_posixGroup()
	}
	return posixGroup
}

export function __goscript_set_posixGroup(__goscriptValue: globalThis.Map<string, __goscript_parse.charGroup> | null): void {
	posixGroup = __goscriptValue
}
