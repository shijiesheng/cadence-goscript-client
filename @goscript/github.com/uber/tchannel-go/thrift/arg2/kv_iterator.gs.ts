// Generated file based on kv_iterator.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as io from "@goscript/io/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/io/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go/thrift/arg2", ["arg2.KeyValIterator"])

export class KeyValIterator {
	public get remaining(): $.Slice<number> {
		return this._fields.remaining
	}

	public set remaining(value: $.Slice<number>) {
		this._fields.remaining = value
	}

	public get leftPairCount(): number {
		return this._fields.leftPairCount
	}

	public set leftPairCount(value: number) {
		this._fields.leftPairCount = value
	}

	public get key(): $.Slice<number> {
		return this._fields.key
	}

	public set key(value: $.Slice<number>) {
		this._fields.key = value
	}

	public get val(): $.Slice<number> {
		return this._fields.val
	}

	public set val(value: $.Slice<number>) {
		this._fields.val = value
	}

	public _fields: {
		remaining: $.Slice<number>
		leftPairCount: number
		key: $.Slice<number>
		val: $.Slice<number>
	}

	constructor(init?: Partial<{remaining?: $.Slice<number>, leftPairCount?: number, key?: $.Slice<number>, val?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			remaining: init?.remaining ?? (null! as $.Slice<number>),
			leftPairCount: init?.leftPairCount ?? (0 as number),
			key: init?.key ?? (null! as $.Slice<number>),
			val: init?.val ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): KeyValIterator {
		return new KeyValIterator(this, true)
	}

	public __goscriptAssign(source: KeyValIterator): void {
		const target = this._fields
		const values = source._fields
		target.remaining = values.remaining
		target.leftPairCount = values.leftPairCount
		target.key = values.key
		target.val = values.val
	}

	public Key(): $.Slice<number> {
		const i = this;
		return i.key
	}

	public Next(): [KeyValIterator, $.GoError] {
		const i = this;
		let kv: KeyValIterator = new KeyValIterator(undefined, true)
		if (i.leftPairCount <= 0) {
			return [new KeyValIterator(undefined, true), io.EOF]
		}

		let rbuf: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null = typed.NewReadBuffer(i.remaining)
		let keyLen = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(rbuf)))
		let key: $.Slice<number> = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(keyLen) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, keyLen))
		let valLen = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(rbuf)))
		let val: $.Slice<number> = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(valLen) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, valLen))
		if ((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(rbuf)) != null) {
			return [new KeyValIterator(undefined, true), (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(rbuf))]
		}

		let leftPairCount = i.leftPairCount - 1

		kv = $.assignStruct(kv, (() => { const __goscriptLiteralField0 = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).Remaining() : typed.ReadBuffer.prototype.Remaining.call(rbuf)); return new KeyValIterator({remaining: __goscriptLiteralField0, leftPairCount: leftPairCount, key: key, val: val}, true) })())
		return [(kv).clone(), null]
	}

	public Remaining(): boolean {
		const i = this;
		return i.leftPairCount > 0
	}

	public Value(): $.Slice<number> {
		const i = this;
		return i.val
	}

	static __typeInfo = $.registerStructType(
		"arg2.KeyValIterator",
		() => new KeyValIterator(),
		() => [$.methodSignature("Key", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Next", [], [["kv", "arg2.KeyValIterator"], ["_", "error"]]), $.methodSignature("Remaining", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Value", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])],
		KeyValIterator,
		() => [/* @__PURE__ */ $.structField("remaining", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go/thrift/arg2" }), /* @__PURE__ */ $.structField("leftPairCount", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go/thrift/arg2" }), /* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, false, { pkgPath: "github.com/uber/tchannel-go/thrift/arg2" }), /* @__PURE__ */ $.structField("val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 56, false, { pkgPath: "github.com/uber/tchannel-go/thrift/arg2" })]
	)
}

export function NewKeyValIterator(arg2Payload: $.Slice<number>): [KeyValIterator, $.GoError] {
	if ($.sliceLen(arg2Payload) < 2) {
		return [new KeyValIterator(undefined, true), io.EOF]
	}

	let leftPairCount = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(arg2Payload, 0, 2))
	return $.markAsStructValue($.cloneStructValue(new KeyValIterator({leftPairCount: $.int(leftPairCount), remaining: $.goSlice(arg2Payload, 2, undefined)}, true))).Next()
}
