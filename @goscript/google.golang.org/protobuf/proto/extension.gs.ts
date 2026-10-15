// Generated file based on extension.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./proto.gs.ts"

export async function HasExtension(m: __goscript_proto.Message | null, xt: protoreflect.ExtensionType | null): globalThis.Promise<boolean> {
	// Treat nil message interface or descriptor as an empty message; no populated
	// fields.
	if ((m == null) || (xt == null)) {
		return false
	}

	// As a special-case, we reports invalid or mismatching descriptors
	// as always not being populated (since they aren't).
	let mr = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let xd = (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (!$.comparableEqual((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return false
	}

	return (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Has((xd as protoreflect.FieldDescriptor | null))
}

export async function ClearExtension(m: __goscript_proto.Message | null, xt: protoreflect.ExtensionType | null): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Clear(((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function GetExtension(m: __goscript_proto.Message | null, xt: protoreflect.ExtensionType | null): globalThis.Promise<any> {
	// Treat nil message interface as an empty message; return the default.
	if (m == null) {
		return (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).InterfaceOf((((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).Zero(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	return (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).InterfaceOf((((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function SetExtension(m: __goscript_proto.Message | null, xt: protoreflect.ExtensionType | null, v: any): globalThis.Promise<void> {
	let xd = (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let pv = (((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).ValueOf(v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()

	// Specially treat an invalid list, map, or message as clear.
	let isValid = true
	switch ((true as boolean)) {
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			isValid = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.List, null>>((await pv.List())).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
		{
			isValid = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Map, null>>((await pv.Map())).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null:
		{
			isValid = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((await pv.Message())).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
	}
	if (!isValid) {
		void (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Clear((xd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return
	}

	void (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Set((xd as protoreflect.FieldDescriptor | null), (pv).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function RangeExtensions(m: __goscript_proto.Message | null, f: ((_p0: protoreflect.ExtensionType | null, _p1: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
	// Treat nil message interface as an empty message; nothing to range over.
	if (m == null) {
		return
	}

	void (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			let xt = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>($.mustTypeAssert<protoreflect.ExtensionTypeDescriptor | null>(fd, "protoreflect.ExtensionTypeDescriptor")).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let vi = (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).InterfaceOf((v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return f!(xt, vi)
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptAwait: any
