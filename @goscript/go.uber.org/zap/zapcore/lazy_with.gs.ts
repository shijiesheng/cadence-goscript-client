// Generated file based on lazy_with.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_core from "./core.gs.ts"

import type * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_write_syncer from "./write_syncer.gs.ts"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./core.gs.ts"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./write_syncer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.lazyWithCore"])

export class lazyWithCore {
	public get Core(): __goscript_core.Core | null {
		return this._fields.Core
	}

	public set Core(value: __goscript_core.Core | null) {
		this._fields.Core = value
	}

	public get Once(): sync.Once {
		return this._fields.Once
	}

	public set Once(value: sync.Once) {
		this._fields.Once = value
	}

	public get fields(): $.Slice<__goscript_field.Field> {
		return this._fields.fields
	}

	public set fields(value: $.Slice<__goscript_field.Field>) {
		this._fields.fields = value
	}

	public _fields: {
		Core: __goscript_core.Core | null
		Once: sync.Once
		fields: $.Slice<__goscript_field.Field>
	}

	constructor(init?: Partial<{Core?: __goscript_core.Core | null, Once?: sync.Once, fields?: $.Slice<__goscript_field.Field>}>, __goscriptValue?: boolean) {
		this._fields = {
			Core: init?.Core ?? (null! as __goscript_core.Core | null),
			Once: init?.Once ? $.markAsStructValue($.cloneStructValue(init.Once)) : $.markAsStructValue(new sync.Once()),
			fields: init?.fields ?? (null! as $.Slice<__goscript_field.Field>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyWithCore {
		return new lazyWithCore(this, true)
	}

	public __goscriptAssign(source: lazyWithCore): void {
		const target = this._fields
		const values = source._fields
		target.Core = $.assignFieldValue(target.Core, values.Core, "zapcore.Core")
		$.assignStruct(target.Once, values.Once)
		target.fields = values.fields
	}

	public async Check(e: __goscript_entry.Entry, ce: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): globalThis.Promise<__goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null> {
		const d: lazyWithCore | $.VarRef<lazyWithCore> | null = this;
		await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as lazyWithCore).initOnce() : lazyWithCore.prototype.initOnce.call(d))
		return $.pointerValue<Exclude<__goscript_core.Core, null>>($.pointerValue<lazyWithCore>(d).Core).Check((e).clone(), ce)
	}

	public async With(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<__goscript_core.Core | null> {
		const d: lazyWithCore | $.VarRef<lazyWithCore> | null = this;
		await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as lazyWithCore).initOnce() : lazyWithCore.prototype.initOnce.call(d))
		return $.pointerValue<Exclude<__goscript_core.Core, null>>($.pointerValue<lazyWithCore>(d).Core).With(fields)
	}

	public async initOnce(): globalThis.Promise<void> {
		const d: lazyWithCore | $.VarRef<lazyWithCore> | null = this;
		const d$: lazyWithCore = d == null ? $.pointerTarget<lazyWithCore>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<lazyWithCore>(d)
		await (d$ as lazyWithCore).Once.Do($.functionValue(async (): globalThis.Promise<void> => {
			;(d$ as lazyWithCore).Core = (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>((d$ as lazyWithCore).Core).With((d$ as lazyWithCore).fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	public async Enabled(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Enabled(_p0)
	}

	public async Sync(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Sync()
	}

	public async Write(_p0: any, _p1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_core.Core | null, null>>(this.Core).Write(_p0, _p1)
	}

	public Do(f: any): any {
		return $.pointerValue<sync.Once>(this.Once).Do(f)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.lazyWithCore",
		() => new lazyWithCore(),
		() => [$.methodSignature("Check", [["e", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"], true), $.methodSignature("initOnce", [], [], true), $.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", ["zapcore.Entry", /* @__PURE__ */ $.sliceType("zapcore.Field")], ["error"]), $.methodSignature("Do", [["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true)],
		lazyWithCore,
		() => [/* @__PURE__ */ $.structField("Core", "zapcore.Core", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Once", "sync.Once", [1], 16, true, { anonymous: true }), /* @__PURE__ */ $.structField("fields", /* @__PURE__ */ $.sliceType("zapcore.Field"), [2], 32, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export function NewLazyWith(core: __goscript_core.Core | null, fields: $.Slice<__goscript_field.Field>): __goscript_core.Core | null {
	return $.interfaceValue<__goscript_core.Core | null>(new lazyWithCore({Core: core, fields: fields}), "*zapcore.lazyWithCore", /* @__PURE__ */ $.pointerType("zapcore.lazyWithCore"))
}

var __goscriptAwait: any
