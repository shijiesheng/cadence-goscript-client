// Generated file based on encoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_decoder from "./decoder.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/atomic/index.js"
import "./type.gs.ts"
import "./decoder.gs.ts"
import "./encode.gs.ts"
import "./error.gs.ts"

$.registerTypePackagePath("encoding/gob", ["gob.Encoder"])

export class Encoder {
	public get mutex(): sync.Mutex {
		return this._fields.mutex
	}

	public set mutex(value: sync.Mutex) {
		this._fields.mutex = value
	}

	public get w(): $.Slice<io.Writer | null> {
		return this._fields.w
	}

	public set w(value: $.Slice<io.Writer | null>) {
		this._fields.w = value
	}

	public get sent(): globalThis.Map<reflect.Type | null, __goscript__type.typeId> | null {
		return this._fields.sent
	}

	public set sent(value: globalThis.Map<reflect.Type | null, __goscript__type.typeId> | null) {
		this._fields.sent = value
	}

	public get countState(): __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null {
		return this._fields.countState
	}

	public set countState(value: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null) {
		this._fields.countState = value
	}

	public get freeList(): __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null {
		return this._fields.freeList
	}

	public set freeList(value: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null) {
		this._fields.freeList = value
	}

	public get byteBuf(): __goscript_encode.encBuffer {
		return this._fields.byteBuf
	}

	public set byteBuf(value: __goscript_encode.encBuffer) {
		this._fields.byteBuf = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		mutex: sync.Mutex
		w: $.Slice<io.Writer | null>
		sent: globalThis.Map<reflect.Type | null, __goscript__type.typeId> | null
		countState: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null
		freeList: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null
		byteBuf: __goscript_encode.encBuffer
		err: $.GoError
	}

