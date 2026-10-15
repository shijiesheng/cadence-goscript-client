// Generated file based on struct.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as encoding_binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as github_com_gogo_protobuf_sortkeys from "@goscript/github.com/gogo/protobuf/sortkeys/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/sortkeys/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./protosize.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.NullValue", "types.Struct", "types.Value", "types.isValue_Kind", "types.Value_NullValue", "types.Value_NumberValue", "types.Value_StringValue", "types.Value_BoolValue", "types.Value_StructValue", "types.Value_ListValue", "types.ListValue", "types.randyStruct"])

export type NullValue = number

$.registerNamedValueType(
	"types.NullValue",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (NullValue_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (NullValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), XXX_WellKnownType: (receiver: any, ...args: any[]) => (NullValue_XXX_WellKnownType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*types.NullValue",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (NullValue_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (NullValue_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), XXX_WellKnownType: (receiver: any, ...args: any[]) => (NullValue_XXX_WellKnownType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type isValue_Kind = {
	Compare(_p0: any): number | globalThis.Promise<number>
	Equal(_p0: any): boolean
	MarshalTo(_p0: $.Slice<number>): [number, $.GoError]
	Size(): number
	isValue_Kind(): void
}

$.registerInterfaceType(
	"types.isValue_Kind",
	null,
	[{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "isValue_Kind", args: [], returns: [] }]
);

export type randyStruct = {
	Float32(): number
	Float64(): number
	Int31(): number
	Int63(): bigint
	Intn(n: number): number
	Uint32(): number
}

$.registerInterfaceType(
	"types.randyStruct",
	null,
	[{ name: "Float32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float32") }] }, { name: "Float64", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "Int31", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }] }, { name: "Int63", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }, { name: "Intn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Uint32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint32") }] }]
);

export class Struct {
	// Unordered map of dynamically typed values.
	public get Fields(): globalThis.Map<string, Value | $.VarRef<Value> | null> | null {
		return this._fields.Fields
	}

