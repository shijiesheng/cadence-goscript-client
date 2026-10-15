// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as rpc from "@goscript/github.com/gogo/googleapis/google/rpc/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as status2 from "@goscript/github.com/gogo/status/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as grpcerrorcodes from "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import type * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_protobuf from "./protobuf.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/gogo/googleapis/google/rpc/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/github.com/gogo/status/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "./marshal.gs.ts"
import "./protobuf.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf", ["protobuf.pberror", "protobuf.ErrorOption"])

export class pberror {
	public get code(): yarpcerrors.Code {
		return this._fields.code
	}

	public set code(value: yarpcerrors.Code) {
		this._fields.code = value
	}

	public get message(): string {
		return this._fields.message
	}

	public set message(value: string) {
		this._fields.message = value
	}

	public get details(): $.Slice<types.Any | $.VarRef<types.Any> | null> {
		return this._fields.details
	}

	public set details(value: $.Slice<types.Any | $.VarRef<types.Any> | null>) {
		this._fields.details = value
	}

	public _fields: {
		code: yarpcerrors.Code
		message: string
		details: $.Slice<types.Any | $.VarRef<types.Any> | null>
	}

	constructor(init?: Partial<{code?: yarpcerrors.Code, message?: string, details?: $.Slice<types.Any | $.VarRef<types.Any> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			code: init?.code ?? (0 as yarpcerrors.Code),
			message: init?.message ?? ("" as string),
			details: init?.details ?? (null! as $.Slice<types.Any | $.VarRef<types.Any> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pberror {
		return new pberror(this, true)
	}

	public __goscriptAssign(source: pberror): void {
		const target = this._fields
		const values = source._fields
		target.code = values.code
		target.message = values.message
		target.details = values.details
	}

	public Error(): string {
		const err: pberror | $.VarRef<pberror> | null = this;
		const err$: pberror = err == null ? $.pointerTarget<pberror>(err) : (err as any).__isVarRef === true ? (err as any).value : (err as any).__goValue === undefined ? (err as any) : $.pointerTarget<pberror>(err)
		let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		b.value.WriteString("code:")
		b.value.WriteString(yarpcerrors.Code_String((err$ as pberror).code))
		if (!$.stringEqual((err$ as pberror).message, "")) {
			b.value.WriteString(" message:")
			b.value.WriteString((err$ as pberror).message)
		}
		return b.value.String()
	}

	public async YARPCError(): globalThis.Promise<yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null> {
		const err: pberror | $.VarRef<pberror> | null = this;
		if (err == null) {
			return null
		}
		let __goscriptTuple0: any = await createStatusWithDetail(err, "proto", __goscript_marshal.newCodec(null))
		let __goscriptShadow0: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = __goscriptTuple0[0]
		let statusErr = __goscriptTuple0[1]
		if (statusErr != null) {
			return yarpcerrors.FromError(statusErr)
		}
		return __goscriptShadow0
	}

	static __typeInfo = $.registerStructType(
		"protobuf.pberror",
		() => new pberror(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("YARPCError", [], [/* @__PURE__ */ $.pointerType("yarpcerrors.Status")], true)],
		pberror,
		() => [/* @__PURE__ */ $.structField("code", /* @__PURE__ */ $.basicType("int", "yarpcerrors.Code"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("message", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Any")), [2], 24, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export class ErrorOption {
	public get apply(): ((_p0: pberror | $.VarRef<pberror> | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.apply
	}

	public set apply(value: ((_p0: pberror | $.VarRef<pberror> | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.apply = value
	}

	public _fields: {
		apply: ((_p0: pberror | $.VarRef<pberror> | null) => $.GoError | globalThis.Promise<$.GoError>) | null
	}

	constructor(init?: Partial<{apply?: ((_p0: pberror | $.VarRef<pberror> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			apply: init?.apply ?? (null! as ((_p0: pberror | $.VarRef<pberror> | null) => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrorOption {
		return new ErrorOption(this, true)
	}

	public __goscriptAssign(source: ErrorOption): void {
		const target = this._fields
		const values = source._fields
		target.apply = values.apply
	}

	static __typeInfo = $.registerStructType(
		"protobuf.ErrorOption",
		() => new ErrorOption(),
		() => [],
		ErrorOption,
		() => [/* @__PURE__ */ $.structField("apply", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("protobuf.pberror")], results: ["error"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export const _errDetailsFmt: string = "[]{ %s }"

export const _errDetailFmt: string = "%s{%s}"

export async function NewError(code: yarpcerrors.Code, message: string, options: $.Slice<ErrorOption>): globalThis.Promise<$.GoError> {
	if (code == 0) {
		return null
	}
	let pbErr: pberror | $.VarRef<pberror> | null = new pberror({code: code, message: message})
	for (let __goscriptRangeTarget0 = options, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ErrorOption)).clone()
		{
			let err = (__goscriptAwait = opt.apply!(pbErr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
	}
	return $.interfaceValue<$.GoError>(pbErr, "*protobuf.pberror", /* @__PURE__ */ $.pointerType("protobuf.pberror"))
}

export async function GetErrorDetails(err: $.GoError): globalThis.Promise<$.Slice<any>> {
	if (err == null) {
		return null
	}
	let target: $.VarRef<pberror | $.VarRef<pberror> | null> = $.varRef(null! as pberror | $.VarRef<pberror> | null)
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**protobuf.pberror", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("protobuf.pberror")))) && ($.sliceLen($.pointerValue<pberror>(target.value).details) > 0)) {
		let results: $.Slice<any> = $.makeSlice<any>(0, $.sliceLen($.pointerValue<pberror>(target.value).details))
		for (let __goscriptRangeTarget1 = $.pointerValue<pberror>(target.value).details, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let _any = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as types.Any | $.VarRef<types.Any> | null)
			let detail: types.DynamicAny | $.VarRef<types.DynamicAny> | null = new types.DynamicAny()
			{
				let __goscriptShadow1 = await types.UnmarshalAny(_any, $.interfaceValue<proto.Message | null>(detail, "*types.DynamicAny", /* @__PURE__ */ $.pointerType("types.DynamicAny")))
				if (__goscriptShadow1 != null) {
					results = $.appendOne(results, (__goscriptShadow1 as any), $.appendZeros.nil)
					continue
				}
			}
			results = $.appendOne(results, ($.pointerValue<types.DynamicAny>(detail).Message as any), $.appendZeros.nil)
		}
		return results
	}
	return null
}

export function WithErrorDetails(details: $.Slice<proto.Message | null>): ErrorOption {
	return new ErrorOption({apply: $.functionValue(async (err: pberror | $.VarRef<pberror> | null): globalThis.Promise<$.GoError> => {
		for (let __goscriptRangeTarget2 = details, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let detail = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as proto.Message | null)
			let __goscriptTuple1: any = await types.MarshalAny(detail)
			let _any: types.Any | $.VarRef<types.Any> | null = __goscriptTuple1[0]
			let terr = __goscriptTuple1[1]
			if (terr != null) {
				return terr
			}
			$.pointerValue<pberror>(err).details = $.appendOne($.pointerValue<pberror>(err).details, _any, $.appendZeros.nil)
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("protobuf.pberror")], results: ["error"] } as $.FunctionTypeInfo))}, true)
}

export async function convertToYARPCError(encoding: transport.Encoding, err: $.GoError, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null, resw: transport.ResponseWriter | null): globalThis.Promise<$.GoError> {
	if (err == null) {
		return null
	}
	let pberr: $.VarRef<pberror | $.VarRef<pberror> | null> = $.varRef(null! as pberror | $.VarRef<pberror> | null)
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(pberr, "**protobuf.pberror", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("protobuf.pberror"))))) {
		await setApplicationErrorMeta(pberr.value, resw)
		let __goscriptTuple2: any = await createStatusWithDetail(pberr.value, encoding, codec)
		let __goscriptShadow2: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = __goscriptTuple2[0]
		let sterr = __goscriptTuple2[1]
		if (sterr != null) {
			return sterr
		}
		return $.interfaceValue<$.GoError>(__goscriptShadow2, "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
	}
	return err
}

export async function createStatusWithDetail(pberr: pberror | $.VarRef<pberror> | null, encoding: transport.Encoding, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null): globalThis.Promise<[yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	const pberr$: pberror = pberr == null ? $.pointerTarget<pberror>(pberr) : (pberr as any).__isVarRef === true ? (pberr as any).value : (pberr as any).__goValue === undefined ? (pberr as any) : $.pointerTarget<pberror>(pberr)
	if ((pberr$ as pberror).code == 0) {
		return [null, errors.New("no status error for error with code OK")]
	}

	let st: status2.Status | $.VarRef<status2.Status> | null = status2.New($.mapGet<yarpcerrors.Code, codes.Code, codes.Code>(grpcerrorcodes.YARPCCodeToGRPCCode, (pberr$ as pberror).code, 0)[0], (pberr$ as pberror).message)
	// Here we check that status.New has returned a valid error.
	if ((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status2.Status).Err() : status2.Status.prototype.Err.call(st)) == null) {
		return [null, fmt.Errorf("no status error for error with code %d", $.namedValueInterfaceValue<any>((pberr$ as pberror).code, "yarpcerrors.Code", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
	}
	let pst: rpc.Status | $.VarRef<rpc.Status> | null = await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status2.Status).Proto() : status2.Status.prototype.Proto.call(st))
	$.pointerValue<rpc.Status>(pst).Details = (pberr$ as pberror).details

	let __goscriptTuple3: any = await __goscript_marshal.marshal(encoding, $.interfaceValue<proto.Message | null>(pst, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")), codec)
	let detailsBytes: $.Slice<number> = __goscriptTuple3[0]
	let cleanup: (() => void) | null = __goscriptTuple3[1]
	let marshalErr = __goscriptTuple3[2]
	if (marshalErr != null) {
		return [null, marshalErr]
	}
	const __goscriptDeferCallee0 = cleanup
	__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
	let yarpcDet: $.Slice<number> = $.makeSlice<number>($.sliceLen(detailsBytes), undefined, "byte")
	$.copy(yarpcDet, detailsBytes)
	return [yarpcerrors.Status.prototype.WithDetails.call(yarpcerrors.Newf((pberr$ as pberror).code, (pberr$ as pberror).message, null), yarpcDet), null]
}

export async function setApplicationErrorMeta(pberr: pberror | $.VarRef<pberror> | null, resw: transport.ResponseWriter | null): globalThis.Promise<void> {
	let [applicationErrorMetaSetter, ok] = $.typeAssertTuple<transport.ApplicationErrorMetaSetter | null>(resw, "transport.ApplicationErrorMetaSetter")
	if (!ok) {
		return
	}

	let decodedDetails: $.Slice<any> = await GetErrorDetails($.interfaceValue<$.GoError>(pberr, "*protobuf.pberror", /* @__PURE__ */ $.pointerType("protobuf.pberror")))
	let appErrName: string = ""
	let details: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(decodedDetails), "string")

	for (let __goscriptRangeTarget3 = decodedDetails, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let detail = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as any)
		{
			let [m, __goscriptShadow3] = $.typeAssertTuple<proto.Message | null>(detail, "proto.Message")
			if (__goscriptShadow3) {
				if ($.stringEqual(appErrName, "")) {
					// only grab the first name since this will be emitted with metrics
					appErrName = messageNameWithoutPackage(await proto.MessageName(m))
				}
				details = $.appendOne(details, await protobufMessageToString($.mustTypeAssert<proto.Message | null>(detail, "proto.Message")))
			}
		}
	}

	void (__goscriptAwait = (applicationErrorMetaSetter !== null && (applicationErrorMetaSetter as any).__isVarRef !== true && (applicationErrorMetaSetter as any).__goValue === undefined ? (applicationErrorMetaSetter as Exclude<transport.ApplicationErrorMetaSetter, null>) : $.pointerValue<Exclude<transport.ApplicationErrorMetaSetter, null>>(applicationErrorMetaSetter)).SetApplicationErrorMeta((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("[]{ %s }", strings.Join(details, " , ")); return new transport.ApplicationErrorMeta({Name: appErrName, Details: __goscriptLiteralField0}) })())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function messageNameWithoutPackage(messageName: string): string {
	{
		let i = strings.LastIndex(messageName, ".")
		if (i >= 0) {
			return $.sliceStringOrBytes(messageName, i + 1, undefined)
		}
	}
	return messageName
}

export async function protobufMessageToString(message: proto.Message | null): globalThis.Promise<string> {
	return fmt.Sprintf("%s{%s}", messageNameWithoutPackage(await proto.MessageName(message)), await proto.CompactTextString(message))
}

export async function convertFromYARPCError(encoding: transport.Encoding, err: $.GoError, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null): globalThis.Promise<$.GoError> {
	if ((err == null) || !await yarpcerrors.IsStatus(err)) {
		return err
	}
	let yarpcErr: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = await yarpcerrors.FromError(err)
	if ((yarpcErr !== null && (yarpcErr as any).__isVarRef !== true && (yarpcErr as any).__goValue === undefined ? ((yarpcErr as any) as yarpcerrors.Status).Details() : yarpcerrors.Status.prototype.Details.call(yarpcErr)) == null) {
		return err
	}
	let st: rpc.Status | $.VarRef<rpc.Status> | null = new rpc.Status()
	let unmarshalErr = await __goscript_marshal.unmarshalBytes(encoding, (yarpcErr !== null && (yarpcErr as any).__isVarRef !== true && (yarpcErr as any).__goValue === undefined ? ((yarpcErr as any) as yarpcerrors.Status).Details() : yarpcerrors.Status.prototype.Details.call(yarpcErr)), $.interfaceValue<proto.Message | null>(st, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")), codec)
	if (unmarshalErr != null) {
		return unmarshalErr
	}

	return newErrorWithDetails((yarpcErr !== null && (yarpcErr as any).__isVarRef !== true && (yarpcErr as any).__goValue === undefined ? ((yarpcErr as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(yarpcErr)), await (yarpcErr !== null && (yarpcErr as any).__isVarRef !== true && (yarpcErr as any).__goValue === undefined ? ((yarpcErr as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(yarpcErr)), (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as rpc.Status).GetDetails() : rpc.Status.prototype.GetDetails.call(st)))
}

export function newErrorWithDetails(code: yarpcerrors.Code, message: string, details: $.Slice<types.Any | $.VarRef<types.Any> | null>): $.GoError {
	return $.interfaceValue<$.GoError>(new pberror({code: code, message: message, details: details}), "*protobuf.pberror", /* @__PURE__ */ $.pointerType("protobuf.pberror"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MarshalJSON: (receiver: any, ...args: any[]) => (yarpcerrors.Code_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (yarpcerrors.Code_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (yarpcerrors.Code_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "yarpcerrors.Code"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
