// Generated file based on inject.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

export let _clientBuilders: globalThis.Map<reflect.Type | null, reflect.Value> | null = $.makeMap<reflect.Type | null, reflect.Value>()

export function __goscript_set__clientBuilders(__goscriptValue: globalThis.Map<reflect.Type | null, reflect.Value> | null): void {
	_clientBuilders = __goscriptValue
}

export let _typeOfClientConfig: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*transport.ClientConfig", /* @__PURE__ */ $.pointerType("transport.ClientConfig")))).Elem()

export function __goscript_set__typeOfClientConfig(__goscriptValue: reflect.Type | null): void {
	_typeOfClientConfig = __goscriptValue
}

export let _typeOfStructField: reflect.Type | null = reflect.TypeOf($.interfaceValue($.markAsStructValue(new reflect.StructField()), "reflect.StructField", "reflect.StructField"))

export function __goscript_set__typeOfStructField(__goscriptValue: reflect.Type | null): void {
	_typeOfStructField = __goscriptValue
}

export async function validateClientBuilder(f: any): globalThis.Promise<reflect.Value> {
	if (f == null) {
		$.panic("must not be nil")
	}

	let fv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(f)))
	let ft = $.markAsStructValue($.cloneStructValue(fv)).Type()
	switch ((true as boolean)) {
		case (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19:
		{
			$.panic(await fmt.Sprintf("must be a function, not %v", (ft as any)))
			break
		}
		case (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0:
		{
			$.panic("must accept at least one argument")
			break
		}
		case (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 2:
		{
			$.panic(await fmt.Sprintf("must accept at most two arguments, got %v", $.basicInterfaceValue((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int")))
			break
		}
		case (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 1:
		{
			$.panic(await fmt.Sprintf("must return exactly one result, got %v", $.basicInterfaceValue((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int")))
			break
		}
		case !$.comparableEqual((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), _typeOfClientConfig):
		{
			$.panic(await fmt.Sprintf("must accept a transport.ClientConfig as its first argument, got %v", ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))
			break
		}
		case ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2) && (!$.comparableEqual((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), _typeOfStructField)):
		{
			$.panic(await fmt.Sprintf("if a second argument is accepted, it must be a reflect.StructField, got %v", ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))
			break
		}
		case (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 20:
		{
			$.panic(await fmt.Sprintf("must return a single interface type as a result, got %v", $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			break
		}
	}

	return $.markAsStructValue($.cloneStructValue(fv))
}

export async function RegisterClientBuilder(f: any): globalThis.Promise<(() => void) | null> {
	let forget: (() => void) | null = null! as (() => void) | null
	let fv = await validateClientBuilder(f)
	let t = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(fv)).Type()).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	{
		let [, conflict] = $.mapGet<reflect.Type | null, reflect.Value, reflect.Value>(_clientBuilders, t, $.markAsStructValue(new reflect.Value()))
		if (conflict) {
			$.panic(await fmt.Sprintf("a builder for %v has already been registered", (t as any)))
		}
	}

	$.mapSet(_clientBuilders, t, $.markAsStructValue($.cloneStructValue(fv)))
	return $.functionValue((): void => {
		$.deleteMapEntry(_clientBuilders, t)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
}

export async function InjectClients(src: transport.ClientConfigProvider | null, dest: any): globalThis.Promise<void> {
	let destV = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(dest)))
	let destT = reflect.TypeOf(dest)
	if (((__goscriptAwait = (destT !== null && (destT as any).__isVarRef !== true && (destT as any).__goValue === undefined ? (destT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(destT)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (destT !== null && (destT as any).__isVarRef !== true && (destT as any).__goValue === undefined ? (destT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(destT)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
		$.panic(await fmt.Sprintf("dest must be a pointer to a struct, not %T", dest))
	}

	let structV = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(destV)).Elem()))
	let structT = (__goscriptAwait = (destT !== null && (destT as any).__isVarRef !== true && (destT as any).__goValue === undefined ? (destT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(destT)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(structV)).NumField(); i++) {
		let fieldInfo = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (structT !== null && (structT as any).__isVarRef !== true && (structT as any).__goValue === undefined ? (structT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structT)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		let fieldV = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(structV)).Field(i)))

		if (!$.markAsStructValue($.cloneStructValue(fieldV)).CanSet()) {
			continue
		}

		let fieldT = fieldInfo.Type
		if ((__goscriptAwait = (fieldT !== null && (fieldT as any).__isVarRef !== true && (fieldT as any).__goValue === undefined ? (fieldT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fieldT)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 20) {
			continue
		}

		let service = reflect.StructTag_Get(fieldInfo.Tag, "service")
		if ($.stringEqual(service, "")) {
			continue
		}

		if (!$.markAsStructValue($.cloneStructValue(fieldV)).IsNil()) {
			continue
		}

		let [builder, ok] = $.mapGet<reflect.Type | null, reflect.Value, reflect.Value>(_clientBuilders, fieldT, $.markAsStructValue(new reflect.Value()))
		if (!ok) {
			$.panic(await fmt.Sprintf("a constructor for %v has not been registered", (fieldT as any)))
		}
		let builderT = $.markAsStructValue($.cloneStructValue(builder)).Type()

		let args: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>(1, (__goscriptAwait = (builderT !== null && (builderT as any).__isVarRef !== true && (builderT as any).__goValue === undefined ? (builderT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(builderT)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, () => $.markAsStructValue(new reflect.Value()))
		$.assignStruct($.sliceElems(args!)[$.sliceSlot(args!, 0)], reflect.ValueOf(((__goscriptAwait = (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<transport.ClientConfigProvider, null>) : $.pointerValue<Exclude<transport.ClientConfigProvider, null>>(src)).ClientConfig(service), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))
		if ((__goscriptAwait = (builderT !== null && (builderT as any).__isVarRef !== true && (builderT as any).__goValue === undefined ? (builderT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(builderT)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 1) {
			args = $.appendOne(args, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.markAsStructValue($.cloneStructValue(fieldInfo)), "reflect.StructField", "reflect.StructField")))))
		}

		let client = $.markAsStructValue($.cloneStructValue($.arrayIndex((await $.markAsStructValue($.cloneStructValue(builder)).Call(args))!, 0)))
		$.markAsStructValue($.cloneStructValue(fieldV)).Set($.markAsStructValue($.cloneStructValue(client)))
	}
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
