// Generated file based on assertions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors2 from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as debug from "@goscript/runtime/debug/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as spew from "@goscript/github.com/davecgh/go-spew/spew/index.js"

import * as difflib from "@goscript/github.com/pmezard/go-difflib/difflib/index.js"

import * as yaml from "@goscript/gopkg.in/yaml.v3/index.js"

import type * as io from "@goscript/io/index.js"

import * as fs from "@goscript/io/fs/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/runtime/index.js"
import "@goscript/runtime/debug/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/github.com/davecgh/go-spew/spew/index.js"
import "@goscript/github.com/pmezard/go-difflib/difflib/index.js"
import "@goscript/gopkg.in/yaml.v3/index.js"
import "@goscript/io/fs/index.js"

$.registerTypePackagePath("github.com/stretchr/testify/assert", ["assert.TestingT", "assert.ComparisonAssertionFunc", "assert.ValueAssertionFunc", "assert.BoolAssertionFunc", "assert.ErrorAssertionFunc", "assert.Comparison", "assert.failNower", "assert.labeledContent", "assert.PanicTestFunc", "assert.tHelper", "assert.CollectT"])

export type TestingT = {
	Errorf(format: string, args: $.Slice<any>): void
}

$.registerInterfaceType(
	"assert.TestingT",
	null,
	[$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export type ComparisonAssertionFunc = ((_p0: TestingT | null, _p1: any, _p2: any, _p3: $.Slice<any>) => boolean | globalThis.Promise<boolean>) | null

export type ValueAssertionFunc = ((_p0: TestingT | null, _p1: any, _p2: $.Slice<any>) => boolean | globalThis.Promise<boolean>) | null

export type BoolAssertionFunc = ((_p0: TestingT | null, _p1: boolean, _p2: $.Slice<any>) => boolean | globalThis.Promise<boolean>) | null

export type ErrorAssertionFunc = ((_p0: TestingT | null, _p1: $.GoError, _p2: $.Slice<any>) => boolean | globalThis.Promise<boolean>) | null

export type Comparison = (() => boolean | globalThis.Promise<boolean>) | null

export type failNower = {
	FailNow(): void
}

$.registerInterfaceType(
	"assert.failNower",
	null,
	[$.methodSignature("FailNow")]
);

export type PanicTestFunc = (() => void) | null

export type tHelper = {
	Helper(): void
}

$.registerInterfaceType(
	"assert.tHelper",
	null,
	[$.methodSignature("Helper")]
);

export class labeledContent {
	public get label(): string {
		return this._fields.label
	}

	public set label(value: string) {
		this._fields.label = value
	}

	public get content(): string {
		return this._fields.content
	}

	public set content(value: string) {
		this._fields.content = value
	}

	public _fields: {
		label: string
		content: string
	}

	constructor(init?: Partial<{label?: string, content?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			label: init?.label ?? ("" as string),
			content: init?.content ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): labeledContent {
		return new labeledContent(this, true)
	}

	public __goscriptAssign(source: labeledContent): void {
		const target = this._fields
		const values = source._fields
		target.label = values.label
		target.content = values.content
	}

	static __typeInfo = $.registerStructType(
		"assert.labeledContent",
		() => new labeledContent(),
		() => [],
		labeledContent,
		() => [/* @__PURE__ */ $.structField("label", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/stretchr/testify/assert" }), /* @__PURE__ */ $.structField("content", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/stretchr/testify/assert" })]
	)
}

export class CollectT {
	public get errors(): $.Slice<$.GoError> {
		return this._fields.errors
	}

	public set errors(value: $.Slice<$.GoError>) {
		this._fields.errors = value
	}

	public _fields: {
		errors: $.Slice<$.GoError>
	}

	constructor(init?: Partial<{errors?: $.Slice<$.GoError>}>, __goscriptValue?: boolean) {
		this._fields = {
			errors: init?.errors ?? (null! as $.Slice<$.GoError>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CollectT {
		return new CollectT(this, true)
	}

	public __goscriptAssign(source: CollectT): void {
		const target = this._fields
		const values = source._fields
		target.errors = values.errors
	}

	public Copy(_p0: TestingT | null): void {
		$.panic("Copy() is deprecated")
	}

	public Errorf(format: string, args: $.Slice<any>): void {
		let c: CollectT | $.VarRef<CollectT> | null = this;
		const c$: CollectT = c == null ? $.pointerTarget<CollectT>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CollectT>(c);
		;(c$ as CollectT).errors = $.appendOne((c$ as CollectT).errors, fmt.Errorf(format, ...(args ?? [])), $.appendZeros.nil)
	}

	public FailNow(): void {
		$.panic("Assertion failed")
	}

	public Reset(): void {
		$.panic("Reset() is deprecated")
	}

	static __typeInfo = $.registerStructType(
		"assert.CollectT",
		() => new CollectT(),
		() => [$.methodSignature("Copy", ["assert.TestingT"], [], true), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("FailNow", [], [], true), $.methodSignature("Reset", [], [], true)],
		CollectT,
		() => [/* @__PURE__ */ $.structField("errors", /* @__PURE__ */ $.sliceType("error"), [0], 0, false, { pkgPath: "github.com/stretchr/testify/assert" })]
	)
}

export function ObjectsAreEqual(expected: any, actual: any): boolean {
	if ((expected == null) || (actual == null)) {
		return $.comparableEqual(expected, actual)
	}

	let __goscriptTuple0: any = $.typeAssertTuple<$.Slice<number>>(expected, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	let exp: $.Slice<number> = __goscriptTuple0[0]
	let ok = __goscriptTuple0[1]
	if (!ok) {
		return reflect.DeepEqual(expected, actual)
	}

	let __goscriptTuple1: any = $.typeAssertTuple<$.Slice<number>>(actual, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	let act: $.Slice<number> = __goscriptTuple1[0]
	ok = __goscriptTuple1[1]
	if (!ok) {
		return false
	}
	if ((exp == null) || (act == null)) {
		return (exp == null) && (act == null)
	}
	return bytes.Equal(exp, act)
}

export async function copyExportedFields(expected: any): globalThis.Promise<any> {
	if (isNil(expected)) {
		return expected
	}

	let expectedType = reflect.TypeOf(expected)
	let expectedKind = (__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let expectedValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expected)))

	switch (expectedKind) {
		case reflect.Struct:
		{
			let result = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(expectedType)!))).Elem()))
			for (let i = 0; i < (__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				let field = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				let isExported = $.markAsStructValue($.cloneStructValue(field)).IsExported()
				if (isExported) {
					let fieldValue = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedValue)).Field(i)))
					if (isNil($.interfaceValue($.markAsStructValue($.cloneStructValue(fieldValue)), "reflect.Value", "reflect.Value")) || isNil($.markAsStructValue($.cloneStructValue(fieldValue)).Interface())) {
						continue
					}
					let newValue = await copyExportedFields($.markAsStructValue($.cloneStructValue(fieldValue)).Interface())
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(result)).Field(i))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf(newValue))))
				}
			}
			return $.markAsStructValue($.cloneStructValue(result)).Interface()
			break
		}
		case reflect.Ptr:
		{
			let result = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
			let unexportedRemoved = await copyExportedFields($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedValue)).Elem())).Interface())
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(result)).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf(unexportedRemoved))))
			return $.markAsStructValue($.cloneStructValue(result)).Interface()
			break
		}
		case reflect.Array:
		case reflect.Slice:
		{
			let result: reflect.Value = $.markAsStructValue(new reflect.Value())
			if (expectedKind == 17) {
				result = $.assignStruct(result, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(reflect.ArrayOf($.markAsStructValue($.cloneStructValue(expectedValue)).Len(), $.pointerValueOrNil((__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))!))).Elem())
			} else {
				result = $.assignStruct(result, reflect.MakeSlice($.pointerValueOrNil(expectedType)!, $.markAsStructValue($.cloneStructValue(expectedValue)).Len(), $.markAsStructValue($.cloneStructValue(expectedValue)).Len()))
			}
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(expectedValue)).Len(); i++) {
				let index = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedValue)).Index(i)))
				if (isNil($.interfaceValue($.markAsStructValue($.cloneStructValue(index)), "reflect.Value", "reflect.Value"))) {
					continue
				}
				let unexportedRemoved = await copyExportedFields($.markAsStructValue($.cloneStructValue(index)).Interface())
				$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(result)).Index(i))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf(unexportedRemoved))))
			}
			return $.markAsStructValue($.cloneStructValue(result)).Interface()
			break
		}
		case reflect.Map:
		{
			let result = $.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil(expectedType)!)))
			for (let __goscriptRangeTarget0 = $.markAsStructValue($.cloneStructValue(expectedValue)).MapKeys(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as reflect.Value)))
				let index = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedValue)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))
				let unexportedRemoved = await copyExportedFields($.markAsStructValue($.cloneStructValue(index)).Interface())
				$.markAsStructValue($.cloneStructValue(result)).SetMapIndex($.markAsStructValue($.cloneStructValue(k)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf(unexportedRemoved))))
			}
			return $.markAsStructValue($.cloneStructValue(result)).Interface()
			break
		}
		default:
		{
			return expected
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function ObjectsExportedFieldsAreEqual(expected: any, actual: any): globalThis.Promise<boolean> {
	let expectedCleaned = await copyExportedFields(expected)
	let actualCleaned = await copyExportedFields(actual)
	return ObjectsAreEqualValues(expectedCleaned, actualCleaned)
}

export async function ObjectsAreEqualValues(expected: any, actual: any): globalThis.Promise<boolean> {
	if (ObjectsAreEqual(expected, actual)) {
		return true
	}

	let expectedValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expected)))
	let actualValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(actual)))
	if (!$.markAsStructValue($.cloneStructValue(expectedValue)).IsValid() || !$.markAsStructValue($.cloneStructValue(actualValue)).IsValid()) {
		return false
	}

	let expectedType = $.markAsStructValue($.cloneStructValue(expectedValue)).Type()
	let actualType = $.markAsStructValue($.cloneStructValue(actualValue)).Type()
	if (!(__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).ConvertibleTo($.pointerValueOrNil(actualType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}

	if (!await isNumericType(expectedType) || !await isNumericType(actualType)) {
		// Attempt comparison after type conversion
		return reflect.DeepEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedValue)).Convert($.pointerValueOrNil(actualType)!))).Interface(), actual)
	}

	// If BOTH values are numeric, there are chances of false positives due
	// to overflow or underflow. So, we need to make sure to always convert
	// the smaller type to a larger type before comparing.
	if ((__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) >= (__goscriptAwait = (actualType !== null && (actualType as any).__isVarRef !== true && (actualType as any).__goValue === undefined ? (actualType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(actualType)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return $.comparableEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualValue)).Convert($.pointerValueOrNil(expectedType)!))).Interface(), expected)
	}

	return $.comparableEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedValue)).Convert($.pointerValueOrNil(actualType)!))).Interface(), actual)
}

