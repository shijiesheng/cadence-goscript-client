// Generated file based on type.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_any_pb from "./any.pb.gs.ts"

import * as __goscript_protosize from "./protosize.gs.ts"

import * as __goscript_source_context_pb from "./source_context.pb.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./any.pb.gs.ts"
import "./protosize.gs.ts"
import "./source_context.pb.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.Syntax", "types.Field_Kind", "types.Field_Cardinality", "types.Type", "types.Field", "types.Enum", "types.EnumValue", "types.Option", "types.randyType"])

export type Syntax = number

$.registerNamedValueType(
	"types.Syntax",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Syntax_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Syntax_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*types.Syntax",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Syntax_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Syntax_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Field_Kind = number

$.registerNamedValueType(
	"types.Field_Kind",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Field_Kind_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Field_Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*types.Field_Kind",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Field_Kind_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Field_Kind_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Field_Cardinality = number

$.registerNamedValueType(
	"types.Field_Cardinality",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Field_Cardinality_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Field_Cardinality_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*types.Field_Cardinality",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (Field_Cardinality_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Field_Cardinality_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type randyType = {
	Float32(): number
	Float64(): number
	Int31(): number
	Int63(): bigint
	Intn(n: number): number
	Uint32(): number
}

$.registerInterfaceType(
	"types.randyType",
	null,
	[{ name: "Float32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float32") }] }, { name: "Float64", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "Int31", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }] }, { name: "Int63", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }, { name: "Intn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Uint32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint32") }] }]
);

export class Type {
	// The fully qualified message name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// The list of fields.
	public get Fields(): $.Slice<Field | $.VarRef<Field> | null> {
		return this._fields.Fields
	}

	public set Fields(value: $.Slice<Field | $.VarRef<Field> | null>) {
		this._fields.Fields = value
	}

	// The list of types appearing in `oneof` definitions in this type.
	public get Oneofs(): $.Slice<string> {
		return this._fields.Oneofs
	}

	public set Oneofs(value: $.Slice<string>) {
		this._fields.Oneofs = value
	}

