// Generated file based on stack.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as buffer2 from "@goscript/go.uber.org/zap/buffer/index.js"

import * as bufferpool from "@goscript/go.uber.org/zap/internal/bufferpool/index.js"

import * as pool from "@goscript/go.uber.org/zap/internal/pool/index.js"
import "@goscript/runtime/index.js"
import "@goscript/go.uber.org/zap/buffer/index.js"
import "@goscript/go.uber.org/zap/internal/bufferpool/index.js"
import "@goscript/go.uber.org/zap/internal/pool/index.js"

$.registerTypePackagePath("go.uber.org/zap/internal/stacktrace", ["stacktrace.Stack", "stacktrace.Depth", "stacktrace.Formatter"])

export type Depth = number

export class Stack {
	public get pcs(): $.Slice<number> {
		return this._fields.pcs
	}

	public set pcs(value: $.Slice<number>) {
		this._fields.pcs = value
	}

	public get frames(): runtime.Frames | $.VarRef<runtime.Frames> | null {
		return this._fields.frames
	}

	public set frames(value: runtime.Frames | $.VarRef<runtime.Frames> | null) {
		this._fields.frames = value
	}

	// The size of pcs varies depending on requirements:
	// it will be one if the only the first frame was requested,
	// and otherwise it will reflect the depth of the call stack.
	//
	// storage decouples the slice we need (pcs) from the slice we pool.
	// We will always allocate a reasonably large storage, but we'll use
	// only as much of it as we need.
	public get storage(): $.Slice<number> {
		return this._fields.storage
	}

	public set storage(value: $.Slice<number>) {
		this._fields.storage = value
	}

	public _fields: {
		pcs: $.Slice<number>
		frames: runtime.Frames | $.VarRef<runtime.Frames> | null
		storage: $.Slice<number>
	}

