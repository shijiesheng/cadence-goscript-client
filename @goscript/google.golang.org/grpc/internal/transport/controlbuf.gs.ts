// Generated file based on controlbuf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as http2 from "@goscript/golang.org/x/net/http2/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/internal/grpclog/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as status2 from "@goscript/google.golang.org/grpc/status/index.js"

import type * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as status3 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_bdp_estimator from "./bdp_estimator.gs.ts"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_flowcontrol from "./flowcontrol.gs.ts"

import * as __goscript_http_util from "./http_util.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/golang.org/x/net/http2/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/google.golang.org/grpc/internal/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./bdp_estimator.gs.ts"
import "./defaults.gs.ts"
import "./flowcontrol.gs.ts"
import "./http_util.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.itemNode", "transport.itemList", "transport.cbItem", "transport.registerStream", "transport.headerFrame", "transport.cleanupStream", "transport.earlyAbortStream", "transport.dataFrame", "transport.incomingWindowUpdate", "transport.outgoingWindowUpdate", "transport.incomingSettings", "transport.outgoingSettings", "transport.incomingGoAway", "transport.goAway", "transport.ping", "transport.outFlowControlSizeRequest", "transport.closeConnection", "transport.outStreamState", "transport.outStream", "transport.outStreamList", "transport.controlBuffer", "transport.side", "transport.loopyWriter"])

export type cbItem = {
	isTransportResponseFrame(): boolean
}

