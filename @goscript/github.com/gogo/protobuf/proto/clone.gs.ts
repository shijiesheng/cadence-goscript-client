// Generated file based on clone.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_extensions from "./extensions.gs.ts"

import * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "./extensions.gs.ts"
import "./extensions_gogo.gs.ts"
import "./lib.gs.ts"
import "./properties.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.Merger", "proto.generatedMerger"])

export type Merger = {
	Merge(src: __goscript_lib.Message | null): void
}

$.registerInterfaceType(
	"proto.Merger",
	null,
	[$.methodSignature("Merge", [["src", "proto.Message"]])]
);

export type generatedMerger = {
	XXX_Merge(src: __goscript_lib.Message | null): void
}

$.registerInterfaceType(
	"proto.generatedMerger",
	null,
	[$.methodSignature("XXX_Merge", [["src", "proto.Message"]])]
);

export async function Clone(src: __goscript_lib.Message | null): globalThis.Promise<__goscript_lib.Message | null> {
	let _in = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((src as any))))
	if ($.markAsStructValue($.cloneStructValue(_in)).IsNil()) {
		return src
	}
	let out = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
	let dst = $.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(out)).Interface(), "proto.Message")
	await Merge(dst, src)
	return dst
}

export async function Merge(dst: __goscript_lib.Message | null, src: __goscript_lib.Message | null): globalThis.Promise<void> {
	{
		let [m, ok] = $.typeAssertTuple<Merger | null>(dst, "proto.Merger")
		if (ok) {
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<Merger, null>) : $.pointerValue<Exclude<Merger, null>>(m)).Merge(src), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
	}

	let _in = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((src as any))))
	let out = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((dst as any))))
	if ($.markAsStructValue($.cloneStructValue(out)).IsNil()) {
		$.panic("proto: nil destination")
	}
	if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(_in)).Type(), $.markAsStructValue($.cloneStructValue(out)).Type())) {
		$.panic(await fmt.Sprintf("proto.Merge(%T, %T) type mismatch", (dst as any), (src as any)))
	}
	if ($.markAsStructValue($.cloneStructValue(_in)).IsNil()) {
		return
	}
	{
		let [m, ok] = $.typeAssertTuple<generatedMerger | null>(dst, "proto.generatedMerger")
		if (ok) {
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<generatedMerger, null>) : $.pointerValue<Exclude<generatedMerger, null>>(m)).XXX_Merge(src), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
	}
	await mergeStruct($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Elem())), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem())))
}

