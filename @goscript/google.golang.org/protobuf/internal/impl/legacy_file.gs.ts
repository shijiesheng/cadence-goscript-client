// Generated file based on legacy_file.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as gzip from "@goscript/compress/gzip/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/bytes/index.js"
import "@goscript/compress/gzip/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.enumV1", "impl.messageV1", "impl.resolverOnly"])

export type enumV1 = {
	EnumDescriptor(): [$.Slice<number>, $.Slice<number>] | globalThis.Promise<[$.Slice<number>, $.Slice<number>]>
}

$.registerInterfaceType(
	"impl.enumV1",
	null,
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))])]
);

export type messageV1 = {
	Descriptor(): [$.Slice<number>, $.Slice<number>] | globalThis.Promise<[$.Slice<number>, $.Slice<number>]>
}

$.registerInterfaceType(
	"impl.messageV1",
	null,
	[$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))])]
);

export class resolverOnly {
	public get reg(): protoregistry.Files | $.VarRef<protoregistry.Files> | null {
		return this._fields.reg
	}

	public set reg(value: protoregistry.Files | $.VarRef<protoregistry.Files> | null) {
		this._fields.reg = value
	}

	public _fields: {
		reg: protoregistry.Files | $.VarRef<protoregistry.Files> | null
	}

	constructor(init?: Partial<{reg?: protoregistry.Files | $.VarRef<protoregistry.Files> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reg: init?.reg ?? (null! as protoregistry.Files | $.VarRef<protoregistry.Files> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resolverOnly {
		return new resolverOnly(this, true)
	}

	public __goscriptAssign(source: resolverOnly): void {
		const target = this._fields
		const values = source._fields
		target.reg = values.reg
	}

	public async FindDescriptorByName(name: protoreflect.FullName): globalThis.Promise<[protoreflect.Descriptor | null, $.GoError]> {
		const r = this;
		return protoregistry.Files.prototype.FindDescriptorByName.call(r.reg, name)
	}

	public async FindFileByPath(path: string): globalThis.Promise<[protoreflect.FileDescriptor | null, $.GoError]> {
		const r = this;
		return protoregistry.Files.prototype.FindFileByPath.call(r.reg, path)
	}

	public RegisterFile(_p0: protoreflect.FileDescriptor | null): $.GoError {
		return null
	}

	static __typeInfo = $.registerStructType(
		"impl.resolverOnly",
		() => new resolverOnly(),
		() => [$.methodSignature("FindDescriptorByName", [["name", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.Descriptor", "error"]), $.methodSignature("FindFileByPath", [["path", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FileDescriptor", "error"]), $.methodSignature("RegisterFile", ["protoreflect.FileDescriptor"], ["error"])],
		resolverOnly,
		() => [/* @__PURE__ */ $.structField("reg", /* @__PURE__ */ $.pointerType("protoregistry.Files"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/impl" })]
	)
}

export var legacyFileDescCache: $.VarRef<sync.Map>

export function __goscript_init_legacyFileDescCache(): void {
	if (((legacyFileDescCache) as any) === undefined) {
		legacyFileDescCache = $.varRef($.markAsStructValue(new sync.Map()))
	}
}

export function __goscript_get_legacyFileDescCache(): $.VarRef<sync.Map> {
	if (((legacyFileDescCache) as any) === undefined) {
		__goscript_init_legacyFileDescCache()
	}
	return legacyFileDescCache
}

export function __goscript_set_legacyFileDescCache(__goscriptValue: sync.Map): void {
	$.assignStruct(__goscript_get_legacyFileDescCache().value, __goscriptValue)
}

export async function legacyLoadFileDesc(b: $.Slice<number>): globalThis.Promise<protoreflect.FileDescriptor | null> {
	// Fast-path: check whether we already have a cached file descriptor.
	{
		let [fd, ok] = await $.pointerValue<sync.Map>(__goscript_get_legacyFileDescCache()).Load($.interfaceValue($.indexRef(b!, 0), "*byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))))
		if (ok) {
			return $.mustTypeAssert<protoreflect.FileDescriptor | null>(fd, "protoreflect.FileDescriptor")
		}
	}

	// Slow-path: decompress and unmarshal the file descriptor proto.
	let __goscriptTuple0: any = await gzip.NewReader($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewReader(b), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))!)
	let zr: gzip.Reader | $.VarRef<gzip.Reader> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.panic((err as any))
	}
	let __goscriptTuple1: any = await io.ReadAll($.pointerValueOrNil($.interfaceValue<io.Reader | null>(zr, "*gzip.Reader", /* @__PURE__ */ $.pointerType("gzip.Reader")))!)
	let b2: $.Slice<number> = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		$.panic((err as any))
	}

	let fd = (await $.markAsStructValue($.cloneStructValue(new filedesc.Builder({RawDescriptor: b2, FileRegistry: $.interfaceValue(new resolverOnly({reg: protoregistry.GlobalFiles}, true), "impl.resolverOnly", "impl.resolverOnly")}, true))).Build()).File
	let __goscriptShadow0 = fd
	{
		let __goscriptTuple2: any = await $.pointerValue<sync.Map>(__goscript_get_legacyFileDescCache()).LoadOrStore($.interfaceValue($.indexRef(b!, 0), "*byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))), (__goscriptShadow0 as any))
		let __goscriptShadow1 = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (ok) {
			return $.mustTypeAssert<protoreflect.FileDescriptor | null>(__goscriptShadow1, "protoreflect.FileDescriptor")
		}
	}
	return fd
}