export async function isNumericType(t: reflect.Type | null): globalThis.Promise<boolean> {
	return ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) >= 2) && ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) <= 16)
}

export async function CallerInfo(): globalThis.Promise<$.Slice<string>> {

	let pc: number = 0
	let ok: boolean = false
	let file: string = ""
	let line: number = 0
	let name: string = ""

	let callers: $.Slice<string> = $.arrayToSlice<string>([])
	for (let i = 0; ; i++) {
		let __goscriptTuple2: any = runtime.Caller(i)
		pc = __goscriptTuple2[0]
		file = __goscriptTuple2[1]
		line = __goscriptTuple2[2]
		ok = __goscriptTuple2[3]
		if (!ok) {
			// The breaks below failed to terminate the loop, and we ran off the
			// end of the call stack.
			break
		}

		// This is a huge edge case, but it will panic if this is the case, see #180
		if ($.stringEqual(file, "<autogenerated>")) {
			break
		}

		let f: runtime.Func | $.VarRef<runtime.Func> | null = runtime.FuncForPC(pc)
		if (f == null) {
			break
		}
		name = runtime.Func.prototype.Name.call($.pointerValueOrNil(f))

		// testing.tRunner is the standard library function that calls
		// tests. Subtests are called directly by tRunner, without going through
		// the Test/Benchmark/Example function that contains the t.Run calls, so
		// with subtests we should break when we hit tRunner, without adding it
		// to the list of callers.
		if ($.stringEqual(name, "testing.tRunner")) {
			break
		}

		let parts: $.Slice<string> = strings.Split(file, "/")
		if ($.sliceLen(parts) > 1) {
			let filename = $.arrayIndex(parts!, $.sliceLen(parts) - 1)
			let dir = $.arrayIndex(parts!, $.sliceLen(parts) - 2)
			if ((((!$.stringEqual(dir, "assert")) && (!$.stringEqual(dir, "mock"))) && (!$.stringEqual(dir, "require"))) || ($.stringEqual(filename, "mock_test.go"))) {
				callers = $.appendOne(callers, await fmt.Sprintf("%s:%d", file, $.basicInterfaceValue(line, "int")))
			}
		}

		// Drop the package
		let segments: $.Slice<string> = strings.Split(name, ".")
		name = $.arrayIndex(segments!, $.sliceLen(segments) - 1)
		if ((isTest(name, "Test") || isTest(name, "Benchmark")) || isTest(name, "Example")) {
			break
		}
	}

	return callers
}

export function isTest(name: string, prefix: string): boolean {
	if (!strings.HasPrefix(name, prefix)) {
		return false
	}
	if ($.stringLen(name) == $.stringLen(prefix)) {
		return true
	}
	let [r, ] = utf8.DecodeRuneInString($.sliceStringOrBytes(name, $.stringLen(prefix), undefined))
	return !unicode.IsLower(r)
}

export async function messageFromMsgAndArgs(msgAndArgs: $.Slice<any>): globalThis.Promise<string> {
	if (($.sliceLen(msgAndArgs) == 0) || (msgAndArgs == null)) {
		return ""
	}
	if ($.sliceLen(msgAndArgs) == 1) {
		let msg = $.arrayIndex(msgAndArgs!, 0)
		{
			let [msgAsStr, ok] = $.typeAssertTuple<string>(msg, /* @__PURE__ */ $.basicType("string"))
			if (ok) {
				return msgAsStr
			}
		}
		return fmt.Sprintf("%+v", msg)
	}
	if ($.sliceLen(msgAndArgs) > 1) {
		return fmt.Sprintf($.mustTypeAssert<string>($.arrayIndex(msgAndArgs!, 0), /* @__PURE__ */ $.basicType("string")), ...($.goSlice(msgAndArgs, 1, undefined) ?? []))
	}
	return ""
}

export async function indentMessageLines(message: string, longestLabelLen: number): globalThis.Promise<string> {
	let outBuf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()

	for (let i = 0, scanner = bufio.NewScanner($.interfaceValue<io.Reader | null>(strings.NewReader(message), "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader"))); await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner)); i++) {
		// no need to align first line because it starts at the correct location (after the label)
		if (i != 0) {
			// append alignLen+1 spaces to align with "{{longestLabel}}:" before adding tab
			bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(outBuf), $.concatString(($.concatString("\n\t", strings.Repeat(" ", longestLabelLen + 1))), "\t"))
		}
		bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(outBuf), (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner)))
	}

	return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(outBuf))
}

export async function FailNow(t: TestingT | null, failureMessage: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	await Fail(t, failureMessage, msgAndArgs)

	// We cannot extend TestingT with FailNow() and
	// maintain backwards compatibility, so we fallback
	// to panicking when FailNow is not available in
	// TestingT.
	// See issue #263

	let __goscriptShadow0 = t
	{
		let __goscriptTuple3: any = $.typeAssertTuple<failNower | null>(__goscriptShadow0, "assert.failNower")
		let __goscriptShadow1 = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (ok) {
			void (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<failNower, null>) : $.pointerValue<Exclude<failNower, null>>(__goscriptShadow1)).FailNow(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			$.panic("test failed and t is missing `FailNow()`")
		}
	}
	return false
}

export async function Fail(t: TestingT | null, failureMessage: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let content: $.Slice<labeledContent> = $.arrayToSlice<labeledContent>([(await (async () => { const __goscriptLiteralField0 = strings.Join(await CallerInfo(), "\n\t\t\t"); return new labeledContent({label: "Error Trace", content: __goscriptLiteralField0}, true) })()), new labeledContent({label: "Error", content: failureMessage}, true)])

	// Add test name if the Go version supports it
	{
		let [n, ok] = $.typeAssertTuple<any>(t, { kind: $.TypeKind.Interface, methods: [{ name: "Name", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("string") }] }] })
		if (ok) {
			content = $.appendOne(content, (await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as any) : $.pointerValue<any>(n)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new labeledContent({label: "Test", content: __goscriptLiteralField1}, true) })()))
		}
	}

	let message = await messageFromMsgAndArgs(msgAndArgs)
	if ($.stringLen(message) > 0) {
		content = $.appendOne(content, new labeledContent({label: "Messages", content: message}, true))
	}

	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Errorf("\n%s", $.arrayToSlice<any>([$.concatString("", await labeledOutput(content))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return false
}

export async function labeledOutput(content: $.Slice<labeledContent>): globalThis.Promise<string> {
	let longestLabel = 0
	for (let __goscriptRangeTarget1 = content, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as labeledContent)).clone()
		if ($.stringLen(v.label) > longestLabel) {
			longestLabel = $.stringLen(v.label)
		}
	}
	let output: string = ""
	for (let __goscriptRangeTarget2 = content, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let v = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as labeledContent)).clone()
		output = $.concatString(output, $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("\t", v.label)), ":")), strings.Repeat(" ", longestLabel - $.stringLen(v.label)))), "\t")), await indentMessageLines(v.content, longestLabel))), "\n"))
	}
	return output
}

