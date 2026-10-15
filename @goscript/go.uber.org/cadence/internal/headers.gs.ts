// Generated file based on headers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import type * as time from "@goscript/time/index.js"

import type * as __goscript_context from "./context.gs.ts"

import type * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.HeaderWriter", "internal.HeaderReader", "internal.ContextPropagator", "internal.headerReader", "internal.headerWriter"])

export type HeaderWriter = {
	Set(_p0: string, _p1: $.Slice<number>): void
}

$.registerInterfaceType(
	"internal.HeaderWriter",
	null,
	[$.methodSignature("Set", [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])]
);

export type HeaderReader = {
	ForEachKey(handler: ((_p0: string, _p1: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.HeaderReader",
	null,
	[$.methodSignature("ForEachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])]
);

export type ContextPropagator = {
	Extract(_p0: context.Context | null, _p1: HeaderReader | null): [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>
	ExtractToWorkflow(_p0: __goscript_context.Context | null, _p1: HeaderReader | null): [__goscript_context.Context | null, $.GoError] | globalThis.Promise<[__goscript_context.Context | null, $.GoError]>
	Inject(_p0: context.Context | null, _p1: HeaderWriter | null): $.GoError | globalThis.Promise<$.GoError>
	InjectFromWorkflow(_p0: __goscript_context.Context | null, _p1: HeaderWriter | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.ContextPropagator",
	null,
	[$.methodSignature("Extract", ["context.Context", "internal.HeaderReader"], ["context.Context", "error"]), $.methodSignature("ExtractToWorkflow", ["internal.Context", "internal.HeaderReader"], ["internal.Context", "error"]), $.methodSignature("Inject", ["context.Context", "internal.HeaderWriter"], ["error"]), $.methodSignature("InjectFromWorkflow", ["internal.Context", "internal.HeaderWriter"], ["error"])]
);

export class headerReader {
	public get header(): shared.Header | $.VarRef<shared.Header> | null {
		return this._fields.header
	}

	public set header(value: shared.Header | $.VarRef<shared.Header> | null) {
		this._fields.header = value
	}

	public _fields: {
		header: shared.Header | $.VarRef<shared.Header> | null
	}

	constructor(init?: Partial<{header?: shared.Header | $.VarRef<shared.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			header: init?.header ?? (null! as shared.Header | $.VarRef<shared.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headerReader {
		return new headerReader(this, true)
	}

	public __goscriptAssign(source: headerReader): void {
		const target = this._fields
		const values = source._fields
		target.header = values.header
	}

	public async ForEachKey(handler: ((_p0: string, _p1: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const hr: headerReader | $.VarRef<headerReader> | null = this;
		const hr$: headerReader = hr == null ? $.pointerTarget<headerReader>(hr) : (hr as any).__isVarRef === true ? (hr as any).value : (hr as any).__goValue === undefined ? (hr as any) : $.pointerTarget<headerReader>(hr)
		if ((hr$ as headerReader).header == null) {
			return null
		}
		for (const [key, value] of $.pointerValue<shared.Header>((hr$ as headerReader).header).Fields?.entries() ?? []) {
			{
				let err = (__goscriptAwait = handler!(key, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.headerReader",
		() => new headerReader(),
		() => [$.methodSignature("ForEachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true)],
		headerReader,
		() => [/* @__PURE__ */ $.structField("header", /* @__PURE__ */ $.pointerType("shared.Header"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class headerWriter {
	public get header(): shared.Header | $.VarRef<shared.Header> | null {
		return this._fields.header
	}

	public set header(value: shared.Header | $.VarRef<shared.Header> | null) {
		this._fields.header = value
	}

	public _fields: {
		header: shared.Header | $.VarRef<shared.Header> | null
	}

	constructor(init?: Partial<{header?: shared.Header | $.VarRef<shared.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			header: init?.header ?? (null! as shared.Header | $.VarRef<shared.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headerWriter {
		return new headerWriter(this, true)
	}

	public __goscriptAssign(source: headerWriter): void {
		const target = this._fields
		const values = source._fields
		target.header = values.header
	}

	public Set(key: string, value: $.Slice<number>): void {
		let hw: headerWriter | $.VarRef<headerWriter> | null = this;
		const hw$: headerWriter = hw == null ? $.pointerTarget<headerWriter>(hw) : (hw as any).__isVarRef === true ? (hw as any).value : (hw as any).__goValue === undefined ? (hw as any) : $.pointerTarget<headerWriter>(hw)
		if ((hw$ as headerWriter).header == null) {
			return
		}
		$.mapSet($.pointerValue<shared.Header>((hw$ as headerWriter).header).Fields, key, value)
	}

	static __typeInfo = $.registerStructType(
		"internal.headerWriter",
		() => new headerWriter(),
		() => [$.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		headerWriter,
		() => [/* @__PURE__ */ $.structField("header", /* @__PURE__ */ $.pointerType("shared.Header"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export function NewHeaderReader(header: shared.Header | $.VarRef<shared.Header> | null): HeaderReader | null {
	return $.interfaceValue<HeaderReader | null>(new headerReader({header: header}), "*internal.headerReader", /* @__PURE__ */ $.pointerType("internal.headerReader"))
}

export function NewHeaderWriter(header: shared.Header | $.VarRef<shared.Header> | null): HeaderWriter | null {
	const header$: shared.Header = header == null ? $.pointerTarget<shared.Header>(header) : (header as any).__isVarRef === true ? (header as any).value : (header as any).__goValue === undefined ? (header as any) : $.pointerTarget<shared.Header>(header)
	if ((header != null) && ((header$ as shared.Header).Fields == null)) {
		;(header$ as shared.Header).Fields = $.makeMap<string, $.Slice<number>>()
	}
	return $.interfaceValue<HeaderWriter | null>(new headerWriter({header: header}), "*internal.headerWriter", /* @__PURE__ */ $.pointerType("internal.headerWriter"))
}

var __goscriptAwait: any
