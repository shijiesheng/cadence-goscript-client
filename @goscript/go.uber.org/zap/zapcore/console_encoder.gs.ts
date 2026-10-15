// Generated file based on console_encoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as buffer from "@goscript/go.uber.org/zap/buffer/index.js"

import * as bufferpool from "@goscript/go.uber.org/zap/internal/bufferpool/index.js"

import * as pool from "@goscript/go.uber.org/zap/internal/pool/index.js"

import type * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_json_encoder from "./json_encoder.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import * as __goscript_memory_encoder from "./memory_encoder.gs.ts"

import * as __goscript_reflected_encoder from "./reflected_encoder.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/zap/buffer/index.js"
import "@goscript/go.uber.org/zap/internal/bufferpool/index.js"
import "@goscript/go.uber.org/zap/internal/pool/index.js"
import "@goscript/time/index.js"
import "./encoder.gs.ts"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./json_encoder.gs.ts"
import "./level.gs.ts"
import "./memory_encoder.gs.ts"
import "./reflected_encoder.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.consoleEncoder"])

export class consoleEncoder {
	public get jsonEncoder(): __goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null {
		return this._fields.jsonEncoder
	}

	public set jsonEncoder(value: __goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null) {
		this._fields.jsonEncoder = value
	}

	public _fields: {
		jsonEncoder: __goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null
	}

