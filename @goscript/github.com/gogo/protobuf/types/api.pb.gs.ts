// Generated file based on api.pb.go
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

import * as __goscript_any_pb from "./any.pb.gs.ts"

import * as __goscript_protosize from "./protosize.gs.ts"

import * as __goscript_source_context_pb from "./source_context.pb.gs.ts"

import * as __goscript_type_pb from "./type.pb.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "./any.pb.gs.ts"
import "./protosize.gs.ts"
import "./source_context.pb.gs.ts"
import "./type.pb.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.Api", "types.Method", "types.Mixin", "types.randyApi"])

export type randyApi = {
	Float32(): number
	Float64(): number
	Int31(): number
	Int63(): bigint
	Intn(n: number): number
	Uint32(): number
}

$.registerInterfaceType(
	"types.randyApi",
	null,
	[{ name: "Float32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float32") }] }, { name: "Float64", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "Int31", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }] }, { name: "Int63", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }, { name: "Intn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Uint32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint32") }] }]
);

export class Api {
	// The fully qualified name of this interface, including package name
	// followed by the interface's simple name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// The methods of this interface, in unspecified order.
	public get Methods(): $.Slice<Method | $.VarRef<Method> | null> {
		return this._fields.Methods
	}

	public set Methods(value: $.Slice<Method | $.VarRef<Method> | null>) {
		this._fields.Methods = value
	}

