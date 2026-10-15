// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

$.registerTypePackagePath("encoding/gob", ["gob.gobError"])

export class gobError {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gobError {
		return new gobError(this, true)
	}

	public __goscriptAssign(source: gobError): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	static __typeInfo = $.registerStructType(
		"gob.gobError",
		() => new gobError(),
		() => [],
		gobError,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "encoding/gob" })]
	)
}

export function errorf(format: string, args: $.Slice<any>): void {
	error_(fmt.Errorf($.concatString("gob: ", format), ...(args ?? [])))
}

export function error_(err: $.GoError): void {
	$.panic($.interfaceValue(new gobError({err: err}, true), "gob.gobError", "gob.gobError"))
}

export function catchError(err: $.VarRef<$.GoError> | null): void {
	{
		let e = $.recover()
		if (e != null) {
			let [ge, ok] = $.typeAssertTuple<gobError>(e, "gob.gobError")
			if (!ok) {
				$.panic(e)
			}
			err!.value = ge.err
		}
	}
}
