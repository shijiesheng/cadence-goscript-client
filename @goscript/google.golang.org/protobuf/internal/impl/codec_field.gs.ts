// Generated file based on codec_field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_legacy_message from "./legacy_message.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import * as __goscript_weak from "./weak.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./legacy_message.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"
import "./weak.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.errInvalidUTF8"])

export class errInvalidUTF8 {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errInvalidUTF8 {
		return new errInvalidUTF8(this, true)
	}

	public __goscriptAssign(source: errInvalidUTF8): void {
	}

	public Error(): string {
		return "string field contains invalid UTF-8"
	}

	public InvalidUTF8(): boolean {
		return true
	}

	public Unwrap(): $.GoError {
		return errors.Error
	}

	static __typeInfo = $.registerStructType(
		"impl.errInvalidUTF8",
		() => new errInvalidUTF8(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("InvalidUTF8", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Unwrap", [], ["error"])],
		errInvalidUTF8,
		() => []
	)
}

export function makeWeakMessageFieldCoder(fd: protoreflect.FieldDescriptor | null): __goscript_codec_tables.pointerCoderFuncs {
	let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))
	let messageType: protoreflect.MessageType | null = null! as protoreflect.MessageType | null
	let lazyInit: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
		await once.value.Do($.functionValue(async (): globalThis.Promise<void> => {
			let messageName = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let __goscriptTuple0: any = await protoregistry.Types.prototype.FindMessageByName.call(protoregistry.GlobalTypes, messageName)
			messageType = __goscriptTuple0[0]
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))

	return new __goscript_codec_tables.pointerCoderFuncs({size: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> => {
		let [m, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>(p.WeakFields()), $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num)
		if (!ok) {
			return 0
		}
		void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (messageType == null) {
			$.panic(await fmt.Sprintf("weak message %v is not linked in", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		return sizeMessage(m, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize, opts)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), marshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		let [m, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>(p.WeakFields()), $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num)
		if (!ok) {
			return [b, null]
		}
		void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (messageType == null) {
			$.panic(await fmt.Sprintf("weak message %v is not linked in", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		return appendMessage(b, m, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag, opts)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), unmarshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
		let fs: $.VarRef<__goscript_weak.weakFields> | null = p.WeakFields()
		let [m, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>(fs), $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num)
		if (!ok) {
			void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (messageType == null) {
				return [new __goscript_decode.unmarshalOutput(undefined, true), __goscript_decode.errUnknown]
			}
			m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscript_weak.weakFields__set(fs, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num, m)
		}
		return consumeMessage(b, m, wtyp, opts)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo)), isInit: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
		let [m, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>(p.WeakFields()), $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num)
		if (!ok) {
			return null
		}
		return await proto.CheckInitialized(m)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo)), merge: $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_merge.mergeOptions): globalThis.Promise<void> => {
		let [sm, ok] = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>(src.WeakFields()), $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num)
		if (!ok) {
			return
		}
		let __goscriptTuple1: any = __goscript_weak.weakFields__get($.pointerValue<__goscript_weak.weakFields>(dst.WeakFields()), $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num)
		let dm = __goscriptTuple1[0]
		ok = __goscriptTuple1[1]
		if (!ok) {
			void (__goscriptAwait = lazyInit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (messageType == null) {
				$.panic(await fmt.Sprintf("weak message %v is not linked in", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
			dm = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(messageType)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__goscript_weak.weakFields__set(dst.WeakFields(), $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).num, dm)
		}
		await opts.Merge(dm, sm)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.mergeOptions"], results: [] } as $.FunctionTypeInfo))}, true)
}

export async function makeMessageFieldCoder(fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<__goscript_codec_tables.pointerCoderFuncs> {
	{
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = await __goscript_message.getMessageInfo(ft)
		if (mi != null) {
			let funcs = new __goscript_codec_tables.pointerCoderFuncs({size: sizeMessageInfo, marshal: appendMessageInfo, unmarshal: consumeMessageInfo, merge: __goscript_merge.mergeMessage}, true)
			if (await __goscript_checkinit.needsInitCheck($.pointerValue<__goscript_message.MessageInfo>(mi).Desc)) {
				funcs.isInit = isInitMessageInfo
			}
			return (funcs).clone()
		} else {
			return new __goscript_codec_tables.pointerCoderFuncs({size: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> => {
				let m = await asMessage($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())))
				return await sizeMessage(m, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize, opts)
			}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), marshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
				let m = await asMessage($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())))
				return await appendMessage(b, m, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag, opts)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), unmarshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
				let mp = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem()))
				if ($.markAsStructValue($.cloneStructValue(mp)).IsNil()) {
					$.markAsStructValue($.cloneStructValue(mp)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
				}
				return consumeMessage(b, await asMessage(mp), wtyp, opts)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo)), isInit: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
				let m = await asMessage($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())))
				return await proto.CheckInitialized(m)
			}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo)), merge: __goscript_merge.mergeMessage}, true)
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function sizeMessageInfo(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	return protowire.SizeBytes(await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, p.Elem(), opts)) + (f$ as __goscript_codec_message.coderFieldInfo).tagsize
}