	// The protocol buffer options.
	public get Options(): $.Slice<Option | $.VarRef<Option> | null> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<Option | $.VarRef<Option> | null>) {
		this._fields.Options = value
	}

	// The source context.
	public get SourceContext(): __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null {
		return this._fields.SourceContext
	}

	public set SourceContext(value: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null) {
		this._fields.SourceContext = value
	}

	// The source syntax.
	public get Syntax(): Syntax {
		return this._fields.Syntax
	}

	public set Syntax(value: Syntax) {
		this._fields.Syntax = value
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
		Name: string
		Fields: $.Slice<Field | $.VarRef<Field> | null>
		Oneofs: $.Slice<string>
		Options: $.Slice<Option | $.VarRef<Option> | null>
		SourceContext: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null
		Syntax: Syntax
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, Fields?: $.Slice<Field | $.VarRef<Field> | null>, Oneofs?: $.Slice<string>, Options?: $.Slice<Option | $.VarRef<Option> | null>, SourceContext?: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null, Syntax?: Syntax, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Fields: init?.Fields ?? (null! as $.Slice<Field | $.VarRef<Field> | null>),
			Oneofs: init?.Oneofs ?? (null! as $.Slice<string>),
			Options: init?.Options ?? (null! as $.Slice<Option | $.VarRef<Option> | null>),
			SourceContext: init?.SourceContext ?? (null! as __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null),
			Syntax: init?.Syntax ?? (0 as Syntax),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Type {
		return new Type(this, true)
	}

	public __goscriptAssign(source: Type): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Fields = values.Fields
		target.Oneofs = values.Oneofs
		target.Options = values.Options
		target.SourceContext = values.SourceContext
		target.Syntax = values.Syntax
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Type | $.VarRef<Type> | null = this;
		const _this$: Type = _this == null ? $.pointerTarget<Type>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Type>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<Type | $.VarRef<Type> | null>(that, /* @__PURE__ */ $.pointerType("types.Type"))
		let that1: Type | $.VarRef<Type> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<Type>(that, "types.Type")
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
		if (!$.stringEqual((_this$ as Type).Name, $.pointerValue<Type>(that1).Name)) {
			if ($.stringCompare((_this$ as Type).Name, $.pointerValue<Type>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		if ($.sliceLen((_this$ as Type).Fields) != $.sliceLen($.pointerValue<Type>(that1).Fields)) {
			if ($.sliceLen((_this$ as Type).Fields) < $.sliceLen($.pointerValue<Type>(that1).Fields)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget0 = (_this$ as Type).Fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			{
				let c = Field.prototype.Compare.call($.arrayIndex((_this$ as Type).Fields!, i), $.interfaceValue($.arrayIndex($.pointerValue<Type>(that1).Fields!, i), "*types.Field", /* @__PURE__ */ $.pointerType("types.Field")))
				if (c != 0) {
					return c
				}
			}
		}
		if ($.sliceLen((_this$ as Type).Oneofs) != $.sliceLen($.pointerValue<Type>(that1).Oneofs)) {
			if ($.sliceLen((_this$ as Type).Oneofs) < $.sliceLen($.pointerValue<Type>(that1).Oneofs)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget1 = (_this$ as Type).Oneofs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if (!$.stringEqual($.arrayIndex((_this$ as Type).Oneofs!, i), $.arrayIndex($.pointerValue<Type>(that1).Oneofs!, i))) {
				if ($.stringCompare($.arrayIndex((_this$ as Type).Oneofs!, i), $.arrayIndex($.pointerValue<Type>(that1).Oneofs!, i)) < 0) {
					return -1
				}
				return 1
			}
		}
		if ($.sliceLen((_this$ as Type).Options) != $.sliceLen($.pointerValue<Type>(that1).Options)) {
			if ($.sliceLen((_this$ as Type).Options) < $.sliceLen($.pointerValue<Type>(that1).Options)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget2 = (_this$ as Type).Options, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			{
				let c = Option.prototype.Compare.call($.arrayIndex((_this$ as Type).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Type>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = __goscript_source_context_pb.SourceContext.prototype.Compare.call((_this$ as Type).SourceContext, $.interfaceValue($.pointerValue<Type>(that1).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")))
			if (c != 0) {
				return c
			}
		}
		if ((_this$ as Type).Syntax != $.pointerValue<Type>(that1).Syntax) {
			if ((_this$ as Type).Syntax < $.pointerValue<Type>(that1).Syntax) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Type).XXX_unrecognized, $.pointerValue<Type>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: Type | $.VarRef<Type> | null = this;
		const _this$: Type = _this == null ? $.pointerTarget<Type>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Type>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<Type | $.VarRef<Type> | null>(that, /* @__PURE__ */ $.pointerType("types.Type"))
		let that1: Type | $.VarRef<Type> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<Type>(that, "types.Type")
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
		if (!$.stringEqual((_this$ as Type).Name, $.pointerValue<Type>(that1).Name)) {
			return false
		}
		if ($.sliceLen((_this$ as Type).Fields) != $.sliceLen($.pointerValue<Type>(that1).Fields)) {
			return false
		}
		for (let __goscriptRangeTarget3 = (_this$ as Type).Fields, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			if (!Field.prototype.Equal.call($.arrayIndex((_this$ as Type).Fields!, i), $.interfaceValue($.arrayIndex($.pointerValue<Type>(that1).Fields!, i), "*types.Field", /* @__PURE__ */ $.pointerType("types.Field")))) {
				return false
			}
		}
		if ($.sliceLen((_this$ as Type).Oneofs) != $.sliceLen($.pointerValue<Type>(that1).Oneofs)) {
			return false
		}
		for (let __goscriptRangeTarget4 = (_this$ as Type).Oneofs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			if (!$.stringEqual($.arrayIndex((_this$ as Type).Oneofs!, i), $.arrayIndex($.pointerValue<Type>(that1).Oneofs!, i))) {
				return false
			}
		}
		if ($.sliceLen((_this$ as Type).Options) != $.sliceLen($.pointerValue<Type>(that1).Options)) {
			return false
		}
		for (let __goscriptRangeTarget5 = (_this$ as Type).Options, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			if (!Option.prototype.Equal.call($.arrayIndex((_this$ as Type).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Type>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))) {
				return false
			}
		}
		if (!__goscript_source_context_pb.SourceContext.prototype.Equal.call((_this$ as Type).SourceContext, $.interfaceValue($.pointerValue<Type>(that1).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")))) {
			return false
		}
		if ((_this$ as Type).Syntax != $.pointerValue<Type>(that1).Syntax) {
			return false
		}
		if (!bytes.Equal((_this$ as Type).XXX_unrecognized, $.pointerValue<Type>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetFields(): $.Slice<Field | $.VarRef<Field> | null> {
		const m: Type | $.VarRef<Type> | null = this;
		if (m != null) {
			return $.pointerValue<Type>(m).Fields
		}
		return null
	}

	public GetName(): string {
		const m: Type | $.VarRef<Type> | null = this;
		if (m != null) {
			return $.pointerValue<Type>(m).Name
		}
		return ""
	}

	public GetOneofs(): $.Slice<string> {
		const m: Type | $.VarRef<Type> | null = this;
		if (m != null) {
			return $.pointerValue<Type>(m).Oneofs
		}
		return null
	}

	public GetOptions(): $.Slice<Option | $.VarRef<Option> | null> {
		const m: Type | $.VarRef<Type> | null = this;
		if (m != null) {
			return $.pointerValue<Type>(m).Options
		}
		return null
	}

	public GetSourceContext(): __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null {
		const m: Type | $.VarRef<Type> | null = this;
		if (m != null) {
			return $.pointerValue<Type>(m).SourceContext
		}
		return null
	}

	public GetSyntax(): Syntax {
		const m: Type | $.VarRef<Type> | null = this;
		if (m != null) {
			return $.pointerValue<Type>(m).Syntax
		}
		return 0
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Type | $.VarRef<Type> | null = this;
		const _this$: Type = _this == null ? $.pointerTarget<Type>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Type>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 10, "string")
		s = $.appendOne(s, "&types.Type{")
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as Type).Name))), ",\n"))
		if ((_this$ as Type).Fields != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Fields: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Type).Fields, "[]*types.Field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Field")))))), ",\n"))
		}
		s = $.appendOne(s, $.concatString(($.concatString("Oneofs: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Type).Oneofs, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))), ",\n"))
		if ((_this$ as Type).Options != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Options: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Type).Options, "[]*types.Option", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")))))), ",\n"))
		}
		if ((_this$ as Type).SourceContext != null) {
			s = $.appendOne(s, $.concatString(($.concatString("SourceContext: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Type).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext"))))), ",\n"))
		}
		s = $.appendOne(s, $.concatString(($.concatString("Syntax: ", await fmt.Sprintf("%#v", $.namedValueInterfaceValue<any>((_this$ as Type).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ",\n"))
		if ((_this$ as Type).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Type).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Type | $.VarRef<Type> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).Size() : Type.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Type.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Type | $.VarRef<Type> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).Size() : Type.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Type.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Type | $.VarRef<Type> | null = this;
		const m$: Type = m == null ? $.pointerTarget<Type>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Type>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Type).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Type).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Type).XXX_unrecognized)
		}
		if ((m$ as Type).Syntax != 0) {
			i = encodeVarintType(dAtA, i, $.uint64((m$ as Type).Syntax))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as Type).SourceContext != null) {
			{
				let [size, err] = __goscript_source_context_pb.SourceContext.prototype.MarshalToSizedBuffer.call((m$ as Type).SourceContext, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintType(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.sliceLen((m$ as Type).Options) > 0) {
			for (let __goscriptSliceWindow0 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Type).Options) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Option.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Type).Options!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintType(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = 0x22
			}
		}
		if ($.sliceLen((m$ as Type).Oneofs) > 0) {
			for (let __goscriptSliceWindow1 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Type).Oneofs) - 1; iNdEx >= 0; iNdEx--) {
				i = i - ($.stringLen($.arrayIndex((m$ as Type).Oneofs!, iNdEx)))
				$.copy($.goSlice(dAtA, i, undefined), $.arrayIndex((m$ as Type).Oneofs!, iNdEx))
				i = encodeVarintType(dAtA, i, $.uint64($.stringLen($.arrayIndex((m$ as Type).Oneofs!, iNdEx))))
				i--;
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = 0x1a
			}
		}
		if ($.sliceLen((m$ as Type).Fields) > 0) {
			for (let __goscriptSliceWindow2 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Type).Fields) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Field.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Type).Fields!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintType(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = 0x12
			}
		}
		if ($.stringLen((m$ as Type).Name) > 0) {
			i = i - ($.stringLen((m$ as Type).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Type).Name)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as Type).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Type | $.VarRef<Type> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).Size() : Type.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Type | $.VarRef<Type> | null = this;
		$.assignStruct($.pointerValue<Type>(m), $.markAsStructValue(new Type()))
	}

	public Size(): number {
		const m: Type | $.VarRef<Type> | null = this;
		let n: number = 0
		const m$: Type = m == null ? $.pointerTarget<Type>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Type>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Type).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ($.sliceLen((m$ as Type).Fields) > 0) {
			for (let __goscriptRangeTarget6 = (m$ as Type).Fields, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Field | $.VarRef<Field> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Field).Size() : Field.prototype.Size.call(e))
				n = n + ((1 + l) + sovType($.uint64(l)))
			}
		}
		if ($.sliceLen((m$ as Type).Oneofs) > 0) {
			for (let __goscriptRangeTarget7 = (m$ as Type).Oneofs, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as string)
				l = $.stringLen(s)
				n = n + ((1 + l) + sovType($.uint64(l)))
			}
		}
		if ($.sliceLen((m$ as Type).Options) > 0) {
			for (let __goscriptRangeTarget8 = (m$ as Type).Options, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Option).Size() : Option.prototype.Size.call(e))
				n = n + ((1 + l) + sovType($.uint64(l)))
			}
		}
		if ((m$ as Type).SourceContext != null) {
			l = __goscript_source_context_pb.SourceContext.prototype.Size.call((m$ as Type).SourceContext)
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ((m$ as Type).Syntax != 0) {
			n = n + (1 + sovType($.uint64((m$ as Type).Syntax)))
		}
		if ((m$ as Type).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Type).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Type | $.VarRef<Type> | null = this;
		const _this$: Type = _this == null ? $.pointerTarget<Type>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Type>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForFields = "[]*Field{"
		for (let __goscriptRangeTarget9 = (_this$ as Type).Fields, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as Field | $.VarRef<Field> | null)
			repeatedStringForFields = $.concatString(repeatedStringForFields, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Field).String() : Field.prototype.String.call(f)), "Field", "Field", 1), ","))
		}
		repeatedStringForFields = $.concatString(repeatedStringForFields, "}")
		let repeatedStringForOptions = "[]*Option{"
		for (let __goscriptRangeTarget10 = (_this$ as Type).Options, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
			repeatedStringForOptions = $.concatString(repeatedStringForOptions, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Option).String() : Option.prototype.String.call(f)), "Option", "Option", 1), ","))
		}
		repeatedStringForOptions = $.concatString(repeatedStringForOptions, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Type{", $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as Type).Name))), ","), $.concatString(($.concatString("Fields:", repeatedStringForFields)), ","), $.concatString(($.concatString("Oneofs:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Type).Oneofs, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))), ","), $.concatString(($.concatString("Options:", repeatedStringForOptions)), ","), $.concatString(($.concatString("SourceContext:", strings.Replace(fmt.Sprintf("%v", $.interfaceValue((_this$ as Type).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext"))), "SourceContext", "SourceContext", 1))), ","), $.concatString(($.concatString("Syntax:", fmt.Sprintf("%v", $.namedValueInterfaceValue<any>((_this$ as Type).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Type).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Type | $.VarRef<Type> | null = this;
		const m$: Type = m == null ? $.pointerTarget<Type>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Type>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowType
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
				return fmt.Errorf("proto: Type: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Type: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Type).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Fields", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
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
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Type).Fields = $.appendOne((m$ as Type).Fields, new Field(), $.appendZeros.nil)
					{
						let err = Field.prototype.Unmarshal.call($.arrayIndex((m$ as Type).Fields!, $.sliceLen((m$ as Type).Fields) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Oneofs", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Type).Oneofs = $.appendOne((m$ as Type).Oneofs, $.bytesToString($.goSlice(dAtA, iNdEx, postIndex)))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Options", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
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
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Type).Options = $.appendOne((m$ as Type).Options, new Option(), $.appendZeros.nil)
					{
						let err = Option.prototype.Unmarshal.call($.arrayIndex((m$ as Type).Options!, $.sliceLen((m$ as Type).Options) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SourceContext", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
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
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Type).SourceContext == null) {
						;(m$ as Type).SourceContext = new __goscript_source_context_pb.SourceContext()
					}
					{
						let err = __goscript_source_context_pb.SourceContext.prototype.Unmarshal.call((m$ as Type).SourceContext, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Syntax", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Type).Syntax = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as Type).Syntax = (m$ as Type).Syntax | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipType($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthType
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Type).XXX_unrecognized = $.appendSlice((m$ as Type).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Type | $.VarRef<Type> | null = this;
		xxx_messageInfo_Type.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Type", /* @__PURE__ */ $.pointerType("types.Type")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Type | $.VarRef<Type> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Type.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Type", /* @__PURE__ */ $.pointerType("types.Type")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).MarshalToSizedBuffer(b) : Type.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Type | $.VarRef<Type> | null = this;
		xxx_messageInfo_Type.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Type", /* @__PURE__ */ $.pointerType("types.Type")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Type"
	}

	public XXX_Size(): number {
		const m: Type | $.VarRef<Type> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).Size() : Type.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Type | $.VarRef<Type> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Type).Unmarshal(b) : Type.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.Type",
		() => new Type(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFields", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Field")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOneofs", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")) }], pointerReceiver: true }, { name: "GetSourceContext", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.SourceContext") }], pointerReceiver: true }, { name: "GetSyntax", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "types.Syntax") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Type,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Fields", key: "Fields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Field")), tag: "protobuf:\"bytes,2,rep,name=fields,proto3\" json:\"fields,omitempty\"" }, { name: "Oneofs", key: "Oneofs", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,rep,name=oneofs,proto3\" json:\"oneofs,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")), tag: "protobuf:\"bytes,4,rep,name=options,proto3\" json:\"options,omitempty\"" }, { name: "SourceContext", key: "SourceContext", type: /* @__PURE__ */ $.pointerType("types.SourceContext"), tag: "protobuf:\"bytes,5,opt,name=source_context,json=sourceContext,proto3\" json:\"source_context,omitempty\"" }, { name: "Syntax", key: "Syntax", type: /* @__PURE__ */ $.basicType("int32", "types.Syntax"), tag: "protobuf:\"varint,6,opt,name=syntax,proto3,enum=google.protobuf.Syntax\" json:\"syntax,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Field {
	// The field type.
	public get Kind(): Field_Kind {
		return this._fields.Kind
	}

	public set Kind(value: Field_Kind) {
		this._fields.Kind = value
	}

	// The field cardinality.
	public get Cardinality(): Field_Cardinality {
		return this._fields.Cardinality
	}

	public set Cardinality(value: Field_Cardinality) {
		this._fields.Cardinality = value
	}

	// The field number.
	public get Number(): number {
		return this._fields.Number
	}

	public set Number(value: number) {
		this._fields.Number = value
	}

	// The field name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// The field type URL, without the scheme, for message or enumeration
	// types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
	public get TypeUrl(): string {
		return this._fields.TypeUrl
	}

	public set TypeUrl(value: string) {
		this._fields.TypeUrl = value
	}

	// The index of the field type in `Type.oneofs`, for message or enumeration
	// types. The first type has index 1; zero means the type is not in the list.
	public get OneofIndex(): number {
		return this._fields.OneofIndex
	}

	public set OneofIndex(value: number) {
		this._fields.OneofIndex = value
	}

	// Whether to use alternative packed wire representation.
	public get Packed(): boolean {
		return this._fields.Packed
	}

	public set Packed(value: boolean) {
		this._fields.Packed = value
	}

	// The protocol buffer options.
	public get Options(): $.Slice<Option | $.VarRef<Option> | null> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<Option | $.VarRef<Option> | null>) {
		this._fields.Options = value
	}

	// The field JSON name.
	public get JsonName(): string {
		return this._fields.JsonName
	}

	public set JsonName(value: string) {
		this._fields.JsonName = value
	}

	// The string value of the default value of this field. Proto2 syntax only.
	public get DefaultValue(): string {
		return this._fields.DefaultValue
	}

	public set DefaultValue(value: string) {
		this._fields.DefaultValue = value
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
		Kind: Field_Kind
		Cardinality: Field_Cardinality
		Number: number
		Name: string
		TypeUrl: string
		OneofIndex: number
		Packed: boolean
		Options: $.Slice<Option | $.VarRef<Option> | null>
		JsonName: string
		DefaultValue: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Kind?: Field_Kind, Cardinality?: Field_Cardinality, Number?: number, Name?: string, TypeUrl?: string, OneofIndex?: number, Packed?: boolean, Options?: $.Slice<Option | $.VarRef<Option> | null>, JsonName?: string, DefaultValue?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Kind: init?.Kind ?? (0 as Field_Kind),
			Cardinality: init?.Cardinality ?? (0 as Field_Cardinality),
			Number: init?.Number ?? (0 as number),
			Name: init?.Name ?? ("" as string),
			TypeUrl: init?.TypeUrl ?? ("" as string),
			OneofIndex: init?.OneofIndex ?? (0 as number),
			Packed: init?.Packed ?? (false as boolean),
			Options: init?.Options ?? (null! as $.Slice<Option | $.VarRef<Option> | null>),
			JsonName: init?.JsonName ?? ("" as string),
			DefaultValue: init?.DefaultValue ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Field {
		return new Field(this, true)
	}

	public __goscriptAssign(source: Field): void {
		const target = this._fields
		const values = source._fields
		target.Kind = values.Kind
		target.Cardinality = values.Cardinality
		target.Number = values.Number
		target.Name = values.Name
		target.TypeUrl = values.TypeUrl
		target.OneofIndex = values.OneofIndex
		target.Packed = values.Packed
		target.Options = values.Options
		target.JsonName = values.JsonName
		target.DefaultValue = values.DefaultValue
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Field | $.VarRef<Field> | null = this;
		const _this$: Field = _this == null ? $.pointerTarget<Field>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Field>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple5: any = $.typeAssertTuple<Field | $.VarRef<Field> | null>(that, /* @__PURE__ */ $.pointerType("types.Field"))
		let that1: Field | $.VarRef<Field> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			let __goscriptTuple6: any = $.typeAssertTuple<Field>(that, "types.Field")
			let that2 = $.varRef(__goscriptTuple6[0])
			let __goscriptShadow2 = __goscriptTuple6[1]
			if (__goscriptShadow2) {
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
		if ((_this$ as Field).Kind != $.pointerValue<Field>(that1).Kind) {
			if ((_this$ as Field).Kind < $.pointerValue<Field>(that1).Kind) {
				return -1
			}
			return 1
		}
		if ((_this$ as Field).Cardinality != $.pointerValue<Field>(that1).Cardinality) {
			if ((_this$ as Field).Cardinality < $.pointerValue<Field>(that1).Cardinality) {
				return -1
			}
			return 1
		}
		if ((_this$ as Field).Number != $.pointerValue<Field>(that1).Number) {
			if ((_this$ as Field).Number < $.pointerValue<Field>(that1).Number) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Field).Name, $.pointerValue<Field>(that1).Name)) {
			if ($.stringCompare((_this$ as Field).Name, $.pointerValue<Field>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Field).TypeUrl, $.pointerValue<Field>(that1).TypeUrl)) {
			if ($.stringCompare((_this$ as Field).TypeUrl, $.pointerValue<Field>(that1).TypeUrl) < 0) {
				return -1
			}
			return 1
		}
		if ((_this$ as Field).OneofIndex != $.pointerValue<Field>(that1).OneofIndex) {
			if ((_this$ as Field).OneofIndex < $.pointerValue<Field>(that1).OneofIndex) {
				return -1
			}
			return 1
		}
		if ((_this$ as Field).Packed != $.pointerValue<Field>(that1).Packed) {
			if (!(_this$ as Field).Packed) {
				return -1
			}
			return 1
		}
		if ($.sliceLen((_this$ as Field).Options) != $.sliceLen($.pointerValue<Field>(that1).Options)) {
			if ($.sliceLen((_this$ as Field).Options) < $.sliceLen($.pointerValue<Field>(that1).Options)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget11 = (_this$ as Field).Options, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), i = 0; i < __goscriptRangeWindow11.length; i++) {
			{
				let c = Option.prototype.Compare.call($.arrayIndex((_this$ as Field).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Field>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))
				if (c != 0) {
					return c
				}
			}
		}
		if (!$.stringEqual((_this$ as Field).JsonName, $.pointerValue<Field>(that1).JsonName)) {
			if ($.stringCompare((_this$ as Field).JsonName, $.pointerValue<Field>(that1).JsonName) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Field).DefaultValue, $.pointerValue<Field>(that1).DefaultValue)) {
			if ($.stringCompare((_this$ as Field).DefaultValue, $.pointerValue<Field>(that1).DefaultValue) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Field).XXX_unrecognized, $.pointerValue<Field>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([1])]
	}

	public Equal(that: any): boolean {
		const _this: Field | $.VarRef<Field> | null = this;
		const _this$: Field = _this == null ? $.pointerTarget<Field>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Field>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple7: any = $.typeAssertTuple<Field | $.VarRef<Field> | null>(that, /* @__PURE__ */ $.pointerType("types.Field"))
		let that1: Field | $.VarRef<Field> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			let __goscriptTuple8: any = $.typeAssertTuple<Field>(that, "types.Field")
			let that2 = $.varRef(__goscriptTuple8[0])
			let __goscriptShadow3 = __goscriptTuple8[1]
			if (__goscriptShadow3) {
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
		if ((_this$ as Field).Kind != $.pointerValue<Field>(that1).Kind) {
			return false
		}
		if ((_this$ as Field).Cardinality != $.pointerValue<Field>(that1).Cardinality) {
			return false
		}
		if ((_this$ as Field).Number != $.pointerValue<Field>(that1).Number) {
			return false
		}
		if (!$.stringEqual((_this$ as Field).Name, $.pointerValue<Field>(that1).Name)) {
			return false
		}
		if (!$.stringEqual((_this$ as Field).TypeUrl, $.pointerValue<Field>(that1).TypeUrl)) {
			return false
		}
		if ((_this$ as Field).OneofIndex != $.pointerValue<Field>(that1).OneofIndex) {
			return false
		}
		if ((_this$ as Field).Packed != $.pointerValue<Field>(that1).Packed) {
			return false
		}
		if ($.sliceLen((_this$ as Field).Options) != $.sliceLen($.pointerValue<Field>(that1).Options)) {
			return false
		}
		for (let __goscriptRangeTarget12 = (_this$ as Field).Options, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), i = 0; i < __goscriptRangeWindow12.length; i++) {
			if (!Option.prototype.Equal.call($.arrayIndex((_this$ as Field).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Field>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))) {
				return false
			}
		}
		if (!$.stringEqual((_this$ as Field).JsonName, $.pointerValue<Field>(that1).JsonName)) {
			return false
		}
		if (!$.stringEqual((_this$ as Field).DefaultValue, $.pointerValue<Field>(that1).DefaultValue)) {
			return false
		}
		if (!bytes.Equal((_this$ as Field).XXX_unrecognized, $.pointerValue<Field>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetCardinality(): Field_Cardinality {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).Cardinality
		}
		return 0
	}

	public GetDefaultValue(): string {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).DefaultValue
		}
		return ""
	}

	public GetJsonName(): string {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).JsonName
		}
		return ""
	}

	public GetKind(): Field_Kind {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).Kind
		}
		return 0
	}

	public GetName(): string {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).Name
		}
		return ""
	}

	public GetNumber(): number {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).Number
		}
		return 0
	}

	public GetOneofIndex(): number {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).OneofIndex
		}
		return 0
	}

	public GetOptions(): $.Slice<Option | $.VarRef<Option> | null> {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).Options
		}
		return null
	}

	public GetPacked(): boolean {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).Packed
		}
		return false
	}

	public GetTypeUrl(): string {
		const m: Field | $.VarRef<Field> | null = this;
		if (m != null) {
			return $.pointerValue<Field>(m).TypeUrl
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Field | $.VarRef<Field> | null = this;
		const _this$: Field = _this == null ? $.pointerTarget<Field>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Field>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 14, "string")
		s = $.appendOne(s, "&types.Field{")
		s = $.appendOne(s, $.concatString(($.concatString("Kind: ", await fmt.Sprintf("%#v", $.namedValueInterfaceValue<any>((_this$ as Field).Kind, "types.Field_Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Cardinality: ", await fmt.Sprintf("%#v", $.namedValueInterfaceValue<any>((_this$ as Field).Cardinality, "types.Field_Cardinality", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2())))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Number: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Field).Number, "int32")))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as Field).Name))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("TypeUrl: ", await fmt.Sprintf("%#v", (_this$ as Field).TypeUrl))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("OneofIndex: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Field).OneofIndex, "int32")))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Packed: ", await fmt.Sprintf("%#v", (_this$ as Field).Packed))), ",\n"))
		if ((_this$ as Field).Options != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Options: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Field).Options, "[]*types.Option", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")))))), ",\n"))
		}
		s = $.appendOne(s, $.concatString(($.concatString("JsonName: ", await fmt.Sprintf("%#v", (_this$ as Field).JsonName))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("DefaultValue: ", await fmt.Sprintf("%#v", (_this$ as Field).DefaultValue))), ",\n"))
		if ((_this$ as Field).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Field).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Field | $.VarRef<Field> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).Size() : Field.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Field.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Field | $.VarRef<Field> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).Size() : Field.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Field.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Field | $.VarRef<Field> | null = this;
		const m$: Field = m == null ? $.pointerTarget<Field>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Field>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Field).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Field).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Field).XXX_unrecognized)
		}
		if ($.stringLen((m$ as Field).DefaultValue) > 0) {
			i = i - ($.stringLen((m$ as Field).DefaultValue))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Field).DefaultValue)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as Field).DefaultValue)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ($.stringLen((m$ as Field).JsonName) > 0) {
			i = i - ($.stringLen((m$ as Field).JsonName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Field).JsonName)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as Field).JsonName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ($.sliceLen((m$ as Field).Options) > 0) {
			for (let __goscriptSliceWindow4 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Field).Options) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Option.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Field).Options!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintType(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = 0x4a
			}
		}
		if ((m$ as Field).Packed) {
			i--
			if ((m$ as Field).Packed) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x40
		}
		if ((m$ as Field).OneofIndex != 0) {
			i = encodeVarintType(dAtA, i, $.uint64((m$ as Field).OneofIndex))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ($.stringLen((m$ as Field).TypeUrl) > 0) {
			i = i - ($.stringLen((m$ as Field).TypeUrl))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Field).TypeUrl)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as Field).TypeUrl)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ($.stringLen((m$ as Field).Name) > 0) {
			i = i - ($.stringLen((m$ as Field).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Field).Name)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as Field).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as Field).Number != 0) {
			i = encodeVarintType(dAtA, i, $.uint64((m$ as Field).Number))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as Field).Cardinality != 0) {
			i = encodeVarintType(dAtA, i, $.uint64((m$ as Field).Cardinality))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as Field).Kind != 0) {
			i = encodeVarintType(dAtA, i, $.uint64((m$ as Field).Kind))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Field | $.VarRef<Field> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).Size() : Field.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Field | $.VarRef<Field> | null = this;
		$.assignStruct($.pointerValue<Field>(m), $.markAsStructValue(new Field()))
	}

	public Size(): number {
		const m: Field | $.VarRef<Field> | null = this;
		let n: number = 0
		const m$: Field = m == null ? $.pointerTarget<Field>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Field>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Field).Kind != 0) {
			n = n + (1 + sovType($.uint64((m$ as Field).Kind)))
		}
		if ((m$ as Field).Cardinality != 0) {
			n = n + (1 + sovType($.uint64((m$ as Field).Cardinality)))
		}
		if ((m$ as Field).Number != 0) {
			n = n + (1 + sovType($.uint64((m$ as Field).Number)))
		}
		l = $.stringLen((m$ as Field).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		l = $.stringLen((m$ as Field).TypeUrl)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ((m$ as Field).OneofIndex != 0) {
			n = n + (1 + sovType($.uint64((m$ as Field).OneofIndex)))
		}
		if ((m$ as Field).Packed) {
			n = n + (2)
		}
		if ($.sliceLen((m$ as Field).Options) > 0) {
			for (let __goscriptRangeTarget13 = (m$ as Field).Options, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Option).Size() : Option.prototype.Size.call(e))
				n = n + ((1 + l) + sovType($.uint64(l)))
			}
		}
		l = $.stringLen((m$ as Field).JsonName)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		l = $.stringLen((m$ as Field).DefaultValue)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ((m$ as Field).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Field).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Field | $.VarRef<Field> | null = this;
		const _this$: Field = _this == null ? $.pointerTarget<Field>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Field>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForOptions = "[]*Option{"
		for (let __goscriptRangeTarget14 = (_this$ as Field).Options, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
			repeatedStringForOptions = $.concatString(repeatedStringForOptions, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Option).String() : Option.prototype.String.call(f)), "Option", "Option", 1), ","))
		}
		repeatedStringForOptions = $.concatString(repeatedStringForOptions, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Field{", $.concatString(($.concatString("Kind:", fmt.Sprintf("%v", $.namedValueInterfaceValue<any>((_this$ as Field).Kind, "types.Field_Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))), ","), $.concatString(($.concatString("Cardinality:", fmt.Sprintf("%v", $.namedValueInterfaceValue<any>((_this$ as Field).Cardinality, "types.Field_Cardinality", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2())))), ","), $.concatString(($.concatString("Number:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as Field).Number, "int32")))), ","), $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as Field).Name))), ","), $.concatString(($.concatString("TypeUrl:", fmt.Sprintf("%v", (_this$ as Field).TypeUrl))), ","), $.concatString(($.concatString("OneofIndex:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as Field).OneofIndex, "int32")))), ","), $.concatString(($.concatString("Packed:", fmt.Sprintf("%v", (_this$ as Field).Packed))), ","), $.concatString(($.concatString("Options:", repeatedStringForOptions)), ","), $.concatString(($.concatString("JsonName:", fmt.Sprintf("%v", (_this$ as Field).JsonName))), ","), $.concatString(($.concatString("DefaultValue:", fmt.Sprintf("%v", (_this$ as Field).DefaultValue))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Field).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Field | $.VarRef<Field> | null = this;
		const m$: Field = m == null ? $.pointerTarget<Field>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Field>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowType
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Field: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Field: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Kind", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Field).Kind = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as Field).Kind = (m$ as Field).Kind | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Cardinality", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Field).Cardinality = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as Field).Cardinality = (m$ as Field).Cardinality | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Number", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Field).Number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as Field).Number = (m$ as Field).Number | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Field).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TypeUrl", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Field).TypeUrl = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field OneofIndex", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Field).OneofIndex = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as Field).OneofIndex = (m$ as Field).OneofIndex | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 8:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Packed", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as Field).Packed = (v != 0)
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Options", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Field).Options = $.appendOne((m$ as Field).Options, new Option(), $.appendZeros.nil)
					{
						let err = Option.prototype.Unmarshal.call($.arrayIndex((m$ as Field).Options!, $.sliceLen((m$ as Field).Options) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field JsonName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Field).JsonName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DefaultValue", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Field).DefaultValue = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipType($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthType
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Field).XXX_unrecognized = $.appendSlice((m$ as Field).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Field | $.VarRef<Field> | null = this;
		xxx_messageInfo_Field.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Field", /* @__PURE__ */ $.pointerType("types.Field")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Field | $.VarRef<Field> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Field.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Field", /* @__PURE__ */ $.pointerType("types.Field")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).MarshalToSizedBuffer(b) : Field.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Field | $.VarRef<Field> | null = this;
		xxx_messageInfo_Field.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Field", /* @__PURE__ */ $.pointerType("types.Field")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Field"
	}

	public XXX_Size(): number {
		const m: Field | $.VarRef<Field> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).Size() : Field.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Field | $.VarRef<Field> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Field).Unmarshal(b) : Field.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.Field",
		() => new Field(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetCardinality", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "types.Field_Cardinality") }], pointerReceiver: true }, { name: "GetDefaultValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetJsonName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetKind", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "types.Field_Kind") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetNumber", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetOneofIndex", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")) }], pointerReceiver: true }, { name: "GetPacked", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetTypeUrl", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Field,
		() => [{ name: "Kind", key: "Kind", type: /* @__PURE__ */ $.basicType("int32", "types.Field_Kind"), tag: "protobuf:\"varint,1,opt,name=kind,proto3,enum=google.protobuf.Field_Kind\" json:\"kind,omitempty\"" }, { name: "Cardinality", key: "Cardinality", type: /* @__PURE__ */ $.basicType("int32", "types.Field_Cardinality"), tag: "protobuf:\"varint,2,opt,name=cardinality,proto3,enum=google.protobuf.Field_Cardinality\" json:\"cardinality,omitempty\"" }, { name: "Number", key: "Number", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,3,opt,name=number,proto3\" json:\"number,omitempty\"" }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "TypeUrl", key: "TypeUrl", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,6,opt,name=type_url,json=typeUrl,proto3\" json:\"type_url,omitempty\"" }, { name: "OneofIndex", key: "OneofIndex", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,7,opt,name=oneof_index,json=oneofIndex,proto3\" json:\"oneof_index,omitempty\"" }, { name: "Packed", key: "Packed", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,8,opt,name=packed,proto3\" json:\"packed,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")), tag: "protobuf:\"bytes,9,rep,name=options,proto3\" json:\"options,omitempty\"" }, { name: "JsonName", key: "JsonName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,10,opt,name=json_name,json=jsonName,proto3\" json:\"json_name,omitempty\"" }, { name: "DefaultValue", key: "DefaultValue", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,11,opt,name=default_value,json=defaultValue,proto3\" json:\"default_value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Enum {
	// Enum type name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Enum value definitions.
	public get Enumvalue(): $.Slice<EnumValue | $.VarRef<EnumValue> | null> {
		return this._fields.Enumvalue
	}

	public set Enumvalue(value: $.Slice<EnumValue | $.VarRef<EnumValue> | null>) {
		this._fields.Enumvalue = value
	}

	// Protocol buffer options.
	public get Options(): $.Slice<Option | $.VarRef<Option> | null> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<Option | $.VarRef<Option> | null>) {
		this._fields.Options = value
	}

	// The source context.
	public get SourceContext(): __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null {
		return this._fields.SourceContext
	}

	public set SourceContext(value: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null) {
		this._fields.SourceContext = value
	}

	// The source syntax.
	public get Syntax(): Syntax {
		return this._fields.Syntax
	}

	public set Syntax(value: Syntax) {
		this._fields.Syntax = value
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
		Name: string
		Enumvalue: $.Slice<EnumValue | $.VarRef<EnumValue> | null>
		Options: $.Slice<Option | $.VarRef<Option> | null>
		SourceContext: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null
		Syntax: Syntax
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, Enumvalue?: $.Slice<EnumValue | $.VarRef<EnumValue> | null>, Options?: $.Slice<Option | $.VarRef<Option> | null>, SourceContext?: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null, Syntax?: Syntax, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Enumvalue: init?.Enumvalue ?? (null! as $.Slice<EnumValue | $.VarRef<EnumValue> | null>),
			Options: init?.Options ?? (null! as $.Slice<Option | $.VarRef<Option> | null>),
			SourceContext: init?.SourceContext ?? (null! as __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null),
			Syntax: init?.Syntax ?? (0 as Syntax),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Enum {
		return new Enum(this, true)
	}

	public __goscriptAssign(source: Enum): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Enumvalue = values.Enumvalue
		target.Options = values.Options
		target.SourceContext = values.SourceContext
		target.Syntax = values.Syntax
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Enum | $.VarRef<Enum> | null = this;
		const _this$: Enum = _this == null ? $.pointerTarget<Enum>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Enum>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple10: any = $.typeAssertTuple<Enum | $.VarRef<Enum> | null>(that, /* @__PURE__ */ $.pointerType("types.Enum"))
		let that1: Enum | $.VarRef<Enum> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			let __goscriptTuple11: any = $.typeAssertTuple<Enum>(that, "types.Enum")
			let that2 = $.varRef(__goscriptTuple11[0])
			let __goscriptShadow4 = __goscriptTuple11[1]
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
		if (!$.stringEqual((_this$ as Enum).Name, $.pointerValue<Enum>(that1).Name)) {
			if ($.stringCompare((_this$ as Enum).Name, $.pointerValue<Enum>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		if ($.sliceLen((_this$ as Enum).Enumvalue) != $.sliceLen($.pointerValue<Enum>(that1).Enumvalue)) {
			if ($.sliceLen((_this$ as Enum).Enumvalue) < $.sliceLen($.pointerValue<Enum>(that1).Enumvalue)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget15 = (_this$ as Enum).Enumvalue, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), i = 0; i < __goscriptRangeWindow15.length; i++) {
			{
				let c = EnumValue.prototype.Compare.call($.arrayIndex((_this$ as Enum).Enumvalue!, i), $.interfaceValue($.arrayIndex($.pointerValue<Enum>(that1).Enumvalue!, i), "*types.EnumValue", /* @__PURE__ */ $.pointerType("types.EnumValue")))
				if (c != 0) {
					return c
				}
			}
		}
		if ($.sliceLen((_this$ as Enum).Options) != $.sliceLen($.pointerValue<Enum>(that1).Options)) {
			if ($.sliceLen((_this$ as Enum).Options) < $.sliceLen($.pointerValue<Enum>(that1).Options)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget16 = (_this$ as Enum).Options, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), i = 0; i < __goscriptRangeWindow16.length; i++) {
			{
				let c = Option.prototype.Compare.call($.arrayIndex((_this$ as Enum).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Enum>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = __goscript_source_context_pb.SourceContext.prototype.Compare.call((_this$ as Enum).SourceContext, $.interfaceValue($.pointerValue<Enum>(that1).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")))
			if (c != 0) {
				return c
			}
		}
		if ((_this$ as Enum).Syntax != $.pointerValue<Enum>(that1).Syntax) {
			if ((_this$ as Enum).Syntax < $.pointerValue<Enum>(that1).Syntax) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Enum).XXX_unrecognized, $.pointerValue<Enum>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([2])]
	}

	public Equal(that: any): boolean {
		const _this: Enum | $.VarRef<Enum> | null = this;
		const _this$: Enum = _this == null ? $.pointerTarget<Enum>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Enum>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple12: any = $.typeAssertTuple<Enum | $.VarRef<Enum> | null>(that, /* @__PURE__ */ $.pointerType("types.Enum"))
		let that1: Enum | $.VarRef<Enum> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			let __goscriptTuple13: any = $.typeAssertTuple<Enum>(that, "types.Enum")
			let that2 = $.varRef(__goscriptTuple13[0])
			let __goscriptShadow5 = __goscriptTuple13[1]
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
		if (!$.stringEqual((_this$ as Enum).Name, $.pointerValue<Enum>(that1).Name)) {
			return false
		}
		if ($.sliceLen((_this$ as Enum).Enumvalue) != $.sliceLen($.pointerValue<Enum>(that1).Enumvalue)) {
			return false
		}
		for (let __goscriptRangeTarget17 = (_this$ as Enum).Enumvalue, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), i = 0; i < __goscriptRangeWindow17.length; i++) {
			if (!EnumValue.prototype.Equal.call($.arrayIndex((_this$ as Enum).Enumvalue!, i), $.interfaceValue($.arrayIndex($.pointerValue<Enum>(that1).Enumvalue!, i), "*types.EnumValue", /* @__PURE__ */ $.pointerType("types.EnumValue")))) {
				return false
			}
		}
		if ($.sliceLen((_this$ as Enum).Options) != $.sliceLen($.pointerValue<Enum>(that1).Options)) {
			return false
		}
		for (let __goscriptRangeTarget18 = (_this$ as Enum).Options, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), i = 0; i < __goscriptRangeWindow18.length; i++) {
			if (!Option.prototype.Equal.call($.arrayIndex((_this$ as Enum).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Enum>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))) {
				return false
			}
		}
		if (!__goscript_source_context_pb.SourceContext.prototype.Equal.call((_this$ as Enum).SourceContext, $.interfaceValue($.pointerValue<Enum>(that1).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")))) {
			return false
		}
		if ((_this$ as Enum).Syntax != $.pointerValue<Enum>(that1).Syntax) {
			return false
		}
		if (!bytes.Equal((_this$ as Enum).XXX_unrecognized, $.pointerValue<Enum>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetEnumvalue(): $.Slice<EnumValue | $.VarRef<EnumValue> | null> {
		const m: Enum | $.VarRef<Enum> | null = this;
		if (m != null) {
			return $.pointerValue<Enum>(m).Enumvalue
		}
		return null
	}

	public GetName(): string {
		const m: Enum | $.VarRef<Enum> | null = this;
		if (m != null) {
			return $.pointerValue<Enum>(m).Name
		}
		return ""
	}

	public GetOptions(): $.Slice<Option | $.VarRef<Option> | null> {
		const m: Enum | $.VarRef<Enum> | null = this;
		if (m != null) {
			return $.pointerValue<Enum>(m).Options
		}
		return null
	}

	public GetSourceContext(): __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null {
		const m: Enum | $.VarRef<Enum> | null = this;
		if (m != null) {
			return $.pointerValue<Enum>(m).SourceContext
		}
		return null
	}

	public GetSyntax(): Syntax {
		const m: Enum | $.VarRef<Enum> | null = this;
		if (m != null) {
			return $.pointerValue<Enum>(m).Syntax
		}
		return 0
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Enum | $.VarRef<Enum> | null = this;
		const _this$: Enum = _this == null ? $.pointerTarget<Enum>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Enum>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 9, "string")
		s = $.appendOne(s, "&types.Enum{")
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as Enum).Name))), ",\n"))
		if ((_this$ as Enum).Enumvalue != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Enumvalue: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Enum).Enumvalue, "[]*types.EnumValue", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.EnumValue")))))), ",\n"))
		}
		if ((_this$ as Enum).Options != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Options: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Enum).Options, "[]*types.Option", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")))))), ",\n"))
		}
		if ((_this$ as Enum).SourceContext != null) {
			s = $.appendOne(s, $.concatString(($.concatString("SourceContext: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Enum).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext"))))), ",\n"))
		}
		s = $.appendOne(s, $.concatString(($.concatString("Syntax: ", await fmt.Sprintf("%#v", $.namedValueInterfaceValue<any>((_this$ as Enum).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ",\n"))
		if ((_this$ as Enum).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Enum).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Enum | $.VarRef<Enum> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).Size() : Enum.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Enum.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Enum | $.VarRef<Enum> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).Size() : Enum.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Enum.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Enum | $.VarRef<Enum> | null = this;
		const m$: Enum = m == null ? $.pointerTarget<Enum>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Enum>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Enum).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Enum).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Enum).XXX_unrecognized)
		}
		if ((m$ as Enum).Syntax != 0) {
			i = encodeVarintType(dAtA, i, $.uint64((m$ as Enum).Syntax))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ((m$ as Enum).SourceContext != null) {
			{
				let [size, err] = __goscript_source_context_pb.SourceContext.prototype.MarshalToSizedBuffer.call((m$ as Enum).SourceContext, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintType(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as Enum).Options) > 0) {
			for (let __goscriptSliceWindow6 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Enum).Options) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Option.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Enum).Options!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintType(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] = 0x1a
			}
		}
		if ($.sliceLen((m$ as Enum).Enumvalue) > 0) {
			for (let __goscriptSliceWindow7 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Enum).Enumvalue) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = EnumValue.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Enum).Enumvalue!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintType(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = 0x12
			}
		}
		if ($.stringLen((m$ as Enum).Name) > 0) {
			i = i - ($.stringLen((m$ as Enum).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Enum).Name)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as Enum).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Enum | $.VarRef<Enum> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).Size() : Enum.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Enum | $.VarRef<Enum> | null = this;
		$.assignStruct($.pointerValue<Enum>(m), $.markAsStructValue(new Enum()))
	}

	public Size(): number {
		const m: Enum | $.VarRef<Enum> | null = this;
		let n: number = 0
		const m$: Enum = m == null ? $.pointerTarget<Enum>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Enum>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Enum).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ($.sliceLen((m$ as Enum).Enumvalue) > 0) {
			for (let __goscriptRangeTarget19 = (m$ as Enum).Enumvalue, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as EnumValue | $.VarRef<EnumValue> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as EnumValue).Size() : EnumValue.prototype.Size.call(e))
				n = n + ((1 + l) + sovType($.uint64(l)))
			}
		}
		if ($.sliceLen((m$ as Enum).Options) > 0) {
			for (let __goscriptRangeTarget20 = (m$ as Enum).Options, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Option).Size() : Option.prototype.Size.call(e))
				n = n + ((1 + l) + sovType($.uint64(l)))
			}
		}
		if ((m$ as Enum).SourceContext != null) {
			l = __goscript_source_context_pb.SourceContext.prototype.Size.call((m$ as Enum).SourceContext)
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ((m$ as Enum).Syntax != 0) {
			n = n + (1 + sovType($.uint64((m$ as Enum).Syntax)))
		}
		if ((m$ as Enum).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Enum).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Enum | $.VarRef<Enum> | null = this;
		const _this$: Enum = _this == null ? $.pointerTarget<Enum>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Enum>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForEnumvalue = "[]*EnumValue{"
		for (let __goscriptRangeTarget21 = (_this$ as Enum).Enumvalue, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as EnumValue | $.VarRef<EnumValue> | null)
			repeatedStringForEnumvalue = $.concatString(repeatedStringForEnumvalue, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as EnumValue).String() : EnumValue.prototype.String.call(f)), "EnumValue", "EnumValue", 1), ","))
		}
		repeatedStringForEnumvalue = $.concatString(repeatedStringForEnumvalue, "}")
		let repeatedStringForOptions = "[]*Option{"
		for (let __goscriptRangeTarget22 = (_this$ as Enum).Options, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
			repeatedStringForOptions = $.concatString(repeatedStringForOptions, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Option).String() : Option.prototype.String.call(f)), "Option", "Option", 1), ","))
		}
		repeatedStringForOptions = $.concatString(repeatedStringForOptions, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Enum{", $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as Enum).Name))), ","), $.concatString(($.concatString("Enumvalue:", repeatedStringForEnumvalue)), ","), $.concatString(($.concatString("Options:", repeatedStringForOptions)), ","), $.concatString(($.concatString("SourceContext:", strings.Replace(fmt.Sprintf("%v", $.interfaceValue((_this$ as Enum).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext"))), "SourceContext", "SourceContext", 1))), ","), $.concatString(($.concatString("Syntax:", fmt.Sprintf("%v", $.namedValueInterfaceValue<any>((_this$ as Enum).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Enum).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Enum | $.VarRef<Enum> | null = this;
		const m$: Enum = m == null ? $.pointerTarget<Enum>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Enum>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowType
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Enum: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Enum: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Enum).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Enumvalue", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Enum).Enumvalue = $.appendOne((m$ as Enum).Enumvalue, new EnumValue(), $.appendZeros.nil)
					{
						let err = EnumValue.prototype.Unmarshal.call($.arrayIndex((m$ as Enum).Enumvalue!, $.sliceLen((m$ as Enum).Enumvalue) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Options", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Enum).Options = $.appendOne((m$ as Enum).Options, new Option(), $.appendZeros.nil)
					{
						let err = Option.prototype.Unmarshal.call($.arrayIndex((m$ as Enum).Options!, $.sliceLen((m$ as Enum).Options) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SourceContext", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Enum).SourceContext == null) {
						;(m$ as Enum).SourceContext = new __goscript_source_context_pb.SourceContext()
					}
					{
						let err = __goscript_source_context_pb.SourceContext.prototype.Unmarshal.call((m$ as Enum).SourceContext, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Syntax", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Enum).Syntax = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++;
						;(m$ as Enum).Syntax = (m$ as Enum).Syntax | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipType($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthType
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Enum).XXX_unrecognized = $.appendSlice((m$ as Enum).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Enum | $.VarRef<Enum> | null = this;
		xxx_messageInfo_Enum.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Enum", /* @__PURE__ */ $.pointerType("types.Enum")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Enum | $.VarRef<Enum> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Enum.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Enum", /* @__PURE__ */ $.pointerType("types.Enum")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).MarshalToSizedBuffer(b) : Enum.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Enum | $.VarRef<Enum> | null = this;
		xxx_messageInfo_Enum.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Enum", /* @__PURE__ */ $.pointerType("types.Enum")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Enum"
	}

	public XXX_Size(): number {
		const m: Enum | $.VarRef<Enum> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).Size() : Enum.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Enum | $.VarRef<Enum> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Enum).Unmarshal(b) : Enum.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.Enum",
		() => new Enum(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetEnumvalue", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.EnumValue")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")) }], pointerReceiver: true }, { name: "GetSourceContext", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.SourceContext") }], pointerReceiver: true }, { name: "GetSyntax", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "types.Syntax") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Enum,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Enumvalue", key: "Enumvalue", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.EnumValue")), tag: "protobuf:\"bytes,2,rep,name=enumvalue,proto3\" json:\"enumvalue,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")), tag: "protobuf:\"bytes,3,rep,name=options,proto3\" json:\"options,omitempty\"" }, { name: "SourceContext", key: "SourceContext", type: /* @__PURE__ */ $.pointerType("types.SourceContext"), tag: "protobuf:\"bytes,4,opt,name=source_context,json=sourceContext,proto3\" json:\"source_context,omitempty\"" }, { name: "Syntax", key: "Syntax", type: /* @__PURE__ */ $.basicType("int32", "types.Syntax"), tag: "protobuf:\"varint,5,opt,name=syntax,proto3,enum=google.protobuf.Syntax\" json:\"syntax,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class EnumValue {
	// Enum value name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Enum value number.
	public get Number(): number {
		return this._fields.Number
	}

	public set Number(value: number) {
		this._fields.Number = value
	}

	// Protocol buffer options.
	public get Options(): $.Slice<Option | $.VarRef<Option> | null> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<Option | $.VarRef<Option> | null>) {
		this._fields.Options = value
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
		Name: string
		Number: number
		Options: $.Slice<Option | $.VarRef<Option> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, Number?: number, Options?: $.Slice<Option | $.VarRef<Option> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Number: init?.Number ?? (0 as number),
			Options: init?.Options ?? (null! as $.Slice<Option | $.VarRef<Option> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumValue {
		return new EnumValue(this, true)
	}

	public __goscriptAssign(source: EnumValue): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Number = values.Number
		target.Options = values.Options
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: EnumValue | $.VarRef<EnumValue> | null = this;
		const _this$: EnumValue = _this == null ? $.pointerTarget<EnumValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<EnumValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple15: any = $.typeAssertTuple<EnumValue | $.VarRef<EnumValue> | null>(that, /* @__PURE__ */ $.pointerType("types.EnumValue"))
		let that1: EnumValue | $.VarRef<EnumValue> | null = __goscriptTuple15[0]
		let ok = __goscriptTuple15[1]
		if (!ok) {
			let __goscriptTuple16: any = $.typeAssertTuple<EnumValue>(that, "types.EnumValue")
			let that2 = $.varRef(__goscriptTuple16[0])
			let __goscriptShadow6 = __goscriptTuple16[1]
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
		if (!$.stringEqual((_this$ as EnumValue).Name, $.pointerValue<EnumValue>(that1).Name)) {
			if ($.stringCompare((_this$ as EnumValue).Name, $.pointerValue<EnumValue>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		if ((_this$ as EnumValue).Number != $.pointerValue<EnumValue>(that1).Number) {
			if ((_this$ as EnumValue).Number < $.pointerValue<EnumValue>(that1).Number) {
				return -1
			}
			return 1
		}
		if ($.sliceLen((_this$ as EnumValue).Options) != $.sliceLen($.pointerValue<EnumValue>(that1).Options)) {
			if ($.sliceLen((_this$ as EnumValue).Options) < $.sliceLen($.pointerValue<EnumValue>(that1).Options)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget23 = (_this$ as EnumValue).Options, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), i = 0; i < __goscriptRangeWindow23.length; i++) {
			{
				let c = Option.prototype.Compare.call($.arrayIndex((_this$ as EnumValue).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<EnumValue>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as EnumValue).XXX_unrecognized, $.pointerValue<EnumValue>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([3])]
	}

	public Equal(that: any): boolean {
		const _this: EnumValue | $.VarRef<EnumValue> | null = this;
		const _this$: EnumValue = _this == null ? $.pointerTarget<EnumValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<EnumValue>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple17: any = $.typeAssertTuple<EnumValue | $.VarRef<EnumValue> | null>(that, /* @__PURE__ */ $.pointerType("types.EnumValue"))
		let that1: EnumValue | $.VarRef<EnumValue> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		if (!ok) {
			let __goscriptTuple18: any = $.typeAssertTuple<EnumValue>(that, "types.EnumValue")
			let that2 = $.varRef(__goscriptTuple18[0])
			let __goscriptShadow7 = __goscriptTuple18[1]
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
		if (!$.stringEqual((_this$ as EnumValue).Name, $.pointerValue<EnumValue>(that1).Name)) {
			return false
		}
		if ((_this$ as EnumValue).Number != $.pointerValue<EnumValue>(that1).Number) {
			return false
		}
		if ($.sliceLen((_this$ as EnumValue).Options) != $.sliceLen($.pointerValue<EnumValue>(that1).Options)) {
			return false
		}
		for (let __goscriptRangeTarget24 = (_this$ as EnumValue).Options, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), i = 0; i < __goscriptRangeWindow24.length; i++) {
			if (!Option.prototype.Equal.call($.arrayIndex((_this$ as EnumValue).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<EnumValue>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as EnumValue).XXX_unrecognized, $.pointerValue<EnumValue>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetName(): string {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		if (m != null) {
			return $.pointerValue<EnumValue>(m).Name
		}
		return ""
	}

	public GetNumber(): number {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		if (m != null) {
			return $.pointerValue<EnumValue>(m).Number
		}
		return 0
	}

	public GetOptions(): $.Slice<Option | $.VarRef<Option> | null> {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		if (m != null) {
			return $.pointerValue<EnumValue>(m).Options
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: EnumValue | $.VarRef<EnumValue> | null = this;
		const _this$: EnumValue = _this == null ? $.pointerTarget<EnumValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<EnumValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 7, "string")
		s = $.appendOne(s, "&types.EnumValue{")
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as EnumValue).Name))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Number: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as EnumValue).Number, "int32")))), ",\n"))
		if ((_this$ as EnumValue).Options != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Options: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as EnumValue).Options, "[]*types.Option", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")))))), ",\n"))
		}
		if ((_this$ as EnumValue).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as EnumValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).Size() : EnumValue.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple19: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : EnumValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).Size() : EnumValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : EnumValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		const m$: EnumValue = m == null ? $.pointerTarget<EnumValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<EnumValue>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as EnumValue).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as EnumValue).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as EnumValue).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as EnumValue).Options) > 0) {
			for (let __goscriptSliceWindow9 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as EnumValue).Options) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Option.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as EnumValue).Options!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintType(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = 0x1a
			}
		}
		if ((m$ as EnumValue).Number != 0) {
			i = encodeVarintType(dAtA, i, $.uint64((m$ as EnumValue).Number))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as EnumValue).Name) > 0) {
			i = i - ($.stringLen((m$ as EnumValue).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as EnumValue).Name)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as EnumValue).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).Size() : EnumValue.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: EnumValue | $.VarRef<EnumValue> | null = this;
		$.assignStruct($.pointerValue<EnumValue>(m), $.markAsStructValue(new EnumValue()))
	}

	public Size(): number {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		let n: number = 0
		const m$: EnumValue = m == null ? $.pointerTarget<EnumValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<EnumValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as EnumValue).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ((m$ as EnumValue).Number != 0) {
			n = n + (1 + sovType($.uint64((m$ as EnumValue).Number)))
		}
		if ($.sliceLen((m$ as EnumValue).Options) > 0) {
			for (let __goscriptRangeTarget25 = (m$ as EnumValue).Options, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow25.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow25.backing[__goscriptRangeWindow25.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Option).Size() : Option.prototype.Size.call(e))
				n = n + ((1 + l) + sovType($.uint64(l)))
			}
		}
		if ((m$ as EnumValue).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as EnumValue).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: EnumValue | $.VarRef<EnumValue> | null = this;
		const _this$: EnumValue = _this == null ? $.pointerTarget<EnumValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<EnumValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForOptions = "[]*Option{"
		for (let __goscriptRangeTarget26 = (_this$ as EnumValue).Options, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow26.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow26.backing[__goscriptRangeWindow26.offset + __rangeIndex] as Option | $.VarRef<Option> | null)
			repeatedStringForOptions = $.concatString(repeatedStringForOptions, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Option).String() : Option.prototype.String.call(f)), "Option", "Option", 1), ","))
		}
		repeatedStringForOptions = $.concatString(repeatedStringForOptions, "}")
		let s = strings.Join($.arrayToSlice<string>(["&EnumValue{", $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as EnumValue).Name))), ","), $.concatString(($.concatString("Number:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as EnumValue).Number, "int32")))), ","), $.concatString(($.concatString("Options:", repeatedStringForOptions)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as EnumValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: EnumValue | $.VarRef<EnumValue> | null = this;
		const m$: EnumValue = m == null ? $.pointerTarget<EnumValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<EnumValue>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowType
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: EnumValue: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: EnumValue: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as EnumValue).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Number", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as EnumValue).Number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++;
						;(m$ as EnumValue).Number = (m$ as EnumValue).Number | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Options", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as EnumValue).Options = $.appendOne((m$ as EnumValue).Options, new Option(), $.appendZeros.nil)
					{
						let err = Option.prototype.Unmarshal.call($.arrayIndex((m$ as EnumValue).Options!, $.sliceLen((m$ as EnumValue).Options) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipType($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthType
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as EnumValue).XXX_unrecognized = $.appendSlice((m$ as EnumValue).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		xxx_messageInfo_EnumValue.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.EnumValue", /* @__PURE__ */ $.pointerType("types.EnumValue")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		if (deterministic) {
			return xxx_messageInfo_EnumValue.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.EnumValue", /* @__PURE__ */ $.pointerType("types.EnumValue")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).MarshalToSizedBuffer(b) : EnumValue.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		xxx_messageInfo_EnumValue.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.EnumValue", /* @__PURE__ */ $.pointerType("types.EnumValue")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.EnumValue"
	}

	public XXX_Size(): number {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).Size() : EnumValue.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: EnumValue | $.VarRef<EnumValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EnumValue).Unmarshal(b) : EnumValue.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.EnumValue",
		() => new EnumValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetNumber", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		EnumValue,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Number", key: "Number", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,2,opt,name=number,proto3\" json:\"number,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")), tag: "protobuf:\"bytes,3,rep,name=options,proto3\" json:\"options,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Option {
	// The option's name. For protobuf built-in options (options defined in
	// descriptor.proto), this is the short name. For example, `"map_entry"`.
	// For custom options, it should be the fully-qualified name. For example,
	// `"google.api.http"`.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// The option's value packed in an Any message. If the value is a primitive,
	// the corresponding wrapper type defined in google/protobuf/wrappers.proto
	// should be used. If the value is an enum, it should be stored as an int32
	// value using the google.protobuf.Int32Value type.
	public get Value(): __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null {
		return this._fields.Value
	}

	public set Value(value: __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null) {
		this._fields.Value = value
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
		Name: string
		Value: __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, Value?: __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Value: init?.Value ?? (null! as __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Option {
		return new Option(this, true)
	}

	public __goscriptAssign(source: Option): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Option | $.VarRef<Option> | null = this;
		const _this$: Option = _this == null ? $.pointerTarget<Option>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Option>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple20: any = $.typeAssertTuple<Option | $.VarRef<Option> | null>(that, /* @__PURE__ */ $.pointerType("types.Option"))
		let that1: Option | $.VarRef<Option> | null = __goscriptTuple20[0]
		let ok = __goscriptTuple20[1]
		if (!ok) {
			let __goscriptTuple21: any = $.typeAssertTuple<Option>(that, "types.Option")
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
		if (!$.stringEqual((_this$ as Option).Name, $.pointerValue<Option>(that1).Name)) {
			if ($.stringCompare((_this$ as Option).Name, $.pointerValue<Option>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = __goscript_any_pb.Any.prototype.Compare.call((_this$ as Option).Value, $.interfaceValue($.pointerValue<Option>(that1).Value, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")))
			if (c != 0) {
				return c
			}
		}
		{
			let c = bytes.Compare((_this$ as Option).XXX_unrecognized, $.pointerValue<Option>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([4])]
	}

	public Equal(that: any): boolean {
		const _this: Option | $.VarRef<Option> | null = this;
		const _this$: Option = _this == null ? $.pointerTarget<Option>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Option>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple22: any = $.typeAssertTuple<Option | $.VarRef<Option> | null>(that, /* @__PURE__ */ $.pointerType("types.Option"))
		let that1: Option | $.VarRef<Option> | null = __goscriptTuple22[0]
		let ok = __goscriptTuple22[1]
		if (!ok) {
			let __goscriptTuple23: any = $.typeAssertTuple<Option>(that, "types.Option")
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
		if (!$.stringEqual((_this$ as Option).Name, $.pointerValue<Option>(that1).Name)) {
			return false
		}
		if (!__goscript_any_pb.Any.prototype.Equal.call((_this$ as Option).Value, $.interfaceValue($.pointerValue<Option>(that1).Value, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")))) {
			return false
		}
		if (!bytes.Equal((_this$ as Option).XXX_unrecognized, $.pointerValue<Option>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetName(): string {
		const m: Option | $.VarRef<Option> | null = this;
		if (m != null) {
			return $.pointerValue<Option>(m).Name
		}
		return ""
	}

	public GetValue(): __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null {
		const m: Option | $.VarRef<Option> | null = this;
		if (m != null) {
			return $.pointerValue<Option>(m).Value
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Option | $.VarRef<Option> | null = this;
		const _this$: Option = _this == null ? $.pointerTarget<Option>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Option>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&types.Option{")
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as Option).Name))), ",\n"))
		if ((_this$ as Option).Value != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Option).Value, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any"))))), ",\n"))
		}
		if ((_this$ as Option).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Option).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Option | $.VarRef<Option> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).Size() : Option.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple24: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Option.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Option | $.VarRef<Option> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).Size() : Option.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Option.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Option | $.VarRef<Option> | null = this;
		const m$: Option = m == null ? $.pointerTarget<Option>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Option>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Option).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Option).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Option).XXX_unrecognized)
		}
		if ((m$ as Option).Value != null) {
			{
				let [size, err] = __goscript_any_pb.Any.prototype.MarshalToSizedBuffer.call((m$ as Option).Value, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintType(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as Option).Name) > 0) {
			i = i - ($.stringLen((m$ as Option).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Option).Name)
			i = encodeVarintType(dAtA, i, $.uint64($.stringLen((m$ as Option).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Option | $.VarRef<Option> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).Size() : Option.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Option | $.VarRef<Option> | null = this;
		$.assignStruct($.pointerValue<Option>(m), $.markAsStructValue(new Option()))
	}

	public Size(): number {
		const m: Option | $.VarRef<Option> | null = this;
		let n: number = 0
		const m$: Option = m == null ? $.pointerTarget<Option>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Option>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Option).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ((m$ as Option).Value != null) {
			l = __goscript_any_pb.Any.prototype.Size.call((m$ as Option).Value)
			n = n + ((1 + l) + sovType($.uint64(l)))
		}
		if ((m$ as Option).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Option).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Option | $.VarRef<Option> | null = this;
		const _this$: Option = _this == null ? $.pointerTarget<Option>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Option>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Option{", $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as Option).Name))), ","), $.concatString(($.concatString("Value:", strings.Replace(fmt.Sprintf("%v", $.interfaceValue((_this$ as Option).Value, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any"))), "Any", "Any", 1))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Option).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Option | $.VarRef<Option> | null = this;
		const m$: Option = m == null ? $.pointerTarget<Option>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Option>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowType
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Option: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Option: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Option).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowType
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthType
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthType
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Option).Value == null) {
						;(m$ as Option).Value = new __goscript_any_pb.Any()
					}
					{
						let err = __goscript_any_pb.Any.prototype.Unmarshal.call((m$ as Option).Value, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipType($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthType
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Option).XXX_unrecognized = $.appendSlice((m$ as Option).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Option | $.VarRef<Option> | null = this;
		xxx_messageInfo_Option.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Option | $.VarRef<Option> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Option.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).MarshalToSizedBuffer(b) : Option.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Option | $.VarRef<Option> | null = this;
		xxx_messageInfo_Option.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Option"
	}

	public XXX_Size(): number {
		const m: Option | $.VarRef<Option> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).Size() : Option.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Option | $.VarRef<Option> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Option).Unmarshal(b) : Option.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.Option",
		() => new Option(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Any") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Option,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Value", key: "Value", type: /* @__PURE__ */ $.pointerType("types.Any"), tag: "protobuf:\"bytes,2,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export const Syntax_SYNTAX_PROTO2: Syntax = 0

export const Syntax_SYNTAX_PROTO3: Syntax = 1

export const Field_TYPE_UNKNOWN: Field_Kind = 0

export const Field_TYPE_DOUBLE: Field_Kind = 1

export const Field_TYPE_FLOAT: Field_Kind = 2

export const Field_TYPE_INT64: Field_Kind = 3

export const Field_TYPE_UINT64: Field_Kind = 4

export const Field_TYPE_INT32: Field_Kind = 5

export const Field_TYPE_FIXED64: Field_Kind = 6

export const Field_TYPE_FIXED32: Field_Kind = 7

export const Field_TYPE_BOOL: Field_Kind = 8

export const Field_TYPE_STRING: Field_Kind = 9

export const Field_TYPE_GROUP: Field_Kind = 10

export const Field_TYPE_MESSAGE: Field_Kind = 11

export const Field_TYPE_BYTES: Field_Kind = 12

export const Field_TYPE_UINT32: Field_Kind = 13

export const Field_TYPE_ENUM: Field_Kind = 14

export const Field_TYPE_SFIXED32: Field_Kind = 15

export const Field_TYPE_SFIXED64: Field_Kind = 16

export const Field_TYPE_SINT32: Field_Kind = 17

export const Field_TYPE_SINT64: Field_Kind = 18

export const Field_CARDINALITY_UNKNOWN: Field_Cardinality = 0

export const Field_CARDINALITY_OPTIONAL: Field_Cardinality = 1

export const Field_CARDINALITY_REQUIRED: Field_Cardinality = 2

export const Field_CARDINALITY_REPEATED: Field_Cardinality = 3

export let Syntax_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "SYNTAX_PROTO2"], [1, "SYNTAX_PROTO3"]])

