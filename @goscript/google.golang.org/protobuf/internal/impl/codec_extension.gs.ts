// Generated file based on codec_extension.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_gen from "./codec_gen.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extension from "./extension.gs.ts"

import * as __goscript_legacy_extension from "./legacy_extension.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/reflect/index.js"
import "./checkinit.gs.ts"
import "./codec_field.gs.ts"
import "./codec_gen.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./convert.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./extension.gs.ts"
import "./legacy_extension.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.extensionFieldInfo", "impl.lazyExtensionValue", "impl.ExtensionField"])

export class extensionFieldInfo {
	public get wiretag(): bigint {
		return this._fields.wiretag
	}

	public set wiretag(value: bigint) {
		this._fields.wiretag = value
	}

	public get tagsize(): number {
		return this._fields.tagsize
	}

	public set tagsize(value: number) {
		this._fields.tagsize = value
	}

	public get unmarshalNeedsValue(): boolean {
		return this._fields.unmarshalNeedsValue
	}

	public set unmarshalNeedsValue(value: boolean) {
		this._fields.unmarshalNeedsValue = value
	}

	public get funcs(): __goscript_codec_tables.valueCoderFuncs {
		return this._fields.funcs
	}

	public set funcs(value: __goscript_codec_tables.valueCoderFuncs) {
		this._fields.funcs = value
	}

	public get validation(): __goscript_validate.validationInfo {
		return this._fields.validation
	}

	public set validation(value: __goscript_validate.validationInfo) {
		this._fields.validation = value
	}

	public _fields: {
		wiretag: bigint
		tagsize: number
		unmarshalNeedsValue: boolean
		funcs: __goscript_codec_tables.valueCoderFuncs
		validation: __goscript_validate.validationInfo
	}