	public set Fields(value: globalThis.Map<string, Value | $.VarRef<Value> | null> | null) {
		this._fields.Fields = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Fields: globalThis.Map<string, Value | $.VarRef<Value> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Fields?: globalThis.Map<string, Value | $.VarRef<Value> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Fields: init?.Fields ?? (null! as globalThis.Map<string, Value | $.VarRef<Value> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Struct {
		return new Struct(this, true)
	}

	public __goscriptAssign(source: Struct): void {
		const target = this._fields
		const values = source._fields
		target.Fields = values.Fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public async Compare(that: any): globalThis.Promise<number> {
		const _this: Struct | $.VarRef<Struct> | null = this;
		const _this$: Struct = _this == null ? $.pointerTarget<Struct>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Struct>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<Struct | $.VarRef<Struct> | null>(that, /* @__PURE__ */ $.pointerType("types.Struct"))
		let that1: Struct | $.VarRef<Struct> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<Struct>(that, "types.Struct")
			let that2 = $.varRef(__goscriptTuple1[0])
			let __goscriptShadow0 = __goscriptTuple1[1]
			if (__goscriptShadow0) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if ($.len((_this$ as Struct).Fields) != $.len($.pointerValue<Struct>(that1).Fields)) {
			if ($.len((_this$ as Struct).Fields) < $.len($.pointerValue<Struct>(that1).Fields)) {
				return -1
			}
			return 1
		}
		for (const [i, __rangeValue] of (_this$ as Struct).Fields?.entries() ?? []) {
			{
				let c = await Value.prototype.Compare.call($.mapGet<string, Value | $.VarRef<Value> | null, Value | $.VarRef<Value> | null>((_this$ as Struct).Fields, i, null)[0], $.interfaceValue($.mapGet<string, Value | $.VarRef<Value> | null, Value | $.VarRef<Value> | null>($.pointerValue<Struct>(that1).Fields, i, null)[0], "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as Struct).XXX_unrecognized, $.pointerValue<Struct>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_df322afd6c9fb402, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: Struct | $.VarRef<Struct> | null = this;
		const _this$: Struct = _this == null ? $.pointerTarget<Struct>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Struct>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<Struct | $.VarRef<Struct> | null>(that, /* @__PURE__ */ $.pointerType("types.Struct"))
		let that1: Struct | $.VarRef<Struct> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<Struct>(that, "types.Struct")
			let that2 = $.varRef(__goscriptTuple3[0])
			let __goscriptShadow1 = __goscriptTuple3[1]
			if (__goscriptShadow1) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if ($.len((_this$ as Struct).Fields) != $.len($.pointerValue<Struct>(that1).Fields)) {
			return false
		}
		for (const [i, __rangeValue] of (_this$ as Struct).Fields?.entries() ?? []) {
			if (!Value.prototype.Equal.call($.mapGet<string, Value | $.VarRef<Value> | null, Value | $.VarRef<Value> | null>((_this$ as Struct).Fields, i, null)[0], $.interfaceValue($.mapGet<string, Value | $.VarRef<Value> | null, Value | $.VarRef<Value> | null>($.pointerValue<Struct>(that1).Fields, i, null)[0], "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as Struct).XXX_unrecognized, $.pointerValue<Struct>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetFields(): globalThis.Map<string, Value | $.VarRef<Value> | null> | null {
		const m: Struct | $.VarRef<Struct> | null = this;
		if (m != null) {
			return $.pointerValue<Struct>(m).Fields
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Struct | $.VarRef<Struct> | null = this;
		const _this$: Struct = _this == null ? $.pointerTarget<Struct>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Struct>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.Struct{")
		let keysForFields: $.Slice<string> = $.makeSlice<string>(0, $.len((_this$ as Struct).Fields), "string")
		for (const [k, __rangeValue] of (_this$ as Struct).Fields?.entries() ?? []) {
			keysForFields = $.appendOne(keysForFields, k)
		}
		github_com_gogo_protobuf_sortkeys.Strings(keysForFields)
		let mapStringForFields = "map[string]*Value{"
		for (let __goscriptRangeTarget0 = keysForFields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			mapStringForFields = $.concatString(mapStringForFields, await fmt.Sprintf("%#v: %#v,", k, $.interfaceValue($.mapGet<string, Value | $.VarRef<Value> | null, Value | $.VarRef<Value> | null>((_this$ as Struct).Fields, k, null)[0], "*types.Value", /* @__PURE__ */ $.pointerType("types.Value"))))
		}
		mapStringForFields = $.concatString(mapStringForFields, "}")
		if ((_this$ as Struct).Fields != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Fields: ", mapStringForFields)), ",\n"))
		}
		if ((_this$ as Struct).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Struct).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Struct | $.VarRef<Struct> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).Size() : Struct.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Struct.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Struct | $.VarRef<Struct> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).Size() : Struct.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Struct.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Struct | $.VarRef<Struct> | null = this;
		const m$: Struct = m == null ? $.pointerTarget<Struct>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Struct>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Struct).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Struct).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Struct).XXX_unrecognized)
		}
		if ($.len((m$ as Struct).Fields) > 0) {
			for (const [k, __rangeValue] of (m$ as Struct).Fields?.entries() ?? []) {
				let v: Value | $.VarRef<Value> | null = $.mapGet<string, Value | $.VarRef<Value> | null, Value | $.VarRef<Value> | null>((m$ as Struct).Fields, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : Value.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintStruct(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintStruct(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintStruct(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Struct | $.VarRef<Struct> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).Size() : Struct.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Struct | $.VarRef<Struct> | null = this;
		$.assignStruct($.pointerValue<Struct>(m), $.markAsStructValue(new Struct()))
	}

	public Size(): number {
		const m: Struct | $.VarRef<Struct> | null = this;
		let n: number = 0
		const m$: Struct = m == null ? $.pointerTarget<Struct>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Struct>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as Struct).Fields) > 0) {
			for (const [k, v] of (m$ as Struct).Fields?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Value).Size() : Value.prototype.Size.call(v))
					l = l + (1 + sovStruct($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovStruct($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovStruct($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as Struct).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Struct).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Struct | $.VarRef<Struct> | null = this;
		const _this$: Struct = _this == null ? $.pointerTarget<Struct>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Struct>(_this)
		if (_this == null) {
			return "nil"
		}
		let keysForFields: $.Slice<string> = $.makeSlice<string>(0, $.len((_this$ as Struct).Fields), "string")
		for (const [k, __rangeValue] of (_this$ as Struct).Fields?.entries() ?? []) {
			keysForFields = $.appendOne(keysForFields, k)
		}
		github_com_gogo_protobuf_sortkeys.Strings(keysForFields)
		let mapStringForFields = "map[string]*Value{"
		for (let __goscriptRangeTarget1 = keysForFields, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			mapStringForFields = $.concatString(mapStringForFields, fmt.Sprintf("%v: %v,", k, $.interfaceValue($.mapGet<string, Value | $.VarRef<Value> | null, Value | $.VarRef<Value> | null>((_this$ as Struct).Fields, k, null)[0], "*types.Value", /* @__PURE__ */ $.pointerType("types.Value"))))
		}
		mapStringForFields = $.concatString(mapStringForFields, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Struct{", $.concatString(($.concatString("Fields:", mapStringForFields)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Struct).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Struct | $.VarRef<Struct> | null = this;
		const m$: Struct = m == null ? $.pointerTarget<Struct>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Struct>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowStruct
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Struct: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Struct: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Fields", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStruct
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthStruct
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthStruct
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Struct).Fields == null) {
						;(m$ as Struct).Fields = $.makeMap<string, Value | $.VarRef<Value> | null>()
					}
					let mapkey: string = ""
					let mapvalue: Value | $.VarRef<Value> | null = null! as Value | $.VarRef<Value> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow2: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowStruct
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
							iNdEx++
							__goscriptShadow2 = $.uint64Or(__goscriptShadow2, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow3 = $.int($.uint64Shr(__goscriptShadow2, 3n), 32)
						if (__goscriptShadow3 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowStruct
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthStruct
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthStruct
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow3 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowStruct
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthStruct
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthStruct
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new Value()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as Value).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : Value.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipStruct($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthStruct
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as Struct).Fields, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipStruct($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthStruct
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Struct).XXX_unrecognized = $.appendSlice((m$ as Struct).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: Struct | $.VarRef<Struct> | null = this;
		xxx_messageInfo_Struct.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Struct | $.VarRef<Struct> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Struct.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).MarshalToSizedBuffer(b) : Struct.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Struct | $.VarRef<Struct> | null = this;
		xxx_messageInfo_Struct.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Struct"
	}

	public XXX_Size(): number {
		const m: Struct | $.VarRef<Struct> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).Size() : Struct.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Struct | $.VarRef<Struct> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Struct).Unmarshal(b) : Struct.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "Struct"
	}

	static __typeInfo = $.registerStructType(
		"types.Struct",
		() => new Struct(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFields", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("types.Value")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		Struct,
		() => [{ name: "Fields", key: "Fields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("types.Value")), tag: "protobuf:\"bytes,1,rep,name=fields,proto3\" json:\"fields,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Value {
	// The kind of value.
	//
	// Types that are valid to be assigned to Kind:
	// 	*Value_NullValue
	// 	*Value_NumberValue
	// 	*Value_StringValue
	// 	*Value_BoolValue
	// 	*Value_StructValue
	// 	*Value_ListValue
	public get Kind(): isValue_Kind | null {
		return this._fields.Kind
	}

	public set Kind(value: isValue_Kind | null) {
		this._fields.Kind = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Kind: isValue_Kind | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Kind?: isValue_Kind | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Kind: init?.Kind ?? (null! as isValue_Kind | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value {
		return new Value(this, true)
	}

	public __goscriptAssign(source: Value): void {
		const target = this._fields
		const values = source._fields
		target.Kind = $.assignFieldValue(target.Kind, values.Kind, "types.isValue_Kind")
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public async Compare(that: any): globalThis.Promise<number> {
		const _this: Value | $.VarRef<Value> | null = this;
		const _this$: Value = _this == null ? $.pointerTarget<Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple5: any = $.typeAssertTuple<Value | $.VarRef<Value> | null>(that, /* @__PURE__ */ $.pointerType("types.Value"))
		let that1: Value | $.VarRef<Value> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			let __goscriptTuple6: any = $.typeAssertTuple<Value>(that, "types.Value")
			let that2 = $.varRef(__goscriptTuple6[0])
			let __goscriptShadow4 = __goscriptTuple6[1]
			if (__goscriptShadow4) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if ($.pointerValue<Value>(that1).Kind == null) {
			if ((_this$ as Value).Kind != null) {
				return 1
			}
		} else {
			if ((_this$ as Value).Kind == null) {
				return -1
			} else {
				let thisType = -1
				{
					const __goscriptTypeSwitchValue = (_this$ as Value).Kind
					switch (true) {
						case $.typeAssert<Value_NullValue | $.VarRef<Value_NullValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_NullValue")).ok:
							{
								thisType = 0
							}
							break
						case $.typeAssert<Value_NumberValue | $.VarRef<Value_NumberValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_NumberValue")).ok:
							{
								thisType = 1
							}
							break
						case $.typeAssert<Value_StringValue | $.VarRef<Value_StringValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_StringValue")).ok:
							{
								thisType = 2
							}
							break
						case $.typeAssert<Value_BoolValue | $.VarRef<Value_BoolValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_BoolValue")).ok:
							{
								thisType = 3
							}
							break
						case $.typeAssert<Value_StructValue | $.VarRef<Value_StructValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_StructValue")).ok:
							{
								thisType = 4
							}
							break
						case $.typeAssert<Value_ListValue | $.VarRef<Value_ListValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_ListValue")).ok:
							{
								thisType = 5
							}
							break
						default:
							{
								$.panic(await fmt.Sprintf("compare: unexpected type %T in oneof", ((_this$ as Value).Kind as any)))
							}
							break
					}
				}
				let that1Type = -1
				{
					const __goscriptTypeSwitchValue = $.pointerValue<Value>(that1).Kind
					switch (true) {
						case $.typeAssert<Value_NullValue | $.VarRef<Value_NullValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_NullValue")).ok:
							{
								that1Type = 0
							}
							break
						case $.typeAssert<Value_NumberValue | $.VarRef<Value_NumberValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_NumberValue")).ok:
							{
								that1Type = 1
							}
							break
						case $.typeAssert<Value_StringValue | $.VarRef<Value_StringValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_StringValue")).ok:
							{
								that1Type = 2
							}
							break
						case $.typeAssert<Value_BoolValue | $.VarRef<Value_BoolValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_BoolValue")).ok:
							{
								that1Type = 3
							}
							break
						case $.typeAssert<Value_StructValue | $.VarRef<Value_StructValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_StructValue")).ok:
							{
								that1Type = 4
							}
							break
						case $.typeAssert<Value_ListValue | $.VarRef<Value_ListValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("types.Value_ListValue")).ok:
							{
								that1Type = 5
							}
							break
						default:
							{
								$.panic(await fmt.Sprintf("compare: unexpected type %T in oneof", ($.pointerValue<Value>(that1).Kind as any)))
							}
							break
					}
				}
				if (thisType == that1Type) {
					{
						let c = (__goscriptAwait = $.pointerValue<Exclude<isValue_Kind, null>>((_this$ as Value).Kind).Compare(($.pointerValue<Value>(that1).Kind as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (c != 0) {
							return c
						}
					}
				} else {
					if (thisType < that1Type) {
						return -1
					} else {
						if (thisType > that1Type) {
							return 1
						}
					}
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as Value).XXX_unrecognized, $.pointerValue<Value>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_df322afd6c9fb402, $.arrayToSlice<number>([1])]
	}

	public Equal(that: any): boolean {
		const _this: Value | $.VarRef<Value> | null = this;
		const _this$: Value = _this == null ? $.pointerTarget<Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple7: any = $.typeAssertTuple<Value | $.VarRef<Value> | null>(that, /* @__PURE__ */ $.pointerType("types.Value"))
		let that1: Value | $.VarRef<Value> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			let __goscriptTuple8: any = $.typeAssertTuple<Value>(that, "types.Value")
			let that2 = $.varRef(__goscriptTuple8[0])
			let __goscriptShadow5 = __goscriptTuple8[1]
			if (__goscriptShadow5) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if ($.pointerValue<Value>(that1).Kind == null) {
			if ((_this$ as Value).Kind != null) {
				return false
			}
		} else {
			if ((_this$ as Value).Kind == null) {
				return false
			} else {
				if (!$.pointerValue<Exclude<isValue_Kind, null>>((_this$ as Value).Kind).Equal(($.pointerValue<Value>(that1).Kind as any))) {
					return false
				}
			}
		}
		if (!bytes.Equal((_this$ as Value).XXX_unrecognized, $.pointerValue<Value>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetBoolValue(): boolean {
		const m: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple9: any = $.typeAssertTuple<Value_BoolValue | $.VarRef<Value_BoolValue> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).GetKind() : Value.prototype.GetKind.call(m)), /* @__PURE__ */ $.pointerType("types.Value_BoolValue"))
			let x: Value_BoolValue | $.VarRef<Value_BoolValue> | null = __goscriptTuple9[0]
			let ok = __goscriptTuple9[1]
			if (ok) {
				return $.pointerValue<Value_BoolValue>(x).BoolValue
			}
		}
		return false
	}

	public GetKind(): isValue_Kind | null {
		const m: Value | $.VarRef<Value> | null = this;
		if (m != null) {
			return $.pointerValue<Value>(m).Kind
		}
		return null
	}

	public GetListValue(): ListValue | $.VarRef<ListValue> | null {
		const m: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple10: any = $.typeAssertTuple<Value_ListValue | $.VarRef<Value_ListValue> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).GetKind() : Value.prototype.GetKind.call(m)), /* @__PURE__ */ $.pointerType("types.Value_ListValue"))
			let x: Value_ListValue | $.VarRef<Value_ListValue> | null = __goscriptTuple10[0]
			let ok = __goscriptTuple10[1]
			if (ok) {
				return $.pointerValue<Value_ListValue>(x).ListValue
			}
		}
		return null
	}

	public GetNullValue(): NullValue {
		const m: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple11: any = $.typeAssertTuple<Value_NullValue | $.VarRef<Value_NullValue> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).GetKind() : Value.prototype.GetKind.call(m)), /* @__PURE__ */ $.pointerType("types.Value_NullValue"))
			let x: Value_NullValue | $.VarRef<Value_NullValue> | null = __goscriptTuple11[0]
			let ok = __goscriptTuple11[1]
			if (ok) {
				return $.pointerValue<Value_NullValue>(x).NullValue
			}
		}
		return 0
	}

	public GetNumberValue(): number {
		const m: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple12: any = $.typeAssertTuple<Value_NumberValue | $.VarRef<Value_NumberValue> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).GetKind() : Value.prototype.GetKind.call(m)), /* @__PURE__ */ $.pointerType("types.Value_NumberValue"))
			let x: Value_NumberValue | $.VarRef<Value_NumberValue> | null = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (ok) {
				return $.pointerValue<Value_NumberValue>(x).NumberValue
			}
		}
		return 0
	}

	public GetStringValue(): string {
		const m: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple13: any = $.typeAssertTuple<Value_StringValue | $.VarRef<Value_StringValue> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).GetKind() : Value.prototype.GetKind.call(m)), /* @__PURE__ */ $.pointerType("types.Value_StringValue"))
			let x: Value_StringValue | $.VarRef<Value_StringValue> | null = __goscriptTuple13[0]
			let ok = __goscriptTuple13[1]
			if (ok) {
				return $.pointerValue<Value_StringValue>(x).StringValue
			}
		}
		return ""
	}

	public GetStructValue(): Struct | $.VarRef<Struct> | null {
		const m: Value | $.VarRef<Value> | null = this;
		{
			let __goscriptTuple14: any = $.typeAssertTuple<Value_StructValue | $.VarRef<Value_StructValue> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).GetKind() : Value.prototype.GetKind.call(m)), /* @__PURE__ */ $.pointerType("types.Value_StructValue"))
			let x: Value_StructValue | $.VarRef<Value_StructValue> | null = __goscriptTuple14[0]
			let ok = __goscriptTuple14[1]
			if (ok) {
				return $.pointerValue<Value_StructValue>(x).StructValue
			}
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Value | $.VarRef<Value> | null = this;
		const _this$: Value = _this == null ? $.pointerTarget<Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 10, "string")
		s = $.appendOne(s, "&types.Value{")
		if ((_this$ as Value).Kind != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Kind: ", await fmt.Sprintf("%#v", ((_this$ as Value).Kind as any)))), ",\n"))
		}
		if ((_this$ as Value).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Value | $.VarRef<Value> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).Size() : Value.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value | $.VarRef<Value> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).Size() : Value.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value | $.VarRef<Value> | null = this;
		const m$: Value = m == null ? $.pointerTarget<Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Value).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Value).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Value).XXX_unrecognized)
		}
		if ((m$ as Value).Kind != null) {
			{
				let size = $.pointerValue<Exclude<isValue_Kind, null>>((m$ as Value).Kind).Size()
				i = i - (size)
				{
					let [, err] = $.pointerValue<Exclude<isValue_Kind, null>>((m$ as Value).Kind).MarshalTo($.goSlice(dAtA, i, undefined))
					if (err != null) {
						return [0, err]
					}
				}
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Value | $.VarRef<Value> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).Size() : Value.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Value | $.VarRef<Value> | null = this;
		$.assignStruct($.pointerValue<Value>(m), $.markAsStructValue(new Value()))
	}

	public Size(): number {
		const m: Value | $.VarRef<Value> | null = this;
		let n: number = 0
		const m$: Value = m == null ? $.pointerTarget<Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Value).Kind != null) {
			n = n + ($.pointerValue<Exclude<isValue_Kind, null>>((m$ as Value).Kind).Size())
		}
		if ((m$ as Value).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Value).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Value | $.VarRef<Value> | null = this;
		const _this$: Value = _this == null ? $.pointerTarget<Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Value{", $.concatString(($.concatString("Kind:", fmt.Sprintf("%v", ((_this$ as Value).Kind as any)))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Value | $.VarRef<Value> | null = this;
		const m$: Value = m == null ? $.pointerTarget<Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowStruct
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Value: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Value: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field NullValue", $.basicInterfaceValue(wireType, "int"))
					}
					let v: NullValue = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStruct
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						v = v | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					;(m$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(new Value_NullValue({NullValue: v}), "*types.Value_NullValue", /* @__PURE__ */ $.pointerType("types.Value_NullValue"))
					break
				}
				case 2:
				{
					if (wireType != 1) {
						return fmt.Errorf("proto: wrong wireType = %d for field NumberValue", $.basicInterfaceValue(wireType, "int"))
					}
					let v: bigint = 0n
					if ((iNdEx + 8) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint64($.goSlice(dAtA, iNdEx, undefined)))
					iNdEx = iNdEx + (8);
					;(m$ as Value).Kind = $.interfaceValue<isValue_Kind | null>((() => { const __goscriptLiteralField0 = math.Float64frombits(v); return new Value_NumberValue({NumberValue: __goscriptLiteralField0}) })(), "*types.Value_NumberValue", /* @__PURE__ */ $.pointerType("types.Value_NumberValue"))
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StringValue", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStruct
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthStruct
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthStruct
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(new Value_StringValue({StringValue: $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))}), "*types.Value_StringValue", /* @__PURE__ */ $.pointerType("types.Value_StringValue"))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field BoolValue", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStruct
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					let b = (v != 0);
					;(m$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(new Value_BoolValue({BoolValue: b}), "*types.Value_BoolValue", /* @__PURE__ */ $.pointerType("types.Value_BoolValue"))
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StructValue", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStruct
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthStruct
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthStruct
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: Struct | $.VarRef<Struct> | null = new Struct()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Struct).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : Struct.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(new Value_StructValue({StructValue: v}), "*types.Value_StructValue", /* @__PURE__ */ $.pointerType("types.Value_StructValue"))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ListValue", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStruct
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthStruct
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthStruct
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: ListValue | $.VarRef<ListValue> | null = new ListValue()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ListValue).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : ListValue.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(new Value_ListValue({ListValue: v}), "*types.Value_ListValue", /* @__PURE__ */ $.pointerType("types.Value_ListValue"))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipStruct($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthStruct
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Value).XXX_unrecognized = $.appendSlice((m$ as Value).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: Value | $.VarRef<Value> | null = this;
		xxx_messageInfo_Value.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Value | $.VarRef<Value> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Value.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).MarshalToSizedBuffer(b) : Value.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Value | $.VarRef<Value> | null = this;
		xxx_messageInfo_Value.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Value"
	}

	public XXX_OneofWrappers(): $.Slice<any> {
		return $.arrayToSlice<any>([$.interfaceValue(null, "*types.Value_NullValue", /* @__PURE__ */ $.pointerType("types.Value_NullValue")), $.interfaceValue(null, "*types.Value_NumberValue", /* @__PURE__ */ $.pointerType("types.Value_NumberValue")), $.interfaceValue(null, "*types.Value_StringValue", /* @__PURE__ */ $.pointerType("types.Value_StringValue")), $.interfaceValue(null, "*types.Value_BoolValue", /* @__PURE__ */ $.pointerType("types.Value_BoolValue")), $.interfaceValue(null, "*types.Value_StructValue", /* @__PURE__ */ $.pointerType("types.Value_StructValue")), $.interfaceValue(null, "*types.Value_ListValue", /* @__PURE__ */ $.pointerType("types.Value_ListValue"))])
	}

	public XXX_Size(): number {
		const m: Value | $.VarRef<Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).Size() : Value.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Value | $.VarRef<Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value).Unmarshal(b) : Value.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "Value"
	}

	static __typeInfo = $.registerStructType(
		"types.Value",
		() => new Value(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetBoolValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetKind", args: [], returns: [{ type: "types.isValue_Kind" }], pointerReceiver: true }, { name: "GetListValue", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.ListValue") }], pointerReceiver: true }, { name: "GetNullValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "types.NullValue") }], pointerReceiver: true }, { name: "GetNumberValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }], pointerReceiver: true }, { name: "GetStringValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetStructValue", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Struct") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_OneofWrappers", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }) }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		Value,
		() => [{ name: "Kind", key: "Kind", type: "types.isValue_Kind", tag: "protobuf_oneof:\"kind\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Value_NullValue {
	public get NullValue(): NullValue {
		return this._fields.NullValue
	}

	public set NullValue(value: NullValue) {
		this._fields.NullValue = value
	}

	public _fields: {
		NullValue: NullValue
	}

	constructor(init?: Partial<{NullValue?: NullValue}>, __goscriptValue?: boolean) {
		this._fields = {
			NullValue: init?.NullValue ?? (0 as NullValue)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value_NullValue {
		return new Value_NullValue(this, true)
	}

	public __goscriptAssign(source: Value_NullValue): void {
		const target = this._fields
		const values = source._fields
		target.NullValue = values.NullValue
	}

	public Compare(that: any): number {
		const _this: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		const _this$: Value_NullValue = _this == null ? $.pointerTarget<Value_NullValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value_NullValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple16: any = $.typeAssertTuple<Value_NullValue | $.VarRef<Value_NullValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_NullValue"))
		let that1: Value_NullValue | $.VarRef<Value_NullValue> | null = __goscriptTuple16[0]
		let ok = __goscriptTuple16[1]
		if (!ok) {
			let __goscriptTuple17: any = $.typeAssertTuple<Value_NullValue>(that, "types.Value_NullValue")
			let that2 = $.varRef(__goscriptTuple17[0])
			let __goscriptShadow6 = __goscriptTuple17[1]
			if (__goscriptShadow6) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if ((_this$ as Value_NullValue).NullValue != $.pointerValue<Value_NullValue>(that1).NullValue) {
			if ((_this$ as Value_NullValue).NullValue < $.pointerValue<Value_NullValue>(that1).NullValue) {
				return -1
			}
			return 1
		}
		return 0
	}

	public Equal(that: any): boolean {
		const _this: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple18: any = $.typeAssertTuple<Value_NullValue | $.VarRef<Value_NullValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_NullValue"))
		let that1: Value_NullValue | $.VarRef<Value_NullValue> | null = __goscriptTuple18[0]
		let ok = __goscriptTuple18[1]
		if (!ok) {
			let __goscriptTuple19: any = $.typeAssertTuple<Value_NullValue>(that, "types.Value_NullValue")
			let that2 = $.varRef(__goscriptTuple19[0])
			let __goscriptShadow7 = __goscriptTuple19[1]
			if (__goscriptShadow7) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if ($.pointerValue<Value_NullValue>(_this).NullValue != $.pointerValue<Value_NullValue>(that1).NullValue) {
			return false
		}
		return true
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>([$.concatString(($.concatString(($.concatString("&types.Value_NullValue{", "NullValue:")), await fmt.Sprintf("%#v", $.namedValueInterfaceValue<any>($.pointerValue<Value_NullValue>(_this).NullValue, "types.NullValue", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), "}")]), ", ")
		return s
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_NullValue).Size() : Value_NullValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_NullValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value_NullValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		let i = $.sliceLen(dAtA)
		i = encodeVarintStruct(dAtA, i, $.uint64($.pointerValue<Value_NullValue>(m).NullValue))
		i--
		$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoSize(): number {
		const m: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_NullValue).Size() : Value_NullValue.prototype.Size.call(m))
	}

	public Size(): number {
		const m: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		let n: number = 0
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		n = n + (1 + sovStruct($.uint64($.pointerValue<Value_NullValue>(m).NullValue)))
		return n
	}

	public String(): string {
		const _this: Value_NullValue | $.VarRef<Value_NullValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Value_NullValue{", $.concatString(($.concatString("NullValue:", fmt.Sprintf("%v", $.namedValueInterfaceValue<any>($.pointerValue<Value_NullValue>(_this).NullValue, "types.NullValue", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ","), "}"]), "")
		return s
	}

	public isValue_Kind(): void {
	}

	static __typeInfo = $.registerStructType(
		"types.Value_NullValue",
		() => new Value_NullValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "isValue_Kind", args: [], returns: [], pointerReceiver: true }],
		Value_NullValue,
		() => [{ name: "NullValue", key: "NullValue", type: /* @__PURE__ */ $.basicType("int32", "types.NullValue"), tag: "protobuf:\"varint,1,opt,name=null_value,json=nullValue,proto3,enum=google.protobuf.NullValue,oneof\" json:\"null_value,omitempty\"" }]
	)
}

export class Value_NumberValue {
	public get NumberValue(): number {
		return this._fields.NumberValue
	}

	public set NumberValue(value: number) {
		this._fields.NumberValue = value
	}

	public _fields: {
		NumberValue: number
	}

	constructor(init?: Partial<{NumberValue?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			NumberValue: init?.NumberValue ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value_NumberValue {
		return new Value_NumberValue(this, true)
	}

	public __goscriptAssign(source: Value_NumberValue): void {
		const target = this._fields
		const values = source._fields
		target.NumberValue = values.NumberValue
	}

	public Compare(that: any): number {
		const _this: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		const _this$: Value_NumberValue = _this == null ? $.pointerTarget<Value_NumberValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value_NumberValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple20: any = $.typeAssertTuple<Value_NumberValue | $.VarRef<Value_NumberValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_NumberValue"))
		let that1: Value_NumberValue | $.VarRef<Value_NumberValue> | null = __goscriptTuple20[0]
		let ok = __goscriptTuple20[1]
		if (!ok) {
			let __goscriptTuple21: any = $.typeAssertTuple<Value_NumberValue>(that, "types.Value_NumberValue")
			let that2 = $.varRef(__goscriptTuple21[0])
			let __goscriptShadow8 = __goscriptTuple21[1]
			if (__goscriptShadow8) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if ((_this$ as Value_NumberValue).NumberValue != $.pointerValue<Value_NumberValue>(that1).NumberValue) {
			if ((_this$ as Value_NumberValue).NumberValue < $.pointerValue<Value_NumberValue>(that1).NumberValue) {
				return -1
			}
			return 1
		}
		return 0
	}

	public Equal(that: any): boolean {
		const _this: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple22: any = $.typeAssertTuple<Value_NumberValue | $.VarRef<Value_NumberValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_NumberValue"))
		let that1: Value_NumberValue | $.VarRef<Value_NumberValue> | null = __goscriptTuple22[0]
		let ok = __goscriptTuple22[1]
		if (!ok) {
			let __goscriptTuple23: any = $.typeAssertTuple<Value_NumberValue>(that, "types.Value_NumberValue")
			let that2 = $.varRef(__goscriptTuple23[0])
			let __goscriptShadow9 = __goscriptTuple23[1]
			if (__goscriptShadow9) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if ($.pointerValue<Value_NumberValue>(_this).NumberValue != $.pointerValue<Value_NumberValue>(that1).NumberValue) {
			return false
		}
		return true
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>([$.concatString(($.concatString(($.concatString("&types.Value_NumberValue{", "NumberValue:")), await fmt.Sprintf("%#v", $.basicInterfaceValue($.pointerValue<Value_NumberValue>(_this).NumberValue, "float64")))), "}")]), ", ")
		return s
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_NumberValue).Size() : Value_NumberValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_NumberValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value_NumberValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		let i = $.sliceLen(dAtA)
		i = i - (8)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint64($.goSlice(dAtA, i, undefined), $.uint64(math.Float64bits($.pointerValue<Value_NumberValue>(m).NumberValue)))
		i--
		$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x11
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoSize(): number {
		const m: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_NumberValue).Size() : Value_NumberValue.prototype.Size.call(m))
	}

	public Size(): number {
		const m: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		let n: number = 0
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		n = n + (9)
		return n
	}

	public String(): string {
		const _this: Value_NumberValue | $.VarRef<Value_NumberValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Value_NumberValue{", $.concatString(($.concatString("NumberValue:", fmt.Sprintf("%v", $.basicInterfaceValue($.pointerValue<Value_NumberValue>(_this).NumberValue, "float64")))), ","), "}"]), "")
		return s
	}

	public isValue_Kind(): void {
	}

	static __typeInfo = $.registerStructType(
		"types.Value_NumberValue",
		() => new Value_NumberValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "isValue_Kind", args: [], returns: [], pointerReceiver: true }],
		Value_NumberValue,
		() => [{ name: "NumberValue", key: "NumberValue", type: /* @__PURE__ */ $.basicType("float64"), tag: "protobuf:\"fixed64,2,opt,name=number_value,json=numberValue,proto3,oneof\" json:\"number_value,omitempty\"" }]
	)
}

export class Value_StringValue {
	public get StringValue(): string {
		return this._fields.StringValue
	}

	public set StringValue(value: string) {
		this._fields.StringValue = value
	}

	public _fields: {
		StringValue: string
	}

	constructor(init?: Partial<{StringValue?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			StringValue: init?.StringValue ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value_StringValue {
		return new Value_StringValue(this, true)
	}

	public __goscriptAssign(source: Value_StringValue): void {
		const target = this._fields
		const values = source._fields
		target.StringValue = values.StringValue
	}

	public Compare(that: any): number {
		const _this: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		const _this$: Value_StringValue = _this == null ? $.pointerTarget<Value_StringValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value_StringValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple24: any = $.typeAssertTuple<Value_StringValue | $.VarRef<Value_StringValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_StringValue"))
		let that1: Value_StringValue | $.VarRef<Value_StringValue> | null = __goscriptTuple24[0]
		let ok = __goscriptTuple24[1]
		if (!ok) {
			let __goscriptTuple25: any = $.typeAssertTuple<Value_StringValue>(that, "types.Value_StringValue")
			let that2 = $.varRef(__goscriptTuple25[0])
			let __goscriptShadow10 = __goscriptTuple25[1]
			if (__goscriptShadow10) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if (!$.stringEqual((_this$ as Value_StringValue).StringValue, $.pointerValue<Value_StringValue>(that1).StringValue)) {
			if ($.stringCompare((_this$ as Value_StringValue).StringValue, $.pointerValue<Value_StringValue>(that1).StringValue) < 0) {
				return -1
			}
			return 1
		}
		return 0
	}

	public Equal(that: any): boolean {
		const _this: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple26: any = $.typeAssertTuple<Value_StringValue | $.VarRef<Value_StringValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_StringValue"))
		let that1: Value_StringValue | $.VarRef<Value_StringValue> | null = __goscriptTuple26[0]
		let ok = __goscriptTuple26[1]
		if (!ok) {
			let __goscriptTuple27: any = $.typeAssertTuple<Value_StringValue>(that, "types.Value_StringValue")
			let that2 = $.varRef(__goscriptTuple27[0])
			let __goscriptShadow11 = __goscriptTuple27[1]
			if (__goscriptShadow11) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if (!$.stringEqual($.pointerValue<Value_StringValue>(_this).StringValue, $.pointerValue<Value_StringValue>(that1).StringValue)) {
			return false
		}
		return true
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>([$.concatString(($.concatString(($.concatString("&types.Value_StringValue{", "StringValue:")), await fmt.Sprintf("%#v", $.pointerValue<Value_StringValue>(_this).StringValue))), "}")]), ", ")
		return s
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_StringValue).Size() : Value_StringValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_StringValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value_StringValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		const m$: Value_StringValue = m == null ? $.pointerTarget<Value_StringValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value_StringValue>(m)
		let i = $.sliceLen(dAtA)
		i = i - ($.stringLen((m$ as Value_StringValue).StringValue))
		$.copy($.goSlice(dAtA, i, undefined), (m$ as Value_StringValue).StringValue)
		i = encodeVarintStruct(dAtA, i, $.uint64($.stringLen((m$ as Value_StringValue).StringValue)))
		i--
		$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoSize(): number {
		const m: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_StringValue).Size() : Value_StringValue.prototype.Size.call(m))
	}

	public Size(): number {
		const m: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		let n: number = 0
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen($.pointerValue<Value_StringValue>(m).StringValue)
		n = n + ((1 + l) + sovStruct($.uint64(l)))
		return n
	}

	public String(): string {
		const _this: Value_StringValue | $.VarRef<Value_StringValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Value_StringValue{", $.concatString(($.concatString("StringValue:", fmt.Sprintf("%v", $.pointerValue<Value_StringValue>(_this).StringValue))), ","), "}"]), "")
		return s
	}

	public isValue_Kind(): void {
	}

	static __typeInfo = $.registerStructType(
		"types.Value_StringValue",
		() => new Value_StringValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "isValue_Kind", args: [], returns: [], pointerReceiver: true }],
		Value_StringValue,
		() => [{ name: "StringValue", key: "StringValue", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=string_value,json=stringValue,proto3,oneof\" json:\"string_value,omitempty\"" }]
	)
}

export class Value_BoolValue {
	public get BoolValue(): boolean {
		return this._fields.BoolValue
	}

	public set BoolValue(value: boolean) {
		this._fields.BoolValue = value
	}

	public _fields: {
		BoolValue: boolean
	}

	constructor(init?: Partial<{BoolValue?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			BoolValue: init?.BoolValue ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value_BoolValue {
		return new Value_BoolValue(this, true)
	}

	public __goscriptAssign(source: Value_BoolValue): void {
		const target = this._fields
		const values = source._fields
		target.BoolValue = values.BoolValue
	}

	public Compare(that: any): number {
		const _this: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		const _this$: Value_BoolValue = _this == null ? $.pointerTarget<Value_BoolValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value_BoolValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple28: any = $.typeAssertTuple<Value_BoolValue | $.VarRef<Value_BoolValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_BoolValue"))
		let that1: Value_BoolValue | $.VarRef<Value_BoolValue> | null = __goscriptTuple28[0]
		let ok = __goscriptTuple28[1]
		if (!ok) {
			let __goscriptTuple29: any = $.typeAssertTuple<Value_BoolValue>(that, "types.Value_BoolValue")
			let that2 = $.varRef(__goscriptTuple29[0])
			let __goscriptShadow12 = __goscriptTuple29[1]
			if (__goscriptShadow12) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if ((_this$ as Value_BoolValue).BoolValue != $.pointerValue<Value_BoolValue>(that1).BoolValue) {
			if (!(_this$ as Value_BoolValue).BoolValue) {
				return -1
			}
			return 1
		}
		return 0
	}

	public Equal(that: any): boolean {
		const _this: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple30: any = $.typeAssertTuple<Value_BoolValue | $.VarRef<Value_BoolValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_BoolValue"))
		let that1: Value_BoolValue | $.VarRef<Value_BoolValue> | null = __goscriptTuple30[0]
		let ok = __goscriptTuple30[1]
		if (!ok) {
			let __goscriptTuple31: any = $.typeAssertTuple<Value_BoolValue>(that, "types.Value_BoolValue")
			let that2 = $.varRef(__goscriptTuple31[0])
			let __goscriptShadow13 = __goscriptTuple31[1]
			if (__goscriptShadow13) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if ($.pointerValue<Value_BoolValue>(_this).BoolValue != $.pointerValue<Value_BoolValue>(that1).BoolValue) {
			return false
		}
		return true
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>([$.concatString(($.concatString(($.concatString("&types.Value_BoolValue{", "BoolValue:")), await fmt.Sprintf("%#v", $.pointerValue<Value_BoolValue>(_this).BoolValue))), "}")]), ", ")
		return s
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_BoolValue).Size() : Value_BoolValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_BoolValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value_BoolValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		let i = $.sliceLen(dAtA)
		i--
		if ($.pointerValue<Value_BoolValue>(m).BoolValue) {
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
		} else {
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
		}
		i--
		$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoSize(): number {
		const m: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_BoolValue).Size() : Value_BoolValue.prototype.Size.call(m))
	}

	public Size(): number {
		const m: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		let n: number = 0
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		n = n + (2)
		return n
	}

	public String(): string {
		const _this: Value_BoolValue | $.VarRef<Value_BoolValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Value_BoolValue{", $.concatString(($.concatString("BoolValue:", fmt.Sprintf("%v", $.pointerValue<Value_BoolValue>(_this).BoolValue))), ","), "}"]), "")
		return s
	}

	public isValue_Kind(): void {
	}

	static __typeInfo = $.registerStructType(
		"types.Value_BoolValue",
		() => new Value_BoolValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "isValue_Kind", args: [], returns: [], pointerReceiver: true }],
		Value_BoolValue,
		() => [{ name: "BoolValue", key: "BoolValue", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,4,opt,name=bool_value,json=boolValue,proto3,oneof\" json:\"bool_value,omitempty\"" }]
	)
}

