// Generated file based on record.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/time/index.js"
import "./attr.gs.ts"
import "./level.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.Record", "slog.Source"])

export class Record {
	// The time at which the output method (Log, Info, etc.) was called.
	public get Time(): time.Time {
		return this._fields.Time
	}

	public set Time(value: time.Time) {
		this._fields.Time = value
	}

	// The log message.
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	// The level of the event.
	public get Level(): __goscript_level.Level {
		return this._fields.Level
	}

	public set Level(value: __goscript_level.Level) {
		this._fields.Level = value
	}

	// The program counter at the time the record was constructed, as determined
	// by runtime.Callers. If zero, no program counter is available.
	//
	// The only valid use for this value is as an argument to
	// [runtime.CallersFrames]. In particular, it must not be passed to
	// [runtime.FuncForPC].
	public get PC(): number {
		return this._fields.PC
	}

	public set PC(value: number) {
		this._fields.PC = value
	}

	// Allocation optimization: an inline array sized to hold
	// the majority of log calls (based on examination of open-source
	// code). It holds the start of the list of Attrs.
	public get front(): __goscript_attr.Attr[] {
		return this._fields.front
	}

	public set front(value: __goscript_attr.Attr[]) {
		this._fields.front = value
	}

	// The number of Attrs in front.
	public get nFront(): number {
		return this._fields.nFront
	}

	public set nFront(value: number) {
		this._fields.nFront = value
	}

	// The list of Attrs except for those in front.
	// Invariants:
	//   - len(back) > 0 iff nFront == len(front)
	//   - Unused array elements are zero. Used to detect mistakes.
	public get back(): $.Slice<__goscript_attr.Attr> {
		return this._fields.back
	}

	public set back(value: $.Slice<__goscript_attr.Attr>) {
		this._fields.back = value
	}

	public _fields: {
		Time: time.Time
		Message: string
		Level: __goscript_level.Level
		PC: number
		front: __goscript_attr.Attr[]
		nFront: number
		back: $.Slice<__goscript_attr.Attr>
	}

	constructor(init?: Partial<{Time?: time.Time, Message?: string, Level?: __goscript_level.Level, PC?: number, front?: __goscript_attr.Attr[], nFront?: number, back?: $.Slice<__goscript_attr.Attr>}>, __goscriptValue?: boolean) {
		this._fields = {
			Time: init?.Time ? $.markAsStructValue($.cloneStructValue(init.Time)) : $.markAsStructValue(new time.Time()),
			Message: init?.Message ?? ("" as string),
			Level: init?.Level ?? (0 as __goscript_level.Level),
			PC: init?.PC ?? (0 as number),
			front: init?.front !== undefined ? $.cloneArrayValue(init.front, /* @__PURE__ */ $.arrayType("slog.Attr", 5)) : $.arrayValue(globalThis.Array.from({ length: 5 }, () => new __goscript_attr.Attr(undefined, true)), /* @__PURE__ */ $.arrayType("slog.Attr", 5)),
			nFront: init?.nFront ?? (0 as number),
			back: init?.back ?? (null! as $.Slice<__goscript_attr.Attr>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Record {
		return new Record(this, true)
	}

	public __goscriptAssign(source: Record): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Time, values.Time)
		target.Message = values.Message
		target.Level = values.Level
		target.PC = values.PC
		target.front = $.assignFieldValue(target.front, values.front, /* @__PURE__ */ $.arrayType("slog.Attr", 5))
		target.nFront = values.nFront
		target.back = values.back
	}

	public Add(args: $.Slice<any>): void {
		let r: Record | $.VarRef<Record> | null = this;
		const r$: Record = r == null ? $.pointerTarget<Record>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Record>(r)
		let a: __goscript_attr.Attr = new __goscript_attr.Attr(undefined, true)
		while ($.sliceLen(args) > 0) {
			let __goscriptTuple0: any = argsToAttr(args)
			a = $.assignStruct(a, __goscriptTuple0[0])
			args = __goscriptTuple0[1]
			if (a.Value.isEmptyGroup()) {
				continue
			}
			if ((r$ as Record).nFront < 5) {
				$.assignStruct((r$ as Record).front[(r$ as Record).nFront], a);
				;(r$ as Record).nFront++
			} else {
				if ((r$ as Record).back == null) {
					;(r$ as Record).back = $.makeSlice<__goscript_attr.Attr>(0, countAttrs(args) + 1, undefined, () => new __goscript_attr.Attr(undefined, true))
				}
				;(r$ as Record).back = $.appendOne((r$ as Record).back, (a).clone())
			}
		}
	}

	public AddAttrs(attrs: $.Slice<__goscript_attr.Attr>): void {
		let r: Record | $.VarRef<Record> | null = this;
		const r$: Record = r == null ? $.pointerTarget<Record>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Record>(r)
		let i: number = 0
		for (i = 0; (i < $.sliceLen(attrs)) && ((r$ as Record).nFront < 5); i++) {
			let a = ($.arrayIndex(attrs!, i)).clone()
			if (a.Value.isEmptyGroup()) {
				continue
			}
			$.assignStruct((r$ as Record).front[(r$ as Record).nFront], a);
			;(r$ as Record).nFront++
		}
		// Check if a copy was modified by slicing past the end
		// and seeing if the Attr there is non-zero.
		if ($.cap((r$ as Record).back) > $.sliceLen((r$ as Record).back)) {
			let end = ($.arrayIndex($.goSlice((r$ as Record).back, undefined, $.sliceLen((r$ as Record).back) + 1)!, $.sliceLen((r$ as Record).back))).clone()
			if (!end.isEmpty()) {
				// Don't panic; copy and muddle through.
				;(r$ as Record).back = (slices.Clip((r$ as Record).back) as $.Slice<__goscript_attr.Attr>);
				;(r$ as Record).back = $.appendOne((r$ as Record).back, __goscript_attr.String("!BUG", "AddAttrs unsafely called on copy of Record made without using Record.Clone"))
			}
		}
		let ne = __goscript_value.countEmptyGroups($.goSlice(attrs, i, undefined));
		;(r$ as Record).back = (slices.Grow((r$ as Record).back, $.sliceLen($.goSlice(attrs, i, undefined)) - ne) as $.Slice<__goscript_attr.Attr>)
		for (let __goscriptRangeTarget0 = $.goSlice(attrs, i, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let a = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_attr.Attr)).clone()
			if (!$.markAsStructValue($.cloneStructValue(a.Value)).isEmptyGroup()) {
				;(r$ as Record).back = $.appendOne((r$ as Record).back, (a).clone())
			}
		}
	}

