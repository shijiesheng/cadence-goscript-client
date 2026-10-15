// Generated file based on option.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus/promhttp", ["promhttp.Option", "promhttp.option"])

export type Option = ((_p0: option | $.VarRef<option> | null) => void) | null

export class option {
	public get extraMethods(): $.Slice<string> {
		return this._fields.extraMethods
	}

	public set extraMethods(value: $.Slice<string>) {
		this._fields.extraMethods = value
	}

	public _fields: {
		extraMethods: $.Slice<string>
	}

	constructor(init?: Partial<{extraMethods?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			extraMethods: init?.extraMethods ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): option {
		return new option(this, true)
	}

	public __goscriptAssign(source: option): void {
		const target = this._fields
		const values = source._fields
		target.extraMethods = values.extraMethods
	}

	static __typeInfo = $.registerStructType(
		"promhttp.option",
		() => new option(),
		() => [],
		option,
		() => [/* @__PURE__ */ $.structField("extraMethods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus/promhttp" })]
	)
}

export function WithExtraMethods(methods: $.Slice<string>): Option | null {
	return $.functionValue((o: option | $.VarRef<option> | null): void => {
		$.pointerValue<option>(o).extraMethods = methods
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("promhttp.option")], results: [] } as $.FunctionTypeInfo))
}
