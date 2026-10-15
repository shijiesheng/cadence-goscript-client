// Generated file based on context_header.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "./context.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.ContextWithHeaders", "tchannel.headerCtx", "tchannel.headersContainer"])

export type ContextWithHeaders = {
	Child(): ContextWithHeaders | null | globalThis.Promise<ContextWithHeaders | null>
	Deadline(): [time.Time, boolean]
	Done(): $.Channel<{}> | null
	Err(): $.GoError | globalThis.Promise<$.GoError>
	Headers(): globalThis.Map<string, string> | null | globalThis.Promise<globalThis.Map<string, string> | null>
	ResponseHeaders(): globalThis.Map<string, string> | null | globalThis.Promise<globalThis.Map<string, string> | null>
	SetResponseHeaders(_p0: globalThis.Map<string, string> | null): void
	Value(key: any): any | globalThis.Promise<any>
}

$.registerInterfaceType(
	"tchannel.ContextWithHeaders",
	null,
	[$.methodSignature("Child", [], ["tchannel.ContextWithHeaders"]), $.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")]), $.methodSignature("Err", [], ["error"]), $.methodSignature("Headers", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]), $.methodSignature("ResponseHeaders", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]), $.methodSignature("SetResponseHeaders", [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

export class headerCtx {
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public _fields: {
		Context: context.Context | null
	}

	constructor(init?: Partial<{Context?: context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headerCtx {
		return new headerCtx(this, true)
	}

	public __goscriptAssign(source: headerCtx): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
	}

	public async Child(): globalThis.Promise<ContextWithHeaders | null> {
		const c = this;
		let headersCopy: $.VarRef<headersContainer> = $.varRef(new headersContainer(undefined, true))
		{
			let h: headersContainer | $.VarRef<headersContainer> | null = await c.headers()
			if (h != null) {
				headersCopy.value = $.assignStruct(headersCopy.value, $.pointerValue<headersContainer>(h))
			}
		}

		return Wrap(context.WithValue(c.Context, $.namedValueInterfaceValue<any>(1, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey")), $.interfaceValue(headersCopy, "*tchannel.headersContainer", /* @__PURE__ */ $.pointerType("tchannel.headersContainer"))))
	}

	public async Headers(): globalThis.Promise<globalThis.Map<string, string> | null> {
		const c = this;
		{
			let h: headersContainer | $.VarRef<headersContainer> | null = await c.headers()
			if (h != null) {
				return $.pointerValue<headersContainer>(h).reqHeaders
			}
		}
		return null
	}

	public async ResponseHeaders(): globalThis.Promise<globalThis.Map<string, string> | null> {
		const c = this;
		{
			let h: headersContainer | $.VarRef<headersContainer> | null = await c.headers()
			if (h != null) {
				return $.pointerValue<headersContainer>(h).respHeaders
			}
		}
		return null
	}

	public async SetResponseHeaders(headers: globalThis.Map<string, string> | null): globalThis.Promise<void> {
		const c = this;
		{
			let h: headersContainer | $.VarRef<headersContainer> | null = await c.headers()
			if (h != null) {
				$.pointerValue<headersContainer>(h).respHeaders = headers
				return
			}
		}
		$.panic("SetResponseHeaders called on ContextWithHeaders not created via WrapWithHeaders")
	}

	public async headers(): globalThis.Promise<headersContainer | $.VarRef<headersContainer> | null> {
		const c = this;
		{
			let __goscriptTuple0: any = $.typeAssertTuple<headersContainer | $.VarRef<headersContainer> | null>(await $.pointerValue<Exclude<context2.Context, null>>(c.Context).Value($.namedValueInterfaceValue<any>(1, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey"))), /* @__PURE__ */ $.pointerType("tchannel.headersContainer"))
			let h: headersContainer | $.VarRef<headersContainer> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return h
			}
		}
		return null
	}

	public Deadline(): any {
		return $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Deadline()
	}

	public Done(): any {
		return $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Done()
	}

	public async Err(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Err()
	}

	public async Value(key: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Value(key)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.headerCtx",
		() => new headerCtx(),
		() => [$.methodSignature("Child", [], ["tchannel.ContextWithHeaders"]), $.methodSignature("Headers", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]), $.methodSignature("ResponseHeaders", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]), $.methodSignature("SetResponseHeaders", [["headers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]]), $.methodSignature("headers", [], [/* @__PURE__ */ $.pointerType("tchannel.headersContainer")]), $.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")]), $.methodSignature("Err", [], ["error"]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])],
		headerCtx,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true, { anonymous: true })]
	)
}

export class headersContainer {
	public get reqHeaders(): globalThis.Map<string, string> | null {
		return this._fields.reqHeaders
	}

	public set reqHeaders(value: globalThis.Map<string, string> | null) {
		this._fields.reqHeaders = value
	}

	public get respHeaders(): globalThis.Map<string, string> | null {
		return this._fields.respHeaders
	}

	public set respHeaders(value: globalThis.Map<string, string> | null) {
		this._fields.respHeaders = value
	}

	public _fields: {
		reqHeaders: globalThis.Map<string, string> | null
		respHeaders: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{reqHeaders?: globalThis.Map<string, string> | null, respHeaders?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reqHeaders: init?.reqHeaders ?? (null! as globalThis.Map<string, string> | null),
			respHeaders: init?.respHeaders ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headersContainer {
		return new headersContainer(this, true)
	}

	public __goscriptAssign(source: headersContainer): void {
		const target = this._fields
		const values = source._fields
		target.reqHeaders = values.reqHeaders
		target.respHeaders = values.respHeaders
	}

	static __typeInfo = $.registerStructType(
		"tchannel.headersContainer",
		() => new headersContainer(),
		() => [],
		headersContainer,
		() => [/* @__PURE__ */ $.structField("reqHeaders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("respHeaders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export async function Wrap(ctx: context.Context | null): globalThis.Promise<ContextWithHeaders | null> {
	let hctx = new headerCtx({Context: ctx}, true)
	{
		let h: headersContainer | $.VarRef<headersContainer> | null = await hctx.headers()
		if (h != null) {
			return $.interfaceValue<ContextWithHeaders | null>((hctx).clone(), "tchannel.headerCtx", "tchannel.headerCtx")
		}
	}

	// If there is no header container, we should create an empty one.
	return WrapWithHeaders(ctx, null)
}

export function WrapWithHeaders(ctx: context.Context | null, headers: globalThis.Map<string, string> | null): ContextWithHeaders | null {
	let h: headersContainer | $.VarRef<headersContainer> | null = new headersContainer({reqHeaders: headers})
	let newCtx = context.WithValue(ctx, $.namedValueInterfaceValue<any>(1, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey")), $.interfaceValue(h, "*tchannel.headersContainer", /* @__PURE__ */ $.pointerType("tchannel.headersContainer")))
	return $.interfaceValue<ContextWithHeaders | null>(new headerCtx({Context: newCtx}, true), "tchannel.headerCtx", "tchannel.headerCtx")
}

export function WithoutHeaders(ctx: context.Context | null): context.Context | null {
	return context.WithValue(context.WithValue(ctx, $.namedValueInterfaceValue<any>(0, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey")), null), $.namedValueInterfaceValue<any>(1, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey")), null)
}
