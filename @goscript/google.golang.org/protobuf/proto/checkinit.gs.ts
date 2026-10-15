// Generated file based on checkinit.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_proto_methods from "./proto_methods.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./proto.gs.ts"
import "./proto_methods.gs.ts"

export async function CheckInitialized(m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
	// Treat a nil message interface as an "untyped" empty message,
	// which we assume to have no required fields.
	if (m == null) {
		return null
	}

	return checkInitialized((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function checkInitialized(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
	{
		let methods = await __goscript_proto_methods.protoMethods(m)
		if ((methods != null) && ($.pointerValue<protoiface.Methods>(methods).CheckInitialized != null)) {
			let [, err] = await $.pointerValue<protoiface.Methods>(methods).CheckInitialized!($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: m}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true)] }))
			return err
		}
	}
	return checkInitializedSlow(m)
}

export async function checkInitializedSlow(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
	let md = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let fds = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0, nums = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).RequiredNumbers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < (__goscriptAwait = (nums !== null && (nums as any).__isVarRef !== true && (nums as any).__goValue === undefined ? (nums as Exclude<protoreflect.FieldNumbers, null>) : $.pointerValue<Exclude<protoreflect.FieldNumbers, null>>(nums)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByNumber((__goscriptAwait = (nums !== null && (nums as any).__isVarRef !== true && (nums as any).__goValue === undefined ? (nums as Exclude<protoreflect.FieldNumbers, null>) : $.pointerValue<Exclude<protoreflect.FieldNumbers, null>>(nums)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Has(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return errors.RequiredNotSet((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
	}
	let err: $.GoError = null! as $.GoError
	void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
					return true
				}
				for (let i = 0, list = await v.List(); (i < (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (err == null); i++) {
					err = await checkInitialized(await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())
				}
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
					return true
				}
				void (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Map, null>>((await v.Map())).Range($.functionValue(async (key: protoreflect.MapKey, v: protoreflect.Value): globalThis.Promise<boolean> => {
					err = await checkInitialized(await v.Message())
					return err == null
				}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			default:
			{
				if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
					return true
				}
				err = await checkInitialized(await v.Message())
				break
			}
		}
		return err == null
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return err
}

var __goscriptAwait: any
