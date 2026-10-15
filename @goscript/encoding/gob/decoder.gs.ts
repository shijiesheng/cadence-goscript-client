// Generated file based on decoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as errors from "@goscript/errors/index.js"

import * as saferio from "@goscript/internal/saferio/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_dec_helpers from "./dec_helpers.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/saferio/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/bufio/index.js"
import "@goscript/sync/index.js"
import "./type.gs.ts"
import "./dec_helpers.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./error.gs.ts"

$.registerTypePackagePath("encoding/gob", ["gob.Decoder"])

export class Decoder {
	public get mutex(): sync.Mutex {
		return this._fields.mutex
	}

	public set mutex(value: sync.Mutex) {
		this._fields.mutex = value
	}

	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get buf(): __goscript_decode.decBuffer {
		return this._fields.buf
	}

	public set buf(value: __goscript_decode.decBuffer) {
		this._fields.buf = value
	}

	public get wireType(): globalThis.Map<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null> | null {
		return this._fields.wireType
	}

	public set wireType(value: globalThis.Map<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null> | null) {
		this._fields.wireType = value
	}

	public get decoderCache(): globalThis.Map<reflect.Type | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null> | null {
		return this._fields.decoderCache
	}

	public set decoderCache(value: globalThis.Map<reflect.Type | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null> | null) {
		this._fields.decoderCache = value
	}

	public get ignorerCache(): globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null {
		return this._fields.ignorerCache
	}

	public set ignorerCache(value: globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null) {
		this._fields.ignorerCache = value
	}

	public get freeList(): __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null {
		return this._fields.freeList
	}

	public set freeList(value: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null) {
		this._fields.freeList = value
	}

	public get countBuf(): $.Slice<number> {
		return this._fields.countBuf
	}