export async function Implements(t: TestingT | null, interfaceObject: any, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let interfaceType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(interfaceObject)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	if (_object == null) {
		return Fail(t, await fmt.Sprintf("Cannot check if nil implements %v", (interfaceType as any)), msgAndArgs)
	}
	if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(_object)).Implements($.pointerValueOrNil(interfaceType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return Fail(t, await fmt.Sprintf("%T must implement %v", _object, (interfaceType as any)), msgAndArgs)
	}

	return true
}

export async function NotImplements(t: TestingT | null, interfaceObject: any, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let interfaceType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(interfaceObject)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	if (_object == null) {
		return Fail(t, await fmt.Sprintf("Cannot check if nil does not implement %v", (interfaceType as any)), msgAndArgs)
	}
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(_object)).Implements($.pointerValueOrNil(interfaceType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return Fail(t, await fmt.Sprintf("%T implements %v", _object, (interfaceType as any)), msgAndArgs)
	}

	return true
}

export async function IsType(t: TestingT | null, expectedType: any, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if (!ObjectsAreEqual((reflect.TypeOf(_object) as any), (reflect.TypeOf(expectedType) as any))) {
		return Fail(t, await fmt.Sprintf("Object expected to be of type %v, but was %v", (reflect.TypeOf(expectedType) as any), (reflect.TypeOf(_object) as any)), msgAndArgs)
	}

	return true
}

export async function Equal(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	{
		let err = await validateEqualArgs(expected, actual)
		if (err != null) {
			return Fail(t, await fmt.Sprintf("Invalid operation: %#v == %#v (%s)", expected, actual, (err as any)), msgAndArgs)
		}
	}

	if (!ObjectsAreEqual(expected, actual)) {
		let __goscriptShadow2 = diff
		let __goscriptShadow3 = await __goscriptShadow2(expected, actual)
		let __goscriptTuple4: any = await formatUnequalValues(expected, actual)
		expected = __goscriptTuple4[0]
		actual = __goscriptTuple4[1]
		return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Not equal: \n", "expected: %s\n")), "actual  : %s%s"), expected, actual, __goscriptShadow3), msgAndArgs)
	}

	return true
}

export async function validateEqualArgs(expected: any, actual: any): globalThis.Promise<$.GoError> {
	if ((expected == null) && (actual == null)) {
		return null
	}

	if (await isFunction(expected) || await isFunction(actual)) {
		return errors2.New("cannot take func type as argument")
	}
	return null
}

export async function Same(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if (!samePointers(expected, actual)) {
		return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Not same: \n", "expected: %p %#v\n")), "actual  : %p %#v"), expected, expected, actual, actual), msgAndArgs)
	}

	return true
}

export async function NotSame(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if (samePointers(expected, actual)) {
		return Fail(t, await fmt.Sprintf("Expected and actual point to the same object: %p %#v", expected, expected), msgAndArgs)
	}
	return true
}

export function samePointers(first: any, second: any): boolean {
	let firstPtr = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(first)))
	let secondPtr = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(second)))
	if (($.markAsStructValue($.cloneStructValue(firstPtr)).Kind() != 22) || ($.markAsStructValue($.cloneStructValue(secondPtr)).Kind() != 22)) {
		return false
	}

	let firstType = reflect.TypeOf(first)
	let secondType = reflect.TypeOf(second)
	if (!$.comparableEqual(firstType, secondType)) {
		return false
	}

	// compare pointer addresses
	return $.comparableEqual(first, second)
}

export async function formatUnequalValues(expected: any, actual: any): globalThis.Promise<[string, string]> {
	let e: string = ""
	let a: string = ""
	if (!$.comparableEqual(reflect.TypeOf(expected), reflect.TypeOf(actual))) {
		return [await fmt.Sprintf("%T(%s)", expected, await truncatingFormat(expected)), await fmt.Sprintf("%T(%s)", actual, await truncatingFormat(actual))]
	}
	{
		const __goscriptTypeSwitchValue = expected
		switch (true) {
			case $.typeAssert<time.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).ok:
				{
					return [await fmt.Sprintf("%v", expected), await fmt.Sprintf("%v", actual)]
				}
				break
		}
	}
	return [await truncatingFormat(expected), await truncatingFormat(actual)]
}

export async function truncatingFormat(data: any): globalThis.Promise<string> {
	let value = await fmt.Sprintf("%#v", data)
	let max = 65436
	if ($.stringLen(value) > max) {
		value = $.concatString($.sliceStringOrBytes(value, 0, max), "<... truncated>")
	}
	return value
}

export async function EqualValues(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if (!await ObjectsAreEqualValues(expected, actual)) {
		let __goscriptShadow4 = diff
		let __goscriptShadow5 = await __goscriptShadow4(expected, actual)
		let __goscriptTuple5: any = await formatUnequalValues(expected, actual)
		expected = __goscriptTuple5[0]
		actual = __goscriptTuple5[1]
		return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Not equal: \n", "expected: %s\n")), "actual  : %s%s"), expected, actual, __goscriptShadow5), msgAndArgs)
	}

	return true
}

