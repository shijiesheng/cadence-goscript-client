// Generated file based on kdf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hkdf from "@goscript/crypto/hkdf/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as sha3 from "@goscript/crypto/sha3/index.js"

import * as sha512 from "@goscript/crypto/sha512/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/crypto/hkdf/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/crypto/sha3/index.js"
import "@goscript/crypto/sha512/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/hash/index.js"
import "@goscript/internal/byteorder/index.js"

$.registerTypePackagePath("crypto/hpke", ["hpke.KDF", "hpke.hkdfKDF", "hpke.shakeKDF"])

export type KDF = {
	ID(): number
	labeledDerive(suiteID: $.Slice<number>, inputKey: $.Slice<number>, label: string, context: $.Slice<number>, length: number): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	labeledExpand(suiteID: $.Slice<number>, randomKey: $.Slice<number>, label: string, info: $.Slice<number>, length: number): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	labeledExtract(suiteID: $.Slice<number>, salt: $.Slice<number>, label: string, inputKey: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	oneStage(): boolean
	size(): number
}

$.registerInterfaceType(
	"hpke.KDF",
	null,
	[$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("labeledDerive", [["suiteID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["inputKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["label", /* @__PURE__ */ $.basicType("string")], ["context", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["length", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("labeledExpand", [["suiteID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["randomKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["label", /* @__PURE__ */ $.basicType("string")], ["info", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["length", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("labeledExtract", [["suiteID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["salt", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["label", /* @__PURE__ */ $.basicType("string")], ["inputKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("oneStage", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("size", [], [/* @__PURE__ */ $.basicType("int")])]
);

export class hkdfKDF {
	public get hash(): (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null {
		return this._fields.hash
	}

	public set hash(value: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null) {
		this._fields.hash = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get nH(): number {
		return this._fields.nH
	}

	public set nH(value: number) {
		this._fields.nH = value
	}

	public _fields: {
		hash: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null
		id: number
		nH: number
	}

	constructor(init?: Partial<{hash?: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null, id?: number, nH?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			hash: init?.hash ?? (null! as (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null),
			id: init?.id ?? (0 as number),
			nH: init?.nH ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hkdfKDF {
		return new hkdfKDF(this, true)
	}

	public __goscriptAssign(source: hkdfKDF): void {
		const target = this._fields
		const values = source._fields
		target.hash = values.hash
		target.id = values.id
		target.nH = values.nH
	}

	public ID(): number {
		const kdf: hkdfKDF | $.VarRef<hkdfKDF> | null = this;
		return $.pointerValue<hkdfKDF>(kdf).id
	}

	public labeledDerive(_p0: $.Slice<number>, _p1: $.Slice<number>, _p2: string, _p3: $.Slice<number>, _p4: number): [$.Slice<number>, $.GoError] {
		const kdf: hkdfKDF | $.VarRef<hkdfKDF> | null = this;
		return [null, errors.New("hpke: internal error: labeledDerive called on two-stage KDF")]
	}

	public async labeledExpand(suiteID: $.Slice<number>, randomKey: $.Slice<number>, label: string, info: $.Slice<number>, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const kdf: hkdfKDF | $.VarRef<hkdfKDF> | null = this;
		let labeledInfo: $.Slice<number> = $.makeSlice<number>(0, (((2 + 7) + $.sliceLen(suiteID)) + $.stringLen(label)) + $.sliceLen(info), "byte")
		labeledInfo = byteorder.BEAppendUint16(labeledInfo, length)
		labeledInfo = $.appendSlice(labeledInfo, new Uint8Array([72, 80, 75, 69, 45, 118, 49]), $.byteSliceHint)
		labeledInfo = $.appendSlice(labeledInfo, suiteID, $.byteSliceHint)
		labeledInfo = $.appendSlice(labeledInfo, $.stringToBytes(label), $.byteSliceHint)
		labeledInfo = $.appendSlice(labeledInfo, info, $.byteSliceHint)
		return hkdf.Expand(__goscriptStatic0(), $.pointerValue<hkdfKDF>(kdf).hash, randomKey, $.bytesToString(labeledInfo), $.int(length))
	}

	public async labeledExtract(suiteID: $.Slice<number>, salt: $.Slice<number>, label: string, inputKey: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const kdf: hkdfKDF | $.VarRef<hkdfKDF> | null = this;
		let labeledIKM: $.Slice<number> = $.makeSlice<number>(0, ((7 + $.sliceLen(suiteID)) + $.stringLen(label)) + $.sliceLen(inputKey), "byte")
		labeledIKM = $.appendSlice(labeledIKM, new Uint8Array([72, 80, 75, 69, 45, 118, 49]), $.byteSliceHint)
		labeledIKM = $.appendSlice(labeledIKM, suiteID, $.byteSliceHint)
		labeledIKM = $.appendSlice(labeledIKM, $.stringToBytes(label), $.byteSliceHint)
		labeledIKM = $.appendSlice(labeledIKM, inputKey, $.byteSliceHint)
		return hkdf.Extract(__goscriptStatic0(), $.pointerValue<hkdfKDF>(kdf).hash, labeledIKM, salt)
	}

	public oneStage(): boolean {
		const kdf: hkdfKDF | $.VarRef<hkdfKDF> | null = this;
		return false
	}

	public size(): number {
		const kdf: hkdfKDF | $.VarRef<hkdfKDF> | null = this;
		return $.pointerValue<hkdfKDF>(kdf).nH
	}

	static __typeInfo = $.registerStructType(
		"hpke.hkdfKDF",
		() => new hkdfKDF(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("labeledDerive", [["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.basicType("string")], ["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("labeledExpand", [["suiteID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["randomKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["label", /* @__PURE__ */ $.basicType("string")], ["info", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["length", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("labeledExtract", [["suiteID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["salt", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["label", /* @__PURE__ */ $.basicType("string")], ["inputKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("oneStage", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		hkdfKDF,
		() => [/* @__PURE__ */ $.structField("hash", ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [1], 8, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("nH", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "crypto/hpke" })]
	)
}

export class shakeKDF {
	public get hash(): (() => sha3.SHAKE | $.VarRef<sha3.SHAKE> | null | globalThis.Promise<sha3.SHAKE | $.VarRef<sha3.SHAKE> | null>) | null {
		return this._fields.hash
	}

	public set hash(value: (() => sha3.SHAKE | $.VarRef<sha3.SHAKE> | null | globalThis.Promise<sha3.SHAKE | $.VarRef<sha3.SHAKE> | null>) | null) {
		this._fields.hash = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get nH(): number {
		return this._fields.nH
	}

	public set nH(value: number) {
		this._fields.nH = value
	}

	public _fields: {
		hash: (() => sha3.SHAKE | $.VarRef<sha3.SHAKE> | null | globalThis.Promise<sha3.SHAKE | $.VarRef<sha3.SHAKE> | null>) | null
		id: number
		nH: number
	}

	constructor(init?: Partial<{hash?: (() => sha3.SHAKE | $.VarRef<sha3.SHAKE> | null | globalThis.Promise<sha3.SHAKE | $.VarRef<sha3.SHAKE> | null>) | null, id?: number, nH?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			hash: init?.hash ?? (null! as (() => sha3.SHAKE | $.VarRef<sha3.SHAKE> | null | globalThis.Promise<sha3.SHAKE | $.VarRef<sha3.SHAKE> | null>) | null),
			id: init?.id ?? (0 as number),
			nH: init?.nH ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): shakeKDF {
		return new shakeKDF(this, true)
	}

	public __goscriptAssign(source: shakeKDF): void {
		const target = this._fields
		const values = source._fields
		target.hash = values.hash
		target.id = values.id
		target.nH = values.nH
	}

	public ID(): number {
		const kdf: shakeKDF | $.VarRef<shakeKDF> | null = this;
		return $.pointerValue<shakeKDF>(kdf).id
	}

	public async labeledDerive(suiteID: $.Slice<number>, inputKey: $.Slice<number>, label: string, context: $.Slice<number>, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const kdf: shakeKDF | $.VarRef<shakeKDF> | null = this;
		let H: sha3.SHAKE | $.VarRef<sha3.SHAKE> | null = ((__goscriptAwait = $.pointerValue<shakeKDF>(kdf).hash!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as sha3.SHAKE | $.VarRef<sha3.SHAKE> | null)
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(inputKey) : sha3.SHAKE.prototype.Write.call(H, inputKey))
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(new Uint8Array([72, 80, 75, 69, 45, 118, 49])) : sha3.SHAKE.prototype.Write.call(H, new Uint8Array([72, 80, 75, 69, 45, 118, 49])))
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(suiteID) : sha3.SHAKE.prototype.Write.call(H, suiteID))
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(new Uint8Array([$.uint($.stringLen(label) >> 8, 8), $.uint($.stringLen(label), 8)]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(H, new Uint8Array([$.uint($.stringLen(label) >> 8, 8), $.uint($.stringLen(label), 8)]) as $.Slice<number>))
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write($.stringToBytes(label)) : sha3.SHAKE.prototype.Write.call(H, $.stringToBytes(label)))
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(new Uint8Array([$.uint($.uintShr(length, 8, 16), 8), $.uint(length, 8)]) as $.Slice<number>) : sha3.SHAKE.prototype.Write.call(H, new Uint8Array([$.uint($.uintShr(length, 8, 16), 8), $.uint(length, 8)]) as $.Slice<number>))
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Write(context) : sha3.SHAKE.prototype.Write.call(H, context))
		let out: $.Slice<number> = $.makeSlice<number>(length, undefined, "byte")
		void (H !== null && (H as any).__isVarRef !== true && (H as any).__goValue === undefined ? ((H as any) as sha3.SHAKE).Read(out) : sha3.SHAKE.prototype.Read.call(H, out))
		return [out, null]
	}

	public labeledExpand(_p0: $.Slice<number>, _p1: $.Slice<number>, _p2: string, _p3: $.Slice<number>, _p4: number): [$.Slice<number>, $.GoError] {
		const kdf: shakeKDF | $.VarRef<shakeKDF> | null = this;
		return [null, errors.New("hpke: internal error: labeledExpand called on one-stage KDF")]
	}

	public labeledExtract(_p0: $.Slice<number>, _p1: $.Slice<number>, _p2: string, _p3: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const kdf: shakeKDF | $.VarRef<shakeKDF> | null = this;
		return [null, errors.New("hpke: internal error: labeledExtract called on one-stage KDF")]
	}

	public oneStage(): boolean {
		const kdf: shakeKDF | $.VarRef<shakeKDF> | null = this;
		return true
	}

	public size(): number {
		const kdf: shakeKDF | $.VarRef<shakeKDF> | null = this;
		return $.pointerValue<shakeKDF>(kdf).nH
	}

	static __typeInfo = $.registerStructType(
		"hpke.shakeKDF",
		() => new shakeKDF(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("labeledDerive", [["suiteID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["inputKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["label", /* @__PURE__ */ $.basicType("string")], ["context", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["length", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("labeledExpand", [["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.basicType("string")], ["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("labeledExtract", [["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.basicType("string")], ["_", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("oneStage", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		shakeKDF,
		() => [/* @__PURE__ */ $.structField("hash", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("sha3.SHAKE")] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [1], 8, false, { pkgPath: "crypto/hpke" }), /* @__PURE__ */ $.structField("nH", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "crypto/hpke" })]
	)
}

export function NewKDF(id: number): [KDF | null, $.GoError] {
	switch (id) {
		case 0x0001:
		{
			return [HKDFSHA256(), null]
			break
		}
		case 0x0002:
		{
			return [HKDFSHA384(), null]
			break
		}
		case 0x0003:
		{
			return [HKDFSHA512(), null]
			break
		}
		case 0x0010:
		{
			return [SHAKE128(), null]
			break
		}
		case 0x0011:
		{
			return [SHAKE256(), null]
			break
		}
		default:
		{
			return [null, fmt.Errorf("unsupported KDF %04x", $.basicInterfaceValue(id, "uint16"))]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function HKDFSHA256(): KDF | null {
	return $.interfaceValue<KDF | null>(__goscript_get_hkdfSHA256(), "*hpke.hkdfKDF", /* @__PURE__ */ $.pointerType("hpke.hkdfKDF"))
}

export function HKDFSHA384(): KDF | null {
	return $.interfaceValue<KDF | null>(__goscript_get_hkdfSHA384(), "*hpke.hkdfKDF", /* @__PURE__ */ $.pointerType("hpke.hkdfKDF"))
}

export function HKDFSHA512(): KDF | null {
	return $.interfaceValue<KDF | null>(__goscript_get_hkdfSHA512(), "*hpke.hkdfKDF", /* @__PURE__ */ $.pointerType("hpke.hkdfKDF"))
}

export var hkdfSHA256: hkdfKDF | $.VarRef<hkdfKDF> | null

export function __goscript_init_hkdfSHA256(): void {
	if (((hkdfSHA256) as any) === undefined) {
		hkdfSHA256 = new hkdfKDF({hash: sha256.New, id: 0x0001, nH: 32})
	}
}

export function __goscript_get_hkdfSHA256(): hkdfKDF | $.VarRef<hkdfKDF> | null {
	if (((hkdfSHA256) as any) === undefined) {
		__goscript_init_hkdfSHA256()
	}
	return hkdfSHA256
}

export function __goscript_set_hkdfSHA256(__goscriptValue: hkdfKDF | $.VarRef<hkdfKDF> | null): void {
	hkdfSHA256 = __goscriptValue
}

export var hkdfSHA384: hkdfKDF | $.VarRef<hkdfKDF> | null

export function __goscript_init_hkdfSHA384(): void {
	if (((hkdfSHA384) as any) === undefined) {
		hkdfSHA384 = new hkdfKDF({hash: sha512.New384, id: 0x0002, nH: 48})
	}
}

export function __goscript_get_hkdfSHA384(): hkdfKDF | $.VarRef<hkdfKDF> | null {
	if (((hkdfSHA384) as any) === undefined) {
		__goscript_init_hkdfSHA384()
	}
	return hkdfSHA384
}

export function __goscript_set_hkdfSHA384(__goscriptValue: hkdfKDF | $.VarRef<hkdfKDF> | null): void {
	hkdfSHA384 = __goscriptValue
}

export var hkdfSHA512: hkdfKDF | $.VarRef<hkdfKDF> | null

export function __goscript_init_hkdfSHA512(): void {
	if (((hkdfSHA512) as any) === undefined) {
		hkdfSHA512 = new hkdfKDF({hash: sha512.New, id: 0x0003, nH: 64})
	}
}

export function __goscript_get_hkdfSHA512(): hkdfKDF | $.VarRef<hkdfKDF> | null {
	if (((hkdfSHA512) as any) === undefined) {
		__goscript_init_hkdfSHA512()
	}
	return hkdfSHA512
}

export function __goscript_set_hkdfSHA512(__goscriptValue: hkdfKDF | $.VarRef<hkdfKDF> | null): void {
	hkdfSHA512 = __goscriptValue
}

export function SHAKE128(): KDF | null {
	return $.interfaceValue<KDF | null>(shake128KDF, "*hpke.shakeKDF", /* @__PURE__ */ $.pointerType("hpke.shakeKDF"))
}

export function SHAKE256(): KDF | null {
	return $.interfaceValue<KDF | null>(shake256KDF, "*hpke.shakeKDF", /* @__PURE__ */ $.pointerType("hpke.shakeKDF"))
}

export let shake128KDF: shakeKDF | $.VarRef<shakeKDF> | null = new shakeKDF({hash: sha3.NewSHAKE128, id: 0x0010, nH: 32})

export function __goscript_set_shake128KDF(__goscriptValue: shakeKDF | $.VarRef<shakeKDF> | null): void {
	shake128KDF = __goscriptValue
}

export let shake256KDF: shakeKDF | $.VarRef<shakeKDF> | null = new shakeKDF({hash: sha3.NewSHAKE256, id: 0x0011, nH: 64})

export function __goscript_set_shake256KDF(__goscriptValue: shakeKDF | $.VarRef<shakeKDF> | null): void {
	shake256KDF = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