	constructor(init?: Partial<{jsonEncoder?: __goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			jsonEncoder: init?.jsonEncoder ?? (null! as __goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): consoleEncoder {
		return new consoleEncoder(this, true)
	}

	public __goscriptAssign(source: consoleEncoder): void {
		const target = this._fields
		const values = source._fields
		target.jsonEncoder = values.jsonEncoder
	}

	public async Clone(): globalThis.Promise<__goscript_encoder.Encoder | null> {
		const c = this;
		return $.interfaceValue<__goscript_encoder.Encoder | null>($.markAsStructValue(new consoleEncoder({jsonEncoder: $.mustTypeAssert<__goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null>(await __goscript_json_encoder.jsonEncoder.prototype.Clone.call(c.jsonEncoder), /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))})), "zapcore.consoleEncoder", "zapcore.consoleEncoder")
	}

	public async EncodeEntry(ent: __goscript_entry.Entry, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<[buffer.Buffer | $.VarRef<buffer.Buffer> | null, $.GoError]> {
		const c = this;
		let line: buffer.Buffer | $.VarRef<buffer.Buffer> | null = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer.Buffer | $.VarRef<buffer.Buffer> | null)

		// We don't want the entry's metadata to be quoted and escaped (if it's
		// encoded as strings), which means that we can't use the JSON encoder. The
		// simplest option is to use the memory encoder and fmt.Fprint.
		//
		// If this ever becomes a performance bottleneck, we can implement
		// ArrayEncoder for our plain-text format.
		let arr: __goscript_memory_encoder.sliceArrayEncoder | $.VarRef<__goscript_memory_encoder.sliceArrayEncoder> | null = await getSliceEncoder()
		let arr$: __goscript_memory_encoder.sliceArrayEncoder = arr == null ? $.pointerTarget<__goscript_memory_encoder.sliceArrayEncoder>(arr) : (arr as any).__isVarRef === true ? (arr as any).value : (arr as any).__goValue === undefined ? (arr as any) : $.pointerTarget<__goscript_memory_encoder.sliceArrayEncoder>(arr)
		if (((!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).TimeKey, "")) && ($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).EncodeTime != null)) && !$.markAsStructValue($.cloneStructValue(ent.Time)).IsZero()) {
			void (__goscriptAwait = $.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).EncodeTime!($.markAsStructValue($.cloneStructValue(ent.Time)), $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(arr, "*zapcore.sliceArrayEncoder", /* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).LevelKey, "")) && ($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).EncodeLevel != null)) {
			void (__goscriptAwait = $.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).EncodeLevel!(ent.Level, $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(arr, "*zapcore.sliceArrayEncoder", /* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((!$.stringEqual(ent.LoggerName, "")) && (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).NameKey, ""))) {
			let nameEncoder = $.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).EncodeName

			if (nameEncoder == null) {
				// Fall back to FullNameEncoder for backward compatibility.
				nameEncoder = __goscript_encoder.FullNameEncoder
			}

			void (__goscriptAwait = nameEncoder!(ent.LoggerName, $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(arr, "*zapcore.sliceArrayEncoder", /* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if (ent.Caller.Defined) {
			if ((!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).CallerKey, "")) && ($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).EncodeCaller != null)) {
				void (__goscriptAwait = $.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).EncodeCaller!((ent.Caller).clone(), $.interfaceValue<__goscript_encoder.PrimitiveArrayEncoder | null>(arr, "*zapcore.sliceArrayEncoder", /* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).FunctionKey, "")) {
				void (arr !== null && (arr as any).__isVarRef !== true && (arr as any).__goValue === undefined ? ((arr as any) as __goscript_memory_encoder.sliceArrayEncoder).AppendString(ent.Caller.Function) : __goscript_memory_encoder.sliceArrayEncoder.prototype.AppendString.call(arr, ent.Caller.Function))
			}
		}
		for (let __goscriptRangeTarget0 = (arr$ as __goscript_memory_encoder.sliceArrayEncoder).elems, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if (i > 0) {
				buffer.Buffer.prototype.AppendString.call(line, $.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).ConsoleSeparator)
			}
			await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(line, "*buffer.Buffer", /* @__PURE__ */ $.pointerType("buffer.Buffer")))!, $.arrayIndex((arr$ as __goscript_memory_encoder.sliceArrayEncoder).elems!, i))
		}
		await putSliceEncoder(arr)

		// Add the message itself.
		if (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).MessageKey, "")) {
			c.addSeparatorIfNecessary(line)
			void (line !== null && (line as any).__isVarRef !== true && (line as any).__goValue === undefined ? ((line as any) as buffer.Buffer).AppendString(ent.Message) : buffer.Buffer.prototype.AppendString.call(line, ent.Message))
		}

		// Add any structured context.
		await $.markAsStructValue($.cloneStructValue(c)).writeContext(line, fields)

		// If there's no stacktrace key, honor that; this allows users to force
		// single-line output.
		if ((!$.stringEqual(ent.Stack, "")) && (!$.stringEqual($.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).StacktraceKey, ""))) {
			void (line !== null && (line as any).__isVarRef !== true && (line as any).__goValue === undefined ? ((line as any) as buffer.Buffer).AppendByte(10) : buffer.Buffer.prototype.AppendByte.call(line, 10))
			void (line !== null && (line as any).__isVarRef !== true && (line as any).__goValue === undefined ? ((line as any) as buffer.Buffer).AppendString(ent.Stack) : buffer.Buffer.prototype.AppendString.call(line, ent.Stack))
		}

		buffer.Buffer.prototype.AppendString.call(line, $.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).LineEnding)
		return [line, null]
	}

	public addSeparatorIfNecessary(line: buffer.Buffer | $.VarRef<buffer.Buffer> | null): void {
		const c = this;
		if ((line !== null && (line as any).__isVarRef !== true && (line as any).__goValue === undefined ? ((line as any) as buffer.Buffer).Len() : buffer.Buffer.prototype.Len.call(line)) > 0) {
			buffer.Buffer.prototype.AppendString.call(line, $.pointerValue<__goscript_encoder.EncoderConfig>($.pointerValue<__goscript_json_encoder.jsonEncoder>(c.jsonEncoder).EncoderConfig).ConsoleSeparator)
		}
	}

	public async writeContext(line: buffer.Buffer | $.VarRef<buffer.Buffer> | null, extra: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const c = this;
		using __defer = new $.DisposableStack()
		let context: __goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null = $.mustTypeAssert<__goscript_json_encoder.jsonEncoder | $.VarRef<__goscript_json_encoder.jsonEncoder> | null>(await __goscript_json_encoder.jsonEncoder.prototype.Clone.call(c.jsonEncoder), /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"))
		let context$: __goscript_json_encoder.jsonEncoder = context == null ? $.pointerTarget<__goscript_json_encoder.jsonEncoder>(context) : (context as any).__isVarRef === true ? (context as any).value : (context as any).__goValue === undefined ? (context as any) : $.pointerTarget<__goscript_json_encoder.jsonEncoder>(context)
		__defer.defer(() => { ((): void => {
			// putJSONEncoder assumes the buffer is still used, but we write out the buffer so
			// we can free it.
			buffer.Buffer.prototype.Free.call((context$ as __goscript_json_encoder.jsonEncoder).buf)
			__goscript_json_encoder.putJSONEncoder(context)
		})() })

		await __goscript_field.addFields($.interfaceValue<__goscript_encoder.ObjectEncoder | null>(context, "*zapcore.jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder")), extra)
		void (context !== null && (context as any).__isVarRef !== true && (context as any).__goValue === undefined ? ((context as any) as __goscript_json_encoder.jsonEncoder).closeOpenNamespaces() : __goscript_json_encoder.jsonEncoder.prototype.closeOpenNamespaces.call(context))
		if (buffer.Buffer.prototype.Len.call((context$ as __goscript_json_encoder.jsonEncoder).buf) == 0) {
			return
		}

		$.markAsStructValue($.cloneStructValue(c)).addSeparatorIfNecessary(line)
		void (line !== null && (line as any).__isVarRef !== true && (line as any).__goValue === undefined ? ((line as any) as buffer.Buffer).AppendByte(123) : buffer.Buffer.prototype.AppendByte.call(line, 123))
		void (line !== null && (line as any).__isVarRef !== true && (line as any).__goValue === undefined ? ((line as any) as buffer.Buffer).Write(buffer.Buffer.prototype.Bytes.call((context$ as __goscript_json_encoder.jsonEncoder).buf)) : buffer.Buffer.prototype.Write.call(line, buffer.Buffer.prototype.Bytes.call((context$ as __goscript_json_encoder.jsonEncoder).buf)))
		void (line !== null && (line as any).__isVarRef !== true && (line as any).__goValue === undefined ? ((line as any) as buffer.Buffer).AppendByte(125) : buffer.Buffer.prototype.AppendByte.call(line, 125))
	}

	public async AddArray(key: any, arr: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddArray(key, arr)
	}

	public async AddBinary(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddBinary(key, val)
	}

	public async AddBool(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddBool(key, val)
	}

	public async AddByteString(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddByteString(key, val)
	}

	public async AddComplex128(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddComplex128(key, val)
	}

	public async AddComplex64(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddComplex64(key, val)
	}

	public async AddDuration(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddDuration(key, val)
	}

	public async AddFloat32(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddFloat32(key, val)
	}

	public async AddFloat64(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddFloat64(key, val)
	}

	public async AddInt(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddInt(k, v)
	}

	public async AddInt16(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddInt16(k, v)
	}

	public async AddInt32(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddInt32(k, v)
	}

	public async AddInt64(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddInt64(key, val)
	}

	public async AddInt8(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddInt8(k, v)
	}

	public async AddObject(key: any, obj: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddObject(key, obj)
	}

	public async AddReflected(key: any, obj: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddReflected(key, obj)
	}

	public async AddString(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddString(key, val)
	}

	public async AddTime(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddTime(key, val)
	}

	public async AddUint(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddUint(k, v)
	}

	public async AddUint16(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddUint16(k, v)
	}

	public async AddUint32(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddUint32(k, v)
	}

	public async AddUint64(key: any, val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddUint64(key, val)
	}

	public async AddUint8(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddUint8(k, v)
	}

	public async AddUintptr(k: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AddUintptr(k, v)
	}

	public async AppendArray(arr: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendArray(arr)
	}

	public AppendBool(val: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendBool(val)
	}

	public async AppendByteString(val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendByteString(val)
	}

	public AppendComplex128(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendComplex128(v)
	}

	public AppendComplex64(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendComplex64(v)
	}

	public async AppendDuration(val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendDuration(val)
	}

	public AppendFloat32(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendFloat32(v)
	}

	public AppendFloat64(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendFloat64(v)
	}

	public AppendInt(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendInt(v)
	}

	public AppendInt16(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendInt16(v)
	}

	public AppendInt32(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendInt32(v)
	}

	public AppendInt64(val: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendInt64(val)
	}

	public AppendInt8(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendInt8(v)
	}

	public async AppendObject(obj: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendObject(obj)
	}

	public async AppendReflected(val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendReflected(val)
	}

	public async AppendString(val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendString(val)
	}

	public async AppendTime(val: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendTime(val)
	}

	public AppendTimeLayout(time: any, layout: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendTimeLayout(time, layout)
	}

	public AppendUint(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendUint(v)
	}

	public AppendUint16(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendUint16(v)
	}

	public AppendUint32(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendUint32(v)
	}

	public AppendUint64(val: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendUint64(val)
	}

	public AppendUint8(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendUint8(v)
	}

	public AppendUintptr(v: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).AppendUintptr(v)
	}

	public async OpenNamespace(key: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).OpenNamespace(key)
	}

	public addElementSeparator(): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).addElementSeparator()
	}

	public async addKey(key: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).addKey(key)
	}

	public appendComplex(val: any, precision: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).appendComplex(val, precision)
	}

	public appendFloat(val: any, bitSize: any): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).appendFloat(val, bitSize)
	}

	public async clone(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).clone()
	}

	public closeOpenNamespaces(): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).closeOpenNamespaces()
	}

	public async encodeReflected(obj: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).encodeReflected(obj)
	}

	public async resetReflectBuf(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).resetReflectBuf()
	}

	public async safeAddByteString(s: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).safeAddByteString(s)
	}

	public async safeAddString(s: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).safeAddString(s)
	}

	public truncate(): any {
		return $.pointerValue<__goscript_json_encoder.jsonEncoder>(this.jsonEncoder).truncate()
	}

	static __typeInfo = $.registerStructType(
		"zapcore.consoleEncoder",
		() => new consoleEncoder(),
		() => [$.methodSignature("Clone", [], ["zapcore.Encoder"]), $.methodSignature("EncodeEntry", [["ent", "zapcore.Entry"], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [/* @__PURE__ */ $.pointerType("buffer.Buffer"), "error"]), $.methodSignature("addSeparatorIfNecessary", [["line", /* @__PURE__ */ $.pointerType("buffer.Buffer")]]), $.methodSignature("writeContext", [["line", /* @__PURE__ */ $.pointerType("buffer.Buffer")], ["extra", /* @__PURE__ */ $.sliceType("zapcore.Field")]]), $.methodSignature("AddArray", [["key", /* @__PURE__ */ $.basicType("string")], ["arr", "zapcore.ArrayMarshaler"]], ["error"]), $.methodSignature("AddBinary", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("AddBool", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("AddByteString", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("AddComplex128", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("complex128")]]), $.methodSignature("AddComplex64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("complex64")]]), $.methodSignature("AddDuration", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("AddFloat32", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("float32")]]), $.methodSignature("AddFloat64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("AddInt", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("AddInt16", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int16")]]), $.methodSignature("AddInt32", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("AddInt64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("AddInt8", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int8")]]), $.methodSignature("AddObject", [["key", /* @__PURE__ */ $.basicType("string")], ["obj", "zapcore.ObjectMarshaler"]], ["error"]), $.methodSignature("AddReflected", [["key", /* @__PURE__ */ $.basicType("string")], ["obj", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("AddString", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("AddTime", [["key", /* @__PURE__ */ $.basicType("string")], ["val", "time.Time"]]), $.methodSignature("AddUint", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint")]]), $.methodSignature("AddUint16", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint16")]]), $.methodSignature("AddUint32", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("AddUint64", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("uint64")]]), $.methodSignature("AddUint8", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uint8")]]), $.methodSignature("AddUintptr", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("uintptr")]]), $.methodSignature("AppendArray", [["arr", "zapcore.ArrayMarshaler"]], ["error"]), $.methodSignature("AppendBool", [["val", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("AppendByteString", [["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("AppendComplex128", [["v", /* @__PURE__ */ $.basicType("complex128")]]), $.methodSignature("AppendComplex64", [["v", /* @__PURE__ */ $.basicType("complex64")]]), $.methodSignature("AppendDuration", [["val", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("AppendFloat32", [["v", /* @__PURE__ */ $.basicType("float32")]]), $.methodSignature("AppendFloat64", [["v", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("AppendInt", [["v", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("AppendInt16", [["v", /* @__PURE__ */ $.basicType("int16")]]), $.methodSignature("AppendInt32", [["v", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("AppendInt64", [["val", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("AppendInt8", [["v", /* @__PURE__ */ $.basicType("int8")]]), $.methodSignature("AppendObject", [["obj", "zapcore.ObjectMarshaler"]], ["error"]), $.methodSignature("AppendReflected", [["val", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("AppendString", [["val", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("AppendTime", [["val", "time.Time"]]), $.methodSignature("AppendTimeLayout", [["time", "time.Time"], ["layout", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("AppendUint", [["v", /* @__PURE__ */ $.basicType("uint")]]), $.methodSignature("AppendUint16", [["v", /* @__PURE__ */ $.basicType("uint16")]]), $.methodSignature("AppendUint32", [["v", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("AppendUint64", [["val", /* @__PURE__ */ $.basicType("uint64")]]), $.methodSignature("AppendUint8", [["v", /* @__PURE__ */ $.basicType("uint8")]]), $.methodSignature("AppendUintptr", [["v", /* @__PURE__ */ $.basicType("uintptr")]]), $.methodSignature("OpenNamespace", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("addElementSeparator"), $.methodSignature("addKey", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("appendComplex", [["val", /* @__PURE__ */ $.basicType("complex128")], ["precision", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("appendFloat", [["val", /* @__PURE__ */ $.basicType("float64")], ["bitSize", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("zapcore.jsonEncoder")]), $.methodSignature("closeOpenNamespaces"), $.methodSignature("encodeReflected", [["obj", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("resetReflectBuf"), $.methodSignature("safeAddByteString", [["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("safeAddString", [["s", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("truncate")],
		consoleEncoder,
		() => [/* @__PURE__ */ $.structField("jsonEncoder", /* @__PURE__ */ $.pointerType("zapcore.jsonEncoder"), [0], 0, false, { pkgPath: "go.uber.org/zap/zapcore", anonymous: true })]
	)
}

export var _sliceEncoderPool: pool.Pool | $.VarRef<pool.Pool> | null

export async function __goscript_init__sliceEncoderPool(): globalThis.Promise<void> {
	if (((_sliceEncoderPool) as any) === undefined) {
		_sliceEncoderPool = await pool.New(__goscriptStatic0(), $.functionValue((): __goscript_memory_encoder.sliceArrayEncoder | $.VarRef<__goscript_memory_encoder.sliceArrayEncoder> | null => {
	return new __goscript_memory_encoder.sliceArrayEncoder({elems: $.makeSlice<any>(0, 2)})
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder")] } as $.FunctionTypeInfo)))
	}
}

export function __goscript_get__sliceEncoderPool(): pool.Pool | $.VarRef<pool.Pool> | null {
	if (((_sliceEncoderPool) as any) === undefined) {
		throw new globalThis.Error("goscript package variable _sliceEncoderPool read before initialization")
	}
	return _sliceEncoderPool
}

export function __goscript_set__sliceEncoderPool(__goscriptValue: pool.Pool | $.VarRef<pool.Pool> | null): void {
	_sliceEncoderPool = __goscriptValue
}

export async function getSliceEncoder(): globalThis.Promise<__goscript_memory_encoder.sliceArrayEncoder | $.VarRef<__goscript_memory_encoder.sliceArrayEncoder> | null> {
	return (await pool.Pool.prototype.Get.call((await __goscript_init__sliceEncoderPool(), __goscript_get__sliceEncoderPool()), __goscriptStatic0()) as __goscript_memory_encoder.sliceArrayEncoder | $.VarRef<__goscript_memory_encoder.sliceArrayEncoder> | null)
}

export async function putSliceEncoder(e: __goscript_memory_encoder.sliceArrayEncoder | $.VarRef<__goscript_memory_encoder.sliceArrayEncoder> | null): globalThis.Promise<void> {
	const e$: __goscript_memory_encoder.sliceArrayEncoder = e == null ? $.pointerTarget<__goscript_memory_encoder.sliceArrayEncoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<__goscript_memory_encoder.sliceArrayEncoder>(e);
	;(e$ as __goscript_memory_encoder.sliceArrayEncoder).elems = $.goSlice((e$ as __goscript_memory_encoder.sliceArrayEncoder).elems, undefined, 0)
	pool.Pool.prototype.Put.call((await __goscript_init__sliceEncoderPool(), __goscript_get__sliceEncoderPool()), __goscriptStatic0(), e)
}

export async function NewConsoleEncoder(cfg: __goscript_encoder.EncoderConfig): globalThis.Promise<__goscript_encoder.Encoder | null> {
	if ($.stringEqual(cfg.ConsoleSeparator, "")) {
		// Use a default delimiter of '\t' for backwards compatibility
		cfg.ConsoleSeparator = "\t"
	}
	return $.interfaceValue<__goscript_encoder.Encoder | null>((await (async () => { const __goscriptLiteralField0 = await __goscript_json_encoder.newJSONEncoder((cfg).clone(), true); return $.markAsStructValue(new consoleEncoder({jsonEncoder: __goscriptLiteralField0})) })()), "zapcore.consoleEncoder", "zapcore.consoleEncoder")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("zapcore.sliceArrayEncoder"), zero: () => null, methods: {AppendArray: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendArray(...$.stripGenericTypeArgs(args)), AppendBool: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBool(...$.stripGenericTypeArgs(args)), AppendByteString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendByteString(...$.stripGenericTypeArgs(args)), AppendComplex128: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendComplex128(...$.stripGenericTypeArgs(args)), AppendComplex64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendComplex64(...$.stripGenericTypeArgs(args)), AppendDuration: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendDuration(...$.stripGenericTypeArgs(args)), AppendFloat32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFloat32(...$.stripGenericTypeArgs(args)), AppendFloat64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFloat64(...$.stripGenericTypeArgs(args)), AppendInt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt(...$.stripGenericTypeArgs(args)), AppendInt16: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt16(...$.stripGenericTypeArgs(args)), AppendInt32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt32(...$.stripGenericTypeArgs(args)), AppendInt64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt64(...$.stripGenericTypeArgs(args)), AppendInt8: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt8(...$.stripGenericTypeArgs(args)), AppendObject: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendObject(...$.stripGenericTypeArgs(args)), AppendReflected: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendReflected(...$.stripGenericTypeArgs(args)), AppendString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendString(...$.stripGenericTypeArgs(args)), AppendTime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendTime(...$.stripGenericTypeArgs(args)), AppendUint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint(...$.stripGenericTypeArgs(args)), AppendUint16: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint16(...$.stripGenericTypeArgs(args)), AppendUint32: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint32(...$.stripGenericTypeArgs(args)), AppendUint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint64(...$.stripGenericTypeArgs(args)), AppendUint8: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint8(...$.stripGenericTypeArgs(args)), AppendUintptr: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUintptr(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
