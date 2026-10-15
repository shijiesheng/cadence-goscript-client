// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_codes from "./codes.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "./codes.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/yarpcerrors", ["yarpcerrors.yarpcError", "yarpcerrors.Status", "yarpcerrors.wrapError"])

export type yarpcError = {
	YARPCError(): Status | $.VarRef<Status> | null | globalThis.Promise<Status | $.VarRef<Status> | null>
}

$.registerInterfaceType(
	"yarpcerrors.yarpcError",
	null,
	[$.methodSignature("YARPCError", [], [/* @__PURE__ */ $.pointerType("yarpcerrors.Status")])]
);

export class Status {
	public get code(): __goscript_codes.Code {
		return this._fields.code
	}

	public set code(value: __goscript_codes.Code) {
		this._fields.code = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get details(): $.Slice<number> {
		return this._fields.details
	}

	public set details(value: $.Slice<number>) {
		this._fields.details = value
	}

	public _fields: {
		code: __goscript_codes.Code
		name: string
		err: $.GoError
		details: $.Slice<number>
	}

	constructor(init?: Partial<{code?: __goscript_codes.Code, name?: string, err?: $.GoError, details?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			code: init?.code ?? (0 as __goscript_codes.Code),
			name: init?.name ?? ("" as string),
			err: init?.err ?? (null! as $.GoError),
			details: init?.details ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Status {
		return new Status(this, true)
	}

	public __goscriptAssign(source: Status): void {
		const target = this._fields
		const values = source._fields
		target.code = values.code
		target.name = values.name
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.details = values.details
	}

	public Code(): __goscript_codes.Code {
		const s: Status | $.VarRef<Status> | null = this;
		if (s == null) {
			return 0
		}
		return $.pointerValue<Status>(s).code
	}

	public Details(): $.Slice<number> {
		const s: Status | $.VarRef<Status> | null = this;
		if (s == null) {
			return null
		}
		return $.pointerValue<Status>(s).details
	}

	public async Error(): globalThis.Promise<string> {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		let buffer: bytes.Buffer | $.VarRef<bytes.Buffer> | null = bytes.NewBuffer(null)
		bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buffer), "code:")
		bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buffer), __goscript_codes.Code_String((s$ as Status).code))
		if (!$.stringEqual((s$ as Status).name, "")) {
			bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buffer), " name:")
			bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buffer), (s$ as Status).name)
		}
		if (((s$ as Status).err != null) && (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>((s$ as Status).err).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ""))) {
			bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buffer), " message:")
			bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buffer), (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>((s$ as Status).err).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buffer))
	}

	public async Message(): globalThis.Promise<string> {
		const s: Status | $.VarRef<Status> | null = this;
		if (s == null) {
			return ""
		}
		return $.pointerValue<Exclude<$.GoError, null>>($.pointerValue<Status>(s).err).Error()
	}

	public Name(): string {
		const s: Status | $.VarRef<Status> | null = this;
		if (s == null) {
			return ""
		}
		return $.pointerValue<Status>(s).name
	}

	public Unwrap(): $.GoError {
		const s: Status | $.VarRef<Status> | null = this;
		if (s == null) {
			return null
		}
		return errors.Unwrap($.pointerValueOrNil($.pointerValue<Status>(s).err)!)
	}

	public WithDetails(details: $.Slice<number>): Status | $.VarRef<Status> | null {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		if (s == null) {
			return null
		}
		if ($.sliceLen(details) == 0) {
			// this ensures that the details field is not set to some pointer if
			// there's nothing in details.
			details = null
		}
		return new Status({code: (s$ as Status).code, name: (s$ as Status).name, err: (s$ as Status).err, details: details})
	}

	public WithName(name: string): Status | $.VarRef<Status> | null {
		const s: Status | $.VarRef<Status> | null = this;
		const s$: Status = s == null ? $.pointerTarget<Status>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Status>(s)
		// TODO: We plan to add a WithDetails method to add semantic metadata to
		// Statuses soon.
		if (s == null) {
			return null
		}

		return new Status({code: (s$ as Status).code, name: name, err: (s$ as Status).err, details: (s$ as Status).details})
	}

	static __typeInfo = $.registerStructType(
		"yarpcerrors.Status",
		() => new Status(),
		() => [$.methodSignature("Code", [], [/* @__PURE__ */ $.basicType("int", "yarpcerrors.Code")], true), $.methodSignature("Details", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Message", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unwrap", [], ["error"], true), $.methodSignature("WithDetails", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("yarpcerrors.Status")], true), $.methodSignature("WithName", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("yarpcerrors.Status")], true)],
		Status,
		() => [/* @__PURE__ */ $.structField("code", /* @__PURE__ */ $.basicType("int", "yarpcerrors.Code"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/yarpcerrors" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/yarpcerrors" }), /* @__PURE__ */ $.structField("err", "error", [2], 24, false, { pkgPath: "go.uber.org/yarpc/yarpcerrors" }), /* @__PURE__ */ $.structField("details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 40, false, { pkgPath: "go.uber.org/yarpc/yarpcerrors" })]
	)
}