export function __goscript_set_Syntax_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	Syntax_name = __goscriptValue
}

export let Syntax_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["SYNTAX_PROTO2", 0], ["SYNTAX_PROTO3", 1]])

export function __goscript_set_Syntax_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	Syntax_value = __goscriptValue
}

export function Syntax_EnumDescriptor(recv: Syntax): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([0])]
}

export let Field_Kind_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "TYPE_UNKNOWN"], [1, "TYPE_DOUBLE"], [2, "TYPE_FLOAT"], [3, "TYPE_INT64"], [4, "TYPE_UINT64"], [5, "TYPE_INT32"], [6, "TYPE_FIXED64"], [7, "TYPE_FIXED32"], [8, "TYPE_BOOL"], [9, "TYPE_STRING"], [10, "TYPE_GROUP"], [11, "TYPE_MESSAGE"], [12, "TYPE_BYTES"], [13, "TYPE_UINT32"], [14, "TYPE_ENUM"], [15, "TYPE_SFIXED32"], [16, "TYPE_SFIXED64"], [17, "TYPE_SINT32"], [18, "TYPE_SINT64"]])

export function __goscript_set_Field_Kind_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	Field_Kind_name = __goscriptValue
}

export let Field_Kind_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["TYPE_UNKNOWN", 0], ["TYPE_DOUBLE", 1], ["TYPE_FLOAT", 2], ["TYPE_INT64", 3], ["TYPE_UINT64", 4], ["TYPE_INT32", 5], ["TYPE_FIXED64", 6], ["TYPE_FIXED32", 7], ["TYPE_BOOL", 8], ["TYPE_STRING", 9], ["TYPE_GROUP", 10], ["TYPE_MESSAGE", 11], ["TYPE_BYTES", 12], ["TYPE_UINT32", 13], ["TYPE_ENUM", 14], ["TYPE_SFIXED32", 15], ["TYPE_SFIXED64", 16], ["TYPE_SINT32", 17], ["TYPE_SINT64", 18]])

