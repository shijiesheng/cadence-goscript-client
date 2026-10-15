// Generated file based on delegator.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"
import "@goscript/bufio/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus/promhttp", ["promhttp.delegator", "promhttp.responseWriterDelegator", "promhttp.closeNotifierDelegator", "promhttp.flusherDelegator", "promhttp.hijackerDelegator", "promhttp.readerFromDelegator", "promhttp.pusherDelegator"])

export type delegator = {
	Header(): http.Header
	Status(): number
	Write(_p0: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	WriteHeader(statusCode: number): void
	Written(): bigint
}

$.registerInterfaceType(
	"promhttp.delegator",
	null,
	[$.methodSignature("Header", [], ["http.Header"]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Write", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteHeader", [["statusCode", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Written", [], [/* @__PURE__ */ $.basicType("int64")])]
);

export class responseWriterDelegator {
	public get ResponseWriter(): http.ResponseWriter | null {
		return this._fields.ResponseWriter
	}

	public set ResponseWriter(value: http.ResponseWriter | null) {
		this._fields.ResponseWriter = value
	}

	public get status(): number {
		return this._fields.status
	}

	public set status(value: number) {
		this._fields.status = value
	}

	public get written(): bigint {
		return this._fields.written
	}

	public set written(value: bigint) {
		this._fields.written = value
	}

	public get wroteHeader(): boolean {
		return this._fields.wroteHeader
	}

	public set wroteHeader(value: boolean) {
		this._fields.wroteHeader = value
	}

	public get observeWriteHeader(): ((_p0: number) => void) | null {
		return this._fields.observeWriteHeader
	}

	public set observeWriteHeader(value: ((_p0: number) => void) | null) {
		this._fields.observeWriteHeader = value
	}

	public _fields: {
		ResponseWriter: http.ResponseWriter | null
		status: number
		written: bigint
		wroteHeader: boolean
		observeWriteHeader: ((_p0: number) => void) | null
	}

	constructor(init?: Partial<{ResponseWriter?: http.ResponseWriter | null, status?: number, written?: bigint, wroteHeader?: boolean, observeWriteHeader?: ((_p0: number) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ResponseWriter: init?.ResponseWriter ?? (null! as http.ResponseWriter | null),
			status: init?.status ?? (0 as number),
			written: init?.written ?? (0n as bigint),
			wroteHeader: init?.wroteHeader ?? (false as boolean),
			observeWriteHeader: init?.observeWriteHeader ?? (null! as ((_p0: number) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): responseWriterDelegator {
		return new responseWriterDelegator(this, true)
	}

	public __goscriptAssign(source: responseWriterDelegator): void {
		const target = this._fields
		const values = source._fields
		target.ResponseWriter = $.assignFieldValue(target.ResponseWriter, values.ResponseWriter, "http.ResponseWriter")
		target.status = values.status
		target.written = values.written
		target.wroteHeader = values.wroteHeader
		target.observeWriteHeader = values.observeWriteHeader
	}

	public Status(): number {
		const r: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null = this;
		return $.pointerValue<responseWriterDelegator>(r).status
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null = this;
		const r$: responseWriterDelegator = r == null ? $.pointerTarget<responseWriterDelegator>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<responseWriterDelegator>(r)
		// If applicable, call WriteHeader here so that observeWriteHeader is
		// handled appropriately.
		if (!(r$ as responseWriterDelegator).wroteHeader) {
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as responseWriterDelegator).WriteHeader(200) : responseWriterDelegator.prototype.WriteHeader.call(r, 200))
		}
		let [n, err] = await $.pointerValue<Exclude<http.ResponseWriter, null>>((r$ as responseWriterDelegator).ResponseWriter).Write(b);
		;(r$ as responseWriterDelegator).written = $.int64Add((r$ as responseWriterDelegator).written, $.int64(n))
		return [n, err]
	}

	public async WriteHeader(code: number): globalThis.Promise<void> {
		let r: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null = this;
		const r$: responseWriterDelegator = r == null ? $.pointerTarget<responseWriterDelegator>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<responseWriterDelegator>(r)
		if (((r$ as responseWriterDelegator).observeWriteHeader != null) && !(r$ as responseWriterDelegator).wroteHeader) {
			// Only call observeWriteHeader for the 1st time. It's a bug if
			// WriteHeader is called more than once, but we want to protect
			// against it here. Note that we still delegate the WriteHeader
			// to the original ResponseWriter to not mask the bug from it.
			void (__goscriptAwait = (r$ as responseWriterDelegator).observeWriteHeader!(code), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(r$ as responseWriterDelegator).status = code;
		;(r$ as responseWriterDelegator).wroteHeader = true
		void (__goscriptAwait = $.pointerValue<Exclude<http.ResponseWriter, null>>((r$ as responseWriterDelegator).ResponseWriter).WriteHeader(code), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Written(): bigint {
		const r: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null = this;
		return $.pointerValue<responseWriterDelegator>(r).written
	}

	public Header(): any {
		return $.pointerValue<Exclude<http.ResponseWriter | null, null>>(this.ResponseWriter).Header()
	}

	static __typeInfo = $.registerStructType(
		"promhttp.responseWriterDelegator",
		() => new responseWriterDelegator(),
		() => [$.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteHeader", [["code", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("Written", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Header", [], ["http.Header"])],
		responseWriterDelegator,
		() => [/* @__PURE__ */ $.structField("ResponseWriter", "http.ResponseWriter", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("status", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp" }), /* @__PURE__ */ $.structField("written", /* @__PURE__ */ $.basicType("int64"), [2], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp" }), /* @__PURE__ */ $.structField("wroteHeader", /* @__PURE__ */ $.basicType("bool"), [3], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp" }), /* @__PURE__ */ $.structField("observeWriteHeader", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), [4], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp" })]
	)
}

export class closeNotifierDelegator {
	public get responseWriterDelegator(): responseWriterDelegator | $.VarRef<responseWriterDelegator> | null {
		return this._fields.responseWriterDelegator
	}

	public set responseWriterDelegator(value: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) {
		this._fields.responseWriterDelegator = value
	}

	public _fields: {
		responseWriterDelegator: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null
	}

	constructor(init?: Partial<{responseWriterDelegator?: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			responseWriterDelegator: init?.responseWriterDelegator ?? (null! as responseWriterDelegator | $.VarRef<responseWriterDelegator> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): closeNotifierDelegator {
		return new closeNotifierDelegator(this, true)
	}

	public __goscriptAssign(source: closeNotifierDelegator): void {
		const target = this._fields
		const values = source._fields
		target.responseWriterDelegator = values.responseWriterDelegator
	}

	public async CloseNotify(): globalThis.Promise<$.Channel<boolean> | null> {
		const d = this;
		//nolint:staticcheck // Ignore SA1019. http.CloseNotifier is deprecated but we keep it here to not break existing users.
		return $.pointerValue<Exclude<http.CloseNotifier, null>>($.mustTypeAssert<http.CloseNotifier | null>($.pointerValue<responseWriterDelegator>(d.responseWriterDelegator).ResponseWriter, "http.CloseNotifier")).CloseNotify()
	}

	public Header(): any {
		return $.pointerValue<any>($.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).ResponseWriter).Header()
	}

	public Status(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Status()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Write(b)
	}

	public async WriteHeader(code: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).WriteHeader(code)
	}

	public Written(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Written()
	}

	static __typeInfo = $.registerStructType(
		"promhttp.closeNotifierDelegator",
		() => new closeNotifierDelegator(),
		() => [$.methodSignature("CloseNotify", [], [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("bool"), "receive")]), $.methodSignature("Header", [], ["http.Header"]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteHeader", [["code", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Written", [], [/* @__PURE__ */ $.basicType("int64")])],
		closeNotifierDelegator,
		() => [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true })]
	)
}

export class flusherDelegator {
	public get responseWriterDelegator(): responseWriterDelegator | $.VarRef<responseWriterDelegator> | null {
		return this._fields.responseWriterDelegator
	}

	public set responseWriterDelegator(value: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) {
		this._fields.responseWriterDelegator = value
	}

	public _fields: {
		responseWriterDelegator: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null
	}

	constructor(init?: Partial<{responseWriterDelegator?: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			responseWriterDelegator: init?.responseWriterDelegator ?? (null! as responseWriterDelegator | $.VarRef<responseWriterDelegator> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): flusherDelegator {
		return new flusherDelegator(this, true)
	}

	public __goscriptAssign(source: flusherDelegator): void {
		const target = this._fields
		const values = source._fields
		target.responseWriterDelegator = values.responseWriterDelegator
	}

	public async Flush(): globalThis.Promise<void> {
		const d = $.varRef(this);
		// If applicable, call WriteHeader here so that observeWriteHeader is
		// handled appropriately.
		if (!$.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).wroteHeader) {
			await $.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).WriteHeader(200)
		}
		void (__goscriptAwait = $.pointerValue<Exclude<http.Flusher, null>>($.mustTypeAssert<http.Flusher | null>($.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).ResponseWriter, "http.Flusher")).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Header(): any {
		return $.pointerValue<any>($.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).ResponseWriter).Header()
	}

	public Status(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Status()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Write(b)
	}

	public async WriteHeader(code: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).WriteHeader(code)
	}

	public Written(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Written()
	}

	static __typeInfo = $.registerStructType(
		"promhttp.flusherDelegator",
		() => new flusherDelegator(),
		() => [$.methodSignature("Flush"), $.methodSignature("Header", [], ["http.Header"]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteHeader", [["code", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Written", [], [/* @__PURE__ */ $.basicType("int64")])],
		flusherDelegator,
		() => [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true })]
	)
}

export class hijackerDelegator {
	public get responseWriterDelegator(): responseWriterDelegator | $.VarRef<responseWriterDelegator> | null {
		return this._fields.responseWriterDelegator
	}

	public set responseWriterDelegator(value: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) {
		this._fields.responseWriterDelegator = value
	}

	public _fields: {
		responseWriterDelegator: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null
	}

	constructor(init?: Partial<{responseWriterDelegator?: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			responseWriterDelegator: init?.responseWriterDelegator ?? (null! as responseWriterDelegator | $.VarRef<responseWriterDelegator> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hijackerDelegator {
		return new hijackerDelegator(this, true)
	}

	public __goscriptAssign(source: hijackerDelegator): void {
		const target = this._fields
		const values = source._fields
		target.responseWriterDelegator = values.responseWriterDelegator
	}

	public async Hijack(): globalThis.Promise<[net.Conn | null, bufio.ReadWriter | $.VarRef<bufio.ReadWriter> | null, $.GoError]> {
		const d = this;
		return $.pointerValue<Exclude<http.Hijacker, null>>($.mustTypeAssert<http.Hijacker | null>($.pointerValue<responseWriterDelegator>(d.responseWriterDelegator).ResponseWriter, "http.Hijacker")).Hijack()
	}

	public Header(): any {
		return $.pointerValue<any>($.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).ResponseWriter).Header()
	}

	public Status(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Status()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Write(b)
	}

	public async WriteHeader(code: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).WriteHeader(code)
	}

	public Written(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Written()
	}

	static __typeInfo = $.registerStructType(
		"promhttp.hijackerDelegator",
		() => new hijackerDelegator(),
		() => [$.methodSignature("Hijack", [], ["net.Conn", /* @__PURE__ */ $.pointerType("bufio.ReadWriter"), "error"]), $.methodSignature("Header", [], ["http.Header"]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteHeader", [["code", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Written", [], [/* @__PURE__ */ $.basicType("int64")])],
		hijackerDelegator,
		() => [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true })]
	)
}

export class readerFromDelegator {
	public get responseWriterDelegator(): responseWriterDelegator | $.VarRef<responseWriterDelegator> | null {
		return this._fields.responseWriterDelegator
	}

	public set responseWriterDelegator(value: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) {
		this._fields.responseWriterDelegator = value
	}

	public _fields: {
		responseWriterDelegator: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null
	}

	constructor(init?: Partial<{responseWriterDelegator?: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			responseWriterDelegator: init?.responseWriterDelegator ?? (null! as responseWriterDelegator | $.VarRef<responseWriterDelegator> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): readerFromDelegator {
		return new readerFromDelegator(this, true)
	}

	public __goscriptAssign(source: readerFromDelegator): void {
		const target = this._fields
		const values = source._fields
		target.responseWriterDelegator = values.responseWriterDelegator
	}

	public async ReadFrom(re: io.Reader | null): globalThis.Promise<[bigint, $.GoError]> {
		let d = $.varRef(this);
		// If applicable, call WriteHeader here so that observeWriteHeader is
		// handled appropriately.
		if (!$.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).wroteHeader) {
			await $.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).WriteHeader(200)
		}
		let [n, err] = await $.pointerValue<Exclude<io.ReaderFrom, null>>($.mustTypeAssert<io.ReaderFrom | null>($.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).ResponseWriter, "io.ReaderFrom")).ReadFrom($.pointerValueOrNil(re)!)
		$.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).written = $.int64Add($.pointerValue<responseWriterDelegator>(d.value.responseWriterDelegator).written, n)
		return [n, err]
	}

	public Header(): any {
		return $.pointerValue<any>($.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).ResponseWriter).Header()
	}

	public Status(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Status()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Write(b)
	}

	public async WriteHeader(code: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).WriteHeader(code)
	}

	public Written(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Written()
	}

	static __typeInfo = $.registerStructType(
		"promhttp.readerFromDelegator",
		() => new readerFromDelegator(),
		() => [$.methodSignature("ReadFrom", [["re", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("Header", [], ["http.Header"]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteHeader", [["code", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Written", [], [/* @__PURE__ */ $.basicType("int64")])],
		readerFromDelegator,
		() => [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true })]
	)
}