	constructor(init?: Partial<{wiretag?: bigint, tagsize?: number, unmarshalNeedsValue?: boolean, funcs?: __goscript_codec_tables.valueCoderFuncs, validation?: __goscript_validate.validationInfo}>, __goscriptValue?: boolean) {
		this._fields = {
			wiretag: init?.wiretag ?? (0n as bigint),
			tagsize: init?.tagsize ?? (0 as number),
			unmarshalNeedsValue: init?.unmarshalNeedsValue ?? (false as boolean),
			funcs: init?.funcs ? init.funcs.clone() : new __goscript_codec_tables.valueCoderFuncs(undefined, true),
			validation: init?.validation ? init.validation.clone() : new __goscript_validate.validationInfo(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): extensionFieldInfo {
		return new extensionFieldInfo(this, true)
	}

	public __goscriptAssign(source: extensionFieldInfo): void {
		const target = this._fields
		const values = source._fields
		target.wiretag = values.wiretag
		target.tagsize = values.tagsize
		target.unmarshalNeedsValue = values.unmarshalNeedsValue
		$.assignStruct(target.funcs, values.funcs)
		$.assignStruct(target.validation, values.validation)
	}

	static __typeInfo = $.registerStructType(
		"impl.extensionFieldInfo",
		() => new extensionFieldInfo(),
		() => [],
		extensionFieldInfo,
		() => [{ name: "wiretag", key: "wiretag", type: /* @__PURE__ */ $.basicType("uint64") }, { name: "tagsize", key: "tagsize", type: /* @__PURE__ */ $.basicType("int") }, { name: "unmarshalNeedsValue", key: "unmarshalNeedsValue", type: /* @__PURE__ */ $.basicType("bool") }, { name: "funcs", key: "funcs", type: "impl.valueCoderFuncs" }, { name: "validation", key: "validation", type: "impl.validationInfo" }]
	)
}

export class lazyExtensionValue {
	public get atomicOnce(): number {
		return this._fields.atomicOnce
	}

	public set atomicOnce(value: number) {
		this._fields.atomicOnce = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get xi(): extensionFieldInfo | $.VarRef<extensionFieldInfo> | null {
		return this._fields.xi
	}

	public set xi(value: extensionFieldInfo | $.VarRef<extensionFieldInfo> | null) {
		this._fields.xi = value
	}

	public get value(): protoreflect.Value {
		return this._fields.value
	}

	public set value(value: protoreflect.Value) {
		this._fields.value = value
	}

	public get b(): $.Slice<number> {
		return this._fields.b
	}

	public set b(value: $.Slice<number>) {
		this._fields.b = value
	}

	public get fn(): (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null {
		return this._fields.fn
	}

	public set fn(value: (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null) {
		this._fields.fn = value
	}

	public _fields: {
		atomicOnce: number
		mu: sync.Mutex
		xi: extensionFieldInfo | $.VarRef<extensionFieldInfo> | null
		value: protoreflect.Value
		b: $.Slice<number>
		fn: (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null
	}

	constructor(init?: Partial<{atomicOnce?: number, mu?: sync.Mutex, xi?: extensionFieldInfo | $.VarRef<extensionFieldInfo> | null, value?: protoreflect.Value, b?: $.Slice<number>, fn?: (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			atomicOnce: init?.atomicOnce ?? (0 as number),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			xi: init?.xi ?? (null! as extensionFieldInfo | $.VarRef<extensionFieldInfo> | null),
			value: init?.value ? init.value.clone() : new protoreflect.Value(undefined, true),
			b: init?.b ?? (null! as $.Slice<number>),
			fn: init?.fn ?? (null! as (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyExtensionValue {
		return new lazyExtensionValue(this, true)
	}

	public __goscriptAssign(source: lazyExtensionValue): void {
		const target = this._fields
		const values = source._fields
		target.atomicOnce = values.atomicOnce
		$.assignStruct(target.mu, values.mu)
		target.xi = values.xi
		$.assignStruct(target.value, values.value)
		target.b = values.b
		target.fn = values.fn
	}

	static __typeInfo = $.registerStructType(
		"impl.lazyExtensionValue",
		() => new lazyExtensionValue(),
		() => [],
		lazyExtensionValue,
		() => [{ name: "atomicOnce", key: "atomicOnce", type: /* @__PURE__ */ $.basicType("uint32") }, { name: "mu", key: "mu", type: "sync.Mutex" }, { name: "xi", key: "xi", type: /* @__PURE__ */ $.pointerType("impl.extensionFieldInfo") }, { name: "value", key: "value", type: "protoreflect.Value" }, { name: "b", key: "b", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "fn", key: "fn", type: ({ kind: $.TypeKind.Function, params: [], results: ["protoreflect.Value"] } as $.FunctionTypeInfo) }]
	)
}

export class ExtensionField {
	public get typ(): protoreflect.ExtensionType | null {
		return this._fields.typ
	}

	public set typ(value: protoreflect.ExtensionType | null) {
		this._fields.typ = value
	}

	// value is either the value of GetValue,
	// or a *lazyExtensionValue that then returns the value of GetValue.
	public get value(): protoreflect.Value {
		return this._fields.value
	}

	public set value(value: protoreflect.Value) {
		this._fields.value = value
	}

	public get lazy(): lazyExtensionValue | $.VarRef<lazyExtensionValue> | null {
		return this._fields.lazy
	}

	public set lazy(value: lazyExtensionValue | $.VarRef<lazyExtensionValue> | null) {
		this._fields.lazy = value
	}

	public _fields: {
		typ: protoreflect.ExtensionType | null
		value: protoreflect.Value
		lazy: lazyExtensionValue | $.VarRef<lazyExtensionValue> | null
	}

	constructor(init?: Partial<{typ?: protoreflect.ExtensionType | null, value?: protoreflect.Value, lazy?: lazyExtensionValue | $.VarRef<lazyExtensionValue> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (null! as protoreflect.ExtensionType | null),
			value: init?.value ? init.value.clone() : new protoreflect.Value(undefined, true),
			lazy: init?.lazy ?? (null! as lazyExtensionValue | $.VarRef<lazyExtensionValue> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionField {
		return new ExtensionField(this, true)
	}

	public __goscriptAssign(source: ExtensionField): void {
		const target = this._fields
		const values = source._fields
		target.typ = $.assignFieldValue(target.typ, values.typ, "protoreflect.ExtensionType")
		$.assignStruct(target.value, values.value)
		target.lazy = values.lazy
	}

	public IsSet(): boolean {
		const f = this;
		return f.typ != null
	}

	public Set(t: protoreflect.ExtensionType | null, v: protoreflect.Value): void {
		let f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f);
		;(f$ as ExtensionField).typ = t
		$.assignStruct((f$ as ExtensionField).value, v);
		;(f$ as ExtensionField).lazy = null
	}

	public SetLazy(t: protoreflect.ExtensionType | null, fn: (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null): void {
		let f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f);
		;(f$ as ExtensionField).typ = t;
		;(f$ as ExtensionField).lazy = new lazyExtensionValue({fn: fn})
	}

	public Type(): protoreflect.ExtensionType | null {
		const f = this;
		return f.typ
	}

	public async Value(): globalThis.Promise<protoreflect.Value> {
		const f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f)
		if ((f$ as ExtensionField).lazy != null) {
			if (atomic.LoadUint32($.fieldRef($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy)._fields, "atomicOnce")) == 0) {
				await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as ExtensionField).lazyInit() : ExtensionField.prototype.lazyInit.call(f))
			}
			return ($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).value).clone()
		}
		return ((f$ as ExtensionField).value).clone()
	}

	public appendLazyBytes(xt: protoreflect.ExtensionType | null, xi: extensionFieldInfo | $.VarRef<extensionFieldInfo> | null, num: protowire.Number, wtyp: protowire.Type, b: $.Slice<number>): void {
		let f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f)
		if ((f$ as ExtensionField).lazy == null) {
			;(f$ as ExtensionField).lazy = new lazyExtensionValue({xi: xi})
		}
		;(f$ as ExtensionField).typ = xt
		$.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).xi = xi
		$.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).b = protowire.AppendTag($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).b, num, wtyp)
		$.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).b = $.appendSlice($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).b, b, $.byteSliceHint)
	}

	public canLazy(xt: protoreflect.ExtensionType | null): boolean {
		const f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f)
		if ((f$ as ExtensionField).typ == null) {
			return true
		}
		if ((($.comparableEqual((f$ as ExtensionField).typ, xt)) && ((f$ as ExtensionField).lazy != null)) && (atomic.LoadUint32($.fieldRef($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy)._fields, "atomicOnce")) == 0)) {
			return true
		}
		return false
	}

