// Generated file based on setter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_instructions from "./instructions.gs.ts"

$.registerTypePackagePath("golang.org/x/net/bpf", ["bpf.Setter"])

export type Setter = {
	SetBPF(filter: $.Slice<__goscript_instructions.RawInstruction>): $.GoError
}

$.registerInterfaceType(
	"bpf.Setter",
	null,
	[$.methodSignature("SetBPF", [["filter", /* @__PURE__ */ $.sliceType("bpf.RawInstruction")]], ["error"])]
);
