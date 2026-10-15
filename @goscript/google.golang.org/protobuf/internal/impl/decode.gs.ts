// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as flags2 from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_messageset from "./codec_messageset.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/math/bits/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_messageset.gs.ts"
import "./codec_tables.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.unmarshalOptions", "impl.unmarshalOutput"])

export class unmarshalOptions {
	public get flags(): protoiface.UnmarshalInputFlags {
		return this._fields.flags
	}

	public set flags(value: protoiface.UnmarshalInputFlags) {
		this._fields.flags = value
	}

	public get resolver(): any {
		return this._fields.resolver
	}

	public set resolver(value: any) {
		this._fields.resolver = value
	}

	public get depth(): number {
		return this._fields.depth
	}

	public set depth(value: number) {
		this._fields.depth = value
	}

	public _fields: {
		flags: protoiface.UnmarshalInputFlags
		resolver: any
		depth: number
	}

	constructor(init?: Partial<{flags?: protoiface.UnmarshalInputFlags, resolver?: any, depth?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			flags: init?.flags ?? (0 as protoiface.UnmarshalInputFlags),
			resolver: init?.resolver ?? (null! as any),
			depth: init?.depth ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unmarshalOptions {
		return new unmarshalOptions(this, true)
	}

	public __goscriptAssign(source: unmarshalOptions): void {
		const target = this._fields
		const values = source._fields
		target.flags = values.flags
		target.resolver = $.assignFieldValue(target.resolver, values.resolver, { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] })
		target.depth = values.depth
	}

	public DiscardUnknown(): boolean {
		const o = this;
		return $.uint((o.flags & protoiface.UnmarshalDiscardUnknown), 8) != 0
	}

	public IsDefault(): boolean {
		const o = this;
		return (o.flags == 0) && ($.comparableEqual(o.resolver, $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))))
	}

	public Options(): proto.UnmarshalOptions {
		const o = this;
		return (() => { const __goscriptLiteralField0 = o.DiscardUnknown(); return new proto.UnmarshalOptions({Merge: true, AllowPartial: true, DiscardUnknown: __goscriptLiteralField0, Resolver: o.resolver}, true) })()
	}

	static __typeInfo = $.registerStructType(
		"impl.unmarshalOptions",
		() => new unmarshalOptions(),
		() => [{ name: "DiscardUnknown", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "IsDefault", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Options", args: [], returns: [{ type: "proto.UnmarshalOptions" }] }],
		unmarshalOptions,
		() => [{ name: "flags", key: "flags", type: /* @__PURE__ */ $.basicType("uint8") }, { name: "resolver", key: "resolver", type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] } }, { name: "depth", key: "depth", type: /* @__PURE__ */ $.basicType("int") }]
	)
}

export class unmarshalOutput {
	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public get initialized(): boolean {
		return this._fields.initialized
	}

	public set initialized(value: boolean) {
		this._fields.initialized = value
	}

	public _fields: {
		n: number
		initialized: boolean
	}

	constructor(init?: Partial<{n?: number, initialized?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			n: init?.n ?? (0 as number),
			initialized: init?.initialized ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unmarshalOutput {
		return new unmarshalOutput(this, true)
	}

	public __goscriptAssign(source: unmarshalOutput): void {
		const target = this._fields
		const values = source._fields
		target.n = values.n
		target.initialized = values.initialized
	}

	static __typeInfo = $.registerStructType(
		"impl.unmarshalOutput",
		() => new unmarshalOutput(),
		() => [],
		unmarshalOutput,
		() => [{ name: "n", key: "n", type: /* @__PURE__ */ $.basicType("int") }, { name: "initialized", key: "initialized", type: /* @__PURE__ */ $.basicType("bool") }]
	)
}

export let errDecode: $.GoError = await errors.New("cannot parse invalid wire-format data", null)

export function __goscript_set_errDecode(__goscriptValue: $.GoError): void {
	errDecode = __goscriptValue
}

export let errRecursionDepth: $.GoError = await errors.New("exceeded maximum recursion depth", null)

export function __goscript_set_errRecursionDepth(__goscriptValue: $.GoError): void {
	errRecursionDepth = __goscriptValue
}

export var lazyUnmarshalOptions: unmarshalOptions

export function __goscript_init_lazyUnmarshalOptions(): void {
	if (((lazyUnmarshalOptions) as any) === undefined) {
		lazyUnmarshalOptions = new unmarshalOptions({resolver: $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types")), depth: 10000}, true)
	}
}

export function __goscript_get_lazyUnmarshalOptions(): unmarshalOptions {
	if (((lazyUnmarshalOptions) as any) === undefined) {
		__goscript_init_lazyUnmarshalOptions()
	}
	return lazyUnmarshalOptions
}

export function __goscript_set_lazyUnmarshalOptions(__goscriptValue: unmarshalOptions): void {
	$.assignStruct(lazyUnmarshalOptions, __goscriptValue)
}

export let errUnknown: $.GoError = await errors.New("unknown", null)

export function __goscript_set_errUnknown(__goscriptValue: $.GoError): void {
	errUnknown = __goscriptValue
}

export async function skipExtension(b: $.Slice<number>, xi: __goscript_codec_extension.extensionFieldInfo | $.VarRef<__goscript_codec_extension.extensionFieldInfo> | null, num: protowire.Number, wtyp: protowire.Type, opts: unmarshalOptions): globalThis.Promise<[unmarshalOutput, __goscript_validate.ValidationStatus]> {
	let out: unmarshalOutput = new unmarshalOutput(undefined, true)
	const xi$: __goscript_codec_extension.extensionFieldInfo = xi == null ? $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi) : (xi as any).__isVarRef === true ? (xi as any).value : (xi as any).__goValue === undefined ? (xi as any) : $.pointerTarget<__goscript_codec_extension.extensionFieldInfo>(xi)
	if ((xi$ as __goscript_codec_extension.extensionFieldInfo).validation.mi == null) {
		return [(out).clone(), 1]
	}
	await __goscript_message.MessageInfo.prototype.init.call((xi$ as __goscript_codec_extension.extensionFieldInfo).validation.mi)
	switch ((xi$ as __goscript_codec_extension.extensionFieldInfo).validation.typ) {
		case 1:
		{
			if (wtyp != 2) {
				return [(out).clone(), 1]
			}
			let __goscriptTuple0: any = protowire.ConsumeBytes(b)
			let v: $.Slice<number> = __goscriptTuple0[0]
			let n = __goscriptTuple0[1]
			if (n < 0) {
				return [(out).clone(), 1]
			}
			let [__goscriptShadow0, st] = await __goscript_message.MessageInfo.prototype.validate.call((xi$ as __goscript_codec_extension.extensionFieldInfo).validation.mi, v, 0, opts)
			__goscriptShadow0.n = n
			return [(__goscriptShadow0).clone(), st]
			break
		}
		case 2:
		{
			if (wtyp != 3) {
				return [(out).clone(), 1]
			}
			let [__goscriptShadow1, st] = await __goscript_message.MessageInfo.prototype.validate.call((xi$ as __goscript_codec_extension.extensionFieldInfo).validation.mi, b, num, opts)
			return [(__goscriptShadow1).clone(), st]
			break
		}
		default:
		{
			return [(out).clone(), 1]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
