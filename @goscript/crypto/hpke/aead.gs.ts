// Generated file based on aead.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as chacha20poly1305 from "@goscript/vendor/golang.org/x/crypto/chacha20poly1305/index.js"

import * as __goscript_aead_fips140v1_26 from "./aead_fips140v1.26.gs.ts"
import "@goscript/crypto/cipher/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/vendor/golang.org/x/crypto/chacha20poly1305/index.js"
import "./aead_fips140v1.26.gs.ts"

$.registerTypePackagePath("crypto/hpke", ["hpke.AEAD", "hpke.aead", "hpke.exportOnlyAEAD"])

export type AEAD = {
	ID(): number
	aead(key: $.Slice<number>): [cipher.AEAD | null, $.GoError] | globalThis.Promise<[cipher.AEAD | null, $.GoError]>
	keySize(): number
	nonceSize(): number
}

$.registerInterfaceType(
	"hpke.AEAD",
	null,
	[$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("aead", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["cipher.AEAD", "error"]), $.methodSignature("keySize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("nonceSize", [], [/* @__PURE__ */ $.basicType("int")])]
);

export class aead {
	public get nK(): number {
		return this._fields.nK
	}

	public set nK(value: number) {
		this._fields.nK = value
	}

	public get nN(): number {
		return this._fields.nN
	}

	public set nN(value: number) {
		this._fields.nN = value
	}

	public get _new(): ((_p0: $.Slice<number>) => [cipher.AEAD | null, $.GoError] | globalThis.Promise<[cipher.AEAD | null, $.GoError]>) | null {
		return this._fields._new
	}

	public set _new(value: ((_p0: $.Slice<number>) => [cipher.AEAD | null, $.GoError] | globalThis.Promise<[cipher.AEAD | null, $.GoError]>) | null) {
		this._fields._new = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public _fields: {
		nK: number
		nN: number
		_new: ((_p0: $.Slice<number>) => [cipher.AEAD | null, $.GoError] | globalThis.Promise<[cipher.AEAD | null, $.GoError]>) | null
		id: number
	}

	constructor(init?: Partial<{nK?: number, nN?: number, _new?: ((_p0: $.Slice<number>) => [cipher.AEAD | null, $.GoError] | globalThis.Promise<[cipher.AEAD | null, $.GoError]>) | null, id?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			nK: init?.nK ?? (0 as number),
			nN: init?.nN ?? (0 as number),
			_new: init?._new ?? (null! as ((_p0: $.Slice<number>) => [cipher.AEAD | null, $.GoError] | globalThis.Promise<[cipher.AEAD | null, $.GoError]>) | null),
			id: init?.id ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): aead {
		return new aead(this, true)
	}

	public __goscriptAssign(source: aead): void {
		const target = this._fields
		const values = source._fields
		target.nK = values.nK
		target.nN = values.nN
		target._new = values._new
		target.id = values.id
	}

	public ID(): number {
		const a: aead | $.VarRef<aead> | null = this;
		return $.pointerValue<aead>(a).id
	}

	public async aead(key: $.Slice<number>): globalThis.Promise<[cipher.AEAD | null, $.GoError]> {
		const a: aead | $.VarRef<aead> | null = this;
		const a$: aead = a == null ? $.pointerTarget<aead>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<aead>(a)
		if ($.sliceLen(key) != (a$ as aead).nK) {
			return [null, errors.New("invalid key size")]
		}
		return (a$ as aead)._new!(key)
	}

	public keySize(): number {
		const a: aead | $.VarRef<aead> | null = this;
		return $.pointerValue<aead>(a).nK
	}

	public nonceSize(): number {
		const a: aead | $.VarRef<aead> | null = this;
		return $.pointerValue<aead>(a).nN
	}

	static __typeInfo = $.registerStructType(
		"hpke.aead",
		() => new aead(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("aead", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["cipher.AEAD", "error"], true), $.methodSignature("keySize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("nonceSize", [], [/* @__PURE__ */ $.basicType("int")], true)],
		aead,
		() => [/* @__PURE__ */ $.structField("nK", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("nN", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("new", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["cipher.AEAD", "error"] } as $.FunctionTypeInfo), [2], 16, false, { key: "_new", pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [3], 24, false, { pkgPath: "crypto/hpke" })]
	)
}

export class exportOnlyAEAD {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): exportOnlyAEAD {
		return new exportOnlyAEAD(this, true)
	}

	public __goscriptAssign(source: exportOnlyAEAD): void {
	}

	public ID(): number {
		return 0xFFFF
	}

	public aead(key: $.Slice<number>): [cipher.AEAD | null, $.GoError] {
		return [null, null]
	}

	public keySize(): number {
		return 0
	}

	public nonceSize(): number {
		return 0
	}

	static __typeInfo = $.registerStructType(
		"hpke.exportOnlyAEAD",
		() => new exportOnlyAEAD(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("aead", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["cipher.AEAD", "error"]), $.methodSignature("keySize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("nonceSize", [], [/* @__PURE__ */ $.basicType("int")])],
		exportOnlyAEAD,
		() => []
	)
}

export function NewAEAD(id: number): [AEAD | null, $.GoError] {
	switch (id) {
		case 0x0001:
		{
			return [AES128GCM(), null]
			break
		}
		case 0x0002:
		{
			return [AES256GCM(), null]
			break
		}
		case 0x0003:
		{
			return [ChaCha20Poly1305(), null]
			break
		}
		case 0xFFFF:
		{
			return [ExportOnly(), null]
			break
		}
		default:
		{
			return [null, fmt.Errorf("unsupported AEAD %04x", $.basicInterfaceValue(id, "uint16"))]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function AES128GCM(): AEAD | null {
	return $.interfaceValue<AEAD | null>(__goscript_get_aes128GCM(), "*hpke.aead", /* @__PURE__ */ $.pointerType("hpke.aead"))
}

export function AES256GCM(): AEAD | null {
	return $.interfaceValue<AEAD | null>(__goscript_get_aes256GCM(), "*hpke.aead", /* @__PURE__ */ $.pointerType("hpke.aead"))
}

export function ChaCha20Poly1305(): AEAD | null {
	return $.interfaceValue<AEAD | null>(chacha20poly1305AEAD, "*hpke.aead", /* @__PURE__ */ $.pointerType("hpke.aead"))
}

export function ExportOnly(): AEAD | null {
	return $.interfaceValue<AEAD | null>(new exportOnlyAEAD(undefined, true), "hpke.exportOnlyAEAD", "hpke.exportOnlyAEAD")
}

export var aes128GCM: aead | $.VarRef<aead> | null

export function __goscript_init_aes128GCM(): void {
	if (((aes128GCM) as any) === undefined) {
		aes128GCM = new aead({nK: 16, nN: 12, _new: __goscript_aead_fips140v1_26.newAESGCM, id: 0x0001})
	}
}

export function __goscript_get_aes128GCM(): aead | $.VarRef<aead> | null {
	if (((aes128GCM) as any) === undefined) {
		__goscript_init_aes128GCM()
	}
	return aes128GCM
}

export function __goscript_set_aes128GCM(__goscriptValue: aead | $.VarRef<aead> | null): void {
	aes128GCM = __goscriptValue
}

export var aes256GCM: aead | $.VarRef<aead> | null

export function __goscript_init_aes256GCM(): void {
	if (((aes256GCM) as any) === undefined) {
		aes256GCM = new aead({nK: 32, nN: 12, _new: __goscript_aead_fips140v1_26.newAESGCM, id: 0x0002})
	}
}

export function __goscript_get_aes256GCM(): aead | $.VarRef<aead> | null {
	if (((aes256GCM) as any) === undefined) {
		__goscript_init_aes256GCM()
	}
	return aes256GCM
}

export function __goscript_set_aes256GCM(__goscriptValue: aead | $.VarRef<aead> | null): void {
	aes256GCM = __goscriptValue
}

export let chacha20poly1305AEAD: aead | $.VarRef<aead> | null = new aead({nK: 32, nN: 12, _new: chacha20poly1305.New, id: 0x0003})

export function __goscript_set_chacha20poly1305AEAD(__goscriptValue: aead | $.VarRef<aead> | null): void {
	chacha20poly1305AEAD = __goscriptValue
}
