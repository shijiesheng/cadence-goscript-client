// Generated file based on table_merge.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_clone from "./clone.gs.ts"

import * as __goscript_discard from "./discard.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import type * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_pointer_reflect_gogo from "./pointer_reflect_gogo.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_table_unmarshal from "./table_unmarshal.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./clone.gs.ts"
import "./discard.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./pointer_reflect.gs.ts"
import "./pointer_reflect_gogo.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"
import "./table_unmarshal.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.mergeInfo", "proto.mergeFieldInfo"])

export class mergeInfo {
	public get typ(): reflect.Type | null {
		return this._fields.typ
	}

	public set typ(value: reflect.Type | null) {
		this._fields.typ = value
	}

	public get initialized(): number {
		return this._fields.initialized
	}

	public set initialized(value: number) {
		this._fields.initialized = value
	}

	public get lock(): sync.Mutex {
		return this._fields.lock
	}

	public set lock(value: sync.Mutex) {
		this._fields.lock = value
	}

	public get fields(): $.Slice<mergeFieldInfo> {
		return this._fields.fields
	}

	public set fields(value: $.Slice<mergeFieldInfo>) {
		this._fields.fields = value
	}

	public get unrecognized(): __goscript_pointer_reflect.field {
		return this._fields.unrecognized
	}

	public set unrecognized(value: __goscript_pointer_reflect.field) {
		this._fields.unrecognized = value
	}

	public _fields: {
		typ: reflect.Type | null
		initialized: number
		lock: sync.Mutex
		fields: $.Slice<mergeFieldInfo>
		unrecognized: __goscript_pointer_reflect.field
	}

	constructor(init?: Partial<{typ?: reflect.Type | null, initialized?: number, lock?: sync.Mutex, fields?: $.Slice<mergeFieldInfo>, unrecognized?: __goscript_pointer_reflect.field}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (null! as reflect.Type | null),
			initialized: init?.initialized ?? (0 as number),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.Mutex()),
			fields: init?.fields ?? (null! as $.Slice<mergeFieldInfo>),
			unrecognized: init?.unrecognized ?? (null! as __goscript_pointer_reflect.field)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mergeInfo {
		return new mergeInfo(this, true)
	}

	public __goscriptAssign(source: mergeInfo): void {
		const target = this._fields
		const values = source._fields
		target.typ = $.assignFieldValue(target.typ, values.typ, "reflect.Type")
		target.initialized = values.initialized
		$.assignStruct(target.lock, values.lock)
		target.fields = values.fields
		target.unrecognized = values.unrecognized
	}

