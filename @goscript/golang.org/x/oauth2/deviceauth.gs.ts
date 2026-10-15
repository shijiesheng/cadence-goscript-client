// Generated file based on deviceauth.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as internal from "@goscript/golang.org/x/oauth2/internal/index.js"

import * as __goscript_oauth2 from "./oauth2.gs.ts"

import * as __goscript_token from "./token.gs.ts"
import "@goscript/context/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/oauth2/internal/index.js"
import "./oauth2.gs.ts"
import "./token.gs.ts"

$.registerTypePackagePath("golang.org/x/oauth2", ["oauth2.DeviceAuthResponse", "oauth2.Alias", "oauth2.Alias"])

export class DeviceAuthResponse {
	// DeviceCode
	public get DeviceCode(): string {
		return this._fields.DeviceCode
	}

	public set DeviceCode(value: string) {
		this._fields.DeviceCode = value
	}

	// UserCode is the code the user should enter at the verification uri
	public get UserCode(): string {
		return this._fields.UserCode
	}

	public set UserCode(value: string) {
		this._fields.UserCode = value
	}

	// VerificationURI is where user should enter the user code
	public get VerificationURI(): string {
		return this._fields.VerificationURI
	}

	public set VerificationURI(value: string) {
		this._fields.VerificationURI = value
	}

	// VerificationURIComplete (if populated) includes the user code in the verification URI. This is typically shown to the user in non-textual form, such as a QR code.
	public get VerificationURIComplete(): string {
		return this._fields.VerificationURIComplete
	}

	public set VerificationURIComplete(value: string) {
		this._fields.VerificationURIComplete = value
	}

	// Expiry is when the device code and user code expire
	public get Expiry(): time.Time {
		return this._fields.Expiry
	}

	public set Expiry(value: time.Time) {
		this._fields.Expiry = value
	}

	// Interval is the duration in seconds that Poll should wait between requests
	public get Interval(): bigint {
		return this._fields.Interval
	}

	public set Interval(value: bigint) {
		this._fields.Interval = value
	}

	public _fields: {
		DeviceCode: string
		UserCode: string
		VerificationURI: string
		VerificationURIComplete: string
		Expiry: time.Time
		Interval: bigint
	}