	public async Attrs(f: ((_p0: __goscript_attr.Attr) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const r = this;
		for (let i = 0; i < r.nFront; i++) {
			if (!(__goscriptAwait = f!(($.arrayIndex(r.front, i)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
		for (let __goscriptRangeTarget1 = r.back, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let a = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_attr.Attr)).clone()
			if (!(__goscriptAwait = f!((a).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
	}

	public Clone(): Record {
		let r: Record = this;
		r.back = (slices.Clip(r.back) as $.Slice<__goscript_attr.Attr>)
		return (r).clone()
	}

	public NumAttrs(): number {
		const r = this;
		return r.nFront + $.sliceLen(r.back)
	}

	public Source(): Source | $.VarRef<Source> | null {
		const r = this;
		if (r.PC == 0) {
			return null
		}

		let fs: runtime.Frames | $.VarRef<runtime.Frames> | null = runtime.CallersFrames($.arrayToSlice<number>([r.PC]))
		let [f, ] = runtime.Frames.prototype.Next.call($.pointerValue<runtime.Frames>(fs))
		return new Source({Function: f.Function, File: f.File, Line: f.Line})
	}

	static __typeInfo = $.registerStructType(
		"slog.Record",
		() => new Record(),
		() => [$.methodSignature("Add", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("AddAttrs", [["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], [], true), $.methodSignature("Attrs", [["f", ({ kind: $.TypeKind.Function, params: ["slog.Attr"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]]), $.methodSignature("Clone", [], ["slog.Record"]), $.methodSignature("NumAttrs", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Source", [], [/* @__PURE__ */ $.pointerType("slog.Source")])],
		Record,
		() => [/* @__PURE__ */ $.structField("Time", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("string"), [1], 24, true), /* @__PURE__ */ $.structField("Level", /* @__PURE__ */ $.basicType("int", "slog.Level"), [2], 40, true), /* @__PURE__ */ $.structField("PC", /* @__PURE__ */ $.basicType("uintptr"), [3], 48, true), /* @__PURE__ */ $.structField("front", /* @__PURE__ */ $.arrayType("slog.Attr", 5), [4], 56, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("nFront", /* @__PURE__ */ $.basicType("int"), [5], 256, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("back", /* @__PURE__ */ $.sliceType("slog.Attr"), [6], 264, false, { pkgPath: "log/slog" })]
	)
}

export class Source {
	// Function is the package path-qualified function name containing the
	// source line. If non-empty, this string uniquely identifies a single
	// function in the program. This may be the empty string if not known.
	public get Function(): string {
		return this._fields.Function
	}

	public set Function(value: string) {
		this._fields.Function = value
	}

	// File and Line are the file name and line number (1-based) of the source
	// line. These may be the empty string and zero, respectively, if not known.
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

	public _fields: {
		Function: string
		File: string
		Line: number
	}

	constructor(init?: Partial<{Function?: string, File?: string, Line?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Function: init?.Function ?? ("" as string),
			File: init?.File ?? ("" as string),
			Line: init?.Line ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Source {
		return new Source(this, true)
	}

	public __goscriptAssign(source: Source): void {
		const target = this._fields
		const values = source._fields
		target.Function = values.Function
		target.File = values.File
		target.Line = values.Line
	}

	public group(): __goscript_value.Value {
		const s: Source | $.VarRef<Source> | null = this;
		const s$: Source = s == null ? $.pointerTarget<Source>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Source>(s)
		let _as: $.Slice<__goscript_attr.Attr> = null! as $.Slice<__goscript_attr.Attr>
		if (!$.stringEqual((s$ as Source).Function, "")) {
			_as = $.appendOne(_as, __goscript_attr.String("function", (s$ as Source).Function))
		}
		if (!$.stringEqual((s$ as Source).File, "")) {
			_as = $.appendOne(_as, __goscript_attr.String("file", (s$ as Source).File))
		}
		if ((s$ as Source).Line != 0) {
			_as = $.appendOne(_as, __goscript_attr.Int("line", (s$ as Source).Line))
		}
		return __goscript_value.GroupValue(_as)
	}

	public isEmpty(): boolean {
		const s: Source | $.VarRef<Source> | null = this;
		return (s == null) || ($.structEqual($.pointerValue<Source>(s), new Source(undefined, true)))
	}

	static __typeInfo = $.registerStructType(
		"slog.Source",
		() => new Source(),
		() => [$.methodSignature("group", [], ["slog.Value"], true), $.methodSignature("isEmpty", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Source,
		() => [/* @__PURE__ */ $.structField("Function", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"function\"" }), /* @__PURE__ */ $.structField("File", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"file\"" }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [2], 32, true, { tag: "json:\"line\"" })]
	)
}

export const nAttrsInline: number = 5

export const badKey: string = "!BADKEY"

export function NewRecord(t: time.Time, level: __goscript_level.Level, msg: string, pc: number): Record {
	return new Record({Time: $.markAsStructValue($.cloneStructValue(t)), Message: msg, Level: level, PC: pc}, true)
}

export function countAttrs(args: $.Slice<any>): number {
	let n = 0
	for (let __goscriptSliceWindow1 = $.sliceRange(args), i = 0; i < __goscriptSliceWindow1.length; i++) {
		n++
		{
			let [, ok] = $.typeAssertTuple<string>(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as any), /* @__PURE__ */ $.basicType("string"))
			if (ok) {
				i++
			}
		}
	}
	return n
}

export function argsToAttr(args: $.Slice<any>): [__goscript_attr.Attr, $.Slice<any>] {
	{
		const __goscriptTypeSwitchValue = $.arrayIndex(args!, 0)
		switch (true) {
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					let x: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
					if ($.sliceLen(args) == 1) {
						return [__goscript_attr.String("!BADKEY", x), null]
					}
					return [__goscript_attr.Any(x, $.arrayIndex(args!, 1)), $.goSlice(args, 2, undefined)]
				}
				break
			case $.typeAssert<__goscript_attr.Attr>(__goscriptTypeSwitchValue, "slog.Attr").ok:
				{
					let x: __goscript_attr.Attr = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_attr.Attr>(__goscriptTypeSwitchValue, "slog.Attr").value))
					return [(x).clone(), $.goSlice(args, 1, undefined)]
				}
				break
			default:
				{
					let x: any = __goscriptTypeSwitchValue
					return [__goscript_attr.Any("!BADKEY", x), $.goSlice(args, 1, undefined)]
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
