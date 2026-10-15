// Generated file based on discard.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./proto.gs.ts"

export async function DiscardUnknown(m: __goscript_proto.Message | null): globalThis.Promise<void> {
	if (m != null) {
		await discardUnknown(await __goscript_proto.MessageReflect(m))
	}
}

export async function discardUnknown(m: protoreflect.Message | null): globalThis.Promise<void> {
	void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, val: protoreflect.Value): globalThis.Promise<boolean> => {
		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 3:
			{
				if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
					await discardUnknown(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())
				}
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
					let ls = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List()
					for (let i = 0; i < (__goscriptAwait = (ls !== null && (ls as any).__isVarRef !== true && (ls as any).__goValue === undefined ? (ls as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(ls)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						await discardUnknown(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (ls !== null && (ls as any).__isVarRef !== true && (ls as any).__goValue === undefined ? (ls as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(ls)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())
					}
				}
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
					let ms = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map()
					void (__goscriptAwait = (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? (ms as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(ms)).Range($.functionValue(async (_p0: protoreflect.MapKey, v: protoreflect.Value): globalThis.Promise<boolean> => {
						await discardUnknown(await v.Message())
						return true
					}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				break
			}
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// Discard unknown fields.
	if ($.sliceLen((((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)) > 0) {
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).SetUnknown((null as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

var __goscriptAwait: any
