// Generated file based on builder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding_asn1 from "@goscript/encoding/asn1/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as big from "@goscript/math/big/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as asn1 from "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_asn1 from "./asn1.gs.ts"
import "@goscript/encoding/asn1/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/big/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"
import "@goscript/errors/index.js"
import "./asn1.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/cryptobyte", ["cryptobyte.Builder", "cryptobyte.BuilderContinuation", "cryptobyte.BuildError", "cryptobyte.MarshalingValue"])

export type BuilderContinuation = ((child: Builder | $.VarRef<Builder> | null) => void) | null

export type MarshalingValue = {
	Marshal(b: Builder | $.VarRef<Builder> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"cryptobyte.MarshalingValue",
	null,
	[$.methodSignature("Marshal", [["b", /* @__PURE__ */ $.pointerType("cryptobyte.Builder")]], ["error"])]
);

export class Builder {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get result(): $.Slice<number> {
		return this._fields.result
	}

	public set result(value: $.Slice<number>) {
		this._fields.result = value
	}

	public get fixedSize(): boolean {
		return this._fields.fixedSize
	}

	public set fixedSize(value: boolean) {
		this._fields.fixedSize = value
	}

	public get child(): Builder | $.VarRef<Builder> | null {
		return this._fields.child
	}

	public set child(value: Builder | $.VarRef<Builder> | null) {
		this._fields.child = value
	}

	public get offset(): number {
		return this._fields.offset
	}

	public set offset(value: number) {
		this._fields.offset = value
	}

	public get pendingLenLen(): number {
		return this._fields.pendingLenLen
	}

	public set pendingLenLen(value: number) {
		this._fields.pendingLenLen = value
	}

	public get pendingIsASN1(): boolean {
		return this._fields.pendingIsASN1
	}

	public set pendingIsASN1(value: boolean) {
		this._fields.pendingIsASN1 = value
	}

	public get inContinuation(): $.VarRef<boolean> | null {
		return this._fields.inContinuation
	}

	public set inContinuation(value: $.VarRef<boolean> | null) {
		this._fields.inContinuation = value
	}

	public _fields: {
		err: $.GoError
		result: $.Slice<number>
		fixedSize: boolean
		child: Builder | $.VarRef<Builder> | null
		offset: number
		pendingLenLen: number
		pendingIsASN1: boolean
		inContinuation: $.VarRef<boolean> | null
	}

	constructor(init?: Partial<{err?: $.GoError, result?: $.Slice<number>, fixedSize?: boolean, child?: Builder | $.VarRef<Builder> | null, offset?: number, pendingLenLen?: number, pendingIsASN1?: boolean, inContinuation?: $.VarRef<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			result: init?.result ?? (null! as $.Slice<number>),
			fixedSize: init?.fixedSize ?? (false as boolean),
			child: init?.child ?? (null! as Builder | $.VarRef<Builder> | null),
			offset: init?.offset ?? (0 as number),
			pendingLenLen: init?.pendingLenLen ?? (0 as number),
			pendingIsASN1: init?.pendingIsASN1 ?? (false as boolean),
			inContinuation: init?.inContinuation ?? (null! as $.VarRef<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Builder {
		return new Builder(this, true)
	}

	public __goscriptAssign(source: Builder): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.result = values.result
		target.fixedSize = values.fixedSize
		target.child = values.child
		target.offset = values.offset
		target.pendingLenLen = values.pendingLenLen
		target.pendingIsASN1 = values.pendingIsASN1
		target.inContinuation = values.inContinuation
	}

	public async AddASN1(tag: asn1.Tag, f: ((child: Builder | $.VarRef<Builder> | null) => void) | null): globalThis.Promise<void> {
		let b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).err != null) {
			return
		}

		if ($.uint((tag & 0x1f), 8) == 0x1f) {
			;(b$ as Builder).err = fmt.Errorf("cryptobyte: high-tag number identifier octets not supported: 0x%x", $.namedValueInterfaceValue<any>(tag, "asn1.Tag", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			return
		}
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).AddUint8($.uint(tag, 8)) : Builder.prototype.AddUint8.call(b, $.uint(tag, 8)))
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addLengthPrefixed(1, true, f) : Builder.prototype.addLengthPrefixed.call(b, 1, true, f))
	}

	public async AddASN1BigInt(n: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		if ($.pointerValue<Builder>(b).err != null) {
			return
		}

		await Builder.prototype.AddASN1.call(b, 2, $.functionValue((c: Builder | $.VarRef<Builder> | null): void => {
			if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Sign() : big.Int.prototype.Sign.call(n)) < 0) {

				// AddUint8 appends an 8-bit value to the byte string.
				let nMinus1: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Neg.call(new big.Int(), n)
				void (nMinus1 !== null && (nMinus1 as any).__isVarRef !== true && (nMinus1 as any).__goValue === undefined ? ((nMinus1 as any) as big.Int).Sub(nMinus1, __goscript_asn1.bigOne) : big.Int.prototype.Sub.call(nMinus1, nMinus1, __goscript_asn1.bigOne))
				let bytes: $.Slice<number> = (nMinus1 !== null && (nMinus1 as any).__isVarRef !== true && (nMinus1 as any).__goValue === undefined ? ((nMinus1 as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(nMinus1))
				for (let __goscriptRangeTarget0 = bytes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
					$.sliceElems(bytes!)[$.sliceSlot(bytes!, i)] = $.sliceElems(bytes!)[$.sliceSlot(bytes!, i)] ^ (0xff)
				}
				if (($.sliceLen(bytes) == 0) || ($.uint(($.arrayIndex(bytes!, 0) & 0x80), 8) == 0)) {
					void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).add($.arrayToSlice<number>([0xff])) : Builder.prototype.add.call(c, $.arrayToSlice<number>([0xff])))
				}
				void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).add(bytes) : Builder.prototype.add.call(c, bytes))
			} else {
				if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Sign() : big.Int.prototype.Sign.call(n)) == 0) {
					void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).add($.arrayToSlice<number>([0])) : Builder.prototype.add.call(c, $.arrayToSlice<number>([0])))
				} else {
					let bytes: $.Slice<number> = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(n))
					if ($.uint(($.arrayIndex(bytes!, 0) & 0x80), 8) != 0) {
						void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).add($.arrayToSlice<number>([0])) : Builder.prototype.add.call(c, $.arrayToSlice<number>([0])))
					}
					void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).add(bytes) : Builder.prototype.add.call(c, bytes))
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public async AddASN1BitString(data: $.Slice<number>): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await Builder.prototype.AddASN1.call(b, 3, $.functionValue((b: Builder | $.VarRef<Builder> | null): void => {
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).AddUint8(0) : Builder.prototype.AddUint8.call(b, 0))
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).AddBytes(data) : Builder.prototype.AddBytes.call(b, data))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public async AddASN1Boolean(v: boolean): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await Builder.prototype.AddASN1.call(b, 1, $.functionValue((b: Builder | $.VarRef<Builder> | null): void => {
			if (v) {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).AddUint8(0xff) : Builder.prototype.AddUint8.call(b, 0xff))
			} else {
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).AddUint8(0) : Builder.prototype.AddUint8.call(b, 0))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public async AddASN1Enum(v: bigint): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addASN1Signed(10, v) : Builder.prototype.addASN1Signed.call(b, 10, v))
	}

	public async AddASN1GeneralizedTime(t: time.Time): globalThis.Promise<void> {
		let b: Builder | $.VarRef<Builder> | null = this;
		if (($.markAsStructValue($.cloneStructValue(t)).Year() < 0) || ($.markAsStructValue($.cloneStructValue(t)).Year() > 9999)) {
			$.pointerValue<Builder>(b).err = fmt.Errorf("cryptobyte: cannot represent %v as a GeneralizedTime", $.interfaceValue($.markAsStructValue($.cloneStructValue(t)), "time.Time", "time.Time"))
			return
		}
		await Builder.prototype.AddASN1.call(b, 24, $.functionValue((c: Builder | $.VarRef<Builder> | null): void => {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).AddBytes($.stringToBytes($.markAsStructValue($.cloneStructValue(t)).Format("20060102150405Z0700"))) : Builder.prototype.AddBytes.call(c, $.stringToBytes($.markAsStructValue($.cloneStructValue(t)).Format("20060102150405Z0700"))))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public async AddASN1Int64(v: bigint): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addASN1Signed(2, v) : Builder.prototype.addASN1Signed.call(b, 2, v))
	}

	public async AddASN1Int64WithTag(v: bigint, tag: asn1.Tag): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addASN1Signed(tag, v) : Builder.prototype.addASN1Signed.call(b, tag, v))
	}

	public AddASN1NULL(): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).add($.arrayToSlice<number>([5, 0])) : Builder.prototype.add.call(b, $.arrayToSlice<number>([5, 0])))
	}

	public async AddASN1ObjectIdentifier(oid: encoding_asn1.ObjectIdentifier): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await Builder.prototype.AddASN1.call(b, 6, $.functionValue((b: Builder | $.VarRef<Builder> | null): void => {
			if (!__goscript_asn1.isValidOID((oid as encoding_asn1.ObjectIdentifier))) {
				$.pointerValue<Builder>(b).err = fmt.Errorf("cryptobyte: invalid OID: %v", $.namedValueInterfaceValue<any>(oid, "asn1.ObjectIdentifier", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
				return
			}

			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addBase128Int($.int64Add(($.int64Mul($.int64($.arrayIndex(oid!, 0)), 40n)), $.int64($.arrayIndex(oid!, 1)))) : Builder.prototype.addBase128Int.call(b, $.int64Add(($.int64Mul($.int64($.arrayIndex(oid!, 0)), 40n)), $.int64($.arrayIndex(oid!, 1)))))
			for (let __goscriptRangeTarget1 = $.goSlice(oid, 2, undefined), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number)
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addBase128Int($.int64(v)) : Builder.prototype.addBase128Int.call(b, $.int64(v)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public async AddASN1OctetString(bytes: $.Slice<number>): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await Builder.prototype.AddASN1.call(b, 4, $.functionValue((c: Builder | $.VarRef<Builder> | null): void => {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).AddBytes(bytes) : Builder.prototype.AddBytes.call(c, bytes))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public async AddASN1UTCTime(t: time.Time): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await Builder.prototype.AddASN1.call(b, 23, $.functionValue((c: Builder | $.VarRef<Builder> | null): void => {

			if (($.markAsStructValue($.cloneStructValue(t)).Year() < 1950) || ($.markAsStructValue($.cloneStructValue(t)).Year() >= 2050)) {
				$.pointerValue<Builder>(b).err = fmt.Errorf("cryptobyte: cannot represent %v as a UTCTime", $.interfaceValue($.markAsStructValue($.cloneStructValue(t)), "time.Time", "time.Time"))
				return
			}
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).AddBytes($.stringToBytes($.markAsStructValue($.cloneStructValue(t)).Format("060102150405Z0700"))) : Builder.prototype.AddBytes.call(c, $.stringToBytes($.markAsStructValue($.cloneStructValue(t)).Format("060102150405Z0700"))))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public async AddASN1Uint64(v: bigint): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await Builder.prototype.AddASN1.call(b, 2, $.functionValue((c: Builder | $.VarRef<Builder> | null): void => {
			let length = 1
			for (let i = v; i >= 128n; i = $.uint64Shr(i, 8n)) {
				length++
			}

			for (; length > 0; length--) {
				let i = $.uint64And(($.uint64Shr(v, $.uint((length - 1) * 8, 64))), 255n)
				void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).AddUint8($.uint(i, 8)) : Builder.prototype.AddUint8.call(c, $.uint(i, 8)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public AddBytes(v: $.Slice<number>): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).add(v) : Builder.prototype.add.call(b, v))
	}

	public AddUint16(v: number): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).add($.arrayToSlice<number>([$.uint($.uintShr(v, 8, 16), 8), $.uint(v, 8)])) : Builder.prototype.add.call(b, $.arrayToSlice<number>([$.uint($.uintShr(v, 8, 16), 8), $.uint(v, 8)])))
	}

	public async AddUint16LengthPrefixed(f: ((child: Builder | $.VarRef<Builder> | null) => void) | null): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addLengthPrefixed(2, false, f) : Builder.prototype.addLengthPrefixed.call(b, 2, false, f))
	}

	public AddUint24(v: number): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).add($.arrayToSlice<number>([$.uint($.uintShr(v, 16, 32), 8), $.uint($.uintShr(v, 8, 32), 8), $.uint(v, 8)])) : Builder.prototype.add.call(b, $.arrayToSlice<number>([$.uint($.uintShr(v, 16, 32), 8), $.uint($.uintShr(v, 8, 32), 8), $.uint(v, 8)])))
	}

	public async AddUint24LengthPrefixed(f: ((child: Builder | $.VarRef<Builder> | null) => void) | null): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addLengthPrefixed(3, false, f) : Builder.prototype.addLengthPrefixed.call(b, 3, false, f))
	}

	public AddUint32(v: number): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		Builder.prototype.add.call(b, $.arrayToSlice<number>([$.uint($.uintShr(v, 24, 32), 8), $.uint($.uintShr(v, 16, 32), 8), $.uint($.uintShr(v, 8, 32), 8), $.uint(v, 8)]))
	}

	public async AddUint32LengthPrefixed(f: ((child: Builder | $.VarRef<Builder> | null) => void) | null): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addLengthPrefixed(4, false, f) : Builder.prototype.addLengthPrefixed.call(b, 4, false, f))
	}

	public AddUint48(v: bigint): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		Builder.prototype.add.call(b, $.arrayToSlice<number>([$.uint($.uint64Shr(v, 40n), 8), $.uint($.uint64Shr(v, 32n), 8), $.uint($.uint64Shr(v, 24n), 8), $.uint($.uint64Shr(v, 16n), 8), $.uint($.uint64Shr(v, 8n), 8), $.uint(v, 8)]))
	}

	public AddUint64(v: bigint): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		Builder.prototype.add.call(b, $.arrayToSlice<number>([$.uint($.uint64Shr(v, 56n), 8), $.uint($.uint64Shr(v, 48n), 8), $.uint($.uint64Shr(v, 40n), 8), $.uint($.uint64Shr(v, 32n), 8), $.uint($.uint64Shr(v, 24n), 8), $.uint($.uint64Shr(v, 16n), 8), $.uint($.uint64Shr(v, 8n), 8), $.uint(v, 8)]))
	}

	public AddUint8(v: number): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).add($.arrayToSlice<number>([$.uint(v, 8)])) : Builder.prototype.add.call(b, $.arrayToSlice<number>([$.uint(v, 8)])))
	}

	public async AddUint8LengthPrefixed(f: ((child: Builder | $.VarRef<Builder> | null) => void) | null): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).addLengthPrefixed(1, false, f) : Builder.prototype.addLengthPrefixed.call(b, 1, false, f))
	}

	public async AddValue(v: MarshalingValue | null): globalThis.Promise<void> {
		let b: Builder | $.VarRef<Builder> | null = this;
		let err = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<MarshalingValue, null>) : $.pointerValue<Exclude<MarshalingValue, null>>(v)).Marshal(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			$.pointerValue<Builder>(b).err = err
		}
	}

	public Bytes(): [$.Slice<number>, $.GoError] {
		const b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).err != null) {
			return [null, (b$ as Builder).err]
		}
		return [$.goSlice((b$ as Builder).result, (b$ as Builder).offset, undefined), null]
	}

	public BytesOrPanic(): $.Slice<number> {
		const b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).err != null) {
			$.panic(((b$ as Builder).err as any))
		}
		return $.goSlice((b$ as Builder).result, (b$ as Builder).offset, undefined)
	}

	public async MarshalASN1(v: any): globalThis.Promise<void> {
		let b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)

		if ((b$ as Builder).err != null) {
			return
		}
		let __goscriptTuple0: any = await encoding_asn1.Marshal(v)
		let bytes: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			;(b$ as Builder).err = err
			return
		}
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).AddBytes(bytes) : Builder.prototype.AddBytes.call(b, bytes))
	}

	public SetError(err: $.GoError): void {
		let b: Builder | $.VarRef<Builder> | null = this;
		$.pointerValue<Builder>(b).err = err
	}

	public Unwrite(n: number): void {
		let b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).err != null) {
			return
		}
		if ((b$ as Builder).child != null) {
			$.panic("cryptobyte: attempted unwrite while child is pending")
		}
		let length = ($.sliceLen((b$ as Builder).result) - (b$ as Builder).pendingLenLen) - (b$ as Builder).offset
		if (length < 0) {
			$.panic("cryptobyte: internal error")
		}
		if (n < 0) {
			$.panic("cryptobyte: attempted to unwrite negative number of bytes")
		}
		if (n > length) {
			$.panic("cryptobyte: attempted to unwrite more than was written")
		}
		;(b$ as Builder).result = $.goSlice((b$ as Builder).result, undefined, $.sliceLen((b$ as Builder).result) - n)
	}

	public add(bytes: $.Slice<number>): void {
		let b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).err != null) {
			return
		}
		if ((b$ as Builder).child != null) {
			$.panic("cryptobyte: attempted write while child is pending")
		}
		if (($.sliceLen((b$ as Builder).result) + $.sliceLen(bytes)) < $.sliceLen(bytes)) {
			;(b$ as Builder).err = errors.New("cryptobyte: length overflow")
		}
		if ((b$ as Builder).fixedSize && (($.sliceLen((b$ as Builder).result) + $.sliceLen(bytes)) > $.cap((b$ as Builder).result))) {
			;(b$ as Builder).err = errors.New("cryptobyte: Builder is exceeding its fixed-size buffer")
			return
		}
		;(b$ as Builder).result = $.appendSlice((b$ as Builder).result, bytes, $.byteSliceHint)
	}

	public async addASN1Signed(tag: asn1.Tag, v: bigint): globalThis.Promise<void> {
		const b: Builder | $.VarRef<Builder> | null = this;
		await Builder.prototype.AddASN1.call(b, tag, $.functionValue((c: Builder | $.VarRef<Builder> | null): void => {
			let length = 1
			for (let i = v; (i >= 128n) || (i < -128n); i = $.int64Shr(i, 8n)) {
				length++
			}

			for (; length > 0; length--) {
				let i = $.int64And(($.int64Shr(v, $.uint((length - 1) * 8, 64))), 255n)
				void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Builder).AddUint8($.uint(i, 8)) : Builder.prototype.AddUint8.call(c, $.uint(i, 8)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	}

	public addBase128Int(n: bigint): void {
		const b: Builder | $.VarRef<Builder> | null = this;
		let length: number = 0
		if (n == 0n) {
			length = 1
		} else {
			for (let i = n; i > 0n; i = $.int64Shr(i, 7n)) {
				length++
			}
		}

		for (let i = length - 1; i >= 0; i--) {
			let o = $.uint($.int64Shr(n, $.uint(i * 7, 64)), 8)
			o = o & (0x7f)
			if (i != 0) {
				o = o | (0x80)
			}

			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).add($.arrayToSlice<number>([o])) : Builder.prototype.add.call(b, $.arrayToSlice<number>([o])))
		}
	}

	public async addLengthPrefixed(lenLen: number, isASN1: boolean, f: ((child: Builder | $.VarRef<Builder> | null) => void) | null): globalThis.Promise<void> {
		let b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		// Subsequent writes can be ignored if the builder has encountered an error.
		if ((b$ as Builder).err != null) {
			return
		}

		let offset = $.sliceLen((b$ as Builder).result)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).add($.makeSlice<number>(lenLen, undefined, "byte")) : Builder.prototype.add.call(b, $.makeSlice<number>(lenLen, undefined, "byte")))

		if ((b$ as Builder).inContinuation == null) {
			;(b$ as Builder).inContinuation = $.varRef<boolean>(false)
		}

		;(b$ as Builder).child = new Builder({result: (b$ as Builder).result, fixedSize: (b$ as Builder).fixedSize, offset: offset, pendingLenLen: lenLen, pendingIsASN1: isASN1, inContinuation: (b$ as Builder).inContinuation})

		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).callContinuation(f, (b$ as Builder).child) : Builder.prototype.callContinuation.call(b, f, (b$ as Builder).child))
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).flushChild() : Builder.prototype.flushChild.call(b))
		if ((b$ as Builder).child != null) {
			$.panic("cryptobyte: internal error")
		}
	}

	public async callContinuation(f: ((child: Builder | $.VarRef<Builder> | null) => void) | null, arg: Builder | $.VarRef<Builder> | null): globalThis.Promise<void> {
		let b: Builder | $.VarRef<Builder> | null = this;
		const __defer = new $.DisposableStack()
		try {
			const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
			if (!$.pointerValue<boolean>((b$ as Builder).inContinuation)) {
				;(b$ as Builder).inContinuation!.value = true

				__defer.defer(() => { ((): void => {
					;(b$ as Builder).inContinuation!.value = false

					let r = $.recover()
					if (r == null) {
						return
					}

					{
						let [buildError, ok] = $.typeAssertTuple<BuildError>(r, "cryptobyte.BuildError")
						if (ok) {
							;(b$ as Builder).err = buildError.Err
						} else {
							$.panic(r)
						}
					}
				})() })
			}

			void (__goscriptAwait = f!(arg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public flushChild(): void {
		let b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).child == null) {
			return
		}
		Builder.prototype.flushChild.call((b$ as Builder).child)
		let child: Builder | $.VarRef<Builder> | null = (b$ as Builder).child
		let child$: Builder = child == null ? $.pointerTarget<Builder>(child) : (child as any).__isVarRef === true ? (child as any).value : (child as any).__goValue === undefined ? (child as any) : $.pointerTarget<Builder>(child);
		;(b$ as Builder).child = null

		if ((child$ as Builder).err != null) {
			;(b$ as Builder).err = (child$ as Builder).err
			return
		}

		let length = ($.sliceLen((child$ as Builder).result) - (child$ as Builder).pendingLenLen) - (child$ as Builder).offset

		if (length < 0) {
			$.panic("cryptobyte: internal error")
		}

		if ((child$ as Builder).pendingIsASN1) {
			// For ASN.1, we reserved a single byte for the length. If that turned out
			// to be incorrect, we have to move the contents along in order to make
			// space.
			if ((child$ as Builder).pendingLenLen != 1) {
				$.panic("cryptobyte: internal error")
			}
			let lenLen: number = 0
			let lenByte: number = 0
			if ($.int64(length) > 4294967294n) {
				;(b$ as Builder).err = errors.New("pending ASN.1 child too long")
				return
			} else {
				if (length > 0xffffff) {
					lenLen = 5
					lenByte = 132
				} else {
					if (length > 0xffff) {
						lenLen = 4
						lenByte = 131
					} else {
						if (length > 0xff) {
							lenLen = 3
							lenByte = 130
						} else {
							if (length > 0x7f) {
								lenLen = 2
								lenByte = 129
							} else {
								lenLen = 1
								lenByte = $.uint(length, 8)
								length = 0
							}
						}
					}
				}
			}

			// Insert the initial length byte, make space for successive length bytes,
			// and adjust the offset.
			$.sliceElems((child$ as Builder).result!)[$.sliceSlot((child$ as Builder).result!, (child$ as Builder).offset)] = lenByte
			let extraBytes = $.int($.uint(((lenLen - 1) & 0xff), 8))
			if (extraBytes != 0) {
				void (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? ((child as any) as Builder).add($.makeSlice<number>(extraBytes, undefined, "byte")) : Builder.prototype.add.call(child, $.makeSlice<number>(extraBytes, undefined, "byte")))
				let childStart = (child$ as Builder).offset + (child$ as Builder).pendingLenLen
				$.copy($.goSlice((child$ as Builder).result, childStart + extraBytes, undefined), $.goSlice((child$ as Builder).result, childStart, undefined))
			}
			;(child$ as Builder).offset++;
			;(child$ as Builder).pendingLenLen = extraBytes
		}

		let l = length
		for (let i = (child$ as Builder).pendingLenLen - 1; i >= 0; i--) {
			$.sliceElems((child$ as Builder).result!)[$.sliceSlot((child$ as Builder).result!, (child$ as Builder).offset + i)] = $.uint(l, 8)
			l = l >> (8)
		}
		if (l != 0) {
			;(b$ as Builder).err = fmt.Errorf("cryptobyte: pending child length %d exceeds %d-byte length prefix", $.basicInterfaceValue(length, "int"), $.basicInterfaceValue((child$ as Builder).pendingLenLen, "int"))
			return
		}

		if ((b$ as Builder).fixedSize && ($.indexAddress((b$ as Builder).result!, 0) != $.indexAddress((child$ as Builder).result!, 0))) {
			$.panic("cryptobyte: BuilderContinuation reallocated a fixed-size buffer")
		}

		;(b$ as Builder).result = (child$ as Builder).result
	}

	static __typeInfo = $.registerStructType(
		"cryptobyte.Builder",
		() => new Builder(),
		() => [$.methodSignature("AddASN1", [["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")], ["f", ({ kind: $.TypeKind.Function, name: "cryptobyte.BuilderContinuation", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("AddASN1BigInt", [["n", /* @__PURE__ */ $.pointerType("big.Int")]], [], true), $.methodSignature("AddASN1BitString", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AddASN1Boolean", [["v", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("AddASN1Enum", [["v", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AddASN1GeneralizedTime", [["t", "time.Time"]], [], true), $.methodSignature("AddASN1Int64", [["v", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AddASN1Int64WithTag", [["v", /* @__PURE__ */ $.basicType("int64")], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [], true), $.methodSignature("AddASN1NULL", [], [], true), $.methodSignature("AddASN1ObjectIdentifier", [["oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [], true), $.methodSignature("AddASN1OctetString", [["bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AddASN1UTCTime", [["t", "time.Time"]], [], true), $.methodSignature("AddASN1Uint64", [["v", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("AddBytes", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AddUint16", [["v", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("AddUint16LengthPrefixed", [["f", ({ kind: $.TypeKind.Function, name: "cryptobyte.BuilderContinuation", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("AddUint24", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("AddUint24LengthPrefixed", [["f", ({ kind: $.TypeKind.Function, name: "cryptobyte.BuilderContinuation", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("AddUint32", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("AddUint32LengthPrefixed", [["f", ({ kind: $.TypeKind.Function, name: "cryptobyte.BuilderContinuation", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("AddUint48", [["v", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("AddUint64", [["v", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("AddUint8", [["v", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("AddUint8LengthPrefixed", [["f", ({ kind: $.TypeKind.Function, name: "cryptobyte.BuilderContinuation", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("AddValue", [["v", "cryptobyte.MarshalingValue"]], [], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("BytesOrPanic", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("MarshalASN1", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("SetError", [["err", "error"]], [], true), $.methodSignature("Unwrite", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("add", [["bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("addASN1Signed", [["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")], ["v", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("addBase128Int", [["n", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("addLengthPrefixed", [["lenLen", /* @__PURE__ */ $.basicType("int")], ["isASN1", /* @__PURE__ */ $.basicType("bool")], ["f", ({ kind: $.TypeKind.Function, name: "cryptobyte.BuilderContinuation", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("callContinuation", [["f", ({ kind: $.TypeKind.Function, name: "cryptobyte.BuilderContinuation", params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)], ["arg", /* @__PURE__ */ $.pointerType("cryptobyte.Builder")]], [], true), $.methodSignature("flushChild", [], [], true)],
		Builder,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" }), /* @__PURE__ */ $.structField("result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" }), /* @__PURE__ */ $.structField("fixedSize", /* @__PURE__ */ $.basicType("bool"), [2], 40, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" }), /* @__PURE__ */ $.structField("child", /* @__PURE__ */ $.pointerType("cryptobyte.Builder"), [3], 48, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [4], 56, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" }), /* @__PURE__ */ $.structField("pendingLenLen", /* @__PURE__ */ $.basicType("int"), [5], 64, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" }), /* @__PURE__ */ $.structField("pendingIsASN1", /* @__PURE__ */ $.basicType("bool"), [6], 72, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" }), /* @__PURE__ */ $.structField("inContinuation", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [7], 80, false, { pkgPath: "vendor/golang.org/x/crypto/cryptobyte" })]
	)
}

export class BuildError {
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuildError {
		return new BuildError(this, true)
	}

	public __goscriptAssign(source: BuildError): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	static __typeInfo = $.registerStructType(
		"cryptobyte.BuildError",
		() => new BuildError(),
		() => [],
		BuildError,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export function NewBuilder(buffer: $.Slice<number>): Builder | $.VarRef<Builder> | null {
	return new Builder({result: buffer})
}

export function NewFixedBuilder(buffer: $.Slice<number>): Builder | $.VarRef<Builder> | null {
	return new Builder({result: buffer, fixedSize: true})
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Constructed: (receiver: any, ...args: any[]) => (asn1.Tag_Constructed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ContextSpecific: (receiver: any, ...args: any[]) => (asn1.Tag_ContextSpecific as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "asn1.Tag"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Constructed", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]), $.methodSignature("ContextSpecific", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Equal: (receiver: any, ...args: any[]) => (encoding_asn1.ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (encoding_asn1.ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