export function __goscript_set_Field_Kind_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	Field_Kind_value = __goscriptValue
}

export function Field_Kind_EnumDescriptor(recv: Field_Kind): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([1, 0])]
}

export let Field_Cardinality_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "CARDINALITY_UNKNOWN"], [1, "CARDINALITY_OPTIONAL"], [2, "CARDINALITY_REQUIRED"], [3, "CARDINALITY_REPEATED"]])

export function __goscript_set_Field_Cardinality_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	Field_Cardinality_name = __goscriptValue
}

export let Field_Cardinality_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["CARDINALITY_UNKNOWN", 0], ["CARDINALITY_OPTIONAL", 1], ["CARDINALITY_REQUIRED", 2], ["CARDINALITY_REPEATED", 3]])

export function __goscript_set_Field_Cardinality_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	Field_Cardinality_value = __goscriptValue
}

export function Field_Cardinality_EnumDescriptor(recv: Field_Cardinality): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_dd271cc1e348c538, $.arrayToSlice<number>([1, 1])]
}

export let xxx_messageInfo_Type: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Type(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Type.value, __goscriptValue)
}

export let xxx_messageInfo_Field: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Field(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Field.value, __goscriptValue)
}

export let xxx_messageInfo_Enum: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Enum(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Enum.value, __goscriptValue)
}

