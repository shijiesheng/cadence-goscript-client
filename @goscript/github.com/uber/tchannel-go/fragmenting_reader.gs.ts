// Generated file based on fragmenting_reader.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import type * as sync from "@goscript/sync/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import type * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "./checksum.gs.ts"
import "./errors.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.readableFragment", "tchannel.fragmentReceiver", "tchannel.fragmentingReadState", "tchannel.fragmentingReader"])

export type fragmentReceiver = {
	doneReading(unexpectedErr: $.GoError): void
	recvNextFragment(intial: boolean): [readableFragment | $.VarRef<readableFragment> | null, $.GoError] | globalThis.Promise<[readableFragment | $.VarRef<readableFragment> | null, $.GoError]>
}

$.registerInterfaceType(
	"tchannel.fragmentReceiver",
	null,
	[$.methodSignature("doneReading", [["unexpectedErr", "error"]]), $.methodSignature("recvNextFragment", [["intial", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("tchannel.readableFragment"), "error"])]
);

export type fragmentingReadState = number

$.registerNamedValueType(
	"tchannel.fragmentingReadState",
	{isReadingArgument: (receiver: any, ...args: any[]) => (fragmentingReadState_isReadingArgument as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isReadingArgument", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*tchannel.fragmentingReadState",
	{isReadingArgument: (receiver: any, ...args: any[]) => (fragmentingReadState_isReadingArgument as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isReadingArgument", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class readableFragment {
	public get isDone(): boolean {
		return this._fields.isDone
	}

	public set isDone(value: boolean) {
		this._fields.isDone = value
	}

	public get flags(): number {
		return this._fields.flags
	}

	public set flags(value: number) {
		this._fields.flags = value
	}

	public get checksumType(): __goscript_checksum.ChecksumType {
		return this._fields.checksumType
	}

	public set checksumType(value: __goscript_checksum.ChecksumType) {
		this._fields.checksumType = value
	}

	public get checksum(): $.Slice<number> {
		return this._fields.checksum
	}

	public set checksum(value: $.Slice<number>) {
		this._fields.checksum = value
	}

	public get contents(): typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null {
		return this._fields.contents
	}

	public set contents(value: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null) {
		this._fields.contents = value
	}

	public get onDone(): (() => void) | null {
		return this._fields.onDone
	}

	public set onDone(value: (() => void) | null) {
		this._fields.onDone = value
	}

	public _fields: {
		isDone: boolean
		flags: number
		checksumType: __goscript_checksum.ChecksumType
		checksum: $.Slice<number>
		contents: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null
		onDone: (() => void) | null
	}

	constructor(init?: Partial<{isDone?: boolean, flags?: number, checksumType?: __goscript_checksum.ChecksumType, checksum?: $.Slice<number>, contents?: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null, onDone?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			isDone: init?.isDone ?? (false as boolean),
			flags: init?.flags ?? (0 as number),
			checksumType: init?.checksumType ?? (0 as __goscript_checksum.ChecksumType),
			checksum: init?.checksum ?? (null! as $.Slice<number>),
			contents: init?.contents ?? (null! as typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null),
			onDone: init?.onDone ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): readableFragment {
		return new readableFragment(this, true)
	}

	public __goscriptAssign(source: readableFragment): void {
		const target = this._fields
		const values = source._fields
		target.isDone = values.isDone
		target.flags = values.flags
		target.checksumType = values.checksumType
		target.checksum = values.checksum
		target.contents = values.contents
		target.onDone = values.onDone
	}

	public async done(): globalThis.Promise<void> {
		let f: readableFragment | $.VarRef<readableFragment> | null = this;
		const f$: readableFragment = f == null ? $.pointerTarget<readableFragment>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<readableFragment>(f)
		if ((f$ as readableFragment).isDone) {
			return
		}
		void (__goscriptAwait = (f$ as readableFragment).onDone!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(f$ as readableFragment).isDone = true
	}

	static __typeInfo = $.registerStructType(
		"tchannel.readableFragment",
		() => new readableFragment(),
		() => [$.methodSignature("done", [], [], true)],
		readableFragment,
		() => [/* @__PURE__ */ $.structField("isDone", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("flags", /* @__PURE__ */ $.basicType("uint8"), [1], 1, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksumType", /* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType"), [2], 2, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksum", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("contents", /* @__PURE__ */ $.pointerType("typed.ReadBuffer"), [4], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onDone", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [5], 40, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class fragmentingReader {
	public get logger(): __goscript_logger.Logger | null {
		return this._fields.logger
	}

	public set logger(value: __goscript_logger.Logger | null) {
		this._fields.logger = value
	}

	public get state(): fragmentingReadState {
		return this._fields.state
	}

	public set state(value: fragmentingReadState) {
		this._fields.state = value
	}

	public get remainingChunks(): $.Slice<$.Slice<number>> {
		return this._fields.remainingChunks
	}

	public set remainingChunks(value: $.Slice<$.Slice<number>>) {
		this._fields.remainingChunks = value
	}

	public get curChunk(): $.Slice<number> {
		return this._fields.curChunk
	}

	public set curChunk(value: $.Slice<number>) {
		this._fields.curChunk = value
	}

	public get hasMoreFragments(): boolean {
		return this._fields.hasMoreFragments
	}

	public set hasMoreFragments(value: boolean) {
		this._fields.hasMoreFragments = value
	}

	public get receiver(): fragmentReceiver | null {
		return this._fields.receiver
	}

	public set receiver(value: fragmentReceiver | null) {
		this._fields.receiver = value
	}

	public get curFragment(): readableFragment | $.VarRef<readableFragment> | null {
		return this._fields.curFragment
	}

	public set curFragment(value: readableFragment | $.VarRef<readableFragment> | null) {
		this._fields.curFragment = value
	}

	public get checksum(): __goscript_checksum.Checksum | null {
		return this._fields.checksum
	}

	public set checksum(value: __goscript_checksum.Checksum | null) {
		this._fields.checksum = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		logger: __goscript_logger.Logger | null
		state: fragmentingReadState
		remainingChunks: $.Slice<$.Slice<number>>
		curChunk: $.Slice<number>
		hasMoreFragments: boolean
		receiver: fragmentReceiver | null
		curFragment: readableFragment | $.VarRef<readableFragment> | null
		checksum: __goscript_checksum.Checksum | null
		err: $.GoError
	}

	constructor(init?: Partial<{logger?: __goscript_logger.Logger | null, state?: fragmentingReadState, remainingChunks?: $.Slice<$.Slice<number>>, curChunk?: $.Slice<number>, hasMoreFragments?: boolean, receiver?: fragmentReceiver | null, curFragment?: readableFragment | $.VarRef<readableFragment> | null, checksum?: __goscript_checksum.Checksum | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as __goscript_logger.Logger | null),
			state: init?.state ?? (0 as fragmentingReadState),
			remainingChunks: init?.remainingChunks ?? (null! as $.Slice<$.Slice<number>>),
			curChunk: init?.curChunk ?? (null! as $.Slice<number>),
			hasMoreFragments: init?.hasMoreFragments ?? (false as boolean),
			receiver: init?.receiver ?? (null! as fragmentReceiver | null),
			curFragment: init?.curFragment ?? (null! as readableFragment | $.VarRef<readableFragment> | null),
			checksum: init?.checksum ?? (null! as __goscript_checksum.Checksum | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fragmentingReader {
		return new fragmentingReader(this, true)
	}

	public __goscriptAssign(source: fragmentingReader): void {
		const target = this._fields
		const values = source._fields
		target.logger = $.assignFieldValue(target.logger, values.logger, "tchannel.Logger")
		target.state = values.state
		target.remainingChunks = values.remainingChunks
		target.curChunk = values.curChunk
		target.hasMoreFragments = values.hasMoreFragments
		target.receiver = $.assignFieldValue(target.receiver, values.receiver, "tchannel.fragmentReceiver")
		target.curFragment = values.curFragment
		target.checksum = $.assignFieldValue(target.checksum, values.checksum, "tchannel.Checksum")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async ArgReader(last: boolean): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const r: fragmentingReader | $.VarRef<fragmentingReader> | null = this;
		{
			let err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as fragmentingReader).BeginArgument(last) : fragmentingReader.prototype.BeginArgument.call(r, last))
			if (err != null) {
				return [null, err]
			}
		}
		return [$.interfaceValue<__goscript__arguments.ArgReader | null>(r, "*tchannel.fragmentingReader", /* @__PURE__ */ $.pointerType("tchannel.fragmentingReader")), null]
	}

	public async BeginArgument(last: boolean): globalThis.Promise<$.GoError> {
		let r: fragmentingReader | $.VarRef<fragmentingReader> | null = this;
		const r$: fragmentingReader = r == null ? $.pointerTarget<fragmentingReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<fragmentingReader>(r)
		if ((r$ as fragmentingReader).err != null) {
			return (r$ as fragmentingReader).err
		}

		switch ((true as boolean)) {
			case fragmentingReadState_isReadingArgument((r$ as fragmentingReader).state):
			{
				;(r$ as fragmentingReader).err = errAlreadyReadingArgument
				return (r$ as fragmentingReader).err
				break
			}
			case (r$ as fragmentingReader).state == 4:
			{
				;(r$ as fragmentingReader).err = __goscript_fragmenting_writer.errComplete
				return (r$ as fragmentingReader).err
				break
			}
		}

		// We're guaranteed that either this is the first argument (in which
		// case we need to get the first fragment and chunk) or that we have a
		// valid curChunk (populated via Close)
		if ((r$ as fragmentingReader).state == 0) {
			{
				;(r$ as fragmentingReader).err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as fragmentingReader).recvAndParseNextFragment(true) : fragmentingReader.prototype.recvAndParseNextFragment.call(r, true))
				if ((r$ as fragmentingReader).err != null) {
					return (r$ as fragmentingReader).err
				}
			}
		}

		;(r$ as fragmentingReader).state = 1
		if (last) {
			;(r$ as fragmentingReader).state = 2
		}
		return null
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let r: fragmentingReader | $.VarRef<fragmentingReader> | null = this;
		const r$: fragmentingReader = r == null ? $.pointerTarget<fragmentingReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<fragmentingReader>(r)
		let last = (r$ as fragmentingReader).state == 2
		if ((r$ as fragmentingReader).err != null) {
			return (r$ as fragmentingReader).err
		}

		if (!fragmentingReadState_isReadingArgument((r$ as fragmentingReader).state)) {
			;(r$ as fragmentingReader).err = errNotReadingArgument
			return (r$ as fragmentingReader).err
		}

		if ($.sliceLen((r$ as fragmentingReader).curChunk) > 0) {
			// There was more data remaining in the chunk
			;(r$ as fragmentingReader).err = errMoreDataInArgument
			return (r$ as fragmentingReader).err
		}

		// Several possibilities here:
		// 1. The caller thinks this is the last argument, but there are chunks in the current
		//    fragment or more fragments in this message
		//       - give them an error
		// 2. The caller thinks this is the last argument, and there are no more chunks and no more
		//    fragments
		//       - the stream is complete
		// 3. The caller thinks there are more arguments, and there are more chunks in this fragment
		//       - advance to the next chunk, this is the first chunk for the next argument
		// 4. The caller thinks there are more arguments, and there are no more chunks in this fragment,
		//    but there are more fragments in the message
		//       - retrieve the next fragment, confirm it has an empty chunk (indicating the end of the
		//         current argument), advance to the next check (which is the first chunk for the next arg)
		// 5. The caller thinks there are more arguments, but there are no more chunks or fragments available
		//      - give them an err
		if (last) {
			if (($.sliceLen((r$ as fragmentingReader).remainingChunks) > 0) || (r$ as fragmentingReader).hasMoreFragments) {
				// We expect more arguments
				;(r$ as fragmentingReader).err = errExpectedMoreArguments
				return (r$ as fragmentingReader).err
			}

			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as fragmentingReader).doneReading(null) : fragmentingReader.prototype.doneReading.call(r, null))
			await readableFragment.prototype.done.call((r$ as fragmentingReader).curFragment);
			;(r$ as fragmentingReader).curChunk = null;
			;(r$ as fragmentingReader).state = 4
			return null
		}

		;(r$ as fragmentingReader).state = 3

		// If there are more chunks in this fragment, advance to the next chunk.  This is the first chunk
		// for the next argument
		if ($.sliceLen((r$ as fragmentingReader).remainingChunks) > 0) {
			let __goscriptAssign0_0: $.Slice<number> = $.arrayIndex((r$ as fragmentingReader).remainingChunks!, 0)
			let __goscriptAssign0_1: $.Slice<$.Slice<number>> = $.goSlice((r$ as fragmentingReader).remainingChunks, 1, undefined);
			;(r$ as fragmentingReader).curChunk = __goscriptAssign0_0;
			;(r$ as fragmentingReader).remainingChunks = __goscriptAssign0_1
			return null
		}

		// If there are no more chunks in this fragment, and no more fragments, we have an issue
		if (!(r$ as fragmentingReader).hasMoreFragments) {
			;(r$ as fragmentingReader).err = errNoMoreFragments
			return (r$ as fragmentingReader).err
		}

		// There are no more chunks in this fragments, but more fragments - get the next fragment
		{
			;(r$ as fragmentingReader).err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as fragmentingReader).recvAndParseNextFragment(false) : fragmentingReader.prototype.recvAndParseNextFragment.call(r, false))
			if ((r$ as fragmentingReader).err != null) {
				return (r$ as fragmentingReader).err
			}
		}

		return null
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: fragmentingReader | $.VarRef<fragmentingReader> | null = this;
		const r$: fragmentingReader = r == null ? $.pointerTarget<fragmentingReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<fragmentingReader>(r)
		if ((r$ as fragmentingReader).err != null) {
			return [0, (r$ as fragmentingReader).err]
		}

		if (!fragmentingReadState_isReadingArgument((r$ as fragmentingReader).state)) {
			;(r$ as fragmentingReader).err = errNotReadingArgument
			return [0, (r$ as fragmentingReader).err]
		}

		let totalRead = 0
		while (true) {
			// Copy as much data as we can from the current chunk
			let n: number = $.copy(b, (r$ as fragmentingReader).curChunk)
			totalRead = totalRead + (n);
			;(r$ as fragmentingReader).curChunk = $.goSlice((r$ as fragmentingReader).curChunk, n, undefined)
			b = $.goSlice(b, n, undefined)

			if ($.sliceLen(b) == 0) {
				// There was enough data in the current chunk to
				// satisfy the read.  Advance our place in the current
				// chunk and be done
				return [totalRead, null]
			}

			// There wasn't enough data in the current chunk to satisfy the
			// current read.  If there are more chunks in the current
			// fragment, then we've reach the end of this argument.  Return
			// an io.EOF so functions like ioutil.ReadFully know to finish
			if ($.sliceLen((r$ as fragmentingReader).remainingChunks) > 0) {
				return [totalRead, io.EOF]
			}

			// Try to fetch more fragments.  If there are no more
			// fragments, then we've reached the end of the argument
			if (!(r$ as fragmentingReader).hasMoreFragments) {
				return [totalRead, io.EOF]
			}

			{
				;(r$ as fragmentingReader).err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as fragmentingReader).recvAndParseNextFragment(false) : fragmentingReader.prototype.recvAndParseNextFragment.call(r, false))
				if ((r$ as fragmentingReader).err != null) {
					return [totalRead, (r$ as fragmentingReader).err]
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async doneReading(err: $.GoError): globalThis.Promise<void> {
		const r: fragmentingReader | $.VarRef<fragmentingReader> | null = this;
		const r$: fragmentingReader = r == null ? $.pointerTarget<fragmentingReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<fragmentingReader>(r)
		if ((r$ as fragmentingReader).checksum != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>((r$ as fragmentingReader).checksum).Release(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (__goscriptAwait = $.pointerValue<Exclude<fragmentReceiver, null>>((r$ as fragmentingReader).receiver).doneReading(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async recvAndParseNextFragment(initial: boolean): globalThis.Promise<$.GoError> {
		let r: fragmentingReader | $.VarRef<fragmentingReader> | null = this;
		const r$: fragmentingReader = r == null ? $.pointerTarget<fragmentingReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<fragmentingReader>(r)
		if ((r$ as fragmentingReader).err != null) {
			return (r$ as fragmentingReader).err
		}

		if ((r$ as fragmentingReader).curFragment != null) {
			await readableFragment.prototype.done.call((r$ as fragmentingReader).curFragment)
		}

		let __goscriptTuple0: any = await $.pointerValue<Exclude<fragmentReceiver, null>>((r$ as fragmentingReader).receiver).recvNextFragment(initial);
		;(r$ as fragmentingReader).curFragment = __goscriptTuple0[0];
		;(r$ as fragmentingReader).err = __goscriptTuple0[1]
		if ((r$ as fragmentingReader).err != null) {
			{
				let __goscriptTuple1: any = $.typeAssertTuple<__goscript_messages.errorMessage>((r$ as fragmentingReader).err, "tchannel.errorMessage")
				let err = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					// Serialized system errors are still reported (e.g. latency, trace reporting).
					;(r$ as fragmentingReader).err = await err.AsSystemError()
					await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as fragmentingReader).doneReading((r$ as fragmentingReader).err) : fragmentingReader.prototype.doneReading.call(r, (r$ as fragmentingReader).err))
				}
			}
			return (r$ as fragmentingReader).err
		}

		// Set checksum, or confirm new checksum is the same type as the prior checksum
		if ((r$ as fragmentingReader).checksum == null) {
			;(r$ as fragmentingReader).checksum = await __goscript_checksum.ChecksumType_New($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).checksumType)
		} else {
			if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>((r$ as fragmentingReader).checksum).TypeCode(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != $.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).checksumType) {
				return errMismatchedChecksumTypes
			}
		}

		// Split fragment into underlying chunks
		;(r$ as fragmentingReader).hasMoreFragments = $.uint(($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).flags & 1), 8) == 1;
		;(r$ as fragmentingReader).remainingChunks = null
		while ((typed.ReadBuffer.prototype.BytesRemaining.call($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).contents) > 0) && (typed.ReadBuffer.prototype.Err.call($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).contents) == null)) {
			let chunkSize = typed.ReadBuffer.prototype.ReadUint16.call($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).contents)
			if (chunkSize > $.uint(typed.ReadBuffer.prototype.BytesRemaining.call($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).contents), 16)) {
				return errChunkExceedsFragmentSize
			}
			let chunkData: $.Slice<number> = typed.ReadBuffer.prototype.ReadBytes.call($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).contents, $.int(chunkSize));
			;(r$ as fragmentingReader).remainingChunks = $.appendOne((r$ as fragmentingReader).remainingChunks, chunkData, $.appendZeros.nil)
			void ((__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>((r$ as fragmentingReader).checksum).Add(chunkData), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		}

		if (typed.ReadBuffer.prototype.Err.call($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).contents) != null) {
			return typed.ReadBuffer.prototype.Err.call($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).contents)
		}

		// Validate checksums
		let localChecksum: $.Slice<number> = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>((r$ as fragmentingReader).checksum).Sum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		if (bytes.Compare($.pointerValue<readableFragment>((r$ as fragmentingReader).curFragment).checksum, localChecksum) != 0) {
			;(r$ as fragmentingReader).err = errMismatchedChecksums
			return (r$ as fragmentingReader).err
		}

		// Pull out the first chunk to act as the current chunk
		let __goscriptAssign1_0: $.Slice<number> = $.arrayIndex((r$ as fragmentingReader).remainingChunks!, 0)
		let __goscriptAssign1_1: $.Slice<$.Slice<number>> = $.goSlice((r$ as fragmentingReader).remainingChunks, 1, undefined);
		;(r$ as fragmentingReader).curChunk = __goscriptAssign1_0;
		;(r$ as fragmentingReader).remainingChunks = __goscriptAssign1_1
		return null
	}

	static __typeInfo = $.registerStructType(
		"tchannel.fragmentingReader",
		() => new fragmentingReader(),
		() => [$.methodSignature("ArgReader", [["last", /* @__PURE__ */ $.basicType("bool")]], ["tchannel.ArgReader", "error"], true), $.methodSignature("BeginArgument", [["last", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("doneReading", [["err", "error"]], [], true), $.methodSignature("recvAndParseNextFragment", [["initial", /* @__PURE__ */ $.basicType("bool")]], ["error"], true)],
		fragmentingReader,
		() => [/* @__PURE__ */ $.structField("logger", "tchannel.Logger", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.fragmentingReadState"), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("remainingChunks", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [2], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("curChunk", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("hasMoreFragments", /* @__PURE__ */ $.basicType("bool"), [4], 72, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("receiver", "tchannel.fragmentReceiver", [5], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("curFragment", /* @__PURE__ */ $.pointerType("tchannel.readableFragment"), [6], 96, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksum", "tchannel.Checksum", [7], 104, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("err", "error", [8], 120, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const fragmentingReadStart: fragmentingReadState = 0

export const fragmentingReadInArgument: fragmentingReadState = 1

export const fragmentingReadInLastArgument: fragmentingReadState = 2

export const fragmentingReadWaitingForArgument: fragmentingReadState = 3

export const fragmentingReadComplete: fragmentingReadState = 4

export let errMismatchedChecksumTypes: $.GoError = errors.New("peer returned different checksum types between fragments")

export function __goscript_set_errMismatchedChecksumTypes(__goscriptValue: $.GoError): void {
	errMismatchedChecksumTypes = __goscriptValue
}

export let errMismatchedChecksums: $.GoError = errors.New("different checksums between peer and local")

export function __goscript_set_errMismatchedChecksums(__goscriptValue: $.GoError): void {
	errMismatchedChecksums = __goscriptValue
}

export let errChunkExceedsFragmentSize: $.GoError = errors.New("peer chunk size exceeds remaining data in fragment")

export function __goscript_set_errChunkExceedsFragmentSize(__goscriptValue: $.GoError): void {
	errChunkExceedsFragmentSize = __goscriptValue
}

export let errAlreadyReadingArgument: $.GoError = errors.New("already reading argument")

export function __goscript_set_errAlreadyReadingArgument(__goscriptValue: $.GoError): void {
	errAlreadyReadingArgument = __goscriptValue
}

export let errNotReadingArgument: $.GoError = errors.New("not reading argument")

export function __goscript_set_errNotReadingArgument(__goscriptValue: $.GoError): void {
	errNotReadingArgument = __goscriptValue
}

export let errMoreDataInArgument: $.GoError = errors.New("closed argument reader when there is more data available to read")

export function __goscript_set_errMoreDataInArgument(__goscriptValue: $.GoError): void {
	errMoreDataInArgument = __goscriptValue
}

export let errExpectedMoreArguments: $.GoError = errors.New("closed argument reader when there may be more data available to read")

export function __goscript_set_errExpectedMoreArguments(__goscriptValue: $.GoError): void {
	errExpectedMoreArguments = __goscriptValue
}

export let errNoMoreFragments: $.GoError = errors.New("no more fragments")

export function __goscript_set_errNoMoreFragments(__goscriptValue: $.GoError): void {
	errNoMoreFragments = __goscriptValue
}

export function fragmentingReadState_isReadingArgument(s: fragmentingReadState): boolean {
	return (s == 1) || (s == 2)
}

export function newFragmentingReader(logger: __goscript_logger.Logger | null, receiver: fragmentReceiver | null): fragmentingReader | $.VarRef<fragmentingReader> | null {
	return new fragmentingReader({logger: logger, receiver: receiver, hasMoreFragments: true})
}

var __goscriptAwait: any
