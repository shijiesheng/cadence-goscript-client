// Generated file based on source_context.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "./protosize.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.SourceContext", "types.randySourceContext"])

export type randySourceContext = {
	Float32(): number
	Float64(): number
	Int31(): number
	Int63(): bigint
	Intn(n: number): number
	Uint32(): number
}

$.registerInterfaceType(
	"types.randySourceContext",
	null,
	[{ name: "Float32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float32") }] }, { name: "Float64", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "Int31", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }] }, { name: "Int63", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }, { name: "Intn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Uint32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint32") }] }]
);

export class SourceContext {
	// The path-qualified name of the .proto file that contained the associated
	// protobuf element.  For example: `"google/protobuf/source_context.proto"`.
	public get FileName(): string {
		return this._fields.FileName
	}

	public set FileName(value: string) {
		this._fields.FileName = value
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
		FileName: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FileName?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FileName: init?.FileName ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SourceContext {
		return new SourceContext(this, true)
	}

	public __goscriptAssign(source: SourceContext): void {
		const target = this._fields
		const values = source._fields
		target.FileName = values.FileName
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: SourceContext | $.VarRef<SourceContext> | null = this;
		const _this$: SourceContext = _this == null ? $.pointerTarget<SourceContext>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<SourceContext>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<SourceContext | $.VarRef<SourceContext> | null>(that, /* @__PURE__ */ $.pointerType("types.SourceContext"))
		let that1: SourceContext | $.VarRef<SourceContext> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<SourceContext>(that, "types.SourceContext")
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
		if (!$.stringEqual((_this$ as SourceContext).FileName, $.pointerValue<SourceContext>(that1).FileName)) {
			if ($.stringCompare((_this$ as SourceContext).FileName, $.pointerValue<SourceContext>(that1).FileName) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as SourceContext).XXX_unrecognized, $.pointerValue<SourceContext>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_b686cdb126d509db, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: SourceContext | $.VarRef<SourceContext> | null = this;
		const _this$: SourceContext = _this == null ? $.pointerTarget<SourceContext>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<SourceContext>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<SourceContext | $.VarRef<SourceContext> | null>(that, /* @__PURE__ */ $.pointerType("types.SourceContext"))
		let that1: SourceContext | $.VarRef<SourceContext> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<SourceContext>(that, "types.SourceContext")
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
		if (!$.stringEqual((_this$ as SourceContext).FileName, $.pointerValue<SourceContext>(that1).FileName)) {
			return false
		}
		if (!bytes.Equal((_this$ as SourceContext).XXX_unrecognized, $.pointerValue<SourceContext>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetFileName(): string {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		if (m != null) {
			return $.pointerValue<SourceContext>(m).FileName
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: SourceContext | $.VarRef<SourceContext> | null = this;
		const _this$: SourceContext = _this == null ? $.pointerTarget<SourceContext>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<SourceContext>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.SourceContext{")
		s = $.appendOne(s, $.concatString(($.concatString("FileName: ", await fmt.Sprintf("%#v", (_this$ as SourceContext).FileName))), ",\n"))
		if ((_this$ as SourceContext).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as SourceContext).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).Size() : SourceContext.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SourceContext.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).Size() : SourceContext.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SourceContext.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		const m$: SourceContext = m == null ? $.pointerTarget<SourceContext>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SourceContext>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SourceContext).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SourceContext).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SourceContext).XXX_unrecognized)
		}
		if ($.stringLen((m$ as SourceContext).FileName) > 0) {
			i = i - ($.stringLen((m$ as SourceContext).FileName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SourceContext).FileName)
			i = encodeVarintSourceContext(dAtA, i, $.uint64($.stringLen((m$ as SourceContext).FileName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).Size() : SourceContext.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: SourceContext | $.VarRef<SourceContext> | null = this;
		$.assignStruct($.pointerValue<SourceContext>(m), $.markAsStructValue(new SourceContext()))
	}

	public Size(): number {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		let n: number = 0
		const m$: SourceContext = m == null ? $.pointerTarget<SourceContext>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SourceContext>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as SourceContext).FileName)
		if (l > 0) {
			n = n + ((1 + l) + sovSourceContext($.uint64(l)))
		}
		if ((m$ as SourceContext).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SourceContext).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: SourceContext | $.VarRef<SourceContext> | null = this;
		const _this$: SourceContext = _this == null ? $.pointerTarget<SourceContext>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<SourceContext>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&SourceContext{", $.concatString(($.concatString("FileName:", fmt.Sprintf("%v", (_this$ as SourceContext).FileName))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as SourceContext).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SourceContext | $.VarRef<SourceContext> | null = this;
		const m$: SourceContext = m == null ? $.pointerTarget<SourceContext>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SourceContext>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowSourceContext
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
				return fmt.Errorf("proto: SourceContext: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SourceContext: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FileName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowSourceContext
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthSourceContext
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthSourceContext
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SourceContext).FileName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipSourceContext($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthSourceContext
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SourceContext).XXX_unrecognized = $.appendSlice((m$ as SourceContext).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		xxx_messageInfo_SourceContext.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SourceContext.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).MarshalToSizedBuffer(b) : SourceContext.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		xxx_messageInfo_SourceContext.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.SourceContext"
	}

	public XXX_Size(): number {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).Size() : SourceContext.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SourceContext | $.VarRef<SourceContext> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SourceContext).Unmarshal(b) : SourceContext.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.SourceContext",
		() => new SourceContext(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFileName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		SourceContext,
		() => [{ name: "FileName", key: "FileName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=file_name,json=fileName,proto3\" json:\"file_name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_SourceContext: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SourceContext(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SourceContext.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")), "google.protobuf.SourceContext")
}

function __goscriptInit1(): void {
	proto.RegisterFile("google/protobuf/source_context.proto", fileDescriptor_b686cdb126d509db)
}

export let fileDescriptor_b686cdb126d509db: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 82, 73, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 206, 47, 45, 74, 78, 141, 79, 206, 207, 43, 73, 173, 40, 209, 3, 139, 11, 241, 67, 84, 233, 193, 84, 41, 233, 112, 241, 6, 131, 21, 58, 67, 212, 9, 73, 115, 113, 166, 101, 230, 164, 198, 231, 37, 230, 166, 74, 48, 42, 48, 106, 112, 6, 113, 128, 4, 252, 18, 115, 83, 157, 58, 25, 111, 60, 148, 99, 248, 240, 80, 142, 241, 199, 67, 57, 198, 134, 71, 114, 140, 43, 30, 201, 49, 158, 120, 36, 199, 120, 225, 145, 28, 227, 131, 71, 114, 140, 47, 30, 201, 49, 124, 0, 137, 63, 150, 99, 60, 241, 88, 142, 145, 75, 56, 57, 63, 87, 15, 205, 86, 39, 33, 20, 59, 3, 64, 194, 1, 140, 81, 172, 37, 149, 5, 169, 197, 139, 152, 152, 221, 3, 156, 86, 49, 201, 185, 67, 52, 5, 64, 53, 233, 133, 167, 230, 228, 120, 231, 229, 151, 231, 133, 128, 148, 37, 177, 129, 77, 51, 6, 4, 0, 0, 255, 255, 184, 55, 42, 161, 249, 0, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_b686cdb126d509db(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_b686cdb126d509db = __goscriptValue
}

export async function valueToGoStringSourceContext(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintSourceContext(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovSourceContext(v))
	let base = offset
	for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedSourceContext(r: randySourceContext | null, easy: boolean): globalThis.Promise<SourceContext | $.VarRef<SourceContext> | null> {
	let _this: SourceContext | $.VarRef<SourceContext> | null = new SourceContext()
	let _this$: SourceContext = _this == null ? $.pointerTarget<SourceContext>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<SourceContext>(_this);
	;(_this$ as SourceContext).FileName = await randStringSourceContext(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as SourceContext).XXX_unrecognized = await randUnrecognizedSourceContext(r, 2)
	}
	return _this
}

export async function randUTF8RuneSourceContext(r: randySourceContext | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringSourceContext(r: randySourceContext | null): globalThis.Promise<string> {
	let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v1, undefined, "number")
	for (let __goscriptSliceWindow2 = $.sliceRange(tmps), i = 0; i < v1; i++) {
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = await randUTF8RuneSourceContext(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedSourceContext(r: randySourceContext | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldSourceContext(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldSourceContext(dAtA: $.Slice<number>, r: randySourceContext | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateSourceContext(dAtA, $.uint64(key))
			let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v2 = $.int64Mul(v2, -1n)
			}
			dAtA = encodeVarintPopulateSourceContext(dAtA, $.uint64(v2))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateSourceContext(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateSourceContext(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateSourceContext(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateSourceContext(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randySourceContext, null>) : $.pointerValue<Exclude<randySourceContext, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateSourceContext(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovSourceContext(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozSourceContext(x: bigint): number {
	let n: number = 0
	return sovSourceContext($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringSourceContext(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipSourceContext(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowSourceContext]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
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
						return [0, ErrIntOverflowSourceContext]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowSourceContext]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthSourceContext]
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
					return [0, ErrUnexpectedEndOfGroupSourceContext]
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
			return [0, ErrInvalidLengthSourceContext]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthSourceContext: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthSourceContext(__goscriptValue: $.GoError): void {
	ErrInvalidLengthSourceContext = __goscriptValue
}

export let ErrIntOverflowSourceContext: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowSourceContext(__goscriptValue: $.GoError): void {
	ErrIntOverflowSourceContext = __goscriptValue
}

export let ErrUnexpectedEndOfGroupSourceContext: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupSourceContext(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupSourceContext = __goscriptValue
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
