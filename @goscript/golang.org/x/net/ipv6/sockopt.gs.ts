// Generated file based on sockopt.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as socket from "@goscript/golang.org/x/net/internal/socket/index.js"

import * as net from "@goscript/net/index.js"

import * as bpf from "@goscript/golang.org/x/net/bpf/index.js"

import * as __goscript_helper from "./helper.gs.ts"

import type * as __goscript_icmp from "./icmp.gs.ts"

import * as __goscript_icmp_stub from "./icmp_stub.gs.ts"

import type * as __goscript_sockopt_stub from "./sockopt_stub.gs.ts"

import type * as __goscript_sys_asmreq_stub from "./sys_asmreq_stub.gs.ts"

import type * as __goscript_sys_bpf_stub from "./sys_bpf_stub.gs.ts"

import type * as __goscript_sys_ssmreq_stub from "./sys_ssmreq_stub.gs.ts"
import "@goscript/golang.org/x/net/internal/socket/index.js"
import "@goscript/net/index.js"
import "@goscript/golang.org/x/net/bpf/index.js"
import "./helper.gs.ts"
import "./icmp_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/ipv6", ["ipv6.sockOpt"])

export class sockOpt {
	public get Option(): socket.Option {
		return this._fields.Option
	}

	public set Option(value: socket.Option) {
		this._fields.Option = value
	}

	public get typ(): number {
		return this._fields.typ
	}

	public set typ(value: number) {
		this._fields.typ = value
	}

	public _fields: {
		Option: socket.Option
		typ: number
	}

	constructor(init?: Partial<{Option?: socket.Option, typ?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Option: init?.Option ? init.Option.clone() : new socket.Option(undefined, true),
			typ: init?.typ ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sockOpt {
		return new sockOpt(this, true)
	}

	public __goscriptAssign(source: sockOpt): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Option, values.Option)
		target.typ = values.typ
	}

	public getICMPFilter(c: socket.Conn | $.VarRef<socket.Conn> | null): [__goscript_icmp.ICMPFilter | $.VarRef<__goscript_icmp.ICMPFilter> | null, $.GoError] {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return [null, __goscript_helper.errNotImplemented]
	}

	public getMTUInfo(c: socket.Conn | $.VarRef<socket.Conn> | null): [net.Interface | $.VarRef<net.Interface> | null, number, $.GoError] {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return [null, 0, __goscript_helper.errNotImplemented]
	}

	public getMulticastInterface(c: socket.Conn | $.VarRef<socket.Conn> | null): [net.Interface | $.VarRef<net.Interface> | null, $.GoError] {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return [null, __goscript_helper.errNotImplemented]
	}

	public setAttachFilter(c: socket.Conn | $.VarRef<socket.Conn> | null, f: $.Slice<bpf.RawInstruction>): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setBPF(c: socket.Conn | $.VarRef<socket.Conn> | null, f: $.Slice<bpf.RawInstruction>): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setGroup(c: socket.Conn | $.VarRef<socket.Conn> | null, ifi: net.Interface | $.VarRef<net.Interface> | null, grp: net.IP): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setGroupReq(c: socket.Conn | $.VarRef<socket.Conn> | null, ifi: net.Interface | $.VarRef<net.Interface> | null, grp: net.IP): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setGroupSourceReq(c: socket.Conn | $.VarRef<socket.Conn> | null, ifi: net.Interface | $.VarRef<net.Interface> | null, grp: net.IP, src: net.IP): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setICMPFilter(c: socket.Conn | $.VarRef<socket.Conn> | null, f: __goscript_icmp.ICMPFilter | $.VarRef<__goscript_icmp.ICMPFilter> | null): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setIPMreq(c: socket.Conn | $.VarRef<socket.Conn> | null, ifi: net.Interface | $.VarRef<net.Interface> | null, grp: net.IP): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setMulticastInterface(c: socket.Conn | $.VarRef<socket.Conn> | null, ifi: net.Interface | $.VarRef<net.Interface> | null): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public setSourceGroup(c: socket.Conn | $.VarRef<socket.Conn> | null, ifi: net.Interface | $.VarRef<net.Interface> | null, grp: net.IP, src: net.IP): $.GoError {
		const so: sockOpt | $.VarRef<sockOpt> | null = this;
		return __goscript_helper.errNotImplemented
	}

	public async Get(c: any, b: any): globalThis.Promise<any> {
		return await $.pointerValue<socket.Option>(this.Option).Get(c, b)
	}

	public async GetInt(c: any): globalThis.Promise<any> {
		return await $.pointerValue<socket.Option>(this.Option).GetInt(c)
	}

	public async Set(c: any, b: any): globalThis.Promise<any> {
		return await $.pointerValue<socket.Option>(this.Option).Set(c, b)
	}

	public async SetInt(c: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<socket.Option>(this.Option).SetInt(c, v)
	}

	static __typeInfo = $.registerStructType(
		"ipv6.sockOpt",
		() => new sockOpt(),
		() => [$.methodSignature("getICMPFilter", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")]], [/* @__PURE__ */ $.pointerType("ipv6.ICMPFilter"), "error"], true), $.methodSignature("getMTUInfo", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")]], [/* @__PURE__ */ $.pointerType("net.Interface"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("getMulticastInterface", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")]], [/* @__PURE__ */ $.pointerType("net.Interface"), "error"], true), $.methodSignature("setAttachFilter", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["f", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"], true), $.methodSignature("setBPF", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["f", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"], true), $.methodSignature("setGroup", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["grp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], ["error"], true), $.methodSignature("setGroupReq", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["grp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], ["error"], true), $.methodSignature("setGroupSourceReq", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["grp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], ["error"], true), $.methodSignature("setICMPFilter", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["f", /* @__PURE__ */ $.pointerType("ipv6.ICMPFilter")]], ["error"], true), $.methodSignature("setIPMreq", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["grp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], ["error"], true), $.methodSignature("setMulticastInterface", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["ifi", /* @__PURE__ */ $.pointerType("net.Interface")]], ["error"], true), $.methodSignature("setSourceGroup", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["grp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")]], ["error"], true), $.methodSignature("Get", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("GetInt", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Set", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("SetInt", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["v", /* @__PURE__ */ $.basicType("int")]], ["error"], true)],
		sockOpt,
		() => [/* @__PURE__ */ $.structField("Option", "socket.Option", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "golang.org/x/net/ipv6" })]
	)
}

export const ssoTrafficClass: number = 0

export const ssoHopLimit: number = 1

export const ssoMulticastInterface: number = 2

export const ssoMulticastHopLimit: number = 3

export const ssoMulticastLoopback: number = 4

export const ssoReceiveTrafficClass: number = 5

export const ssoReceiveHopLimit: number = 6

export const ssoReceivePacketInfo: number = 7

export const ssoReceivePathMTU: number = 8

export const ssoPathMTU: number = 9

export const ssoChecksum: number = 10

export const ssoICMPFilter: number = 11

export const ssoJoinGroup: number = 12

export const ssoLeaveGroup: number = 13

export const ssoJoinSourceGroup: number = 14

export const ssoLeaveSourceGroup: number = 15

export const ssoBlockSourceGroup: number = 16

export const ssoUnblockSourceGroup: number = 17

export const ssoAttachFilter: number = 18

export const ssoTypeIPMreq: number = 1

export const ssoTypeGroupReq: number = 2

export const ssoTypeGroupSourceReq: number = 3
