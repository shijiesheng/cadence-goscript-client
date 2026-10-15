// Generated file based on pointer_reflect.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import type * as __goscript_api_export from "./api_export.gs.ts"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import type * as __goscript_legacy_export from "./legacy_export.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.Pointer", "impl.offset", "impl.pointer", "impl.atomicNilMessage"])

export type Pointer = any

$.registerInterfaceType(
	"impl.Pointer",
	null,
	[]
);

export class offset {
	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get _export(): ((v: any, i: number) => any | globalThis.Promise<any>) | null {
		return this._fields._export
	}

	public set _export(value: ((v: any, i: number) => any | globalThis.Promise<any>) | null) {
		this._fields._export = value
	}

	public _fields: {
		index: number
		_export: ((v: any, i: number) => any | globalThis.Promise<any>) | null
	}

	constructor(init?: Partial<{index?: number, _export?: ((v: any, i: number) => any | globalThis.Promise<any>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			index: init?.index ?? (0 as number),
			_export: init?._export ?? (null! as ((v: any, i: number) => any | globalThis.Promise<any>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): offset {
		return new offset(this, true)
	}

	public __goscriptAssign(source: offset): void {
		const target = this._fields
		const values = source._fields
		target.index = values.index
		target._export = values._export
	}

	public IsValid(): boolean {
		const f = this;
		return f.index >= 0
	}

	static __typeInfo = $.registerStructType(
		"impl.offset",
		() => new offset(),
		() => [$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])],
		offset,
		() => [/* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("export", ({ kind: $.TypeKind.Function, name: "impl.exporter", params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo), [1], 8, false, { key: "_export", pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class pointer {
	public get v(): reflect.Value {
		return this._fields.v
	}

	public set v(value: reflect.Value) {
		this._fields.v = value
	}

	public _fields: {
		v: reflect.Value
	}

	constructor(init?: Partial<{v?: reflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ? $.markAsStructValue($.cloneStructValue(init.v)) : $.markAsStructValue(new reflect.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pointer {
		return new pointer(this, true)
	}

	public __goscriptAssign(source: pointer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.v, values.v)
	}

	public AppendPointerSlice(v: pointer): void {
		const p = this;
		let sp = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
		$.markAsStructValue($.cloneStructValue(sp)).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(sp)), $.markAsStructValue($.cloneStructValue(v.v))))))
	}

	public async Apply(f: offset): globalThis.Promise<pointer> {
		const p = this;
		if (f._export != null) {
			{
				let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((__goscriptAwait = f._export!($.markAsStructValue($.cloneStructValue(p.v)).Interface(), f.index), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))))
				if ($.markAsStructValue($.cloneStructValue(v)).IsValid()) {
					return new pointer({v: $.markAsStructValue($.cloneStructValue(v))}, true)
				}
			}
		}
		return (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Field(f.index))).Addr())); return new pointer({v: __goscriptLiteralField0}, true) })()
	}

	public async AsIfaceOf(t: reflect.Type | null): globalThis.Promise<any> {
		const p = this;
		return $.markAsStructValue($.cloneStructValue((await p.AsValueOf(t)))).Interface()
	}

	public async AsValueOf(t: reflect.Type | null): globalThis.Promise<reflect.Value> {
		const p = this;
		{
			let got = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(p.v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!$.comparableEqual(got, t)) {
				$.panic(await fmt.Sprintf("invalid type: got %v, want %v", (got as any), (t as any)))
			}
		}
		return $.markAsStructValue($.cloneStructValue(p.v))
	}

	public Bool(): $.VarRef<boolean> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<boolean> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))
	}

	public BoolPtr(): $.VarRef<$.VarRef<boolean> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<boolean> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))))
	}

	public BoolSlice(): $.VarRef<$.Slice<boolean>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<boolean>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))))
	}

	public Bytes(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}

	public BytesPtr(): $.VarRef<$.VarRef<$.Slice<number>> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<$.Slice<number>> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	}

	public BytesSlice(): $.VarRef<$.Slice<$.Slice<number>>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<$.Slice<number>>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	}

	public Elem(): pointer {
		const p = this;
		return (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())); return new pointer({v: __goscriptLiteralField1}, true) })()
	}

	public Extensions(): $.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<globalThis.Map<number, __goscript_codec_extension.ExtensionField> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField")))
	}

	public Float32(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))
	}

	public Float32Ptr(): $.VarRef<$.VarRef<number> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32"))))
	}

	public Float32Slice(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"))))
	}

	public Float64(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))
	}

	public Float64Ptr(): $.VarRef<$.VarRef<number> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))))
	}

	public Float64Slice(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))))
	}

	public Int32(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
	}

	public Int32Ptr(): $.VarRef<$.VarRef<number> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))))
	}

	public Int32Slice(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"))))
	}

	public Int64(): $.VarRef<bigint> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))
	}

	public Int64Ptr(): $.VarRef<$.VarRef<bigint> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<bigint> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))))
	}

	public Int64Slice(): $.VarRef<$.Slice<bigint>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<bigint>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))))
	}

	public IsNil(): boolean {
		const p = this;
		return $.markAsStructValue($.cloneStructValue(p.v)).IsNil()
	}

	public PointerSlice(): $.Slice<pointer> {
		const p = this;
		// TODO: reconsider this
		if ($.markAsStructValue($.cloneStructValue(p.v)).IsNil()) {
			return null
		}
		let n = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Len()
		let s: $.Slice<pointer> = $.makeSlice<pointer>(n, undefined, undefined, () => new pointer(undefined, true))
		for (let __goscriptSliceWindow0 = $.sliceRange(s), i = 0; i < n; i++) {
			$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Index(i))); return new pointer({v: __goscriptLiteralField2}, true) })())
		}
		return s
	}

	public SetPointer(v: pointer): void {
		const p = this;
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(v.v)))
	}

	public String(): $.VarRef<string> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<string> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))
	}

	public StringPtr(): $.VarRef<$.VarRef<string> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<string> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
	}

	public StringSlice(): $.VarRef<$.Slice<string>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<string>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
	}

	public Uint32(): $.VarRef<number> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<number> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))
	}

	public Uint32Ptr(): $.VarRef<$.VarRef<number> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<number> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))))
	}

	public Uint32Slice(): $.VarRef<$.Slice<number>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"))))
	}

	public Uint64(): $.VarRef<bigint> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<bigint> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))
	}

	public Uint64Ptr(): $.VarRef<$.VarRef<bigint> | null> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.VarRef<bigint> | null> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))))
	}

	public Uint64Slice(): $.VarRef<$.Slice<bigint>> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<$.Slice<bigint>> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"))))
	}

	public WeakFields(): $.VarRef<__goscript_weak.weakFields> | null {
		const p = this;
		return $.mustTypeAssert<$.VarRef<__goscript_message.WeakFields> | null>($.markAsStructValue($.cloneStructValue(p.v)).Interface(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "protoreflect.ProtoMessage")))
	}

	public growBoolSlice(addCap: number): void {
		const p = this;
		growSlice(p, addCap)
	}

	public growFloat32Slice(addCap: number): void {
		const p = this;
		growSlice(p, addCap)
	}

	public growFloat64Slice(addCap: number): void {
		const p = this;
		growSlice(p, addCap)
	}

	public growInt32Slice(addCap: number): void {
		const p = this;
		growSlice(p, addCap)
	}

	public growInt64Slice(addCap: number): void {
		const p = this;
		growSlice(p, addCap)
	}

	public growUint32Slice(addCap: number): void {
		const p = this;
		growSlice(p, addCap)
	}

	public growUint64Slice(addCap: number): void {
		const p = this;
		growSlice(p, addCap)
	}

	static __typeInfo = $.registerStructType(
		"impl.pointer",
		() => new pointer(),
		() => [$.methodSignature("AppendPointerSlice", [["v", "impl.pointer"]]), $.methodSignature("Apply", [["f", "impl.offset"]], ["impl.pointer"]), $.methodSignature("AsIfaceOf", [["t", "reflect.Type"]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("AsValueOf", [["t", "reflect.Type"]], ["reflect.Value"]), $.methodSignature("Bool", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))]), $.methodSignature("BoolPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")))]), $.methodSignature("BoolSlice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")))]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]), $.methodSignature("BytesPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]), $.methodSignature("BytesSlice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]), $.methodSignature("Elem", [], ["impl.pointer"]), $.methodSignature("Extensions", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), "impl.ExtensionField"))]), $.methodSignature("Float32", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32"))]), $.methodSignature("Float32Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float32")))]), $.methodSignature("Float32Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")))]), $.methodSignature("Float64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Float64Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")))]), $.methodSignature("Float64Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")))]), $.methodSignature("Int32", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))]), $.methodSignature("Int32Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))]), $.methodSignature("Int32Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))]), $.methodSignature("Int64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))]), $.methodSignature("Int64Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")))]), $.methodSignature("Int64Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")))]), $.methodSignature("IsNil", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("PointerSlice", [], [/* @__PURE__ */ $.sliceType("impl.pointer")]), $.methodSignature("SetPointer", [["v", "impl.pointer"]]), $.methodSignature("String", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))]), $.methodSignature("StringPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))]), $.methodSignature("StringSlice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]), $.methodSignature("Uint32", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))]), $.methodSignature("Uint32Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")))]), $.methodSignature("Uint32Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")))]), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))]), $.methodSignature("Uint64Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")))]), $.methodSignature("Uint64Slice", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")))]), $.methodSignature("WeakFields", [], [/* @__PURE__ */ $.pointerType("impl.weakFields")]), $.methodSignature("growBoolSlice", [["addCap", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("growFloat32Slice", [["addCap", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("growFloat64Slice", [["addCap", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("growInt32Slice", [["addCap", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("growInt64Slice", [["addCap", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("growUint32Slice", [["addCap", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("growUint64Slice", [["addCap", /* @__PURE__ */ $.basicType("int")]])],
		pointer,
		() => [/* @__PURE__ */ $.structField("v", "reflect.Value", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export class atomicNilMessage {
	public get once(): sync.Once {
		return this._fields.once
	}

	public set once(value: sync.Once) {
		this._fields.once = value
	}

	public get m(): __goscript_message_reflect.messageReflectWrapper {
		return this._fields.m
	}

	public set m(value: __goscript_message_reflect.messageReflectWrapper) {
		this._fields.m = value
	}

	public _fields: {
		once: sync.Once
		m: __goscript_message_reflect.messageReflectWrapper
	}

	constructor(init?: Partial<{once?: sync.Once, m?: __goscript_message_reflect.messageReflectWrapper}>, __goscriptValue?: boolean) {
		this._fields = {
			once: init?.once ? $.markAsStructValue($.cloneStructValue(init.once)) : $.markAsStructValue(new sync.Once()),
			m: init?.m ? init.m.clone() : new __goscript_message_reflect.messageReflectWrapper(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): atomicNilMessage {
		return new atomicNilMessage(this, true)
	}

	public __goscriptAssign(source: atomicNilMessage): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.once, values.once)
		$.assignStruct(target.m, values.m)
	}

	public async Init(mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null): globalThis.Promise<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null> {
		const m: atomicNilMessage | $.VarRef<atomicNilMessage> | null = this;
		const m$: atomicNilMessage = m == null ? $.pointerTarget<atomicNilMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<atomicNilMessage>(m)
		await (m$ as atomicNilMessage).once.Do($.functionValue((): void => {
			$.assignStruct((m$ as atomicNilMessage).m.p, pointerOfIface($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.pointerValue<__goscript_message.MessageInfo>(mi).GoReflectType)!))).Interface()));
			;(m$ as atomicNilMessage).m.mi = mi
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return $.fieldRef((m$ as atomicNilMessage)._fields, "m")
	}

	static __typeInfo = $.registerStructType(
		"impl.atomicNilMessage",
		() => new atomicNilMessage(),
		() => [$.methodSignature("Init", [["mi", /* @__PURE__ */ $.pointerType("impl.MessageInfo")]], [/* @__PURE__ */ $.pointerType("impl.messageReflectWrapper")], true)],
		atomicNilMessage,
		() => [/* @__PURE__ */ $.structField("once", "sync.Once", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" }), /* @__PURE__ */ $.structField("m", "impl.messageReflectWrapper", [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export const UnsafeEnabled: boolean = false

export function offsetOf(f: reflect.StructField, x: __goscript_message.exporter | null): offset {
	if ($.sliceLen(f.Index) != 1) {
		$.panic("embedded structs are not supported")
	}
	if ($.stringEqual(f.PkgPath, "")) {
		return new offset({index: $.arrayIndex(f.Index!, 0)}, true)
	}
	if (x == null) {
		$.panic("exporter must be provided for unexported field")
	}
	return new offset({index: $.arrayIndex(f.Index!, 0), _export: x}, true)
}

export var invalidOffset: offset

export function __goscript_init_invalidOffset(): void {
	if (((invalidOffset) as any) === undefined) {
		invalidOffset = new offset({index: -1}, true)
	}
}

export function __goscript_get_invalidOffset(): offset {
	if (((invalidOffset) as any) === undefined) {
		__goscript_init_invalidOffset()
	}
	return invalidOffset
}

export function __goscript_set_invalidOffset(__goscriptValue: offset): void {
	$.assignStruct(invalidOffset, __goscriptValue)
}

export var zeroOffset: offset

export function __goscript_init_zeroOffset(): void {
	if (((zeroOffset) as any) === undefined) {
		zeroOffset = new offset({index: 0}, true)
	}
}

export function __goscript_get_zeroOffset(): offset {
	if (((zeroOffset) as any) === undefined) {
		__goscript_init_zeroOffset()
	}
	return zeroOffset
}

export function __goscript_set_zeroOffset(__goscriptValue: offset): void {
	$.assignStruct(zeroOffset, __goscriptValue)
}

export function pointerOf(p: Pointer | null): pointer {
	return pointerOfIface((p as any))
}

export function pointerOfValue(v: reflect.Value): pointer {
	return new pointer({v: $.markAsStructValue($.cloneStructValue(v))}, true)
}

export function pointerOfIface(v: any): pointer {
	return (() => { const __goscriptLiteralField3 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v))); return new pointer({v: __goscriptLiteralField3}, true) })()
}

export function growSlice(p: pointer, addCap: number): void {
	// TODO: Once we only support Go 1.20 and newer, use reflect.Grow.
	let _in = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem()))
	let out = $.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(_in)).Type())!, $.markAsStructValue($.cloneStructValue(_in)).Len(), $.markAsStructValue($.cloneStructValue(_in)).Len() + addCap)))
	reflect.Copy($.markAsStructValue($.cloneStructValue(out)), $.markAsStructValue($.cloneStructValue(_in)))
	$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(p.v)).Elem())).Set($.markAsStructValue($.cloneStructValue(out)))
}

var __goscriptAwait: any