export class Value_StructValue {
	public get StructValue(): Struct | $.VarRef<Struct> | null {
		return this._fields.StructValue
	}

	public set StructValue(value: Struct | $.VarRef<Struct> | null) {
		this._fields.StructValue = value
	}

	public _fields: {
		StructValue: Struct | $.VarRef<Struct> | null
	}

	constructor(init?: Partial<{StructValue?: Struct | $.VarRef<Struct> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			StructValue: init?.StructValue ?? (null! as Struct | $.VarRef<Struct> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value_StructValue {
		return new Value_StructValue(this, true)
	}

	public __goscriptAssign(source: Value_StructValue): void {
		const target = this._fields
		const values = source._fields
		target.StructValue = values.StructValue
	}

	public async Compare(that: any): globalThis.Promise<number> {
		const _this: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple32: any = $.typeAssertTuple<Value_StructValue | $.VarRef<Value_StructValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_StructValue"))
		let that1: Value_StructValue | $.VarRef<Value_StructValue> | null = __goscriptTuple32[0]
		let ok = __goscriptTuple32[1]
		if (!ok) {
			let __goscriptTuple33: any = $.typeAssertTuple<Value_StructValue>(that, "types.Value_StructValue")
			let that2 = $.varRef(__goscriptTuple33[0])
			let __goscriptShadow14 = __goscriptTuple33[1]
			if (__goscriptShadow14) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		{
			let c = await Struct.prototype.Compare.call($.pointerValue<Value_StructValue>(_this).StructValue, $.interfaceValue($.pointerValue<Value_StructValue>(that1).StructValue, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct")))
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Equal(that: any): boolean {
		const _this: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple34: any = $.typeAssertTuple<Value_StructValue | $.VarRef<Value_StructValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_StructValue"))
		let that1: Value_StructValue | $.VarRef<Value_StructValue> | null = __goscriptTuple34[0]
		let ok = __goscriptTuple34[1]
		if (!ok) {
			let __goscriptTuple35: any = $.typeAssertTuple<Value_StructValue>(that, "types.Value_StructValue")
			let that2 = $.varRef(__goscriptTuple35[0])
			let __goscriptShadow15 = __goscriptTuple35[1]
			if (__goscriptShadow15) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if (!Struct.prototype.Equal.call($.pointerValue<Value_StructValue>(_this).StructValue, $.interfaceValue($.pointerValue<Value_StructValue>(that1).StructValue, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct")))) {
			return false
		}
		return true
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>([$.concatString(($.concatString(($.concatString("&types.Value_StructValue{", "StructValue:")), await fmt.Sprintf("%#v", $.interfaceValue($.pointerValue<Value_StructValue>(_this).StructValue, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct"))))), "}")]), ", ")
		return s
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_StructValue).Size() : Value_StructValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_StructValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value_StructValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		const m$: Value_StructValue = m == null ? $.pointerTarget<Value_StructValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value_StructValue>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Value_StructValue).StructValue != null) {
			{
				let [size, err] = Struct.prototype.MarshalToSizedBuffer.call((m$ as Value_StructValue).StructValue, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintStruct(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoSize(): number {
		const m: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_StructValue).Size() : Value_StructValue.prototype.Size.call(m))
	}

	public Size(): number {
		const m: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		let n: number = 0
		const m$: Value_StructValue = m == null ? $.pointerTarget<Value_StructValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value_StructValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Value_StructValue).StructValue != null) {
			l = Struct.prototype.Size.call((m$ as Value_StructValue).StructValue)
			n = n + ((1 + l) + sovStruct($.uint64(l)))
		}
		return n
	}

	public String(): string {
		const _this: Value_StructValue | $.VarRef<Value_StructValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Value_StructValue{", $.concatString(($.concatString("StructValue:", strings.Replace(fmt.Sprintf("%v", $.interfaceValue($.pointerValue<Value_StructValue>(_this).StructValue, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct"))), "Struct", "Struct", 1))), ","), "}"]), "")
		return s
	}

	public isValue_Kind(): void {
	}

	static __typeInfo = $.registerStructType(
		"types.Value_StructValue",
		() => new Value_StructValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "isValue_Kind", args: [], returns: [], pointerReceiver: true }],
		Value_StructValue,
		() => [{ name: "StructValue", key: "StructValue", type: /* @__PURE__ */ $.pointerType("types.Struct"), tag: "protobuf:\"bytes,5,opt,name=struct_value,json=structValue,proto3,oneof\" json:\"struct_value,omitempty\"" }]
	)
}

export class Value_ListValue {
	public get ListValue(): ListValue | $.VarRef<ListValue> | null {
		return this._fields.ListValue
	}

	public set ListValue(value: ListValue | $.VarRef<ListValue> | null) {
		this._fields.ListValue = value
	}

	public _fields: {
		ListValue: ListValue | $.VarRef<ListValue> | null
	}

	constructor(init?: Partial<{ListValue?: ListValue | $.VarRef<ListValue> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ListValue: init?.ListValue ?? (null! as ListValue | $.VarRef<ListValue> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value_ListValue {
		return new Value_ListValue(this, true)
	}

	public __goscriptAssign(source: Value_ListValue): void {
		const target = this._fields
		const values = source._fields
		target.ListValue = values.ListValue
	}

	public async Compare(that: any): globalThis.Promise<number> {
		const _this: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple36: any = $.typeAssertTuple<Value_ListValue | $.VarRef<Value_ListValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_ListValue"))
		let that1: Value_ListValue | $.VarRef<Value_ListValue> | null = __goscriptTuple36[0]
		let ok = __goscriptTuple36[1]
		if (!ok) {
			let __goscriptTuple37: any = $.typeAssertTuple<Value_ListValue>(that, "types.Value_ListValue")
			let that2 = $.varRef(__goscriptTuple37[0])
			let __goscriptShadow16 = __goscriptTuple37[1]
			if (__goscriptShadow16) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		{
			let c = await ListValue.prototype.Compare.call($.pointerValue<Value_ListValue>(_this).ListValue, $.interfaceValue($.pointerValue<Value_ListValue>(that1).ListValue, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue")))
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Equal(that: any): boolean {
		const _this: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple38: any = $.typeAssertTuple<Value_ListValue | $.VarRef<Value_ListValue> | null>(that, /* @__PURE__ */ $.pointerType("types.Value_ListValue"))
		let that1: Value_ListValue | $.VarRef<Value_ListValue> | null = __goscriptTuple38[0]
		let ok = __goscriptTuple38[1]
		if (!ok) {
			let __goscriptTuple39: any = $.typeAssertTuple<Value_ListValue>(that, "types.Value_ListValue")
			let that2 = $.varRef(__goscriptTuple39[0])
			let __goscriptShadow17 = __goscriptTuple39[1]
			if (__goscriptShadow17) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if (!ListValue.prototype.Equal.call($.pointerValue<Value_ListValue>(_this).ListValue, $.interfaceValue($.pointerValue<Value_ListValue>(that1).ListValue, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue")))) {
			return false
		}
		return true
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>([$.concatString(($.concatString(($.concatString("&types.Value_ListValue{", "ListValue:")), await fmt.Sprintf("%#v", $.interfaceValue($.pointerValue<Value_ListValue>(_this).ListValue, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue"))))), "}")]), ", ")
		return s
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_ListValue).Size() : Value_ListValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_ListValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Value_ListValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		const m$: Value_ListValue = m == null ? $.pointerTarget<Value_ListValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value_ListValue>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as Value_ListValue).ListValue != null) {
			{
				let [size, err] = ListValue.prototype.MarshalToSizedBuffer.call((m$ as Value_ListValue).ListValue, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintStruct(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoSize(): number {
		const m: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Value_ListValue).Size() : Value_ListValue.prototype.Size.call(m))
	}

	public Size(): number {
		const m: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		let n: number = 0
		const m$: Value_ListValue = m == null ? $.pointerTarget<Value_ListValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Value_ListValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Value_ListValue).ListValue != null) {
			l = ListValue.prototype.Size.call((m$ as Value_ListValue).ListValue)
			n = n + ((1 + l) + sovStruct($.uint64(l)))
		}
		return n
	}

	public String(): string {
		const _this: Value_ListValue | $.VarRef<Value_ListValue> | null = this;
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Value_ListValue{", $.concatString(($.concatString("ListValue:", strings.Replace(fmt.Sprintf("%v", $.interfaceValue($.pointerValue<Value_ListValue>(_this).ListValue, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue"))), "ListValue", "ListValue", 1))), ","), "}"]), "")
		return s
	}

	public isValue_Kind(): void {
	}

	static __typeInfo = $.registerStructType(
		"types.Value_ListValue",
		() => new Value_ListValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "isValue_Kind", args: [], returns: [], pointerReceiver: true }],
		Value_ListValue,
		() => [{ name: "ListValue", key: "ListValue", type: /* @__PURE__ */ $.pointerType("types.ListValue"), tag: "protobuf:\"bytes,6,opt,name=list_value,json=listValue,proto3,oneof\" json:\"list_value,omitempty\"" }]
	)
}

export class ListValue {
	// Repeated field of dynamically typed values.
	public get Values(): $.Slice<Value | $.VarRef<Value> | null> {
		return this._fields.Values
	}

	public set Values(value: $.Slice<Value | $.VarRef<Value> | null>) {
		this._fields.Values = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Values: $.Slice<Value | $.VarRef<Value> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Values?: $.Slice<Value | $.VarRef<Value> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Values: init?.Values ?? (null! as $.Slice<Value | $.VarRef<Value> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListValue {
		return new ListValue(this, true)
	}

	public __goscriptAssign(source: ListValue): void {
		const target = this._fields
		const values = source._fields
		target.Values = values.Values
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public async Compare(that: any): globalThis.Promise<number> {
		const _this: ListValue | $.VarRef<ListValue> | null = this;
		const _this$: ListValue = _this == null ? $.pointerTarget<ListValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ListValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple40: any = $.typeAssertTuple<ListValue | $.VarRef<ListValue> | null>(that, /* @__PURE__ */ $.pointerType("types.ListValue"))
		let that1: ListValue | $.VarRef<ListValue> | null = __goscriptTuple40[0]
		let ok = __goscriptTuple40[1]
		if (!ok) {
			let __goscriptTuple41: any = $.typeAssertTuple<ListValue>(that, "types.ListValue")
			let that2 = $.varRef(__goscriptTuple41[0])
			let __goscriptShadow18 = __goscriptTuple41[1]
			if (__goscriptShadow18) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if ($.sliceLen((_this$ as ListValue).Values) != $.sliceLen($.pointerValue<ListValue>(that1).Values)) {
			if ($.sliceLen((_this$ as ListValue).Values) < $.sliceLen($.pointerValue<ListValue>(that1).Values)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget2 = (_this$ as ListValue).Values, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			{
				let c = await Value.prototype.Compare.call($.arrayIndex((_this$ as ListValue).Values!, i), $.interfaceValue($.arrayIndex($.pointerValue<ListValue>(that1).Values!, i), "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as ListValue).XXX_unrecognized, $.pointerValue<ListValue>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_df322afd6c9fb402, $.arrayToSlice<number>([2])]
	}

	public Equal(that: any): boolean {
		const _this: ListValue | $.VarRef<ListValue> | null = this;
		const _this$: ListValue = _this == null ? $.pointerTarget<ListValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ListValue>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple42: any = $.typeAssertTuple<ListValue | $.VarRef<ListValue> | null>(that, /* @__PURE__ */ $.pointerType("types.ListValue"))
		let that1: ListValue | $.VarRef<ListValue> | null = __goscriptTuple42[0]
		let ok = __goscriptTuple42[1]
		if (!ok) {
			let __goscriptTuple43: any = $.typeAssertTuple<ListValue>(that, "types.ListValue")
			let that2 = $.varRef(__goscriptTuple43[0])
			let __goscriptShadow19 = __goscriptTuple43[1]
			if (__goscriptShadow19) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if ($.sliceLen((_this$ as ListValue).Values) != $.sliceLen($.pointerValue<ListValue>(that1).Values)) {
			return false
		}
		for (let __goscriptRangeTarget3 = (_this$ as ListValue).Values, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			if (!Value.prototype.Equal.call($.arrayIndex((_this$ as ListValue).Values!, i), $.interfaceValue($.arrayIndex($.pointerValue<ListValue>(that1).Values!, i), "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as ListValue).XXX_unrecognized, $.pointerValue<ListValue>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValues(): $.Slice<Value | $.VarRef<Value> | null> {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		if (m != null) {
			return $.pointerValue<ListValue>(m).Values
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: ListValue | $.VarRef<ListValue> | null = this;
		const _this$: ListValue = _this == null ? $.pointerTarget<ListValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ListValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.ListValue{")
		if ((_this$ as ListValue).Values != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Values: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as ListValue).Values, "[]*types.Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Value")))))), ",\n"))
		}
		if ((_this$ as ListValue).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as ListValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).Size() : ListValue.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple44: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple44[0]
		err = __goscriptTuple44[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).Size() : ListValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		const m$: ListValue = m == null ? $.pointerTarget<ListValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListValue>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListValue).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListValue).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListValue).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListValue).Values) > 0) {
			for (let __goscriptSliceWindow2 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListValue).Values) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Value.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListValue).Values!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintStruct(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).Size() : ListValue.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: ListValue | $.VarRef<ListValue> | null = this;
		$.assignStruct($.pointerValue<ListValue>(m), $.markAsStructValue(new ListValue()))
	}

	public Size(): number {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		let n: number = 0
		const m$: ListValue = m == null ? $.pointerTarget<ListValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListValue).Values) > 0) {
			for (let __goscriptRangeTarget4 = (m$ as ListValue).Values, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as Value | $.VarRef<Value> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Value).Size() : Value.prototype.Size.call(e))
				n = n + ((1 + l) + sovStruct($.uint64(l)))
			}
		}
		if ((m$ as ListValue).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListValue).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: ListValue | $.VarRef<ListValue> | null = this;
		const _this$: ListValue = _this == null ? $.pointerTarget<ListValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ListValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForValues = "[]*Value{"
		for (let __goscriptRangeTarget5 = (_this$ as ListValue).Values, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as Value | $.VarRef<Value> | null)
			repeatedStringForValues = $.concatString(repeatedStringForValues, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Value).String() : Value.prototype.String.call(f)), "Value", "Value", 1), ","))
		}
		repeatedStringForValues = $.concatString(repeatedStringForValues, "}")
		let s = strings.Join($.arrayToSlice<string>(["&ListValue{", $.concatString(($.concatString("Values:", repeatedStringForValues)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as ListValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListValue | $.VarRef<ListValue> | null = this;
		const m$: ListValue = m == null ? $.pointerTarget<ListValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListValue>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowStruct
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListValue: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListValue: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Values", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStruct
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthStruct
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthStruct
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListValue).Values = $.appendOne((m$ as ListValue).Values, new Value(), $.appendZeros.nil)
					{
						let err = Value.prototype.Unmarshal.call($.arrayIndex((m$ as ListValue).Values!, $.sliceLen((m$ as ListValue).Values) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipStruct($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthStruct
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListValue).XXX_unrecognized = $.appendSlice((m$ as ListValue).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		xxx_messageInfo_ListValue.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListValue.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).MarshalToSizedBuffer(b) : ListValue.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		xxx_messageInfo_ListValue.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.ListValue"
	}

	public XXX_Size(): number {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).Size() : ListValue.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListValue | $.VarRef<ListValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListValue).Unmarshal(b) : ListValue.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "ListValue"
	}

	static __typeInfo = $.registerStructType(
		"types.ListValue",
		() => new ListValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValues", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Value")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		ListValue,
		() => [{ name: "Values", key: "Values", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Value")), tag: "protobuf:\"bytes,1,rep,name=values,proto3\" json:\"values,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export const NullValue_NULL_VALUE: NullValue = 0

export let NullValue_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "NULL_VALUE"]])

export function __goscript_set_NullValue_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	NullValue_name = __goscriptValue
}

export let NullValue_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["NULL_VALUE", 0]])

