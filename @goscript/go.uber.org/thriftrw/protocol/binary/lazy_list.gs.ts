// Generated file based on lazy_list.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import type * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as __goscript_reader from "./reader.gs.ts"

import * as __goscript_stream_envelope from "./stream_envelope.gs.ts"

import * as __goscript_stream_reader from "./stream_reader.gs.ts"

import * as __goscript_string_post_go120 from "./string_post_go120.gs.ts"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "./reader.gs.ts"
import "./stream_envelope.gs.ts"
import "./stream_reader.gs.ts"
import "./string_post_go120.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.lazyValueList", "binary.lazyMapItemList"])

export class lazyValueList {
	public get count(): number {
		return this._fields.count
	}

	public set count(value: number) {
		this._fields.count = value
	}

	public get typ(): wire.Type {
		return this._fields.typ
	}

	public set typ(value: wire.Type) {
		this._fields.typ = value
	}

	public get readerAt(): io.ReaderAt | null {
		return this._fields.readerAt
	}

	public set readerAt(value: io.ReaderAt | null) {
		this._fields.readerAt = value
	}

	public get startOffset(): bigint {
		return this._fields.startOffset
	}

	public set startOffset(value: bigint) {
		this._fields.startOffset = value
	}

	public _fields: {
		count: number
		typ: wire.Type
		readerAt: io.ReaderAt | null
		startOffset: bigint
	}