	public isUnexpandedLazy(): boolean {
		const f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f)
		return ((f$ as ExtensionField).lazy != null) && (atomic.LoadUint32($.fieldRef($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy)._fields, "atomicOnce")) == 0)
	}

	public async lazyBuffer(): globalThis.Promise<$.Slice<number>> {
		const f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		using __defer = new $.DisposableStack()
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f)
		// This function might be in the critical path, so check the atomic without
		// taking a look first, then only take the lock if needed.
		if (!(f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as ExtensionField).isUnexpandedLazy() : ExtensionField.prototype.isUnexpandedLazy.call(f))) {
			return null
		}
		await $.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return $.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).b
	}

	public async lazyInit(): globalThis.Promise<void> {
		let f: ExtensionField | $.VarRef<ExtensionField> | null = this;
		using __defer = new $.DisposableStack()
		const f$: ExtensionField = f == null ? $.pointerTarget<ExtensionField>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<ExtensionField>(f)
		await $.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if (atomic.LoadUint32($.fieldRef($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy)._fields, "atomicOnce")) == 1) {
			return
		}
		if ($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).xi != null) {
			let b: $.Slice<number> = $.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).b
			let val = (((__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionType, null>>((f$ as ExtensionField).typ).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			while ($.sliceLen(b) > 0) {
				let tag: bigint = 0n
				if ($.arrayIndex(b!, 0) < 0x80) {
					tag = $.uint64($.arrayIndex(b!, 0))
					b = $.goSlice(b, 1, undefined)
				} else {
					if (($.sliceLen(b) >= 2) && ($.arrayIndex(b!, 1) < 128)) {
						tag = $.uint64Add($.uint64($.arrayIndex(b!, 0) & 0x7f), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 7n)))
						b = $.goSlice(b, 2, undefined)
					} else {
						let n: number = 0
						let __goscriptTuple1: any = protowire.ConsumeVarint(b)
						tag = __goscriptTuple1[0]
						n = __goscriptTuple1[1]
						if (n < 0) {
							$.panic((errors.New("bad tag in lazy extension decoding", null) as any))
						}
						b = $.goSlice(b, n, undefined)
					}
				}
				let num = $.int($.uint64Shr(tag, 3n), 32)
				let wtyp = $.int($.uint64And(tag, 7n), 8)
				let out: __goscript_decode.unmarshalOutput = new __goscript_decode.unmarshalOutput(undefined, true)
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple2: any = await $.pointerValue<extensionFieldInfo>($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).xi).funcs.unmarshal!(b, (val).clone(), num, wtyp, (__goscript_decode.__goscript_get_lazyUnmarshalOptions()).clone())
				val = $.assignStruct(val, __goscriptTuple2[0])
				out = $.assignStruct(out, __goscriptTuple2[1])
				err = __goscriptTuple2[2]
				if (err != null) {
					$.panic((errors.New("decode failure in lazy extension decoding: %v", $.arrayToSlice<any>([(err as any)])) as any))
				}
				b = $.goSlice(b, out.n, undefined)
			}
			$.assignStruct($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).value, val)
		} else {
			$.assignStruct($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).value, ((__goscriptAwait = $.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
		}
		$.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).xi = null
		$.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).fn = (null as (() => protoreflect.Value | globalThis.Promise<protoreflect.Value>) | null)
		$.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy).b = null
		atomic.StoreUint32($.fieldRef($.pointerValue<lazyExtensionValue>((f$ as ExtensionField).lazy)._fields, "atomicOnce"), 1)
	}

	static __typeInfo = $.registerStructType(
		"impl.ExtensionField",
		() => new ExtensionField(),
		() => [{ name: "IsSet", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Set", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "SetLazy", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Type", args: [], returns: [{ type: "protoreflect.ExtensionType" }] }, { name: "Value", args: [], returns: [{ type: "protoreflect.Value" }], pointerReceiver: true }, { name: "appendLazyBytes", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "canLazy", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "isUnexpandedLazy", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "lazyBuffer", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "lazyInit", args: [], returns: [], pointerReceiver: true }],
		ExtensionField,
		() => [{ name: "typ", key: "typ", type: "protoreflect.ExtensionType" }, { name: "value", key: "value", type: "protoreflect.Value" }, { name: "lazy", key: "lazy", type: /* @__PURE__ */ $.pointerType("impl.lazyExtensionValue") }]
	)
}

