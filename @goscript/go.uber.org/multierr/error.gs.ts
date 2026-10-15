// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors2 from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_error_post_go120 from "./error_post_go120.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./error_post_go120.gs.ts"

$.registerTypePackagePath("go.uber.org/multierr", ["multierr.errorGroup", "multierr.multiError", "multierr.inspectResult", "multierr.Invoker", "multierr.Invoke"])

export type errorGroup = {
	Errors(): $.Slice<$.GoError>
}

$.registerInterfaceType(
	"multierr.errorGroup",
	null,
	[$.methodSignature("Errors", [], [/* @__PURE__ */ $.sliceType("error")])]
);

export type Invoker = {
	Invoke(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"multierr.Invoker",
	null,
	[$.methodSignature("Invoke", [], ["error"])]
);

export type Invoke = (() => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"multierr.Invoke",
	{Invoke: (receiver: any, ...args: any[]) => (Invoke_Invoke as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Invoke", [], ["error"])]
);

$.registerNamedValueType(
	"*multierr.Invoke",
	{Invoke: (receiver: any, ...args: any[]) => (Invoke_Invoke as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Invoke", [], ["error"])]
);

export class multiError {
	public get copyNeeded(): atomic.Bool {
		return this._fields.copyNeeded
	}

	public set copyNeeded(value: atomic.Bool) {
		this._fields.copyNeeded = value
	}

	public get errors(): $.Slice<$.GoError> {
		return this._fields.errors
	}

	public set errors(value: $.Slice<$.GoError>) {
		this._fields.errors = value
	}

	public _fields: {
		copyNeeded: atomic.Bool
		errors: $.Slice<$.GoError>
	}

	constructor(init?: Partial<{copyNeeded?: atomic.Bool, errors?: $.Slice<$.GoError>}>, __goscriptValue?: boolean) {
		this._fields = {
			copyNeeded: init?.copyNeeded ? $.markAsStructValue($.cloneStructValue(init.copyNeeded)) : $.markAsStructValue(new atomic.Bool()),
			errors: init?.errors ?? (null! as $.Slice<$.GoError>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): multiError {
		return new multiError(this, true)
	}

	public __goscriptAssign(source: multiError): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.copyNeeded, values.copyNeeded)
		target.errors = values.errors
	}

	public async Error(): globalThis.Promise<string> {
		const merr: multiError | $.VarRef<multiError> | null = this;
		if (merr == null) {
			return ""
		}

		let buff: bytes.Buffer | $.VarRef<bytes.Buffer> | null = $.mustTypeAssert<bytes.Buffer | $.VarRef<bytes.Buffer> | null>(await _bufferPool.value.Get(), /* @__PURE__ */ $.pointerType("bytes.Buffer"))
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buff))

		await (merr !== null && (merr as any).__isVarRef !== true && (merr as any).__goValue === undefined ? ((merr as any) as multiError).writeSingleline($.interfaceValue<io.Writer | null>(buff, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))) : multiError.prototype.writeSingleline.call(merr, $.interfaceValue<io.Writer | null>(buff, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))))

		let result = bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buff))
		_bufferPool.value.Put($.interfaceValue(buff, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))
		return result
	}

	public Errors(): $.Slice<$.GoError> {
		const merr: multiError | $.VarRef<multiError> | null = this;
		if (merr == null) {
			return null
		}
		return $.pointerValue<multiError>(merr).errors
	}

	public async Format(f: fmt.State | null, c: number): globalThis.Promise<void> {
		const merr: multiError | $.VarRef<multiError> | null = this;
		if ((c == 118) && (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(f)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			await (merr !== null && (merr as any).__isVarRef !== true && (merr as any).__goValue === undefined ? ((merr as any) as multiError).writeMultiline((f as io.Writer | null)) : multiError.prototype.writeMultiline.call(merr, (f as io.Writer | null)))
		} else {
			await (merr !== null && (merr as any).__isVarRef !== true && (merr as any).__goValue === undefined ? ((merr as any) as multiError).writeSingleline((f as io.Writer | null)) : multiError.prototype.writeSingleline.call(merr, (f as io.Writer | null)))
		}
	}

	public Unwrap(): $.Slice<$.GoError> {
		const merr: multiError | $.VarRef<multiError> | null = this;
		return (merr !== null && (merr as any).__isVarRef !== true && (merr as any).__goValue === undefined ? ((merr as any) as multiError).Errors() : multiError.prototype.Errors.call(merr))
	}

	public async writeMultiline(w: io.Writer | null): globalThis.Promise<void> {
		const merr: multiError | $.VarRef<multiError> | null = this;
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(_multilinePrefix)
		for (let __goscriptRangeTarget0 = $.pointerValue<multiError>(merr).errors, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let item = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.GoError)
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(_multilineSeparator)
			await writePrefixLine(w, _multilineIndent, await fmt.Sprintf("%+v", (item as any)))
		}
	}

	public async writeSingleline(w: io.Writer | null): globalThis.Promise<void> {
		const merr: multiError | $.VarRef<multiError> | null = this;
		let first = true
		for (let __goscriptRangeTarget1 = $.pointerValue<multiError>(merr).errors, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let item = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.GoError)
			if (first) {
				first = false
			} else {
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(_singlelineSeparator)
			}
			await io.WriteString($.pointerValueOrNil(w)!, (__goscriptAwait = (item !== null && (item as any).__isVarRef !== true && (item as any).__goValue === undefined ? (item as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(item)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
	}

	static __typeInfo = $.registerStructType(
		"multierr.multiError",
		() => new multiError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Errors", [], [/* @__PURE__ */ $.sliceType("error")], true), $.methodSignature("Format", [["f", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("Unwrap", [], [/* @__PURE__ */ $.sliceType("error")], true), $.methodSignature("writeMultiline", [["w", "io.Writer"]], [], true), $.methodSignature("writeSingleline", [["w", "io.Writer"]], [], true)],
		multiError,
		() => [/* @__PURE__ */ $.structField("copyNeeded", "atomic.Bool", [0], 0, false, { pkgPath: "go.uber.org/multierr" }), /* @__PURE__ */ $.structField("errors", /* @__PURE__ */ $.sliceType("error"), [1], 8, false, { pkgPath: "go.uber.org/multierr" })]
	)
}

export class inspectResult {
	// Number of top-level non-nil errors
	public get Count(): number {
		return this._fields.Count
	}

	public set Count(value: number) {
		this._fields.Count = value
	}

	// Total number of errors including multiErrors
	public get Capacity(): number {
		return this._fields.Capacity
	}

	public set Capacity(value: number) {
		this._fields.Capacity = value
	}

	// Index of the first non-nil error in the list. Value is meaningless if
	// Count is zero.
	public get FirstErrorIdx(): number {
		return this._fields.FirstErrorIdx
	}

	public set FirstErrorIdx(value: number) {
		this._fields.FirstErrorIdx = value
	}

	// Whether the list contains at least one multiError
	public get ContainsMultiError(): boolean {
		return this._fields.ContainsMultiError
	}

	public set ContainsMultiError(value: boolean) {
		this._fields.ContainsMultiError = value
	}

	public _fields: {
		Count: number
		Capacity: number
		FirstErrorIdx: number
		ContainsMultiError: boolean
	}

	constructor(init?: Partial<{Count?: number, Capacity?: number, FirstErrorIdx?: number, ContainsMultiError?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Count: init?.Count ?? (0 as number),
			Capacity: init?.Capacity ?? (0 as number),
			FirstErrorIdx: init?.FirstErrorIdx ?? (0 as number),
			ContainsMultiError: init?.ContainsMultiError ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inspectResult {
		return new inspectResult(this, true)
	}

	public __goscriptAssign(source: inspectResult): void {
		const target = this._fields
		const values = source._fields
		target.Count = values.Count
		target.Capacity = values.Capacity
		target.FirstErrorIdx = values.FirstErrorIdx
		target.ContainsMultiError = values.ContainsMultiError
	}

	static __typeInfo = $.registerStructType(
		"multierr.inspectResult",
		() => new inspectResult(),
		() => [],
		inspectResult,
		() => [/* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Capacity", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("FirstErrorIdx", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("ContainsMultiError", /* @__PURE__ */ $.basicType("bool"), [3], 24, true)]
	)
}

export let _singlelineSeparator: $.Slice<number> = new Uint8Array([59, 32])

export function __goscript_set__singlelineSeparator(__goscriptValue: $.Slice<number>): void {
	_singlelineSeparator = __goscriptValue
}

export let _multilinePrefix: $.Slice<number> = new Uint8Array([116, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 101, 114, 114, 111, 114, 115, 32, 111, 99, 99, 117, 114, 114, 101, 100, 58])

export function __goscript_set__multilinePrefix(__goscriptValue: $.Slice<number>): void {
	_multilinePrefix = __goscriptValue
}

export let _multilineSeparator: $.Slice<number> = new Uint8Array([10, 32, 45, 32, 32])

export function __goscript_set__multilineSeparator(__goscriptValue: $.Slice<number>): void {
	_multilineSeparator = __goscriptValue
}

export let _multilineIndent: $.Slice<number> = new Uint8Array([32, 32, 32, 32])

export function __goscript_set__multilineIndent(__goscriptValue: $.Slice<number>): void {
	_multilineIndent = __goscriptValue
}

export let _bufferPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new bytes.Buffer(), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set__bufferPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(_bufferPool.value, __goscriptValue)
}

export async function Errors(err: $.GoError): globalThis.Promise<$.Slice<$.GoError>> {
	return __goscript_error_post_go120.extractErrors(err)
}

export async function Every(err: $.GoError, target: $.GoError): globalThis.Promise<boolean> {
	for (let __goscriptRangeTarget2 = await __goscript_error_post_go120.extractErrors(err), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let e = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as $.GoError)
		if (!errors2.Is($.pointerValueOrNil(e)!, $.pointerValueOrNil(target)!)) {
			return false
		}
	}
	return true
}

export async function writePrefixLine(w: io.Writer | null, prefix: $.Slice<number>, s: string): globalThis.Promise<void> {
	let first = true
	while ($.stringLen(s) > 0) {
		if (first) {
			first = false
		} else {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(prefix)
		}

		let idx: number = strings.IndexByte(s, 10)
		if (idx < 0) {
			idx = $.stringLen(s) - 1
		}

		await io.WriteString($.pointerValueOrNil(w)!, $.sliceStringOrBytes(s, undefined, idx + 1))
		s = $.sliceStringOrBytes(s, idx + 1, undefined)
	}
}

export function inspect(errors: $.Slice<$.GoError>): inspectResult {
	let res: inspectResult = new inspectResult(undefined, true)
	let first = true
	for (let __goscriptRangeTarget3 = errors, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let err = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as $.GoError)
		if (err == null) {
			continue
		}

		res.Count++
		if (first) {
			first = false
			res.FirstErrorIdx = i
		}

		{
			let __goscriptTuple0: any = $.typeAssertTuple<multiError | $.VarRef<multiError> | null>(err, /* @__PURE__ */ $.pointerType("multierr.multiError"))
			let merr: multiError | $.VarRef<multiError> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				res.Capacity = res.Capacity + ($.sliceLen($.pointerValue<multiError>(merr).errors))
				res.ContainsMultiError = true
			} else {
				res.Capacity++
			}
		}
	}
	return res
}

