// Generated file based on increase_level.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import type * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_core from "./core.gs.ts"

import type * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_write_syncer from "./write_syncer.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./core.gs.ts"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./write_syncer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.levelFilterCore"])

export class levelFilterCore {
	public get core(): __goscript_core.Core | null {
		return this._fields.core
	}

	public set core(value: __goscript_core.Core | null) {
		this._fields.core = value
	}

	public get level(): __goscript_level.LevelEnabler | null {
		return this._fields.level
	}

	public set level(value: __goscript_level.LevelEnabler | null) {
		this._fields.level = value
	}

	public _fields: {
		core: __goscript_core.Core | null
		level: __goscript_level.LevelEnabler | null
	}

	constructor(init?: Partial<{core?: __goscript_core.Core | null, level?: __goscript_level.LevelEnabler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			core: init?.core ?? (null! as __goscript_core.Core | null),
			level: init?.level ?? (null! as __goscript_level.LevelEnabler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): levelFilterCore {
		return new levelFilterCore(this, true)
	}

	public __goscriptAssign(source: levelFilterCore): void {
		const target = this._fields
		const values = source._fields
		target.core = $.assignFieldValue(target.core, values.core, "zapcore.Core")
		target.level = $.assignFieldValue(target.level, values.level, "zapcore.LevelEnabler")
	}

	public async Check(ent: __goscript_entry.Entry, ce: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): globalThis.Promise<__goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null> {
		const c: levelFilterCore | $.VarRef<levelFilterCore> | null = this;
		if (!await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as levelFilterCore).Enabled(ent.Level) : levelFilterCore.prototype.Enabled.call(c, ent.Level))) {
			return ce
		}

		return $.pointerValue<Exclude<__goscript_core.Core, null>>($.pointerValue<levelFilterCore>(c).core).Check((ent).clone(), ce)
	}

	public async Enabled(lvl: __goscript_level.Level): globalThis.Promise<boolean> {
		const c: levelFilterCore | $.VarRef<levelFilterCore> | null = this;
		return $.pointerValue<Exclude<__goscript_level.LevelEnabler, null>>($.pointerValue<levelFilterCore>(c).level).Enabled(lvl)
	}

	public async Level(): globalThis.Promise<__goscript_level.Level> {
		const c: levelFilterCore | $.VarRef<levelFilterCore> | null = this;
		return __goscript_level.LevelOf($.pointerValue<levelFilterCore>(c).level)
	}

	public async Sync(): globalThis.Promise<$.GoError> {
		const c: levelFilterCore | $.VarRef<levelFilterCore> | null = this;
		return $.pointerValue<Exclude<__goscript_core.Core, null>>($.pointerValue<levelFilterCore>(c).core).Sync()
	}

	public async With(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<__goscript_core.Core | null> {
		const c: levelFilterCore | $.VarRef<levelFilterCore> | null = this;
		const c$: levelFilterCore = c == null ? $.pointerTarget<levelFilterCore>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<levelFilterCore>(c)
		return $.interfaceValue<__goscript_core.Core | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>((c$ as levelFilterCore).core).With(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new levelFilterCore({core: __goscriptLiteralField0, level: (c$ as levelFilterCore).level}) })()), "*zapcore.levelFilterCore", /* @__PURE__ */ $.pointerType("zapcore.levelFilterCore"))
	}

	public async Write(ent: __goscript_entry.Entry, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<$.GoError> {
		const c: levelFilterCore | $.VarRef<levelFilterCore> | null = this;
		return $.pointerValue<Exclude<__goscript_core.Core, null>>($.pointerValue<levelFilterCore>(c).core).Write((ent).clone(), fields)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.levelFilterCore",
		() => new levelFilterCore(),
		() => [$.methodSignature("Check", [["ent", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], true), $.methodSignature("Sync", [], ["error"], true), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"], true), $.methodSignature("Write", [["ent", "zapcore.Entry"], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["error"], true)],
		levelFilterCore,
		() => [/* @__PURE__ */ $.structField("core", "zapcore.Core", [0], 0, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("level", "zapcore.LevelEnabler", [1], 16, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export async function NewIncreaseLevelCore(core: __goscript_core.Core | null, level: __goscript_level.LevelEnabler | null): globalThis.Promise<[__goscript_core.Core | null, $.GoError]> {
	for (let l = 5; l >= -1; l = ((l - 1) << 24 >> 24)) {
		if (!(__goscriptAwait = (core !== null && (core as any).__isVarRef !== true && (core as any).__goValue === undefined ? (core as Exclude<__goscript_core.Core, null>) : $.pointerValue<Exclude<__goscript_core.Core, null>>(core)).Enabled(l), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = (level !== null && (level as any).__isVarRef !== true && (level as any).__goValue === undefined ? (level as Exclude<__goscript_level.LevelEnabler, null>) : $.pointerValue<Exclude<__goscript_level.LevelEnabler, null>>(level)).Enabled(l), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [null, fmt.Errorf("invalid increase level, as level %q is allowed by increased level, but not by existing core", $.namedValueInterfaceValue<any>(l, "zapcore.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
		}
	}

	return [$.interfaceValue<__goscript_core.Core | null>(new levelFilterCore({core: core, level: level}), "*zapcore.levelFilterCore", /* @__PURE__ */ $.pointerType("zapcore.levelFilterCore")), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({CapitalString: (receiver: any, ...args: any[]) => (__goscript_level.Level_CapitalString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (__goscript_level.Level_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (__goscript_level.Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_level.Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "zapcore.Level"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("CapitalString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
