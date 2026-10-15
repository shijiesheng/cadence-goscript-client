// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.Flusher", "thrift.ContextFlusher", "thrift.ReadSizeProvider", "thrift.TTransport", "thrift.stringWriter", "thrift.TRichTransport"])

export type Flusher = {
	Flush(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"thrift.Flusher",
	null,
	[$.methodSignature("Flush", [], [["err", "error"]])]
);

export type ContextFlusher = {
	Flush(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"thrift.ContextFlusher",
	null,
	[$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]])]
);

export type ReadSizeProvider = {
	RemainingBytes(): bigint | globalThis.Promise<bigint>
}

$.registerInterfaceType(
	"thrift.ReadSizeProvider",
	null,
	[$.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]])]
);

export type TTransport = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Flush(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	IsOpen(): boolean | globalThis.Promise<boolean>
	Open(): $.GoError | globalThis.Promise<$.GoError>
	Read(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	RemainingBytes(): bigint | globalThis.Promise<bigint>
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"thrift.TTransport",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]]), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Open", [], ["error"]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type stringWriter = {
	WriteString(s: string): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"thrift.stringWriter",
	null,
	[$.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type TRichTransport = {
	Flush(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	Read(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadByte(): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	RemainingBytes(): bigint | globalThis.Promise<bigint>
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	WriteByte(c: number): $.GoError | globalThis.Promise<$.GoError>
	WriteString(s: string): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"thrift.TRichTransport",
	null,
	[$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"]), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export let errTransportInterrupted: $.GoError = errors.New("Transport Interrupted")

export function __goscript_set_errTransportInterrupted(__goscriptValue: $.GoError): void {
	errTransportInterrupted = __goscriptValue
}