export function fromSlice(errors: $.Slice<$.GoError>): $.GoError {
	// Don't pay to inspect small slices.
	switch ($.sliceLen(errors)) {
		case 0:
		{
			return null
			break
		}
		case 1:
		{
			return $.arrayIndex(errors!, 0)
			break
		}
	}

	let res = inspect(errors)
	switch (res.Count) {
		case 0:
		{
			return null
			break
		}
		case 1:
		{
			return $.arrayIndex(errors!, res.FirstErrorIdx)
			break
		}
		case $.sliceLen(errors):
		{
			if (!res.ContainsMultiError) {
				// Error list is flat. Make a copy of it
				// Otherwise "errors" escapes to the heap
				// unconditionally for all other cases.
				// This lets us optimize for the "no errors" case.
				let out: $.Slice<$.GoError> = $.appendSlice<$.GoError>(null, errors, $.appendZeros.nil)
				return $.interfaceValue<$.GoError>(new multiError({errors: out}), "*multierr.multiError", /* @__PURE__ */ $.pointerType("multierr.multiError"))
			}
			break
		}
	}

	let nonNilErrs: $.Slice<$.GoError> = $.makeSlice<$.GoError>(0, res.Capacity)
	for (let __goscriptRangeTarget4 = $.goSlice(errors, res.FirstErrorIdx, undefined), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let err = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as $.GoError)
		if (err == null) {
			continue
		}

		{
			let __goscriptTuple1: any = $.typeAssertTuple<multiError | $.VarRef<multiError> | null>(err, /* @__PURE__ */ $.pointerType("multierr.multiError"))
			let nested: multiError | $.VarRef<multiError> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				nonNilErrs = $.appendSlice(nonNilErrs, $.pointerValue<multiError>(nested).errors, $.appendZeros.nil)
			} else {
				nonNilErrs = $.appendOne(nonNilErrs, err, $.appendZeros.nil)
			}
		}
	}

	return $.interfaceValue<$.GoError>(new multiError({errors: nonNilErrs}), "*multierr.multiError", /* @__PURE__ */ $.pointerType("multierr.multiError"))
}

