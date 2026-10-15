// Generated file based on observability.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"
import "@goscript/os/index.js"

export const envObservabilityConfig: string = "GRPC_GCP_OBSERVABILITY_CONFIG"

export const envObservabilityConfigFile: string = "GRPC_GCP_OBSERVABILITY_CONFIG_FILE"

export let ObservabilityConfig: string = os.Getenv("GRPC_GCP_OBSERVABILITY_CONFIG")

export function __goscript_set_ObservabilityConfig(__goscriptValue: string): void {
	ObservabilityConfig = __goscriptValue
}

export let ObservabilityConfigFile: string = os.Getenv("GRPC_GCP_OBSERVABILITY_CONFIG_FILE")

export function __goscript_set_ObservabilityConfigFile(__goscriptValue: string): void {
	ObservabilityConfigFile = __goscriptValue
}
