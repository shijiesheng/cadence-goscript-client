// Generated file based on response.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as envelope from "@goscript/go.uber.org/thriftrw/envelope/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/thriftrw/envelope/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.Response", "thrift.NoWireResponse"])

export class Response {
	public get Body(): envelope.Enveloper | null {
		return this._fields.Body
	}

	public set Body(value: envelope.Enveloper | null) {
		this._fields.Body = value
	}

	public get IsApplicationError(): boolean {
		return this._fields.IsApplicationError
	}

	public set IsApplicationError(value: boolean) {
		this._fields.IsApplicationError = value
	}

	public get ApplicationErrorDetails(): string {
		return this._fields.ApplicationErrorDetails
	}

	public set ApplicationErrorDetails(value: string) {
		this._fields.ApplicationErrorDetails = value
	}

	public get ApplicationErrorName(): string {
		return this._fields.ApplicationErrorName
	}

	public set ApplicationErrorName(value: string) {
		this._fields.ApplicationErrorName = value
	}

	public get ApplicationErrorCode(): $.VarRef<yarpcerrors.Code> | null {
		return this._fields.ApplicationErrorCode
	}

	public set ApplicationErrorCode(value: $.VarRef<yarpcerrors.Code> | null) {
		this._fields.ApplicationErrorCode = value
	}

	public _fields: {
		Body: envelope.Enveloper | null
		IsApplicationError: boolean
		ApplicationErrorDetails: string
		ApplicationErrorName: string
		ApplicationErrorCode: $.VarRef<yarpcerrors.Code> | null
	}

	constructor(init?: Partial<{Body?: envelope.Enveloper | null, IsApplicationError?: boolean, ApplicationErrorDetails?: string, ApplicationErrorName?: string, ApplicationErrorCode?: $.VarRef<yarpcerrors.Code> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Body: init?.Body ?? (null! as envelope.Enveloper | null),
			IsApplicationError: init?.IsApplicationError ?? (false as boolean),
			ApplicationErrorDetails: init?.ApplicationErrorDetails ?? ("" as string),
			ApplicationErrorName: init?.ApplicationErrorName ?? ("" as string),
			ApplicationErrorCode: init?.ApplicationErrorCode ?? (null! as $.VarRef<yarpcerrors.Code> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Response {
		return new Response(this, true)
	}

	public __goscriptAssign(source: Response): void {
		const target = this._fields
		const values = source._fields
		target.Body = $.assignFieldValue(target.Body, values.Body, "envelope.Enveloper")
		target.IsApplicationError = values.IsApplicationError
		target.ApplicationErrorDetails = values.ApplicationErrorDetails
		target.ApplicationErrorName = values.ApplicationErrorName
		target.ApplicationErrorCode = values.ApplicationErrorCode
	}

	static __typeInfo = $.registerStructType(
		"thrift.Response",
		() => new Response(),
		() => [],
		Response,
		() => [/* @__PURE__ */ $.structField("Body", "envelope.Enveloper", [0], 0, true), /* @__PURE__ */ $.structField("IsApplicationError", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("ApplicationErrorDetails", /* @__PURE__ */ $.basicType("string"), [2], 24, true), /* @__PURE__ */ $.structField("ApplicationErrorName", /* @__PURE__ */ $.basicType("string"), [3], 40, true), /* @__PURE__ */ $.structField("ApplicationErrorCode", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "yarpcerrors.Code")), [4], 56, true)]
	)
}

export class NoWireResponse {
	// Body contains the response body. It knows how to encode itself into
	// the "nowire" representation.
	public get Body(): stream.Enveloper | null {
		return this._fields.Body
	}

	public set Body(value: stream.Enveloper | null) {
		this._fields.Body = value
	}

	// ResponseWriter encodes the body into an output stream.
	public get ResponseWriter(): stream.ResponseWriter | null {
		return this._fields.ResponseWriter
	}

	public set ResponseWriter(value: stream.ResponseWriter | null) {
		this._fields.ResponseWriter = value
	}

	// IsApplicationError reports whether the response indicates an
	// appliation-level error. If true, a Thrift exception was thrown by
	// the handler.
	public get IsApplicationError(): boolean {
		return this._fields.IsApplicationError
	}

	public set IsApplicationError(value: boolean) {
		this._fields.IsApplicationError = value
	}

	public get ApplicationErrorDetails(): string {
		return this._fields.ApplicationErrorDetails
	}

	public set ApplicationErrorDetails(value: string) {
		this._fields.ApplicationErrorDetails = value
	}

	public get ApplicationErrorName(): string {
		return this._fields.ApplicationErrorName
	}

	public set ApplicationErrorName(value: string) {
		this._fields.ApplicationErrorName = value
	}

	public get ApplicationErrorCode(): $.VarRef<yarpcerrors.Code> | null {
		return this._fields.ApplicationErrorCode
	}

	public set ApplicationErrorCode(value: $.VarRef<yarpcerrors.Code> | null) {
		this._fields.ApplicationErrorCode = value
	}

	public _fields: {
		Body: stream.Enveloper | null
		ResponseWriter: stream.ResponseWriter | null
		IsApplicationError: boolean
		ApplicationErrorDetails: string
		ApplicationErrorName: string
		ApplicationErrorCode: $.VarRef<yarpcerrors.Code> | null
	}

	constructor(init?: Partial<{Body?: stream.Enveloper | null, ResponseWriter?: stream.ResponseWriter | null, IsApplicationError?: boolean, ApplicationErrorDetails?: string, ApplicationErrorName?: string, ApplicationErrorCode?: $.VarRef<yarpcerrors.Code> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Body: init?.Body ?? (null! as stream.Enveloper | null),
			ResponseWriter: init?.ResponseWriter ?? (null! as stream.ResponseWriter | null),
			IsApplicationError: init?.IsApplicationError ?? (false as boolean),
			ApplicationErrorDetails: init?.ApplicationErrorDetails ?? ("" as string),
			ApplicationErrorName: init?.ApplicationErrorName ?? ("" as string),
			ApplicationErrorCode: init?.ApplicationErrorCode ?? (null! as $.VarRef<yarpcerrors.Code> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NoWireResponse {
		return new NoWireResponse(this, true)
	}

	public __goscriptAssign(source: NoWireResponse): void {
		const target = this._fields
		const values = source._fields
		target.Body = $.assignFieldValue(target.Body, values.Body, "stream.Enveloper")
		target.ResponseWriter = $.assignFieldValue(target.ResponseWriter, values.ResponseWriter, "stream.ResponseWriter")
		target.IsApplicationError = values.IsApplicationError
		target.ApplicationErrorDetails = values.ApplicationErrorDetails
		target.ApplicationErrorName = values.ApplicationErrorName
		target.ApplicationErrorCode = values.ApplicationErrorCode
	}

	static __typeInfo = $.registerStructType(
		"thrift.NoWireResponse",
		() => new NoWireResponse(),
		() => [],
		NoWireResponse,
		() => [/* @__PURE__ */ $.structField("Body", "stream.Enveloper", [0], 0, true), /* @__PURE__ */ $.structField("ResponseWriter", "stream.ResponseWriter", [1], 16, true), /* @__PURE__ */ $.structField("IsApplicationError", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("ApplicationErrorDetails", /* @__PURE__ */ $.basicType("string"), [3], 40, true), /* @__PURE__ */ $.structField("ApplicationErrorName", /* @__PURE__ */ $.basicType("string"), [4], 56, true), /* @__PURE__ */ $.structField("ApplicationErrorCode", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "yarpcerrors.Code")), [5], 72, true)]
	)
}
