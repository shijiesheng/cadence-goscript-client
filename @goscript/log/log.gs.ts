// Generated file based on log.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as internal from "@goscript/log/internal/index.js"

import * as os from "@goscript/os/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/log/internal/index.js"
import "@goscript/os/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"

export class Logger {
	public get outMu(): sync.Mutex {
		return this._fields.outMu
	}

	public set outMu(value: sync.Mutex) {
		this._fields.outMu = value
	}

	public get out(): io.Writer | null {
		return this._fields.out
	}

	public set out(value: io.Writer | null) {
		this._fields.out = value
	}

	public get prefix(): atomic.Pointer<string> {
		return this._fields.prefix
	}

	public set prefix(value: atomic.Pointer<string>) {
		this._fields.prefix = value
	}

	public get flag(): atomic.Int32 {
		return this._fields.flag
	}

	public set flag(value: atomic.Int32) {
		this._fields.flag = value
	}

	public get isDiscard(): atomic.Bool {
		return this._fields.isDiscard
	}

	public set isDiscard(value: atomic.Bool) {
		this._fields.isDiscard = value
	}

	public _fields: {
		outMu: sync.Mutex
		out: io.Writer | null
		prefix: atomic.Pointer<string>
		flag: atomic.Int32
		isDiscard: atomic.Bool
	}

	constructor(init?: Partial<{outMu?: sync.Mutex, out?: io.Writer | null, prefix?: atomic.Pointer<string>, flag?: atomic.Int32, isDiscard?: atomic.Bool}>, __goscriptValue?: boolean) {
		this._fields = {
			outMu: init?.outMu ? $.markAsStructValue($.cloneStructValue(init.outMu)) : $.markAsStructValue(new sync.Mutex()),
			out: init?.out ?? (null! as io.Writer | null),
			prefix: init?.prefix ? $.markAsStructValue($.cloneStructValue(init.prefix)) : $.markAsStructValue(new atomic.Pointer<string>()),
			flag: init?.flag ? $.markAsStructValue($.cloneStructValue(init.flag)) : $.markAsStructValue(new atomic.Int32()),
			isDiscard: init?.isDiscard ? $.markAsStructValue($.cloneStructValue(init.isDiscard)) : $.markAsStructValue(new atomic.Bool())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Logger {
		return new Logger(this, true)
	}

	public __goscriptAssign(source: Logger): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.outMu, values.outMu)
		target.out = $.assignFieldValue(target.out, values.out, "io.Writer")
		$.assignStruct(target.prefix, values.prefix)
		$.assignStruct(target.flag, values.flag)
		$.assignStruct(target.isDiscard, values.isDiscard)
	}