$.registerInterfaceType(
	"transport.cbItem",
	null,
	[$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type outStreamState = number

export type side = number

export class itemNode {
	public get it(): any {
		return this._fields.it
	}

	public set it(value: any) {
		this._fields.it = value
	}

	public get next(): itemNode | $.VarRef<itemNode> | null {
		return this._fields.next
	}

	public set next(value: itemNode | $.VarRef<itemNode> | null) {
		this._fields.next = value
	}

	public _fields: {
		it: any
		next: itemNode | $.VarRef<itemNode> | null
	}

	constructor(init?: Partial<{it?: any, next?: itemNode | $.VarRef<itemNode> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			it: init?.it ?? (null! as any),
			next: init?.next ?? (null! as itemNode | $.VarRef<itemNode> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): itemNode {
		return new itemNode(this, true)
	}

	public __goscriptAssign(source: itemNode): void {
		const target = this._fields
		const values = source._fields
		target.it = $.assignFieldValue(target.it, values.it, { kind: $.TypeKind.Interface, methods: [] })
		target.next = values.next
	}

	static __typeInfo = $.registerStructType(
		"transport.itemNode",
		() => new itemNode(),
		() => [],
		itemNode,
		() => [/* @__PURE__ */ $.structField("it", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("transport.itemNode"), [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class itemList {
	public get head(): itemNode | $.VarRef<itemNode> | null {
		return this._fields.head
	}

	public set head(value: itemNode | $.VarRef<itemNode> | null) {
		this._fields.head = value
	}

	public get tail(): itemNode | $.VarRef<itemNode> | null {
		return this._fields.tail
	}

	public set tail(value: itemNode | $.VarRef<itemNode> | null) {
		this._fields.tail = value
	}

	public _fields: {
		head: itemNode | $.VarRef<itemNode> | null
		tail: itemNode | $.VarRef<itemNode> | null
	}

	constructor(init?: Partial<{head?: itemNode | $.VarRef<itemNode> | null, tail?: itemNode | $.VarRef<itemNode> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			head: init?.head ?? (null! as itemNode | $.VarRef<itemNode> | null),
			tail: init?.tail ?? (null! as itemNode | $.VarRef<itemNode> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): itemList {
		return new itemList(this, true)
	}

	public __goscriptAssign(source: itemList): void {
		const target = this._fields
		const values = source._fields
		target.head = values.head
		target.tail = values.tail
	}

	public dequeue(): any {
		let il: itemList | $.VarRef<itemList> | null = this;
		const il$: itemList = il == null ? $.pointerTarget<itemList>(il) : (il as any).__isVarRef === true ? (il as any).value : (il as any).__goValue === undefined ? (il as any) : $.pointerTarget<itemList>(il)
		if ((il$ as itemList).head == null) {
			return null
		}
		let i = $.pointerValue<itemNode>((il$ as itemList).head).it;
		;(il$ as itemList).head = $.pointerValue<itemNode>((il$ as itemList).head).next
		if ((il$ as itemList).head == null) {
			;(il$ as itemList).tail = null
		}
		return i
	}

	public dequeueAll(): itemNode | $.VarRef<itemNode> | null {
		let il: itemList | $.VarRef<itemList> | null = this;
		const il$: itemList = il == null ? $.pointerTarget<itemList>(il) : (il as any).__isVarRef === true ? (il as any).value : (il as any).__goValue === undefined ? (il as any) : $.pointerTarget<itemList>(il)
		let h: itemNode | $.VarRef<itemNode> | null = (il$ as itemList).head
		let __goscriptAssign0_0: itemNode | $.VarRef<itemNode> | null = null
		let __goscriptAssign0_1: itemNode | $.VarRef<itemNode> | null = null;
		;(il$ as itemList).head = __goscriptAssign0_0;
		;(il$ as itemList).tail = __goscriptAssign0_1
		return h
	}

	public enqueue(i: any): void {
		let il: itemList | $.VarRef<itemList> | null = this;
		const il$: itemList = il == null ? $.pointerTarget<itemList>(il) : (il as any).__isVarRef === true ? (il as any).value : (il as any).__goValue === undefined ? (il as any) : $.pointerTarget<itemList>(il)
		let n: itemNode | $.VarRef<itemNode> | null = new itemNode({it: i})
		if ((il$ as itemList).tail == null) {
			let __goscriptAssign1_0: itemNode | $.VarRef<itemNode> | null = n
			let __goscriptAssign1_1: itemNode | $.VarRef<itemNode> | null = n;
			;(il$ as itemList).head = __goscriptAssign1_0;
			;(il$ as itemList).tail = __goscriptAssign1_1
			return
		}
		$.pointerValue<itemNode>((il$ as itemList).tail).next = n;
		;(il$ as itemList).tail = n
	}

	public isEmpty(): boolean {
		const il: itemList | $.VarRef<itemList> | null = this;
		return $.pointerValue<itemList>(il).head == null
	}

	public peek(): any {
		const il: itemList | $.VarRef<itemList> | null = this;
		return $.pointerValue<itemNode>($.pointerValue<itemList>(il).head).it
	}

	static __typeInfo = $.registerStructType(
		"transport.itemList",
		() => new itemList(),
		() => [$.methodSignature("dequeue", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("dequeueAll", [], [/* @__PURE__ */ $.pointerType("transport.itemNode")], true), $.methodSignature("enqueue", [["i", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("isEmpty", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("peek", [], [{ kind: $.TypeKind.Interface, methods: [] }], true)],
		itemList,
		() => [/* @__PURE__ */ $.structField("head", /* @__PURE__ */ $.pointerType("transport.itemNode"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("tail", /* @__PURE__ */ $.pointerType("transport.itemNode"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class registerStream {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get wq(): __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null {
		return this._fields.wq
	}

	public set wq(value: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null) {
		this._fields.wq = value
	}

	public _fields: {
		streamID: number
		wq: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null
	}

	constructor(init?: Partial<{streamID?: number, wq?: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			wq: init?.wq ?? (null! as __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): registerStream {
		return new registerStream(this, true)
	}

	public __goscriptAssign(source: registerStream): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.wq = values.wq
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.registerStream",
		() => new registerStream(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		registerStream,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("wq", /* @__PURE__ */ $.pointerType("transport.writeQuota"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class headerFrame {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get hf(): $.Slice<hpack.HeaderField> {
		return this._fields.hf
	}

	public set hf(value: $.Slice<hpack.HeaderField>) {
		this._fields.hf = value
	}

	public get endStream(): boolean {
		return this._fields.endStream
	}

	public set endStream(value: boolean) {
		this._fields.endStream = value
	}

	public get initStream(): ((_p0: number) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.initStream
	}

	public set initStream(value: ((_p0: number) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.initStream = value
	}

	public get onWrite(): (() => void) | null {
		return this._fields.onWrite
	}

	public set onWrite(value: (() => void) | null) {
		this._fields.onWrite = value
	}

	public get wq(): __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null {
		return this._fields.wq
	}

	public set wq(value: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null) {
		this._fields.wq = value
	}

	public get cleanup(): cleanupStream | $.VarRef<cleanupStream> | null {
		return this._fields.cleanup
	}

	public set cleanup(value: cleanupStream | $.VarRef<cleanupStream> | null) {
		this._fields.cleanup = value
	}

	public get onOrphaned(): ((_p0: $.GoError) => void) | null {
		return this._fields.onOrphaned
	}

	public set onOrphaned(value: ((_p0: $.GoError) => void) | null) {
		this._fields.onOrphaned = value
	}

	public _fields: {
		streamID: number
		hf: $.Slice<hpack.HeaderField>
		endStream: boolean
		initStream: ((_p0: number) => $.GoError | globalThis.Promise<$.GoError>) | null
		onWrite: (() => void) | null
		wq: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null
		cleanup: cleanupStream | $.VarRef<cleanupStream> | null
		onOrphaned: ((_p0: $.GoError) => void) | null
	}

	constructor(init?: Partial<{streamID?: number, hf?: $.Slice<hpack.HeaderField>, endStream?: boolean, initStream?: ((_p0: number) => $.GoError | globalThis.Promise<$.GoError>) | null, onWrite?: (() => void) | null, wq?: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null, cleanup?: cleanupStream | $.VarRef<cleanupStream> | null, onOrphaned?: ((_p0: $.GoError) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			hf: init?.hf ?? (null! as $.Slice<hpack.HeaderField>),
			endStream: init?.endStream ?? (false as boolean),
			initStream: init?.initStream ?? (null! as ((_p0: number) => $.GoError | globalThis.Promise<$.GoError>) | null),
			onWrite: init?.onWrite ?? (null! as (() => void) | null),
			wq: init?.wq ?? (null! as __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null),
			cleanup: init?.cleanup ?? (null! as cleanupStream | $.VarRef<cleanupStream> | null),
			onOrphaned: init?.onOrphaned ?? (null! as ((_p0: $.GoError) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headerFrame {
		return new headerFrame(this, true)
	}

	public __goscriptAssign(source: headerFrame): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.hf = values.hf
		target.endStream = values.endStream
		target.initStream = values.initStream
		target.onWrite = values.onWrite
		target.wq = values.wq
		target.cleanup = values.cleanup
		target.onOrphaned = values.onOrphaned
	}

	public isTransportResponseFrame(): boolean {
		const h: headerFrame | $.VarRef<headerFrame> | null = this;
		const h$: headerFrame = h == null ? $.pointerTarget<headerFrame>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<headerFrame>(h)
		return ((h$ as headerFrame).cleanup != null) && $.pointerValue<cleanupStream>((h$ as headerFrame).cleanup).rst
	}

	static __typeInfo = $.registerStructType(
		"transport.headerFrame",
		() => new headerFrame(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		headerFrame,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("hf", /* @__PURE__ */ $.sliceType("hpack.HeaderField"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("endStream", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("initStream", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: ["error"] } as $.FunctionTypeInfo), [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("onWrite", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("wq", /* @__PURE__ */ $.pointerType("transport.writeQuota"), [5], 56, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("cleanup", /* @__PURE__ */ $.pointerType("transport.cleanupStream"), [6], 64, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("onOrphaned", ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo), [7], 72, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class cleanupStream {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get rst(): boolean {
		return this._fields.rst
	}

	public set rst(value: boolean) {
		this._fields.rst = value
	}

	public get rstCode(): http2.ErrCode {
		return this._fields.rstCode
	}

	public set rstCode(value: http2.ErrCode) {
		this._fields.rstCode = value
	}

	public get onWrite(): (() => void) | null {
		return this._fields.onWrite
	}

	public set onWrite(value: (() => void) | null) {
		this._fields.onWrite = value
	}

	public _fields: {
		streamID: number
		rst: boolean
		rstCode: http2.ErrCode
		onWrite: (() => void) | null
	}

	constructor(init?: Partial<{streamID?: number, rst?: boolean, rstCode?: http2.ErrCode, onWrite?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			rst: init?.rst ?? (false as boolean),
			rstCode: init?.rstCode ?? (0 as http2.ErrCode),
			onWrite: init?.onWrite ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cleanupStream {
		return new cleanupStream(this, true)
	}

	public __goscriptAssign(source: cleanupStream): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.rst = values.rst
		target.rstCode = values.rstCode
		target.onWrite = values.onWrite
	}

	public isTransportResponseFrame(): boolean {
		const c: cleanupStream | $.VarRef<cleanupStream> | null = this;
		return $.pointerValue<cleanupStream>(c).rst
	}

	static __typeInfo = $.registerStructType(
		"transport.cleanupStream",
		() => new cleanupStream(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		cleanupStream,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("rst", /* @__PURE__ */ $.basicType("bool"), [1], 4, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("rstCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [2], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("onWrite", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [3], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class earlyAbortStream {
	public get httpStatus(): number {
		return this._fields.httpStatus
	}

	public set httpStatus(value: number) {
		this._fields.httpStatus = value
	}

	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get contentSubtype(): string {
		return this._fields.contentSubtype
	}

	public set contentSubtype(value: string) {
		this._fields.contentSubtype = value
	}

	public get status(): status3.Status | $.VarRef<status3.Status> | null {
		return this._fields.status
	}

	public set status(value: status3.Status | $.VarRef<status3.Status> | null) {
		this._fields.status = value
	}

	public get rst(): boolean {
		return this._fields.rst
	}

	public set rst(value: boolean) {
		this._fields.rst = value
	}

	public _fields: {
		httpStatus: number
		streamID: number
		contentSubtype: string
		status: status3.Status | $.VarRef<status3.Status> | null
		rst: boolean
	}

	constructor(init?: Partial<{httpStatus?: number, streamID?: number, contentSubtype?: string, status?: status3.Status | $.VarRef<status3.Status> | null, rst?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			httpStatus: init?.httpStatus ?? (0 as number),
			streamID: init?.streamID ?? (0 as number),
			contentSubtype: init?.contentSubtype ?? ("" as string),
			status: init?.status ?? (null! as status3.Status | $.VarRef<status3.Status> | null),
			rst: init?.rst ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): earlyAbortStream {
		return new earlyAbortStream(this, true)
	}

	public __goscriptAssign(source: earlyAbortStream): void {
		const target = this._fields
		const values = source._fields
		target.httpStatus = values.httpStatus
		target.streamID = values.streamID
		target.contentSubtype = values.contentSubtype
		target.status = values.status
		target.rst = values.rst
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.earlyAbortStream",
		() => new earlyAbortStream(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		earlyAbortStream,
		() => [/* @__PURE__ */ $.structField("httpStatus", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("contentSubtype", /* @__PURE__ */ $.basicType("string"), [2], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("status", /* @__PURE__ */ $.pointerType("status.Status"), [3], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("rst", /* @__PURE__ */ $.basicType("bool"), [4], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class dataFrame {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get endStream(): boolean {
		return this._fields.endStream
	}

	public set endStream(value: boolean) {
		this._fields.endStream = value
	}

	public get h(): $.Slice<number> {
		return this._fields.h
	}

	public set h(value: $.Slice<number>) {
		this._fields.h = value
	}

	public get reader(): mem.Reader | null {
		return this._fields.reader
	}

	public set reader(value: mem.Reader | null) {
		this._fields.reader = value
	}

	// onEachWrite is called every time
	// a part of data is written out.
	public get onEachWrite(): (() => void) | null {
		return this._fields.onEachWrite
	}

	public set onEachWrite(value: (() => void) | null) {
		this._fields.onEachWrite = value
	}

	public _fields: {
		streamID: number
		endStream: boolean
		h: $.Slice<number>
		reader: mem.Reader | null
		onEachWrite: (() => void) | null
	}

	constructor(init?: Partial<{streamID?: number, endStream?: boolean, h?: $.Slice<number>, reader?: mem.Reader | null, onEachWrite?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			endStream: init?.endStream ?? (false as boolean),
			h: init?.h ?? (null! as $.Slice<number>),
			reader: init?.reader ?? (null! as mem.Reader | null),
			onEachWrite: init?.onEachWrite ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dataFrame {
		return new dataFrame(this, true)
	}

	public __goscriptAssign(source: dataFrame): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.endStream = values.endStream
		target.h = values.h
		target.reader = $.assignFieldValue(target.reader, values.reader, "mem.Reader")
		target.onEachWrite = values.onEachWrite
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.dataFrame",
		() => new dataFrame(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		dataFrame,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("endStream", /* @__PURE__ */ $.basicType("bool"), [1], 4, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("reader", "mem.Reader", [3], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("onEachWrite", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class incomingWindowUpdate {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get increment(): number {
		return this._fields.increment
	}

	public set increment(value: number) {
		this._fields.increment = value
	}

	public _fields: {
		streamID: number
		increment: number
	}

	constructor(init?: Partial<{streamID?: number, increment?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			increment: init?.increment ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): incomingWindowUpdate {
		return new incomingWindowUpdate(this, true)
	}

	public __goscriptAssign(source: incomingWindowUpdate): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.increment = values.increment
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.incomingWindowUpdate",
		() => new incomingWindowUpdate(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		incomingWindowUpdate,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("increment", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class outgoingWindowUpdate {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get increment(): number {
		return this._fields.increment
	}

	public set increment(value: number) {
		this._fields.increment = value
	}

	public _fields: {
		streamID: number
		increment: number
	}

	constructor(init?: Partial<{streamID?: number, increment?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			increment: init?.increment ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outgoingWindowUpdate {
		return new outgoingWindowUpdate(this, true)
	}

	public __goscriptAssign(source: outgoingWindowUpdate): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.increment = values.increment
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.outgoingWindowUpdate",
		() => new outgoingWindowUpdate(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		outgoingWindowUpdate,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("increment", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class incomingSettings {
	public get ss(): $.Slice<http2.Setting> {
		return this._fields.ss
	}

	public set ss(value: $.Slice<http2.Setting>) {
		this._fields.ss = value
	}

	public _fields: {
		ss: $.Slice<http2.Setting>
	}

	constructor(init?: Partial<{ss?: $.Slice<http2.Setting>}>, __goscriptValue?: boolean) {
		this._fields = {
			ss: init?.ss ?? (null! as $.Slice<http2.Setting>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): incomingSettings {
		return new incomingSettings(this, true)
	}

	public __goscriptAssign(source: incomingSettings): void {
		const target = this._fields
		const values = source._fields
		target.ss = values.ss
	}

	public isTransportResponseFrame(): boolean {
		return true
	}

	static __typeInfo = $.registerStructType(
		"transport.incomingSettings",
		() => new incomingSettings(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		incomingSettings,
		() => [/* @__PURE__ */ $.structField("ss", /* @__PURE__ */ $.sliceType("http2.Setting"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class outgoingSettings {
	public get ss(): $.Slice<http2.Setting> {
		return this._fields.ss
	}

	public set ss(value: $.Slice<http2.Setting>) {
		this._fields.ss = value
	}

	public _fields: {
		ss: $.Slice<http2.Setting>
	}

	constructor(init?: Partial<{ss?: $.Slice<http2.Setting>}>, __goscriptValue?: boolean) {
		this._fields = {
			ss: init?.ss ?? (null! as $.Slice<http2.Setting>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outgoingSettings {
		return new outgoingSettings(this, true)
	}

	public __goscriptAssign(source: outgoingSettings): void {
		const target = this._fields
		const values = source._fields
		target.ss = values.ss
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.outgoingSettings",
		() => new outgoingSettings(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		outgoingSettings,
		() => [/* @__PURE__ */ $.structField("ss", /* @__PURE__ */ $.sliceType("http2.Setting"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class incomingGoAway {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): incomingGoAway {
		return new incomingGoAway(this, true)
	}

	public __goscriptAssign(source: incomingGoAway): void {
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.incomingGoAway",
		() => new incomingGoAway(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		incomingGoAway,
		() => []
	)
}

export class goAway {
	public get code(): http2.ErrCode {
		return this._fields.code
	}

	public set code(value: http2.ErrCode) {
		this._fields.code = value
	}

	public get debugData(): $.Slice<number> {
		return this._fields.debugData
	}

	public set debugData(value: $.Slice<number>) {
		this._fields.debugData = value
	}

	public get headsUp(): boolean {
		return this._fields.headsUp
	}

	public set headsUp(value: boolean) {
		this._fields.headsUp = value
	}

	public get closeConn(): $.GoError {
		return this._fields.closeConn
	}

	public set closeConn(value: $.GoError) {
		this._fields.closeConn = value
	}

	public _fields: {
		code: http2.ErrCode
		debugData: $.Slice<number>
		headsUp: boolean
		closeConn: $.GoError
	}

	constructor(init?: Partial<{code?: http2.ErrCode, debugData?: $.Slice<number>, headsUp?: boolean, closeConn?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			code: init?.code ?? (0 as http2.ErrCode),
			debugData: init?.debugData ?? (null! as $.Slice<number>),
			headsUp: init?.headsUp ?? (false as boolean),
			closeConn: init?.closeConn ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): goAway {
		return new goAway(this, true)
	}

	public __goscriptAssign(source: goAway): void {
		const target = this._fields
		const values = source._fields
		target.code = values.code
		target.debugData = values.debugData
		target.headsUp = values.headsUp
		target.closeConn = $.assignFieldValue(target.closeConn, values.closeConn, "error")
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.goAway",
		() => new goAway(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		goAway,
		() => [/* @__PURE__ */ $.structField("code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("debugData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("headsUp", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("closeConn", "error", [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class ping {
	public get ack(): boolean {
		return this._fields.ack
	}

	public set ack(value: boolean) {
		this._fields.ack = value
	}

	public get data(): Uint8Array {
		return this._fields.data
	}

	public set data(value: Uint8Array) {
		this._fields.data = value
	}

	public _fields: {
		ack: boolean
		data: Uint8Array
	}

	constructor(init?: Partial<{ack?: boolean, data?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			ack: init?.ack ?? (false as boolean),
			data: init?.data !== undefined ? $.cloneArrayValue(init.data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ping {
		return new ping(this, true)
	}

	public __goscriptAssign(source: ping): void {
		const target = this._fields
		const values = source._fields
		target.ack = values.ack
		target.data = $.assignFieldValue(target.data, values.data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
	}

	public isTransportResponseFrame(): boolean {
		return true
	}

	static __typeInfo = $.registerStructType(
		"transport.ping",
		() => new ping(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		ping,
		() => [/* @__PURE__ */ $.structField("ack", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [1], 1, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class outFlowControlSizeRequest {
	public get resp(): $.Channel<number> | null {
		return this._fields.resp
	}

	public set resp(value: $.Channel<number> | null) {
		this._fields.resp = value
	}

	public _fields: {
		resp: $.Channel<number> | null
	}

	constructor(init?: Partial<{resp?: $.Channel<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			resp: init?.resp ?? (null! as $.Channel<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outFlowControlSizeRequest {
		return new outFlowControlSizeRequest(this, true)
	}

	public __goscriptAssign(source: outFlowControlSizeRequest): void {
		const target = this._fields
		const values = source._fields
		target.resp = values.resp
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.outFlowControlSizeRequest",
		() => new outFlowControlSizeRequest(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		outFlowControlSizeRequest,
		() => [/* @__PURE__ */ $.structField("resp", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("uint32"), "both"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class closeConnection {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): closeConnection {
		return new closeConnection(this, true)
	}

	public __goscriptAssign(source: closeConnection): void {
	}

	public isTransportResponseFrame(): boolean {
		return false
	}

	static __typeInfo = $.registerStructType(
		"transport.closeConnection",
		() => new closeConnection(),
		() => [$.methodSignature("isTransportResponseFrame", [], [/* @__PURE__ */ $.basicType("bool")])],
		closeConnection,
		() => []
	)
}

export class outStream {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get state(): outStreamState {
		return this._fields.state
	}

	public set state(value: outStreamState) {
		this._fields.state = value
	}

	public get itl(): itemList | $.VarRef<itemList> | null {
		return this._fields.itl
	}

	public set itl(value: itemList | $.VarRef<itemList> | null) {
		this._fields.itl = value
	}

	public get bytesOutStanding(): number {
		return this._fields.bytesOutStanding
	}

	public set bytesOutStanding(value: number) {
		this._fields.bytesOutStanding = value
	}

	public get wq(): __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null {
		return this._fields.wq
	}

	public set wq(value: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null) {
		this._fields.wq = value
	}

	public get next(): outStream | $.VarRef<outStream> | null {
		return this._fields.next
	}

	public set next(value: outStream | $.VarRef<outStream> | null) {
		this._fields.next = value
	}

	public get prev(): outStream | $.VarRef<outStream> | null {
		return this._fields.prev
	}

	public set prev(value: outStream | $.VarRef<outStream> | null) {
		this._fields.prev = value
	}

	public _fields: {
		id: number
		state: outStreamState
		itl: itemList | $.VarRef<itemList> | null
		bytesOutStanding: number
		wq: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null
		next: outStream | $.VarRef<outStream> | null
		prev: outStream | $.VarRef<outStream> | null
	}

	constructor(init?: Partial<{id?: number, state?: outStreamState, itl?: itemList | $.VarRef<itemList> | null, bytesOutStanding?: number, wq?: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null, next?: outStream | $.VarRef<outStream> | null, prev?: outStream | $.VarRef<outStream> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			state: init?.state ?? (0 as outStreamState),
			itl: init?.itl ?? (null! as itemList | $.VarRef<itemList> | null),
			bytesOutStanding: init?.bytesOutStanding ?? (0 as number),
			wq: init?.wq ?? (null! as __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null),
			next: init?.next ?? (null! as outStream | $.VarRef<outStream> | null),
			prev: init?.prev ?? (null! as outStream | $.VarRef<outStream> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outStream {
		return new outStream(this, true)
	}

	public __goscriptAssign(source: outStream): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.state = values.state
		target.itl = values.itl
		target.bytesOutStanding = values.bytesOutStanding
		target.wq = values.wq
		target.next = values.next
		target.prev = values.prev
	}

	public deleteSelf(): void {
		let s: outStream | $.VarRef<outStream> | null = this;
		const s$: outStream = s == null ? $.pointerTarget<outStream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<outStream>(s)
		if ((s$ as outStream).prev != null) {
			$.pointerValue<outStream>((s$ as outStream).prev).next = (s$ as outStream).next
		}
		if ((s$ as outStream).next != null) {
			$.pointerValue<outStream>((s$ as outStream).next).prev = (s$ as outStream).prev
		}
		let __goscriptAssign2_0: outStream | $.VarRef<outStream> | null = null
		let __goscriptAssign2_1: outStream | $.VarRef<outStream> | null = null;
		;(s$ as outStream).next = __goscriptAssign2_0;
		;(s$ as outStream).prev = __goscriptAssign2_1
	}

	static __typeInfo = $.registerStructType(
		"transport.outStream",
		() => new outStream(),
		() => [$.methodSignature("deleteSelf", [], [], true)],
		outStream,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "transport.outStreamState"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("itl", /* @__PURE__ */ $.pointerType("transport.itemList"), [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bytesOutStanding", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("wq", /* @__PURE__ */ $.pointerType("transport.writeQuota"), [4], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("transport.outStream"), [5], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("prev", /* @__PURE__ */ $.pointerType("transport.outStream"), [6], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class outStreamList {
	// Following are sentinel objects that mark the
	// beginning and end of the list. They do not
	// contain any item lists. All valid objects are
	// inserted in between them.
	// This is needed so that an outStream object can
	// deleteSelf() in O(1) time without knowing which
	// list it belongs to.
	public get head(): outStream | $.VarRef<outStream> | null {
		return this._fields.head
	}

	public set head(value: outStream | $.VarRef<outStream> | null) {
		this._fields.head = value
	}

	public get tail(): outStream | $.VarRef<outStream> | null {
		return this._fields.tail
	}

	public set tail(value: outStream | $.VarRef<outStream> | null) {
		this._fields.tail = value
	}

	public _fields: {
		head: outStream | $.VarRef<outStream> | null
		tail: outStream | $.VarRef<outStream> | null
	}

	constructor(init?: Partial<{head?: outStream | $.VarRef<outStream> | null, tail?: outStream | $.VarRef<outStream> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			head: init?.head ?? (null! as outStream | $.VarRef<outStream> | null),
			tail: init?.tail ?? (null! as outStream | $.VarRef<outStream> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outStreamList {
		return new outStreamList(this, true)
	}

	public __goscriptAssign(source: outStreamList): void {
		const target = this._fields
		const values = source._fields
		target.head = values.head
		target.tail = values.tail
	}

	public dequeue(): outStream | $.VarRef<outStream> | null {
		const l: outStreamList | $.VarRef<outStreamList> | null = this;
		const l$: outStreamList = l == null ? $.pointerTarget<outStreamList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<outStreamList>(l)
		let b: outStream | $.VarRef<outStream> | null = $.pointerValue<outStream>((l$ as outStreamList).head).next
		if ($.pointerEqual(b, (l$ as outStreamList).tail)) {
			return null
		}
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as outStream).deleteSelf() : outStream.prototype.deleteSelf.call(b))
		return b
	}

	public enqueue(s: outStream | $.VarRef<outStream> | null): void {
		let l: outStreamList | $.VarRef<outStreamList> | null = this;
		const l$: outStreamList = l == null ? $.pointerTarget<outStreamList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<outStreamList>(l)
		const s$: outStream = s == null ? $.pointerTarget<outStream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<outStream>(s)
		let e: outStream | $.VarRef<outStream> | null = $.pointerValue<outStream>((l$ as outStreamList).tail).prev
		$.pointerValue<outStream>(e).next = s;
		;(s$ as outStream).prev = e;
		;(s$ as outStream).next = (l$ as outStreamList).tail
		$.pointerValue<outStream>((l$ as outStreamList).tail).prev = s
	}

	static __typeInfo = $.registerStructType(
		"transport.outStreamList",
		() => new outStreamList(),
		() => [$.methodSignature("dequeue", [], [/* @__PURE__ */ $.pointerType("transport.outStream")], true), $.methodSignature("enqueue", [["s", /* @__PURE__ */ $.pointerType("transport.outStream")]], [], true)],
		outStreamList,
		() => [/* @__PURE__ */ $.structField("head", /* @__PURE__ */ $.pointerType("transport.outStream"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("tail", /* @__PURE__ */ $.pointerType("transport.outStream"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class controlBuffer {
	public get wakeupCh(): $.Channel<{}> | null {
		return this._fields.wakeupCh
	}

	public set wakeupCh(value: $.Channel<{}> | null) {
		this._fields.wakeupCh = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	// Mutex guards all the fields below, except trfChan which can be read
	// atomically without holding mu.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get consumerWaiting(): boolean {
		return this._fields.consumerWaiting
	}

	public set consumerWaiting(value: boolean) {
		this._fields.consumerWaiting = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public get list(): itemList | $.VarRef<itemList> | null {
		return this._fields.list
	}

	public set list(value: itemList | $.VarRef<itemList> | null) {
		this._fields.list = value
	}

	// transportResponseFrames counts the number of queued items that represent
	// the response of an action initiated by the peer.  trfChan is created
	// when transportResponseFrames >= maxQueuedTransportResponseFrames and is
	// closed and nilled when transportResponseFrames drops below the
	// threshold.  Both fields are protected by mu.
	public get transportResponseFrames(): number {
		return this._fields.transportResponseFrames
	}

	public set transportResponseFrames(value: number) {
		this._fields.transportResponseFrames = value
	}

	public get trfChan(): atomic.Pointer<$.Channel<{}> | null> {
		return this._fields.trfChan
	}

	public set trfChan(value: atomic.Pointer<$.Channel<{}> | null>) {
		this._fields.trfChan = value
	}

	public _fields: {
		wakeupCh: $.Channel<{}> | null
		done: $.Channel<{}> | null
		mu: sync.Mutex
		consumerWaiting: boolean
		closed: boolean
		list: itemList | $.VarRef<itemList> | null
		transportResponseFrames: number
		trfChan: atomic.Pointer<$.Channel<{}> | null>
	}

	constructor(init?: Partial<{wakeupCh?: $.Channel<{}> | null, done?: $.Channel<{}> | null, mu?: sync.Mutex, consumerWaiting?: boolean, closed?: boolean, list?: itemList | $.VarRef<itemList> | null, transportResponseFrames?: number, trfChan?: atomic.Pointer<$.Channel<{}> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			wakeupCh: init?.wakeupCh ?? (null! as $.Channel<{}> | null),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			consumerWaiting: init?.consumerWaiting ?? (false as boolean),
			closed: init?.closed ?? (false as boolean),
			list: init?.list ?? (null! as itemList | $.VarRef<itemList> | null),
			transportResponseFrames: init?.transportResponseFrames ?? (0 as number),
			trfChan: init?.trfChan ? $.markAsStructValue($.cloneStructValue(init.trfChan)) : $.markAsStructValue(new atomic.Pointer<$.Channel<{}> | null>())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): controlBuffer {
		return new controlBuffer(this, true)
	}

	public __goscriptAssign(source: controlBuffer): void {
		const target = this._fields
		const values = source._fields
		target.wakeupCh = values.wakeupCh
		target.done = values.done
		$.assignStruct(target.mu, values.mu)
		target.consumerWaiting = values.consumerWaiting
		target.closed = values.closed
		target.list = values.list
		target.transportResponseFrames = values.transportResponseFrames
		$.assignStruct(target.trfChan, values.trfChan)
	}

	public async executeAndPut(f: (() => boolean | globalThis.Promise<boolean>) | null, it: cbItem | null): globalThis.Promise<[boolean, $.GoError]> {
		let c: controlBuffer | $.VarRef<controlBuffer> | null = this;
		using __defer = new $.DisposableStack()
		const c$: controlBuffer = c == null ? $.pointerTarget<controlBuffer>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<controlBuffer>(c)
		await (c$ as controlBuffer).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as controlBuffer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if ((c$ as controlBuffer).closed) {
			return [false, $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")]
		}
		if (f != null) {
			if (!(__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return [false, null]
			}
		}
		if (it == null) {
			return [true, null]
		}

		let wakeUp: boolean = false
		if ((c$ as controlBuffer).consumerWaiting) {
			wakeUp = true;
			;(c$ as controlBuffer).consumerWaiting = false
		}
		itemList.prototype.enqueue.call((c$ as controlBuffer).list, (it as any))
		if ((__goscriptAwait = (it !== null && (it as any).__isVarRef !== true && (it as any).__goValue === undefined ? (it as Exclude<cbItem, null>) : $.pointerValue<Exclude<cbItem, null>>(it)).isTransportResponseFrame(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			;(c$ as controlBuffer).transportResponseFrames++
			if ((c$ as controlBuffer).transportResponseFrames == 50) {
				// We are adding the frame that puts us over the threshold; create
				// a throttling channel.
				let ch: $.VarRef<$.Channel<{}> | null> = $.varRef($.makeChannel<{}>(0, {}, "both"))
				void (c$ as controlBuffer).trfChan.Store(ch)
			}
		}
		if (wakeUp) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [boolean, $.GoError]>([
				{
					id: 0,
					isSend: true,
					channel: (c$ as controlBuffer).wakeupCh,
					value: {},
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
		return [true, null]
	}

	public async finish(): globalThis.Promise<void> {
		let c: controlBuffer | $.VarRef<controlBuffer> | null = this;
		using __defer = new $.DisposableStack()
		const c$: controlBuffer = c == null ? $.pointerTarget<controlBuffer>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<controlBuffer>(c)
		await (c$ as controlBuffer).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as controlBuffer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		if ((c$ as controlBuffer).closed) {
			return
		}
		;(c$ as controlBuffer).closed = true
		// There may be headers for streams in the control buffer.
		// These streams need to be cleaned out since the transport
		// is still not aware of these yet.
		for (let head: itemNode | $.VarRef<itemNode> | null = itemList.prototype.dequeueAll.call((c$ as controlBuffer).list); head != null; head = $.pointerValue<itemNode>(head).next) {
			{
				const __goscriptTypeSwitchValue = $.pointerValue<itemNode>(head).it
				switch (true) {
					case $.typeAssert<headerFrame | $.VarRef<headerFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.headerFrame")).ok:
						{
							let v: headerFrame | $.VarRef<headerFrame> | null = $.typeAssert<headerFrame | $.VarRef<headerFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.headerFrame")).value
							if ($.pointerValue<headerFrame>(v).onOrphaned != null) {
								void (__goscriptAwait = $.pointerValue<headerFrame>(v).onOrphaned!($.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							}
						}
						break
					case $.typeAssert<dataFrame | $.VarRef<dataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.dataFrame")).ok:
						{
							let v: dataFrame | $.VarRef<dataFrame> | null = $.typeAssert<dataFrame | $.VarRef<dataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.dataFrame")).value
							;(__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>($.pointerValue<dataFrame>(v).reader).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
				}
			}
		}

		// In case throttle() is currently in flight, it needs to be unblocked.
		// Otherwise, the transport may not close, since the transport is closed by
		// the reader encountering the connection error.
		let ch = ((c$ as controlBuffer).trfChan.Swap(null) as $.VarRef<$.Channel<{}> | null> | null)
		if (ch != null) {
			$.pointerValue<$.Channel<{}> | null>(ch)!.close()
		}
	}

	public async ["get"](block: boolean): globalThis.Promise<[any, $.GoError]> {
		let c: controlBuffer | $.VarRef<controlBuffer> | null = this;
		const c$: controlBuffer = c == null ? $.pointerTarget<controlBuffer>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<controlBuffer>(c)
		while (true) {
			await (c$ as controlBuffer).mu.Lock()
			let [frame, err] = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as controlBuffer).getOnceLocked() : controlBuffer.prototype.getOnceLocked.call(c))
			if (((frame != null) || (err != null)) || !block) {
				// If we read a frame or an error, we can return to the caller. The
				// call to getOnceLocked() returns a nil frame and a nil error if
				// there is nothing to read, and in that case, if the caller asked
				// us not to block, we can return now as well.
				void (c$ as controlBuffer).mu.Unlock()
				return [frame, err]
			}
			;(c$ as controlBuffer).consumerWaiting = true
			void (c$ as controlBuffer).mu.Unlock()

			// Release the lock above and wait to be woken up.
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, [any, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: (c$ as controlBuffer).wakeupCh,
				},
				{
					id: 1,
					isSend: false,
					channel: (c$ as controlBuffer).done,
					onSelected: async (__goscriptSelect1Result) => {
						return [null, errors.New("transport closed by client")]
					}
				}
			], false)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public getOnceLocked(): [any, $.GoError] {
		let c: controlBuffer | $.VarRef<controlBuffer> | null = this;
		const c$: controlBuffer = c == null ? $.pointerTarget<controlBuffer>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<controlBuffer>(c)
		if ((c$ as controlBuffer).closed) {
			return [false, $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")]
		}
		if (itemList.prototype.isEmpty.call((c$ as controlBuffer).list)) {
			return [null, null]
		}
		let h = $.mustTypeAssert<cbItem | null>(itemList.prototype.dequeue.call((c$ as controlBuffer).list), "transport.cbItem")
		if ((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<cbItem, null>) : $.pointerValue<Exclude<cbItem, null>>(h)).isTransportResponseFrame()) {
			if ((c$ as controlBuffer).transportResponseFrames == 50) {
				// We are removing the frame that put us over the
				// threshold; close and clear the throttling channel.
				let ch = ((c$ as controlBuffer).trfChan.Swap(null) as $.VarRef<$.Channel<{}> | null> | null)
				$.pointerValue<$.Channel<{}> | null>(ch)!.close()
			}
			;(c$ as controlBuffer).transportResponseFrames--
		}
		return [(h as any), null]
	}

	public async put(it: cbItem | null): globalThis.Promise<$.GoError> {
		const c: controlBuffer | $.VarRef<controlBuffer> | null = this;
		let [, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as controlBuffer).executeAndPut((null as (() => boolean | globalThis.Promise<boolean>) | null), it) : controlBuffer.prototype.executeAndPut.call(c, (null as (() => boolean | globalThis.Promise<boolean>) | null), it))
		return err
	}

	public async throttle(): globalThis.Promise<void> {
		const c: controlBuffer | $.VarRef<controlBuffer> | null = this;
		const c$: controlBuffer = c == null ? $.pointerTarget<controlBuffer>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<controlBuffer>(c)
		{
			let ch = ((c$ as controlBuffer).trfChan.Load() as $.VarRef<$.Channel<{}> | null> | null)
			if (ch != null) {
				const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: false,
						channel: ($.pointerValue<$.Channel<{}> | null>(ch)),
					},
					{
						id: 1,
						isSend: false,
						channel: (c$ as controlBuffer).done,
					}
				], false)
				if (__goscriptSelect2HasReturn) {
					return __goscriptSelect2Value
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"transport.controlBuffer",
		() => new controlBuffer(),
		() => [$.methodSignature("executeAndPut", [["f", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["it", "transport.cbItem"]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("finish", [], [], true), $.methodSignature("get", [["block", /* @__PURE__ */ $.basicType("bool")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("getOnceLocked", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("put", [["it", "transport.cbItem"]], ["error"], true), $.methodSignature("throttle", [], [], true)],
		controlBuffer,
		() => [/* @__PURE__ */ $.structField("wakeupCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("consumerWaiting", /* @__PURE__ */ $.basicType("bool"), [3], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [4], 25, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("list", /* @__PURE__ */ $.pointerType("transport.itemList"), [5], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("transportResponseFrames", /* @__PURE__ */ $.basicType("int"), [6], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("trfChan", "atomic.Pointer", [7], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class loopyWriter {
	public get side(): side {
		return this._fields.side
	}

	public set side(value: side) {
		this._fields.side = value
	}

	public get cbuf(): controlBuffer | $.VarRef<controlBuffer> | null {
		return this._fields.cbuf
	}

	public set cbuf(value: controlBuffer | $.VarRef<controlBuffer> | null) {
		this._fields.cbuf = value
	}

	public get sendQuota(): number {
		return this._fields.sendQuota
	}

	public set sendQuota(value: number) {
		this._fields.sendQuota = value
	}

	public get oiws(): number {
		return this._fields.oiws
	}

	public set oiws(value: number) {
		this._fields.oiws = value
	}

	// estdStreams is map of all established streams that are not cleaned-up yet.
	// On client-side, this is all streams whose headers were sent out.
	// On server-side, this is all streams whose headers were received.
	public get estdStreams(): globalThis.Map<number, outStream | $.VarRef<outStream> | null> | null {
		return this._fields.estdStreams
	}

	public set estdStreams(value: globalThis.Map<number, outStream | $.VarRef<outStream> | null> | null) {
		this._fields.estdStreams = value
	}

	// activeStreams is a linked-list of all streams that have data to send and some
	// stream-level flow control quota.
	// Each of these streams internally have a list of data items(and perhaps trailers
	// on the server-side) to be sent out.
	public get activeStreams(): outStreamList | $.VarRef<outStreamList> | null {
		return this._fields.activeStreams
	}

	public set activeStreams(value: outStreamList | $.VarRef<outStreamList> | null) {
		this._fields.activeStreams = value
	}

	public get framer(): __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null {
		return this._fields.framer
	}

	public set framer(value: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null) {
		this._fields.framer = value
	}

	public get hBuf(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.hBuf
	}

	public set hBuf(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.hBuf = value
	}

	public get hEnc(): hpack.Encoder | $.VarRef<hpack.Encoder> | null {
		return this._fields.hEnc
	}

	public set hEnc(value: hpack.Encoder | $.VarRef<hpack.Encoder> | null) {
		this._fields.hEnc = value
	}

	public get bdpEst(): __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null {
		return this._fields.bdpEst
	}

	public set bdpEst(value: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null) {
		this._fields.bdpEst = value
	}

	public get draining(): boolean {
		return this._fields.draining
	}

	public set draining(value: boolean) {
		this._fields.draining = value
	}

	public get conn(): net.Conn | null {
		return this._fields.conn
	}

	public set conn(value: net.Conn | null) {
		this._fields.conn = value
	}

	public get logger(): grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null {
		return this._fields.logger
	}

	public set logger(value: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null) {
		this._fields.logger = value
	}

	public get bufferPool(): mem.BufferPool | null {
		return this._fields.bufferPool
	}

	public set bufferPool(value: mem.BufferPool | null) {
		this._fields.bufferPool = value
	}

	// Side-specific handlers
	public get ssGoAwayHandler(): ((_p0: goAway | $.VarRef<goAway> | null) => [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>) | null {
		return this._fields.ssGoAwayHandler
	}

	public set ssGoAwayHandler(value: ((_p0: goAway | $.VarRef<goAway> | null) => [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>) | null) {
		this._fields.ssGoAwayHandler = value
	}

	public _fields: {
		side: side
		cbuf: controlBuffer | $.VarRef<controlBuffer> | null
		sendQuota: number
		oiws: number
		estdStreams: globalThis.Map<number, outStream | $.VarRef<outStream> | null> | null
		activeStreams: outStreamList | $.VarRef<outStreamList> | null
		framer: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null
		hBuf: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		hEnc: hpack.Encoder | $.VarRef<hpack.Encoder> | null
		bdpEst: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null
		draining: boolean
		conn: net.Conn | null
		logger: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null
		bufferPool: mem.BufferPool | null
		ssGoAwayHandler: ((_p0: goAway | $.VarRef<goAway> | null) => [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>) | null
	}

	constructor(init?: Partial<{side?: side, cbuf?: controlBuffer | $.VarRef<controlBuffer> | null, sendQuota?: number, oiws?: number, estdStreams?: globalThis.Map<number, outStream | $.VarRef<outStream> | null> | null, activeStreams?: outStreamList | $.VarRef<outStreamList> | null, framer?: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null, hBuf?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, hEnc?: hpack.Encoder | $.VarRef<hpack.Encoder> | null, bdpEst?: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null, draining?: boolean, conn?: net.Conn | null, logger?: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null, bufferPool?: mem.BufferPool | null, ssGoAwayHandler?: ((_p0: goAway | $.VarRef<goAway> | null) => [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			side: init?.side ?? (0 as side),
			cbuf: init?.cbuf ?? (null! as controlBuffer | $.VarRef<controlBuffer> | null),
			sendQuota: init?.sendQuota ?? (0 as number),
			oiws: init?.oiws ?? (0 as number),
			estdStreams: init?.estdStreams ?? (null! as globalThis.Map<number, outStream | $.VarRef<outStream> | null> | null),
			activeStreams: init?.activeStreams ?? (null! as outStreamList | $.VarRef<outStreamList> | null),
			framer: init?.framer ?? (null! as __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null),
			hBuf: init?.hBuf ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			hEnc: init?.hEnc ?? (null! as hpack.Encoder | $.VarRef<hpack.Encoder> | null),
			bdpEst: init?.bdpEst ?? (null! as __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null),
			draining: init?.draining ?? (false as boolean),
			conn: init?.conn ?? (null! as net.Conn | null),
			logger: init?.logger ?? (null! as grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null),
			bufferPool: init?.bufferPool ?? (null! as mem.BufferPool | null),
			ssGoAwayHandler: init?.ssGoAwayHandler ?? (null! as ((_p0: goAway | $.VarRef<goAway> | null) => [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): loopyWriter {
		return new loopyWriter(this, true)
	}

	public __goscriptAssign(source: loopyWriter): void {
		const target = this._fields
		const values = source._fields
		target.side = values.side
		target.cbuf = values.cbuf
		target.sendQuota = values.sendQuota
		target.oiws = values.oiws
		target.estdStreams = values.estdStreams
		target.activeStreams = values.activeStreams
		target.framer = values.framer
		target.hBuf = values.hBuf
		target.hEnc = values.hEnc
		target.bdpEst = values.bdpEst
		target.draining = values.draining
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.logger = values.logger
		target.bufferPool = $.assignFieldValue(target.bufferPool, values.bufferPool, "mem.BufferPool")
		target.ssGoAwayHandler = values.ssGoAwayHandler
	}

	public async applySettings(ss: $.Slice<http2.Setting>): globalThis.Promise<void> {
		let l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		for (let __goscriptRangeTarget0 = ss, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let s = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as http2.Setting)).clone()
			switch (s.ID) {
				case http2.SettingInitialWindowSize:
				{
					let o = (l$ as loopyWriter).oiws;
					;(l$ as loopyWriter).oiws = s.Val
					if (o < (l$ as loopyWriter).oiws) {
						// If the new limit is greater make all depleted streams active.
						for (let [__rangeKey, stream] of (l$ as loopyWriter).estdStreams?.entries() ?? []) {
							if ($.pointerValue<outStream>(stream).state == 2) {
								$.pointerValue<outStream>(stream).state = 0
								outStreamList.prototype.enqueue.call((l$ as loopyWriter).activeStreams, stream)
							}
						}
					}
					break
				}
				case http2.SettingHeaderTableSize:
				{
					void (__goscriptAwait = updateHeaderTblSize!((l$ as loopyWriter).hEnc, s.Val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
			}
		}
	}

	public async cleanupStreamHandler(c: cleanupStream | $.VarRef<cleanupStream> | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		const c$: cleanupStream = c == null ? $.pointerTarget<cleanupStream>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<cleanupStream>(c)
		void (__goscriptAwait = (c$ as cleanupStream).onWrite!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let __goscriptTuple0: any = $.mapGet<number, outStream | $.VarRef<outStream> | null, outStream | $.VarRef<outStream> | null>((l$ as loopyWriter).estdStreams, (c$ as cleanupStream).streamID, null)
			let str: outStream | $.VarRef<outStream> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				// On the server side it could be a trailers-only response or
				// a RST_STREAM before stream initialization thus the stream might
				// not be established yet.
				$.deleteMapEntry((l$ as loopyWriter).estdStreams, (c$ as cleanupStream).streamID)
				void (str !== null && (str as any).__isVarRef !== true && (str as any).__goValue === undefined ? ((str as any) as outStream).deleteSelf() : outStream.prototype.deleteSelf.call(str))
				for (let head: itemNode | $.VarRef<itemNode> | null = itemList.prototype.dequeueAll.call($.pointerValue<outStream>(str).itl); head != null; head = $.pointerValue<itemNode>(head).next) {
					{
						let __goscriptTuple1: any = $.typeAssertTuple<dataFrame | $.VarRef<dataFrame> | null>($.pointerValue<itemNode>(head).it, /* @__PURE__ */ $.pointerType("transport.dataFrame"))
						let df: dataFrame | $.VarRef<dataFrame> | null = __goscriptTuple1[0]
						let __goscriptShadow0 = __goscriptTuple1[1]
						if (__goscriptShadow0) {
							;(__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>($.pointerValue<dataFrame>(df).reader).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
			}
		}
		if ((c$ as cleanupStream).rst) {
			{
				let err = await http2.Framer.prototype.WriteRSTStream.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).fr, (c$ as cleanupStream).streamID, (c$ as cleanupStream).rstCode)
				if (err != null) {
					return err
				}
			}
		}
		if ((l$ as loopyWriter).draining && ($.len((l$ as loopyWriter).estdStreams) == 0)) {
			// Flush and close the connection; we are done with it.
			return errors.New("finished processing active streams while in draining mode")
		}
		return null
	}

	public async earlyAbortStreamHandler(eas: earlyAbortStream | $.VarRef<earlyAbortStream> | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		const eas$: earlyAbortStream = eas == null ? $.pointerTarget<earlyAbortStream>(eas) : (eas as any).__isVarRef === true ? (eas as any).value : (eas as any).__goValue === undefined ? (eas as any) : $.pointerTarget<earlyAbortStream>(eas)
		if ((l$ as loopyWriter).side == 0) {
			return errors.New("earlyAbortStream not handled on client")
		}
		// In case the caller forgets to set the http status, default to 200.
		if ((eas$ as earlyAbortStream).httpStatus == 0) {
			;(eas$ as earlyAbortStream).httpStatus = 200
		}
		let headerFields: $.Slice<hpack.HeaderField> = $.arrayToSlice<hpack.HeaderField>([(() => { const __goscriptLiteralField0 = strconv.Itoa($.int((eas$ as earlyAbortStream).httpStatus)); return new hpack.HeaderField({Name: ":status", Value: __goscriptLiteralField0}, true) })(), (() => { const __goscriptLiteralField1 = grpcutil.ContentType((eas$ as earlyAbortStream).contentSubtype); return new hpack.HeaderField({Name: "content-type", Value: __goscriptLiteralField1}, true) })(), (() => { const __goscriptLiteralField2 = strconv.Itoa($.int(status3.Status.prototype.Code.call((eas$ as earlyAbortStream).status))); return new hpack.HeaderField({Name: "grpc-status", Value: __goscriptLiteralField2}, true) })(), (await (async () => { const __goscriptLiteralField3 = await __goscript_http_util.encodeGrpcMessage(status3.Status.prototype.Message.call((eas$ as earlyAbortStream).status)); return new hpack.HeaderField({Name: "grpc-message", Value: __goscriptLiteralField3}, true) })())])

		{
			let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).writeHeader((eas$ as earlyAbortStream).streamID, true, headerFields, (null as (() => void) | null)) : loopyWriter.prototype.writeHeader.call(l, (eas$ as earlyAbortStream).streamID, true, headerFields, (null as (() => void) | null)))
			if (err != null) {
				return err
			}
		}
		if ((eas$ as earlyAbortStream).rst) {
			{
				let err = await http2.Framer.prototype.WriteRSTStream.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).fr, (eas$ as earlyAbortStream).streamID, 0)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async goAwayHandler(g: goAway | $.VarRef<goAway> | null): globalThis.Promise<$.GoError> {
		let l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		// Handling of outgoing GoAway is very specific to side.
		if ((l$ as loopyWriter).ssGoAwayHandler != null) {
			let [draining, err] = await (l$ as loopyWriter).ssGoAwayHandler!(g)
			if (err != null) {
				return err
			}
			;(l$ as loopyWriter).draining = draining
		}
		return null
	}

	public async handle(i: any): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		{
			const __goscriptTypeSwitchValue = i
			switch (true) {
				case $.typeAssert<incomingWindowUpdate | $.VarRef<incomingWindowUpdate> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.incomingWindowUpdate")).ok:
					{
						let i: incomingWindowUpdate | $.VarRef<incomingWindowUpdate> | null = $.typeAssert<incomingWindowUpdate | $.VarRef<incomingWindowUpdate> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.incomingWindowUpdate")).value
						void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).incomingWindowUpdateHandler(i) : loopyWriter.prototype.incomingWindowUpdateHandler.call(l, i))
					}
					break
				case $.typeAssert<outgoingWindowUpdate | $.VarRef<outgoingWindowUpdate> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")).ok:
					{
						let i: outgoingWindowUpdate | $.VarRef<outgoingWindowUpdate> | null = $.typeAssert<outgoingWindowUpdate | $.VarRef<outgoingWindowUpdate> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).outgoingWindowUpdateHandler(i) : loopyWriter.prototype.outgoingWindowUpdateHandler.call(l, i))
					}
					break
				case $.typeAssert<incomingSettings | $.VarRef<incomingSettings> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.incomingSettings")).ok:
					{
						let i: incomingSettings | $.VarRef<incomingSettings> | null = $.typeAssert<incomingSettings | $.VarRef<incomingSettings> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.incomingSettings")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).incomingSettingsHandler(i) : loopyWriter.prototype.incomingSettingsHandler.call(l, i))
					}
					break
				case $.typeAssert<outgoingSettings | $.VarRef<outgoingSettings> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.outgoingSettings")).ok:
					{
						let i: outgoingSettings | $.VarRef<outgoingSettings> | null = $.typeAssert<outgoingSettings | $.VarRef<outgoingSettings> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.outgoingSettings")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).outgoingSettingsHandler(i) : loopyWriter.prototype.outgoingSettingsHandler.call(l, i))
					}
					break
				case $.typeAssert<headerFrame | $.VarRef<headerFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.headerFrame")).ok:
					{
						let i: headerFrame | $.VarRef<headerFrame> | null = $.typeAssert<headerFrame | $.VarRef<headerFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.headerFrame")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).headerHandler(i) : loopyWriter.prototype.headerHandler.call(l, i))
					}
					break
				case $.typeAssert<registerStream | $.VarRef<registerStream> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.registerStream")).ok:
					{
						let i: registerStream | $.VarRef<registerStream> | null = $.typeAssert<registerStream | $.VarRef<registerStream> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.registerStream")).value
						void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).registerStreamHandler(i) : loopyWriter.prototype.registerStreamHandler.call(l, i))
					}
					break
				case $.typeAssert<cleanupStream | $.VarRef<cleanupStream> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.cleanupStream")).ok:
					{
						let i: cleanupStream | $.VarRef<cleanupStream> | null = $.typeAssert<cleanupStream | $.VarRef<cleanupStream> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.cleanupStream")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).cleanupStreamHandler(i) : loopyWriter.prototype.cleanupStreamHandler.call(l, i))
					}
					break
				case $.typeAssert<earlyAbortStream | $.VarRef<earlyAbortStream> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")).ok:
					{
						let i: earlyAbortStream | $.VarRef<earlyAbortStream> | null = $.typeAssert<earlyAbortStream | $.VarRef<earlyAbortStream> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).earlyAbortStreamHandler(i) : loopyWriter.prototype.earlyAbortStreamHandler.call(l, i))
					}
					break
				case $.typeAssert<incomingGoAway | $.VarRef<incomingGoAway> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.incomingGoAway")).ok:
					{
						let i: incomingGoAway | $.VarRef<incomingGoAway> | null = $.typeAssert<incomingGoAway | $.VarRef<incomingGoAway> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.incomingGoAway")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).incomingGoAwayHandler(i) : loopyWriter.prototype.incomingGoAwayHandler.call(l, i))
					}
					break
				case $.typeAssert<dataFrame | $.VarRef<dataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.dataFrame")).ok:
					{
						let i: dataFrame | $.VarRef<dataFrame> | null = $.typeAssert<dataFrame | $.VarRef<dataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.dataFrame")).value
						void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).preprocessData(i) : loopyWriter.prototype.preprocessData.call(l, i))
					}
					break
				case $.typeAssert<ping | $.VarRef<ping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.ping")).ok:
					{
						let i: ping | $.VarRef<ping> | null = $.typeAssert<ping | $.VarRef<ping> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.ping")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).pingHandler(i) : loopyWriter.prototype.pingHandler.call(l, i))
					}
					break
				case $.typeAssert<goAway | $.VarRef<goAway> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.goAway")).ok:
					{
						let i: goAway | $.VarRef<goAway> | null = $.typeAssert<goAway | $.VarRef<goAway> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.goAway")).value
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).goAwayHandler(i) : loopyWriter.prototype.goAwayHandler.call(l, i))
					}
					break
				case $.typeAssert<outFlowControlSizeRequest | $.VarRef<outFlowControlSizeRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.outFlowControlSizeRequest")).ok:
					{
						let i: outFlowControlSizeRequest | $.VarRef<outFlowControlSizeRequest> | null = $.typeAssert<outFlowControlSizeRequest | $.VarRef<outFlowControlSizeRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.outFlowControlSizeRequest")).value
						await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).outFlowControlSizeRequestHandler(i) : loopyWriter.prototype.outFlowControlSizeRequestHandler.call(l, i))
					}
					break
				case $.typeAssert<closeConnection>(__goscriptTypeSwitchValue, "transport.closeConnection").ok:
					{
						let i: closeConnection = $.markAsStructValue($.cloneStructValue($.typeAssert<closeConnection>(__goscriptTypeSwitchValue, "transport.closeConnection").value))
						return $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")
					}
					break
				default:
					{
						let i: any = __goscriptTypeSwitchValue
						return fmt.Errorf("transport: unknown control message type %T", i)
					}
					break
			}
		}
		return null
	}

	public async headerHandler(h: headerFrame | $.VarRef<headerFrame> | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		const h$: headerFrame = h == null ? $.pointerTarget<headerFrame>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<headerFrame>(h)
		if ((l$ as loopyWriter).side == 1) {
			let __goscriptTuple2: any = $.mapGet<number, outStream | $.VarRef<outStream> | null, outStream | $.VarRef<outStream> | null>((l$ as loopyWriter).estdStreams, (h$ as headerFrame).streamID, null)
			let str: outStream | $.VarRef<outStream> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			let str$: outStream = str == null ? $.pointerTarget<outStream>(str) : (str as any).__isVarRef === true ? (str as any).value : (str as any).__goValue === undefined ? (str as any) : $.pointerTarget<outStream>(str)
			if (!ok) {
				if (await grpclog.PrefixLogger.prototype.V.call((l$ as loopyWriter).logger, 2)) {
					await grpclog.PrefixLogger.prototype.Infof.call((l$ as loopyWriter).logger, "Unrecognized streamID %d in loopyWriter", $.arrayToSlice<any>([$.basicInterfaceValue((h$ as headerFrame).streamID, "uint32")]))
				}
				return null
			}
			// Case 1.A: Server is responding back with headers.
			if (!(h$ as headerFrame).endStream) {
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).writeHeader((h$ as headerFrame).streamID, (h$ as headerFrame).endStream, (h$ as headerFrame).hf, (h$ as headerFrame).onWrite) : loopyWriter.prototype.writeHeader.call(l, (h$ as headerFrame).streamID, (h$ as headerFrame).endStream, (h$ as headerFrame).hf, (h$ as headerFrame).onWrite))
			}
			// else:  Case 1.B: Server wants to close stream.

			if ((str$ as outStream).state != 1) {
				// add it str's list of items.
				itemList.prototype.enqueue.call((str$ as outStream).itl, $.interfaceValue(h, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame")))
				return null
			}
			{
				let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).writeHeader((h$ as headerFrame).streamID, (h$ as headerFrame).endStream, (h$ as headerFrame).hf, (h$ as headerFrame).onWrite) : loopyWriter.prototype.writeHeader.call(l, (h$ as headerFrame).streamID, (h$ as headerFrame).endStream, (h$ as headerFrame).hf, (h$ as headerFrame).onWrite))
				if (err != null) {
					return err
				}
			}
			return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).cleanupStreamHandler((h$ as headerFrame).cleanup) : loopyWriter.prototype.cleanupStreamHandler.call(l, (h$ as headerFrame).cleanup))
		}
		// Case 2: Client wants to originate stream.
		let str: outStream | $.VarRef<outStream> | null = new outStream({id: (h$ as headerFrame).streamID, state: 1, itl: new itemList(), wq: (h$ as headerFrame).wq})
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).originateStream(str, h) : loopyWriter.prototype.originateStream.call(l, str, h))
	}

	public incomingGoAwayHandler(_p0: incomingGoAway | $.VarRef<incomingGoAway> | null): $.GoError {
		let l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		if ((l$ as loopyWriter).side == 0) {
			;(l$ as loopyWriter).draining = true
			if ($.len((l$ as loopyWriter).estdStreams) == 0) {
				// Flush and close the connection; we are done with it.
				return errors.New("received GOAWAY with no active streams")
			}
		}
		return null
	}

	public async incomingSettingsHandler(s: incomingSettings | $.VarRef<incomingSettings> | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).applySettings($.pointerValue<incomingSettings>(s).ss) : loopyWriter.prototype.applySettings.call(l, $.pointerValue<incomingSettings>(s).ss))
		return http2.Framer.prototype.WriteSettingsAck.call($.pointerValue<__goscript_http_util.framer>($.pointerValue<loopyWriter>(l).framer).fr)
	}

	public incomingWindowUpdateHandler(w: incomingWindowUpdate | $.VarRef<incomingWindowUpdate> | null): void {
		let l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		const w$: incomingWindowUpdate = w == null ? $.pointerTarget<incomingWindowUpdate>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<incomingWindowUpdate>(w)
		// Otherwise update the quota.
		if ((w$ as incomingWindowUpdate).streamID == 0) {
			;(l$ as loopyWriter).sendQuota = $.uint((l$ as loopyWriter).sendQuota + ((w$ as incomingWindowUpdate).increment), 32)
			return
		}
		// Find the stream and update it.
		{
			let __goscriptTuple3: any = $.mapGet<number, outStream | $.VarRef<outStream> | null, outStream | $.VarRef<outStream> | null>((l$ as loopyWriter).estdStreams, (w$ as incomingWindowUpdate).streamID, null)
			let str: outStream | $.VarRef<outStream> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				$.pointerValue<outStream>(str).bytesOutStanding = $.pointerValue<outStream>(str).bytesOutStanding - ($.int((w$ as incomingWindowUpdate).increment))
				{
					let strQuota = $.int((l$ as loopyWriter).oiws) - $.pointerValue<outStream>(str).bytesOutStanding
					if ((strQuota > 0) && ($.pointerValue<outStream>(str).state == 2)) {
						$.pointerValue<outStream>(str).state = 0
						outStreamList.prototype.enqueue.call((l$ as loopyWriter).activeStreams, str)
						return
					}
				}
			}
		}
	}

	public async originateStream(str: outStream | $.VarRef<outStream> | null, hdr: headerFrame | $.VarRef<headerFrame> | null): globalThis.Promise<$.GoError> {
		let l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		const str$: outStream = str == null ? $.pointerTarget<outStream>(str) : (str as any).__isVarRef === true ? (str as any).value : (str as any).__goValue === undefined ? (str as any) : $.pointerTarget<outStream>(str)
		const hdr$: headerFrame = hdr == null ? $.pointerTarget<headerFrame>(hdr) : (hdr as any).__isVarRef === true ? (hdr as any).value : (hdr as any).__goValue === undefined ? (hdr as any) : $.pointerTarget<headerFrame>(hdr)
		// l.draining is set when handling GoAway. In which case, we want to avoid
		// creating new streams.
		if ((l$ as loopyWriter).draining) {
			// TODO: provide a better error with the reason we are in draining.
			void (__goscriptAwait = (hdr$ as headerFrame).onOrphaned!(__goscript_transport.errStreamDrain), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		{
			let err = (__goscriptAwait = (hdr$ as headerFrame).initStream!((str$ as outStream).id), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		{
			let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).writeHeader((str$ as outStream).id, (hdr$ as headerFrame).endStream, (hdr$ as headerFrame).hf, (hdr$ as headerFrame).onWrite) : loopyWriter.prototype.writeHeader.call(l, (str$ as outStream).id, (hdr$ as headerFrame).endStream, (hdr$ as headerFrame).hf, (hdr$ as headerFrame).onWrite))
			if (err != null) {
				return err
			}
		}
		$.mapSet((l$ as loopyWriter).estdStreams, (str$ as outStream).id, str)
		return null
	}

	public async outFlowControlSizeRequestHandler(o: outFlowControlSizeRequest | $.VarRef<outFlowControlSizeRequest> | null): globalThis.Promise<void> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		await $.chanSend($.pointerValue<outFlowControlSizeRequest>(o).resp, $.pointerValue<loopyWriter>(l).sendQuota)
	}

	public async outgoingSettingsHandler(s: outgoingSettings | $.VarRef<outgoingSettings> | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		return http2.Framer.prototype.WriteSettings.call($.pointerValue<__goscript_http_util.framer>($.pointerValue<loopyWriter>(l).framer).fr, $.pointerValue<outgoingSettings>(s).ss)
	}

	public async outgoingWindowUpdateHandler(w: outgoingWindowUpdate | $.VarRef<outgoingWindowUpdate> | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const w$: outgoingWindowUpdate = w == null ? $.pointerTarget<outgoingWindowUpdate>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<outgoingWindowUpdate>(w)
		return http2.Framer.prototype.WriteWindowUpdate.call($.pointerValue<__goscript_http_util.framer>($.pointerValue<loopyWriter>(l).framer).fr, (w$ as outgoingWindowUpdate).streamID, (w$ as outgoingWindowUpdate).increment)
	}

	public async pingHandler(p: ping | $.VarRef<ping> | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		const p$: ping = p == null ? $.pointerTarget<ping>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ping>(p)
		if (!(p$ as ping).ack) {
			__goscript_bdp_estimator.bdpEstimator.prototype.timesnap.call((l$ as loopyWriter).bdpEst, $.cloneArrayValue((p$ as ping).data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
		}
		return http2.Framer.prototype.WritePing.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).fr, (p$ as ping).ack, $.cloneArrayValue((p$ as ping).data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
	}

	public preprocessData(df: dataFrame | $.VarRef<dataFrame> | null): void {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		let __goscriptTuple4: any = $.mapGet<number, outStream | $.VarRef<outStream> | null, outStream | $.VarRef<outStream> | null>((l$ as loopyWriter).estdStreams, $.pointerValue<dataFrame>(df).streamID, null)
		let str: outStream | $.VarRef<outStream> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		let str$: outStream = str == null ? $.pointerTarget<outStream>(str) : (str as any).__isVarRef === true ? (str as any).value : (str as any).__goValue === undefined ? (str as any) : $.pointerTarget<outStream>(str)
		if (!ok) {
			return
		}
		// If we got data for a stream it means that
		// stream was originated and the headers were sent out.
		itemList.prototype.enqueue.call((str$ as outStream).itl, $.interfaceValue(df, "*transport.dataFrame", /* @__PURE__ */ $.pointerType("transport.dataFrame")))
		if ((str$ as outStream).state == 1) {
			;(str$ as outStream).state = 0
			outStreamList.prototype.enqueue.call((l$ as loopyWriter).activeStreams, str)
		}
	}

	public async processData(): globalThis.Promise<[boolean, $.GoError]> {
		let l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		if ((l$ as loopyWriter).sendQuota == 0) {
			return [true, null]
		}
		let str: outStream | $.VarRef<outStream> | null = outStreamList.prototype.dequeue.call((l$ as loopyWriter).activeStreams)
		let str$: outStream = str == null ? $.pointerTarget<outStream>(str) : (str as any).__isVarRef === true ? (str as any).value : (str as any).__goValue === undefined ? (str as any) : $.pointerTarget<outStream>(str)
		if (str == null) {
			return [true, null]
		}
		let dataItem: dataFrame | $.VarRef<dataFrame> | null = $.mustTypeAssert<dataFrame | $.VarRef<dataFrame> | null>(itemList.prototype.peek.call((str$ as outStream).itl), /* @__PURE__ */ $.pointerType("transport.dataFrame"))
		let dataItem$: dataFrame = dataItem == null ? $.pointerTarget<dataFrame>(dataItem) : (dataItem as any).__isVarRef === true ? (dataItem as any).value : (dataItem as any).__goValue === undefined ? (dataItem as any) : $.pointerTarget<dataFrame>(dataItem)
		// A data item is represented by a dataFrame, since it later translates into
		// multiple HTTP2 data frames.
		// Every dataFrame has two buffers; h that keeps grpc-message header and data
		// that is the actual message. As an optimization to keep wire traffic low, data
		// from data is copied to h to make as big as the maximum possible HTTP2 frame
		// size.

		if (($.sliceLen((dataItem$ as dataFrame).h) == 0) && ((__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>((dataItem$ as dataFrame).reader).Remaining(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
			// Client sends out empty data frame with endStream = true
			{
				let err = await http2.Framer.prototype.WriteData.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).fr, (dataItem$ as dataFrame).streamID, (dataItem$ as dataFrame).endStream, null)
				if (err != null) {
					return [false, err]
				}
			}
			itemList.prototype.dequeue.call((str$ as outStream).itl);
			;(__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>((dataItem$ as dataFrame).reader).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (itemList.prototype.isEmpty.call((str$ as outStream).itl)) {
				;(str$ as outStream).state = 1
			} else {
				{
					let __goscriptTuple5: any = $.typeAssertTuple<headerFrame | $.VarRef<headerFrame> | null>(itemList.prototype.peek.call((str$ as outStream).itl), /* @__PURE__ */ $.pointerType("transport.headerFrame"))
					let trailer: headerFrame | $.VarRef<headerFrame> | null = __goscriptTuple5[0]
					let ok = __goscriptTuple5[1]
					if (ok) {
						{
							let err = await loopyWriter.prototype.writeHeader.call(l, $.pointerValue<headerFrame>(trailer).streamID, $.pointerValue<headerFrame>(trailer).endStream, $.pointerValue<headerFrame>(trailer).hf, $.pointerValue<headerFrame>(trailer).onWrite)
							if (err != null) {
								return [false, err]
							}
						}
						{
							let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).cleanupStreamHandler($.pointerValue<headerFrame>(trailer).cleanup) : loopyWriter.prototype.cleanupStreamHandler.call(l, $.pointerValue<headerFrame>(trailer).cleanup))
							if (err != null) {
								return [false, err]
							}
						}
					} else {
						outStreamList.prototype.enqueue.call((l$ as loopyWriter).activeStreams, str)
					}
				}
			}
			return [false, null]
		}

		// Figure out the maximum size we can send
		let maxSize = 16384
		{
			let strQuota = $.int((l$ as loopyWriter).oiws) - (str$ as outStream).bytesOutStanding
			if (strQuota <= 0) {
				;(str$ as outStream).state = 2
				return [false, null]
			} else {
				if (maxSize > strQuota) {
					maxSize = strQuota
				}
			}
		}
		if (maxSize > $.int((l$ as loopyWriter).sendQuota)) {
			maxSize = $.int((l$ as loopyWriter).sendQuota)
		}
		// Compute how much of the header and data we can send within quota and max frame length
		let hSize = $.min(maxSize, $.sliceLen((dataItem$ as dataFrame).h))
		let dSize = $.min(maxSize - hSize, (__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>((dataItem$ as dataFrame).reader).Remaining(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let remainingBytes = (($.sliceLen((dataItem$ as dataFrame).h) + (__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>((dataItem$ as dataFrame).reader).Remaining(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) - hSize) - dSize
		let size = hSize + dSize

		let buf: $.VarRef<$.Slice<number>> | null = null! as $.VarRef<$.Slice<number>> | null

		if ((hSize != 0) && (dSize == 0)) {
			buf = $.fieldRef((dataItem$ as dataFrame)._fields, "h")
		} else {
			// Note: this is only necessary because the http2.Framer does not support
			// partially writing a frame, so the sequence must be materialized into a buffer.
			// TODO: Revisit once https://github.com/golang/go/issues/66655 is addressed.
			let pool = (l$ as loopyWriter).bufferPool
			if (pool == null) {
				// Note that this is only supposed to be nil in tests. Otherwise, stream is
				// always initialized with a BufferPool.
				pool = mem.DefaultBufferPool()
			}
			buf = ((__goscriptAwait = (pool !== null && (pool as any).__isVarRef !== true && (pool as any).__goValue === undefined ? (pool as Exclude<mem.BufferPool, null>) : $.pointerValue<Exclude<mem.BufferPool, null>>(pool)).Get(size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (_p0: $.VarRef<$.Slice<number>> | null) => __receiver.Put(_p0))((pool !== null && (pool as any).__isVarRef !== true && (pool as any).__goValue === undefined ? (pool as Exclude<mem.BufferPool, null>) : $.pointerValue<Exclude<mem.BufferPool, null>>(pool))), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.BufferPool.Put-fm")
			const __goscriptDeferArg0 = buf
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(__goscriptDeferArg0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			$.copy($.goSlice(($.pointerValue<$.Slice<number>>(buf)), undefined, hSize), (dataItem$ as dataFrame).h)
			await $.pointerValue<Exclude<mem.Reader, null>>((dataItem$ as dataFrame).reader).Read($.goSlice(($.pointerValue<$.Slice<number>>(buf)), hSize, undefined))
		}

		// Now that outgoing flow controls are checked we can replenish str's write quota
		void (__goscriptAwait = $.pointerValue<__goscript_flowcontrol.writeQuota>((str$ as outStream).wq).replenish!(size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let endStream: boolean = false
		// If this is the last data message on this stream and all of it can be written in this iteration.
		if ((dataItem$ as dataFrame).endStream && (remainingBytes == 0)) {
			endStream = true
		}
		if ((dataItem$ as dataFrame).onEachWrite != null) {
			void (__goscriptAwait = (dataItem$ as dataFrame).onEachWrite!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		{
			let err = await http2.Framer.prototype.WriteData.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).fr, (dataItem$ as dataFrame).streamID, endStream, $.goSlice(($.pointerValue<$.Slice<number>>(buf)), undefined, size))
			if (err != null) {
				return [false, err]
			}
		}
		;(str$ as outStream).bytesOutStanding = (str$ as outStream).bytesOutStanding + (size);
		;(l$ as loopyWriter).sendQuota = $.uint((l$ as loopyWriter).sendQuota - ($.uint(size, 32)), 32);
		;(dataItem$ as dataFrame).h = $.goSlice((dataItem$ as dataFrame).h, hSize, undefined)

		if (remainingBytes == 0) {
			;(__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>((dataItem$ as dataFrame).reader).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			itemList.prototype.dequeue.call((str$ as outStream).itl)
		}
		if (itemList.prototype.isEmpty.call((str$ as outStream).itl)) {
			;(str$ as outStream).state = 1
		} else {
			{
				let __goscriptTuple6: any = $.typeAssertTuple<headerFrame | $.VarRef<headerFrame> | null>(itemList.prototype.peek.call((str$ as outStream).itl), /* @__PURE__ */ $.pointerType("transport.headerFrame"))
				let trailer: headerFrame | $.VarRef<headerFrame> | null = __goscriptTuple6[0]
				let ok = __goscriptTuple6[1]
				if (ok) {
					{
						let err = await loopyWriter.prototype.writeHeader.call(l, $.pointerValue<headerFrame>(trailer).streamID, $.pointerValue<headerFrame>(trailer).endStream, $.pointerValue<headerFrame>(trailer).hf, $.pointerValue<headerFrame>(trailer).onWrite)
						if (err != null) {
							return [false, err]
						}
					}
					{
						let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).cleanupStreamHandler($.pointerValue<headerFrame>(trailer).cleanup) : loopyWriter.prototype.cleanupStreamHandler.call(l, $.pointerValue<headerFrame>(trailer).cleanup))
						if (err != null) {
							return [false, err]
						}
					}
				} else {
					if (($.int((l$ as loopyWriter).oiws) - (str$ as outStream).bytesOutStanding) <= 0) {
						;(str$ as outStream).state = 2
					} else {
						outStreamList.prototype.enqueue.call((l$ as loopyWriter).activeStreams, str)
					}
				}
			}
		}
		return [false, null]
	}

	public registerStreamHandler(h: registerStream | $.VarRef<registerStream> | null): void {
		let l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const h$: registerStream = h == null ? $.pointerTarget<registerStream>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<registerStream>(h)
		let str: outStream | $.VarRef<outStream> | null = new outStream({id: (h$ as registerStream).streamID, state: 1, itl: new itemList(), wq: (h$ as registerStream).wq})
		$.mapSet($.pointerValue<loopyWriter>(l).estdStreams, (h$ as registerStream).streamID, str)
	}

	public async run(): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if (await grpclog.PrefixLogger.prototype.V.call((l$ as loopyWriter).logger, 2)) {
				await grpclog.PrefixLogger.prototype.Infof.call((l$ as loopyWriter).logger, "loopyWriter exiting with error: %v", $.arrayToSlice<any>([(err as any)]))
			}
			if (!__goscript_http_util.isIOError(err)) {
				await __goscript_http_util.bufWriter.prototype.Flush.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).writer)
			}
			await controlBuffer.prototype.finish.call((l$ as loopyWriter).cbuf)
		})() })
		while (true) {
			let [it, __goscriptShadow1] = await controlBuffer.prototype.get.call((l$ as loopyWriter).cbuf, true)
			if (__goscriptShadow1 != null) {
				const __goscriptReturn0: $.GoError = __goscriptShadow1
				err = __goscriptReturn0
				await __defer.dispose()
				return err
			}
			{
				__goscriptShadow1 = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).handle(it) : loopyWriter.prototype.handle.call(l, it))
				if (__goscriptShadow1 != null) {
					const __goscriptReturn1: $.GoError = __goscriptShadow1
					err = __goscriptReturn1
					await __defer.dispose()
					return err
				}
			}
			{
				let __goscriptTuple7: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).processData() : loopyWriter.prototype.processData.call(l))
				__goscriptShadow1 = __goscriptTuple7[1]
				if (__goscriptShadow1 != null) {
					const __goscriptReturn2: $.GoError = __goscriptShadow1
					err = __goscriptReturn2
					await __defer.dispose()
					return err
				}
			}
			let gosched = true
			hasdata: while (true) {
				let [__goscriptShadow2, __goscriptShadow3] = await controlBuffer.prototype.get.call((l$ as loopyWriter).cbuf, false)
				if (__goscriptShadow3 != null) {
					const __goscriptReturn3: $.GoError = __goscriptShadow3
					err = __goscriptReturn3
					await __defer.dispose()
					return err
				}
				if (__goscriptShadow2 != null) {
					{
						__goscriptShadow3 = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).handle(__goscriptShadow2) : loopyWriter.prototype.handle.call(l, __goscriptShadow2))
						if (__goscriptShadow3 != null) {
							const __goscriptReturn4: $.GoError = __goscriptShadow3
							err = __goscriptReturn4
							await __defer.dispose()
							return err
						}
					}
					{
						let __goscriptTuple8: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).processData() : loopyWriter.prototype.processData.call(l))
						__goscriptShadow3 = __goscriptTuple8[1]
						if (__goscriptShadow3 != null) {
							const __goscriptReturn5: $.GoError = __goscriptShadow3
							err = __goscriptReturn5
							await __defer.dispose()
							return err
						}
					}
					continue hasdata
				}
				let __goscriptTuple9: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as loopyWriter).processData() : loopyWriter.prototype.processData.call(l))
				let isEmpty = __goscriptTuple9[0]
				__goscriptShadow3 = __goscriptTuple9[1]
				if (__goscriptShadow3 != null) {
					const __goscriptReturn6: $.GoError = __goscriptShadow3
					err = __goscriptReturn6
					await __defer.dispose()
					return err
				}
				if (!isEmpty) {
					continue hasdata
				}
				if (gosched) {
					gosched = false
					if ($.pointerValue<__goscript_http_util.bufWriter>($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).writer).offset < 1000) {
						runtime.Gosched()
						continue hasdata
					}
				}
				await __goscript_http_util.bufWriter.prototype.Flush.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).writer)
				break hasdata
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async writeHeader(streamID: number, endStream: boolean, hf: $.Slice<hpack.HeaderField>, onWrite: (() => void) | null): globalThis.Promise<$.GoError> {
		const l: loopyWriter | $.VarRef<loopyWriter> | null = this;
		const l$: loopyWriter = l == null ? $.pointerTarget<loopyWriter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<loopyWriter>(l)
		if (onWrite != null) {
			void (__goscriptAwait = onWrite!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>((l$ as loopyWriter).hBuf))
		for (let __goscriptRangeTarget1 = hf, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as hpack.HeaderField)).clone()
			{
				let err = await hpack.Encoder.prototype.WriteField.call((l$ as loopyWriter).hEnc, (f).clone())
				if (err != null) {
					if (await grpclog.PrefixLogger.prototype.V.call((l$ as loopyWriter).logger, 2)) {
						await grpclog.PrefixLogger.prototype.Warningf.call((l$ as loopyWriter).logger, "Encountered error while encoding headers: %v", $.arrayToSlice<any>([(err as any)]))
					}
				}
			}
		}
		let err: $.GoError = null! as $.GoError
		let endHeaders: boolean = false
		let first: boolean = false
		first = true
		while (!endHeaders) {
			let size = bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>((l$ as loopyWriter).hBuf))
			if (size > 16384) {
				size = 16384
			} else {
				endHeaders = true
			}
			if (first) {
				first = false
				err = await http2.Framer.prototype.WriteHeaders.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).fr, (() => { const __goscriptLiteralField4 = bytes.Buffer.prototype.Next.call($.pointerValue<bytes.Buffer>((l$ as loopyWriter).hBuf), size); return new http2.HeadersFrameParam({StreamID: streamID, BlockFragment: __goscriptLiteralField4, EndStream: endStream, EndHeaders: endHeaders}, true) })())
			} else {
				err = await http2.Framer.prototype.WriteContinuation.call($.pointerValue<__goscript_http_util.framer>((l$ as loopyWriter).framer).fr, streamID, endHeaders, bytes.Buffer.prototype.Next.call($.pointerValue<bytes.Buffer>((l$ as loopyWriter).hBuf), size))
			}
			if (err != null) {
				return err
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"transport.loopyWriter",
		() => new loopyWriter(),
		() => [$.methodSignature("applySettings", [["ss", /* @__PURE__ */ $.sliceType("http2.Setting")]], [], true), $.methodSignature("cleanupStreamHandler", [["c", /* @__PURE__ */ $.pointerType("transport.cleanupStream")]], ["error"], true), $.methodSignature("earlyAbortStreamHandler", [["eas", /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")]], ["error"], true), $.methodSignature("goAwayHandler", [["g", /* @__PURE__ */ $.pointerType("transport.goAway")]], ["error"], true), $.methodSignature("handle", [["i", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("headerHandler", [["h", /* @__PURE__ */ $.pointerType("transport.headerFrame")]], ["error"], true), $.methodSignature("incomingGoAwayHandler", [/* @__PURE__ */ $.pointerType("transport.incomingGoAway")], ["error"], true), $.methodSignature("incomingSettingsHandler", [["s", /* @__PURE__ */ $.pointerType("transport.incomingSettings")]], ["error"], true), $.methodSignature("incomingWindowUpdateHandler", [["w", /* @__PURE__ */ $.pointerType("transport.incomingWindowUpdate")]], [], true), $.methodSignature("originateStream", [["str", /* @__PURE__ */ $.pointerType("transport.outStream")], ["hdr", /* @__PURE__ */ $.pointerType("transport.headerFrame")]], ["error"], true), $.methodSignature("outFlowControlSizeRequestHandler", [["o", /* @__PURE__ */ $.pointerType("transport.outFlowControlSizeRequest")]], [], true), $.methodSignature("outgoingSettingsHandler", [["s", /* @__PURE__ */ $.pointerType("transport.outgoingSettings")]], ["error"], true), $.methodSignature("outgoingWindowUpdateHandler", [["w", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")]], ["error"], true), $.methodSignature("pingHandler", [["p", /* @__PURE__ */ $.pointerType("transport.ping")]], ["error"], true), $.methodSignature("preprocessData", [["df", /* @__PURE__ */ $.pointerType("transport.dataFrame")]], [], true), $.methodSignature("processData", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("registerStreamHandler", [["h", /* @__PURE__ */ $.pointerType("transport.registerStream")]], [], true), $.methodSignature("run", [], [["err", "error"]], true), $.methodSignature("writeHeader", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["endStream", /* @__PURE__ */ $.basicType("bool")], ["hf", /* @__PURE__ */ $.sliceType("hpack.HeaderField")], ["onWrite", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["error"], true)],
		loopyWriter,
		() => [/* @__PURE__ */ $.structField("side", /* @__PURE__ */ $.basicType("int", "transport.side"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("cbuf", /* @__PURE__ */ $.pointerType("transport.controlBuffer"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("sendQuota", /* @__PURE__ */ $.basicType("uint32"), [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("oiws", /* @__PURE__ */ $.basicType("uint32"), [3], 20, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("estdStreams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("transport.outStream")), [4], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("activeStreams", /* @__PURE__ */ $.pointerType("transport.outStreamList"), [5], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("framer", /* @__PURE__ */ $.pointerType("transport.framer"), [6], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("hBuf", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [7], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("hEnc", /* @__PURE__ */ $.pointerType("hpack.Encoder"), [8], 56, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bdpEst", /* @__PURE__ */ $.pointerType("transport.bdpEstimator"), [9], 64, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("draining", /* @__PURE__ */ $.basicType("bool"), [10], 72, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("conn", "net.Conn", [11], 80, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("grpclog.PrefixLogger"), [12], 96, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bufferPool", "mem.BufferPool", [13], 104, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ssGoAwayHandler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.goAway")], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo), [14], 120, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export const maxQueuedTransportResponseFrames: number = 50

export const active: outStreamState = 0

export const empty: outStreamState = 1

export const waitingOnStreamQuota: outStreamState = 2

export const clientSide: side = 0

export const serverSide: side = 1

export const minBatchSize: number = 1000

export let updateHeaderTblSize: ((e: hpack.Encoder | $.VarRef<hpack.Encoder> | null, v: number) => void) | null = $.functionValue(async (e: hpack.Encoder | $.VarRef<hpack.Encoder> | null, v: number): globalThis.Promise<void> => {
	await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as hpack.Encoder).SetMaxDynamicTableSizeLimit(v) : hpack.Encoder.prototype.SetMaxDynamicTableSizeLimit.call(e, v))
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("hpack.Encoder"), /* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo))

export function __goscript_set_updateHeaderTblSize(__goscriptValue: ((e: hpack.Encoder | $.VarRef<hpack.Encoder> | null, v: number) => void) | null): void {
	updateHeaderTblSize = __goscriptValue
}

export function newOutStreamList(): outStreamList | $.VarRef<outStreamList> | null {
	let head: outStream | $.VarRef<outStream> | null = new outStream()
	let tail: outStream | $.VarRef<outStream> | null = new outStream()
	$.pointerValue<outStream>(head).next = tail
	$.pointerValue<outStream>(tail).prev = head
	return new outStreamList({head: head, tail: tail})
}

export function newControlBuffer(done: $.Channel<{}> | null): controlBuffer | $.VarRef<controlBuffer> | null {
	return new controlBuffer({wakeupCh: $.makeChannel<{}>(1, {}, "both"), list: new itemList(), done: done})
}

export async function newLoopyWriter(s: side, fr: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null, cbuf: controlBuffer | $.VarRef<controlBuffer> | null, bdpEst: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null, conn: net.Conn | null, logger: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null, goAwayHandler: ((_p0: goAway | $.VarRef<goAway> | null) => [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>) | null, bufferPool: mem.BufferPool | null): globalThis.Promise<loopyWriter | $.VarRef<loopyWriter> | null> {
	let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	let l: loopyWriter | $.VarRef<loopyWriter> | null = (await (async () => { const __goscriptLiteralField5 = newOutStreamList(); const __goscriptLiteralField6 = await hpack.NewEncoder($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))); return new loopyWriter({side: s, cbuf: cbuf, sendQuota: 65535, oiws: 65535, estdStreams: $.makeMap<number, outStream | $.VarRef<outStream> | null>(), activeStreams: __goscriptLiteralField5, framer: fr, hBuf: buf, hEnc: __goscriptLiteralField6, bdpEst: bdpEst, conn: conn, logger: logger, ssGoAwayHandler: goAwayHandler, bufferPool: bufferPool}) })())
	return l
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), zero: () => null }})
}

var __goscriptAwait: any