	constructor(init?: Partial<{DeviceCode?: string, UserCode?: string, VerificationURI?: string, VerificationURIComplete?: string, Expiry?: time.Time, Interval?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			DeviceCode: init?.DeviceCode ?? ("" as string),
			UserCode: init?.UserCode ?? ("" as string),
			VerificationURI: init?.VerificationURI ?? ("" as string),
			VerificationURIComplete: init?.VerificationURIComplete ?? ("" as string),
			Expiry: init?.Expiry ? $.markAsStructValue($.cloneStructValue(init.Expiry)) : $.markAsStructValue(new time.Time()),
			Interval: init?.Interval ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DeviceAuthResponse {
		return new DeviceAuthResponse(this, true)
	}

	public __goscriptAssign(source: DeviceAuthResponse): void {
		const target = this._fields
		const values = source._fields
		target.DeviceCode = values.DeviceCode
		target.UserCode = values.UserCode
		target.VerificationURI = values.VerificationURI
		target.VerificationURIComplete = values.VerificationURIComplete
		$.assignStruct(target.Expiry, values.Expiry)
		target.Interval = values.Interval
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const d = $.varRef(this);
		class Alias {
			public get DeviceCode(): string {
				return this._fields.DeviceCode
			}

			public set DeviceCode(value: string) {
				this._fields.DeviceCode = value
			}

			public get UserCode(): string {
				return this._fields.UserCode
			}

			public set UserCode(value: string) {
				this._fields.UserCode = value
			}

			public get VerificationURI(): string {
				return this._fields.VerificationURI
			}

			public set VerificationURI(value: string) {
				this._fields.VerificationURI = value
			}

			public get VerificationURIComplete(): string {
				return this._fields.VerificationURIComplete
			}

			public set VerificationURIComplete(value: string) {
				this._fields.VerificationURIComplete = value
			}

			public get Expiry(): time.Time {
				return this._fields.Expiry
			}

			public set Expiry(value: time.Time) {
				this._fields.Expiry = value
			}

			public get Interval(): bigint {
				return this._fields.Interval
			}

			public set Interval(value: bigint) {
				this._fields.Interval = value
			}

			public _fields: {
				DeviceCode: string
				UserCode: string
				VerificationURI: string
				VerificationURIComplete: string
				Expiry: time.Time
				Interval: bigint
			}

			constructor(init?: Partial<{DeviceCode?: string, UserCode?: string, VerificationURI?: string, VerificationURIComplete?: string, Expiry?: time.Time, Interval?: bigint}>, __goscriptValue?: boolean) {
				this._fields = {
					DeviceCode: init?.DeviceCode ?? ("" as string),
					UserCode: init?.UserCode ?? ("" as string),
					VerificationURI: init?.VerificationURI ?? ("" as string),
					VerificationURIComplete: init?.VerificationURIComplete ?? ("" as string),
					Expiry: init?.Expiry ? $.markAsStructValue($.cloneStructValue(init.Expiry)) : $.markAsStructValue(new time.Time()),
					Interval: init?.Interval ?? (0n as bigint)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): Alias {
				return new Alias(this, true)
			}

			public __goscriptAssign(source: Alias): void {
				const target = this._fields
				const values = source._fields
				target.DeviceCode = values.DeviceCode
				target.UserCode = values.UserCode
				target.VerificationURI = values.VerificationURI
				target.VerificationURIComplete = values.VerificationURIComplete
				$.assignStruct(target.Expiry, values.Expiry)
				target.Interval = values.Interval
			}

			static __typeInfo = $.registerStructType(
				"oauth2.Alias",
				() => new Alias(),
				() => [],
				Alias,
				() => [/* @__PURE__ */ $.structField("DeviceCode", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"device_code\"" }), /* @__PURE__ */ $.structField("UserCode", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"user_code\"" }), /* @__PURE__ */ $.structField("VerificationURI", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"verification_uri\"" }), /* @__PURE__ */ $.structField("VerificationURIComplete", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "json:\"verification_uri_complete,omitempty\"" }), /* @__PURE__ */ $.structField("Expiry", "time.Time", [4], 64, true, { tag: "json:\"expires_in,omitempty\"" }), /* @__PURE__ */ $.structField("Interval", /* @__PURE__ */ $.basicType("int64"), [5], 88, true, { tag: "json:\"interval,omitempty\"" })]
			)
		}
		let expiresIn: bigint = 0n
		if (!$.markAsStructValue($.cloneStructValue(d.value.Expiry)).IsZero()) {
			expiresIn = $.int64(time.Duration_Seconds(time.Until($.markAsStructValue($.cloneStructValue(d.value.Expiry)))))
		}
		return json.Marshal($.interfaceValue($.varRef($.anonymousStructValue({ExpiresIn: expiresIn, Alias: $.unsafePointerCast<Alias | $.VarRef<Alias> | null>(d, Alias)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("ExpiresIn", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "json:\"expires_in,omitempty\"" }), /* @__PURE__ */ $.structField("Alias", /* @__PURE__ */ $.pointerType("oauth2.Alias"), [1], 8, true, { anonymous: true })] })), "*struct{ExpiresIn int64 \"json:\\\"expires_in,omitempty\\\"\"; *oauth2.Alias}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("ExpiresIn", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "json:\"expires_in,omitempty\"" }), /* @__PURE__ */ $.structField("Alias", /* @__PURE__ */ $.pointerType("oauth2.Alias"), [1], 8, true, { anonymous: true })] })))
	}

	public async UnmarshalJSON(data: $.Slice<number>): globalThis.Promise<$.GoError> {
		let c: DeviceAuthResponse | $.VarRef<DeviceAuthResponse> | null = this;
		const c$: DeviceAuthResponse = c == null ? $.pointerTarget<DeviceAuthResponse>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<DeviceAuthResponse>(c)
		class Alias {
			public get DeviceCode(): string {
				return this._fields.DeviceCode
			}

			public set DeviceCode(value: string) {
				this._fields.DeviceCode = value
			}

			public get UserCode(): string {
				return this._fields.UserCode
			}

			public set UserCode(value: string) {
				this._fields.UserCode = value
			}

			public get VerificationURI(): string {
				return this._fields.VerificationURI
			}

			public set VerificationURI(value: string) {
				this._fields.VerificationURI = value
			}

			public get VerificationURIComplete(): string {
				return this._fields.VerificationURIComplete
			}

			public set VerificationURIComplete(value: string) {
				this._fields.VerificationURIComplete = value
			}

			public get Expiry(): time.Time {
				return this._fields.Expiry
			}

			public set Expiry(value: time.Time) {
				this._fields.Expiry = value
			}

			public get Interval(): bigint {
				return this._fields.Interval
			}

			public set Interval(value: bigint) {
				this._fields.Interval = value
			}

			public _fields: {
				DeviceCode: string
				UserCode: string
				VerificationURI: string
				VerificationURIComplete: string
				Expiry: time.Time
				Interval: bigint
			}

			constructor(init?: Partial<{DeviceCode?: string, UserCode?: string, VerificationURI?: string, VerificationURIComplete?: string, Expiry?: time.Time, Interval?: bigint}>, __goscriptValue?: boolean) {
				this._fields = {
					DeviceCode: init?.DeviceCode ?? ("" as string),
					UserCode: init?.UserCode ?? ("" as string),
					VerificationURI: init?.VerificationURI ?? ("" as string),
					VerificationURIComplete: init?.VerificationURIComplete ?? ("" as string),
					Expiry: init?.Expiry ? $.markAsStructValue($.cloneStructValue(init.Expiry)) : $.markAsStructValue(new time.Time()),
					Interval: init?.Interval ?? (0n as bigint)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): Alias {
				return new Alias(this, true)
			}

			public __goscriptAssign(source: Alias): void {
				const target = this._fields
				const values = source._fields
				target.DeviceCode = values.DeviceCode
				target.UserCode = values.UserCode
				target.VerificationURI = values.VerificationURI
				target.VerificationURIComplete = values.VerificationURIComplete
				$.assignStruct(target.Expiry, values.Expiry)
				target.Interval = values.Interval
			}

			static __typeInfo = $.registerStructType(
				"oauth2.Alias",
				() => new Alias(),
				() => [],
				Alias,
				() => [/* @__PURE__ */ $.structField("DeviceCode", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"device_code\"" }), /* @__PURE__ */ $.structField("UserCode", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"user_code\"" }), /* @__PURE__ */ $.structField("VerificationURI", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"verification_uri\"" }), /* @__PURE__ */ $.structField("VerificationURIComplete", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "json:\"verification_uri_complete,omitempty\"" }), /* @__PURE__ */ $.structField("Expiry", "time.Time", [4], 64, true, { tag: "json:\"expires_in,omitempty\"" }), /* @__PURE__ */ $.structField("Interval", /* @__PURE__ */ $.basicType("int64"), [5], 88, true, { tag: "json:\"interval,omitempty\"" })]
			)
		}
		let aux = $.varRef($.varRef($.anonymousStructValue({ExpiresIn: (0n as bigint), VerificationURL: ("" as string), Alias: $.unsafePointerCast<Alias | $.VarRef<Alias> | null>(c, Alias)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("ExpiresIn", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "json:\"expires_in\"" }), /* @__PURE__ */ $.structField("VerificationURL", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "json:\"verification_url\"" }), /* @__PURE__ */ $.structField("Alias", /* @__PURE__ */ $.pointerType("oauth2.Alias"), [2], 24, true, { anonymous: true })] })))
		{
			let err = await json.Unmarshal(data, $.interfaceValue(aux, "**struct{ExpiresIn int64 \"json:\\\"expires_in\\\"\"; VerificationURL string \"json:\\\"verification_url\\\"\"; *oauth2.Alias}", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("ExpiresIn", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "json:\"expires_in\"" }), /* @__PURE__ */ $.structField("VerificationURL", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "json:\"verification_url\"" }), /* @__PURE__ */ $.structField("Alias", /* @__PURE__ */ $.pointerType("oauth2.Alias"), [2], 24, true, { anonymous: true })] }))))
			if (err != null) {
				return err
			}
		}
		if ($.pointerValue<{"ExpiresIn": bigint, "VerificationURL": string, "Alias": Alias | $.VarRef<Alias> | null}>(aux.value).ExpiresIn != 0n) {
			$.assignStruct((c$ as DeviceAuthResponse).Expiry, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).UTC())).Add($.int64Mul(1000000000n, $.int64($.pointerValue<{"ExpiresIn": bigint, "VerificationURL": string, "Alias": Alias | $.VarRef<Alias> | null}>(aux.value).ExpiresIn))))
		}
		if ($.stringEqual((c$ as DeviceAuthResponse).VerificationURI, "")) {
			;(c$ as DeviceAuthResponse).VerificationURI = $.pointerValue<{"ExpiresIn": bigint, "VerificationURL": string, "Alias": Alias | $.VarRef<Alias> | null}>(aux.value).VerificationURL
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"oauth2.DeviceAuthResponse",
		() => new DeviceAuthResponse(),
		() => [$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("UnmarshalJSON", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		DeviceAuthResponse,
		() => [/* @__PURE__ */ $.structField("DeviceCode", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"device_code\"" }), /* @__PURE__ */ $.structField("UserCode", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"user_code\"" }), /* @__PURE__ */ $.structField("VerificationURI", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"verification_uri\"" }), /* @__PURE__ */ $.structField("VerificationURIComplete", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "json:\"verification_uri_complete,omitempty\"" }), /* @__PURE__ */ $.structField("Expiry", "time.Time", [4], 64, true, { tag: "json:\"expires_in,omitempty\"" }), /* @__PURE__ */ $.structField("Interval", /* @__PURE__ */ $.basicType("int64"), [5], 88, true, { tag: "json:\"interval,omitempty\"" })]
	)
}

