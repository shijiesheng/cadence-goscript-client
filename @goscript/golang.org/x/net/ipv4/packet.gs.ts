// Generated file based on packet.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as socket from "@goscript/golang.org/x/net/internal/socket/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as __goscript_batch from "./batch.gs.ts"

import * as __goscript_control from "./control.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"
import "@goscript/net/index.js"
import "@goscript/runtime/index.js"
import "@goscript/golang.org/x/net/internal/socket/index.js"
import "@goscript/sync/index.js"
import "./control.gs.ts"
import "./header.gs.ts"
import "./helper.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv4", ["ipv4.packetHandler"])

export class packetHandler {
	public get IPConn(): net.IPConn | $.VarRef<net.IPConn> | null {
		return this._fields.IPConn
	}

	public set IPConn(value: net.IPConn | $.VarRef<net.IPConn> | null) {
		this._fields.IPConn = value
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
		IPConn: net.IPConn | $.VarRef<net.IPConn> | null
		Conn: socket.Conn | $.VarRef<socket.Conn> | null
		rawOpt: __goscript_control.rawOpt
	}

	constructor(init?: Partial<{IPConn?: net.IPConn | $.VarRef<net.IPConn> | null, Conn?: socket.Conn | $.VarRef<socket.Conn> | null, rawOpt?: __goscript_control.rawOpt}>, __goscriptValue?: boolean) {
		this._fields = {
			IPConn: init?.IPConn ?? (null! as net.IPConn | $.VarRef<net.IPConn> | null),
			Conn: init?.Conn ?? (null! as socket.Conn | $.VarRef<socket.Conn> | null),
			rawOpt: init?.rawOpt ? init.rawOpt.clone() : new __goscript_control.rawOpt(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): packetHandler {
		return new packetHandler(this, true)
	}

	public __goscriptAssign(source: packetHandler): void {
		const target = this._fields
		const values = source._fields
		target.IPConn = values.IPConn
		target.Conn = values.Conn
		$.assignStruct(target.rawOpt, values.rawOpt)
	}

	public async ReadBatch(ms: $.Slice<__goscript_batch.Message>, flags: number): globalThis.Promise<[number, $.GoError]> {
		const c: packetHandler | $.VarRef<packetHandler> | null = this;
		const c$: packetHandler = c == null ? $.pointerTarget<packetHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<packetHandler>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as packetHandler).ok() : packetHandler.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		switch ((runtime.GOOS as string)) {
			case "linux":
			{
				let [n, err] = $.pointerValue<socket.Conn>((c$ as packetHandler).Conn).RecvMsgs(ms, flags)
				if (err != null) {
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "read", Net: __goscriptLiteralField0, Source: __goscriptLiteralField1, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				return [n, err]
				break
			}
			default:
			{
				let n = 1
				let err = $.pointerValue<socket.Conn>((c$ as packetHandler).Conn).RecvMsg($.indexRef(ms!, 0), flags)
				if (err != null) {
					n = 0
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField3 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "read", Net: __goscriptLiteralField2, Source: __goscriptLiteralField3, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				if (__goscript_helper.compatFreeBSD32 && ($.arrayIndex(ms!, 0).NN > 0)) {
					__goscript_helper.adjustFreeBSD32($.indexRef(ms!, 0))
				}
				return [n, err]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadFrom(b: $.Slice<number>): globalThis.Promise<[__goscript_header.Header | $.VarRef<__goscript_header.Header> | null, $.Slice<number>, __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null, $.GoError]> {
		const c: packetHandler | $.VarRef<packetHandler> | null = this;
		let h: __goscript_header.Header | $.VarRef<__goscript_header.Header> | null = null! as __goscript_header.Header | $.VarRef<__goscript_header.Header> | null
		let p: $.Slice<number> = null! as $.Slice<number>
		let cm: __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null = null! as __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null
		let err: $.GoError = null! as $.GoError
		const c$: packetHandler = c == null ? $.pointerTarget<packetHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<packetHandler>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as packetHandler).ok() : packetHandler.prototype.ok.call(c))) {
			return [null, null, null, __goscript_helper.errInvalidConn]
		}
		await (c$ as packetHandler).rawOpt.RWMutex.RLock()
		let m = $.varRef((() => { const __goscriptLiteralField4 = __goscript_control.NewControlMessage((c$ as packetHandler).rawOpt.cflags); return new socket.Message({Buffers: $.arrayToSlice<$.Slice<number>>([b]), OOB: __goscriptLiteralField4}, true) })())
		void (c$ as packetHandler).rawOpt.RWMutex.RUnlock()
		{
			let __goscriptShadow0 = $.pointerValue<socket.Conn>((c$ as packetHandler).Conn).RecvMsg(m, 0)
			if (__goscriptShadow0 != null) {
				return [null, null, null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField5 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField6 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "read", Net: __goscriptLiteralField5, Source: __goscriptLiteralField6, Err: __goscriptShadow0}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			}
		}
		let hs: $.Slice<number> = null! as $.Slice<number>
		{
			let __goscriptTuple0: any = slicePacket($.goSlice(b, undefined, m.value.N))
			hs = __goscriptTuple0[0]
			p = __goscriptTuple0[1]
			err = __goscriptTuple0[2]
			if (err != null) {
				return [null, null, null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField7 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField8 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "read", Net: __goscriptLiteralField7, Source: __goscriptLiteralField8, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			}
		}
		{
			let __goscriptTuple1: any = await __goscript_header.ParseHeader(hs)
			h = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [null, null, null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField9 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField10 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "read", Net: __goscriptLiteralField9, Source: __goscriptLiteralField10, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			}
		}
		if (m.value.NN > 0) {
			if (__goscript_helper.compatFreeBSD32) {
				__goscript_helper.adjustFreeBSD32(m)
			}
			cm = new __goscript_control.ControlMessage()
			{
				let __goscriptShadow1 = await (cm !== null && (cm as any).__isVarRef !== true && (cm as any).__goValue === undefined ? ((cm as any) as __goscript_control.ControlMessage).Parse($.goSlice(m.value.OOB, undefined, m.value.NN)) : __goscript_control.ControlMessage.prototype.Parse.call(cm, $.goSlice(m.value.OOB, undefined, m.value.NN)))
				if (__goscriptShadow1 != null) {
					return [null, null, null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField11 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField12 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "read", Net: __goscriptLiteralField11, Source: __goscriptLiteralField12, Err: __goscriptShadow1}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
				}
			}
		}
		{
			let __goscriptTuple2: any = $.typeAssertTuple<net.IPAddr | $.VarRef<net.IPAddr> | null>(m.value.Addr, /* @__PURE__ */ $.pointerType("net.IPAddr"))
			let src: net.IPAddr | $.VarRef<net.IPAddr> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok && (cm != null)) {
				$.pointerValue<__goscript_control.ControlMessage>(cm).Src = ($.pointerValue<net.IPAddr>(src).IP as net.IP)
			}
		}
		return [h, p, cm, err]
	}

	public async WriteBatch(ms: $.Slice<__goscript_batch.Message>, flags: number): globalThis.Promise<[number, $.GoError]> {
		const c: packetHandler | $.VarRef<packetHandler> | null = this;
		const c$: packetHandler = c == null ? $.pointerTarget<packetHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<packetHandler>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as packetHandler).ok() : packetHandler.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		switch ((runtime.GOOS as string)) {
			case "linux":
			{
				let [n, err] = $.pointerValue<socket.Conn>((c$ as packetHandler).Conn).SendMsgs(ms, flags)
				if (err != null) {
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField13 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField14 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "write", Net: __goscriptLiteralField13, Source: __goscriptLiteralField14, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				return [n, err]
				break
			}
			default:
			{
				let n = 1
				let err = $.pointerValue<socket.Conn>((c$ as packetHandler).Conn).SendMsg($.indexRef(ms!, 0), flags)
				if (err != null) {
					n = 0
					err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField15 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField16 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); return new net.OpError({Op: "write", Net: __goscriptLiteralField15, Source: __goscriptLiteralField16, Err: err}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
				}
				return [n, err]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async WriteTo(h: __goscript_header.Header | $.VarRef<__goscript_header.Header> | null, p: $.Slice<number>, cm: __goscript_control.ControlMessage | $.VarRef<__goscript_control.ControlMessage> | null): globalThis.Promise<$.GoError> {
		const c: packetHandler | $.VarRef<packetHandler> | null = this;
		const c$: packetHandler = c == null ? $.pointerTarget<packetHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<packetHandler>(c)
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as packetHandler).ok() : packetHandler.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let m = $.varRef((await (async () => { const __goscriptLiteralField17 = await (cm !== null && (cm as any).__isVarRef !== true && (cm as any).__goValue === undefined ? ((cm as any) as __goscript_control.ControlMessage).Marshal() : __goscript_control.ControlMessage.prototype.Marshal.call(cm)); return new socket.Message({OOB: __goscriptLiteralField17}, true) })()))
		let __goscriptTuple3: any = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_header.Header).Marshal() : __goscript_header.Header.prototype.Marshal.call(h))
		let wh: $.Slice<number> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return err
		}
		m.value.Buffers = $.arrayToSlice<$.Slice<number>>([wh, p])
		let dst: net.IPAddr | $.VarRef<net.IPAddr> | null = new net.IPAddr()
		let dst$: net.IPAddr = dst == null ? $.pointerTarget<net.IPAddr>(dst) : (dst as any).__isVarRef === true ? (dst as any).value : (dst as any).__goValue === undefined ? (dst as any) : $.pointerTarget<net.IPAddr>(dst)
		if (cm != null) {
			{
				let ip: net.IP = (net.IP_To4($.pointerValue<__goscript_control.ControlMessage>(cm).Dst) as net.IP)
				if (ip != null) {
					;(dst$ as net.IPAddr).IP = (ip as net.IP)
				}
			}
		}
		if ((dst$ as net.IPAddr).IP == null) {
			;(dst$ as net.IPAddr).IP = ($.pointerValue<__goscript_header.Header>(h).Dst as net.IP)
		}
		m.value.Addr = $.interfaceValue<net.Addr | null>(dst, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr"))
		{
			let __goscriptShadow2 = $.pointerValue<socket.Conn>((c$ as packetHandler).Conn).SendMsg(m, 0)
			if (__goscriptShadow2 != null) {
				return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField18 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>($.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr()).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField19 = $.pointerValue<net.IPConn>((c$ as packetHandler).IPConn).conn.LocalAddr(); const __goscriptLiteralField20 = __goscript_helper.opAddr($.interfaceValue<net.Addr | null>(dst, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr"))); return new net.OpError({Op: "write", Net: __goscriptLiteralField18, Source: __goscriptLiteralField19, Addr: __goscriptLiteralField20, Err: __goscriptShadow2}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public ok(): boolean {
		const c: packetHandler | $.VarRef<packetHandler> | null = this;
		const c$: packetHandler = c == null ? $.pointerTarget<packetHandler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<packetHandler>(c)
		return ((c != null) && ((c$ as packetHandler).IPConn != null)) && ((c$ as packetHandler).Conn != null)
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).conn.Close()
	}

	public File(): any {
		return $.pointerValue<net.IPConn>(this.IPConn).conn.File()
	}

	public LocalAddr(): any {
		return $.pointerValue<net.IPConn>(this.IPConn).conn.LocalAddr()
	}

	public async Read(b: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).conn.Read(b)
	}

	public async ReadFromIP(b: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).ReadFromIP(b)
	}

	public async ReadMsgIP(b: any, oob: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).ReadMsgIP(b, oob)
	}

	public RemoteAddr(): any {
		return $.pointerValue<net.IPConn>(this.IPConn).conn.RemoteAddr()
	}

	public async SetDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).conn.SetDeadline(t)
	}

	public async SetReadBuffer(bytes: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).conn.SetReadBuffer(bytes)
	}

