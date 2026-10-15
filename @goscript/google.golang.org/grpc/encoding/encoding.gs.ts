// Generated file based on encoding.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

$.registerTypePackagePath("google.golang.org/grpc/encoding", ["encoding.Compressor", "encoding.Codec"])

export type Compressor = {
	Compress(w: io.Writer | null): [io.WriteCloser | null, $.GoError]
	Decompress(r: io.Reader | null): [io.Reader | null, $.GoError]
	Name(): string
}

$.registerInterfaceType(
	"encoding.Compressor",
	null,
	[$.methodSignature("Compress", [["w", "io.Writer"]], ["io.WriteCloser", "error"]), $.methodSignature("Decompress", [["r", "io.Reader"]], ["io.Reader", "error"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Codec = {
	Marshal(v: any): [$.Slice<number>, $.GoError]
	Name(): string
	Unmarshal(data: $.Slice<number>, v: any): $.GoError
}

$.registerInterfaceType(
	"encoding.Codec",
	null,
	[$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])]
);

export const Identity: string = "identity"

export let registeredCompressor: globalThis.Map<string, Compressor | null> | null = $.makeMap<string, Compressor | null>()

export function __goscript_set_registeredCompressor(__goscriptValue: globalThis.Map<string, Compressor | null> | null): void {
	registeredCompressor = __goscriptValue
}

export async function RegisterCompressor(c: Compressor | null): globalThis.Promise<void> {
	$.mapSet(registeredCompressor, (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<Compressor, null>) : $.pointerValue<Exclude<Compressor, null>>(c)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), c)
	if (!grpcutil.IsCompressorNameRegistered((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<Compressor, null>) : $.pointerValue<Exclude<Compressor, null>>(c)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		grpcutil.__goscript_set_RegisteredCompressorNames($.appendOne(grpcutil.RegisteredCompressorNames, (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<Compressor, null>) : $.pointerValue<Exclude<Compressor, null>>(c)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
}

export function GetCompressor(name: string): Compressor | null {
	return $.mapGet<string, Compressor | null, Compressor | null>(registeredCompressor, name, null)[0]
}

export let registeredCodecs: globalThis.Map<string, any> | null = $.makeMap<string, any>()

export function __goscript_set_registeredCodecs(__goscriptValue: globalThis.Map<string, any> | null): void {
	registeredCodecs = __goscriptValue
}

export async function RegisterCodec(codec: Codec | null): globalThis.Promise<void> {
	if (codec == null) {
		$.panic("cannot register a nil Codec")
	}
	if ($.stringEqual((__goscriptAwait = (codec !== null && (codec as any).__isVarRef !== true && (codec as any).__goValue === undefined ? (codec as Exclude<Codec, null>) : $.pointerValue<Exclude<Codec, null>>(codec)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "")) {
		$.panic("cannot register Codec with empty string result for Name()")
	}
	let contentSubtype = strings.ToLower((__goscriptAwait = (codec !== null && (codec as any).__isVarRef !== true && (codec as any).__goValue === undefined ? (codec as Exclude<Codec, null>) : $.pointerValue<Exclude<Codec, null>>(codec)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	$.mapSet(registeredCodecs, contentSubtype, (codec as any))
}

export function GetCodec(contentSubtype: string): Codec | null {
	let [c, ] = $.typeAssertTuple<Codec | null>($.mapGet<string, any, any>(registeredCodecs, contentSubtype, null)[0], "encoding.Codec")
	return c
}

var __goscriptAwait: any
