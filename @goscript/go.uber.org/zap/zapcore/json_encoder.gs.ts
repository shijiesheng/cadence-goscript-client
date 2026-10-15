// Generated file based on json_encoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as math from "@goscript/math/index.js"

import * as time2 from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as buffer from "@goscript/go.uber.org/zap/buffer/index.js"

import * as bufferpool from "@goscript/go.uber.org/zap/internal/bufferpool/index.js"

import * as pool from "@goscript/go.uber.org/zap/internal/pool/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_reflected_encoder from "./reflected_encoder.gs.ts"
import "@goscript/encoding/base64/index.js"
import "@goscript/math/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/go.uber.org/zap/buffer/index.js"
import "@goscript/go.uber.org/zap/internal/bufferpool/index.js"
import "@goscript/go.uber.org/zap/internal/pool/index.js"
import "./encoder.gs.ts"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./marshaler.gs.ts"
import "./reflected_encoder.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.jsonEncoder"])

export class jsonEncoder {
	public get EncoderConfig(): __goscript_encoder.EncoderConfig | $.VarRef<__goscript_encoder.EncoderConfig> | null {
		return this._fields.EncoderConfig
	}

	public set EncoderConfig(value: __goscript_encoder.EncoderConfig | $.VarRef<__goscript_encoder.EncoderConfig> | null) {
		this._fields.EncoderConfig = value
	}

	public get buf(): buffer.Buffer | $.VarRef<buffer.Buffer> | null {
		return this._fields.buf
	}

	public set buf(value: buffer.Buffer | $.VarRef<buffer.Buffer> | null) {
		this._fields.buf = value
	}

	public get spaced(): boolean {
		return this._fields.spaced
	}

	public set spaced(value: boolean) {
		this._fields.spaced = value
	}

	public get openNamespaces(): number {
		return this._fields.openNamespaces
	}

	public set openNamespaces(value: number) {
		this._fields.openNamespaces = value
	}

	// for encoding generic values by reflection
	public get reflectBuf(): buffer.Buffer | $.VarRef<buffer.Buffer> | null {
		return this._fields.reflectBuf
	}

	public set reflectBuf(value: buffer.Buffer | $.VarRef<buffer.Buffer> | null) {
		this._fields.reflectBuf = value
	}

	public get reflectEnc(): __goscript_reflected_encoder.ReflectedEncoder | null {
		return this._fields.reflectEnc
	}

	public set reflectEnc(value: __goscript_reflected_encoder.ReflectedEncoder | null) {
		this._fields.reflectEnc = value
	}

	public _fields: {
		EncoderConfig: __goscript_encoder.EncoderConfig | $.VarRef<__goscript_encoder.EncoderConfig> | null
		buf: buffer.Buffer | $.VarRef<buffer.Buffer> | null
		spaced: boolean
		openNamespaces: number
		reflectBuf: buffer.Buffer | $.VarRef<buffer.Buffer> | null
		reflectEnc: __goscript_reflected_encoder.ReflectedEncoder | null
	}

