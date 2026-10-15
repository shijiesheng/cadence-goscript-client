// Generated file based on checkinit.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/reflect/index.js"
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
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

export var needsInitCheckMu: $.VarRef<sync.Mutex>

export function __goscript_init_needsInitCheckMu(): void {
	if (((needsInitCheckMu) as any) === undefined) {
		needsInitCheckMu = $.varRef($.markAsStructValue(new sync.Mutex()))
	}
}

export function __goscript_get_needsInitCheckMu(): $.VarRef<sync.Mutex> {
	if (((needsInitCheckMu) as any) === undefined) {
		__goscript_init_needsInitCheckMu()
	}
	return needsInitCheckMu
}

export function __goscript_set_needsInitCheckMu(__goscriptValue: sync.Mutex): void {
	$.assignStruct(__goscript_get_needsInitCheckMu().value, __goscriptValue)
}

export var needsInitCheckMap: $.VarRef<sync.Map>

export function __goscript_init_needsInitCheckMap(): void {
	if (((needsInitCheckMap) as any) === undefined) {
		needsInitCheckMap = $.varRef($.markAsStructValue(new sync.Map()))
	}
}

export function __goscript_get_needsInitCheckMap(): $.VarRef<sync.Map> {
	if (((needsInitCheckMap) as any) === undefined) {
		__goscript_init_needsInitCheckMap()
	}
	return needsInitCheckMap
}

export function __goscript_set_needsInitCheckMap(__goscriptValue: sync.Map): void {
	$.assignStruct(__goscript_get_needsInitCheckMap().value, __goscriptValue)
}

export async function needsInitCheck(md: protoreflect.MessageDescriptor | null): globalThis.Promise<boolean> {
	using __defer = new $.DisposableStack()
	{
		let [v, ok] = await $.pointerValue<sync.Map>(__goscript_get_needsInitCheckMap()).Load((md as any))
		if (ok) {
			{
				let [has, __goscriptShadow0] = $.typeAssertTuple<boolean>(v, /* @__PURE__ */ $.basicType("bool"))
				if (__goscriptShadow0) {
					return has
				}
			}
		}
	}
	await $.pointerValue<sync.Mutex>(__goscript_get_needsInitCheckMu()).Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.Mutex>(__goscript_get_needsInitCheckMu())), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	return await needsInitCheckLocked(md)
}

export async function needsInitCheckLocked(md: protoreflect.MessageDescriptor | null): globalThis.Promise<boolean> {
	let has: boolean = false
	await using __defer = new $.AsyncDisposableStack()
	{
		let [v, ok] = await $.pointerValue<sync.Map>(__goscript_get_needsInitCheckMap()).Load((md as any))
		if (ok) {
			// If has is true, we've previously determined that this message
			// needs init checks.
			//
			// If has is false, we've previously determined that it can never
			// be uninitialized.
			//
			// If has is not a bool, we've just encountered a cycle in the
			// message graph. In this case, it is safe to return false: If
			// the message does have required fields, we'll detect them later
			// in the graph traversal.
			let [__goscriptShadow1, __goscriptShadow2] = $.typeAssertTuple<boolean>(v, /* @__PURE__ */ $.basicType("bool"))
			return __goscriptShadow2 && __goscriptShadow1
		}
	}
	await $.pointerValue<sync.Map>(__goscript_get_needsInitCheckMap()).Store((md as any), {})
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		await $.pointerValue<sync.Map>(__goscript_get_needsInitCheckMap()).Store((md as any), has)
	})() })
	if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldNumbers, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).RequiredNumbers(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
		const __goscriptReturn0: boolean = true
		has = __goscriptReturn0
		await __defer.dispose()
		return has
	}
	if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
		const __goscriptReturn1: boolean = true
		has = __goscriptReturn1
		await __defer.dispose()
		return has
	}
	for (let i = 0; i < (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		// Map keys are never messages, so just consider the map value.
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			fd = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let fmd = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((fmd != null) && await needsInitCheckLocked(fmd)) {
			const __goscriptReturn2: boolean = true
			has = __goscriptReturn2
			await __defer.dispose()
			return has
		}
	}
	const __goscriptReturn3: boolean = false
	has = __goscriptReturn3
	await __defer.dispose()
	return has
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