export let xxx_messageInfo_EnumValue: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_EnumValue(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_EnumValue.value, __goscriptValue)
}

export let xxx_messageInfo_Option: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Option(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Option.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterEnum("google.protobuf.Syntax", Syntax_name, Syntax_value)
	proto.RegisterEnum("google.protobuf.Field_Kind", Field_Kind_name, Field_Kind_value)
	proto.RegisterEnum("google.protobuf.Field_Cardinality", Field_Cardinality_name, Field_Cardinality_value)
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Type", /* @__PURE__ */ $.pointerType("types.Type")), "google.protobuf.Type")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Field", /* @__PURE__ */ $.pointerType("types.Field")), "google.protobuf.Field")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Enum", /* @__PURE__ */ $.pointerType("types.Enum")), "google.protobuf.Enum")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.EnumValue", /* @__PURE__ */ $.pointerType("types.EnumValue")), "google.protobuf.EnumValue")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")), "google.protobuf.Option")
}

function __goscriptInit1(): void {
	proto.RegisterFile("google/protobuf/type.proto", fileDescriptor_dd271cc1e348c538)
}

export let fileDescriptor_dd271cc1e348c538: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 164, 85, 207, 115, 218, 70, 20, 246, 10, 33, 163, 135, 193, 155, 77, 38, 81, 156, 25, 149, 161, 61, 48, 57, 224, 41, 120, 60, 189, 130, 145, 41, 99, 34, 169, 139, 104, 226, 94, 24, 12, 114, 134, 68, 172, 24, 36, 90, 115, 235, 76, 207, 253, 39, 122, 234, 244, 220, 63, 194, 199, 30, 123, 172, 201, 165, 199, 28, 115, 107, 103, 87, 32, 139, 31, 157, 73, 219, 27, 239, 251, 190, 247, 115, 159, 30, 112, 244, 218, 247, 95, 123, 238, 241, 100, 234, 135, 254, 213, 236, 250, 56, 156, 79, 220, 178, 176, 200, 97, 196, 149, 87, 220, 209, 211, 77, 113, 159, 205, 35, 246, 232, 179, 77, 42, 240, 103, 211, 129, 219, 27, 248, 44, 116, 111, 194, 72, 85, 252, 81, 2, 217, 153, 79, 92, 66, 64, 102, 253, 177, 171, 161, 2, 42, 169, 84, 252, 38, 101, 80, 174, 71, 174, 55, 12, 52, 169, 144, 42, 101, 43, 143, 203, 27, 249, 203, 231, 156, 166, 75, 21, 121, 12, 138, 207, 92, 255, 58, 208, 82, 133, 84, 73, 165, 75, 139, 124, 14, 251, 254, 36, 28, 249, 44, 208, 100, 17, 232, 201, 86, 32, 75, 240, 116, 165, 35, 6, 228, 215, 235, 213, 210, 5, 84, 202, 86, 244, 45, 207, 142, 144, 157, 69, 42, 154, 11, 146, 38, 57, 6, 37, 152, 179, 176, 127, 163, 41, 5, 84, 202, 239, 72, 220, 17, 52, 93, 202, 138, 191, 42, 144, 22, 77, 145, 99, 144, 223, 142, 216, 80, 12, 36, 95, 121, 182, 187, 245, 242, 197, 136, 13, 169, 16, 146, 6, 100, 7, 253, 233, 112, 196, 250, 222, 40, 156, 107, 146, 240, 43, 254, 131, 223, 217, 189, 146, 38, 221, 248, 12, 217, 108, 124, 229, 78, 181, 84, 1, 149, 210, 116, 105, 197, 239, 35, 39, 222, 231, 41, 100, 248, 114, 244, 102, 83, 79, 244, 167, 210, 125, 110, 119, 167, 30, 249, 4, 178, 98, 248, 189, 17, 27, 186, 55, 218, 190, 136, 5, 2, 106, 113, 132, 231, 153, 244, 7, 111, 221, 161, 150, 41, 160, 82, 134, 46, 173, 228, 91, 169, 31, 249, 86, 207, 64, 125, 19, 248, 172, 39, 234, 3, 81, 71, 134, 3, 38, 175, 241, 83, 200, 13, 221, 235, 254, 204, 11, 123, 223, 246, 189, 153, 171, 101, 133, 224, 96, 9, 126, 205, 177, 226, 173, 4, 50, 159, 36, 193, 112, 224, 92, 218, 70, 175, 107, 94, 152, 214, 75, 19, 239, 145, 67, 200, 10, 164, 97, 117, 235, 109, 3, 35, 146, 7, 16, 192, 121, 219, 170, 57, 88, 138, 237, 150, 233, 156, 158, 224, 84, 236, 208, 141, 0, 57, 41, 168, 86, 112, 58, 206, 113, 222, 122, 101, 52, 78, 79, 176, 178, 142, 84, 43, 120, 159, 228, 64, 21, 72, 221, 178, 218, 56, 19, 199, 236, 56, 180, 101, 54, 177, 26, 199, 108, 82, 171, 107, 99, 136, 35, 188, 48, 58, 157, 90, 211, 192, 217, 88, 81, 191, 116, 140, 14, 62, 88, 43, 171, 90, 193, 185, 56, 133, 97, 118, 95, 224, 60, 121, 0, 185, 40, 197, 170, 136, 195, 13, 232, 244, 4, 227, 251, 66, 162, 40, 15, 214, 128, 211, 19, 76, 138, 33, 100, 19, 187, 69, 158, 192, 195, 179, 26, 109, 180, 204, 90, 187, 229, 92, 38, 230, 170, 193, 163, 36, 97, 217, 78, 203, 50, 107, 109, 140, 54, 25, 106, 124, 213, 109, 81, 163, 129, 165, 109, 198, 54, 106, 142, 209, 192, 169, 226, 95, 8, 100, 131, 205, 198, 59, 207, 200, 23, 160, 186, 108, 54, 142, 158, 63, 186, 36, 71, 91, 75, 197, 189, 197, 50, 208, 123, 113, 114, 25, 83, 255, 249, 112, 200, 255, 239, 112, 164, 63, 238, 112, 188, 1, 53, 110, 97, 231, 20, 238, 63, 108, 105, 237, 195, 254, 247, 61, 22, 191, 4, 37, 130, 118, 38, 122, 14, 233, 213, 168, 121, 227, 143, 182, 194, 213, 216, 156, 70, 146, 231, 101, 80, 162, 62, 248, 178, 117, 46, 77, 167, 246, 170, 103, 83, 203, 177, 42, 120, 111, 19, 170, 98, 84, 255, 1, 253, 126, 167, 239, 189, 191, 211, 209, 135, 59, 29, 125, 191, 208, 209, 207, 11, 29, 221, 46, 116, 244, 219, 66, 71, 127, 44, 116, 244, 231, 66, 223, 123, 207, 241, 119, 58, 186, 125, 167, 35, 120, 56, 240, 199, 155, 37, 212, 85, 254, 159, 99, 115, 203, 70, 223, 164, 249, 209, 10, 62, 32, 244, 147, 148, 106, 218, 245, 95, 36, 189, 25, 201, 237, 85, 197, 47, 93, 207, 187, 96, 254, 119, 140, 187, 5, 87, 138, 136, 83, 253, 59, 0, 0, 255, 255, 188, 42, 94, 130, 43, 7, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_dd271cc1e348c538(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_dd271cc1e348c538 = __goscriptValue
}