export function Combine(errors: $.Slice<$.GoError>): $.GoError {
	return fromSlice(errors)
}

export function Append(left: $.GoError, right: $.GoError): $.GoError {
	switch ((true as boolean)) {
		case left == null:
		{
			return right
			break
		}
		case right == null:
		{
			return left
			break
		}
	}

	{
		let [, ok] = $.typeAssertTuple<multiError | $.VarRef<multiError> | null>(right, /* @__PURE__ */ $.pointerType("multierr.multiError"))
		if (!ok) {
			{
				let __goscriptTuple2: any = $.typeAssertTuple<multiError | $.VarRef<multiError> | null>(left, /* @__PURE__ */ $.pointerType("multierr.multiError"))
				let l: multiError | $.VarRef<multiError> | null = __goscriptTuple2[0]
				let __goscriptShadow0 = __goscriptTuple2[1]
				if (__goscriptShadow0 && !$.pointerValue<multiError>(l).copyNeeded.Swap(true)) {
					// Common case where the error on the left is constantly being
					// appended to.
					let errs: $.Slice<$.GoError> = $.appendOne($.pointerValue<multiError>(l).errors, right, $.appendZeros.nil)
					return $.interfaceValue<$.GoError>(new multiError({errors: errs}), "*multierr.multiError", /* @__PURE__ */ $.pointerType("multierr.multiError"))
				} else {
					if (!__goscriptShadow0) {
						// Both errors are single errors.
						return $.interfaceValue<$.GoError>(new multiError({errors: $.arrayToSlice<$.GoError>([left, right])}), "*multierr.multiError", /* @__PURE__ */ $.pointerType("multierr.multiError"))
					}
				}
			}
		}
	}

	// Either right or both, left and right, are multiErrors. Rely on usual
	// expensive logic.
	let __goscriptShadow1 = $.arrayValue([left, right])
	return fromSlice($.goSlice(__goscriptShadow1, 0, undefined))
}

