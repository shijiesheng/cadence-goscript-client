// Generated file based on loggerv2.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import type * as __goscript_component from "./component.gs.ts"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/grpclog", ["grpclog.LoggerV2", "grpclog.DepthLoggerV2"])

export type LoggerV2 = {
	Error(args: $.Slice<any>): void
	Errorf(format: string, args: $.Slice<any>): void
	Errorln(args: $.Slice<any>): void
	Fatal(args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
	Fatalln(args: $.Slice<any>): void
	Info(args: $.Slice<any>): void
	Infof(format: string, args: $.Slice<any>): void
	Infoln(args: $.Slice<any>): void
	V(l: number): boolean | globalThis.Promise<boolean>
	Warning(args: $.Slice<any>): void
	Warningf(format: string, args: $.Slice<any>): void
	Warningln(args: $.Slice<any>): void
}

$.registerInterfaceType(
	"grpclog.LoggerV2",
	null,
	[$.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("V", [["l", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Warning", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export type DepthLoggerV2 = {
	Error(args: $.Slice<any>): void
	ErrorDepth(depth: number, args: $.Slice<any>): void
	Errorf(format: string, args: $.Slice<any>): void
	Errorln(args: $.Slice<any>): void
	Fatal(args: $.Slice<any>): void
	FatalDepth(depth: number, args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
	Fatalln(args: $.Slice<any>): void
	Info(args: $.Slice<any>): void
	InfoDepth(depth: number, args: $.Slice<any>): void
	Infof(format: string, args: $.Slice<any>): void
	Infoln(args: $.Slice<any>): void
	V(l: number): boolean | globalThis.Promise<boolean>
	Warning(args: $.Slice<any>): void
	WarningDepth(depth: number, args: $.Slice<any>): void
	Warningf(format: string, args: $.Slice<any>): void
	Warningln(args: $.Slice<any>): void
}

$.registerInterfaceType(
	"grpclog.DepthLoggerV2",
	null,
	[$.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("ErrorDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("FatalDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("InfoDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("V", [["l", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Warning", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("WarningDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export function SetLoggerV2(l: LoggerV2 | null): void {
	{
		let [, ok] = $.typeAssertTuple<__goscript_component.componentData | $.VarRef<__goscript_component.componentData> | null>(l, /* @__PURE__ */ $.pointerType("grpclog.componentData"))
		if (ok) {
			$.panic("cannot use component logger as grpclog logger")
		}
	}
	internal.__goscript_set_LoggerV2Impl((l as internal.LoggerV2 | null))
	let __goscriptTuple0: any = $.typeAssertTuple<internal.DepthLoggerV2 | null>(l, "internal.DepthLoggerV2")
	internal.__goscript_set_DepthLoggerV2Impl(__goscriptTuple0[0])
}

export async function NewLoggerV2(infoW: io.Writer | null, warningW: io.Writer | null, errorW: io.Writer | null): globalThis.Promise<LoggerV2 | null> {
	return (await internal.NewLoggerV2(infoW, warningW, errorW, new internal.LoggerV2Config(undefined, true)) as LoggerV2 | null)
}

export async function NewLoggerV2WithVerbosity(infoW: io.Writer | null, warningW: io.Writer | null, errorW: io.Writer | null, v: number): globalThis.Promise<LoggerV2 | null> {
	return (await internal.NewLoggerV2(infoW, warningW, errorW, new internal.LoggerV2Config({Verbosity: v}, true)) as LoggerV2 | null)
}

export async function newLoggerV2(): globalThis.Promise<LoggerV2 | null> {
	let errorW = io.Discard
	let warningW = io.Discard
	let infoW = io.Discard

	let logLevel = os.Getenv("GRPC_GO_LOG_SEVERITY_LEVEL")
	switch (logLevel) {
		case "":
		case "ERROR":
		case "error":
		{
			errorW = $.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File"))
			break
		}
		case "WARNING":
		case "warning":
		{
			warningW = $.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File"))
			break
		}
		case "INFO":
		case "info":
		{
			infoW = $.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File"))
			break
		}
	}

	let v: number = 0
	let vLevel = os.Getenv("GRPC_GO_LOG_VERBOSITY_LEVEL")
	{
		let [vl, err] = strconv.Atoi(vLevel)
		if (err == null) {
			v = vl
		}
	}

	let jsonFormat = strings.EqualFold(os.Getenv("GRPC_GO_LOG_FORMATTER"), "json")

	return (await internal.NewLoggerV2(infoW, warningW, errorW, new internal.LoggerV2Config({Verbosity: v, FormatJSON: jsonFormat}, true)) as LoggerV2 | null)
}
