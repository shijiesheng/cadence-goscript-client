// Generated file based on error_ext.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.packedError"])

export class packedError {
	public get Value(): $.GoError {
		return this._fields.Value
	}

	public set Value(value: $.GoError) {
		this._fields.Value = value
	}

	public _fields: {
		Value: $.GoError
	}

	constructor(init?: Partial<{Value?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): packedError {
		return new packedError(this, true)
	}

	public __goscriptAssign(source: packedError): void {
		const target = this._fields
		const values = source._fields
		target.Value = $.assignFieldValue(target.Value, values.Value, "error")
	}

	static __typeInfo = $.registerStructType(
		"atomic.packedError",
		() => new packedError(),
		() => [],
		packedError,
		() => [/* @__PURE__ */ $.structField("Value", "error", [0], 0, true)]
	)
}

export function packError(v: $.GoError): any {
	return $.interfaceValue(new packedError({Value: v}, true), "atomic.packedError", "atomic.packedError")
}

export function unpackError(v: any): $.GoError {
	{
		let [err, ok] = $.typeAssertTuple<packedError>(v, "atomic.packedError")
		if (ok) {
			return err.Value
		}
	}
	return null
}