export class pusherDelegator {
	public get responseWriterDelegator(): responseWriterDelegator | $.VarRef<responseWriterDelegator> | null {
		return this._fields.responseWriterDelegator
	}

	public set responseWriterDelegator(value: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) {
		this._fields.responseWriterDelegator = value
	}

	public _fields: {
		responseWriterDelegator: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null
	}

	constructor(init?: Partial<{responseWriterDelegator?: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			responseWriterDelegator: init?.responseWriterDelegator ?? (null! as responseWriterDelegator | $.VarRef<responseWriterDelegator> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pusherDelegator {
		return new pusherDelegator(this, true)
	}

	public __goscriptAssign(source: pusherDelegator): void {
		const target = this._fields
		const values = source._fields
		target.responseWriterDelegator = values.responseWriterDelegator
	}

	public async Push(target: string, opts: http.PushOptions | $.VarRef<http.PushOptions> | null): globalThis.Promise<$.GoError> {
		const d = this;
		return $.pointerValue<Exclude<http.Pusher, null>>($.mustTypeAssert<http.Pusher | null>($.pointerValue<responseWriterDelegator>(d.responseWriterDelegator).ResponseWriter, "http.Pusher")).Push(target, opts)
	}

	public Header(): any {
		return $.pointerValue<any>($.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).ResponseWriter).Header()
	}

	public Status(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Status()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Write(b)
	}

	public async WriteHeader(code: any): globalThis.Promise<any> {
		return await $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).WriteHeader(code)
	}

	public Written(): any {
		return $.pointerValue<responseWriterDelegator>(this.responseWriterDelegator).Written()
	}

	static __typeInfo = $.registerStructType(
		"promhttp.pusherDelegator",
		() => new pusherDelegator(),
		() => [$.methodSignature("Push", [["target", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.pointerType("http.PushOptions")]], ["error"]), $.methodSignature("Header", [], ["http.Header"]), $.methodSignature("Status", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteHeader", [["code", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Written", [], [/* @__PURE__ */ $.basicType("int64")])],
		pusherDelegator,
		() => [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true })]
	)
}

