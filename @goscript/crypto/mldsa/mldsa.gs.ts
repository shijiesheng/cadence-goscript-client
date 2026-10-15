// Generated file based on mldsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"
import "@goscript/crypto/index.js"

$.registerTypePackagePath("crypto/mldsa", ["mldsa.Parameters", "mldsa.Options"])

export class Parameters {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get publicKeySize(): number {
		return this._fields.publicKeySize
	}

	public set publicKeySize(value: number) {
		this._fields.publicKeySize = value
	}

	public get signatureSize(): number {
		return this._fields.signatureSize
	}

	public set signatureSize(value: number) {
		this._fields.signatureSize = value
	}

	public _fields: {
		name: string
		publicKeySize: number
		signatureSize: number
	}

	constructor(init?: Partial<{name?: string, publicKeySize?: number, signatureSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			publicKeySize: init?.publicKeySize ?? (0 as number),
			signatureSize: init?.signatureSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Parameters {
		return new Parameters(this, true)
	}

	public __goscriptAssign(source: Parameters): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.publicKeySize = values.publicKeySize
		target.signatureSize = values.signatureSize
	}

	public PublicKeySize(): number {
		const params = this;
		return params.publicKeySize
	}

	public SignatureSize(): number {
		const params = this;
		return params.signatureSize
	}

	public String(): string {
		const params = this;
		return params.name
	}

	static __typeInfo = $.registerStructType(
		"mldsa.Parameters",
		() => new Parameters(),
		() => [$.methodSignature("PublicKeySize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("SignatureSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		Parameters,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "crypto/mldsa" }), /* @__PURE__ */ $.structField("publicKeySize", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "crypto/mldsa" }), /* @__PURE__ */ $.structField("signatureSize", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "crypto/mldsa" })]
	)
}

export class Options {
	// Context can be used to distinguish signatures created for different
	// purposes. It must be at most 255 bytes long, and it is empty by default.
	//
	// The same context must be used when signing and verifying a signature.
	public get Context(): string {
		return this._fields.Context
	}

	public set Context(value: string) {
		this._fields.Context = value
	}

	public _fields: {
		Context: string
	}

	constructor(init?: Partial<{Context?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Options {
		return new Options(this, true)
	}

	public __goscriptAssign(source: Options): void {
		const target = this._fields
		const values = source._fields
		target.Context = values.Context
	}

	public HashFunc(): crypto.Hash {
		const opts: Options | $.VarRef<Options> | null = this;
		return 0
	}

	static __typeInfo = $.registerStructType(
		"mldsa.Options",
		() => new Options(),
		() => [$.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")], true)],
		Options,
		() => [/* @__PURE__ */ $.structField("Context", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export const PrivateKeySize: number = 32

export const MLDSA44PublicKeySize: number = 1312

export const MLDSA65PublicKeySize: number = 1952

export const MLDSA87PublicKeySize: number = 2592

export const MLDSA44SignatureSize: number = 2420

export const MLDSA65SignatureSize: number = 3309

export const MLDSA87SignatureSize: number = 4627

export function MLDSA44(): Parameters {
	return new Parameters({name: "ML-DSA-44", publicKeySize: 1312, signatureSize: 2420}, true)
}

export function MLDSA65(): Parameters {
	return new Parameters({name: "ML-DSA-65", publicKeySize: 1952, signatureSize: 3309}, true)
}

export function MLDSA87(): Parameters {
	return new Parameters({name: "ML-DSA-87", publicKeySize: 2592, signatureSize: 4627}, true)
}
