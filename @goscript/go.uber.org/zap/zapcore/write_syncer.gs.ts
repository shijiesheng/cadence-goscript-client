// Generated file based on write_syncer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/multierr/index.js"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.WriteSyncer", "zapcore.lockedWriteSyncer", "zapcore.writerWrapper", "zapcore.multiWriteSyncer"])

export type WriteSyncer = {
	Sync(): $.GoError | globalThis.Promise<$.GoError>
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"zapcore.WriteSyncer",
	null,
	[$.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type multiWriteSyncer = $.Slice<WriteSyncer | null>

$.registerNamedType("zapcore.multiWriteSyncer", /* @__PURE__ */ $.sliceType("zapcore.WriteSyncer"));

$.registerNamedValueType(
	"zapcore.multiWriteSyncer",
	{Sync: (receiver: any, ...args: any[]) => (multiWriteSyncer_Sync as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (multiWriteSyncer_Write as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"])]
);

$.registerNamedValueType(
	"*zapcore.multiWriteSyncer",
	{Sync: (receiver: any, ...args: any[]) => (multiWriteSyncer_Sync as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (multiWriteSyncer_Write as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"])]
);

export class lockedWriteSyncer {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get ws(): WriteSyncer | null {
		return this._fields.ws
	}

	public set ws(value: WriteSyncer | null) {
		this._fields.ws = value
	}

	public _fields: {
		Mutex: sync.Mutex
		ws: WriteSyncer | null
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, ws?: WriteSyncer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			ws: init?.ws ?? (null! as WriteSyncer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lockedWriteSyncer {
		return new lockedWriteSyncer(this, true)
	}

	public __goscriptAssign(source: lockedWriteSyncer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.ws = $.assignFieldValue(target.ws, values.ws, "zapcore.WriteSyncer")
	}

	public async Sync(): globalThis.Promise<$.GoError> {
		const s: lockedWriteSyncer | $.VarRef<lockedWriteSyncer> | null = this;
		await $.pointerValue<lockedWriteSyncer>(s).Mutex.Lock()
		let err = (__goscriptAwait = $.pointerValue<Exclude<WriteSyncer, null>>($.pointerValue<lockedWriteSyncer>(s).ws).Sync(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.pointerValue<lockedWriteSyncer>(s).Mutex.Unlock()
		return err
	}

	public async Write(bs: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const s: lockedWriteSyncer | $.VarRef<lockedWriteSyncer> | null = this;
		await $.pointerValue<lockedWriteSyncer>(s).Mutex.Lock()
		let [n, err] = await $.pointerValue<Exclude<WriteSyncer, null>>($.pointerValue<lockedWriteSyncer>(s).ws).Write(bs)
		$.pointerValue<lockedWriteSyncer>(s).Mutex.Unlock()
		return [n, err]
	}

	public Lock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Lock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).TryLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"zapcore.lockedWriteSyncer",
		() => new lockedWriteSyncer(),
		() => [$.methodSignature("Sync", [], ["error"], true), $.methodSignature("Write", [["bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		lockedWriteSyncer,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ws", "zapcore.WriteSyncer", [1], 8, false, { pkgPath: "go.uber.org/zap/zapcore" })]
	)
}

export class writerWrapper {
	public get Writer(): io.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: io.Writer | null) {
		this._fields.Writer = value
	}

	public _fields: {
		Writer: io.Writer | null
	}

	constructor(init?: Partial<{Writer?: io.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Writer: init?.Writer ?? (null! as io.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writerWrapper {
		return new writerWrapper(this, true)
	}

	public __goscriptAssign(source: writerWrapper): void {
		const target = this._fields
		const values = source._fields
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "io.Writer")
	}

	public Sync(): $.GoError {
		const w = this;
		return null
	}

	public async Write(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<io.Writer | null, null>>(this.Writer).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"zapcore.writerWrapper",
		() => new writerWrapper(),
		() => [$.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		writerWrapper,
		() => [/* @__PURE__ */ $.structField("Writer", "io.Writer", [0], 0, true, { anonymous: true })]
	)
}

export function AddSync(w: io.Writer | null): WriteSyncer | null {
	{
		const __goscriptTypeSwitchValue = w
		switch (true) {
			case $.typeAssert<WriteSyncer | null>(__goscriptTypeSwitchValue, "zapcore.WriteSyncer").ok:
				{
					let w: WriteSyncer | null = $.typeAssert<WriteSyncer | null>(__goscriptTypeSwitchValue, "zapcore.WriteSyncer").value
					return w
				}
				break
			default:
				{
					let w: any = __goscriptTypeSwitchValue
					return $.interfaceValue<WriteSyncer | null>(new writerWrapper({Writer: w}, true), "zapcore.writerWrapper", "zapcore.writerWrapper")
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Lock(ws: WriteSyncer | null): WriteSyncer | null {
	{
		let [, ok] = $.typeAssertTuple<lockedWriteSyncer | $.VarRef<lockedWriteSyncer> | null>(ws, /* @__PURE__ */ $.pointerType("zapcore.lockedWriteSyncer"))
		if (ok) {
			// no need to layer on another lock
			return ws
		}
	}
	return $.interfaceValue<WriteSyncer | null>(new lockedWriteSyncer({ws: ws}), "*zapcore.lockedWriteSyncer", /* @__PURE__ */ $.pointerType("zapcore.lockedWriteSyncer"))
}

export function NewMultiWriteSyncer(ws: $.Slice<WriteSyncer | null>): WriteSyncer | null {
	if ($.sliceLen(ws) == 1) {
		return $.arrayIndex(ws!, 0)
	}
	return $.namedValueInterfaceValue<WriteSyncer | null>((ws as multiWriteSyncer), "zapcore.multiWriteSyncer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function multiWriteSyncer_Write(ws: multiWriteSyncer, p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	let writeErr: $.GoError = null! as $.GoError
	let nWritten = 0
	for (let __goscriptRangeTarget0 = ws, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let w = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as WriteSyncer | null)
		let [n, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<WriteSyncer, null>) : $.pointerValue<Exclude<WriteSyncer, null>>(w)).Write(p)
		writeErr = multierr.Append(writeErr, err)
		if ((nWritten == 0) && (n != 0)) {
			nWritten = n
		} else {
			if (n < nWritten) {
				nWritten = n
			}
		}
	}
	return [nWritten, writeErr]
}

export async function multiWriteSyncer_Sync(ws: multiWriteSyncer): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget1 = ws, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let w = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as WriteSyncer | null)
		err = multierr.Append(err, (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<WriteSyncer, null>) : $.pointerValue<Exclude<WriteSyncer, null>>(w)).Sync(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return err
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Sync: (receiver: any, ...args: any[]) => (multiWriteSyncer_Sync as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (multiWriteSyncer_Write as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("zapcore.WriteSyncer", "zapcore.multiWriteSyncer"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"])])
}

var __goscriptAwait: any