export const errAuthorizationPending: string = "authorization_pending"

export const errSlowDown: string = "slow_down"

export const errAccessDenied: string = "access_denied"

export const errExpiredToken: string = "expired_token"

export async function retrieveDeviceAuth(ctx: context.Context | null, c: __goscript_oauth2.Config | $.VarRef<__goscript_oauth2.Config> | null, v: url.Values): globalThis.Promise<[DeviceAuthResponse | $.VarRef<DeviceAuthResponse> | null, $.GoError]> {
	const c$: __goscript_oauth2.Config = c == null ? $.pointerTarget<__goscript_oauth2.Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_oauth2.Config>(c)
	if ($.stringEqual((c$ as __goscript_oauth2.Config).Endpoint.DeviceAuthURL, "")) {
		return [null, errors.New("endpoint missing DeviceAuthURL")]
	}

	let __goscriptTuple0: any = http.NewRequest("POST", (c$ as __goscript_oauth2.Config).Endpoint.DeviceAuthURL, $.pointerValueOrNil($.interfaceValue<io.Reader | null>(strings.NewReader(url.Values_Encode(v)), "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")))!)
	let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	let req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	if (err != null) {
		return [null, err]
	}
	http.Header_Set((req$ as http.Request).Header, "Content-Type", "application/x-www-form-urlencoded")
	http.Header_Set((req$ as http.Request).Header, "Accept", "application/json")

	let t = $.markAsStructValue($.cloneStructValue(time.Now()))
	let __goscriptTuple1: any = await http.Client.prototype.Do.call($.pointerValue<http.Client>(await internal.ContextClient(ctx)), req)
	let r: http.Response | $.VarRef<http.Response> | null = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	let r$: http.Response = r == null ? $.pointerTarget<http.Response>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<http.Response>(r)
	if (err != null) {
		return [null, err]
	}

	let __goscriptTuple2: any = await io.ReadAll($.pointerValueOrNil(io.LimitReader($.pointerValueOrNil(((r$ as http.Response).Body as io.Reader | null))!, 1048576n))!)
	let body: $.Slice<number> = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, fmt.Errorf("oauth2: cannot auth device: %v", (err as any))]
	}
	{
		let code = (r$ as http.Response).StatusCode
		if ((code < 200) || (code > 299)) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_token.RetrieveError({Response: r, Body: body}), "*oauth2.RetrieveError", /* @__PURE__ */ $.pointerType("oauth2.RetrieveError"))]
		}
	}

	let da: $.VarRef<DeviceAuthResponse | $.VarRef<DeviceAuthResponse> | null> = $.varRef(new DeviceAuthResponse())
	err = await json.Unmarshal(body, $.interfaceValue(da, "**oauth2.DeviceAuthResponse", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("oauth2.DeviceAuthResponse"))))
	if (err != null) {
		return [null, fmt.Errorf("unmarshal %s", (err as any))]
	}

	if (!$.markAsStructValue($.cloneStructValue($.pointerValue<DeviceAuthResponse>(da.value).Expiry)).IsZero()) {
		// Make a small adjustment to account for time taken by the request
		$.assignStruct($.pointerValue<DeviceAuthResponse>(da.value).Expiry, $.markAsStructValue($.cloneStructValue($.pointerValue<DeviceAuthResponse>(da.value).Expiry)).Add(-time.Since($.markAsStructValue($.cloneStructValue(t)))))
	}

	return [da.value, null]
}
