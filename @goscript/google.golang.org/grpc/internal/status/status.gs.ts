// Generated file based on status.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as spb from "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoadapt from "@goscript/google.golang.org/protobuf/protoadapt/index.js"

import * as anypb from "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/protoadapt/index.js"
import "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/status", ["status.Status", "status.Error"])

export class Status {
	public get s(): spb.Status | $.VarRef<spb.Status> | null {
		return this._fields.s
	}

	public set s(value: spb.Status | $.VarRef<spb.Status> | null) {
		this._fields.s = value
	}

	public _fields: {
		s: spb.Status | $.VarRef<spb.Status> | null
	}

	constructor(init?: Partial<{s?: spb.Status | $.VarRef<spb.Status> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? (null! as spb.Status | $.VarRef<spb.Status> | null)
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
		return $.uint($.pointerValue<spb.Status>((s$ as Status).s).Code, 32)
	}

	public async Details(): globalThis.Promise<$.Slice<any>> {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		if ((s == null) || ((s$ as Status).s == null)) {
			return null
		}
		let details: $.Slice<any> = $.makeSlice<any>(0, $.sliceLen($.pointerValue<spb.Status>((s$ as Status).s).Details))
		for (let __goscriptRangeTarget0 = $.pointerValue<spb.Status>((s$ as Status).s).Details, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let _any = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as anypb.Any | $.VarRef<anypb.Any> | null)
			let [detail, err] = await (_any !== null && (_any as any).__isVarRef !== true && (_any as any).__goValue === undefined ? ((_any as any) as anypb.Any).UnmarshalNew() : anypb.Any.prototype.UnmarshalNew.call(_any))
			if (err != null) {
				details = $.appendOne(details, (err as any), $.appendZeros.nil)
				continue
			}
			details = $.appendOne(details, (detail as any), $.appendZeros.nil)
		}
		return details
	}