export async function appendMessageInfo(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let calculatedSize = await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, p.Elem(), opts)
	b = protowire.AppendVarint(b, (f$ as __goscript_codec_message.coderFieldInfo).wiretag)
	b = protowire.AppendVarint(b, $.uint64(calculatedSize))
	let before = $.sliceLen(b)
	let __goscriptTuple2: any = await __goscript_message.MessageInfo.prototype.marshalAppendPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, b, p.Elem(), opts)
	b = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	{
		let measuredSize = $.sliceLen(b) - before
		if ((calculatedSize != measuredSize) && (err == null)) {
			return [null, errors.MismatchedSizeCalculation(calculatedSize, measuredSize)]
		}
	}
	return [b, err]
}

export async function consumeMessageInfo(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple3: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple3[0]
	let n = __goscriptTuple3[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	if ($.markAsStructValue($.cloneStructValue(p.Elem())).IsNil()) {
		p.SetPointer(__goscript_pointer_reflect.pointerOfValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((f$ as __goscript_codec_message.coderFieldInfo).mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
	}
	let __goscriptTuple4: any = await __goscript_message.MessageInfo.prototype.unmarshalPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, v, p.Elem(), 0, (opts).clone())
	let o = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [(out).clone(), err]
	}
	out.n = n
	out.initialized = o.initialized
	return [(out).clone(), null]
}

export async function isInitMessageInfo(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> {
	return __goscript_message.MessageInfo.prototype.checkInitializedPointer.call($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).mi, p.Elem())
}

export async function sizeMessage(m: proto.Message | null, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	return protowire.SizeBytes(await $.markAsStructValue($.cloneStructValue(opts.Options())).Size(m)) + tagsize
}

export async function appendMessage(b: $.Slice<number>, m: proto.Message | null, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let mopts = opts.Options()
	let calculatedSize = await mopts.Size(m)
	b = protowire.AppendVarint(b, wiretag)
	b = protowire.AppendVarint(b, $.uint64(calculatedSize))
	let before = $.sliceLen(b)
	let __goscriptTuple5: any = await mopts.MarshalAppend(b, m)
	b = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	{
		let measuredSize = $.sliceLen(b) - before
		if ((calculatedSize != measuredSize) && (err == null)) {
			return [null, errors.MismatchedSizeCalculation(calculatedSize, measuredSize)]
		}
	}
	return [b, err]
}

export async function consumeMessage(b: $.Slice<number>, m: proto.Message | null, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple6: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple6[0]
	let n = __goscriptTuple6[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let __goscriptTuple7: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).UnmarshalState($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), Buf: v, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: (null as any), Depth: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }))
	let o = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [(out).clone(), err]
	}
	out.n = n
	out.initialized = $.uint((o.Flags & protoiface.UnmarshalInitialized), 8) != 0
	return [(out).clone(), null]
}

