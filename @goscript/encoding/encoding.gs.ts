// Generated file based on encoding.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

export type BinaryMarshaler = {
	MarshalBinary(): [$.Slice<number>, $.GoError]
}

$.registerInterfaceType(
	"encoding.BinaryMarshaler",
	null,
	[$.methodSignature("MarshalBinary", [], [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])]
);

export type BinaryUnmarshaler = {
	UnmarshalBinary(data: $.Slice<number>): $.GoError
}

$.registerInterfaceType(
	"encoding.BinaryUnmarshaler",
	null,
	[$.methodSignature("UnmarshalBinary", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type BinaryAppender = {
	AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError]
}

$.registerInterfaceType(
	"encoding.BinaryAppender",
	null,
	[$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);

export type TextMarshaler = {
	MarshalText(): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"encoding.TextMarshaler",
	null,
	[$.methodSignature("MarshalText", [], [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])]
);

export type TextUnmarshaler = {
	UnmarshalText(text: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"encoding.TextUnmarshaler",
	null,
	[$.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type TextAppender = {
	AppendText(b: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"encoding.TextAppender",
	null,
	[$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"])]
);