export function __goscript_set_NullValue_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	NullValue_value = __goscriptValue
}

export function NullValue_EnumDescriptor(recv: NullValue): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_df322afd6c9fb402, $.arrayToSlice<number>([0])]
}

export function NullValue_XXX_WellKnownType(recv: NullValue): string {
	return "NullValue"
}

export let xxx_messageInfo_Struct: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Struct(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Struct.value, __goscriptValue)
}

export let xxx_messageInfo_Value: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Value(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Value.value, __goscriptValue)
}

export let xxx_messageInfo_ListValue: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListValue(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListValue.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterEnum("google.protobuf.NullValue", NullValue_name, NullValue_value)
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Struct", /* @__PURE__ */ $.pointerType("types.Struct")), "google.protobuf.Struct")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*types.Value", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("types.Value"))), "google.protobuf.Struct.FieldsEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Value", /* @__PURE__ */ $.pointerType("types.Value")), "google.protobuf.Value")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.ListValue", /* @__PURE__ */ $.pointerType("types.ListValue")), "google.protobuf.ListValue")
}

function __goscriptInit1(): void {
	proto.RegisterFile("google/protobuf/struct.proto", fileDescriptor_df322afd6c9fb402)
}

export let fileDescriptor_df322afd6c9fb402: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 116, 145, 177, 111, 211, 64, 20, 198, 253, 156, 198, 34, 207, 168, 84, 135, 4, 81, 65, 71, 148, 46, 17, 66, 174, 20, 22, 68, 88, 136, 84, 90, 137, 168, 50, 134, 22, 137, 37, 194, 174, 27, 89, 189, 222, 85, 246, 29, 40, 27, 11, 255, 3, 51, 19, 98, 228, 175, 232, 200, 200, 72, 220, 133, 177, 99, 71, 116, 119, 182, 65, 141, 178, 249, 125, 247, 123, 223, 123, 223, 51, 222, 159, 9, 49, 99, 233, 246, 89, 46, 164, 136, 213, 241, 118, 33, 115, 149, 200, 192, 212, 228, 150, 125, 13, 234, 215, 254, 23, 64, 239, 181, 33, 200, 8, 189, 227, 44, 101, 71, 69, 23, 122, 173, 129, 63, 220, 10, 174, 193, 129, 5, 131, 23, 134, 218, 225, 50, 159, 71, 85, 203, 230, 43, 244, 255, 147, 201, 6, 182, 78, 210, 121, 23, 122, 48, 232, 68, 250, 147, 60, 194, 246, 135, 247, 76, 165, 93, 183, 7, 3, 127, 120, 103, 201, 252, 80, 191, 70, 22, 122, 234, 62, 129, 254, 15, 23, 219, 70, 36, 35, 68, 174, 24, 155, 90, 3, 109, 186, 62, 220, 92, 50, 216, 87, 140, 25, 126, 207, 137, 58, 188, 46, 200, 22, 222, 228, 234, 52, 78, 243, 233, 191, 249, 176, 231, 68, 190, 85, 27, 168, 144, 121, 198, 103, 21, 212, 210, 139, 107, 200, 170, 22, 122, 128, 24, 11, 81, 175, 177, 214, 131, 193, 13, 61, 74, 107, 22, 120, 102, 92, 84, 34, 43, 164, 109, 162, 222, 93, 113, 199, 202, 94, 37, 178, 73, 201, 178, 162, 238, 245, 76, 239, 114, 202, 73, 86, 200, 38, 37, 171, 139, 177, 135, 107, 39, 25, 63, 234, 143, 176, 211, 16, 36, 64, 207, 152, 213, 127, 116, 213, 209, 43, 234, 225, 61, 236, 52, 71, 36, 235, 136, 251, 7, 147, 201, 244, 240, 249, 228, 96, 103, 195, 25, 127, 134, 95, 11, 234, 92, 46, 40, 92, 45, 40, 124, 42, 41, 124, 43, 41, 156, 151, 20, 126, 150, 20, 126, 151, 20, 254, 148, 212, 185, 212, 250, 5, 133, 243, 11, 10, 120, 59, 17, 167, 215, 71, 142, 125, 155, 62, 212, 117, 8, 239, 218, 114, 126, 150, 22, 87, 0, 95, 221, 214, 110, 56, 254, 238, 210, 93, 219, 16, 214, 59, 190, 77, 25, 123, 201, 197, 71, 254, 70, 147, 177, 103, 156, 30, 255, 13, 0, 0, 255, 255, 38, 48, 219, 190, 233, 2, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_df322afd6c9fb402(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_df322afd6c9fb402 = __goscriptValue
}

