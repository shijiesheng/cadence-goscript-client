// Generated file based on lib_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/strconv/index.js"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.Sizer", "proto.ProtoSizer"])

export type Sizer = {
	Size(): number | globalThis.Promise<number>
}

$.registerInterfaceType(
	"proto.Sizer",
	null,
	[$.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type ProtoSizer = {
	ProtoSize(): number
}

$.registerInterfaceType(
	"proto.ProtoSizer",
	null,
	[$.methodSignature("ProtoSize", [], [/* @__PURE__ */ $.basicType("int")])]
);

export async function MarshalJSONEnum(m: globalThis.Map<number, string> | null, value: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let [s, ok] = $.mapGet<number, string, string>(m, value, "")
	if (!ok) {
		s = strconv.Itoa($.int(value))
	}
	return json.Marshal(s)
}