export async function getExtensionFieldInfo(xt: protoreflect.ExtensionType | null): globalThis.Promise<extensionFieldInfo | $.VarRef<extensionFieldInfo> | null> {
	{
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_extension.ExtensionInfo | $.VarRef<__goscript_extension.ExtensionInfo> | null>(xt, /* @__PURE__ */ $.pointerType("impl.ExtensionInfo"))
		let xi: __goscript_extension.ExtensionInfo | $.VarRef<__goscript_extension.ExtensionInfo> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			await (xi !== null && (xi as any).__isVarRef !== true && (xi as any).__goValue === undefined ? ((xi as any) as __goscript_extension.ExtensionInfo).lazyInit() : __goscript_extension.ExtensionInfo.prototype.lazyInit.call(xi))
			return $.pointerValue<__goscript_extension.ExtensionInfo>(xi).info
		}
	}
	// Ideally we'd cache the resulting *extensionFieldInfo so we don't have to
	// recompute this metadata repeatedly. But without support for something like
	// weak references, such a cache would pin temporary values (like dynamic
	// extension types, constructed for the duration of a user request) to the
	// heap forever, causing memory usage of the cache to grow unbounded.
	// See discussion in https://github.com/golang/protobuf/issues/1521.
	return makeExtensionFieldInfo(((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.ExtensionDescriptor | null))
}

