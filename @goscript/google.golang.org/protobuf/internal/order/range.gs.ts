// Generated file based on range.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_order from "./order.gs.ts"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./order.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/order", ["order.messageField", "order.FieldRanger", "order.mapEntry", "order.EntryRanger"])

export type FieldRanger = {
	Range(_p0: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): void
}

$.registerInterfaceType(
	"order.FieldRanger",
	null,
	[$.methodSignature("Range", [({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)])]
);

export type VisitField = ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null

export type EntryRanger = {
	Range(_p0: ((_p0: protoreflect.MapKey, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): void
}

$.registerInterfaceType(
	"order.EntryRanger",
	null,
	[$.methodSignature("Range", [({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)])]
);

export type VisitEntry = ((_p0: protoreflect.MapKey, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null

export class messageField {
	public get fd(): protoreflect.FieldDescriptor | null {
		return this._fields.fd
	}

	public set fd(value: protoreflect.FieldDescriptor | null) {
		this._fields.fd = value
	}

	public get v(): protoreflect.Value {
		return this._fields.v
	}

	public set v(value: protoreflect.Value) {
		this._fields.v = value
	}

	public _fields: {
		fd: protoreflect.FieldDescriptor | null
		v: protoreflect.Value
	}

	constructor(init?: Partial<{fd?: protoreflect.FieldDescriptor | null, v?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			fd: init?.fd ?? (null! as protoreflect.FieldDescriptor | null),
			v: init?.v ? init.v.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageField {
		return new messageField(this, true)
	}

	public __goscriptAssign(source: messageField): void {
		const target = this._fields
		const values = source._fields
		target.fd = $.assignFieldValue(target.fd, values.fd, "protoreflect.FieldDescriptor")
		$.assignStruct(target.v, values.v)
	}

	static __typeInfo = $.registerStructType(
		"order.messageField",
		() => new messageField(),
		() => [],
		messageField,
		() => [/* @__PURE__ */ $.structField("fd", "protoreflect.FieldDescriptor", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/order" }), /* @__PURE__ */ $.structField("v", "protoreflect.Value", [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/order" })]
	)
}

export class mapEntry {
	public get k(): protoreflect.MapKey {
		return this._fields.k
	}

	public set k(value: protoreflect.MapKey) {
		this._fields.k = value
	}

	public get v(): protoreflect.Value {
		return this._fields.v
	}

	public set v(value: protoreflect.Value) {
		this._fields.v = value
	}

	public _fields: {
		k: protoreflect.MapKey
		v: protoreflect.Value
	}

	constructor(init?: Partial<{k?: protoreflect.MapKey, v?: protoreflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			k: init?.k ? init.k.clone() : new protoreflect.MapKey(undefined, true),
			v: init?.v ? init.v.clone() : new protoreflect.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mapEntry {
		return new mapEntry(this, true)
	}

	public __goscriptAssign(source: mapEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.k, values.k)
		$.assignStruct(target.v, values.v)
	}

	static __typeInfo = $.registerStructType(
		"order.mapEntry",
		() => new mapEntry(),
		() => [],
		mapEntry,
		() => [/* @__PURE__ */ $.structField("k", "protoreflect.MapKey", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/order" }), /* @__PURE__ */ $.structField("v", "protoreflect.Value", [1], 72, false, { pkgPath: "google.golang.org/protobuf/internal/order" })]
	)
}

export let messageFieldPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<$.Slice<messageField>>(null! as $.Slice<messageField>), "*[]order.messageField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("order.messageField")))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_messageFieldPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(messageFieldPool.value, __goscriptValue)
}

export async function RangeFields(fs: FieldRanger | null, less: ((x: protoreflect.FieldDescriptor | null, y: protoreflect.FieldDescriptor | null) => boolean | globalThis.Promise<boolean>) | null, fn: ((_p0: protoreflect.FieldDescriptor | null, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	if (less == null) {
		void (__goscriptAwait = (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? (fs as Exclude<FieldRanger, null>) : $.pointerValue<Exclude<FieldRanger, null>>(fs)).Range(fn), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return
	}

	// Obtain a pre-allocated scratch buffer.
	let p = $.mustTypeAssert<$.VarRef<$.Slice<messageField>> | null>(await messageFieldPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("order.messageField")))
	let fields: $.Slice<messageField> = $.goSlice(($.pointerValue<$.Slice<messageField>>(p)), undefined, 0)
	__defer.defer(() => { ((): void => {
		if ($.cap(fields) < 1024) {
			p!.value = fields
			messageFieldPool.value.Put($.interfaceValue(p, "*[]order.messageField", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("order.messageField"))))
		}
	})() })

	// Collect all fields in the message and sort them.
	void (__goscriptAwait = (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? (fs as Exclude<FieldRanger, null>) : $.pointerValue<Exclude<FieldRanger, null>>(fs)).Range($.functionValue((fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): boolean => {
		fields = $.appendOne(fields, new messageField({fd: fd, v: v}, true))
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await sort.Slice($.interfaceValue(fields, "[]order.messageField", /* @__PURE__ */ $.sliceType("order.messageField")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
		return less!($.arrayIndex(fields!, i).fd, $.arrayIndex(fields!, j).fd)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

	// Visit the fields in the specified ordering.
	for (let __goscriptRangeTarget0 = fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as messageField)).clone()
		if (!(__goscriptAwait = fn!(f.fd, (f.v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}
	}
}

export let mapEntryPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<$.Slice<mapEntry>>(null! as $.Slice<mapEntry>), "*[]order.mapEntry", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("order.mapEntry")))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_mapEntryPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(mapEntryPool.value, __goscriptValue)
}

export async function RangeEntries(es: EntryRanger | null, less: ((x: protoreflect.MapKey, y: protoreflect.MapKey) => boolean | globalThis.Promise<boolean>) | null, fn: ((_p0: protoreflect.MapKey, _p1: protoreflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	if (less == null) {
		void (__goscriptAwait = (es !== null && (es as any).__isVarRef !== true && (es as any).__goValue === undefined ? (es as Exclude<EntryRanger, null>) : $.pointerValue<Exclude<EntryRanger, null>>(es)).Range(fn), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return
	}

	// Obtain a pre-allocated scratch buffer.
	let p = $.mustTypeAssert<$.VarRef<$.Slice<mapEntry>> | null>(await mapEntryPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("order.mapEntry")))
	let entries: $.Slice<mapEntry> = $.goSlice(($.pointerValue<$.Slice<mapEntry>>(p)), undefined, 0)
	__defer.defer(() => { ((): void => {
		if ($.cap(entries) < 1024) {
			p!.value = entries
			mapEntryPool.value.Put($.interfaceValue(p, "*[]order.mapEntry", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("order.mapEntry"))))
		}
	})() })

	// Collect all entries in the map and sort them.
	void (__goscriptAwait = (es !== null && (es as any).__isVarRef !== true && (es as any).__goValue === undefined ? (es as Exclude<EntryRanger, null>) : $.pointerValue<Exclude<EntryRanger, null>>(es)).Range($.functionValue((k: protoreflect.MapKey, v: protoreflect.Value): boolean => {
		entries = $.appendOne(entries, new mapEntry({k: k, v: v}, true))
		return true
	}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await sort.Slice($.interfaceValue(entries, "[]order.mapEntry", /* @__PURE__ */ $.sliceType("order.mapEntry")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
		return less!(($.arrayIndex(entries!, i).k).clone(), ($.arrayIndex(entries!, j).k).clone())
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

	// Visit the entries in the specified ordering.
	for (let __goscriptRangeTarget1 = entries, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let e = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as mapEntry)).clone()
		if (!(__goscriptAwait = fn!((e.k).clone(), (e.v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}
	}
}

var __goscriptAwait: any