export async function sizeMessageValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await v.Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return sizeMessage(m, tagsize, opts)
}

export async function appendMessageValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await v.Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return appendMessage(b, m, wiretag, opts)
}

export async function consumeMessageValue(b: $.Slice<number>, v: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await v.Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let [out, err] = await consumeMessage(b, m, wtyp, opts)
	return [(v).clone(), (out).clone(), err]
}

export async function isInitMessageValue(v: protoreflect.Value): globalThis.Promise<$.GoError> {
	let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await v.Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return proto.CheckInitialized(m)
}

export var coderMessageValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderMessageValue(): void {
	if (((coderMessageValue) as any) === undefined) {
		coderMessageValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeMessageValue, marshal: appendMessageValue, unmarshal: consumeMessageValue, isInit: isInitMessageValue, merge: __goscript_merge.mergeMessageValue}, true)
	}
}

export function __goscript_get_coderMessageValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderMessageValue) as any) === undefined) {
		__goscript_init_coderMessageValue()
	}
	return coderMessageValue
}

export function __goscript_set_coderMessageValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderMessageValue, __goscriptValue)
}

export async function sizeGroupValue(v: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await v.Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return sizeGroup(m, tagsize, opts)
}

export async function appendGroupValue(b: $.Slice<number>, v: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await v.Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return appendGroup(b, m, wiretag, opts)
}

export async function consumeGroupValue(b: $.Slice<number>, v: protoreflect.Value, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await v.Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let [out, err] = await consumeGroup(b, m, num, wtyp, opts)
	return [(v).clone(), (out).clone(), err]
}

export var coderGroupValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderGroupValue(): void {
	if (((coderGroupValue) as any) === undefined) {
		coderGroupValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeGroupValue, marshal: appendGroupValue, unmarshal: consumeGroupValue, isInit: isInitMessageValue, merge: __goscript_merge.mergeMessageValue}, true)
	}
}

export function __goscript_get_coderGroupValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderGroupValue) as any) === undefined) {
		__goscript_init_coderGroupValue()
	}
	return coderGroupValue
}

export function __goscript_set_coderGroupValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderGroupValue, __goscriptValue)
}

export async function makeGroupFieldCoder(fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<__goscript_codec_tables.pointerCoderFuncs> {
	let num = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = await __goscript_message.getMessageInfo(ft)
		if (mi != null) {
			let funcs = new __goscript_codec_tables.pointerCoderFuncs({size: sizeGroupType, marshal: appendGroupType, unmarshal: consumeGroupType, merge: __goscript_merge.mergeMessage}, true)
			if (await __goscript_checkinit.needsInitCheck($.pointerValue<__goscript_message.MessageInfo>(mi).Desc)) {
				funcs.isInit = isInitMessageInfo
			}
			return (funcs).clone()
		} else {
			return new __goscript_codec_tables.pointerCoderFuncs({size: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> => {
				let m = await asMessage($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())))
				return await sizeGroup(m, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize, opts)
			}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), marshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
				let m = await asMessage($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())))
				return await appendGroup(b, m, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag, opts)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), unmarshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
				let mp = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem()))
				if ($.markAsStructValue($.cloneStructValue(mp)).IsNil()) {
					$.markAsStructValue($.cloneStructValue(mp)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
				}
				return consumeGroup(b, await asMessage(mp), num, wtyp, opts)
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo)), isInit: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
				let m = await asMessage($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await p.AsValueOf(ft)))).Elem())))
				return await proto.CheckInitialized(m)
			}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo)), merge: __goscript_merge.mergeMessage}, true)
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function sizeGroupType(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	return (2 * (f$ as __goscript_codec_message.coderFieldInfo).tagsize) + await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, p.Elem(), opts)
}

