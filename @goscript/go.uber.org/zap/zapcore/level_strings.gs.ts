// Generated file based on level_strings.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as color2 from "@goscript/go.uber.org/zap/internal/color/index.js"

import * as __goscript_level from "./level.gs.ts"
import "@goscript/go.uber.org/zap/internal/color/index.js"
import "./level.gs.ts"

export var _levelToColor: globalThis.Map<__goscript_level.Level, color2.Color> | null

export function __goscript_init__levelToColor(): void {
	if (((_levelToColor) as any) === undefined) {
		_levelToColor = $.makeMap<__goscript_level.Level, color2.Color>([[-1, 35], [0, 34], [1, 33], [2, 31], [3, 31], [4, 31], [5, 31]])
	}
}

export function __goscript_get__levelToColor(): globalThis.Map<__goscript_level.Level, color2.Color> | null {
	if (((_levelToColor) as any) === undefined) {
		__goscript_init__levelToColor()
	}
	return _levelToColor
}

export function __goscript_set__levelToColor(__goscriptValue: globalThis.Map<__goscript_level.Level, color2.Color> | null): void {
	_levelToColor = __goscriptValue
}

export let _unknownLevelColor: color2.Color = 31

export function __goscript_set__unknownLevelColor(__goscriptValue: color2.Color): void {
	_unknownLevelColor = __goscriptValue
}

export var _levelToLowercaseColorString: globalThis.Map<__goscript_level.Level, string> | null

export function __goscript_init__levelToLowercaseColorString(): void {
	if (((_levelToLowercaseColorString) as any) === undefined) {
		_levelToLowercaseColorString = $.makeMap<__goscript_level.Level, string>()
	}
}

export function __goscript_get__levelToLowercaseColorString(): globalThis.Map<__goscript_level.Level, string> | null {
	if (((_levelToLowercaseColorString) as any) === undefined) {
		__goscript_init__levelToLowercaseColorString()
	}
	return _levelToLowercaseColorString
}

export function __goscript_set__levelToLowercaseColorString(__goscriptValue: globalThis.Map<__goscript_level.Level, string> | null): void {
	_levelToLowercaseColorString = __goscriptValue
}

export var _levelToCapitalColorString: globalThis.Map<__goscript_level.Level, string> | null

export function __goscript_init__levelToCapitalColorString(): void {
	if (((_levelToCapitalColorString) as any) === undefined) {
		_levelToCapitalColorString = $.makeMap<__goscript_level.Level, string>()
	}
}

export function __goscript_get__levelToCapitalColorString(): globalThis.Map<__goscript_level.Level, string> | null {
	if (((_levelToCapitalColorString) as any) === undefined) {
		__goscript_init__levelToCapitalColorString()
	}
	return _levelToCapitalColorString
}

export function __goscript_set__levelToCapitalColorString(__goscriptValue: globalThis.Map<__goscript_level.Level, string> | null): void {
	_levelToCapitalColorString = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	for (let [level, color] of __goscript_get__levelToColor()?.entries() ?? []) {
		$.mapSet(__goscript_get__levelToLowercaseColorString(), level, await color2.Color_Add(color, await __goscript_level.Level_String(level)))
		$.mapSet(__goscript_get__levelToCapitalColorString(), level, await color2.Color_Add(color, await __goscript_level.Level_CapitalString(level)))
	}
}

export { __goscriptInit0 }
