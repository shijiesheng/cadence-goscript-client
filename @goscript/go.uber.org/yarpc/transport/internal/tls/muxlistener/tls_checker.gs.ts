// Generated file based on tls_checker.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/io/index.js"

export const _tlsHandshakeHeaderLength: number = 5

export const _tlsContentTypeHandshake: number = 22

export const _tlsMajorVersion: number = 3

export const _tlsMinorVersion: number = 1

export const _tlsContentTypeOffset: number = 0

export const _tlsMajorVersionOffset: number = 1

export const _tlsMinorVersionOffset: number = 2

export async function isTLSClientHelloRecord(r: io.Reader | null): globalThis.Promise<[boolean, $.GoError]> {
	let buf: $.Slice<number> = $.makeSlice<number>(5, undefined, "byte")
	let [n, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(r)).Read(buf)
	if (err != null) {
		return [false, err]
	}

	if (n != 5) {
		return [false, null]
	}

	return [(($.arrayIndex(buf!, 0) == 22) && ($.arrayIndex(buf!, 1) == 3)) && ($.arrayIndex(buf!, 2) >= 1), null]
}
