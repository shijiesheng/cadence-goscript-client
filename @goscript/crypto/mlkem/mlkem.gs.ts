// Generated file based on mlkem.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as mlkem from "@goscript/crypto/internal/fips140/mlkem/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/internal/fips140/mlkem/index.js"

$.registerTypePackagePath("crypto/mlkem", ["mlkem.DecapsulationKey768", "mlkem.EncapsulationKey768", "mlkem.DecapsulationKey1024", "mlkem.EncapsulationKey1024"])

export class DecapsulationKey768 {
	public get key(): mlkem.DecapsulationKey768 | $.VarRef<mlkem.DecapsulationKey768> | null {
		return this._fields.key
	}

	public set key(value: mlkem.DecapsulationKey768 | $.VarRef<mlkem.DecapsulationKey768> | null) {
		this._fields.key = value
	}

	public _fields: {
		key: mlkem.DecapsulationKey768 | $.VarRef<mlkem.DecapsulationKey768> | null
	}

	constructor(init?: Partial<{key?: mlkem.DecapsulationKey768 | $.VarRef<mlkem.DecapsulationKey768> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? (null! as mlkem.DecapsulationKey768 | $.VarRef<mlkem.DecapsulationKey768> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DecapsulationKey768 {
		return new DecapsulationKey768(this, true)
	}

	public __goscriptAssign(source: DecapsulationKey768): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
	}

	public Bytes(): $.Slice<number> {
		const dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = this;
		return mlkem.DecapsulationKey768.prototype.Bytes.call($.pointerValue<DecapsulationKey768>(dk).key)
	}

	public async Decapsulate(ciphertext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return mlkem.DecapsulationKey768.prototype.Decapsulate.call($.pointerValue<DecapsulationKey768>(dk).key, ciphertext)
	}

	public EncapsulationKey(): EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null {
		const dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = this;
		return (() => { const __goscriptLiteralField0 = mlkem.DecapsulationKey768.prototype.EncapsulationKey.call($.pointerValue<DecapsulationKey768>(dk).key); return new EncapsulationKey768({key: __goscriptLiteralField0}) })()
	}

	public Encapsulator(): crypto.Encapsulator | null {
		const dk: DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null = this;
		return $.interfaceValue<crypto.Encapsulator | null>((dk !== null && (dk as any).__isVarRef !== true && (dk as any).__goValue === undefined ? ((dk as any) as DecapsulationKey768).EncapsulationKey() : DecapsulationKey768.prototype.EncapsulationKey.call(dk)), "*mlkem.EncapsulationKey768", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768"))
	}

	static __typeInfo = $.registerStructType(
		"mlkem.DecapsulationKey768",
		() => new DecapsulationKey768(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Decapsulate", [["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("EncapsulationKey", [], [/* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768")], true), $.methodSignature("Encapsulator", [], ["crypto.Encapsulator"], true)],
		DecapsulationKey768,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey768"), [0], 0, false, { pkgPath: "crypto/mlkem" })]
	)
}

export class EncapsulationKey768 {
	public get key(): mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null {
		return this._fields.key
	}

	public set key(value: mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null) {
		this._fields.key = value
	}

	public _fields: {
		key: mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null
	}

	constructor(init?: Partial<{key?: mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? (null! as mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EncapsulationKey768 {
		return new EncapsulationKey768(this, true)
	}

	public __goscriptAssign(source: EncapsulationKey768): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
	}

	public Bytes(): $.Slice<number> {
		const ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = this;
		return mlkem.EncapsulationKey768.prototype.Bytes.call($.pointerValue<EncapsulationKey768>(ek).key)
	}

	public async Encapsulate(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		const ek: EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let ciphertext: $.Slice<number> = null! as $.Slice<number>
		return mlkem.EncapsulationKey768.prototype.Encapsulate.call($.pointerValue<EncapsulationKey768>(ek).key)
	}

	static __typeInfo = $.registerStructType(
		"mlkem.EncapsulationKey768",
		() => new EncapsulationKey768(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Encapsulate", [], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true)],
		EncapsulationKey768,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey768"), [0], 0, false, { pkgPath: "crypto/mlkem" })]
	)
}

export class DecapsulationKey1024 {
	public get key(): mlkem.DecapsulationKey1024 | $.VarRef<mlkem.DecapsulationKey1024> | null {
		return this._fields.key
	}

	public set key(value: mlkem.DecapsulationKey1024 | $.VarRef<mlkem.DecapsulationKey1024> | null) {
		this._fields.key = value
	}

	public _fields: {
		key: mlkem.DecapsulationKey1024 | $.VarRef<mlkem.DecapsulationKey1024> | null
	}

	constructor(init?: Partial<{key?: mlkem.DecapsulationKey1024 | $.VarRef<mlkem.DecapsulationKey1024> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? (null! as mlkem.DecapsulationKey1024 | $.VarRef<mlkem.DecapsulationKey1024> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DecapsulationKey1024 {
		return new DecapsulationKey1024(this, true)
	}

	public __goscriptAssign(source: DecapsulationKey1024): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
	}

	public Bytes(): $.Slice<number> {
		const dk: DecapsulationKey1024 | $.VarRef<DecapsulationKey1024> | null = this;
		return mlkem.DecapsulationKey1024.prototype.Bytes.call($.pointerValue<DecapsulationKey1024>(dk).key)
	}

	public async Decapsulate(ciphertext: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const dk: DecapsulationKey1024 | $.VarRef<DecapsulationKey1024> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return mlkem.DecapsulationKey1024.prototype.Decapsulate.call($.pointerValue<DecapsulationKey1024>(dk).key, ciphertext)
	}

	public EncapsulationKey(): EncapsulationKey1024 | $.VarRef<EncapsulationKey1024> | null {
		const dk: DecapsulationKey1024 | $.VarRef<DecapsulationKey1024> | null = this;
		return (() => { const __goscriptLiteralField1 = mlkem.DecapsulationKey1024.prototype.EncapsulationKey.call($.pointerValue<DecapsulationKey1024>(dk).key); return new EncapsulationKey1024({key: __goscriptLiteralField1}) })()
	}

	public Encapsulator(): crypto.Encapsulator | null {
		const dk: DecapsulationKey1024 | $.VarRef<DecapsulationKey1024> | null = this;
		return $.interfaceValue<crypto.Encapsulator | null>((dk !== null && (dk as any).__isVarRef !== true && (dk as any).__goValue === undefined ? ((dk as any) as DecapsulationKey1024).EncapsulationKey() : DecapsulationKey1024.prototype.EncapsulationKey.call(dk)), "*mlkem.EncapsulationKey1024", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024"))
	}

	static __typeInfo = $.registerStructType(
		"mlkem.DecapsulationKey1024",
		() => new DecapsulationKey1024(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Decapsulate", [["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("EncapsulationKey", [], [/* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024")], true), $.methodSignature("Encapsulator", [], ["crypto.Encapsulator"], true)],
		DecapsulationKey1024,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.pointerType("mlkem.DecapsulationKey1024"), [0], 0, false, { pkgPath: "crypto/mlkem" })]
	)
}

export class EncapsulationKey1024 {
	public get key(): mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null {
		return this._fields.key
	}

	public set key(value: mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null) {
		this._fields.key = value
	}

	public _fields: {
		key: mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null
	}

	constructor(init?: Partial<{key?: mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? (null! as mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EncapsulationKey1024 {
		return new EncapsulationKey1024(this, true)
	}

	public __goscriptAssign(source: EncapsulationKey1024): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
	}

	public Bytes(): $.Slice<number> {
		const ek: EncapsulationKey1024 | $.VarRef<EncapsulationKey1024> | null = this;
		return mlkem.EncapsulationKey1024.prototype.Bytes.call($.pointerValue<EncapsulationKey1024>(ek).key)
	}

	public async Encapsulate(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		const ek: EncapsulationKey1024 | $.VarRef<EncapsulationKey1024> | null = this;
		let sharedKey: $.Slice<number> = null! as $.Slice<number>
		let ciphertext: $.Slice<number> = null! as $.Slice<number>
		return mlkem.EncapsulationKey1024.prototype.Encapsulate.call($.pointerValue<EncapsulationKey1024>(ek).key)
	}

	static __typeInfo = $.registerStructType(
		"mlkem.EncapsulationKey1024",
		() => new EncapsulationKey1024(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Encapsulate", [], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true)],
		EncapsulationKey1024,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.pointerType("mlkem.EncapsulationKey1024"), [0], 0, false, { pkgPath: "crypto/mlkem" })]
	)
}

export const SharedKeySize: number = 32

export const SeedSize: number = 64

export const CiphertextSize768: number = 1088

export const EncapsulationKeySize768: number = 1184

export const CiphertextSize1024: number = 1568

export const EncapsulationKeySize1024: number = 1568

export async function GenerateKey768(): globalThis.Promise<[DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, $.GoError]> {
	let __goscriptTuple0: any = await mlkem.GenerateKey768()
	let key: mlkem.DecapsulationKey768 | $.VarRef<mlkem.DecapsulationKey768> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}

	return [new DecapsulationKey768({key: key}), null]
}

export function NewDecapsulationKey768(seed: $.Slice<number>): [DecapsulationKey768 | $.VarRef<DecapsulationKey768> | null, $.GoError] {
	let __goscriptTuple1: any = mlkem.NewDecapsulationKey768(seed)
	let key: mlkem.DecapsulationKey768 | $.VarRef<mlkem.DecapsulationKey768> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}

	return [new DecapsulationKey768({key: key}), null]
}

export function NewEncapsulationKey768(encapsulationKey: $.Slice<number>): [EncapsulationKey768 | $.VarRef<EncapsulationKey768> | null, $.GoError] {
	let __goscriptTuple2: any = mlkem.NewEncapsulationKey768(encapsulationKey)
	let key: mlkem.EncapsulationKey768 | $.VarRef<mlkem.EncapsulationKey768> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}

	return [new EncapsulationKey768({key: key}), null]
}

export async function GenerateKey1024(): globalThis.Promise<[DecapsulationKey1024 | $.VarRef<DecapsulationKey1024> | null, $.GoError]> {
	let __goscriptTuple3: any = await mlkem.GenerateKey1024()
	let key: mlkem.DecapsulationKey1024 | $.VarRef<mlkem.DecapsulationKey1024> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}

	return [new DecapsulationKey1024({key: key}), null]
}

export function NewDecapsulationKey1024(seed: $.Slice<number>): [DecapsulationKey1024 | $.VarRef<DecapsulationKey1024> | null, $.GoError] {
	let __goscriptTuple4: any = mlkem.NewDecapsulationKey1024(seed)
	let key: mlkem.DecapsulationKey1024 | $.VarRef<mlkem.DecapsulationKey1024> | null = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}

	return [new DecapsulationKey1024({key: key}), null]
}

export function NewEncapsulationKey1024(encapsulationKey: $.Slice<number>): [EncapsulationKey1024 | $.VarRef<EncapsulationKey1024> | null, $.GoError] {
	let __goscriptTuple5: any = mlkem.NewEncapsulationKey1024(encapsulationKey)
	let key: mlkem.EncapsulationKey1024 | $.VarRef<mlkem.EncapsulationKey1024> | null = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}

	return [new EncapsulationKey1024({key: key}), null]
}