export function Syntax_String(x: Syntax): string {
	let [s, ok] = $.mapGet<number, string, string>(Syntax_name, $.int(x, 32), "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(x))
}

export function Field_Kind_String(x: Field_Kind): string {
	let [s, ok] = $.mapGet<number, string, string>(Field_Kind_name, $.int(x, 32), "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(x))
}

export function Field_Cardinality_String(x: Field_Cardinality): string {
	let [s, ok] = $.mapGet<number, string, string>(Field_Cardinality_name, $.int(x, 32), "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(x))
}

export async function valueToGoStringType(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintType(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovType(v))
	let base = offset
	for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedType(r: randyType | null, easy: boolean): globalThis.Promise<Type | $.VarRef<Type> | null> {
	let _this: Type | $.VarRef<Type> | null = new Type()
	let _this$: Type = _this == null ? $.pointerTarget<Type>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Type>(_this);
	;(_this$ as Type).Name = await randStringType(r)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Type).Fields = $.makeSlice<Field | $.VarRef<Field> | null>(v1)
		for (let i = 0; i < v1; i++) {
			$.sliceElems((_this$ as Type).Fields!)[$.sliceSlot((_this$ as Type).Fields!, i)] = await NewPopulatedField(r, easy)
		}
	}
	let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
	;(_this$ as Type).Oneofs = $.makeSlice<string>(v2, undefined, "string")
	for (let i = 0; i < v2; i++) {
		$.sliceElems((_this$ as Type).Oneofs!)[$.sliceSlot((_this$ as Type).Oneofs!, i)] = await randStringType(r)
	}
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Type).Options = $.makeSlice<Option | $.VarRef<Option> | null>(v3)
		for (let i = 0; i < v3; i++) {
			$.sliceElems((_this$ as Type).Options!)[$.sliceSlot((_this$ as Type).Options!, i)] = await NewPopulatedOption(r, easy)
		}
	}
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		;(_this$ as Type).SourceContext = await __goscript_source_context_pb.NewPopulatedSourceContext((r as __goscript_source_context_pb.randySourceContext | null), easy)
	}
	;(_this$ as Type).Syntax = $.int($.arrayIndex($.arrayToSlice<number>([0, 1])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 32)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Type).XXX_unrecognized = await randUnrecognizedType(r, 7)
	}
	return _this
}

