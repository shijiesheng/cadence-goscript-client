// Generated file based on tls13.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hkdf from "@goscript/crypto/internal/fips140/hkdf/index.js"

import * as byteorder from "@goscript/crypto/internal/fips140deps/byteorder/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/crypto/internal/fips140/hkdf/index.js"
import "@goscript/crypto/internal/fips140deps/byteorder/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("crypto/internal/fips140/tls13", ["tls13.EarlySecret", "tls13.HandshakeSecret", "tls13.MasterSecret", "tls13.ExporterMasterSecret"])

export class EarlySecret {
	public get secret(): $.Slice<number> {
		return this._fields.secret
	}

	public set secret(value: $.Slice<number>) {
		this._fields.secret = value
	}

	public get hash(): (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null {
		return this._fields.hash
	}

	public set hash(value: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null) {
		this._fields.hash = value
	}

	public _fields: {
		secret: $.Slice<number>
		hash: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null
	}

	constructor(init?: Partial<{secret?: $.Slice<number>, hash?: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			secret: init?.secret ?? (null! as $.Slice<number>),
			hash: init?.hash ?? (null! as (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EarlySecret {
		return new EarlySecret(this, true)
	}

	public __goscriptAssign(source: EarlySecret): void {
		const target = this._fields
		const values = source._fields
		target.secret = values.secret
		target.hash = values.hash
	}

	public async ClientEarlyTrafficSecret(transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
		const s: EarlySecret | $.VarRef<EarlySecret> | null = this;
		const s$: EarlySecret = s == null ? $.pointerTarget<EarlySecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<EarlySecret>(s)
		return deriveSecret(__goscriptStatic0(), (s$ as EarlySecret).hash, (s$ as EarlySecret).secret, "c e traffic", transcript)
	}

	public async EarlyExporterMasterSecret(transcript: hash2.Hash | null): globalThis.Promise<ExporterMasterSecret | $.VarRef<ExporterMasterSecret> | null> {
		const s: EarlySecret | $.VarRef<EarlySecret> | null = this;
		const s$: EarlySecret = s == null ? $.pointerTarget<EarlySecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<EarlySecret>(s)
		return (await (async () => { const __goscriptLiteralField0 = await deriveSecret(__goscriptStatic0(), (s$ as EarlySecret).hash, (s$ as EarlySecret).secret, "e exp master", transcript); return new ExporterMasterSecret({secret: __goscriptLiteralField0, hash: (s$ as EarlySecret).hash}) })())
	}

	public async HandshakeSecret(sharedSecret: $.Slice<number>): globalThis.Promise<HandshakeSecret | $.VarRef<HandshakeSecret> | null> {
		const s: EarlySecret | $.VarRef<EarlySecret> | null = this;
		const s$: EarlySecret = s == null ? $.pointerTarget<EarlySecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<EarlySecret>(s)
		let derived: $.Slice<number> = await deriveSecret(__goscriptStatic0(), (s$ as EarlySecret).hash, (s$ as EarlySecret).secret, "derived", null)
		return (await (async () => { const __goscriptLiteralField1 = await extract(__goscriptStatic0(), (s$ as EarlySecret).hash, sharedSecret, derived); return new HandshakeSecret({secret: __goscriptLiteralField1, hash: (s$ as EarlySecret).hash}) })())
	}

	public async ResumptionBinderKey(): globalThis.Promise<$.Slice<number>> {
		const s: EarlySecret | $.VarRef<EarlySecret> | null = this;
		const s$: EarlySecret = s == null ? $.pointerTarget<EarlySecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<EarlySecret>(s)
		return deriveSecret(__goscriptStatic0(), (s$ as EarlySecret).hash, (s$ as EarlySecret).secret, "res binder", null)
	}

	static __typeInfo = $.registerStructType(
		"tls13.EarlySecret",
		() => new EarlySecret(),
		() => [$.methodSignature("ClientEarlyTrafficSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("EarlyExporterMasterSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.pointerType("tls13.ExporterMasterSecret")], true), $.methodSignature("HandshakeSecret", [["sharedSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("tls13.HandshakeSecret")], true), $.methodSignature("ResumptionBinderKey", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		EarlySecret,
		() => [/* @__PURE__ */ $.structField("secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/internal/fips140/tls13" }), /* @__PURE__ */ $.structField("hash", ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "crypto/internal/fips140/tls13" })]
	)
}

export class HandshakeSecret {
	public get secret(): $.Slice<number> {
		return this._fields.secret
	}

	public set secret(value: $.Slice<number>) {
		this._fields.secret = value
	}

	public get hash(): (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null {
		return this._fields.hash
	}

	public set hash(value: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null) {
		this._fields.hash = value
	}

	public _fields: {
		secret: $.Slice<number>
		hash: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null
	}

	constructor(init?: Partial<{secret?: $.Slice<number>, hash?: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			secret: init?.secret ?? (null! as $.Slice<number>),
			hash: init?.hash ?? (null! as (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HandshakeSecret {
		return new HandshakeSecret(this, true)
	}

	public __goscriptAssign(source: HandshakeSecret): void {
		const target = this._fields
		const values = source._fields
		target.secret = values.secret
		target.hash = values.hash
	}

	public async ClientHandshakeTrafficSecret(transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
		const s: HandshakeSecret | $.VarRef<HandshakeSecret> | null = this;
		const s$: HandshakeSecret = s == null ? $.pointerTarget<HandshakeSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<HandshakeSecret>(s)
		return deriveSecret(__goscriptStatic0(), (s$ as HandshakeSecret).hash, (s$ as HandshakeSecret).secret, "c hs traffic", transcript)
	}

	public async MasterSecret(): globalThis.Promise<MasterSecret | $.VarRef<MasterSecret> | null> {
		const s: HandshakeSecret | $.VarRef<HandshakeSecret> | null = this;
		const s$: HandshakeSecret = s == null ? $.pointerTarget<HandshakeSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<HandshakeSecret>(s)
		let derived: $.Slice<number> = await deriveSecret(__goscriptStatic0(), (s$ as HandshakeSecret).hash, (s$ as HandshakeSecret).secret, "derived", null)
		return (await (async () => { const __goscriptLiteralField3 = await extract(__goscriptStatic0(), (s$ as HandshakeSecret).hash, null, derived); return new MasterSecret({secret: __goscriptLiteralField3, hash: (s$ as HandshakeSecret).hash}) })())
	}

	public async ServerHandshakeTrafficSecret(transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
		const s: HandshakeSecret | $.VarRef<HandshakeSecret> | null = this;
		const s$: HandshakeSecret = s == null ? $.pointerTarget<HandshakeSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<HandshakeSecret>(s)
		return deriveSecret(__goscriptStatic0(), (s$ as HandshakeSecret).hash, (s$ as HandshakeSecret).secret, "s hs traffic", transcript)
	}

	static __typeInfo = $.registerStructType(
		"tls13.HandshakeSecret",
		() => new HandshakeSecret(),
		() => [$.methodSignature("ClientHandshakeTrafficSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("MasterSecret", [], [/* @__PURE__ */ $.pointerType("tls13.MasterSecret")], true), $.methodSignature("ServerHandshakeTrafficSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		HandshakeSecret,
		() => [/* @__PURE__ */ $.structField("secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/internal/fips140/tls13" }), /* @__PURE__ */ $.structField("hash", ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "crypto/internal/fips140/tls13" })]
	)
}

export class MasterSecret {
	public get secret(): $.Slice<number> {
		return this._fields.secret
	}

	public set secret(value: $.Slice<number>) {
		this._fields.secret = value
	}

	public get hash(): (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null {
		return this._fields.hash
	}

	public set hash(value: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null) {
		this._fields.hash = value
	}

	public _fields: {
		secret: $.Slice<number>
		hash: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null
	}

	constructor(init?: Partial<{secret?: $.Slice<number>, hash?: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			secret: init?.secret ?? (null! as $.Slice<number>),
			hash: init?.hash ?? (null! as (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MasterSecret {
		return new MasterSecret(this, true)
	}

	public __goscriptAssign(source: MasterSecret): void {
		const target = this._fields
		const values = source._fields
		target.secret = values.secret
		target.hash = values.hash
	}

	public async ClientApplicationTrafficSecret(transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
		const s: MasterSecret | $.VarRef<MasterSecret> | null = this;
		const s$: MasterSecret = s == null ? $.pointerTarget<MasterSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<MasterSecret>(s)
		return deriveSecret(__goscriptStatic0(), (s$ as MasterSecret).hash, (s$ as MasterSecret).secret, "c ap traffic", transcript)
	}

	public async ExporterMasterSecret(transcript: hash2.Hash | null): globalThis.Promise<ExporterMasterSecret | $.VarRef<ExporterMasterSecret> | null> {
		const s: MasterSecret | $.VarRef<MasterSecret> | null = this;
		const s$: MasterSecret = s == null ? $.pointerTarget<MasterSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<MasterSecret>(s)
		return (await (async () => { const __goscriptLiteralField4 = await deriveSecret(__goscriptStatic0(), (s$ as MasterSecret).hash, (s$ as MasterSecret).secret, "exp master", transcript); return new ExporterMasterSecret({secret: __goscriptLiteralField4, hash: (s$ as MasterSecret).hash}) })())
	}

	public async ResumptionMasterSecret(transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
		const s: MasterSecret | $.VarRef<MasterSecret> | null = this;
		const s$: MasterSecret = s == null ? $.pointerTarget<MasterSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<MasterSecret>(s)
		return deriveSecret(__goscriptStatic0(), (s$ as MasterSecret).hash, (s$ as MasterSecret).secret, "res master", transcript)
	}

	public async ServerApplicationTrafficSecret(transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
		const s: MasterSecret | $.VarRef<MasterSecret> | null = this;
		const s$: MasterSecret = s == null ? $.pointerTarget<MasterSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<MasterSecret>(s)
		return deriveSecret(__goscriptStatic0(), (s$ as MasterSecret).hash, (s$ as MasterSecret).secret, "s ap traffic", transcript)
	}

	static __typeInfo = $.registerStructType(
		"tls13.MasterSecret",
		() => new MasterSecret(),
		() => [$.methodSignature("ClientApplicationTrafficSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ExporterMasterSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.pointerType("tls13.ExporterMasterSecret")], true), $.methodSignature("ResumptionMasterSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ServerApplicationTrafficSecret", [["transcript", "hash.Hash"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		MasterSecret,
		() => [/* @__PURE__ */ $.structField("secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/internal/fips140/tls13" }), /* @__PURE__ */ $.structField("hash", ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "crypto/internal/fips140/tls13" })]
	)
}

export class ExporterMasterSecret {
	public get secret(): $.Slice<number> {
		return this._fields.secret
	}

	public set secret(value: $.Slice<number>) {
		this._fields.secret = value
	}

	public get hash(): (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null {
		return this._fields.hash
	}

	public set hash(value: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null) {
		this._fields.hash = value
	}

	public _fields: {
		secret: $.Slice<number>
		hash: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null
	}

	constructor(init?: Partial<{secret?: $.Slice<number>, hash?: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			secret: init?.secret ?? (null! as $.Slice<number>),
			hash: init?.hash ?? (null! as (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExporterMasterSecret {
		return new ExporterMasterSecret(this, true)
	}

	public __goscriptAssign(source: ExporterMasterSecret): void {
		const target = this._fields
		const values = source._fields
		target.secret = values.secret
		target.hash = values.hash
	}

	public async Exporter(label: string, context: $.Slice<number>, length: number): globalThis.Promise<$.Slice<number>> {
		const s: ExporterMasterSecret | $.VarRef<ExporterMasterSecret> | null = this;
		const s$: ExporterMasterSecret = s == null ? $.pointerTarget<ExporterMasterSecret>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<ExporterMasterSecret>(s)
		let secret: $.Slice<number> = await deriveSecret(__goscriptStatic0(), (s$ as ExporterMasterSecret).hash, (s$ as ExporterMasterSecret).secret, label, null)
		let h = (__goscriptAwait = (s$ as ExporterMasterSecret).hash!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(context)
		return ExpandLabel(__goscriptStatic0(), (s$ as ExporterMasterSecret).hash, secret, "exporter", await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Sum(null), length)
	}

	static __typeInfo = $.registerStructType(
		"tls13.ExporterMasterSecret",
		() => new ExporterMasterSecret(),
		() => [$.methodSignature("Exporter", [["label", /* @__PURE__ */ $.basicType("string")], ["context", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		ExporterMasterSecret,
		() => [/* @__PURE__ */ $.structField("secret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/internal/fips140/tls13" }), /* @__PURE__ */ $.structField("hash", ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "crypto/internal/fips140/tls13" })]
	)
}

export const resumptionBinderLabel: string = "res binder"

export const clientEarlyTrafficLabel: string = "c e traffic"

export const clientHandshakeTrafficLabel: string = "c hs traffic"

export const serverHandshakeTrafficLabel: string = "s hs traffic"

export const clientApplicationTrafficLabel: string = "c ap traffic"

export const serverApplicationTrafficLabel: string = "s ap traffic"

export const earlyExporterLabel: string = "e exp master"

export const exporterLabel: string = "exp master"

export const resumptionLabel: string = "res master"

export async function ExpandLabel(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, secret: $.Slice<number>, label: string, context: $.Slice<number>, length: number): globalThis.Promise<$.Slice<number>> {
	if (((6 + $.stringLen(label)) > 255) || ($.sliceLen(context) > 255)) {
		// It should be impossible for this to panic: labels are fixed strings,
		// and context is either a fixed-length computed hash, or parsed from a
		// field which has the same length limitation.
		//
		// Another reasonable approach might be to return a randomized slice if
		// we encounter an error, which would break the connection, but avoid
		// panicking. This would perhaps be safer but significantly more
		// confusing to users.
		$.panic("tls13: label or context too long")
	}
	let hkdfLabel: $.Slice<number> = $.makeSlice<number>(0, ((((2 + 1) + 6) + $.stringLen(label)) + 1) + $.sliceLen(context), "byte")
	hkdfLabel = byteorder.BEAppendUint16(hkdfLabel, $.uint(length, 16))
	hkdfLabel = $.append(hkdfLabel, $.uint($.uint(6 + $.stringLen(label), 8), 8), $.byteSliceHint)
	hkdfLabel = $.appendSlice(hkdfLabel, $.stringToBytes("tls13 "), $.byteSliceHint)
	hkdfLabel = $.appendSlice(hkdfLabel, $.stringToBytes(label), $.byteSliceHint)
	hkdfLabel = $.append(hkdfLabel, $.uint($.uint($.sliceLen(context), 8), 8), $.byteSliceHint)
	hkdfLabel = $.appendSlice(hkdfLabel, context, $.byteSliceHint)
	return hkdf.Expand({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, secret, $.bytesToString(hkdfLabel), length)
}

export async function extract(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, newSecret: $.Slice<number>, currentSecret: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if (newSecret == null) {
		newSecret = $.makeSlice<number>((__goscriptAwait = $.callGenericMethod(__typeArgs, "H", "Size", (__goscriptAwait = hash!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, "byte")
	}
	return hkdf.Extract({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, newSecret, currentSecret)
}

export async function deriveSecret(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, secret: $.Slice<number>, label: string, transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
	if (transcript == null) {
		transcript = $.typeParamInterfaceValue<hash2.Hash | null>((__goscriptAwait = hash!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null })
	}
	return ExpandLabel({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, secret, label, await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(transcript)).Sum(null), (__goscriptAwait = (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(transcript)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function NewEarlySecret(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, psk: $.Slice<number>): globalThis.Promise<EarlySecret | $.VarRef<EarlySecret> | null> {
	return (await (async () => { const __goscriptLiteralField2 = await extract({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h, psk, null); return new EarlySecret({secret: __goscriptLiteralField2, hash: $.functionValue(async (): globalThis.Promise<hash2.Hash | null> => {
		return $.typeParamInterfaceValue<hash2.Hash | null>((__goscriptAwait = h!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null })
	}, ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo))}) })())
}

export function TestingOnlyExporterSecret(s: ExporterMasterSecret | $.VarRef<ExporterMasterSecret> | null): $.Slice<number> {
	return $.pointerValue<ExporterMasterSecret>(s).secret
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
