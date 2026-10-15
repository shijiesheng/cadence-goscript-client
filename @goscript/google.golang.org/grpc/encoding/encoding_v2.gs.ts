// Generated file based on encoding_v2.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as __goscript_encoding from "./encoding.gs.ts"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "./encoding.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/encoding", ["encoding.CodecV2"])

export type CodecV2 = {
	Marshal(v: any): [mem.BufferSlice, $.GoError] | globalThis.Promise<[mem.BufferSlice, $.GoError]>
	Name(): string
	Unmarshal(data: mem.BufferSlice, v: any): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"encoding.CodecV2",
	null,
	[$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["out", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["err", "error"]]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])]
);

export async function RegisterCodecV2(codec: CodecV2 | null): globalThis.Promise<void> {
	if (codec == null) {
		$.panic("cannot register a nil CodecV2")
	}
	if ($.stringEqual((__goscriptAwait = (codec !== null && (codec as any).__isVarRef !== true && (codec as any).__goValue === undefined ? (codec as Exclude<CodecV2, null>) : $.pointerValue<Exclude<CodecV2, null>>(codec)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "")) {
		$.panic("cannot register CodecV2 with empty string result for Name()")
	}
	let contentSubtype = strings.ToLower((__goscriptAwait = (codec !== null && (codec as any).__isVarRef !== true && (codec as any).__goValue === undefined ? (codec as Exclude<CodecV2, null>) : $.pointerValue<Exclude<CodecV2, null>>(codec)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	$.mapSet(__goscript_encoding.registeredCodecs, contentSubtype, (codec as any))
}

export function GetCodecV2(contentSubtype: string): CodecV2 | null {
	let [c, ] = $.typeAssertTuple<CodecV2 | null>($.mapGet<string, any, any>(__goscript_encoding.registeredCodecs, contentSubtype, null)[0], "encoding.CodecV2")
	return c
}

var __goscriptAwait: any
