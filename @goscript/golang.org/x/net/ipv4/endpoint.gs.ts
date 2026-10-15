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

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"

import type * as __goscript_icmp from "./icmp.gs.ts"

import * as __goscript_icmp_stub from "./icmp_stub.gs.ts"

import * as __goscript_packet from "./packet.gs.ts"

import * as __goscript_payload from "./payload.gs.ts"

import * as __goscript_payload_nocmsg from "./payload_nocmsg.gs.ts"

import * as __goscript_sockopt from "./sockopt.gs.ts"

import * as __goscript_sockopt_stub from "./sockopt_stub.gs.ts"

import type * as __goscript_sys_asmreq_stub from "./sys_asmreq_stub.gs.ts"

import type * as __goscript_sys_asmreqn_stub from "./sys_asmreqn_stub.gs.ts"

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
import "./header.gs.ts"
import "./helper.gs.ts"
import "./icmp_stub.gs.ts"
import "./packet.gs.ts"
import "./payload.gs.ts"
import "./payload_nocmsg.gs.ts"
import "./sockopt.gs.ts"
import "./sockopt_stub.gs.ts"
import "./sys_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv4", ["ipv4.Conn", "ipv4.genericOpt", "ipv4.PacketConn", "ipv4.dgramOpt", "ipv4.RawConn"])

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

	public async SetTOS(tos: number): globalThis.Promise<$.GoError> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple0: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 0, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<genericOpt>(c).Conn, tos)
	}

	public async SetTTL(ttl: number): globalThis.Promise<$.GoError> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple1: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 1, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<genericOpt>(c).Conn, ttl)
	}

	public async TOS(): globalThis.Promise<[number, $.GoError]> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple2: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 0, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return [0, __goscript_helper.errNotImplemented]
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<genericOpt>(c).Conn)
	}

	public async TTL(): globalThis.Promise<[number, $.GoError]> {
		const c: genericOpt | $.VarRef<genericOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as genericOpt).ok() : genericOpt.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple3: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 1, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
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
		"ipv4.genericOpt",
		() => new genericOpt(),
		() => [$.methodSignature("SetTOS", [["tos", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetTTL", [["ttl", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("TOS", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("TTL", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"])],
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

	public async SetTOS(tos: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTOS(tos)
	}

	public async SetTTL(ttl: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTTL(ttl)
	}

	public async TOS(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TOS()
	}

	public async TTL(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TTL()
	}

	public ok(): any {
		return $.pointerValue<genericOpt>(this.genericOpt).ok()
	}

	static __typeInfo = $.registerStructType(
		"ipv4.Conn",
		() => new Conn(),
		() => [$.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SetTOS", [["tos", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetTTL", [["ttl", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("TOS", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("TTL", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Conn,
		() => [/* @__PURE__ */ $.structField("genericOpt", "ipv4.genericOpt", [0], 0, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true })]
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

	public ExcludeSourceSpecificGroup(ifi: net.Interface | $.VarRef<net.Interface> | null, group: net.Addr | null, source: net.Addr | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple5: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 16, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP4(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP4(source) as net.IP)
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
		let __goscriptTuple6: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 11, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
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
		let __goscriptTuple7: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 17, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP4(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP4(source) as net.IP)
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
		let __goscriptTuple8: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 12, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP4(group) as net.IP)
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
		let __goscriptTuple9: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 14, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP4(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP4(source) as net.IP)
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
		let __goscriptTuple10: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 13, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP4(group) as net.IP)
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
		let __goscriptTuple11: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 15, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple11[0]
		let ok = __goscriptTuple11[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		let grp: net.IP = (__goscript_helper.netAddrToIP4(group) as net.IP)
		if (grp == null) {
			return __goscript_helper.errMissingAddress
		}
		let src: net.IP = (__goscript_helper.netAddrToIP4(source) as net.IP)
		if (src == null) {
			return __goscript_helper.errMissingAddress
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setSourceGroup($.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)) : __goscript_sockopt.sockOpt.prototype.setSourceGroup.call(so, $.pointerValue<dgramOpt>(c).Conn, ifi, (grp as net.IP), (src as net.IP)))
	}

	public MulticastInterface(): [net.Interface | $.VarRef<net.Interface> | null, $.GoError] {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return [null, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple12: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 3, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
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
		let __goscriptTuple13: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 4, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple13[0]
		let ok = __goscriptTuple13[1]
		if (!ok) {
			return [false, __goscript_helper.errNotImplemented]
		}
		let [on, err] = await $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<dgramOpt>(c).Conn)
		if (err != null) {
			return [false, err]
		}
		return [on == 1, null]
	}

	public async MulticastTTL(): globalThis.Promise<[number, $.GoError]> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return [0, __goscript_helper.errInvalidConn]
		}
		let __goscriptTuple14: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 2, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple14[0]
		let ok = __goscriptTuple14[1]
		if (!ok) {
			return [0, __goscript_helper.errNotImplemented]
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.GetInt($.pointerValue<dgramOpt>(c).Conn)
	}

	public SetBPF(filter: $.Slice<bpf.RawInstruction>): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple15: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 18, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple15[0]
		let ok = __goscriptTuple15[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setBPF($.pointerValue<dgramOpt>(c).Conn, filter) : __goscript_sockopt.sockOpt.prototype.setBPF.call(so, $.pointerValue<dgramOpt>(c).Conn, filter))
	}

	public SetICMPFilter(f: __goscript_icmp.ICMPFilter | $.VarRef<__goscript_icmp.ICMPFilter> | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple16: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 11, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple16[0]
		let ok = __goscriptTuple16[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return (so !== null && (so as any).__isVarRef !== true && (so as any).__goValue === undefined ? ((so as any) as __goscript_sockopt.sockOpt).setICMPFilter($.pointerValue<dgramOpt>(c).Conn, f) : __goscript_sockopt.sockOpt.prototype.setICMPFilter.call(so, $.pointerValue<dgramOpt>(c).Conn, f))
	}

	public SetMulticastInterface(ifi: net.Interface | $.VarRef<net.Interface> | null): $.GoError {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple17: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 3, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
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
		let __goscriptTuple18: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 4, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple18[0]
		let ok = __goscriptTuple18[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<dgramOpt>(c).Conn, __goscript_helper.boolint(on))
	}

	public async SetMulticastTTL(ttl: number): globalThis.Promise<$.GoError> {
		const c: dgramOpt | $.VarRef<dgramOpt> | null = this;
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as dgramOpt).ok() : dgramOpt.prototype.ok.call(c))) {
			return __goscript_helper.errInvalidConn
		}
		let __goscriptTuple19: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 2, null)
		let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple19[0]
		let ok = __goscriptTuple19[1]
		if (!ok) {
			return __goscript_helper.errNotImplemented
		}
		return $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<dgramOpt>(c).Conn, ttl)
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
		"ipv4.dgramOpt",
		() => new dgramOpt(),
		() => [$.methodSignature("ExcludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("ICMPFilter", [], [/* @__PURE__ */ $.pointerType("ipv4.ICMPFilter"), "error"], true), $.methodSignature("IncludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("JoinGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("JoinSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("LeaveGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("LeaveSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("MulticastInterface", [], [/* @__PURE__ */ $.pointerType("net.Interface"), "error"], true), $.methodSignature("MulticastLoopback", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("MulticastTTL", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("SetBPF", [["filter", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"], true), $.methodSignature("SetICMPFilter", [["f", /* @__PURE__ */ $.pointerType("ipv4.ICMPFilter")]], ["error"], true), $.methodSignature("SetMulticastInterface", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")]], ["error"], true), $.methodSignature("SetMulticastLoopback", [["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SetMulticastTTL", [["ttl", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"])],
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

	public async SetTOS(tos: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTOS(tos)
	}

	public async SetTTL(ttl: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTTL(ttl)
	}

	public async TOS(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TOS()
	}

	public async TTL(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TTL()
	}

	public ok(): any {
		return $.pointerValue<genericOpt>(this.genericOpt).ok()
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

	public MulticastInterface(): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).MulticastInterface()
	}

	public async MulticastLoopback(): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).MulticastLoopback()
	}

	public async MulticastTTL(): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).MulticastTTL()
	}

	public SetBPF(filter: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetBPF(filter)
	}

	public SetICMPFilter(f: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetICMPFilter(f)
	}

	public SetMulticastInterface(ifi: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastInterface(ifi)
	}

	public async SetMulticastLoopback(on: any): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastLoopback(on)
	}

	public async SetMulticastTTL(ttl: any): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastTTL(ttl)
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
		"ipv4.PacketConn",
		() => new PacketConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("SetControlMessage", [["cf", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")], ["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SetTOS", [["tos", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetTTL", [["ttl", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("TOS", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("TTL", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ExcludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("ICMPFilter", [], [/* @__PURE__ */ $.pointerType("ipv4.ICMPFilter"), "error"], true), $.methodSignature("IncludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("JoinGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("JoinSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("LeaveGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("LeaveSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("MulticastInterface", [], [/* @__PURE__ */ $.pointerType("net.Interface"), "error"], true), $.methodSignature("MulticastLoopback", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("MulticastTTL", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("SetBPF", [["filter", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"], true), $.methodSignature("SetICMPFilter", [["f", /* @__PURE__ */ $.pointerType("ipv4.ICMPFilter")]], ["error"], true), $.methodSignature("SetMulticastInterface", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")]], ["error"], true), $.methodSignature("SetMulticastLoopback", [["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SetMulticastTTL", [["ttl", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("ReadBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["cm", /* @__PURE__ */ $.pointerType("ipv4.ControlMessage")], ["src", "net.Addr"], ["err", "error"]], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true), $.methodSignature("WriteBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cm", /* @__PURE__ */ $.pointerType("ipv4.ControlMessage")], ["dst", "net.Addr"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("clear", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [], true), $.methodSignature("isset", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("set", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [], true)],
		PacketConn,
		() => [/* @__PURE__ */ $.structField("genericOpt", "ipv4.genericOpt", [0], 0, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true }), /* @__PURE__ */ $.structField("dgramOpt", "ipv4.dgramOpt", [1], 8, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true }), /* @__PURE__ */ $.structField("payloadHandler", "ipv4.payloadHandler", [2], 16, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true })]
	)
}

export class RawConn {
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

	public get packetHandler(): __goscript_packet.packetHandler {
		return this._fields.packetHandler
	}

	public set packetHandler(value: __goscript_packet.packetHandler) {
		this._fields.packetHandler = value
	}

	public _fields: {
		genericOpt: genericOpt
		dgramOpt: dgramOpt
		packetHandler: __goscript_packet.packetHandler
	}

	constructor(init?: Partial<{genericOpt?: genericOpt, dgramOpt?: dgramOpt, packetHandler?: __goscript_packet.packetHandler}>, __goscriptValue?: boolean) {
		this._fields = {
			genericOpt: init?.genericOpt ? init.genericOpt.clone() : new genericOpt(undefined, true),
			dgramOpt: init?.dgramOpt ? init.dgramOpt.clone() : new dgramOpt(undefined, true),
			packetHandler: init?.packetHandler ? init.packetHandler.clone() : new __goscript_packet.packetHandler(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RawConn {
		return new RawConn(this, true)
	}

	public __goscriptAssign(source: RawConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.genericOpt, values.genericOpt)
		$.assignStruct(target.dgramOpt, values.dgramOpt)
		$.assignStruct(target.packetHandler, values.packetHandler)
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const c: RawConn | $.VarRef<RawConn> | null = this;
		const c$: RawConn = c == null ? $.pointerTarget<RawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<RawConn>(c)
		if (!(c$ as RawConn).packetHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<net.IPConn>((c$ as RawConn).packetHandler.IPConn).conn.Close()
	}

	public SetControlMessage(cf: __goscript_control.ControlFlags, on: boolean): $.GoError {
		const c: RawConn | $.VarRef<RawConn> | null = this;
		const c$: RawConn = c == null ? $.pointerTarget<RawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<RawConn>(c)
		if (!(c$ as RawConn).packetHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return __goscript_control_stub.setControlMessage((c$ as RawConn).dgramOpt.Conn, $.fieldRef((c$ as RawConn).packetHandler._fields, "rawOpt"), cf, on)
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: RawConn | $.VarRef<RawConn> | null = this;
		const c$: RawConn = c == null ? $.pointerTarget<RawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<RawConn>(c)
		if (!(c$ as RawConn).packetHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<net.IPConn>((c$ as RawConn).packetHandler.IPConn).conn.SetDeadline(t)
	}

	public async SetReadDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: RawConn | $.VarRef<RawConn> | null = this;
		const c$: RawConn = c == null ? $.pointerTarget<RawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<RawConn>(c)
		if (!(c$ as RawConn).packetHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<net.IPConn>((c$ as RawConn).packetHandler.IPConn).conn.SetReadDeadline(t)
	}

	public async SetWriteDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const c: RawConn | $.VarRef<RawConn> | null = this;
		const c$: RawConn = c == null ? $.pointerTarget<RawConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<RawConn>(c)
		if (!(c$ as RawConn).packetHandler.ok()) {
			return __goscript_helper.errInvalidConn
		}
		return $.pointerValue<net.IPConn>((c$ as RawConn).packetHandler.IPConn).conn.SetWriteDeadline(t)
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

	public async SetTOS(tos: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTOS(tos)
	}

	public async SetTTL(ttl: any): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).SetTTL(ttl)
	}

	public async TOS(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TOS()
	}

	public async TTL(): globalThis.Promise<any> {
		return await $.pointerValue<genericOpt>(this.genericOpt).TTL()
	}

	public ok(): any {
		return $.pointerValue<genericOpt>(this.genericOpt).ok()
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

	public MulticastInterface(): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).MulticastInterface()
	}

	public async MulticastLoopback(): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).MulticastLoopback()
	}

	public async MulticastTTL(): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).MulticastTTL()
	}

	public SetBPF(filter: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetBPF(filter)
	}

	public SetICMPFilter(f: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetICMPFilter(f)
	}

	public SetMulticastInterface(ifi: any): any {
		return $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastInterface(ifi)
	}

	public async SetMulticastLoopback(on: any): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastLoopback(on)
	}

	public async SetMulticastTTL(ttl: any): globalThis.Promise<any> {
		return await $.pointerValue<dgramOpt>(this.dgramOpt).SetMulticastTTL(ttl)
	}

	public File(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).conn.File()
	}

	public LocalAddr(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).conn.LocalAddr()
	}

	public Lock(): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.RWMutex.Lock()
	}

	public RLock(): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.RWMutex.RLock()
	}

	public RLocker(): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.RWMutex.RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.RWMutex.RUnlock()
	}

	public async Read(b: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).conn.Read(b)
	}

	public async ReadBatch(ms: any, flags: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).ReadBatch(ms, flags)
	}

	public async ReadFrom(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).ReadFrom(b)
	}

	public async ReadFromIP(b: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).ReadFromIP(b)
	}

	public async ReadMsgIP(b: any, oob: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).ReadMsgIP(b, oob)
	}

	public RemoteAddr(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).conn.RemoteAddr()
	}

	public async SetReadBuffer(bytes: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).conn.SetReadBuffer(bytes)
	}

	public SetWriteBuffer(bytes: any): any {
		return $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).conn.SetWriteBuffer(bytes)
	}

	public SyscallConn(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).SyscallConn()
	}

	public TryLock(): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.RWMutex.TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.RWMutex.TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.RWMutex.Unlock()
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).conn.Write(b)
	}

	public async WriteBatch(ms: any, flags: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).WriteBatch(ms, flags)
	}

	public async WriteMsgIP(b: any, oob: any, addr: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).WriteMsgIP(b, oob, addr)
	}

	public async WriteTo(h: any, p: any, cm: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).WriteTo(h, p, cm)
	}

	public async WriteToIP(b: any, addr: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).IPConn).WriteToIP(b, addr)
	}

	public clear(f: any): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.clear(f)
	}

	public isset(f: any): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.isset(f)
	}

	public ["set"](f: any): any {
		return $.pointerValue<__goscript_packet.packetHandler>(this.packetHandler).rawOpt.set(f)
	}

	static __typeInfo = $.registerStructType(
		"ipv4.RawConn",
		() => new RawConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("SetControlMessage", [["cf", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")], ["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("SetTOS", [["tos", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetTTL", [["ttl", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("TOS", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("TTL", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ExcludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("ICMPFilter", [], [/* @__PURE__ */ $.pointerType("ipv4.ICMPFilter"), "error"], true), $.methodSignature("IncludeSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("JoinGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("JoinSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("LeaveGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"]], ["error"], true), $.methodSignature("LeaveSourceSpecificGroup", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["group", "net.Addr"], ["source", "net.Addr"]], ["error"], true), $.methodSignature("MulticastInterface", [], [/* @__PURE__ */ $.pointerType("net.Interface"), "error"], true), $.methodSignature("MulticastLoopback", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("MulticastTTL", [], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("SetBPF", [["filter", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"], true), $.methodSignature("SetICMPFilter", [["f", /* @__PURE__ */ $.pointerType("ipv4.ICMPFilter")]], ["error"], true), $.methodSignature("SetMulticastInterface", [["ifi", /* @__PURE__ */ $.pointerType("net.Interface")]], ["error"], true), $.methodSignature("SetMulticastLoopback", [["on", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SetMulticastTTL", [["ttl", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("ReadBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["h", /* @__PURE__ */ $.pointerType("ipv4.Header")], ["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cm", /* @__PURE__ */ $.pointerType("ipv4.ControlMessage")], ["err", "error"]], true), $.methodSignature("ReadFromIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.IPAddr"), "error"]), $.methodSignature("ReadMsgIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")], ["err", "error"]]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"]), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteBatch", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteMsgIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteTo", [["h", /* @__PURE__ */ $.pointerType("ipv4.Header")], ["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cm", /* @__PURE__ */ $.pointerType("ipv4.ControlMessage")]], ["error"], true), $.methodSignature("WriteToIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("clear", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [], true), $.methodSignature("isset", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("set", [["f", /* @__PURE__ */ $.basicType("uint", "ipv4.ControlFlags")]], [], true)],
		RawConn,
		() => [/* @__PURE__ */ $.structField("genericOpt", "ipv4.genericOpt", [0], 0, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true }), /* @__PURE__ */ $.structField("dgramOpt", "ipv4.dgramOpt", [1], 8, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true }), /* @__PURE__ */ $.structField("packetHandler", "ipv4.packetHandler", [2], 16, false, { pkgPath: "golang.org/x/net/ipv4", anonymous: true })]
	)
}

export async function NewConn(c: net.Conn | null): globalThis.Promise<Conn | $.VarRef<Conn> | null> {
	let __goscriptTuple4: any = await socket.NewConn(c)
	let cc: socket.Conn | $.VarRef<socket.Conn> | null = __goscriptTuple4[0]
	return new Conn({genericOpt: new genericOpt({Conn: cc}, true)})
}

export async function NewPacketConn(c: net.PacketConn | null): globalThis.Promise<PacketConn | $.VarRef<PacketConn> | null> {
	let __goscriptTuple20: any = await socket.NewConn($.mustTypeAssert<net.Conn | null>(c, "net.Conn"))
	let cc: socket.Conn | $.VarRef<socket.Conn> | null = __goscriptTuple20[0]
	let p: PacketConn | $.VarRef<PacketConn> | null = new PacketConn({genericOpt: new genericOpt({Conn: cc}, true), dgramOpt: new dgramOpt({Conn: cc}, true), payloadHandler: new __goscript_payload.payloadHandler({PacketConn: c, Conn: cc}, true)})
	return p
}

export async function NewRawConn(c: net.PacketConn | null): globalThis.Promise<[RawConn | $.VarRef<RawConn> | null, $.GoError]> {
	let __goscriptTuple21: any = await socket.NewConn($.mustTypeAssert<net.Conn | null>(c, "net.Conn"))
	let cc: socket.Conn | $.VarRef<socket.Conn> | null = __goscriptTuple21[0]
	let err = __goscriptTuple21[1]
	if (err != null) {
		return [null, err]
	}
	let r: RawConn | $.VarRef<RawConn> | null = new RawConn({genericOpt: new genericOpt({Conn: cc}, true), dgramOpt: new dgramOpt({Conn: cc}, true), packetHandler: new __goscript_packet.packetHandler({IPConn: ((c as any)?.__goType === "*net.IPConn" && (c as any).__goValue === undefined && (c as any).__isTypedNil !== true ? ((c as any) as net.IPConn | $.VarRef<net.IPConn> | null) : $.mustTypeAssert<net.IPConn | $.VarRef<net.IPConn> | null>(c, /* @__PURE__ */ $.pointerType("net.IPConn"))), Conn: cc}, true)})
	let __goscriptTuple22: any = $.mapGet<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>(__goscript_sys_stub.__goscript_get_sockOpts(), 9, null)
	let so: __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null = __goscriptTuple22[0]
	let ok = __goscriptTuple22[1]
	if (!ok) {
		return [null, __goscript_helper.errNotImplemented]
	}
	{
		let __goscriptShadow0 = await $.pointerValue<__goscript_sockopt.sockOpt>(so).Option.SetInt($.pointerValue<RawConn>(r).dgramOpt.Conn, __goscript_helper.boolint(true))
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}
	return [r, null]
}

var __goscriptAwait: any
