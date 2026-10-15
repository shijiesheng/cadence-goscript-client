// Generated file based on sockaddr_posix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import type * as os from "@goscript/os/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"
import "@goscript/syscall/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./udpsock_posix.gs.ts"
import "./unixsock_posix.gs.ts"

export type sockaddr = {
	Network(): string
	String(): string
	family(): number
	isWildcard(): boolean
	sockaddr(family: number): [syscall.Sockaddr | null, $.GoError] | globalThis.Promise<[syscall.Sockaddr | null, $.GoError]>
	toLocal(net: string): sockaddr | null
}

$.registerInterfaceType(
	"net.sockaddr",
	null,
	[$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("family", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("isWildcard", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("sockaddr", [["family", /* @__PURE__ */ $.basicType("int")]], ["syscall.Sockaddr", "error"]), $.methodSignature("toLocal", [["net", /* @__PURE__ */ $.basicType("string")]], ["net.sockaddr"])]
);