	public Err(): $.GoError {
		const s: Status | $.VarRef<Status> | null = this;
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Code() : Status.prototype.Code.call(s)) == 0) {
			return null
		}
		return $.interfaceValue<$.GoError>(new Error({s: s}), "*status.Error", /* @__PURE__ */ $.pointerType("status.Error"))
	}

	public Message(): string {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		if ((s == null) || ((s$ as Status).s == null)) {
			return ""
		}
		return $.pointerValue<spb.Status>((s$ as Status).s).Message
	}

	public async Proto(): globalThis.Promise<spb.Status | $.VarRef<spb.Status> | null> {
		const s: Status | $.VarRef<Status> | null = this;
		if (s == null) {
			return null
		}
		const source = $.pointerValue<Status>(s).s
		if (source == null) {
			return null
		}
		const sourceValue = $.pointerValue<spb.Status>(source)
		let details: $.Slice<anypb.Any | $.VarRef<anypb.Any> | null> = null
		for (let window = $.sliceRange(sourceValue.Details), index = 0; index < window.length; index++) {
			const detail = window.backing[window.offset + index]
			if (detail == null) {
				details = $.appendOne(details, null, $.appendZeros.nil)
				continue
			}
			const detailValue = $.pointerValue<anypb.Any>(detail)
			details = $.appendOne(details, new anypb.Any({
				TypeUrl: detailValue.TypeUrl,
				Value: $.appendSlice<number>(null, detailValue.Value),
			}), $.appendZeros.nil)
		}
		return new spb.Status({
			Code: sourceValue.Code,
			Message: sourceValue.Message,
			Details: details,
		})
	}

	public async String(): globalThis.Promise<string> {
		const s: Status | $.VarRef<Status> | null = this;
		return fmt.Sprintf("rpc error: code = %s desc = %s", $.namedValueInterfaceValue<any>((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Code() : Status.prototype.Code.call(s)), "codes.Code", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Message() : Status.prototype.Message.call(s)))
	}

	public async WithDetails(details: $.Slice<protoadapt.MessageV1 | null>): globalThis.Promise<[Status | $.VarRef<Status> | null, $.GoError]> {
		const s: Status | $.VarRef<Status> | null = this;
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Code() : Status.prototype.Code.call(s)) == 0) {
			return [null, errors.New("no error details for status with code OK")]
		}
		// s.Code() != OK implies that s.Proto() != nil.
		let p: spb.Status | $.VarRef<spb.Status> | null = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Proto() : Status.prototype.Proto.call(s))
		let p$: spb.Status = p == null ? $.pointerTarget<spb.Status>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<spb.Status>(p)
		for (let __goscriptRangeTarget1 = details, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let detail = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as protoadapt.MessageV1 | null)
			let __goscriptTuple0: any = await anypb.New(await protoadapt.MessageV2Of(detail))
			let m: anypb.Any | $.VarRef<anypb.Any> | null = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err != null) {
				return [null, err]
			}
			;(p$ as spb.Status).Details = $.appendOne((p$ as spb.Status).Details, m, $.appendZeros.nil)
		}
		return [new Status({s: p}), null]
	}

	static __typeInfo = $.registerStructType(
		"status.Status",
		() => new Status(),
		() => [$.methodSignature("Code", [], [/* @__PURE__ */ $.basicType("uint32", "codes.Code")], true), $.methodSignature("Details", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("Message", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Proto", [], [/* @__PURE__ */ $.pointerType("status.Status")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("WithDetails", [["details", /* @__PURE__ */ $.sliceType("protoiface.MessageV1")]], [/* @__PURE__ */ $.pointerType("status.Status"), "error"], true)],
		Status,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("status.Status"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/status" })]
	)
}

export class Error {
	public get s(): Status | $.VarRef<Status> | null {
		return this._fields.s
	}

	public set s(value: Status | $.VarRef<Status> | null) {
		this._fields.s = value
	}

	public _fields: {
		s: Status | $.VarRef<Status> | null
	}

	constructor(init?: Partial<{s?: Status | $.VarRef<Status> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? (null! as Status | $.VarRef<Status> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Error {
		return new Error(this, true)
	}

	public __goscriptAssign(source: Error): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
	}

	public async Error(): globalThis.Promise<string> {
		const e: Error | $.VarRef<Error> | null = this;
		return Status.prototype.String.call($.pointerValue<Error>(e).s)
	}

	public GRPCStatus(): Status | $.VarRef<Status> | null {
		const e: Error | $.VarRef<Error> | null = this;
		return $.pointerValue<Error>(e).s
	}

	public async Is(target: $.GoError): globalThis.Promise<boolean> {
		const e: Error | $.VarRef<Error> | null = this;
		let __goscriptTuple1: any = $.typeAssertTuple<Error | $.VarRef<Error> | null>(target, /* @__PURE__ */ $.pointerType("status.Error"))
		let tse: Error | $.VarRef<Error> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return false
		}
		return proto.Equal($.interfaceValue<proto.Message | null>($.pointerValue<Status>($.pointerValue<Error>(e).s).s, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")), $.interfaceValue<proto.Message | null>($.pointerValue<Status>($.pointerValue<Error>(tse).s).s, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
	}

	static __typeInfo = $.registerStructType(
		"status.Error",
		() => new Error(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GRPCStatus", [], [/* @__PURE__ */ $.pointerType("status.Status")], true), $.methodSignature("Is", [["target", "error"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Error,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("status.Status"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/status" })]
	)
}

export async function NewWithProto(code: codes.Code, message: string, statusProto: $.Slice<string>): globalThis.Promise<Status | $.VarRef<Status> | null> {
	if ($.sliceLen(statusProto) != 1) {
		// No grpc-status-details bin header, or multiple; just ignore.
		return new Status({s: new spb.Status({Code: $.int(code, 32), Message: message})})
	}
	let st: spb.Status | $.VarRef<spb.Status> | null = new spb.Status()
	{
		let err = await proto.Unmarshal($.stringToBytes($.arrayIndex(statusProto!, 0)), $.interfaceValue<proto.Message | null>(st, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
		if (err != null) {
			// Probably not a google.rpc.Status proto; do not provide details.
			return new Status({s: new spb.Status({Code: $.int(code, 32), Message: message})})
		}
	}
	if ($.pointerValue<spb.Status>(st).Code == $.int(code, 32)) {
		// The codes match between the grpc-status header and the
		// grpc-status-details-bin header; use the full details proto.
		return new Status({s: st})
	}
	return new Status({s: (await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("grpc-status-details-bin mismatch: grpc-status=%v, grpc-message=%q, grpc-status-details-bin=%+v", $.namedValueInterfaceValue<any>(code, "codes.Code", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), message, $.interfaceValue(st, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status"))); return new spb.Status({Code: 13, Message: __goscriptLiteralField0}) })())})
}

export function New(c: codes.Code, msg: string): Status | $.VarRef<Status> | null {
	return new Status({s: new spb.Status({Code: $.int(c, 32), Message: msg})})
}

export async function Newf(c: codes.Code, format: string, a: $.Slice<any>): globalThis.Promise<Status | $.VarRef<Status> | null> {
	return New(c, await fmt.Sprintf(format, ...(a ?? [])))
}

export async function FromProto(s: spb.Status | $.VarRef<spb.Status> | null): globalThis.Promise<Status | $.VarRef<Status> | null> {
	return new Status({s: $.mustTypeAssert<spb.Status | $.VarRef<spb.Status> | null>(await proto.Clone($.interfaceValue<proto.Message | null>(s, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status"))), /* @__PURE__ */ $.pointerType("status.Status"))})
}

export function Err(c: codes.Code, msg: string): $.GoError {
	return Status.prototype.Err.call(New(c, msg))
}

export async function Errorf(c: codes.Code, format: string, a: $.Slice<any>): globalThis.Promise<$.GoError> {
	return Err(c, await fmt.Sprintf(format, ...(a ?? [])))
}

export function IsRestrictedControlPlaneCode(s: Status | $.VarRef<Status> | null): boolean {
	switch ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Status).Code() : Status.prototype.Code.call(s))) {
		case codes.InvalidArgument:
		case codes.NotFound:
		case codes.AlreadyExists:
		case codes.FailedPrecondition:
		case codes.Aborted:
		case codes.OutOfRange:
		case codes.DataLoss:
		{
			return true
			break
		}
	}
	return false
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