	// Any metadata attached to the interface.
	public get Options(): $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>) {
		this._fields.Options = value
	}

	// A version string for this interface. If specified, must have the form
	// `major-version.minor-version`, as in `1.10`. If the minor version is
	// omitted, it defaults to zero. If the entire version field is empty, the
	// major version is derived from the package name, as outlined below. If the
	// field is not empty, the version in the package name will be verified to be
	// consistent with what is provided here.
	//
	// The versioning schema uses [semantic
	// versioning](http://semver.org) where the major version number
	// indicates a breaking change and the minor version an additive,
	// non-breaking change. Both version numbers are signals to users
	// what to expect from different versions, and should be carefully
	// chosen based on the product plan.
	//
	// The major version is also reflected in the package name of the
	// interface, which must end in `v<major-version>`, as in
	// `google.feature.v1`. For major versions 0 and 1, the suffix can
	// be omitted. Zero major versions must only be used for
	// experimental, non-GA interfaces.
	public get Version(): string {
		return this._fields.Version
	}

	public set Version(value: string) {
		this._fields.Version = value
	}

	// Source context for the protocol buffer service represented by this
	// message.
	public get SourceContext(): __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null {
		return this._fields.SourceContext
	}

	public set SourceContext(value: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null) {
		this._fields.SourceContext = value
	}

	// Included interfaces. See [Mixin][].
	public get Mixins(): $.Slice<Mixin | $.VarRef<Mixin> | null> {
		return this._fields.Mixins
	}

	public set Mixins(value: $.Slice<Mixin | $.VarRef<Mixin> | null>) {
		this._fields.Mixins = value
	}

	// The source syntax of the service.
	public get Syntax(): __goscript_type_pb.Syntax {
		return this._fields.Syntax
	}

	public set Syntax(value: __goscript_type_pb.Syntax) {
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
		Methods: $.Slice<Method | $.VarRef<Method> | null>
		Options: $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>
		Version: string
		SourceContext: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null
		Mixins: $.Slice<Mixin | $.VarRef<Mixin> | null>
		Syntax: __goscript_type_pb.Syntax
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, Methods?: $.Slice<Method | $.VarRef<Method> | null>, Options?: $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>, Version?: string, SourceContext?: __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null, Mixins?: $.Slice<Mixin | $.VarRef<Mixin> | null>, Syntax?: __goscript_type_pb.Syntax, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Methods: init?.Methods ?? (null! as $.Slice<Method | $.VarRef<Method> | null>),
			Options: init?.Options ?? (null! as $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>),
			Version: init?.Version ?? ("" as string),
			SourceContext: init?.SourceContext ?? (null! as __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null),
			Mixins: init?.Mixins ?? (null! as $.Slice<Mixin | $.VarRef<Mixin> | null>),
			Syntax: init?.Syntax ?? (0 as __goscript_type_pb.Syntax),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Api {
		return new Api(this, true)
	}

	public __goscriptAssign(source: Api): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Methods = values.Methods
		target.Options = values.Options
		target.Version = values.Version
		target.SourceContext = values.SourceContext
		target.Mixins = values.Mixins
		target.Syntax = values.Syntax
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Api | $.VarRef<Api> | null = this;
		const _this$: Api = _this == null ? $.pointerTarget<Api>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Api>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<Api | $.VarRef<Api> | null>(that, /* @__PURE__ */ $.pointerType("types.Api"))
		let that1: Api | $.VarRef<Api> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<Api>(that, "types.Api")
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
		if (!$.stringEqual((_this$ as Api).Name, $.pointerValue<Api>(that1).Name)) {
			if ($.stringCompare((_this$ as Api).Name, $.pointerValue<Api>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		if ($.sliceLen((_this$ as Api).Methods) != $.sliceLen($.pointerValue<Api>(that1).Methods)) {
			if ($.sliceLen((_this$ as Api).Methods) < $.sliceLen($.pointerValue<Api>(that1).Methods)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget0 = (_this$ as Api).Methods, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			{
				let c = Method.prototype.Compare.call($.arrayIndex((_this$ as Api).Methods!, i), $.interfaceValue($.arrayIndex($.pointerValue<Api>(that1).Methods!, i), "*types.Method", /* @__PURE__ */ $.pointerType("types.Method")))
				if (c != 0) {
					return c
				}
			}
		}
		if ($.sliceLen((_this$ as Api).Options) != $.sliceLen($.pointerValue<Api>(that1).Options)) {
			if ($.sliceLen((_this$ as Api).Options) < $.sliceLen($.pointerValue<Api>(that1).Options)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget1 = (_this$ as Api).Options, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			{
				let c = __goscript_type_pb.Option.prototype.Compare.call($.arrayIndex((_this$ as Api).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Api>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))
				if (c != 0) {
					return c
				}
			}
		}
		if (!$.stringEqual((_this$ as Api).Version, $.pointerValue<Api>(that1).Version)) {
			if ($.stringCompare((_this$ as Api).Version, $.pointerValue<Api>(that1).Version) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = __goscript_source_context_pb.SourceContext.prototype.Compare.call((_this$ as Api).SourceContext, $.interfaceValue($.pointerValue<Api>(that1).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")))
			if (c != 0) {
				return c
			}
		}
		if ($.sliceLen((_this$ as Api).Mixins) != $.sliceLen($.pointerValue<Api>(that1).Mixins)) {
			if ($.sliceLen((_this$ as Api).Mixins) < $.sliceLen($.pointerValue<Api>(that1).Mixins)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget2 = (_this$ as Api).Mixins, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			{
				let c = Mixin.prototype.Compare.call($.arrayIndex((_this$ as Api).Mixins!, i), $.interfaceValue($.arrayIndex($.pointerValue<Api>(that1).Mixins!, i), "*types.Mixin", /* @__PURE__ */ $.pointerType("types.Mixin")))
				if (c != 0) {
					return c
				}
			}
		}
		if ((_this$ as Api).Syntax != $.pointerValue<Api>(that1).Syntax) {
			if ((_this$ as Api).Syntax < $.pointerValue<Api>(that1).Syntax) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Api).XXX_unrecognized, $.pointerValue<Api>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a2ec32096296c143, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: Api | $.VarRef<Api> | null = this;
		const _this$: Api = _this == null ? $.pointerTarget<Api>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Api>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<Api | $.VarRef<Api> | null>(that, /* @__PURE__ */ $.pointerType("types.Api"))
		let that1: Api | $.VarRef<Api> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<Api>(that, "types.Api")
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
		if (!$.stringEqual((_this$ as Api).Name, $.pointerValue<Api>(that1).Name)) {
			return false
		}
		if ($.sliceLen((_this$ as Api).Methods) != $.sliceLen($.pointerValue<Api>(that1).Methods)) {
			return false
		}
		for (let __goscriptRangeTarget3 = (_this$ as Api).Methods, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			if (!Method.prototype.Equal.call($.arrayIndex((_this$ as Api).Methods!, i), $.interfaceValue($.arrayIndex($.pointerValue<Api>(that1).Methods!, i), "*types.Method", /* @__PURE__ */ $.pointerType("types.Method")))) {
				return false
			}
		}
		if ($.sliceLen((_this$ as Api).Options) != $.sliceLen($.pointerValue<Api>(that1).Options)) {
			return false
		}
		for (let __goscriptRangeTarget4 = (_this$ as Api).Options, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			if (!__goscript_type_pb.Option.prototype.Equal.call($.arrayIndex((_this$ as Api).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Api>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))) {
				return false
			}
		}
		if (!$.stringEqual((_this$ as Api).Version, $.pointerValue<Api>(that1).Version)) {
			return false
		}
		if (!__goscript_source_context_pb.SourceContext.prototype.Equal.call((_this$ as Api).SourceContext, $.interfaceValue($.pointerValue<Api>(that1).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext")))) {
			return false
		}
		if ($.sliceLen((_this$ as Api).Mixins) != $.sliceLen($.pointerValue<Api>(that1).Mixins)) {
			return false
		}
		for (let __goscriptRangeTarget5 = (_this$ as Api).Mixins, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			if (!Mixin.prototype.Equal.call($.arrayIndex((_this$ as Api).Mixins!, i), $.interfaceValue($.arrayIndex($.pointerValue<Api>(that1).Mixins!, i), "*types.Mixin", /* @__PURE__ */ $.pointerType("types.Mixin")))) {
				return false
			}
		}
		if ((_this$ as Api).Syntax != $.pointerValue<Api>(that1).Syntax) {
			return false
		}
		if (!bytes.Equal((_this$ as Api).XXX_unrecognized, $.pointerValue<Api>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetMethods(): $.Slice<Method | $.VarRef<Method> | null> {
		const m: Api | $.VarRef<Api> | null = this;
		if (m != null) {
			return $.pointerValue<Api>(m).Methods
		}
		return null
	}

	public GetMixins(): $.Slice<Mixin | $.VarRef<Mixin> | null> {
		const m: Api | $.VarRef<Api> | null = this;
		if (m != null) {
			return $.pointerValue<Api>(m).Mixins
		}
		return null
	}

	public GetName(): string {
		const m: Api | $.VarRef<Api> | null = this;
		if (m != null) {
			return $.pointerValue<Api>(m).Name
		}
		return ""
	}

	public GetOptions(): $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null> {
		const m: Api | $.VarRef<Api> | null = this;
		if (m != null) {
			return $.pointerValue<Api>(m).Options
		}
		return null
	}

	public GetSourceContext(): __goscript_source_context_pb.SourceContext | $.VarRef<__goscript_source_context_pb.SourceContext> | null {
		const m: Api | $.VarRef<Api> | null = this;
		if (m != null) {
			return $.pointerValue<Api>(m).SourceContext
		}
		return null
	}

	public GetSyntax(): __goscript_type_pb.Syntax {
		const m: Api | $.VarRef<Api> | null = this;
		if (m != null) {
			return $.pointerValue<Api>(m).Syntax
		}
		return 0
	}

	public GetVersion(): string {
		const m: Api | $.VarRef<Api> | null = this;
		if (m != null) {
			return $.pointerValue<Api>(m).Version
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Api | $.VarRef<Api> | null = this;
		const _this$: Api = _this == null ? $.pointerTarget<Api>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Api>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 11, "string")
		s = $.appendOne(s, "&types.Api{")
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as Api).Name))), ",\n"))
		if ((_this$ as Api).Methods != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Methods: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Api).Methods, "[]*types.Method", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Method")))))), ",\n"))
		}
		if ((_this$ as Api).Options != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Options: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Api).Options, "[]*types.Option", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")))))), ",\n"))
		}
		s = $.appendOne(s, $.concatString(($.concatString("Version: ", await fmt.Sprintf("%#v", (_this$ as Api).Version))), ",\n"))
		if ((_this$ as Api).SourceContext != null) {
			s = $.appendOne(s, $.concatString(($.concatString("SourceContext: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Api).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext"))))), ",\n"))
		}
		if ((_this$ as Api).Mixins != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Mixins: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Api).Mixins, "[]*types.Mixin", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Mixin")))))), ",\n"))
		}
		s = $.appendOne(s, $.concatString(($.concatString("Syntax: ", await fmt.Sprintf("%#v", $.namedValueInterfaceValue<any>((_this$ as Api).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ",\n"))
		if ((_this$ as Api).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Api).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Api | $.VarRef<Api> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).Size() : Api.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Api.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Api | $.VarRef<Api> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).Size() : Api.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Api.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Api | $.VarRef<Api> | null = this;
		const m$: Api = m == null ? $.pointerTarget<Api>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Api>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Api).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Api).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Api).XXX_unrecognized)
		}
		if ((m$ as Api).Syntax != 0) {
			i = encodeVarintApi(dAtA, i, $.uint64((m$ as Api).Syntax))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ($.sliceLen((m$ as Api).Mixins) > 0) {
			for (let __goscriptSliceWindow0 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Api).Mixins) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Mixin.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Api).Mixins!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintApi(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = 0x32
			}
		}
		if ((m$ as Api).SourceContext != null) {
			{
				let [size, err] = __goscript_source_context_pb.SourceContext.prototype.MarshalToSizedBuffer.call((m$ as Api).SourceContext, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintApi(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as Api).Version) > 0) {
			i = i - ($.stringLen((m$ as Api).Version))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Api).Version)
			i = encodeVarintApi(dAtA, i, $.uint64($.stringLen((m$ as Api).Version)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as Api).Options) > 0) {
			for (let __goscriptSliceWindow1 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Api).Options) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_type_pb.Option.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Api).Options!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintApi(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = 0x1a
			}
		}
		if ($.sliceLen((m$ as Api).Methods) > 0) {
			for (let __goscriptSliceWindow2 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Api).Methods) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Method.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Api).Methods!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintApi(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = 0x12
			}
		}
		if ($.stringLen((m$ as Api).Name) > 0) {
			i = i - ($.stringLen((m$ as Api).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Api).Name)
			i = encodeVarintApi(dAtA, i, $.uint64($.stringLen((m$ as Api).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Api | $.VarRef<Api> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).Size() : Api.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Api | $.VarRef<Api> | null = this;
		$.assignStruct($.pointerValue<Api>(m), $.markAsStructValue(new Api()))
	}

	public Size(): number {
		const m: Api | $.VarRef<Api> | null = this;
		let n: number = 0
		const m$: Api = m == null ? $.pointerTarget<Api>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Api>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Api).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		if ($.sliceLen((m$ as Api).Methods) > 0) {
			for (let __goscriptRangeTarget6 = (m$ as Api).Methods, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Method | $.VarRef<Method> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Method).Size() : Method.prototype.Size.call(e))
				n = n + ((1 + l) + sovApi($.uint64(l)))
			}
		}
		if ($.sliceLen((m$ as Api).Options) > 0) {
			for (let __goscriptRangeTarget7 = (m$ as Api).Options, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_type_pb.Option).Size() : __goscript_type_pb.Option.prototype.Size.call(e))
				n = n + ((1 + l) + sovApi($.uint64(l)))
			}
		}
		l = $.stringLen((m$ as Api).Version)
		if (l > 0) {
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		if ((m$ as Api).SourceContext != null) {
			l = __goscript_source_context_pb.SourceContext.prototype.Size.call((m$ as Api).SourceContext)
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		if ($.sliceLen((m$ as Api).Mixins) > 0) {
			for (let __goscriptRangeTarget8 = (m$ as Api).Mixins, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as Mixin | $.VarRef<Mixin> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Mixin).Size() : Mixin.prototype.Size.call(e))
				n = n + ((1 + l) + sovApi($.uint64(l)))
			}
		}
		if ((m$ as Api).Syntax != 0) {
			n = n + (1 + sovApi($.uint64((m$ as Api).Syntax)))
		}
		if ((m$ as Api).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Api).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Api | $.VarRef<Api> | null = this;
		const _this$: Api = _this == null ? $.pointerTarget<Api>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Api>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForMethods = "[]*Method{"
		for (let __goscriptRangeTarget9 = (_this$ as Api).Methods, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as Method | $.VarRef<Method> | null)
			repeatedStringForMethods = $.concatString(repeatedStringForMethods, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Method).String() : Method.prototype.String.call(f)), "Method", "Method", 1), ","))
		}
		repeatedStringForMethods = $.concatString(repeatedStringForMethods, "}")
		let repeatedStringForOptions = "[]*Option{"
		for (let __goscriptRangeTarget10 = (_this$ as Api).Options, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as __goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null)
			repeatedStringForOptions = $.concatString(repeatedStringForOptions, $.concatString(strings.Replace(fmt.Sprintf("%v", $.interfaceValue(f, "*types.Option", /* @__PURE__ */ $.pointerType("types.Option"))), "Option", "Option", 1), ","))
		}
		repeatedStringForOptions = $.concatString(repeatedStringForOptions, "}")
		let repeatedStringForMixins = "[]*Mixin{"
		for (let __goscriptRangeTarget11 = (_this$ as Api).Mixins, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as Mixin | $.VarRef<Mixin> | null)
			repeatedStringForMixins = $.concatString(repeatedStringForMixins, $.concatString(strings.Replace((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Mixin).String() : Mixin.prototype.String.call(f)), "Mixin", "Mixin", 1), ","))
		}
		repeatedStringForMixins = $.concatString(repeatedStringForMixins, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Api{", $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as Api).Name))), ","), $.concatString(($.concatString("Methods:", repeatedStringForMethods)), ","), $.concatString(($.concatString("Options:", repeatedStringForOptions)), ","), $.concatString(($.concatString("Version:", fmt.Sprintf("%v", (_this$ as Api).Version))), ","), $.concatString(($.concatString("SourceContext:", strings.Replace(fmt.Sprintf("%v", $.interfaceValue((_this$ as Api).SourceContext, "*types.SourceContext", /* @__PURE__ */ $.pointerType("types.SourceContext"))), "SourceContext", "SourceContext", 1))), ","), $.concatString(($.concatString("Mixins:", repeatedStringForMixins)), ","), $.concatString(($.concatString("Syntax:", fmt.Sprintf("%v", $.namedValueInterfaceValue<any>((_this$ as Api).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Api).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Api | $.VarRef<Api> | null = this;
		const m$: Api = m == null ? $.pointerTarget<Api>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Api>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowApi
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
				return fmt.Errorf("proto: Api: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Api: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Api).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Methods", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Api).Methods = $.appendOne((m$ as Api).Methods, new Method(), $.appendZeros.nil)
					{
						let err = Method.prototype.Unmarshal.call($.arrayIndex((m$ as Api).Methods!, $.sliceLen((m$ as Api).Methods) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Api).Options = $.appendOne((m$ as Api).Options, new __goscript_type_pb.Option(), $.appendZeros.nil)
					{
						let err = __goscript_type_pb.Option.prototype.Unmarshal.call($.arrayIndex((m$ as Api).Options!, $.sliceLen((m$ as Api).Options) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Version", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Api).Version = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Api).SourceContext == null) {
						;(m$ as Api).SourceContext = new __goscript_source_context_pb.SourceContext()
					}
					{
						let err = __goscript_source_context_pb.SourceContext.prototype.Unmarshal.call((m$ as Api).SourceContext, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Mixins", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Api).Mixins = $.appendOne((m$ as Api).Mixins, new Mixin(), $.appendZeros.nil)
					{
						let err = Mixin.prototype.Unmarshal.call($.arrayIndex((m$ as Api).Mixins!, $.sliceLen((m$ as Api).Mixins) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Syntax", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Api).Syntax = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as Api).Syntax = (m$ as Api).Syntax | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipApi($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthApi
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Api).XXX_unrecognized = $.appendSlice((m$ as Api).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Api | $.VarRef<Api> | null = this;
		xxx_messageInfo_Api.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Api", /* @__PURE__ */ $.pointerType("types.Api")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Api | $.VarRef<Api> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Api.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Api", /* @__PURE__ */ $.pointerType("types.Api")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).MarshalToSizedBuffer(b) : Api.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Api | $.VarRef<Api> | null = this;
		xxx_messageInfo_Api.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Api", /* @__PURE__ */ $.pointerType("types.Api")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Api"
	}

	public XXX_Size(): number {
		const m: Api | $.VarRef<Api> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).Size() : Api.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Api | $.VarRef<Api> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Api).Unmarshal(b) : Api.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.Api",
		() => new Api(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetMethods", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Method")) }], pointerReceiver: true }, { name: "GetMixins", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Mixin")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")) }], pointerReceiver: true }, { name: "GetSourceContext", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.SourceContext") }], pointerReceiver: true }, { name: "GetSyntax", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "types.Syntax") }], pointerReceiver: true }, { name: "GetVersion", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Api,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Methods", key: "Methods", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Method")), tag: "protobuf:\"bytes,2,rep,name=methods,proto3\" json:\"methods,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")), tag: "protobuf:\"bytes,3,rep,name=options,proto3\" json:\"options,omitempty\"" }, { name: "Version", key: "Version", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=version,proto3\" json:\"version,omitempty\"" }, { name: "SourceContext", key: "SourceContext", type: /* @__PURE__ */ $.pointerType("types.SourceContext"), tag: "protobuf:\"bytes,5,opt,name=source_context,json=sourceContext,proto3\" json:\"source_context,omitempty\"" }, { name: "Mixins", key: "Mixins", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Mixin")), tag: "protobuf:\"bytes,6,rep,name=mixins,proto3\" json:\"mixins,omitempty\"" }, { name: "Syntax", key: "Syntax", type: /* @__PURE__ */ $.basicType("int32", "types.Syntax"), tag: "protobuf:\"varint,7,opt,name=syntax,proto3,enum=google.protobuf.Syntax\" json:\"syntax,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Method {
	// The simple name of this method.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// A URL of the input message type.
	public get RequestTypeUrl(): string {
		return this._fields.RequestTypeUrl
	}

	public set RequestTypeUrl(value: string) {
		this._fields.RequestTypeUrl = value
	}

	// If true, the request is streamed.
	public get RequestStreaming(): boolean {
		return this._fields.RequestStreaming
	}

	public set RequestStreaming(value: boolean) {
		this._fields.RequestStreaming = value
	}

	// The URL of the output message type.
	public get ResponseTypeUrl(): string {
		return this._fields.ResponseTypeUrl
	}

	public set ResponseTypeUrl(value: string) {
		this._fields.ResponseTypeUrl = value
	}

	// If true, the response is streamed.
	public get ResponseStreaming(): boolean {
		return this._fields.ResponseStreaming
	}

	public set ResponseStreaming(value: boolean) {
		this._fields.ResponseStreaming = value
	}

	// Any metadata attached to the method.
	public get Options(): $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>) {
		this._fields.Options = value
	}

	// The source syntax of this method.
	public get Syntax(): __goscript_type_pb.Syntax {
		return this._fields.Syntax
	}

	public set Syntax(value: __goscript_type_pb.Syntax) {
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
		RequestTypeUrl: string
		RequestStreaming: boolean
		ResponseTypeUrl: string
		ResponseStreaming: boolean
		Options: $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>
		Syntax: __goscript_type_pb.Syntax
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, RequestTypeUrl?: string, RequestStreaming?: boolean, ResponseTypeUrl?: string, ResponseStreaming?: boolean, Options?: $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>, Syntax?: __goscript_type_pb.Syntax, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			RequestTypeUrl: init?.RequestTypeUrl ?? ("" as string),
			RequestStreaming: init?.RequestStreaming ?? (false as boolean),
			ResponseTypeUrl: init?.ResponseTypeUrl ?? ("" as string),
			ResponseStreaming: init?.ResponseStreaming ?? (false as boolean),
			Options: init?.Options ?? (null! as $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>),
			Syntax: init?.Syntax ?? (0 as __goscript_type_pb.Syntax),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Method {
		return new Method(this, true)
	}

	public __goscriptAssign(source: Method): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.RequestTypeUrl = values.RequestTypeUrl
		target.RequestStreaming = values.RequestStreaming
		target.ResponseTypeUrl = values.ResponseTypeUrl
		target.ResponseStreaming = values.ResponseStreaming
		target.Options = values.Options
		target.Syntax = values.Syntax
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Method | $.VarRef<Method> | null = this;
		const _this$: Method = _this == null ? $.pointerTarget<Method>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Method>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple5: any = $.typeAssertTuple<Method | $.VarRef<Method> | null>(that, /* @__PURE__ */ $.pointerType("types.Method"))
		let that1: Method | $.VarRef<Method> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			let __goscriptTuple6: any = $.typeAssertTuple<Method>(that, "types.Method")
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
		if (!$.stringEqual((_this$ as Method).Name, $.pointerValue<Method>(that1).Name)) {
			if ($.stringCompare((_this$ as Method).Name, $.pointerValue<Method>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Method).RequestTypeUrl, $.pointerValue<Method>(that1).RequestTypeUrl)) {
			if ($.stringCompare((_this$ as Method).RequestTypeUrl, $.pointerValue<Method>(that1).RequestTypeUrl) < 0) {
				return -1
			}
			return 1
		}
		if ((_this$ as Method).RequestStreaming != $.pointerValue<Method>(that1).RequestStreaming) {
			if (!(_this$ as Method).RequestStreaming) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Method).ResponseTypeUrl, $.pointerValue<Method>(that1).ResponseTypeUrl)) {
			if ($.stringCompare((_this$ as Method).ResponseTypeUrl, $.pointerValue<Method>(that1).ResponseTypeUrl) < 0) {
				return -1
			}
			return 1
		}
		if ((_this$ as Method).ResponseStreaming != $.pointerValue<Method>(that1).ResponseStreaming) {
			if (!(_this$ as Method).ResponseStreaming) {
				return -1
			}
			return 1
		}
		if ($.sliceLen((_this$ as Method).Options) != $.sliceLen($.pointerValue<Method>(that1).Options)) {
			if ($.sliceLen((_this$ as Method).Options) < $.sliceLen($.pointerValue<Method>(that1).Options)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget12 = (_this$ as Method).Options, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), i = 0; i < __goscriptRangeWindow12.length; i++) {
			{
				let c = __goscript_type_pb.Option.prototype.Compare.call($.arrayIndex((_this$ as Method).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Method>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))
				if (c != 0) {
					return c
				}
			}
		}
		if ((_this$ as Method).Syntax != $.pointerValue<Method>(that1).Syntax) {
			if ((_this$ as Method).Syntax < $.pointerValue<Method>(that1).Syntax) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Method).XXX_unrecognized, $.pointerValue<Method>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a2ec32096296c143, $.arrayToSlice<number>([1])]
	}

	public Equal(that: any): boolean {
		const _this: Method | $.VarRef<Method> | null = this;
		const _this$: Method = _this == null ? $.pointerTarget<Method>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Method>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple7: any = $.typeAssertTuple<Method | $.VarRef<Method> | null>(that, /* @__PURE__ */ $.pointerType("types.Method"))
		let that1: Method | $.VarRef<Method> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			let __goscriptTuple8: any = $.typeAssertTuple<Method>(that, "types.Method")
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
		if (!$.stringEqual((_this$ as Method).Name, $.pointerValue<Method>(that1).Name)) {
			return false
		}
		if (!$.stringEqual((_this$ as Method).RequestTypeUrl, $.pointerValue<Method>(that1).RequestTypeUrl)) {
			return false
		}
		if ((_this$ as Method).RequestStreaming != $.pointerValue<Method>(that1).RequestStreaming) {
			return false
		}
		if (!$.stringEqual((_this$ as Method).ResponseTypeUrl, $.pointerValue<Method>(that1).ResponseTypeUrl)) {
			return false
		}
		if ((_this$ as Method).ResponseStreaming != $.pointerValue<Method>(that1).ResponseStreaming) {
			return false
		}
		if ($.sliceLen((_this$ as Method).Options) != $.sliceLen($.pointerValue<Method>(that1).Options)) {
			return false
		}
		for (let __goscriptRangeTarget13 = (_this$ as Method).Options, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), i = 0; i < __goscriptRangeWindow13.length; i++) {
			if (!__goscript_type_pb.Option.prototype.Equal.call($.arrayIndex((_this$ as Method).Options!, i), $.interfaceValue($.arrayIndex($.pointerValue<Method>(that1).Options!, i), "*types.Option", /* @__PURE__ */ $.pointerType("types.Option")))) {
				return false
			}
		}
		if ((_this$ as Method).Syntax != $.pointerValue<Method>(that1).Syntax) {
			return false
		}
		if (!bytes.Equal((_this$ as Method).XXX_unrecognized, $.pointerValue<Method>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetName(): string {
		const m: Method | $.VarRef<Method> | null = this;
		if (m != null) {
			return $.pointerValue<Method>(m).Name
		}
		return ""
	}

	public GetOptions(): $.Slice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null> {
		const m: Method | $.VarRef<Method> | null = this;
		if (m != null) {
			return $.pointerValue<Method>(m).Options
		}
		return null
	}

	public GetRequestStreaming(): boolean {
		const m: Method | $.VarRef<Method> | null = this;
		if (m != null) {
			return $.pointerValue<Method>(m).RequestStreaming
		}
		return false
	}

	public GetRequestTypeUrl(): string {
		const m: Method | $.VarRef<Method> | null = this;
		if (m != null) {
			return $.pointerValue<Method>(m).RequestTypeUrl
		}
		return ""
	}

	public GetResponseStreaming(): boolean {
		const m: Method | $.VarRef<Method> | null = this;
		if (m != null) {
			return $.pointerValue<Method>(m).ResponseStreaming
		}
		return false
	}

	public GetResponseTypeUrl(): string {
		const m: Method | $.VarRef<Method> | null = this;
		if (m != null) {
			return $.pointerValue<Method>(m).ResponseTypeUrl
		}
		return ""
	}

	public GetSyntax(): __goscript_type_pb.Syntax {
		const m: Method | $.VarRef<Method> | null = this;
		if (m != null) {
			return $.pointerValue<Method>(m).Syntax
		}
		return 0
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Method | $.VarRef<Method> | null = this;
		const _this$: Method = _this == null ? $.pointerTarget<Method>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Method>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 11, "string")
		s = $.appendOne(s, "&types.Method{")
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as Method).Name))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("RequestTypeUrl: ", await fmt.Sprintf("%#v", (_this$ as Method).RequestTypeUrl))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("RequestStreaming: ", await fmt.Sprintf("%#v", (_this$ as Method).RequestStreaming))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("ResponseTypeUrl: ", await fmt.Sprintf("%#v", (_this$ as Method).ResponseTypeUrl))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("ResponseStreaming: ", await fmt.Sprintf("%#v", (_this$ as Method).ResponseStreaming))), ",\n"))
		if ((_this$ as Method).Options != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Options: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Method).Options, "[]*types.Option", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")))))), ",\n"))
		}
		s = $.appendOne(s, $.concatString(($.concatString("Syntax: ", await fmt.Sprintf("%#v", $.namedValueInterfaceValue<any>((_this$ as Method).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ",\n"))
		if ((_this$ as Method).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Method).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Method | $.VarRef<Method> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).Size() : Method.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Method.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Method | $.VarRef<Method> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).Size() : Method.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Method.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Method | $.VarRef<Method> | null = this;
		const m$: Method = m == null ? $.pointerTarget<Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Method>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Method).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Method).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Method).XXX_unrecognized)
		}
		if ((m$ as Method).Syntax != 0) {
			i = encodeVarintApi(dAtA, i, $.uint64((m$ as Method).Syntax))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ($.sliceLen((m$ as Method).Options) > 0) {
			for (let __goscriptSliceWindow4 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Method).Options) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_type_pb.Option.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Method).Options!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintApi(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = 0x32
			}
		}
		if ((m$ as Method).ResponseStreaming) {
			i--
			if ((m$ as Method).ResponseStreaming) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ($.stringLen((m$ as Method).ResponseTypeUrl) > 0) {
			i = i - ($.stringLen((m$ as Method).ResponseTypeUrl))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Method).ResponseTypeUrl)
			i = encodeVarintApi(dAtA, i, $.uint64($.stringLen((m$ as Method).ResponseTypeUrl)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as Method).RequestStreaming) {
			i--
			if ((m$ as Method).RequestStreaming) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ($.stringLen((m$ as Method).RequestTypeUrl) > 0) {
			i = i - ($.stringLen((m$ as Method).RequestTypeUrl))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Method).RequestTypeUrl)
			i = encodeVarintApi(dAtA, i, $.uint64($.stringLen((m$ as Method).RequestTypeUrl)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as Method).Name) > 0) {
			i = i - ($.stringLen((m$ as Method).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Method).Name)
			i = encodeVarintApi(dAtA, i, $.uint64($.stringLen((m$ as Method).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Method | $.VarRef<Method> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).Size() : Method.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Method | $.VarRef<Method> | null = this;
		$.assignStruct($.pointerValue<Method>(m), $.markAsStructValue(new Method()))
	}

	public Size(): number {
		const m: Method | $.VarRef<Method> | null = this;
		let n: number = 0
		const m$: Method = m == null ? $.pointerTarget<Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Method>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Method).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		l = $.stringLen((m$ as Method).RequestTypeUrl)
		if (l > 0) {
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		if ((m$ as Method).RequestStreaming) {
			n = n + (2)
		}
		l = $.stringLen((m$ as Method).ResponseTypeUrl)
		if (l > 0) {
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		if ((m$ as Method).ResponseStreaming) {
			n = n + (2)
		}
		if ($.sliceLen((m$ as Method).Options) > 0) {
			for (let __goscriptRangeTarget14 = (m$ as Method).Options, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as __goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_type_pb.Option).Size() : __goscript_type_pb.Option.prototype.Size.call(e))
				n = n + ((1 + l) + sovApi($.uint64(l)))
			}
		}
		if ((m$ as Method).Syntax != 0) {
			n = n + (1 + sovApi($.uint64((m$ as Method).Syntax)))
		}
		if ((m$ as Method).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Method).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Method | $.VarRef<Method> | null = this;
		const _this$: Method = _this == null ? $.pointerTarget<Method>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Method>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForOptions = "[]*Option{"
		for (let __goscriptRangeTarget15 = (_this$ as Method).Options, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as __goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null)
			repeatedStringForOptions = $.concatString(repeatedStringForOptions, $.concatString(strings.Replace(fmt.Sprintf("%v", $.interfaceValue(f, "*types.Option", /* @__PURE__ */ $.pointerType("types.Option"))), "Option", "Option", 1), ","))
		}
		repeatedStringForOptions = $.concatString(repeatedStringForOptions, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Method{", $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as Method).Name))), ","), $.concatString(($.concatString("RequestTypeUrl:", fmt.Sprintf("%v", (_this$ as Method).RequestTypeUrl))), ","), $.concatString(($.concatString("RequestStreaming:", fmt.Sprintf("%v", (_this$ as Method).RequestStreaming))), ","), $.concatString(($.concatString("ResponseTypeUrl:", fmt.Sprintf("%v", (_this$ as Method).ResponseTypeUrl))), ","), $.concatString(($.concatString("ResponseStreaming:", fmt.Sprintf("%v", (_this$ as Method).ResponseStreaming))), ","), $.concatString(($.concatString("Options:", repeatedStringForOptions)), ","), $.concatString(($.concatString("Syntax:", fmt.Sprintf("%v", $.namedValueInterfaceValue<any>((_this$ as Method).Syntax, "types.Syntax", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Method).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Method | $.VarRef<Method> | null = this;
		const m$: Method = m == null ? $.pointerTarget<Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Method>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowApi
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
				return fmt.Errorf("proto: Method: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Method: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Method).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestTypeUrl", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Method).RequestTypeUrl = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestStreaming", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
					;(m$ as Method).RequestStreaming = (v != 0)
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ResponseTypeUrl", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Method).ResponseTypeUrl = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ResponseStreaming", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
					;(m$ as Method).ResponseStreaming = (v != 0)
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Options", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
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
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Method).Options = $.appendOne((m$ as Method).Options, new __goscript_type_pb.Option(), $.appendZeros.nil)
					{
						let err = __goscript_type_pb.Option.prototype.Unmarshal.call($.arrayIndex((m$ as Method).Options!, $.sliceLen((m$ as Method).Options) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Syntax", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Method).Syntax = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as Method).Syntax = (m$ as Method).Syntax | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipApi($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthApi
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Method).XXX_unrecognized = $.appendSlice((m$ as Method).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Method | $.VarRef<Method> | null = this;
		xxx_messageInfo_Method.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Method", /* @__PURE__ */ $.pointerType("types.Method")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Method | $.VarRef<Method> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Method.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Method", /* @__PURE__ */ $.pointerType("types.Method")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).MarshalToSizedBuffer(b) : Method.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Method | $.VarRef<Method> | null = this;
		xxx_messageInfo_Method.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Method", /* @__PURE__ */ $.pointerType("types.Method")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Method"
	}

	public XXX_Size(): number {
		const m: Method | $.VarRef<Method> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).Size() : Method.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Method | $.VarRef<Method> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).Unmarshal(b) : Method.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.Method",
		() => new Method(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")) }], pointerReceiver: true }, { name: "GetRequestStreaming", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetRequestTypeUrl", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetResponseStreaming", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetResponseTypeUrl", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSyntax", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "types.Syntax") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Method,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "RequestTypeUrl", key: "RequestTypeUrl", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=request_type_url,json=requestTypeUrl,proto3\" json:\"request_type_url,omitempty\"" }, { name: "RequestStreaming", key: "RequestStreaming", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,3,opt,name=request_streaming,json=requestStreaming,proto3\" json:\"request_streaming,omitempty\"" }, { name: "ResponseTypeUrl", key: "ResponseTypeUrl", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=response_type_url,json=responseTypeUrl,proto3\" json:\"response_type_url,omitempty\"" }, { name: "ResponseStreaming", key: "ResponseStreaming", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,5,opt,name=response_streaming,json=responseStreaming,proto3\" json:\"response_streaming,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Option")), tag: "protobuf:\"bytes,6,rep,name=options,proto3\" json:\"options,omitempty\"" }, { name: "Syntax", key: "Syntax", type: /* @__PURE__ */ $.basicType("int32", "types.Syntax"), tag: "protobuf:\"varint,7,opt,name=syntax,proto3,enum=google.protobuf.Syntax\" json:\"syntax,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Mixin {
	// The fully qualified name of the interface which is included.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// If non-empty specifies a path under which inherited HTTP paths
	// are rooted.
	public get Root(): string {
		return this._fields.Root
	}

	public set Root(value: string) {
		this._fields.Root = value
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
		Root: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, Root?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Root: init?.Root ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Mixin {
		return new Mixin(this, true)
	}

	public __goscriptAssign(source: Mixin): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Root = values.Root
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Mixin | $.VarRef<Mixin> | null = this;
		const _this$: Mixin = _this == null ? $.pointerTarget<Mixin>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Mixin>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple10: any = $.typeAssertTuple<Mixin | $.VarRef<Mixin> | null>(that, /* @__PURE__ */ $.pointerType("types.Mixin"))
		let that1: Mixin | $.VarRef<Mixin> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			let __goscriptTuple11: any = $.typeAssertTuple<Mixin>(that, "types.Mixin")
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
		if (!$.stringEqual((_this$ as Mixin).Name, $.pointerValue<Mixin>(that1).Name)) {
			if ($.stringCompare((_this$ as Mixin).Name, $.pointerValue<Mixin>(that1).Name) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Mixin).Root, $.pointerValue<Mixin>(that1).Root)) {
			if ($.stringCompare((_this$ as Mixin).Root, $.pointerValue<Mixin>(that1).Root) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Mixin).XXX_unrecognized, $.pointerValue<Mixin>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a2ec32096296c143, $.arrayToSlice<number>([2])]
	}

	public Equal(that: any): boolean {
		const _this: Mixin | $.VarRef<Mixin> | null = this;
		const _this$: Mixin = _this == null ? $.pointerTarget<Mixin>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Mixin>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple12: any = $.typeAssertTuple<Mixin | $.VarRef<Mixin> | null>(that, /* @__PURE__ */ $.pointerType("types.Mixin"))
		let that1: Mixin | $.VarRef<Mixin> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			let __goscriptTuple13: any = $.typeAssertTuple<Mixin>(that, "types.Mixin")
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
		if (!$.stringEqual((_this$ as Mixin).Name, $.pointerValue<Mixin>(that1).Name)) {
			return false
		}
		if (!$.stringEqual((_this$ as Mixin).Root, $.pointerValue<Mixin>(that1).Root)) {
			return false
		}
		if (!bytes.Equal((_this$ as Mixin).XXX_unrecognized, $.pointerValue<Mixin>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetName(): string {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		if (m != null) {
			return $.pointerValue<Mixin>(m).Name
		}
		return ""
	}

	public GetRoot(): string {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		if (m != null) {
			return $.pointerValue<Mixin>(m).Root
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Mixin | $.VarRef<Mixin> | null = this;
		const _this$: Mixin = _this == null ? $.pointerTarget<Mixin>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Mixin>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&types.Mixin{")
		s = $.appendOne(s, $.concatString(($.concatString("Name: ", await fmt.Sprintf("%#v", (_this$ as Mixin).Name))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Root: ", await fmt.Sprintf("%#v", (_this$ as Mixin).Root))), ",\n"))
		if ((_this$ as Mixin).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Mixin).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).Size() : Mixin.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Mixin.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).Size() : Mixin.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Mixin.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		const m$: Mixin = m == null ? $.pointerTarget<Mixin>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mixin>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Mixin).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Mixin).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Mixin).XXX_unrecognized)
		}
		if ($.stringLen((m$ as Mixin).Root) > 0) {
			i = i - ($.stringLen((m$ as Mixin).Root))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Mixin).Root)
			i = encodeVarintApi(dAtA, i, $.uint64($.stringLen((m$ as Mixin).Root)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as Mixin).Name) > 0) {
			i = i - ($.stringLen((m$ as Mixin).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Mixin).Name)
			i = encodeVarintApi(dAtA, i, $.uint64($.stringLen((m$ as Mixin).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).Size() : Mixin.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Mixin | $.VarRef<Mixin> | null = this;
		$.assignStruct($.pointerValue<Mixin>(m), $.markAsStructValue(new Mixin()))
	}

	public Size(): number {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		let n: number = 0
		const m$: Mixin = m == null ? $.pointerTarget<Mixin>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mixin>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Mixin).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		l = $.stringLen((m$ as Mixin).Root)
		if (l > 0) {
			n = n + ((1 + l) + sovApi($.uint64(l)))
		}
		if ((m$ as Mixin).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Mixin).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Mixin | $.VarRef<Mixin> | null = this;
		const _this$: Mixin = _this == null ? $.pointerTarget<Mixin>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Mixin>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Mixin{", $.concatString(($.concatString("Name:", fmt.Sprintf("%v", (_this$ as Mixin).Name))), ","), $.concatString(($.concatString("Root:", fmt.Sprintf("%v", (_this$ as Mixin).Root))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Mixin).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Mixin | $.VarRef<Mixin> | null = this;
		const m$: Mixin = m == null ? $.pointerTarget<Mixin>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mixin>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowApi
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Mixin: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Mixin: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowApi
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Mixin).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Root", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowApi
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthApi
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthApi
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Mixin).Root = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipApi($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthApi
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Mixin).XXX_unrecognized = $.appendSlice((m$ as Mixin).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Mixin | $.VarRef<Mixin> | null = this;
		xxx_messageInfo_Mixin.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Mixin", /* @__PURE__ */ $.pointerType("types.Mixin")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Mixin.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Mixin", /* @__PURE__ */ $.pointerType("types.Mixin")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).MarshalToSizedBuffer(b) : Mixin.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		xxx_messageInfo_Mixin.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Mixin", /* @__PURE__ */ $.pointerType("types.Mixin")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Mixin"
	}

	public XXX_Size(): number {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).Size() : Mixin.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Mixin | $.VarRef<Mixin> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mixin).Unmarshal(b) : Mixin.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.Mixin",
		() => new Mixin(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetRoot", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Mixin,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Root", key: "Root", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=root,proto3\" json:\"root,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_Api: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Api(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Api.value, __goscriptValue)
}

