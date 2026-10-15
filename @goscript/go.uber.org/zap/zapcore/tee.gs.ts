// Generated file based on tee.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import type * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_core from "./core.gs.ts"

import type * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_write_syncer from "./write_syncer.gs.ts"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/time/index.js"
import "./core.gs.ts"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./write_syncer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.multiCore"])

export type multiCore = $.Slice<__goscript_core.Core | null>

$.registerNamedType("zapcore.multiCore", /* @__PURE__ */ $.sliceType("zapcore.Core"));

$.registerNamedValueType(
	"zapcore.multiCore",
	{Check: (receiver: any, ...args: any[]) => (multiCore_Check as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (multiCore_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (multiCore_Level as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Sync: (receiver: any, ...args: any[]) => (multiCore_Sync as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), With: (receiver: any, ...args: any[]) => (multiCore_With as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (multiCore_Write as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Check", [["ent", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"]), $.methodSignature("Write", [["ent", "zapcore.Entry"], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["error"])]
);

$.registerNamedValueType(
	"*zapcore.multiCore",
	{Check: (receiver: any, ...args: any[]) => (multiCore_Check as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (multiCore_Enabled as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (multiCore_Level as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Sync: (receiver: any, ...args: any[]) => (multiCore_Sync as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), With: (receiver: any, ...args: any[]) => (multiCore_With as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (multiCore_Write as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Check", [["ent", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"]), $.methodSignature("Write", [["ent", "zapcore.Entry"], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["error"])]
);

export function NewTee(cores: $.Slice<__goscript_core.Core | null>): __goscript_core.Core | null {
	switch ($.sliceLen(cores)) {
		case 0:
		{
			return __goscript_core.NewNopCore()
			break
		}
		case 1:
		{
			return $.arrayIndex(cores!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<__goscript_core.Core | null>((cores as multiCore), "zapcore.multiCore", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function multiCore_With(mc: multiCore, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<__goscript_core.Core | null> {
	let clone: multiCore = ($.makeSlice<__goscript_core.Core | null>($.sliceLen((mc as multiCore))) as multiCore)
	for (let __goscriptRangeTarget0 = mc, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(clone), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as __goscript_core.Core | null)).With(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return $.namedValueInterfaceValue<__goscript_core.Core | null>(clone, "zapcore.multiCore", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function multiCore_Level(mc: multiCore): globalThis.Promise<__goscript_level.Level> {
	let minLvl = 5
	for (let __goscriptRangeTarget1 = mc, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		{
			let lvl = await __goscript_level.LevelOf((((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as __goscript_core.Core | null) as __goscript_level.LevelEnabler | null))
			if (lvl < minLvl) {
				minLvl = lvl
			}
		}
	}
	return minLvl
}

export async function multiCore_Enabled(mc: multiCore, lvl: __goscript_level.Level): globalThis.Promise<boolean> {
	for (let __goscriptRangeTarget2 = mc, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>(((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as __goscript_core.Core | null)).Enabled(lvl), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return true
		}
	}
	return false
}

export async function multiCore_Check(mc: multiCore, ent: __goscript_entry.Entry, ce: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): globalThis.Promise<__goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null> {
	for (let __goscriptRangeTarget3 = mc, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		ce = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>(((__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] as __goscript_core.Core | null)).Check((ent).clone(), ce), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null)
	}
	return ce
}

export async function multiCore_Write(mc: multiCore, ent: __goscript_entry.Entry, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget4 = mc, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		err = multierr.Append(err, (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>(((__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] as __goscript_core.Core | null)).Write((ent).clone(), fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return err
}

export async function multiCore_Sync(mc: multiCore): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget5 = mc, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
		err = multierr.Append(err, (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>(((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as __goscript_core.Core | null)).Sync(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return err
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Check: (receiver: any, ...args: any[]) => (multiCore_Check as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (multiCore_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (multiCore_Level as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Sync: (receiver: any, ...args: any[]) => (multiCore_Sync as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), With: (receiver: any, ...args: any[]) => (multiCore_With as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (multiCore_Write as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("zapcore.Core", "zapcore.multiCore"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Check", [["ent", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"]), $.methodSignature("Write", [["ent", "zapcore.Entry"], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["error"])])
}

var __goscriptAwait: any
