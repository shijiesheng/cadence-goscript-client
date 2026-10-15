// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.decodeError"])

export class decodeError {
	public get message(): string {
		return this._fields.message
	}

	public set message(value: string) {
		this._fields.message = value
	}

	public _fields: {
		message: string
	}

	constructor(init?: Partial<{message?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			message: init?.message ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decodeError {
		return new decodeError(this, true)
	}

	public __goscriptAssign(source: decodeError): void {
		const target = this._fields
		const values = source._fields
		target.message = values.message
	}

	public Error(): string {
		const e = this;
		return e.message
	}

	static __typeInfo = $.registerStructType(
		"binary.decodeError",
		() => new decodeError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		decodeError,
		() => [/* @__PURE__ */ $.structField("message", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export async function decodeErrorf(f: string, args: $.Slice<any>): globalThis.Promise<decodeError> {
	return (await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf(f, ...(args ?? [])); return new decodeError({message: __goscriptLiteralField0}, true) })())
}

export function IsDecodeError(e: $.GoError): boolean {
	// TODO(abg): decode error can probably be shared across protocols. move
	// to protocol/
	let [, isDecodeError] = $.typeAssertTuple<decodeError>(e, "binary.decodeError")
	return isDecodeError
}
