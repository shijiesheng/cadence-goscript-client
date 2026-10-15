// Generated file based on http2.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as os from "@goscript/os/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as httpguts from "@goscript/golang.org/x/net/http/httpguts/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import type * as __goscript_timer from "./timer.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/os/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/http/httpguts/index.js"
import "./errors.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.streamState", "http2.Setting", "http2.SettingID", "http2.stringWriter", "http2.closeWaiter", "http2.bufferedWriter", "http2.httpError", "http2.connectionStater", "http2.sorter", "http2.incomparable", "http2.synctestGroupInterface"])

export type streamState = number

$.registerNamedValueType(
	"http2.streamState",
	{String: (receiver: any, ...args: any[]) => (streamState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.streamState",
	{String: (receiver: any, ...args: any[]) => (streamState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type SettingID = number

$.registerNamedValueType(
	"http2.SettingID",
	{String: (receiver: any, ...args: any[]) => (SettingID_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.SettingID",
	{String: (receiver: any, ...args: any[]) => (SettingID_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type stringWriter = {
	WriteString(s: string): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"http2.stringWriter",
	null,
	[$.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type closeWaiter = $.Channel<{}> | null

$.registerNamedValueType(
	"http2.closeWaiter",
	{Close: (receiver: any, ...args: any[]) => (closeWaiter_Close as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Wait: (receiver: any, ...args: any[]) => (closeWaiter_Wait as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Close"), $.methodSignature("Wait")]
);

$.registerNamedValueType(
	"*http2.closeWaiter",
	{Close: (receiver: any, ...args: any[]) => (closeWaiter_Close as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Init: (receiver: any, ...args: any[]) => (closeWaiter_Init as any)(receiver, ...$.stripGenericTypeArgs(args)), Wait: (receiver: any, ...args: any[]) => (closeWaiter_Wait as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Close"), $.methodSignature("Init"), $.methodSignature("Wait")]
);

export type connectionStater = {
	ConnectionState(): tls.ConnectionState | globalThis.Promise<tls.ConnectionState>
}

$.registerInterfaceType(
	"http2.connectionStater",
	null,
	[$.methodSignature("ConnectionState", [], ["tls.ConnectionState"])]
);

export type incomparable = ((() => void) | null)[]

$.registerNamedType("http2.incomparable", /* @__PURE__ */ $.arrayType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), 0));

export type synctestGroupInterface = {
	AfterFunc(d: time.Duration, f: (() => void) | null): __goscript_timer.timer | null
	ContextWithTimeout(ctx: context.Context | null, d: time.Duration): [context.Context | null, context.CancelFunc | null]
	Join(): void
	NewTimer(d: time.Duration): __goscript_timer.timer | null
	Now(): time.Time
}

$.registerInterfaceType(
	"http2.synctestGroupInterface",
	null,
	[$.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }]), $.methodSignature("ContextWithTimeout", [["ctx", "context.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)]), $.methodSignature("Join"), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }]), $.methodSignature("Now", [], ["time.Time"])]
);

export class Setting {
	// ID is which setting is being set.
	// See https://httpwg.org/specs/rfc7540.html#SettingFormat
	public get ID(): SettingID {
		return this._fields.ID
	}

	public set ID(value: SettingID) {
		this._fields.ID = value
	}

	// Val is the value.
	public get Val(): number {
		return this._fields.Val
	}

	public set Val(value: number) {
		this._fields.Val = value
	}

	public _fields: {
		ID: SettingID
		Val: number
	}

	constructor(init?: Partial<{ID?: SettingID, Val?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as SettingID),
			Val: init?.Val ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Setting {
		return new Setting(this, true)
	}

	public __goscriptAssign(source: Setting): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.Val = values.Val
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		return fmt.Sprintf("[%v = %d]", $.namedValueInterfaceValue<any>(s.ID, "http2.SettingID", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(s.Val, "uint32"))
	}

	public Valid(): $.GoError {
		const s = this;
		// Limits and error codes from 6.5.2 Defined SETTINGS Parameters
		switch (s.ID) {
			case 2:
			{
				if ((s.Val != 1) && (s.Val != 0)) {
					return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
				}
				break
			}
			case 4:
			{
				if (s.Val > 2147483647) {
					return $.namedValueInterfaceValue<$.GoError>($.uint(3, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
				}
				break
			}
			case 5:
			{
				if ((s.Val < 16384) || (s.Val > 16777215)) {
					return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
				}
				break
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"http2.Setting",
		() => new Setting(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Valid", [], ["error"])],
		Setting,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint16", "http2.SettingID"), [0], 0, true), /* @__PURE__ */ $.structField("Val", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true)]
	)
}

export class bufferedWriter {
	public get _blank0(): incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: incomparable) {
		this._fields._blank0 = value
	}

	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get bw(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.bw
	}

	public set bw(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.bw = value
	}

	public _fields: {
		_blank0: incomparable
		w: io.Writer | null
		bw: bufio.Writer | $.VarRef<bufio.Writer> | null
	}

	constructor(init?: Partial<{_blank0?: incomparable, w?: io.Writer | null, bw?: bufio.Writer | $.VarRef<bufio.Writer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			w: init?.w ?? (null! as io.Writer | null),
			bw: init?.bw ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bufferedWriter {
		return new bufferedWriter(this, true)
	}

	public __goscriptAssign(source: bufferedWriter): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.bw = values.bw
	}

	public Available(): number {
		const w: bufferedWriter | $.VarRef<bufferedWriter> | null = this;
		const w$: bufferedWriter = w == null ? $.pointerTarget<bufferedWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<bufferedWriter>(w)
		if ((w$ as bufferedWriter).bw == null) {
			return 4096
		}
		return bufio.Writer.prototype.Available.call((w$ as bufferedWriter).bw)
	}

	public async Flush(): globalThis.Promise<$.GoError> {
		let w: bufferedWriter | $.VarRef<bufferedWriter> | null = this;
		const w$: bufferedWriter = w == null ? $.pointerTarget<bufferedWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<bufferedWriter>(w)
		let bw: bufio.Writer | $.VarRef<bufio.Writer> | null = (w$ as bufferedWriter).bw
		if (bw == null) {
			return null
		}
		let err = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(bw))
		void (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).Reset(null) : bufio.Writer.prototype.Reset.call(bw, null))
		bufWriterPool.value.Put($.interfaceValue(bw, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")));
		;(w$ as bufferedWriter).bw = null
		return err
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: bufferedWriter | $.VarRef<bufferedWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const w$: bufferedWriter = w == null ? $.pointerTarget<bufferedWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<bufferedWriter>(w)
		if ((w$ as bufferedWriter).bw == null) {
			let bw: bufio.Writer | $.VarRef<bufio.Writer> | null = $.mustTypeAssert<bufio.Writer | $.VarRef<bufio.Writer> | null>(await bufWriterPool.value.Get(), /* @__PURE__ */ $.pointerType("bufio.Writer"))
			void (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).Reset((w$ as bufferedWriter).w) : bufio.Writer.prototype.Reset.call(bw, (w$ as bufferedWriter).w));
			;(w$ as bufferedWriter).bw = bw
		}
		return bufio.Writer.prototype.Write.call((w$ as bufferedWriter).bw, p)
	}

	static __typeInfo = $.registerStructType(
		"http2.bufferedWriter",
		() => new bufferedWriter(),
		() => [$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Flush", [], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		bufferedWriter,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("w", "io.Writer", [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bw", /* @__PURE__ */ $.pointerType("bufio.Writer"), [2], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class httpError {
	public get _blank0(): incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: incomparable) {
		this._fields._blank0 = value
	}

	public get msg(): string {
		return this._fields.msg
	}

	public set msg(value: string) {
		this._fields.msg = value
	}

	public get timeout(): boolean {
		return this._fields.timeout
	}

	public set timeout(value: boolean) {
		this._fields.timeout = value
	}

	public _fields: {
		_blank0: incomparable
		msg: string
		timeout: boolean
	}

	constructor(init?: Partial<{_blank0?: incomparable, msg?: string, timeout?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			msg: init?.msg ?? ("" as string),
			timeout: init?.timeout ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): httpError {
		return new httpError(this, true)
	}

	public __goscriptAssign(source: httpError): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.msg = values.msg
		target.timeout = values.timeout
	}

	public Error(): string {
		const e: httpError | $.VarRef<httpError> | null = this;
		return $.pointerValue<httpError>(e).msg
	}

	public Temporary(): boolean {
		const e: httpError | $.VarRef<httpError> | null = this;
		return true
	}

	public Timeout(): boolean {
		const e: httpError | $.VarRef<httpError> | null = this;
		return $.pointerValue<httpError>(e).timeout
	}

	static __typeInfo = $.registerStructType(
		"http2.httpError",
		() => new httpError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		httpError,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.basicType("string"), [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("timeout", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class sorter {
	public get v(): $.Slice<string> {
		return this._fields.v
	}

	public set v(value: $.Slice<string>) {
		this._fields.v = value
	}

	public _fields: {
		v: $.Slice<string>
	}

	constructor(init?: Partial<{v?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sorter {
		return new sorter(this, true)
	}

	public __goscriptAssign(source: sorter): void {
		const target = this._fields
		const values = source._fields
		target.v = values.v
	}

	public async Keys(h: http.Header): globalThis.Promise<$.Slice<string>> {
		let s: sorter | $.VarRef<sorter> | null = this;
		const s$: sorter = s == null ? $.pointerTarget<sorter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sorter>(s)
		let keys: $.Slice<string> = $.goSlice((s$ as sorter).v, undefined, 0)
		for (const [k, __rangeValue] of h?.entries() ?? []) {
			keys = $.appendOne(keys, k)
		}
		;(s$ as sorter).v = keys
		await sort.Sort($.pointerValueOrNil($.interfaceValue<sort.Interface | null>(s, "*http2.sorter", /* @__PURE__ */ $.pointerType("http2.sorter")))!)
		return keys
	}

	public Len(): number {
		const s: sorter | $.VarRef<sorter> | null = this;
		return $.sliceLen($.pointerValue<sorter>(s).v)
	}

	public Less(i: number, j: number): boolean {
		const s: sorter | $.VarRef<sorter> | null = this;
		const s$: sorter = s == null ? $.pointerTarget<sorter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sorter>(s)
		return $.stringCompare($.arrayIndex((s$ as sorter).v!, i), $.arrayIndex((s$ as sorter).v!, j)) < 0
	}

	public async SortStrings(ss: $.Slice<string>): globalThis.Promise<void> {
		let s: sorter | $.VarRef<sorter> | null = this;
		const s$: sorter = s == null ? $.pointerTarget<sorter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sorter>(s)
		// Our sorter works on s.v, which sorter owns, so
		// stash it away while we sort the user's buffer.
		let save: $.Slice<string> = (s$ as sorter).v;
		;(s$ as sorter).v = ss
		await sort.Sort($.pointerValueOrNil($.interfaceValue<sort.Interface | null>(s, "*http2.sorter", /* @__PURE__ */ $.pointerType("http2.sorter")))!);
		;(s$ as sorter).v = save
	}

	public Swap(i: number, j: number): void {
		let s: sorter | $.VarRef<sorter> | null = this;
		const s$: sorter = s == null ? $.pointerTarget<sorter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sorter>(s)
		let __goscriptAssign0_0: string = $.arrayIndex((s$ as sorter).v!, j)
		let __goscriptAssign0_1: string = $.arrayIndex((s$ as sorter).v!, i)
		$.sliceElems((s$ as sorter).v!)[$.sliceSlot((s$ as sorter).v!, i)] = __goscriptAssign0_0
		$.sliceElems((s$ as sorter).v!)[$.sliceSlot((s$ as sorter).v!, j)] = __goscriptAssign0_1
	}

	static __typeInfo = $.registerStructType(
		"http2.sorter",
		() => new sorter(),
		() => [$.methodSignature("Keys", [["h", "http.Header"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SortStrings", [["ss", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [], true)],
		sorter,
		() => [/* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export const ClientPreface: string = "PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n"

export const initialMaxFrameSize: number = 16384

export const NextProtoTLS: string = "h2"

export const initialHeaderTableSize: number = 4096

export const initialWindowSize: number = 65535

export const defaultMaxReadFrameSize: number = 1048576

export const stateIdle: streamState = 0

export const stateOpen: streamState = 1

export const stateHalfClosedLocal: streamState = 2

export const stateHalfClosedRemote: streamState = 3

export const stateClosed: streamState = 4

export const SettingHeaderTableSize: SettingID = 1

export const SettingEnablePush: SettingID = 2

export const SettingMaxConcurrentStreams: SettingID = 3

export const SettingInitialWindowSize: SettingID = 4

export const SettingMaxFrameSize: SettingID = 5

export const SettingMaxHeaderListSize: SettingID = 6

export const bufWriterPoolBufferSize: number = 4096

export let VerboseLogs: boolean = false

export function __goscript_set_VerboseLogs(__goscriptValue: boolean): void {
	VerboseLogs = __goscriptValue
}

export let logFrameWrites: boolean = false

export function __goscript_set_logFrameWrites(__goscriptValue: boolean): void {
	logFrameWrites = __goscriptValue
}

export let logFrameReads: boolean = false

export function __goscript_set_logFrameReads(__goscriptValue: boolean): void {
	logFrameReads = __goscriptValue
}

export let inTests: boolean = false

export function __goscript_set_inTests(__goscriptValue: boolean): void {
	inTests = __goscriptValue
}

function __goscriptInit0(): void {
	let e = os.Getenv("GODEBUG")
	if (strings.Contains(e, "http2debug=1")) {
		VerboseLogs = true
	}
	if (strings.Contains(e, "http2debug=2")) {
		VerboseLogs = true
		logFrameWrites = true
		logFrameReads = true
	}
}

export let clientPreface: $.Slice<number> = new Uint8Array([80, 82, 73, 32, 42, 32, 72, 84, 84, 80, 47, 50, 46, 48, 13, 10, 13, 10, 83, 77, 13, 10, 13, 10])

export function __goscript_set_clientPreface(__goscriptValue: $.Slice<number>): void {
	clientPreface = __goscriptValue
}

export let stateName: string[] = $.arrayValue(["Idle", "Open", "HalfClosedLocal", "HalfClosedRemote", "Closed"])

export function __goscript_set_stateName(__goscriptValue: string[]): void {
	stateName = __goscriptValue
}

export function streamState_String(st: streamState): string {
	return $.arrayIndex(stateName, st)
}

export let settingName: globalThis.Map<SettingID, string> | null = $.makeMap<SettingID, string>([[1, "HEADER_TABLE_SIZE"], [2, "ENABLE_PUSH"], [3, "MAX_CONCURRENT_STREAMS"], [4, "INITIAL_WINDOW_SIZE"], [5, "MAX_FRAME_SIZE"], [6, "MAX_HEADER_LIST_SIZE"]])

export function __goscript_set_settingName(__goscriptValue: globalThis.Map<SettingID, string> | null): void {
	settingName = __goscriptValue
}

export async function SettingID_String(s: SettingID): globalThis.Promise<string> {
	{
		let [v, ok] = $.mapGet<SettingID, string, string>(settingName, s, "")
		if (ok) {
			return v
		}
	}
	return fmt.Sprintf("UNKNOWN_SETTING_%d", $.basicInterfaceValue($.uint(s, 16), "uint16"))
}

export function validWireHeaderFieldName(v: string): boolean {
	if ($.stringLen(v) == 0) {
		return false
	}
	for (let __goscriptRunes0 = $.stringRunes(v); __goscriptRunes0.next(); ) {
		const r = __goscriptRunes0.rune
		if (!httpguts.IsTokenRune(r)) {
			return false
		}
		if ((65 <= r) && (r <= 90)) {
			return false
		}
	}
	return true
}

export function httpCodeString(code: number): string {
	switch (code) {
		case 200:
		{
			return "200"
			break
		}
		case 404:
		{
			return "404"
			break
		}
	}
	return strconv.Itoa(code)
}

export function closeWaiter_Init(cw: $.VarRef<closeWaiter> | null): void {
	cw!.value = $.makeChannel<{}>(0, {}, "both")
}

export function closeWaiter_Close(cw: closeWaiter): void {
	cw!.close()
}

export async function closeWaiter_Wait(cw: closeWaiter): globalThis.Promise<void> {
	await $.chanRecv(cw)
}

export function newBufferedWriter(w: io.Writer | null): bufferedWriter | $.VarRef<bufferedWriter> | null {
	return new bufferedWriter({w: w})
}

export let bufWriterPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(bufio.NewWriterSize(null, 4096), "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_bufWriterPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bufWriterPool.value, __goscriptValue)
}

export function mustUint31(v: number): number {
	if ((v < 0) || (v > 2147483647)) {
		$.panic("out of range")
	}
	return $.uint(v, 32)
}

export function bodyAllowedForStatus(status: number): boolean {
	switch ((true as boolean)) {
		case (status >= 100) && (status <= 199):
		{
			return false
			break
		}
		case status == 204:
		{
			return false
			break
		}
		case status == 304:
		{
			return false
			break
		}
	}
	return true
}

export let errTimeout: $.GoError = $.interfaceValue<$.GoError>(new httpError({msg: "http2: timeout awaiting response headers", timeout: true}), "*http2.httpError", /* @__PURE__ */ $.pointerType("http2.httpError"))

export function __goscript_set_errTimeout(__goscriptValue: $.GoError): void {
	errTimeout = __goscriptValue
}

export let sorterPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new sorter(), "*http2.sorter", /* @__PURE__ */ $.pointerType("http2.sorter"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_sorterPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(sorterPool.value, __goscriptValue)
}

export function validPseudoPath(v: string): boolean {
	return (($.stringLen(v) > 0) && ($.indexString(v, 0) == 47)) || ($.stringEqual(v, "*"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (SettingID_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint16", "http2.SettingID"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

export { __goscriptInit0 }
