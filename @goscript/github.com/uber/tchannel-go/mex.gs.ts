// Generated file based on mex.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context2 from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import type * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import type * as rand from "@goscript/math/rand/index.js"

import type * as net from "@goscript/net/index.js"

import type * as syscall from "@goscript/syscall/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_introspection from "./introspection.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/context/index.js"
import "./errors.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./introspection.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.errNotifier", "tchannel.messageExchange", "tchannel.messageExchangeSet"])

export class errNotifier {
	public get c(): $.Channel<{}> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<{}> | null) {
		this._fields.c = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get notified(): atomic.Bool {
		return this._fields.notified
	}

	public set notified(value: atomic.Bool) {
		this._fields.notified = value
	}

	public _fields: {
		c: $.Channel<{}> | null
		err: $.GoError
		notified: atomic.Bool
	}

	constructor(init?: Partial<{c?: $.Channel<{}> | null, err?: $.GoError, notified?: atomic.Bool}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as $.Channel<{}> | null),
			err: init?.err ?? (null! as $.GoError),
			notified: init?.notified ? init.notified.clone() : new atomic.Bool(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errNotifier {
		return new errNotifier(this, true)
	}

	public __goscriptAssign(source: errNotifier): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.err = $.assignFieldValue(target.err, values.err, "error")
		$.assignStruct(target.notified, values.notified)
	}

	public Notify(err: $.GoError): $.GoError {
		let e: errNotifier | $.VarRef<errNotifier> | null = this;
		const e$: errNotifier = e == null ? $.pointerTarget<errNotifier>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<errNotifier>(e)
		// The code should never try to Notify(nil).
		if (err == null) {
			$.panic("cannot Notify with no error")
		}

		// There may be some sort of race where we try to notify the mex twice.
		if (!(e$ as errNotifier).notified.CAS(false, true)) {
			return fmt.Errorf("cannot broadcast error: %v, already have: %v", (err as any), ((e$ as errNotifier).err as any))
		}

		;(e$ as errNotifier).err = err
		void (e$ as errNotifier).c!.close()
		return null
	}

	public async checkErr(): globalThis.Promise<$.GoError> {
		const e: errNotifier | $.VarRef<errNotifier> | null = this;
		const e$: errNotifier = e == null ? $.pointerTarget<errNotifier>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<errNotifier>(e)
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: (e$ as errNotifier).c,
				onSelected: async (__goscriptSelect0Result) => {
					return (e$ as errNotifier).err
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					return null
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"tchannel.errNotifier",
		() => new errNotifier(),
		() => [$.methodSignature("Notify", [["err", "error"]], ["error"], true), $.methodSignature("checkErr", [], ["error"], true)],
		errNotifier,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("err", "error", [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("notified", "atomic.Bool", [2], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class messageExchange {
	public get recvCh(): $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null {
		return this._fields.recvCh
	}

	public set recvCh(value: $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null) {
		this._fields.recvCh = value
	}

	public get errCh(): errNotifier {
		return this._fields.errCh
	}

	public set errCh(value: errNotifier) {
		this._fields.errCh = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get ctxCancel(): (() => void) | null {
		return this._fields.ctxCancel
	}

	public set ctxCancel(value: (() => void) | null) {
		this._fields.ctxCancel = value
	}

	public get msgID(): number {
		return this._fields.msgID
	}

	public set msgID(value: number) {
		this._fields.msgID = value
	}

	public get msgType(): __goscript_messages.messageType {
		return this._fields.msgType
	}

	public set msgType(value: __goscript_messages.messageType) {
		this._fields.msgType = value
	}

	public get mexset(): messageExchangeSet | $.VarRef<messageExchangeSet> | null {
		return this._fields.mexset
	}

	public set mexset(value: messageExchangeSet | $.VarRef<messageExchangeSet> | null) {
		this._fields.mexset = value
	}

	public get framePool(): __goscript_frame_pool.FramePool | null {
		return this._fields.framePool
	}

	public set framePool(value: __goscript_frame_pool.FramePool | null) {
		this._fields.framePool = value
	}

	public get shutdownAtomic(): atomic.Bool {
		return this._fields.shutdownAtomic
	}

	public set shutdownAtomic(value: atomic.Bool) {
		this._fields.shutdownAtomic = value
	}

	public get errChNotified(): atomic.Bool {
		return this._fields.errChNotified
	}

	public set errChNotified(value: atomic.Bool) {
		this._fields.errChNotified = value
	}

	public _fields: {
		recvCh: $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null
		errCh: errNotifier
		ctx: context.Context | null
		ctxCancel: (() => void) | null
		msgID: number
		msgType: __goscript_messages.messageType
		mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null
		framePool: __goscript_frame_pool.FramePool | null
		shutdownAtomic: atomic.Bool
		errChNotified: atomic.Bool
	}

	constructor(init?: Partial<{recvCh?: $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null, errCh?: errNotifier, ctx?: context.Context | null, ctxCancel?: (() => void) | null, msgID?: number, msgType?: __goscript_messages.messageType, mexset?: messageExchangeSet | $.VarRef<messageExchangeSet> | null, framePool?: __goscript_frame_pool.FramePool | null, shutdownAtomic?: atomic.Bool, errChNotified?: atomic.Bool}>, __goscriptValue?: boolean) {
		this._fields = {
			recvCh: init?.recvCh ?? (null! as $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null),
			errCh: init?.errCh ? init.errCh.clone() : new errNotifier(undefined, true),
			ctx: init?.ctx ?? (null! as context.Context | null),
			ctxCancel: init?.ctxCancel ?? (null! as (() => void) | null),
			msgID: init?.msgID ?? (0 as number),
			msgType: init?.msgType ?? (0 as __goscript_messages.messageType),
			mexset: init?.mexset ?? (null! as messageExchangeSet | $.VarRef<messageExchangeSet> | null),
			framePool: init?.framePool ?? (null! as __goscript_frame_pool.FramePool | null),
			shutdownAtomic: init?.shutdownAtomic ? init.shutdownAtomic.clone() : new atomic.Bool(undefined, true),
			errChNotified: init?.errChNotified ? init.errChNotified.clone() : new atomic.Bool(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageExchange {
		return new messageExchange(this, true)
	}

	public __goscriptAssign(source: messageExchange): void {
		const target = this._fields
		const values = source._fields
		target.recvCh = values.recvCh
		$.assignStruct(target.errCh, values.errCh)
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.ctxCancel = values.ctxCancel
		target.msgID = values.msgID
		target.msgType = values.msgType
		target.mexset = values.mexset
		target.framePool = $.assignFieldValue(target.framePool, values.framePool, "tchannel.FramePool")
		$.assignStruct(target.shutdownAtomic, values.shutdownAtomic)
		$.assignStruct(target.errChNotified, values.errChNotified)
	}

	public async checkError(): globalThis.Promise<$.GoError> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return __goscript_errors.GetContextError(err)
			}
		}

		return (mex$ as messageExchange).errCh.checkErr()
	}

	public async checkFrame(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<$.GoError> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		if ((frame$ as __goscript_frame.Frame).Header.ID != (mex$ as messageExchange).msgID) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<messageExchangeSet>((mex$ as messageExchange).mexset).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "msgId", Value: $.basicInterfaceValue((mex$ as messageExchange).msgID, "uint32")}, true), new __goscript_logger.LogField({Key: "header", Value: $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("recvPeerFrame received msg with unexpected ID."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return errUnexpectedFrameType
		}
		return null
	}

	public async forwardPeerFrame(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<$.GoError> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		// We want a very specific priority here:
		// 1. Timeouts/cancellation (mex.ctx errors)
		// 2. Whether recvCh has buffer space (non-blocking select over mex.recvCh)
		// 3. Other mex errors (mex.errCh)
		// Which is why we check the context error only (instead of mex.checkError).
		// In the mex.errCh case, we do a non-blocking write to recvCh to prioritize it.
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return __goscript_errors.GetContextError(err)
			}
		}

		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: true,
				channel: (mex$ as messageExchange).recvCh,
				value: frame,
				onSelected: async (__goscriptSelect1Result) => {
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect1Result) => {
					return __goscript_errors.GetContextError((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (mex$ as messageExchange).errCh.c,
				onSelected: async (__goscriptSelect1Result) => {
					const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, $.GoError>([
						{
							id: 0,
							isSend: true,
							channel: (mex$ as messageExchange).recvCh,
							value: frame,
							onSelected: async (__goscriptSelect2Result) => {
								return null
							}
						},
						{
							id: -1,
							isSend: false,
							channel: null,
						}
					], true)
					if (__goscriptSelect2HasReturn) {
						return __goscriptSelect2Value
					}
					return (mex$ as messageExchange).errCh.err
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async handleCancel(_p0: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		if ((mex$ as messageExchange).ctxCancel != null) {
			void (__goscriptAwait = (mex$ as messageExchange).ctxCancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async inboundExpired(): globalThis.Promise<void> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		await messageExchangeSet.prototype.expireExchange.call((mex$ as messageExchange).mexset, (mex$ as messageExchange).msgID)
	}

	public async onCtxErr(err: $.GoError): globalThis.Promise<void> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		// On canceled contexts, we may need to send a cancel message.
		if (!$.comparableEqual(err, context.Canceled)) {
			return
		}

		{
			let onCancel: ((id: number) => void) | null = $.pointerValue<messageExchangeSet>((mex$ as messageExchange).mexset).onCancel
			if (onCancel != null) {
				void (__goscriptAwait = onCancel!((mex$ as messageExchange).msgID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async recvPeerFrame(): globalThis.Promise<[__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, $.GoError]> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		// We have to check frames/errors in a very specific order here:
		// 1. Timeouts/cancellation (mex.ctx errors)
		// 2. Any pending frames (non-blocking select over mex.recvCh)
		// 3. Other mex errors (mex.errCh)
		// Which is why we check the context error only (instead of mex.checkError)e
		// In the mex.errCh case, we do a non-blocking read from recvCh to prioritize it.
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as messageExchange).onCtxErr(err) : messageExchange.prototype.onCtxErr.call(mex, err))
				return [null, __goscript_errors.GetContextError(err)]
			}
		}

		const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, [__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (mex$ as messageExchange).recvCh,
				onSelected: async (__goscriptSelect3Result) => {
					let frame = __goscriptSelect3Result.value
					{
						let err = await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as messageExchange).checkFrame(frame) : messageExchange.prototype.checkFrame.call(mex, frame))
						if (err != null) {
							return [null, err]
						}
					}
					return [frame, null]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect3Result) => {
					await messageExchange.prototype.onCtxErr.call(mex, (__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					return [null, __goscript_errors.GetContextError((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((mex$ as messageExchange).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (mex$ as messageExchange).errCh.c,
				onSelected: async (__goscriptSelect3Result) => {
					const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, [__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, $.GoError]>([
						{
							id: 0,
							isSend: false,
							channel: (mex$ as messageExchange).recvCh,
							onSelected: async (__goscriptSelect4Result) => {
								let frame = __goscriptSelect4Result.value
								{
									let err = await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as messageExchange).checkFrame(frame) : messageExchange.prototype.checkFrame.call(mex, frame))
									if (err != null) {
										return [null, err]
									}
								}
								return [frame, null]
							}
						},
						{
							id: -1,
							isSend: false,
							channel: null,
						}
					], true)
					if (__goscriptSelect4HasReturn) {
						return __goscriptSelect4Value
					}
					return [null, (mex$ as messageExchange).errCh.err]
				}
			}
		], false)
		if (__goscriptSelect3HasReturn) {
			return __goscriptSelect3Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async recvPeerFrameOfType(msgType: __goscript_messages.messageType): globalThis.Promise<[__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, $.GoError]> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		let __goscriptTuple0: any = await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as messageExchange).recvPeerFrame() : messageExchange.prototype.recvPeerFrame.call(mex))
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		let frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		if (err != null) {
			return [null, err]
		}

		switch ((frame$ as __goscript_frame.Frame).Header.messageType) {
			case msgType:
			{
				return [frame, null]
				break
			}
			case 255:
			{
				const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) => __receiver.Release(f))($.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((mex$ as messageExchange).framePool)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Frame")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.FramePool.Release-fm")
				const __goscriptDeferArg0 = frame
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(__goscriptDeferArg0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

				let errMsg = $.varRef(new __goscript_messages.errorMessage({id: (frame$ as __goscript_frame.Frame).Header.ID}, true))
				let rbuf: $.VarRef<typed.ReadBuffer> = $.varRef(new typed.ReadBuffer(undefined, true))
				rbuf.value.Wrap((frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).SizedPayload() : __goscript_frame.Frame.prototype.SizedPayload.call(frame)))
				{
					let __goscriptShadow0 = errMsg.value.read(rbuf)
					if (__goscriptShadow0 != null) {
						return [null, __goscriptShadow0]
					}
				}
				return [null, $.interfaceValue<$.GoError>((errMsg.value).clone(), "tchannel.errorMessage", "tchannel.errorMessage")]
				break
			}
			default:
			{
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<messageExchangeSet>((mex$ as messageExchange).mexset).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "header", Value: $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")}, true), new __goscript_logger.LogField({Key: "expectedType", Value: $.namedValueInterfaceValue<any>(msgType, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true), new __goscript_logger.LogField({Key: "expectedID", Value: $.basicInterfaceValue((mex$ as messageExchange).msgID, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Received unexpected frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [null, errUnexpectedFrameType]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async shutdown(): globalThis.Promise<void> {
		const mex: messageExchange | $.VarRef<messageExchange> | null = this;
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		// The reader and writer side can both hit errors and try to shutdown the mex,
		// so we ensure that it's only shut down once.
		if (!(mex$ as messageExchange).shutdownAtomic.CAS(false, true)) {
			return
		}

		if ((mex$ as messageExchange).errChNotified.CAS(false, true)) {
			void (mex$ as messageExchange).errCh.Notify(errMexShutdown)
		}

		await messageExchangeSet.prototype.removeExchange.call((mex$ as messageExchange).mexset, (mex$ as messageExchange).msgID)
		return
	}

	static __typeInfo = $.registerStructType(
		"tchannel.messageExchange",
		() => new messageExchange(),
		() => [$.methodSignature("checkError", [], ["error"], true), $.methodSignature("checkFrame", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], ["error"], true), $.methodSignature("forwardPeerFrame", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], ["error"], true), $.methodSignature("handleCancel", [["_", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [], true), $.methodSignature("inboundExpired", [], [], true), $.methodSignature("onCtxErr", [["err", "error"]], [], true), $.methodSignature("recvPeerFrame", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame"), "error"], true), $.methodSignature("recvPeerFrameOfType", [["msgType", /* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")]], [/* @__PURE__ */ $.pointerType("tchannel.Frame"), "error"], true), $.methodSignature("shutdown", [], [], true)],
		messageExchange,
		() => [/* @__PURE__ */ $.structField("recvCh", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("tchannel.Frame"), "both"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("errCh", "tchannel.errNotifier", [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [2], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ctxCancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [3], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("msgID", /* @__PURE__ */ $.basicType("uint32"), [4], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("msgType", /* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"), [5], 68, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("mexset", /* @__PURE__ */ $.pointerType("tchannel.messageExchangeSet"), [6], 72, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("framePool", "tchannel.FramePool", [7], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("shutdownAtomic", "atomic.Bool", [8], 96, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("errChNotified", "atomic.Bool", [9], 104, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class messageExchangeSet {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get log(): __goscript_logger.Logger | null {
		return this._fields.log
	}

	public set log(value: __goscript_logger.Logger | null) {
		this._fields.log = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get onCancel(): ((id: number) => void) | null {
		return this._fields.onCancel
	}

	public set onCancel(value: ((id: number) => void) | null) {
		this._fields.onCancel = value
	}

	public get onRemoved(): (() => void) | null {
		return this._fields.onRemoved
	}

	public set onRemoved(value: (() => void) | null) {
		this._fields.onRemoved = value
	}

	public get onAdded(): (() => void) | null {
		return this._fields.onAdded
	}

	public set onAdded(value: (() => void) | null) {
		this._fields.onAdded = value
	}

	// maps are mutable, and are protected by the mutex.
	public get exchanges(): globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null {
		return this._fields.exchanges
	}

	public set exchanges(value: globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null) {
		this._fields.exchanges = value
	}

	public get expiredExchanges(): globalThis.Map<number, {}> | null {
		return this._fields.expiredExchanges
	}

	public set expiredExchanges(value: globalThis.Map<number, {}> | null) {
		this._fields.expiredExchanges = value
	}

	public get shutdown(): boolean {
		return this._fields.shutdown
	}

	public set shutdown(value: boolean) {
		this._fields.shutdown = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		log: __goscript_logger.Logger | null
		name: string
		onCancel: ((id: number) => void) | null
		onRemoved: (() => void) | null
		onAdded: (() => void) | null
		exchanges: globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null
		expiredExchanges: globalThis.Map<number, {}> | null
		shutdown: boolean
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, log?: __goscript_logger.Logger | null, name?: string, onCancel?: ((id: number) => void) | null, onRemoved?: (() => void) | null, onAdded?: (() => void) | null, exchanges?: globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null, expiredExchanges?: globalThis.Map<number, {}> | null, shutdown?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			log: init?.log ?? (null! as __goscript_logger.Logger | null),
			name: init?.name ?? ("" as string),
			onCancel: init?.onCancel ?? (null! as ((id: number) => void) | null),
			onRemoved: init?.onRemoved ?? (null! as (() => void) | null),
			onAdded: init?.onAdded ?? (null! as (() => void) | null),
			exchanges: init?.exchanges ?? (null! as globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null),
			expiredExchanges: init?.expiredExchanges ?? (null! as globalThis.Map<number, {}> | null),
			shutdown: init?.shutdown ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): messageExchangeSet {
		return new messageExchangeSet(this, true)
	}

	public __goscriptAssign(source: messageExchangeSet): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.log = $.assignFieldValue(target.log, values.log, "tchannel.Logger")
		target.name = values.name
		target.onCancel = values.onCancel
		target.onRemoved = values.onRemoved
		target.onAdded = values.onAdded
		target.exchanges = values.exchanges
		target.expiredExchanges = values.expiredExchanges
		target.shutdown = values.shutdown
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<__goscript_introspection.ExchangeSetRuntimeState> {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		await (mexset$ as messageExchangeSet).RWMutex.RLock()
		let setState = new __goscript_introspection.ExchangeSetRuntimeState({Name: (mexset$ as messageExchangeSet).name, Count: $.len((mexset$ as messageExchangeSet).exchanges)}, true)

		if ((opts != null) && $.pointerValue<__goscript_introspection.IntrospectionOptions>(opts).IncludeExchanges) {
			setState.Exchanges = $.makeMap<string, __goscript_introspection.ExchangeRuntimeState>()
			for (let [k, v] of (mexset$ as messageExchangeSet).exchanges?.entries() ?? []) {
				let state = new __goscript_introspection.ExchangeRuntimeState({ID: k, MessageType: $.pointerValue<messageExchange>(v).msgType}, true)
				$.mapSet(setState.Exchanges, strconv.Itoa($.int(k)), (state).clone())
			}
		}

		void (mexset$ as messageExchangeSet).RWMutex.RUnlock()
		return (setState).clone()
	}

	public addExchange(mex: messageExchange | $.VarRef<messageExchange> | null): $.GoError {
		let mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		const mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)
		if ((mexset$ as messageExchangeSet).shutdown) {
			return errMexSetShutdown
		}

		{
			let [, ok] = $.mapGet<number, messageExchange | $.VarRef<messageExchange> | null, messageExchange | $.VarRef<messageExchange> | null>((mexset$ as messageExchangeSet).exchanges, (mex$ as messageExchange).msgID, null)
			if (ok) {
				return errDuplicateMex
			}
		}

		$.mapSet((mexset$ as messageExchangeSet).exchanges, (mex$ as messageExchange).msgID, mex)
		return null
	}

	public copyExchanges(): [boolean, globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null] {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		let shutdown: boolean = false
		let exchanges: globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null = null! as globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		if ((mexset$ as messageExchangeSet).shutdown) {
			return [true, null]
		}

		let exchangesCopy: globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null = $.makeMap<number, messageExchange | $.VarRef<messageExchange> | null>()
		for (let [k, mex] of (mexset$ as messageExchangeSet).exchanges?.entries() ?? []) {
			$.mapSet(exchangesCopy, k, mex)
		}

		return [false, exchangesCopy]
	}

	public async count(): globalThis.Promise<number> {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		await $.pointerValue<messageExchangeSet>(mexset).RWMutex.RLock()
		let count = $.len($.pointerValue<messageExchangeSet>(mexset).exchanges)
		$.pointerValue<messageExchangeSet>(mexset).RWMutex.RUnlock()

		return count
	}

	public deleteExchange(msgID: number): [boolean, boolean] {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		let found: boolean = false
		let timedOut: boolean = false
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		{
			let [, __goscriptShadow1] = $.mapGet<number, messageExchange | $.VarRef<messageExchange> | null, messageExchange | $.VarRef<messageExchange> | null>((mexset$ as messageExchangeSet).exchanges, msgID, null)
			if (__goscriptShadow1) {
				$.deleteMapEntry((mexset$ as messageExchangeSet).exchanges, msgID)
				return [true, false]
			}
		}

		{
			let [, expired] = $.mapGet<number, {}, {}>((mexset$ as messageExchangeSet).expiredExchanges, msgID, {})
			if (expired) {
				$.deleteMapEntry((mexset$ as messageExchangeSet).expiredExchanges, msgID)
				return [false, true]
			}
		}

		return [false, false]
	}

	public async expireExchange(msgID: number): globalThis.Promise<void> {
		let mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Debugf("Removing %s message exchange %d due to timeout, cancellation or blackhole", $.arrayToSlice<any>([(mexset$ as messageExchangeSet).name, $.basicInterfaceValue(msgID, "uint32")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await (mexset$ as messageExchangeSet).RWMutex.Lock()
		// TODO(aniketp): explore if cancel can be called everytime we expire an exchange
		let [found, expired] = (mexset !== null && (mexset as any).__isVarRef !== true && (mexset as any).__goValue === undefined ? ((mexset as any) as messageExchangeSet).deleteExchange(msgID) : messageExchangeSet.prototype.deleteExchange.call(mexset, msgID))
		if (found || expired) {
			// Record in expiredExchanges if we deleted the exchange.
			$.mapSet((mexset$ as messageExchangeSet).expiredExchanges, msgID, {})
		}
		void (mexset$ as messageExchangeSet).RWMutex.Unlock()

		if (expired) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "msgID", Value: $.basicInterfaceValue(msgID, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Exchange expired already"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		void (__goscriptAwait = (mexset$ as messageExchangeSet).onRemoved!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async forwardPeerFrame(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<$.GoError> {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Debugf("forwarding %s %s", $.arrayToSlice<any>([(mexset$ as messageExchangeSet).name, $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await (mexset$ as messageExchangeSet).RWMutex.RLock()
		let mex: messageExchange | $.VarRef<messageExchange> | null = $.mapGet<number, messageExchange | $.VarRef<messageExchange> | null, messageExchange | $.VarRef<messageExchange> | null>((mexset$ as messageExchangeSet).exchanges, (frame$ as __goscript_frame.Frame).Header.ID, null)[0]
		void (mexset$ as messageExchangeSet).RWMutex.RUnlock()

		if (mex == null) {
			// This is ok since the exchange might have expired or been cancelled
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(await (async () => { const __goscriptLiteralField0 = await $.markAsStructValue($.cloneStructValue((frame$ as __goscript_frame.Frame).Header)).String(); return new __goscript_logger.LogField({Key: "frameHeader", Value: __goscriptLiteralField0}, true) })()), new __goscript_logger.LogField({Key: "exchange", Value: (mexset$ as messageExchangeSet).name}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Received frame for unknown message exchange."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}

		{
			let err = await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as messageExchange).forwardPeerFrame(frame) : messageExchange.prototype.forwardPeerFrame.call(mex, frame))
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(await (async () => { const __goscriptLiteralField1 = await $.markAsStructValue($.cloneStructValue((frame$ as __goscript_frame.Frame).Header)).String(); return new __goscript_logger.LogField({Key: "frameHeader", Value: __goscriptLiteralField1}, true) })()), (() => { const __goscriptLiteralField2 = $.basicInterfaceValue((frame$ as __goscript_frame.Frame).Header.FrameSize(), "uint16"); return new __goscript_logger.LogField({Key: "frameSize", Value: __goscriptLiteralField2}, true) })(), new __goscript_logger.LogField({Key: "exchange", Value: (mexset$ as messageExchangeSet).name}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Failed to forward frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return err
			}
		}

		return null
	}

	public async handleCancel(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Debugf("handling cancel for %s", $.arrayToSlice<any>([(mexset$ as messageExchangeSet).name, $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await (mexset$ as messageExchangeSet).RWMutex.RLock()
		let mex: messageExchange | $.VarRef<messageExchange> | null = $.mapGet<number, messageExchange | $.VarRef<messageExchange> | null, messageExchange | $.VarRef<messageExchange> | null>((mexset$ as messageExchangeSet).exchanges, (frame$ as __goscript_frame.Frame).Header.ID, null)[0]
		void (mexset$ as messageExchangeSet).RWMutex.RUnlock()

		if (mex == null) {
			// This is ok since the exchange might have expired.
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(await (async () => { const __goscriptLiteralField3 = await $.markAsStructValue($.cloneStructValue((frame$ as __goscript_frame.Frame).Header)).String(); return new __goscript_logger.LogField({Key: "frameHeader", Value: __goscriptLiteralField3}, true) })()), new __goscript_logger.LogField({Key: "exchange", Value: (mexset$ as messageExchangeSet).name}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Received cancel frame for unknown message exchange."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as messageExchange).handleCancel(frame) : messageExchange.prototype.handleCancel.call(mex, frame))
	}

	public async newExchange(ctx: context.Context | null, ctxCancel: (() => void) | null, framePool: __goscript_frame_pool.FramePool | null, msgType: __goscript_messages.messageType, msgID: number, bufferSize: number): globalThis.Promise<[messageExchange | $.VarRef<messageExchange> | null, $.GoError]> {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Debugf("Creating new %s message exchange for [%v:%d]", $.arrayToSlice<any>([(mexset$ as messageExchangeSet).name, $.namedValueInterfaceValue<any>(msgType, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(msgID, "uint32")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let mex: messageExchange | $.VarRef<messageExchange> | null = (() => { const __goscriptLiteralField4 = newErrNotifier(); return new messageExchange({msgType: msgType, msgID: msgID, ctx: ctx, ctxCancel: ctxCancel, recvCh: $.makeChannel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null>(bufferSize, null! as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, "both"), errCh: __goscriptLiteralField4, mexset: mexset, framePool: framePool}) })()
		let mex$: messageExchange = mex == null ? $.pointerTarget<messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<messageExchange>(mex)

		await (mexset$ as messageExchangeSet).RWMutex.Lock()
		let addErr = (mexset !== null && (mexset as any).__isVarRef !== true && (mexset as any).__goValue === undefined ? ((mexset as any) as messageExchangeSet).addExchange(mex) : messageExchangeSet.prototype.addExchange.call(mexset, mex))
		void (mexset$ as messageExchangeSet).RWMutex.Unlock()

		if (addErr != null) {
			let logger = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "msgID", Value: $.basicInterfaceValue((mex$ as messageExchange).msgID, "uint32")}, true), new __goscript_logger.LogField({Key: "msgType", Value: $.namedValueInterfaceValue<any>((mex$ as messageExchange).msgType, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true), new __goscript_logger.LogField({Key: "exchange", Value: (mexset$ as messageExchangeSet).name}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ($.comparableEqual(addErr, errMexSetShutdown)) {
				void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(logger)).Warn("Attempted to create new mex after mexset shutdown."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				if ($.comparableEqual(addErr, errDuplicateMex)) {
					void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(logger)).Warn("Duplicate msg ID for active and new mex."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}

			return [null, addErr]
		}

		void (__goscriptAwait = (mexset$ as messageExchangeSet).onAdded!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// TODO(mmihic): Put into a deadline ordered heap so we can garbage collected expired exchanges
		return [mex, null]
	}

	public async removeExchange(msgID: number): globalThis.Promise<void> {
		const mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Debugf("Removing %s message exchange %d", $.arrayToSlice<any>([(mexset$ as messageExchangeSet).name, $.basicInterfaceValue(msgID, "uint32")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await (mexset$ as messageExchangeSet).RWMutex.Lock()
		let [found, expired] = (mexset !== null && (mexset as any).__isVarRef !== true && (mexset as any).__goValue === undefined ? ((mexset as any) as messageExchangeSet).deleteExchange(msgID) : messageExchangeSet.prototype.deleteExchange.call(mexset, msgID))
		void (mexset$ as messageExchangeSet).RWMutex.Unlock()

		if (!found && !expired) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "msgID", Value: $.basicInterfaceValue(msgID, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Tried to remove exchange multiple times"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		// If the message exchange was found, then we perform clean up actions.
		// These clean up actions can only be run once per exchange.
		void (__goscriptAwait = (mexset$ as messageExchangeSet).onRemoved!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async stopExchanges(err: $.GoError): globalThis.Promise<void> {
		let mexset: messageExchangeSet | $.VarRef<messageExchangeSet> | null = this;
		const mexset$: messageExchangeSet = mexset == null ? $.pointerTarget<messageExchangeSet>(mexset) : (mexset as any).__isVarRef === true ? (mexset as any).value : (mexset as any).__goValue === undefined ? (mexset as any) : $.pointerTarget<messageExchangeSet>(mexset)
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Debugf("stopping %v exchanges due to error: %v", $.arrayToSlice<any>([$.basicInterfaceValue(await (mexset !== null && (mexset as any).__isVarRef !== true && (mexset as any).__goValue === undefined ? ((mexset as any) as messageExchangeSet).count() : messageExchangeSet.prototype.count.call(mexset)), "int"), (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await (mexset$ as messageExchangeSet).RWMutex.Lock()
		let __goscriptTuple1: any = (mexset !== null && (mexset as any).__isVarRef !== true && (mexset as any).__goValue === undefined ? ((mexset as any) as messageExchangeSet).copyExchanges() : messageExchangeSet.prototype.copyExchanges.call(mexset))
		let shutdown = __goscriptTuple1[0]
		let exchanges: globalThis.Map<number, messageExchange | $.VarRef<messageExchange> | null> | null = __goscriptTuple1[1];
		;(mexset$ as messageExchangeSet).shutdown = true
		void (mexset$ as messageExchangeSet).RWMutex.Unlock()

		if (shutdown) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((mexset$ as messageExchangeSet).log).Debugf("mexset has already been shutdown", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		for (const [__rangeKey, mex] of exchanges?.entries() ?? []) {
			// When there's a connection failure, we want to notify blocked callers that the
			// call will fail, but we don't want to shutdown the exchange as only the
			// arg reader/writer should shutdown the exchange. Otherwise, our guarantee
			// on sendChRefs that there's no references to sendCh is violated since
			// readers/writers could still have a reference to sendCh even though
			// we shutdown the exchange and called Done on sendChRefs.
			if ($.pointerValue<messageExchange>(mex).errChNotified.CAS(false, true)) {
				$.pointerValue<messageExchange>(mex).errCh.Notify(err)
			}
		}
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.messageExchangeSet",
		() => new messageExchangeSet(),
		() => [$.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], ["tchannel.ExchangeSetRuntimeState"], true), $.methodSignature("addExchange", [["mex", /* @__PURE__ */ $.pointerType("tchannel.messageExchange")]], ["error"], true), $.methodSignature("copyExchanges", [], [["shutdown", /* @__PURE__ */ $.basicType("bool")], ["exchanges", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("tchannel.messageExchange"))]], true), $.methodSignature("count", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("deleteExchange", [["msgID", /* @__PURE__ */ $.basicType("uint32")]], [["found", /* @__PURE__ */ $.basicType("bool")], ["timedOut", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("expireExchange", [["msgID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("forwardPeerFrame", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], ["error"], true), $.methodSignature("handleCancel", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [], true), $.methodSignature("newExchange", [["ctx", "context.Context"], ["ctxCancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["framePool", "tchannel.FramePool"], ["msgType", /* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")], ["msgID", /* @__PURE__ */ $.basicType("uint32")], ["bufferSize", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("tchannel.messageExchange"), "error"], true), $.methodSignature("removeExchange", [["msgID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("stopExchanges", [["err", "error"]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		messageExchangeSet,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("log", "tchannel.Logger", [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [2], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onCancel", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), [3], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onRemoved", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [4], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onAdded", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [5], 72, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("exchanges", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("tchannel.messageExchange")), [6], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("expiredExchanges", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [7], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("shutdown", /* @__PURE__ */ $.basicType("bool"), [8], 96, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const messageExchangeSetInbound: string = "inbound"

export const messageExchangeSetOutbound: string = "outbound"

export const mexChannelBufferSize: number = 2

export let errDuplicateMex: $.GoError = errors.New("multiple attempts to use the message id")

export function __goscript_set_errDuplicateMex(__goscriptValue: $.GoError): void {
	errDuplicateMex = __goscriptValue
}

export let errMexShutdown: $.GoError = errors.New("mex has been shutdown")

export function __goscript_set_errMexShutdown(__goscriptValue: $.GoError): void {
	errMexShutdown = __goscriptValue
}

export let errMexSetShutdown: $.GoError = errors.New("mexset has been shutdown")

export function __goscript_set_errMexSetShutdown(__goscriptValue: $.GoError): void {
	errMexSetShutdown = __goscriptValue
}

export var errMexChannelFull: $.GoError

export async function __goscript_init_errMexChannelFull(): globalThis.Promise<void> {
	if (((errMexChannelFull) as any) === undefined) {
		errMexChannelFull = await __goscript_errors.NewSystemError(3, "cannot send frame to message exchange channel", null)
	}
}

export function __goscript_get_errMexChannelFull(): $.GoError {
	if (((errMexChannelFull) as any) === undefined) {
		throw new globalThis.Error("goscript package variable errMexChannelFull read before initialization")
	}
	return errMexChannelFull
}

export function __goscript_set_errMexChannelFull(__goscriptValue: $.GoError): void {
	errMexChannelFull = __goscriptValue
}

export let errUnexpectedFrameType: $.GoError = errors.New("unexpected frame received")

export function __goscript_set_errUnexpectedFrameType(__goscriptValue: $.GoError): void {
	errUnexpectedFrameType = __goscriptValue
}

export function newErrNotifier(): errNotifier {
	return new errNotifier({c: $.makeChannel<{}>(0, {}, "both")}, true)
}

export async function newMessageExchangeSet(log: __goscript_logger.Logger | null, name: string): globalThis.Promise<messageExchangeSet | $.VarRef<messageExchangeSet> | null> {
	return (await (async () => { const __goscriptLiteralField5 = (__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "exchange", Value: name}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new messageExchangeSet({name: name, log: __goscriptLiteralField5, exchanges: $.makeMap<number, messageExchange | $.VarRef<messageExchange> | null>(), expiredExchanges: $.makeMap<number, {}>()}) })())
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_messagetype_string.messageType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