export class wrapError {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): wrapError {
		return new wrapError(this, true)
	}

	public __goscriptAssign(source: wrapError): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: wrapError | $.VarRef<wrapError> | null = this;
		const e$: wrapError = e == null ? $.pointerTarget<wrapError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<wrapError>(e)
		if ((e == null) || ((e$ as wrapError).err == null)) {
			return ""
		}
		return $.pointerValue<Exclude<$.GoError, null>>((e$ as wrapError).err).Error()
	}

	public Unwrap(): $.GoError {
		const e: wrapError | $.VarRef<wrapError> | null = this;
		if (e == null) {
			return null
		}
		return $.pointerValue<wrapError>(e).err
	}

	static __typeInfo = $.registerStructType(
		"yarpcerrors.wrapError",
		() => new wrapError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		wrapError,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "go.uber.org/yarpc/yarpcerrors" })]
	)
}

export function Newf(code: __goscript_codes.Code, format: string, args: $.Slice<any>): Status | $.VarRef<Status> | null {
	if (code == 0) {
		return null
	}

	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(args) == 0) {
		err = errors.New(format)
	} else {
		err = fmt.Errorf(format, ...(args ?? []))
	}

	return new Status({code: code, err: err})
}

export async function FromError(err: $.GoError): globalThis.Promise<Status | $.VarRef<Status> | null> {
	if (err == null) {
		return null
	}

	{
		let __goscriptTuple0: any = await fromError(err)
		let st: Status | $.VarRef<Status> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return st
		}
	}

	// Extra wrapping ensures Unwrap works consistently across *Status created
	// by FromError and Newf.
	// https://github.com/yarpc/yarpc-go/pull/1966
	return new Status({code: 2, err: $.interfaceValue<$.GoError>(new wrapError({err: err}), "*yarpcerrors.wrapError", /* @__PURE__ */ $.pointerType("yarpcerrors.wrapError"))})
}

export async function fromError(err: $.GoError): globalThis.Promise<[Status | $.VarRef<Status> | null, boolean]> {
	let st: $.VarRef<Status | $.VarRef<Status> | null> = $.varRef(null! as Status | $.VarRef<Status> | null)
	let ok: boolean = false
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(st, "**yarpcerrors.Status", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("yarpcerrors.Status"))))) {
		return [st.value, true]
	}

	let yerr: $.VarRef<yarpcError | null> = $.varRef(null! as yarpcError | null)
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(yerr, "*yarpcerrors.yarpcError", /* @__PURE__ */ $.pointerType("yarpcerrors.yarpcError")))) {
		return [((__goscriptAwait = $.pointerValue<Exclude<yarpcError, null>>(yerr.value).YARPCError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as Status | $.VarRef<Status> | null), true]
	}
	return [null, false]
}

export async function IsStatus(err: $.GoError): globalThis.Promise<boolean> {
	let [, ok] = await fromError(err)
	return ok
}

export function CancelledErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(1, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function UnknownErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(2, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function InvalidArgumentErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(3, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function DeadlineExceededErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(4, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function NotFoundErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(5, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function AlreadyExistsErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(6, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function PermissionDeniedErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(7, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function ResourceExhaustedErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(8, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function FailedPreconditionErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(9, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function AbortedErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(10, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function OutOfRangeErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(11, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function UnimplementedErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(12, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function InternalErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(13, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function UnavailableErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(14, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function DataLossErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(15, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function UnauthenticatedErrorf(format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Newf(16, format, args), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export async function IsCancelled(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 1
}

export async function IsUnknown(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 2
}

export async function IsInvalidArgument(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 3
}

export async function IsDeadlineExceeded(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 4
}

export async function IsNotFound(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 5
}

export async function IsAlreadyExists(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 6
}

export async function IsPermissionDenied(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 7
}

export async function IsResourceExhausted(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 8
}

export async function IsFailedPrecondition(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 9
}

export async function IsAborted(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 10
}

export async function IsOutOfRange(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 11
}

export async function IsUnimplemented(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 12
}

export async function IsInternal(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 13
}

export async function IsUnavailable(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 14
}

export async function IsDataLoss(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 15
}

export async function IsUnauthenticated(err: $.GoError): globalThis.Promise<boolean> {
	return Status.prototype.Code.call(await FromError(err)) == 16
}

export async function IsYARPCError(err: $.GoError): globalThis.Promise<boolean> {
	return IsStatus(err)
}

export async function ErrorCode(err: $.GoError): globalThis.Promise<__goscript_codes.Code> {
	return Status.prototype.Code.call(await FromError(err))
}

export async function ErrorName(err: $.GoError): globalThis.Promise<string> {
	return Status.prototype.Name.call(await FromError(err))
}

export async function ErrorMessage(err: $.GoError): globalThis.Promise<string> {
	return Status.prototype.Message.call(await FromError(err))
}

export function NamedErrorf(name: string, format: string, args: $.Slice<any>): $.GoError {
	return $.interfaceValue<$.GoError>(Status.prototype.WithName.call(Newf(2, format, args), name), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function FromHeaders(code: __goscript_codes.Code, name: string, message: string): $.GoError {
	return $.interfaceValue<$.GoError>(Status.prototype.WithName.call(Newf(code, message, null), name), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

var __goscriptAwait: any
