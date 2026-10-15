// Generated file based on func.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as url from "@goscript/net/url/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/url/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("go.uber.org/dig/internal/digreflect", ["digreflect.Func"])

export class Func {
	// Name of the function.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Name of the package in which this function is defined.
	public get Package(): string {
		return this._fields.Package
	}

	public set Package(value: string) {
		this._fields.Package = value
	}

	// Path to the file in which this function is defined.
	public get File(): string {
		return this._fields.File
	}

	public set File(value: string) {
		this._fields.File = value
	}

	// Line number in the file at which this function is defined.
	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public _fields: {
		Name: string
		Package: string
		File: string
		Line: number
	}

	constructor(init?: Partial<{Name?: string, Package?: string, File?: string, Line?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Package: init?.Package ?? ("" as string),
			File: init?.File ?? ("" as string),
			Line: init?.Line ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Func {
		return new Func(this, true)
	}

	public __goscriptAssign(source: Func): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Package = values.Package
		target.File = values.File
		target.Line = values.Line
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const f: Func | $.VarRef<Func> | null = this;
		const f$: Func = f == null ? $.pointerTarget<Func>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Func>(f)
		if ((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(w)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (c == 118)) {
			// "path/to/package".MyFunction
			// 	path/to/file.go:42
			await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "%q.%v", (f$ as Func).Package, (f$ as Func).Name)
			await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "\n\t%v:%v", (f$ as Func).File, $.basicInterfaceValue((f$ as Func).Line, "int"))
		} else {
			// "path/to/package".MyFunction (path/to/file.go:42)
			await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "%q.%v (%v:%v)", (f$ as Func).Package, (f$ as Func).Name, (f$ as Func).File, $.basicInterfaceValue((f$ as Func).Line, "int"))
		}
	}

	public async String(): globalThis.Promise<string> {
		const f: Func | $.VarRef<Func> | null = this;
		return fmt.Sprint($.interfaceValue(f, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
	}

	static __typeInfo = $.registerStructType(
		"digreflect.Func",
		() => new Func(),
		() => [$.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Func,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Package", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("File", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 48, true)]
	)
}

export const _vendor: string = "/vendor/"

export function InspectFunc(_function: any): Func | $.VarRef<Func> | null {
	let fptr = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_function))).Pointer()
	return InspectFuncPC(fptr)
}

export function InspectFuncPC(pc: number): Func | $.VarRef<Func> | null {
	let f: runtime.Func | $.VarRef<runtime.Func> | null = runtime.FuncForPC(pc)
	if (f == null) {
		return null
	}
	let [pkgName, funcName] = splitFuncName(runtime.Func.prototype.Name.call($.pointerValueOrNil(f)))
	let [fileName, lineNum] = runtime.Func.prototype.FileLine.call($.pointerValue<runtime.Func>(f), pc)
	return new Func({Name: funcName, Package: pkgName, File: fileName, Line: lineNum})
}

export function splitFuncName(_function: string): [string, string] {
	let pname: string = ""
	let fname: string = ""
	if ($.stringLen(_function) == 0) {
		return [pname, fname]
	}

	// We have something like "path.to/my/pkg.MyFunction". If the function is
	// a closure, it is something like, "path.to/my/pkg.MyFunction.func1".

	let idx = 0

	// Everything up to the first "." after the last "/" is the package name.
	// Everything after the "." is the full function name.
	{
		let i = strings.LastIndex(_function, "/")
		if (i >= 0) {
			idx = i
		}
	}
	{
		let i = strings.Index($.sliceStringOrBytes(_function, idx, undefined), ".")
		if (i >= 0) {
			idx = idx + (i)
		}
	}
	let __goscriptAssign0_0: string = $.sliceStringOrBytes(_function, undefined, idx)
	let __goscriptAssign0_1: string = $.sliceStringOrBytes(_function, idx + 1, undefined)
	pname = __goscriptAssign0_0
	fname = __goscriptAssign0_1

	// The package may be vendored.
	{
		let i: number = strings.Index(pname, "/vendor/")
		if (i > 0) {
			pname = $.sliceStringOrBytes(pname, i + 8, undefined)
		}
	}

	// Package names are URL-encoded to avoid ambiguity in the case where the
	// package name contains ".git". Otherwise, "foo/bar.git.MyFunction" would
	// mean that "git" is the top-level function and "MyFunction" is embedded
	// inside it.
	{
		let [unescaped, err] = url.QueryUnescape(pname)
		if (err == null) {
			pname = unescaped
		}
	}

	return [pname, fname]
}

var __goscriptAwait: any
