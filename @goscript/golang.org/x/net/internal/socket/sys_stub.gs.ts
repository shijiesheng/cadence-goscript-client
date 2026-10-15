// Generated file based on sys_stub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_mmsghdr_stub from "./mmsghdr_stub.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"
import "@goscript/net/index.js"
import "./socket.gs.ts"

export const sysAF_UNSPEC: number = 0

export const sysAF_INET: number = 2

export const sysAF_INET6: number = 10

export const sysSOCK_RAW: number = 3

export const sizeofSockaddrInet4: number = 16

export const sizeofSockaddrInet6: number = 28

export function marshalInetAddr(ip: net.IP, port: number, zone: string): $.Slice<number> {
	return null
}

export function parseInetAddr(b: $.Slice<number>, network: string): [net.Addr | null, $.GoError] {
	return [null, __goscript_socket.errNotImplemented]
}

export function getsockopt(s: number, level: number, name: number, b: $.Slice<number>): [number, $.GoError] {
	return [0, __goscript_socket.errNotImplemented]
}

export function setsockopt(s: number, level: number, name: number, b: $.Slice<number>): $.GoError {
	return __goscript_socket.errNotImplemented
}

export function recvmsg(s: number, buffers: $.Slice<$.Slice<number>>, oob: $.Slice<number>, flags: number, network: string): [number, number, number, net.Addr | null, $.GoError] {
	let n: number = 0
	let oobn: number = 0
	let recvflags: number = 0
	let _from: net.Addr | null = null! as net.Addr | null
	let err: $.GoError = null! as $.GoError
	return [0, 0, 0, null, __goscript_socket.errNotImplemented]
}

export function sendmsg(s: number, buffers: $.Slice<$.Slice<number>>, oob: $.Slice<number>, to: net.Addr | null, flags: number): [number, $.GoError] {
	return [0, __goscript_socket.errNotImplemented]
}

export function recvmmsg(s: number, hs: $.Slice<__goscript_mmsghdr_stub.mmsghdr>, flags: number): [number, $.GoError] {
	return [0, __goscript_socket.errNotImplemented]
}

export function sendmmsg(s: number, hs: $.Slice<__goscript_mmsghdr_stub.mmsghdr>, flags: number): [number, $.GoError] {
	return [0, __goscript_socket.errNotImplemented]
}
