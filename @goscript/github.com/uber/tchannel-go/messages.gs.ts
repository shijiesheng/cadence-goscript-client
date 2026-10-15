// Generated file based on messages.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as strconv from "@goscript/strconv/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_relay_messages from "./relay_messages.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/time/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/strconv/index.js"
import "./errors.gs.ts"
import "./frame.gs.ts"
import "./messagetype_string.gs.ts"
import "./relay_messages.gs.ts"
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.messageType", "tchannel.message", "tchannel.noBodyMsg", "tchannel.initParams", "tchannel.initMessage", "tchannel.initReq", "tchannel.initRes", "tchannel.TransportHeaderName", "tchannel.transportHeaders", "tchannel.callReq", "tchannel.callReqContinue", "tchannel.ResponseCode", "tchannel.callRes", "tchannel.callResContinue", "tchannel.errorMessage", "tchannel.cancelMessage", "tchannel.pingReq", "tchannel.pingRes"])

export type messageType = number

$.registerNamedValueType(
	"tchannel.messageType",
	{String: (receiver: any, ...args: any[]) => (__goscript_messagetype_string.messageType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.messageType",
	{String: (receiver: any, ...args: any[]) => (__goscript_messagetype_string.messageType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type message = {
	ID(): number
	messageType(): messageType
	read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError
	write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError
}

$.registerInterfaceType(
	"tchannel.message",
	null,
	[$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")]), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"]), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"])]
);

export type initParams = globalThis.Map<string, string> | null

$.registerNamedType("tchannel.initParams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

export type TransportHeaderName = string

$.registerNamedValueType(
	"tchannel.TransportHeaderName",
	{String: (receiver: any, ...args: any[]) => (TransportHeaderName_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.TransportHeaderName",
	{String: (receiver: any, ...args: any[]) => (TransportHeaderName_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type transportHeaders = globalThis.Map<TransportHeaderName, string> | null

$.registerNamedType("tchannel.transportHeaders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "tchannel.TransportHeaderName"), /* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"tchannel.transportHeaders",
	{read: (receiver: any, ...args: any[]) => (transportHeaders_read as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), write: (receiver: any, ...args: any[]) => (transportHeaders_write as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]]), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]])]
);

$.registerNamedValueType(
	"*tchannel.transportHeaders",
	{read: (receiver: any, ...args: any[]) => (transportHeaders_read as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), write: (receiver: any, ...args: any[]) => (transportHeaders_write as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]]), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]])]
);

export type ResponseCode = number

export class noBodyMsg {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noBodyMsg {
		return new noBodyMsg(this, true)
	}

	public __goscriptAssign(source: noBodyMsg): void {
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		return null
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		return null
	}

	static __typeInfo = $.registerStructType(
		"tchannel.noBodyMsg",
		() => new noBodyMsg(),
		() => [$.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"]), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"])],
		noBodyMsg,
		() => []
	)
}

export class initMessage {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get initParams(): initParams {
		return this._fields.initParams
	}

	public set initParams(value: initParams) {
		this._fields.initParams = value
	}

	public _fields: {
		id: number
		Version: number
		initParams: initParams
	}

	constructor(init?: Partial<{id?: number, Version?: number, initParams?: initParams}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			Version: init?.Version ?? (0 as number),
			initParams: init?.initParams ?? (null! as initParams)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): initMessage {
		return new initMessage(this, true)
	}

