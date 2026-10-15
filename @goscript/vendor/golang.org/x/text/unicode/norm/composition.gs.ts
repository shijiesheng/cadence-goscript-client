// Generated file based on composition.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import type * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_forminfo from "./forminfo.gs.ts"

import * as __goscript_input from "./input.gs.ts"

import * as __goscript_iter from "./iter.gs.ts"

import * as __goscript_normalize from "./normalize.gs.ts"

import * as __goscript_readwriter from "./readwriter.gs.ts"

import * as __goscript_tables17_0_0 from "./tables17.0.0.gs.ts"

import * as __goscript_transform from "./transform.gs.ts"
import "@goscript/unicode/utf8/index.js"
import "@goscript/sync/index.js"
import "./forminfo.gs.ts"
import "./input.gs.ts"
import "./iter.gs.ts"
import "./normalize.gs.ts"
import "./readwriter.gs.ts"
import "./tables17.0.0.gs.ts"
import "./transform.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/text/unicode/norm", ["norm.ssState", "norm.streamSafe", "norm.reorderBuffer", "norm.insertErr"])

export type ssState = number

export type streamSafe = number

$.registerNamedValueType(
	"norm.streamSafe",
	{isMax: (receiver: any, ...args: any[]) => (streamSafe_isMax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isMax", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*norm.streamSafe",
	{backwards: (receiver: any, ...args: any[]) => (streamSafe_backwards as any)(receiver, ...$.stripGenericTypeArgs(args)), first: (receiver: any, ...args: any[]) => (streamSafe_first as any)(receiver, ...$.stripGenericTypeArgs(args)), isMax: (receiver: any, ...args: any[]) => (streamSafe_isMax as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), next: (receiver: any, ...args: any[]) => (streamSafe_next as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("backwards", [["p", "norm.Properties"]], [/* @__PURE__ */ $.basicType("int", "norm.ssState")]), $.methodSignature("first", [["p", "norm.Properties"]]), $.methodSignature("isMax", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("next", [["p", "norm.Properties"]], [/* @__PURE__ */ $.basicType("int", "norm.ssState")])]
);

export type insertErr = number

export class reorderBuffer {
	public get rune(): __goscript_forminfo.Properties[] {
		return this._fields.rune
	}

	public set rune(value: __goscript_forminfo.Properties[]) {
		this._fields.rune = value
	}

	public get byte(): Uint8Array {
		return this._fields.byte
	}

	public set byte(value: Uint8Array) {
		this._fields.byte = value
	}

	public get nbyte(): number {
		return this._fields.nbyte
	}

	public set nbyte(value: number) {
		this._fields.nbyte = value
	}

	public get ss(): streamSafe {
		return this._fields.ss
	}

	public set ss(value: streamSafe) {
		this._fields.ss = value
	}

	public get nrune(): number {
		return this._fields.nrune
	}

	public set nrune(value: number) {
		this._fields.nrune = value
	}

	public get f(): __goscript_forminfo.formInfo {
		return this._fields.f
	}

	public set f(value: __goscript_forminfo.formInfo) {
		this._fields.f = value
	}

	public get src(): __goscript_input.input {
		return this._fields.src
	}

	public set src(value: __goscript_input.input) {
		this._fields.src = value
	}

	public get nsrc(): number {
		return this._fields.nsrc
	}

	public set nsrc(value: number) {
		this._fields.nsrc = value
	}

	public get tmpBytes(): __goscript_input.input {
		return this._fields.tmpBytes
	}

	public set tmpBytes(value: __goscript_input.input) {
		this._fields.tmpBytes = value
	}

	public get out(): $.Slice<number> {
		return this._fields.out
	}

	public set out(value: $.Slice<number>) {
		this._fields.out = value
	}

	public get flushF(): ((_p0: reorderBuffer | $.VarRef<reorderBuffer> | null) => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.flushF
	}

	public set flushF(value: ((_p0: reorderBuffer | $.VarRef<reorderBuffer> | null) => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.flushF = value
	}

	public _fields: {
		rune: __goscript_forminfo.Properties[]
		byte: Uint8Array
		nbyte: number
		ss: streamSafe
		nrune: number
		f: __goscript_forminfo.formInfo
		src: __goscript_input.input
		nsrc: number
		tmpBytes: __goscript_input.input
		out: $.Slice<number>
		flushF: ((_p0: reorderBuffer | $.VarRef<reorderBuffer> | null) => boolean | globalThis.Promise<boolean>) | null
	}

	constructor(init?: Partial<{rune?: __goscript_forminfo.Properties[], byte?: Uint8Array, nbyte?: number, ss?: streamSafe, nrune?: number, f?: __goscript_forminfo.formInfo, src?: __goscript_input.input, nsrc?: number, tmpBytes?: __goscript_input.input, out?: $.Slice<number>, flushF?: ((_p0: reorderBuffer | $.VarRef<reorderBuffer> | null) => boolean | globalThis.Promise<boolean>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			rune: init?.rune !== undefined ? $.cloneArrayValue(init.rune, /* @__PURE__ */ $.arrayType("norm.Properties", 32)) : $.arrayValue(globalThis.Array.from({ length: 32 }, () => new __goscript_forminfo.Properties(undefined, true)), /* @__PURE__ */ $.arrayType("norm.Properties", 32)),
			byte: init?.byte !== undefined ? $.cloneArrayValue(init.byte, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128)) : $.arrayValue(new Uint8Array(128)),
			nbyte: init?.nbyte ?? (0 as number),
			ss: init?.ss ?? (0 as streamSafe),
			nrune: init?.nrune ?? (0 as number),
			f: init?.f ? init.f.clone() : new __goscript_forminfo.formInfo(undefined, true),
			src: init?.src ? init.src.clone() : new __goscript_input.input(undefined, true),
			nsrc: init?.nsrc ?? (0 as number),
			tmpBytes: init?.tmpBytes ? init.tmpBytes.clone() : new __goscript_input.input(undefined, true),
			out: init?.out ?? (null! as $.Slice<number>),
			flushF: init?.flushF ?? (null! as ((_p0: reorderBuffer | $.VarRef<reorderBuffer> | null) => boolean | globalThis.Promise<boolean>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): reorderBuffer {
		return new reorderBuffer(this, true)
	}

	public __goscriptAssign(source: reorderBuffer): void {
		const target = this._fields
		const values = source._fields
		target.rune = $.assignFieldValue(target.rune, values.rune, /* @__PURE__ */ $.arrayType("norm.Properties", 32))
		target.byte = $.assignFieldValue(target.byte, values.byte, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128))
		target.nbyte = values.nbyte
		target.ss = values.ss
		target.nrune = values.nrune
		$.assignStruct(target.f, values.f)
		$.assignStruct(target.src, values.src)
		target.nsrc = values.nsrc
		$.assignStruct(target.tmpBytes, values.tmpBytes)
		target.out = values.out
		target.flushF = values.flushF
	}

	public appendRune(r: number): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		let bn = (rb$ as reorderBuffer).nbyte
		let sz = utf8.EncodeRune($.goSlice((rb$ as reorderBuffer).byte, bn, undefined), $.int(r, 32));
		;(rb$ as reorderBuffer).nbyte = $.uint((rb$ as reorderBuffer).nbyte + (4), 8)
		$.assignStruct((rb$ as reorderBuffer).rune[(rb$ as reorderBuffer).nrune], new __goscript_forminfo.Properties({pos: bn, size: $.uint(sz, 8)}, true));
		;(rb$ as reorderBuffer).nrune++
	}

	public assignRune(pos: number, r: number): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		let bn = $.arrayIndex((rb$ as reorderBuffer).rune, pos).pos
		let sz = utf8.EncodeRune($.goSlice((rb$ as reorderBuffer).byte, bn, undefined), $.int(r, 32))
		$.assignStruct((rb$ as reorderBuffer).rune[pos], new __goscript_forminfo.Properties({pos: bn, size: $.uint(sz, 8)}, true))
	}

	public bytesAt(n: number): $.Slice<number> {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		let inf = ($.arrayIndex((rb$ as reorderBuffer).rune, n)).clone()
		return $.goSlice((rb$ as reorderBuffer).byte, inf.pos, $.int(inf.pos) + $.int(inf.size))
	}

	public combineHangul(s: number, i: number, k: number): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		let b: $.Slice<__goscript_forminfo.Properties> = $.goSlice((rb$ as reorderBuffer).rune, undefined, undefined)
		let bn = (rb$ as reorderBuffer).nrune
		for (let __goscriptSliceWindow0 = $.sliceRange(b); i < bn; i++) {
			let cccB = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, k - 1)] as __goscript_forminfo.Properties).ccc
			let cccC = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_forminfo.Properties).ccc
			if (cccB == 0) {
				s = k - 1
			}
			if ((s != (k - 1)) && (cccB >= cccC)) {
				// b[i] is blocked by greater-equal cccX below it
				$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, k)], ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_forminfo.Properties))
				k++
			} else {
				let l = (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).runeAt(s) : reorderBuffer.prototype.runeAt.call(rb, s))
				let v = (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).runeAt(i) : reorderBuffer.prototype.runeAt.call(rb, i))
				switch ((true as boolean)) {
					case (((4352 <= l) && (l < 4371)) && (4449 <= v)) && (v < 4470):
					{
						reorderBuffer.prototype.assignRune.call(rb, s, $.int((((((44032 + (globalThis.Math.imul((((l - 4352) | 0)), 588))) | 0)) + (globalThis.Math.imul((((v - 4449) | 0)), 28))) | 0), 32))
						break
					}
					case ((((44032 <= l) && (l < 55204)) && (4519 < v)) && (v < 4547)) && ($.int(((((l - 44032) | 0)) % 28), 32) == 0):
					{
						void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).assignRune(s, $.int((((((l + v) | 0)) - 4519) | 0), 32)) : reorderBuffer.prototype.assignRune.call(rb, s, $.int((((((l + v) | 0)) - 4519) | 0), 32)))
						break
					}
					default:
					{
						$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, k)], ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_forminfo.Properties))
						k++
						break
					}
				}
			}
		}
		;(rb$ as reorderBuffer).nrune = k
	}

	public async compose(): globalThis.Promise<void> {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		// Lazily load the map used by the combine func below, but do
		// it outside of the loop.
		await $.pointerValue<sync.Once>(__goscript_tables17_0_0.recompMapOnce).Do(__goscript_forminfo.buildRecompMap)

		// UAX #15, section X5 , including Corrigendum #5
		// "In any character sequence beginning with starter S, a character C is
		//  blocked from S if and only if there is some character B between S
		//  and C, and either B is a starter or it has the same or higher
		//  combining class as C."
		let bn = (rb$ as reorderBuffer).nrune
		if (bn == 0) {
			return
		}
		let k = 1
		let b: $.Slice<__goscript_forminfo.Properties> = $.goSlice((rb$ as reorderBuffer).rune, undefined, undefined)
		for (let __goscriptSliceWindow1 = $.sliceRange(b), s = 0, i = 1; i < bn; i++) {
			if (isJamoVT((rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).bytesAt(i) : reorderBuffer.prototype.bytesAt.call(rb, i)))) {
				// Redo from start in Hangul mode. Necessary to support
				// U+320E..U+321E in NFKC mode.
				void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).combineHangul(s, i, k) : reorderBuffer.prototype.combineHangul.call(rb, s, i, k))
				return
			}
			let ii = (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as __goscript_forminfo.Properties)).clone()
			// We can only use combineForward as a filter if we later
			// get the info for the combined character. This is more
			// expensive than using the filter. Using combinesBackward()
			// is safe.
			if (ii.combinesBackward()) {
				let cccB = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, k - 1)] as __goscript_forminfo.Properties).ccc
				let cccC = ii.ccc
				let blocked = false
				if (cccB == 0) {
					s = k - 1
				} else {
					blocked = (s != (k - 1)) && (cccB >= cccC)
				}
				if (!blocked) {
					let combined = __goscript_forminfo.combine((rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).runeAt(s) : reorderBuffer.prototype.runeAt.call(rb, s)), (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).runeAt(i) : reorderBuffer.prototype.runeAt.call(rb, i)))
					if (combined != 0) {
						void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).assignRune(s, combined) : reorderBuffer.prototype.assignRune.call(rb, s, combined))
						continue
					}
				}
			}
			$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, k)], ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as __goscript_forminfo.Properties))
			k++
		}
		;(rb$ as reorderBuffer).nrune = k
	}

	public decomposeHangul(r: number): void {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		r = $.int(r - (44032), 32)
		let x = $.int(r % 28, 32)
		r = globalThis.Math.trunc(r / 28)
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).appendRune($.int(((4352 + (globalThis.Math.trunc(r / 21))) | 0), 32)) : reorderBuffer.prototype.appendRune.call(rb, $.int(((4352 + (globalThis.Math.trunc(r / 21))) | 0), 32)))
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).appendRune($.int(((4449 + (r % 21)) | 0), 32)) : reorderBuffer.prototype.appendRune.call(rb, $.int(((4449 + (r % 21)) | 0), 32)))
		if (x != 0) {
			void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).appendRune($.int(((4519 + x) | 0), 32)) : reorderBuffer.prototype.appendRune.call(rb, $.int(((4519 + x) | 0), 32)))
		}
	}

	public async doFlush(): globalThis.Promise<boolean> {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		if ((rb$ as reorderBuffer).f.composing) {
			await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).compose() : reorderBuffer.prototype.compose.call(rb))
		}
		let res = (__goscriptAwait = (rb$ as reorderBuffer).flushF!(rb), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).reset() : reorderBuffer.prototype.reset.call(rb))
		return res
	}

	public flush(out: $.Slice<number>): $.Slice<number> {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		for (let i = 0; i < (rb$ as reorderBuffer).nrune; i++) {
			let start = $.arrayIndex((rb$ as reorderBuffer).rune, i).pos
			let end = $.uint(((start + $.arrayIndex((rb$ as reorderBuffer).rune, i).size) & 0xff), 8)
			out = $.appendSlice(out, $.goSlice((rb$ as reorderBuffer).byte, start, end), $.byteSliceHint)
		}
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).reset() : reorderBuffer.prototype.reset.call(rb))
		return out
	}

	public flushCopy(buf: $.Slice<number>): number {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		let p = 0
		for (let i = 0; i < (rb$ as reorderBuffer).nrune; i++) {
			let runep = ($.arrayIndex((rb$ as reorderBuffer).rune, i)).clone()
			p = p + ($.copy($.goSlice(buf, p, undefined), $.goSlice((rb$ as reorderBuffer).byte, runep.pos, ((runep.pos + runep.size) & 0xff))))
		}
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).reset() : reorderBuffer.prototype.reset.call(rb))
		return p
	}

	public init(f: __goscript_normalize.Form, src: $.Slice<number>): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		$.assignStruct((rb$ as reorderBuffer).f, $.pointerValue<__goscript_forminfo.formInfo>($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)))
		void (rb$ as reorderBuffer).src.setBytes(src);
		;(rb$ as reorderBuffer).nsrc = $.sliceLen(src);
		;(rb$ as reorderBuffer).ss = 0
	}

	public initString(f: __goscript_normalize.Form, src: string): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		$.assignStruct((rb$ as reorderBuffer).f, $.pointerValue<__goscript_forminfo.formInfo>($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)))
		void (rb$ as reorderBuffer).src.setString(src);
		;(rb$ as reorderBuffer).nsrc = $.stringLen(src);
		;(rb$ as reorderBuffer).ss = 0
	}

	public insertCGJ(): void {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).insertSingle(new __goscript_input.input({str: "\xcd\x8f"}, true), 0, new __goscript_forminfo.Properties({size: 2}, true)) : reorderBuffer.prototype.insertSingle.call(rb, new __goscript_input.input({str: "\xcd\x8f"}, true), 0, new __goscript_forminfo.Properties({size: 2}, true)))
	}

	public async insertDecomposed(dcomp: $.Slice<number>): globalThis.Promise<insertErr> {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		void (rb$ as reorderBuffer).tmpBytes.setBytes(dcomp)
		// As the streamSafe accounting already handles the counting for modifiers,
		// we don't have to call next. However, we do need to keep the accounting
		// intact when flushing the buffer.
		for (let i = 0; i < $.sliceLen(dcomp); ) {
			let info = (((__goscriptAwait = (rb$ as reorderBuffer).f.info!(((rb$ as reorderBuffer).tmpBytes).clone(), i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone()
			if ((info.BoundaryBefore() && ((rb$ as reorderBuffer).nrune > 0)) && !await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).doFlush() : reorderBuffer.prototype.doFlush.call(rb))) {
				return -1
			}
			i = i + ($.copy($.goSlice((rb$ as reorderBuffer).byte, (rb$ as reorderBuffer).nbyte, undefined), $.goSlice(dcomp, i, i + $.int(info.size))))
			void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).insertOrdered((info).clone()) : reorderBuffer.prototype.insertOrdered.call(rb, (info).clone()))
		}
		return 0
	}

	public async insertFlush(__goscriptParam0: __goscript_input.input, i: number, info: __goscript_forminfo.Properties): globalThis.Promise<insertErr> {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		let src: $.VarRef<__goscript_input.input> = $.varRef(__goscriptParam0)
		{
			let rune = src.value.hangul(i)
			if (rune != 0) {
				void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).decomposeHangul(rune) : reorderBuffer.prototype.decomposeHangul.call(rb, rune))
				return 0
			}
		}
		if (info.hasDecomposition()) {
			return (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).insertDecomposed(info.Decomposition()) : reorderBuffer.prototype.insertDecomposed.call(rb, info.Decomposition()))
		}
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).insertSingle((src.value).clone(), i, info) : reorderBuffer.prototype.insertSingle.call(rb, (src.value).clone(), i, info))
		return 0
	}

	public insertOrdered(info: __goscript_forminfo.Properties): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		let n = (rb$ as reorderBuffer).nrune
		let b: $.Slice<__goscript_forminfo.Properties> = $.goSlice((rb$ as reorderBuffer).rune, undefined, undefined)
		let cc = info.ccc
		if (cc > 0) {
			// Find insertion position + move elements to make room.
			for (let __goscriptSliceWindow2 = $.sliceRange(b); n > 0; n--) {
				if (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, n - 1)] as __goscript_forminfo.Properties).ccc <= cc) {
					break
				}
				$.assignStruct((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, n)], ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, n - 1)] as __goscript_forminfo.Properties))
			}
		}
		;(rb$ as reorderBuffer).nrune = (rb$ as reorderBuffer).nrune + (1)
		let pos = $.uint((rb$ as reorderBuffer).nbyte, 8);
		;(rb$ as reorderBuffer).nbyte = $.uint((rb$ as reorderBuffer).nbyte + (4), 8)
		info.pos = pos
		$.assignStruct($.sliceElems(b!)[$.sliceSlot(b!, n)], info)
	}

	public insertSingle(__goscriptParam1: __goscript_input.input, i: number, info: __goscript_forminfo.Properties): void {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		let src: $.VarRef<__goscript_input.input> = $.varRef(__goscriptParam1)
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		src.value.copySlice($.goSlice((rb$ as reorderBuffer).byte, (rb$ as reorderBuffer).nbyte, undefined), i, i + $.int(info.size))
		void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).insertOrdered((info).clone()) : reorderBuffer.prototype.insertOrdered.call(rb, (info).clone()))
	}

	public async insertUnsafe(__goscriptParam2: __goscript_input.input, i: number, info: __goscript_forminfo.Properties): globalThis.Promise<void> {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		let src: $.VarRef<__goscript_input.input> = $.varRef(__goscriptParam2)
		{
			let rune = src.value.hangul(i)
			if (rune != 0) {
				void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).decomposeHangul(rune) : reorderBuffer.prototype.decomposeHangul.call(rb, rune))
			}
		}
		if (info.hasDecomposition()) {
			// TODO: inline.
			await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).insertDecomposed(info.Decomposition()) : reorderBuffer.prototype.insertDecomposed.call(rb, info.Decomposition()))
		} else {
			void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as reorderBuffer).insertSingle((src.value).clone(), i, info) : reorderBuffer.prototype.insertSingle.call(rb, (src.value).clone(), i, info))
		}
	}

	public reset(): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb);
		;(rb$ as reorderBuffer).nrune = 0;
		;(rb$ as reorderBuffer).nbyte = 0
	}

	public runeAt(n: number): number {
		const rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
		let inf = ($.arrayIndex((rb$ as reorderBuffer).rune, n)).clone()
		let [r, ] = utf8.DecodeRune($.goSlice((rb$ as reorderBuffer).byte, inf.pos, ((inf.pos + inf.size) & 0xff)))
		return r
	}

	public setFlusher(out: $.Slice<number>, f: ((_p0: reorderBuffer | $.VarRef<reorderBuffer> | null) => boolean | globalThis.Promise<boolean>) | null): void {
		let rb: reorderBuffer | $.VarRef<reorderBuffer> | null = this;
		const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb);
		;(rb$ as reorderBuffer).out = out;
		;(rb$ as reorderBuffer).flushF = f
	}

	static __typeInfo = $.registerStructType(
		"norm.reorderBuffer",
		() => new reorderBuffer(),
		() => [$.methodSignature("appendRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("assignRune", [["pos", /* @__PURE__ */ $.basicType("int")], ["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("bytesAt", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("combineHangul", [["s", /* @__PURE__ */ $.basicType("int")], ["i", /* @__PURE__ */ $.basicType("int")], ["k", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("compose", [], [], true), $.methodSignature("decomposeHangul", [["r", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("doFlush", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("flush", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("flushCopy", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("init", [["f", /* @__PURE__ */ $.basicType("int", "norm.Form")], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("initString", [["f", /* @__PURE__ */ $.basicType("int", "norm.Form")], ["src", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("insertCGJ", [], [], true), $.methodSignature("insertDecomposed", [["dcomp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int", "norm.insertErr")], true), $.methodSignature("insertFlush", [["src", "norm.input"], ["i", /* @__PURE__ */ $.basicType("int")], ["info", "norm.Properties"]], [/* @__PURE__ */ $.basicType("int", "norm.insertErr")], true), $.methodSignature("insertOrdered", [["info", "norm.Properties"]], [], true), $.methodSignature("insertSingle", [["src", "norm.input"], ["i", /* @__PURE__ */ $.basicType("int")], ["info", "norm.Properties"]], [], true), $.methodSignature("insertUnsafe", [["src", "norm.input"], ["i", /* @__PURE__ */ $.basicType("int")], ["info", "norm.Properties"]], [], true), $.methodSignature("reset", [], [], true), $.methodSignature("runeAt", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("setFlusher", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("norm.reorderBuffer")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true)],
		reorderBuffer,
		() => [/* @__PURE__ */ $.structField("rune", /* @__PURE__ */ $.arrayType("norm.Properties", 32), [0], 0, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("byte", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128), [1], 256, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("nbyte", /* @__PURE__ */ $.basicType("uint8"), [2], 384, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("ss", /* @__PURE__ */ $.basicType("uint8", "norm.streamSafe"), [3], 385, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("nrune", /* @__PURE__ */ $.basicType("int"), [4], 392, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("f", "norm.formInfo", [5], 400, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("src", "norm.input", [6], 432, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("nsrc", /* @__PURE__ */ $.basicType("int"), [7], 472, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("tmpBytes", "norm.input", [8], 480, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 520, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("flushF", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("norm.reorderBuffer")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [10], 544, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" })]
	)
}

export const maxNonStarters: number = 30

export const maxBufferSize: number = 32

export const maxNFCExpansion: number = 3

export const maxNFKCExpansion: number = 18

export const maxByteBufferSize: number = 128

export const ssSuccess: ssState = 0

export const ssStarter: ssState = 1

export const ssOverflow: ssState = 2

export const GraphemeJoiner: string = "\xcd\x8f"

export const iSuccess: insertErr = 0

export const iShortDst: insertErr = -1

export const iShortSrc: insertErr = -2

export const hangulBase: number = 44032

export const hangulBase0: number = 234

export const hangulBase1: number = 176

export const hangulBase2: number = 128

export const hangulEnd: number = 55204

export const hangulEnd0: number = 237

export const hangulEnd1: number = 158

export const hangulEnd2: number = 164

export const jamoLBase: number = 4352

export const jamoLBase0: number = 225

export const jamoLBase1: number = 132

export const jamoLEnd: number = 4371

export const jamoVBase: number = 4449

export const jamoVEnd: number = 4470

export const jamoTBase: number = 4519

export const jamoTEnd: number = 4547

export const jamoTCount: number = 28

export const jamoVCount: number = 21

export const jamoVTCount: number = 588

export const jamoLVTCount: number = 11172

export const hangulUTF8Size: number = 3

export function streamSafe_first(ss: $.VarRef<streamSafe> | null, p: __goscript_forminfo.Properties): void {
	ss!.value = $.uint(p.nTrailingNonStarters(), 8)
}

export function streamSafe_next(ss: $.VarRef<streamSafe> | null, p: __goscript_forminfo.Properties): ssState {
	if ($.pointerValue<streamSafe>(ss) > 30) {
		$.panic("streamSafe was not reset")
	}
	let n = p.nLeadingNonStarters()
	{
		ss!.value = $.uint(ss!.value + ($.uint(n, 8)), 8)
		if ($.pointerValue<streamSafe>(ss) > 30) {
			ss!.value = 0
			return 2
		}
	}
	// The Stream-Safe Text Processing prescribes that the counting can stop
	// as soon as a starter is encountered. However, there are some starters,
	// like Jamo V and T, that can combine with other runes, leaving their
	// successive non-starters appended to the previous, possibly causing an
	// overflow. We will therefore consider any rune with a non-zero nLead to
	// be a non-starter. Note that it always hold that if nLead > 0 then
	// nLead == nTrail.
	if (n == 0) {
		ss!.value = $.uint(p.nTrailingNonStarters(), 8)
		return 1
	}
	return 0
}

export function streamSafe_backwards(ss: $.VarRef<streamSafe> | null, p: __goscript_forminfo.Properties): ssState {
	if ($.pointerValue<streamSafe>(ss) > 30) {
		$.panic("streamSafe was not reset")
	}
	let c = $.uint((($.pointerValue<streamSafe>(ss) + $.uint(p.nTrailingNonStarters(), 8)) & 0xff), 8)
	if (c > 30) {
		return 2
	}
	ss!.value = c
	if (p.nLeadingNonStarters() == 0) {
		return 1
	}
	return 0
}

export function streamSafe_isMax(ss: streamSafe): boolean {
	return ss == 30
}

export function appendFlush(rb: reorderBuffer | $.VarRef<reorderBuffer> | null): boolean {
	const rb$: reorderBuffer = rb == null ? $.pointerTarget<reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<reorderBuffer>(rb)
	for (let i = 0; i < (rb$ as reorderBuffer).nrune; i++) {
		let start = $.arrayIndex((rb$ as reorderBuffer).rune, i).pos
		let end = $.uint(((start + $.arrayIndex((rb$ as reorderBuffer).rune, i).size) & 0xff), 8);
		;(rb$ as reorderBuffer).out = $.appendSlice((rb$ as reorderBuffer).out, $.goSlice((rb$ as reorderBuffer).byte, start, end), $.byteSliceHint)
	}
	return true
}

export function isHangul(b: $.Slice<number>): boolean {
	if ($.sliceLen(b) < 3) {
		return false
	}
	let b0 = $.arrayIndex(b!, 0)
	if (b0 < 234) {
		return false
	}
	let b1 = $.arrayIndex(b!, 1)
	switch ((true as boolean)) {
		case b0 == 234:
		{
			return b1 >= 176
			break
		}
		case b0 < 237:
		{
			return true
			break
		}
		case b0 > 237:
		{
			return false
			break
		}
		case b1 < 158:
		{
			return true
			break
		}
	}
	return (b1 == 158) && ($.arrayIndex(b!, 2) < 164)
}

export function isHangulString(b: string): boolean {
	if ($.stringLen(b) < 3) {
		return false
	}
	let b0 = $.indexString(b, 0)
	if (b0 < 234) {
		return false
	}
	let b1 = $.indexString(b, 1)
	switch ((true as boolean)) {
		case b0 == 234:
		{
			return b1 >= 176
			break
		}
		case b0 < 237:
		{
			return true
			break
		}
		case b0 > 237:
		{
			return false
			break
		}
		case b1 < 158:
		{
			return true
			break
		}
	}
	return (b1 == 158) && ($.indexString(b, 2) < 164)
}

export function isJamoVT(b: $.Slice<number>): boolean {
	// True if (rune & 0xff00) == jamoLBase
	return ($.arrayIndex(b!, 0) == 225) && ($.uint(($.arrayIndex(b!, 1) & 0xFC), 8) == 132)
}

export function isHangulWithoutJamoT(b: $.Slice<number>): boolean {
	let [c, ] = utf8.DecodeRune(b)
	c = $.int(c - (44032), 32)
	return (c < 11172) && ($.int((c % 28), 32) == 0)
}

export function decomposeHangul(buf: $.Slice<number>, r: number): number {
	const JamoUTF8Len: number = 3
	r = $.int(r - (44032), 32)
	let x = $.int(r % 28, 32)
	r = globalThis.Math.trunc(r / 28)
	utf8.EncodeRune(buf, $.int(((4352 + (globalThis.Math.trunc(r / 21))) | 0), 32))
	utf8.EncodeRune($.goSlice(buf, 3, undefined), $.int(((4449 + (r % 21)) | 0), 32))
	if (x != 0) {
		utf8.EncodeRune($.goSlice(buf, 2 * 3, undefined), $.int(((4519 + x) | 0), 32))
		return 9
	}
	return 6
}

var __goscriptAwait: any
