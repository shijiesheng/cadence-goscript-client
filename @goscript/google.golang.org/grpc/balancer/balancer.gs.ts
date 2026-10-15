// Generated file based on balancer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as estats from "@goscript/google.golang.org/grpc/experimental/stats/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import type * as jsontext from "@goscript/encoding/json/jsontext/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/experimental/stats/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"

$.registerTypePackagePath("google.golang.org/grpc/balancer", ["balancer.SubConn", "balancer.NewSubConnOptions", "balancer.State", "balancer.ClientConn", "balancer.BuildOptions", "balancer.Builder", "balancer.ConfigParser", "balancer.PickInfo", "balancer.DoneInfo", "balancer.PickResult", "balancer.Picker", "balancer.Balancer", "balancer.ExitIdler", "balancer.SubConnState", "balancer.ClientConnState", "balancer.ProducerBuilder", "balancer.Producer"])

export type SubConn = {
	Connect(): void
	GetOrBuildProducer(_p0: ProducerBuilder | null): [Producer | null, (() => void) | null] | globalThis.Promise<[Producer | null, (() => void) | null]>
	Shutdown(): void
	UpdateAddresses(_p0: $.Slice<resolver.Address>): void
}

$.registerInterfaceType(
	"balancer.SubConn",
	null,
	[$.methodSignature("Connect"), $.methodSignature("GetOrBuildProducer", ["balancer.ProducerBuilder"], [["p", "balancer.Producer"], ["close", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("Shutdown"), $.methodSignature("UpdateAddresses", [/* @__PURE__ */ $.sliceType("resolver.Address")])]
);

export type ClientConn = {
	NewSubConn(_p0: $.Slice<resolver.Address>, _p1: NewSubConnOptions): [SubConn | null, $.GoError] | globalThis.Promise<[SubConn | null, $.GoError]>
	RemoveSubConn(_p0: SubConn | null): void
	ResolveNow(_p0: resolver.ResolveNowOptions): void
	Target(): string | globalThis.Promise<string>
	UpdateAddresses(_p0: SubConn | null, _p1: $.Slice<resolver.Address>): void
	UpdateState(_p0: State): void
}

$.registerInterfaceType(
	"balancer.ClientConn",
	null,
	[$.methodSignature("NewSubConn", [/* @__PURE__ */ $.sliceType("resolver.Address"), "balancer.NewSubConnOptions"], ["balancer.SubConn", "error"]), $.methodSignature("RemoveSubConn", ["balancer.SubConn"]), $.methodSignature("ResolveNow", ["resolver.ResolveNowOptions"]), $.methodSignature("Target", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UpdateAddresses", ["balancer.SubConn", /* @__PURE__ */ $.sliceType("resolver.Address")]), $.methodSignature("UpdateState", ["balancer.State"])]
);

export type Builder = {
	Build(cc: ClientConn | null, opts: BuildOptions): Balancer | null | globalThis.Promise<Balancer | null>
	Name(): string
}

$.registerInterfaceType(
	"balancer.Builder",
	null,
	[$.methodSignature("Build", [["cc", "balancer.ClientConn"], ["opts", "balancer.BuildOptions"]], ["balancer.Balancer"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ConfigParser = {
	ParseConfig(LoadBalancingConfigJSON: json.RawMessage): [serviceconfig.LoadBalancingConfig | null, $.GoError] | globalThis.Promise<[serviceconfig.LoadBalancingConfig | null, $.GoError]>
}

$.registerInterfaceType(
	"balancer.ConfigParser",
	null,
	[$.methodSignature("ParseConfig", [["LoadBalancingConfigJSON", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")]], ["serviceconfig.LoadBalancingConfig", "error"])]
);

export type Picker = {
	Pick(info: PickInfo): [PickResult, $.GoError] | globalThis.Promise<[PickResult, $.GoError]>
}

$.registerInterfaceType(
	"balancer.Picker",
	null,
	[$.methodSignature("Pick", [["info", "balancer.PickInfo"]], ["balancer.PickResult", "error"])]
);

export type Balancer = {
	Close(): void
	ResolverError(_p0: $.GoError): void
	UpdateClientConnState(_p0: ClientConnState): $.GoError | globalThis.Promise<$.GoError>
	UpdateSubConnState(_p0: SubConn | null, _p1: SubConnState): void
}

$.registerInterfaceType(
	"balancer.Balancer",
	null,
	[$.methodSignature("Close"), $.methodSignature("ResolverError", ["error"]), $.methodSignature("UpdateClientConnState", ["balancer.ClientConnState"], ["error"]), $.methodSignature("UpdateSubConnState", ["balancer.SubConn", "balancer.SubConnState"])]
);

export type ExitIdler = {
	ExitIdle(): void
}

$.registerInterfaceType(
	"balancer.ExitIdler",
	null,
	[$.methodSignature("ExitIdle")]
);

export type ProducerBuilder = {
	Build(grpcClientConnInterface: any): [Producer | null, (() => void) | null]
}

$.registerInterfaceType(
	"balancer.ProducerBuilder",
	null,
	[$.methodSignature("Build", [["grpcClientConnInterface", { kind: $.TypeKind.Interface, methods: [] }]], [["p", "balancer.Producer"], ["close", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]])]
);

export type Producer = any

$.registerInterfaceType(
	"balancer.Producer",
	null,
	[]
);

export class NewSubConnOptions {
	// CredsBundle is the credentials bundle that will be used in the created
	// SubConn. If it's nil, the original creds from grpc DialOptions will be
	// used.
	//
	// Deprecated: Use the Attributes field in resolver.Address to pass
	// arbitrary data to the credential handshaker.
	public get CredsBundle(): credentials.Bundle | null {
		return this._fields.CredsBundle
	}

	public set CredsBundle(value: credentials.Bundle | null) {
		this._fields.CredsBundle = value
	}

	// HealthCheckEnabled indicates whether health check service should be
	// enabled on this SubConn
	public get HealthCheckEnabled(): boolean {
		return this._fields.HealthCheckEnabled
	}

	public set HealthCheckEnabled(value: boolean) {
		this._fields.HealthCheckEnabled = value
	}

	// StateListener is called when the state of the subconn changes.  If nil,
	// Balancer.UpdateSubConnState will be called instead.  Will never be
	// invoked until after Connect() is called on the SubConn created with
	// these options.
	public get StateListener(): ((_p0: SubConnState) => void) | null {
		return this._fields.StateListener
	}

	public set StateListener(value: ((_p0: SubConnState) => void) | null) {
		this._fields.StateListener = value
	}

	public _fields: {
		CredsBundle: credentials.Bundle | null
		HealthCheckEnabled: boolean
		StateListener: ((_p0: SubConnState) => void) | null
	}

	constructor(init?: Partial<{CredsBundle?: credentials.Bundle | null, HealthCheckEnabled?: boolean, StateListener?: ((_p0: SubConnState) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			CredsBundle: init?.CredsBundle ?? (null! as credentials.Bundle | null),
			HealthCheckEnabled: init?.HealthCheckEnabled ?? (false as boolean),
			StateListener: init?.StateListener ?? (null! as ((_p0: SubConnState) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NewSubConnOptions {
		return new NewSubConnOptions(this, true)
	}

	public __goscriptAssign(source: NewSubConnOptions): void {
		const target = this._fields
		const values = source._fields
		target.CredsBundle = $.assignFieldValue(target.CredsBundle, values.CredsBundle, "credentials.Bundle")
		target.HealthCheckEnabled = values.HealthCheckEnabled
		target.StateListener = values.StateListener
	}

	static __typeInfo = $.registerStructType(
		"balancer.NewSubConnOptions",
		() => new NewSubConnOptions(),
		() => [],
		NewSubConnOptions,
		() => [/* @__PURE__ */ $.structField("CredsBundle", "credentials.Bundle", [0], 0, true), /* @__PURE__ */ $.structField("HealthCheckEnabled", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("StateListener", ({ kind: $.TypeKind.Function, params: ["balancer.SubConnState"], results: [] } as $.FunctionTypeInfo), [2], 24, true)]
	)
}

export class State {
	// State contains the connectivity state of the balancer, which is used to
	// determine the state of the ClientConn.
	public get ConnectivityState(): connectivity.State {
		return this._fields.ConnectivityState
	}

	public set ConnectivityState(value: connectivity.State) {
		this._fields.ConnectivityState = value
	}

	// Picker is used to choose connections (SubConns) for RPCs.
	public get Picker(): Picker | null {
		return this._fields.Picker
	}

	public set Picker(value: Picker | null) {
		this._fields.Picker = value
	}

	public _fields: {
		ConnectivityState: connectivity.State
		Picker: Picker | null
	}

	constructor(init?: Partial<{ConnectivityState?: connectivity.State, Picker?: Picker | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ConnectivityState: init?.ConnectivityState ?? (0 as connectivity.State),
			Picker: init?.Picker ?? (null! as Picker | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): State {
		return new State(this, true)
	}

	public __goscriptAssign(source: State): void {
		const target = this._fields
		const values = source._fields
		target.ConnectivityState = values.ConnectivityState
		target.Picker = $.assignFieldValue(target.Picker, values.Picker, "balancer.Picker")
	}

	static __typeInfo = $.registerStructType(
		"balancer.State",
		() => new State(),
		() => [],
		State,
		() => [/* @__PURE__ */ $.structField("ConnectivityState", /* @__PURE__ */ $.basicType("int", "connectivity.State"), [0], 0, true), /* @__PURE__ */ $.structField("Picker", "balancer.Picker", [1], 8, true)]
	)
}

export class BuildOptions {
	// DialCreds is the transport credentials to use when communicating with a
	// remote load balancer server. Balancer implementations which do not
	// communicate with a remote load balancer server can ignore this field.
	public get DialCreds(): credentials.TransportCredentials | null {
		return this._fields.DialCreds
	}

	public set DialCreds(value: credentials.TransportCredentials | null) {
		this._fields.DialCreds = value
	}

	// CredsBundle is the credentials bundle to use when communicating with a
	// remote load balancer server. Balancer implementations which do not
	// communicate with a remote load balancer server can ignore this field.
	public get CredsBundle(): credentials.Bundle | null {
		return this._fields.CredsBundle
	}

	public set CredsBundle(value: credentials.Bundle | null) {
		this._fields.CredsBundle = value
	}

	// Dialer is the custom dialer to use when communicating with a remote load
	// balancer server. Balancer implementations which do not communicate with a
	// remote load balancer server can ignore this field.
	public get Dialer(): ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.Dialer
	}

	public set Dialer(value: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.Dialer = value
	}

	// Authority is the server name to use as part of the authentication
	// handshake when communicating with a remote load balancer server. Balancer
	// implementations which do not communicate with a remote load balancer
	// server can ignore this field.
	public get Authority(): string {
		return this._fields.Authority
	}

	public set Authority(value: string) {
		this._fields.Authority = value
	}

	// ChannelzParent is the parent ClientConn's channelz channel.
	public get ChannelzParent(): channelz.Identifier | null {
		return this._fields.ChannelzParent
	}

	public set ChannelzParent(value: channelz.Identifier | null) {
		this._fields.ChannelzParent = value
	}

	// CustomUserAgent is the custom user agent set on the parent ClientConn.
	// The balancer should set the same custom user agent if it creates a
	// ClientConn.
	public get CustomUserAgent(): string {
		return this._fields.CustomUserAgent
	}

	public set CustomUserAgent(value: string) {
		this._fields.CustomUserAgent = value
	}

	// Target contains the parsed address info of the dial target. It is the
	// same resolver.Target as passed to the resolver. See the documentation for
	// the resolver.Target type for details about what it contains.
	public get Target(): resolver.Target {
		return this._fields.Target
	}

	public set Target(value: resolver.Target) {
		this._fields.Target = value
	}

	// MetricsRecorder is the metrics recorder that balancers can use to record
	// metrics. Balancer implementations which do not register metrics on
	// metrics registry and record on them can ignore this field.
	public get MetricsRecorder(): estats.MetricsRecorder | null {
		return this._fields.MetricsRecorder
	}

	public set MetricsRecorder(value: estats.MetricsRecorder | null) {
		this._fields.MetricsRecorder = value
	}

	public _fields: {
		DialCreds: credentials.TransportCredentials | null
		CredsBundle: credentials.Bundle | null
		Dialer: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		Authority: string
		ChannelzParent: channelz.Identifier | null
		CustomUserAgent: string
		Target: resolver.Target
		MetricsRecorder: estats.MetricsRecorder | null
	}

	constructor(init?: Partial<{DialCreds?: credentials.TransportCredentials | null, CredsBundle?: credentials.Bundle | null, Dialer?: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, Authority?: string, ChannelzParent?: channelz.Identifier | null, CustomUserAgent?: string, Target?: resolver.Target, MetricsRecorder?: estats.MetricsRecorder | null}>, __goscriptValue?: boolean) {
		this._fields = {
			DialCreds: init?.DialCreds ?? (null! as credentials.TransportCredentials | null),
			CredsBundle: init?.CredsBundle ?? (null! as credentials.Bundle | null),
			Dialer: init?.Dialer ?? (null! as ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			Authority: init?.Authority ?? ("" as string),
			ChannelzParent: init?.ChannelzParent ?? (null! as channelz.Identifier | null),
			CustomUserAgent: init?.CustomUserAgent ?? ("" as string),
			Target: init?.Target ? init.Target.clone() : new resolver.Target(undefined, true),
			MetricsRecorder: init?.MetricsRecorder ?? (null! as estats.MetricsRecorder | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuildOptions {
		return new BuildOptions(this, true)
	}

	public __goscriptAssign(source: BuildOptions): void {
		const target = this._fields
		const values = source._fields
		target.DialCreds = $.assignFieldValue(target.DialCreds, values.DialCreds, "credentials.TransportCredentials")
		target.CredsBundle = $.assignFieldValue(target.CredsBundle, values.CredsBundle, "credentials.Bundle")
		target.Dialer = values.Dialer
		target.Authority = values.Authority
		target.ChannelzParent = $.assignFieldValue(target.ChannelzParent, values.ChannelzParent, "channelz.Identifier")
		target.CustomUserAgent = values.CustomUserAgent
		$.assignStruct(target.Target, values.Target)
		target.MetricsRecorder = $.assignFieldValue(target.MetricsRecorder, values.MetricsRecorder, "stats.MetricsRecorder")
	}

	static __typeInfo = $.registerStructType(
		"balancer.BuildOptions",
		() => new BuildOptions(),
		() => [],
		BuildOptions,
		() => [/* @__PURE__ */ $.structField("DialCreds", "credentials.TransportCredentials", [0], 0, true), /* @__PURE__ */ $.structField("CredsBundle", "credentials.Bundle", [1], 16, true), /* @__PURE__ */ $.structField("Dialer", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [2], 32, true), /* @__PURE__ */ $.structField("Authority", /* @__PURE__ */ $.basicType("string"), [3], 40, true), /* @__PURE__ */ $.structField("ChannelzParent", "channelz.Identifier", [4], 56, true), /* @__PURE__ */ $.structField("CustomUserAgent", /* @__PURE__ */ $.basicType("string"), [5], 72, true), /* @__PURE__ */ $.structField("Target", "resolver.Target", [6], 88, true), /* @__PURE__ */ $.structField("MetricsRecorder", "stats.MetricsRecorder", [7], 232, true)]
	)
}

export class PickInfo {
	// FullMethodName is the method name that NewClientStream() is called
	// with. The canonical format is /service/Method.
	public get FullMethodName(): string {
		return this._fields.FullMethodName
	}

	public set FullMethodName(value: string) {
		this._fields.FullMethodName = value
	}

	// Ctx is the RPC's context, and may contain relevant RPC-level information
	// like the outgoing header metadata.
	public get Ctx(): context.Context | null {
		return this._fields.Ctx
	}

	public set Ctx(value: context.Context | null) {
		this._fields.Ctx = value
	}

	public _fields: {
		FullMethodName: string
		Ctx: context.Context | null
	}

	constructor(init?: Partial<{FullMethodName?: string, Ctx?: context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			FullMethodName: init?.FullMethodName ?? ("" as string),
			Ctx: init?.Ctx ?? (null! as context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PickInfo {
		return new PickInfo(this, true)
	}

	public __goscriptAssign(source: PickInfo): void {
		const target = this._fields
		const values = source._fields
		target.FullMethodName = values.FullMethodName
		target.Ctx = $.assignFieldValue(target.Ctx, values.Ctx, "context.Context")
	}

	static __typeInfo = $.registerStructType(
		"balancer.PickInfo",
		() => new PickInfo(),
		() => [],
		PickInfo,
		() => [/* @__PURE__ */ $.structField("FullMethodName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Ctx", "context.Context", [1], 16, true)]
	)
}

export class DoneInfo {
	// Err is the rpc error the RPC finished with. It could be nil.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	// Trailer contains the metadata from the RPC's trailer, if present.
	public get Trailer(): metadata.MD {
		return this._fields.Trailer
	}

	public set Trailer(value: metadata.MD) {
		this._fields.Trailer = value
	}

	// BytesSent indicates if any bytes have been sent to the server.
	public get BytesSent(): boolean {
		return this._fields.BytesSent
	}

	public set BytesSent(value: boolean) {
		this._fields.BytesSent = value
	}

	// BytesReceived indicates if any byte has been received from the server.
	public get BytesReceived(): boolean {
		return this._fields.BytesReceived
	}

	public set BytesReceived(value: boolean) {
		this._fields.BytesReceived = value
	}

	// ServerLoad is the load received from server. It's usually sent as part of
	// trailing metadata.
	//
	// The only supported type now is *orca_v3.LoadReport.
	public get ServerLoad(): any {
		return this._fields.ServerLoad
	}

	public set ServerLoad(value: any) {
		this._fields.ServerLoad = value
	}

	public _fields: {
		Err: $.GoError
		Trailer: metadata.MD
		BytesSent: boolean
		BytesReceived: boolean
		ServerLoad: any
	}

	constructor(init?: Partial<{Err?: $.GoError, Trailer?: metadata.MD, BytesSent?: boolean, BytesReceived?: boolean, ServerLoad?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError),
			Trailer: init?.Trailer ?? (null! as metadata.MD),
			BytesSent: init?.BytesSent ?? (false as boolean),
			BytesReceived: init?.BytesReceived ?? (false as boolean),
			ServerLoad: init?.ServerLoad ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DoneInfo {
		return new DoneInfo(this, true)
	}

	public __goscriptAssign(source: DoneInfo): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
		target.Trailer = values.Trailer
		target.BytesSent = values.BytesSent
		target.BytesReceived = values.BytesReceived
		target.ServerLoad = $.assignFieldValue(target.ServerLoad, values.ServerLoad, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"balancer.DoneInfo",
		() => new DoneInfo(),
		() => [],
		DoneInfo,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true), /* @__PURE__ */ $.structField("Trailer", "metadata.MD", [1], 16, true), /* @__PURE__ */ $.structField("BytesSent", /* @__PURE__ */ $.basicType("bool"), [2], 24, true), /* @__PURE__ */ $.structField("BytesReceived", /* @__PURE__ */ $.basicType("bool"), [3], 25, true), /* @__PURE__ */ $.structField("ServerLoad", { kind: $.TypeKind.Interface, methods: [] }, [4], 32, true)]
	)
}

export class PickResult {
	// SubConn is the connection to use for this pick, if its state is Ready.
	// If the state is not Ready, gRPC will block the RPC until a new Picker is
	// provided by the balancer (using ClientConn.UpdateState).  The SubConn
	// must be one returned by ClientConn.NewSubConn.
	public get SubConn(): SubConn | null {
		return this._fields.SubConn
	}

	public set SubConn(value: SubConn | null) {
		this._fields.SubConn = value
	}

	// Done is called when the RPC is completed.  If the SubConn is not ready,
	// this will be called with a nil parameter.  If the SubConn is not a valid
	// type, Done may not be called.  May be nil if the balancer does not wish
	// to be notified when the RPC completes.
	public get Done(): ((_p0: DoneInfo) => void) | null {
		return this._fields.Done
	}

	public set Done(value: ((_p0: DoneInfo) => void) | null) {
		this._fields.Done = value
	}

	// Metadata provides a way for LB policies to inject arbitrary per-call
	// metadata. Any metadata returned here will be merged with existing
	// metadata added by the client application.
	//
	// LB policies with child policies are responsible for propagating metadata
	// injected by their children to the ClientConn, as part of Pick().
	public get Metadata(): metadata.MD {
		return this._fields.Metadata
	}

	public set Metadata(value: metadata.MD) {
		this._fields.Metadata = value
	}

	public _fields: {
		SubConn: SubConn | null
		Done: ((_p0: DoneInfo) => void) | null
		Metadata: metadata.MD
	}

	constructor(init?: Partial<{SubConn?: SubConn | null, Done?: ((_p0: DoneInfo) => void) | null, Metadata?: metadata.MD}>, __goscriptValue?: boolean) {
		this._fields = {
			SubConn: init?.SubConn ?? (null! as SubConn | null),
			Done: init?.Done ?? (null! as ((_p0: DoneInfo) => void) | null),
			Metadata: init?.Metadata ?? (null! as metadata.MD)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PickResult {
		return new PickResult(this, true)
	}

	public __goscriptAssign(source: PickResult): void {
		const target = this._fields
		const values = source._fields
		target.SubConn = $.assignFieldValue(target.SubConn, values.SubConn, "balancer.SubConn")
		target.Done = values.Done
		target.Metadata = values.Metadata
	}

	static __typeInfo = $.registerStructType(
		"balancer.PickResult",
		() => new PickResult(),
		() => [],
		PickResult,
		() => [/* @__PURE__ */ $.structField("SubConn", "balancer.SubConn", [0], 0, true), /* @__PURE__ */ $.structField("Done", ({ kind: $.TypeKind.Function, params: ["balancer.DoneInfo"], results: [] } as $.FunctionTypeInfo), [1], 16, true), /* @__PURE__ */ $.structField("Metadata", "metadata.MD", [2], 24, true)]
	)
}

export class SubConnState {
	// ConnectivityState is the connectivity state of the SubConn.
	public get ConnectivityState(): connectivity.State {
		return this._fields.ConnectivityState
	}

	public set ConnectivityState(value: connectivity.State) {
		this._fields.ConnectivityState = value
	}

	// ConnectionError is set if the ConnectivityState is TransientFailure,
	// describing the reason the SubConn failed.  Otherwise, it is nil.
	public get ConnectionError(): $.GoError {
		return this._fields.ConnectionError
	}

	public set ConnectionError(value: $.GoError) {
		this._fields.ConnectionError = value
	}

	// connectedAddr contains the connected address when ConnectivityState is
	// Ready. Otherwise, it is indeterminate.
	public get connectedAddress(): resolver.Address {
		return this._fields.connectedAddress
	}

	public set connectedAddress(value: resolver.Address) {
		this._fields.connectedAddress = value
	}

	public _fields: {
		ConnectivityState: connectivity.State
		ConnectionError: $.GoError
		connectedAddress: resolver.Address
	}

	constructor(init?: Partial<{ConnectivityState?: connectivity.State, ConnectionError?: $.GoError, connectedAddress?: resolver.Address}>, __goscriptValue?: boolean) {
		this._fields = {
			ConnectivityState: init?.ConnectivityState ?? (0 as connectivity.State),
			ConnectionError: init?.ConnectionError ?? (null! as $.GoError),
			connectedAddress: init?.connectedAddress ? init.connectedAddress.clone() : new resolver.Address(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SubConnState {
		return new SubConnState(this, true)
	}

	public __goscriptAssign(source: SubConnState): void {
		const target = this._fields
		const values = source._fields
		target.ConnectivityState = values.ConnectivityState
		target.ConnectionError = $.assignFieldValue(target.ConnectionError, values.ConnectionError, "error")
		$.assignStruct(target.connectedAddress, values.connectedAddress)
	}

	static __typeInfo = $.registerStructType(
		"balancer.SubConnState",
		() => new SubConnState(),
		() => [],
		SubConnState,
		() => [/* @__PURE__ */ $.structField("ConnectivityState", /* @__PURE__ */ $.basicType("int", "connectivity.State"), [0], 0, true), /* @__PURE__ */ $.structField("ConnectionError", "error", [1], 8, true), /* @__PURE__ */ $.structField("connectedAddress", "resolver.Address", [2], 24, false, { pkgPath: "google.golang.org/grpc/balancer" })]
	)
}

export class ClientConnState {
	public get ResolverState(): resolver.State {
		return this._fields.ResolverState
	}

	public set ResolverState(value: resolver.State) {
		this._fields.ResolverState = value
	}

	// The parsed load balancing configuration returned by the builder's
	// ParseConfig method, if implemented.
	public get BalancerConfig(): serviceconfig.LoadBalancingConfig | null {
		return this._fields.BalancerConfig
	}

	public set BalancerConfig(value: serviceconfig.LoadBalancingConfig | null) {
		this._fields.BalancerConfig = value
	}

	public _fields: {
		ResolverState: resolver.State
		BalancerConfig: serviceconfig.LoadBalancingConfig | null
	}

	constructor(init?: Partial<{ResolverState?: resolver.State, BalancerConfig?: serviceconfig.LoadBalancingConfig | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ResolverState: init?.ResolverState ? init.ResolverState.clone() : new resolver.State(undefined, true),
			BalancerConfig: init?.BalancerConfig ?? (null! as serviceconfig.LoadBalancingConfig | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientConnState {
		return new ClientConnState(this, true)
	}

	public __goscriptAssign(source: ClientConnState): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.ResolverState, values.ResolverState)
		target.BalancerConfig = $.assignFieldValue(target.BalancerConfig, values.BalancerConfig, "serviceconfig.LoadBalancingConfig")
	}

	static __typeInfo = $.registerStructType(
		"balancer.ClientConnState",
		() => new ClientConnState(),
		() => [],
		ClientConnState,
		() => [/* @__PURE__ */ $.structField("ResolverState", "resolver.State", [0], 0, true), /* @__PURE__ */ $.structField("BalancerConfig", "serviceconfig.LoadBalancingConfig", [1], 64, true)]
	)
}

export let m: globalThis.Map<string, Builder | null> | null = $.makeMap<string, Builder | null>()

export function __goscript_set_m(__goscriptValue: globalThis.Map<string, Builder | null> | null): void {
	m = __goscriptValue
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("balancer")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function Register(b: Builder | null): globalThis.Promise<void> {
	let name = strings.ToLower((__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<Builder, null>) : $.pointerValue<Exclude<Builder, null>>(b)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	if (!$.stringEqual(name, (__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<Builder, null>) : $.pointerValue<Exclude<Builder, null>>(b)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		// TODO: Skip the use of strings.ToLower() to index the map after v1.59
		// is released to switch to case sensitive balancer registry. Also,
		// remove this warning and update the docstrings for Register and Get.
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("Balancer registered with name %q. grpc-go will be switching to case sensitive balancer registries soon", $.arrayToSlice<any>([(__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<Builder, null>) : $.pointerValue<Exclude<Builder, null>>(b)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	$.mapSet(m, name, b)
}

export function unregisterForTesting(name: string): void {
	$.deleteMapEntry(m, name)
}

export function connectedAddress(scs: SubConnState): resolver.Address {
	return (scs.connectedAddress).clone()
}

export function setConnectedAddress(scs: SubConnState | $.VarRef<SubConnState> | null, addr: resolver.Address): void {
	$.assignStruct($.pointerValue<SubConnState>(scs).connectedAddress, addr)
}

function __goscriptInit0(): void {
	internal.__goscript_set_BalancerUnregister(unregisterForTesting)
	internal.__goscript_set_ConnectedAddress($.interfaceValue($.goFunc(connectedAddress, "google.golang.org/grpc/balancer.connectedAddress"), "func(scs balancer.SubConnState) resolver.Address", ({ kind: $.TypeKind.Function, params: ["balancer.SubConnState"], results: ["resolver.Address"] } as $.FunctionTypeInfo)))
	internal.__goscript_set_SetConnectedAddress($.interfaceValue($.goFunc(setConnectedAddress, "google.golang.org/grpc/balancer.setConnectedAddress"), "func(scs *balancer.SubConnState, addr resolver.Address)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("balancer.SubConnState"), "resolver.Address"], results: [] } as $.FunctionTypeInfo)))
}

export async function Get(name: string): globalThis.Promise<Builder | null> {
	if (!$.stringEqual(strings.ToLower(name), name)) {
		// TODO: Skip the use of strings.ToLower() to index the map after v1.59
		// is released to switch to case sensitive balancer registry. Also,
		// remove this warning and update the docstrings for Register and Get.
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("Balancer retrieved for name %q. grpc-go will be switching to case sensitive balancer registries soon", $.arrayToSlice<any>([name])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	{
		let [b, ok] = $.mapGet<string, Builder | null, Builder | null>(m, strings.ToLower(name), null)
		if (ok) {
			return b
		}
	}
	return null
}

export let ErrNoSubConnAvailable: $.GoError = errors.New("no SubConn is available")

export function __goscript_set_ErrNoSubConnAvailable(__goscriptValue: $.GoError): void {
	ErrNoSubConnAvailable = __goscriptValue
}

export let ErrTransientFailure: $.GoError = errors.New("all SubConns are in TransientFailure")

export function __goscript_set_ErrTransientFailure(__goscriptValue: $.GoError): void {
	ErrTransientFailure = __goscriptValue
}

export function TransientFailureError(e: $.GoError): $.GoError {
	return e
}

export let ErrBadResolverState: $.GoError = errors.New("bad resolver state")

export function __goscript_set_ErrBadResolverState(__goscriptValue: $.GoError): void {
	ErrBadResolverState = __goscriptValue
}

var __goscriptAwait: any

export { __goscriptInit0 }
