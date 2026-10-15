// Generated file based on desc_init.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as __goscript_build from "./build.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_desc_lazy from "./desc_lazy.gs.ts"

import * as __goscript_desc_list from "./desc_list.gs.ts"

import * as __goscript_desc_list_gen from "./desc_list_gen.gs.ts"

import * as __goscript_editions from "./editions.gs.ts"

import * as __goscript_placeholder from "./placeholder.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./build.gs.ts"
import "./desc.gs.ts"
import "./desc_lazy.gs.ts"
import "./desc_list.gs.ts"
import "./desc_list_gen.gs.ts"
import "./editions.gs.ts"
import "./placeholder.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/filedesc", ["filedesc.fileRaw"])

export class fileRaw {
	public get builder(): __goscript_build.Builder {
		return this._fields.builder
	}

	public set builder(value: __goscript_build.Builder) {
		this._fields.builder = value
	}

	public get allEnums(): $.Slice<__goscript_desc.Enum> {
		return this._fields.allEnums
	}

	public set allEnums(value: $.Slice<__goscript_desc.Enum>) {
		this._fields.allEnums = value
	}

	public get allMessages(): $.Slice<__goscript_desc.Message> {
		return this._fields.allMessages
	}

	public set allMessages(value: $.Slice<__goscript_desc.Message>) {
		this._fields.allMessages = value
	}

	public get allExtensions(): $.Slice<__goscript_desc.Extension> {
		return this._fields.allExtensions
	}

	public set allExtensions(value: $.Slice<__goscript_desc.Extension>) {
		this._fields.allExtensions = value
	}

	public get allServices(): $.Slice<__goscript_desc.Service> {
		return this._fields.allServices
	}

	public set allServices(value: $.Slice<__goscript_desc.Service>) {
		this._fields.allServices = value
	}

	public _fields: {
		builder: __goscript_build.Builder
		allEnums: $.Slice<__goscript_desc.Enum>
		allMessages: $.Slice<__goscript_desc.Message>
		allExtensions: $.Slice<__goscript_desc.Extension>
		allServices: $.Slice<__goscript_desc.Service>
	}