	public __goscriptAssign(source: initMessage): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.Version = values.Version
		target.initParams = values.initParams
	}

	public ID(): number {
		const m: initMessage | $.VarRef<initMessage> | null = this;
		return $.pointerValue<initMessage>(m).id
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		let m: initMessage | $.VarRef<initMessage> | null = this;
		const m$: initMessage = m == null ? $.pointerTarget<initMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<initMessage>(m);
		;(m$ as initMessage).Version = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(r));

		;(m$ as initMessage).initParams = $.makeMap<string, string>([])
		let np = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(r))
		for (let i = 0; i < $.int(np); i++) {
			let k = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadLen16String() : typed.ReadBuffer.prototype.ReadLen16String.call(r))
			let v = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadLen16String() : typed.ReadBuffer.prototype.ReadLen16String.call(r))
			$.mapSet((m$ as initMessage).initParams, k, v)
		}

		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(r))
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const m: initMessage | $.VarRef<initMessage> | null = this;
		const m$: initMessage = m == null ? $.pointerTarget<initMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<initMessage>(m)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint16((m$ as initMessage).Version) : typed.WriteBuffer.prototype.WriteUint16.call(w, (m$ as initMessage).Version))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint16($.uint($.len((m$ as initMessage).initParams), 16)) : typed.WriteBuffer.prototype.WriteUint16.call(w, $.uint($.len((m$ as initMessage).initParams), 16)))

		for (const [k, v] of (m$ as initMessage).initParams?.entries() ?? []) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteLen16String(k) : typed.WriteBuffer.prototype.WriteLen16String.call(w, k))
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteLen16String(v) : typed.WriteBuffer.prototype.WriteLen16String.call(w, v))
		}

		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(w))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.initMessage",
		() => new initMessage(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		initMessage,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("uint16"), [1], 4, true), /* @__PURE__ */ $.structField("initParams", "tchannel.initParams", [2], 8, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class initReq {
	public get initMessage(): initMessage {
		return this._fields.initMessage
	}

	public set initMessage(value: initMessage) {
		this._fields.initMessage = value
	}

	public _fields: {
		initMessage: initMessage
	}

	constructor(init?: Partial<{initMessage?: initMessage}>, __goscriptValue?: boolean) {
		this._fields = {
			initMessage: init?.initMessage ? init.initMessage.clone() : new initMessage(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): initReq {
		return new initReq(this, true)
	}

	public __goscriptAssign(source: initReq): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.initMessage, values.initMessage)
	}

	public messageType(): messageType {
		const m: initReq | $.VarRef<initReq> | null = this;
		return 1
	}

	public ID(): any {
		return $.pointerValue<initMessage>(this.initMessage).ID()
	}

	public read(r: any): any {
		return $.pointerValue<initMessage>(this.initMessage).read(r)
	}

	public write(w: any): any {
		return $.pointerValue<initMessage>(this.initMessage).write(w)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.initReq",
		() => new initReq(),
		() => [$.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		initReq,
		() => [/* @__PURE__ */ $.structField("initMessage", "tchannel.initMessage", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true })]
	)
}

export class initRes {
	public get initMessage(): initMessage {
		return this._fields.initMessage
	}

	public set initMessage(value: initMessage) {
		this._fields.initMessage = value
	}

	public _fields: {
		initMessage: initMessage
	}

	constructor(init?: Partial<{initMessage?: initMessage}>, __goscriptValue?: boolean) {
		this._fields = {
			initMessage: init?.initMessage ? init.initMessage.clone() : new initMessage(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): initRes {
		return new initRes(this, true)
	}

	public __goscriptAssign(source: initRes): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.initMessage, values.initMessage)
	}

	public messageType(): messageType {
		const m: initRes | $.VarRef<initRes> | null = this;
		return 2
	}

	public ID(): any {
		return $.pointerValue<initMessage>(this.initMessage).ID()
	}

	public read(r: any): any {
		return $.pointerValue<initMessage>(this.initMessage).read(r)
	}

	public write(w: any): any {
		return $.pointerValue<initMessage>(this.initMessage).write(w)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.initRes",
		() => new initRes(),
		() => [$.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		initRes,
		() => [/* @__PURE__ */ $.structField("initMessage", "tchannel.initMessage", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true })]
	)
}

export class callReq {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get TimeToLive(): time.Duration {
		return this._fields.TimeToLive
	}

	public set TimeToLive(value: time.Duration) {
		this._fields.TimeToLive = value
	}

	public get Tracing(): __goscript_tracing.Span {
		return this._fields.Tracing
	}

	public set Tracing(value: __goscript_tracing.Span) {
		this._fields.Tracing = value
	}

	public get Headers(): transportHeaders {
		return this._fields.Headers
	}

	public set Headers(value: transportHeaders) {
		this._fields.Headers = value
	}

	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public _fields: {
		id: number
		TimeToLive: time.Duration
		Tracing: __goscript_tracing.Span
		Headers: transportHeaders
		Service: string
	}

	constructor(init?: Partial<{id?: number, TimeToLive?: time.Duration, Tracing?: __goscript_tracing.Span, Headers?: transportHeaders, Service?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			TimeToLive: init?.TimeToLive ?? (0n as time.Duration),
			Tracing: init?.Tracing ? init.Tracing.clone() : new __goscript_tracing.Span(undefined, true),
			Headers: init?.Headers ?? (null! as transportHeaders),
			Service: init?.Service ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callReq {
		return new callReq(this, true)
	}

	public __goscriptAssign(source: callReq): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.TimeToLive = values.TimeToLive
		$.assignStruct(target.Tracing, values.Tracing)
		target.Headers = values.Headers
		target.Service = values.Service
	}

	public ID(): number {
		const m: callReq | $.VarRef<callReq> | null = this;
		return $.pointerValue<callReq>(m).id
	}

	public messageType(): messageType {
		const m: callReq | $.VarRef<callReq> | null = this;
		return 3
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		let m: callReq | $.VarRef<callReq> | null = this;
		const m$: callReq = m == null ? $.pointerTarget<callReq>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<callReq>(m);
		;(m$ as callReq).TimeToLive = $.int64Mul($.int64((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint32() : typed.ReadBuffer.prototype.ReadUint32.call(r))), 1000000n)
		void (m$ as callReq).Tracing.read(r);
		;(m$ as callReq).Service = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadLen8String() : typed.ReadBuffer.prototype.ReadLen8String.call(r));
		;(m$ as callReq).Headers = $.makeMap<TransportHeaderName, string>([])
		transportHeaders_read((m$ as callReq).Headers, r)
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(r))
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const m: callReq | $.VarRef<callReq> | null = this;
		const m$: callReq = m == null ? $.pointerTarget<callReq>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<callReq>(m)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint32($.uint($.int64Div((m$ as callReq).TimeToLive, 1000000n), 32)) : typed.WriteBuffer.prototype.WriteUint32.call(w, $.uint($.int64Div((m$ as callReq).TimeToLive, 1000000n), 32)))
		void (m$ as callReq).Tracing.write(w)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteLen8String((m$ as callReq).Service) : typed.WriteBuffer.prototype.WriteLen8String.call(w, (m$ as callReq).Service))
		transportHeaders_write((m$ as callReq).Headers, w)
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(w))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.callReq",
		() => new callReq(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		callReq,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("TimeToLive", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("Tracing", "tchannel.Span", [2], 16, true), /* @__PURE__ */ $.structField("Headers", "tchannel.transportHeaders", [3], 48, true), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [4], 56, true)]
	)
}