export async function appendGroupType(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	b = protowire.AppendVarint(b, (f$ as __goscript_codec_message.coderFieldInfo).wiretag)
	let __goscriptTuple8: any = await __goscript_message.MessageInfo.prototype.marshalAppendPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, b, p.Elem(), opts)
	b = __goscriptTuple8[0]
	let err = __goscriptTuple8[1]
	b = protowire.AppendVarint(b, $.uint64Add((f$ as __goscript_codec_message.coderFieldInfo).wiretag, 1n))
	return [b, err]
}

export async function consumeGroupType(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if (wtyp != 3) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	if ($.markAsStructValue($.cloneStructValue(p.Elem())).IsNil()) {
		p.SetPointer(__goscript_pointer_reflect.pointerOfValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((f$ as __goscript_codec_message.coderFieldInfo).mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
	}
	return __goscript_message.MessageInfo.prototype.unmarshalPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, b, p.Elem(), (f$ as __goscript_codec_message.coderFieldInfo).num, (opts).clone())
}

export async function sizeGroup(m: proto.Message | null, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	return (2 * tagsize) + await $.markAsStructValue($.cloneStructValue(opts.Options())).Size(m)
}

export async function appendGroup(b: $.Slice<number>, m: proto.Message | null, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	b = protowire.AppendVarint(b, wiretag)
	let __goscriptTuple9: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).MarshalAppend(b, m)
	b = __goscriptTuple9[0]
	let err = __goscriptTuple9[1]
	b = protowire.AppendVarint(b, $.uint64Add(wiretag, 1n))
	return [b, err]
}

export async function consumeGroup(b: $.Slice<number>, m: proto.Message | null, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 3) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple10: any = protowire.ConsumeGroup(num, b)
	b = __goscriptTuple10[0]
	let n = __goscriptTuple10[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let __goscriptTuple11: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).UnmarshalState($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), Buf: b, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: (null as any), Depth: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }))
	let o = __goscriptTuple11[0]
	err = __goscriptTuple11[1]
	if (err != null) {
		return [(out).clone(), err]
	}
	out.n = n
	out.initialized = $.uint((o.Flags & protoiface.UnmarshalInitialized), 8) != 0
	return [(out).clone(), null]
}

export async function makeMessageSliceFieldCoder(fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<__goscript_codec_tables.pointerCoderFuncs> {
	{
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = await __goscript_message.getMessageInfo(ft)
		if (mi != null) {
			let funcs = new __goscript_codec_tables.pointerCoderFuncs({size: sizeMessageSliceInfo, marshal: appendMessageSliceInfo, unmarshal: consumeMessageSliceInfo, merge: __goscript_merge.mergeMessageSlice}, true)
			if (await __goscript_checkinit.needsInitCheck($.pointerValue<__goscript_message.MessageInfo>(mi).Desc)) {
				funcs.isInit = isInitMessageSliceInfo
			}
			return (funcs).clone()
		}
	}
	return new __goscript_codec_tables.pointerCoderFuncs({size: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> => {
		return await sizeMessageSlice(p, ft, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize, opts)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), marshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		return await appendMessageSlice(b, p, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag, ft, opts)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), unmarshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
		return await consumeMessageSlice(b, p, ft, wtyp, opts)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo)), isInit: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
		return await isInitMessageSlice(p, ft)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo)), merge: __goscript_merge.mergeMessageSlice}, true)
}

export async function sizeMessageSliceInfo(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let n = 0
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		n = n + (protowire.SizeBytes(await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, (v).clone(), opts)) + (f$ as __goscript_codec_message.coderFieldInfo).tagsize)
	}
	return n
}

export async function appendMessageSliceInfo(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget1 = s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		b = protowire.AppendVarint(b, (f$ as __goscript_codec_message.coderFieldInfo).wiretag)
		let siz = await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, (v).clone(), opts)
		b = protowire.AppendVarint(b, $.uint64(siz))
		let before = $.sliceLen(b)
		let __goscriptTuple12: any = await __goscript_message.MessageInfo.prototype.marshalAppendPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, b, (v).clone(), opts)
		b = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [b, err]
		}
		{
			let measuredSize = $.sliceLen(b) - before
			if (siz != measuredSize) {
				return [null, errors.MismatchedSizeCalculation(siz, measuredSize)]
			}
		}
	}
	return [b, null]
}