export async function EqualExportedValues(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let aType: reflect.Type | null = reflect.TypeOf(expected)
	let bType: reflect.Type | null = reflect.TypeOf(actual)

	if (!$.comparableEqual(aType, bType)) {
		return Fail(t, await fmt.Sprintf("Types expected to match exactly\n\t%v != %v", (aType as any), (bType as any)), msgAndArgs)
	}

	if ((__goscriptAwait = (aType !== null && (aType as any).__isVarRef !== true && (aType as any).__goValue === undefined ? (aType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(aType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
		aType = (__goscriptAwait = (aType !== null && (aType as any).__isVarRef !== true && (aType as any).__goValue === undefined ? (aType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(aType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	if ((__goscriptAwait = (bType !== null && (bType as any).__isVarRef !== true && (bType as any).__goValue === undefined ? (bType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(bType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
		bType = (__goscriptAwait = (bType !== null && (bType as any).__isVarRef !== true && (bType as any).__goValue === undefined ? (bType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(bType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	if ((__goscriptAwait = (aType !== null && (aType as any).__isVarRef !== true && (aType as any).__goValue === undefined ? (aType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(aType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
		return Fail(t, await fmt.Sprintf("Types expected to both be struct or pointer to struct \n\t%v != %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (aType !== null && (aType as any).__isVarRef !== true && (aType as any).__goValue === undefined ? (aType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(aType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(reflect.Struct, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), msgAndArgs)
	}

	if ((__goscriptAwait = (bType !== null && (bType as any).__isVarRef !== true && (bType as any).__goValue === undefined ? (bType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(bType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
		return Fail(t, await fmt.Sprintf("Types expected to both be struct or pointer to struct \n\t%v != %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (bType !== null && (bType as any).__isVarRef !== true && (bType as any).__goValue === undefined ? (bType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(bType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(reflect.Struct, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), msgAndArgs)
	}

	expected = await copyExportedFields(expected)
	actual = await copyExportedFields(actual)

	if (!await ObjectsAreEqualValues(expected, actual)) {
		let __goscriptShadow6 = diff
		let __goscriptShadow7 = await __goscriptShadow6(expected, actual)
		let __goscriptTuple6: any = await formatUnequalValues(expected, actual)
		expected = __goscriptTuple6[0]
		actual = __goscriptTuple6[1]
		return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Not equal (comparing only exported fields): \n", "expected: %s\n")), "actual  : %s%s"), expected, actual, __goscriptShadow7), msgAndArgs)
	}

	return true
}

export async function Exactly(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let aType = reflect.TypeOf(expected)
	let bType = reflect.TypeOf(actual)

	if (!$.comparableEqual(aType, bType)) {
		return Fail(t, await fmt.Sprintf("Types expected to match exactly\n\t%v != %v", (aType as any), (bType as any)), msgAndArgs)
	}

	return Equal(t, expected, actual, msgAndArgs)
}

export async function NotNil(t: TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	if (!isNil(_object)) {
		return true
	}
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return Fail(t, "Expected value not to be nil.", msgAndArgs)
}

export function isNil(_object: any): boolean {
	if (_object == null) {
		return true
	}

	let value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_object)))
	switch ($.markAsStructValue($.cloneStructValue(value)).Kind()) {
		case reflect.Chan:
		case reflect.Func:
		case reflect.Interface:
		case reflect.Map:
		case reflect.Ptr:
		case reflect.Slice:
		case reflect.UnsafePointer:
		{
			return $.markAsStructValue($.cloneStructValue(value)).IsNil()
			break
		}
	}

	return false
}

export async function Nil(t: TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	if (isNil(_object)) {
		return true
	}
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return Fail(t, await fmt.Sprintf("Expected nil, but got: %#v", _object), msgAndArgs)
}

export function isEmpty(_object: any): boolean {

	// get nil case out of the way
	if (_object == null) {
		return true
	}

	let objValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_object)))

	switch ($.markAsStructValue($.cloneStructValue(objValue)).Kind()) {
		case reflect.Chan:
		case reflect.Map:
		case reflect.Slice:
		{
			return $.markAsStructValue($.cloneStructValue(objValue)).Len() == 0
			break
		}
		case reflect.Ptr:
		{
			if ($.markAsStructValue($.cloneStructValue(objValue)).IsNil()) {
				return true
			}
			let deref = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(objValue)).Elem())).Interface()
			return isEmpty(deref)
			break
		}
		default:
		{
			let zero = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(objValue)).Type())!)))
			return reflect.DeepEqual(_object, $.markAsStructValue($.cloneStructValue(zero)).Interface())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Empty(t: TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	let pass = isEmpty(_object)
	if (!pass) {
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await Fail(t, await fmt.Sprintf("Should be empty, but was %v", _object), msgAndArgs)
	}

	return pass
}

export async function NotEmpty(t: TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	let pass = !isEmpty(_object)
	if (!pass) {
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await Fail(t, await fmt.Sprintf("Should NOT be empty, but was %v", _object), msgAndArgs)
	}

	return pass
}

export function getLen(x: any): [number, boolean] {
	let length: number = 0
	let ok: boolean = false
	const __defer = new $.DisposableStack()
	try {
		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(x)))
		__defer.defer(() => { ((): void => {
			ok = $.recover() == null
		})() })
		const __goscriptReturn0: [number, boolean] = [$.markAsStructValue($.cloneStructValue(v)).Len(), true]
		length = __goscriptReturn0[0]
		ok = __goscriptReturn0[1]
		__defer.dispose()
		return [length, ok]
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return [length, ok]
}

export async function Len(t: TestingT | null, _object: any, length: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [l, ok] = getLen(_object)
	if (!ok) {
		return Fail(t, await fmt.Sprintf("\"%v\" could not be applied builtin len()", _object), msgAndArgs)
	}

	if (l != length) {
		return Fail(t, await fmt.Sprintf("\"%v\" should have %d item(s), but has %d", _object, $.basicInterfaceValue(length, "int"), $.basicInterfaceValue(l, "int")), msgAndArgs)
	}
	return true
}

export async function True(t: TestingT | null, value: boolean, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	if (!value) {
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return Fail(t, "Should be true", msgAndArgs)
	}

	return true
}

export async function False(t: TestingT | null, value: boolean, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	if (value) {
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return Fail(t, "Should be false", msgAndArgs)
	}

	return true
}

export async function NotEqual(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	{
		let err = await validateEqualArgs(expected, actual)
		if (err != null) {
			return Fail(t, await fmt.Sprintf("Invalid operation: %#v != %#v (%s)", expected, actual, (err as any)), msgAndArgs)
		}
	}

	if (ObjectsAreEqual(expected, actual)) {
		return Fail(t, await fmt.Sprintf("Should not be: %#v\n", actual), msgAndArgs)
	}

	return true
}

export async function NotEqualValues(t: TestingT | null, expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if (await ObjectsAreEqualValues(expected, actual)) {
		return Fail(t, await fmt.Sprintf("Should not be: %#v\n", actual), msgAndArgs)
	}

	return true
}

export async function containsElement(list: any, element: any): globalThis.Promise<[boolean, boolean]> {
	let ok: boolean = false
	let found: boolean = false
	const __defer = new $.DisposableStack()
	try {

		let listValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(list)))
		let listType = reflect.TypeOf(list)
		if (listType == null) {
			return [false, false]
		}
		let listKind = (__goscriptAwait = (listType !== null && (listType as any).__isVarRef !== true && (listType as any).__goValue === undefined ? (listType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(listType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		__defer.defer(() => { ((): void => {
			{
				let e = $.recover()
				if (e != null) {
					ok = false
					found = false
				}
			}
		})() })

		if (listKind == 24) {
			let elementValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(element)))
			const __goscriptReturn1: [boolean, boolean] = [true, strings.Contains($.markAsStructValue($.cloneStructValue(listValue)).String(), $.markAsStructValue($.cloneStructValue(elementValue)).String())]
			ok = __goscriptReturn1[0]
			found = __goscriptReturn1[1]
			__defer.dispose()
			return [ok, found]
		}

		if (listKind == 21) {
			let mapKeys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(listValue)).MapKeys()
			for (let __goscriptSliceWindow0 = $.sliceRange(mapKeys), i = 0; i < __goscriptSliceWindow0.length; i++) {
				if (ObjectsAreEqual($.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as reflect.Value))).Interface(), element)) {
					const __goscriptReturn2: [boolean, boolean] = [true, true]
					ok = __goscriptReturn2[0]
					found = __goscriptReturn2[1]
					__defer.dispose()
					return [ok, found]
				}
			}
			const __goscriptReturn3: [boolean, boolean] = [true, false]
			ok = __goscriptReturn3[0]
			found = __goscriptReturn3[1]
			__defer.dispose()
			return [ok, found]
		}

		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(listValue)).Len(); i++) {
			if (ObjectsAreEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(listValue)).Index(i))).Interface(), element)) {
				const __goscriptReturn4: [boolean, boolean] = [true, true]
				ok = __goscriptReturn4[0]
				found = __goscriptReturn4[1]
				__defer.dispose()
				return [ok, found]
			}
		}
		const __goscriptReturn5: [boolean, boolean] = [true, false]
		ok = __goscriptReturn5[0]
		found = __goscriptReturn5[1]
		__defer.dispose()
		return [ok, found]
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return [ok, found]
}

export async function Contains(t: TestingT | null, s: any, contains: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let [ok, found] = await containsElement(s, contains)
	if (!ok) {
		return Fail(t, await fmt.Sprintf("%#v could not be applied builtin len()", s), msgAndArgs)
	}
	if (!found) {
		return Fail(t, await fmt.Sprintf("%#v does not contain %#v", s, contains), msgAndArgs)
	}

	return true
}

export async function NotContains(t: TestingT | null, s: any, contains: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let [ok, found] = await containsElement(s, contains)
	if (!ok) {
		return Fail(t, await fmt.Sprintf("%#v could not be applied builtin len()", s), msgAndArgs)
	}
	if (found) {
		return Fail(t, await fmt.Sprintf("%#v should not contain %#v", s, contains), msgAndArgs)
	}

	return true
}

export async function Subset(t: TestingT | null, list: any, subset: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	let ok: boolean = false
	{
		let [h, __goscriptShadow8] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (__goscriptShadow8) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (subset == null) {
		return true
	}

	let listKind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(list)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (((listKind != 17) && (listKind != 23)) && (listKind != 21)) {
		return Fail(t, await fmt.Sprintf("%q has an unsupported type %s", list, $.namedValueInterfaceValue<any>(listKind, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), msgAndArgs)
	}

	let subsetKind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(subset)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (((subsetKind != 17) && (subsetKind != 23)) && (listKind != 21)) {
		return Fail(t, await fmt.Sprintf("%q has an unsupported type %s", subset, $.namedValueInterfaceValue<any>(subsetKind, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), msgAndArgs)
	}

	if ((subsetKind == 21) && (listKind == 21)) {
		let subsetMap = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(subset)))
		let actualMap = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(list)))

		for (let __goscriptRangeTarget3 = $.markAsStructValue($.cloneStructValue(subsetMap)).MapKeys(), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Value)))
			let ev = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(subsetMap)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))
			let av = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualMap)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))

			if (!$.markAsStructValue($.cloneStructValue(av)).IsValid()) {
				return Fail(t, await fmt.Sprintf("%#v does not contain %#v", list, subset), msgAndArgs)
			}
			if (!ObjectsAreEqual($.markAsStructValue($.cloneStructValue(ev)).Interface(), $.markAsStructValue($.cloneStructValue(av)).Interface())) {
				return Fail(t, await fmt.Sprintf("%#v does not contain %#v", list, subset), msgAndArgs)
			}
		}

		return true
	}

	let subsetList = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(subset)))
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(subsetList)).Len(); i++) {
		let element = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(subsetList)).Index(i))).Interface()
		let [__goscriptShadow9, found] = await containsElement(list, element)
		if (!__goscriptShadow9) {
			return Fail(t, await fmt.Sprintf("%#v could not be applied builtin len()", list), msgAndArgs)
		}
		if (!found) {
			return Fail(t, await fmt.Sprintf("%#v does not contain %#v", list, element), msgAndArgs)
		}
	}

	return true
}