export async function NewPopulatedField(r: randyType | null, easy: boolean): globalThis.Promise<Field | $.VarRef<Field> | null> {
	let _this: Field | $.VarRef<Field> | null = new Field()
	let _this$: Field = _this == null ? $.pointerTarget<Field>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Field>(_this);
	;(_this$ as Field).Kind = $.int($.arrayIndex($.arrayToSlice<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(19), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 32);
	;(_this$ as Field).Cardinality = $.int($.arrayIndex($.arrayToSlice<number>([0, 1, 2, 3])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 32);
	;(_this$ as Field).Number = $.int((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Int31(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as Field).Number = globalThis.Math.imul((_this$ as Field).Number, -1)
	}
	;(_this$ as Field).Name = await randStringType(r);
	;(_this$ as Field).TypeUrl = await randStringType(r);
	;(_this$ as Field).OneofIndex = $.int((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Int31(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as Field).OneofIndex = globalThis.Math.imul((_this$ as Field).OneofIndex, -1)
	}
	;(_this$ as Field).Packed = ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v4 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Field).Options = $.makeSlice<Option | $.VarRef<Option> | null>(v4)
		for (let i = 0; i < v4; i++) {
			$.sliceElems((_this$ as Field).Options!)[$.sliceSlot((_this$ as Field).Options!, i)] = await NewPopulatedOption(r, easy)
		}
	}
	;(_this$ as Field).JsonName = await randStringType(r);
	;(_this$ as Field).DefaultValue = await randStringType(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Field).XXX_unrecognized = await randUnrecognizedType(r, 12)
	}
	return _this
}

export async function NewPopulatedEnum(r: randyType | null, easy: boolean): globalThis.Promise<Enum | $.VarRef<Enum> | null> {
	let _this: Enum | $.VarRef<Enum> | null = new Enum()
	let _this$: Enum = _this == null ? $.pointerTarget<Enum>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Enum>(_this);
	;(_this$ as Enum).Name = await randStringType(r)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v5 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Enum).Enumvalue = $.makeSlice<EnumValue | $.VarRef<EnumValue> | null>(v5)
		for (let i = 0; i < v5; i++) {
			$.sliceElems((_this$ as Enum).Enumvalue!)[$.sliceSlot((_this$ as Enum).Enumvalue!, i)] = await NewPopulatedEnumValue(r, easy)
		}
	}
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v6 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Enum).Options = $.makeSlice<Option | $.VarRef<Option> | null>(v6)
		for (let i = 0; i < v6; i++) {
			$.sliceElems((_this$ as Enum).Options!)[$.sliceSlot((_this$ as Enum).Options!, i)] = await NewPopulatedOption(r, easy)
		}
	}
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		;(_this$ as Enum).SourceContext = await __goscript_source_context_pb.NewPopulatedSourceContext((r as __goscript_source_context_pb.randySourceContext | null), easy)
	}
	;(_this$ as Enum).Syntax = $.int($.arrayIndex($.arrayToSlice<number>([0, 1])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 32)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Enum).XXX_unrecognized = await randUnrecognizedType(r, 6)
	}
	return _this
}

