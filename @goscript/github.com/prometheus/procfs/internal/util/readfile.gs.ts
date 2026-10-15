// Generated file based on readfile.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as os from "@goscript/os/index.js"
import "@goscript/io/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/os/index.js"

export async function ReadFileNoStat(filename: string): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	const maxBufferSize: number = 524288

	let __goscriptTuple0: any = await os.Open(filename)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

	let reader = io.LimitReader($.pointerValueOrNil($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, 524288n)
	return await ioutil.ReadAll(reader)
}