export const closeNotifier: number = 1

export const flusher: number = 2

export const hijacker: number = 4

export const readerFrom: number = 8

export const pusher: number = 16

export let pickDelegator: $.Slice<((_p0: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) => delegator | null | globalThis.Promise<delegator | null>) | null> = $.makeSlice<((_p0: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) => delegator | null | globalThis.Promise<delegator | null>) | null>(32)

export function __goscript_set_pickDelegator(__goscriptValue: $.Slice<((_p0: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null) => delegator | null | globalThis.Promise<delegator | null>) | null>): void {
	pickDelegator = __goscriptValue
}

function __goscriptInit0(): void {
	// TODO(beorn7): Code generation would help here.
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 0)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>(d, "*promhttp.responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 2 + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 4)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator")
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 4 + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Hijacker; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 4 + 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Hijacker; http.Flusher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (4 + 2) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Hijacker; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 8)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator")
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 8 + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; io.ReaderFrom; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 8 + 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; io.ReaderFrom; http.Flusher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (8 + 2) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; io.ReaderFrom; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 8 + 4)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; io.ReaderFrom; http.Hijacker}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (8 + 4) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; io.ReaderFrom; http.Hijacker; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (8 + 4) + 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; io.ReaderFrom; http.Hijacker; http.Flusher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, ((8 + 4) + 2) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; io.ReaderFrom; http.Hijacker; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 16)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator")
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 16 + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 16 + 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; http.Flusher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (16 + 2) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 16 + 4)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; http.Hijacker}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (16 + 4) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; http.Hijacker; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (16 + 4) + 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; http.Hijacker; http.Flusher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, ((16 + 4) + 2) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; http.Hijacker; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, 16 + 8)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (16 + 8) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (16 + 8) + 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom; http.Flusher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, ((16 + 8) + 2) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (16 + 8) + 4)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom; http.Hijacker}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, ((16 + 8) + 4) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom; http.Hijacker; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [4], 56, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, ((16 + 8) + 4) + 2)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [4], 56, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom; http.Hijacker; http.Flusher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [4], 56, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
	$.sliceElems(pickDelegator!)[$.sliceSlot(pickDelegator!, (((16 + 8) + 4) + 2) + 1)] = $.functionValue((d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null): delegator | null => {
		return $.interfaceValue<delegator | null>($.anonymousStructValue({responseWriterDelegator: d, Pusher: $.interfaceValue<http.Pusher | null>(new pusherDelegator({responseWriterDelegator: d}, true), "promhttp.pusherDelegator", "promhttp.pusherDelegator"), ReaderFrom: $.interfaceValue<io.ReaderFrom | null>(new readerFromDelegator({responseWriterDelegator: d}, true), "promhttp.readerFromDelegator", "promhttp.readerFromDelegator"), Hijacker: $.interfaceValue<http.Hijacker | null>(new hijackerDelegator({responseWriterDelegator: d}, true), "promhttp.hijackerDelegator", "promhttp.hijackerDelegator"), Flusher: $.interfaceValue<http.Flusher | null>(new flusherDelegator({responseWriterDelegator: d}, true), "promhttp.flusherDelegator", "promhttp.flusherDelegator"), CloseNotifier: $.interfaceValue<http.CloseNotifier | null>(new closeNotifierDelegator({responseWriterDelegator: d}, true), "promhttp.closeNotifierDelegator", "promhttp.closeNotifierDelegator")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [4], 56, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [5], 72, true, { anonymous: true })] }), "struct{*promhttp.responseWriterDelegator; http.Pusher; io.ReaderFrom; http.Hijacker; http.Flusher; http.CloseNotifier}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("responseWriterDelegator", /* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp", anonymous: true }), /* @__PURE__ */ $.structField("Pusher", "http.Pusher", [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("ReaderFrom", "io.ReaderFrom", [2], 24, true, { anonymous: true }), /* @__PURE__ */ $.structField("Hijacker", "http.Hijacker", [3], 40, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flusher", "http.Flusher", [4], 56, true, { anonymous: true }), /* @__PURE__ */ $.structField("CloseNotifier", "http.CloseNotifier", [5], 72, true, { anonymous: true })] })
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.responseWriterDelegator")], results: ["promhttp.delegator"] } as $.FunctionTypeInfo))
}

export async function newDelegator(w: http.ResponseWriter | null, observeWriteHeaderFunc: ((_p0: number) => void) | null): globalThis.Promise<delegator | null> {
	let d: responseWriterDelegator | $.VarRef<responseWriterDelegator> | null = new responseWriterDelegator({ResponseWriter: w, observeWriteHeader: observeWriteHeaderFunc})

	let id = 0
	//nolint:staticcheck // Ignore SA1019. http.CloseNotifier is deprecated but we keep it here to not break existing users.
	{
		let [, ok] = $.typeAssertTuple<http.CloseNotifier | null>(w, "http.CloseNotifier")
		if (ok) {
			id = id + (1)
		}
	}
	{
		let [, ok] = $.typeAssertTuple<http.Flusher | null>(w, "http.Flusher")
		if (ok) {
			id = id + (2)
		}
	}
	{
		let [, ok] = $.typeAssertTuple<http.Hijacker | null>(w, "http.Hijacker")
		if (ok) {
			id = id + (4)
		}
	}
	{
		let [, ok] = $.typeAssertTuple<io.ReaderFrom | null>(w, "io.ReaderFrom")
		if (ok) {
			id = id + (8)
		}
	}
	{
		let [, ok] = $.typeAssertTuple<http.Pusher | null>(w, "http.Pusher")
		if (ok) {
			id = id + (16)
		}
	}

	return $.arrayIndex(pickDelegator!, id)!(d)
}

var __goscriptAwait: any

export { __goscriptInit0 }