	constructor(init?: Partial<{mutex?: sync.Mutex, w?: $.Slice<io.Writer | null>, sent?: globalThis.Map<reflect.Type | null, __goscript__type.typeId> | null, countState?: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, freeList?: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, byteBuf?: __goscript_encode.encBuffer, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			mutex: init?.mutex ? $.markAsStructValue($.cloneStructValue(init.mutex)) : $.markAsStructValue(new sync.Mutex()),
			w: init?.w ?? (null! as $.Slice<io.Writer | null>),
			sent: init?.sent ?? (null! as globalThis.Map<reflect.Type | null, __goscript__type.typeId> | null),
			countState: init?.countState ?? (null! as __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null),
			freeList: init?.freeList ?? (null! as __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null),
			byteBuf: init?.byteBuf ? init.byteBuf.clone() : new __goscript_encode.encBuffer(undefined, true),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Encoder {
		return new Encoder(this, true)
	}

	public __goscriptAssign(source: Encoder): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mutex, values.mutex)
		target.w = values.w
		target.sent = values.sent
		target.countState = values.countState
		target.freeList = values.freeList
		$.assignStruct(target.byteBuf, values.byteBuf)
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Encode(e: any): globalThis.Promise<$.GoError> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		return (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).EncodeValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(e)))) : Encoder.prototype.EncodeValue.call(enc, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(e)))))
	}

	public async EncodeValue(value: reflect.Value): globalThis.Promise<$.GoError> {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		using __defer = new $.DisposableStack()
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		if ($.markAsStructValue($.cloneStructValue(value)).Kind() == 0) {
			return errors.New("gob: cannot encode nil value")
		}
		if (($.markAsStructValue($.cloneStructValue(value)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(value)).IsNil()) {
			$.panic($.concatString("gob: cannot encode nil pointer of type ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}

		// Make sure we're single-threaded through here, so multiple
		// goroutines can share an encoder.
		await (enc$ as Encoder).mutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((enc$ as Encoder).mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() });

		// Remove any nested writers remaining due to previous errors.
		;(enc$ as Encoder).w = $.goSlice((enc$ as Encoder).w, 0, 1)

		let __goscriptTuple0: any = await __goscript__type.validUserType($.markAsStructValue($.cloneStructValue(value)).Type())
		let ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}

		;(enc$ as Encoder).err = null
		void (enc$ as Encoder).byteBuf.Reset()
		void (enc$ as Encoder).byteBuf.Write(spaceForLength)
		let state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState($.fieldRef((enc$ as Encoder)._fields, "byteBuf")) : Encoder.prototype.newEncoderState.call(enc, $.fieldRef((enc$ as Encoder)._fields, "byteBuf")))
		let state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state)

		await Encoder.prototype.sendTypeDescriptor.call(enc, (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).writer() : Encoder.prototype.writer.call(enc)), state, ut)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).sendTypeId(state, ut) : Encoder.prototype.sendTypeId.call(enc, state, ut))
		if ((enc$ as Encoder).err != null) {
			return (enc$ as Encoder).err
		}

		// Encode the object.
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).encode((state$ as __goscript_encode.encoderState).b, $.markAsStructValue($.cloneStructValue(value)), ut) : Encoder.prototype.encode.call(enc, (state$ as __goscript_encode.encoderState).b, $.markAsStructValue($.cloneStructValue(value)), ut))
		if ((enc$ as Encoder).err == null) {
			await Encoder.prototype.writeMessage.call(enc, (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).writer() : Encoder.prototype.writer.call(enc)), (state$ as __goscript_encode.encoderState).b)
		}

		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).freeEncoderState(state) : Encoder.prototype.freeEncoderState.call(enc, state))
		return (enc$ as Encoder).err
	}

	public async encode(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null, value: reflect.Value, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		const __defer = new $.DisposableStack()
		try {
			const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
			const __goscriptDeferArg0 = $.fieldRef($.pointerValue<Encoder>(enc)._fields, "err")
			__defer.defer(() => { __goscript_error.catchError(__goscriptDeferArg0) })
			let engine: __goscript_encode.encEngine | $.VarRef<__goscript_encode.encEngine> | null = await __goscript_encode.getEncEngine(ut, null)
			let indir = (ut$ as __goscript__type.userTypeInfo).indir
			if ((ut$ as __goscript__type.userTypeInfo).externalEnc != 0) {
				indir = $.int((ut$ as __goscript__type.userTypeInfo).encIndir)
			}
			for (let i = 0; i < indir; i++) {
				value = $.assignStruct(value, reflect.Indirect($.markAsStructValue($.cloneStructValue(value))))
			}
			if (((ut$ as __goscript__type.userTypeInfo).externalEnc == 0) && ($.markAsStructValue($.cloneStructValue(value)).Kind() == 25)) {
				await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).encodeStruct(b, engine, $.markAsStructValue($.cloneStructValue(value))) : Encoder.prototype.encodeStruct.call(enc, b, engine, $.markAsStructValue($.cloneStructValue(value))))
			} else {
				await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).encodeSingle(b, engine, $.markAsStructValue($.cloneStructValue(value))) : Encoder.prototype.encodeSingle.call(enc, b, engine, $.markAsStructValue($.cloneStructValue(value))))
			}
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public async encodeArray(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null, value: reflect.Value, op: ((i: __goscript_encode.encInstr | $.VarRef<__goscript_encode.encInstr> | null, state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value) => void) | null, elemIndir: number, length: number, helper: ((state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		using __defer = new $.DisposableStack()
		let state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState(b) : Encoder.prototype.newEncoderState.call(enc, b))
		let state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (e: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null) => __receiver.freeEncoderState(e))($.pointerValue<Encoder>(enc)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encoderState")], results: [] } as $.FunctionTypeInfo), "encoding/gob.(*Encoder).freeEncoderState-fm")
		const __goscriptDeferArg1 = state
		__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg1) });
		;(state$ as __goscript_encode.encoderState).fieldnum = -1;
		;(state$ as __goscript_encode.encoderState).sendZero = true
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64(length)) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64(length)))
		if ((helper != null) && (__goscriptAwait = helper!(state, $.markAsStructValue($.cloneStructValue(value))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}
		for (let i = 0; i < length; i++) {
			let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(value)).Index(i)))
			if (elemIndir > 0) {
				elem = $.assignStruct(elem, __goscript_encode.encIndirect($.markAsStructValue($.cloneStructValue(elem)), elemIndir))

				if (!__goscript_encode.valid($.markAsStructValue($.cloneStructValue(elem)))) {
					__goscript_error.errorf("encodeArray: nil element", null)
				}
			}
			void (__goscriptAwait = op!(null, state, $.markAsStructValue($.cloneStructValue(elem))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async encodeGobEncoder(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null, v: reflect.Value): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;

		let data: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError

		switch ($.pointerValue<__goscript__type.userTypeInfo>(ut).externalEnc) {
			case 1:
			{
				let __goscriptTuple1: any = reflect.TypeAssert(__goscriptStatic0(), $.markAsStructValue($.cloneStructValue(v)))
				let gobEncoder = (__goscriptTuple1[0] as __goscript__type.GobEncoder | null)
				let __goscriptTuple2: any = await (gobEncoder !== null && (gobEncoder as any).__isVarRef !== true && (gobEncoder as any).__goValue === undefined ? (gobEncoder as Exclude<__goscript__type.GobEncoder, null>) : $.pointerValue<Exclude<__goscript__type.GobEncoder, null>>(gobEncoder)).GobEncode()
				data = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				break
			}
			case 2:
			{
				let __goscriptTuple3: any = reflect.TypeAssert(__goscriptStatic1(), $.markAsStructValue($.cloneStructValue(v)))
				let binaryMarshaler = (__goscriptTuple3[0] as encoding.BinaryMarshaler | null)
				let __goscriptTuple4: any = await (binaryMarshaler !== null && (binaryMarshaler as any).__isVarRef !== true && (binaryMarshaler as any).__goValue === undefined ? (binaryMarshaler as Exclude<encoding.BinaryMarshaler, null>) : $.pointerValue<Exclude<encoding.BinaryMarshaler, null>>(binaryMarshaler)).MarshalBinary()
				data = __goscriptTuple4[0]
				err = __goscriptTuple4[1]
				break
			}
			case 3:
			{
				let __goscriptTuple5: any = reflect.TypeAssert(__goscriptStatic2(), $.markAsStructValue($.cloneStructValue(v)))
				let textMarshaler = (__goscriptTuple5[0] as encoding.TextMarshaler | null)
				let __goscriptTuple6: any = await (textMarshaler !== null && (textMarshaler as any).__isVarRef !== true && (textMarshaler as any).__goValue === undefined ? (textMarshaler as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(textMarshaler)).MarshalText()
				data = __goscriptTuple6[0]
				err = __goscriptTuple6[1]
				break
			}
		}
		if (err != null) {
			__goscript_error.error_(err)
		}
		let state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState(b) : Encoder.prototype.newEncoderState.call(enc, b))
		let state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state);
		;(state$ as __goscript_encode.encoderState).fieldnum = -1
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64($.sliceLen(data))) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64($.sliceLen(data))))
		__goscript_encode.encBuffer.prototype.Write.call((state$ as __goscript_encode.encoderState).b, data)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).freeEncoderState(state) : Encoder.prototype.freeEncoderState.call(enc, state))
	}

	public async encodeInterface(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null, iv: reflect.Value): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)

		let elem = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(iv)).Elem()))
		if (($.markAsStructValue($.cloneStructValue(elem)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(elem)).IsNil()) {
			__goscript_error.errorf("gob: cannot encode nil pointer of type %s inside interface", $.arrayToSlice<any>([($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(iv)).Elem())).Type() as any)]))
		}
		let state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState(b) : Encoder.prototype.newEncoderState.call(enc, b))
		let state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state);
		;(state$ as __goscript_encode.encoderState).fieldnum = -1;
		;(state$ as __goscript_encode.encoderState).sendZero = true
		if ($.markAsStructValue($.cloneStructValue(iv)).IsNil()) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(0n) : __goscript_encode.encoderState.prototype.encodeUint.call(state, 0n))
			return
		}

		let ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = await __goscript__type.userType($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(iv)).Elem())).Type())
		let ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
		let [namei, ok] = await $.pointerValue<sync.Map>(__goscript__type.concreteTypeToName).Load(((ut$ as __goscript__type.userTypeInfo).base as any))
		if (!ok) {
			__goscript_error.errorf("type not registered for interface: %s", $.arrayToSlice<any>([((ut$ as __goscript__type.userTypeInfo).base as any)]))
		}
		let name = $.mustTypeAssert<string>(namei, /* @__PURE__ */ $.basicType("string"))

		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64($.stringLen(name))) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64($.stringLen(name))))
		__goscript_encode.encBuffer.prototype.WriteString.call((state$ as __goscript_encode.encoderState).b, name)

		await Encoder.prototype.sendTypeDescriptor.call(enc, (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).writer() : Encoder.prototype.writer.call(enc)), state, ut)

		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).sendTypeId(state, ut) : Encoder.prototype.sendTypeId.call(enc, state, ut))

		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).pushWriter($.interfaceValue<io.Writer | null>(b, "*gob.encBuffer", /* @__PURE__ */ $.pointerType("gob.encBuffer"))) : Encoder.prototype.pushWriter.call(enc, $.interfaceValue<io.Writer | null>(b, "*gob.encBuffer", /* @__PURE__ */ $.pointerType("gob.encBuffer"))))
		let data: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null = $.mustTypeAssert<__goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null>(await $.pointerValue<sync.Pool>(__goscript_encode.encBufferPool).Get(), /* @__PURE__ */ $.pointerType("gob.encBuffer"))
		void (data !== null && (data as any).__isVarRef !== true && (data as any).__goValue === undefined ? ((data as any) as __goscript_encode.encBuffer).Write(spaceForLength) : __goscript_encode.encBuffer.prototype.Write.call(data, spaceForLength))
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).encode(data, $.markAsStructValue($.cloneStructValue(elem)), ut) : Encoder.prototype.encode.call(enc, data, $.markAsStructValue($.cloneStructValue(elem)), ut))
		if ((enc$ as Encoder).err != null) {
			__goscript_error.error_((enc$ as Encoder).err)
		}
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).popWriter() : Encoder.prototype.popWriter.call(enc))
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).writeMessage($.interfaceValue<io.Writer | null>(b, "*gob.encBuffer", /* @__PURE__ */ $.pointerType("gob.encBuffer")), data) : Encoder.prototype.writeMessage.call(enc, $.interfaceValue<io.Writer | null>(b, "*gob.encBuffer", /* @__PURE__ */ $.pointerType("gob.encBuffer")), data))
		void (data !== null && (data as any).__isVarRef !== true && (data as any).__goValue === undefined ? ((data as any) as __goscript_encode.encBuffer).Reset() : __goscript_encode.encBuffer.prototype.Reset.call(data))
		$.pointerValue<sync.Pool>(__goscript_encode.encBufferPool).Put($.interfaceValue(data, "*gob.encBuffer", /* @__PURE__ */ $.pointerType("gob.encBuffer")))
		if ((enc$ as Encoder).err != null) {
			__goscript_error.error_((enc$ as Encoder).err)
		}
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).freeEncoderState(state) : Encoder.prototype.freeEncoderState.call(enc, state))
	}

	public async encodeMap(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null, mv: reflect.Value, keyOp: ((i: __goscript_encode.encInstr | $.VarRef<__goscript_encode.encInstr> | null, state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value) => void) | null, elemOp: ((i: __goscript_encode.encInstr | $.VarRef<__goscript_encode.encInstr> | null, state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value) => void) | null, keyIndir: number, elemIndir: number): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		let state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState(b) : Encoder.prototype.newEncoderState.call(enc, b))
		let state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state);
		;(state$ as __goscript_encode.encoderState).fieldnum = -1;
		;(state$ as __goscript_encode.encoderState).sendZero = true
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64($.markAsStructValue($.cloneStructValue(mv)).Len())) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64($.markAsStructValue($.cloneStructValue(mv)).Len())))
		let mi: reflect.MapIter | $.VarRef<reflect.MapIter> | null = $.markAsStructValue($.cloneStructValue(mv)).MapRange()
		while (reflect.MapIter.prototype.Next.call($.pointerValue<reflect.MapIter>(mi))) {
			await __goscript_encode.encodeReflectValue(state, $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Key.call($.pointerValue<reflect.MapIter>(mi)))), keyOp, keyIndir)
			await __goscript_encode.encodeReflectValue(state, $.markAsStructValue($.cloneStructValue(reflect.MapIter.prototype.Value.call($.pointerValue<reflect.MapIter>(mi)))), elemOp, elemIndir)
		}
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).freeEncoderState(state) : Encoder.prototype.freeEncoderState.call(enc, state))
	}

	public async encodeSingle(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null, engine: __goscript_encode.encEngine | $.VarRef<__goscript_encode.encEngine> | null, value: reflect.Value): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		using __defer = new $.DisposableStack()
		let state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState(b) : Encoder.prototype.newEncoderState.call(enc, b))
		let state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state)
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (e: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null) => __receiver.freeEncoderState(e))($.pointerValue<Encoder>(enc)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encoderState")], results: [] } as $.FunctionTypeInfo), "encoding/gob.(*Encoder).freeEncoderState-fm")
		const __goscriptDeferArg2 = state
		__defer.defer(() => { __goscriptDeferCallee2(__goscriptDeferArg2) });
		;(state$ as __goscript_encode.encoderState).fieldnum = 0;

		;(state$ as __goscript_encode.encoderState).sendZero = true
		let instr: __goscript_encode.encInstr | $.VarRef<__goscript_encode.encInstr> | null = $.indexRef($.pointerValue<__goscript_encode.encEngine>(engine).instr!, 0)
		let instr$: __goscript_encode.encInstr = instr == null ? $.pointerTarget<__goscript_encode.encInstr>(instr) : (instr as any).__isVarRef === true ? (instr as any).value : (instr as any).__goValue === undefined ? (instr as any) : $.pointerTarget<__goscript_encode.encInstr>(instr)
		if ((instr$ as __goscript_encode.encInstr).indir > 0) {
			value = $.assignStruct(value, __goscript_encode.encIndirect($.markAsStructValue($.cloneStructValue(value)), (instr$ as __goscript_encode.encInstr).indir))
		}
		if (__goscript_encode.valid($.markAsStructValue($.cloneStructValue(value)))) {
			void (__goscriptAwait = (instr$ as __goscript_encode.encInstr).op!(instr, state, $.markAsStructValue($.cloneStructValue(value))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async encodeStruct(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null, engine: __goscript_encode.encEngine | $.VarRef<__goscript_encode.encEngine> | null, value: reflect.Value): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		using __defer = new $.DisposableStack()
		const engine$: __goscript_encode.encEngine = engine == null ? $.pointerTarget<__goscript_encode.encEngine>(engine) : (engine as any).__isVarRef === true ? (engine as any).value : (engine as any).__goValue === undefined ? (engine as any) : $.pointerTarget<__goscript_encode.encEngine>(engine)
		if (!__goscript_encode.valid($.markAsStructValue($.cloneStructValue(value)))) {
			return
		}
		let state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState(b) : Encoder.prototype.newEncoderState.call(enc, b))
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => (e: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null) => __receiver.freeEncoderState(e))($.pointerValue<Encoder>(enc)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encoderState")], results: [] } as $.FunctionTypeInfo), "encoding/gob.(*Encoder).freeEncoderState-fm")
		const __goscriptDeferArg3 = state
		__defer.defer(() => { __goscriptDeferCallee3(__goscriptDeferArg3) })
		$.pointerValue<__goscript_encode.encoderState>(state).fieldnum = -1
		for (let i = 0; i < $.sliceLen((engine$ as __goscript_encode.encEngine).instr); i++) {
			let instr: __goscript_encode.encInstr | $.VarRef<__goscript_encode.encInstr> | null = $.indexRef((engine$ as __goscript_encode.encEngine).instr!, i)
			let instr$: __goscript_encode.encInstr = instr == null ? $.pointerTarget<__goscript_encode.encInstr>(instr) : (instr as any).__isVarRef === true ? (instr as any).value : (instr as any).__goValue === undefined ? (instr as any) : $.pointerTarget<__goscript_encode.encInstr>(instr)
			if (i >= $.markAsStructValue($.cloneStructValue(value)).NumField()) {

				void (__goscriptAwait = (instr$ as __goscript_encode.encInstr).op!(instr, state, $.markAsStructValue(new reflect.Value())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			let field = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(value)).FieldByIndex((instr$ as __goscript_encode.encInstr).index)))
			if ((instr$ as __goscript_encode.encInstr).indir > 0) {
				field = $.assignStruct(field, __goscript_encode.encIndirect($.markAsStructValue($.cloneStructValue(field)), (instr$ as __goscript_encode.encInstr).indir))

				if (!__goscript_encode.valid($.markAsStructValue($.cloneStructValue(field)))) {
					continue
				}
			}
			void (__goscriptAwait = (instr$ as __goscript_encode.encInstr).op!(instr, state, $.markAsStructValue($.cloneStructValue(field))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public freeEncoderState(e: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null): void {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		$.pointerValue<__goscript_encode.encoderState>(e).next = (enc$ as Encoder).freeList;
		;(enc$ as Encoder).freeList = e
	}

	public newEncoderState(b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null): __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		const b$: __goscript_encode.encBuffer = b == null ? $.pointerTarget<__goscript_encode.encBuffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<__goscript_encode.encBuffer>(b)
		let e: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null = (enc$ as Encoder).freeList
		if (e == null) {
			e = new __goscript_encode.encoderState()
			$.pointerValue<__goscript_encode.encoderState>(e).enc = enc
		} else {
			;(enc$ as Encoder).freeList = $.pointerValue<__goscript_encode.encoderState>(e).next
		}
		$.pointerValue<__goscript_encode.encoderState>(e).sendZero = false
		$.pointerValue<__goscript_encode.encoderState>(e).fieldnum = 0
		$.pointerValue<__goscript_encode.encoderState>(e).b = b
		if ($.sliceLen((b$ as __goscript_encode.encBuffer).data) == 0) {
			;(b$ as __goscript_encode.encBuffer).data = $.goSlice((b$ as __goscript_encode.encBuffer).scratch, 0, 0)
		}
		return e
	}

	public popWriter(): void {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc);
		;(enc$ as Encoder).w = $.goSlice((enc$ as Encoder).w, 0, $.sliceLen((enc$ as Encoder).w) - 1)
	}

	public pushWriter(w: io.Writer | null): void {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc);
		;(enc$ as Encoder).w = $.appendOne((enc$ as Encoder).w, w, $.appendZeros.nil)
	}

	public async sendActualType(w: io.Writer | null, state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null, actual: reflect.Type | null): globalThis.Promise<boolean> {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		let sent: boolean = false
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		const state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state)
		const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
		{
			let [, alreadySent] = $.mapGet<reflect.Type | null, __goscript__type.typeId, __goscript__type.typeId>((enc$ as Encoder).sent, actual, 0)
			if (alreadySent) {
				return false
			}
		}
		let __goscriptTuple7: any = await __goscript__type.getTypeInfo(ut)
		let info: __goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		let info$: __goscript__type.typeInfo = info == null ? $.pointerTarget<__goscript__type.typeInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript__type.typeInfo>(info)
		if (err != null) {
			void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).setError(err) : Encoder.prototype.setError.call(enc, err))
			return sent
		}
		// Send the pair (-id, type)
		// Id:
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeInt(-$.int64((info$ as __goscript__type.typeInfo).id)) : __goscript_encode.encoderState.prototype.encodeInt.call(state, -$.int64((info$ as __goscript__type.typeInfo).id)))
		// Type:
		await Encoder.prototype.encode.call(enc, (state$ as __goscript_encode.encoderState).b, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(((info$ as __goscript__type.typeInfo).wire).clone(), "gob.wireType", "gob.wireType")))), __goscript__type.wireTypeUserInfo)
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).writeMessage(w, (state$ as __goscript_encode.encoderState).b) : Encoder.prototype.writeMessage.call(enc, w, (state$ as __goscript_encode.encoderState).b))
		if ((enc$ as Encoder).err != null) {
			return sent
		}

		// Remember we've sent this type, both what the user gave us and the base type.
		$.mapSet((enc$ as Encoder).sent, (ut$ as __goscript__type.userTypeInfo).base, (info$ as __goscript__type.typeInfo).id)
		if (!$.comparableEqual((ut$ as __goscript__type.userTypeInfo).user, (ut$ as __goscript__type.userTypeInfo).base)) {
			$.mapSet((enc$ as Encoder).sent, (ut$ as __goscript__type.userTypeInfo).user, (info$ as __goscript__type.typeInfo).id)
		}
		// Now send the inner types
		{
			let st: reflect.Type | null = actual
			switch ((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Struct:
				{
					for (let i = 0; i < (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						if (__goscript__type.isExported(((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Name)) {
							await Encoder.prototype.sendType.call(enc, w, state, ((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type)
						}
					}
					break
				}
				case reflect.Array:
				case reflect.Slice:
				{
					await Encoder.prototype.sendType.call(enc, w, state, (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					break
				}
				case reflect.Map:
				{
					await Encoder.prototype.sendType.call(enc, w, state, (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					await Encoder.prototype.sendType.call(enc, w, state, (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					break
				}
			}
		}
		return true
	}

	public async sendType(w: io.Writer | null, state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, origt: reflect.Type | null): globalThis.Promise<boolean> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		let sent: boolean = false
		let ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = await __goscript__type.userType(origt)
		let ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
		if ((ut$ as __goscript__type.userTypeInfo).externalEnc != 0) {
			// The rules are different: regardless of the underlying type's representation,
			// we need to tell the other side that the base type is a GobEncoder.
			return (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).sendActualType(w, state, ut, (ut$ as __goscript__type.userTypeInfo).base) : Encoder.prototype.sendActualType.call(enc, w, state, ut, (ut$ as __goscript__type.userTypeInfo).base))
		}

		// It's a concrete value, so drill down to the base type.
		{
			let rt = (ut$ as __goscript__type.userTypeInfo).base
			switch ((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				default:
				{
					return sent
					break
				}
				case reflect.Slice:
				{
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
						return sent
					}
					// Otherwise we do send.
					break
					break
				}
				case reflect.Array:
				{
					break
					break
				}
				case reflect.Map:
				{
					break
					break
				}
				case reflect.Struct:
				{
					break
					break
				}
				case reflect.Chan:
				case reflect.Func:
				{
					return sent
					break
				}
			}
		}

		return (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).sendActualType(w, state, ut, (ut$ as __goscript__type.userTypeInfo).base) : Encoder.prototype.sendActualType.call(enc, w, state, ut, (ut$ as __goscript__type.userTypeInfo).base))
	}

	public async sendTypeDescriptor(w: io.Writer | null, state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): globalThis.Promise<void> {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
		// Make sure the type is known to the other side.
		// First, have we already sent this type?
		let rt = (ut$ as __goscript__type.userTypeInfo).base
		if ((ut$ as __goscript__type.userTypeInfo).externalEnc != 0) {
			rt = (ut$ as __goscript__type.userTypeInfo).user
		}
		{
			let [, alreadySent] = $.mapGet<reflect.Type | null, __goscript__type.typeId, __goscript__type.typeId>((enc$ as Encoder).sent, rt, 0)
			if (!alreadySent) {
				// No, so send it.
				let sent = await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).sendType(w, state, rt) : Encoder.prototype.sendType.call(enc, w, state, rt))
				if ((enc$ as Encoder).err != null) {
					return
				}
				// If the type info has still not been transmitted, it means we have
				// a singleton basic type (int, []byte etc.) at top level. We don't
				// need to send the type info but we do need to update enc.sent.
				if (!sent) {
					let __goscriptTuple8: any = await __goscript__type.getTypeInfo(ut)
					let info: __goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null = __goscriptTuple8[0]
					let err = __goscriptTuple8[1]
					if (err != null) {
						void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).setError(err) : Encoder.prototype.setError.call(enc, err))
						return
					}
					$.mapSet((enc$ as Encoder).sent, rt, $.pointerValue<__goscript__type.typeInfo>(info).id)
				}
			}
		}
	}

	public sendTypeId(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): void {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		// Identify the type of this top-level value.
		__goscript_encode.encoderState.prototype.encodeInt.call(state, $.int64($.mapGet<reflect.Type | null, __goscript__type.typeId, __goscript__type.typeId>($.pointerValue<Encoder>(enc).sent, $.pointerValue<__goscript__type.userTypeInfo>(ut).base, 0)[0]))
	}

	public setError(err: $.GoError): void {
		let enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		if ((enc$ as Encoder).err == null) {
			;(enc$ as Encoder).err = err
		}
	}

	public async writeMessage(w: io.Writer | null, b: __goscript_encode.encBuffer | $.VarRef<__goscript_encode.encBuffer> | null): globalThis.Promise<void> {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		// Space has been reserved for the length at the head of the message.
		// This is a little dirty: we grab the slice from the bytes.Buffer and massage
		// it by hand.
		let message: $.Slice<number> = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_encode.encBuffer).Bytes() : __goscript_encode.encBuffer.prototype.Bytes.call(b))
		let messageLen = $.sliceLen(message) - 9
		// Length cannot be bigger than the decoder can handle.
		if (messageLen >= 8589934592) {
			void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).setError(errors.New("gob: encoder: message too big")) : Encoder.prototype.setError.call(enc, errors.New("gob: encoder: message too big")))
			return
		}
		// Encode the length.
		__goscript_encode.encBuffer.prototype.Reset.call($.pointerValue<__goscript_encode.encoderState>((enc$ as Encoder).countState).b)
		__goscript_encode.encoderState.prototype.encodeUint.call((enc$ as Encoder).countState, $.uint64(messageLen))
		// Copy the length to be a prefix of the message.
		let offset = 9 - __goscript_encode.encBuffer.prototype.Len.call($.pointerValue<__goscript_encode.encoderState>((enc$ as Encoder).countState).b)
		$.copy($.goSlice(message, offset, undefined), __goscript_encode.encBuffer.prototype.Bytes.call($.pointerValue<__goscript_encode.encoderState>((enc$ as Encoder).countState).b))
		// Write the data.
		let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(message, offset, undefined))
		// Drain the buffer and restore the space at the front for the count of the next message.
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_encode.encBuffer).Reset() : __goscript_encode.encBuffer.prototype.Reset.call(b))
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_encode.encBuffer).Write(spaceForLength) : __goscript_encode.encBuffer.prototype.Write.call(b, spaceForLength))
		if (err != null) {
			void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).setError(err) : Encoder.prototype.setError.call(enc, err))
		}
	}

	public writer(): io.Writer | null {
		const enc: Encoder | $.VarRef<Encoder> | null = this;
		const enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc)
		return $.arrayIndex((enc$ as Encoder).w!, $.sliceLen((enc$ as Encoder).w) - 1)
	}

	static __typeInfo = $.registerStructType(
		"gob.Encoder",
		() => new Encoder(),
		() => [$.methodSignature("Encode", [["e", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("EncodeValue", [["value", "reflect.Value"]], ["error"], true), $.methodSignature("encode", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")], ["value", "reflect.Value"], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")]], [], true), $.methodSignature("encodeArray", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")], ["value", "reflect.Value"], ["op", ({ kind: $.TypeKind.Function, name: "gob.encOp", params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["elemIndir", /* @__PURE__ */ $.basicType("int")], ["length", /* @__PURE__ */ $.basicType("int")], ["helper", ({ kind: $.TypeKind.Function, name: "gob.encHelper", params: [/* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("encodeGobEncoder", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")], ["v", "reflect.Value"]], [], true), $.methodSignature("encodeInterface", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")], ["iv", "reflect.Value"]], [], true), $.methodSignature("encodeMap", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")], ["mv", "reflect.Value"], ["keyOp", ({ kind: $.TypeKind.Function, name: "gob.encOp", params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["elemOp", ({ kind: $.TypeKind.Function, name: "gob.encOp", params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo)], ["keyIndir", /* @__PURE__ */ $.basicType("int")], ["elemIndir", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("encodeSingle", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")], ["engine", /* @__PURE__ */ $.pointerType("gob.encEngine")], ["value", "reflect.Value"]], [], true), $.methodSignature("encodeStruct", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")], ["engine", /* @__PURE__ */ $.pointerType("gob.encEngine")], ["value", "reflect.Value"]], [], true), $.methodSignature("freeEncoderState", [["e", /* @__PURE__ */ $.pointerType("gob.encoderState")]], [], true), $.methodSignature("newEncoderState", [["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")]], [/* @__PURE__ */ $.pointerType("gob.encoderState")], true), $.methodSignature("popWriter", [], [], true), $.methodSignature("pushWriter", [["w", "io.Writer"]], [], true), $.methodSignature("sendActualType", [["w", "io.Writer"], ["state", /* @__PURE__ */ $.pointerType("gob.encoderState")], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")], ["actual", "reflect.Type"]], [["sent", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("sendType", [["w", "io.Writer"], ["state", /* @__PURE__ */ $.pointerType("gob.encoderState")], ["origt", "reflect.Type"]], [["sent", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("sendTypeDescriptor", [["w", "io.Writer"], ["state", /* @__PURE__ */ $.pointerType("gob.encoderState")], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")]], [], true), $.methodSignature("sendTypeId", [["state", /* @__PURE__ */ $.pointerType("gob.encoderState")], ["ut", /* @__PURE__ */ $.pointerType("gob.userTypeInfo")]], [], true), $.methodSignature("setError", [["err", "error"]], [], true), $.methodSignature("writeMessage", [["w", "io.Writer"], ["b", /* @__PURE__ */ $.pointerType("gob.encBuffer")]], [], true), $.methodSignature("writer", [], ["io.Writer"], true)],
		Encoder,
		() => [/* @__PURE__ */ $.structField("mutex", "sync.Mutex", [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("w", /* @__PURE__ */ $.sliceType("io.Writer"), [1], 8, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("sent", /* @__PURE__ */ $.mapType("reflect.Type", /* @__PURE__ */ $.basicType("int32", "gob.typeId")), [2], 32, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("countState", /* @__PURE__ */ $.pointerType("gob.encoderState"), [3], 40, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("freeList", /* @__PURE__ */ $.pointerType("gob.encoderState"), [4], 48, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("byteBuf", "gob.encBuffer", [5], 56, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("err", "error", [6], 144, false, { pkgPath: "encoding/gob" })]
	)
}

export const maxLength: number = 9

export let spaceForLength: $.Slice<number> = $.makeSlice<number>(9, undefined, "byte")

export function __goscript_set_spaceForLength(__goscriptValue: $.Slice<number>): void {
	spaceForLength = __goscriptValue
}

export function NewEncoder(w: io.Writer | null): Encoder | $.VarRef<Encoder> | null {
	let enc: Encoder | $.VarRef<Encoder> | null = new Encoder()
	let enc$: Encoder = enc == null ? $.pointerTarget<Encoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<Encoder>(enc);
	;(enc$ as Encoder).w = $.arrayToSlice<io.Writer | null>([w]);
	;(enc$ as Encoder).sent = $.makeMap<reflect.Type | null, __goscript__type.typeId>();
	;(enc$ as Encoder).countState = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as Encoder).newEncoderState(new __goscript_encode.encBuffer()) : Encoder.prototype.newEncoderState.call(enc, new __goscript_encode.encBuffer()))
	return enc
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.GobEncoder", zero: () => null, methods: {GobEncode: (receiver: any, ...args: any[]) => receiver.GobEncode(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.BinaryMarshaler", zero: () => null, methods: {MarshalBinary: (receiver: any, ...args: any[]) => receiver.MarshalBinary(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "encoding.TextMarshaler", zero: () => null, methods: {MarshalText: (receiver: any, ...args: any[]) => receiver.MarshalText(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