export async function NotSubset(t: TestingT | null, list: any, subset: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	let ok: boolean = false
	{
		let [h, __goscriptShadow10] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (__goscriptShadow10) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (subset == null) {
		return Fail(t, "nil is the empty set which is a subset of every set", msgAndArgs)
	}

	let listKind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(list)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (((listKind != 17) && (listKind != 23)) && (listKind != 21)) {
		return Fail(t, await fmt.Sprintf("%q has an unsupported type %s", list, $.namedValueInterfaceValue<any>(listKind, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), msgAndArgs)
	}

	let subsetKind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(subset)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (((subsetKind != 17) && (subsetKind != 23)) && (listKind != 21)) {
		return Fail(t, await fmt.Sprintf("%q has an unsupported type %s", subset, $.namedValueInterfaceValue<any>(subsetKind, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), msgAndArgs)
	}

	if ((subsetKind == 21) && (listKind == 21)) {
		let subsetMap = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(subset)))
		let actualMap = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(list)))

		for (let __goscriptRangeTarget4 = $.markAsStructValue($.cloneStructValue(subsetMap)).MapKeys(), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as reflect.Value)))
			let ev = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(subsetMap)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))
			let av = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualMap)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))

			if (!$.markAsStructValue($.cloneStructValue(av)).IsValid()) {
				return true
			}
			if (!ObjectsAreEqual($.markAsStructValue($.cloneStructValue(ev)).Interface(), $.markAsStructValue($.cloneStructValue(av)).Interface())) {
				return true
			}
		}

		return Fail(t, await fmt.Sprintf("%q is a subset of %q", subset, list), msgAndArgs)
	}

	let subsetList = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(subset)))
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(subsetList)).Len(); i++) {
		let element = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(subsetList)).Index(i))).Interface()
		let [__goscriptShadow11, found] = await containsElement(list, element)
		if (!__goscriptShadow11) {
			return Fail(t, await fmt.Sprintf("\"%s\" could not be applied builtin len()", list), msgAndArgs)
		}
		if (!found) {
			return true
		}
	}

	return Fail(t, await fmt.Sprintf("%q is a subset of %q", subset, list), msgAndArgs)
}

export async function ElementsMatch(t: TestingT | null, listA: any, listB: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	let ok: boolean = false
	{
		let [h, __goscriptShadow12] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (__goscriptShadow12) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (isEmpty(listA) && isEmpty(listB)) {
		return true
	}

	if (!await isList(t, listA, msgAndArgs) || !await isList(t, listB, msgAndArgs)) {
		return false
	}

	let __goscriptTuple7: any = diffLists(listA, listB)
	let extraA: $.Slice<any> = __goscriptTuple7[0]
	let extraB: $.Slice<any> = __goscriptTuple7[1]

	if (($.sliceLen(extraA) == 0) && ($.sliceLen(extraB) == 0)) {
		return true
	}

	return Fail(t, await formatListDiff(listA, listB, extraA, extraB), msgAndArgs)
}

export async function isList(t: TestingT | null, list: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	let ok: boolean = false
	let kind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(list)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((kind != 17) && (kind != 23)) {
		return Fail(t, await fmt.Sprintf("%q has an unsupported type %s, expecting array or slice", list, $.namedValueInterfaceValue<any>(kind, "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), msgAndArgs)
	}
	return true
}

export function diffLists(listA: any, listB: any): [$.Slice<any>, $.Slice<any>] {
	let extraA: $.Slice<any> = null! as $.Slice<any>
	let extraB: $.Slice<any> = null! as $.Slice<any>
	let aValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(listA)))
	let bValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(listB)))

	let aLen = $.markAsStructValue($.cloneStructValue(aValue)).Len()
	let bLen = $.markAsStructValue($.cloneStructValue(bValue)).Len()

	// Mark indexes in bValue that we already used
	let visited: $.Slice<boolean> = $.makeSlice<boolean>(bLen, undefined, "boolean")
	for (let __goscriptSliceWindow1 = $.sliceRange(visited), i = 0; i < aLen; i++) {
		let element = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(aValue)).Index(i))).Interface()
		let found = false
		for (let j = 0; j < bLen; j++) {
			if (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] as boolean)) {
				continue
			}
			if (ObjectsAreEqual($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(bValue)).Index(j))).Interface(), element)) {
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] = true
				found = true
				break
			}
		}
		if (!found) {
			extraA = $.appendOne(extraA, element, $.appendZeros.nil)
		}
	}

	for (let __goscriptSliceWindow2 = $.sliceRange(visited), j = 0; j < bLen; j++) {
		if (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] as boolean)) {
			continue
		}
		extraB = $.appendOne(extraB, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(bValue)).Index(j))).Interface(), $.appendZeros.nil)
	}

	return [extraA, extraB]
}

export async function formatListDiff(listA: any, listB: any, extraA: $.Slice<any>, extraB: $.Slice<any>): globalThis.Promise<string> {
	let msg: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))

	msg.value.WriteString("elements differ")
	if ($.sliceLen(extraA) > 0) {
		msg.value.WriteString("\n\nextra elements in list A:\n")
		msg.value.WriteString(await spewConfig.value.Sdump($.arrayToSlice<any>([$.interfaceValue(extraA, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))])))
	}
	if ($.sliceLen(extraB) > 0) {
		msg.value.WriteString("\n\nextra elements in list B:\n")
		msg.value.WriteString(await spewConfig.value.Sdump($.arrayToSlice<any>([$.interfaceValue(extraB, "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))])))
	}
	msg.value.WriteString("\n\nlistA:\n")
	msg.value.WriteString(await spewConfig.value.Sdump($.arrayToSlice<any>([listA])))
	msg.value.WriteString("\n\nlistB:\n")
	msg.value.WriteString(await spewConfig.value.Sdump($.arrayToSlice<any>([listB])))

	return msg.value.String()
}

export async function Condition(t: TestingT | null, comp: (() => boolean | globalThis.Promise<boolean>) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let result = (__goscriptAwait = comp!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (!result) {
		await Fail(t, "Condition failed!", msgAndArgs)
	}
	return result
}

export async function didPanic(f: (() => void) | null): globalThis.Promise<[boolean, any, string]> {
	let didPanic: boolean = false
	let message: any = null! as any
	let stack: string = ""
	const __defer = new $.DisposableStack()
	try {
		didPanic = true

		__defer.defer(() => { ((): void => {
			message = $.recover()
			if (didPanic) {
				stack = $.bytesToString(debug.Stack())
			}
		})() })

		// call the target function
		void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		didPanic = false

		__defer.dispose()
		return [didPanic, message, stack]
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return [didPanic, message, stack]
}

export async function Panics(t: TestingT | null, f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	{
		let [funcDidPanic, panicValue, ] = await didPanic(f)
		if (!funcDidPanic) {
			return Fail(t, await fmt.Sprintf("func %#v should panic\n\tPanic value:\t%#v", $.interfaceValue(f, "assert.PanicTestFunc", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)), panicValue), msgAndArgs)
		}
	}

	return true
}

export async function PanicsWithValue(t: TestingT | null, expected: any, f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let [funcDidPanic, panicValue, panickedStack] = await didPanic(f)
	if (!funcDidPanic) {
		return Fail(t, await fmt.Sprintf("func %#v should panic\n\tPanic value:\t%#v", $.interfaceValue(f, "assert.PanicTestFunc", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)), panicValue), msgAndArgs)
	}
	if (!$.comparableEqual(panicValue, expected)) {
		return Fail(t, await fmt.Sprintf("func %#v should panic with value:\t%#v\n\tPanic value:\t%#v\n\tPanic stack:\t%s", $.interfaceValue(f, "assert.PanicTestFunc", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)), expected, panicValue, panickedStack), msgAndArgs)
	}

	return true
}

export async function PanicsWithError(t: TestingT | null, errString: string, f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let [funcDidPanic, panicValue, panickedStack] = await didPanic(f)
	if (!funcDidPanic) {
		return Fail(t, await fmt.Sprintf("func %#v should panic\n\tPanic value:\t%#v", $.interfaceValue(f, "assert.PanicTestFunc", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)), panicValue), msgAndArgs)
	}
	let [panicErr, ok] = $.typeAssertTuple<$.GoError>(panicValue, "error")
	if (!ok || (!$.stringEqual((__goscriptAwait = (panicErr !== null && (panicErr as any).__isVarRef !== true && (panicErr as any).__goValue === undefined ? (panicErr as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(panicErr)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), errString))) {
		return Fail(t, await fmt.Sprintf("func %#v should panic with error message:\t%#v\n\tPanic value:\t%#v\n\tPanic stack:\t%s", $.interfaceValue(f, "assert.PanicTestFunc", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)), errString, panicValue, panickedStack), msgAndArgs)
	}

	return true
}

export async function NotPanics(t: TestingT | null, f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	{
		let [funcDidPanic, panicValue, panickedStack] = await didPanic(f)
		if (funcDidPanic) {
			return Fail(t, await fmt.Sprintf("func %#v should not panic\n\tPanic value:\t%v\n\tPanic stack:\t%s", $.interfaceValue(f, "assert.PanicTestFunc", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)), panicValue, panickedStack), msgAndArgs)
		}
	}

	return true
}

export async function WithinDuration(t: TestingT | null, expected: time.Time, actual: time.Time, delta: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let dt = $.markAsStructValue($.cloneStructValue(expected)).Sub($.markAsStructValue($.cloneStructValue(actual)))
	if ((dt < -delta) || (dt > delta)) {
		return Fail(t, await fmt.Sprintf("Max difference between %v and %v allowed is %v, but difference was %v", $.interfaceValue($.markAsStructValue($.cloneStructValue(expected)), "time.Time", "time.Time"), $.interfaceValue($.markAsStructValue($.cloneStructValue(actual)), "time.Time", "time.Time"), $.namedValueInterfaceValue<any>(delta, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>(dt, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())), msgAndArgs)
	}

	return true
}

export async function WithinRange(t: TestingT | null, actual: time.Time, start: time.Time, end: time.Time, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if ($.markAsStructValue($.cloneStructValue(end)).Before($.markAsStructValue($.cloneStructValue(start)))) {
		return Fail(t, "Start should be before end", msgAndArgs)
	}

	if ($.markAsStructValue($.cloneStructValue(actual)).Before($.markAsStructValue($.cloneStructValue(start)))) {
		return Fail(t, await fmt.Sprintf("Time %v expected to be in time range %v to %v, but is before the range", $.interfaceValue($.markAsStructValue($.cloneStructValue(actual)), "time.Time", "time.Time"), $.interfaceValue($.markAsStructValue($.cloneStructValue(start)), "time.Time", "time.Time"), $.interfaceValue($.markAsStructValue($.cloneStructValue(end)), "time.Time", "time.Time")), msgAndArgs)
	} else {
		if ($.markAsStructValue($.cloneStructValue(actual)).After($.markAsStructValue($.cloneStructValue(end)))) {
			return Fail(t, await fmt.Sprintf("Time %v expected to be in time range %v to %v, but is after the range", $.interfaceValue($.markAsStructValue($.cloneStructValue(actual)), "time.Time", "time.Time"), $.interfaceValue($.markAsStructValue($.cloneStructValue(start)), "time.Time", "time.Time"), $.interfaceValue($.markAsStructValue($.cloneStructValue(end)), "time.Time", "time.Time")), msgAndArgs)
		}
	}

	return true
}

export function toFloat(x: any): [number, boolean] {
	let xf: number = 0
	let xok = true

	{
		const __goscriptTypeSwitchValue = x
		switch (true) {
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint")).value
					xf = xn
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint8")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint8")).value
					xf = xn
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint16")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint16")).value
					xf = xn
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).value
					xf = xn
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
				{
					let xn: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).value
					xf = globalThis.Number(xn)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).value
					xf = xn
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int8")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int8")).value
					xf = xn
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int16")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int16")).value
					xf = xn
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).value
					xf = xn
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
				{
					let xn: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
					xf = globalThis.Number(xn)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).value
					xf = xn
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
				{
					let xn: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
					xf = xn
				}
				break
			case $.typeAssert<time.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).ok:
				{
					let xn: time.Duration = $.typeAssert<time.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).value
					xf = globalThis.Number(xn)
				}
				break
			default:
				{
					let xn: any = __goscriptTypeSwitchValue
					xok = false
				}
				break
		}
	}

	return [xf, xok]
}

