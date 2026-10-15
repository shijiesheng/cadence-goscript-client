// Generated file based on status.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as rpc from "@goscript/github.com/gogo/googleapis/google/rpc/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as _any2 from "@goscript/github.com/golang/protobuf/ptypes/any/index.js"

import * as spb from "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as status2 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as anypb from "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/googleapis/google/rpc/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/github.com/golang/protobuf/ptypes/any/index.js"
import "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"

$.registerTypePackagePath("github.com/gogo/status", ["status.statusError", "status.Status"])

export class statusError {
	public get Code(): number {
		return this._fields.Code
	}

	public set Code(value: number) {
		this._fields.Code = value
	}

	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	public get Details(): $.Slice<types.Any | $.VarRef<types.Any> | null> {
		return this._fields.Details
	}

	public set Details(value: $.Slice<types.Any | $.VarRef<types.Any> | null>) {
		this._fields.Details = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Code: number
		Message: string
		Details: $.Slice<types.Any | $.VarRef<types.Any> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Code?: number, Message?: string, Details?: $.Slice<types.Any | $.VarRef<types.Any> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Code: init?.Code ?? (0 as number),
			Message: init?.Message ?? ("" as string),
			Details: init?.Details ?? (null! as $.Slice<types.Any | $.VarRef<types.Any> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): statusError {
		return new statusError(this, true)
	}

	public __goscriptAssign(source: statusError): void {
		const target = this._fields
		const values = source._fields
		target.Code = values.Code
		target.Message = values.Message
		target.Details = values.Details
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public async Error(): globalThis.Promise<string> {
		const se: statusError | $.VarRef<statusError> | null = this;
		let p: rpc.Status | $.VarRef<rpc.Status> | null = $.unsafePointerCast<rpc.Status | $.VarRef<rpc.Status> | null>(se, rpc.Status)
		return fmt.Sprintf("rpc error: code = %s desc = %s", $.namedValueInterfaceValue<any>($.uint((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as rpc.Status).GetCode() : rpc.Status.prototype.GetCode.call(p)), 32), "codes.Code", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as rpc.Status).GetMessage() : rpc.Status.prototype.GetMessage.call(p)))
	}

	public async GRPCStatus(): globalThis.Promise<status2.Status | $.VarRef<status2.Status> | null> {
		const se: statusError | $.VarRef<statusError> | null = this;
		let p: rpc.Status | $.VarRef<rpc.Status> | null = $.unsafePointerCast<rpc.Status | $.VarRef<rpc.Status> | null>(se, rpc.Status)
		let s: spb.Status | $.VarRef<spb.Status> | null = (() => { const __goscriptLiteralField0 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as rpc.Status).GetCode() : rpc.Status.prototype.GetCode.call(p)); const __goscriptLiteralField1 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as rpc.Status).GetMessage() : rpc.Status.prototype.GetMessage.call(p)); return new spb.Status({Code: __goscriptLiteralField0, Message: __goscriptLiteralField1}) })()
		for (let __goscriptRangeTarget0 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as rpc.Status).GetDetails() : rpc.Status.prototype.GetDetails.call(p)), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let detail = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as types.Any | $.VarRef<types.Any> | null)
			$.pointerValue<spb.Status>(s).Details = $.appendOne((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as spb.Status).GetDetails() : spb.Status.prototype.GetDetails.call(s)), (() => { const __goscriptLiteralField2 = (detail !== null && (detail as any).__isVarRef !== true && (detail as any).__goValue === undefined ? ((detail as any) as types.Any).GetTypeUrl() : types.Any.prototype.GetTypeUrl.call(detail)); const __goscriptLiteralField3 = (detail !== null && (detail as any).__isVarRef !== true && (detail as any).__goValue === undefined ? ((detail as any) as types.Any).GetValue() : types.Any.prototype.GetValue.call(detail)); return new anypb.Any({TypeUrl: __goscriptLiteralField2, Value: __goscriptLiteralField3}) })(), $.appendZeros.nil)
		}
		return status.FromProto(s)
	}

	static __typeInfo = $.registerStructType(
		"status.statusError",
		() => new statusError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GRPCStatus", [], [/* @__PURE__ */ $.pointerType("status.Status")], true)],
		statusError,
		() => [/* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("int32"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=code,proto3\" json:\"code,omitempty\"" }), /* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=message,proto3\" json:\"message,omitempty\"" }), /* @__PURE__ */ $.structField("Details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Any")), [2], 24, true, { tag: "protobuf:\"bytes,3,rep,name=details,proto3\" json:\"details,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 72, true, { tag: "json:\"-\"" })]
	)
}

export class Status {
	public get s(): rpc.Status | $.VarRef<rpc.Status> | null {
		return this._fields.s
	}

	public set s(value: rpc.Status | $.VarRef<rpc.Status> | null) {
		this._fields.s = value
	}

