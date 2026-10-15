// Generated file based on payload.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as socket from "@goscript/golang.org/x/net/internal/socket/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as __goscript_batch from "./batch.gs.ts"

import * as __goscript_control from "./control.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"

import type * as __goscript_payload_nocmsg from "./payload_nocmsg.gs.ts"
import "@goscript/net/index.js"
import "@goscript/runtime/index.js"
import "@goscript/golang.org/x/net/internal/socket/index.js"
import "@goscript/sync/index.js"
import "./control.gs.ts"
import "./helper.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv6", ["ipv6.payloadHandler"])

export class payloadHandler {
	public get PacketConn(): net.PacketConn | null {
		return this._fields.PacketConn
	}

	public set PacketConn(value: net.PacketConn | null) {
		this._fields.PacketConn = value
	}

	public get Conn(): socket.Conn | $.VarRef<socket.Conn> | null {
		return this._fields.Conn
	}

	public set Conn(value: socket.Conn | $.VarRef<socket.Conn> | null) {
		this._fields.Conn = value
	}

	public get rawOpt(): __goscript_control.rawOpt {
		return this._fields.rawOpt
	}

	public set rawOpt(value: __goscript_control.rawOpt) {
		this._fields.rawOpt = value
	}

	public _fields: {
		PacketConn: net.PacketConn | null
		Conn: socket.Conn | $.VarRef<socket.Conn> | null
		rawOpt: __goscript_control.rawOpt
	}

