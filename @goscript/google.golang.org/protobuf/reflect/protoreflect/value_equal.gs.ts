// Generated file based on value_equal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_methods from "./methods.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_source from "./source.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import * as __goscript_value from "./value.gs.ts"

import * as __goscript_value_pure from "./value_pure.gs.ts"

import * as __goscript_value_union from "./value_union.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./type.gs.ts"
import "./proto.gs.ts"
import "./source.gs.ts"
import "./source_gen.gs.ts"
import "./value.gs.ts"
import "./value_pure.gs.ts"
import "./value_union.gs.ts"

export async function equalValue(x: __goscript_value_union.Value, y: __goscript_value_union.Value): globalThis.Promise<boolean> {
	let eqType = x.typ == y.typ
	switch (x.typ) {
		case 0:
		{
			return eqType
			break
		}
		case 1:
		{
			return eqType && (await x.Bool() == await y.Bool())
			break
		}
		case 2:
		case 3:
		{
			return eqType && (await x.Int() == await y.Int())
			break
		}
		case 4:
		case 5:
		{
			return eqType && (await x.Uint() == await y.Uint())
			break
		}
		case 6:
		case 7:
		{
			return eqType && equalFloat(await x.Float(), await y.Float())
			break
		}
		case 8:
		{
			return eqType && ($.stringEqual(await x.String(), await y.String()))
			break
		}
		case 9:
		{
			return eqType && bytes.Equal(await x.Bytes(), await y.Bytes())
			break
		}
		case 10:
		{
			return eqType && (await x.Enum() == await y.Enum())
			break
		}
		default:
		{
			{
				const __goscriptTypeSwitchValue = await x.Interface()
				switch (true) {
					case $.typeAssert<__goscript_value.Message | null>(__goscriptTypeSwitchValue, "protoreflect.Message").ok:
						{
							let x: __goscript_value.Message | null = $.typeAssert<__goscript_value.Message | null>(__goscriptTypeSwitchValue, "protoreflect.Message").value
							let __goscriptShadow0 = y
							let __goscriptTuple0: any = $.typeAssertTuple<__goscript_value.Message | null>(await __goscriptShadow0.Interface(), "protoreflect.Message")
							let __goscriptShadow1 = __goscriptTuple0[0]
							let ok = __goscriptTuple0[1]
							return ok && await equalMessage(x, __goscriptShadow1)
						}
						break
					case $.typeAssert<__goscript_value.List | null>(__goscriptTypeSwitchValue, "protoreflect.List").ok:
						{
							let x: __goscript_value.List | null = $.typeAssert<__goscript_value.List | null>(__goscriptTypeSwitchValue, "protoreflect.List").value
							let __goscriptShadow2 = y
							let __goscriptTuple1: any = $.typeAssertTuple<__goscript_value.List | null>(await __goscriptShadow2.Interface(), "protoreflect.List")
							let __goscriptShadow3 = __goscriptTuple1[0]
							let ok = __goscriptTuple1[1]
							return ok && await equalList(x, __goscriptShadow3)
						}
						break
					case $.typeAssert<__goscript_value.Map | null>(__goscriptTypeSwitchValue, "protoreflect.Map").ok:
						{
							let x: __goscript_value.Map | null = $.typeAssert<__goscript_value.Map | null>(__goscriptTypeSwitchValue, "protoreflect.Map").value
							let __goscriptShadow4 = y
							let __goscriptTuple2: any = $.typeAssertTuple<__goscript_value.Map | null>(await __goscriptShadow4.Interface(), "protoreflect.Map")
							let __goscriptShadow5 = __goscriptTuple2[0]
							let ok = __goscriptTuple2[1]
							return ok && await equalMap(x, __goscriptShadow5)
						}
						break
					default:
						{
							let x: any = __goscriptTypeSwitchValue
							$.panic(await fmt.Sprintf("unknown type: %T", x))
						}
						break
				}
			}
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function equalFloat(x: number, y: number): boolean {
	if (math.IsNaN(x) || math.IsNaN(y)) {
		return math.IsNaN(x) && math.IsNaN(y)
	}
	return x == y
}

export async function equalMessage(mx: __goscript_value.Message | null, my: __goscript_value.Message | null): globalThis.Promise<boolean> {
	if (!$.comparableEqual((__goscriptAwait = (mx !== null && (mx as any).__isVarRef !== true && (mx as any).__goValue === undefined ? (mx as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(mx)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (my !== null && (my as any).__isVarRef !== true && (my as any).__goValue === undefined ? (my as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(my)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return false
	}

	let nx = 0
	let equal = true
	void (__goscriptAwait = (mx !== null && (mx as any).__isVarRef !== true && (mx as any).__goValue === undefined ? (mx as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(mx)).Range($.functionValue(async (fd: __goscript__type.FieldDescriptor | null, vx: __goscript_value_union.Value): globalThis.Promise<boolean> => {
		nx++
		let vy = (((__goscriptAwait = (my !== null && (my as any).__isVarRef !== true && (my as any).__goValue === undefined ? (my as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(my)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_value_union.Value)).clone()
		equal = (__goscriptAwait = (my !== null && (my as any).__isVarRef !== true && (my as any).__goValue === undefined ? (my as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(my)).Has(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && await equalValue(vx, vy)
		return equal
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (!equal) {
		return false
	}
	let ny = 0
	void (__goscriptAwait = (my !== null && (my as any).__isVarRef !== true && (my as any).__goValue === undefined ? (my as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(my)).Range($.functionValue((fd: __goscript__type.FieldDescriptor | null, vx: __goscript_value_union.Value): boolean => {
		ny++
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (nx != ny) {
		return false
	}

	return equalUnknown((((__goscriptAwait = (mx !== null && (mx as any).__isVarRef !== true && (mx as any).__goValue === undefined ? (mx as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(mx)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_value.RawFields) as __goscript_value.RawFields), (((__goscriptAwait = (my !== null && (my as any).__isVarRef !== true && (my as any).__goValue === undefined ? (my as Exclude<__goscript_value.Message, null>) : $.pointerValue<Exclude<__goscript_value.Message, null>>(my)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_value.RawFields) as __goscript_value.RawFields))
}

export async function equalList(x: __goscript_value.List | null, y: __goscript_value.List | null): globalThis.Promise<boolean> {
	if ((__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<__goscript_value.List, null>) : $.pointerValue<Exclude<__goscript_value.List, null>>(x)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<__goscript_value.List, null>) : $.pointerValue<Exclude<__goscript_value.List, null>>(y)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}
	for (let i = (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<__goscript_value.List, null>) : $.pointerValue<Exclude<__goscript_value.List, null>>(x)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
		if (!await equalValue((((__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<__goscript_value.List, null>) : $.pointerValue<Exclude<__goscript_value.List, null>>(x)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_value_union.Value)).clone(), (((__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<__goscript_value.List, null>) : $.pointerValue<Exclude<__goscript_value.List, null>>(y)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_value_union.Value)).clone())) {
			return false
		}
	}
	return true
}

export async function equalMap(x: __goscript_value.Map | null, y: __goscript_value.Map | null): globalThis.Promise<boolean> {
	if ((__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<__goscript_value.Map, null>) : $.pointerValue<Exclude<__goscript_value.Map, null>>(x)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<__goscript_value.Map, null>) : $.pointerValue<Exclude<__goscript_value.Map, null>>(y)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}
	let equal = true
	void (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<__goscript_value.Map, null>) : $.pointerValue<Exclude<__goscript_value.Map, null>>(x)).Range($.functionValue(async (k: __goscript_value_union.MapKey, vx: __goscript_value_union.Value): globalThis.Promise<boolean> => {
		let vy = (((__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<__goscript_value.Map, null>) : $.pointerValue<Exclude<__goscript_value.Map, null>>(y)).Get((k).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_value_union.Value)).clone()
		equal = (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<__goscript_value.Map, null>) : $.pointerValue<Exclude<__goscript_value.Map, null>>(y)).Has((k).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && await equalValue(vx, vy)
		return equal
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return equal
}

export function equalUnknown(x: __goscript_value.RawFields, y: __goscript_value.RawFields): boolean {
	if ($.sliceLen((x as __goscript_value.RawFields)) != $.sliceLen((y as __goscript_value.RawFields))) {
		return false
	}
	if (bytes.Equal(x, y)) {
		return true
	}

	let mx: globalThis.Map<__goscript_proto.FieldNumber, __goscript_value.RawFields> | null = $.makeMap<__goscript_proto.FieldNumber, __goscript_value.RawFields>()
	let my: globalThis.Map<__goscript_proto.FieldNumber, __goscript_value.RawFields> | null = $.makeMap<__goscript_proto.FieldNumber, __goscript_value.RawFields>()
	while ($.sliceLen((x as __goscript_value.RawFields)) > 0) {
		let [fnum, , n] = protowire.ConsumeField(x)
		$.mapSet(mx, fnum, ($.appendSlice(($.mapGet<__goscript_proto.FieldNumber, __goscript_value.RawFields, __goscript_value.RawFields>(mx, fnum, null)[0] as __goscript_value.RawFields), $.goSlice(x, undefined, n), $.byteSliceHint) as __goscript_value.RawFields))
		x = ($.goSlice(x, n, undefined) as __goscript_value.RawFields)
	}
	while ($.sliceLen((y as __goscript_value.RawFields)) > 0) {
		let [fnum, , n] = protowire.ConsumeField(y)
		$.mapSet(my, fnum, ($.appendSlice(($.mapGet<__goscript_proto.FieldNumber, __goscript_value.RawFields, __goscript_value.RawFields>(my, fnum, null)[0] as __goscript_value.RawFields), $.goSlice(y, undefined, n), $.byteSliceHint) as __goscript_value.RawFields))
		y = ($.goSlice(y, n, undefined) as __goscript_value.RawFields)
	}
	return reflect.DeepEqual($.interfaceValue(mx, "map[protowire.Number]protoreflect.RawFields", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields"))), $.interfaceValue(my, "map[protowire.Number]protoreflect.RawFields", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "protoreflect.RawFields"))))
}

var __goscriptAwait: any
