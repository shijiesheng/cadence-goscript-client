// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as log from "@goscript/log/index.js"

import * as http from "@goscript/net/http/index.js"

import * as sync from "@goscript/sync/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_oauth2 from "./oauth2.gs.ts"

import * as __goscript_token from "./token.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/log/index.js"
import "@goscript/net/http/index.js"
import "@goscript/sync/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./oauth2.gs.ts"
import "./token.gs.ts"

$.registerTypePackagePath("golang.org/x/oauth2", ["oauth2.Transport"])

export class Transport {
	// Source supplies the token to add to outgoing requests'
	// Authorization headers.
	public get Source(): __goscript_oauth2.TokenSource | null {
		return this._fields.Source
	}

	public set Source(value: __goscript_oauth2.TokenSource | null) {
		this._fields.Source = value
	}

	// Base is the base RoundTripper used to make HTTP requests.
	// If nil, http.DefaultTransport is used.
	public get Base(): http.RoundTripper | null {
		return this._fields.Base
	}

	public set Base(value: http.RoundTripper | null) {
		this._fields.Base = value
	}

	public _fields: {
		Source: __goscript_oauth2.TokenSource | null
		Base: http.RoundTripper | null
	}

	constructor(init?: Partial<{Source?: __goscript_oauth2.TokenSource | null, Base?: http.RoundTripper | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Source: init?.Source ?? (null! as __goscript_oauth2.TokenSource | null),
			Base: init?.Base ?? (null! as http.RoundTripper | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Transport {
		return new Transport(this, true)
	}

	public __goscriptAssign(source: Transport): void {
		const target = this._fields
		const values = source._fields
		target.Source = $.assignFieldValue(target.Source, values.Source, "oauth2.TokenSource")
		target.Base = $.assignFieldValue(target.Base, values.Base, "http.RoundTripper")
	}

	public async CancelRequest(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
		const t: Transport | $.VarRef<Transport> | null = this;
		await cancelOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
			await log.Printf("deprecated: golang.org/x/oauth2: Transport.CancelRequest no longer does anything; use contexts", null)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	public async RoundTrip(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		let reqBodyClosed = false
		if ((req$ as http.Request).Body != null) {
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				if (!reqBodyClosed) {
					await $.pointerValue<Exclude<io.ReadCloser, null>>((req$ as http.Request).Body).Close()
				}
			})() })
		}

		if ((t$ as Transport).Source == null) {
			return [null, errors.New("oauth2: Transport's Source is nil")]
		}
		let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_oauth2.TokenSource, null>>((t$ as Transport).Source).Token()
		let token: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		let req2: http.Request | $.VarRef<http.Request> | null = cloneRequest(req)
		void (token !== null && (token as any).__isVarRef !== true && (token as any).__goValue === undefined ? ((token as any) as __goscript_token.Token).SetAuthHeader(req2) : __goscript_token.Token.prototype.SetAuthHeader.call(token, req2))

		// req.Body is assumed to be closed by the base RoundTripper.
		reqBodyClosed = true
		return await $.pointerValue<Exclude<http.RoundTripper, null>>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).base() : Transport.prototype.base.call(t))).RoundTrip(req2)
	}

	public base(): http.RoundTripper | null {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).Base != null) {
			return (t$ as Transport).Base
		}
		return http.DefaultTransport
	}

	static __typeInfo = $.registerStructType(
		"oauth2.Transport",
		() => new Transport(),
		() => [$.methodSignature("CancelRequest", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [], true), $.methodSignature("RoundTrip", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"], true), $.methodSignature("base", [], ["http.RoundTripper"], true)],
		Transport,
		() => [/* @__PURE__ */ $.structField("Source", "oauth2.TokenSource", [0], 0, true), /* @__PURE__ */ $.structField("Base", "http.RoundTripper", [1], 16, true)]
	)
}

export let cancelOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_cancelOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(cancelOnce.value, __goscriptValue)
}

export function cloneRequest(r: http.Request | $.VarRef<http.Request> | null): http.Request | $.VarRef<http.Request> | null {
	const r$: http.Request = r == null ? $.pointerTarget<http.Request>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<http.Request>(r)
	// shallow copy of the struct
	let r2: http.Request | $.VarRef<http.Request> | null = new http.Request()
	let r2$: http.Request = r2 == null ? $.pointerTarget<http.Request>(r2) : (r2 as any).__isVarRef === true ? (r2 as any).value : (r2 as any).__goValue === undefined ? (r2 as any) : $.pointerTarget<http.Request>(r2)
	$.assignStruct((r2$ as http.Request), (r$ as http.Request));
	// deep copy of the Header
	;(r2$ as http.Request).Header = $.makeMap<string, $.Slice<string>>()
	for (let [k, s] of (r$ as http.Request).Header?.entries() ?? []) {
		$.mapSet((r2$ as http.Request).Header, k, $.appendSlice<string>(null, s))
	}
	return r2
}
