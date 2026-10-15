// Generated file based on writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import type * as url from "@goscript/net/url/index.js"

import type * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_sink from "./sink.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/sync/index.js"
import "./sink.gs.ts"

export async function Open(paths: $.Slice<string>): globalThis.Promise<[zapcore.WriteSyncer | null, (() => void) | null, $.GoError]> {
	let __goscriptTuple0: any = await open(paths)
	let writers: $.Slice<zapcore.WriteSyncer | null> = __goscriptTuple0[0]
	let closeAll: (() => void) | null = __goscriptTuple0[1]
	let err = __goscriptTuple0[2]
	if (err != null) {
		return [null, (null as (() => void) | null), err]
	}

	let writer = CombineWriteSyncers(writers)
	return [writer, closeAll, null]
}

export async function open(paths: $.Slice<string>): globalThis.Promise<[$.Slice<zapcore.WriteSyncer | null>, (() => void) | null, $.GoError]> {
	let writers: $.Slice<zapcore.WriteSyncer | null> = $.makeSlice<zapcore.WriteSyncer | null>(0, $.sliceLen(paths))
	let closers: $.Slice<io.Closer | null> = $.makeSlice<io.Closer | null>(0, $.sliceLen(paths))
	let closeAll: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
		for (let __goscriptRangeTarget0 = closers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as io.Closer | null)
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<io.Closer, null>) : $.pointerValue<Exclude<io.Closer, null>>(c)).Close()
		}
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))

	let openErr: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget1 = paths, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let path = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		let [sink, err] = await __goscript_sink.sinkRegistry.prototype.newSink.call(__goscript_sink._sinkRegistry, path)
		if (err != null) {
			openErr = multierr.Append(openErr, fmt.Errorf("open sink %q: %w", path, (err as any)))
			continue
		}
		writers = $.appendOne(writers, (sink as zapcore.WriteSyncer | null), $.appendZeros.nil)
		closers = $.appendOne(closers, (sink as io.Closer | null), $.appendZeros.nil)
	}
	if (openErr != null) {
		void (__goscriptAwait = closeAll!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, (null as (() => void) | null), openErr]
	}

	return [writers, closeAll, null]
}

export function CombineWriteSyncers(writers: $.Slice<zapcore.WriteSyncer | null>): zapcore.WriteSyncer | null {
	if ($.sliceLen(writers) == 0) {
		return zapcore.AddSync(io.Discard)
	}
	return zapcore.Lock(zapcore.NewMultiWriteSyncer(writers))
}

var __goscriptAwait: any
