// Generated file based on ioutil.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as os from "@goscript/os/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/io/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/os/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"

export async function ReadAll(r: io.Reader | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return io.ReadAll($.pointerValueOrNil(r)!)
}

export async function ReadFile(filename: string): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return os.ReadFile(filename)
}

export async function WriteFile(filename: string, data: $.Slice<number>, perm: fs.FileMode): globalThis.Promise<$.GoError> {
	return os.WriteFile(filename, data, perm)
}

export async function ReadDir(dirname: string): globalThis.Promise<[$.Slice<fs.FileInfo | null>, $.GoError]> {
	let __goscriptTuple0: any = await os.Open(dirname)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple1: any = await os.File.prototype.Readdir.call($.pointerValue<os.File>(f), -1)
	let list: $.Slice<os.FileInfo | null> = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	await os.File.prototype.Close.call($.pointerValue<os.File>(f))
	if (err != null) {
		return [null, err]
	}
	await slices.SortFunc(list, $.functionValue(async (a: os.FileInfo | null, b: os.FileInfo | null): globalThis.Promise<number> => {
		return strings.Compare((__goscriptAwait = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? (a as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(a)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(b)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}, ({ kind: $.TypeKind.Function, params: ["fs.FileInfo", "fs.FileInfo"], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)))
	return [list, null]
}

export function NopCloser(r: io.Reader | null): io.ReadCloser | null {
	return io.NopCloser($.pointerValueOrNil(r)!)
}

export let Discard: io.Writer | null = io.Discard

export function __goscript_set_Discard(__goscriptValue: io.Writer | null): void {
	Discard = __goscriptValue
}

var __goscriptAwait: any
