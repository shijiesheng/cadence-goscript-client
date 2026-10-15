// Generated file based on merge.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_proto_methods from "./proto_methods.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./proto.gs.ts"
import "./proto_methods.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/proto", ["proto.mergeOptions"])

export class mergeOptions {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mergeOptions {
		return new mergeOptions(this, true)
	}

	public __goscriptAssign(source: mergeOptions): void {
	}

	public async cloneBytes(v: protoreflect.Value): globalThis.Promise<protoreflect.Value> {
		const o = this;
		return protoreflect.ValueOfBytes($.appendSlice(new Uint8Array([]) as $.Slice<number>, await v.Bytes(), $.byteSliceHint))
	}

	public async mergeList(dst: protoreflect.List | null, src: protoreflect.List | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<void> {
		const o = this;
		// Merge semantics appends to the end of the existing list.
		for (let i = 0, n = (__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(src)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < n; i++) {
			{
				let v = (((__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(src)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
				switch ((true as boolean)) {
					case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
					{
						let dstv = (((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(dst)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
						await $.markAsStructValue($.cloneStructValue(o)).mergeMessage(await dstv.Message(), await v.Message())
						void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(dst)).Append((dstv).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
					case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 12:
					{
						void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(dst)).Append(await o.cloneBytes(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
					default:
					{
						void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(dst)).Append((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
				}
			}
		}
	}

	public async mergeMap(dst: protoreflect.Map | null, src: protoreflect.Map | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<void> {
		const o = this;
		// Merge semantics replaces, rather than merges into existing entries.
		void (__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(src)).Range($.functionValue(async (k: protoreflect.MapKey, v: protoreflect.Value): globalThis.Promise<boolean> => {
			switch ((true as boolean)) {
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
				{
					let dstv = (((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(dst)).NewValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
					await $.markAsStructValue($.cloneStructValue(o)).mergeMessage(await dstv.Message(), await v.Message())
					void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(dst)).Set((k).clone(), (dstv).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 12:
				{
					void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(dst)).Set((k).clone(), await $.markAsStructValue($.cloneStructValue(o)).cloneBytes(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				default:
				{
					void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(dst)).Set((k).clone(), (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async mergeMessage(dst: protoreflect.Message | null, src: protoreflect.Message | null): globalThis.Promise<void> {
		const o = this;
		let methods = await __goscript_proto_methods.protoMethods(dst)
		let methods$: protoiface.Methods = methods == null ? $.pointerTarget<protoiface.Methods>(methods) : (methods as any).__isVarRef === true ? (methods as any).value : (methods as any).__goValue === undefined ? (methods as any) : $.pointerTarget<protoiface.Methods>(methods)
		if ((methods != null) && ((methods$ as protoiface.Methods).Merge != null)) {
			let _in = $.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Source: src, Destination: dst}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Source", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Destination", "protoreflect.Message", [2], 16, true)] })
			let out = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (methods$ as protoiface.Methods).Merge!($.markAsStructValue($.cloneStructValue(_in))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoiface.MergeOutput)))
			if ($.uint((out.Flags & protoiface.MergeComplete), 8) != 0) {
				return
			}
		}

		if (!(__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			$.panic(await fmt.Sprintf("cannot merge into invalid %v message", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}

		void (__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(src)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			switch ((true as boolean)) {
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					await $.markAsStructValue($.cloneStructValue(o)).mergeList(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List(), await v.List(), fd)
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					await $.markAsStructValue($.cloneStructValue(o)).mergeMap(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map(), await v.Map(), (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
				{
					await $.markAsStructValue($.cloneStructValue(o)).mergeMessage(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message(), await v.Message())
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 12:
				{
					void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).Set(fd, await $.markAsStructValue($.cloneStructValue(o)).cloneBytes(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				default:
				{
					void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).Set(fd, (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if ($.sliceLen((((__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(src)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)) > 0) {
			void (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).SetUnknown(($.appendSlice((((__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields), ((__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(src)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields), $.byteSliceHint) as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"proto.mergeOptions",
		() => new mergeOptions(),
		() => [$.methodSignature("cloneBytes", [["v", "protoreflect.Value"]], ["protoreflect.Value"]), $.methodSignature("mergeList", [["dst", "protoreflect.List"], ["src", "protoreflect.List"], ["fd", "protoreflect.FieldDescriptor"]]), $.methodSignature("mergeMap", [["dst", "protoreflect.Map"], ["src", "protoreflect.Map"], ["fd", "protoreflect.FieldDescriptor"]]), $.methodSignature("mergeMessage", [["dst", "protoreflect.Message"], ["src", "protoreflect.Message"]])],
		mergeOptions,
		() => []
	)
}

export async function Merge(dst: __goscript_proto.Message | null, src: __goscript_proto.Message | null): globalThis.Promise<void> {
	// TODO: Should nil src be treated as semantically equivalent to a
	// untyped, read-only, empty message? What about a nil dst?

	let dstMsg = (__goscriptAwait = (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(dst)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let srcMsg = (__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(src)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (!$.comparableEqual((__goscriptAwait = (dstMsg !== null && (dstMsg as any).__isVarRef !== true && (dstMsg as any).__goValue === undefined ? (dstMsg as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dstMsg)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (srcMsg !== null && (srcMsg as any).__isVarRef !== true && (srcMsg as any).__goValue === undefined ? (srcMsg as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(srcMsg)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		{
			let got = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (dstMsg !== null && (dstMsg as any).__isVarRef !== true && (dstMsg as any).__goValue === undefined ? (dstMsg as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dstMsg)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let want = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (srcMsg !== null && (srcMsg as any).__isVarRef !== true && (srcMsg as any).__goValue === undefined ? (srcMsg as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(srcMsg)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!$.stringEqual(got, want)) {
				$.panic(await fmt.Sprintf("descriptor mismatch: %v != %v", $.namedValueInterfaceValue<any>(got, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(want, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}
		$.panic("descriptor mismatch")
	}
	await $.markAsStructValue($.cloneStructValue(new mergeOptions(undefined, true))).mergeMessage(dstMsg, srcMsg)
}

export async function Clone(m: __goscript_proto.Message | null): globalThis.Promise<__goscript_proto.Message | null> {
	// NOTE: Most usages of Clone assume the following properties:
	//	t := reflect.TypeOf(m)
	//	t == reflect.TypeOf(m.ProtoReflect().New().Interface())
	//	t == reflect.TypeOf(m.ProtoReflect().Type().Zero().Interface())
	//
	// Embedding protobuf messages breaks this since the parent type will have
	// a forwarded ProtoReflect method, but the Interface method will return
	// the underlying embedded message type.
	if (m == null) {
		return null
	}
	let src = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (!(__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(src)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageType, null>>((__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(src)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let dst = (__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(src)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await $.markAsStructValue($.cloneStructValue(new mergeOptions(undefined, true))).mergeMessage(dst, src)
	return (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(dst)).Interface()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptAwait: any