export async function InDelta(t: TestingT | null, expected: any, actual: any, delta: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let [af, aok] = toFloat(expected)
	let [bf, bok] = toFloat(actual)

	if (!aok || !bok) {
		return Fail(t, "Parameters must be numerical", msgAndArgs)
	}

	if (math.IsNaN(af) && math.IsNaN(bf)) {
		return true
	}

	if (math.IsNaN(af)) {
		return Fail(t, "Expected must not be NaN", msgAndArgs)
	}

	if (math.IsNaN(bf)) {
		return Fail(t, await fmt.Sprintf("Expected %v with delta %v, but was NaN", expected, $.basicInterfaceValue(delta, "float64")), msgAndArgs)
	}

	let dt = af - bf
	if ((dt < -delta) || (dt > delta)) {
		return Fail(t, await fmt.Sprintf("Max difference between %v and %v allowed is %v, but difference was %v", expected, actual, $.basicInterfaceValue(delta, "float64"), $.basicInterfaceValue(dt, "float64")), msgAndArgs)
	}

	return true
}

export async function InDeltaSlice(t: TestingT | null, expected: any, actual: any, delta: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if ((((expected == null) || (actual == null)) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(actual)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23)) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(expected)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23)) {
		return Fail(t, "Parameters must be slice", msgAndArgs)
	}

	let actualSlice = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(actual)))
	let expectedSlice = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expected)))

	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(actualSlice)).Len(); i++) {
		let result = await InDelta(t, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualSlice)).Index(i))).Interface(), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedSlice)).Index(i))).Interface(), delta, msgAndArgs)
		if (!result) {
			return result
		}
	}

	return true
}

export async function InDeltaMapValues(t: TestingT | null, expected: any, actual: any, delta: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if ((((expected == null) || (actual == null)) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(actual)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 21)) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(expected)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 21)) {
		return Fail(t, "Arguments must be maps", msgAndArgs)
	}

	let expectedMap = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expected)))
	let actualMap = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(actual)))

	if ($.markAsStructValue($.cloneStructValue(expectedMap)).Len() != $.markAsStructValue($.cloneStructValue(actualMap)).Len()) {
		return Fail(t, "Arguments must have the same number of keys", msgAndArgs)
	}

	for (let __goscriptRangeTarget5 = $.markAsStructValue($.cloneStructValue(expectedMap)).MapKeys(), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as reflect.Value)))
		let ev = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedMap)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))
		let av = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualMap)).MapIndex($.markAsStructValue($.cloneStructValue(k)))))

		if (!$.markAsStructValue($.cloneStructValue(ev)).IsValid()) {
			return Fail(t, await fmt.Sprintf("missing key %q in expected map", $.interfaceValue($.markAsStructValue($.cloneStructValue(k)), "reflect.Value", "reflect.Value")), msgAndArgs)
		}

		if (!$.markAsStructValue($.cloneStructValue(av)).IsValid()) {
			return Fail(t, await fmt.Sprintf("missing key %q in actual map", $.interfaceValue($.markAsStructValue($.cloneStructValue(k)), "reflect.Value", "reflect.Value")), msgAndArgs)
		}

		if (!await InDelta(t, $.markAsStructValue($.cloneStructValue(ev)).Interface(), $.markAsStructValue($.cloneStructValue(av)).Interface(), delta, msgAndArgs)) {
			return false
		}
	}

	return true
}

export function calcRelativeError(expected: any, actual: any): [number, $.GoError] {
	let [af, aok] = toFloat(expected)
	let [bf, bok] = toFloat(actual)
	if (!aok || !bok) {
		return [0, fmt.Errorf("Parameters must be numerical")]
	}
	if (math.IsNaN(af) && math.IsNaN(bf)) {
		return [0, null]
	}
	if (math.IsNaN(af)) {
		return [0, errors2.New("expected value must not be NaN")]
	}
	if (af == 0) {
		return [0, fmt.Errorf("expected value must have a value other than zero to calculate the relative error")]
	}
	if (math.IsNaN(bf)) {
		return [0, errors2.New("actual value must not be NaN")]
	}

	return [math.Abs(af - bf) / math.Abs(af), null]
}

export async function InEpsilon(t: TestingT | null, expected: any, actual: any, epsilon: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (math.IsNaN(epsilon)) {
		return Fail(t, "epsilon must not be NaN", msgAndArgs)
	}
	let [actualEpsilon, err] = calcRelativeError(expected, actual)
	if (err != null) {
		return Fail(t, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), msgAndArgs)
	}
	if (actualEpsilon > epsilon) {
		return Fail(t, await fmt.Sprintf($.concatString("Relative error is too high: %#v (expected)\n", "        < %#v (actual)"), $.basicInterfaceValue(epsilon, "float64"), $.basicInterfaceValue(actualEpsilon, "float64")), msgAndArgs)
	}

	return true
}

export async function InEpsilonSlice(t: TestingT | null, expected: any, actual: any, epsilon: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if ((expected == null) || (actual == null)) {
		return Fail(t, "Parameters must be slice", msgAndArgs)
	}

	let expectedSlice = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expected)))
	let actualSlice = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(actual)))

	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(expectedSlice)).Type()).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23) {
		return Fail(t, "Expected value must be slice", msgAndArgs)
	}

	let expectedLen = $.markAsStructValue($.cloneStructValue(expectedSlice)).Len()
	if (!await IsType(t, expected, actual, null) || !await Len(t, actual, expectedLen, null)) {
		return false
	}

	for (let i = 0; i < expectedLen; i++) {
		if (!await InEpsilon(t, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expectedSlice)).Index(i))).Interface(), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(actualSlice)).Index(i))).Interface(), epsilon, $.arrayToSlice<any>(["at index %d", $.basicInterfaceValue(i, "int")]))) {
			return false
		}
	}

	return true
}

