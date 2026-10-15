// Generated file based on rand.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fnv from "@goscript/hash/fnv/index.js"

import * as os from "@goscript/os/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as fs from "@goscript/io/fs/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/hash/fnv/index.js"
import "@goscript/os/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/io/fs/index.js"

export function Disable(): void {
	randSeed = 0n
}

export function Bool(): boolean {
	return ($.uint64Mod(randSeed, 2n)) == 1n
}

export function Intn(n: number): number {
	if (n <= 0) {
		$.panic("must be positive")
	}
	return $.int($.uint64Mod(randSeed, $.uint64(n)))
}

export let randSeed: bigint = await binaryHash()

export function __goscript_set_randSeed(__goscriptValue: bigint): void {
	randSeed = __goscriptValue
}

export async function binaryHash(): globalThis.Promise<bigint> {
	await using __defer = new $.AsyncDisposableStack()
	// Open the Go binary.
	let [s, err] = os.Executable()
	if (err != null) {
		return 0n
	}
	let __goscriptTuple0: any = await os.Open(s)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return 0n
	}
	__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

	// Hash the size and several samples of the Go binary.
	const numSamples: number = 8
	let buf: Uint8Array = $.arrayValue(new Uint8Array(64))
	let h = fnv.New64()
	let __goscriptTuple1: any = await os.File.prototype.Stat.call($.pointerValue<os.File>(f))
	let fi = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return 0n
	}
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint64($.goSlice(buf, undefined, 8), $.uint64((__goscriptAwait = (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? (fi as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(fi)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash64, null>) : $.pointerValue<Exclude<hash.Hash64, null>>(h)).Write($.goSlice(buf, undefined, 8))
	for (let i = 0n; i < 8n; i++) {
		{
			let [, __goscriptShadow0] = await os.File.prototype.ReadAt.call($.pointerValue<os.File>(f), $.goSlice(buf, undefined, undefined), $.int64Div(($.int64Mul(i, (__goscriptAwait = (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? (fi as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(fi)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), 8n))
			if (__goscriptShadow0 != null) {
				return 0n
			}
		}
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash64, null>) : $.pointerValue<Exclude<hash.Hash64, null>>(h)).Write($.goSlice(buf, undefined, undefined))
	}
	return (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash64, null>) : $.pointerValue<Exclude<hash.Hash64, null>>(h)).Sum64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptAwait: any
