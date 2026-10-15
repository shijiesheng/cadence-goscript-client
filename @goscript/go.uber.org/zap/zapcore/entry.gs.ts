// Generated file based on entry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as bufferpool from "@goscript/go.uber.org/zap/internal/bufferpool/index.js"

import * as exit from "@goscript/go.uber.org/zap/internal/exit/index.js"

import * as pool from "@goscript/go.uber.org/zap/internal/pool/index.js"

import * as buffer from "@goscript/go.uber.org/zap/buffer/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_core from "./core.gs.ts"

import type * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_write_syncer from "./write_syncer.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/zap/internal/bufferpool/index.js"
import "@goscript/go.uber.org/zap/internal/exit/index.js"
import "@goscript/go.uber.org/zap/internal/pool/index.js"
import "@goscript/go.uber.org/zap/buffer/index.js"
import "./core.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./write_syncer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.EntryCaller", "zapcore.Entry", "zapcore.CheckWriteHook", "zapcore.CheckWriteAction", "zapcore.CheckedEntry"])

export type CheckWriteHook = {
	OnWrite(_p0: CheckedEntry | $.VarRef<CheckedEntry> | null, _p1: $.Slice<__goscript_field.Field>): void
}

$.registerInterfaceType(
	"zapcore.CheckWriteHook",
	null,
	[$.methodSignature("OnWrite", [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry"), /* @__PURE__ */ $.sliceType("zapcore.Field")])]
);

export type CheckWriteAction = number

$.registerNamedValueType(
	"zapcore.CheckWriteAction",
	{OnWrite: (receiver: any, ...args: any[]) => (CheckWriteAction_OnWrite as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("OnWrite", [["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], ["_", /* @__PURE__ */ $.sliceType("zapcore.Field")]])]
);

$.registerNamedValueType(
	"*zapcore.CheckWriteAction",
	{OnWrite: (receiver: any, ...args: any[]) => (CheckWriteAction_OnWrite as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("OnWrite", [["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], ["_", /* @__PURE__ */ $.sliceType("zapcore.Field")]])]
);

export class EntryCaller {
	public get Defined(): boolean {
		return this._fields.Defined
	}

	public set Defined(value: boolean) {
		this._fields.Defined = value
	}

	public get PC(): number {
		return this._fields.PC
	}

	public set PC(value: number) {
		this._fields.PC = value
	}

	public get File(): string {
		return this._fields.File
	}

	public set File(value: string) {
		this._fields.File = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get Function(): string {
		return this._fields.Function
	}

	public set Function(value: string) {
		this._fields.Function = value
	}

	public _fields: {
		Defined: boolean
		PC: number
		File: string
		Line: number
		Function: string
	}

	constructor(init?: Partial<{Defined?: boolean, PC?: number, File?: string, Line?: number, Function?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Defined: init?.Defined ?? (false as boolean),
			PC: init?.PC ?? (0 as number),
			File: init?.File ?? ("" as string),
			Line: init?.Line ?? (0 as number),
			Function: init?.Function ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EntryCaller {
		return new EntryCaller(this, true)
	}

	public __goscriptAssign(source: EntryCaller): void {
		const target = this._fields
		const values = source._fields
		target.Defined = values.Defined
		target.PC = values.PC
		target.File = values.File
		target.Line = values.Line
		target.Function = values.Function
	}

	public async FullPath(): globalThis.Promise<string> {
		const ec = this;
		if (!ec.Defined) {
			return "undefined"
		}
		let buf: buffer.Buffer | $.VarRef<buffer.Buffer> | null = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer.Buffer | $.VarRef<buffer.Buffer> | null)
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendString(ec.File) : buffer.Buffer.prototype.AppendString.call(buf, ec.File))
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(58) : buffer.Buffer.prototype.AppendByte.call(buf, 58))
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendInt($.int64(ec.Line)) : buffer.Buffer.prototype.AppendInt.call(buf, $.int64(ec.Line)))
		let caller = (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).String() : buffer.Buffer.prototype.String.call(buf))
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).Free() : buffer.Buffer.prototype.Free.call(buf))
		return caller
	}

	public async String(): globalThis.Promise<string> {
		const ec = this;
		return ec.FullPath()
	}

	public async TrimmedPath(): globalThis.Promise<string> {
		const ec = this;
		if (!ec.Defined) {
			return "undefined"
		}
		// nb. To make sure we trim the path correctly on Windows too, we
		// counter-intuitively need to use '/' and *not* os.PathSeparator here,
		// because the path given originates from Go stdlib, specifically
		// runtime.Caller() which (as of Mar/17) returns forward slashes even on
		// Windows.
		//
		// See https://github.com/golang/go/issues/3335
		// and https://github.com/golang/go/issues/18151
		//
		// for discussion on the issue on Go side.
		//
		// Find the last separator.
		//
		let idx = strings.LastIndexByte(ec.File, 47)
		if (idx == -1) {
			return $.markAsStructValue($.cloneStructValue(ec)).FullPath()
		}
		// Find the penultimate separator.
		idx = strings.LastIndexByte($.sliceStringOrBytes(ec.File, undefined, idx), 47)
		if (idx == -1) {
			return $.markAsStructValue($.cloneStructValue(ec)).FullPath()
		}
		let buf: buffer.Buffer | $.VarRef<buffer.Buffer> | null = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer.Buffer | $.VarRef<buffer.Buffer> | null)
		// Keep everything after the penultimate separator.
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendString($.sliceStringOrBytes(ec.File, idx + 1, undefined)) : buffer.Buffer.prototype.AppendString.call(buf, $.sliceStringOrBytes(ec.File, idx + 1, undefined)))
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(58) : buffer.Buffer.prototype.AppendByte.call(buf, 58))
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendInt($.int64(ec.Line)) : buffer.Buffer.prototype.AppendInt.call(buf, $.int64(ec.Line)))
		let caller = (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).String() : buffer.Buffer.prototype.String.call(buf))
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).Free() : buffer.Buffer.prototype.Free.call(buf))
		return caller
	}

	static __typeInfo = $.registerStructType(
		"zapcore.EntryCaller",
		() => new EntryCaller(),
		() => [$.methodSignature("FullPath", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("TrimmedPath", [], [/* @__PURE__ */ $.basicType("string")])],
		EntryCaller,
		() => [/* @__PURE__ */ $.structField("Defined", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("PC", /* @__PURE__ */ $.basicType("uintptr"), [1], 8, true), /* @__PURE__ */ $.structField("File", /* @__PURE__ */ $.basicType("string"), [2], 16, true), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 32, true), /* @__PURE__ */ $.structField("Function", /* @__PURE__ */ $.basicType("string"), [4], 40, true)]
	)
}

export class Entry {
	public get Level(): __goscript_level.Level {
		return this._fields.Level
	}

	public set Level(value: __goscript_level.Level) {
		this._fields.Level = value
	}

	public get Time(): time.Time {
		return this._fields.Time
	}

	public set Time(value: time.Time) {
		this._fields.Time = value
	}

	public get LoggerName(): string {
		return this._fields.LoggerName
	}

	public set LoggerName(value: string) {
		this._fields.LoggerName = value
	}

	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	public get Caller(): EntryCaller {
		return this._fields.Caller
	}

	public set Caller(value: EntryCaller) {
		this._fields.Caller = value
	}

	public get Stack(): string {
		return this._fields.Stack
	}

	public set Stack(value: string) {
		this._fields.Stack = value
	}

	public _fields: {
		Level: __goscript_level.Level
		Time: time.Time
		LoggerName: string
		Message: string
		Caller: EntryCaller
		Stack: string
	}

	constructor(init?: Partial<{Level?: __goscript_level.Level, Time?: time.Time, LoggerName?: string, Message?: string, Caller?: EntryCaller, Stack?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Level: init?.Level ?? (0 as __goscript_level.Level),
			Time: init?.Time ? $.markAsStructValue($.cloneStructValue(init.Time)) : $.markAsStructValue(new time.Time()),
			LoggerName: init?.LoggerName ?? ("" as string),
			Message: init?.Message ?? ("" as string),
			Caller: init?.Caller ? init.Caller.clone() : new EntryCaller(undefined, true),
			Stack: init?.Stack ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Entry {
		return new Entry(this, true)
	}

	public __goscriptAssign(source: Entry): void {
		const target = this._fields
		const values = source._fields
		target.Level = values.Level
		$.assignStruct(target.Time, values.Time)
		target.LoggerName = values.LoggerName
		target.Message = values.Message
		$.assignStruct(target.Caller, values.Caller)
		target.Stack = values.Stack
	}

	static __typeInfo = $.registerStructType(
		"zapcore.Entry",
		() => new Entry(),
		() => [],
		Entry,
		() => [/* @__PURE__ */ $.structField("Level", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [0], 0, true), /* @__PURE__ */ $.structField("Time", "time.Time", [1], 8, true), /* @__PURE__ */ $.structField("LoggerName", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("Caller", "zapcore.EntryCaller", [4], 64, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.basicType("string"), [5], 120, true)]
	)
}

export class CheckedEntry {
	public get Entry(): Entry {
		return this._fields.Entry
	}

	public set Entry(value: Entry) {
		this._fields.Entry = value
	}

	public get ErrorOutput(): __goscript_write_syncer.WriteSyncer | null {
		return this._fields.ErrorOutput
	}

	public set ErrorOutput(value: __goscript_write_syncer.WriteSyncer | null) {
		this._fields.ErrorOutput = value
	}

	public get dirty(): boolean {
		return this._fields.dirty
	}

	public set dirty(value: boolean) {
		this._fields.dirty = value
	}

	public get after(): CheckWriteHook | null {
		return this._fields.after
	}

	public set after(value: CheckWriteHook | null) {
		this._fields.after = value
	}

	public get cores(): $.Slice<__goscript_core.Core | null> {
		return this._fields.cores
	}

	public set cores(value: $.Slice<__goscript_core.Core | null>) {
		this._fields.cores = value
	}

	public _fields: {
		Entry: Entry
		ErrorOutput: __goscript_write_syncer.WriteSyncer | null
		dirty: boolean
		after: CheckWriteHook | null
		cores: $.Slice<__goscript_core.Core | null>
	}

	constructor(init?: Partial<{Entry?: Entry, ErrorOutput?: __goscript_write_syncer.WriteSyncer | null, dirty?: boolean, after?: CheckWriteHook | null, cores?: $.Slice<__goscript_core.Core | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Entry: init?.Entry ? init.Entry.clone() : new Entry(undefined, true),
			ErrorOutput: init?.ErrorOutput ?? (null! as __goscript_write_syncer.WriteSyncer | null),
			dirty: init?.dirty ?? (false as boolean),
			after: init?.after ?? (null! as CheckWriteHook | null),
			cores: init?.cores ?? (null! as $.Slice<__goscript_core.Core | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CheckedEntry {
		return new CheckedEntry(this, true)
	}

	public __goscriptAssign(source: CheckedEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Entry, values.Entry)
		target.ErrorOutput = $.assignFieldValue(target.ErrorOutput, values.ErrorOutput, "zapcore.WriteSyncer")
		target.dirty = values.dirty
		target.after = $.assignFieldValue(target.after, values.after, "zapcore.CheckWriteHook")
		target.cores = values.cores
	}

	public async AddCore(ent: Entry, core: __goscript_core.Core | null): globalThis.Promise<CheckedEntry | $.VarRef<CheckedEntry> | null> {
		let ce: CheckedEntry | $.VarRef<CheckedEntry> | null = this;
		if (ce == null) {
			ce = await getCheckedEntry()
			$.assignStruct($.pointerValue<CheckedEntry>(ce).Entry, ent)
		}
		$.pointerValue<CheckedEntry>(ce).cores = $.appendOne($.pointerValue<CheckedEntry>(ce).cores, core, $.appendZeros.nil)
		return ce
	}

	public async After(ent: Entry, hook: CheckWriteHook | null): globalThis.Promise<CheckedEntry | $.VarRef<CheckedEntry> | null> {
		let ce: CheckedEntry | $.VarRef<CheckedEntry> | null = this;
		if (ce == null) {
			ce = await getCheckedEntry()
			$.assignStruct($.pointerValue<CheckedEntry>(ce).Entry, ent)
		}
		$.pointerValue<CheckedEntry>(ce).after = hook
		return ce
	}

	public async Should(ent: Entry, should: CheckWriteAction): globalThis.Promise<CheckedEntry | $.VarRef<CheckedEntry> | null> {
		const ce: CheckedEntry | $.VarRef<CheckedEntry> | null = this;
		return CheckedEntry.prototype.After.call(ce, ent, $.namedValueInterfaceValue<CheckWriteHook | null>(should, "zapcore.CheckWriteAction", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()))
	}

	public async Write(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		let ce: CheckedEntry | $.VarRef<CheckedEntry> | null = this;
		const ce$: CheckedEntry = ce == null ? $.pointerTarget<CheckedEntry>(ce) : (ce as any).__isVarRef === true ? (ce as any).value : (ce as any).__goValue === undefined ? (ce as any) : $.pointerTarget<CheckedEntry>(ce)
		if (ce == null) {
			return
		}

		if ((ce$ as CheckedEntry).dirty) {
			if ((ce$ as CheckedEntry).ErrorOutput != null) {
				// Make a best effort to detect unsafe re-use of this CheckedEntry.
				// If the entry is dirty, log an internal error; because the
				// CheckedEntry is being used after it was returned to the pool,
				// the message may be an amalgamation from multiple call sites.
				await fmt.Fprintf($.pointerValueOrNil(((ce$ as CheckedEntry).ErrorOutput as io.Writer | null))!, "%v Unsafe CheckedEntry re-use near Entry %+v.\n", $.interfaceValue($.markAsStructValue($.cloneStructValue((ce$ as CheckedEntry).Entry.Time)), "time.Time", "time.Time"), $.interfaceValue(((ce$ as CheckedEntry).Entry).clone(), "zapcore.Entry", "zapcore.Entry"));
				;(__goscriptAwait = $.pointerValue<Exclude<__goscript_write_syncer.WriteSyncer, null>>((ce$ as CheckedEntry).ErrorOutput).Sync(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}
		;(ce$ as CheckedEntry).dirty = true

		let err: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget0 = (ce$ as CheckedEntry).cores, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			err = multierr.Append(err, (__goscriptAwait = $.pointerValue<Exclude<__goscript_core.Core, null>>($.arrayIndex((ce$ as CheckedEntry).cores!, i)).Write(((ce$ as CheckedEntry).Entry).clone(), fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		if ((err != null) && ((ce$ as CheckedEntry).ErrorOutput != null)) {
			await fmt.Fprintf($.pointerValueOrNil(((ce$ as CheckedEntry).ErrorOutput as io.Writer | null))!, "%v write error: %v\n", $.interfaceValue($.markAsStructValue($.cloneStructValue((ce$ as CheckedEntry).Entry.Time)), "time.Time", "time.Time"), (err as any));
			;(__goscriptAwait = $.pointerValue<Exclude<__goscript_write_syncer.WriteSyncer, null>>((ce$ as CheckedEntry).ErrorOutput).Sync(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let hook = (ce$ as CheckedEntry).after
		if (hook != null) {
			void (__goscriptAwait = (hook !== null && (hook as any).__isVarRef !== true && (hook as any).__goValue === undefined ? (hook as Exclude<CheckWriteHook, null>) : $.pointerValue<Exclude<CheckWriteHook, null>>(hook)).OnWrite(ce, fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		await putCheckedEntry(ce)
	}

	public reset(): void {
		let ce: CheckedEntry | $.VarRef<CheckedEntry> | null = this;
		const ce$: CheckedEntry = ce == null ? $.pointerTarget<CheckedEntry>(ce) : (ce as any).__isVarRef === true ? (ce as any).value : (ce as any).__goValue === undefined ? (ce as any) : $.pointerTarget<CheckedEntry>(ce)
		$.assignStruct((ce$ as CheckedEntry).Entry, new Entry(undefined, true));
		;(ce$ as CheckedEntry).ErrorOutput = null;
		;(ce$ as CheckedEntry).dirty = false;
		;(ce$ as CheckedEntry).after = null
		for (let __goscriptRangeTarget1 = (ce$ as CheckedEntry).cores, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			// don't keep references to cores
			$.sliceElems((ce$ as CheckedEntry).cores!)[$.sliceSlot((ce$ as CheckedEntry).cores!, i)] = null
		}
		;(ce$ as CheckedEntry).cores = $.goSlice((ce$ as CheckedEntry).cores, undefined, 0)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.CheckedEntry",
		() => new CheckedEntry(),
		() => [$.methodSignature("AddCore", [["ent", "zapcore.Entry"], ["core", "zapcore.Core"]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("After", [["ent", "zapcore.Entry"], ["hook", "zapcore.CheckWriteHook"]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("Should", [["ent", "zapcore.Entry"], ["should", /* @__PURE__ */ $.basicType("uint8", "zapcore.CheckWriteAction")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("Write", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("reset", [], [], true)],
		CheckedEntry,
		() => [/* @__PURE__ */ $.structField("Entry", "zapcore.Entry", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ErrorOutput", "zapcore.WriteSyncer", [1], 136, true), /* @__PURE__ */ $.structField("dirty", /* @__PURE__ */ $.basicType("bool"), [2], 152, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("after", "zapcore.CheckWriteHook", [3], 160, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("cores", /* @__PURE__ */ $.sliceType("zapcore.Core"), [4], 176, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export const WriteThenNoop: CheckWriteAction = 0

export const WriteThenGoexit: CheckWriteAction = 1

export const WriteThenPanic: CheckWriteAction = 2

export const WriteThenFatal: CheckWriteAction = 3

export var _cePool: pool.Pool | $.VarRef<pool.Pool> | null

export async function __goscript_init__cePool(): globalThis.Promise<void> {
	if (((_cePool) as any) === undefined) {
		_cePool = await pool.New(__goscriptStatic0(), $.functionValue((): CheckedEntry | $.VarRef<CheckedEntry> | null => {
	// Pre-allocate some space for cores.
	return new CheckedEntry({cores: $.makeSlice<__goscript_core.Core | null>(4)})
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")] } as $.FunctionTypeInfo)))
	}
}

export function __goscript_get__cePool(): pool.Pool | $.VarRef<pool.Pool> | null {
	if (((_cePool) as any) === undefined) {
		throw new globalThis.Error("goscript package variable _cePool read before initialization")
	}
	return _cePool
}

export function __goscript_set__cePool(__goscriptValue: pool.Pool | $.VarRef<pool.Pool> | null): void {
	_cePool = __goscriptValue
}

export async function getCheckedEntry(): globalThis.Promise<CheckedEntry | $.VarRef<CheckedEntry> | null> {
	let ce: CheckedEntry | $.VarRef<CheckedEntry> | null = (await pool.Pool.prototype.Get.call((await __goscript_init__cePool(), __goscript_get__cePool()), __goscriptStatic0()) as CheckedEntry | $.VarRef<CheckedEntry> | null)
	void (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as CheckedEntry).reset() : CheckedEntry.prototype.reset.call(ce))
	return ce
}

export async function putCheckedEntry(ce: CheckedEntry | $.VarRef<CheckedEntry> | null): globalThis.Promise<void> {
	if (ce == null) {
		return
	}
	pool.Pool.prototype.Put.call((await __goscript_init__cePool(), __goscript_get__cePool()), __goscriptStatic0(), ce)
}

export function NewEntryCaller(pc: number, file: string, line: number, ok: boolean): EntryCaller {
	if (!ok) {
		return new EntryCaller(undefined, true)
	}
	return new EntryCaller({PC: pc, File: file, Line: line, Defined: true}, true)
}

export async function CheckWriteAction_OnWrite(a: CheckWriteAction, ce: CheckedEntry | $.VarRef<CheckedEntry> | null, _p1: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
	switch (a) {
		case 1:
		{
			runtime.Goexit()
			break
		}
		case 2:
		{
			$.panic($.pointerValue<CheckedEntry>(ce).Entry.Message)
			break
		}
		case 3:
		{
			await exit.With(1)
			break
		}
	}
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry"), zero: () => null, methods: {AddCore: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddCore(...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => $.pointerValue(receiver).After(...$.stripGenericTypeArgs(args)), Should: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Should(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Write(...$.stripGenericTypeArgs(args)), reset: (receiver: any, ...args: any[]) => $.pointerValue(receiver).reset(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({OnWrite: (receiver: any, ...args: any[]) => (CheckWriteAction_OnWrite as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= (/* @__PURE__ */ $.basicType("uint8", "zapcore.CheckWriteAction"))
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("OnWrite", [["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], ["_", /* @__PURE__ */ $.sliceType("zapcore.Field")]])])
}

var __goscriptAwait: any