	public _fields: {
		s: rpc.Status | $.VarRef<rpc.Status> | null
	}

	constructor(init?: Partial<{s?: rpc.Status | $.VarRef<rpc.Status> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? (null! as rpc.Status | $.VarRef<rpc.Status> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Status {
		return new Status(this, true)
	}

	public __goscriptAssign(source: Status): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
	}

	public Code(): codes.Code {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		if ((s == null) || ((s$ as Status).s == null)) {
			return 0
		}
		return $.uint($.pointerValue<rpc.Status>((s$ as Status).s).Code, 32)
	}

	public async Details(): globalThis.Promise<$.Slice<any>> {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		if ((s == null) || ((s$ as Status).s == null)) {
			return null
		}
		let details: $.Slice<any> = $.makeSlice<any>(0, $.sliceLen($.pointerValue<rpc.Status>((s$ as Status).s).Details))
		for (let __goscriptRangeTarget1 = $.pointerValue<rpc.Status>((s$ as Status).s).Details, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let _any = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as types.Any | $.VarRef<types.Any> | null)
			let detail: types.DynamicAny | $.VarRef<types.DynamicAny> | null = new types.DynamicAny()
			{
				let err = await types.UnmarshalAny(_any, $.interfaceValue<proto.Message | null>(detail, "*types.DynamicAny", /* @__PURE__ */ $.pointerType("types.DynamicAny")))
				if (err != null) {
					details = $.appendOne(details, (err as any), $.appendZeros.nil)
					continue
				}
			}
			details = $.appendOne(details, ($.pointerValue<types.DynamicAny>(detail).Message as any), $.appendZeros.nil)
		}
		return details
	}

	public Err(): $.GoError {
		const s: Status | $.VarRef<Status> | null = this;
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Code() : Status.prototype.Code.call(s)) == 0) {
			return null
		}
		return $.interfaceValue<$.GoError>($.unsafePointerCast<statusError | $.VarRef<statusError> | null>($.pointerValue<Status>(s).s, statusError), "*status.statusError", /* @__PURE__ */ $.pointerType("status.statusError"))
	}

	public Message(): string {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		if ((s == null) || ((s$ as Status).s == null)) {
			return ""
		}
		return $.pointerValue<rpc.Status>((s$ as Status).s).Message
	}

	public async Proto(): globalThis.Promise<rpc.Status | $.VarRef<rpc.Status> | null> {
		const s: Status | $.VarRef<Status> | null = this;
		if (s == null) {
			return null
		}
		return $.mustTypeAssert<rpc.Status | $.VarRef<rpc.Status> | null>(await proto.Clone($.interfaceValue<proto.Message | null>($.pointerValue<Status>(s).s, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status"))), /* @__PURE__ */ $.pointerType("rpc.Status"))
	}

	public async WithDetails(details: $.Slice<proto.Message | null>): globalThis.Promise<[Status | $.VarRef<Status> | null, $.GoError]> {
		const s: Status | $.VarRef<Status> | null = this;
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Code() : Status.prototype.Code.call(s)) == 0) {
			return [null, errors.New("no error details for status with code OK")]
		}
		// s.Code() != OK implies that s.Proto() != nil.
		let p: rpc.Status | $.VarRef<rpc.Status> | null = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Proto() : Status.prototype.Proto.call(s))
		let p$: rpc.Status = p == null ? $.pointerTarget<rpc.Status>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<rpc.Status>(p)
		for (let __goscriptRangeTarget2 = details, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let detail = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as proto.Message | null)
			let __goscriptTuple0: any = await types.MarshalAny(detail)
			let __goscriptShadow0: types.Any | $.VarRef<types.Any> | null = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err != null) {
				return [null, err]
			}
			;(p$ as rpc.Status).Details = $.appendOne((p$ as rpc.Status).Details, __goscriptShadow0, $.appendZeros.nil)
		}
		return [new Status({s: p}), null]
	}

	static __typeInfo = $.registerStructType(
		"status.Status",
		() => new Status(),
		() => [$.methodSignature("Code", [], [/* @__PURE__ */ $.basicType("uint32", "codes.Code")], true), $.methodSignature("Details", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("Message", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Proto", [], [/* @__PURE__ */ $.pointerType("rpc.Status")], true), $.methodSignature("WithDetails", [["details", /* @__PURE__ */ $.sliceType("proto.Message")]], [/* @__PURE__ */ $.pointerType("status.Status"), "error"], true)],
		Status,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("rpc.Status"), [0], 0, false, { pkgPath: "github.com/gogo/status" })]
	)
}

export function New(c: codes.Code, msg: string): Status | $.VarRef<Status> | null {
	return new Status({s: new rpc.Status({Code: $.int(c, 32), Message: msg})})
}

