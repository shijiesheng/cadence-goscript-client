// Generated file based on internal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal", ["internal.HealthChecker"])

export type HealthChecker = ((ctx: context.Context | null, newStream: ((_p0: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, setConnectivityState: ((_p0: connectivity.State, _p1: $.GoError) => void) | null, serviceName: string) => $.GoError | globalThis.Promise<$.GoError>) | null

export const CredsBundleModeFallback: string = "fallback"

export const CredsBundleModeBalancer: string = "balancer"

export const CredsBundleModeBackendFromBalancer: string = "backend-from-balancer"

export const RLSLoadBalancingPolicyName: string = "rls_experimental"

export let WithHealthCheckFunc: any = null! as any

export function __goscript_set_WithHealthCheckFunc(__goscriptValue: any): void {
	WithHealthCheckFunc = __goscriptValue
}

export let HealthCheckFunc: HealthChecker | null = null! as HealthChecker | null

export function __goscript_set_HealthCheckFunc(__goscriptValue: HealthChecker | null): void {
	HealthCheckFunc = __goscriptValue
}

export let BalancerUnregister: ((name: string) => void) | null = null! as ((name: string) => void) | null

export function __goscript_set_BalancerUnregister(__goscriptValue: ((name: string) => void) | null): void {
	BalancerUnregister = __goscriptValue
}

export let KeepaliveMinPingTime: time.Duration = 10000000000n

export function __goscript_set_KeepaliveMinPingTime(__goscriptValue: time.Duration): void {
	KeepaliveMinPingTime = __goscriptValue
}

export let KeepaliveMinServerPingTime: time.Duration = 1000000000n

export function __goscript_set_KeepaliveMinServerPingTime(__goscriptValue: time.Duration): void {
	KeepaliveMinServerPingTime = __goscriptValue
}

export let ParseServiceConfig: any = null! as any

export function __goscript_set_ParseServiceConfig(__goscriptValue: any): void {
	ParseServiceConfig = __goscriptValue
}

export let EqualServiceConfigForTesting: ((a: serviceconfig.Config | null, b: serviceconfig.Config | null) => boolean | globalThis.Promise<boolean>) | null = null! as ((a: serviceconfig.Config | null, b: serviceconfig.Config | null) => boolean | globalThis.Promise<boolean>) | null

export function __goscript_set_EqualServiceConfigForTesting(__goscriptValue: ((a: serviceconfig.Config | null, b: serviceconfig.Config | null) => boolean | globalThis.Promise<boolean>) | null): void {
	EqualServiceConfigForTesting = __goscriptValue
}

export let GetCertificateProviderBuilder: any = null! as any

export function __goscript_set_GetCertificateProviderBuilder(__goscriptValue: any): void {
	GetCertificateProviderBuilder = __goscriptValue
}

export let GetXDSHandshakeInfoForTesting: any = null! as any

export function __goscript_set_GetXDSHandshakeInfoForTesting(__goscriptValue: any): void {
	GetXDSHandshakeInfoForTesting = __goscriptValue
}

export let GetServerCredentials: any = null! as any

export function __goscript_set_GetServerCredentials(__goscriptValue: any): void {
	GetServerCredentials = __goscriptValue
}

export let CanonicalString: any = null! as any

export function __goscript_set_CanonicalString(__goscriptValue: any): void {
	CanonicalString = __goscriptValue
}

export let IsRegisteredMethod: any = null! as any

export function __goscript_set_IsRegisteredMethod(__goscriptValue: any): void {
	IsRegisteredMethod = __goscriptValue
}

export let ServerFromContext: any = null! as any

export function __goscript_set_ServerFromContext(__goscriptValue: any): void {
	ServerFromContext = __goscriptValue
}

export let AddGlobalServerOptions: any = null! as any

export function __goscript_set_AddGlobalServerOptions(__goscriptValue: any): void {
	AddGlobalServerOptions = __goscriptValue
}

export let ClearGlobalServerOptions: (() => void) | null = null! as (() => void) | null

export function __goscript_set_ClearGlobalServerOptions(__goscriptValue: (() => void) | null): void {
	ClearGlobalServerOptions = __goscriptValue
}

export let AddGlobalDialOptions: any = null! as any

export function __goscript_set_AddGlobalDialOptions(__goscriptValue: any): void {
	AddGlobalDialOptions = __goscriptValue
}

export let DisableGlobalDialOptions: any = null! as any

export function __goscript_set_DisableGlobalDialOptions(__goscriptValue: any): void {
	DisableGlobalDialOptions = __goscriptValue
}

export let ClearGlobalDialOptions: (() => void) | null = null! as (() => void) | null

export function __goscript_set_ClearGlobalDialOptions(__goscriptValue: (() => void) | null): void {
	ClearGlobalDialOptions = __goscriptValue
}

export let AddGlobalPerTargetDialOptions: any = null! as any

export function __goscript_set_AddGlobalPerTargetDialOptions(__goscriptValue: any): void {
	AddGlobalPerTargetDialOptions = __goscriptValue
}

export let ClearGlobalPerTargetDialOptions: (() => void) | null = null! as (() => void) | null

export function __goscript_set_ClearGlobalPerTargetDialOptions(__goscriptValue: (() => void) | null): void {
	ClearGlobalPerTargetDialOptions = __goscriptValue
}

export let JoinDialOptions: any = null! as any

export function __goscript_set_JoinDialOptions(__goscriptValue: any): void {
	JoinDialOptions = __goscriptValue
}

export let JoinServerOptions: any = null! as any

export function __goscript_set_JoinServerOptions(__goscriptValue: any): void {
	JoinServerOptions = __goscriptValue
}

export let WithBinaryLogger: any = null! as any

export function __goscript_set_WithBinaryLogger(__goscriptValue: any): void {
	WithBinaryLogger = __goscriptValue
}

export let BinaryLogger: any = null! as any

export function __goscript_set_BinaryLogger(__goscriptValue: any): void {
	BinaryLogger = __goscriptValue
}

export let SubscribeToConnectivityStateChanges: any = null! as any

export function __goscript_set_SubscribeToConnectivityStateChanges(__goscriptValue: any): void {
	SubscribeToConnectivityStateChanges = __goscriptValue
}

export let NewXDSResolverWithConfigForTesting: any = null! as any

export function __goscript_set_NewXDSResolverWithConfigForTesting(__goscriptValue: any): void {
	NewXDSResolverWithConfigForTesting = __goscriptValue
}

export let RegisterRLSClusterSpecifierPluginForTesting: (() => void) | null = null! as (() => void) | null

export function __goscript_set_RegisterRLSClusterSpecifierPluginForTesting(__goscriptValue: (() => void) | null): void {
	RegisterRLSClusterSpecifierPluginForTesting = __goscriptValue
}

export let UnregisterRLSClusterSpecifierPluginForTesting: (() => void) | null = null! as (() => void) | null

export function __goscript_set_UnregisterRLSClusterSpecifierPluginForTesting(__goscriptValue: (() => void) | null): void {
	UnregisterRLSClusterSpecifierPluginForTesting = __goscriptValue
}

export let RegisterRBACHTTPFilterForTesting: (() => void) | null = null! as (() => void) | null

export function __goscript_set_RegisterRBACHTTPFilterForTesting(__goscriptValue: (() => void) | null): void {
	RegisterRBACHTTPFilterForTesting = __goscriptValue
}

export let UnregisterRBACHTTPFilterForTesting: (() => void) | null = null! as (() => void) | null

export function __goscript_set_UnregisterRBACHTTPFilterForTesting(__goscriptValue: (() => void) | null): void {
	UnregisterRBACHTTPFilterForTesting = __goscriptValue
}

export let ORCAAllowAnyMinReportingInterval: any = null! as any

export function __goscript_set_ORCAAllowAnyMinReportingInterval(__goscriptValue: any): void {
	ORCAAllowAnyMinReportingInterval = __goscriptValue
}

export let GRPCResolverSchemeExtraMetadata: string = "xds"

export function __goscript_set_GRPCResolverSchemeExtraMetadata(__goscriptValue: string): void {
	GRPCResolverSchemeExtraMetadata = __goscriptValue
}

export let EnterIdleModeForTesting: any = null! as any

export function __goscript_set_EnterIdleModeForTesting(__goscriptValue: any): void {
	EnterIdleModeForTesting = __goscriptValue
}

export let ExitIdleModeForTesting: any = null! as any

export function __goscript_set_ExitIdleModeForTesting(__goscriptValue: any): void {
	ExitIdleModeForTesting = __goscriptValue
}

export let ChannelzTurnOffForTesting: (() => void) | null = null! as (() => void) | null

export function __goscript_set_ChannelzTurnOffForTesting(__goscriptValue: (() => void) | null): void {
	ChannelzTurnOffForTesting = __goscriptValue
}

export let TriggerXDSResourceNotFoundForTesting: any = null! as any

export function __goscript_set_TriggerXDSResourceNotFoundForTesting(__goscriptValue: any): void {
	TriggerXDSResourceNotFoundForTesting = __goscriptValue
}

export let FromOutgoingContextRaw: any = null! as any

export function __goscript_set_FromOutgoingContextRaw(__goscriptValue: any): void {
	FromOutgoingContextRaw = __goscriptValue
}

export let UserSetDefaultScheme: boolean = false

export function __goscript_set_UserSetDefaultScheme(__goscriptValue: boolean): void {
	UserSetDefaultScheme = __goscriptValue
}

export let ShuffleAddressListForTesting: any = null! as any

export function __goscript_set_ShuffleAddressListForTesting(__goscriptValue: any): void {
	ShuffleAddressListForTesting = __goscriptValue
}

export let ConnectedAddress: any = null! as any

export function __goscript_set_ConnectedAddress(__goscriptValue: any): void {
	ConnectedAddress = __goscriptValue
}

export let SetConnectedAddress: any = null! as any

export function __goscript_set_SetConnectedAddress(__goscriptValue: any): void {
	SetConnectedAddress = __goscriptValue
}

export let SnapshotMetricRegistryForTesting: (() => (() => void) | null | globalThis.Promise<(() => void) | null>) | null = null! as (() => (() => void) | null | globalThis.Promise<(() => void) | null>) | null

export function __goscript_set_SnapshotMetricRegistryForTesting(__goscriptValue: (() => (() => void) | null | globalThis.Promise<(() => void) | null>) | null): void {
	SnapshotMetricRegistryForTesting = __goscriptValue
}

export let SetDefaultBufferPoolForTesting: any = null! as any

export function __goscript_set_SetDefaultBufferPoolForTesting(__goscriptValue: any): void {
	SetDefaultBufferPoolForTesting = __goscriptValue
}

export let SetBufferPoolingThresholdForTesting: any = null! as any

export function __goscript_set_SetBufferPoolingThresholdForTesting(__goscriptValue: any): void {
	SetBufferPoolingThresholdForTesting = __goscriptValue
}
