// Generated file based on preloader.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as context from "@goscript/context/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/context/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "./codec.gs.ts"
import "./rpc_util.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.PreparedMsg"])

export class PreparedMsg {
	// Struct for preparing msg before sending them
	public get encodedData(): mem.BufferSlice {
		return this._fields.encodedData
	}

	public set encodedData(value: mem.BufferSlice) {
		this._fields.encodedData = value
	}

	public get hdr(): $.Slice<number> {
		return this._fields.hdr
	}

	public set hdr(value: $.Slice<number>) {
		this._fields.hdr = value
	}

	public get payload(): mem.BufferSlice {
		return this._fields.payload
	}

	public set payload(value: mem.BufferSlice) {
		this._fields.payload = value
	}

	public get pf(): __goscript_rpc_util.payloadFormat {
		return this._fields.pf
	}

	public set pf(value: __goscript_rpc_util.payloadFormat) {
		this._fields.pf = value
	}

	public _fields: {
		encodedData: mem.BufferSlice
		hdr: $.Slice<number>
		payload: mem.BufferSlice
		pf: __goscript_rpc_util.payloadFormat
	}

	constructor(init?: Partial<{encodedData?: mem.BufferSlice, hdr?: $.Slice<number>, payload?: mem.BufferSlice, pf?: __goscript_rpc_util.payloadFormat}>, __goscriptValue?: boolean) {
		this._fields = {
			encodedData: init?.encodedData ?? (null! as mem.BufferSlice),
			hdr: init?.hdr ?? (null! as $.Slice<number>),
			payload: init?.payload ?? (null! as mem.BufferSlice),
			pf: init?.pf ?? (0 as __goscript_rpc_util.payloadFormat)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PreparedMsg {
		return new PreparedMsg(this, true)
	}

	public __goscriptAssign(source: PreparedMsg): void {
		const target = this._fields
		const values = source._fields
		target.encodedData = values.encodedData
		target.hdr = values.hdr
		target.payload = values.payload
		target.pf = values.pf
	}

	public async Encode(s: __goscript_stream.Stream | null, msg: any): globalThis.Promise<$.GoError> {
		let p: PreparedMsg | $.VarRef<PreparedMsg> | null = this;
		const p$: PreparedMsg = p == null ? $.pointerTarget<PreparedMsg>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PreparedMsg>(p)
		let ctx = (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_stream.Stream, null>) : $.pointerValue<Exclude<__goscript_stream.Stream, null>>(s)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple0: any = await __goscript_rpc_util.rpcInfoFromContext(ctx)
		let __goscriptShadow0: __goscript_rpc_util.rpcInfo | $.VarRef<__goscript_rpc_util.rpcInfo> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return status.Errorf(13, "grpc: unable to get rpcInfo", null)
		}

		// check if the context has the relevant information to prepareMsg
		if ($.pointerValue<__goscript_rpc_util.rpcInfo>(__goscriptShadow0).preloaderInfo == null) {
			return status.Errorf(13, "grpc: rpcInfo.preloaderInfo is nil", null)
		}
		if ($.pointerValue<__goscript_rpc_util.compressorInfo>($.pointerValue<__goscript_rpc_util.rpcInfo>(__goscriptShadow0).preloaderInfo).codec == null) {
			return status.Errorf(13, "grpc: rpcInfo.preloaderInfo.codec is nil", null)
		}

		// prepare the msg
		let __goscriptTuple1: any = await __goscript_rpc_util.encode($.pointerValue<__goscript_rpc_util.compressorInfo>($.pointerValue<__goscript_rpc_util.rpcInfo>(__goscriptShadow0).preloaderInfo).codec, msg)
		let data: mem.BufferSlice = (__goscriptTuple1[0] as mem.BufferSlice)
		let err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}

		let materializedData: $.VarRef<$.Slice<number>> = $.varRef(mem.BufferSlice_Materialize(data))
		await mem.BufferSlice_Free(data);
		;(p$ as PreparedMsg).encodedData = ($.arrayToSlice<mem.Buffer | null>([await mem.NewBuffer(materializedData, null)]) as mem.BufferSlice)

		// TODO: it should be possible to grab the bufferPool from the underlying
		//  stream implementation with a type cast to its actual type (such as
		//  addrConnStream) and accessing the buffer pool directly.
		let compData: mem.BufferSlice = null! as mem.BufferSlice
		let __goscriptTuple2: any = await __goscript_rpc_util.compress(((p$ as PreparedMsg).encodedData as mem.BufferSlice), $.pointerValue<__goscript_rpc_util.compressorInfo>($.pointerValue<__goscript_rpc_util.rpcInfo>(__goscriptShadow0).preloaderInfo).cp, $.pointerValue<__goscript_rpc_util.compressorInfo>($.pointerValue<__goscript_rpc_util.rpcInfo>(__goscriptShadow0).preloaderInfo).comp, mem.DefaultBufferPool())
		compData = (__goscriptTuple2[0] as mem.BufferSlice);
		;(p$ as PreparedMsg).pf = __goscriptTuple2[1]
		err = __goscriptTuple2[2]
		if (err != null) {
			return err
		}

		if (__goscript_rpc_util.payloadFormat_isCompressed((p$ as PreparedMsg).pf)) {
			let materializedCompData: $.VarRef<$.Slice<number>> = $.varRef(mem.BufferSlice_Materialize(compData))
			await mem.BufferSlice_Free(compData)
			compData = ($.arrayToSlice<mem.Buffer | null>([await mem.NewBuffer(materializedCompData, null)]) as mem.BufferSlice)
		}

		let __goscriptTuple3: any = __goscript_rpc_util.msgHeader(((p$ as PreparedMsg).encodedData as mem.BufferSlice), (compData as mem.BufferSlice), (p$ as PreparedMsg).pf);
		;(p$ as PreparedMsg).hdr = __goscriptTuple3[0];
		;(p$ as PreparedMsg).payload = (__goscriptTuple3[1] as mem.BufferSlice)

		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.PreparedMsg",
		() => new PreparedMsg(),
		() => [$.methodSignature("Encode", [["s", "grpc.Stream"], ["msg", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		PreparedMsg,
		() => [/* @__PURE__ */ $.structField("encodedData", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("hdr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("payload", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), [2], 48, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("pf", /* @__PURE__ */ $.basicType("uint8", "grpc.payloadFormat"), [3], 72, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

var __goscriptAwait: any
