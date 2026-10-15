// Generated file based on logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/grpclog", ["grpclog.Logger"])

export type Logger = {
	Fatal(args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
	Fatalln(args: $.Slice<any>): void
	Print(args: $.Slice<any>): void
	Printf(format: string, args: $.Slice<any>): void
	Println(args: $.Slice<any>): void
}

$.registerInterfaceType(
	"grpclog.Logger",
	null,
	[$.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Print", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Println", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export function SetLogger(l: Logger | null): void {
	internal.__goscript_set_LoggerV2Impl($.interfaceValue<internal.LoggerV2 | null>(new internal.LoggerWrapper({Logger: (l as internal.Logger | null)}), "*internal.LoggerWrapper", /* @__PURE__ */ $.pointerType("internal.LoggerWrapper")))
}
