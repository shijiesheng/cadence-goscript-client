// Generated file based on proto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoV2 from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"

$.registerTypePackagePath("github.com/golang/protobuf/proto", ["proto.GeneratedEnum", "proto.GeneratedMessage", "proto.Marshaler", "proto.Unmarshaler", "proto.Merger", "proto.RequiredNotSetError"])

export type GeneratedEnum = any

$.registerInterfaceType(
	"proto.GeneratedEnum",
	null,
	[]
);

export type GeneratedMessage = any

$.registerInterfaceType(
	"proto.GeneratedMessage",
	null,
	[]
);

export type Message = protoiface.MessageV1 | null

export type Marshaler = {
	Marshal(): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"proto.Marshaler",
	null,
	[$.methodSignature("Marshal", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);

export type Unmarshaler = {
	Unmarshal(_p0: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"proto.Unmarshaler",
	null,
	[$.methodSignature("Unmarshal", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["error"])]
);

export type Merger = {
	Merge(src: Message | null): void
}

$.registerInterfaceType(
	"proto.Merger",
	null,
	[$.methodSignature("Merge", [["src", "protoiface.MessageV1"]])]
);

export class RequiredNotSetError {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequiredNotSetError {
		return new RequiredNotSetError(this, true)
	}

	public __goscriptAssign(source: RequiredNotSetError): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: RequiredNotSetError | $.VarRef<RequiredNotSetError> | null = this;
		const e$: RequiredNotSetError = e == null ? $.pointerTarget<RequiredNotSetError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<RequiredNotSetError>(e)
		if ((e$ as RequiredNotSetError).err != null) {
			return $.pointerValue<Exclude<$.GoError, null>>((e$ as RequiredNotSetError).err).Error()
		}
		return "proto: required field not set"
	}

	public RequiredNotSet(): boolean {
		const e: RequiredNotSetError | $.VarRef<RequiredNotSetError> | null = this;
		return true
	}

	static __typeInfo = $.registerStructType(
		"proto.RequiredNotSetError",
		() => new RequiredNotSetError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RequiredNotSet", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		RequiredNotSetError,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" })]
	)
}

export const ProtoPackageIsVersion1: boolean = true

export const ProtoPackageIsVersion2: boolean = true

export const ProtoPackageIsVersion3: boolean = true

export const ProtoPackageIsVersion4: boolean = true

export async function MessageV1(m: GeneratedMessage | null): globalThis.Promise<protoiface.MessageV1 | null> {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).ProtoMessageV1Of((m as impl.message | null))
}

export async function MessageV2(m: GeneratedMessage | null): globalThis.Promise<protoV2.Message | null> {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).ProtoMessageV2Of((m as impl.message | null))
}

export async function MessageReflect(m: Message | null): globalThis.Promise<protoreflect.Message | null> {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageOf((m as impl.message | null))
}

export async function checkRequiredNotSet(m: protoV2.Message | null): globalThis.Promise<$.GoError> {
	{
		let err = await protoV2.CheckInitialized(m)
		if (err != null) {
			return $.interfaceValue<$.GoError>(new RequiredNotSetError({err: err}), "*proto.RequiredNotSetError", /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
		}
	}
	return null
}

export async function Clone(src: Message | null): globalThis.Promise<Message | null> {
	return MessageV1((await protoV2.Clone(await MessageV2((src as GeneratedMessage | null))) as GeneratedMessage | null))
}

export async function Merge(dst: Message | null, src: Message | null): globalThis.Promise<void> {
	await protoV2.Merge(await MessageV2((dst as GeneratedMessage | null)), await MessageV2((src as GeneratedMessage | null)))
}

export async function Equal(x: Message | null, y: Message | null): globalThis.Promise<boolean> {
	return protoV2.Equal(await MessageV2((x as GeneratedMessage | null)), await MessageV2((y as GeneratedMessage | null)))
}

export async function isMessageSet(md: protoreflect.MessageDescriptor | null): globalThis.Promise<boolean> {
	let [ms, ok] = $.typeAssertTuple<any>(md, { kind: $.TypeKind.Interface, methods: [{ name: "IsMessageSet", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
	return ok && (__goscriptAwait = (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? (ms as any) : $.pointerValue<any>(ms)).IsMessageSet(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptAwait: any