export async function consumeMessageSliceInfo(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple13: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple13[0]
	let n = __goscriptTuple13[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let m = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((f$ as __goscript_codec_message.coderFieldInfo).mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface()
	let mp = __goscript_pointer_reflect.pointerOfIface(m)
	let __goscriptTuple14: any = await __goscript_message.MessageInfo.prototype.unmarshalPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, v, mp, 0, (opts).clone())
	let o = __goscriptTuple14[0]
	err = __goscriptTuple14[1]
	if (err != null) {
		return [(out).clone(), err]
	}
	p.AppendPointerSlice(mp)
	out.n = n
	out.initialized = o.initialized
	return [(out).clone(), null]
}

export async function isInitMessageSliceInfo(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> {
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	for (let __goscriptRangeTarget2 = s, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		{
			let err = await __goscript_message.MessageInfo.prototype.checkInitializedPointer.call($.pointerValue<__goscript_codec_message.coderFieldInfo>(f).mi, (v).clone())
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export async function sizeMessageSlice(p: __goscript_pointer_reflect.pointer, goType: reflect.Type | null, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let mopts = opts.Options()
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let n = 0
	for (let __goscriptRangeTarget3 = s, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		let m = await asMessage(await $.markAsStructValue($.cloneStructValue(v)).AsValueOf((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		n = n + (protowire.SizeBytes(await mopts.Size(m)) + tagsize)
	}
	return n
}

export async function appendMessageSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wiretag: bigint, goType: reflect.Type | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let mopts = opts.Options()
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget4 = s, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		let m = await asMessage(await $.markAsStructValue($.cloneStructValue(v)).AsValueOf((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		b = protowire.AppendVarint(b, wiretag)
		let siz = await mopts.Size(m)
		b = protowire.AppendVarint(b, $.uint64(siz))
		let before = $.sliceLen(b)
		let __goscriptTuple15: any = await mopts.MarshalAppend(b, m)
		b = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [b, err]
		}
		{
			let measuredSize = $.sliceLen(b) - before
			if (siz != measuredSize) {
				return [null, errors.MismatchedSizeCalculation(siz, measuredSize)]
			}
		}
	}
	return [b, null]
}

export async function consumeMessageSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, goType: reflect.Type | null, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 2) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple16: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple16[0]
	let n = __goscriptTuple16[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let mp = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
	let __goscriptTuple17: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).UnmarshalState($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>((await asMessage(mp))).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), Buf: v, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: (null as any), Depth: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }))
	let o = __goscriptTuple17[0]
	err = __goscriptTuple17[1]
	if (err != null) {
		return [(out).clone(), err]
	}
	p.AppendPointerSlice(__goscript_pointer_reflect.pointerOfValue(mp))
	out.n = n
	out.initialized = $.uint((o.Flags & protoiface.UnmarshalInitialized), 8) != 0
	return [(out).clone(), null]
}

export async function isInitMessageSlice(p: __goscript_pointer_reflect.pointer, goType: reflect.Type | null): globalThis.Promise<$.GoError> {
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	for (let __goscriptRangeTarget5 = s, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		let m = await asMessage(await $.markAsStructValue($.cloneStructValue(v)).AsValueOf((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		{
			let err = await proto.CheckInitialized(m)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export async function sizeMessageSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let mopts = opts.Options()
	let list = await listv.List()
	let n = 0
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		n = n + (protowire.SizeBytes(await mopts.Size(m)) + tagsize)
	}
	return n
}

export async function appendMessageSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = await listv.List()
	let mopts = opts.Options()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		b = protowire.AppendVarint(b, wiretag)
		let siz = await mopts.Size(m)
		b = protowire.AppendVarint(b, $.uint64(siz))
		let before = $.sliceLen(b)
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple18: any = await mopts.MarshalAppend(b, m)
		b = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [b, err]
		}
		{
			let measuredSize = $.sliceLen(b) - before
			if (siz != measuredSize) {
				return [null, errors.MismatchedSizeCalculation(siz, measuredSize)]
			}
		}
	}
	return [b, null]
}

export async function consumeMessageSliceValue(b: $.Slice<number>, listv: protoreflect.Value, _p2: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = await listv.List()
	if (wtyp != 2) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple19: any = protowire.ConsumeBytes(b)
	let v: $.Slice<number> = __goscriptTuple19[0]
	let n = __goscriptTuple19[1]
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	let m = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	let __goscriptTuple20: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).UnmarshalState($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: await m.Message(), Buf: v, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: (null as any), Depth: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }))
	let o = __goscriptTuple20[0]
	err = __goscriptTuple20[1]
	if (err != null) {
		return [new protoreflect.Value(undefined, true), (out).clone(), err]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((m).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	out.initialized = $.uint((o.Flags & protoiface.UnmarshalInitialized), 8) != 0
	return [(listv).clone(), (out).clone(), null]
}

export async function isInitMessageSliceValue(listv: protoreflect.Value): globalThis.Promise<$.GoError> {
	let list = await listv.List()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let err = await proto.CheckInitialized(m)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export var coderMessageSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderMessageSliceValue(): void {
	if (((coderMessageSliceValue) as any) === undefined) {
		coderMessageSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeMessageSliceValue, marshal: appendMessageSliceValue, unmarshal: consumeMessageSliceValue, isInit: isInitMessageSliceValue, merge: __goscript_merge.mergeMessageListValue}, true)
	}
}

export function __goscript_get_coderMessageSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderMessageSliceValue) as any) === undefined) {
		__goscript_init_coderMessageSliceValue()
	}
	return coderMessageSliceValue
}

