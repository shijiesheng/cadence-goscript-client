// Generated file based on binarylog_testutil.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as grpc_binarylog_v1 from "@goscript/google.golang.org/grpc/binarylog/grpc_binarylog_v1/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import type * as net from "@goscript/net/index.js"

import type * as __goscript_binarylog from "./binarylog.gs.ts"

import * as __goscript_env_config from "./env_config.gs.ts"

import * as __goscript_method_logger from "./method_logger.gs.ts"
import "./env_config.gs.ts"
import "./method_logger.gs.ts"

export var AllLogger: __goscript_binarylog.Logger | null

export async function __goscript_init_AllLogger(): globalThis.Promise<void> {
	if (((AllLogger) as any) === undefined) {
		AllLogger = await __goscript_env_config.NewLoggerFromConfigString("*")
	}
}

export function __goscript_get_AllLogger(): __goscript_binarylog.Logger | null {
	if (((AllLogger) as any) === undefined) {
		throw new globalThis.Error("goscript package variable AllLogger read before initialization")
	}
	return AllLogger
}

export function __goscript_set_AllLogger(__goscriptValue: __goscript_binarylog.Logger | null): void {
	AllLogger = __goscriptValue
}

export var MdToMetadataProto: ((md: metadata.MD) => grpc_binarylog_v1.Metadata | $.VarRef<grpc_binarylog_v1.Metadata> | null | globalThis.Promise<grpc_binarylog_v1.Metadata | $.VarRef<grpc_binarylog_v1.Metadata> | null>) | null

export function __goscript_init_MdToMetadataProto(): void {
	if (((MdToMetadataProto) as any) === undefined) {
		MdToMetadataProto = __goscript_method_logger.mdToMetadataProto
	}
}

export function __goscript_get_MdToMetadataProto(): ((md: metadata.MD) => grpc_binarylog_v1.Metadata | $.VarRef<grpc_binarylog_v1.Metadata> | null | globalThis.Promise<grpc_binarylog_v1.Metadata | $.VarRef<grpc_binarylog_v1.Metadata> | null>) | null {
	if (((MdToMetadataProto) as any) === undefined) {
		__goscript_init_MdToMetadataProto()
	}
	return MdToMetadataProto
}

export function __goscript_set_MdToMetadataProto(__goscriptValue: ((md: metadata.MD) => grpc_binarylog_v1.Metadata | $.VarRef<grpc_binarylog_v1.Metadata> | null | globalThis.Promise<grpc_binarylog_v1.Metadata | $.VarRef<grpc_binarylog_v1.Metadata> | null>) | null): void {
	MdToMetadataProto = __goscriptValue
}

export var AddrToProto: ((addr: net.Addr | null) => grpc_binarylog_v1.Address | $.VarRef<grpc_binarylog_v1.Address> | null | globalThis.Promise<grpc_binarylog_v1.Address | $.VarRef<grpc_binarylog_v1.Address> | null>) | null

export function __goscript_init_AddrToProto(): void {
	if (((AddrToProto) as any) === undefined) {
		AddrToProto = __goscript_method_logger.addrToProto
	}
}

export function __goscript_get_AddrToProto(): ((addr: net.Addr | null) => grpc_binarylog_v1.Address | $.VarRef<grpc_binarylog_v1.Address> | null | globalThis.Promise<grpc_binarylog_v1.Address | $.VarRef<grpc_binarylog_v1.Address> | null>) | null {
	if (((AddrToProto) as any) === undefined) {
		__goscript_init_AddrToProto()
	}
	return AddrToProto
}

export function __goscript_set_AddrToProto(__goscriptValue: ((addr: net.Addr | null) => grpc_binarylog_v1.Address | $.VarRef<grpc_binarylog_v1.Address> | null | globalThis.Promise<grpc_binarylog_v1.Address | $.VarRef<grpc_binarylog_v1.Address> | null>) | null): void {
	AddrToProto = __goscriptValue
}
