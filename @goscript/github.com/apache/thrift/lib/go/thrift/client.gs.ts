// Generated file based on client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_application_exception from "./application_exception.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_context from "./header_context.gs.ts"

import * as __goscript_header_protocol from "./header_protocol.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_serializer from "./serializer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./application_exception.gs.ts"
import "./configuration.gs.ts"
import "./header_context.gs.ts"
import "./header_protocol.gs.ts"
import "./header_transport.gs.ts"
import "./messagetype.gs.ts"
import "./protocol.gs.ts"
import "./serializer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.ResponseMeta", "thrift.TClient", "thrift.TStandardClient"])

export type TClient = {
	Call(ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null): [ResponseMeta, $.GoError] | globalThis.Promise<[ResponseMeta, $.GoError]>
}

$.registerInterfaceType(
	"thrift.TClient",
	null,
	[$.methodSignature("Call", [["ctx", "context.Context"], ["method", /* @__PURE__ */ $.basicType("string")], ["args", "thrift.TStruct"], ["result", "thrift.TStruct"]], ["thrift.ResponseMeta", "error"])]
);

export class ResponseMeta {
	// The headers in the response, if any.
	// If the underlying transport/protocol is not THeader, this will always be nil.
	public get Headers(): __goscript_header_transport.THeaderMap {
		return this._fields.Headers
	}

	public set Headers(value: __goscript_header_transport.THeaderMap) {
		this._fields.Headers = value
	}

	public _fields: {
		Headers: __goscript_header_transport.THeaderMap
	}

