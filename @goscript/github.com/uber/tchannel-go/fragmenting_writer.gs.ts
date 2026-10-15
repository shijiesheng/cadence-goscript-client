// Generated file based on fragmenting_writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import type * as io from "@goscript/io/index.js"

import type * as sync from "@goscript/sync/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "./checksum.gs.ts"
import "./frame.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.writableFragment", "tchannel.writableChunk", "tchannel.fragmentSender", "tchannel.fragmentingWriterState", "tchannel.fragmentingWriter"])

export type fragmentSender = {
	doneSending(): void
	flushFragment(f: writableFragment | $.VarRef<writableFragment> | null): $.GoError | globalThis.Promise<$.GoError>
	newFragment(initial: boolean, checksum: __goscript_checksum.Checksum | null): [writableFragment | $.VarRef<writableFragment> | null, $.GoError] | globalThis.Promise<[writableFragment | $.VarRef<writableFragment> | null, $.GoError]>
}

$.registerInterfaceType(
	"tchannel.fragmentSender",
	null,
	[$.methodSignature("doneSending"), $.methodSignature("flushFragment", [["f", /* @__PURE__ */ $.pointerType("tchannel.writableFragment")]], ["error"]), $.methodSignature("newFragment", [["initial", /* @__PURE__ */ $.basicType("bool")], ["checksum", "tchannel.Checksum"]], [/* @__PURE__ */ $.pointerType("tchannel.writableFragment"), "error"])]
);

export type fragmentingWriterState = number