	public async Fatal(v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await Logger.prototype.output.call(l, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return await fmt.Append(b, ...(v ?? []))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		os.Exit(1)
	}

	public async Fatalf(format: string, v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await Logger.prototype.output.call(l, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return await fmt.Appendf(b, format, ...(v ?? []))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		os.Exit(1)
	}

	public async Fatalln(v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await Logger.prototype.output.call(l, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return await fmt.Appendln(b, ...(v ?? []))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		os.Exit(1)
	}

	public Flags(): number {
		const l: Logger | $.VarRef<Logger> | null = this;
		return $.int($.pointerValue<Logger>(l).flag.Load())
	}

	public async Output(calldepth: number, s: string): globalThis.Promise<$.GoError> {
		const l: Logger | $.VarRef<Logger> | null = this;
		return Logger.prototype.output.call(l, 0, calldepth + 1, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
			return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	}

	public async Panic(v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		let s = await fmt.Sprint(...(v ?? []))
		await Logger.prototype.output.call(l, 0, 2, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
			return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		$.panic(s)
	}

	public async Panicf(format: string, v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		let s = await fmt.Sprintf(format, ...(v ?? []))
		await Logger.prototype.output.call(l, 0, 2, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
			return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		$.panic(s)
	}

	public async Panicln(v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		let s = await fmt.Sprintln(...(v ?? []))
		await Logger.prototype.output.call(l, 0, 2, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
			return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
		$.panic(s)
	}

	public Prefix(): string {
		const l: Logger | $.VarRef<Logger> | null = this;
		{
			let p = ($.pointerValue<Logger>(l).prefix.Load() as $.VarRef<string> | null)
			if (p != null) {
				return $.pointerValue<string>(p)
			}
		}
		return ""
	}

	public async Print(v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await Logger.prototype.output.call(l, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return await fmt.Append(b, ...(v ?? []))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	}

	public async Printf(format: string, v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await Logger.prototype.output.call(l, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return await fmt.Appendf(b, format, ...(v ?? []))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	}

	public async Println(v: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await Logger.prototype.output.call(l, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
			return await fmt.Appendln(b, ...(v ?? []))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	}

	public SetFlags(flag: number): void {
		const l: Logger | $.VarRef<Logger> | null = this;
		$.pointerValue<Logger>(l).flag.Store($.int(flag, 32))
	}

	public async SetOutput(w: io.Writer | null): globalThis.Promise<void> {
		let l: Logger | $.VarRef<Logger> | null = this;
		using __defer = new $.DisposableStack()
		const l$: Logger = l == null ? $.pointerTarget<Logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Logger>(l)
		await (l$ as Logger).outMu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as Logger).outMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() });
		;(l$ as Logger).out = w
		void (l$ as Logger).isDiscard.Store($.comparableEqual(w, io.Discard))
	}

	public SetPrefix(__goscriptParam0: string): void {
		const l: Logger | $.VarRef<Logger> | null = this;
		let prefix: $.VarRef<string> = $.varRef(__goscriptParam0)
		$.pointerValue<Logger>(l).prefix.Store(prefix)
	}

	public async Writer(): globalThis.Promise<io.Writer | null> {
		const l: Logger | $.VarRef<Logger> | null = this;
		using __defer = new $.DisposableStack()
		const l$: Logger = l == null ? $.pointerTarget<Logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Logger>(l)
		await (l$ as Logger).outMu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as Logger).outMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		return (l$ as Logger).out
	}

	public async output(pc: number, calldepth: number, appendOutput: ((_p0: $.Slice<number>) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null): globalThis.Promise<$.GoError> {
		const l: Logger | $.VarRef<Logger> | null = this;
		using __defer = new $.DisposableStack()
		const l$: Logger = l == null ? $.pointerTarget<Logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Logger>(l)
		if ((l$ as Logger).isDiscard.Load()) {
			return null
		}

		let now = $.markAsStructValue($.cloneStructValue(time.Now()))

		// Load prefix and flag once so that their value is consistent within
		// this call regardless of any concurrent changes to their value.
		let prefix = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Prefix() : Logger.prototype.Prefix.call(l))
		let flag = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Flags() : Logger.prototype.Flags.call(l))

		let file: string = ""
		let line: number = 0
		if ((flag & (16 | 8)) != 0) {
			if (pc == 0) {
				let ok: boolean = false
				let __goscriptTuple0: any = runtime.Caller(calldepth)
				file = __goscriptTuple0[1]
				line = __goscriptTuple0[2]
				ok = __goscriptTuple0[3]
				if (!ok) {
					file = "???"
					line = 0
				}
			} else {
				let fs: runtime.Frames | $.VarRef<runtime.Frames> | null = runtime.CallersFrames($.arrayToSlice<number>([pc]))
				let [f, ] = runtime.Frames.prototype.Next.call($.pointerValue<runtime.Frames>(fs))
				file = f.File
				if ($.stringEqual(file, "")) {
					file = "???"
				}
				line = f.Line
			}
		}

		let buf = await getBuffer()
		const __goscriptDeferArg0 = buf
		__defer.defer(() => { putBuffer(__goscriptDeferArg0) })
		formatHeader(buf, $.markAsStructValue($.cloneStructValue(now)), prefix, flag, file, line)
		buf!.value = ((__goscriptAwait = appendOutput!($.pointerValue<$.Slice<number>>(buf)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		if (($.sliceLen($.pointerValue<$.Slice<number>>(buf)) == 0) || ($.arrayIndex(($.pointerValue<$.Slice<number>>(buf))!, $.sliceLen($.pointerValue<$.Slice<number>>(buf)) - 1) != 10)) {
			buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(10, 8), $.byteSliceHint)
		}

		await (l$ as Logger).outMu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as Logger).outMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		let [, err] = await $.pointerValue<Exclude<io.Writer, null>>((l$ as Logger).out).Write($.pointerValue<$.Slice<number>>(buf))
		return err
	}

	static __typeInfo = $.registerStructType(
		"log.Logger",
		() => new Logger(),
		() => [$.methodSignature("Fatal", [["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalln", [["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Flags", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Output", [["calldepth", /* @__PURE__ */ $.basicType("int")], ["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("Panic", [["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Panicf", [["format", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Panicln", [["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Prefix", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Print", [["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Println", [["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("SetFlags", [["flag", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("SetOutput", [["w", "io.Writer"]], [], true), $.methodSignature("SetPrefix", [["prefix", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Writer", [], ["io.Writer"], true), $.methodSignature("output", [["pc", /* @__PURE__ */ $.basicType("uintptr")], ["calldepth", /* @__PURE__ */ $.basicType("int")], ["appendOutput", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)]], ["error"], true)],
		Logger,
		() => [/* @__PURE__ */ $.structField("outMu", "sync.Mutex", [0], 0, false, { pkgPath: "log" }), /* @__PURE__ */ $.structField("out", "io.Writer", [1], 8, false, { pkgPath: "log" }), /* @__PURE__ */ $.structField("prefix", "atomic.Pointer", [2], 24, false, { pkgPath: "log" }), /* @__PURE__ */ $.structField("flag", "atomic.Int32", [3], 32, false, { pkgPath: "log" }), /* @__PURE__ */ $.structField("isDiscard", "atomic.Bool", [4], 36, false, { pkgPath: "log" })]
	)
}

export const Ldate: number = 1

export const Ltime: number = 2

export const Lmicroseconds: number = 4

export const Llongfile: number = 8

export const Lshortfile: number = 16

export const LUTC: number = 32

export const Lmsgprefix: number = 64

export const LstdFlags: number = 3

export async function New(out: io.Writer | null, prefix: string, flag: number): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
	let l: Logger | $.VarRef<Logger> | null = new Logger()
	await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).SetOutput(out) : Logger.prototype.SetOutput.call(l, out))
	void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).SetPrefix(prefix) : Logger.prototype.SetPrefix.call(l, prefix))
	void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).SetFlags(flag) : Logger.prototype.SetFlags.call(l, flag))
	return l
}

export let std: Logger | $.VarRef<Logger> | null = await New($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), "", 3)

export function __goscript_set_std(__goscriptValue: Logger | $.VarRef<Logger> | null): void {
	std = __goscriptValue
}

export function Default(): Logger | $.VarRef<Logger> | null {
	return std
}

export function itoa(buf: $.VarRef<$.Slice<number>> | null, i: number, wid: number): void {
	// Assemble decimal in reverse order.
	let b: Uint8Array = $.arrayValue(new Uint8Array(20))
	let bp = 19
	while ((i >= 10) || (wid > 1)) {
		wid--
		let q: number = globalThis.Math.trunc(i / 10)
		b[bp] = $.uint((48 + i) - (q * 10), 8)
		bp--
		i = q
	}
	// i < 10
	b[bp] = $.uint(48 + i, 8)
	buf!.value = $.appendSlice($.pointerValue<$.Slice<number>>(buf), $.goSlice(b, bp, undefined), $.byteSliceHint)
}

export function formatHeader(buf: $.VarRef<$.Slice<number>> | null, t: time.Time, prefix: string, flag: number, file: string, line: number): void {
	if ((flag & 64) == 0) {
		buf!.value = $.appendSlice($.pointerValue<$.Slice<number>>(buf), $.stringToBytes(prefix), $.byteSliceHint)
	}
	if ((flag & ((1 | 2) | 4)) != 0) {
		if ((flag & 32) != 0) {
			t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).UTC())
		}
		if ((flag & 1) != 0) {
			let [year, month, day] = $.markAsStructValue($.cloneStructValue(t)).Date()
			itoa(buf, year, 4)
			buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(47, 8), $.byteSliceHint)
			itoa(buf, $.int(month), 2)
			buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(47, 8), $.byteSliceHint)
			itoa(buf, day, 2)
			buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(32, 8), $.byteSliceHint)
		}
		if ((flag & (2 | 4)) != 0) {
			let [hour, min, sec] = $.markAsStructValue($.cloneStructValue(t)).Clock()
			itoa(buf, hour, 2)
			buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(58, 8), $.byteSliceHint)
			itoa(buf, min, 2)
			buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(58, 8), $.byteSliceHint)
			itoa(buf, sec, 2)
			if ((flag & 4) != 0) {
				buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(46, 8), $.byteSliceHint)
				itoa(buf, globalThis.Math.trunc($.markAsStructValue($.cloneStructValue(t)).Nanosecond() / 1e3), 6)
			}
			buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(32, 8), $.byteSliceHint)
		}
	}
	if ((flag & (16 | 8)) != 0) {
		if ((flag & 16) != 0) {
			let short: string = file
			for (let i = $.stringLen(file) - 1; i > 0; i--) {
				if ($.indexString(file, i) == 47) {
					short = $.sliceStringOrBytes(file, i + 1, undefined)
					break
				}
			}
			file = short
		}
		buf!.value = $.appendSlice($.pointerValue<$.Slice<number>>(buf), $.stringToBytes(file), $.byteSliceHint)
		buf!.value = $.append($.pointerValue<$.Slice<number>>(buf), $.uint(58, 8), $.byteSliceHint)
		itoa(buf, line, -1)
		buf!.value = $.appendSlice($.pointerValue<$.Slice<number>>(buf), $.stringToBytes(": "), $.byteSliceHint)
	}
	if ((flag & 64) != 0) {
		buf!.value = $.appendSlice($.pointerValue<$.Slice<number>>(buf), $.stringToBytes(prefix), $.byteSliceHint)
	}
}

export let bufferPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<$.Slice<number>>(null! as $.Slice<number>), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_bufferPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bufferPool.value, __goscriptValue)
}

