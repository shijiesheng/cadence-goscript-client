// Generated file based on helper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as os from "@goscript/os/index.js"

import * as path from "@goscript/path/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import type * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as __goscript_exec from "./exec.gs.ts"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_option from "./option.gs.ts"

import * as __goscript_template from "./template.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/os/index.js"
import "@goscript/path/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/text/template/parse/index.js"
import "./exec.gs.ts"
import "./funcs.gs.ts"
import "./option.gs.ts"
import "./template.gs.ts"

export function Must(t: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, err: $.GoError): __goscript_template.Template | $.VarRef<__goscript_template.Template> | null {
	if (err != null) {
		$.panic((err as any))
	}
	return t
}

export async function ParseFiles(filenames: $.Slice<string>): globalThis.Promise<[__goscript_template.Template | $.VarRef<__goscript_template.Template> | null, $.GoError]> {
	return parseFiles(null, readFileOS, filenames)
}

export async function parseFiles(t: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, readFile: ((_p0: string) => [string, $.Slice<number>, $.GoError] | globalThis.Promise<[string, $.Slice<number>, $.GoError]>) | null, filenames: $.Slice<string>): globalThis.Promise<[__goscript_template.Template | $.VarRef<__goscript_template.Template> | null, $.GoError]> {
	if ($.sliceLen(filenames) == 0) {
		// Not really a problem, but be consistent.
		return [null, fmt.Errorf("template: no files named in call to ParseFiles")]
	}
	for (let __goscriptRangeTarget0 = filenames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let filename = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let __goscriptTuple0: any = await readFile!(filename)
		let name = __goscriptTuple0[0]
		let b: $.Slice<number> = __goscriptTuple0[1]
		let err = __goscriptTuple0[2]
		if (err != null) {
			return [null, err]
		}
		let s = $.bytesToString(b)
		// First template becomes return value if not already defined,
		// and we use that one for subsequent New calls to associate
		// all the templates together. Also, if this file has the same name
		// as t, this file becomes the contents of t, so
		//  t, err := New(name).Funcs(xxx).ParseFiles(name)
		// works. Otherwise we create a new template associated with t.
		let tmpl: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null = null! as __goscript_template.Template | $.VarRef<__goscript_template.Template> | null
		if (t == null) {
			t = __goscript_template.New(name)
		}
		if ($.stringEqual(name, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as __goscript_template.Template).Name() : __goscript_template.Template.prototype.Name.call(t)))) {
			tmpl = t
		} else {
			tmpl = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as __goscript_template.Template).New(name) : __goscript_template.Template.prototype.New.call(t, name))
		}
		let __goscriptTuple1: any = await (tmpl !== null && (tmpl as any).__isVarRef !== true && (tmpl as any).__goValue === undefined ? ((tmpl as any) as __goscript_template.Template).Parse(s) : __goscript_template.Template.prototype.Parse.call(tmpl, s))
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
	}
	return [t, null]
}

export async function ParseGlob(pattern: string): globalThis.Promise<[__goscript_template.Template | $.VarRef<__goscript_template.Template> | null, $.GoError]> {
	return parseGlob(null, pattern)
}

export async function parseGlob(t: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, pattern: string): globalThis.Promise<[__goscript_template.Template | $.VarRef<__goscript_template.Template> | null, $.GoError]> {
	let __goscriptTuple2: any = filepath.Glob(pattern)
	let filenames: $.Slice<string> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	if ($.sliceLen(filenames) == 0) {
		return [null, fmt.Errorf("template: pattern matches no files: %#q", pattern)]
	}
	return parseFiles(t, readFileOS, filenames)
}

export async function ParseFS(fsys: fs.FS | null, patterns: $.Slice<string>): globalThis.Promise<[__goscript_template.Template | $.VarRef<__goscript_template.Template> | null, $.GoError]> {
	return parseFS(null, fsys, patterns)
}

export async function parseFS(t: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, fsys: fs.FS | null, patterns: $.Slice<string>): globalThis.Promise<[__goscript_template.Template | $.VarRef<__goscript_template.Template> | null, $.GoError]> {
	let filenames: $.Slice<string> = null! as $.Slice<string>
	for (let __goscriptRangeTarget1 = patterns, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let pattern = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		let __goscriptTuple3: any = await fs.Glob($.pointerValueOrNil(fsys)!, pattern)
		let list: $.Slice<string> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		if ($.sliceLen(list) == 0) {
			return [null, fmt.Errorf("template: pattern matches no files: %#q", pattern)]
		}
		filenames = $.appendSlice(filenames, list)
	}
	return parseFiles(t, readFileFS(fsys), filenames)
}

export async function readFileOS(file: string): globalThis.Promise<[string, $.Slice<number>, $.GoError]> {
	let name: string = ""
	let b: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	name = filepath.Base(file)
	let __goscriptTuple4: any = await os.ReadFile(file)
	b = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	return [name, b, err]
}

export function readFileFS(fsys: fs.FS | null): ((_p0: string) => [string, $.Slice<number>, $.GoError] | globalThis.Promise<[string, $.Slice<number>, $.GoError]>) | null {
	return $.functionValue(async (file: string): globalThis.Promise<[string, $.Slice<number>, $.GoError]> => {
		let name: string = ""
		let b: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		name = path.Base(file)
		let __goscriptTuple5: any = await fs.ReadFile($.pointerValueOrNil(fsys)!, file)
		b = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		return [name, b, err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}
