// Generated file based on chacha20poly1305_generic.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as chacha20 from "@goscript/vendor/golang.org/x/crypto/chacha20/index.js"

import * as alias from "@goscript/vendor/golang.org/x/crypto/internal/alias/index.js"

import * as poly1305 from "@goscript/vendor/golang.org/x/crypto/internal/poly1305/index.js"

import * as __goscript_chacha20poly1305 from "./chacha20poly1305.gs.ts"

import type * as __goscript_chacha20poly1305_noasm from "./chacha20poly1305_noasm.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/vendor/golang.org/x/crypto/chacha20/index.js"
import "@goscript/vendor/golang.org/x/crypto/internal/alias/index.js"
import "@goscript/vendor/golang.org/x/crypto/internal/poly1305/index.js"
import "./chacha20poly1305.gs.ts"

export function writeWithPadding(p: poly1305.MAC | $.VarRef<poly1305.MAC> | null, b: $.Slice<number>): void {
	void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as poly1305.MAC).Write(b) : poly1305.MAC.prototype.Write.call(p, b))
	{
		let rem = $.sliceLen(b) % 16
		if (rem != 0) {
			let buf: Uint8Array = $.arrayValue(new Uint8Array(16))
			let padLen = 16 - rem
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as poly1305.MAC).Write($.goSlice(buf, undefined, padLen)) : poly1305.MAC.prototype.Write.call(p, $.goSlice(buf, undefined, padLen)))
		}
	}
}

export function writeUint64(p: poly1305.MAC | $.VarRef<poly1305.MAC> | null, n: number): void {
	let buf: Uint8Array = $.arrayValue(new Uint8Array(8))
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint64($.goSlice(buf, undefined, undefined), $.uint64(n))
	void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as poly1305.MAC).Write($.goSlice(buf, undefined, undefined)) : poly1305.MAC.prototype.Write.call(p, $.goSlice(buf, undefined, undefined)))
}