export function __goscript_set_coderMessageSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderMessageSliceValue, __goscriptValue)
}

export async function sizeGroupSliceValue(listv: protoreflect.Value, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let mopts = opts.Options()
	let list = await listv.List()
	let n = 0
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		n = n + ((2 * tagsize) + await mopts.Size(m))
	}
	return n
}

export async function appendGroupSliceValue(b: $.Slice<number>, listv: protoreflect.Value, wiretag: bigint, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let list = await listv.List()
	let mopts = opts.Options()
	for (let i = 0, llen = (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i < llen; i++) {
		let m = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		b = protowire.AppendVarint(b, wiretag)
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple21: any = await mopts.MarshalAppend(b, m)
		b = __goscriptTuple21[0]
		err = __goscriptTuple21[1]
		if (err != null) {
			return [b, err]
		}
		b = protowire.AppendVarint(b, $.uint64Add(wiretag, 1n))
	}
	return [b, null]
}

export async function consumeGroupSliceValue(b: $.Slice<number>, listv: protoreflect.Value, num: protowire.Number, wtyp: protowire.Type, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[protoreflect.Value, __goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	let list = await listv.List()
	if (wtyp != 3) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple22: any = protowire.ConsumeGroup(num, b)
	b = __goscriptTuple22[0]
	let n = __goscriptTuple22[1]
	if (n < 0) {
		return [new protoreflect.Value(undefined, true), (out).clone(), __goscript_decode.errDecode]
	}
	let m = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
	let __goscriptTuple23: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).UnmarshalState($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: await m.Message(), Buf: b, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: (null as any), Depth: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }))
	let o = __goscriptTuple23[0]
	err = __goscriptTuple23[1]
	if (err != null) {
		return [new protoreflect.Value(undefined, true), (out).clone(), err]
	}
	void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((m).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	out.n = n
	out.initialized = $.uint((o.Flags & protoiface.UnmarshalInitialized), 8) != 0
	return [(listv).clone(), (out).clone(), null]
}

export var coderGroupSliceValue: __goscript_codec_tables.valueCoderFuncs