export function AppendInto(into: $.VarRef<$.GoError> | null, err: $.GoError): boolean {
	let errored: boolean = false
	if (into == null) {
		// We panic if 'into' is nil. This is not documented above
		// because suggesting that the pointer must be non-nil may
		// confuse users into thinking that the error that it points
		// to must be non-nil.
		$.panic("misuse of multierr.AppendInto: into pointer must not be nil")
	}

	if (err == null) {
		return false
	}
	into!.value = Append($.pointerValue<$.GoError>(into), err)
	return true
}

export async function Invoke_Invoke(i: Invoke | null): globalThis.Promise<$.GoError> {
	return i!()
}

export function Close(closer: io.Closer | null): Invoker | null {
	return $.namedValueInterfaceValue<Invoker | null>($.namedFunction($.functionValue(((__receiver) => () => __receiver.Close())((closer !== null && (closer as any).__isVarRef !== true && (closer as any).__goValue === undefined ? (closer as Exclude<io.Closer, null>) : $.pointerValue<Exclude<io.Closer, null>>(closer))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm"), "multierr.Invoke", ({ kind: $.TypeKind.Function, name: "multierr.Invoke", params: [], results: ["error"] } as $.FunctionTypeInfo)), "multierr.Invoke", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function AppendInvoke(into: $.VarRef<$.GoError> | null, invoker: Invoker | null): globalThis.Promise<void> {
	AppendInto(into, (__goscriptAwait = (invoker !== null && (invoker as any).__isVarRef !== true && (invoker as any).__goValue === undefined ? (invoker as Exclude<Invoker, null>) : $.pointerValue<Exclude<Invoker, null>>(invoker)).Invoke(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function AppendFunc(into: $.VarRef<$.GoError> | null, fn: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
	await AppendInvoke(into, $.namedValueInterfaceValue<Invoker | null>($.namedFunction(fn, "multierr.Invoke", ({ kind: $.TypeKind.Function, name: "multierr.Invoke", params: [], results: ["error"] } as $.FunctionTypeInfo)), "multierr.Invoke", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Invoke: (receiver: any, ...args: any[]) => (Invoke_Invoke as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "multierr.Invoke", params: [], results: ["error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Invoke", [], ["error"])])
}

var __goscriptAwait: any