export let xxx_messageInfo_Method: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Method(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Method.value, __goscriptValue)
}

export let xxx_messageInfo_Mixin: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Mixin(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Mixin.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Api", /* @__PURE__ */ $.pointerType("types.Api")), "google.protobuf.Api")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Method", /* @__PURE__ */ $.pointerType("types.Method")), "google.protobuf.Method")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Mixin", /* @__PURE__ */ $.pointerType("types.Mixin")), "google.protobuf.Mixin")
}

function __goscriptInit1(): void {
	proto.RegisterFile("google/protobuf/api.proto", fileDescriptor_a2ec32096296c143)
}

export let fileDescriptor_a2ec32096296c143: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 148, 145, 49, 111, 19, 49, 20, 199, 235, 187, 228, 82, 92, 145, 130, 145, 192, 100, 176, 78, 21, 195, 9, 196, 69, 148, 79, 208, 32, 212, 1, 33, 162, 11, 8, 137, 37, 74, 131, 9, 150, 238, 108, 99, 59, 144, 76, 240, 89, 152, 16, 35, 223, 128, 173, 35, 35, 35, 185, 46, 140, 29, 25, 145, 125, 231, 166, 92, 131, 4, 155, 223, 251, 255, 252, 247, 123, 127, 195, 155, 51, 33, 102, 57, 237, 75, 37, 140, 56, 154, 191, 234, 79, 36, 75, 93, 129, 118, 43, 41, 245, 82, 239, 86, 147, 213, 98, 174, 166, 116, 60, 21, 220, 208, 133, 169, 192, 94, 175, 73, 153, 165, 172, 77, 246, 190, 6, 48, 60, 144, 12, 33, 216, 226, 147, 130, 98, 16, 131, 228, 82, 230, 206, 232, 30, 236, 20, 212, 188, 22, 47, 53, 14, 226, 48, 217, 217, 191, 145, 54, 6, 72, 31, 59, 61, 243, 156, 189, 34, 164, 97, 130, 107, 28, 254, 229, 202, 19, 167, 103, 158, 67, 24, 118, 222, 82, 165, 153, 224, 184, 229, 30, 247, 37, 122, 8, 187, 127, 238, 131, 219, 49, 72, 118, 246, 201, 5, 207, 145, 195, 30, 84, 84, 118, 89, 159, 47, 81, 10, 163, 130, 45, 24, 215, 56, 114, 35, 93, 191, 184, 133, 149, 179, 154, 66, 125, 24, 233, 37, 55, 147, 5, 238, 196, 32, 233, 110, 88, 97, 228, 228, 172, 198, 246, 190, 4, 48, 170, 130, 216, 24, 99, 2, 175, 40, 250, 102, 78, 181, 25, 219, 224, 199, 115, 149, 227, 192, 233, 221, 186, 255, 116, 41, 233, 51, 149, 163, 59, 240, 170, 39, 181, 81, 116, 82, 48, 62, 195, 97, 12, 146, 237, 204, 91, 140, 124, 31, 221, 182, 176, 150, 130, 107, 186, 246, 173, 18, 220, 245, 130, 55, 190, 11, 209, 25, 187, 118, 110, 59, 231, 51, 151, 181, 245, 185, 95, 140, 254, 241, 23, 255, 59, 180, 62, 108, 187, 216, 55, 70, 134, 96, 75, 9, 97, 234, 152, 220, 121, 240, 254, 251, 138, 108, 157, 174, 8, 248, 181, 34, 224, 67, 73, 192, 167, 146, 128, 227, 146, 128, 111, 37, 1, 63, 74, 2, 126, 150, 100, 235, 212, 246, 79, 8, 56, 62, 33, 0, 94, 155, 138, 162, 57, 198, 96, 251, 64, 178, 161, 45, 134, 224, 69, 219, 230, 166, 63, 6, 225, 225, 112, 240, 57, 32, 135, 21, 58, 244, 19, 63, 167, 121, 254, 136, 139, 119, 220, 198, 168, 143, 34, 231, 113, 255, 119, 0, 0, 0, 255, 255, 43, 100, 64, 64, 161, 3, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_a2ec32096296c143(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_a2ec32096296c143 = __goscriptValue
}

