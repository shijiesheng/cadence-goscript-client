// Generated file based on xds.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"
import "@goscript/os/index.js"

export const XDSBootstrapFileNameEnv: string = "GRPC_XDS_BOOTSTRAP"

export const XDSBootstrapFileContentEnv: string = "GRPC_XDS_BOOTSTRAP_CONFIG"

export let XDSBootstrapFileName: string = os.Getenv("GRPC_XDS_BOOTSTRAP")

export function __goscript_set_XDSBootstrapFileName(__goscriptValue: string): void {
	XDSBootstrapFileName = __goscriptValue
}

export let XDSBootstrapFileContent: string = os.Getenv("GRPC_XDS_BOOTSTRAP_CONFIG")

export function __goscript_set_XDSBootstrapFileContent(__goscriptValue: string): void {
	XDSBootstrapFileContent = __goscriptValue
}

export let C2PResolverTestOnlyTrafficDirectorURI: string = os.Getenv("GRPC_TEST_ONLY_GOOGLE_C2P_RESOLVER_TRAFFIC_DIRECTOR_URI")

export function __goscript_set_C2PResolverTestOnlyTrafficDirectorURI(__goscriptValue: string): void {
	C2PResolverTestOnlyTrafficDirectorURI = __goscriptValue
}