export class callReqContinue {
	public get noBodyMsg(): noBodyMsg {
		return this._fields.noBodyMsg
	}

	public set noBodyMsg(value: noBodyMsg) {
		this._fields.noBodyMsg = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public _fields: {
		noBodyMsg: noBodyMsg
		id: number
	}

	constructor(init?: Partial<{noBodyMsg?: noBodyMsg, id?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			noBodyMsg: init?.noBodyMsg ? init.noBodyMsg.clone() : new noBodyMsg(undefined, true),
			id: init?.id ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callReqContinue {
		return new callReqContinue(this, true)
	}

	public __goscriptAssign(source: callReqContinue): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.noBodyMsg, values.noBodyMsg)
		target.id = values.id
	}

	public ID(): number {
		const c: callReqContinue | $.VarRef<callReqContinue> | null = this;
		return $.pointerValue<callReqContinue>(c).id
	}

	public messageType(): messageType {
		const c: callReqContinue | $.VarRef<callReqContinue> | null = this;
		return 19
	}

	public read(r: any): any {
		return $.pointerValue<noBodyMsg>(this.noBodyMsg).read(r)
	}

	public write(w: any): any {
		return $.pointerValue<noBodyMsg>(this.noBodyMsg).write(w)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.callReqContinue",
		() => new callReqContinue(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"]), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"])],
		callReqContinue,
		() => [/* @__PURE__ */ $.structField("noBodyMsg", "tchannel.noBodyMsg", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [1], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class callRes {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get ResponseCode(): ResponseCode {
		return this._fields.ResponseCode
	}

	public set ResponseCode(value: ResponseCode) {
		this._fields.ResponseCode = value
	}

	public get Tracing(): __goscript_tracing.Span {
		return this._fields.Tracing
	}

	public set Tracing(value: __goscript_tracing.Span) {
		this._fields.Tracing = value
	}

	public get Headers(): transportHeaders {
		return this._fields.Headers
	}

	public set Headers(value: transportHeaders) {
		this._fields.Headers = value
	}

	public _fields: {
		id: number
		ResponseCode: ResponseCode
		Tracing: __goscript_tracing.Span
		Headers: transportHeaders
	}

	constructor(init?: Partial<{id?: number, ResponseCode?: ResponseCode, Tracing?: __goscript_tracing.Span, Headers?: transportHeaders}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			ResponseCode: init?.ResponseCode ?? (0 as ResponseCode),
			Tracing: init?.Tracing ? init.Tracing.clone() : new __goscript_tracing.Span(undefined, true),
			Headers: init?.Headers ?? (null! as transportHeaders)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callRes {
		return new callRes(this, true)
	}

	public __goscriptAssign(source: callRes): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.ResponseCode = values.ResponseCode
		$.assignStruct(target.Tracing, values.Tracing)
		target.Headers = values.Headers
	}

	public ID(): number {
		const m: callRes | $.VarRef<callRes> | null = this;
		return $.pointerValue<callRes>(m).id
	}

	public messageType(): messageType {
		const m: callRes | $.VarRef<callRes> | null = this;
		return 4
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		let m: callRes | $.VarRef<callRes> | null = this;
		const m$: callRes = m == null ? $.pointerTarget<callRes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<callRes>(m);
		;(m$ as callRes).ResponseCode = $.uint((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(r)), 8)
		void (m$ as callRes).Tracing.read(r);
		;(m$ as callRes).Headers = $.makeMap<TransportHeaderName, string>([])
		transportHeaders_read((m$ as callRes).Headers, r)
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(r))
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const m: callRes | $.VarRef<callRes> | null = this;
		const m$: callRes = m == null ? $.pointerTarget<callRes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<callRes>(m)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteSingleByte($.uint((m$ as callRes).ResponseCode, 8)) : typed.WriteBuffer.prototype.WriteSingleByte.call(w, $.uint((m$ as callRes).ResponseCode, 8)))
		void (m$ as callRes).Tracing.write(w)
		transportHeaders_write((m$ as callRes).Headers, w)
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(w))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.callRes",
		() => new callRes(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		callRes,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ResponseCode", /* @__PURE__ */ $.basicType("uint8", "tchannel.ResponseCode"), [1], 4, true), /* @__PURE__ */ $.structField("Tracing", "tchannel.Span", [2], 8, true), /* @__PURE__ */ $.structField("Headers", "tchannel.transportHeaders", [3], 40, true)]
	)
}

export class callResContinue {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public _fields: {
		id: number
	}