	constructor(init?: Partial<{builder?: __goscript_build.Builder, allEnums?: $.Slice<__goscript_desc.Enum>, allMessages?: $.Slice<__goscript_desc.Message>, allExtensions?: $.Slice<__goscript_desc.Extension>, allServices?: $.Slice<__goscript_desc.Service>}>, __goscriptValue?: boolean) {
		this._fields = {
			builder: init?.builder ? init.builder.clone() : new __goscript_build.Builder(undefined, true),
			allEnums: init?.allEnums ?? (null! as $.Slice<__goscript_desc.Enum>),
			allMessages: init?.allMessages ?? (null! as $.Slice<__goscript_desc.Message>),
			allExtensions: init?.allExtensions ?? (null! as $.Slice<__goscript_desc.Extension>),
			allServices: init?.allServices ?? (null! as $.Slice<__goscript_desc.Service>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fileRaw {
		return new fileRaw(this, true)
	}

	public __goscriptAssign(source: fileRaw): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.builder, values.builder)
		target.allEnums = values.allEnums
		target.allMessages = values.allMessages
		target.allExtensions = values.allExtensions
		target.allServices = values.allServices
	}

	static __typeInfo = $.registerStructType(
		"filedesc.fileRaw",
		() => new fileRaw(),
		() => [],
		fileRaw,
		() => [/* @__PURE__ */ $.structField("builder", "filedesc.Builder", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("allEnums", /* @__PURE__ */ $.sliceType("filedesc.Enum"), [1], 88, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("allMessages", /* @__PURE__ */ $.sliceType("filedesc.Message"), [2], 112, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("allExtensions", /* @__PURE__ */ $.sliceType("filedesc.Extension"), [3], 136, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" }), /* @__PURE__ */ $.structField("allServices", /* @__PURE__ */ $.sliceType("filedesc.Service"), [4], 160, false, { pkgPath: "google.golang.org/protobuf/internal/filedesc" })]
	)
}

export async function newRawFile(db: __goscript_build.Builder): globalThis.Promise<__goscript_desc.File | $.VarRef<__goscript_desc.File> | null> {
	let fd: __goscript_desc.File | $.VarRef<__goscript_desc.File> | null = new __goscript_desc.File({fileRaw: new fileRaw({builder: db}, true)})
	let fd$: __goscript_desc.File = fd == null ? $.pointerTarget<__goscript_desc.File>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<__goscript_desc.File>(fd)
	void (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_desc.File).initDecls(db.NumEnums, db.NumMessages, db.NumExtensions, db.NumServices) : __goscript_desc.File.prototype.initDecls.call(fd, db.NumEnums, db.NumMessages, db.NumExtensions, db.NumServices))
	await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_desc.File).unmarshalSeed(db.RawDescriptor) : __goscript_desc.File.prototype.unmarshalSeed.call(fd, db.RawDescriptor))

	// Extended message targets are eagerly resolved since registration
	// needs this information at program init time.
	for (let __goscriptRangeTarget0 = (fd$ as __goscript_desc.File).fileRaw.allExtensions, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let xd: __goscript_desc.Extension | $.VarRef<__goscript_desc.Extension> | null = $.indexRef((fd$ as __goscript_desc.File).fileRaw.allExtensions!, i)
		let xd$: __goscript_desc.Extension = xd == null ? $.pointerTarget<__goscript_desc.Extension>(xd) : (xd as any).__isVarRef === true ? (xd as any).value : (xd as any).__goValue === undefined ? (xd as any) : $.pointerTarget<__goscript_desc.Extension>(xd);
		;(xd$ as __goscript_desc.Extension).L1.Extendee = await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_desc.File).resolveMessageDependency((xd$ as __goscript_desc.Extension).L1.Extendee, 1, $.int(i, 32)) : __goscript_desc.File.prototype.resolveMessageDependency.call(fd, (xd$ as __goscript_desc.Extension).L1.Extendee, 1, $.int(i, 32)))
	}

	void (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_desc.File).checkDecls() : __goscript_desc.File.prototype.checkDecls.call(fd))
	return fd
}

export let nameBuilderPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new strs.Builder(), "*strs.Builder", /* @__PURE__ */ $.pointerType("strs.Builder"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_nameBuilderPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(nameBuilderPool.value, __goscriptValue)
}

export async function getBuilder(): globalThis.Promise<strs.Builder | $.VarRef<strs.Builder> | null> {
	return $.mustTypeAssert<strs.Builder | $.VarRef<strs.Builder> | null>(await nameBuilderPool.value.Get(), /* @__PURE__ */ $.pointerType("strs.Builder"))
}

export function putBuilder(b: strs.Builder | $.VarRef<strs.Builder> | null): void {
	nameBuilderPool.value.Put($.interfaceValue(b, "*strs.Builder", /* @__PURE__ */ $.pointerType("strs.Builder")))
}

export function makeFullName(sb: strs.Builder | $.VarRef<strs.Builder> | null, b: $.Slice<number>): protoreflect.FullName {
	if (($.sliceLen(b) == 0) || ($.arrayIndex(b!, 0) != 46)) {
		$.panic("name reference must be fully qualified")
	}
	return (sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).MakeString($.goSlice(b, 1, undefined)) : strs.Builder.prototype.MakeString.call(sb, $.goSlice(b, 1, undefined)))
}

export function appendFullName(sb: strs.Builder | $.VarRef<strs.Builder> | null, prefix: protoreflect.FullName, suffix: $.Slice<number>): protoreflect.FullName {
	return (sb !== null && (sb as any).__isVarRef !== true && (sb as any).__goValue === undefined ? ((sb as any) as strs.Builder).AppendFullName(prefix, strs.UnsafeString(suffix)) : strs.Builder.prototype.AppendFullName.call(sb, prefix, strs.UnsafeString(suffix)))
}