	constructor(init?: Partial<{pcs?: $.Slice<number>, frames?: runtime.Frames | $.VarRef<runtime.Frames> | null, storage?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			pcs: init?.pcs ?? (null! as $.Slice<number>),
			frames: init?.frames ?? (null! as runtime.Frames | $.VarRef<runtime.Frames> | null),
			storage: init?.storage ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stack {
		return new Stack(this, true)
	}

	public __goscriptAssign(source: Stack): void {
		const target = this._fields
		const values = source._fields
		target.pcs = values.pcs
		target.frames = values.frames
		target.storage = values.storage
	}

	public Count(): number {
		const st: Stack | $.VarRef<Stack> | null = this;
		return $.sliceLen($.pointerValue<Stack>(st).pcs)
	}

	public Free(): void {
		let st: Stack | $.VarRef<Stack> | null = this;
		const st$: Stack = st == null ? $.pointerTarget<Stack>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<Stack>(st);
		;(st$ as Stack).frames = null;
		;(st$ as Stack).pcs = null
		void (_stackPool !== null && (_stackPool as any).__isVarRef !== true && (_stackPool as any).__goValue === undefined ? ((_stackPool as any) as pool.Pool).Put(__goscriptStatic0(), st) : pool.Pool.prototype.Put.call(_stackPool, __goscriptStatic0(), st))
	}

	public Next(): [runtime.Frame, boolean] {
		const st: Stack | $.VarRef<Stack> | null = this;
		let more: boolean = false
		return runtime.Frames.prototype.Next.call($.pointerValue<runtime.Frames>($.pointerValue<Stack>(st).frames))
	}

	static __typeInfo = $.registerStructType(
		"stacktrace.Stack",
		() => new Stack(),
		() => [$.methodSignature("Count", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Free", [], [], true), $.methodSignature("Next", [], [["_", "runtime.Frame"], ["more", /* @__PURE__ */ $.basicType("bool")]], true)],
		Stack,
		() => [/* @__PURE__ */ $.structField("pcs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")), [0], 0, false, { pkgPath: "go.uber.org/zap/internal/stacktrace" }), /* @__PURE__ */ $.structField("frames", /* @__PURE__ */ $.pointerType("runtime.Frames"), [1], 24, false, { pkgPath: "go.uber.org/zap/internal/stacktrace" }), /* @__PURE__ */ $.structField("storage", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")), [2], 32, false, { pkgPath: "go.uber.org/zap/internal/stacktrace" })]
	)
}

export class Formatter {
	public get b(): buffer2.Buffer | $.VarRef<buffer2.Buffer> | null {
		return this._fields.b
	}

	public set b(value: buffer2.Buffer | $.VarRef<buffer2.Buffer> | null) {
		this._fields.b = value
	}

	public get nonEmpty(): boolean {
		return this._fields.nonEmpty
	}

	public set nonEmpty(value: boolean) {
		this._fields.nonEmpty = value
	}

	public _fields: {
		b: buffer2.Buffer | $.VarRef<buffer2.Buffer> | null
		nonEmpty: boolean
	}

	constructor(init?: Partial<{b?: buffer2.Buffer | $.VarRef<buffer2.Buffer> | null, nonEmpty?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			b: init?.b ?? (null! as buffer2.Buffer | $.VarRef<buffer2.Buffer> | null),
			nonEmpty: init?.nonEmpty ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Formatter {
		return new Formatter(this, true)
	}

	public __goscriptAssign(source: Formatter): void {
		const target = this._fields
		const values = source._fields
		target.b = values.b
		target.nonEmpty = values.nonEmpty
	}

	public FormatFrame(frame: runtime.Frame): void {
		let sf: Formatter | $.VarRef<Formatter> | null = this;
		const sf$: Formatter = sf == null ? $.pointerTarget<Formatter>(sf) : (sf as any).__isVarRef === true ? (sf as any).value : (sf as any).__goValue === undefined ? (sf as any) : $.pointerTarget<Formatter>(sf)
		if ((sf$ as Formatter).nonEmpty) {
			buffer2.Buffer.prototype.AppendByte.call((sf$ as Formatter).b, 10)
		}
		;(sf$ as Formatter).nonEmpty = true
		buffer2.Buffer.prototype.AppendString.call((sf$ as Formatter).b, frame.Function)
		buffer2.Buffer.prototype.AppendByte.call((sf$ as Formatter).b, 10)
		buffer2.Buffer.prototype.AppendByte.call((sf$ as Formatter).b, 9)
		buffer2.Buffer.prototype.AppendString.call((sf$ as Formatter).b, frame.File)
		buffer2.Buffer.prototype.AppendByte.call((sf$ as Formatter).b, 58)
		buffer2.Buffer.prototype.AppendInt.call((sf$ as Formatter).b, $.int64(frame.Line))
	}

	public FormatStack(stack: Stack | $.VarRef<Stack> | null): void {
		const sf: Formatter | $.VarRef<Formatter> | null = this;
		// Note: On the last iteration, frames.Next() returns false, with a valid
		// frame, but we ignore this frame. The last frame is a runtime frame which
		// adds noise, since it's only either runtime.main or runtime.goexit.
		for (let [frame, more] = (stack !== null && (stack as any).__isVarRef !== true && (stack as any).__goValue === undefined ? ((stack as any) as Stack).Next() : Stack.prototype.Next.call(stack)); more; [frame, more] = (stack !== null && (stack as any).__isVarRef !== true && (stack as any).__goValue === undefined ? ((stack as any) as Stack).Next() : Stack.prototype.Next.call(stack))) {
			void (sf !== null && (sf as any).__isVarRef !== true && (sf as any).__goValue === undefined ? ((sf as any) as Formatter).FormatFrame(frame) : Formatter.prototype.FormatFrame.call(sf, frame))
		}
	}

	static __typeInfo = $.registerStructType(
		"stacktrace.Formatter",
		() => new Formatter(),
		() => [$.methodSignature("FormatFrame", [["frame", "runtime.Frame"]], [], true), $.methodSignature("FormatStack", [["stack", /* @__PURE__ */ $.pointerType("stacktrace.Stack")]], [], true)],
		Formatter,
		() => [/* @__PURE__ */ $.structField("b", /* @__PURE__ */ $.pointerType("buffer.Buffer"), [0], 0, false, { pkgPath: "go.uber.org/zap/internal/stacktrace" }), /* @__PURE__ */ $.structField("nonEmpty", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "go.uber.org/zap/internal/stacktrace" })]
	)
}

export const First: Depth = 0

export const Full: Depth = 1

export let _stackPool: pool.Pool | $.VarRef<pool.Pool> | null = await pool.New(__goscriptStatic0(), $.functionValue((): Stack | $.VarRef<Stack> | null => {
	return new Stack({storage: $.makeSlice<number>(64, undefined, "number")})
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("stacktrace.Stack")] } as $.FunctionTypeInfo)))

export function __goscript_set__stackPool(__goscriptValue: pool.Pool | $.VarRef<pool.Pool> | null): void {
	_stackPool = __goscriptValue
}

export async function Capture(skip: number, depth: Depth): globalThis.Promise<Stack | $.VarRef<Stack> | null> {
	let stack: Stack | $.VarRef<Stack> | null = (await (_stackPool !== null && (_stackPool as any).__isVarRef !== true && (_stackPool as any).__goValue === undefined ? ((_stackPool as any) as pool.Pool).Get(__goscriptStatic0()) : pool.Pool.prototype.Get.call(_stackPool, __goscriptStatic0())) as Stack | $.VarRef<Stack> | null)
	let stack$: Stack = stack == null ? $.pointerTarget<Stack>(stack) : (stack as any).__isVarRef === true ? (stack as any).value : (stack as any).__goValue === undefined ? (stack as any) : $.pointerTarget<Stack>(stack)

	switch (depth) {
		case 0:
		{
			;(stack$ as Stack).pcs = $.goSlice((stack$ as Stack).storage, undefined, 1)
			break
		}
		case 1:
		{
			;(stack$ as Stack).pcs = (stack$ as Stack).storage
			break
		}
	}

	// Unlike other "skip"-based APIs, skip=0 identifies runtime.Callers
	// itself. +2 to skip captureStacktrace and runtime.Callers.
	let numFrames = runtime.Callers(skip + 2, (stack$ as Stack).pcs)

	// runtime.Callers truncates the recorded stacktrace if there is no
	// room in the provided slice. For the full stack trace, keep expanding
	// storage until there are fewer frames than there is room.
	if (depth == 1) {
		let pcs: $.Slice<number> = (stack$ as Stack).pcs
		while (numFrames == $.sliceLen(pcs)) {
			pcs = $.makeSlice<number>($.sliceLen(pcs) * 2, undefined, "number")
			numFrames = runtime.Callers(skip + 2, pcs)
		}

		// Discard old storage instead of returning it to the pool.
		// This will adjust the pool size over time if stack traces are
		// consistently very deep.
		;(stack$ as Stack).storage = pcs;
		;(stack$ as Stack).pcs = $.goSlice(pcs, undefined, numFrames)
	} else {
		;(stack$ as Stack).pcs = $.goSlice((stack$ as Stack).pcs, undefined, numFrames)
	}

	;(stack$ as Stack).frames = runtime.CallersFrames((stack$ as Stack).pcs)
	return stack
}

export async function Take(skip: number): globalThis.Promise<string> {
	using __defer = new $.DisposableStack()
	let stack: Stack | $.VarRef<Stack> | null = await Capture(skip + 1, 1)
	__defer.defer(() => { (stack !== null && (stack as any).__isVarRef !== true && (stack as any).__goValue === undefined ? ((stack as any) as Stack).Free() : Stack.prototype.Free.call(stack)) })

	let __goscriptShadow0: buffer2.Buffer | $.VarRef<buffer2.Buffer> | null = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer2.Buffer | $.VarRef<buffer2.Buffer> | null)
	__defer.defer(() => { (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as buffer2.Buffer).Free() : buffer2.Buffer.prototype.Free.call(__goscriptShadow0)) })

	let stackfmt = $.varRef(NewFormatter(__goscriptShadow0))
	stackfmt.value.FormatStack(stack)
	return (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as buffer2.Buffer).String() : buffer2.Buffer.prototype.String.call(__goscriptShadow0))
}

export function NewFormatter(b: buffer2.Buffer | $.VarRef<buffer2.Buffer> | null): Formatter {
	return new Formatter({b: b}, true)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("stacktrace.Stack"), zero: () => null, methods: {Count: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Count(...$.stripGenericTypeArgs(args)), Free: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Free(...$.stripGenericTypeArgs(args)), Next: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Next(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