export async function Newf(c: codes.Code, format: string, a: $.Slice<any>): globalThis.Promise<Status | $.VarRef<Status> | null> {
	return New(c, await fmt.Sprintf(format, ...(a ?? [])))
}

export function Error(c: codes.Code, msg: string): $.GoError {
	return Status.prototype.Err.call(New(c, msg))
}

export async function Errorf(c: codes.Code, format: string, a: $.Slice<any>): globalThis.Promise<$.GoError> {
	return Error(c, await fmt.Sprintf(format, ...(a ?? [])))
}

export async function ErrorProto(s: rpc.Status | $.VarRef<rpc.Status> | null): globalThis.Promise<$.GoError> {
	return Status.prototype.Err.call(await FromProto(s))
}

export async function FromProto(s: rpc.Status | $.VarRef<rpc.Status> | null): globalThis.Promise<Status | $.VarRef<Status> | null> {
	return new Status({s: $.mustTypeAssert<rpc.Status | $.VarRef<rpc.Status> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(s, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status"))), /* @__PURE__ */ $.pointerType("rpc.Status"))})
}

export async function FromError(err: $.GoError): globalThis.Promise<[Status | $.VarRef<Status> | null, boolean]> {
	let s: Status | $.VarRef<Status> | null = null! as Status | $.VarRef<Status> | null
	let ok: boolean = false
	if (err == null) {
		return [new Status({s: new rpc.Status({Code: 0})}), true]
	}
	{
		let [se, __goscriptShadow1] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "GRPCStatus", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.pointerType("status.Status") }] }] })
		if (__goscriptShadow1) {
			return [await FromGRPCStatus(((__goscriptAwait = (se !== null && (se as any).__isVarRef !== true && (se as any).__goValue === undefined ? (se as any) : $.pointerValue<any>(se)).GRPCStatus(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as status2.Status | $.VarRef<status2.Status> | null)), true]
		}
	}
	return [New(2, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), false]
}

export async function FromGRPCStatus(st: status2.Status | $.VarRef<status2.Status> | null): globalThis.Promise<Status | $.VarRef<Status> | null> {
	let p: spb.Status | $.VarRef<spb.Status> | null = await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status2.Status).Proto() : status2.Status.prototype.Proto.call(st))
	let pb: rpc.Status | $.VarRef<rpc.Status> | null = (() => { const __goscriptLiteralField4 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as spb.Status).GetCode() : spb.Status.prototype.GetCode.call(p)); const __goscriptLiteralField5 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as spb.Status).GetMessage() : spb.Status.prototype.GetMessage.call(p)); return new rpc.Status({Code: __goscriptLiteralField4, Message: __goscriptLiteralField5}) })()
	for (let __goscriptRangeTarget3 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as spb.Status).GetDetails() : spb.Status.prototype.GetDetails.call(p)), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let detail = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as anypb.Any | $.VarRef<anypb.Any> | null)
		$.pointerValue<rpc.Status>(pb).Details = $.appendOne((pb !== null && (pb as any).__isVarRef !== true && (pb as any).__goValue === undefined ? ((pb as any) as rpc.Status).GetDetails() : rpc.Status.prototype.GetDetails.call(pb)), (() => { const __goscriptLiteralField6 = (detail !== null && (detail as any).__isVarRef !== true && (detail as any).__goValue === undefined ? ((detail as any) as anypb.Any).GetTypeUrl() : anypb.Any.prototype.GetTypeUrl.call(detail)); const __goscriptLiteralField7 = (detail !== null && (detail as any).__isVarRef !== true && (detail as any).__goValue === undefined ? ((detail as any) as anypb.Any).GetValue() : anypb.Any.prototype.GetValue.call(detail)); return new types.Any({TypeUrl: __goscriptLiteralField6, Value: __goscriptLiteralField7}) })(), $.appendZeros.nil)
	}
	return FromProto(pb)
}

export async function Convert(err: $.GoError): globalThis.Promise<Status | $.VarRef<Status> | null> {
	let __goscriptTuple1: any = await FromError(err)
	let s: Status | $.VarRef<Status> | null = __goscriptTuple1[0]
	return s
}

export async function Code(err: $.GoError): globalThis.Promise<codes.Code> {
	// Don't use FromError to avoid allocation of OK status.
	if (err == null) {
		return 0
	}
	{
		let [se, ok] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "GRPCStatus", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.pointerType("status.Status") }] }] })
		if (ok) {
			return status2.Status.prototype.Code.call(((__goscriptAwait = (se !== null && (se as any).__isVarRef !== true && (se as any).__goValue === undefined ? (se as any) : $.pointerValue<any>(se)).GRPCStatus(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as status2.Status | $.VarRef<status2.Status> | null))
		}
	}
	return 2
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (codes.Code_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint32", "codes.Code"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