export async function makeExtensionFieldInfo(xd: protoreflect.ExtensionDescriptor | null): globalThis.Promise<extensionFieldInfo | $.VarRef<extensionFieldInfo> | null> {
	let wiretag: bigint = 0n
	if (!(__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd)).IsPacked(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		wiretag = protowire.EncodeTag((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.mapGet<protoreflect.Kind, protowire.Type, protowire.Type>(__goscript_codec_gen.__goscript_get_wireTypes(), (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 0)[0])
	} else {
		wiretag = protowire.EncodeTag((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 2)
	}
	let e: extensionFieldInfo | $.VarRef<extensionFieldInfo> | null = (await (async () => { const __goscriptLiteralField0 = protowire.SizeVarint(wiretag); const __goscriptLiteralField1 = await __goscript_codec_tables.encoderFuncsForValue(xd); return new extensionFieldInfo({wiretag: wiretag, tagsize: __goscriptLiteralField0, funcs: __goscriptLiteralField1}) })())
	let e$: extensionFieldInfo = e == null ? $.pointerTarget<extensionFieldInfo>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<extensionFieldInfo>(e)
	// Does the unmarshal function need a value passed to it?
	// This is true for composite types, where we pass in a message, list, or map to fill in,
	// and for enums, where we pass in a prototype value to specify the concrete enum type.
	switch ((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case protoreflect.MessageKind:
		case protoreflect.GroupKind:
		case protoreflect.EnumKind:
		{
			;(e$ as extensionFieldInfo).unmarshalNeedsValue = true
			break
		}
		default:
		{
			if ((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(xd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3) {
				;(e$ as extensionFieldInfo).unmarshalNeedsValue = true
			}
			break
		}
	}
	return e
}

export async function IsLazy(m: protoreflect.Message | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	let mi: __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null = null! as __goscript_message.MessageInfo | $.VarRef<__goscript_message.MessageInfo> | null
	let p: __goscript_pointer_reflect.pointer = new __goscript_pointer_reflect.pointer(undefined, true)
	{
		const __goscriptTypeSwitchValue = m
		switch (true) {
			case $.typeAssert<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageState")).ok:
				{
					let m: __goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null = $.typeAssert<__goscript_message_reflect.messageState | $.VarRef<__goscript_message_reflect.messageState> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageState")).value
					mi = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageState).messageInfo() : __goscript_message_reflect.messageState.prototype.messageInfo.call(m))
					p = $.assignStruct(p, (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageState).pointer() : __goscript_message_reflect.messageState.prototype.pointer.call(m)))
				}
				break
			case $.typeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper")).ok:
				{
					let m: __goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null = $.typeAssert<__goscript_message_reflect.messageReflectWrapper | $.VarRef<__goscript_message_reflect.messageReflectWrapper> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("impl.messageReflectWrapper")).value
					mi = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageReflectWrapper).messageInfo() : __goscript_message_reflect.messageReflectWrapper.prototype.messageInfo.call(m))
					p = $.assignStruct(p, (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_message_reflect.messageReflectWrapper).pointer() : __goscript_message_reflect.messageReflectWrapper.prototype.pointer.call(m)))
				}
				break
			default:
				{
					let m: any = __goscriptTypeSwitchValue
					return false
				}
				break
		}
	}
	let [xd, ok] = $.typeAssertTuple<protoreflect.ExtensionTypeDescriptor | null>(fd, "protoreflect.ExtensionTypeDescriptor")
	if (!ok) {
		return false
	}
	let xt = (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let ext: $.VarRef<__goscript_message_reflect.extensionMap> | null = ((__goscriptAwait = $.pointerValue<__goscript_message.MessageInfo>(mi).reflectMessageInfo.extensionMap!((p).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<__goscript_message_reflect.extensionMap> | null)
	if (ext == null) {
		return false
	}
	let __goscriptTuple3: any = $.mapGet<number, ExtensionField, ExtensionField>(($.pointerValue<__goscript_message_reflect.extensionMap>(ext)), $.int((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32), new ExtensionField(undefined, true))
	let f = __goscriptTuple3[0]
	ok = __goscriptTuple3[1]
	if (!ok) {
		return false
	}
	return (($.comparableEqual(f.typ, xt)) && (f.lazy != null)) && (atomic.LoadUint32($.fieldRef($.pointerValue<lazyExtensionValue>(f.lazy)._fields, "atomicOnce")) == 0)
}

var __goscriptAwait: any