export async function valueToGoStringApi(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintApi(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovApi(v))
	let base = offset
	for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedApi(r: randyApi | null, easy: boolean): globalThis.Promise<Api | $.VarRef<Api> | null> {
	let _this: Api | $.VarRef<Api> | null = new Api()
	let _this$: Api = _this == null ? $.pointerTarget<Api>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Api>(_this);
	;(_this$ as Api).Name = await randStringApi(r)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Api).Methods = $.makeSlice<Method | $.VarRef<Method> | null>(v1)
		for (let i = 0; i < v1; i++) {
			$.sliceElems((_this$ as Api).Methods!)[$.sliceSlot((_this$ as Api).Methods!, i)] = await NewPopulatedMethod(r, easy)
		}
	}
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Api).Options = $.makeSlice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>(v2)
		for (let i = 0; i < v2; i++) {
			$.sliceElems((_this$ as Api).Options!)[$.sliceSlot((_this$ as Api).Options!, i)] = await __goscript_type_pb.NewPopulatedOption((r as __goscript_type_pb.randyType | null), easy)
		}
	}
	;(_this$ as Api).Version = await randStringApi(r)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		;(_this$ as Api).SourceContext = await __goscript_source_context_pb.NewPopulatedSourceContext((r as __goscript_source_context_pb.randySourceContext | null), easy)
	}
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Api).Mixins = $.makeSlice<Mixin | $.VarRef<Mixin> | null>(v3)
		for (let i = 0; i < v3; i++) {
			$.sliceElems((_this$ as Api).Mixins!)[$.sliceSlot((_this$ as Api).Mixins!, i)] = await NewPopulatedMixin(r, easy)
		}
	}
	;(_this$ as Api).Syntax = $.int($.arrayIndex($.arrayToSlice<number>([0, 1])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 32)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Api).XXX_unrecognized = await randUnrecognizedApi(r, 8)
	}
	return _this
}

