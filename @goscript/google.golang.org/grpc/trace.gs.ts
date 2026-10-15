// Generated file based on trace.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.traceEventLog", "grpc.traceLog", "grpc.traceInfo", "grpc.firstLine", "grpc.payload", "grpc.fmtStringer", "grpc.stringer"])

export type traceEventLog = {
	Errorf(format: string, a: $.Slice<any>): void
	Finish(): void
	Printf(format: string, a: $.Slice<any>): void
}

$.registerInterfaceType(
	"grpc.traceEventLog",
	null,
	[$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Finish"), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export type traceLog = {
	Finish(): void
	LazyLog(x: fmt.Stringer | null, sensitive: boolean): void
	LazyPrintf(format: string, a: $.Slice<any>): void
	SetError(): void
	SetMaxEvents(m: number): void
	SetRecycler(f: ((_p0: any) => void) | null): void
	SetTraceInfo(traceID: bigint, spanID: bigint): void
}

$.registerInterfaceType(
	"grpc.traceLog",
	null,
	[$.methodSignature("Finish"), $.methodSignature("LazyLog", [["x", "fmt.Stringer"], ["sensitive", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("LazyPrintf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("SetError"), $.methodSignature("SetMaxEvents", [["m", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("SetRecycler", [["f", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("SetTraceInfo", [["traceID", /* @__PURE__ */ $.basicType("uint64")], ["spanID", /* @__PURE__ */ $.basicType("uint64")]])]
);

export type stringer = string

$.registerNamedValueType(
	"grpc.stringer",
	{String: (receiver: any, ...args: any[]) => (stringer_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*grpc.stringer",
	{String: (receiver: any, ...args: any[]) => (stringer_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class firstLine {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get client(): boolean {
		return this._fields.client
	}

	public set client(value: boolean) {
		this._fields.client = value
	}

	public get remoteAddr(): net.Addr | null {
		return this._fields.remoteAddr
	}

	public set remoteAddr(value: net.Addr | null) {
		this._fields.remoteAddr = value
	}

	public get deadline(): time.Duration {
		return this._fields.deadline
	}

	public set deadline(value: time.Duration) {
		this._fields.deadline = value
	}

	public _fields: {
		mu: sync.Mutex
		client: boolean
		remoteAddr: net.Addr | null
		deadline: time.Duration
	}

	constructor(init?: Partial<{mu?: sync.Mutex, client?: boolean, remoteAddr?: net.Addr | null, deadline?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			client: init?.client ?? (false as boolean),
			remoteAddr: init?.remoteAddr ?? (null! as net.Addr | null),
			deadline: init?.deadline ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): firstLine {
		return new firstLine(this, true)
	}

	public __goscriptAssign(source: firstLine): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.client = values.client
		target.remoteAddr = $.assignFieldValue(target.remoteAddr, values.remoteAddr, "net.Addr")
		target.deadline = values.deadline
	}

	public async SetRemoteAddr(addr: net.Addr | null): globalThis.Promise<void> {
		let f: firstLine | $.VarRef<firstLine> | null = this;
		const f$: firstLine = f == null ? $.pointerTarget<firstLine>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<firstLine>(f)
		await (f$ as firstLine).mu.Lock();
		;(f$ as firstLine).remoteAddr = addr
		void (f$ as firstLine).mu.Unlock()
	}

	public async String(): globalThis.Promise<string> {
		const f: firstLine | $.VarRef<firstLine> | null = this;
		using __defer = new $.DisposableStack()
		const f$: firstLine = f == null ? $.pointerTarget<firstLine>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<firstLine>(f)
		await (f$ as firstLine).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((f$ as firstLine).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let line: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		await io.WriteString($.pointerValueOrNil($.interfaceValue<io.Writer | null>(line, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "RPC: ")
		if ((f$ as firstLine).client) {
			await io.WriteString($.pointerValueOrNil($.interfaceValue<io.Writer | null>(line, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "to")
		} else {
			await io.WriteString($.pointerValueOrNil($.interfaceValue<io.Writer | null>(line, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "from")
		}
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(line, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " %v deadline:", ((f$ as firstLine).remoteAddr as any))
		if ((f$ as firstLine).deadline != 0n) {
			await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(line, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.namedValueInterfaceValue<any>((f$ as firstLine).deadline, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		} else {
			await io.WriteString($.pointerValueOrNil($.interfaceValue<io.Writer | null>(line, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "none")
		}
		return line.value.String()
	}

	static __typeInfo = $.registerStructType(
		"grpc.firstLine",
		() => new firstLine(),
		() => [$.methodSignature("SetRemoteAddr", [["addr", "net.Addr"]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		firstLine,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("client", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("remoteAddr", "net.Addr", [2], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("deadline", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 32, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class traceInfo {
	public get tr(): traceLog | null {
		return this._fields.tr
	}

	public set tr(value: traceLog | null) {
		this._fields.tr = value
	}

	public get firstLine(): firstLine {
		return this._fields.firstLine
	}

	public set firstLine(value: firstLine) {
		this._fields.firstLine = value
	}

	public _fields: {
		tr: traceLog | null
		firstLine: firstLine
	}

	constructor(init?: Partial<{tr?: traceLog | null, firstLine?: firstLine}>, __goscriptValue?: boolean) {
		this._fields = {
			tr: init?.tr ?? (null! as traceLog | null),
			firstLine: init?.firstLine ? init.firstLine.clone() : new firstLine(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): traceInfo {
		return new traceInfo(this, true)
	}

	public __goscriptAssign(source: traceInfo): void {
		const target = this._fields
		const values = source._fields
		target.tr = $.assignFieldValue(target.tr, values.tr, "grpc.traceLog")
		$.assignStruct(target.firstLine, values.firstLine)
	}

	static __typeInfo = $.registerStructType(
		"grpc.traceInfo",
		() => new traceInfo(),
		() => [],
		traceInfo,
		() => [/* @__PURE__ */ $.structField("tr", "grpc.traceLog", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("firstLine", "grpc.firstLine", [1], 16, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class payload {
	public get sent(): boolean {
		return this._fields.sent
	}

	public set sent(value: boolean) {
		this._fields.sent = value
	}

	public get msg(): any {
		return this._fields.msg
	}

	public set msg(value: any) {
		this._fields.msg = value
	}

	public _fields: {
		sent: boolean
		msg: any
	}

	constructor(init?: Partial<{sent?: boolean, msg?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			sent: init?.sent ?? (false as boolean),
			msg: init?.msg ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): payload {
		return new payload(this, true)
	}

	public __goscriptAssign(source: payload): void {
		const target = this._fields
		const values = source._fields
		target.sent = values.sent
		target.msg = $.assignFieldValue(target.msg, values.msg, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async String(): globalThis.Promise<string> {
		const p = this;
		if (p.sent) {
			return truncate(await fmt.Sprintf("sent: %v", p.msg), 100)
		}
		return truncate(await fmt.Sprintf("recv: %v", p.msg), 100)
	}

	static __typeInfo = $.registerStructType(
		"grpc.payload",
		() => new payload(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		payload,
		() => [/* @__PURE__ */ $.structField("sent", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("msg", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class fmtStringer {
	public get format(): string {
		return this._fields.format
	}

	public set format(value: string) {
		this._fields.format = value
	}

	public get a(): $.Slice<any> {
		return this._fields.a
	}

	public set a(value: $.Slice<any>) {
		this._fields.a = value
	}

	public _fields: {
		format: string
		a: $.Slice<any>
	}

	constructor(init?: Partial<{format?: string, a?: $.Slice<any>}>, __goscriptValue?: boolean) {
		this._fields = {
			format: init?.format ?? ("" as string),
			a: init?.a ?? (null! as $.Slice<any>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fmtStringer {
		return new fmtStringer(this, true)
	}

	public __goscriptAssign(source: fmtStringer): void {
		const target = this._fields
		const values = source._fields
		target.format = values.format
		target.a = values.a
	}

	public async String(): globalThis.Promise<string> {
		const f: fmtStringer | $.VarRef<fmtStringer> | null = this;
		const f$: fmtStringer = f == null ? $.pointerTarget<fmtStringer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<fmtStringer>(f)
		return fmt.Sprintf((f$ as fmtStringer).format, ...((f$ as fmtStringer).a ?? []))
	}

	static __typeInfo = $.registerStructType(
		"grpc.fmtStringer",
		() => new fmtStringer(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		fmtStringer,
		() => [/* @__PURE__ */ $.structField("format", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [1], 16, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export const truncateSize: number = 100

export let EnableTracing: boolean = false

export function __goscript_set_EnableTracing(__goscriptValue: boolean): void {
	EnableTracing = __goscriptValue
}

export function methodFamily(m: string): string {
	m = strings.TrimPrefix(m, "/")
	{
		let i: number = strings.Index(m, "/")
		if (i >= 0) {
			m = $.sliceStringOrBytes(m, undefined, i)
		}
	}
	return m
}

export function truncate(x: string, l: number): string {
	if (l > $.stringLen(x)) {
		return x
	}
	return $.sliceStringOrBytes(x, undefined, l)
}

export function stringer_String(s: stringer): string {
	return s
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}
