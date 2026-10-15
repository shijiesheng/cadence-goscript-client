// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as detrand from "@goscript/google.golang.org/protobuf/internal/detrand/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/internal/detrand/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/errors", ["errors.prefixError", "errors.wrapError", "errors.SizeMismatchError"])

export class prefixError {
	public get s(): string {
		return this._fields.s
	}

	public set s(value: string) {
		this._fields.s = value
	}

	public _fields: {
		s: string
	}

	constructor(init?: Partial<{s?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): prefixError {
		return new prefixError(this, true)
	}

	public __goscriptAssign(source: prefixError): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
	}

	public Error(): string {
		const e: prefixError | $.VarRef<prefixError> | null = this;
		return $.concatString(prefix, $.pointerValue<prefixError>(e).s)
	}

	public Unwrap(): $.GoError {
		const e: prefixError | $.VarRef<prefixError> | null = this;
		return Error
	}

	static __typeInfo = $.registerStructType(
		"errors.prefixError",
		() => new prefixError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		prefixError,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/errors" })]
	)
}

export class wrapError {
	public get s(): string {
		return this._fields.s
	}

	public set s(value: string) {
		this._fields.s = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		s: string
		err: $.GoError
	}

	constructor(init?: Partial<{s?: string, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? ("" as string),
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
		target.s = values.s
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: wrapError | $.VarRef<wrapError> | null = this;
		const e$: wrapError = e == null ? $.pointerTarget<wrapError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<wrapError>(e)
		return format("%v%v: %v", $.arrayToSlice<any>([prefix, (e$ as wrapError).s, ((e$ as wrapError).err as any)]))
	}

	public Is(target: $.GoError): boolean {
		const e: wrapError | $.VarRef<wrapError> | null = this;
		return $.comparableEqual(target, Error)
	}

	public Unwrap(): $.GoError {
		const e: wrapError | $.VarRef<wrapError> | null = this;
		return $.pointerValue<wrapError>(e).err
	}

	static __typeInfo = $.registerStructType(
		"errors.wrapError",
		() => new wrapError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Is", [["target", "error"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		wrapError,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/errors" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/errors" })]
	)
}

export class SizeMismatchError {
	public get Calculated(): number {
		return this._fields.Calculated
	}

	public set Calculated(value: number) {
		this._fields.Calculated = value
	}

	public get Measured(): number {
		return this._fields.Measured
	}

	public set Measured(value: number) {
		this._fields.Measured = value
	}

	public _fields: {
		Calculated: number
		Measured: number
	}

	constructor(init?: Partial<{Calculated?: number, Measured?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Calculated: init?.Calculated ?? (0 as number),
			Measured: init?.Measured ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SizeMismatchError {
		return new SizeMismatchError(this, true)
	}

	public __goscriptAssign(source: SizeMismatchError): void {
		const target = this._fields
		const values = source._fields
		target.Calculated = values.Calculated
		target.Measured = values.Measured
	}

	public async Error(): globalThis.Promise<string> {
		const e: SizeMismatchError | $.VarRef<SizeMismatchError> | null = this;
		const e$: SizeMismatchError = e == null ? $.pointerTarget<SizeMismatchError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<SizeMismatchError>(e)
		return fmt.Sprintf("size mismatch (see https://github.com/golang/protobuf/issues/1609): calculated=%d, measured=%d", $.basicInterfaceValue((e$ as SizeMismatchError).Calculated, "int"), $.basicInterfaceValue((e$ as SizeMismatchError).Measured, "int"))
	}

	static __typeInfo = $.registerStructType(
		"errors.SizeMismatchError",
		() => new SizeMismatchError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		SizeMismatchError,
		() => [/* @__PURE__ */ $.structField("Calculated", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Measured", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export let Error: $.GoError = errors.New("protobuf error")

export function __goscript_set_Error(__goscriptValue: $.GoError): void {
	Error = __goscriptValue
}

export async function New(f: string, x: $.Slice<any>): globalThis.Promise<$.GoError> {
	return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = await format(f, x); return new prefixError({s: __goscriptLiteralField0}) })()), "*errors.prefixError", /* @__PURE__ */ $.pointerType("errors.prefixError"))
}

export let prefix: string = ((): string => {
	// Deliberately introduce instability into the error message string to
	// discourage users from performing error string comparisons.
	if (detrand.Bool()) {
		return "proto:\xc2\xa0"
	} else {
		return "proto: "
	}
})()

export function __goscript_set_prefix(__goscriptValue: string): void {
	prefix = __goscriptValue
}

export async function Wrap(err: $.GoError, f: string, x: $.Slice<any>): globalThis.Promise<$.GoError> {
	return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField1 = await format(f, x); return new wrapError({s: __goscriptLiteralField1, err: err}) })()), "*errors.wrapError", /* @__PURE__ */ $.pointerType("errors.wrapError"))
}

export async function format(f: string, x: $.Slice<any>): globalThis.Promise<string> {
	// avoid "proto: " prefix when chaining
	for (let __goscriptSliceWindow0 = $.sliceRange(x), i = 0; i < __goscriptSliceWindow0.length; i++) {
		{
			const __goscriptTypeSwitchValue = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any)
			switch (true) {
				case $.typeAssert<prefixError | $.VarRef<prefixError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("errors.prefixError")).ok:
					{
						let e: prefixError | $.VarRef<prefixError> | null = $.typeAssert<prefixError | $.VarRef<prefixError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("errors.prefixError")).value
						;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.pointerValue<prefixError>(e).s
					}
					break
				case $.typeAssert<wrapError | $.VarRef<wrapError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("errors.wrapError")).ok:
					{
						let e: wrapError | $.VarRef<wrapError> | null = $.typeAssert<wrapError | $.VarRef<wrapError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("errors.wrapError")).value
						;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await format("%v: %v", $.arrayToSlice<any>([$.pointerValue<wrapError>(e).s, ($.pointerValue<wrapError>(e).err as any)]))
					}
					break
			}
		}
	}
	return fmt.Sprintf(f, ...(x ?? []))
}

export async function InvalidUTF8(name: string): globalThis.Promise<$.GoError> {
	return New("field %v contains invalid UTF-8", $.arrayToSlice<any>([name]))
}

export async function RequiredNotSet(name: string): globalThis.Promise<$.GoError> {
	return New("required field %v not set", $.arrayToSlice<any>([name]))
}

export function MismatchedSizeCalculation(calculated: number, measured: number): $.GoError {
	return $.interfaceValue<$.GoError>(new SizeMismatchError({Calculated: calculated, Measured: measured}), "*errors.SizeMismatchError", /* @__PURE__ */ $.pointerType("errors.SizeMismatchError"))
}
