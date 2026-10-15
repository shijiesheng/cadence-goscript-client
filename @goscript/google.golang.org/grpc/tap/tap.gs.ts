// Generated file based on tap.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/context/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"

$.registerTypePackagePath("google.golang.org/grpc/tap", ["tap.Info", "tap.ServerInHandle"])

export type ServerInHandle = ((ctx: context.Context | null, info: Info | $.VarRef<Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null

export class Info {
	// FullMethodName is the string of grpc method (in the format of
	// /package.service/method).
	public get FullMethodName(): string {
		return this._fields.FullMethodName
	}

	public set FullMethodName(value: string) {
		this._fields.FullMethodName = value
	}

	// Header contains the header metadata received.
	public get Header(): metadata.MD {
		return this._fields.Header
	}

	public set Header(value: metadata.MD) {
		this._fields.Header = value
	}

	public _fields: {
		FullMethodName: string
		Header: metadata.MD
	}

	constructor(init?: Partial<{FullMethodName?: string, Header?: metadata.MD}>, __goscriptValue?: boolean) {
		this._fields = {
			FullMethodName: init?.FullMethodName ?? ("" as string),
			Header: init?.Header ?? (null! as metadata.MD)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Info {
		return new Info(this, true)
	}

	public __goscriptAssign(source: Info): void {
		const target = this._fields
		const values = source._fields
		target.FullMethodName = values.FullMethodName
		target.Header = values.Header
	}

	static __typeInfo = $.registerStructType(
		"tap.Info",
		() => new Info(),
		() => [],
		Info,
		() => [/* @__PURE__ */ $.structField("FullMethodName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Header", "metadata.MD", [1], 16, true)]
	)
}