export async function mergeStruct(out: reflect.Value, _in: reflect.Value): globalThis.Promise<void> {
	let sprop: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null = await __goscript_properties.GetProperties($.markAsStructValue($.cloneStructValue(_in)).Type())
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(_in)).NumField(); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		if (strings.HasPrefix(f.Name, "XXX_")) {
			continue
		}
		await mergeAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Field(i))), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Field(i))), false, $.arrayIndex($.pointerValue<__goscript_properties.StructProperties>(sprop).Prop!, i))
	}

	{
		let [emIn, ok] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Addr())).Interface(), "proto.extensionsBytes")
		if (ok) {
			let emOut = $.mustTypeAssert<__goscript_extensions_gogo.extensionsBytes | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Addr())).Interface(), "proto.extensionsBytes")
			let bIn = ((__goscriptAwait = (emIn !== null && (emIn as any).__isVarRef !== true && (emIn as any).__goValue === undefined ? (emIn as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(emIn)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			let bOut = ((__goscriptAwait = (emOut !== null && (emOut as any).__isVarRef !== true && (emOut as any).__goValue === undefined ? (emOut as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(emOut)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
			bOut!.value = $.appendSlice($.pointerValue<$.Slice<number>>(bOut), $.pointerValue<$.Slice<number>>(bIn), $.byteSliceHint)
		} else {
			{
				let [__goscriptShadow0, err] = __goscript_extensions.extendable($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Addr())).Interface())
				if (err == null) {
					let [emOut, ] = __goscript_extensions.extendable($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Addr())).Interface())
					let __goscriptTuple0: any = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(__goscriptShadow0)).extensionsRead()
					let mIn: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple0[0]
					let muIn = __goscriptTuple0[1]
					if (mIn != null) {
						let mOut: globalThis.Map<number, __goscript_extensions.Extension> | null = ((__goscriptAwait = (emOut !== null && (emOut as any).__isVarRef !== true && (emOut as any).__goValue === undefined ? (emOut as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(emOut)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, __goscript_extensions.Extension> | null)
						await (muIn !== null && (muIn as any).__isVarRef !== true && (muIn as any).__goValue === undefined ? (muIn as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(muIn)).Lock()
						await mergeExtension(mOut, mIn)
						void (__goscriptAwait = (muIn !== null && (muIn as any).__isVarRef !== true && (muIn as any).__goValue === undefined ? (muIn as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(muIn)).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
		}
	}

	let uf = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).FieldByName("XXX_unrecognized")))
	if (!$.markAsStructValue($.cloneStructValue(uf)).IsValid()) {
		return
	}
	let uin: $.Slice<number> = $.markAsStructValue($.cloneStructValue(uf)).Bytes()
	if ($.sliceLen(uin) > 0) {
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).FieldByName("XXX_unrecognized"))).SetBytes($.appendSlice<number>(null, uin, $.byteSliceHint))
	}
}

export async function mergeAny(out: reflect.Value, _in: reflect.Value, viaPtr: boolean, prop: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null): globalThis.Promise<void> {
	if ($.comparableEqual($.markAsStructValue($.cloneStructValue(_in)).Type(), __goscript_properties.__goscript_get_protoMessageType())) {
		if (!$.markAsStructValue($.cloneStructValue(_in)).IsNil()) {
			if ($.markAsStructValue($.cloneStructValue(out)).IsNil()) {
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf((await Clone($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(_in)).Interface(), "proto.Message")) as any)))))
			} else {
				await Merge($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(out)).Interface(), "proto.Message"), $.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(_in)).Interface(), "proto.Message"))
			}
		}
		return
	}
	switch ($.markAsStructValue($.cloneStructValue(_in)).Kind()) {
		case reflect.Bool:
		case reflect.Float32:
		case reflect.Float64:
		case reflect.Int32:
		case reflect.Int64:
		case reflect.String:
		case reflect.Uint32:
		case reflect.Uint64:
		{
			if (!viaPtr && __goscript_lib.isProto3Zero(_in)) {
				return
			}
			$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(_in)))
			break
		}
		case reflect.Interface:
		{
			if ($.markAsStructValue($.cloneStructValue(_in)).IsNil()) {
				return
			}
			// Allocate destination if it is not set, or set to a different type.
			// Otherwise we will merge as normal.
			if ($.markAsStructValue($.cloneStructValue(out)).IsNil() || (!$.comparableEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Elem())).Type(), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem())).Type()))) {
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem())).Elem())).Type())!))))
			}
			await mergeAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Elem())), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem())), false, null)
			break
		}
		case reflect.Map:
		{
			if ($.markAsStructValue($.cloneStructValue(_in)).Len() == 0) {
				return
			}
			if ($.markAsStructValue($.cloneStructValue(out)).IsNil()) {
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(_in)).Type())!))))
			}
			// For maps with value types of *T or []byte we need to deep copy each value.
			let elemKind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			for (let __goscriptRangeTarget0 = $.markAsStructValue($.cloneStructValue(_in)).MapKeys(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as reflect.Value)))
				let val: reflect.Value = $.markAsStructValue(new reflect.Value())
				switch (elemKind) {
					case reflect.Ptr:
					{
						val = $.assignStruct(val, reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
						await mergeAny(val, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).MapIndex($.markAsStructValue($.cloneStructValue(key))))), false, null)
						break
					}
					case reflect.Slice:
					{
						val = $.assignStruct(val, $.markAsStructValue($.cloneStructValue(_in)).MapIndex($.markAsStructValue($.cloneStructValue(key))))
						val = $.assignStruct(val, reflect.ValueOf($.interfaceValue($.appendSlice(new Uint8Array([]) as $.Slice<number>, $.markAsStructValue($.cloneStructValue(val)).Bytes(), $.byteSliceHint), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
						break
					}
					default:
					{
						val = $.assignStruct(val, $.markAsStructValue($.cloneStructValue(_in)).MapIndex($.markAsStructValue($.cloneStructValue(key))))
						break
					}
				}
				$.markAsStructValue($.cloneStructValue(out)).SetMapIndex($.markAsStructValue($.cloneStructValue(key)), $.markAsStructValue($.cloneStructValue(val)))
			}
			break
		}
		case reflect.Ptr:
		{
			if ($.markAsStructValue($.cloneStructValue(_in)).IsNil()) {
				return
			}
			if ($.markAsStructValue($.cloneStructValue(out)).IsNil()) {
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem())).Type())!))))
			}
			await mergeAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Elem())), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem())), true, null)
			break
		}
		case reflect.Slice:
		{
			if ($.markAsStructValue($.cloneStructValue(_in)).IsNil()) {
				return
			}
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
				// []byte is a scalar bytes field, not a repeated field.

				// Edge case: if this is in a proto3 message, a zero length
				// bytes field is considered the zero value, and should not
				// be merged.
				if (((prop != null) && $.pointerValue<__goscript_properties.Properties>(prop).proto3) && ($.markAsStructValue($.cloneStructValue(_in)).Len() == 0)) {
					return
				}

				// Make a deep copy.
				// Append to []byte{} instead of []byte(nil) so that we never end up
				// with a nil result.
				$.markAsStructValue($.cloneStructValue(out)).SetBytes($.appendSlice(new Uint8Array([]) as $.Slice<number>, $.markAsStructValue($.cloneStructValue(_in)).Bytes(), $.byteSliceHint))
				return
			}
			let n = $.markAsStructValue($.cloneStructValue(_in)).Len()
			if ($.markAsStructValue($.cloneStructValue(out)).IsNil()) {
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(_in)).Type())!, 0, n))))
			}
			switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Bool:
				case reflect.Float32:
				case reflect.Float64:
				case reflect.Int32:
				case reflect.Int64:
				case reflect.String:
				case reflect.Uint32:
				case reflect.Uint64:
				{
					$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.AppendSlice($.markAsStructValue($.cloneStructValue(out)), $.markAsStructValue($.cloneStructValue(_in))))))
					break
				}
				default:
				{
					for (let i = 0; i < n; i++) {
						let x = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))))
						await mergeAny(x, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Index(i))), false, null)
						$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(out)), $.markAsStructValue($.cloneStructValue(x))))))
					}
					break
				}
			}
			break
		}
		case reflect.Struct:
		{
			await mergeStruct(out, _in)
			break
		}
		default:
		{
			await log.Printf("proto: don't know how to copy %v", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(_in)), "reflect.Value", "reflect.Value")]))
			break
		}
	}
}

export async function mergeExtension(out: globalThis.Map<number, __goscript_extensions.Extension> | null, _in: globalThis.Map<number, __goscript_extensions.Extension> | null): globalThis.Promise<void> {
	for (let [extNum, eIn] of _in?.entries() ?? []) {
		let eOut = new __goscript_extensions.Extension({desc: eIn.desc}, true)
		if (eIn.value != null) {
			let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(reflect.TypeOf(eIn.value))!))).Elem()))
			await mergeAny(v, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(eIn.value))), false, null)
			eOut.value = $.markAsStructValue($.cloneStructValue(v)).Interface()
		}
		if (eIn.enc != null) {
			eOut.enc = $.makeSlice<number>($.sliceLen(eIn.enc), undefined, "byte")
			$.copy(eOut.enc, eIn.enc)
		}

		$.mapSet(out, extNum, (eOut).clone())
	}
}

var __goscriptAwait: any