	constructor(init?: Partial<{EncoderConfig?: __goscript_encoder.EncoderConfig | $.VarRef<__goscript_encoder.EncoderConfig> | null, buf?: buffer.Buffer | $.VarRef<buffer.Buffer> | null, spaced?: boolean, openNamespaces?: number, reflectBuf?: buffer.Buffer | $.VarRef<buffer.Buffer> | null, reflectEnc?: __goscript_reflected_encoder.ReflectedEncoder | null}>, __goscriptValue?: boolean) {
		this._fields = {
			EncoderConfig: init?.EncoderConfig ?? (null! as __goscript_encoder.EncoderConfig | $.VarRef<__goscript_encoder.EncoderConfig> | null),
			buf: init?.buf ?? (null! as buffer.Buffer | $.VarRef<buffer.Buffer> | null),
			spaced: init?.spaced ?? (false as boolean),
			openNamespaces: init?.openNamespaces ?? (0 as number),
			reflectBuf: init?.reflectBuf ?? (null! as buffer.Buffer | $.VarRef<buffer.Buffer> | null),
			reflectEnc: init?.reflectEnc ?? (null! as __goscript_reflected_encoder.ReflectedEncoder | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): jsonEncoder {
		return new jsonEncoder(this, true)
	}

	public __goscriptAssign(source: jsonEncoder): void {
		const target = this._fields
		const values = source._fields
		target.EncoderConfig = values.EncoderConfig
		target.buf = values.buf
		target.spaced = values.spaced
		target.openNamespaces = values.openNamespaces
		target.reflectBuf = values.reflectBuf
		target.reflectEnc = $.assignFieldValue(target.reflectEnc, values.reflectEnc, "zapcore.ReflectedEncoder")
	}

	public async AddArray(key: string, arr: __goscript_marshaler.ArrayMarshaler | null): globalThis.Promise<$.GoError> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		return (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendArray(arr) : jsonEncoder.prototype.AppendArray.call(enc, arr))
	}

	public async AddBinary(key: string, val: $.Slice<number>): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddString(key, base64.Encoding.prototype.EncodeToString.call(base64.StdEncoding, val)) : jsonEncoder.prototype.AddString.call(enc, key, base64.Encoding.prototype.EncodeToString.call(base64.StdEncoding, val)))
	}

	public async AddBool(key: string, val: boolean): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendBool(val) : jsonEncoder.prototype.AppendBool.call(enc, val))
	}

	public async AddByteString(key: string, val: $.Slice<number>): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendByteString(val) : jsonEncoder.prototype.AppendByteString.call(enc, val))
	}

	public async AddComplex128(key: string, val: $.Complex): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendComplex128(val) : jsonEncoder.prototype.AppendComplex128.call(enc, val))
	}

	public async AddComplex64(key: string, val: $.Complex): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendComplex64($.complex64(val)) : jsonEncoder.prototype.AppendComplex64.call(enc, $.complex64(val)))
	}

	public async AddDuration(key: string, val: time2.Duration): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendDuration(val) : jsonEncoder.prototype.AppendDuration.call(enc, val))
	}

	public async AddFloat32(key: string, val: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendFloat32(val) : jsonEncoder.prototype.AppendFloat32.call(enc, val))
	}

	public async AddFloat64(key: string, val: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendFloat64(val) : jsonEncoder.prototype.AppendFloat64.call(enc, val))
	}

	public async AddInt(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddInt64(k, $.int64(v)) : jsonEncoder.prototype.AddInt64.call(enc, k, $.int64(v)))
	}

	public async AddInt16(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddInt64(k, $.int64(v)) : jsonEncoder.prototype.AddInt64.call(enc, k, $.int64(v)))
	}

	public async AddInt32(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddInt64(k, $.int64(v)) : jsonEncoder.prototype.AddInt64.call(enc, k, $.int64(v)))
	}

	public async AddInt64(key: string, val: bigint): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendInt64(val) : jsonEncoder.prototype.AppendInt64.call(enc, val))
	}

	public async AddInt8(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddInt64(k, $.int64(v)) : jsonEncoder.prototype.AddInt64.call(enc, k, $.int64(v)))
	}

	public async AddObject(key: string, obj: __goscript_marshaler.ObjectMarshaler | null): globalThis.Promise<$.GoError> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		return (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendObject(obj) : jsonEncoder.prototype.AppendObject.call(enc, obj))
	}

	public async AddReflected(key: string, obj: any): globalThis.Promise<$.GoError> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		let __goscriptTuple0: any = await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).encodeReflected(obj) : jsonEncoder.prototype.encodeReflected.call(enc, obj))
		let valueBytes: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		let __goscriptTuple1: any = buffer.Buffer.prototype.Write.call($.pointerValue<jsonEncoder>(enc).buf, valueBytes)
		err = __goscriptTuple1[1]
		return err
	}

	public async AddString(key: string, val: string): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendString(val) : jsonEncoder.prototype.AppendString.call(enc, val))
	}

	public async AddTime(key: string, val: time2.Time): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendTime(val) : jsonEncoder.prototype.AppendTime.call(enc, val))
	}

	public async AddUint(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddUint64(k, $.uint64(v)) : jsonEncoder.prototype.AddUint64.call(enc, k, $.uint64(v)))
	}

	public async AddUint16(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddUint64(k, $.uint64(v)) : jsonEncoder.prototype.AddUint64.call(enc, k, $.uint64(v)))
	}

	public async AddUint32(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddUint64(k, $.uint64(v)) : jsonEncoder.prototype.AddUint64.call(enc, k, $.uint64(v)))
	}

	public async AddUint64(key: string, val: bigint): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendUint64(val) : jsonEncoder.prototype.AppendUint64.call(enc, val))
	}

	public async AddUint8(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddUint64(k, $.uint64(v)) : jsonEncoder.prototype.AddUint64.call(enc, k, $.uint64(v)))
	}

	public async AddUintptr(k: string, v: number): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AddUint64(k, $.uint64(v)) : jsonEncoder.prototype.AddUint64.call(enc, k, $.uint64(v)))
	}

	public async AppendArray(arr: __goscript_marshaler.ArrayMarshaler | null): globalThis.Promise<$.GoError> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 91)
		let err = (__goscriptAwait = (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? (arr as Exclude<__goscript_marshaler.ArrayMarshaler, null>) : $.pointerValue<Exclude<__goscript_marshaler.ArrayMarshaler, null>>(arr)).MarshalLogArray($.interfaceValue<__goscript_encoder.ArrayEncoder | null>(enc, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 93)
		return err
	}

	public AppendBool(val: boolean): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendBool.call($.pointerValue<jsonEncoder>(enc).buf, val)
	}

	public async AppendByteString(val: $.Slice<number>): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).safeAddByteString(val) : jsonEncoder.prototype.safeAddByteString.call(enc, val))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
	}

	public AppendComplex128(v: $.Complex): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).appendComplex($.int(v), 64) : jsonEncoder.prototype.appendComplex.call(enc, $.int(v), 64))
	}

	public AppendComplex64(v: $.Complex): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).appendComplex($.int(v), 32) : jsonEncoder.prototype.appendComplex.call(enc, $.int(v), 32))
	}

	public async AppendDuration(val: time2.Duration): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		let cur = buffer.Buffer.prototype.Len.call((enc$ as jsonEncoder).buf)
		{
			let e = $.pointerValue<__goscript_encoder.EncoderConfig>((enc$ as jsonEncoder).EncoderConfig).EncodeDuration
			if (e != null) {
				void (__goscriptAwait = e!(val, $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(enc, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if (cur == buffer.Buffer.prototype.Len.call((enc$ as jsonEncoder).buf)) {
			// User-supplied EncodeDuration is a no-op. Fall back to nanoseconds to keep
			// JSON valid.
			void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendInt64($.int64(val)) : jsonEncoder.prototype.AppendInt64.call(enc, $.int64(val)))
		}
	}

	public AppendFloat32(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).appendFloat(v, 32) : jsonEncoder.prototype.appendFloat.call(enc, v, 32))
	}

	public AppendFloat64(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).appendFloat(v, 64) : jsonEncoder.prototype.appendFloat.call(enc, v, 64))
	}

	public AppendInt(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendInt64($.int64(v)) : jsonEncoder.prototype.AppendInt64.call(enc, $.int64(v)))
	}

	public AppendInt16(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendInt64($.int64(v)) : jsonEncoder.prototype.AppendInt64.call(enc, $.int64(v)))
	}

	public AppendInt32(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendInt64($.int64(v)) : jsonEncoder.prototype.AppendInt64.call(enc, $.int64(v)))
	}

	public AppendInt64(val: bigint): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendInt.call($.pointerValue<jsonEncoder>(enc).buf, val)
	}

	public AppendInt8(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendInt64($.int64(v)) : jsonEncoder.prototype.AppendInt64.call(enc, $.int64(v)))
	}

	public async AppendObject(obj: __goscript_marshaler.ObjectMarshaler | null): globalThis.Promise<$.GoError> {
		let enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		// Close ONLY new openNamespaces that are created during
		// AppendObject().
		let old = (enc$ as jsonEncoder).openNamespaces;
		;(enc$ as jsonEncoder).openNamespaces = 0
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 123)
		let err = (__goscriptAwait = (obj !== null && (obj as any).__isVarRef !== true && (obj as any).__goValue === undefined ? (obj as Exclude<__goscript_marshaler.ObjectMarshaler, null>) : $.pointerValue<Exclude<__goscript_marshaler.ObjectMarshaler, null>>(obj)).MarshalLogObject($.interfaceValue<__goscript_encoder.ObjectEncoder | null>(enc, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 125)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).closeOpenNamespaces() : jsonEncoder.prototype.closeOpenNamespaces.call(enc));
		;(enc$ as jsonEncoder).openNamespaces = old
		return err
	}

	public async AppendReflected(val: any): globalThis.Promise<$.GoError> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		let __goscriptTuple2: any = await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).encodeReflected(val) : jsonEncoder.prototype.encodeReflected.call(enc, val))
		let valueBytes: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		let __goscriptTuple3: any = buffer.Buffer.prototype.Write.call($.pointerValue<jsonEncoder>(enc).buf, valueBytes)
		err = __goscriptTuple3[1]
		return err
	}

	public async AppendString(val: string): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).safeAddString(val) : jsonEncoder.prototype.safeAddString.call(enc, val))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
	}

	public async AppendTime(val: time2.Time): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		let cur = buffer.Buffer.prototype.Len.call((enc$ as jsonEncoder).buf)
		{
			let e = $.pointerValue<__goscript_encoder.EncoderConfig>((enc$ as jsonEncoder).EncoderConfig).EncodeTime
			if (e != null) {
				void (__goscriptAwait = e!($.markAsStructValue($.cloneStructValue(val)), $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(enc, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if (cur == buffer.Buffer.prototype.Len.call((enc$ as jsonEncoder).buf)) {
			// User-supplied EncodeTime is a no-op. Fall back to nanos since epoch to keep
			// output JSON valid.
			void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendInt64($.markAsStructValue($.cloneStructValue(val)).UnixNano()) : jsonEncoder.prototype.AppendInt64.call(enc, $.markAsStructValue($.cloneStructValue(val)).UnixNano()))
		}
	}

	public AppendTimeLayout(time: time2.Time, layout: string): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
		buffer.Buffer.prototype.AppendTime.call((enc$ as jsonEncoder).buf, time, layout)
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
	}

	public AppendUint(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendUint64($.uint64(v)) : jsonEncoder.prototype.AppendUint64.call(enc, $.uint64(v)))
	}

	public AppendUint16(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendUint64($.uint64(v)) : jsonEncoder.prototype.AppendUint64.call(enc, $.uint64(v)))
	}

	public AppendUint32(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendUint64($.uint64(v)) : jsonEncoder.prototype.AppendUint64.call(enc, $.uint64(v)))
	}

	public AppendUint64(val: bigint): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendUint.call($.pointerValue<jsonEncoder>(enc).buf, val)
	}

	public AppendUint8(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendUint64($.uint64(v)) : jsonEncoder.prototype.AppendUint64.call(enc, $.uint64(v)))
	}

	public AppendUintptr(v: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).AppendUint64($.uint64(v)) : jsonEncoder.prototype.AppendUint64.call(enc, $.uint64(v)))
	}

	public async Clone(): globalThis.Promise<__goscript_encoder.Encoder | null> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		let clone: jsonEncoder | $.VarRef<jsonEncoder> | null = await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).clone() : jsonEncoder.prototype.clone.call(enc))
		buffer.Buffer.prototype.Write.call($.pointerValue<jsonEncoder>(clone).buf, buffer.Buffer.prototype.Bytes.call($.pointerValue<jsonEncoder>(enc).buf))
		return $.interfaceValue<__goscript_encoder.Encoder | null>(clone, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))
	}

	public async EncodeEntry(ent: __goscript_entry.Entry, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<[buffer.Buffer | $.VarRef<buffer.Buffer> | null, $.GoError]> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		let final: jsonEncoder | $.VarRef<jsonEncoder> | null = await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).clone() : jsonEncoder.prototype.clone.call(enc))
		let final$: jsonEncoder = final == null ? $.pointerTarget<jsonEncoder>(final) : (final as any).__isVarRef === true ? (final as any).value : (final as any).__goValue === undefined ? (final as any) : $.pointerTarget<jsonEncoder>(final)
		buffer.Buffer.prototype.AppendByte.call((final$ as jsonEncoder).buf, 123)

		if ((!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).LevelKey, "")) && ($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).EncodeLevel != null)) {
			await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).addKey($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).LevelKey) : jsonEncoder.prototype.addKey.call(final, $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).LevelKey))
			let cur = buffer.Buffer.prototype.Len.call((final$ as jsonEncoder).buf)
			void (__goscriptAwait = $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).EncodeLevel!(ent.Level, $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(final, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (cur == buffer.Buffer.prototype.Len.call((final$ as jsonEncoder).buf)) {
				// User-supplied EncodeLevel was a no-op. Fall back to strings to keep
				// output JSON valid.
				await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).AppendString(await __goscript_level.Level_String(ent.Level)) : jsonEncoder.prototype.AppendString.call(final, await __goscript_level.Level_String(ent.Level)))
			}
		}
		if ((!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).TimeKey, "")) && !$.markAsStructValue($.cloneStructValue(ent.Time)).IsZero()) {
			await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).AddTime($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).TimeKey, ent.Time) : jsonEncoder.prototype.AddTime.call(final, $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).TimeKey, ent.Time))
		}
		if ((!$.stringEqual(ent.LoggerName, "")) && (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).NameKey, ""))) {
			await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).addKey($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).NameKey) : jsonEncoder.prototype.addKey.call(final, $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).NameKey))
			let cur = buffer.Buffer.prototype.Len.call((final$ as jsonEncoder).buf)
			let nameEncoder = $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).EncodeName

			// if no name encoder provided, fall back to FullNameEncoder for backwards
			// compatibility
			if (nameEncoder == null) {
				nameEncoder = __goscript_encoder.FullNameEncoder
			}

			void (__goscriptAwait = nameEncoder!(ent.LoggerName, $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(final, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (cur == buffer.Buffer.prototype.Len.call((final$ as jsonEncoder).buf)) {
				// User-supplied EncodeName was a no-op. Fall back to strings to
				// keep output JSON valid.
				await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).AppendString(ent.LoggerName) : jsonEncoder.prototype.AppendString.call(final, ent.LoggerName))
			}
		}
		if (ent.Caller.Defined) {
			if (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).CallerKey, "")) {
				await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).addKey($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).CallerKey) : jsonEncoder.prototype.addKey.call(final, $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).CallerKey))
				let cur = buffer.Buffer.prototype.Len.call((final$ as jsonEncoder).buf)
				void (__goscriptAwait = $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).EncodeCaller!((ent.Caller).clone(), $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(final, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (cur == buffer.Buffer.prototype.Len.call((final$ as jsonEncoder).buf)) {
					// User-supplied EncodeCaller was a no-op. Fall back to strings to
					// keep output JSON valid.
					await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).AppendString(await ent.Caller.String()) : jsonEncoder.prototype.AppendString.call(final, await ent.Caller.String()))
				}
			}
			if (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).FunctionKey, "")) {
				await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).addKey($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).FunctionKey) : jsonEncoder.prototype.addKey.call(final, $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).FunctionKey))
				await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).AppendString(ent.Caller.Function) : jsonEncoder.prototype.AppendString.call(final, ent.Caller.Function))
			}
		}
		if (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).MessageKey, "")) {
			await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).addKey($.pointerValue<__goscript_encoder.EncoderConfig>((enc$ as jsonEncoder).EncoderConfig).MessageKey) : jsonEncoder.prototype.addKey.call(final, $.pointerValue<__goscript_encoder.EncoderConfig>((enc$ as jsonEncoder).EncoderConfig).MessageKey))
			await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).AppendString(ent.Message) : jsonEncoder.prototype.AppendString.call(final, ent.Message))
		}
		if (buffer.Buffer.prototype.Len.call((enc$ as jsonEncoder).buf) > 0) {
			void (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(final))
			buffer.Buffer.prototype.Write.call((final$ as jsonEncoder).buf, buffer.Buffer.prototype.Bytes.call((enc$ as jsonEncoder).buf))
		}
		await __goscript_field.addFields($.interfaceValue<__goscript_encoder.ObjectEncoder | null>(final, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder")), fields)
		void (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).closeOpenNamespaces() : jsonEncoder.prototype.closeOpenNamespaces.call(final))
		if ((!$.stringEqual(ent.Stack, "")) && (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).StacktraceKey, ""))) {
			await (final !== null && (final as any).__isVarRef !== true && (final as any).__goValue === undefined ? ((final as any) as jsonEncoder).AddString($.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).StacktraceKey, ent.Stack) : jsonEncoder.prototype.AddString.call(final, $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).StacktraceKey, ent.Stack))
		}
		buffer.Buffer.prototype.AppendByte.call((final$ as jsonEncoder).buf, 125)
		buffer.Buffer.prototype.AppendString.call((final$ as jsonEncoder).buf, $.pointerValue<__goscript_encoder.EncoderConfig>((final$ as jsonEncoder).EncoderConfig).LineEnding)

		let ret: buffer.Buffer | $.VarRef<buffer.Buffer> | null = (final$ as jsonEncoder).buf
		putJSONEncoder(final)
		return [ret, null]
	}

	public async OpenNamespace(key: string): globalThis.Promise<void> {
		let enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addKey(key) : jsonEncoder.prototype.addKey.call(enc, key))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 123);
		;(enc$ as jsonEncoder).openNamespaces++
	}

	public addElementSeparator(): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		let last = buffer.Buffer.prototype.Len.call((enc$ as jsonEncoder).buf) - 1
		if (last < 0) {
			return
		}
		switch ($.arrayIndex(buffer.Buffer.prototype.Bytes.call((enc$ as jsonEncoder).buf)!, last)) {
			case 123:
			case 91:
			case 58:
			case 44:
			case 32:
			{
				return
				break
			}
			default:
			{
				buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 44)
				if ((enc$ as jsonEncoder).spaced) {
					buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 32)
				}
				break
			}
		}
	}

	public async addKey(key: string): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).safeAddString(key) : jsonEncoder.prototype.safeAddString.call(enc, key))
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 58)
		if ((enc$ as jsonEncoder).spaced) {
			buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 32)
		}
	}

	public appendComplex(val: $.Complex, precision: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		// Cast to a platform-independent, fixed-size type.
		let r = $.real(val)
		let i = $.imag(val)
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
		// Because we're always in a quoted string, we can use strconv without
		// special-casing NaN and +/-Inf.
		buffer.Buffer.prototype.AppendFloat.call((enc$ as jsonEncoder).buf, r, precision)
		// If imaginary part is less than 0, minus (-) sign is added by default
		// by AppendFloat.
		if (i >= 0) {
			buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 43)
		}
		buffer.Buffer.prototype.AppendFloat.call((enc$ as jsonEncoder).buf, i, precision)
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 105)
		buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 34)
	}

	public appendFloat(val: number, bitSize: number): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		void (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).addElementSeparator() : jsonEncoder.prototype.addElementSeparator.call(enc))
		switch ((true as boolean)) {
			case math.IsNaN(val):
			{
				buffer.Buffer.prototype.AppendString.call((enc$ as jsonEncoder).buf, "\"NaN\"")
				break
			}
			case math.IsInf(val, 1):
			{
				buffer.Buffer.prototype.AppendString.call((enc$ as jsonEncoder).buf, "\"+Inf\"")
				break
			}
			case math.IsInf(val, -1):
			{
				buffer.Buffer.prototype.AppendString.call((enc$ as jsonEncoder).buf, "\"-Inf\"")
				break
			}
			default:
			{
				buffer.Buffer.prototype.AppendFloat.call((enc$ as jsonEncoder).buf, val, bitSize)
				break
			}
		}
	}

	public async clone(): globalThis.Promise<jsonEncoder | $.VarRef<jsonEncoder> | null> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		let clone: jsonEncoder | $.VarRef<jsonEncoder> | null = (await (_jsonPool !== null && (_jsonPool as any).__isVarRef !== true && (_jsonPool as any).__goValue === undefined ? ((_jsonPool as any) as pool.Pool).Get(__goscriptStatic0()) : pool.Pool.prototype.Get.call(_jsonPool, __goscriptStatic0())) as jsonEncoder | $.VarRef<jsonEncoder> | null)
		let clone$: jsonEncoder = clone == null ? $.pointerTarget<jsonEncoder>(clone) : (clone as any).__isVarRef === true ? (clone as any).value : (clone as any).__goValue === undefined ? (clone as any) : $.pointerTarget<jsonEncoder>(clone);
		;(clone$ as jsonEncoder).EncoderConfig = (enc$ as jsonEncoder).EncoderConfig;
		;(clone$ as jsonEncoder).spaced = (enc$ as jsonEncoder).spaced;
		;(clone$ as jsonEncoder).openNamespaces = (enc$ as jsonEncoder).openNamespaces;
		;(clone$ as jsonEncoder).buf = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer.Buffer | $.VarRef<buffer.Buffer> | null)
		return clone
	}

	public closeOpenNamespaces(): void {
		let enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		for (let i = 0; i < (enc$ as jsonEncoder).openNamespaces; i++) {
			buffer.Buffer.prototype.AppendByte.call((enc$ as jsonEncoder).buf, 125)
		}
		;(enc$ as jsonEncoder).openNamespaces = 0
	}

	public async encodeReflected(obj: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		if (obj == null) {
			return [nullLiteralBytes, null]
		}
		await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as jsonEncoder).resetReflectBuf() : jsonEncoder.prototype.resetReflectBuf.call(enc))
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reflected_encoder.ReflectedEncoder, null>>((enc$ as jsonEncoder).reflectEnc).Encode(obj), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		buffer.Buffer.prototype.TrimNewline.call((enc$ as jsonEncoder).reflectBuf)
		return [buffer.Buffer.prototype.Bytes.call((enc$ as jsonEncoder).reflectBuf), null]
	}

	public async resetReflectBuf(): globalThis.Promise<void> {
		let enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
		if ((enc$ as jsonEncoder).reflectBuf == null) {
			;(enc$ as jsonEncoder).reflectBuf = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer.Buffer | $.VarRef<buffer.Buffer> | null);
			;(enc$ as jsonEncoder).reflectEnc = (__goscriptAwait = $.pointerValue<__goscript_encoder.EncoderConfig>((enc$ as jsonEncoder).EncoderConfig).NewReflectedEncoder!($.interfaceValue<io.Writer | null>((enc$ as jsonEncoder).reflectBuf, "*buffer.Buffer", /* @__PURE__ */ $.pointerType("buffer.Buffer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			buffer.Buffer.prototype.Reset.call((enc$ as jsonEncoder).reflectBuf)
		}
	}

	public async safeAddByteString(s: $.Slice<number>): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await safeAppendStringLike(__goscriptStatic1(), $.functionValue((b: buffer.Buffer | $.VarRef<buffer.Buffer> | null, v: $.Slice<number>): void => $.pointerValue<buffer.Buffer>(b).AppendBytes(v), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("buffer.Buffer"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)), utf8.DecodeRune, $.pointerValue<jsonEncoder>(enc).buf, s)
	}

	public async safeAddString(s: string): globalThis.Promise<void> {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		await safeAppendStringLike(__goscriptStatic2(), $.functionValue((b: buffer.Buffer | $.VarRef<buffer.Buffer> | null, s: string): void => $.pointerValue<buffer.Buffer>(b).AppendString(s), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("buffer.Buffer"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)), utf8.DecodeRuneInString, $.pointerValue<jsonEncoder>(enc).buf, s)
	}

	public truncate(): void {
		const enc: jsonEncoder | $.VarRef<jsonEncoder> | null = this;
		buffer.Buffer.prototype.Reset.call($.pointerValue<jsonEncoder>(enc).buf)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.jsonEncoder",
		() => new jsonEncoder(),
		() => [$.methodSignature("AddArray", [["key", /* @__PURE__ */ $.basicType("string")], ["arr", "zapcore.ArrayMarshaler"]], ["error"], true), $.methodSignature("AddBinary", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AddBool", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("AddByteString", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AddComplex128", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("complex128")]], [], true), $.methodSignature("AddComplex64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("complex64")]], [], true), $.methodSignature("AddDuration", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("AddFloat32", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("float32")]], [], true), $.methodSignature("AddFloat64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("AddInt", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("AddInt16", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int16")]], [], true), $.methodSignature("AddInt32", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("AddInt64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AddInt8", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int8")]], [], true), $.methodSignature("AddObject", [["key", /* @__PURE__ */ $.basicType("string")], ["obj", "zapcore.ObjectMarshaler"]], ["error"], true), $.methodSignature("AddReflected", [["key", /* @__PURE__ */ $.basicType("string")], ["obj", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("AddString", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("AddTime", [["key", /* @__PURE__ */ $.basicType("string")], ["val", "time.Time"]], [], true), $.methodSignature("AddUint", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("AddUint16", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("AddUint32", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("AddUint64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("AddUint8", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("AddUintptr", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uintptr")]], [], true), $.methodSignature("AppendArray", [["arr", "zapcore.ArrayMarshaler"]], ["error"], true), $.methodSignature("AppendBool", [["val", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("AppendByteString", [["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AppendComplex128", [["v", /* @__PURE__ */ $.basicType("complex128")]], [], true), $.methodSignature("AppendComplex64", [["v", /* @__PURE__ */ $.basicType("complex64")]], [], true), $.methodSignature("AppendDuration", [["val", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("AppendFloat32", [["v", /* @__PURE__ */ $.basicType("float32")]], [], true), $.methodSignature("AppendFloat64", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("AppendInt", [["v", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("AppendInt16", [["v", /* @__PURE__ */ $.basicType("int16")]], [], true), $.methodSignature("AppendInt32", [["v", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("AppendInt64", [["val", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AppendInt8", [["v", /* @__PURE__ */ $.basicType("int8")]], [], true), $.methodSignature("AppendObject", [["obj", "zapcore.ObjectMarshaler"]], ["error"], true), $.methodSignature("AppendReflected", [["val", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("AppendString", [["val", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("AppendTime", [["val", "time.Time"]], [], true), $.methodSignature("AppendTimeLayout", [["time", "time.Time"], ["layout", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("AppendUint", [["v", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("AppendUint16", [["v", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("AppendUint32", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("AppendUint64", [["val", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("AppendUint8", [["v", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("AppendUintptr", [["v", /* @__PURE__ */ $.basicType("uintptr")]], [], true), $.methodSignature("Clone", [], ["zapcore.Encoder"], true), $.methodSignature("EncodeEntry", [["ent", "zapcore.Entry"], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [/* @__PURE__ */ $.pointerType("buffer.Buffer"), "error"], true), $.methodSignature("OpenNamespace", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("addElementSeparator", [], [], true), $.methodSignature("addKey", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("appendComplex", [["val", /* @__PURE__ */ $.basicType("complex128")], ["precision", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("appendFloat", [["val", /* @__PURE__ */ $.basicType("float64")], ["bitSize", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("zapcore.jsonEncoder")], true), $.methodSignature("closeOpenNamespaces", [], [], true), $.methodSignature("encodeReflected", [["obj", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("resetReflectBuf", [], [], true), $.methodSignature("safeAddByteString", [["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("safeAddString", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("truncate", [], [], true)],
		jsonEncoder,
		() => [/* @__PURE__ */ $.structField("EncoderConfig", /* @__PURE__ */ $.pointerType("zapcore.EncoderConfig"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.pointerType("buffer.Buffer"), [1], 8, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("spaced", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("openNamespaces", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("reflectBuf", /* @__PURE__ */ $.pointerType("buffer.Buffer"), [4], 32, false, { pkgPath: "go.uber.org/zap/zapcore" }), /* @__PURE__ */ $.structField("reflectEnc", "zapcore.ReflectedEncoder", [5], 40, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export const _hex: string = "0123456789abcdef"

export let _jsonPool: pool.Pool | $.VarRef<pool.Pool> | null = await pool.New(__goscriptStatic0(), $.functionValue((): jsonEncoder | $.VarRef<jsonEncoder> | null => {
	return new jsonEncoder()
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("zapcore.jsonEncoder")] } as $.FunctionTypeInfo)))

export function __goscript_set__jsonPool(__goscriptValue: pool.Pool | $.VarRef<pool.Pool> | null): void {
	_jsonPool = __goscriptValue
}

export function putJSONEncoder(enc: jsonEncoder | $.VarRef<jsonEncoder> | null): void {
	const enc$: jsonEncoder = enc == null ? $.pointerTarget<jsonEncoder>(enc) : (enc as any).__isVarRef === true ? (enc as any).value : (enc as any).__goValue === undefined ? (enc as any) : $.pointerTarget<jsonEncoder>(enc)
	if ((enc$ as jsonEncoder).reflectBuf != null) {
		buffer.Buffer.prototype.Free.call((enc$ as jsonEncoder).reflectBuf)
	}
	;(enc$ as jsonEncoder).EncoderConfig = null;
	;(enc$ as jsonEncoder).buf = null;
	;(enc$ as jsonEncoder).spaced = false;
	;(enc$ as jsonEncoder).openNamespaces = 0;
	;(enc$ as jsonEncoder).reflectBuf = null;
	;(enc$ as jsonEncoder).reflectEnc = null
	void (_jsonPool !== null && (_jsonPool as any).__isVarRef !== true && (_jsonPool as any).__goValue === undefined ? ((_jsonPool as any) as pool.Pool).Put(__goscriptStatic0(), enc) : pool.Pool.prototype.Put.call(_jsonPool, __goscriptStatic0(), enc))
}

export async function NewJSONEncoder(cfg: __goscript_encoder.EncoderConfig): globalThis.Promise<__goscript_encoder.Encoder | null> {
	return $.interfaceValue<__goscript_encoder.Encoder | null>(await newJSONEncoder((cfg).clone(), false), "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))
}

export async function newJSONEncoder(__goscriptParam0: __goscript_encoder.EncoderConfig, spaced: boolean): globalThis.Promise<jsonEncoder | $.VarRef<jsonEncoder> | null> {
	let cfg: $.VarRef<__goscript_encoder.EncoderConfig> = $.varRef(__goscriptParam0)
	if (cfg.value.SkipLineEnding) {
		cfg.value.LineEnding = ""
	} else {
		if ($.stringEqual(cfg.value.LineEnding, "")) {
			cfg.value.LineEnding = "\n"
		}
	}

	// If no EncoderConfig.NewReflectedEncoder is provided by the user, then use default
	if (cfg.value.NewReflectedEncoder == null) {
		cfg.value.NewReflectedEncoder = __goscript_reflected_encoder.defaultReflectedEncoder
	}

	return (await (async () => { const __goscriptLiteralField0 = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer.Buffer | $.VarRef<buffer.Buffer> | null); return new jsonEncoder({EncoderConfig: cfg, buf: __goscriptLiteralField0, spaced: spaced}) })())
}

export let nullLiteralBytes: $.Slice<number> = new Uint8Array([110, 117, 108, 108])

export function __goscript_set_nullLiteralBytes(__goscriptValue: $.Slice<number>): void {
	nullLiteralBytes = __goscriptValue
}

export async function safeAppendStringLike(__typeArgs: $.GenericTypeArgs | undefined, appendTo: ((_p0: buffer.Buffer | $.VarRef<buffer.Buffer> | null, _p1: any) => void) | null, decodeRune: ((_p0: any) => [number, number] | globalThis.Promise<[number, number]>) | null, buf: buffer.Buffer | $.VarRef<buffer.Buffer> | null, s: any): globalThis.Promise<void> {
	// The encoding logic below works by skipping over characters
	// that can be safely copied as-is,
	// until a character is found that needs special handling.
	// At that point, we copy everything we've seen so far,
	// and then handle that special character.
	//
	// last is the index of the last byte that was copied to the buffer.
	let last = 0
	for (let i = 0; i < $.len(s); ) {
		if ($.arrayIndex(s!, i) >= 128) {
			// Character >= RuneSelf may be part of a multi-byte rune.
			// They need to be decoded before we can decide how to handle them.
			let [r, size] = await decodeRune!($.goSlice(s, i, undefined))
			if ((r != 65533) || (size != 1)) {
				// No special handling required.
				// Skip over this rune and continue.
				i = i + (size)
				continue
			}

			// Invalid UTF-8 sequence.
			// Replace it with the Unicode replacement character.
			void (__goscriptAwait = appendTo!(buf, $.goSlice(s, last, i)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendString("\\ufffd") : buffer.Buffer.prototype.AppendString.call(buf, "\\ufffd"))

			i++
			last = i
		} else {
			// Character < RuneSelf is a single-byte UTF-8 rune.
			if ((($.arrayIndex(s!, i) >= 0x20) && ($.arrayIndex(s!, i) != 92)) && ($.arrayIndex(s!, i) != 34)) {
				// No escaping necessary.
				// Skip over this character and continue.
				i++
				continue
			}

			// This character needs to be escaped.
			void (__goscriptAwait = appendTo!(buf, $.goSlice(s, last, i)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch ($.arrayIndex(s!, i)) {
				case 92:
				case 34:
				{
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(92) : buffer.Buffer.prototype.AppendByte.call(buf, 92))
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte($.arrayIndex(s!, i)) : buffer.Buffer.prototype.AppendByte.call(buf, $.arrayIndex(s!, i)))
					break
				}
				case 10:
				{
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(92) : buffer.Buffer.prototype.AppendByte.call(buf, 92))
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(110) : buffer.Buffer.prototype.AppendByte.call(buf, 110))
					break
				}
				case 13:
				{
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(92) : buffer.Buffer.prototype.AppendByte.call(buf, 92))
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(114) : buffer.Buffer.prototype.AppendByte.call(buf, 114))
					break
				}
				case 9:
				{
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(92) : buffer.Buffer.prototype.AppendByte.call(buf, 92))
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte(116) : buffer.Buffer.prototype.AppendByte.call(buf, 116))
					break
				}
				default:
				{
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendString("\\u00") : buffer.Buffer.prototype.AppendString.call(buf, "\\u00"))
					buffer.Buffer.prototype.AppendByte.call(buf, $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.uintShr($.arrayIndex(s!, i), 4, 8)))
					void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as buffer.Buffer).AppendByte($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.arrayIndex(s!, i) & 0xF)) : buffer.Buffer.prototype.AppendByte.call(buf, $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.arrayIndex(s!, i) & 0xF)))
					break
				}
			}

			i++
			last = i
		}
	}

	// add remaining
	void (__goscriptAwait = appendTo!(buf, $.goSlice(s, last, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"), zero: () => null, methods: {AddArray: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddArray(...$.stripGenericTypeArgs(args)), AddBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddBinary(...$.stripGenericTypeArgs(args)), AddBool: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddBool(...$.stripGenericTypeArgs(args)), AddByteString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddByteString(...$.stripGenericTypeArgs(args)), AddComplex128: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddComplex128(...$.stripGenericTypeArgs(args)), AddComplex64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddComplex64(...$.stripGenericTypeArgs(args)), AddDuration: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddDuration(...$.stripGenericTypeArgs(args)), AddFloat32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddFloat32(...$.stripGenericTypeArgs(args)), AddFloat64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddFloat64(...$.stripGenericTypeArgs(args)), AddInt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddInt(...$.stripGenericTypeArgs(args)), AddInt16: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddInt16(...$.stripGenericTypeArgs(args)), AddInt32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddInt32(...$.stripGenericTypeArgs(args)), AddInt64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddInt64(...$.stripGenericTypeArgs(args)), AddInt8: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddInt8(...$.stripGenericTypeArgs(args)), AddObject: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddObject(...$.stripGenericTypeArgs(args)), AddReflected: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddReflected(...$.stripGenericTypeArgs(args)), AddString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddString(...$.stripGenericTypeArgs(args)), AddTime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddTime(...$.stripGenericTypeArgs(args)), AddUint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddUint(...$.stripGenericTypeArgs(args)), AddUint16: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddUint16(...$.stripGenericTypeArgs(args)), AddUint32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddUint32(...$.stripGenericTypeArgs(args)), AddUint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddUint64(...$.stripGenericTypeArgs(args)), AddUint8: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddUint8(...$.stripGenericTypeArgs(args)), AddUintptr: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddUintptr(...$.stripGenericTypeArgs(args)), AppendArray: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendArray(...$.stripGenericTypeArgs(args)), AppendBool: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBool(...$.stripGenericTypeArgs(args)), AppendByteString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendByteString(...$.stripGenericTypeArgs(args)), AppendComplex128: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendComplex128(...$.stripGenericTypeArgs(args)), AppendComplex64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendComplex64(...$.stripGenericTypeArgs(args)), AppendDuration: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendDuration(...$.stripGenericTypeArgs(args)), AppendFloat32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFloat32(...$.stripGenericTypeArgs(args)), AppendFloat64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFloat64(...$.stripGenericTypeArgs(args)), AppendInt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt(...$.stripGenericTypeArgs(args)), AppendInt16: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt16(...$.stripGenericTypeArgs(args)), AppendInt32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt32(...$.stripGenericTypeArgs(args)), AppendInt64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt64(...$.stripGenericTypeArgs(args)), AppendInt8: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt8(...$.stripGenericTypeArgs(args)), AppendObject: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendObject(...$.stripGenericTypeArgs(args)), AppendReflected: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendReflected(...$.stripGenericTypeArgs(args)), AppendString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendString(...$.stripGenericTypeArgs(args)), AppendTime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendTime(...$.stripGenericTypeArgs(args)), AppendTimeLayout: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendTimeLayout(...$.stripGenericTypeArgs(args)), AppendUint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint(...$.stripGenericTypeArgs(args)), AppendUint16: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint16(...$.stripGenericTypeArgs(args)), AppendUint32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint32(...$.stripGenericTypeArgs(args)), AppendUint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint64(...$.stripGenericTypeArgs(args)), AppendUint8: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint8(...$.stripGenericTypeArgs(args)), AppendUintptr: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUintptr(...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clone(...$.stripGenericTypeArgs(args)), EncodeEntry: (receiver: any, ...args: any[]) => $.pointerValue(receiver).EncodeEntry(...$.stripGenericTypeArgs(args)), OpenNamespace: (receiver: any, ...args: any[]) => $.pointerValue(receiver).OpenNamespace(...$.stripGenericTypeArgs(args)), addElementSeparator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).addElementSeparator(...$.stripGenericTypeArgs(args)), addKey: (receiver: any, ...args: any[]) => $.pointerValue(receiver).addKey(...$.stripGenericTypeArgs(args)), appendComplex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendComplex(...$.stripGenericTypeArgs(args)), appendFloat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFloat(...$.stripGenericTypeArgs(args)), clone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).clone(...$.stripGenericTypeArgs(args)), closeOpenNamespaces: (receiver: any, ...args: any[]) => $.pointerValue(receiver).closeOpenNamespaces(...$.stripGenericTypeArgs(args)), encodeReflected: (receiver: any, ...args: any[]) => $.pointerValue(receiver).encodeReflected(...$.stripGenericTypeArgs(args)), resetReflectBuf: (receiver: any, ...args: any[]) => $.pointerValue(receiver).resetReflectBuf(...$.stripGenericTypeArgs(args)), safeAddByteString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).safeAddByteString(...$.stripGenericTypeArgs(args)), safeAddString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).safeAddString(...$.stripGenericTypeArgs(args)), truncate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).truncate(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, S: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), zero: () => null }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, S: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptAwait: any
