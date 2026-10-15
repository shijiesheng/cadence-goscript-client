// Generated file based on extensions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/sync/index.js"
import "./proto.gs.ts"

$.registerTypePackagePath("github.com/golang/protobuf/proto", ["proto.extensionResolver", "proto.fieldNum"])

export type ExtensionDesc = protoimpl.ExtensionInfo

export type ExtensionRange = protoiface.ExtensionRangeV1

export type Extension = protoimpl.ExtensionFieldV1

export type XXX_InternalExtensions = protoimpl.ExtensionFields

export type fieldNum = number

$.registerNamedValueType(
	"proto.fieldNum",
	{Has: (receiver: any, ...args: any[]) => (fieldNum_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Has", [["n2", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*proto.fieldNum",
	{Has: (receiver: any, ...args: any[]) => (fieldNum_Has as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Has", [["n2", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export class extensionResolver {
	public get xt(): protoreflect.ExtensionType | null {
		return this._fields.xt
	}

	public set xt(value: protoreflect.ExtensionType | null) {
		this._fields.xt = value
	}

	public _fields: {
		xt: protoreflect.ExtensionType | null
	}

	constructor(init?: Partial<{xt?: protoreflect.ExtensionType | null}>, __goscriptValue?: boolean) {
		this._fields = {
			xt: init?.xt ?? (null! as protoreflect.ExtensionType | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): extensionResolver {
		return new extensionResolver(this, true)
	}

	public __goscriptAssign(source: extensionResolver): void {
		const target = this._fields
		const values = source._fields
		target.xt = $.assignFieldValue(target.xt, values.xt, "protoreflect.ExtensionType")
	}

	public async FindExtensionByName(field: protoreflect.FullName): globalThis.Promise<[protoreflect.ExtensionType | null, $.GoError]> {
		const r = this;
		{
			let xtd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(r.xt).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ($.stringEqual((__goscriptAwait = (xtd !== null && (xtd as any).__isVarRef !== true && (xtd as any).__goValue === undefined ? (xtd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xtd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), field)) {
				return [r.xt, null]
			}
		}
		return protoregistry.Types.prototype.FindExtensionByName.call(protoregistry.GlobalTypes, field)
	}

	public async FindExtensionByNumber(message: protoreflect.FullName, field: protoreflect.FieldNumber): globalThis.Promise<[protoreflect.ExtensionType | null, $.GoError]> {
		const r = this;
		{
			let xtd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(r.xt).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (xtd !== null && (xtd as any).__isVarRef !== true && (xtd as any).__goValue === undefined ? (xtd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xtd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), message)) && ((__goscriptAwait = (xtd !== null && (xtd as any).__isVarRef !== true && (xtd as any).__goValue === undefined ? (xtd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xtd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == field)) {
				return [r.xt, null]
			}
		}
		return protoregistry.Types.prototype.FindExtensionByNumber.call(protoregistry.GlobalTypes, message, field)
	}

	static __typeInfo = $.registerStructType(
		"proto.extensionResolver",
		() => new extensionResolver(),
		() => [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])],
		extensionResolver,
		() => [/* @__PURE__ */ $.structField("xt", "protoreflect.ExtensionType", [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" })]
	)
}

export let ErrMissingExtension: $.GoError = errors.New("proto: missing extension")

export function __goscript_set_ErrMissingExtension(__goscriptValue: $.GoError): void {
	ErrMissingExtension = __goscriptValue
}

export let errNotExtendable: $.GoError = errors.New("proto: not an extendable proto.Message")

export function __goscript_set_errNotExtendable(__goscriptValue: $.GoError): void {
	errNotExtendable = __goscriptValue
}

export async function HasExtension(m: __goscript_proto.Message | null, xt: impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null): globalThis.Promise<boolean> {
	let has: boolean = false
	const xt$: ExtensionDesc = xt == null ? $.pointerTarget<ExtensionDesc>(xt) : (xt as any).__isVarRef === true ? (xt as any).value : (xt as any).__goValue === undefined ? (xt as any) : $.pointerTarget<ExtensionDesc>(xt)
	let mr = await __goscript_proto.MessageReflect(m)
	if ((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}

	// Check whether any populated known field matches the field number.
	let xtd = await (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? ((xt as any) as impl.ExtensionInfo).TypeDescriptor() : impl.ExtensionInfo.prototype.TypeDescriptor.call(xt))
	if (await isValidExtension((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), xtd)) {
		has = (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Has((xtd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value): globalThis.Promise<boolean> => {
			has = $.int((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32) == (xt$ as ExtensionDesc).Field
			return !has
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	// Check whether any unknown field matches the field number.
	for (let b: protoreflect.RawFields = (((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields); !has && ($.sliceLen((b as protoreflect.RawFields)) > 0); ) {
		let [num, , n] = protowire.ConsumeField(b)
		has = $.int(num, 32) == (xt$ as ExtensionDesc).Field
		b = ($.goSlice(b, n, undefined) as protoreflect.RawFields)
	}
	return has
}

export async function ClearExtension(m: __goscript_proto.Message | null, xt: impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null): globalThis.Promise<void> {
	const xt$: ExtensionDesc = xt == null ? $.pointerTarget<ExtensionDesc>(xt) : (xt as any).__isVarRef === true ? (xt as any).value : (xt as any).__goValue === undefined ? (xt as any) : $.pointerTarget<ExtensionDesc>(xt)
	let mr = await __goscript_proto.MessageReflect(m)
	if ((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return
	}

	let xtd = await (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? ((xt as any) as impl.ExtensionInfo).TypeDescriptor() : impl.ExtensionInfo.prototype.TypeDescriptor.call(xt))
	if (await isValidExtension((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), xtd)) {
		void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Clear((xtd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value): globalThis.Promise<boolean> => {
			if ($.int((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32) == (xt$ as ExtensionDesc).Field) {
				void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Clear(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return false
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	await clearUnknown(mr, $.namedValueInterfaceValue<any>($.int((xt$ as ExtensionDesc).Field, 32), "proto.fieldNum", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export async function ClearAllExtensions(m: __goscript_proto.Message | null): globalThis.Promise<void> {
	let mr = await __goscript_proto.MessageReflect(m)
	if ((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return
	}

	void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value): globalThis.Promise<boolean> => {
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Clear(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await clearUnknown(mr, ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
}

export async function GetExtension(m: __goscript_proto.Message | null, xt: impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null): globalThis.Promise<[any, $.GoError]> {
	const xt$: ExtensionDesc = xt == null ? $.pointerTarget<ExtensionDesc>(xt) : (xt as any).__isVarRef === true ? (xt as any).value : (xt as any).__goValue === undefined ? (xt as any) : $.pointerTarget<ExtensionDesc>(xt)
	let mr = await __goscript_proto.MessageReflect(m)
	if (((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) || ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
		return [null, errNotExtendable]
	}

	// Retrieve the unknown fields for this extension field.
	let bo: protoreflect.RawFields = null! as protoreflect.RawFields
	for (let bi: protoreflect.RawFields = (((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields); $.sliceLen((bi as protoreflect.RawFields)) > 0; ) {
		let [num, , n] = protowire.ConsumeField(bi)
		if ($.int(num, 32) == (xt$ as ExtensionDesc).Field) {
			bo = ($.appendSlice((bo as protoreflect.RawFields), $.goSlice(bi, undefined, n), $.byteSliceHint) as protoreflect.RawFields)
		}
		bi = ($.goSlice(bi, n, undefined) as protoreflect.RawFields)
	}

	// For type incomplete descriptors, only retrieve the unknown fields.
	if ((xt$ as ExtensionDesc).ExtensionType == null) {
		return [$.interfaceValue(bo, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), null]
	}

	// If the extension field only exists as unknown fields, unmarshal it.
	// This is rarely done since proto.Unmarshal eagerly unmarshals extensions.
	let xtd = await (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? ((xt as any) as impl.ExtensionInfo).TypeDescriptor() : impl.ExtensionInfo.prototype.TypeDescriptor.call(xt))
	if (!await isValidExtension((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), xtd)) {
		return [null, fmt.Errorf("proto: bad extended type; %T does not extend %T", ((xt$ as ExtensionDesc).ExtendedType as any), (m as any))]
	}
	if (!(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Has((xtd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ($.sliceLen((bo as protoreflect.RawFields)) > 0)) {
		let m2 = (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let err = (await $.markAsStructValue($.cloneStructValue(new proto.UnmarshalOptions({Resolver: $.interfaceValue(new extensionResolver({xt: $.interfaceValue<protoreflect.ExtensionType | null>(xt, "*impl.ExtensionInfo", /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))}, true), "proto.extensionResolver", "proto.extensionResolver")}, true))).Unmarshal(bo, (__goscriptAwait = (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? (m2 as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m2)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			if (err != null) {
				return [null, err]
			}
		}
		if ((__goscriptAwait = (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? (m2 as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m2)).Has((xtd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Set((xtd as protoreflect.FieldDescriptor | null), (((__goscriptAwait = (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? (m2 as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m2)).Get((xtd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await clearUnknown(mr, $.namedValueInterfaceValue<any>($.int((xt$ as ExtensionDesc).Field, 32), "proto.fieldNum", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
	}

	// Check whether the message has the extension field set or a default.
	let pv: protoreflect.Value = new protoreflect.Value(undefined, true)
	switch ((true as boolean)) {
		case (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Has((xtd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			pv = $.assignStruct(pv, ((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Get((xtd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
			break
		}
		case (__goscriptAwait = (xtd !== null && (xtd as any).__isVarRef !== true && (xtd as any).__goValue === undefined ? (xtd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xtd)).HasDefault(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			pv = $.assignStruct(pv, ((__goscriptAwait = (xtd !== null && (xtd as any).__isVarRef !== true && (xtd as any).__goValue === undefined ? (xtd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xtd)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
			break
		}
		default:
		{
			return [null, ErrMissingExtension]
			break
		}
	}

	let v = await (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? ((xt as any) as impl.ExtensionInfo).InterfaceOf(pv) : impl.ExtensionInfo.prototype.InterfaceOf.call(xt, pv))
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if (isScalarKind($.markAsStructValue($.cloneStructValue(rv)).Kind())) {
		let rv2 = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(rv)).Type())!)))
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv2)).Elem())).Set($.markAsStructValue($.cloneStructValue(rv)))
		v = $.markAsStructValue($.cloneStructValue(rv2)).Interface()
	}
	return [v, null]
}

export async function GetExtensions(m: __goscript_proto.Message | null, xts: $.Slice<impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>): globalThis.Promise<[$.Slice<any>, $.GoError]> {
	let mr = await __goscript_proto.MessageReflect(m)
	if ((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return [null, errNotExtendable]
	}

	let vs: $.Slice<any> = $.makeSlice<any>($.sliceLen(xts))
	for (let __goscriptRangeTarget0 = xts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(vs), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let xt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null)
		let [v, err] = await GetExtension(m, xt)
		if (err != null) {
			if ($.comparableEqual(err, ErrMissingExtension)) {
				continue
			}
			return [vs, err]
		}
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = v
	}
	return [vs, null]
}

export async function SetExtension(m: __goscript_proto.Message | null, xt: impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null, v: any): globalThis.Promise<$.GoError> {
	const xt$: ExtensionDesc = xt == null ? $.pointerTarget<ExtensionDesc>(xt) : (xt as any).__isVarRef === true ? (xt as any).value : (xt as any).__goValue === undefined ? (xt as any) : $.pointerTarget<ExtensionDesc>(xt)
	let mr = await __goscript_proto.MessageReflect(m)
	if (((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) || ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
		return errNotExtendable
	}

	let rv: reflect.Value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if (!$.comparableEqual(reflect.TypeOf(v), reflect.TypeOf((xt$ as ExtensionDesc).ExtensionType))) {
		return fmt.Errorf("proto: bad extension value type. got: %T, want: %T", v, (xt$ as ExtensionDesc).ExtensionType)
	}
	if ($.markAsStructValue($.cloneStructValue(rv)).Kind() == 22) {
		if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
			return fmt.Errorf("proto: SetExtension called with nil value of type %T", v)
		}
		if (isScalarKind($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Kind())) {
			v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rv)).Elem())).Interface()
		}
	}

	let xtd = await (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? ((xt as any) as impl.ExtensionInfo).TypeDescriptor() : impl.ExtensionInfo.prototype.TypeDescriptor.call(xt))
	if (!await isValidExtension((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), xtd)) {
		return fmt.Errorf("proto: bad extended type; %T does not extend %T", ((xt$ as ExtensionDesc).ExtendedType as any), (m as any))
	}
	void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Set((xtd as protoreflect.FieldDescriptor | null), await (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? ((xt as any) as impl.ExtensionInfo).ValueOf(v) : impl.ExtensionInfo.prototype.ValueOf.call(xt, v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await clearUnknown(mr, $.namedValueInterfaceValue<any>($.int((xt$ as ExtensionDesc).Field, 32), "proto.fieldNum", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	return null
}

export async function SetRawExtension(m: __goscript_proto.Message | null, fnum: number, b: $.Slice<number>): globalThis.Promise<void> {
	let mr = await __goscript_proto.MessageReflect(m)
	if ((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return
	}

	// Verify that the raw field is valid.
	for (let b0: $.Slice<number> = b; $.sliceLen(b0) > 0; ) {
		let [num, , n] = protowire.ConsumeField(b0)
		if ($.int(num, 32) != fnum) {
			$.panic(await fmt.Sprintf("mismatching field number: got %d, want %d", $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.basicInterfaceValue(fnum, "int32")))
		}
		b0 = $.goSlice(b0, n, undefined)
	}

	await ClearExtension(m, new impl.ExtensionInfo({Field: fnum}))
	void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).SetUnknown(($.appendSlice((((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields), b, $.byteSliceHint) as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function ExtensionDescs(m: __goscript_proto.Message | null): globalThis.Promise<[$.Slice<impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>, $.GoError]> {
	let mr = await __goscript_proto.MessageReflect(m)
	if (((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) || ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
		return [null, errNotExtendable]
	}

	// Collect a set of known extension descriptors.
	let extDescs: globalThis.Map<protoreflect.FieldNumber, impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null> | null = $.makeMap<protoreflect.FieldNumber, impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>()
	void (__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			let xt = $.mustTypeAssert<protoreflect.ExtensionTypeDescriptor | null>(fd, "protoreflect.ExtensionTypeDescriptor")
			{
				let __goscriptTuple0: any = $.typeAssertTuple<impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xt)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))
				let xd: impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					$.mapSet(extDescs, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), xd)
				}
			}
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// Collect a set of unknown extension descriptors.
	let extRanges = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let b: protoreflect.RawFields = (((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields); $.sliceLen((b as protoreflect.RawFields)) > 0; ) {
		let [num, , n] = protowire.ConsumeField(b)
		if ((__goscriptAwait = (extRanges !== null && (extRanges as any).__isVarRef !== true && (extRanges as any).__goValue === undefined ? (extRanges as Exclude<protoreflect.FieldRanges, null>) : $.pointerValue<Exclude<protoreflect.FieldRanges, null>>(extRanges)).Has(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ($.mapGet<protoreflect.FieldNumber, impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null, impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>(extDescs, num, null)[0] == null)) {
			$.mapSet(extDescs, num, null)
		}
		b = ($.goSlice(b, n, undefined) as protoreflect.RawFields)
	}

	// Transpose the set of descriptors into a list.
	let xts: $.Slice<impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null> = null! as $.Slice<impl.ExtensionInfo | $.VarRef<impl.ExtensionInfo> | null>
	for (let [num, xt] of extDescs?.entries() ?? []) {
		if (xt == null) {
			xt = new impl.ExtensionInfo({Field: $.int(num, 32)})
		}
		xts = $.appendOne(xts, xt, $.appendZeros.nil)
	}
	return [xts, null]
}

export async function isValidExtension(md: protoreflect.MessageDescriptor | null, xtd: protoreflect.ExtensionTypeDescriptor | null): globalThis.Promise<boolean> {
	return ($.comparableEqual((__goscriptAwait = (xtd !== null && (xtd as any).__isVarRef !== true && (xtd as any).__goValue === undefined ? (xtd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xtd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), md)) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has((__goscriptAwait = (xtd !== null && (xtd as any).__isVarRef !== true && (xtd as any).__goValue === undefined ? (xtd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xtd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function isScalarKind(k: reflect.Kind): boolean {
	switch (k) {
		case reflect.Bool:
		case reflect.Int32:
		case reflect.Int64:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Float32:
		case reflect.Float64:
		case reflect.String:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function clearUnknown(m: protoreflect.Message | null, remover: any): globalThis.Promise<void> {
	let bo: protoreflect.RawFields = null! as protoreflect.RawFields
	for (let bi: protoreflect.RawFields = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields); $.sliceLen((bi as protoreflect.RawFields)) > 0; ) {
		let [num, , n] = protowire.ConsumeField(bi)
		if (!(__goscriptAwait = (remover !== null && (remover as any).__isVarRef !== true && (remover as any).__goValue === undefined ? (remover as any) : $.pointerValue<any>(remover)).Has(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			bo = ($.appendSlice((bo as protoreflect.RawFields), $.goSlice(bi, undefined, n), $.byteSliceHint) as protoreflect.RawFields)
		}
		bi = ($.goSlice(bi, n, undefined) as protoreflect.RawFields)
	}
	{
		let bi: protoreflect.RawFields = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)
		if ($.sliceLen((bi as protoreflect.RawFields)) != $.sliceLen((bo as protoreflect.RawFields))) {
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).SetUnknown((bo as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
}

export function fieldNum_Has(n1: fieldNum, n2: protoreflect.FieldNumber): boolean {
	return $.int(n1, 32) == n2
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Has: (receiver: any, ...args: any[]) => (fieldNum_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "proto.fieldNum"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Has", [["n2", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