	constructor(init?: Partial<{Headers?: __goscript_header_transport.THeaderMap}>, __goscriptValue?: boolean) {
		this._fields = {
			Headers: init?.Headers ?? (null! as __goscript_header_transport.THeaderMap)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResponseMeta {
		return new ResponseMeta(this, true)
	}

	public __goscriptAssign(source: ResponseMeta): void {
		const target = this._fields
		const values = source._fields
		target.Headers = values.Headers
	}

	static __typeInfo = $.registerStructType(
		"thrift.ResponseMeta",
		() => new ResponseMeta(),
		() => [],
		ResponseMeta,
		() => [/* @__PURE__ */ $.structField("Headers", "thrift.THeaderMap", [0], 0, true)]
	)
}

export class TStandardClient {
	public get seqId(): number {
		return this._fields.seqId
	}

	public set seqId(value: number) {
		this._fields.seqId = value
	}

	public get iprot(): __goscript_protocol.TProtocol | null {
		return this._fields.iprot
	}

	public set iprot(value: __goscript_protocol.TProtocol | null) {
		this._fields.iprot = value
	}

	public get oprot(): __goscript_protocol.TProtocol | null {
		return this._fields.oprot
	}

	public set oprot(value: __goscript_protocol.TProtocol | null) {
		this._fields.oprot = value
	}

	public _fields: {
		seqId: number
		iprot: __goscript_protocol.TProtocol | null
		oprot: __goscript_protocol.TProtocol | null
	}

	constructor(init?: Partial<{seqId?: number, iprot?: __goscript_protocol.TProtocol | null, oprot?: __goscript_protocol.TProtocol | null}>, __goscriptValue?: boolean) {
		this._fields = {
			seqId: init?.seqId ?? (0 as number),
			iprot: init?.iprot ?? (null! as __goscript_protocol.TProtocol | null),
			oprot: init?.oprot ?? (null! as __goscript_protocol.TProtocol | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TStandardClient {
		return new TStandardClient(this, true)
	}

	public __goscriptAssign(source: TStandardClient): void {
		const target = this._fields
		const values = source._fields
		target.seqId = values.seqId
		target.iprot = $.assignFieldValue(target.iprot, values.iprot, "thrift.TProtocol")
		target.oprot = $.assignFieldValue(target.oprot, values.oprot, "thrift.TProtocol")
	}

	public async Call(ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null): globalThis.Promise<[ResponseMeta, $.GoError]> {
		let p: TStandardClient | $.VarRef<TStandardClient> | null = this;
		const p$: TStandardClient = p == null ? $.pointerTarget<TStandardClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TStandardClient>(p);
		;(p$ as TStandardClient).seqId = (((p$ as TStandardClient).seqId + 1) | 0)
		let seqId = (p$ as TStandardClient).seqId

		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TStandardClient).Send(ctx, (p$ as TStandardClient).oprot, seqId, method, args) : TStandardClient.prototype.Send.call(p, ctx, (p$ as TStandardClient).oprot, seqId, method, args))
			if (err != null) {
				return [new ResponseMeta(undefined, true), err]
			}
		}

		// method is oneway
		if (result == null) {
			return [new ResponseMeta(undefined, true), null]
		}

		let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TStandardClient).Recv(ctx, (p$ as TStandardClient).iprot, seqId, method, result) : TStandardClient.prototype.Recv.call(p, ctx, (p$ as TStandardClient).iprot, seqId, method, result))
		let headers: __goscript_header_transport.THeaderMap = null! as __goscript_header_transport.THeaderMap
		{
			let __goscriptTuple0: any = $.typeAssertTuple<__goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null>((p$ as TStandardClient).iprot, /* @__PURE__ */ $.pointerType("thrift.THeaderProtocol"))
			let hp: __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				headers = $.pointerValue<__goscript_header_transport.THeaderTransport>($.pointerValue<__goscript_header_protocol.THeaderProtocol>(hp).transport).readHeaders
			}
		}
		return [new ResponseMeta({Headers: headers}, true), err]
	}

	public async Recv(ctx: context.Context | null, iprot: __goscript_protocol.TProtocol | null, seqId: number, method: string, result: __goscript_serializer.TStruct | null): globalThis.Promise<$.GoError> {
		const p: TStandardClient | $.VarRef<TStandardClient> | null = this;
		let [rMethod, rTypeId, rSeqId, err] = await (iprot !== null && (iprot as any).__isVarRef !== true && (iprot as any).__goValue === undefined ? (iprot as Exclude<__goscript_protocol.TProtocol, null>) : $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>(iprot)).ReadMessageBegin(ctx)
		if (err != null) {
			return err
		}

		if (!$.stringEqual(method, rMethod)) {
			return (__goscript_application_exception.NewTApplicationException(3, await fmt.Sprintf("%s: wrong method name", method)) as $.GoError)
		} else {
			if (seqId != rSeqId) {
				return (__goscript_application_exception.NewTApplicationException(4, await fmt.Sprintf("%s: out of order sequence response", method)) as $.GoError)
			} else {
				if (rTypeId == 3) {
					let exception: $.VarRef<__goscript_application_exception.tApplicationException> = $.varRef(new __goscript_application_exception.tApplicationException(undefined, true))
					{
						let __goscriptShadow0 = await exception.value.Read(ctx, iprot)
						if (__goscriptShadow0 != null) {
							return __goscriptShadow0
						}
					}

					{
						let __goscriptShadow1 = (__goscriptAwait = (iprot !== null && (iprot as any).__isVarRef !== true && (iprot as any).__goValue === undefined ? (iprot as Exclude<__goscript_protocol.TProtocol, null>) : $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>(iprot)).ReadMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow1 != null) {
							return __goscriptShadow1
						}
					}

					return $.interfaceValue<$.GoError>(exception, "*thrift.tApplicationException", /* @__PURE__ */ $.pointerType("thrift.tApplicationException"))
				} else {
					if (rTypeId != 2) {
						return (__goscript_application_exception.NewTApplicationException(2, await fmt.Sprintf("%s: invalid message type", method)) as $.GoError)
					}
				}
			}
		}

		{
			let __goscriptShadow2 = (__goscriptAwait = (result !== null && (result as any).__isVarRef !== true && (result as any).__goValue === undefined ? (result as Exclude<__goscript_serializer.TStruct, null>) : $.pointerValue<Exclude<__goscript_serializer.TStruct, null>>(result)).Read(ctx, iprot), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow2 != null) {
				return __goscriptShadow2
			}
		}

		return (iprot !== null && (iprot as any).__isVarRef !== true && (iprot as any).__goValue === undefined ? (iprot as Exclude<__goscript_protocol.TProtocol, null>) : $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>(iprot)).ReadMessageEnd(ctx)
	}

	public async Send(ctx: context.Context | null, oprot: __goscript_protocol.TProtocol | null, seqId: number, method: string, args: __goscript_serializer.TStruct | null): globalThis.Promise<$.GoError> {
		const p: TStandardClient | $.VarRef<TStandardClient> | null = this;
		// Set headers from context object on THeaderProtocol
		{
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null>(oprot, /* @__PURE__ */ $.pointerType("thrift.THeaderProtocol"))
			let headerProt: __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				void (headerProt !== null && (headerProt as any).__isVarRef !== true && (headerProt as any).__goValue === undefined ? ((headerProt as any) as __goscript_header_protocol.THeaderProtocol).ClearWriteHeaders() : __goscript_header_protocol.THeaderProtocol.prototype.ClearWriteHeaders.call(headerProt))
				for (let __goscriptRangeTarget0 = await __goscript_header_context.GetWriteHeaderList(ctx), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let key = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
					{
						let [value, __goscriptShadow3] = await __goscript_header_context.GetHeader(ctx, key)
						if (__goscriptShadow3) {
							void (headerProt !== null && (headerProt as any).__isVarRef !== true && (headerProt as any).__goValue === undefined ? ((headerProt as any) as __goscript_header_protocol.THeaderProtocol).SetWriteHeader(key, value) : __goscript_header_protocol.THeaderProtocol.prototype.SetWriteHeader.call(headerProt, key, value))
						}
					}
				}
			}
		}

		{
			let err = (__goscriptAwait = (oprot !== null && (oprot as any).__isVarRef !== true && (oprot as any).__goValue === undefined ? (oprot as Exclude<__goscript_protocol.TProtocol, null>) : $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>(oprot)).WriteMessageBegin(ctx, method, 1, seqId), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		{
			let err = (__goscriptAwait = (args !== null && (args as any).__isVarRef !== true && (args as any).__goValue === undefined ? (args as Exclude<__goscript_serializer.TStruct, null>) : $.pointerValue<Exclude<__goscript_serializer.TStruct, null>>(args)).Write(ctx, oprot), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		{
			let err = (__goscriptAwait = (oprot !== null && (oprot as any).__isVarRef !== true && (oprot as any).__goValue === undefined ? (oprot as Exclude<__goscript_protocol.TProtocol, null>) : $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>(oprot)).WriteMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		return (oprot !== null && (oprot as any).__isVarRef !== true && (oprot as any).__goValue === undefined ? (oprot as Exclude<__goscript_protocol.TProtocol, null>) : $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>(oprot)).Flush(ctx)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TStandardClient",
		() => new TStandardClient(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["method", /* @__PURE__ */ $.basicType("string")], ["args", "thrift.TStruct"], ["result", "thrift.TStruct"]], ["thrift.ResponseMeta", "error"], true), $.methodSignature("Recv", [["ctx", "context.Context"], ["iprot", "thrift.TProtocol"], ["seqId", /* @__PURE__ */ $.basicType("int32")], ["method", /* @__PURE__ */ $.basicType("string")], ["result", "thrift.TStruct"]], ["error"], true), $.methodSignature("Send", [["ctx", "context.Context"], ["oprot", "thrift.TProtocol"], ["seqId", /* @__PURE__ */ $.basicType("int32")], ["method", /* @__PURE__ */ $.basicType("string")], ["args", "thrift.TStruct"]], ["error"], true)],
		TStandardClient,
		() => [/* @__PURE__ */ $.structField("seqId", /* @__PURE__ */ $.basicType("int32"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("iprot", "thrift.TProtocol", [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("oprot", "thrift.TProtocol", [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewTStandardClient(inputProtocol: __goscript_protocol.TProtocol | null, outputProtocol: __goscript_protocol.TProtocol | null): TStandardClient | $.VarRef<TStandardClient> | null {
	return new TStandardClient({iprot: inputProtocol, oprot: outputProtocol})
}

var __goscriptAwait: any
