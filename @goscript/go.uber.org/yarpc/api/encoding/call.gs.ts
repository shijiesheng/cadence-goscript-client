// Generated file based on call.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as iter from "@goscript/iter/index.js"

import * as sort from "@goscript/sort/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as inboundcall from "@goscript/go.uber.org/yarpc/internal/inboundcall/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/context/index.js"
import "@goscript/iter/index.js"
import "@goscript/sort/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/inboundcall/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/encoding", ["encoding.keyValuePair", "encoding.Call"])

export class keyValuePair {
	public get k(): string {
		return this._fields.k
	}

	public set k(value: string) {
		this._fields.k = value
	}

	public get v(): string {
		return this._fields.v
	}

	public set v(value: string) {
		this._fields.v = value
	}

	public _fields: {
		k: string
		v: string
	}

	constructor(init?: Partial<{k?: string, v?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			k: init?.k ?? ("" as string),
			v: init?.v ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): keyValuePair {
		return new keyValuePair(this, true)
	}

	public __goscriptAssign(source: keyValuePair): void {
		const target = this._fields
		const values = source._fields
		target.k = values.k
		target.v = values.v
	}

	static __typeInfo = $.registerStructType(
		"encoding.keyValuePair",
		() => new keyValuePair(),
		() => [],
		keyValuePair,
		() => [/* @__PURE__ */ $.structField("k", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export class Call {
	public get md(): inboundcall.Metadata | null {
		return this._fields.md
	}

	public set md(value: inboundcall.Metadata | null) {
		this._fields.md = value
	}

	public _fields: {
		md: inboundcall.Metadata | null
	}

	constructor(init?: Partial<{md?: inboundcall.Metadata | null}>, __goscriptValue?: boolean) {
		this._fields = {
			md: init?.md ?? (null! as inboundcall.Metadata | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Call {
		return new Call(this, true)
	}

	public __goscriptAssign(source: Call): void {
		const target = this._fields
		const values = source._fields
		target.md = $.assignFieldValue(target.md, values.md, "inboundcall.Metadata")
	}

	public async Caller(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Caller()
	}

	public async CallerProcedure(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).CallerProcedure()
	}

	public async Encoding(): globalThis.Promise<transport.Encoding> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Encoding()
	}

	public async Header(k: string): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}

		{
			let [v, ok] = ((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers).Get(k)
			if (ok) {
				return v
			}
		}

		return ""
	}

	public async HeaderNames(): globalThis.Promise<$.Slice<string>> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return null
		}

		let items: globalThis.Map<string, string> | null = ((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers).Items()
		let names: $.Slice<string> = $.makeSlice<string>(0, $.len(items), "string")
		for (const [k, __rangeValue] of items?.entries() ?? []) {
			names = $.appendOne(names, k)
		}
		sort.Strings(names)
		return names
	}

	public HeaderNamesAll(): iter.Seq<string> | null {
		const c: Call | $.VarRef<Call> | null = this;
		return $.functionValue(async (_yield: ((_p0: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			if (c == null) {
				return
			}
			let __goscriptRangeReturn0 = false
			;await (async () => {
				await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers))).All()!(async (k, __goscriptRange0_1) => {
					if (!(__goscriptAwait = _yield!(k), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						__goscriptRangeReturn0 = true
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn0) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public async Headers(): globalThis.Promise<globalThis.Map<string, string> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return null
		}

		let items: globalThis.Map<string, string> | null = ((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers).Items()
		let h: globalThis.Map<string, string> | null = $.makeMap<string, string>()
		for (let [k, v] of items?.entries() ?? []) {
			$.mapSet(h, k, v)
		}
		return h
	}

	public HeadersAll(): iter.Seq2<string, string> | null {
		const c: Call | $.VarRef<Call> | null = this;
		return $.functionValue(async (_yield: ((_p0: string, _p1: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			if (c == null) {
				return
			}
			let __goscriptRangeReturn1 = false
			;await (async () => {
				await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers))).All()!(async (k, v) => {
					if (!(__goscriptAwait = _yield!(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						__goscriptRangeReturn1 = true
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn1) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public async HeadersLen(): globalThis.Promise<number> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return 0
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers()
	}

	public async OriginalHeader(k: string): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}

		{
			let [v, ok] = $.mapGet<string, string, string>(((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers).OriginalItems(), k, "")
			if (ok) {
				return v
			}
		}

		return ""
	}

	public async OriginalHeaders(): globalThis.Promise<globalThis.Map<string, string> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return null
		}

		let items: globalThis.Map<string, string> | null = ((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers).OriginalItems()
		let h: globalThis.Map<string, string> | null = $.makeMap<string, string>()
		for (let [k, v] of items?.entries() ?? []) {
			$.mapSet(h, k, v)
		}
		return h
	}

	public OriginalHeadersAll(): iter.Seq2<string, string> | null {
		const c: Call | $.VarRef<Call> | null = this;
		return $.functionValue(async (_yield: ((_p0: string, _p1: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			if (c == null) {
				return
			}
			let __goscriptRangeReturn2 = false
			;await (async () => {
				await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.Headers))).OriginalItemsAll()!(async (k, v) => {
					if (!(__goscriptAwait = _yield!(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						__goscriptRangeReturn2 = true
						return false
					}
					return true
				})
			})()
			if (__goscriptRangeReturn2) {
				return
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public async OriginalHeadersLen(): globalThis.Promise<number> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return 0
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Headers()
	}

	public async Procedure(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Procedure()
	}

	public async RoutingDelegate(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).RoutingDelegate()
	}

	public async RoutingKey(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).RoutingKey()
	}

	public async Service(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Service()
	}

	public async ShardKey(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).ShardKey()
	}

	public async Transport(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return ""
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).Transport()
	}

	public async WriteResponseHeader(k: string, v: string): globalThis.Promise<$.GoError> {
		const c: Call | $.VarRef<Call> | null = this;
		if (c == null) {
			return yarpcerrors.InvalidArgumentErrorf($.concatString("failed to write response header: ", "Call was nil, make sure CallFromContext was called with a request context"), null)
		}
		return $.pointerValue<Exclude<inboundcall.Metadata, null>>($.pointerValue<Call>(c).md).WriteResponseHeader(k, v)
	}

	static __typeInfo = $.registerStructType(
		"encoding.Call",
		() => new Call(),
		() => [$.methodSignature("Caller", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("CallerProcedure", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Encoding", [], [/* @__PURE__ */ $.basicType("string", "transport.Encoding")], true), $.methodSignature("Header", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("HeaderNames", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("HeaderNamesAll", [], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("Headers", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("HeadersAll", [], [({ kind: $.TypeKind.Function, name: "iter.Seq2", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("HeadersLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("OriginalHeader", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("OriginalHeaders", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("OriginalHeadersAll", [], [({ kind: $.TypeKind.Function, name: "iter.Seq2", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("OriginalHeadersLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Procedure", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Service", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ShardKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Transport", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("WriteResponseHeader", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		Call,
		() => [/* @__PURE__ */ $.structField("md", "inboundcall.Metadata", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export async function CallFromContext(ctx: context.Context | null): globalThis.Promise<Call | $.VarRef<Call> | null> {
	{
		let [md, ok] = await inboundcall.GetMetadata(ctx)
		if (ok) {
			return new Call({md: md})
		}
	}
	return null
}

var __goscriptAwait: any