export async function NewPopulatedMethod(r: randyApi | null, easy: boolean): globalThis.Promise<Method | $.VarRef<Method> | null> {
	let _this: Method | $.VarRef<Method> | null = new Method()
	let _this$: Method = _this == null ? $.pointerTarget<Method>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Method>(_this);
	;(_this$ as Method).Name = await randStringApi(r);
	;(_this$ as Method).RequestTypeUrl = await randStringApi(r);
	;(_this$ as Method).RequestStreaming = ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0);
	;(_this$ as Method).ResponseTypeUrl = await randStringApi(r);
	;(_this$ as Method).ResponseStreaming = ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v4 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Method).Options = $.makeSlice<__goscript_type_pb.Option | $.VarRef<__goscript_type_pb.Option> | null>(v4)
		for (let i = 0; i < v4; i++) {
			$.sliceElems((_this$ as Method).Options!)[$.sliceSlot((_this$ as Method).Options!, i)] = await __goscript_type_pb.NewPopulatedOption((r as __goscript_type_pb.randyType | null), easy)
		}
	}
	;(_this$ as Method).Syntax = $.int($.arrayIndex($.arrayToSlice<number>([0, 1])!, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 32)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Method).XXX_unrecognized = await randUnrecognizedApi(r, 8)
	}
	return _this
}