$.registerNamedValueType(
	"tchannel.fragmentingWriterState",
	{isWritingArgument: (receiver: any, ...args: any[]) => (fragmentingWriterState_isWritingArgument as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isWritingArgument", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*tchannel.fragmentingWriterState",
	{isWritingArgument: (receiver: any, ...args: any[]) => (fragmentingWriterState_isWritingArgument as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isWritingArgument", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class writableFragment {
	public get flagsRef(): typed.ByteRef {
		return this._fields.flagsRef
	}

	public set flagsRef(value: typed.ByteRef) {
		this._fields.flagsRef = value
	}

	public get checksumRef(): typed.BytesRef {
		return this._fields.checksumRef
	}

	public set checksumRef(value: typed.BytesRef) {
		this._fields.checksumRef = value
	}

	public get checksum(): __goscript_checksum.Checksum | null {
		return this._fields.checksum
	}

	public set checksum(value: __goscript_checksum.Checksum | null) {
		this._fields.checksum = value
	}

	public get contents(): typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null {
		return this._fields.contents
	}

	public set contents(value: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null) {
		this._fields.contents = value
	}

	public get frame(): __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null {
		return this._fields.frame
	}

	public set frame(value: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) {
		this._fields.frame = value
	}

	public _fields: {
		flagsRef: typed.ByteRef
		checksumRef: typed.BytesRef
		checksum: __goscript_checksum.Checksum | null
		contents: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null
		frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null
	}

	constructor(init?: Partial<{flagsRef?: typed.ByteRef, checksumRef?: typed.BytesRef, checksum?: __goscript_checksum.Checksum | null, contents?: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null, frame?: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			flagsRef: init?.flagsRef ?? (null! as typed.ByteRef),
			checksumRef: init?.checksumRef ?? (null! as typed.BytesRef),
			checksum: init?.checksum ?? (null! as __goscript_checksum.Checksum | null),
			contents: init?.contents ?? (null! as typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null),
			frame: init?.frame ?? (null! as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writableFragment {
		return new writableFragment(this, true)
	}

	public __goscriptAssign(source: writableFragment): void {
		const target = this._fields
		const values = source._fields
		target.flagsRef = values.flagsRef
		target.checksumRef = values.checksumRef
		target.checksum = $.assignFieldValue(target.checksum, values.checksum, "tchannel.Checksum")
		target.contents = values.contents
		target.frame = values.frame
	}

	public async finish(hasMoreFragments: boolean): globalThis.Promise<void> {
		const f: writableFragment | $.VarRef<writableFragment> | null = this;
		const f$: writableFragment = f == null ? $.pointerTarget<writableFragment>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<writableFragment>(f)
		typed.BytesRef_Update((f$ as writableFragment).checksumRef, ((__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>((f$ as writableFragment).checksum).Sum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>))
		if (hasMoreFragments) {
			// Important: hasMoreFragmentsFlag is set if there are more fragments, but NOT CLEARED if there aren't.
			// This allows for callReqContinue frames to follow a fragmented callReq frame e.g. when arg2 is modified
			// by the relayer
			typed.ByteRef_Update((f$ as writableFragment).flagsRef, 1)
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>((f$ as writableFragment).checksum).Release(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"tchannel.writableFragment",
		() => new writableFragment(),
		() => [$.methodSignature("finish", [["hasMoreFragments", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		writableFragment,
		() => [/* @__PURE__ */ $.structField("flagsRef", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.ByteRef"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksumRef", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.BytesRef"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksum", "tchannel.Checksum", [2], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("contents", /* @__PURE__ */ $.pointerType("typed.WriteBuffer"), [3], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("frame", /* @__PURE__ */ $.pointerType("tchannel.Frame"), [4], 72, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class writableChunk {
	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public get sizeRef(): typed.Uint16Ref {
		return this._fields.sizeRef
	}

	public set sizeRef(value: typed.Uint16Ref) {
		this._fields.sizeRef = value
	}

	public get checksum(): __goscript_checksum.Checksum | null {
		return this._fields.checksum
	}

	public set checksum(value: __goscript_checksum.Checksum | null) {
		this._fields.checksum = value
	}

	public get contents(): typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null {
		return this._fields.contents
	}

	public set contents(value: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null) {
		this._fields.contents = value
	}

	public _fields: {
		size: number
		sizeRef: typed.Uint16Ref
		checksum: __goscript_checksum.Checksum | null
		contents: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null
	}

	constructor(init?: Partial<{size?: number, sizeRef?: typed.Uint16Ref, checksum?: __goscript_checksum.Checksum | null, contents?: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			size: init?.size ?? (0 as number),
			sizeRef: init?.sizeRef ?? (null! as typed.Uint16Ref),
			checksum: init?.checksum ?? (null! as __goscript_checksum.Checksum | null),
			contents: init?.contents ?? (null! as typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writableChunk {
		return new writableChunk(this, true)
	}

	public __goscriptAssign(source: writableChunk): void {
		const target = this._fields
		const values = source._fields
		target.size = values.size
		target.sizeRef = values.sizeRef
		target.checksum = $.assignFieldValue(target.checksum, values.checksum, "tchannel.Checksum")
		target.contents = values.contents
	}

	public finish(): void {
		const c: writableChunk | $.VarRef<writableChunk> | null = this;
		const c$: writableChunk = c == null ? $.pointerTarget<writableChunk>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<writableChunk>(c)
		typed.Uint16Ref_Update((c$ as writableChunk).sizeRef, (c$ as writableChunk).size)
	}

	public async writeAsFits(b: $.Slice<number>): globalThis.Promise<number> {
		let c: writableChunk | $.VarRef<writableChunk> | null = this;
		const c$: writableChunk = c == null ? $.pointerTarget<writableChunk>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<writableChunk>(c)
		if ($.sliceLen(b) > typed.WriteBuffer.prototype.BytesRemaining.call((c$ as writableChunk).contents)) {
			b = $.goSlice(b, undefined, typed.WriteBuffer.prototype.BytesRemaining.call((c$ as writableChunk).contents))
		}

		void ((__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>((c$ as writableChunk).checksum).Add(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		typed.WriteBuffer.prototype.WriteBytes.call((c$ as writableChunk).contents, b)

		let written = $.sliceLen(b);
		;(c$ as writableChunk).size = $.uint((c$ as writableChunk).size + ($.uint(written, 16)), 16)
		return written
	}

	static __typeInfo = $.registerStructType(
		"tchannel.writableChunk",
		() => new writableChunk(),
		() => [$.methodSignature("finish", [], [], true), $.methodSignature("writeAsFits", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")], true)],
		writableChunk,
		() => [/* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("sizeRef", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "typed.Uint16Ref"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksum", "tchannel.Checksum", [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("contents", /* @__PURE__ */ $.pointerType("typed.WriteBuffer"), [3], 48, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class fragmentingWriter {
	public get logger(): __goscript_logger.Logger | null {
		return this._fields.logger
	}

	public set logger(value: __goscript_logger.Logger | null) {
		this._fields.logger = value
	}

	public get sender(): fragmentSender | null {
		return this._fields.sender
	}

	public set sender(value: fragmentSender | null) {
		this._fields.sender = value
	}

	public get checksum(): __goscript_checksum.Checksum | null {
		return this._fields.checksum
	}

	public set checksum(value: __goscript_checksum.Checksum | null) {
		this._fields.checksum = value
	}

	public get curFragment(): writableFragment | $.VarRef<writableFragment> | null {
		return this._fields.curFragment
	}

	public set curFragment(value: writableFragment | $.VarRef<writableFragment> | null) {
		this._fields.curFragment = value
	}

	public get curChunk(): writableChunk | $.VarRef<writableChunk> | null {
		return this._fields.curChunk
	}

	public set curChunk(value: writableChunk | $.VarRef<writableChunk> | null) {
		this._fields.curChunk = value
	}

	public get state(): fragmentingWriterState {
		return this._fields.state
	}

	public set state(value: fragmentingWriterState) {
		this._fields.state = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		logger: __goscript_logger.Logger | null
		sender: fragmentSender | null
		checksum: __goscript_checksum.Checksum | null
		curFragment: writableFragment | $.VarRef<writableFragment> | null
		curChunk: writableChunk | $.VarRef<writableChunk> | null
		state: fragmentingWriterState
		err: $.GoError
	}

	constructor(init?: Partial<{logger?: __goscript_logger.Logger | null, sender?: fragmentSender | null, checksum?: __goscript_checksum.Checksum | null, curFragment?: writableFragment | $.VarRef<writableFragment> | null, curChunk?: writableChunk | $.VarRef<writableChunk> | null, state?: fragmentingWriterState, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as __goscript_logger.Logger | null),
			sender: init?.sender ?? (null! as fragmentSender | null),
			checksum: init?.checksum ?? (null! as __goscript_checksum.Checksum | null),
			curFragment: init?.curFragment ?? (null! as writableFragment | $.VarRef<writableFragment> | null),
			curChunk: init?.curChunk ?? (null! as writableChunk | $.VarRef<writableChunk> | null),
			state: init?.state ?? (0 as fragmentingWriterState),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fragmentingWriter {
		return new fragmentingWriter(this, true)
	}

	public __goscriptAssign(source: fragmentingWriter): void {
		const target = this._fields
		const values = source._fields
		target.logger = $.assignFieldValue(target.logger, values.logger, "tchannel.Logger")
		target.sender = $.assignFieldValue(target.sender, values.sender, "tchannel.fragmentSender")
		target.checksum = $.assignFieldValue(target.checksum, values.checksum, "tchannel.Checksum")
		target.curFragment = values.curFragment
		target.curChunk = values.curChunk
		target.state = values.state
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async ArgWriter(last: boolean): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const w: fragmentingWriter | $.VarRef<fragmentingWriter> | null = this;
		{
			let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as fragmentingWriter).BeginArgument(last) : fragmentingWriter.prototype.BeginArgument.call(w, last))
			if (err != null) {
				return [null, err]
			}
		}
		return [$.interfaceValue<__goscript__arguments.ArgWriter | null>(w, "*tchannel.fragmentingWriter", /* @__PURE__ */ $.pointerType("tchannel.fragmentingWriter")), null]
	}

	public async BeginArgument(last: boolean): globalThis.Promise<$.GoError> {
		let w: fragmentingWriter | $.VarRef<fragmentingWriter> | null = this;
		const w$: fragmentingWriter = w == null ? $.pointerTarget<fragmentingWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<fragmentingWriter>(w)
		if ((w$ as fragmentingWriter).err != null) {
			return (w$ as fragmentingWriter).err
		}

		switch ((true as boolean)) {
			case (w$ as fragmentingWriter).state == 4:
			{
				;(w$ as fragmentingWriter).err = errComplete
				return (w$ as fragmentingWriter).err
				break
			}
			case fragmentingWriterState_isWritingArgument((w$ as fragmentingWriter).state):
			{
				;(w$ as fragmentingWriter).err = errAlreadyWritingArgument
				return (w$ as fragmentingWriter).err
				break
			}
		}

		// If we don't have a fragment, request one
		if ((w$ as fragmentingWriter).curFragment == null) {
			let initial = (w$ as fragmentingWriter).state == 0
			{
				let __goscriptTuple0: any = await $.pointerValue<Exclude<fragmentSender, null>>((w$ as fragmentingWriter).sender).newFragment(initial, (w$ as fragmentingWriter).checksum);
				;(w$ as fragmentingWriter).curFragment = __goscriptTuple0[0];
				;(w$ as fragmentingWriter).err = __goscriptTuple0[1]
				if ((w$ as fragmentingWriter).err != null) {
					return (w$ as fragmentingWriter).err
				}
			}
		}

		// If there's no room in the current fragment, freak out.  This will
		// only happen due to an implementation error in the TChannel stack
		// itself
		if (typed.WriteBuffer.prototype.BytesRemaining.call($.pointerValue<writableFragment>((w$ as fragmentingWriter).curFragment).contents) <= 2) {
			$.panic((fmt.Errorf("attempting to begin an argument in a fragment with only %d bytes available", $.basicInterfaceValue(typed.WriteBuffer.prototype.BytesRemaining.call($.pointerValue<writableFragment>((w$ as fragmentingWriter).curFragment).contents), "int")) as any))
		}

		;(w$ as fragmentingWriter).curChunk = newWritableChunk((w$ as fragmentingWriter).checksum, $.pointerValue<writableFragment>((w$ as fragmentingWriter).curFragment).contents);
		;(w$ as fragmentingWriter).state = 1
		if (last) {
			;(w$ as fragmentingWriter).state = 2
		}
		return null
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let w: fragmentingWriter | $.VarRef<fragmentingWriter> | null = this;
		const w$: fragmentingWriter = w == null ? $.pointerTarget<fragmentingWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<fragmentingWriter>(w)
		let last = (w$ as fragmentingWriter).state == 2
		if ((w$ as fragmentingWriter).err != null) {
			return (w$ as fragmentingWriter).err
		}

		if (!fragmentingWriterState_isWritingArgument((w$ as fragmentingWriter).state)) {
			;(w$ as fragmentingWriter).err = errNotWritingArgument
			return (w$ as fragmentingWriter).err
		}

		writableChunk.prototype.finish.call((w$ as fragmentingWriter).curChunk)

		// There are three possibilities here:
		// 1. There are no more arguments
		//      flush with more_fragments=false, mark the stream as complete
		// 2. There are more arguments, but we can't fit more data into this fragment
		//      flush with more_fragments=true, start new fragment, write empty chunk to indicate
		//      the current argument is complete
		// 3. There are more arguments, and we can fit more data into this fragment
		//      update the chunk but leave the current fragment open
		if (last) {
			// No more arguments - flush this final fragment and mark ourselves complete
			;(w$ as fragmentingWriter).state = 4
			await writableFragment.prototype.finish.call((w$ as fragmentingWriter).curFragment, false);
			;(w$ as fragmentingWriter).err = (__goscriptAwait = $.pointerValue<Exclude<fragmentSender, null>>((w$ as fragmentingWriter).sender).flushFragment((w$ as fragmentingWriter).curFragment), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<fragmentSender, null>>((w$ as fragmentingWriter).sender).doneSending(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return (w$ as fragmentingWriter).err
		}

		;(w$ as fragmentingWriter).state = 3
		if (typed.WriteBuffer.prototype.BytesRemaining.call($.pointerValue<writableFragment>((w$ as fragmentingWriter).curFragment).contents) > 2) {
			// There's enough room in this fragment for the next argument's
			// initial chunk, so we're done here
			return null
		}

		// This fragment is full - flush and prepare for another argument
		await writableFragment.prototype.finish.call((w$ as fragmentingWriter).curFragment, true)
		{
			;(w$ as fragmentingWriter).err = (__goscriptAwait = $.pointerValue<Exclude<fragmentSender, null>>((w$ as fragmentingWriter).sender).flushFragment((w$ as fragmentingWriter).curFragment), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((w$ as fragmentingWriter).err != null) {
				return (w$ as fragmentingWriter).err
			}
		}

		{
			let __goscriptTuple1: any = await $.pointerValue<Exclude<fragmentSender, null>>((w$ as fragmentingWriter).sender).newFragment(false, (w$ as fragmentingWriter).checksum);
			;(w$ as fragmentingWriter).curFragment = __goscriptTuple1[0];
			;(w$ as fragmentingWriter).err = __goscriptTuple1[1]
			if ((w$ as fragmentingWriter).err != null) {
				return (w$ as fragmentingWriter).err
			}
		}

		// Write an empty chunk to indicate this argument has ended
		typed.WriteBuffer.prototype.WriteUint16.call($.pointerValue<writableFragment>((w$ as fragmentingWriter).curFragment).contents, 0)
		return null
	}

	public async Flush(): globalThis.Promise<$.GoError> {
		let w: fragmentingWriter | $.VarRef<fragmentingWriter> | null = this;
		const w$: fragmentingWriter = w == null ? $.pointerTarget<fragmentingWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<fragmentingWriter>(w)
		writableChunk.prototype.finish.call((w$ as fragmentingWriter).curChunk)
		await writableFragment.prototype.finish.call((w$ as fragmentingWriter).curFragment, true)
		{
			;(w$ as fragmentingWriter).err = (__goscriptAwait = $.pointerValue<Exclude<fragmentSender, null>>((w$ as fragmentingWriter).sender).flushFragment((w$ as fragmentingWriter).curFragment), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((w$ as fragmentingWriter).err != null) {
				return (w$ as fragmentingWriter).err
			}
		}

		{
			let __goscriptTuple2: any = await $.pointerValue<Exclude<fragmentSender, null>>((w$ as fragmentingWriter).sender).newFragment(false, (w$ as fragmentingWriter).checksum);
			;(w$ as fragmentingWriter).curFragment = __goscriptTuple2[0];
			;(w$ as fragmentingWriter).err = __goscriptTuple2[1]
			if ((w$ as fragmentingWriter).err != null) {
				return (w$ as fragmentingWriter).err
			}
		}

		;(w$ as fragmentingWriter).curChunk = newWritableChunk((w$ as fragmentingWriter).checksum, $.pointerValue<writableFragment>((w$ as fragmentingWriter).curFragment).contents)
		return null
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: fragmentingWriter | $.VarRef<fragmentingWriter> | null = this;
		const w$: fragmentingWriter = w == null ? $.pointerTarget<fragmentingWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<fragmentingWriter>(w)
		if ((w$ as fragmentingWriter).err != null) {
			return [0, (w$ as fragmentingWriter).err]
		}

		if (!fragmentingWriterState_isWritingArgument((w$ as fragmentingWriter).state)) {
			;(w$ as fragmentingWriter).err = errNotWritingArgument
			return [0, (w$ as fragmentingWriter).err]
		}

		let totalWritten = 0
		while (true) {
			let bytesWritten: number = await writableChunk.prototype.writeAsFits.call((w$ as fragmentingWriter).curChunk, b)
			totalWritten = totalWritten + (bytesWritten)
			if (bytesWritten == $.sliceLen(b)) {
				// The whole thing fit, we're done
				return [totalWritten, null]
			}

			// There was more data than fit into the fragment, so flush the current fragment,
			// start a new fragment and chunk, and continue writing
			{
				;(w$ as fragmentingWriter).err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as fragmentingWriter).Flush() : fragmentingWriter.prototype.Flush.call(w))
				if ((w$ as fragmentingWriter).err != null) {
					return [totalWritten, (w$ as fragmentingWriter).err]
				}
			}

			b = $.goSlice(b, bytesWritten, undefined)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"tchannel.fragmentingWriter",
		() => new fragmentingWriter(),
		() => [$.methodSignature("ArgWriter", [["last", /* @__PURE__ */ $.basicType("bool")]], ["tchannel.ArgWriter", "error"], true), $.methodSignature("BeginArgument", [["last", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Flush", [], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		fragmentingWriter,
		() => [/* @__PURE__ */ $.structField("logger", "tchannel.Logger", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("sender", "tchannel.fragmentSender", [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksum", "tchannel.Checksum", [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("curFragment", /* @__PURE__ */ $.pointerType("tchannel.writableFragment"), [3], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("curChunk", /* @__PURE__ */ $.pointerType("tchannel.writableChunk"), [4], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.fragmentingWriterState"), [5], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("err", "error", [6], 72, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const chunkHeaderSize: number = 2

export const hasMoreFragmentsFlag: number = 1

export const fragmentingWriteStart: fragmentingWriterState = 0

export const fragmentingWriteInArgument: fragmentingWriterState = 1

export const fragmentingWriteInLastArgument: fragmentingWriterState = 2

export const fragmentingWriteWaitingForArgument: fragmentingWriterState = 3

export const fragmentingWriteComplete: fragmentingWriterState = 4

export let errAlreadyWritingArgument: $.GoError = errors.New("already writing argument")

export function __goscript_set_errAlreadyWritingArgument(__goscriptValue: $.GoError): void {
	errAlreadyWritingArgument = __goscriptValue
}

export let errNotWritingArgument: $.GoError = errors.New("not writing argument")

export function __goscript_set_errNotWritingArgument(__goscriptValue: $.GoError): void {
	errNotWritingArgument = __goscriptValue
}

export let errComplete: $.GoError = errors.New("last argument already sent")

export function __goscript_set_errComplete(__goscriptValue: $.GoError): void {
	errComplete = __goscriptValue
}

export function newWritableChunk(checksum: __goscript_checksum.Checksum | null, contents: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): writableChunk | $.VarRef<writableChunk> | null {
	return (() => { const __goscriptLiteralField0 = ((contents !== null && (contents as any).__isVarRef !== true && (contents as any).__goValue === undefined ? ((contents as any) as typed.WriteBuffer).DeferUint16() : typed.WriteBuffer.prototype.DeferUint16.call(contents)) as typed.Uint16Ref); return new writableChunk({size: 0, sizeRef: __goscriptLiteralField0, checksum: checksum, contents: contents}) })()
}

export function fragmentingWriterState_isWritingArgument(s: fragmentingWriterState): boolean {
	return (s == 1) || (s == 2)
}

export function newFragmentingWriter(logger: __goscript_logger.Logger | null, sender: fragmentSender | null, checksum: __goscript_checksum.Checksum | null): fragmentingWriter | $.VarRef<fragmentingWriter> | null {
	return new fragmentingWriter({logger: logger, sender: sender, checksum: checksum, state: 0})
}

var __goscriptAwait: any
