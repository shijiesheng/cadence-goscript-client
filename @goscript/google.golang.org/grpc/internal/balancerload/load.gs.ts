// Generated file based on load.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/balancerload", ["balancerload.Parser"])

export type Parser = {
	Parse(md: metadata.MD): any
}

$.registerInterfaceType(
	"balancerload.Parser",
	null,
	[$.methodSignature("Parse", [["md", "metadata.MD"]], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

export let parser: Parser | null = null! as Parser | null

export function __goscript_set_parser(__goscriptValue: Parser | null): void {
	parser = __goscriptValue
}

export function SetParser(lr: Parser | null): void {
	parser = lr
}

export async function Parse(md: metadata.MD): globalThis.Promise<any> {
	if (parser == null) {
		return null
	}
	return (parser !== null && (parser as any).__isVarRef !== true && (parser as any).__goValue === undefined ? (parser as Exclude<Parser, null>) : $.pointerValue<Exclude<Parser, null>>(parser)).Parse(md)
}

var __goscriptAwait: any