export async function getBuffer(): globalThis.Promise<$.VarRef<$.Slice<number>> | null> {
	let p = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await bufferPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	p!.value = $.goSlice(($.pointerValue<$.Slice<number>>(p)), undefined, 0)
	return p
}

export function putBuffer(p: $.VarRef<$.Slice<number>> | null): void {
	// Proper usage of a sync.Pool requires each entry to have approximately
	// the same memory cost. To obtain this property when the stored type
	// contains a variably-sized buffer, we add a hard limit on the maximum buffer
	// to place back in the pool.
	//
	// See https://go.dev/issue/23199
	if ($.cap($.pointerValue<$.Slice<number>>(p)) > 65536) {
		p!.value = null
	}
	bufferPool.value.Put($.interfaceValue(p, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
}

function __goscriptInit0(): void {
	internal.__goscript_set_DefaultOutput($.functionValue(async (pc: number, data: $.Slice<number>): globalThis.Promise<$.GoError> => {
		return await Logger.prototype.output.call(std, pc, 0, $.functionValue((buf: $.Slice<number>): $.Slice<number> => {
			return $.appendSlice(buf, data, $.byteSliceHint)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)))
}

export async function SetOutput(w: io.Writer | null): globalThis.Promise<void> {
	await (std !== null && (std as any).__isVarRef !== true && (std as any).__goValue === undefined ? ((std as any) as Logger).SetOutput(w) : Logger.prototype.SetOutput.call(std, w))
}

export function Flags(): number {
	return (std !== null && (std as any).__isVarRef !== true && (std as any).__goValue === undefined ? ((std as any) as Logger).Flags() : Logger.prototype.Flags.call(std))
}

export function SetFlags(flag: number): void {
	void (std !== null && (std as any).__isVarRef !== true && (std as any).__goValue === undefined ? ((std as any) as Logger).SetFlags(flag) : Logger.prototype.SetFlags.call(std, flag))
}

export function Prefix(): string {
	return (std !== null && (std as any).__isVarRef !== true && (std as any).__goValue === undefined ? ((std as any) as Logger).Prefix() : Logger.prototype.Prefix.call(std))
}

export function SetPrefix(prefix: string): void {
	void (std !== null && (std as any).__isVarRef !== true && (std as any).__goValue === undefined ? ((std as any) as Logger).SetPrefix(prefix) : Logger.prototype.SetPrefix.call(std, prefix))
}

export async function Writer(): globalThis.Promise<io.Writer | null> {
	return (std !== null && (std as any).__isVarRef !== true && (std as any).__goValue === undefined ? ((std as any) as Logger).Writer() : Logger.prototype.Writer.call(std))
}

export async function Print(v: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.output.call(std, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
		return await fmt.Append(b, ...(v ?? []))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
}

export async function Printf(format: string, v: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.output.call(std, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
		return await fmt.Appendf(b, format, ...(v ?? []))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
}

export async function Println(v: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.output.call(std, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
		return await fmt.Appendln(b, ...(v ?? []))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
}

export async function Fatal(v: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.output.call(std, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
		return await fmt.Append(b, ...(v ?? []))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	os.Exit(1)
}

export async function Fatalf(format: string, v: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.output.call(std, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
		return await fmt.Appendf(b, format, ...(v ?? []))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	os.Exit(1)
}

export async function Fatalln(v: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.output.call(std, 0, 2, $.functionValue(async (b: $.Slice<number>): globalThis.Promise<$.Slice<number>> => {
		return await fmt.Appendln(b, ...(v ?? []))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	os.Exit(1)
}

export async function Panic(v: $.Slice<any>): globalThis.Promise<void> {
	let s = await fmt.Sprint(...(v ?? []))
	await Logger.prototype.output.call(std, 0, 2, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
		return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	$.panic(s)
}

export async function Panicf(format: string, v: $.Slice<any>): globalThis.Promise<void> {
	let s = await fmt.Sprintf(format, ...(v ?? []))
	await Logger.prototype.output.call(std, 0, 2, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
		return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	$.panic(s)
}

export async function Panicln(v: $.Slice<any>): globalThis.Promise<void> {
	let s = await fmt.Sprintln(...(v ?? []))
	await Logger.prototype.output.call(std, 0, 2, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
		return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
	$.panic(s)
}

export async function Output(calldepth: number, s: string): globalThis.Promise<$.GoError> {
	return Logger.prototype.output.call(std, 0, calldepth + 1, $.functionValue((b: $.Slice<number>): $.Slice<number> => {
		return $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo)))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptAwait: any

__goscriptInit0()