	public async computeMergeInfo(): globalThis.Promise<void> {
		let mi: mergeInfo | $.VarRef<mergeInfo> | null = this;
		using __defer = new $.DisposableStack()
		const mi$: mergeInfo = mi == null ? $.pointerTarget<mergeInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<mergeInfo>(mi)
		await (mi$ as mergeInfo).lock.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((mi$ as mergeInfo).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((mi$ as mergeInfo).initialized != 0) {
			return
		}
		let t = (mi$ as mergeInfo).typ
		let n = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let props: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null = await __goscript_properties.GetProperties(t)
		for (let i = 0; i < n; i++) {
			let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
			if (strings.HasPrefix(f.value.Name, "XXX_")) {
				continue
			}

			let mfi = (() => { const __goscriptLiteralField0 = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field); return new mergeFieldInfo({field: __goscriptLiteralField0}, true) })()
			let tf = f.value.Type

			// As an optimization, we can avoid the merge function call cost
			// if we know for sure that the source will have no effect
			// by checking if it is the zero value.
			if (false) {
				switch ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					case reflect.Ptr:
					case reflect.Slice:
					case reflect.String:
					{
						mfi.isPointer = true
						break
					}
					case reflect.Bool:
					{
						mfi.basicWidth = 1
						break
					}
					case reflect.Int32:
					case reflect.Uint32:
					case reflect.Float32:
					{
						mfi.basicWidth = 4
						break
					}
					case reflect.Int64:
					case reflect.Uint64:
					case reflect.Float64:
					{
						mfi.basicWidth = 8
						break
					}
				}
			}

			// Unwrap tf to get at its most basic type.
			let isPointer: boolean = false
			let isSlice: boolean = false
			if (((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8)) {
				isSlice = true
				tf = (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				isPointer = true
				tf = (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if ((isPointer && isSlice) && ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
				$.panic($.concatString("both pointer and slice for basic type in ", (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			}

			switch ((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Int32:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								// NOTE: toInt32Slice is not defined (see pointer_reflect.go).
								/*
														sfsp := src.toInt32Slice()
														if *sfsp != nil {
															dfsp := dst.toInt32Slice()
															*dfsp = append(*dfsp, *sfsp...)
															if *dfsp == nil {
																*dfsp = []int64{}
															}
														}
													*/
								let sfs: $.Slice<number> = await src.getInt32Slice()
								if (sfs != null) {
									let dfs: $.Slice<number> = await dst.getInt32Slice()
									dfs = $.appendSlice(dfs, sfs)
									if (dfs == null) {
										dfs = $.arrayToSlice<number>([])
									}
									await dst.setInt32Slice(dfs)
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								// NOTE: toInt32Ptr is not defined (see pointer_reflect.go).
								/*
														sfpp := src.toInt32Ptr()
														if *sfpp != nil {
															dfpp := dst.toInt32Ptr()
															if *dfpp == nil {
																*dfpp = Int32(**sfpp)
															} else {
																**dfpp = **sfpp
															}
														}
													*/
								let sfp = await src.getInt32Ptr()
								if (sfp != null) {
									let dfp = await dst.getInt32Ptr()
									if (dfp == null) {
										await dst.setInt32Ptr($.pointerValue<number>(sfp))
									} else {
										dfp!.value = $.pointerValue<number>(sfp)
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.int($.pointerValue<number>(src.toInt32()), 32)
									if (v != 0) {
										dst.toInt32()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Int64:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfsp = src.toInt64Slice()
								if ($.pointerValue<$.Slice<bigint>>(sfsp) != null) {
									let dfsp = dst.toInt64Slice()
									dfsp!.value = $.appendSlice($.pointerValue<$.Slice<bigint>>(dfsp), $.pointerValue<$.Slice<bigint>>(sfsp))
									if ($.pointerValue<$.Slice<bigint>>(dfsp) == null) {
										dfsp!.value = $.arrayToSlice<bigint>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfpp = src.toInt64Ptr()
								if ($.pointerValue<$.VarRef<bigint> | null>(sfpp) != null) {
									let dfpp = dst.toInt64Ptr()
									if ($.pointerValue<$.VarRef<bigint> | null>(dfpp) == null) {
										dfpp!.value = __goscript_lib.Int64($.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(sfpp)))
									} else {
										$.pointerValue<$.VarRef<bigint> | null>(dfpp)!.value = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(sfpp))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.pointerValue<bigint>(src.toInt64())
									if (v != 0n) {
										dst.toInt64()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Uint32:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfsp = src.toUint32Slice()
								if ($.pointerValue<$.Slice<number>>(sfsp) != null) {
									let dfsp = dst.toUint32Slice()
									dfsp!.value = $.appendSlice($.pointerValue<$.Slice<number>>(dfsp), $.pointerValue<$.Slice<number>>(sfsp))
									if ($.pointerValue<$.Slice<number>>(dfsp) == null) {
										dfsp!.value = $.arrayToSlice<number>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfpp = src.toUint32Ptr()
								if ($.pointerValue<$.VarRef<number> | null>(sfpp) != null) {
									let dfpp = dst.toUint32Ptr()
									if ($.pointerValue<$.VarRef<number> | null>(dfpp) == null) {
										dfpp!.value = __goscript_lib.Uint32($.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(sfpp)))
									} else {
										$.pointerValue<$.VarRef<number> | null>(dfpp)!.value = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(sfpp))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.uint($.pointerValue<number>(src.toUint32()), 32)
									if (v != 0) {
										dst.toUint32()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Uint64:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfsp = src.toUint64Slice()
								if ($.pointerValue<$.Slice<bigint>>(sfsp) != null) {
									let dfsp = dst.toUint64Slice()
									dfsp!.value = $.appendSlice($.pointerValue<$.Slice<bigint>>(dfsp), $.pointerValue<$.Slice<bigint>>(sfsp))
									if ($.pointerValue<$.Slice<bigint>>(dfsp) == null) {
										dfsp!.value = $.arrayToSlice<bigint>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfpp = src.toUint64Ptr()
								if ($.pointerValue<$.VarRef<bigint> | null>(sfpp) != null) {
									let dfpp = dst.toUint64Ptr()
									if ($.pointerValue<$.VarRef<bigint> | null>(dfpp) == null) {
										dfpp!.value = __goscript_lib.Uint64($.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(sfpp)))
									} else {
										$.pointerValue<$.VarRef<bigint> | null>(dfpp)!.value = $.pointerValue<bigint>($.pointerValue<$.VarRef<bigint> | null>(sfpp))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.pointerValue<bigint>(src.toUint64())
									if (v != 0n) {
										dst.toUint64()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Float32:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfsp = src.toFloat32Slice()
								if ($.pointerValue<$.Slice<number>>(sfsp) != null) {
									let dfsp = dst.toFloat32Slice()
									dfsp!.value = $.appendSlice($.pointerValue<$.Slice<number>>(dfsp), $.pointerValue<$.Slice<number>>(sfsp))
									if ($.pointerValue<$.Slice<number>>(dfsp) == null) {
										dfsp!.value = $.arrayToSlice<number>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfpp = src.toFloat32Ptr()
								if ($.pointerValue<$.VarRef<number> | null>(sfpp) != null) {
									let dfpp = dst.toFloat32Ptr()
									if ($.pointerValue<$.VarRef<number> | null>(dfpp) == null) {
										dfpp!.value = __goscript_lib.Float32($.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(sfpp)))
									} else {
										$.pointerValue<$.VarRef<number> | null>(dfpp)!.value = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(sfpp))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.pointerValue<number>(src.toFloat32())
									if (v != 0) {
										dst.toFloat32()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Float64:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfsp = src.toFloat64Slice()
								if ($.pointerValue<$.Slice<number>>(sfsp) != null) {
									let dfsp = dst.toFloat64Slice()
									dfsp!.value = $.appendSlice($.pointerValue<$.Slice<number>>(dfsp), $.pointerValue<$.Slice<number>>(sfsp))
									if ($.pointerValue<$.Slice<number>>(dfsp) == null) {
										dfsp!.value = $.arrayToSlice<number>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfpp = src.toFloat64Ptr()
								if ($.pointerValue<$.VarRef<number> | null>(sfpp) != null) {
									let dfpp = dst.toFloat64Ptr()
									if ($.pointerValue<$.VarRef<number> | null>(dfpp) == null) {
										dfpp!.value = __goscript_lib.Float64($.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(sfpp)))
									} else {
										$.pointerValue<$.VarRef<number> | null>(dfpp)!.value = $.pointerValue<number>($.pointerValue<$.VarRef<number> | null>(sfpp))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.pointerValue<number>(src.toFloat64())
									if (v != 0) {
										dst.toFloat64()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Bool:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfsp = src.toBoolSlice()
								if ($.pointerValue<$.Slice<boolean>>(sfsp) != null) {
									let dfsp = dst.toBoolSlice()
									dfsp!.value = $.appendSlice($.pointerValue<$.Slice<boolean>>(dfsp), $.pointerValue<$.Slice<boolean>>(sfsp))
									if ($.pointerValue<$.Slice<boolean>>(dfsp) == null) {
										dfsp!.value = $.arrayToSlice<boolean>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfpp = src.toBoolPtr()
								if ($.pointerValue<$.VarRef<boolean> | null>(sfpp) != null) {
									let dfpp = dst.toBoolPtr()
									if ($.pointerValue<$.VarRef<boolean> | null>(dfpp) == null) {
										dfpp!.value = __goscript_lib.Bool($.pointerValue<boolean>($.pointerValue<$.VarRef<boolean> | null>(sfpp)))
									} else {
										$.pointerValue<$.VarRef<boolean> | null>(dfpp)!.value = $.pointerValue<boolean>($.pointerValue<$.VarRef<boolean> | null>(sfpp))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.pointerValue<boolean>(src.toBool())
									if (v) {
										dst.toBool()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.String:
				{
					switch ((true as boolean)) {
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfsp = src.toStringSlice()
								if ($.pointerValue<$.Slice<string>>(sfsp) != null) {
									let dfsp = dst.toStringSlice()
									dfsp!.value = $.appendSlice($.pointerValue<$.Slice<string>>(dfsp), $.pointerValue<$.Slice<string>>(sfsp))
									if ($.pointerValue<$.Slice<string>>(dfsp) == null) {
										dfsp!.value = $.arrayToSlice<string>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isPointer:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sfpp = src.toStringPtr()
								if ($.pointerValue<$.VarRef<string> | null>(sfpp) != null) {
									let dfpp = dst.toStringPtr()
									if ($.pointerValue<$.VarRef<string> | null>(dfpp) == null) {
										dfpp!.value = __goscript_lib.String($.pointerValue<string>($.pointerValue<$.VarRef<string> | null>(sfpp)))
									} else {
										$.pointerValue<$.VarRef<string> | null>(dfpp)!.value = $.pointerValue<string>($.pointerValue<$.VarRef<string> | null>(sfpp))
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								{
									let v = $.pointerValue<string>(src.toString())
									if (!$.stringEqual(v, "")) {
										dst.toString()!.value = v
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Slice:
				{
					let isProto3 = $.pointerValue<__goscript_properties.Properties>($.arrayIndex($.pointerValue<__goscript_properties.StructProperties>(props).Prop!, i)).proto3
					switch ((true as boolean)) {
						case isPointer:
						{
							$.panic($.concatString("bad pointer in byte slice case in ", (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
							break
						}
						case (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 8:
						{
							$.panic($.concatString("bad element kind in byte slice case in ", (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
							break
						}
						case isSlice:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sbsp = src.toBytesSlice()
								if ($.pointerValue<$.Slice<$.Slice<number>>>(sbsp) != null) {
									let dbsp = dst.toBytesSlice()
									for (let __goscriptRangeTarget0 = $.pointerValue<$.Slice<$.Slice<number>>>(sbsp), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
										let sb = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<number>)
										if (sb == null) {
											dbsp!.value = $.appendOne($.pointerValue<$.Slice<$.Slice<number>>>(dbsp), null, $.appendZeros.nil)
										} else {
											dbsp!.value = $.appendOne($.pointerValue<$.Slice<$.Slice<number>>>(dbsp), $.appendSlice(new Uint8Array([]) as $.Slice<number>, sb, $.byteSliceHint), $.appendZeros.nil)
										}
									}
									if ($.pointerValue<$.Slice<$.Slice<number>>>(dbsp) == null) {
										dbsp!.value = $.arrayToSlice<$.Slice<number>>([])
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							mfi.merge = $.functionValue((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): void => {
								let sbp = src.toBytes()
								if ($.pointerValue<$.Slice<number>>(sbp) != null) {
									let dbp = dst.toBytes()
									if (!isProto3 || ($.sliceLen($.pointerValue<$.Slice<number>>(sbp)) > 0)) {
										dbp!.value = $.appendSlice(new Uint8Array([]) as $.Slice<number>, $.pointerValue<$.Slice<number>>(sbp), $.byteSliceHint)
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Struct:
				{
					switch ((true as boolean)) {
						case isSlice && !isPointer:
						{
							let __goscriptShadow0: mergeInfo | $.VarRef<mergeInfo> | null = await getMergeInfo(tf)
							let zero = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(tf)!)))
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								// TODO: Make this faster?
								let dstsp = dst.asPointerTo(f.value.Type)
								let dsts = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dstsp)).Elem()))
								let srcs = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.asPointerTo(f.value.Type))).Elem()))
								for (let __goscriptShadow1 = 0; __goscriptShadow1 < $.markAsStructValue($.cloneStructValue(srcs)).Len(); __goscriptShadow1++) {
									dsts = $.assignStruct(dsts, reflect.Append($.markAsStructValue($.cloneStructValue(dsts)), $.markAsStructValue($.cloneStructValue(zero))))
									let srcElement = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(srcs)).Index(__goscriptShadow1))).Addr()))
									let dstElement = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dsts)).Index($.markAsStructValue($.cloneStructValue(dsts)).Len() - 1))).Addr()))
									await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as mergeInfo).merge(__goscript_pointer_reflect.valToPointer(dstElement), __goscript_pointer_reflect.valToPointer(srcElement)) : mergeInfo.prototype.merge.call(__goscriptShadow0, __goscript_pointer_reflect.valToPointer(dstElement), __goscript_pointer_reflect.valToPointer(srcElement)))
								}
								if ($.markAsStructValue($.cloneStructValue(dsts)).IsNil()) {
									dsts = $.assignStruct(dsts, reflect.MakeSlice($.pointerValueOrNil(f.value.Type)!, 0, 0))
								}
								$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dstsp)).Elem())).Set($.markAsStructValue($.cloneStructValue(dsts)))
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case !isPointer:
						{
							let __goscriptShadow2: mergeInfo | $.VarRef<mergeInfo> | null = await getMergeInfo(tf)
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								await (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? ((__goscriptShadow2 as any) as mergeInfo).merge(dst, src) : mergeInfo.prototype.merge.call(__goscriptShadow2, dst, src))
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						case isSlice:
						{
							let __goscriptShadow3: mergeInfo | $.VarRef<mergeInfo> | null = await getMergeInfo(tf)
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								let sps: $.Slice<__goscript_pointer_reflect.pointer> = src.getPointerSlice()
								if (sps != null) {
									let dps: $.Slice<__goscript_pointer_reflect.pointer> = dst.getPointerSlice()
									for (let __goscriptRangeTarget1 = sps, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
										let sp = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_pointer_reflect.pointer)).clone()
										let dp: __goscript_pointer_reflect.pointer = new __goscript_pointer_reflect.pointer(undefined, true)
										if (!$.markAsStructValue($.cloneStructValue(sp)).isNil()) {
											dp = $.assignStruct(dp, __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil(tf)!)))
											await (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as mergeInfo).merge(dp, (sp).clone()) : mergeInfo.prototype.merge.call(__goscriptShadow3, dp, (sp).clone()))
										}
										dps = $.appendOne(dps, (dp).clone())
									}
									if (dps == null) {
										dps = $.arrayToSlice<__goscript_pointer_reflect.pointer>([])
									}
									dst.setPointerSlice(dps)
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
						default:
						{
							let __goscriptShadow4: mergeInfo | $.VarRef<mergeInfo> | null = await getMergeInfo(tf)
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								let sp = src.getPointer()
								if (!sp.isNil()) {
									let dp = dst.getPointer()
									if (dp.isNil()) {
										dp = $.assignStruct(dp, __goscript_pointer_reflect.valToPointer(reflect.New($.pointerValueOrNil(tf)!)))
										dst.setPointer(dp)
									}
									await (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? ((__goscriptShadow4 as any) as mergeInfo).merge(dp, sp) : mergeInfo.prototype.merge.call(__goscriptShadow4, dp, sp))
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Map:
				{
					switch ((true as boolean)) {
						case isPointer || isSlice:
						{
							$.panic($.concatString("bad pointer or slice in map case in ", (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
							break
						}
						default:
						{
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								let sm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.asPointerTo(tf))).Elem()))
								if ($.markAsStructValue($.cloneStructValue(sm)).Len() == 0) {
									return
								}
								let dm = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.asPointerTo(tf))).Elem()))
								if ($.markAsStructValue($.cloneStructValue(dm)).IsNil()) {
									$.markAsStructValue($.cloneStructValue(dm)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil(tf)!))))
								}

								switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
									case reflect.Ptr:
									{
										for (let __goscriptRangeTarget2 = $.markAsStructValue($.cloneStructValue(sm)).MapKeys(), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
											let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as reflect.Value)))
											let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sm)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))
											val = $.assignStruct(val, reflect.ValueOf((await __goscript_clone.Clone($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(val)).Interface(), "proto.Message")) as any)))
											$.markAsStructValue($.cloneStructValue(dm)).SetMapIndex($.markAsStructValue($.cloneStructValue(key)), $.markAsStructValue($.cloneStructValue(val)))
										}
										break
									}
									case reflect.Slice:
									{
										for (let __goscriptRangeTarget3 = $.markAsStructValue($.cloneStructValue(sm)).MapKeys(), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
											let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Value)))
											let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sm)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))
											val = $.assignStruct(val, reflect.ValueOf($.interfaceValue($.appendSlice(new Uint8Array([]) as $.Slice<number>, $.markAsStructValue($.cloneStructValue(val)).Bytes(), $.byteSliceHint), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
											$.markAsStructValue($.cloneStructValue(dm)).SetMapIndex($.markAsStructValue($.cloneStructValue(key)), $.markAsStructValue($.cloneStructValue(val)))
										}
										break
									}
									default:
									{
										for (let __goscriptRangeTarget4 = $.markAsStructValue($.cloneStructValue(sm)).MapKeys(), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
											let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as reflect.Value)))
											let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sm)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))
											$.markAsStructValue($.cloneStructValue(dm)).SetMapIndex($.markAsStructValue($.cloneStructValue(key)), $.markAsStructValue($.cloneStructValue(val)))
										}
										break
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				case reflect.Interface:
				{
					switch ((true as boolean)) {
						case isPointer || isSlice:
						{
							$.panic($.concatString("bad pointer or slice in interface case in ", (__goscriptAwait = (tf !== null && (tf as any).__isVarRef !== true && (tf as any).__goValue === undefined ? (tf as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tf)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
							break
						}
						default:
						{
							mfi.merge = $.functionValue(async (dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> => {
								let su = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.asPointerTo(tf))).Elem()))
								if (!$.markAsStructValue($.cloneStructValue(su)).IsNil()) {
									let du = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.asPointerTo(tf))).Elem()))
									let typ = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(su)).Elem())).Type()
									if ($.markAsStructValue($.cloneStructValue(du)).IsNil() || (!$.comparableEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(du)).Elem())).Type(), typ))) {
										$.markAsStructValue($.cloneStructValue(du)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
									}
									let sv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(su)).Elem())).Elem())).Field(0)))
									if (($.markAsStructValue($.cloneStructValue(sv)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(sv)).IsNil()) {
										return
									}
									let dv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(du)).Elem())).Elem())).Field(0)))
									if (($.markAsStructValue($.cloneStructValue(dv)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(dv)).IsNil()) {
										$.markAsStructValue($.cloneStructValue(dv)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(sv)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
									}
									switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(sv)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
										case reflect.Ptr:
										{
											await __goscript_clone.Merge($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(dv)).Interface(), "proto.Message"), $.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(sv)).Interface(), "proto.Message"))
											break
										}
										case reflect.Slice:
										{
											$.markAsStructValue($.cloneStructValue(dv)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.appendSlice(new Uint8Array([]) as $.Slice<number>, $.markAsStructValue($.cloneStructValue(sv)).Bytes(), $.byteSliceHint), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
											break
										}
										default:
										{
											$.markAsStructValue($.cloneStructValue(dv)).Set($.markAsStructValue($.cloneStructValue(sv)))
											break
										}
									}
								}
							}, ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo))
							break
						}
					}
					break
				}
				default:
				{
					$.panic(await fmt.Sprintf("merger not found for type:%s", (tf as any)))
					break
				}
			}
			;(mi$ as mergeInfo).fields = $.appendOne((mi$ as mergeInfo).fields, (mfi).clone())
		}

		;(mi$ as mergeInfo).unrecognized = (__goscript_pointer_reflect.invalidField as __goscript_pointer_reflect.field)
		{
			let __goscriptTuple0: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).FieldByName("XXX_unrecognized")
			let f = $.varRef(__goscriptTuple0[0])
			let ok = __goscriptTuple0[1]
			if (ok) {
				if (!$.comparableEqual(f.value.Type, reflect.TypeOf($.interfaceValue(new Uint8Array([]) as $.Slice<number>, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) {
					$.panic("expected XXX_unrecognized to be of type []byte")
				}
				;(mi$ as mergeInfo).unrecognized = (__goscript_pointer_reflect.toField(f) as __goscript_pointer_reflect.field)
			}
		}

		atomic.StoreInt32($.fieldRef((mi$ as mergeInfo)._fields, "initialized"), 1)
	}

	public async merge(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer): globalThis.Promise<void> {
		let mi: mergeInfo | $.VarRef<mergeInfo> | null = this;
		const mi$: mergeInfo = mi == null ? $.pointerTarget<mergeInfo>(mi) : (mi as any).__isVarRef === true ? (mi as any).value : (mi as any).__goValue === undefined ? (mi as any) : $.pointerTarget<mergeInfo>(mi)
		if (dst.isNil()) {
			$.panic("proto: nil destination")
		}
		if (src.isNil()) {
			return
		}

		if (atomic.LoadInt32($.fieldRef((mi$ as mergeInfo)._fields, "initialized")) == 0) {
			await (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as mergeInfo).computeMergeInfo() : mergeInfo.prototype.computeMergeInfo.call(mi))
		}

		for (let __goscriptRangeTarget5 = (mi$ as mergeInfo).fields, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let fi = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as mergeFieldInfo)).clone()
			let sfp = src.offset((fi.field as __goscript_pointer_reflect.field))

			// As an optimization, we can avoid the merge function call cost
			// if we know for sure that the source will have no effect
			// by checking if it is the zero value.
			if (false) {
				if (fi.isPointer && $.markAsStructValue($.cloneStructValue(sfp.getPointer())).isNil()) {
					continue
				}
				if (fi.basicWidth > 0) {
					switch ((true as boolean)) {
						case (fi.basicWidth == 1) && !$.pointerValue<boolean>(sfp.toBool()):
						{
							continue
							break
						}
						case (fi.basicWidth == 4) && ($.uint($.pointerValue<number>(sfp.toUint32()), 32) == 0):
						{
							continue
							break
						}
						case (fi.basicWidth == 8) && ($.pointerValue<bigint>(sfp.toUint64()) == 0n):
						{
							continue
							break
						}
					}
				}
			}

			let dfp = dst.offset((fi.field as __goscript_pointer_reflect.field))
			void (__goscriptAwait = fi.merge!((dfp).clone(), (sfp).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// TODO: Make this faster?
		let out = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dst.asPointerTo((mi$ as mergeInfo).typ))).Elem()))
		let _in = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(src.asPointerTo((mi$ as mergeInfo).typ))).Elem()))
		{
			let [emIn, err] = __goscript_extensions.extendable($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Addr())).Interface())
			if (err == null) {
				let [emOut, ] = __goscript_extensions.extendable($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Addr())).Interface())
				let __goscriptTuple1: any = await (emIn !== null && (emIn as any).__isVarRef !== true && (emIn as any).__goValue === undefined ? (emIn as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(emIn)).extensionsRead()
				let mIn: globalThis.Map<number, __goscript_extensions.Extension> | null = __goscriptTuple1[0]
				let muIn = __goscriptTuple1[1]
				if (mIn != null) {
					let mOut: globalThis.Map<number, __goscript_extensions.Extension> | null = ((__goscriptAwait = (emOut !== null && (emOut as any).__isVarRef !== true && (emOut as any).__goValue === undefined ? (emOut as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(emOut)).extensionsWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<number, __goscript_extensions.Extension> | null)
					await (muIn !== null && (muIn as any).__isVarRef !== true && (muIn as any).__goValue === undefined ? (muIn as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(muIn)).Lock()
					await __goscript_clone.mergeExtension(mOut, mIn)
					void (__goscriptAwait = (muIn !== null && (muIn as any).__isVarRef !== true && (muIn as any).__goValue === undefined ? (muIn as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(muIn)).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}

		if (__goscript_pointer_reflect.field_IsValid((mi$ as mergeInfo).unrecognized)) {
			{
				let b: $.Slice<number> = $.pointerValue<$.Slice<number>>($.markAsStructValue($.cloneStructValue(src.offset(((mi$ as mergeInfo).unrecognized as __goscript_pointer_reflect.field)))).toBytes())
				if ($.sliceLen(b) > 0) {
					$.markAsStructValue($.cloneStructValue(dst.offset(((mi$ as mergeInfo).unrecognized as __goscript_pointer_reflect.field)))).toBytes()!.value = $.appendSlice<number>(null, b, $.byteSliceHint)
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"proto.mergeInfo",
		() => new mergeInfo(),
		() => [$.methodSignature("computeMergeInfo", [], [], true), $.methodSignature("merge", [["dst", "proto.pointer"], ["src", "proto.pointer"]], [], true)],
		mergeInfo,
		() => [/* @__PURE__ */ $.structField("typ", "reflect.Type", [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("initialized", /* @__PURE__ */ $.basicType("int32"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("lock", "sync.Mutex", [2], 20, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("fields", /* @__PURE__ */ $.sliceType("proto.mergeFieldInfo"), [3], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [4], 56, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class mergeFieldInfo {
	public get field(): __goscript_pointer_reflect.field {
		return this._fields.field
	}

	public set field(value: __goscript_pointer_reflect.field) {
		this._fields.field = value
	}

	// isPointer reports whether the value in the field is a pointer.
	// This is true for the following situations:
	// 	* Pointer to struct
	// 	* Pointer to basic type (proto2 only)
	// 	* Slice (first value in slice header is a pointer)
	// 	* String (first value in string header is a pointer)
	public get isPointer(): boolean {
		return this._fields.isPointer
	}

	public set isPointer(value: boolean) {
		this._fields.isPointer = value
	}

	// basicWidth reports the width of the field assuming that it is directly
	// embedded in the struct (as is the case for basic types in proto3).
	// The possible values are:
	// 	0: invalid
	// 	1: bool
	// 	4: int32, uint32, float32
	// 	8: int64, uint64, float64
	public get basicWidth(): number {
		return this._fields.basicWidth
	}

	public set basicWidth(value: number) {
		this._fields.basicWidth = value
	}

	// Where dst and src are pointers to the types being merged.
	public get merge(): ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer) => void) | null {
		return this._fields.merge
	}

	public set merge(value: ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer) => void) | null) {
		this._fields.merge = value
	}

	public _fields: {
		field: __goscript_pointer_reflect.field
		isPointer: boolean
		basicWidth: number
		merge: ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer) => void) | null
	}

	constructor(init?: Partial<{field?: __goscript_pointer_reflect.field, isPointer?: boolean, basicWidth?: number, merge?: ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			field: init?.field ?? (null! as __goscript_pointer_reflect.field),
			isPointer: init?.isPointer ?? (false as boolean),
			basicWidth: init?.basicWidth ?? (0 as number),
			merge: init?.merge ?? (null! as ((dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mergeFieldInfo {
		return new mergeFieldInfo(this, true)
	}

	public __goscriptAssign(source: mergeFieldInfo): void {
		const target = this._fields
		const values = source._fields
		target.field = values.field
		target.isPointer = values.isPointer
		target.basicWidth = values.basicWidth
		target.merge = values.merge
	}

	static __typeInfo = $.registerStructType(
		"proto.mergeFieldInfo",
		() => new mergeFieldInfo(),
		() => [],
		mergeFieldInfo,
		() => [/* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "proto.field"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("isPointer", /* @__PURE__ */ $.basicType("bool"), [1], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("basicWidth", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("merge", ({ kind: $.TypeKind.Function, params: ["proto.pointer", "proto.pointer"], results: [] } as $.FunctionTypeInfo), [3], 40, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export let mergeInfoMap: globalThis.Map<reflect.Type | null, mergeInfo | $.VarRef<mergeInfo> | null> | null = $.makeMap<reflect.Type | null, mergeInfo | $.VarRef<mergeInfo> | null>([])

export function __goscript_set_mergeInfoMap(__goscriptValue: globalThis.Map<reflect.Type | null, mergeInfo | $.VarRef<mergeInfo> | null> | null): void {
	mergeInfoMap = __goscriptValue
}

export let mergeInfoLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_mergeInfoLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(mergeInfoLock.value, __goscriptValue)
}

export async function getMergeInfo(t: reflect.Type | null): globalThis.Promise<mergeInfo | $.VarRef<mergeInfo> | null> {
	using __defer = new $.DisposableStack()
	await mergeInfoLock.value.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(mergeInfoLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	let mi: mergeInfo | $.VarRef<mergeInfo> | null = $.mapGet<reflect.Type | null, mergeInfo | $.VarRef<mergeInfo> | null, mergeInfo | $.VarRef<mergeInfo> | null>(mergeInfoMap, t, null)[0]
	if (mi == null) {
		mi = new mergeInfo({typ: t})
		$.mapSet(mergeInfoMap, t, mi)
	}
	return mi
}

var __goscriptAwait: any
