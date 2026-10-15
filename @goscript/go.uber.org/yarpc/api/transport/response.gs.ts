// Generated file based on response.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_header from "./header.gs.ts"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./header.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Response", "transport.ResponseWriter", "transport.ExtendedResponseWriter", "transport.ApplicationErrorMeta", "transport.ApplicationErrorMetaSetter"])

export type ResponseWriter = {
	AddHeaders(_p0: __goscript_header.Headers): void
	SetApplicationError(): void
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"transport.ResponseWriter",
	null,
	[$.methodSignature("AddHeaders", ["transport.Headers"]), $.methodSignature("SetApplicationError"), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type ExtendedResponseWriter = {
	AddHeaders(_p0: __goscript_header.Headers): void
	ApplicationErrorMeta(): ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null
	IsApplicationError(): boolean
	ResponseSize(): number
	SetApplicationError(): void
	SetApplicationErrorMeta(applicationErrorMeta: ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null): void
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"transport.ExtendedResponseWriter",
	null,
	[$.methodSignature("AddHeaders", ["transport.Headers"]), $.methodSignature("ApplicationErrorMeta", [], [/* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta")]), $.methodSignature("IsApplicationError", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ResponseSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("SetApplicationError"), $.methodSignature("SetApplicationErrorMeta", [["applicationErrorMeta", /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta")]]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type ApplicationErrorMetaSetter = {
	SetApplicationErrorMeta(_p0: ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null): void
}

$.registerInterfaceType(
	"transport.ApplicationErrorMetaSetter",
	null,
	[$.methodSignature("SetApplicationErrorMeta", [/* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta")])]
);

export class Response {
	public get Headers(): __goscript_header.Headers {
		return this._fields.Headers
	}

	public set Headers(value: __goscript_header.Headers) {
		this._fields.Headers = value
	}

	public get Body(): io.ReadCloser | null {
		return this._fields.Body
	}

	public set Body(value: io.ReadCloser | null) {
		this._fields.Body = value
	}

	// Response payload size before any compression applied by the protocol
	// When using the HTTP transport, this value is set from the HTTP header
	// content-length. It should be noted that this value is set manually and
	// will not be updated automatically if the body is being modified
	public get BodySize(): number {
		return this._fields.BodySize
	}

	public set BodySize(value: number) {
		this._fields.BodySize = value
	}

	public get ApplicationError(): boolean {
		return this._fields.ApplicationError
	}

	public set ApplicationError(value: boolean) {
		this._fields.ApplicationError = value
	}

	// ApplicationErrorMeta adds information about the application error.
	// This field will only be set if `ApplicationError` is true.
	public get ApplicationErrorMeta(): ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null {
		return this._fields.ApplicationErrorMeta
	}

	public set ApplicationErrorMeta(value: ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null) {
		this._fields.ApplicationErrorMeta = value
	}

	public _fields: {
		Headers: __goscript_header.Headers
		Body: io.ReadCloser | null
		BodySize: number
		ApplicationError: boolean
		ApplicationErrorMeta: ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null
	}

	constructor(init?: Partial<{Headers?: __goscript_header.Headers, Body?: io.ReadCloser | null, BodySize?: number, ApplicationError?: boolean, ApplicationErrorMeta?: ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Headers: init?.Headers ? init.Headers.clone() : new __goscript_header.Headers(undefined, true),
			Body: init?.Body ?? (null! as io.ReadCloser | null),
			BodySize: init?.BodySize ?? (0 as number),
			ApplicationError: init?.ApplicationError ?? (false as boolean),
			ApplicationErrorMeta: init?.ApplicationErrorMeta ?? (null! as ApplicationErrorMeta | $.VarRef<ApplicationErrorMeta> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Response {
		return new Response(this, true)
	}

	public __goscriptAssign(source: Response): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Headers, values.Headers)
		target.Body = $.assignFieldValue(target.Body, values.Body, "io.ReadCloser")
		target.BodySize = values.BodySize
		target.ApplicationError = values.ApplicationError
		target.ApplicationErrorMeta = values.ApplicationErrorMeta
	}

	static __typeInfo = $.registerStructType(
		"transport.Response",
		() => new Response(),
		() => [],
		Response,
		() => [/* @__PURE__ */ $.structField("Headers", "transport.Headers", [0], 0, true), /* @__PURE__ */ $.structField("Body", "io.ReadCloser", [1], 32, true), /* @__PURE__ */ $.structField("BodySize", /* @__PURE__ */ $.basicType("int"), [2], 48, true), /* @__PURE__ */ $.structField("ApplicationError", /* @__PURE__ */ $.basicType("bool"), [3], 56, true), /* @__PURE__ */ $.structField("ApplicationErrorMeta", /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta"), [4], 64, true)]
	)
}

export class ApplicationErrorMeta {
	public get Code(): $.VarRef<yarpcerrors.Code> | null {
		return this._fields.Code
	}

	public set Code(value: $.VarRef<yarpcerrors.Code> | null) {
		this._fields.Code = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Details(): string {
		return this._fields.Details
	}

	public set Details(value: string) {
		this._fields.Details = value
	}

	public _fields: {
		Code: $.VarRef<yarpcerrors.Code> | null
		Name: string
		Details: string
	}

	constructor(init?: Partial<{Code?: $.VarRef<yarpcerrors.Code> | null, Name?: string, Details?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Code: init?.Code ?? (null! as $.VarRef<yarpcerrors.Code> | null),
			Name: init?.Name ?? ("" as string),
			Details: init?.Details ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ApplicationErrorMeta {
		return new ApplicationErrorMeta(this, true)
	}

	public __goscriptAssign(source: ApplicationErrorMeta): void {
		const target = this._fields
		const values = source._fields
		target.Code = values.Code
		target.Name = values.Name
		target.Details = values.Details
	}

	static __typeInfo = $.registerStructType(
		"transport.ApplicationErrorMeta",
		() => new ApplicationErrorMeta(),
		() => [],
		ApplicationErrorMeta,
		() => [/* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "yarpcerrors.Code")), [0], 0, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("Details", /* @__PURE__ */ $.basicType("string"), [2], 24, true)]
	)
}