	constructor(init?: Partial<{count?: number, typ?: wire.Type, readerAt?: io.ReaderAt | null, startOffset?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			count: init?.count ?? (0 as number),
			typ: init?.typ ?? (0 as wire.Type),
			readerAt: init?.readerAt ?? (null! as io.ReaderAt | null),
			startOffset: init?.startOffset ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyValueList {
		return new lazyValueList(this, true)
	}

	public __goscriptAssign(source: lazyValueList): void {
		const target = this._fields
		const values = source._fields
		target.count = values.count
		target.typ = values.typ
		target.readerAt = $.assignFieldValue(target.readerAt, values.readerAt, "io.ReaderAt")
		target.startOffset = values.startOffset
	}

	public Close(): void {
		let ll: lazyValueList | $.VarRef<lazyValueList> | null = this;
		$.pointerValue<lazyValueList>(ll).readerAt = null
		lazyValueListPool.value.Put($.interfaceValue(ll, "*binary.lazyValueList", /* @__PURE__ */ $.pointerType("binary.lazyValueList")))
	}

	public async ForEach(f: ((_p0: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const ll: lazyValueList | $.VarRef<lazyValueList> | null = this;
		using __defer = new $.DisposableStack()
		const ll$: lazyValueList = ll == null ? $.pointerTarget<lazyValueList>(ll) : (ll as any).__isVarRef === true ? (ll as any).value : (ll as any).__goValue === undefined ? (ll as any) : $.pointerTarget<lazyValueList>(ll)
		let off = (ll$ as lazyValueList).startOffset
		let __goscriptShadow0 = $.varRef(await __goscript_reader.newReader((ll$ as lazyValueList).readerAt, off))
		__defer.defer(() => { __goscriptShadow0.value.close() })

		for (let i = 0; i < (ll$ as lazyValueList).count; i = ((i + 1) | 0)) {
			let val: wire.Value = new wire.Value(undefined, true)
			let err: $.GoError = null! as $.GoError

			let __goscriptTuple0: any = await __goscriptShadow0.value.ReadValue((ll$ as lazyValueList).typ, off)
			val = $.assignStruct(val, __goscriptTuple0[0])
			off = __goscriptTuple0[1]
			err = __goscriptTuple0[2]
			if (err != null) {
				return err
			}

			{
				let __goscriptShadow1 = (__goscriptAwait = f!((val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow1 != null) {
					return __goscriptShadow1
				}
			}
		}
		return null
	}

	public Size(): number {
		const ll: lazyValueList | $.VarRef<lazyValueList> | null = this;
		return $.int($.pointerValue<lazyValueList>(ll).count)
	}

	public ValueType(): wire.Type {
		const ll: lazyValueList | $.VarRef<lazyValueList> | null = this;
		return $.pointerValue<lazyValueList>(ll).typ
	}

	static __typeInfo = $.registerStructType(
		"binary.lazyValueList",
		() => new lazyValueList(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")], true)],
		lazyValueList,
		() => [/* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("int32"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [1], 4, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("readerAt", "io.ReaderAt", [2], 8, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("startOffset", /* @__PURE__ */ $.basicType("int64"), [3], 24, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export class lazyMapItemList {
	public get ktype(): wire.Type {
		return this._fields.ktype
	}

	public set ktype(value: wire.Type) {
		this._fields.ktype = value
	}

	public get vtype(): wire.Type {
		return this._fields.vtype
	}

	public set vtype(value: wire.Type) {
		this._fields.vtype = value
	}

	public get count(): number {
		return this._fields.count
	}

	public set count(value: number) {
		this._fields.count = value
	}

	public get readerAt(): io.ReaderAt | null {
		return this._fields.readerAt
	}

	public set readerAt(value: io.ReaderAt | null) {
		this._fields.readerAt = value
	}

	public get startOffset(): bigint {
		return this._fields.startOffset
	}

	public set startOffset(value: bigint) {
		this._fields.startOffset = value
	}

	public _fields: {
		ktype: wire.Type
		vtype: wire.Type
		count: number
		readerAt: io.ReaderAt | null
		startOffset: bigint
	}

	constructor(init?: Partial<{ktype?: wire.Type, vtype?: wire.Type, count?: number, readerAt?: io.ReaderAt | null, startOffset?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			ktype: init?.ktype ?? (0 as wire.Type),
			vtype: init?.vtype ?? (0 as wire.Type),
			count: init?.count ?? (0 as number),
			readerAt: init?.readerAt ?? (null! as io.ReaderAt | null),
			startOffset: init?.startOffset ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyMapItemList {
		return new lazyMapItemList(this, true)
	}

	public __goscriptAssign(source: lazyMapItemList): void {
		const target = this._fields
		const values = source._fields
		target.ktype = values.ktype
		target.vtype = values.vtype
		target.count = values.count
		target.readerAt = $.assignFieldValue(target.readerAt, values.readerAt, "io.ReaderAt")
		target.startOffset = values.startOffset
	}

	public Close(): void {
		let lm: lazyMapItemList | $.VarRef<lazyMapItemList> | null = this;
		$.pointerValue<lazyMapItemList>(lm).readerAt = null
		lazyMapItemListPool.value.Put($.interfaceValue(lm, "*binary.lazyMapItemList", /* @__PURE__ */ $.pointerType("binary.lazyMapItemList")))
	}

	public async ForEach(f: ((_p0: wire.MapItem) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const lm: lazyMapItemList | $.VarRef<lazyMapItemList> | null = this;
		using __defer = new $.DisposableStack()
		const lm$: lazyMapItemList = lm == null ? $.pointerTarget<lazyMapItemList>(lm) : (lm as any).__isVarRef === true ? (lm as any).value : (lm as any).__goValue === undefined ? (lm as any) : $.pointerTarget<lazyMapItemList>(lm)
		let off = (lm$ as lazyMapItemList).startOffset
		let __goscriptShadow2 = $.varRef(await __goscript_reader.newReader((lm$ as lazyMapItemList).readerAt, off))
		__defer.defer(() => { __goscriptShadow2.value.close() })

		for (let i = 0; i < (lm$ as lazyMapItemList).count; i = ((i + 1) | 0)) {
			let k: wire.Value = new wire.Value(undefined, true)
			let v: wire.Value = new wire.Value(undefined, true)
			let err: $.GoError = null! as $.GoError

			let __goscriptTuple1: any = await __goscriptShadow2.value.ReadValue((lm$ as lazyMapItemList).ktype, off)
			k = $.assignStruct(k, __goscriptTuple1[0])
			off = __goscriptTuple1[1]
			err = __goscriptTuple1[2]
			if (err != null) {
				return err
			}

			let __goscriptTuple2: any = await __goscriptShadow2.value.ReadValue((lm$ as lazyMapItemList).vtype, off)
			v = $.assignStruct(v, __goscriptTuple2[0])
			off = __goscriptTuple2[1]
			err = __goscriptTuple2[2]
			if (err != null) {
				return err
			}

			let item = new wire.MapItem({Key: k, Value: v}, true)
			{
				let __goscriptShadow3 = (__goscriptAwait = f!((item).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow3 != null) {
					return __goscriptShadow3
				}
			}
		}
		return null
	}

	public KeyType(): wire.Type {
		const lm: lazyMapItemList | $.VarRef<lazyMapItemList> | null = this;
		return $.pointerValue<lazyMapItemList>(lm).ktype
	}

	public Size(): number {
		const lm: lazyMapItemList | $.VarRef<lazyMapItemList> | null = this;
		return $.int($.pointerValue<lazyMapItemList>(lm).count)
	}

	public ValueType(): wire.Type {
		const lm: lazyMapItemList | $.VarRef<lazyMapItemList> | null = this;
		return $.pointerValue<lazyMapItemList>(lm).vtype
	}

	static __typeInfo = $.registerStructType(
		"binary.lazyMapItemList",
		() => new lazyMapItemList(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("KeyType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")], true)],
		lazyMapItemList,
		() => [/* @__PURE__ */ $.structField("ktype", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("vtype", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [1], 1, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("int32"), [2], 4, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("readerAt", "io.ReaderAt", [3], 8, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("startOffset", /* @__PURE__ */ $.basicType("int64"), [4], 24, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export let lazyValueListPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new lazyValueList(), "*binary.lazyValueList", /* @__PURE__ */ $.pointerType("binary.lazyValueList"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_lazyValueListPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(lazyValueListPool.value, __goscriptValue)
}

export let lazyMapItemListPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new lazyMapItemList(), "*binary.lazyMapItemList", /* @__PURE__ */ $.pointerType("binary.lazyMapItemList"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_lazyMapItemListPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(lazyMapItemListPool.value, __goscriptValue)
}

export async function borrowLazyValueList(): globalThis.Promise<lazyValueList | $.VarRef<lazyValueList> | null> {
	return $.mustTypeAssert<lazyValueList | $.VarRef<lazyValueList> | null>(await lazyValueListPool.value.Get(), /* @__PURE__ */ $.pointerType("binary.lazyValueList"))
}

export async function borrowLazyMapItemList(): globalThis.Promise<lazyMapItemList | $.VarRef<lazyMapItemList> | null> {
	return $.mustTypeAssert<lazyMapItemList | $.VarRef<lazyMapItemList> | null>(await lazyMapItemListPool.value.Get(), /* @__PURE__ */ $.pointerType("binary.lazyMapItemList"))
}

var __goscriptAwait: any