export async function NoError(t: TestingT | null, err: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	if (err != null) {
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return Fail(t, await fmt.Sprintf("Received unexpected error:\n%+v", (err as any)), msgAndArgs)
	}

	return true
}

export async function Error(t: TestingT | null, err: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	if (err == null) {
		{
			let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return Fail(t, "An error is expected but got nil.", msgAndArgs)
	}

	return true
}

export async function EqualError(t: TestingT | null, theError: $.GoError, errString: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (!await Error(t, theError, msgAndArgs)) {
		return false
	}
	let expected = errString
	let actual = (__goscriptAwait = (theError !== null && (theError as any).__isVarRef !== true && (theError as any).__goValue === undefined ? (theError as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(theError)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	// don't need to use deep equals here, we know they are both strings
	if (!$.stringEqual(expected, actual)) {
		return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Error message not equal:\n", "expected: %q\n")), "actual  : %q"), expected, actual), msgAndArgs)
	}
	return true
}

export async function ErrorContains(t: TestingT | null, theError: $.GoError, contains: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (!await Error(t, theError, msgAndArgs)) {
		return false
	}

	let actual = (__goscriptAwait = (theError !== null && (theError as any).__isVarRef !== true && (theError as any).__goValue === undefined ? (theError as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(theError)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (!strings.Contains(actual, contains)) {
		return Fail(t, await fmt.Sprintf("Error %#v does not contain %#v", actual, contains), msgAndArgs)
	}

	return true
}

export async function matchRegexp(rx: any, str: any): globalThis.Promise<boolean> {

	let r: regexp.Regexp | $.VarRef<regexp.Regexp> | null = null! as regexp.Regexp | $.VarRef<regexp.Regexp> | null
	{
		let __goscriptTuple8: any = $.typeAssertTuple<regexp.Regexp | $.VarRef<regexp.Regexp> | null>(rx, /* @__PURE__ */ $.pointerType("regexp.Regexp"))
		let rr: regexp.Regexp | $.VarRef<regexp.Regexp> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (ok) {
			r = rr
		} else {
			r = await regexp.MustCompile(await fmt.Sprint(rx))
		}
	}

	return (await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as regexp.Regexp).FindStringIndex(await fmt.Sprint(str)) : regexp.Regexp.prototype.FindStringIndex.call(r, await fmt.Sprint(str))) != null)
}

export async function Regexp(t: TestingT | null, rx: any, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let match = await matchRegexp(rx, str)

	if (!match) {
		await Fail(t, await fmt.Sprintf("Expect \"%v\" to match \"%v\"", str, rx), msgAndArgs)
	}

	return match
}

export async function NotRegexp(t: TestingT | null, rx: any, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let match = await matchRegexp(rx, str)

	if (match) {
		await Fail(t, await fmt.Sprintf("Expect \"%v\" to NOT match \"%v\"", str, rx), msgAndArgs)
	}

	return !match
}

export async function Zero(t: TestingT | null, i: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if ((i != null) && !reflect.DeepEqual(i, $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.TypeOf(i))!))).Interface())) {
		return Fail(t, await fmt.Sprintf("Should be zero, but was %v", i), msgAndArgs)
	}
	return true
}

export async function NotZero(t: TestingT | null, i: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if ((i == null) || reflect.DeepEqual(i, $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.TypeOf(i))!))).Interface())) {
		return Fail(t, await fmt.Sprintf("Should not be zero, but was %v", i), msgAndArgs)
	}
	return true
}