	constructor(init?: Partial<{PacketConn?: net.PacketConn | null, Conn?: socket.Conn | $.VarRef<socket.Conn> | null, rawOpt?: __goscript_control.rawOpt}>, __goscriptValue?: boolean) {
		this._fields = {
			PacketConn: init?.PacketConn ?? (null! as net.PacketConn | null),
			Conn: init?.Conn ?? (null! as socket.Conn | $.VarRef<socket.Conn> | null),
			rawOpt: init?.rawOpt ? init.rawOpt.clone() : new __goscript_control.rawOpt(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): payloadHandler {
		return new payloadHandler(this, true)
	}

	public __goscriptAssign(source: payloadHandler): void {
		const target = this._fields
		const values = source._fields
		target.PacketConn = $.assignFieldValue(target.PacketConn, values.PacketConn, "net.PacketConn")
		target.Conn = values.Conn
		$.assignStruct(target.rawOpt, values.rawOpt)
	}

	public async ReadBatch(ms: $.Slice<__goscript_batch.Message>, flags: number): globalThis.Promise<[number, $.GoError]> {
		const c: payloadHandler | $.VarRef<payloadHandler> | null = this;
		const c$: payloadHandler = c == null ? $.pointerTarget<payloadHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<payloadHandler>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as payloadHandler).ok() : payloadHandler.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		switch ((runtime.GOOS as string)) {
			case "linux":
			{
				let [n, err] = $.pointerValue<socket.Conn>((c$ as payloadHandler).Conn).RecvMsgs(ms, flags)
				if (err != null) {
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new net.OpError({Op: "read", Net: __goscriptLiteralField0, Source: __goscriptLiteralField1, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				return [n, err]
				break
			}
			default:
			{
				let n = 1
				let err = $.pointerValue<socket.Conn>((c$ as payloadHandler).Conn).RecvMsg($.indexRef(ms!, 0), flags)
				if (err != null) {
					n = 0
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField3 = (__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new net.OpError({Op: "read", Net: __goscriptLiteralField2, Source: __goscriptLiteralField3, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				return [n, err]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadFrom(b: $.Slice<number>): globalThis.Promise<[number, __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null, net.Addr | null, $.GoError]> {
		const c: payloadHandler | $.VarRef<payloadHandler> | null = this;
		let n: number = 0
		let cm: __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null = null! as __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null
		let src: net.Addr | null = null! as net.Addr | null
		let err: $.GoError = null! as $.GoError
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as payloadHandler).ok() : payloadHandler.prototype.ok.call(c))) {
			return [0, null, null, __goscript_helper.errInvalidConn]
		}
		{
			let __goscriptTuple0: any = await $.pointerValue<Exclude<net.PacketConn, null>>($.pointerValue<payloadHandler>(c).PacketConn).ReadFrom(b)
			n = __goscriptTuple0[0]
			src = __goscriptTuple0[1]
			err = __goscriptTuple0[2]
			if (err != null) {
				return [0, null, null, err]
			}
		}
		return [n, cm, src, err]
	}

	public async WriteBatch(ms: $.Slice<__goscript_batch.Message>, flags: number): globalThis.Promise<[number, $.GoError]> {
		const c: payloadHandler | $.VarRef<payloadHandler> | null = this;
		const c$: payloadHandler = c == null ? $.pointerTarget<payloadHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<payloadHandler>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as payloadHandler).ok() : payloadHandler.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		switch ((runtime.GOOS as string)) {
			case "linux":
			{
				let [n, err] = $.pointerValue<socket.Conn>((c$ as payloadHandler).Conn).SendMsgs(ms, flags)
				if (err != null) {
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField4 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField5 = (__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new net.OpError({Op: "write", Net: __goscriptLiteralField4, Source: __goscriptLiteralField5, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				return [n, err]
				break
			}
			default:
			{
				let n = 1
				let err = $.pointerValue<socket.Conn>((c$ as payloadHandler).Conn).SendMsg($.indexRef(ms!, 0), flags)
				if (err != null) {
					n = 0
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField6 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField7 = (__goscriptAwait = $.pointerValue<Exclude<net.PacketConn, null>>((c$ as payloadHandler).PacketConn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new net.OpError({Op: "write", Net: __goscriptLiteralField6, Source: __goscriptLiteralField7, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				return [n, err]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteTo(b: $.Slice<number>, cm: __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null, dst: net.Addr | null): globalThis.Promise<[number, $.GoError]> {
		const c: payloadHandler | $.VarRef<payloadHandler> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as payloadHandler).ok() : payloadHandler.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		if (dst == null) {
			return [0, __goscript_helper.errMissingAddress]
		}
		return $.pointerValue<Exclude<net.PacketConn, null>>($.pointerValue<payloadHandler>(c).PacketConn).WriteTo(b, dst)
	}

	public ok(): boolean {
		const c: payloadHandler | $.VarRef<payloadHandler> | null = this;
		const c$: payloadHandler = c == null ? $.pointerTarget<payloadHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<payloadHandler>(c)
		return ((c != null) && ((c$ as payloadHandler).PacketConn != null)) && ((c$ as payloadHandler).Conn != null)
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.PacketConn | null, null>>(this.PacketConn).Close()
	}

	public LocalAddr(): any {
		return $.pointerValue<Exclude<net.PacketConn | null, null>>(this.PacketConn).LocalAddr()
	}

	public async SetDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.PacketConn | null, null>>(this.PacketConn).SetDeadline(t)
	}

	public async SetReadDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.PacketConn | null, null>>(this.PacketConn).SetReadDeadline(t)
	}

	public async SetWriteDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.PacketConn | null, null>>(this.PacketConn).SetWriteDeadline(t)
	}

	public RecvMsg(m: any, flags: any): any {
		return $.pointerValue<socket.Conn>(this.Conn).RecvMsg(m, flags)
	}

	public RecvMsgs(ms: any, flags: any): any {
		return $.pointerValue<socket.Conn>(this.Conn).RecvMsgs(ms, flags)
	}

	public SendMsg(m: any, flags: any): any {
		return $.pointerValue<socket.Conn>(this.Conn).SendMsg(m, flags)
	}

	public SendMsgs(ms: any, flags: any): any {
		return $.pointerValue<socket.Conn>(this.Conn).SendMsgs(ms, flags)
	}

	public Lock(): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).RWMutex.Lock()
	}

	public RLock(): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).RWMutex.RLock()
	}

	public RLocker(): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).RWMutex.RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).RWMutex.RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).RWMutex.TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).RWMutex.TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).RWMutex.Unlock()
	}

	public clear(f: any): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).clear(f)
	}

	public isset(f: any): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).isset(f)
	}

	public ["set"](f: any): any {
		return $.pointerValue<__goscript_control.rawOpt>(this.rawOpt).set(f)
	}

	static __typeInfo = $.registerStructType(
		"ipv6.payloadHandler",
		() => new payloadHandler(),
		() => [$.methodSignature("ReadBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["cm", /* @__PURE__ */ $.pointerType("ipv6.ControlMessage")], ["src", "net.Addr"], ["err", "error"]], true), $.methodSignature("WriteBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cm", /* @__PURE__ */ $.pointerType("ipv6.ControlMessage")], ["dst", "net.Addr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Close", [], ["error"]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true), $.methodSignature("clear", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [], true), $.methodSignature("isset", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("set", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [], true)],
		payloadHandler,
		() => [/* @__PURE__ */ $.structField("PacketConn", "net.PacketConn", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Conn", /* @__PURE__ */ $.pointerType("socket.Conn"), [1], 16, true, { anonymous: true }), /* @__PURE__ */ $.structField("rawOpt", "ipv6.rawOpt", [2], 24, false, { pkgPath: "golang.org/x/net/ipv6", anonymous: true })]
	)
}

var __goscriptAwait: any
