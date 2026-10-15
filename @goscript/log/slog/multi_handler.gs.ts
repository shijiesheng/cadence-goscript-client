// Generated file based on multi_handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_record from "./record.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/time/index.js"
import "./attr.gs.ts"
import "./handler.gs.ts"
import "./level.gs.ts"
import "./record.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.MultiHandler"])

export class MultiHandler {
	public get multi(): $.Slice<__goscript_handler.Handler | null> {
		return this._fields.multi
	}

	public set multi(value: $.Slice<__goscript_handler.Handler | null>) {
		this._fields.multi = value
	}

	public _fields: {
		multi: $.Slice<__goscript_handler.Handler | null>
	}

	constructor(init?: Partial<{multi?: $.Slice<__goscript_handler.Handler | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			multi: init?.multi ?? (null! as $.Slice<__goscript_handler.Handler | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MultiHandler {
		return new MultiHandler(this, true)
	}

	public __goscriptAssign(source: MultiHandler): void {
		const target = this._fields
		const values = source._fields
		target.multi = values.multi
	}

	public async Enabled(ctx: context.Context | null, l: __goscript_level.Level): globalThis.Promise<boolean> {
		const h: MultiHandler | $.VarRef<MultiHandler> | null = this;
		const h$: MultiHandler = h == null ? $.pointerTarget<MultiHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<MultiHandler>(h)
		for (let __goscriptRangeTarget0 = (h$ as MultiHandler).multi, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>($.arrayIndex((h$ as MultiHandler).multi!, i)).Enabled(ctx, l), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return true
			}
		}
		return false
	}

	public async Handle(ctx: context.Context | null, r: __goscript_record.Record): globalThis.Promise<$.GoError> {
		const h: MultiHandler | $.VarRef<MultiHandler> | null = this;
		const h$: MultiHandler = h == null ? $.pointerTarget<MultiHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<MultiHandler>(h)
		let errs: $.Slice<$.GoError> = null! as $.Slice<$.GoError>
		for (let __goscriptRangeTarget1 = (h$ as MultiHandler).multi, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>($.arrayIndex((h$ as MultiHandler).multi!, i)).Enabled(ctx, r.Level), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				{
					let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>($.arrayIndex((h$ as MultiHandler).multi!, i)).Handle(ctx, $.markAsStructValue($.cloneStructValue(r)).Clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						errs = $.appendOne(errs, err, $.appendZeros.nil)
					}
				}
			}
		}
		return errors.Join(...(errs ?? []))
	}

	public async WithAttrs(attrs: $.Slice<__goscript_attr.Attr>): globalThis.Promise<__goscript_handler.Handler | null> {
		const h: MultiHandler | $.VarRef<MultiHandler> | null = this;
		const h$: MultiHandler = h == null ? $.pointerTarget<MultiHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<MultiHandler>(h)
		let handlers: $.Slice<__goscript_handler.Handler | null> = $.makeSlice<__goscript_handler.Handler | null>(0, $.sliceLen((h$ as MultiHandler).multi))
		for (let __goscriptRangeTarget2 = (h$ as MultiHandler).multi, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			handlers = $.appendOne(handlers, (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>($.arrayIndex((h$ as MultiHandler).multi!, i)).WithAttrs(attrs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.appendZeros.nil)
		}
		return $.interfaceValue<__goscript_handler.Handler | null>(new MultiHandler({multi: handlers}), "*slog.MultiHandler", /* @__PURE__ */ $.pointerType("slog.MultiHandler"))
	}

	public async WithGroup(name: string): globalThis.Promise<__goscript_handler.Handler | null> {
		const h: MultiHandler | $.VarRef<MultiHandler> | null = this;
		const h$: MultiHandler = h == null ? $.pointerTarget<MultiHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<MultiHandler>(h)
		let handlers: $.Slice<__goscript_handler.Handler | null> = $.makeSlice<__goscript_handler.Handler | null>(0, $.sliceLen((h$ as MultiHandler).multi))
		for (let __goscriptRangeTarget3 = (h$ as MultiHandler).multi, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			handlers = $.appendOne(handlers, (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>($.arrayIndex((h$ as MultiHandler).multi!, i)).WithGroup(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.appendZeros.nil)
		}
		return $.interfaceValue<__goscript_handler.Handler | null>(new MultiHandler({multi: handlers}), "*slog.MultiHandler", /* @__PURE__ */ $.pointerType("slog.MultiHandler"))
	}

	static __typeInfo = $.registerStructType(
		"slog.MultiHandler",
		() => new MultiHandler(),
		() => [$.methodSignature("Enabled", [["ctx", "context.Context"], ["l", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Handle", [["ctx", "context.Context"], ["r", "slog.Record"]], ["error"], true), $.methodSignature("WithAttrs", [["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], ["slog.Handler"], true), $.methodSignature("WithGroup", [["name", /* @__PURE__ */ $.basicType("string")]], ["slog.Handler"], true)],
		MultiHandler,
		() => [/* @__PURE__ */ $.structField("multi", /* @__PURE__ */ $.sliceType("slog.Handler"), [0], 0, false, { pkgPath: "log/slog" })]
	)
}

export function NewMultiHandler(handlers: $.Slice<__goscript_handler.Handler | null>): MultiHandler | $.VarRef<MultiHandler> | null {
	let h: $.Slice<__goscript_handler.Handler | null> = $.makeSlice<__goscript_handler.Handler | null>($.sliceLen(handlers))
	$.copy(h, handlers)
	return new MultiHandler({multi: h})
}

var __goscriptAwait: any
