// Generated file based on reqres.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context2 from "@goscript/golang.org/x/net/context/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_handlers from "./handlers.gs.ts"

import * as __goscript_health from "./health.gs.ts"

import type * as __goscript_idle_sweep from "./idle_sweep.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_introspection from "./introspection.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_mex from "./mex.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_peer_heap from "./peer_heap.gs.ts"

import * as __goscript_peer_strategies from "./peer_strategies.gs.ts"

import * as __goscript_preinit_connection from "./preinit_connection.gs.ts"

import * as __goscript_relay from "./relay.gs.ts"

import * as __goscript_relay_api from "./relay_api.gs.ts"

import * as __goscript_relay_messages from "./relay_messages.gs.ts"

import * as __goscript_relay_timer_pool from "./relay_timer_pool.gs.ts"

import * as __goscript_reqresreaderstate_string from "./reqresreaderstate_string.gs.ts"

import * as __goscript_reqreswriterstate_string from "./reqreswriterstate_string.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "./arguments.gs.ts"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./errors.gs.ts"
import "./fragmenting_reader.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./handlers.gs.ts"
import "./health.gs.ts"
import "./inbound.gs.ts"
import "./introspection.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"
import "./mex.gs.ts"
import "./outbound.gs.ts"
import "./peer.gs.ts"
import "./peer_heap.gs.ts"
import "./peer_strategies.gs.ts"
import "./preinit_connection.gs.ts"
import "./relay.gs.ts"
import "./relay_api.gs.ts"
import "./relay_messages.gs.ts"
import "./relay_timer_pool.gs.ts"
import "./reqresreaderstate_string.gs.ts"
import "./reqreswriterstate_string.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.errReqResWriterStateMismatch", "tchannel.errReqResReaderStateMismatch", "tchannel.reqResWriterState", "tchannel.messageForFragment", "tchannel.reqResWriter", "tchannel.reqResReaderState", "tchannel.reqResReader"])

export type reqResWriterState = number

