// Generated file based on dispatcher_introspection.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as tchannel from "@goscript/github.com/uber/tchannel-go/index.js"

import * as thriftrw from "@goscript/go.uber.org/thriftrw/version/index.js"

import * as xintrospection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/internal/introspection/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as context from "@goscript/context/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_dispatcher from "./dispatcher.gs.ts"

import type * as __goscript_dispatcher_startup from "./dispatcher_startup.gs.ts"

import * as __goscript_version from "./version.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/github.com/uber/tchannel-go/index.js"
import "@goscript/go.uber.org/thriftrw/version/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/go.uber.org/yarpc/internal/introspection/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/sync/index.js"
import "./dispatcher.gs.ts"
import "./version.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.outboundStatuses"])

export type outboundStatuses = $.Slice<xintrospection.OutboundStatus>

$.registerNamedType("yarpc.outboundStatuses", /* @__PURE__ */ $.sliceType("introspection.OutboundStatus"));

$.registerNamedValueType(
	"yarpc.outboundStatuses",
	{Len: (receiver: any, ...args: any[]) => (outboundStatuses_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (outboundStatuses_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (outboundStatuses_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*yarpc.outboundStatuses",
	{Len: (receiver: any, ...args: any[]) => (outboundStatuses_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (outboundStatuses_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (outboundStatuses_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export var PackageVersions: $.Slice<introspection.PackageVersion>

export function __goscript_init_PackageVersions(): void {
	if (((PackageVersions) as any) === undefined) {
		PackageVersions = $.arrayToSlice<introspection.PackageVersion>([new introspection.PackageVersion({Name: "yarpc", Version: "1.0.0-dev"}, true), new introspection.PackageVersion({Name: "tchannel", Version: tchannel.VersionInfo}, true), new introspection.PackageVersion({Name: "thriftrw", Version: thriftrw.Version}, true), new introspection.PackageVersion({Name: "grpc-go", Version: grpc.Version}, true), (() => { const __goscriptLiteralField0 = runtime.Version(); return new introspection.PackageVersion({Name: "go", Version: __goscriptLiteralField0}, true) })()])
	}
}

export function __goscript_get_PackageVersions(): $.Slice<introspection.PackageVersion> {
	if (((PackageVersions) as any) === undefined) {
		__goscript_init_PackageVersions()
	}
	return PackageVersions
}

export function __goscript_set_PackageVersions(__goscriptValue: $.Slice<introspection.PackageVersion>): void {
	PackageVersions = __goscriptValue
}

export function outboundStatuses_Len(o: outboundStatuses): number {
	return $.sliceLen((o as outboundStatuses))
}

export function outboundStatuses_Less(o: outboundStatuses, i: number, j: number): boolean {
	if ($.stringEqual($.arrayIndex(o!, i).OutboundKey, $.arrayIndex(o!, j).OutboundKey)) {
		return $.stringCompare($.arrayIndex(o!, i).RPCType, $.arrayIndex(o!, j).RPCType) < 0
	}

	return $.stringCompare($.arrayIndex(o!, i).OutboundKey, $.arrayIndex(o!, j).OutboundKey) < 0
}

export function outboundStatuses_Swap(o: outboundStatuses, i: number, j: number): void {
	let __goscriptAssign0_0: xintrospection.OutboundStatus = ($.arrayIndex(o!, j)).clone()
	let __goscriptAssign0_1: xintrospection.OutboundStatus = ($.arrayIndex(o!, i)).clone()
	$.assignStruct($.sliceElems(o!)[$.sliceSlot(o!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(o!)[$.sliceSlot(o!, j)], __goscriptAssign0_1)
}
