// Generated file based on stack.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_fxreflect from "./fxreflect.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "./fxreflect.gs.ts"

$.registerTypePackagePath("go.uber.org/fx/internal/fxreflect", ["fxreflect.Frame", "fxreflect.Stack"])

export type Stack = $.Slice<Frame>

$.registerNamedType("fxreflect.Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame"));

$.registerNamedValueType(
	"fxreflect.Stack",
	{CallerName: (receiver: any, ...args: any[]) => (Stack_CallerName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (Stack_Format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Stack_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Strings: (receiver: any, ...args: any[]) => (Stack_Strings as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallerName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Strings", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))])]
);

$.registerNamedValueType(
	"*fxreflect.Stack",
	{CallerName: (receiver: any, ...args: any[]) => (Stack_CallerName as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (Stack_Format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Stack_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Strings: (receiver: any, ...args: any[]) => (Stack_Strings as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallerName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Strings", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))])]
);

export class Frame {
	// Unique, package path-qualified name for the function of this call
	// frame.
	public get Function(): string {
		return this._fields.Function
	}

	public set Function(value: string) {
		this._fields.Function = value
	}

	// File and line number of our location in the frame.
	//
	// Note that the line number does not refer to where the function was
	// defined but where in the function the next call was made.
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

	public clone(): Frame {
		return new Frame(this, true)
	}

	public __goscriptAssign(source: Frame): void {
		const target = this._fields
		const values = source._fields
		target.Function = values.Function
		target.File = values.File
		target.Line = values.Line
	}

	public async String(): globalThis.Promise<string> {
		const f = this;
		// This takes the following forms.
		//  (path/to/file.go)
		//  (path/to/file.go:42)
		//  path/to/package.MyFunction
		//  path/to/package.MyFunction (path/to/file.go)
		//  path/to/package.MyFunction (path/to/file.go:42)

		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		sb.value.WriteString(f.Function)
		if ($.stringLen(f.File) > 0) {
			if (sb.value.Len() > 0) {
				sb.value.WriteRune(32)
			}
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "(%v", f.File)
			if (f.Line > 0) {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, ":%d", $.basicInterfaceValue(f.Line, "int"))
			}
			sb.value.WriteRune(41)
		}

		if (sb.value.Len() == 0) {
			return "unknown"
		}

		return sb.value.String()
	}

	static __typeInfo = $.registerStructType(
		"fxreflect.Frame",
		() => new Frame(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		Frame,
		() => [/* @__PURE__ */ $.structField("Function", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("File", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [2], 32, true)]
	)
}

export const _defaultCallersDepth: number = 8

export async function Stack_String(fs: Stack): globalThis.Promise<string> {
	return strings.Join(await Stack_Strings(fs), "; ")
}

export async function Stack_Strings(fs: Stack): globalThis.Promise<$.Slice<string>> {
	let items: $.Slice<string> = $.makeSlice<string>($.sliceLen((fs as Stack)), undefined, "string")
	for (let __goscriptRangeTarget0 = fs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(items), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as Frame)).clone();
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await $.markAsStructValue($.cloneStructValue(f)).String()
	}
	return items
}

export async function Stack_Format(fs: Stack, w: fmt.State | null, c: number): globalThis.Promise<void> {
	if (!(__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(w)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		// Without %+v, fall back to String().
		await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, await Stack_String(fs))
		return
	}

	for (let __goscriptRangeTarget1 = fs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let f = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Frame)).clone()
		await fmt.Fprintln($.pointerValueOrNil((w as io.Writer | null))!, f.Function)
		await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "\t%v:%v\n", f.File, $.basicInterfaceValue(f.Line, "int"))
	}
}

export function Stack_CallerName(fs: Stack): string {
	for (let __goscriptRangeTarget2 = fs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let f = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Frame)).clone()
		if (__goscript_fxreflect.shouldIgnoreFrame(f)) {
			continue
		}
		return f.Function
	}
	return "n/a"
}

export async function CallerStack(skip: number, depth: number): globalThis.Promise<Stack> {
	if (depth <= 0) {
		depth = 8
	}

	let pcs: $.Slice<number> = $.makeSlice<number>(depth, undefined, "number")

	// +2 to skip this frame and runtime.Callers.
	let n: number = runtime.Callers(skip + 2, pcs)
	pcs = $.goSlice(pcs, undefined, n)

	let result: $.Slice<Frame> = $.makeSlice<Frame>(0, n, undefined, () => new Frame(undefined, true))
	let frames: runtime.Frames | $.VarRef<runtime.Frames> | null = runtime.CallersFrames(pcs)
	for (let [f, more] = runtime.Frames.prototype.Next.call($.pointerValue<runtime.Frames>(frames)); more; [f, more] = runtime.Frames.prototype.Next.call($.pointerValue<runtime.Frames>(frames))) {
		result = $.appendOne(result, (await (async () => { const __goscriptLiteralField0 = await __goscript_fxreflect.sanitize(f.Function); return new Frame({Function: __goscriptLiteralField0, File: f.File, Line: f.Line}, true) })()))
	}
	return (result as Stack)
}

var __goscriptAwait: any