export function __goscript_init_coderGroupSliceValue(): void {
	if (((coderGroupSliceValue) as any) === undefined) {
		coderGroupSliceValue = new __goscript_codec_tables.valueCoderFuncs({size: sizeGroupSliceValue, marshal: appendGroupSliceValue, unmarshal: consumeGroupSliceValue, isInit: isInitMessageSliceValue, merge: __goscript_merge.mergeMessageListValue}, true)
	}
}

export function __goscript_get_coderGroupSliceValue(): __goscript_codec_tables.valueCoderFuncs {
	if (((coderGroupSliceValue) as any) === undefined) {
		__goscript_init_coderGroupSliceValue()
	}
	return coderGroupSliceValue
}

export function __goscript_set_coderGroupSliceValue(__goscriptValue: __goscript_codec_tables.valueCoderFuncs): void {
	$.assignStruct(coderGroupSliceValue, __goscriptValue)
}

export async function makeGroupSliceFieldCoder(fd: protoreflect.FieldDescriptor | null, ft: reflect.Type | null): globalThis.Promise<__goscript_codec_tables.pointerCoderFuncs> {
	let num = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = await __goscript_message.getMessageInfo(ft)
		if (mi != null) {
			let funcs = new __goscript_codec_tables.pointerCoderFuncs({size: sizeGroupSliceInfo, marshal: appendGroupSliceInfo, unmarshal: consumeGroupSliceInfo, merge: __goscript_merge.mergeMessageSlice}, true)
			if (await __goscript_checkinit.needsInitCheck($.pointerValue<__goscript_message.MessageInfo>(mi).Desc)) {
				funcs.isInit = isInitMessageSliceInfo
			}
			return (funcs).clone()
		}
	}
	return new __goscript_codec_tables.pointerCoderFuncs({size: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> => {
		return await sizeGroupSlice(p, ft, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).tagsize, opts)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), marshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		return await appendGroupSlice(b, p, $.pointerValue<__goscript_codec_message.coderFieldInfo>(f).wiretag, ft, opts)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.marshalOptions"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)), unmarshal: $.functionValue(async (b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> => {
		return await consumeGroupSlice(b, p, num, wtyp, ft, opts)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "impl.pointer", /* @__PURE__ */ $.basicType("int8", "protowire.Type"), /* @__PURE__ */ $.pointerType("impl.coderFieldInfo"), "impl.unmarshalOptions"], results: ["impl.unmarshalOutput", "error"] } as $.FunctionTypeInfo)), isInit: $.functionValue(async (p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null): globalThis.Promise<$.GoError> => {
		return await isInitMessageSlice(p, ft)
	}, ({ kind: $.TypeKind.Function, params: ["impl.pointer", /* @__PURE__ */ $.pointerType("impl.coderFieldInfo")], results: ["error"] } as $.FunctionTypeInfo)), merge: __goscript_merge.mergeMessageSlice}, true)
}