export async function NewPopulatedEnumValue(r: randyType | null, easy: boolean): globalThis.Promise<EnumValue | $.VarRef<EnumValue> | null> {
	let _this: EnumValue | $.VarRef<EnumValue> | null = new EnumValue()
	let _this$: EnumValue = _this == null ? $.pointerTarget<EnumValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<EnumValue>(_this);
	;(_this$ as EnumValue).Name = await randStringType(r);
	;(_this$ as EnumValue).Number = $.int((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Int31(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as EnumValue).Number = globalThis.Math.imul((_this$ as EnumValue).Number, -1)
	}
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v7 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as EnumValue).Options = $.makeSlice<Option | $.VarRef<Option> | null>(v7)
		for (let i = 0; i < v7; i++) {
			$.sliceElems((_this$ as EnumValue).Options!)[$.sliceSlot((_this$ as EnumValue).Options!, i)] = await NewPopulatedOption(r, easy)
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as EnumValue).XXX_unrecognized = await randUnrecognizedType(r, 4)
	}
	return _this
}

export async function NewPopulatedOption(r: randyType | null, easy: boolean): globalThis.Promise<Option | $.VarRef<Option> | null> {
	let _this: Option | $.VarRef<Option> | null = new Option()
	let _this$: Option = _this == null ? $.pointerTarget<Option>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Option>(_this);
	;(_this$ as Option).Name = await randStringType(r)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		;(_this$ as Option).Value = await __goscript_any_pb.NewPopulatedAny((r as __goscript_any_pb.randyAny | null), easy)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Option).XXX_unrecognized = await randUnrecognizedType(r, 3)
	}
	return _this
}

export async function randUTF8RuneType(r: randyType | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringType(r: randyType | null): globalThis.Promise<string> {
	let v8 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v8, undefined, "number")
	for (let __goscriptSliceWindow13 = $.sliceRange(tmps), i = 0; i < v8; i++) {
		;(__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, i)] = await randUTF8RuneType(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedType(r: randyType | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldType(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldType(dAtA: $.Slice<number>, r: randyType | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateType(dAtA, $.uint64(key))
			let v9 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v9 = $.int64Mul(v9, -1n)
			}
			dAtA = encodeVarintPopulateType(dAtA, $.uint64(v9))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateType(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateType(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateType(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateType(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyType, null>) : $.pointerValue<Exclude<randyType, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateType(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovType(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozType(x: bigint): number {
	let n: number = 0
	return sovType($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringType(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipType(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowType]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
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
						return [0, ErrIntOverflowType]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowType]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthType]
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
					return [0, ErrUnexpectedEndOfGroupType]
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
			return [0, ErrInvalidLengthType]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthType: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthType(__goscriptValue: $.GoError): void {
	ErrInvalidLengthType = __goscriptValue
}

export let ErrIntOverflowType: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowType(__goscriptValue: $.GoError): void {
	ErrIntOverflowType = __goscriptValue
}

export let ErrUnexpectedEndOfGroupType: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupType(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupType = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({EnumDescriptor: (receiver: any, ...args: any[]) => (Syntax_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Syntax_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "types.Syntax"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({EnumDescriptor: (receiver: any, ...args: any[]) => (Field_Kind_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Field_Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "types.Field_Kind"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({EnumDescriptor: (receiver: any, ...args: any[]) => (Field_Cardinality_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Field_Cardinality_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("int32", "types.Field_Cardinality"))
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
