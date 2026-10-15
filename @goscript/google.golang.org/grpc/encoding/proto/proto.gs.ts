// Generated file based on proto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoadapt from "@goscript/google.golang.org/protobuf/protoadapt/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/protoadapt/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

$.registerTypePackagePath("google.golang.org/grpc/encoding/proto", ["proto.codecV2"])

export class codecV2 {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): codecV2 {
		return new codecV2(this, true)
	}

	public __goscriptAssign(source: codecV2): void {
	}

	public async Marshal(v: any): globalThis.Promise<[mem.BufferSlice, $.GoError]> {
		const c: codecV2 | $.VarRef<codecV2> | null = this;
		let data: mem.BufferSlice = null! as mem.BufferSlice
		let err: $.GoError = null! as $.GoError
		let vv = await messageV2Of(v)
		if (vv == null) {
			return [(null as mem.BufferSlice), fmt.Errorf("proto: failed to marshal, message is %T, want proto.Message", v)]
		}

		let size = await proto.Size(vv)
		if (mem.IsBelowBufferPoolingThreshold(size)) {
			let __goscriptTuple0: any = await proto.Marshal(vv)
			let buf: $.Slice<number> = __goscriptTuple0[0]
			let __goscriptShadow0 = __goscriptTuple0[1]
			if (__goscriptShadow0 != null) {
				return [(null as mem.BufferSlice), __goscriptShadow0]
			}
			data = ($.appendOne((data as mem.BufferSlice), $.namedValueInterfaceValue<mem.Buffer | null>((buf as mem.SliceBuffer), "mem.SliceBuffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.appendZeros.nil) as mem.BufferSlice)
		} else {
			let pool = mem.DefaultBufferPool()
			let buf = ((__goscriptAwait = (pool !== null && (pool as any).__isVarRef !== true && (pool as any).__goValue === undefined ? (pool as Exclude<mem.BufferPool, null>) : $.pointerValue<Exclude<mem.BufferPool, null>>(pool)).Get(size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			{
				let [, __goscriptShadow1] = await $.markAsStructValue($.cloneStructValue((new proto.MarshalOptions(undefined, true)))).MarshalAppend($.goSlice(($.pointerValue<$.Slice<number>>(buf)), undefined, 0), vv)
				if (__goscriptShadow1 != null) {
					void (__goscriptAwait = (pool !== null && (pool as any).__isVarRef !== true && (pool as any).__goValue === undefined ? (pool as Exclude<mem.BufferPool, null>) : $.pointerValue<Exclude<mem.BufferPool, null>>(pool)).Put(buf), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return [(null as mem.BufferSlice), __goscriptShadow1]
				}
			}
			data = ($.appendOne((data as mem.BufferSlice), await mem.NewBuffer(buf, pool), $.appendZeros.nil) as mem.BufferSlice)
		}

		return [(data as mem.BufferSlice), null]
	}

	public Name(): string {
		const c: codecV2 | $.VarRef<codecV2> | null = this;
		return "proto"
	}

	public async Unmarshal(data: mem.BufferSlice, v: any): globalThis.Promise<$.GoError> {
		const c: codecV2 | $.VarRef<codecV2> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		let vv = await messageV2Of(v)
		if (vv == null) {
			return fmt.Errorf("failed to unmarshal, message is %T, want proto.Message", v)
		}

		let buf = await mem.BufferSlice_MaterializeToBuffer(data, mem.DefaultBufferPool())
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Free())((buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(buf))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.Buffer.Free-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		// TODO: Upgrade proto.Unmarshal to support mem.BufferSlice. Right now, it's not
		//  really possible without a major overhaul of the proto package, but the
		//  vtprotobuf library may be able to support this.
		const __goscriptReturn0: $.GoError = await proto.Unmarshal(((__goscriptAwait = (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(buf)).ReadOnlyData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>), vv)
		err = __goscriptReturn0
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"proto.codecV2",
		() => new codecV2(),
		() => [$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["err", "error"]], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["v", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true)],
		codecV2,
		() => []
	)
}

export const Name: string = "proto"

async function __goscriptInit0(): globalThis.Promise<void> {
	await encoding.RegisterCodecV2($.interfaceValue<encoding.CodecV2 | null>(new codecV2(), "*proto.codecV2", /* @__PURE__ */ $.pointerType("proto.codecV2")))
}

export async function messageV2Of(v: any): globalThis.Promise<proto.Message | null> {
	{
		const __goscriptTypeSwitchValue = v
		switch (true) {
			case $.typeAssert<protoiface.MessageV1 | null>(__goscriptTypeSwitchValue, "protoiface.MessageV1").ok:
				{
					let v: protoiface.MessageV1 | null = $.typeAssert<protoiface.MessageV1 | null>(__goscriptTypeSwitchValue, "protoiface.MessageV1").value
					return protoadapt.MessageV2Of(v)
				}
				break
			case $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").ok:
				{
					let v: protoreflect.ProtoMessage | null = $.typeAssert<protoreflect.ProtoMessage | null>(__goscriptTypeSwitchValue, "protoreflect.ProtoMessage").value
					return v
				}
				break
		}
	}

	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Free: (receiver: any, ...args: any[]) => (mem.SliceBuffer_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (mem.SliceBuffer_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReadOnlyData: (receiver: any, ...args: any[]) => (mem.SliceBuffer_ReadOnlyData as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ref: (receiver: any, ...args: any[]) => (mem.SliceBuffer_Ref as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), read: (receiver: any, ...args: any[]) => (mem.SliceBuffer_read as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), split: (receiver: any, ...args: any[]) => (mem.SliceBuffer_split as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "mem.SliceBuffer"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ReadOnlyData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Ref"), $.methodSignature("read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "mem.Buffer"]), $.methodSignature("split", [["n", /* @__PURE__ */ $.basicType("int")]], [["left", "mem.Buffer"], ["right", "mem.Buffer"]])])
}

var __goscriptAwait: any

await __goscriptInit0()