export async function sizeGroupSlice(p: __goscript_pointer_reflect.pointer, messageType: reflect.Type | null, tagsize: number, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	let mopts = opts.Options()
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let n = 0
	for (let __goscriptRangeTarget6 = s, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		let m = await asMessage(await $.markAsStructValue($.cloneStructValue(v)).AsValueOf((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(messageType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		n = n + ((2 * tagsize) + await mopts.Size(m))
	}
	return n
}

export async function appendGroupSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wiretag: bigint, messageType: reflect.Type | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget7 = s, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		let m = await asMessage(await $.markAsStructValue($.cloneStructValue(v)).AsValueOf((__goscriptAwait = (messageType !== null && (messageType as any).__isVarRef !== true && (messageType as any).__goValue === undefined ? (messageType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(messageType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		b = protowire.AppendVarint(b, wiretag)
		let __goscriptTuple24: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).MarshalAppend(b, m)
		b = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [b, err]
		}
		b = protowire.AppendVarint(b, $.uint64Add(wiretag, 1n))
	}
	return [b, null]
}

export async function consumeGroupSlice(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, num: protowire.Number, wtyp: protowire.Type, goType: reflect.Type | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
	let err: $.GoError = null! as $.GoError
	if (wtyp != 3) {
		return [(out).clone(), __goscript_decode.errUnknown]
	}
	let __goscriptTuple25: any = protowire.ConsumeGroup(num, b)
	b = __goscriptTuple25[0]
	let n = __goscriptTuple25[1]
	if (n < 0) {
		return [(out).clone(), __goscript_decode.errDecode]
	}
	let mp = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (goType !== null && (goType as any).__isVarRef !== true && (goType as any).__goValue === undefined ? (goType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(goType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
	let __goscriptTuple26: any = await $.markAsStructValue($.cloneStructValue(opts.Options())).UnmarshalState($.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>((await asMessage(mp))).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), Buf: b, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: (null as any), Depth: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }))
	let o = __goscriptTuple26[0]
	err = __goscriptTuple26[1]
	if (err != null) {
		return [(out).clone(), err]
	}
	p.AppendPointerSlice(__goscript_pointer_reflect.pointerOfValue(mp))
	out.n = n
	out.initialized = $.uint((o.Flags & protoiface.UnmarshalInitialized), 8) != 0
	return [(out).clone(), null]
}

export async function sizeGroupSliceInfo(p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<number> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let n = 0
	for (let __goscriptRangeTarget8 = s, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		n = n + ((2 * (f$ as __goscript_codec_message.coderFieldInfo).tagsize) + await __goscript_message.MessageInfo.prototype.sizePointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, (v).clone(), opts))
	}
	return n
}

export async function appendGroupSliceInfo(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_encode.marshalOptions): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	let s: $.Slice<__goscript_pointer_reflect.pointer> = p.PointerSlice()
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget9 = s, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
		b = protowire.AppendVarint(b, (f$ as __goscript_codec_message.coderFieldInfo).wiretag)
		let __goscriptTuple27: any = await __goscript_message.MessageInfo.prototype.marshalAppendPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, b, (v).clone(), opts)
		b = __goscriptTuple27[0]
		err = __goscriptTuple27[1]
		if (err != null) {
			return [b, err]
		}
		b = protowire.AppendVarint(b, $.uint64Add((f$ as __goscript_codec_message.coderFieldInfo).wiretag, 1n))
	}
	return [b, null]
}

export async function consumeGroupSliceInfo(b: $.Slice<number>, p: __goscript_pointer_reflect.pointer, wtyp: protowire.Type, f: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, opts: __goscript_decode.unmarshalOptions): globalThis.Promise<[__goscript_decode.unmarshalOutput, $.GoError]> {
	const f$: __goscript_codec_message.coderFieldInfo = f == null ? $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_codec_message.coderFieldInfo>(f)
	if (wtyp != 3) {
		return [new __goscript_decode.unmarshalOutput(undefined, true), __goscript_decode.errUnknown]
	}
	let m = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_message.MessageInfo>((f$ as __goscript_codec_message.coderFieldInfo).mi).GoReflectType).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface()
	let mp = __goscript_pointer_reflect.pointerOfIface(m)
	let [out, err] = await __goscript_message.MessageInfo.prototype.unmarshalPointer.call((f$ as __goscript_codec_message.coderFieldInfo).mi, b, mp, (f$ as __goscript_codec_message.coderFieldInfo).num, (opts).clone())
	if (err != null) {
		return [(out).clone(), err]
	}
	p.AppendPointerSlice(mp)
	return [(out).clone(), null]
}

export async function asMessage(v: reflect.Value): globalThis.Promise<protoreflect.ProtoMessage | null> {
	{
		let [m, ok] = $.typeAssertTuple<protoreflect.ProtoMessage | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "protoreflect.ProtoMessage")
		if (ok) {
			return m
		}
	}
	return $.pointerValue<Exclude<protoreflect.Message, null>>((await __goscript_legacy_message.legacyWrapMessage(v))).Interface()
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
