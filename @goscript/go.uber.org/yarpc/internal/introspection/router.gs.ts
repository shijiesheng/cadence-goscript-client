// Generated file based on router.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as procedure from "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/introspection", ["introspection.Procedure"])

export class Procedure {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Encoding(): string {
		return this._fields.Encoding
	}

	public set Encoding(value: string) {
		this._fields.Encoding = value
	}

	public get Signature(): string {
		return this._fields.Signature
	}

	public set Signature(value: string) {
		this._fields.Signature = value
	}

	public get RPCType(): string {
		return this._fields.RPCType
	}

	public set RPCType(value: string) {
		this._fields.RPCType = value
	}

	public _fields: {
		Name: string
		Encoding: string
		Signature: string
		RPCType: string
	}

	constructor(init?: Partial<{Name?: string, Encoding?: string, Signature?: string, RPCType?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Encoding: init?.Encoding ?? ("" as string),
			Signature: init?.Signature ?? ("" as string),
			RPCType: init?.RPCType ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Procedure {
		return new Procedure(this, true)
	}

	public __goscriptAssign(source: Procedure): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Encoding = values.Encoding
		target.Signature = values.Signature
		target.RPCType = values.RPCType
	}

	public async ProcedureName(): globalThis.Promise<string> {
		const p = this;
		// see transport/grpc/util.go#toFullMethod
		if ($.stringEqual(p.Encoding, "proto")) {
			let [svc, method] = procedure.FromName(p.Name)
			return fmt.Sprintf("/%s/%s", svc, method)
		}
		return p.Name
	}

	static __typeInfo = $.registerStructType(
		"introspection.Procedure",
		() => new Procedure(),
		() => [$.methodSignature("ProcedureName", [], [/* @__PURE__ */ $.basicType("string")])],
		Procedure,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("Encoding", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"encoding\"" }), /* @__PURE__ */ $.structField("Signature", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"signature\"" }), /* @__PURE__ */ $.structField("RPCType", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "json:\"rpcType\"" })]
	)
}

export const proto: string = "proto"

export function IntrospectProcedures(routerProcs: $.Slice<transport.Procedure>): $.Slice<Procedure> {
	let procedures: $.Slice<Procedure> = $.makeSlice<Procedure>(0, $.sliceLen(routerProcs), undefined, () => new Procedure(undefined, true))
	for (let __goscriptRangeTarget0 = routerProcs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let p = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as transport.Procedure)).clone()
		procedures = $.appendOne(procedures, (() => { const __goscriptLiteralField0 = transport.Type_String(p.HandlerSpec.Type()); return new Procedure({Name: p.Name, Encoding: p.Encoding, Signature: p.Signature, RPCType: __goscriptLiteralField0}, true) })())
	}
	return procedures
}
