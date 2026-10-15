// Generated file based on sys_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as bpf from "@goscript/golang.org/x/net/bpf/index.js"

import * as socket from "@goscript/golang.org/x/net/internal/socket/index.js"

import * as net from "@goscript/net/index.js"

import * as __goscript_control from "./control.gs.ts"

import type * as __goscript_icmp from "./icmp.gs.ts"

import * as __goscript_icmp_stub from "./icmp_stub.gs.ts"

import * as __goscript_sockopt from "./sockopt.gs.ts"

import * as __goscript_sockopt_stub from "./sockopt_stub.gs.ts"

import * as __goscript_sys_asmreq_stub from "./sys_asmreq_stub.gs.ts"

import * as __goscript_sys_bpf_stub from "./sys_bpf_stub.gs.ts"

import * as __goscript_sys_ssmreq_stub from "./sys_ssmreq_stub.gs.ts"
import "@goscript/golang.org/x/net/internal/socket/index.js"
import "@goscript/net/index.js"
import "./control.gs.ts"
import "./icmp_stub.gs.ts"
import "./sockopt.gs.ts"
import "./sockopt_stub.gs.ts"
import "./sys_asmreq_stub.gs.ts"
import "./sys_bpf_stub.gs.ts"
import "./sys_ssmreq_stub.gs.ts"

export var ctlOpts: __goscript_control.ctlOpt[]

export function __goscript_init_ctlOpts(): void {
	if (((ctlOpts) as any) === undefined) {
		ctlOpts = $.arrayValue(globalThis.Array.from({ length: 5 }, () => new __goscript_control.ctlOpt(undefined, true)), /* @__PURE__ */ $.arrayType("ipv6.ctlOpt", 5))
	}
}

export function __goscript_get_ctlOpts(): __goscript_control.ctlOpt[] {
	if (((ctlOpts) as any) === undefined) {
		__goscript_init_ctlOpts()
	}
	return ctlOpts
}

export function __goscript_set_ctlOpts(__goscriptValue: __goscript_control.ctlOpt[]): void {
	ctlOpts = __goscriptValue
}

export var sockOpts: globalThis.Map<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null> | null

export function __goscript_init_sockOpts(): void {
	if (((sockOpts) as any) === undefined) {
		sockOpts = $.makeMap<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null>([])
	}
}

export function __goscript_get_sockOpts(): globalThis.Map<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null> | null {
	if (((sockOpts) as any) === undefined) {
		__goscript_init_sockOpts()
	}
	return sockOpts
}

export function __goscript_set_sockOpts(__goscriptValue: globalThis.Map<number, __goscript_sockopt.sockOpt | $.VarRef<__goscript_sockopt.sockOpt> | null> | null): void {
	sockOpts = __goscriptValue
}
