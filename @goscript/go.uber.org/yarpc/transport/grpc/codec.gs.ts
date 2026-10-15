// Generated file based on codec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.customCodec"])

export class customCodec {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): customCodec {
		return new customCodec(this, true)
	}

	public __goscriptAssign(source: customCodec): void {
	}

	public async Marshal(v: any): globalThis.Promise<[mem.BufferSlice, $.GoError]> {
		let bytes: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError

		{
			const __goscriptTypeSwitchValue = v
			switch (true) {
				case $.typeAssert<mem.Buffer | null>(__goscriptTypeSwitchValue, "mem.Buffer").ok:
					{
						let value: mem.Buffer | null = $.typeAssert<mem.Buffer | null>(__goscriptTypeSwitchValue, "mem.Buffer").value
						void (__goscriptAwait = (value !== null && (value as any).__isVarRef !== true && (value as any).__goValue === undefined ? (value as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(value)).Ref(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return [($.arrayToSlice<mem.Buffer | null>([value]) as mem.BufferSlice), null]
					}
					break
				case $.typeAssert<mem.BufferSlice>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")).ok:
					{
						let value: mem.BufferSlice = $.typeAssert<mem.BufferSlice>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")).value
						mem.BufferSlice_Ref(value)
						return [(value as mem.BufferSlice), null]
					}
					break
				case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).ok:
					{
						let value: $.Slice<number> = $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).value
						let __goscriptAssign0_0: $.Slice<number> = value
						let __goscriptAssign0_1: $.GoError = null
						bytes = __goscriptAssign0_0
						err = __goscriptAssign0_1
					}
					break
				default:
					{
						let value: any = __goscriptTypeSwitchValue
						return [(null as mem.BufferSlice), newCustomCodecMarshalCastError(v)]
					}
					break
			}
		}

		return [($.arrayToSlice<mem.Buffer | null>([$.namedValueInterfaceValue<mem.Buffer | null>((bytes as mem.SliceBuffer), "mem.SliceBuffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]) as mem.BufferSlice), err]
	}

	public Name(): string {
		return "proto"
	}

	public Unmarshal(data: mem.BufferSlice, v: any): $.GoError {
		{
			const __goscriptTypeSwitchValue = v
			switch (true) {
				case $.typeAssert<$.VarRef<$.Slice<number>> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))).ok:
					{
						let value: $.VarRef<$.Slice<number>> | null = $.typeAssert<$.VarRef<$.Slice<number>> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))).value
						value!.value = mem.BufferSlice_Materialize(data)
						return null
					}
					break
				default:
					{
						let value: any = __goscriptTypeSwitchValue
						return newCustomCodecUnmarshalCastError(v)
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"grpc.customCodec",
		() => new customCodec(),
		() => [{ name: "Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice") }, { type: "error" }] }, { name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }],
		customCodec,
		() => []
	)
}

export const Name: string = "proto"

export function newCustomCodecMarshalCastError(actualObject: any): $.GoError {
	return fmt.Errorf("expected object to be of type []byte but got %T", actualObject)
}

export function newCustomCodecUnmarshalCastError(actualObject: any): $.GoError {
	return fmt.Errorf("expected object to be of type *[]byte but got %T", actualObject)
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