	constructor(init?: Partial<{id?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callResContinue {
		return new callResContinue(this, true)
	}

	public __goscriptAssign(source: callResContinue): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
	}

	public ID(): number {
		const c: callResContinue | $.VarRef<callResContinue> | null = this;
		return $.pointerValue<callResContinue>(c).id
	}

	public messageType(): messageType {
		const c: callResContinue | $.VarRef<callResContinue> | null = this;
		return 20
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		const c: callResContinue | $.VarRef<callResContinue> | null = this;
		return null
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const c: callResContinue | $.VarRef<callResContinue> | null = this;
		return null
	}

	static __typeInfo = $.registerStructType(
		"tchannel.callResContinue",
		() => new callResContinue(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		callResContinue,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class errorMessage {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get errCode(): __goscript_errors.SystemErrCode {
		return this._fields.errCode
	}

	public set errCode(value: __goscript_errors.SystemErrCode) {
		this._fields.errCode = value
	}

	public get tracing(): __goscript_tracing.Span {
		return this._fields.tracing
	}

	public set tracing(value: __goscript_tracing.Span) {
		this._fields.tracing = value
	}

	public get message(): string {
		return this._fields.message
	}

	public set message(value: string) {
		this._fields.message = value
	}

	public _fields: {
		id: number
		errCode: __goscript_errors.SystemErrCode
		tracing: __goscript_tracing.Span
		message: string
	}

	constructor(init?: Partial<{id?: number, errCode?: __goscript_errors.SystemErrCode, tracing?: __goscript_tracing.Span, message?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			errCode: init?.errCode ?? (0 as __goscript_errors.SystemErrCode),
			tracing: init?.tracing ? init.tracing.clone() : new __goscript_tracing.Span(undefined, true),
			message: init?.message ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errorMessage {
		return new errorMessage(this, true)
	}

	public __goscriptAssign(source: errorMessage): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.errCode = values.errCode
		$.assignStruct(target.tracing, values.tracing)
		target.message = values.message
	}

	public async AsSystemError(): globalThis.Promise<$.GoError> {
		const m = this;
		// TODO(mmihic): Might be nice to return one of the well defined error types
		return __goscript_errors.NewSystemError(m.errCode, m.message, null)
	}

	public async Error(): globalThis.Promise<string> {
		const m = this;
		return $.pointerValue<Exclude<$.GoError, null>>((await m.AsSystemError())).Error()
	}

	public ID(): number {
		const m: errorMessage | $.VarRef<errorMessage> | null = this;
		return $.pointerValue<errorMessage>(m).id
	}

	public messageType(): messageType {
		const m: errorMessage | $.VarRef<errorMessage> | null = this;
		return 255
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		let m: errorMessage | $.VarRef<errorMessage> | null = this;
		const m$: errorMessage = m == null ? $.pointerTarget<errorMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<errorMessage>(m);
		;(m$ as errorMessage).errCode = $.uint((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(r)), 8)
		void (m$ as errorMessage).tracing.read(r);
		;(m$ as errorMessage).message = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadLen16String() : typed.ReadBuffer.prototype.ReadLen16String.call(r))
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(r))
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const m: errorMessage | $.VarRef<errorMessage> | null = this;
		const m$: errorMessage = m == null ? $.pointerTarget<errorMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<errorMessage>(m)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteSingleByte($.uint((m$ as errorMessage).errCode, 8)) : typed.WriteBuffer.prototype.WriteSingleByte.call(w, $.uint((m$ as errorMessage).errCode, 8)))
		void (m$ as errorMessage).tracing.write(w)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteLen16String((m$ as errorMessage).message) : typed.WriteBuffer.prototype.WriteLen16String.call(w, (m$ as errorMessage).message))
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(w))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.errorMessage",
		() => new errorMessage(),
		() => [$.methodSignature("AsSystemError", [], ["error"]), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		errorMessage,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("errCode", /* @__PURE__ */ $.basicType("uint8", "tchannel.SystemErrCode"), [1], 4, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("tracing", "tchannel.Span", [2], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("message", /* @__PURE__ */ $.basicType("string"), [3], 40, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class cancelMessage {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get ttl(): number {
		return this._fields.ttl
	}

	public set ttl(value: number) {
		this._fields.ttl = value
	}

	public get tracing(): __goscript_tracing.Span {
		return this._fields.tracing
	}

	public set tracing(value: __goscript_tracing.Span) {
		this._fields.tracing = value
	}

	public get message(): string {
		return this._fields.message
	}

	public set message(value: string) {
		this._fields.message = value
	}

	public _fields: {
		id: number
		ttl: number
		tracing: __goscript_tracing.Span
		message: string
	}

	constructor(init?: Partial<{id?: number, ttl?: number, tracing?: __goscript_tracing.Span, message?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			ttl: init?.ttl ?? (0 as number),
			tracing: init?.tracing ? init.tracing.clone() : new __goscript_tracing.Span(undefined, true),
			message: init?.message ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cancelMessage {
		return new cancelMessage(this, true)
	}

	public __goscriptAssign(source: cancelMessage): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.ttl = values.ttl
		$.assignStruct(target.tracing, values.tracing)
		target.message = values.message
	}

	public async AsSystemError(): globalThis.Promise<$.GoError> {
		const m: cancelMessage | $.VarRef<cancelMessage> | null = this;
		return __goscript_errors.NewSystemError(2, $.pointerValue<cancelMessage>(m).message, null)
	}

	public ID(): number {
		const m: cancelMessage | $.VarRef<cancelMessage> | null = this;
		return $.pointerValue<cancelMessage>(m).id
	}

	public messageType(): messageType {
		const m: cancelMessage | $.VarRef<cancelMessage> | null = this;
		return 192
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		let m: cancelMessage | $.VarRef<cancelMessage> | null = this;
		const m$: cancelMessage = m == null ? $.pointerTarget<cancelMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<cancelMessage>(m);
		;(m$ as cancelMessage).ttl = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint32() : typed.ReadBuffer.prototype.ReadUint32.call(r))
		void (m$ as cancelMessage).tracing.read(r);
		;(m$ as cancelMessage).message = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadLen16String() : typed.ReadBuffer.prototype.ReadLen16String.call(r))
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(r))
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const m: cancelMessage | $.VarRef<cancelMessage> | null = this;
		const m$: cancelMessage = m == null ? $.pointerTarget<cancelMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<cancelMessage>(m)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint32((m$ as cancelMessage).ttl) : typed.WriteBuffer.prototype.WriteUint32.call(w, (m$ as cancelMessage).ttl))
		void (m$ as cancelMessage).tracing.write(w)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteLen16String((m$ as cancelMessage).message) : typed.WriteBuffer.prototype.WriteLen16String.call(w, (m$ as cancelMessage).message))
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(w))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.cancelMessage",
		() => new cancelMessage(),
		() => [$.methodSignature("AsSystemError", [], ["error"], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		cancelMessage,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ttl", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("tracing", "tchannel.Span", [2], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("message", /* @__PURE__ */ $.basicType("string"), [3], 40, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class pingReq {
	public get noBodyMsg(): noBodyMsg {
		return this._fields.noBodyMsg
	}

	public set noBodyMsg(value: noBodyMsg) {
		this._fields.noBodyMsg = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public _fields: {
		noBodyMsg: noBodyMsg
		id: number
	}

	constructor(init?: Partial<{noBodyMsg?: noBodyMsg, id?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			noBodyMsg: init?.noBodyMsg ? init.noBodyMsg.clone() : new noBodyMsg(undefined, true),
			id: init?.id ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pingReq {
		return new pingReq(this, true)
	}

	public __goscriptAssign(source: pingReq): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.noBodyMsg, values.noBodyMsg)
		target.id = values.id
	}

	public ID(): number {
		const c: pingReq | $.VarRef<pingReq> | null = this;
		return $.pointerValue<pingReq>(c).id
	}

	public messageType(): messageType {
		const c: pingReq | $.VarRef<pingReq> | null = this;
		return 208
	}

	public read(r: any): any {
		return $.pointerValue<noBodyMsg>(this.noBodyMsg).read(r)
	}

	public write(w: any): any {
		return $.pointerValue<noBodyMsg>(this.noBodyMsg).write(w)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.pingReq",
		() => new pingReq(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"]), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"])],
		pingReq,
		() => [/* @__PURE__ */ $.structField("noBodyMsg", "tchannel.noBodyMsg", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [1], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class pingRes {
	public get noBodyMsg(): noBodyMsg {
		return this._fields.noBodyMsg
	}

	public set noBodyMsg(value: noBodyMsg) {
		this._fields.noBodyMsg = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public _fields: {
		noBodyMsg: noBodyMsg
		id: number
	}

	constructor(init?: Partial<{noBodyMsg?: noBodyMsg, id?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			noBodyMsg: init?.noBodyMsg ? init.noBodyMsg.clone() : new noBodyMsg(undefined, true),
			id: init?.id ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pingRes {
		return new pingRes(this, true)
	}

	public __goscriptAssign(source: pingRes): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.noBodyMsg, values.noBodyMsg)
		target.id = values.id
	}

	public ID(): number {
		const c: pingRes | $.VarRef<pingRes> | null = this;
		return $.pointerValue<pingRes>(c).id
	}

	public messageType(): messageType {
		const c: pingRes | $.VarRef<pingRes> | null = this;
		return 209
	}

	public read(r: any): any {
		return $.pointerValue<noBodyMsg>(this.noBodyMsg).read(r)
	}

	public write(w: any): any {
		return $.pointerValue<noBodyMsg>(this.noBodyMsg).write(w)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.pingRes",
		() => new pingRes(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"]), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"])],
		pingRes,
		() => [/* @__PURE__ */ $.structField("noBodyMsg", "tchannel.noBodyMsg", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [1], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const messageTypeInitReq: messageType = 1

export const messageTypeInitRes: messageType = 2

export const messageTypeCallReq: messageType = 3

export const messageTypeCallRes: messageType = 4

export const messageTypeCallReqContinue: messageType = 19

export const messageTypeCallResContinue: messageType = 20

export const messageTypeCancel: messageType = 192

export const messageTypePingReq: messageType = 208

export const messageTypePingRes: messageType = 209

export const messageTypeError: messageType = 255

export const InitParamHostPort: string = "host_port"

export const InitParamProcessName: string = "process_name"

export const InitParamTChannelLanguage: string = "tchannel_language"

export const InitParamTChannelLanguageVersion: string = "tchannel_language_version"

export const InitParamTChannelVersion: string = "tchannel_version"

export const ArgScheme: TransportHeaderName = "as"

export const CallerName: TransportHeaderName = "cn"

export const ClaimAtFinish: TransportHeaderName = "caf"

export const ClaimAtStart: TransportHeaderName = "cas"

export const FailureDomain: TransportHeaderName = "fd"

export const ShardKey: TransportHeaderName = "sk"

export const RetryFlags: TransportHeaderName = "re"

export const SpeculativeExecution: TransportHeaderName = "se"

export const RoutingDelegate: TransportHeaderName = "rd"

export const RoutingKey: TransportHeaderName = "rk"

export const responseOK: ResponseCode = 0

export const responseApplicationError: ResponseCode = 1

export function TransportHeaderName_String(cn: TransportHeaderName): string {
	return cn
}

export function transportHeaders_read(ch: transportHeaders, r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): void {
	let nh = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(r))
	for (let i = 0; i < $.int(nh); i++) {
		let k = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadLen8String() : typed.ReadBuffer.prototype.ReadLen8String.call(r))
		let v = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadLen8String() : typed.ReadBuffer.prototype.ReadLen8String.call(r))
		$.mapSet(ch, k, v)
	}
}

export function transportHeaders_write(ch: transportHeaders, w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): void {
	void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteSingleByte($.uint($.len(ch), 8)) : typed.WriteBuffer.prototype.WriteSingleByte.call(w, $.uint($.len(ch), 8)))

	for (const [k, v] of ch?.entries() ?? []) {
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteLen8String(TransportHeaderName_String(k)) : typed.WriteBuffer.prototype.WriteLen8String.call(w, TransportHeaderName_String(k)))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteLen8String(v) : typed.WriteBuffer.prototype.WriteLen8String.call(w, v))
	}
}

export function callReqSpan(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): __goscript_tracing.Span {
	let rdr: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null = typed.NewReadBuffer($.goSlice($.pointerValue<__goscript_frame.Frame>(f).Payload, 5, 5 + 25))
	let s: $.VarRef<__goscript_tracing.Span> = $.varRef(new __goscript_tracing.Span(undefined, true))
	s.value.read(rdr)
	return (s.value).clone()
}

var __goscriptAwait: any