export async function FileExists(t: TestingT | null, path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [info, err] = await os.Lstat(path)
	if (err != null) {
		if (os.IsNotExist($.pointerValueOrNil(err)!)) {
			return Fail(t, await fmt.Sprintf("unable to find file %q", path), msgAndArgs)
		}
		return Fail(t, await fmt.Sprintf("error when running os.Lstat(%q): %s", path, (err as any)), msgAndArgs)
	}
	if ((__goscriptAwait = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? (info as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(info)).IsDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return Fail(t, await fmt.Sprintf("%q is a directory", path), msgAndArgs)
	}
	return true
}

export async function NoFileExists(t: TestingT | null, path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [info, err] = await os.Lstat(path)
	if (err != null) {
		return true
	}
	if ((__goscriptAwait = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? (info as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(info)).IsDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return true
	}
	return Fail(t, await fmt.Sprintf("file %q exists", path), msgAndArgs)
}

export async function DirExists(t: TestingT | null, path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [info, err] = await os.Lstat(path)
	if (err != null) {
		if (os.IsNotExist($.pointerValueOrNil(err)!)) {
			return Fail(t, await fmt.Sprintf("unable to find file %q", path), msgAndArgs)
		}
		return Fail(t, await fmt.Sprintf("error when running os.Lstat(%q): %s", path, (err as any)), msgAndArgs)
	}
	if (!(__goscriptAwait = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? (info as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(info)).IsDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return Fail(t, await fmt.Sprintf("%q is a file", path), msgAndArgs)
	}
	return true
}

export async function NoDirExists(t: TestingT | null, path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [info, err] = await os.Lstat(path)
	if (err != null) {
		if (os.IsNotExist($.pointerValueOrNil(err)!)) {
			return true
		}
		return true
	}
	if (!(__goscriptAwait = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? (info as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(info)).IsDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return true
	}
	return Fail(t, await fmt.Sprintf("directory %q exists", path), msgAndArgs)
}

export async function JSONEq(t: TestingT | null, expected: string, actual: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let expectedJSONAsInterface: $.VarRef<any> = $.varRef(null! as any)
	let actualJSONAsInterface: $.VarRef<any> = $.varRef(null! as any)

	{
		let err = await json.Unmarshal($.stringToBytes(expected), $.interfaceValue(expectedJSONAsInterface, "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))
		if (err != null) {
			return Fail(t, await fmt.Sprintf("Expected value ('%s') is not valid json.\nJSON parsing error: '%s'", expected, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), msgAndArgs)
		}
	}

	{
		let err = await json.Unmarshal($.stringToBytes(actual), $.interfaceValue(actualJSONAsInterface, "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))
		if (err != null) {
			return Fail(t, await fmt.Sprintf("Input ('%s') needs to be valid json.\nJSON parsing error: '%s'", actual, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), msgAndArgs)
		}
	}

	return Equal(t, expectedJSONAsInterface.value, actualJSONAsInterface.value, msgAndArgs)
}

export async function YAMLEq(t: TestingT | null, expected: string, actual: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let expectedYAMLAsInterface: $.VarRef<any> = $.varRef(null! as any)
	let actualYAMLAsInterface: $.VarRef<any> = $.varRef(null! as any)

	{
		let err = await yaml.Unmarshal($.stringToBytes(expected), $.interfaceValue(expectedYAMLAsInterface, "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))
		if (err != null) {
			return Fail(t, await fmt.Sprintf("Expected value ('%s') is not valid yaml.\nYAML parsing error: '%s'", expected, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), msgAndArgs)
		}
	}

	{
		let err = await yaml.Unmarshal($.stringToBytes(actual), $.interfaceValue(actualYAMLAsInterface, "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))
		if (err != null) {
			return Fail(t, await fmt.Sprintf("Input ('%s') needs to be valid yaml.\nYAML error: '%s'", actual, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), msgAndArgs)
		}
	}

	return Equal(t, expectedYAMLAsInterface.value, actualYAMLAsInterface.value, msgAndArgs)
}

export async function typeAndKind(v: any): globalThis.Promise<[reflect.Type | null, reflect.Kind]> {
	let t: reflect.Type | null = reflect.TypeOf(v)
	let k = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	if (k == 22) {
		t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		k = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return [t, k]
}

export async function diff(expected: any, actual: any): globalThis.Promise<string> {
	if ((expected == null) || (actual == null)) {
		return ""
	}

	let [et, ek] = await typeAndKind(expected)
	let [at, ] = await typeAndKind(actual)

	if (!$.comparableEqual(et, at)) {
		return ""
	}

	if (((((ek != 25) && (ek != 21)) && (ek != 23)) && (ek != 17)) && (ek != 24)) {
		return ""
	}

	let e: string = ""
	let a: string = ""

	{
		let __goscriptSwitch0 = et
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, reflect.TypeOf("")):
			{
				e = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(expected))).String()
				a = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(actual))).String()
				break
			}
			case $.comparableEqual(__goscriptSwitch0, reflect.TypeOf($.interfaceValue($.markAsStructValue(new time.Time()), "time.Time", "time.Time"))):
			{
				e = await spewConfigStringerEnabled.value.Sdump($.arrayToSlice<any>([expected]))
				a = await spewConfigStringerEnabled.value.Sdump($.arrayToSlice<any>([actual]))
				break
			}
			default:
			{
				e = await spewConfig.value.Sdump($.arrayToSlice<any>([expected]))
				a = await spewConfig.value.Sdump($.arrayToSlice<any>([actual]))
				break
			}
		}
	}

	let [__goscriptShadow13, ] = await difflib.GetUnifiedDiffString((() => { const __goscriptLiteralField2 = difflib.SplitLines(e); const __goscriptLiteralField3 = difflib.SplitLines(a); return new difflib.UnifiedDiff({A: __goscriptLiteralField2, B: __goscriptLiteralField3, FromFile: "Expected", FromDate: "", ToFile: "Actual", ToDate: "", Context: 1}, true) })())

	return $.concatString("\n\nDiff:\n", __goscriptShadow13)
}

export async function isFunction(arg: any): globalThis.Promise<boolean> {
	if (arg == null) {
		return false
	}
	return (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(arg)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 19
}

export let spewConfig: $.VarRef<spew.ConfigState> = $.varRef(new spew.ConfigState({Indent: " ", DisablePointerAddresses: true, DisableCapacities: true, SortKeys: true, DisableMethods: true, MaxDepth: 10}, true))

export function __goscript_set_spewConfig(__goscriptValue: spew.ConfigState): void {
	$.assignStruct(spewConfig.value, __goscriptValue)
}

export let spewConfigStringerEnabled: $.VarRef<spew.ConfigState> = $.varRef(new spew.ConfigState({Indent: " ", DisablePointerAddresses: true, DisableCapacities: true, SortKeys: true, MaxDepth: 10}, true))

export function __goscript_set_spewConfigStringerEnabled(__goscriptValue: spew.ConfigState): void {
	$.assignStruct(spewConfigStringerEnabled.value, __goscriptValue)
}

export async function Eventually(t: TestingT | null, condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	using __defer = new $.DisposableStack()
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let ch: $.Channel<boolean> | null = $.makeChannel<boolean>(1, false, "both")

	let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(waitFor)
	__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })

	let ticker: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker(tick)
	let ticker$: time.Ticker = ticker == null ? $.pointerTarget<time.Ticker>(ticker) : (ticker as any).__isVarRef === true ? (ticker as any).value : (ticker as any).__goValue === undefined ? (ticker as any) : $.pointerTarget<time.Ticker>(ticker)
	__defer.defer(() => { time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>(ticker)) })

	for (let __goscriptShadow14: $.Channel<time.Time> | null = (ticker$ as time.Ticker).C; ; ) {
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
				onSelected: async (__goscriptSelect0Result) => {
					return await Fail(t, "Condition never satisfied", msgAndArgs)
				}
			},
			{
				id: 1,
				isSend: false,
				channel: __goscriptShadow14,
				onSelected: async (__goscriptSelect0Result) => {
					__goscriptShadow14 = null
					queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
						await $.chanSend(ch, (__goscriptAwait = condition!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					})() })
				}
			},
			{
				id: 2,
				isSend: false,
				channel: ch,
				onSelected: async (__goscriptSelect0Result) => {
					let v = __goscriptSelect0Result.value
					if (v) {
						return true
					}
					__goscriptShadow14 = (ticker$ as time.Ticker).C
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function EventuallyWithT(t: TestingT | null, condition: ((collect: CollectT | $.VarRef<CollectT> | null) => void) | null, waitFor: time.Duration, tick: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	using __defer = new $.DisposableStack()
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let lastFinishedTickErrs: $.Slice<$.GoError> = null! as $.Slice<$.GoError>
	let ch: $.Channel<$.Slice<$.GoError>> | null = $.makeChannel<$.Slice<$.GoError>>(1, null! as $.Slice<$.GoError>, "both")

	let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(waitFor)
	__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })

	let ticker: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker(tick)
	let ticker$: time.Ticker = ticker == null ? $.pointerTarget<time.Ticker>(ticker) : (ticker as any).__isVarRef === true ? (ticker as any).value : (ticker as any).__goValue === undefined ? (ticker as any) : $.pointerTarget<time.Ticker>(ticker)
	__defer.defer(() => { time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>(ticker)) })

	for (let __goscriptShadow15: $.Channel<time.Time> | null = (ticker$ as time.Ticker).C; ; ) {
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
				onSelected: async (__goscriptSelect1Result) => {
					for (let __goscriptRangeTarget6 = lastFinishedTickErrs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
						let err = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as $.GoError)
						void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<TestingT, null>) : $.pointerValue<Exclude<TestingT, null>>(t)).Errorf("%v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return await Fail(t, "Condition never satisfied", msgAndArgs)
				}
			},
			{
				id: 1,
				isSend: false,
				channel: __goscriptShadow15,
				onSelected: async (__goscriptSelect1Result) => {
					__goscriptShadow15 = null
					queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
						await using __defer = new $.AsyncDisposableStack()
						let collect: CollectT | $.VarRef<CollectT> | null = new CollectT()
						__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
							await $.chanSend(ch, $.pointerValue<CollectT>(collect).errors)
						})() })
						void (__goscriptAwait = condition!(collect), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					})() })
				}
			},
			{
				id: 2,
				isSend: false,
				channel: ch,
				onSelected: async (__goscriptSelect1Result) => {
					let errs = __goscriptSelect1Result.value
					if ($.sliceLen(errs) == 0) {
						return true
					}
					// Keep the errors from the last ended condition, so that they can be copied to t if timeout is reached.
					lastFinishedTickErrs = errs
					__goscriptShadow15 = (ticker$ as time.Ticker).C
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Never(t: TestingT | null, condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	using __defer = new $.DisposableStack()
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let ch: $.Channel<boolean> | null = $.makeChannel<boolean>(1, false, "both")

	let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(waitFor)
	__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })

	let ticker: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker(tick)
	let ticker$: time.Ticker = ticker == null ? $.pointerTarget<time.Ticker>(ticker) : (ticker as any).__isVarRef === true ? (ticker as any).value : (ticker as any).__goValue === undefined ? (ticker as any) : $.pointerTarget<time.Ticker>(ticker)
	__defer.defer(() => { time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>(ticker)) })

	for (let __goscriptShadow16: $.Channel<time.Time> | null = (ticker$ as time.Ticker).C; ; ) {
		const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
				onSelected: async (__goscriptSelect2Result) => {
					return true
				}
			},
			{
				id: 1,
				isSend: false,
				channel: __goscriptShadow16,
				onSelected: async (__goscriptSelect2Result) => {
					__goscriptShadow16 = null
					queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
						await $.chanSend(ch, (__goscriptAwait = condition!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					})() })
				}
			},
			{
				id: 2,
				isSend: false,
				channel: ch,
				onSelected: async (__goscriptSelect2Result) => {
					let v = __goscriptSelect2Result.value
					if (v) {
						return await Fail(t, "Condition satisfied", msgAndArgs)
					}
					__goscriptShadow16 = (ticker$ as time.Ticker).C
				}
			}
		], false)
		if (__goscriptSelect2HasReturn) {
			return __goscriptSelect2Value
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function ErrorIs(t: TestingT | null, err: $.GoError, target: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (errors2.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(target)!)) {
		return true
	}

	let expectedText: string = ""
	if (target != null) {
		expectedText = (__goscriptAwait = (target !== null && (target as any).__isVarRef !== true && (target as any).__goValue === undefined ? (target as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(target)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let chain = await buildErrorChainString(err)

	return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Target error should be in err chain:\n", "expected: %q\n")), "in chain: %s"), expectedText, chain), msgAndArgs)
}

export async function NotErrorIs(t: TestingT | null, err: $.GoError, target: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (!errors2.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(target)!)) {
		return true
	}

	let expectedText: string = ""
	if (target != null) {
		expectedText = (__goscriptAwait = (target !== null && (target as any).__isVarRef !== true && (target as any).__goValue === undefined ? (target as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(target)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let chain = await buildErrorChainString(err)

	return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Target error should not be in err chain:\n", "found: %q\n")), "in chain: %s"), expectedText, chain), msgAndArgs)
}

export async function ErrorAs(t: TestingT | null, err: $.GoError, target: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<tHelper, null>) : $.pointerValue<Exclude<tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if (errors2.As($.pointerValueOrNil(err)!, target)) {
		return true
	}

	let chain = await buildErrorChainString(err)

	return Fail(t, await fmt.Sprintf($.concatString(($.concatString("Should be in error chain:\n", "expected: %q\n")), "in chain: %s"), target, chain), msgAndArgs)
}

export async function buildErrorChainString(err: $.GoError): globalThis.Promise<string> {
	if (err == null) {
		return ""
	}

	let e: $.GoError = errors2.Unwrap($.pointerValueOrNil(err)!)
	let chain = await fmt.Sprintf("%q", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	while (e != null) {
		chain = $.concatString(chain, await fmt.Sprintf("\n\t%q", (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(e)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		e = errors2.Unwrap($.pointerValueOrNil(e)!)
	}
	return chain
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