export async function NewPopulatedMixin(r: randyApi | null, easy: boolean): globalThis.Promise<Mixin | $.VarRef<Mixin> | null> {
	let _this: Mixin | $.VarRef<Mixin> | null = new Mixin()
	let _this$: Mixin = _this == null ? $.pointerTarget<Mixin>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Mixin>(_this);
	;(_this$ as Mixin).Name = await randStringApi(r);
	;(_this$ as Mixin).Root = await randStringApi(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Mixin).XXX_unrecognized = await randUnrecognizedApi(r, 3)
	}
	return _this
}

export async function randUTF8RuneApi(r: randyApi | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringApi(r: randyApi | null): globalThis.Promise<string> {
	let v5 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v5, undefined, "number")
	for (let __goscriptSliceWindow8 = $.sliceRange(tmps), i = 0; i < v5; i++) {
		;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] = await randUTF8RuneApi(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedApi(r: randyApi | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldApi(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldApi(dAtA: $.Slice<number>, r: randyApi | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateApi(dAtA, $.uint64(key))
			let v6 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v6 = $.int64Mul(v6, -1n)
			}
			dAtA = encodeVarintPopulateApi(dAtA, $.uint64(v6))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateApi(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateApi(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateApi(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateApi(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyApi, null>) : $.pointerValue<Exclude<randyApi, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateApi(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovApi(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozApi(x: bigint): number {
	let n: number = 0
	return sovApi($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringApi(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipApi(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowApi]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
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
						return [0, ErrIntOverflowApi]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowApi]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthApi]
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
					return [0, ErrUnexpectedEndOfGroupApi]
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
			return [0, ErrInvalidLengthApi]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthApi: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthApi(__goscriptValue: $.GoError): void {
	ErrInvalidLengthApi = __goscriptValue
}

export let ErrIntOverflowApi: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowApi(__goscriptValue: $.GoError): void {
	ErrIntOverflowApi = __goscriptValue
}

export let ErrUnexpectedEndOfGroupApi: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupApi(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupApi = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({EnumDescriptor: (receiver: any, ...args: any[]) => (__goscript_type_pb.Syntax_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_type_pb.Syntax_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "types.Syntax"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
