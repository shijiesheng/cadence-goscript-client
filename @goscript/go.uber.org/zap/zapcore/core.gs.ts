// Generated file based on core.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as buffer from "@goscript/go.uber.org/zap/buffer/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_write_syncer from "./write_syncer.gs.ts"
import "@goscript/go.uber.org/zap/buffer/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./encoder.gs.ts"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./write_syncer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.Core", "zapcore.nopCore", "zapcore.ioCore"])

export type Core = {
	Check(_p0: __goscript_entry.Entry, _p1: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null | globalThis.Promise<__goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null>
	Enabled(_p0: __goscript_level.Level): boolean | globalThis.Promise<boolean>
	Sync(): $.GoError | globalThis.Promise<$.GoError>
	With(_p0: $.Slice<__goscript_field.Field>): Core | null | globalThis.Promise<Core | null>
	Write(_p0: __goscript_entry.Entry, _p1: $.Slice<__goscript_field.Field>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"zapcore.Core",
	null,
	[$.methodSignature("Check", ["zapcore.Entry", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]), $.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("With", [/* @__PURE__ */ $.sliceType("zapcore.Field")], ["zapcore.Core"]), $.methodSignature("Write", ["zapcore.Entry", /* @__PURE__ */ $.sliceType("zapcore.Field")], ["error"])]
);

export class nopCore {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopCore {
		return new nopCore(this, true)
	}

	public __goscriptAssign(source: nopCore): void {
	}

	public Check(_p0: __goscript_entry.Entry, ce: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null {
		return ce
	}

	public Enabled(_p0: __goscript_level.Level): boolean {
		return false
	}

	public Sync(): $.GoError {
		return null
	}

	public With(_p0: $.Slice<__goscript_field.Field>): Core | null {
		const n = this;
		return $.interfaceValue<Core | null>((n).clone(), "zapcore.nopCore", "zapcore.nopCore")
	}

	public Write(_p0: __goscript_entry.Entry, _p1: $.Slice<__goscript_field.Field>): $.GoError {
		return null
	}

	static __typeInfo = $.registerStructType(
		"zapcore.nopCore",
		() => new nopCore(),
		() => [$.methodSignature("Check", [["_", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]), $.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("With", [/* @__PURE__ */ $.sliceType("zapcore.Field")], ["zapcore.Core"]), $.methodSignature("Write", ["zapcore.Entry", /* @__PURE__ */ $.sliceType("zapcore.Field")], ["error"])],
		nopCore,
		() => []
	)
}

export class ioCore {
	public get LevelEnabler(): __goscript_level.LevelEnabler | null {
		return this._fields.LevelEnabler
	}

	public set LevelEnabler(value: __goscript_level.LevelEnabler | null) {
		this._fields.LevelEnabler = value
	}

	public get enc(): __goscript_encoder.Encoder | null {
		return this._fields.enc
	}

	public set enc(value: __goscript_encoder.Encoder | null) {
		this._fields.enc = value
	}

	public get out(): __goscript_write_syncer.WriteSyncer | null {
		return this._fields.out
	}

	public set out(value: __goscript_write_syncer.WriteSyncer | null) {
		this._fields.out = value
	}

	public _fields: {
		LevelEnabler: __goscript_level.LevelEnabler | null
		enc: __goscript_encoder.Encoder | null
		out: __goscript_write_syncer.WriteSyncer | null
	}

	constructor(init?: Partial<{LevelEnabler?: __goscript_level.LevelEnabler | null, enc?: __goscript_encoder.Encoder | null, out?: __goscript_write_syncer.WriteSyncer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			LevelEnabler: init?.LevelEnabler ?? (null! as __goscript_level.LevelEnabler | null),
			enc: init?.enc ?? (null! as __goscript_encoder.Encoder | null),
			out: init?.out ?? (null! as __goscript_write_syncer.WriteSyncer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): ioCore {
		return new ioCore(this, true)
	}

	public __goscriptAssign(source: ioCore): void {
		const target = this._fields
		const values = source._fields
		target.LevelEnabler = $.assignFieldValue(target.LevelEnabler, values.LevelEnabler, "zapcore.LevelEnabler")
		target.enc = $.assignFieldValue(target.enc, values.enc, "zapcore.Encoder")
		target.out = $.assignFieldValue(target.out, values.out, "zapcore.WriteSyncer")
	}

	public async Check(ent: __goscript_entry.Entry, ce: __goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null): globalThis.Promise<__goscript_entry.CheckedEntry | $.VarRef<__goscript_entry.CheckedEntry> | null> {
		const c: ioCore | $.VarRef<ioCore> | null = this;
		if (await $.pointerValue<Exclude<__goscript_level.LevelEnabler, null>>($.pointerValue<ioCore>(c).LevelEnabler).Enabled(ent.Level)) {
			return (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as __goscript_entry.CheckedEntry).AddCore(ent, $.interfaceValue<Core | null>(c, "*zapcore.ioCore", /* @__PURE__ */ $.pointerType("zapcore.ioCore"))) : __goscript_entry.CheckedEntry.prototype.AddCore.call(ce, ent, $.interfaceValue<Core | null>(c, "*zapcore.ioCore", /* @__PURE__ */ $.pointerType("zapcore.ioCore"))))
		}
		return ce
	}

	public async Level(): globalThis.Promise<__goscript_level.Level> {
		const c: ioCore | $.VarRef<ioCore> | null = this;
		return __goscript_level.LevelOf($.pointerValue<ioCore>(c).LevelEnabler)
	}

	public async Sync(): globalThis.Promise<$.GoError> {
		const c: ioCore | $.VarRef<ioCore> | null = this;
		return $.pointerValue<Exclude<__goscript_write_syncer.WriteSyncer, null>>($.pointerValue<ioCore>(c).out).Sync()
	}

	public async With(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<Core | null> {
		const c: ioCore | $.VarRef<ioCore> | null = this;
		let clone: ioCore | $.VarRef<ioCore> | null = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ioCore).clone() : ioCore.prototype.clone.call(c))
		await __goscript_field.addFields(($.pointerValue<ioCore>(clone).enc as __goscript_encoder.ObjectEncoder | null), fields)
		return $.interfaceValue<Core | null>(clone, "*zapcore.ioCore", /* @__PURE__ */ $.pointerType("zapcore.ioCore"))
	}

	public async Write(ent: __goscript_entry.Entry, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<$.GoError> {
		const c: ioCore | $.VarRef<ioCore> | null = this;
		const c$: ioCore = c == null ? $.pointerTarget<ioCore>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ioCore>(c)
		let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_encoder.Encoder, null>>((c$ as ioCore).enc).EncodeEntry((ent).clone(), fields)
		let buf: buffer.Buffer | $.VarRef<buffer.Buffer> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		let __goscriptTuple1: any = await $.pointerValue<Exclude<__goscript_write_syncer.WriteSyncer, null>>((c$ as ioCore).out).Write((buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).Bytes() : buffer.Buffer.prototype.Bytes.call(buf)))
		err = __goscriptTuple1[1]
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).Free() : buffer.Buffer.prototype.Free.call(buf))
		if (err != null) {
			return err
		}
		if (ent.Level > 2) {
			// Since we may be crashing the program, sync the output.
			// Ignore Sync errors, pending a clean solution to issue #370.
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ioCore).Sync() : ioCore.prototype.Sync.call(c))
		}
		return null
	}

	public async clone(): globalThis.Promise<ioCore | $.VarRef<ioCore> | null> {
		const c: ioCore | $.VarRef<ioCore> | null = this;
		const c$: ioCore = c == null ? $.pointerTarget<ioCore>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ioCore>(c)
		return (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_encoder.Encoder, null>>((c$ as ioCore).enc).Clone(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new ioCore({LevelEnabler: (c$ as ioCore).LevelEnabler, enc: __goscriptLiteralField0, out: (c$ as ioCore).out}) })())
	}

	public async Enabled(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_level.LevelEnabler | null, null>>(this.LevelEnabler).Enabled(_p0)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.ioCore",
		() => new ioCore(),
		() => [$.methodSignature("Check", [["ent", "zapcore.Entry"], ["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], true), $.methodSignature("Sync", [], ["error"], true), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"], true), $.methodSignature("Write", [["ent", "zapcore.Entry"], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["error"], true), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("zapcore.ioCore")], true), $.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")])],
		ioCore,
		() => [/* @__PURE__ */ $.structField("LevelEnabler", "zapcore.LevelEnabler", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("enc", "zapcore.Encoder", [1], 16, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("out", "zapcore.WriteSyncer", [2], 32, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export function NewNopCore(): Core | null {
	return $.interfaceValue<Core | null>(new nopCore(undefined, true), "zapcore.nopCore", "zapcore.nopCore")
}

export function NewCore(enc: __goscript_encoder.Encoder | null, ws: __goscript_write_syncer.WriteSyncer | null, enab: __goscript_level.LevelEnabler | null): Core | null {
	return $.interfaceValue<Core | null>(new ioCore({LevelEnabler: enab, enc: enc, out: ws}), "*zapcore.ioCore", /* @__PURE__ */ $.pointerType("zapcore.ioCore"))
}

var __goscriptAwait: any
