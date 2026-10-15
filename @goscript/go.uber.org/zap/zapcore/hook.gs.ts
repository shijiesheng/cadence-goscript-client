// Generated file based on hook.go
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

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.hooked"])

export class hooked {
	public get Core(): __goscript_core.Core | null {
		return this._fields.Core
	}

	public set Core(value: __goscript_core.Core | null) {
		this._fields.Core = value
	}

	public get funcs(): $.Slice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null> {
		return this._fields.funcs
	}

	public set funcs(value: $.Slice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null>) {
		this._fields.funcs = value
	}

	public _fields: {
		Core: __goscript_core.Core | null
		funcs: $.Slice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null>
	}

	constructor(init?: Partial<{Core?: __goscript_core.Core | null, funcs?: $.Slice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Core: init?.Core ?? (null! as __goscript_core.Core | null),
			funcs: init?.funcs ?? (null! as $.Slice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hooked {
		return new hooked(this, true)
	}

	public __goscriptAssign(source: hooked): void {
		const target = this._fields
		const values = source._fields
		target.Core = $.assignFieldValue(target.Core, values.Core, "zapcore.Core")
		target.funcs = values.funcs
	}

	public async Check(ent: __goscript_entry.Entry, ce: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): globalThis.Promise<__goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null> {
		const h: hooked | $.VarRef<hooked> | null = this;
		// Let the wrapped Core decide whether to log this message or not. This
		// also gives the downstream a chance to register itself directly with the
		// CheckedEntry.
		{
			let downstream: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>($.pointerValue<hooked>(h).Core).Check((ent).clone(), ce), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null)
			if (downstream != null) {
				return __goscript_entry.CheckedEntry.prototype.AddCore.call(downstream, ent, $.interfaceValue<__goscript_core.Core | null>(h, "*zapcore.hooked", /* @__PURE__ */ $.pointerType("zapcore.hooked")))
			}
		}
		return ce
	}

	public async Level(): globalThis.Promise<__goscript_level.Level> {
		const h: hooked | $.VarRef<hooked> | null = this;
		return __goscript_level.LevelOf(($.pointerValue<hooked>(h).Core as __goscript_level.LevelEnabler | null))
	}

	public async With(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<__goscript_core.Core | null> {
		const h: hooked | $.VarRef<hooked> | null = this;
		const h$: hooked = h == null ? $.pointerTarget<hooked>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<hooked>(h)
		return $.interfaceValue<__goscript_core.Core | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>((h$ as hooked).Core).With(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new hooked({Core: __goscriptLiteralField0, funcs: (h$ as hooked).funcs}) })()), "*zapcore.hooked", /* @__PURE__ */ $.pointerType("zapcore.hooked"))
	}

	public async Write(ent: __goscript_entry.Entry, _p1: $.Slice<__goscript_field.Field>): globalThis.Promise<$.GoError> {
		const h: hooked | $.VarRef<hooked> | null = this;
		const h$: hooked = h == null ? $.pointerTarget<hooked>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<hooked>(h)
		// Since our downstream had a chance to register itself directly with the
		// CheckedMessage, we don't need to call it here.
		let err: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget0 = (h$ as hooked).funcs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			err = multierr.Append(err, (__goscriptAwait = $.arrayIndex((h$ as hooked).funcs!, i)!((ent).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return err
	}

	public async Enabled(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Enabled(_p0)
	}

	public async Sync(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Sync()
	}

	static __typeInfo = $.registerStructType(
		"zapcore.hooked",
		() => new hooked(),
		() => [$.methodSignature("Check", [["ent", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], true), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"], true), $.methodSignature("Write", [["ent", "zapcore.Entry"], ["_", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["error"], true), $.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Sync", [], ["error"])],
		hooked,
		() => [/* @__PURE__ */ $.structField("Core", "zapcore.Core", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("funcs", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, params: ["zapcore.Entry"], results: ["error"] } as $.FunctionTypeInfo)), [1], 16, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export function RegisterHooks(core: __goscript_core.Core | null, hooks: $.Slice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null>): __goscript_core.Core | null {
	let funcs: $.Slice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null> = $.appendSlice($.arrayToSlice<((_p0: __goscript_entry.Entry) => $.GoError | globalThis.Promise<$.GoError>) | null>([]), hooks, $.appendZeros.nil)
	return $.interfaceValue<__goscript_core.Core | null>(new hooked({Core: core, funcs: funcs}), "*zapcore.hooked", /* @__PURE__ */ $.pointerType("zapcore.hooked"))
}

var __goscriptAwait: any