export function NullValue_String(x: NullValue): string {
	let [s, ok] = $.mapGet<number, string, string>(NullValue_name, $.int(x, 32), "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(x))
}

export async function valueToGoStringStruct(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintStruct(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovStruct(v))
	let base = offset
	for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedStruct(r: randyStruct | null, easy: boolean): globalThis.Promise<Struct | $.VarRef<Struct> | null> {
	let _this: Struct | $.VarRef<Struct> | null = new Struct()
	let _this$: Struct = _this == null ? $.pointerTarget<Struct>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Struct>(_this)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Struct).Fields = $.makeMap<string, Value | $.VarRef<Value> | null>()
		for (let i = 0; i < v1; i++) {
			$.mapSet((_this$ as Struct).Fields, await randStringStruct(r), await NewPopulatedValue(r, easy))
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Struct).XXX_unrecognized = await randUnrecognizedStruct(r, 2)
	}
	return _this
}

export async function NewPopulatedValue(r: randyStruct | null, easy: boolean): globalThis.Promise<Value | $.VarRef<Value> | null> {
	let _this: Value | $.VarRef<Value> | null = new Value()
	let _this$: Value = _this == null ? $.pointerTarget<Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value>(_this)
	let oneofNumber_Kind = $.arrayIndex($.arrayToSlice<number>([1, 2, 3, 4, 5, 6])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(6), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	switch (oneofNumber_Kind) {
		case 1:
		{
			;(_this$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(await NewPopulatedValue_NullValue(r, easy), "*types.Value_NullValue", /* @__PURE__ */ $.pointerType("types.Value_NullValue"))
			break
		}
		case 2:
		{
			;(_this$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(await NewPopulatedValue_NumberValue(r, easy), "*types.Value_NumberValue", /* @__PURE__ */ $.pointerType("types.Value_NumberValue"))
			break
		}
		case 3:
		{
			;(_this$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(await NewPopulatedValue_StringValue(r, easy), "*types.Value_StringValue", /* @__PURE__ */ $.pointerType("types.Value_StringValue"))
			break
		}
		case 4:
		{
			;(_this$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(await NewPopulatedValue_BoolValue(r, easy), "*types.Value_BoolValue", /* @__PURE__ */ $.pointerType("types.Value_BoolValue"))
			break
		}
		case 5:
		{
			;(_this$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(await NewPopulatedValue_StructValue(r, easy), "*types.Value_StructValue", /* @__PURE__ */ $.pointerType("types.Value_StructValue"))
			break
		}
		case 6:
		{
			;(_this$ as Value).Kind = $.interfaceValue<isValue_Kind | null>(await NewPopulatedValue_ListValue(r, easy), "*types.Value_ListValue", /* @__PURE__ */ $.pointerType("types.Value_ListValue"))
			break
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Value).XXX_unrecognized = await randUnrecognizedStruct(r, 7)
	}
	return _this
}

export async function NewPopulatedValue_NullValue(r: randyStruct | null, easy: boolean): globalThis.Promise<Value_NullValue | $.VarRef<Value_NullValue> | null> {
	let _this: Value_NullValue | $.VarRef<Value_NullValue> | null = new Value_NullValue()
	$.pointerValue<Value_NullValue>(_this).NullValue = $.int($.arrayIndex($.arrayToSlice<number>([0])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 32)
	return _this
}

export async function NewPopulatedValue_NumberValue(r: randyStruct | null, easy: boolean): globalThis.Promise<Value_NumberValue | $.VarRef<Value_NumberValue> | null> {
	let _this: Value_NumberValue | $.VarRef<Value_NumberValue> | null = new Value_NumberValue()
	let _this$: Value_NumberValue = _this == null ? $.pointerTarget<Value_NumberValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Value_NumberValue>(_this);
	;(_this$ as Value_NumberValue).NumberValue = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Float64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as Value_NumberValue).NumberValue = (_this$ as Value_NumberValue).NumberValue * (-1)
	}
	return _this
}

export async function NewPopulatedValue_StringValue(r: randyStruct | null, easy: boolean): globalThis.Promise<Value_StringValue | $.VarRef<Value_StringValue> | null> {
	let _this: Value_StringValue | $.VarRef<Value_StringValue> | null = new Value_StringValue()
	$.pointerValue<Value_StringValue>(_this).StringValue = await randStringStruct(r)
	return _this
}

export async function NewPopulatedValue_BoolValue(r: randyStruct | null, easy: boolean): globalThis.Promise<Value_BoolValue | $.VarRef<Value_BoolValue> | null> {
	let _this: Value_BoolValue | $.VarRef<Value_BoolValue> | null = new Value_BoolValue()
	$.pointerValue<Value_BoolValue>(_this).BoolValue = ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)
	return _this
}

export async function NewPopulatedValue_StructValue(r: randyStruct | null, easy: boolean): globalThis.Promise<Value_StructValue | $.VarRef<Value_StructValue> | null> {
	let _this: Value_StructValue | $.VarRef<Value_StructValue> | null = new Value_StructValue()
	$.pointerValue<Value_StructValue>(_this).StructValue = await NewPopulatedStruct(r, easy)
	return _this
}

export async function NewPopulatedValue_ListValue(r: randyStruct | null, easy: boolean): globalThis.Promise<Value_ListValue | $.VarRef<Value_ListValue> | null> {
	let _this: Value_ListValue | $.VarRef<Value_ListValue> | null = new Value_ListValue()
	$.pointerValue<Value_ListValue>(_this).ListValue = await NewPopulatedListValue(r, easy)
	return _this
}

export async function NewPopulatedListValue(r: randyStruct | null, easy: boolean): globalThis.Promise<ListValue | $.VarRef<ListValue> | null> {
	let _this: ListValue | $.VarRef<ListValue> | null = new ListValue()
	let _this$: ListValue = _this == null ? $.pointerTarget<ListValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ListValue>(_this)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as ListValue).Values = $.makeSlice<Value | $.VarRef<Value> | null>(v2)
		for (let i = 0; i < v2; i++) {
			$.sliceElems((_this$ as ListValue).Values!)[$.sliceSlot((_this$ as ListValue).Values!, i)] = await NewPopulatedValue(r, easy)
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as ListValue).XXX_unrecognized = await randUnrecognizedStruct(r, 2)
	}
	return _this
}

export async function randUTF8RuneStruct(r: randyStruct | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringStruct(r: randyStruct | null): globalThis.Promise<string> {
	let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v3, undefined, "number")
	for (let __goscriptSliceWindow5 = $.sliceRange(tmps), i = 0; i < v3; i++) {
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = await randUTF8RuneStruct(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedStruct(r: randyStruct | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldStruct(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldStruct(dAtA: $.Slice<number>, r: randyStruct | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateStruct(dAtA, $.uint64(key))
			let v4 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v4 = $.int64Mul(v4, -1n)
			}
			dAtA = encodeVarintPopulateStruct(dAtA, $.uint64(v4))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateStruct(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateStruct(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateStruct(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateStruct(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStruct, null>) : $.pointerValue<Exclude<randyStruct, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateStruct(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovStruct(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozStruct(x: bigint): number {
	let n: number = 0
	return sovStruct($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringStruct(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipStruct(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowStruct]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
			iNdEx++
			wire = $.uint64Or(wire, $.uint64Shl(($.uint64And($.uint64(b), 127n)), shift))
			if (b < 0x80) {
				break
			}
		}
		let wireType = $.int($.uint64And(wire, 7n))
		switch (wireType) {
			case 0:
			{
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowStruct]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx - 1)] as number) < 0x80) {
						break
					}
				}
				break
			}
			case 1:
			{
				iNdEx = iNdEx + (8)
				break
			}
			case 2:
			{
				let length: number = 0
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowStruct]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthStruct]
				}
				iNdEx = iNdEx + (length)
				break
			}
			case 3:
			{
				depth++
				break
			}
			case 4:
			{
				if (depth == 0) {
					return [0, ErrUnexpectedEndOfGroupStruct]
				}
				depth--
				break
			}
			case 5:
			{
				iNdEx = iNdEx + (4)
				break
			}
			default:
			{
				return [0, fmt.Errorf("proto: illegal wireType %d", $.basicInterfaceValue(wireType, "int"))]
				break
			}
		}
		if (iNdEx < 0) {
			return [0, ErrInvalidLengthStruct]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthStruct: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthStruct(__goscriptValue: $.GoError): void {
	ErrInvalidLengthStruct = __goscriptValue
}

export let ErrIntOverflowStruct: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowStruct(__goscriptValue: $.GoError): void {
	ErrIntOverflowStruct = __goscriptValue
}

export let ErrUnexpectedEndOfGroupStruct: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupStruct(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupStruct = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({EnumDescriptor: (receiver: any, ...args: any[]) => (NullValue_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (NullValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), XXX_WellKnownType: (receiver: any, ...args: any[]) => (NullValue_XXX_WellKnownType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "types.NullValue"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
