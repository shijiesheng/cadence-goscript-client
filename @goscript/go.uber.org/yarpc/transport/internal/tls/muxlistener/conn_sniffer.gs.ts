// Generated file based on conn_sniffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as net from "@goscript/net/index.js"
import "@goscript/bytes/index.js"
import "@goscript/net/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/transport/internal/tls/muxlistener", ["muxlistener.connSniffer"])

export class connSniffer {
	public get Conn(): net.Conn | null {
		return this._fields.Conn
	}

	public set Conn(value: net.Conn | null) {
		this._fields.Conn = value
	}

	// set to true when sniffing mode is disabled.
	public get disableSniffing(): boolean {
		return this._fields.disableSniffing
	}

	public set disableSniffing(value: boolean) {
		this._fields.disableSniffing = value
	}

	// buf stores bytes read from the underlying connection when in sniffing
	// mode. When sniffing mode is disabled, buffered bytes is returned.
	public get buf(): bytes.Buffer {
		return this._fields.buf
	}

	public set buf(value: bytes.Buffer) {
		this._fields.buf = value
	}

	public _fields: {
		Conn: net.Conn | null
		disableSniffing: boolean
		buf: bytes.Buffer
	}

	constructor(init?: Partial<{Conn?: net.Conn | null, disableSniffing?: boolean, buf?: bytes.Buffer}>, __goscriptValue?: boolean) {
		this._fields = {
			Conn: init?.Conn ?? (null! as net.Conn | null),
			disableSniffing: init?.disableSniffing ?? (false as boolean),
			buf: init?.buf ? $.markAsStructValue($.cloneStructValue(init.buf)) : $.markAsStructValue(new bytes.Buffer())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): connSniffer {
		return new connSniffer(this, true)
	}

	public __goscriptAssign(source: connSniffer): void {
		const target = this._fields
		const values = source._fields
		target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
		target.disableSniffing = values.disableSniffing
		$.assignStruct(target.buf, values.buf)
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let c: connSniffer | $.VarRef<connSniffer> | null = this;
		const c$: connSniffer = c == null ? $.pointerTarget<connSniffer>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<connSniffer>(c)
		if ((c$ as connSniffer).disableSniffing && ((c$ as connSniffer).buf.Len() != 0)) {
			// Read from the buffer when sniffing is disabled and buffer is not empty.
			let [n, ] = (c$ as connSniffer).buf.Read(b)
			if ((c$ as connSniffer).buf.Len() == 0) {
				// Release memory as we don't need buffer anymore.
				$.assignStruct((c$ as connSniffer).buf, $.markAsStructValue(new bytes.Buffer()))
			}
			return [n, null]
		}

		let [n, err] = await $.pointerValue<Exclude<net.Conn, null>>((c$ as connSniffer).Conn).Read(b)
		if (err != null) {
			return [n, err]
		}

		// Store in buffer when sniffing.
		if (!(c$ as connSniffer).disableSniffing) {
			void (c$ as connSniffer).buf.Write($.goSlice(b, undefined, n))
		}
		return [n, null]
	}

	public stopSniffing(): void {
		let c: connSniffer | $.VarRef<connSniffer> | null = this;
		$.pointerValue<connSniffer>(c).disableSniffing = true
	}

	public Close(): any {
		return $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).Close()
	}

	public LocalAddr(): any {
		return $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).LocalAddr()
	}

	public RemoteAddr(): any {
		return $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).RemoteAddr()
	}

	public SetDeadline(t: any): any {
		return $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetDeadline(t)
	}

	public SetReadDeadline(t: any): any {
		return $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetReadDeadline(t)
	}

	public SetWriteDeadline(t: any): any {
		return $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetWriteDeadline(t)
	}

	public Write(b: any): any {
		return $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).Write(b)
	}

	static __typeInfo = $.registerStructType(
		"muxlistener.connSniffer",
		() => new connSniffer(),
		() => [{ name: "Read", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "stopSniffing", args: [], returns: [], pointerReceiver: true }, { name: "Close", args: [], returns: [{ type: "error" }] }, { name: "LocalAddr", args: [], returns: [{ type: "net.Addr" }] }, { name: "RemoteAddr", args: [], returns: [{ type: "net.Addr" }] }, { name: "SetDeadline", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "SetReadDeadline", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "SetWriteDeadline", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "Write", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }],
		connSniffer,
		() => [{ name: "Conn", key: "Conn", type: "net.Conn", anonymous: true }, { name: "disableSniffing", key: "disableSniffing", type: /* @__PURE__ */ $.basicType("bool") }, { name: "buf", key: "buf", type: "bytes.Buffer" }]
	)
}

export function newConnectionSniffer(conn: net.Conn | null): connSniffer | $.VarRef<connSniffer> | null {
	return new connSniffer({Conn: conn})
}
