// Generated file based on endpoint.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as bpf from "@goscript/golang.org/x/net/bpf/index.js"

import * as time from "@goscript/time/index.js"

import * as socket from "@goscript/golang.org/x/net/internal/socket/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_batch from "./batch.gs.ts"

import * as __goscript_control from "./control.gs.ts"

import * as __goscript_control_stub from "./control_stub.gs.ts"

import * as __goscript_dgramopt from "./dgramopt.gs.ts"

import * as __goscript_genericopt from "./genericopt.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"

import type * as __goscript_icmp from "./icmp.gs.ts"

import * as __goscript_icmp_stub from "./icmp_stub.gs.ts"

import * as __goscript_payload from "./payload.gs.ts"

import * as __goscript_payload_nocmsg from "./payload_nocmsg.gs.ts"

import * as __goscript_sockopt from "./sockopt.gs.ts"

import * as __goscript_sockopt_stub from "./sockopt_stub.gs.ts"

import type * as __goscript_sys_asmreq_stub from "./sys_asmreq_stub.gs.ts"

import type * as __goscript_sys_bpf_stub from "./sys_bpf_stub.gs.ts"

import type * as __goscript_sys_ssmreq_stub from "./sys_ssmreq_stub.gs.ts"

import * as __goscript_sys_stub from "./sys_stub.gs.ts"
import "@goscript/net/index.js"
import "@goscript/golang.org/x/net/bpf/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/internal/socket/index.js"
import "@goscript/sync/index.js"
import "./batch.gs.ts"
import "./control.gs.ts"
import "./control_stub.gs.ts"
import "./dgramopt.gs.ts"
import "./genericopt.gs.ts"
import "./helper.gs.ts"
import "./icmp_stub.gs.ts"
import "./payload.gs.ts"
import "./payload_nocmsg.gs.ts"
import "./sockopt.gs.ts"
import "./sockopt_stub.gs.ts"
import "./sys_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv6", ["ipv6.Conn", "ipv6.genericOpt", "ipv6.PacketConn", "ipv6.dgramOpt"])

export class genericOpt {
	public get Conn(): socket.Conn | $.VarRef<socket.Conn> | null {
		return this._fields.Conn
	}

	public set Conn(value: socket.Conn | $.VarRef<socket.Conn> | null) {
		this._fields.Conn = value
	}

	public _fields: {
		Conn: socket.Conn | $.VarRef<socket.Conn> | null
	}

	constructor(init?: Partial<{Conn?: socket.Conn | $.VarRef<socket.Conn> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Conn: init?.Conn ?? (null! as socket.Conn | $.VarRef<socket.Conn> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): genericOpt {
		return new genericOpt(this, true)
	}

	public __goscriptAssign(source: genericOpt): void {
		const target = this._fields
		const values = source._fields
		target.Conn = values.Conn
	}

	public async HopLimit(): globalThis.Promise<[number, $.GoError]> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple1: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 1, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return [0, __goscript_helper.errNotImplemented]
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<genericOpt>(c).Conn)
	}