	public async SetReadDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).conn.SetReadDeadline(t)
	}

	public SetWriteBuffer(bytes: any): any {
		return $.pointerValue<net.IPConn>(this.IPConn).conn.SetWriteBuffer(bytes)
	}

	public async SetWriteDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).conn.SetWriteDeadline(t)
	}

	public SyscallConn(): any {
		return $.pointerValue<net.IPConn>(this.IPConn).SyscallConn()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).conn.Write(b)
	}

	public async WriteMsgIP(b: any, oob: any, addr: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).WriteMsgIP(b, oob, addr)
	}

	public async WriteToIP(b: any, addr: any): globalThis.Promise<any> {
		return await $.pointerValue<net.IPConn>(this.IPConn).WriteToIP(b, addr)
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
		"ipv4.packetHandler",
		() => new packetHandler(),
		() => [$.methodSignature("ReadBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["h", /* @__PURE__ */ $.pointerType("ipv4.Header")], ["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cm", /* @__PURE__ */ $.pointerType("ipv4.ControlMessage")], ["err", "error"]], true), $.methodSignature("WriteBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteTo", [["h", /* @__PURE__ */ $.pointerType("ipv4.Header")], ["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cm", /* @__PURE__ */ $.pointerType("ipv4.ControlMessage")]], ["error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Close", [], ["error"]), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("ReadFromIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.IPAddr"), "error"]), $.methodSignature("ReadMsgIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")], ["err", "error"]]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteMsgIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteToIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true), $.methodSignature("clear", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [], true), $.methodSignature("isset", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("set", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [], true)],
		packetHandler,
		() => [/* @__PURE__ */ $.structField("IPConn", /* @__PURE__ */ $.pointerType("net.IPConn"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Conn", /* @__PURE__ */ $.pointerType("socket.Conn"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("rawOpt", "ipv4.rawOpt", [2], 16, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true })]
	)
}

export function slicePacket(b: $.Slice<number>): [$.Slice<number>, $.Slice<number>, $.GoError] {
	let h: $.Slice<number> = null! as $.Slice<number>
	let p: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(b) < 20) {
		return [null, null, __goscript_helper.errHeaderTooShort]
	}
	let hdrlen = $.int($.arrayIndex(b!, 0) & 0x0f) << 2
	return [$.goSlice(b, undefined, hdrlen), $.goSlice(b, hdrlen, undefined), null]
}

var __goscriptAwait: any