$.registerNamedValueType(
	"tchannel.reqResWriterState",
	{String: (receiver: any, ...args: any[]) => (__goscript_reqreswriterstate_string.reqResWriterState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.reqResWriterState",
	{String: (receiver: any, ...args: any[]) => (__goscript_reqreswriterstate_string.reqResWriterState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type messageForFragment = ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null

export type reqResReaderState = number

$.registerNamedValueType(
	"tchannel.reqResReaderState",
	{String: (receiver: any, ...args: any[]) => (__goscript_reqresreaderstate_string.reqResReaderState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.reqResReaderState",
	{String: (receiver: any, ...args: any[]) => (__goscript_reqresreaderstate_string.reqResReaderState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class errReqResWriterStateMismatch {
	public get state(): reqResWriterState {
		return this._fields.state
	}

	public set state(value: reqResWriterState) {
		this._fields.state = value
	}

	public get expectedState(): reqResWriterState {
		return this._fields.expectedState
	}

	public set expectedState(value: reqResWriterState) {
		this._fields.expectedState = value
	}

	public _fields: {
		state: reqResWriterState
		expectedState: reqResWriterState
	}

	constructor(init?: Partial<{state?: reqResWriterState, expectedState?: reqResWriterState}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (0 as reqResWriterState),
			expectedState: init?.expectedState ?? (0 as reqResWriterState)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errReqResWriterStateMismatch {
		return new errReqResWriterStateMismatch(this, true)
	}

	public __goscriptAssign(source: errReqResWriterStateMismatch): void {
		const target = this._fields
		const values = source._fields
		target.state = values.state
		target.expectedState = values.expectedState
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("attempting write outside of expected state, in %v expected %v", $.namedValueInterfaceValue<any>(e.state, "tchannel.reqResWriterState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(e.expectedState, "tchannel.reqResWriterState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.errReqResWriterStateMismatch",
		() => new errReqResWriterStateMismatch(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		errReqResWriterStateMismatch,
		() => [/* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("expectedState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class errReqResReaderStateMismatch {
	public get state(): reqResReaderState {
		return this._fields.state
	}

	public set state(value: reqResReaderState) {
		this._fields.state = value
	}

	public get expectedState(): reqResReaderState {
		return this._fields.expectedState
	}

	public set expectedState(value: reqResReaderState) {
		this._fields.expectedState = value
	}

	public _fields: {
		state: reqResReaderState
		expectedState: reqResReaderState
	}

	constructor(init?: Partial<{state?: reqResReaderState, expectedState?: reqResReaderState}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (0 as reqResReaderState),
			expectedState: init?.expectedState ?? (0 as reqResReaderState)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errReqResReaderStateMismatch {
		return new errReqResReaderStateMismatch(this, true)
	}

	public __goscriptAssign(source: errReqResReaderStateMismatch): void {
		const target = this._fields
		const values = source._fields
		target.state = values.state
		target.expectedState = values.expectedState
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("attempting read outside of expected state, in %v expected %v", $.namedValueInterfaceValue<any>(e.state, "tchannel.reqResReaderState", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(e.expectedState, "tchannel.reqResReaderState", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.errReqResReaderStateMismatch",
		() => new errReqResReaderStateMismatch(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		errReqResReaderStateMismatch,
		() => [/* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("expectedState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class reqResWriter {
	public get conn(): __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null {
		return this._fields.conn
	}

	public set conn(value: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) {
		this._fields.conn = value
	}

	public get contents(): __goscript_fragmenting_writer.fragmentingWriter | $.VarRef<__goscript_fragmenting_writer.fragmentingWriter> | null {
		return this._fields.contents
	}

	public set contents(value: __goscript_fragmenting_writer.fragmentingWriter | $.VarRef<__goscript_fragmenting_writer.fragmentingWriter> | null) {
		this._fields.contents = value
	}

	public get mex(): __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null {
		return this._fields.mex
	}

	public set mex(value: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null) {
		this._fields.mex = value
	}

	public get state(): reqResWriterState {
		return this._fields.state
	}

	public set state(value: reqResWriterState) {
		this._fields.state = value
	}

	public get messageForFragment(): ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null {
		return this._fields.messageForFragment
	}

	public set messageForFragment(value: ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null) {
		this._fields.messageForFragment = value
	}

	public get log(): __goscript_logger.Logger | null {
		return this._fields.log
	}

	public set log(value: __goscript_logger.Logger | null) {
		this._fields.log = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null
		contents: __goscript_fragmenting_writer.fragmentingWriter | $.VarRef<__goscript_fragmenting_writer.fragmentingWriter> | null
		mex: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null
		state: reqResWriterState
		messageForFragment: ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null
		log: __goscript_logger.Logger | null
		err: $.GoError
	}

	constructor(init?: Partial<{conn?: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, contents?: __goscript_fragmenting_writer.fragmentingWriter | $.VarRef<__goscript_fragmenting_writer.fragmentingWriter> | null, mex?: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null, state?: reqResWriterState, messageForFragment?: ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null, log?: __goscript_logger.Logger | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			conn: init?.conn ?? (null! as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null),
			contents: init?.contents ?? (null! as __goscript_fragmenting_writer.fragmentingWriter | $.VarRef<__goscript_fragmenting_writer.fragmentingWriter> | null),
			mex: init?.mex ?? (null! as __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null),
			state: init?.state ?? (0 as reqResWriterState),
			messageForFragment: init?.messageForFragment ?? (null! as ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null),
			log: init?.log ?? (null! as __goscript_logger.Logger | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): reqResWriter {
		return new reqResWriter(this, true)
	}

	public __goscriptAssign(source: reqResWriter): void {
		const target = this._fields
		const values = source._fields
		target.conn = values.conn
		target.contents = values.contents
		target.mex = values.mex
		target.state = values.state
		target.messageForFragment = values.messageForFragment
		target.log = $.assignFieldValue(target.log, values.log, "tchannel.Logger")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async arg1Writer(): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const w: reqResWriter | $.VarRef<reqResWriter> | null = this;
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as reqResWriter).argWriter(false, 0, 1) : reqResWriter.prototype.argWriter.call(w, false, 0, 1))
	}

	public async arg2Writer(): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const w: reqResWriter | $.VarRef<reqResWriter> | null = this;
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as reqResWriter).argWriter(false, 1, 2) : reqResWriter.prototype.argWriter.call(w, false, 1, 2))
	}

	public async arg3Writer(): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const w: reqResWriter | $.VarRef<reqResWriter> | null = this;
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as reqResWriter).argWriter(true, 2, 3) : reqResWriter.prototype.argWriter.call(w, true, 2, 3))
	}

	public async argWriter(last: boolean, inState: reqResWriterState, outState: reqResWriterState): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		let w: reqResWriter | $.VarRef<reqResWriter> | null = this;
		const w$: reqResWriter = w == null ? $.pointerTarget<reqResWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<reqResWriter>(w)
		if ((w$ as reqResWriter).err != null) {
			return [null, (w$ as reqResWriter).err]
		}

		if ((w$ as reqResWriter).state != inState) {
			return [null, await reqResWriter.prototype.failed.call(w, $.interfaceValue<$.GoError>(new errReqResWriterStateMismatch({state: (w$ as reqResWriter).state, expectedState: inState}, true), "tchannel.errReqResWriterStateMismatch", "tchannel.errReqResWriterStateMismatch"))]
		}

		let [argWriter, err] = await __goscript_fragmenting_writer.fragmentingWriter.prototype.ArgWriter.call((w$ as reqResWriter).contents, last)
		if (err != null) {
			return [null, await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as reqResWriter).failed(err) : reqResWriter.prototype.failed.call(w, err))]
		}

		;(w$ as reqResWriter).state = outState
		return [argWriter, null]
	}

	public async failed(err: $.GoError): globalThis.Promise<$.GoError> {
		let w: reqResWriter | $.VarRef<reqResWriter> | null = this;
		const w$: reqResWriter = w == null ? $.pointerTarget<reqResWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<reqResWriter>(w)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((w$ as reqResWriter).log).Debugf("writer failed: %v existing err: %v", $.arrayToSlice<any>([(err as any), ((w$ as reqResWriter).err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((w$ as reqResWriter).err != null) {
			return (w$ as reqResWriter).err
		}

		await __goscript_mex.messageExchange.prototype.shutdown.call((w$ as reqResWriter).mex);
		;(w$ as reqResWriter).err = err
		return (w$ as reqResWriter).err
	}

	public async flushFragment(fragment: __goscript_fragmenting_writer.writableFragment | $.VarRef<__goscript_fragmenting_writer.writableFragment> | null): globalThis.Promise<$.GoError> {
		const w: reqResWriter | $.VarRef<reqResWriter> | null = this;
		const w$: reqResWriter = w == null ? $.pointerTarget<reqResWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<reqResWriter>(w)
		const fragment$: __goscript_fragmenting_writer.writableFragment = fragment == null ? $.pointerTarget<__goscript_fragmenting_writer.writableFragment>(fragment) : (fragment as any).__isVarRef === true ? (fragment as any).value : (fragment as any).__goValue === undefined ? (fragment as any) : $.pointerTarget<__goscript_fragmenting_writer.writableFragment>(fragment)
		if ((w$ as reqResWriter).err != null) {
			return (w$ as reqResWriter).err
		}

		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = (fragment$ as __goscript_fragmenting_writer.writableFragment).frame
		$.pointerValue<__goscript_frame.Frame>(frame).Header.SetPayloadSize($.uint(typed.WriteBuffer.prototype.BytesWritten.call((fragment$ as __goscript_fragmenting_writer.writableFragment).contents), 16))

		{
			let err = await __goscript_mex.messageExchange.prototype.checkError.call((w$ as reqResWriter).mex)
			if (err != null) {
				return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as reqResWriter).failed(err) : reqResWriter.prototype.failed.call(w, err))
			}
		}
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>($.pointerValue<__goscript_mex.messageExchange>((w$ as reqResWriter).mex).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					return reqResWriter.prototype.failed.call(w, __goscript_errors.GetContextError((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>($.pointerValue<__goscript_mex.messageExchange>((w$ as reqResWriter).mex).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
			},
			{
				id: 1,
				isSend: false,
				channel: $.pointerValue<__goscript_mex.messageExchange>((w$ as reqResWriter).mex).errCh.c,
				onSelected: async (__goscriptSelect0Result) => {
					return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as reqResWriter).failed($.pointerValue<__goscript_mex.messageExchange>((w$ as reqResWriter).mex).errCh.err) : reqResWriter.prototype.failed.call(w, $.pointerValue<__goscript_mex.messageExchange>((w$ as reqResWriter).mex).errCh.err))
				}
			},
			{
				id: 2,
				isSend: true,
				channel: $.pointerValue<__goscript_connection.Connection>((w$ as reqResWriter).conn).sendCh,
				value: frame,
				onSelected: async (__goscriptSelect0Result) => {
					return null
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async newFragment(initial: boolean, checksum: __goscript_checksum.Checksum | null): globalThis.Promise<[__goscript_fragmenting_writer.writableFragment | $.VarRef<__goscript_fragmenting_writer.writableFragment> | null, $.GoError]> {
		const w: reqResWriter | $.VarRef<reqResWriter> | null = this;
		const w$: reqResWriter = w == null ? $.pointerTarget<reqResWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<reqResWriter>(w)
		{
			let err = await __goscript_mex.messageExchange.prototype.checkError.call((w$ as reqResWriter).mex)
			if (err != null) {
				return [null, await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as reqResWriter).failed(err) : reqResWriter.prototype.failed.call(w, err))]
			}
		}

		let __goscriptShadow0 = (__goscriptAwait = (w$ as reqResWriter).messageForFragment!(initial), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// Create the frame
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>($.pointerValue<__goscript_connection.Connection>((w$ as reqResWriter).conn).opts.FramePool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		let frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame);
		;(frame$ as __goscript_frame.Frame).Header.ID = $.pointerValue<__goscript_mex.messageExchange>((w$ as reqResWriter).mex).msgID;
		;(frame$ as __goscript_frame.Frame).Header.messageType = (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(__goscriptShadow0)).messageType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// Write the message into the fragment, reserving flags and checksum bytes
		let wbuf: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null = typed.NewWriteBuffer($.goSlice((frame$ as __goscript_frame.Frame).Payload, undefined, undefined))
		let fragment: __goscript_fragmenting_writer.writableFragment | $.VarRef<__goscript_fragmenting_writer.writableFragment> | null = new __goscript_fragmenting_writer.writableFragment()
		let fragment$: __goscript_fragmenting_writer.writableFragment = fragment == null ? $.pointerTarget<__goscript_fragmenting_writer.writableFragment>(fragment) : (fragment as any).__isVarRef === true ? (fragment as any).value : (fragment as any).__goValue === undefined ? (fragment as any) : $.pointerTarget<__goscript_fragmenting_writer.writableFragment>(fragment);
		;(fragment$ as __goscript_fragmenting_writer.writableFragment).frame = frame;
		;(fragment$ as __goscript_fragmenting_writer.writableFragment).flagsRef = ((wbuf !== null && (wbuf as any).__isVarRef !== true && (wbuf as any).__goValue === undefined ? ((wbuf as any) as typed.WriteBuffer).DeferByte() : typed.WriteBuffer.prototype.DeferByte.call(wbuf)) as typed.ByteRef)
		{
			let err = (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(__goscriptShadow0)).write(wbuf), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		typed.WriteBuffer.prototype.WriteSingleByte.call(wbuf, $.uint((__goscriptAwait = (checksum !== null && (checksum as any).__isVarRef !== true && (checksum as any).__goValue === undefined ? (checksum as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(checksum)).TypeCode(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8));
		;(fragment$ as __goscript_fragmenting_writer.writableFragment).checksumRef = (typed.WriteBuffer.prototype.DeferBytes.call(wbuf, (__goscriptAwait = (checksum !== null && (checksum as any).__isVarRef !== true && (checksum as any).__goValue === undefined ? (checksum as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(checksum)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) as typed.BytesRef);
		;(fragment$ as __goscript_fragmenting_writer.writableFragment).checksum = checksum;
		;(fragment$ as __goscript_fragmenting_writer.writableFragment).contents = wbuf
		return [fragment, (wbuf !== null && (wbuf as any).__isVarRef !== true && (wbuf as any).__goValue === undefined ? ((wbuf as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(wbuf))]
	}

	static __typeInfo = $.registerStructType(
		"tchannel.reqResWriter",
		() => new reqResWriter(),
		() => [$.methodSignature("arg1Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("arg2Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("arg3Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("argWriter", [["last", /* @__PURE__ */ $.basicType("bool")], ["inState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState")], ["outState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState")]], ["tchannel.ArgWriter", "error"], true), $.methodSignature("failed", [["err", "error"]], ["error"], true), $.methodSignature("flushFragment", [["fragment", /* @__PURE__ */ $.pointerType("tchannel.writableFragment")]], ["error"], true), $.methodSignature("newFragment", [["initial", /* @__PURE__ */ $.basicType("bool")], ["checksum", "tchannel.Checksum"]], [/* @__PURE__ */ $.pointerType("tchannel.writableFragment"), "error"], true)],
		reqResWriter,
		() => [/* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("tchannel.Connection"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("contents", /* @__PURE__ */ $.pointerType("tchannel.fragmentingWriter"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("mex", /* @__PURE__ */ $.pointerType("tchannel.messageExchange"), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState"), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("messageForFragment", ({ kind: $.TypeKind.Function, name: "tchannel.messageForFragment", params: [/* @__PURE__ */ $.basicType("bool")], results: ["tchannel.message"] } as $.FunctionTypeInfo), [4], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("log", "tchannel.Logger", [5], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("err", "error", [6], 56, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class reqResReader {
	public get contents(): __goscript_fragmenting_reader.fragmentingReader | $.VarRef<__goscript_fragmenting_reader.fragmentingReader> | null {
		return this._fields.contents
	}

	public set contents(value: __goscript_fragmenting_reader.fragmentingReader | $.VarRef<__goscript_fragmenting_reader.fragmentingReader> | null) {
		this._fields.contents = value
	}

	public get mex(): __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null {
		return this._fields.mex
	}

	public set mex(value: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null) {
		this._fields.mex = value
	}

	public get state(): reqResReaderState {
		return this._fields.state
	}

	public set state(value: reqResReaderState) {
		this._fields.state = value
	}

	public get messageForFragment(): ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null {
		return this._fields.messageForFragment
	}

	public set messageForFragment(value: ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null) {
		this._fields.messageForFragment = value
	}

	public get initialFragment(): __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null {
		return this._fields.initialFragment
	}

	public set initialFragment(value: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null) {
		this._fields.initialFragment = value
	}

	public get previousFragment(): __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null {
		return this._fields.previousFragment
	}

	public set previousFragment(value: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null) {
		this._fields.previousFragment = value
	}

	public get log(): __goscript_logger.Logger | null {
		return this._fields.log
	}

	public set log(value: __goscript_logger.Logger | null) {
		this._fields.log = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		contents: __goscript_fragmenting_reader.fragmentingReader | $.VarRef<__goscript_fragmenting_reader.fragmentingReader> | null
		mex: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null
		state: reqResReaderState
		messageForFragment: ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null
		initialFragment: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null
		previousFragment: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null
		log: __goscript_logger.Logger | null
		err: $.GoError
	}

	constructor(init?: Partial<{contents?: __goscript_fragmenting_reader.fragmentingReader | $.VarRef<__goscript_fragmenting_reader.fragmentingReader> | null, mex?: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null, state?: reqResReaderState, messageForFragment?: ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null, initialFragment?: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null, previousFragment?: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null, log?: __goscript_logger.Logger | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			contents: init?.contents ?? (null! as __goscript_fragmenting_reader.fragmentingReader | $.VarRef<__goscript_fragmenting_reader.fragmentingReader> | null),
			mex: init?.mex ?? (null! as __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null),
			state: init?.state ?? (0 as reqResReaderState),
			messageForFragment: init?.messageForFragment ?? (null! as ((initial: boolean) => __goscript_messages.message | null | globalThis.Promise<__goscript_messages.message | null>) | null),
			initialFragment: init?.initialFragment ?? (null! as __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null),
			previousFragment: init?.previousFragment ?? (null! as __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null),
			log: init?.log ?? (null! as __goscript_logger.Logger | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): reqResReader {
		return new reqResReader(this, true)
	}

	public __goscriptAssign(source: reqResReader): void {
		const target = this._fields
		const values = source._fields
		target.contents = values.contents
		target.mex = values.mex
		target.state = values.state
		target.messageForFragment = values.messageForFragment
		target.initialFragment = values.initialFragment
		target.previousFragment = values.previousFragment
		target.log = $.assignFieldValue(target.log, values.log, "tchannel.Logger")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async arg1Reader(): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const r: reqResReader | $.VarRef<reqResReader> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reqResReader).argReader(false, 0, 1) : reqResReader.prototype.argReader.call(r, false, 0, 1))
	}

	public async arg2Reader(): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const r: reqResReader | $.VarRef<reqResReader> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reqResReader).argReader(false, 1, 2) : reqResReader.prototype.argReader.call(r, false, 1, 2))
	}

	public async arg3Reader(): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const r: reqResReader | $.VarRef<reqResReader> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reqResReader).argReader(true, 2, 3) : reqResReader.prototype.argReader.call(r, true, 2, 3))
	}

	public async argReader(last: boolean, inState: reqResReaderState, outState: reqResReaderState): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		let r: reqResReader | $.VarRef<reqResReader> | null = this;
		const r$: reqResReader = r == null ? $.pointerTarget<reqResReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reqResReader>(r)
		if ((r$ as reqResReader).state != inState) {
			return [null, await reqResReader.prototype.failed.call(r, $.interfaceValue<$.GoError>(new errReqResReaderStateMismatch({state: (r$ as reqResReader).state, expectedState: inState}, true), "tchannel.errReqResReaderStateMismatch", "tchannel.errReqResReaderStateMismatch"))]
		}

		let [argReader, err] = await __goscript_fragmenting_reader.fragmentingReader.prototype.ArgReader.call((r$ as reqResReader).contents, last)
		if (err != null) {
			return [null, await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reqResReader).failed(err) : reqResReader.prototype.failed.call(r, err))]
		}

		;(r$ as reqResReader).state = outState
		return [argReader, null]
	}

	public async failed(err: $.GoError): globalThis.Promise<$.GoError> {
		let r: reqResReader | $.VarRef<reqResReader> | null = this;
		const r$: reqResReader = r == null ? $.pointerTarget<reqResReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reqResReader>(r)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as reqResReader).log).Debugf("reader failed: %v existing err: %v", $.arrayToSlice<any>([(err as any), ((r$ as reqResReader).err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((r$ as reqResReader).err != null) {
			return (r$ as reqResReader).err
		}

		await __goscript_mex.messageExchange.prototype.shutdown.call((r$ as reqResReader).mex);
		;(r$ as reqResReader).err = err
		return (r$ as reqResReader).err
	}

	public async recvNextFragment(initial: boolean): globalThis.Promise<[__goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null, $.GoError]> {
		let r: reqResReader | $.VarRef<reqResReader> | null = this;
		const r$: reqResReader = r == null ? $.pointerTarget<reqResReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reqResReader>(r)
		if ((r$ as reqResReader).initialFragment != null) {
			let fragment: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null = (r$ as reqResReader).initialFragment;
			;(r$ as reqResReader).initialFragment = null;
			;(r$ as reqResReader).previousFragment = fragment
			return [fragment, null]
		}

		// Wait for the appropriate message from the peer
		let __goscriptShadow1 = (__goscriptAwait = (r$ as reqResReader).messageForFragment!(initial), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple0: any = await __goscript_mex.messageExchange.prototype.recvPeerFrameOfType.call((r$ as reqResReader).mex, (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(__goscriptShadow1)).messageType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			let __goscriptShadow2 = err
			{
				let __goscriptTuple1: any = $.typeAssertTuple<__goscript_messages.errorMessage>(__goscriptShadow2, "tchannel.errorMessage")
				let __goscriptShadow3 = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					// If we received a serialized error from the other side, then we should go through
					// the normal doneReading path so stats get updated with this error.
					;(r$ as reqResReader).err = await __goscriptShadow3.AsSystemError()
					return [null, $.interfaceValue<$.GoError>((__goscriptShadow3).clone(), "tchannel.errorMessage", "tchannel.errorMessage")]
				}
			}

			return [null, await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reqResReader).failed(err) : reqResReader.prototype.failed.call(r, err))]
		}

		// Parse the message and setup the fragment
		let __goscriptTuple2: any = parseInboundFragment($.pointerValue<__goscript_mex.messageExchange>((r$ as reqResReader).mex).framePool, frame, __goscriptShadow1)
		let fragment: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reqResReader).failed(err) : reqResReader.prototype.failed.call(r, err))]
		}

		;(r$ as reqResReader).previousFragment = fragment
		return [fragment, null]
	}

	public async releasePreviousFragment(): globalThis.Promise<void> {
		let r: reqResReader | $.VarRef<reqResReader> | null = this;
		const r$: reqResReader = r == null ? $.pointerTarget<reqResReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reqResReader>(r)
		let fragment: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null = (r$ as reqResReader).previousFragment;
		;(r$ as reqResReader).previousFragment = null
		if (fragment != null) {
			await (fragment !== null && (fragment as any).__isVarRef !== true && (fragment as any).__goValue === undefined ? ((fragment as any) as __goscript_fragmenting_reader.readableFragment).done() : __goscript_fragmenting_reader.readableFragment.prototype.done.call(fragment))
		}
	}

	static __typeInfo = $.registerStructType(
		"tchannel.reqResReader",
		() => new reqResReader(),
		() => [$.methodSignature("arg1Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("arg2Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("arg3Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("argReader", [["last", /* @__PURE__ */ $.basicType("bool")], ["inState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState")], ["outState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState")]], ["tchannel.ArgReader", "error"], true), $.methodSignature("failed", [["err", "error"]], ["error"], true), $.methodSignature("recvNextFragment", [["initial", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("tchannel.readableFragment"), "error"], true), $.methodSignature("releasePreviousFragment", [], [], true)],
		reqResReader,
		() => [/* @__PURE__ */ $.structField("contents", /* @__PURE__ */ $.pointerType("tchannel.fragmentingReader"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("mex", /* @__PURE__ */ $.pointerType("tchannel.messageExchange"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState"), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("messageForFragment", ({ kind: $.TypeKind.Function, name: "tchannel.messageForFragment", params: [/* @__PURE__ */ $.basicType("bool")], results: ["tchannel.message"] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("initialFragment", /* @__PURE__ */ $.pointerType("tchannel.readableFragment"), [4], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("previousFragment", /* @__PURE__ */ $.pointerType("tchannel.readableFragment"), [5], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("log", "tchannel.Logger", [6], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("err", "error", [7], 64, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const reqResWriterPreArg1: reqResWriterState = 0

export const reqResWriterPreArg2: reqResWriterState = 1

export const reqResWriterPreArg3: reqResWriterState = 2

export const reqResWriterComplete: reqResWriterState = 3

export const reqResReaderPreArg1: reqResReaderState = 0

export const reqResReaderPreArg2: reqResReaderState = 1

export const reqResReaderPreArg3: reqResReaderState = 2

export const reqResReaderComplete: reqResReaderState = 3

export function parseInboundFragment(framePool: __goscript_frame_pool.FramePool | null, frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, message: __goscript_messages.message | null): [__goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null, $.GoError] {
	let rbuf: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null = typed.NewReadBuffer((frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).SizedPayload() : __goscript_frame.Frame.prototype.SizedPayload.call(frame)))
	let fragment: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null = new __goscript_fragmenting_reader.readableFragment()
	let fragment$: __goscript_fragmenting_reader.readableFragment = fragment == null ? $.pointerTarget<__goscript_fragmenting_reader.readableFragment>(fragment) : (fragment as any).__isVarRef === true ? (fragment as any).value : (fragment as any).__goValue === undefined ? (fragment as any) : $.pointerTarget<__goscript_fragmenting_reader.readableFragment>(fragment);
	;(fragment$ as __goscript_fragmenting_reader.readableFragment).flags = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf))
	{
		let err = (message !== null && (message as any).__isVarRef !== true && (message as any).__goValue === undefined ? (message as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(message)).read(rbuf)
		if (err != null) {
			return [null, err]
		}
	}

	;(fragment$ as __goscript_fragmenting_reader.readableFragment).checksumType = $.uint((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)), 8);
	;(fragment$ as __goscript_fragmenting_reader.readableFragment).checksum = typed.ReadBuffer.prototype.ReadBytes.call(rbuf, __goscript_checksum.ChecksumType_ChecksumSize((fragment$ as __goscript_fragmenting_reader.readableFragment).checksumType));
	;(fragment$ as __goscript_fragmenting_reader.readableFragment).contents = rbuf;
	;(fragment$ as __goscript_fragmenting_reader.readableFragment).onDone = $.functionValue(async (): globalThis.Promise<void> => {
		void (__goscriptAwait = (framePool !== null && (framePool as any).__isVarRef !== true && (framePool as any).__goValue === undefined ? (framePool as Exclude<__goscript_frame_pool.FramePool, null>) : $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>(framePool)).Release(frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
	return [fragment, (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(rbuf))]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_reqreswriterstate_string.reqResWriterState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_reqresreaderstate_string.reqResReaderState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState"))
}

var __goscriptAwait: any