	public async SetHopLimit(hoplim: number): globalThis.Promise<$.GoError> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple2: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 1, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<genericOpt>(c).Conn, hoplim)
	}

	public async SetTrafficClass(tclass: number): globalThis.Promise<$.GoError> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple3: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 0, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<genericOpt>(c).Conn, tclass)
	}

	public async TrafficClass(): globalThis.Promise<[number, $.GoError]> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple4: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 0, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			return [0, __goscript_helper.errNotImplemented]
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<genericOpt>(c).Conn)
	}

	public ok(): boolean {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		return (c != null) && ($.pointerValue<genericOpt>(c).Conn != null)
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

	static __typeInfo = $.registerStructType(
		"ipv6.genericOpt",
		() => new genericOpt(),
		() => [$.methodSignature("HopLimit", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("SetHopLimit", [["hoplim", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetTrafficClass", [["tclass", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("TrafficClass", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"])],
		genericOpt,
		() => [/* @__PURE__ */ $.structField("Conn", /* @__PURE__ */ $.pointerType("socket.Conn"), [0], 0, true, { anonymous: true })]
	)
}

export class Conn {
	public get genericOpt(): genericOpt {
		return this._fields.genericOpt
	}

	public set genericOpt(value: genericOpt) {
		this._fields.genericOpt = value
	}

	public _fields: {
		genericOpt: genericOpt
	}

	constructor(init?: Partial<{genericOpt?: genericOpt}>, __goscriptValue?: boolean) {
		this._fields = {
			genericOpt: init?.genericOpt ? init.genericOpt.clone() : new genericOpt(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Conn {
		return new Conn(this, true)
	}

	public __goscriptAssign(source: Conn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.genericOpt, values.genericOpt)
	}

	public PathMTU(): [number, $.GoError] {
		const c: Conn | $.VarRef<Conn> | null = this;
		if (!$.pointerValue<Conn>(c).genericOpt.ok()) {
			return [0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple0: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 9, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [0, __goscript_helper.errNotImplemented]
		}
		let [, mtu, err] = (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).getMTUInfo($.pointerValue<Conn>(c).genericOpt.Conn) : __goscript_sockopt.sockOpt.prototype.getMTUInfo.call(so, $.pointerValue<Conn>(c).genericOpt.Conn))
		if (err != null) {
			return [0, err]
		}
		return [mtu, null]
	}

	public async HopLimit(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).HopLimit()
	}

	public RecvMsg(m: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).RecvMsg(m, flags)
	}

	public RecvMsgs(ms: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).RecvMsgs(ms, flags)
	}

	public SendMsg(m: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).SendMsg(m, flags)
	}

	public SendMsgs(ms: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).SendMsgs(ms, flags)
	}

	public async SetHopLimit(hoplim: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetHopLimit(hoplim)
	}

	public async SetTrafficClass(tclass: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTrafficClass(tclass)
	}

	public async TrafficClass(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TrafficClass()
	}

	public ok(): any {
		return $.pointerValue<genericOpt>(this.genericOpt).ok()
	}

	static __typeInfo = $.registerStructType(
		"ipv6.Conn",
		() => new Conn(),
		() => [$.methodSignature("PathMTU", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("HopLimit", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SetHopLimit", [["hoplim", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetTrafficClass", [["tclass", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("TrafficClass", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Conn,
		() => [/* @__PURE__ */ $.structField("genericOpt", "ipv6.genericOpt", [0], 0, false, { pkgPath: "golang.org/x/net/ipv6", anonymous: true })]
	)
}

export class dgramOpt {
	public get Conn(): socket.Conn | $.VarRef<socket.Conn> | null {
		return this._fields.Conn
	}

	public set Conn(value: socket.Conn | $.VarRef<socket.Conn> | null) {
		this._fields.Conn = value
	}

	public _fields: {
		Conn: socket.Conn | $.VarRef<socket.Conn> | null
	}

	constructor(init?: Partial<{Conn?: socket.Conn | $.VarRef<socket.Conn> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Conn: init?.Conn ?? (null! as socket.Conn | $.VarRef<socket.Conn> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dgramOpt {
		return new dgramOpt(this, true)
	}

	public __goscriptAssign(source: dgramOpt): void {
		const target = this._fields
		const values = source._fields
		target.Conn = values.Conn
	}

	public async Checksum(): globalThis.Promise<[boolean, number, $.GoError]> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		let on: boolean = false
		let offset: number = 0
		let err: $.GoError = null! as $.GoError
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return [false, 0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple6: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 10, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return [false, 0, __goscript_helper.errNotImplemented]
		}
		let __goscriptTuple7: any = await $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<dgramOpt>(c).Conn)
		offset = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [false, 0, err]
		}
		if (offset < 0) {
			return [false, 0, null]
		}
		return [true, offset, null]
	}

	public ExcludeSourceSpecificGroup(ifi: net.Interface | $.VarRef<net.Interface> | null, group: net.Addr | null, source: net.Addr | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple8: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 16, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP16(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP16(source) as net.IP)
		if (src == null) {
			return __goscript_helper.errMissingAddress
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setSourceGroup($.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)) : __goscript_sockopt.sockOpt.prototype.setSourceGroup.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)))
	}

	public ICMPFilter(): [__goscript_icmp.ICMPFilter | $.VarRef<__goscript_icmp.ICMPFilter> | null, $.GoError] {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return [null, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple9: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 11, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (!ok) {
			return [null, __goscript_helper.errNotImplemented]
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).getICMPFilter($.pointerValue<dgramOpt>(c).Conn) : __goscript_sockopt.sockOpt.prototype.getICMPFilter.call(so, $.pointerValue<dgramOpt>(c).Conn))
	}

	public IncludeSourceSpecificGroup(ifi: net.Interface | $.VarRef<net.Interface> | null, group: net.Addr | null, source: net.Addr | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple10: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 17, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP16(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP16(source) as net.IP)
		if (src == null) {
			return __goscript_helper.errMissingAddress
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setSourceGroup($.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)) : __goscript_sockopt.sockOpt.prototype.setSourceGroup.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)))
	}

	public JoinGroup(ifi: net.Interface | $.VarRef<net.Interface> | null, group: net.Addr | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple11: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 12, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple11[0]
		let ok = __goscriptTuple11[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP16(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setGroup($.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP)) : __goscript_sockopt.sockOpt.prototype.setGroup.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP)))
	}

	public JoinSourceSpecificGroup(ifi: net.Interface | $.VarRef<net.Interface> | null, group: net.Addr | null, source: net.Addr | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple12: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 14, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP16(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP16(source) as net.IP)
		if (src == null) {
			return __goscript_helper.errMissingAddress
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setSourceGroup($.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)) : __goscript_sockopt.sockOpt.prototype.setSourceGroup.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)))
	}

	public LeaveGroup(ifi: net.Interface | $.VarRef<net.Interface> | null, group: net.Addr | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple13: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 13, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple13[0]
		let ok = __goscriptTuple13[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP16(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setGroup($.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP)) : __goscript_sockopt.sockOpt.prototype.setGroup.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP)))
	}

	public LeaveSourceSpecificGroup(ifi: net.Interface | $.VarRef<net.Interface> | null, group: net.Addr | null, source: net.Addr | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple14: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 15, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple14[0]
		let ok = __goscriptTuple14[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP16(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP16(source) as net.IP)
		if (src == null) {
			return __goscript_helper.errMissingAddress
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setSourceGroup($.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)) : __goscript_sockopt.sockOpt.prototype.setSourceGroup.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)))
	}

	public async MulticastHopLimit(): globalThis.Promise<[number, $.GoError]> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple15: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 3, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple15[0]
		let ok = __goscriptTuple15[1]
		if (!ok) {
			return [0, __goscript_helper.errNotImplemented]
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<dgramOpt>(c).Conn)
	}

	public MulticastInterface(): [net.Interface | $.VarRef<net.Interface> | null, $.GoError] {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return [null, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple16: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 2, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple16[0]
		let ok = __goscriptTuple16[1]
		if (!ok) {
			return [null, __goscript_helper.errNotImplemented]
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).getMulticastInterface($.pointerValue<dgramOpt>(c).Conn) : __goscript_sockopt.sockOpt.prototype.getMulticastInterface.call(so, $.pointerValue<dgramOpt>(c).Conn))
	}

	public async MulticastLoopback(): globalThis.Promise<[boolean, $.GoError]> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return [false, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple17: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 4, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		if (!ok) {
			return [false, __goscript_helper.errNotImplemented]
		}
		let [on, err] = await $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<dgramOpt>(c).Conn)
		if (err != null) {
			return [false, err]
		}
		return [on == 1, null]
	}

	public SetBPF(filter: $.Slice<bpf.RawInstruction>): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple18: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 18, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple18[0]
		let ok = __goscriptTuple18[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setBPF($.pointerValue<dgramOpt>(c).Conn, filter) : __goscript_sockopt.sockOpt.prototype.setBPF.call(so, $.pointerValue<dgramOpt>(c).Conn, filter))
	}

	public async SetChecksum(on: boolean, offset: number): globalThis.Promise<$.GoError> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple19: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 10, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple19[0]
		let ok = __goscriptTuple19[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		if (!on) {
			offset = -1
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<dgramOpt>(c).Conn, offset)
	}

	public SetICMPFilter(f: __goscript_icmp.ICMPFilter | $.VarRef<__goscript_icmp.ICMPFilter> | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple20: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 11, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple20[0]
		let ok = __goscriptTuple20[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setICMPFilter($.pointerValue<dgramOpt>(c).Conn, f) : __goscript_sockopt.sockOpt.prototype.setICMPFilter.call(so, $.pointerValue<dgramOpt>(c).Conn, f))
	}

	public async SetMulticastHopLimit(hoplim: number): globalThis.Promise<$.GoError> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple21: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 3, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple21[0]
		let ok = __goscriptTuple21[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<dgramOpt>(c).Conn, hoplim)
	}

	public SetMulticastInterface(ifi: net.Interface | $.VarRef<net.Interface> | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple22: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 2, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple22[0]
		let ok = __goscriptTuple22[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setMulticastInterface($.pointerValue<dgramOpt>(c).Conn, ifi) : __goscript_sockopt.sockOpt.prototype.setMulticastInterface.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi))
	}

	public async SetMulticastLoopback(on: boolean): globalThis.Promise<$.GoError> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple23: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 4, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple23[0]
		let ok = __goscriptTuple23[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<dgramOpt>(c).Conn, __goscript_helper.boolint(on))
	}

	public ok(): boolean {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		return (c != null) && ($.pointerValue<dgramOpt>(c).Conn != null)
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

	static __typeInfo = $.registerStructType(
		"ipv6.dgramOpt",
		() => new dgramOpt(),
		() => [$.methodSignature("Checksum", [], [["on", /* @__PURE__ */ $.basicType("bool")], ["offset", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ExcludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("ICMPFilter", [], [/* @__PURE__ */ $.pointerType("ipv6.ICMPFilter"), "error"], true), $.methodSignature("IncludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("JoinGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("JoinSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("LeaveGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("LeaveSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("MulticastHopLimit", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MulticastInterface", [], [/* @__PURE__ */ $.pointerType("net.Interface"), "error"], true), $.methodSignature("MulticastLoopback", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("SetBPF", [["filter", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"], true), $.methodSignature("SetChecksum", [["on", /* @__PURE__ */ $.basicType("bool")], ["offset", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetICMPFilter", [["f", /* @__PURE__ */ $.pointerType("ipv6.ICMPFilter")]], ["error"], true), $.methodSignature("SetMulticastHopLimit", [["hoplim", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetMulticastInterface", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")]], ["error"], true), $.methodSignature("SetMulticastLoopback", [["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"])],
		dgramOpt,
		() => [/* @__PURE__ */ $.structField("Conn", /* @__PURE__ */ $.pointerType("socket.Conn"), [0], 0, true, { anonymous: true })]
	)
}

export class PacketConn {
	public get genericOpt(): genericOpt {
		return this._fields.genericOpt
	}

	public set genericOpt(value: genericOpt) {
		this._fields.genericOpt = value
	}

	public get dgramOpt(): dgramOpt {
		return this._fields.dgramOpt
	}

	public set dgramOpt(value: dgramOpt) {
		this._fields.dgramOpt = value
	}

	public get payloadHandler(): __goscript_payload.payloadHandler {
		return this._fields.payloadHandler
	}

	public set payloadHandler(value: __goscript_payload.payloadHandler) {
		this._fields.payloadHandler = value
	}

	public _fields: {
		genericOpt: genericOpt
		dgramOpt: dgramOpt
		payloadHandler: __goscript_payload.payloadHandler
	}

	constructor(init?: Partial<{genericOpt?: genericOpt, dgramOpt?: dgramOpt, payloadHandler?: __goscript_payload.payloadHandler}>, __goscriptValue?: boolean) {
		this._fields = {
			genericOpt: init?.genericOpt ? init.genericOpt.clone() : new genericOpt(undefined, true),
			dgramOpt: init?.dgramOpt ? init.dgramOpt.clone() : new dgramOpt(undefined, true),
			payloadHandler: init?.payloadHandler ? init.payloadHandler.clone() : new __goscript_payload.payloadHandler(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PacketConn {
		return new PacketConn(this, true)
	}

	public __goscriptAssign(source: PacketConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.genericOpt, values.genericOpt)
		$.assignStruct(target.dgramOpt, values.dgramOpt)
		$.assignStruct(target.payloadHandler, values.payloadHandler)
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const c: PacketConn | $.VarRef<PacketConn> | null = this;
		const c$: PacketConn = c == null ? $.pointerTarget<PacketConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<PacketConn>(c)
		if (!(c$ as PacketConn).payloadHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<Exclude<net.PacketConn, null>>((c$ as PacketConn).payloadHandler.PacketConn).Close()
	}

	public SetControlMessage(cf: __goscript_control.ControlFlags, on: boolean): $.GoError {
		const c: PacketConn | $.VarRef<PacketConn> | null = this;
		const c$: PacketConn = c == null ? $.pointerTarget<PacketConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<PacketConn>(c)
		if (!(c$ as PacketConn).payloadHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return __goscript_control_stub.setControlMessage((c$ as PacketConn).dgramOpt.Conn, $.fieldRef((c$ as PacketConn).payloadHandler._fields, "rawOpt"), cf, on)
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: PacketConn | $.VarRef<PacketConn> | null = this;
		const c$: PacketConn = c == null ? $.pointerTarget<PacketConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<PacketConn>(c)
		if (!(c$ as PacketConn).payloadHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<Exclude<net.PacketConn, null>>((c$ as PacketConn).payloadHandler.PacketConn).SetDeadline($.markAsStructValue($.cloneStructValue(t)))
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: PacketConn | $.VarRef<PacketConn> | null = this;
		const c$: PacketConn = c == null ? $.pointerTarget<PacketConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<PacketConn>(c)
		if (!(c$ as PacketConn).payloadHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<Exclude<net.PacketConn, null>>((c$ as PacketConn).payloadHandler.PacketConn).SetReadDeadline($.markAsStructValue($.cloneStructValue(t)))
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: PacketConn | $.VarRef<PacketConn> | null = this;
		const c$: PacketConn = c == null ? $.pointerTarget<PacketConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<PacketConn>(c)
		if (!(c$ as PacketConn).payloadHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<Exclude<net.PacketConn, null>>((c$ as PacketConn).payloadHandler.PacketConn).SetWriteDeadline($.markAsStructValue($.cloneStructValue(t)))
	}

	public async HopLimit(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).HopLimit()
	}

	public RecvMsg(m: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).RecvMsg(m, flags)
	}

	public RecvMsgs(ms: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).RecvMsgs(ms, flags)
	}

	public SendMsg(m: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).SendMsg(m, flags)
	}

	public SendMsgs(ms: any, flags: any): any {
		return $.pointerValue<any>($.pointerValue<genericOpt>(this.genericOpt).Conn).SendMsgs(ms, flags)
	}

	public async SetHopLimit(hoplim: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetHopLimit(hoplim)
	}

	public async SetTrafficClass(tclass: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTrafficClass(tclass)
	}

	public async TrafficClass(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TrafficClass()
	}

	public ok(): any {
		return $.pointerValue<genericOpt>(this.genericOpt).ok()
	}

	public async Checksum(): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).Checksum()
	}

	public ExcludeSourceSpecificGroup(ifi: any, group: any, source: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).ExcludeSourceSpecificGroup(ifi, group, source)
	}

	public ICMPFilter(): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).ICMPFilter()
	}

	public IncludeSourceSpecificGroup(ifi: any, group: any, source: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).IncludeSourceSpecificGroup(ifi, group, source)
	}

	public JoinGroup(ifi: any, group: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).JoinGroup(ifi, group)
	}

	public JoinSourceSpecificGroup(ifi: any, group: any, source: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).JoinSourceSpecificGroup(ifi, group, source)
	}

	public LeaveGroup(ifi: any, group: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).LeaveGroup(ifi, group)
	}

	public LeaveSourceSpecificGroup(ifi: any, group: any, source: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).LeaveSourceSpecificGroup(ifi, group, source)
	}

	public async MulticastHopLimit(): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).MulticastHopLimit()
	}

	public MulticastInterface(): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).MulticastInterface()
	}

	public async MulticastLoopback(): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).MulticastLoopback()
	}

	public SetBPF(filter: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetBPF(filter)
	}

	public async SetChecksum(on: any, offset: any): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).SetChecksum(on, offset)
	}

	public SetICMPFilter(f: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetICMPFilter(f)
	}

	public async SetMulticastHopLimit(hoplim: any): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastHopLimit(hoplim)
	}

	public SetMulticastInterface(ifi: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastInterface(ifi)
	}

	public async SetMulticastLoopback(on: any): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastLoopback(on)
	}

	public LocalAddr(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).PacketConn).LocalAddr()
	}

	public Lock(): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.RWMutex.Lock()
	}

	public RLock(): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.RWMutex.RLock()
	}

	public RLocker(): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.RWMutex.RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.RWMutex.RUnlock()
	}

	public async ReadBatch(ms: any, flags: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).ReadBatch(ms, flags)
	}

	public async ReadFrom(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).ReadFrom(b)
	}

	public TryLock(): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.RWMutex.TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.RWMutex.TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.RWMutex.Unlock()
	}

	public async WriteBatch(ms: any, flags: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).WriteBatch(ms, flags)
	}

	public async WriteTo(b: any, cm: any, dst: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).WriteTo(b, cm, dst)
	}

	public clear(f: any): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.clear(f)
	}

	public isset(f: any): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.isset(f)
	}

	public ["set"](f: any): any {
		return $.pointerValue<__goscript_payload.payloadHandler>(this.payloadHandler).rawOpt.set(f)
	}

	static __typeInfo = $.registerStructType(
		"ipv6.PacketConn",
		() => new PacketConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("SetControlMessage", [["cf", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")], ["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("HopLimit", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SetHopLimit", [["hoplim", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetTrafficClass", [["tclass", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("TrafficClass", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Checksum", [], [["on", /* @__PURE__ */ $.basicType("bool")], ["offset", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ExcludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("ICMPFilter", [], [/* @__PURE__ */ $.pointerType("ipv6.ICMPFilter"), "error"], true), $.methodSignature("IncludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("JoinGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("JoinSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("LeaveGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("LeaveSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("MulticastHopLimit", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MulticastInterface", [], [/* @__PURE__ */ $.pointerType("net.Interface"), "error"], true), $.methodSignature("MulticastLoopback", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("SetBPF", [["filter", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"], true), $.methodSignature("SetChecksum", [["on", /* @__PURE__ */ $.basicType("bool")], ["offset", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetICMPFilter", [["f", /* @__PURE__ */ $.pointerType("ipv6.ICMPFilter")]], ["error"], true), $.methodSignature("SetMulticastHopLimit", [["hoplim", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetMulticastInterface", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")]], ["error"], true), $.methodSignature("SetMulticastLoopback", [["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("ReadBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["cm", /* @__PURE__ */ $.pointerType("ipv6.ControlMessage")], ["src", "net.Addr"], ["err", "error"]], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true), $.methodSignature("WriteBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cm", /* @__PURE__ */ $.pointerType("ipv6.ControlMessage")], ["dst", "net.Addr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("clear", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [], true), $.methodSignature("isset", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("set", [["f", /* @__PURE__ */ $.basicType("uint", "ipv6.ControlFlags")]], [], true)],
		PacketConn,
		() => [/* @__PURE__ */ $.structField("genericOpt", "ipv6.genericOpt", [0], 0, false, { pkgPath: "golang.org/x/net/ipv6", anonymous: true }), /* @__PURE__ */ $.structField("dgramOpt", "ipv6.dgramOpt", [1], 8, false, { pkgPath: "golang.org/x/net/ipv6", anonymous: true }), /* @__PURE__ */ $.structField("payloadHandler", "ipv6.payloadHandler", [2], 16, false, { pkgPath: "golang.org/x/net/ipv6", anonymous: true })]
	)
}

export async function NewConn(c: net.Conn | null): globalThis.Promise<Conn | $.VarRef<Conn> | null> {
	let __goscriptTuple5: any = await socket.NewConn(c)
	let cc: socket.Conn | $.VarRef<socket.Conn> | null = __goscriptTuple5[0]
	return new Conn({genericOpt: new genericOpt({Conn: cc}, true)})
}

export async function NewPacketConn(c: net.PacketConn | null): globalThis.Promise<PacketConn | $.VarRef<PacketConn> | null> {
	let __goscriptTuple24: any = await socket.NewConn($.mustTypeAssert<net.Conn | null>(c, "net.Conn"))
	let cc: socket.Conn | $.VarRef<socket.Conn> | null = __goscriptTuple24[0]
	return new PacketConn({genericOpt: new genericOpt({Conn: cc}, true), dgramOpt: new dgramOpt({Conn: cc}, true), payloadHandler: new __goscript_payload.payloadHandler({PacketConn: c, Conn: cc}, true)})
}