	public set countBuf(value: $.Slice<number>) {
		this._fields.countBuf = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	// ignoreDepth tracks the depth of recursively parsed ignored fields
	public get ignoreDepth(): number {
		return this._fields.ignoreDepth
	}

	public set ignoreDepth(value: number) {
		this._fields.ignoreDepth = value
	}

	public _fields: {
		mutex: sync.Mutex
		r: io.Reader | null
		buf: __goscript_decode.decBuffer
		wireType: globalThis.Map<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null> | null
		decoderCache: globalThis.Map<reflect.Type | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null> | null
		ignorerCache: globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null
		freeList: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null
		countBuf: $.Slice<number>
		err: $.GoError
		ignoreDepth: number
	}

	constructor(init?: Partial<{mutex?: sync.Mutex, r?: io.Reader | null, buf?: __goscript_decode.decBuffer, wireType?: globalThis.Map<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null> | null, decoderCache?: globalThis.Map<reflect.Type | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null> | null, ignorerCache?: globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null, freeList?: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, countBuf?: $.Slice<number>, err?: $.GoError, ignoreDepth?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			mutex: init?.mutex ? $.markAsStructValue($.cloneStructValue(init.mutex)) : $.markAsStructValue(new sync.Mutex()),
			r: init?.r ?? (null! as io.Reader | null),
			buf: init?.buf ? init.buf.clone() : new __goscript_decode.decBuffer(undefined, true),
			wireType: init?.wireType ?? (null! as globalThis.Map<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null> | null),
			decoderCache: init?.decoderCache ?? (null! as globalThis.Map<reflect.Type | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null> | null),
			ignorerCache: init?.ignorerCache ?? (null! as globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null),
			freeList: init?.freeList ?? (null! as __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null),
			countBuf: init?.countBuf ?? (null! as $.Slice<number>),
			err: init?.err ?? (null! as $.GoError),
			ignoreDepth: init?.ignoreDepth ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decoder {
		return new Decoder(this, true)
	}

	public __goscriptAssign(source: Decoder): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mutex, values.mutex)
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		$.assignStruct(target.buf, values.buf)
		target.wireType = values.wireType
		target.decoderCache = values.decoderCache
		target.ignorerCache = values.ignorerCache
		target.freeList = values.freeList
		target.countBuf = values.countBuf
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.ignoreDepth = values.ignoreDepth
	}

	public async Decode(e: any): globalThis.Promise<$.GoError> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		if (e == null) {
			return (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).DecodeValue($.markAsStructValue(new reflect.Value())) : Decoder.prototype.DecodeValue.call(dec, $.markAsStructValue(new reflect.Value())))
		}
		let value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(e)))
		// If e represents a value as opposed to a pointer, the answer won't
		// get back to the caller. Make sure it's a pointer.
		if ($.markAsStructValue($.cloneStructValue(value)).Kind() != 22) {
			;(dec$ as Decoder).err = errors.New("gob: attempt to decode into a non-pointer")
			return (dec$ as Decoder).err
		}
		return (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).DecodeValue(value) : Decoder.prototype.DecodeValue.call(dec, value))
	}

	public async DecodeValue(v: reflect.Value): globalThis.Promise<$.GoError> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		if ($.markAsStructValue($.cloneStructValue(v)).IsValid()) {
			if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && !$.markAsStructValue($.cloneStructValue(v)).IsNil()) {
			} else {
				if (!$.markAsStructValue($.cloneStructValue(v)).CanSet()) {
					return errors.New("gob: DecodeValue of unassignable value")
				}
			}
		}
		// Make sure we're single-threaded through here.
		await (dec$ as Decoder).mutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((dec$ as Decoder).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		void (dec$ as Decoder).buf.Reset();
		;(dec$ as Decoder).err = null
		let id = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeTypeSequence(false) : Decoder.prototype.decodeTypeSequence.call(dec, false))
		if ((dec$ as Decoder).err == null) {
			await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeValue(id, $.markAsStructValue($.cloneStructValue(v))) : Decoder.prototype.decodeValue.call(dec, id, $.markAsStructValue($.cloneStructValue(v))))
		}
		return (dec$ as Decoder).err
	}

	public async compatibleType(fr: reflect.Type | null, fw: __goscript__type.typeId, inProgress: globalThis.Map<reflect.Type | null, __goscript__type.typeId> | null): globalThis.Promise<boolean> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		{
			let [rhs, ok] = $.mapGet<reflect.Type | null, __goscript__type.typeId, __goscript__type.typeId>(inProgress, fr, 0)
			if (ok) {
				return rhs == fw
			}
		}
		$.mapSet(inProgress, fr, fw)
		let ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = await __goscript__type.userType(fr)
		let ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
		let __goscriptTuple0: any = $.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>($.pointerValue<Decoder>(dec).wireType, fw, null)
		let wire: __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		let wire$: __goscript__type.wireType = wire == null ? $.pointerTarget<__goscript__type.wireType>(wire) : (wire as any).__isVarRef === true ? (wire as any).value : (wire as any).__goValue === undefined ? (wire as any) : $.pointerTarget<__goscript__type.wireType>(wire)

		if (((((ut$ as __goscript__type.userTypeInfo).externalDec == 1) != (ok && ((wire$ as __goscript__type.wireType).GobEncoderT != null))) || (((ut$ as __goscript__type.userTypeInfo).externalDec == 2) != (ok && ((wire$ as __goscript__type.wireType).BinaryMarshalerT != null)))) || (((ut$ as __goscript__type.userTypeInfo).externalDec == 3) != (ok && ((wire$ as __goscript__type.wireType).TextMarshalerT != null)))) {
			return false
		}
		if ((ut$ as __goscript__type.userTypeInfo).externalDec != 0) {
			return true
		}
		{
			let t = (ut$ as __goscript__type.userTypeInfo).base
			switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				default:
				{
					return false
					break
				}
				case reflect.Bool:
				{
					return fw == __goscript__type.tBool
					break
				}
				case reflect.Int:
				case reflect.Int8:
				case reflect.Int16:
				case reflect.Int32:
				case reflect.Int64:
				{
					return fw == __goscript__type.tInt
					break
				}
				case reflect.Uint:
				case reflect.Uint8:
				case reflect.Uint16:
				case reflect.Uint32:
				case reflect.Uint64:
				case reflect.Uintptr:
				{
					return fw == __goscript__type.tUint
					break
				}
				case reflect.Float32:
				case reflect.Float64:
				{
					return fw == __goscript__type.tFloat
					break
				}
				case reflect.Complex64:
				case reflect.Complex128:
				{
					return fw == __goscript__type.tComplex
					break
				}
				case reflect.String:
				{
					return fw == __goscript__type.tString
					break
				}
				case reflect.Interface:
				{
					return fw == __goscript__type.tInterface
					break
				}
				case reflect.Array:
				{
					if (!ok || ((wire$ as __goscript__type.wireType).ArrayT == null)) {
						return false
					}
					let array: __goscript__type.arrayType | $.VarRef<__goscript__type.arrayType> | null = (wire$ as __goscript__type.wireType).ArrayT
					let array$: __goscript__type.arrayType = array == null ? $.pointerTarget<__goscript__type.arrayType>(array) : (array as any).__isVarRef === true ? (array as any).value : (array as any).__goValue === undefined ? (array as any) : $.pointerTarget<__goscript__type.arrayType>(array)
					return ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == (array$ as __goscript__type.arrayType).Len) && await Decoder.prototype.compatibleType.call(dec, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (array$ as __goscript__type.arrayType).Elem, inProgress)
					break
				}
				case reflect.Map:
				{
					if (!ok || ((wire$ as __goscript__type.wireType).MapT == null)) {
						return false
					}
					let MapType: __goscript__type.mapType | $.VarRef<__goscript__type.mapType> | null = (wire$ as __goscript__type.wireType).MapT
					let MapType$: __goscript__type.mapType = MapType == null ? $.pointerTarget<__goscript__type.mapType>(MapType) : (MapType as any).__isVarRef === true ? (MapType as any).value : (MapType as any).__goValue === undefined ? (MapType as any) : $.pointerTarget<__goscript__type.mapType>(MapType)
					return await Decoder.prototype.compatibleType.call(dec, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (MapType$ as __goscript__type.mapType).Key, inProgress) && await Decoder.prototype.compatibleType.call(dec, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (MapType$ as __goscript__type.mapType).Elem, inProgress)
					break
				}
				case reflect.Slice:
				{
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
						return fw == __goscript__type.tBytes
					}

					let sw: __goscript__type.sliceType | $.VarRef<__goscript__type.sliceType> | null = null! as __goscript__type.sliceType | $.VarRef<__goscript__type.sliceType> | null
					{
						let tt = __goscript__type.builtinIdToType(fw)
						if (tt != null) {
							let __goscriptTuple1: any = $.typeAssertTuple<__goscript__type.sliceType | $.VarRef<__goscript__type.sliceType> | null>(tt, /* @__PURE__ */ $.pointerType("gob.sliceType"))
							sw = __goscriptTuple1[0]
						} else {
							if (wire != null) {
								sw = (wire$ as __goscript__type.wireType).SliceT
							}
						}
					}
					let elem = $.pointerValue<__goscript__type.userTypeInfo>(await __goscript__type.userType((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))).base
					return (sw != null) && await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).compatibleType(elem, $.pointerValue<__goscript__type.sliceType>(sw).Elem, inProgress) : Decoder.prototype.compatibleType.call(dec, elem, $.pointerValue<__goscript__type.sliceType>(sw).Elem, inProgress))
					break
				}
				case reflect.Struct:
				{
					return true
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async compileDec(remoteId: __goscript__type.typeId, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): globalThis.Promise<[__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null, $.GoError]> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null = null! as __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
			const __goscriptDeferArg0 = err
			__defer.defer(() => { __goscript_error.catchError(__goscriptDeferArg0) })
			let rt = (ut$ as __goscript__type.userTypeInfo).base
			let srt: reflect.Type | null = rt
			if (((__goscriptAwait = (srt !== null && (srt as any).__isVarRef !== true && (srt as any).__goValue === undefined ? (srt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(srt)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) || ((ut$ as __goscript__type.userTypeInfo).externalDec != 0)) {
				const __goscriptReturn1: [__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null, $.GoError] = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).compileSingle(remoteId, ut) : Decoder.prototype.compileSingle.call(dec, remoteId, ut))
				engine = __goscriptReturn1[0]
				err.value = __goscriptReturn1[1]
				__defer.dispose()
				return [engine, err.value]
			}
			let wireStruct: __goscript__type.structType | $.VarRef<__goscript__type.structType> | null = null! as __goscript__type.structType | $.VarRef<__goscript__type.structType> | null

			{
				let t = __goscript__type.builtinIdToType(remoteId)
				if (t != null) {
					let __goscriptTuple2: any = $.typeAssertTuple<__goscript__type.structType | $.VarRef<__goscript__type.structType> | null>(t, /* @__PURE__ */ $.pointerType("gob.structType"))
					wireStruct = __goscriptTuple2[0]
				} else {
					let wire: __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null = $.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>($.pointerValue<Decoder>(dec).wireType, remoteId, null)[0]
					if (wire == null) {
						__goscript_error.error_(__goscript_decode.errBadType)
					}
					wireStruct = $.pointerValue<__goscript__type.wireType>(wire).StructT
				}
			}
			if (wireStruct == null) {
				__goscript_error.errorf("type mismatch in decoder: want struct type %s; got non-struct", $.arrayToSlice<any>([(rt as any)]))
			}
			engine = new __goscript_decode.decEngine()
			$.pointerValue<__goscript_decode.decEngine>(engine).instr = $.makeSlice<__goscript_decode.decInstr>($.sliceLen($.pointerValue<__goscript__type.structType>(wireStruct).Field), undefined, undefined, () => new __goscript_decode.decInstr(undefined, true))
			let seen: globalThis.Map<reflect.Type | null, $.VarRef<__goscript_decode.decOp | null> | null> | null = $.makeMap<reflect.Type | null, $.VarRef<__goscript_decode.decOp | null> | null>()

			for (let fieldnum = 0; fieldnum < $.sliceLen($.pointerValue<__goscript__type.structType>(wireStruct).Field); fieldnum++) {
				let wireField = ($.arrayIndex($.pointerValue<__goscript__type.structType>(wireStruct).Field!, fieldnum)).clone()
				if ($.stringEqual(wireField.Name, "")) {
					__goscript_error.errorf("empty name for remote field of type %s", $.arrayToSlice<any>([$.pointerValue<__goscript__type.structType>(wireStruct).CommonType.Name]))
				}
				let ovfl = __goscript_decode.overflow(wireField.Name)

				let [localField, present] = await (srt !== null && (srt as any).__isVarRef !== true && (srt as any).__goValue === undefined ? (srt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(srt)).FieldByName(wireField.Name)

				if (!present || !__goscript__type.isExported(wireField.Name)) {
					let op: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decIgnoreOpFor(wireField.Id, $.makeMap<__goscript__type.typeId, $.VarRef<__goscript_decode.decOp | null> | null>()) : Decoder.prototype.decIgnoreOpFor.call(dec, wireField.Id, $.makeMap<__goscript__type.typeId, $.VarRef<__goscript_decode.decOp | null> | null>()))
					$.assignStruct($.sliceElems($.pointerValue<__goscript_decode.decEngine>(engine).instr!)[$.sliceSlot($.pointerValue<__goscript_decode.decEngine>(engine).instr!, fieldnum)], new __goscript_decode.decInstr({op: $.pointerValue<__goscript_decode.decOp | null>(op), field: fieldnum, index: null, ovfl: ovfl}, true))
					continue
				}
				if (!await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).compatibleType(localField.Type, wireField.Id, $.makeMap<reflect.Type | null, __goscript__type.typeId>()) : Decoder.prototype.compatibleType.call(dec, localField.Type, wireField.Id, $.makeMap<reflect.Type | null, __goscript__type.typeId>()))) {
					__goscript_error.errorf("wrong type (%s) for received field %s.%s", $.arrayToSlice<any>([(localField.Type as any), $.pointerValue<__goscript__type.structType>(wireStruct).CommonType.Name, wireField.Name]))
				}
				let op: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decOpFor(wireField.Id, localField.Type, localField.Name, seen) : Decoder.prototype.decOpFor.call(dec, wireField.Id, localField.Type, localField.Name, seen))
				$.assignStruct($.sliceElems($.pointerValue<__goscript_decode.decEngine>(engine).instr!)[$.sliceSlot($.pointerValue<__goscript_decode.decEngine>(engine).instr!, fieldnum)], new __goscript_decode.decInstr({op: $.pointerValue<__goscript_decode.decOp | null>(op), field: fieldnum, index: localField.Index, ovfl: ovfl}, true))
				$.pointerValue<__goscript_decode.decEngine>(engine).numInstr++
			}
			__defer.dispose()
			return [engine, err.value]
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [engine, err.value]
	}

	public async compileIgnoreSingle(remoteId: __goscript__type.typeId): globalThis.Promise<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null = new __goscript_decode.decEngine()
		let engine$: __goscript_decode.decEngine = engine == null ? $.pointerTarget<__goscript_decode.decEngine>(engine) : (engine as any).__isVarRef === true ? (engine as any).value : (engine as any).__goValue === undefined ? (engine as any) : $.pointerTarget<__goscript_decode.decEngine>(engine);
		;(engine$ as __goscript_decode.decEngine).instr = $.makeSlice<__goscript_decode.decInstr>(1, undefined, undefined, () => new __goscript_decode.decInstr(undefined, true))
		let op: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decIgnoreOpFor(remoteId, $.makeMap<__goscript__type.typeId, $.VarRef<__goscript_decode.decOp | null> | null>()) : Decoder.prototype.decIgnoreOpFor.call(dec, remoteId, $.makeMap<__goscript__type.typeId, $.VarRef<__goscript_decode.decOp | null> | null>()))
		let ovfl = __goscript_decode.overflow(await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).typeString(remoteId) : Decoder.prototype.typeString.call(dec, remoteId)))
		$.assignStruct($.sliceElems((engine$ as __goscript_decode.decEngine).instr!)[$.sliceSlot((engine$ as __goscript_decode.decEngine).instr!, 0)], new __goscript_decode.decInstr({op: $.pointerValue<__goscript_decode.decOp | null>(op), field: 0, index: null, ovfl: ovfl}, true));
		;(engine$ as __goscript_decode.decEngine).numInstr = 1
		return engine
	}

	public async compileSingle(remoteId: __goscript__type.typeId, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): globalThis.Promise<[__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null, $.GoError]> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null = null! as __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null
		let err: $.GoError = null! as $.GoError
		const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
		let rt = (ut$ as __goscript__type.userTypeInfo).user
		engine = new __goscript_decode.decEngine()
		$.pointerValue<__goscript_decode.decEngine>(engine).instr = $.makeSlice<__goscript_decode.decInstr>(1, undefined, undefined, () => new __goscript_decode.decInstr(undefined, true))
		let name = (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).compatibleType(rt, remoteId, $.makeMap<reflect.Type | null, __goscript__type.typeId>()) : Decoder.prototype.compatibleType.call(dec, rt, remoteId, $.makeMap<reflect.Type | null, __goscript__type.typeId>()))) {
			let remoteType = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).typeString(remoteId) : Decoder.prototype.typeString.call(dec, remoteId))

			if (((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((ut$ as __goscript__type.userTypeInfo).base).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 20) && (remoteId != __goscript__type.tInterface)) {
				return [null, errors.New($.concatString(($.concatString(($.concatString("gob: local interface type ", name)), " can only be decoded from remote interface type; received concrete type ")), remoteType))]
			}
			return [null, errors.New($.concatString(($.concatString(($.concatString("gob: decoding into local type ", name)), ", received remote type ")), remoteType))]
		}
		let op: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decOpFor(remoteId, rt, name, $.makeMap<reflect.Type | null, $.VarRef<__goscript_decode.decOp | null> | null>()) : Decoder.prototype.decOpFor.call(dec, remoteId, rt, name, $.makeMap<reflect.Type | null, $.VarRef<__goscript_decode.decOp | null> | null>()))
		let ovfl = errors.New($.concatString(($.concatString("value for \"", name)), "\" out of range"))
		$.assignStruct($.sliceElems($.pointerValue<__goscript_decode.decEngine>(engine).instr!)[$.sliceSlot($.pointerValue<__goscript_decode.decEngine>(engine).instr!, 0)], new __goscript_decode.decInstr({op: $.pointerValue<__goscript_decode.decOp | null>(op), field: 0, index: null, ovfl: ovfl}, true))
		$.pointerValue<__goscript_decode.decEngine>(engine).numInstr = 1
		return [engine, err]
	}

	public async decIgnoreOpFor(wireId: __goscript__type.typeId, inProgress: globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decOp | null> | null> | null): globalThis.Promise<$.VarRef<__goscript_decode.decOp | null> | null> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec);

		;(dec$ as Decoder).ignoreDepth++
		__defer.defer(() => { ((): void => {
			;(dec$ as Decoder).ignoreDepth--
		})() })
		if ((dec$ as Decoder).ignoreDepth > __goscript_decode.maxIgnoreNestingDepth) {
			__goscript_error.error_(errors.New("invalid nesting depth"))
		}

		{
			let opPtr: $.VarRef<__goscript_decode.decOp | null> | null = $.mapGet<__goscript__type.typeId, $.VarRef<__goscript_decode.decOp | null> | null, $.VarRef<__goscript_decode.decOp | null> | null>(inProgress, wireId, null)[0]
			if (opPtr != null) {
				return opPtr
			}
		}
		let __goscriptTuple3: any = $.mapGet<__goscript__type.typeId, __goscript_decode.decOp | null, __goscript_decode.decOp | null>(__goscript_decode.__goscript_get_decIgnoreOpMap(), wireId, null)
		let op = $.varRef(__goscriptTuple3[0])
		let ok = __goscriptTuple3[1]
		if (!ok) {
			$.mapSet(inProgress, wireId, op)
			if (wireId == __goscript__type.tInterface) {

				op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
					await Decoder.prototype.ignoreInterface.call($.pointerValue<__goscript_decode.decoderState>(state).dec, state)
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
				return op
			}

			let wire: __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null = $.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]
			let wire$: __goscript__type.wireType = wire == null ? $.pointerTarget<__goscript__type.wireType>(wire) : (wire as any).__isVarRef === true ? (wire as any).value : (wire as any).__goValue === undefined ? (wire as any) : $.pointerTarget<__goscript__type.wireType>(wire)
			switch ((true as boolean)) {
				case wire == null:
				{
					__goscript_error.errorf("bad data: undefined type %s", $.arrayToSlice<any>([await __goscript__type.typeId__string(wireId)]))
					break
				}
				case (wire$ as __goscript__type.wireType).ArrayT != null:
				{
					let elemId = $.pointerValue<__goscript__type.arrayType>((wire$ as __goscript__type.wireType).ArrayT).Elem
					let elemOp: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decIgnoreOpFor(elemId, inProgress) : Decoder.prototype.decIgnoreOpFor.call(dec, elemId, inProgress))
					op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
						await Decoder.prototype.ignoreArray.call($.pointerValue<__goscript_decode.decoderState>(state).dec, state, $.pointerValue<__goscript_decode.decOp | null>(elemOp), $.pointerValue<__goscript__type.arrayType>((wire$ as __goscript__type.wireType).ArrayT).Len)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case (wire$ as __goscript__type.wireType).MapT != null:
				{
					let keyId = $.pointerValue<__goscript__type.mapType>($.pointerValue<__goscript__type.wireType>($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]).MapT).Key
					let elemId = $.pointerValue<__goscript__type.mapType>($.pointerValue<__goscript__type.wireType>($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]).MapT).Elem
					let keyOp: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decIgnoreOpFor(keyId, inProgress) : Decoder.prototype.decIgnoreOpFor.call(dec, keyId, inProgress))
					let elemOp: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decIgnoreOpFor(elemId, inProgress) : Decoder.prototype.decIgnoreOpFor.call(dec, elemId, inProgress))
					op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
						await Decoder.prototype.ignoreMap.call($.pointerValue<__goscript_decode.decoderState>(state).dec, state, $.pointerValue<__goscript_decode.decOp | null>(keyOp), $.pointerValue<__goscript_decode.decOp | null>(elemOp))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case (wire$ as __goscript__type.wireType).SliceT != null:
				{
					let elemId = $.pointerValue<__goscript__type.sliceType>((wire$ as __goscript__type.wireType).SliceT).Elem
					let elemOp: $.VarRef<__goscript_decode.decOp | null> | null = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decIgnoreOpFor(elemId, inProgress) : Decoder.prototype.decIgnoreOpFor.call(dec, elemId, inProgress))
					op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
						await Decoder.prototype.ignoreSlice.call($.pointerValue<__goscript_decode.decoderState>(state).dec, state, $.pointerValue<__goscript_decode.decOp | null>(elemOp))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case (wire$ as __goscript__type.wireType).StructT != null:
				{
					let [enginePtr, err] = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).getIgnoreEnginePtr(wireId) : Decoder.prototype.getIgnoreEnginePtr.call(dec, wireId))
					if (err != null) {
						__goscript_error.error_(err)
					}
					op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {

						await Decoder.prototype.ignoreStruct.call($.pointerValue<__goscript_decode.decoderState>(state).dec, $.pointerValue<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(enginePtr))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case (wire$ as __goscript__type.wireType).GobEncoderT != null:
				case (wire$ as __goscript__type.wireType).BinaryMarshalerT != null:
				case (wire$ as __goscript__type.wireType).TextMarshalerT != null:
				{
					op.value = $.functionValue((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): void => {
						Decoder.prototype.ignoreGobDecoder.call($.pointerValue<__goscript_decode.decoderState>(state).dec, state)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
			}
		}
		if (op.value == null) {
			__goscript_error.errorf("bad data: ignore can't handle type %s", $.arrayToSlice<any>([await __goscript__type.typeId__string(wireId)]))
		}
		return op
	}

	public async decOpFor(wireId: __goscript__type.typeId, rt: reflect.Type | null, name: string, inProgress: globalThis.Map<reflect.Type | null, $.VarRef<__goscript_decode.decOp | null> | null> | null): globalThis.Promise<$.VarRef<__goscript_decode.decOp | null> | null> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = await __goscript__type.userType(rt)
		let ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)

		if ((ut$ as __goscript__type.userTypeInfo).externalDec != 0) {
			return (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).gobDecodeOpFor(ut) : Decoder.prototype.gobDecodeOpFor.call(dec, ut))
		}

		{
			let opPtr: $.VarRef<__goscript_decode.decOp | null> | null = $.mapGet<reflect.Type | null, $.VarRef<__goscript_decode.decOp | null> | null, $.VarRef<__goscript_decode.decOp | null> | null>(inProgress, rt, null)[0]
			if (opPtr != null) {
				return opPtr
			}
		}
		let typ = (ut$ as __goscript__type.userTypeInfo).base
		let op: $.VarRef<__goscript_decode.decOp | null> = $.varRef(null! as __goscript_decode.decOp | null)
		let k = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.int(k) < 25) {
			op.value = $.arrayIndex(__goscript_decode.decOpTable, k)
		}
		if (op.value == null) {
			$.mapSet(inProgress, rt, op)

			{
				let t: reflect.Type | null = typ
				switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					case reflect.Array:
					{
						name = $.concatString("element of ", name)
						let elemId = $.pointerValue<__goscript__type.arrayType>($.pointerValue<__goscript__type.wireType>($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]).ArrayT).Elem
						let elemOp: $.VarRef<__goscript_decode.decOp | null> | null = await Decoder.prototype.decOpFor.call(dec, elemId, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name, inProgress)
						let ovfl = __goscript_decode.overflow(name)
						let helper = $.mapGet<reflect.Kind, __goscript_decode.decHelper | null, __goscript_decode.decHelper | null>(__goscript_dec_helpers.__goscript_get_decArrayHelper(), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
						op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
							await Decoder.prototype.decodeArray.call($.pointerValue<__goscript_decode.decoderState>(state).dec, state, $.markAsStructValue($.cloneStructValue(value)), $.pointerValue<__goscript_decode.decOp | null>(elemOp), (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ovfl, helper)
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
						break
					}
					case reflect.Map:
					{
						let keyId = $.pointerValue<__goscript__type.mapType>($.pointerValue<__goscript__type.wireType>($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]).MapT).Key
						let elemId = $.pointerValue<__goscript__type.mapType>($.pointerValue<__goscript__type.wireType>($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]).MapT).Elem
						let keyOp: $.VarRef<__goscript_decode.decOp | null> | null = await Decoder.prototype.decOpFor.call(dec, keyId, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.concatString("key of ", name), inProgress)
						let elemOp: $.VarRef<__goscript_decode.decOp | null> | null = await Decoder.prototype.decOpFor.call(dec, elemId, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.concatString("element of ", name), inProgress)
						let ovfl = __goscript_decode.overflow(name)
						op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
							await Decoder.prototype.decodeMap.call($.pointerValue<__goscript_decode.decoderState>(state).dec, t, state, $.markAsStructValue($.cloneStructValue(value)), $.pointerValue<__goscript_decode.decOp | null>(keyOp), $.pointerValue<__goscript_decode.decOp | null>(elemOp), ovfl)
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
						break
					}
					case reflect.Slice:
					{
						name = $.concatString("element of ", name)
						if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
							op.value = __goscript_decode.decUint8Slice
							break
						}
						let elemId: __goscript__type.typeId = 0
						{
							let tt = __goscript__type.builtinIdToType(wireId)
							if (tt != null) {
								elemId = $.pointerValue<__goscript__type.sliceType>(((tt as any)?.__goType === "*gob.sliceType" && (tt as any).__goValue === undefined && (tt as any).__isTypedNil !== true ? ((tt as any) as __goscript__type.sliceType | $.VarRef<__goscript__type.sliceType> | null) : $.mustTypeAssert<__goscript__type.sliceType | $.VarRef<__goscript__type.sliceType> | null>(tt, /* @__PURE__ */ $.pointerType("gob.sliceType")))).Elem
							} else {
								elemId = $.pointerValue<__goscript__type.sliceType>($.pointerValue<__goscript__type.wireType>($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]).SliceT).Elem
							}
						}
						let elemOp: $.VarRef<__goscript_decode.decOp | null> | null = await Decoder.prototype.decOpFor.call(dec, elemId, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name, inProgress)
						let ovfl = __goscript_decode.overflow(name)
						let helper = $.mapGet<reflect.Kind, __goscript_decode.decHelper | null, __goscript_decode.decHelper | null>(__goscript_dec_helpers.__goscript_get_decSliceHelper(), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
						op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
							await Decoder.prototype.decodeSlice.call($.pointerValue<__goscript_decode.decoderState>(state).dec, state, $.markAsStructValue($.cloneStructValue(value)), $.pointerValue<__goscript_decode.decOp | null>(elemOp), ovfl, helper)
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
						break
					}
					case reflect.Struct:
					{
						let __goscriptShadow0: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = await __goscript__type.userType(typ)
						let [enginePtr, err] = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).getDecEnginePtr(wireId, __goscriptShadow0) : Decoder.prototype.getDecEnginePtr.call(dec, wireId, __goscriptShadow0))
						if (err != null) {
							__goscript_error.error_(err)
						}
						op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {

							await Decoder.prototype.decodeStruct.call(dec, $.pointerValue<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(enginePtr), $.markAsStructValue($.cloneStructValue(value)))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
						break
					}
					case reflect.Interface:
					{
						op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {
							await Decoder.prototype.decodeInterface.call($.pointerValue<__goscript_decode.decoderState>(state).dec, t, state, $.markAsStructValue($.cloneStructValue(value)))
						}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
						break
					}
				}
			}
		}
		if (op.value == null) {
			__goscript_error.errorf("decode can't handle type %s", $.arrayToSlice<any>([(rt as any)]))
		}
		return op
	}

	public async decodeArray(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, length: number, ovfl: $.GoError, helper: ((state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		{
			let n = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
			if (n != $.uint64(length)) {
				__goscript_error.errorf("length mismatch in decodeArray", null)
			}
		}
		await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeArrayHelper(state, $.markAsStructValue($.cloneStructValue(value)), elemOp, length, ovfl, helper) : Decoder.prototype.decodeArrayHelper.call(dec, state, $.markAsStructValue($.cloneStructValue(value)), elemOp, length, ovfl, helper))
	}

	public async decodeArrayHelper(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, length: number, ovfl: $.GoError, helper: ((state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		if ((helper != null) && (__goscriptAwait = helper!(state, $.markAsStructValue($.cloneStructValue(value)), length, ovfl), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}
		let instr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = new __goscript_decode.decInstr({op: elemOp, field: 0, index: null, ovfl: ovfl})
		let isPtr = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22
		let ln = $.markAsStructValue($.cloneStructValue(value)).Len()
		for (let i = 0; i < length; i++) {
			if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
				__goscript_error.errorf("decoding array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
			}
			if (i >= ln) {

				$.markAsStructValue($.cloneStructValue(value)).Grow(1)
				let cp = $.markAsStructValue($.cloneStructValue(value)).Cap()
				if (cp > length) {
					cp = length
				}
				$.markAsStructValue($.cloneStructValue(value)).SetLen(cp)
				ln = cp
			}
			let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(value)).Index(i)))
			if (isPtr) {
				v = $.assignStruct(v, await __goscript_decode.decAlloc($.markAsStructValue($.cloneStructValue(v))))
			}
			void (__goscriptAwait = elemOp!(instr, state, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async decodeGobDecoder(ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		const state$: __goscript_decode.decoderState = state == null ? $.pointerTarget<__goscript_decode.decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_decode.decoderState>(state)

		let [n, ok] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).getLength() : __goscript_decode.decoderState.prototype.getLength.call(state))
		if (!ok) {
			__goscript_error.errorf("GobDecoder: length too large for buffer", null)
		}
		let b: $.Slice<number> = __goscript_decode.decBuffer.prototype.Bytes.call((state$ as __goscript_decode.decoderState).b)
		if ($.sliceLen(b) < n) {
			__goscript_error.errorf("GobDecoder: invalid data length %d: exceeds input size %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue($.sliceLen(b), "int")]))
		}
		b = $.goSlice(b, undefined, n)
		__goscript_decode.decBuffer.prototype.Drop.call((state$ as __goscript_decode.decoderState).b, n)
		let err: $.GoError = null! as $.GoError

		switch ($.pointerValue<__goscript__type.userTypeInfo>(ut).externalDec) {
			case 1:
			{
				let __goscriptTuple4: any = reflect.TypeAssert(__goscriptStatic0(), $.markAsStructValue($.cloneStructValue(value)))
				let gobDecoder = (__goscriptTuple4[0] as __goscript__type.GobDecoder | null)
				err = (__goscriptAwait = (gobDecoder !== null && (gobDecoder as any).__isVarRef !== true && (gobDecoder as any).__goValue === undefined ? (gobDecoder as Exclude<__goscript__type.GobDecoder, null>) : $.pointerValue<Exclude<__goscript__type.GobDecoder, null>>(gobDecoder)).GobDecode(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 2:
			{
				let __goscriptTuple5: any = reflect.TypeAssert(__goscriptStatic1(), $.markAsStructValue($.cloneStructValue(value)))
				let binaryUnmarshaler = (__goscriptTuple5[0] as encoding.BinaryUnmarshaler | null)
				err = (__goscriptAwait = (binaryUnmarshaler !== null && (binaryUnmarshaler as any).__isVarRef !== true && (binaryUnmarshaler as any).__goValue === undefined ? (binaryUnmarshaler as Exclude<encoding.BinaryUnmarshaler, null>) : $.pointerValue<Exclude<encoding.BinaryUnmarshaler, null>>(binaryUnmarshaler)).UnmarshalBinary(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case 3:
			{
				let __goscriptTuple6: any = reflect.TypeAssert(__goscriptStatic2(), $.markAsStructValue($.cloneStructValue(value)))
				let textUnmarshaler = (__goscriptTuple6[0] as encoding.TextUnmarshaler | null)
				err = (__goscriptAwait = (textUnmarshaler !== null && (textUnmarshaler as any).__isVarRef !== true && (textUnmarshaler as any).__goValue === undefined ? (textUnmarshaler as Exclude<encoding.TextUnmarshaler, null>) : $.pointerValue<Exclude<encoding.TextUnmarshaler, null>>(textUnmarshaler)).UnmarshalText(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
		}
		if (err != null) {
			__goscript_error.error_(err)
		}
	}

	public async decodeIgnoredValue(wireId: __goscript__type.typeId): globalThis.Promise<void> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let enginePtr: $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null = null! as $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null
		let __goscriptTuple7: any = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).getIgnoreEnginePtr(wireId) : Decoder.prototype.getIgnoreEnginePtr.call(dec, wireId))
		enginePtr = __goscriptTuple7[0];
		;(dec$ as Decoder).err = __goscriptTuple7[1]
		if ((dec$ as Decoder).err != null) {
			return
		}
		let wire: __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null = $.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]
		if ((wire != null) && ($.pointerValue<__goscript__type.wireType>(wire).StructT != null)) {
			await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).ignoreStruct($.pointerValue<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(enginePtr)) : Decoder.prototype.ignoreStruct.call(dec, $.pointerValue<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(enginePtr)))
		} else {
			await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).ignoreSingle($.pointerValue<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(enginePtr)) : Decoder.prototype.ignoreSingle.call(dec, $.pointerValue<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(enginePtr)))
		}
	}

	public async decodeInterface(ityp: reflect.Type | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		const state$: __goscript_decode.decoderState = state == null ? $.pointerTarget<__goscript_decode.decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_decode.decoderState>(state)

		let nr = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
		if (nr > 2147483648n) {
			__goscript_error.errorf("invalid type name length %d", $.arrayToSlice<any>([$.basicInterfaceValue(nr, "uint64")]))
		}
		if (nr > $.uint64(__goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b))) {
			__goscript_error.errorf("invalid type name length %d: exceeds input size", $.arrayToSlice<any>([$.basicInterfaceValue(nr, "uint64")]))
		}
		let n = $.int(nr)
		let name: $.Slice<number> = $.goSlice(__goscript_decode.decBuffer.prototype.Bytes.call((state$ as __goscript_decode.decoderState).b), undefined, n)
		__goscript_decode.decBuffer.prototype.Drop.call((state$ as __goscript_decode.decoderState).b, n)

		if ($.sliceLen(name) == 0) {

			$.markAsStructValue($.cloneStructValue(value)).SetZero()
			return
		}
		if ($.sliceLen(name) > 1024) {
			__goscript_error.errorf("name too long (%d bytes): %.20q...", $.arrayToSlice<any>([$.basicInterfaceValue($.sliceLen(name), "int"), $.interfaceValue(name, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))
		}

		let [typi, ok] = await $.pointerValue<sync.Map>(__goscript__type.nameToConcreteType).Load($.bytesToString(name))
		if (!ok) {
			__goscript_error.errorf("name not registered for interface: %q", $.arrayToSlice<any>([$.interfaceValue(name, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))
		}
		let typ = $.mustTypeAssert<reflect.Type | null>(typi, "reflect.Type")

		let concreteId = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeTypeSequence(true) : Decoder.prototype.decodeTypeSequence.call(dec, true))
		if (concreteId < 0) {
			__goscript_error.error_((dec$ as Decoder).err)
		}

		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))

		let v = __goscript_decode.allocValue(typ)
		await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeValue(concreteId, $.markAsStructValue($.cloneStructValue(v))) : Decoder.prototype.decodeValue.call(dec, concreteId, $.markAsStructValue($.cloneStructValue(v))))
		if ((dec$ as Decoder).err != null) {
			__goscript_error.error_((dec$ as Decoder).err)
		}

		if (!(__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).AssignableTo($.pointerValueOrNil(ityp)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			__goscript_error.errorf("%s is not assignable to type %s", $.arrayToSlice<any>([(typ as any), (ityp as any)]))
		}

		$.markAsStructValue($.cloneStructValue(value)).Set($.markAsStructValue($.cloneStructValue(v)))
	}

	public async decodeMap(mtyp: reflect.Type | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value, keyOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, ovfl: $.GoError): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let n = $.int((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
		if ($.markAsStructValue($.cloneStructValue(value)).IsNil()) {

			let safe = saferio.SliceCapWithSize($.uint64((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (mtyp !== null && (mtyp as any).__isVarRef !== true && (mtyp as any).__goValue === undefined ? (mtyp as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mtyp)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.uint64(n))
			if (safe < 0) {
				safe = 1
			}
			$.markAsStructValue($.cloneStructValue(value)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMapWithSize($.pointerValueOrNil(mtyp)!, safe))))
		}
		let keyIsPtr = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (mtyp !== null && (mtyp as any).__isVarRef !== true && (mtyp as any).__goValue === undefined ? (mtyp as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mtyp)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22
		let elemIsPtr = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (mtyp !== null && (mtyp as any).__isVarRef !== true && (mtyp as any).__goValue === undefined ? (mtyp as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mtyp)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22
		let keyInstr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = new __goscript_decode.decInstr({op: keyOp, field: 0, index: null, ovfl: ovfl})
		let elemInstr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = new __goscript_decode.decInstr({op: elemOp, field: 0, index: null, ovfl: ovfl})
		let keyP = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (mtyp !== null && (mtyp as any).__isVarRef !== true && (mtyp as any).__goValue === undefined ? (mtyp as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mtyp)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
		let elemP = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (mtyp !== null && (mtyp as any).__isVarRef !== true && (mtyp as any).__goValue === undefined ? (mtyp as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mtyp)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
		for (let i = 0; i < n; i++) {
			let key = await __goscript_decode.decodeIntoValue(state, keyOp, keyIsPtr, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(keyP)).Elem())), keyInstr)
			let elem = await __goscript_decode.decodeIntoValue(state, elemOp, elemIsPtr, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(elemP)).Elem())), elemInstr)
			$.markAsStructValue($.cloneStructValue(value)).SetMapIndex($.markAsStructValue($.cloneStructValue(key)), $.markAsStructValue($.cloneStructValue(elem)))
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(keyP)).Elem())).SetZero()
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(elemP)).Elem())).SetZero()
		}
	}

	public async decodeSingle(engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null, value: reflect.Value): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		let state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null = (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).newDecoderState($.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")) : Decoder.prototype.newDecoderState.call(dec, $.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")))
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (d: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null) => __receiver.freeDecoderState(d))($.pointerValue<Decoder>(dec)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decoderState")], results: [] } as $.FunctionTypeInfo), "encoding/gob.(*Decoder).freeDecoderState-fm")
		const __goscriptDeferArg1 = state
		__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg1) })
		$.pointerValue<__goscript_decode.decoderState>(state).fieldnum = 0
		if ((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)) != 0n) {
			__goscript_error.errorf("decode: corrupted data: non-zero delta for singleton", null)
		}
		let instr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = $.indexRef($.pointerValue<__goscript_decode.decEngine>(engine).instr!, 0)
		void (__goscriptAwait = $.pointerValue<__goscript_decode.decInstr>(instr).op!(instr, state, $.markAsStructValue($.cloneStructValue(value))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async decodeSlice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, ovfl: $.GoError, helper: ((state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let u = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
		let typ = $.markAsStructValue($.cloneStructValue(value)).Type()
		let size = $.uint64((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let nBytes = $.uint64Mul(u, size)
		let n = $.int(u)

		if ((((n < 0) || ($.uint64(n) != u)) || (nBytes > 8589934592n)) || ((size > 0n) && (($.uint64Div(nBytes, size)) != u))) {

			__goscript_error.errorf("%s slice too big: %d elements of %d bytes", $.arrayToSlice<any>([((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), $.basicInterfaceValue(u, "uint64"), $.basicInterfaceValue(size, "uint64")]))
		}
		if ($.markAsStructValue($.cloneStructValue(value)).Cap() < n) {
			let safe = saferio.SliceCapWithSize(size, $.uint64(n))
			if (safe < 0) {
				__goscript_error.errorf("%s slice too big: %d elements of %d bytes", $.arrayToSlice<any>([((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), $.basicInterfaceValue(u, "uint64"), $.basicInterfaceValue(size, "uint64")]))
			}
			$.markAsStructValue($.cloneStructValue(value)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil(typ)!, safe, safe))))
		} else {
			$.markAsStructValue($.cloneStructValue(value)).SetLen(n)
		}
		await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeArrayHelper(state, $.markAsStructValue($.cloneStructValue(value)), elemOp, n, ovfl, helper) : Decoder.prototype.decodeArrayHelper.call(dec, state, $.markAsStructValue($.cloneStructValue(value)), elemOp, n, ovfl, helper))
	}

	public async decodeStruct(engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null, value: reflect.Value): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		const engine$: __goscript_decode.decEngine = engine == null ? $.pointerTarget<__goscript_decode.decEngine>(engine) : (engine as any).__isVarRef === true ? (engine as any).value : (engine as any).__goValue === undefined ? (engine as any) : $.pointerTarget<__goscript_decode.decEngine>(engine)
		let state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null = (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).newDecoderState($.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")) : Decoder.prototype.newDecoderState.call(dec, $.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")))
		let state$: __goscript_decode.decoderState = state == null ? $.pointerTarget<__goscript_decode.decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_decode.decoderState>(state)
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (d: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null) => __receiver.freeDecoderState(d))($.pointerValue<Decoder>(dec)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decoderState")], results: [] } as $.FunctionTypeInfo), "encoding/gob.(*Decoder).freeDecoderState-fm")
		const __goscriptDeferArg2 = state
		__defer.defer(() => { __goscriptDeferCallee2(__goscriptDeferArg2) });
		;(state$ as __goscript_decode.decoderState).fieldnum = -1
		while (__goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b) > 0) {
			let delta = $.int((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
			if (delta < 0) {
				__goscript_error.errorf("decode: corrupted data: negative delta", null)
			}
			if (delta == 0) {
				break
			}
			if ((state$ as __goscript_decode.decoderState).fieldnum >= ($.sliceLen((engine$ as __goscript_decode.decEngine).instr) - delta)) {
				__goscript_error.error_(__goscript_decode.errRange)
			}
			let fieldnum = (state$ as __goscript_decode.decoderState).fieldnum + delta
			let instr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = $.indexRef((engine$ as __goscript_decode.decEngine).instr!, fieldnum)
			let instr$: __goscript_decode.decInstr = instr == null ? $.pointerTarget<__goscript_decode.decInstr>(instr) : (instr as any).__isVarRef === true ? (instr as any).value : (instr as any).__goValue === undefined ? (instr as any) : $.pointerTarget<__goscript_decode.decInstr>(instr)
			let field: reflect.Value = $.markAsStructValue(new reflect.Value())
			if ((instr$ as __goscript_decode.decInstr).index != null) {

				field = $.assignStruct(field, $.markAsStructValue($.cloneStructValue(value)).FieldByIndex((instr$ as __goscript_decode.decInstr).index))
				if ($.markAsStructValue($.cloneStructValue(field)).Kind() == 22) {
					field = $.assignStruct(field, await __goscript_decode.decAlloc($.markAsStructValue($.cloneStructValue(field))))
				}
			}
			void (__goscriptAwait = (instr$ as __goscript_decode.decInstr).op!(instr, state, $.markAsStructValue($.cloneStructValue(field))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(state$ as __goscript_decode.decoderState).fieldnum = fieldnum
		}
	}

	public async decodeTypeSequence(isInterface: boolean): globalThis.Promise<__goscript__type.typeId> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let firstMessage = true
		while ((dec$ as Decoder).err == null) {
			if ((dec$ as Decoder).buf.Len() == 0) {
				if (!await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).recvMessage() : Decoder.prototype.recvMessage.call(dec))) {
					// We can only return io.EOF if the input was empty.
					// If we read one or more type spec messages,
					// require a data item message to follow.
					// If we hit an EOF before that, then give ErrUnexpectedEOF.
					if (!firstMessage && ($.comparableEqual((dec$ as Decoder).err, io.EOF))) {
						;(dec$ as Decoder).err = io.ErrUnexpectedEOF
					}
					break
				}
			}
			// Receive a type id.
			let id = $.int(await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).nextInt() : Decoder.prototype.nextInt.call(dec)), 32)
			if (id >= 0) {
				// Value follows.
				return id
			}
			// Type definition for (-id) follows.
			await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).recvType($.int(-id, 32)) : Decoder.prototype.recvType.call(dec, $.int(-id, 32)))
			if ((dec$ as Decoder).err != null) {
				break
			}
			// When decoding an interface, after a type there may be a
			// DelimitedValue still in the buffer. Skip its count.
			// (Alternatively, the buffer is empty and the byte count
			// will be absorbed by recvMessage.)
			if ((dec$ as Decoder).buf.Len() > 0) {
				if (!isInterface) {
					;(dec$ as Decoder).err = errors.New("extra data in buffer")
					break
				}
				await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).nextUint() : Decoder.prototype.nextUint.call(dec))
			}
			firstMessage = false
		}
		return -1
	}

	public async decodeValue(wireId: __goscript__type.typeId, value: reflect.Value): globalThis.Promise<void> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const __defer = new $.DisposableStack()
		try {
			const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
			const __goscriptDeferArg3 = $.fieldRef((dec$ as Decoder)._fields, "err")
			__defer.defer(() => { __goscript_error.catchError(__goscriptDeferArg3) })

			if (!$.markAsStructValue($.cloneStructValue(value)).IsValid()) {
				await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeIgnoredValue(wireId) : Decoder.prototype.decodeIgnoredValue.call(dec, wireId))
				return
			}

			let ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = await __goscript__type.userType($.markAsStructValue($.cloneStructValue(value)).Type())
			let ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
			let base = (ut$ as __goscript__type.userTypeInfo).base
			let enginePtr: $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null = null! as $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null
			let __goscriptTuple8: any = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).getDecEnginePtr(wireId, ut) : Decoder.prototype.getDecEnginePtr.call(dec, wireId, ut))
			enginePtr = __goscriptTuple8[0];
			;(dec$ as Decoder).err = __goscriptTuple8[1]
			if ((dec$ as Decoder).err != null) {
				return
			}
			value = $.assignStruct(value, await __goscript_decode.decAlloc($.markAsStructValue($.cloneStructValue(value))))
			let engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null = $.pointerValue<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(enginePtr)
			{
				let st: reflect.Type | null = base
				if (((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) && ((ut$ as __goscript__type.userTypeInfo).externalDec == 0)) {
					let wt: __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null = $.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]
					if (((($.pointerValue<__goscript_decode.decEngine>(engine).numInstr == 0) && ((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0)) && (wt != null)) && ($.sliceLen($.pointerValue<__goscript__type.structType>($.pointerValue<__goscript__type.wireType>(wt).StructT).Field) > 0)) {
						let name = (__goscriptAwait = (base !== null && (base as any).__isVarRef !== true && (base as any).__goValue === undefined ? (base as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(base)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						__goscript_error.errorf("type mismatch: no fields matched compiling decoder for %s", $.arrayToSlice<any>([name]))
					}
					await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeStruct(engine, $.markAsStructValue($.cloneStructValue(value))) : Decoder.prototype.decodeStruct.call(dec, engine, $.markAsStructValue($.cloneStructValue(value))))
				} else {
					await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeSingle(engine, $.markAsStructValue($.cloneStructValue(value))) : Decoder.prototype.decodeSingle.call(dec, engine, $.markAsStructValue($.cloneStructValue(value))))
				}
			}
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public freeDecoderState(d: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null): void {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		$.pointerValue<__goscript_decode.decoderState>(d).next = (dec$ as Decoder).freeList;
		;(dec$ as Decoder).freeList = d
	}

	public async getDecEnginePtr(remoteId: __goscript__type.typeId, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): globalThis.Promise<[$.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null, $.GoError]> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		let enginePtr: $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null = null! as $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null
		let err: $.GoError = null! as $.GoError
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let rt = $.pointerValue<__goscript__type.userTypeInfo>(ut).user
		let __goscriptTuple9: any = $.mapGet<reflect.Type | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null>((dec$ as Decoder).decoderCache, rt, null)
		let decoderMap: globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (!ok) {
			decoderMap = $.makeMap<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null>()
			$.mapSet((dec$ as Decoder).decoderCache, rt, decoderMap)
		}
		{
			let __goscriptTuple10: any = $.mapGet<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null>(decoderMap, remoteId, null)
			enginePtr = __goscriptTuple10[0]
			ok = __goscriptTuple10[1]
			if (!ok) {

				enginePtr = $.varRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(null! as __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null)
				$.mapSet(decoderMap, remoteId, enginePtr)
				let __goscriptTuple11: any = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).compileDec(remoteId, ut) : Decoder.prototype.compileDec.call(dec, remoteId, ut))
				enginePtr!.value = __goscriptTuple11[0]
				err = __goscriptTuple11[1]
				if (err != null) {
					$.deleteMapEntry(decoderMap, remoteId)
				}
			}
		}
		return [enginePtr, err]
	}

	public async getIgnoreEnginePtr(wireId: __goscript__type.typeId): globalThis.Promise<[$.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null, $.GoError]> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		let enginePtr: $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null = null! as $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null
		let err: $.GoError = null! as $.GoError
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let ok: boolean = false
		{
			let __goscriptTuple12: any = $.mapGet<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null>((dec$ as Decoder).ignorerCache, wireId, null)
			enginePtr = __goscriptTuple12[0]
			ok = __goscriptTuple12[1]
			if (!ok) {

				enginePtr = $.varRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null>(null! as __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null)
				$.mapSet((dec$ as Decoder).ignorerCache, wireId, enginePtr)
				let wire: __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null = $.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, wireId, null)[0]
				if ((wire != null) && ($.pointerValue<__goscript__type.wireType>(wire).StructT != null)) {
					let __goscriptTuple13: any = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).compileDec(wireId, await __goscript__type.userType(__goscript_decode.emptyStructType)) : Decoder.prototype.compileDec.call(dec, wireId, await __goscript__type.userType(__goscript_decode.emptyStructType)))
					enginePtr!.value = __goscriptTuple13[0]
					err = __goscriptTuple13[1]
				} else {
					enginePtr!.value = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).compileIgnoreSingle(wireId) : Decoder.prototype.compileIgnoreSingle.call(dec, wireId))
				}
				if (err != null) {
					$.deleteMapEntry((dec$ as Decoder).ignorerCache, wireId)
				}
			}
		}
		return [enginePtr, err]
	}

	public async gobDecodeOpFor(ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): globalThis.Promise<$.VarRef<__goscript_decode.decOp | null> | null> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
		let rcvrType = (ut$ as __goscript__type.userTypeInfo).user
		if ((ut$ as __goscript__type.userTypeInfo).decIndir == -1) {
			rcvrType = reflect.PointerTo($.pointerValueOrNil(rcvrType)!)
		} else {
			if ((ut$ as __goscript__type.userTypeInfo).decIndir > 0) {
				for (let i = 0; i < (ut$ as __goscript__type.userTypeInfo).decIndir; i = ((i + 1) << 24 >> 24)) {
					rcvrType = (__goscriptAwait = (rcvrType !== null && (rcvrType as any).__isVarRef !== true && (rcvrType as any).__goValue === undefined ? (rcvrType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rcvrType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
		let op: $.VarRef<__goscript_decode.decOp | null> = $.varRef(null! as __goscript_decode.decOp | null)
		op.value = $.functionValue(async (i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, value: reflect.Value): globalThis.Promise<void> => {

			if (($.markAsStructValue($.cloneStructValue(value)).Kind() != 22) && ((__goscriptAwait = (rcvrType !== null && (rcvrType as any).__isVarRef !== true && (rcvrType as any).__goValue === undefined ? (rcvrType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rcvrType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22)) {
				value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(value)).Addr())
			}
			await Decoder.prototype.decodeGobDecoder.call($.pointerValue<__goscript_decode.decoderState>(state).dec, ut, state, $.markAsStructValue($.cloneStructValue(value)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
		return op
	}

	public async ignoreArray(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, length: number): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		{
			let n = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
			if (n != $.uint64(length)) {
				__goscript_error.errorf("length mismatch in ignoreArray", null)
			}
		}
		await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).ignoreArrayHelper(state, elemOp, length) : Decoder.prototype.ignoreArrayHelper.call(dec, state, elemOp, length))
	}

	public async ignoreArrayHelper(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, length: number): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let instr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = (() => { const __goscriptLiteralField0 = errors.New("no error"); return new __goscript_decode.decInstr({op: elemOp, field: 0, index: null, ovfl: __goscriptLiteralField0}) })()
		for (let i = 0; i < length; i++) {
			if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
				__goscript_error.errorf("decoding array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
			}
			void (__goscriptAwait = elemOp!(instr, state, $.markAsStructValue($.cloneStructValue(__goscript_decode.noValue))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public ignoreGobDecoder(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null): void {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		const state$: __goscript_decode.decoderState = state == null ? $.pointerTarget<__goscript_decode.decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_decode.decoderState>(state)

		let [n, ok] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).getLength() : __goscript_decode.decoderState.prototype.getLength.call(state))
		if (!ok) {
			__goscript_error.errorf("GobDecoder: length too large for buffer", null)
		}
		let bn = __goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b)
		if (bn < n) {
			__goscript_error.errorf("GobDecoder: invalid data length %d: exceeds input size %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue(bn, "int")]))
		}
		__goscript_decode.decBuffer.prototype.Drop.call((state$ as __goscript_decode.decoderState).b, n)
	}

	public async ignoreInterface(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		const state$: __goscript_decode.decoderState = state == null ? $.pointerTarget<__goscript_decode.decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_decode.decoderState>(state)

		let [n, ok] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).getLength() : __goscript_decode.decoderState.prototype.getLength.call(state))
		if (!ok) {
			__goscript_error.errorf("bad interface encoding: name too large for buffer", null)
		}
		let bn = __goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b)
		if (bn < n) {
			__goscript_error.errorf("invalid interface value length %d: exceeds input size %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue(bn, "int")]))
		}
		__goscript_decode.decBuffer.prototype.Drop.call((state$ as __goscript_decode.decoderState).b, n)
		let id = await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).decodeTypeSequence(true) : Decoder.prototype.decodeTypeSequence.call(dec, true))
		if (id < 0) {
			__goscript_error.error_($.pointerValue<Decoder>(dec).err)
		}

		let __goscriptTuple14: any = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).getLength() : __goscript_decode.decoderState.prototype.getLength.call(state))
		n = __goscriptTuple14[0]
		ok = __goscriptTuple14[1]
		if (!ok) {
			__goscript_error.errorf("bad interface encoding: data length too large for buffer", null)
		}
		__goscript_decode.decBuffer.prototype.Drop.call((state$ as __goscript_decode.decoderState).b, n)
	}

	public async ignoreMap(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, keyOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let n = $.int((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
		let keyInstr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = (() => { const __goscriptLiteralField1 = errors.New("no error"); return new __goscript_decode.decInstr({op: keyOp, field: 0, index: null, ovfl: __goscriptLiteralField1}) })()
		let elemInstr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = (() => { const __goscriptLiteralField2 = errors.New("no error"); return new __goscript_decode.decInstr({op: elemOp, field: 0, index: null, ovfl: __goscriptLiteralField2}) })()
		for (let i = 0; i < n; i++) {
			void (__goscriptAwait = keyOp!(keyInstr, state, $.markAsStructValue($.cloneStructValue(__goscript_decode.noValue))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = elemOp!(elemInstr, state, $.markAsStructValue($.cloneStructValue(__goscript_decode.noValue))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async ignoreSingle(engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		let state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null = (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).newDecoderState($.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")) : Decoder.prototype.newDecoderState.call(dec, $.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")))
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => (d: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null) => __receiver.freeDecoderState(d))($.pointerValue<Decoder>(dec)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decoderState")], results: [] } as $.FunctionTypeInfo), "encoding/gob.(*Decoder).freeDecoderState-fm")
		const __goscriptDeferArg4 = state
		__defer.defer(() => { __goscriptDeferCallee3(__goscriptDeferArg4) })
		$.pointerValue<__goscript_decode.decoderState>(state).fieldnum = 0
		let delta = $.int((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
		if (delta != 0) {
			__goscript_error.errorf("decode: corrupted data: non-zero delta for singleton", null)
		}
		let instr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = $.indexRef($.pointerValue<__goscript_decode.decEngine>(engine).instr!, 0)
		void (__goscriptAwait = $.pointerValue<__goscript_decode.decInstr>(instr).op!(instr, state, $.markAsStructValue($.cloneStructValue(__goscript_decode.noValue))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async ignoreSlice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, elemOp: ((i: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null, state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value) => void) | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		await Decoder.prototype.ignoreArrayHelper.call(dec, state, elemOp, $.int((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))))
	}

	public async ignoreStruct(engine: __goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null): globalThis.Promise<void> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		const engine$: __goscript_decode.decEngine = engine == null ? $.pointerTarget<__goscript_decode.decEngine>(engine) : (engine as any).__isVarRef === true ? (engine as any).value : (engine as any).__goValue === undefined ? (engine as any) : $.pointerTarget<__goscript_decode.decEngine>(engine)
		let state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null = (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).newDecoderState($.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")) : Decoder.prototype.newDecoderState.call(dec, $.fieldRef($.pointerValue<Decoder>(dec)._fields, "buf")))
		let state$: __goscript_decode.decoderState = state == null ? $.pointerTarget<__goscript_decode.decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_decode.decoderState>(state)
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => (d: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null) => __receiver.freeDecoderState(d))($.pointerValue<Decoder>(dec)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.decoderState")], results: [] } as $.FunctionTypeInfo), "encoding/gob.(*Decoder).freeDecoderState-fm")
		const __goscriptDeferArg5 = state
		__defer.defer(() => { __goscriptDeferCallee4(__goscriptDeferArg5) });
		;(state$ as __goscript_decode.decoderState).fieldnum = -1
		while (__goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b) > 0) {
			let delta = $.int((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
			if (delta < 0) {
				__goscript_error.errorf("ignore decode: corrupted data: negative delta", null)
			}
			if (delta == 0) {
				break
			}
			let fieldnum = (state$ as __goscript_decode.decoderState).fieldnum + delta
			if (fieldnum >= $.sliceLen((engine$ as __goscript_decode.decEngine).instr)) {
				__goscript_error.error_(__goscript_decode.errRange)
			}
			let instr: __goscript_decode.decInstr | $.VarRef<__goscript_decode.decInstr> | null = $.indexRef((engine$ as __goscript_decode.decEngine).instr!, fieldnum)
			void (__goscriptAwait = $.pointerValue<__goscript_decode.decInstr>(instr).op!(instr, state, $.markAsStructValue($.cloneStructValue(__goscript_decode.noValue))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(state$ as __goscript_decode.decoderState).fieldnum = fieldnum
		}
	}

	public newDecoderState(buf: __goscript_decode.decBuffer | $.VarRef<__goscript_decode.decBuffer> | null): __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let d: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null = (dec$ as Decoder).freeList
		if (d == null) {
			d = new __goscript_decode.decoderState()
			$.pointerValue<__goscript_decode.decoderState>(d).dec = dec
		} else {
			;(dec$ as Decoder).freeList = $.pointerValue<__goscript_decode.decoderState>(d).next
		}
		$.pointerValue<__goscript_decode.decoderState>(d).b = buf
		return d
	}

	public async nextInt(): globalThis.Promise<bigint> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let [n, , err] = await __goscript_decode.decodeUintReader($.interfaceValue<io.Reader | null>($.fieldRef((dec$ as Decoder)._fields, "buf"), "*gob.decBuffer", /* @__PURE__ */ $.pointerType("gob.decBuffer")), (dec$ as Decoder).countBuf)
		if (err != null) {
			;(dec$ as Decoder).err = err
		}
		return toInt(n)
	}

	public async nextUint(): globalThis.Promise<bigint> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		let [n, , err] = await __goscript_decode.decodeUintReader($.interfaceValue<io.Reader | null>($.fieldRef((dec$ as Decoder)._fields, "buf"), "*gob.decBuffer", /* @__PURE__ */ $.pointerType("gob.decBuffer")), (dec$ as Decoder).countBuf)
		if (err != null) {
			;(dec$ as Decoder).err = err
		}
		return n
	}

	public async readMessage(nbytes: number): globalThis.Promise<void> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		if ((dec$ as Decoder).buf.Len() != 0) {
			// The buffer should always be empty now.
			$.panic("non-empty decoder buffer")
		}
		// Read the data
		let buf: $.Slice<number> = null! as $.Slice<number>
		let __goscriptTuple15: any = await saferio.ReadData((dec$ as Decoder).r, $.uint64(nbytes))
		buf = __goscriptTuple15[0];
		;(dec$ as Decoder).err = __goscriptTuple15[1]
		void (dec$ as Decoder).buf.SetBytes(buf)
		if ($.comparableEqual((dec$ as Decoder).err, io.EOF)) {
			;(dec$ as Decoder).err = io.ErrUnexpectedEOF
		}
	}

	public async recvMessage(): globalThis.Promise<boolean> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		// Read a count.
		let [nbytes, , err] = await __goscript_decode.decodeUintReader((dec$ as Decoder).r, (dec$ as Decoder).countBuf)
		if (err != null) {
			;(dec$ as Decoder).err = err
			return false
		}
		if (nbytes >= 8589934592n) {
			;(dec$ as Decoder).err = errBadCount
			return false
		}
		await (dec !== null && (dec as any).__isVarRef !== true && (dec as any).__goValue === undefined ? ((dec as any) as Decoder).readMessage($.int(nbytes)) : Decoder.prototype.readMessage.call(dec, $.int(nbytes)))
		return (dec$ as Decoder).err == null
	}

	public async recvType(id: __goscript__type.typeId): globalThis.Promise<void> {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
		// Have we already seen this type? That's an error
		if ((id < 64) || ($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>((dec$ as Decoder).wireType, id, null)[0] != null)) {
			;(dec$ as Decoder).err = errors.New("gob: duplicate type received")
			return
		}

		// Type:
		let wire: __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null = new __goscript__type.wireType()
		await Decoder.prototype.decodeValue.call(dec, (await __goscript__type.__goscript_init_tWireType(), __goscript__type.__goscript_get_tWireType()), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(wire, "*gob.wireType", /* @__PURE__ */ $.pointerType("gob.wireType"))))))
		if ((dec$ as Decoder).err != null) {
			return
		}
		// Remember we've seen this type.
		$.mapSet((dec$ as Decoder).wireType, id, wire)
	}

	public async typeString(remoteId: __goscript__type.typeId): globalThis.Promise<string> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<sync.Mutex>(__goscript__type.typeLock).Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.Mutex>(__goscript__type.typeLock)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		{
			let t = __goscript__type.idToType(remoteId)
			if (t != null) {

				return (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<__goscript__type.gobType, null>) : $.pointerValue<Exclude<__goscript__type.gobType, null>>(t)).string(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript__type.wireType.prototype.string.call($.mapGet<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>($.pointerValue<Decoder>(dec).wireType, remoteId, null)[0])
	}

	static __typeInfo = $.registerStructType(
		"gob.Decoder",
		() => new Decoder(),
		() => [$.methodSignature("Decode", [["e", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("DecodeValue", [["v", "reflect.Value"]], ["error"], true), $.methodSignature("compatibleType", [["fr", "reflect.Type"], ["fw", /* @__PURE__ */ $.basicType("int32", "gob.typeId")], ["inProgress", /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.basicType("int32", "gob.typeId"))]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("compileDec", [["remoteId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")]], [["engine", /* @__PURE__ */ $.pointerType("gob.decEngine")], ["err", "error"]], true), $.methodSignature("compileIgnoreSingle", [["remoteId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [/* @__PURE__ */ $.pointerType("gob.decEngine")], true), $.methodSignature("compileSingle", [["remoteId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")]], [["engine", /* @__PURE__ */ $.pointerType("gob.decEngine")], ["err", "error"]], true), $.methodSignature("decIgnoreOpFor", [["wireId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")], ["inProgress", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)))]], [/* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))], true), $.methodSignature("decOpFor", [["wireId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")], ["rt", "reflect.Type"], ["name", /* @__PURE__ */ $.basicType("string")], ["inProgress", /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)))]], [/* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))], true), $.methodSignature("decodeArray", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["value", "reflect.Value"], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["length", /* @__PURE__ */ $.basicType("int")], ["ovfl", "error"], ["helper", ({ kind: $.TypeKind.Function, name: "gob.decHelper", params: [/* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value", /* @__PURE__ */ $.basicType("int"), "error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("decodeArrayHelper", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["value", "reflect.Value"], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["length", /* @__PURE__ */ $.basicType("int")], ["ovfl", "error"], ["helper", ({ kind: $.TypeKind.Function, name: "gob.decHelper", params: [/* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value", /* @__PURE__ */ $.basicType("int"), "error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("decodeGobDecoder", [["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")], ["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["value", "reflect.Value"]], [], true), $.methodSignature("decodeIgnoredValue", [["wireId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true), $.methodSignature("decodeInterface", [["ityp", "reflect.Type"], ["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["value", "reflect.Value"]], [], true), $.methodSignature("decodeMap", [["mtyp", "reflect.Type"], ["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["value", "reflect.Value"], ["keyOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["ovfl", "error"]], [], true), $.methodSignature("decodeSingle", [["engine", /* @__PURE__ */ $.pointerType("gob.decEngine")], ["value", "reflect.Value"]], [], true), $.methodSignature("decodeSlice", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["value", "reflect.Value"], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["ovfl", "error"], ["helper", ({ kind: $.TypeKind.Function, name: "gob.decHelper", params: [/* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value", /* @__PURE__ */ $.basicType("int"), "error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("decodeStruct", [["engine", /* @__PURE__ */ $.pointerType("gob.decEngine")], ["value", "reflect.Value"]], [], true), $.methodSignature("decodeTypeSequence", [["isInterface", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int32", "gob.typeId")], true), $.methodSignature("decodeValue", [["wireId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")], ["value", "reflect.Value"]], [], true), $.methodSignature("freeDecoderState", [["d", /* @__PURE__ */ $.pointerType("gob.decoderState")]], [], true), $.methodSignature("getDecEnginePtr", [["remoteId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")]], [["enginePtr", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("gob.decEngine"))], ["err", "error"]], true), $.methodSignature("getIgnoreEnginePtr", [["wireId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [["enginePtr", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("gob.decEngine"))], ["err", "error"]], true), $.methodSignature("gobDecodeOpFor", [["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")]], [/* @__PURE__ */ $.pointerType(({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))], true), $.methodSignature("ignoreArray", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["length", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("ignoreArrayHelper", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["length", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("ignoreGobDecoder", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")]], [], true), $.methodSignature("ignoreInterface", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")]], [], true), $.methodSignature("ignoreMap", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["keyOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("ignoreSingle", [["engine", /* @__PURE__ */ $.pointerType("gob.decEngine")]], [], true), $.methodSignature("ignoreSlice", [["state", /* @__PURE__ */ $.pointerType("gob.decoderState")], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("ignoreStruct", [["engine", /* @__PURE__ */ $.pointerType("gob.decEngine")]], [], true), $.methodSignature("newDecoderState", [["buf", /* @__PURE__ */ $.pointerType("gob.decBuffer")]], [/* @__PURE__ */ $.pointerType("gob.decoderState")], true), $.methodSignature("nextInt", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("nextUint", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("readMessage", [["nbytes", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("recvMessage", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("recvType", [["id", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [], true), $.methodSignature("typeString", [["remoteId", /* @__PURE__ */ $.basicType("int32", "gob.typeId")]], [/* @__PURE__ */ $.basicType("string")], true)],
		Decoder,
		() => [/* @__PURE__ */ $.structField("mutex", "sync.Mutex", [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("r", "io.Reader", [1], 8, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("buf", "gob.decBuffer", [2], 24, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("wireType", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.pointerType("gob.wireType")), [3], 56, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("decoderCache", /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("gob.decEngine")))), [4], 64, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("ignorerCache", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "gob.typeId"), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("gob.decEngine"))), [5], 72, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("freeList", /* @__PURE__ */ $.pointerType("gob.decoderState"), [6], 80, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("countBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 88, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("err", "error", [8], 112, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("ignoreDepth", /* @__PURE__ */ $.basicType("int"), [9], 128, false, { pkgPath: "encoding/gob" })]
	)
}

export const tooBig: number = 8589934592

export function NewDecoder(r: io.Reader | null): Decoder | $.VarRef<Decoder> | null {
	let dec: Decoder | $.VarRef<Decoder> | null = new Decoder()
	let dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
	// We use the ability to read bytes as a plausible surrogate for buffering.
	{
		let [, ok] = $.typeAssertTuple<io.ByteReader | null>(r, "io.ByteReader")
		if (!ok) {
			r = $.interfaceValue<io.Reader | null>(bufio.NewReader(r), "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader"))
		}
	}
	;(dec$ as Decoder).r = r;
	;(dec$ as Decoder).wireType = $.makeMap<__goscript__type.typeId, __goscript__type.wireType | $.VarRef<__goscript__type.wireType> | null>();
	;(dec$ as Decoder).decoderCache = $.makeMap<reflect.Type | null, globalThis.Map<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null> | null>();
	;(dec$ as Decoder).ignorerCache = $.makeMap<__goscript__type.typeId, $.VarRef<__goscript_decode.decEngine | $.VarRef<__goscript_decode.decEngine> | null> | null>();
	;(dec$ as Decoder).countBuf = $.makeSlice<number>(9, undefined, "byte")

	return dec
}

export let errBadCount: $.GoError = errors.New("invalid message length")

export function __goscript_set_errBadCount(__goscriptValue: $.GoError): void {
	errBadCount = __goscriptValue
}

export function toInt(x: bigint): bigint {
	let i = $.int64($.uint64Shr(x, 1n))
	if (($.uint64And(x, 1n)) != 0n) {
		i = $.int64Xor(i, -1n)
	}
	return i
}

export let debugFunc: ((_p0: io.Reader | null) => void) | null = null! as ((_p0: io.Reader | null) => void) | null

export function __goscript_set_debugFunc(__goscriptValue: ((_p0: io.Reader | null) => void) | null): void {
	debugFunc = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.GobDecoder", zero: () => null, methods: {GobDecode: (receiver: any, ...args: any[]) => receiver.GobDecode(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.BinaryUnmarshaler", zero: () => null, methods: {UnmarshalBinary: (receiver: any, ...args: any[]) => receiver.UnmarshalBinary(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.TextUnmarshaler", zero: () => null, methods: {UnmarshalText: (receiver: any, ...args: any[]) => receiver.UnmarshalText(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
