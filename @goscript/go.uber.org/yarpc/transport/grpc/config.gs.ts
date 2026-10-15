// Generated file based on config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpctls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as peerchooser from "@goscript/go.uber.org/yarpc/peer/index.js"

import * as hostport from "@goscript/go.uber.org/yarpc/peer/hostport/index.js"

import * as yarpcconfig from "@goscript/go.uber.org/yarpc/yarpcconfig/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as context from "@goscript/context/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_dialer from "./dialer.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/peer/index.js"
import "@goscript/go.uber.org/yarpc/peer/hostport/index.js"
import "@goscript/go.uber.org/yarpc/yarpcconfig/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "@goscript/sync/index.js"
import "./constants.gs.ts"
import "./dialer.gs.ts"
import "./inbound.gs.ts"
import "./options.gs.ts"
import "./outbound.gs.ts"
import "./peer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.TransportConfig", "grpc.InboundConfig", "grpc.InboundTLSConfig", "grpc.OutboundConfig", "grpc.OutboundTLSConfig", "grpc.OutboundKeepaliveConfig", "grpc.transportSpec"])

export class TransportConfig {
	public get ServerMaxRecvMsgSize(): number {
		return this._fields.ServerMaxRecvMsgSize
	}

	public set ServerMaxRecvMsgSize(value: number) {
		this._fields.ServerMaxRecvMsgSize = value
	}

	public get ServerMaxSendMsgSize(): number {
		return this._fields.ServerMaxSendMsgSize
	}

	public set ServerMaxSendMsgSize(value: number) {
		this._fields.ServerMaxSendMsgSize = value
	}

	public get ClientMaxRecvMsgSize(): number {
		return this._fields.ClientMaxRecvMsgSize
	}

	public set ClientMaxRecvMsgSize(value: number) {
		this._fields.ClientMaxRecvMsgSize = value
	}

	public get ClientMaxSendMsgSize(): number {
		return this._fields.ClientMaxSendMsgSize
	}

	public set ClientMaxSendMsgSize(value: number) {
		this._fields.ClientMaxSendMsgSize = value
	}

	// GRPC header lise size options accept uint32 param.
	// see: https://pkg.go.dev/google.golang.org/grpc#WithMaxHeaderListSize
	public get ServerMaxHeaderListSize(): number {
		return this._fields.ServerMaxHeaderListSize
	}

	public set ServerMaxHeaderListSize(value: number) {
		this._fields.ServerMaxHeaderListSize = value
	}

	public get ServerHeaderTableSize(): number {
		return this._fields.ServerHeaderTableSize
	}

	public set ServerHeaderTableSize(value: number) {
		this._fields.ServerHeaderTableSize = value
	}

	public get ClientMaxHeaderListSize(): number {
		return this._fields.ClientMaxHeaderListSize
	}

	public set ClientMaxHeaderListSize(value: number) {
		this._fields.ClientMaxHeaderListSize = value
	}

	public get Backoff(): yarpcconfig.Backoff {
		return this._fields.Backoff
	}

	public set Backoff(value: yarpcconfig.Backoff) {
		this._fields.Backoff = value
	}

	// NumStreamWorkers sets the number of worker goroutines used to process
	// incoming streams.
	// See: https://pkg.go.dev/google.golang.org/grpc#NumStreamWorkers
	public get NumStreamWorkers(): number {
		return this._fields.NumStreamWorkers
	}

	public set NumStreamWorkers(value: number) {
		this._fields.NumStreamWorkers = value
	}

	public _fields: {
		ServerMaxRecvMsgSize: number
		ServerMaxSendMsgSize: number
		ClientMaxRecvMsgSize: number
		ClientMaxSendMsgSize: number
		ServerMaxHeaderListSize: number
		ServerHeaderTableSize: number
		ClientMaxHeaderListSize: number
		Backoff: yarpcconfig.Backoff
		NumStreamWorkers: number
	}

	constructor(init?: Partial<{ServerMaxRecvMsgSize?: number, ServerMaxSendMsgSize?: number, ClientMaxRecvMsgSize?: number, ClientMaxSendMsgSize?: number, ServerMaxHeaderListSize?: number, ServerHeaderTableSize?: number, ClientMaxHeaderListSize?: number, Backoff?: yarpcconfig.Backoff, NumStreamWorkers?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ServerMaxRecvMsgSize: init?.ServerMaxRecvMsgSize ?? (0 as number),
			ServerMaxSendMsgSize: init?.ServerMaxSendMsgSize ?? (0 as number),
			ClientMaxRecvMsgSize: init?.ClientMaxRecvMsgSize ?? (0 as number),
			ClientMaxSendMsgSize: init?.ClientMaxSendMsgSize ?? (0 as number),
			ServerMaxHeaderListSize: init?.ServerMaxHeaderListSize ?? (0 as number),
			ServerHeaderTableSize: init?.ServerHeaderTableSize ?? (0 as number),
			ClientMaxHeaderListSize: init?.ClientMaxHeaderListSize ?? (0 as number),
			Backoff: init?.Backoff ? init.Backoff.clone() : new yarpcconfig.Backoff(undefined, true),
			NumStreamWorkers: init?.NumStreamWorkers ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TransportConfig {
		return new TransportConfig(this, true)
	}

	public __goscriptAssign(source: TransportConfig): void {
		const target = this._fields
		const values = source._fields
		target.ServerMaxRecvMsgSize = values.ServerMaxRecvMsgSize
		target.ServerMaxSendMsgSize = values.ServerMaxSendMsgSize
		target.ClientMaxRecvMsgSize = values.ClientMaxRecvMsgSize
		target.ClientMaxSendMsgSize = values.ClientMaxSendMsgSize
		target.ServerMaxHeaderListSize = values.ServerMaxHeaderListSize
		target.ServerHeaderTableSize = values.ServerHeaderTableSize
		target.ClientMaxHeaderListSize = values.ClientMaxHeaderListSize
		$.assignStruct(target.Backoff, values.Backoff)
		target.NumStreamWorkers = values.NumStreamWorkers
	}

	static __typeInfo = $.registerStructType(
		"grpc.TransportConfig",
		() => new TransportConfig(),
		() => [],
		TransportConfig,
		() => [{ name: "ServerMaxRecvMsgSize", key: "ServerMaxRecvMsgSize", type: /* @__PURE__ */ $.basicType("int"), tag: "config:\"serverMaxRecvMsgSize\"" }, { name: "ServerMaxSendMsgSize", key: "ServerMaxSendMsgSize", type: /* @__PURE__ */ $.basicType("int"), tag: "config:\"serverMaxSendMsgSize\"" }, { name: "ClientMaxRecvMsgSize", key: "ClientMaxRecvMsgSize", type: /* @__PURE__ */ $.basicType("int"), tag: "config:\"clientMaxRecvMsgSize\"" }, { name: "ClientMaxSendMsgSize", key: "ClientMaxSendMsgSize", type: /* @__PURE__ */ $.basicType("int"), tag: "config:\"clientMaxSendMsgSize\"" }, { name: "ServerMaxHeaderListSize", key: "ServerMaxHeaderListSize", type: /* @__PURE__ */ $.basicType("uint32"), tag: "config:\"serverMaxHeaderListSize\"" }, { name: "ServerHeaderTableSize", key: "ServerHeaderTableSize", type: /* @__PURE__ */ $.basicType("uint32"), tag: "config:\"serverHeaderTableSize\"" }, { name: "ClientMaxHeaderListSize", key: "ClientMaxHeaderListSize", type: /* @__PURE__ */ $.basicType("uint32"), tag: "config:\"clientMaxHeaderListSize\"" }, { name: "Backoff", key: "Backoff", type: "yarpcconfig.Backoff", tag: "config:\"backoff\"" }, { name: "NumStreamWorkers", key: "NumStreamWorkers", type: /* @__PURE__ */ $.basicType("uint32"), tag: "config:\"numStreamWorkers\"" }]
	)
}

export class InboundTLSConfig {
	public get Enabled(): boolean {
		return this._fields.Enabled
	}

	public set Enabled(value: boolean) {
		this._fields.Enabled = value
	}

	public get CertFile(): string {
		return this._fields.CertFile
	}

	public set CertFile(value: string) {
		this._fields.CertFile = value
	}

	public get KeyFile(): string {
		return this._fields.KeyFile
	}

	public set KeyFile(value: string) {
		this._fields.KeyFile = value
	}

	// Mode when set to Permissive or Enforced enables TLS inbound and
	// TLS configuration must be passed as an inbound option.
	// Note: enable, cert and key fields are ignored when mode is set.
	public get Mode(): yarpctls.Mode {
		return this._fields.Mode
	}

	public set Mode(value: yarpctls.Mode) {
		this._fields.Mode = value
	}

	public _fields: {
		Enabled: boolean
		CertFile: string
		KeyFile: string
		Mode: yarpctls.Mode
	}

	constructor(init?: Partial<{Enabled?: boolean, CertFile?: string, KeyFile?: string, Mode?: yarpctls.Mode}>, __goscriptValue?: boolean) {
		this._fields = {
			Enabled: init?.Enabled ?? (false as boolean),
			CertFile: init?.CertFile ?? ("" as string),
			KeyFile: init?.KeyFile ?? ("" as string),
			Mode: init?.Mode ?? (0 as yarpctls.Mode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InboundTLSConfig {
		return new InboundTLSConfig(this, true)
	}

	public __goscriptAssign(source: InboundTLSConfig): void {
		const target = this._fields
		const values = source._fields
		target.Enabled = values.Enabled
		target.CertFile = values.CertFile
		target.KeyFile = values.KeyFile
		target.Mode = values.Mode
	}

	public inboundOptions(): [$.Slice<__goscript_options.InboundOption | null>, $.GoError] {
		const c = this;
		if (c.Mode != 0) {
			return [$.arrayToSlice<__goscript_options.InboundOption | null>([__goscript_options.InboundTLSMode(c.Mode)]), null]
		}

		if (!c.Enabled) {
			return [null, null]
		}
		let [creds, err] = c.newInboundCredentials()
		if (err != null) {
			return [null, err]
		}
		return [$.arrayToSlice<__goscript_options.InboundOption | null>([__goscript_options.InboundCredentials(creds)]), null]
	}

	public newInboundCredentials(): [credentials.TransportCredentials | null, $.GoError] {
		const c = this;
		if ((!$.stringEqual(c.CertFile, "")) && (!$.stringEqual(c.KeyFile, ""))) {
			return credentials.NewServerTLSFromFile(c.CertFile, c.KeyFile)
		}
		return [null, fmt.Errorf("both certFile and keyFile are necessary to construct gRPC transport credentials, got certFile=%q and keyFile=%q", c.CertFile, c.KeyFile)]
	}

	static __typeInfo = $.registerStructType(
		"grpc.InboundTLSConfig",
		() => new InboundTLSConfig(),
		() => [{ name: "inboundOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.InboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo)) }, { type: "error" }] }, { name: "newInboundCredentials", args: [], returns: [{ type: "credentials.TransportCredentials" }, { type: "error" }] }],
		InboundTLSConfig,
		() => [{ name: "Enabled", key: "Enabled", type: /* @__PURE__ */ $.basicType("bool"), tag: "config:\"enabled\"" }, { name: "CertFile", key: "CertFile", type: /* @__PURE__ */ $.basicType("string"), tag: "config:\"certFile,interpolate\"" }, { name: "KeyFile", key: "KeyFile", type: /* @__PURE__ */ $.basicType("string"), tag: "config:\"keyFile,interpolate\"" }, { name: "Mode", key: "Mode", type: /* @__PURE__ */ $.basicType("uint16", "tls.Mode"), tag: "config:\"mode,interpolate\"" }]
	)
}

export class InboundConfig {
	// Address to listen on. This field is required.
	public get Address(): string {
		return this._fields.Address
	}

	public set Address(value: string) {
		this._fields.Address = value
	}

	public get TLS(): InboundTLSConfig {
		return this._fields.TLS
	}

	public set TLS(value: InboundTLSConfig) {
		this._fields.TLS = value
	}

	public _fields: {
		Address: string
		TLS: InboundTLSConfig
	}

	constructor(init?: Partial<{Address?: string, TLS?: InboundTLSConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			Address: init?.Address ?? ("" as string),
			TLS: init?.TLS ? init.TLS.clone() : new InboundTLSConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InboundConfig {
		return new InboundConfig(this, true)
	}

	public __goscriptAssign(source: InboundConfig): void {
		const target = this._fields
		const values = source._fields
		target.Address = values.Address
		$.assignStruct(target.TLS, values.TLS)
	}

	public inboundOptions(): [$.Slice<__goscript_options.InboundOption | null>, $.GoError] {
		const c = this;
		return c.TLS.inboundOptions()
	}

	static __typeInfo = $.registerStructType(
		"grpc.InboundConfig",
		() => new InboundConfig(),
		() => [{ name: "inboundOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.InboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo)) }, { type: "error" }] }],
		InboundConfig,
		() => [{ name: "Address", key: "Address", type: /* @__PURE__ */ $.basicType("string"), tag: "config:\"address,interpolate\"" }, { name: "TLS", key: "TLS", type: "grpc.InboundTLSConfig", tag: "config:\"tls\"" }]
	)
}

export class OutboundTLSConfig {
	// Enabled field is deprecated, use Mode and SpiffeIDs fields instead.
	public get Enabled(): boolean {
		return this._fields.Enabled
	}

	public set Enabled(value: boolean) {
		this._fields.Enabled = value
	}

	// Mode when set to Enforced enables TLS outbound and
	// outbound TLS configuration providered option will be used for fetching
	// outbound tls.Config.
	// Note: enable field is ignored when mode is set.
	public get Mode(): yarpctls.Mode {
		return this._fields.Mode
	}

	public set Mode(value: yarpctls.Mode) {
		this._fields.Mode = value
	}

	// SpiffeIDs is a list of the accepted server spiffe IDs.
	public get SpiffeIDs(): $.Slice<string> {
		return this._fields.SpiffeIDs
	}

	public set SpiffeIDs(value: $.Slice<string>) {
		this._fields.SpiffeIDs = value
	}

	public _fields: {
		Enabled: boolean
		Mode: yarpctls.Mode
		SpiffeIDs: $.Slice<string>
	}

	constructor(init?: Partial<{Enabled?: boolean, Mode?: yarpctls.Mode, SpiffeIDs?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			Enabled: init?.Enabled ?? (false as boolean),
			Mode: init?.Mode ?? (0 as yarpctls.Mode),
			SpiffeIDs: init?.SpiffeIDs ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundTLSConfig {
		return new OutboundTLSConfig(this, true)
	}

	public __goscriptAssign(source: OutboundTLSConfig): void {
		const target = this._fields
		const values = source._fields
		target.Enabled = values.Enabled
		target.Mode = values.Mode
		target.SpiffeIDs = values.SpiffeIDs
	}

	public async dialOptions(tlsConfigProvider: yarpctls.OutboundTLSConfigProvider | null): globalThis.Promise<[$.Slice<__goscript_options.DialOption | null>, $.GoError]> {
		const c = this;
		if (c.Mode != 0) {
			if (c.Mode == 1) {
				return [null, errors.New("outbound does not support permissive TLS mode")]
			}

			if (tlsConfigProvider == null) {
				return [null, errors.New("outbound TLS enforced but outbound TLS config provider is nil")]
			}

			let __goscriptTuple3: any = await (tlsConfigProvider !== null && (tlsConfigProvider as any).__isVarRef !== true && (tlsConfigProvider as any).__goValue === undefined ? (tlsConfigProvider as Exclude<yarpctls.OutboundTLSConfigProvider, null>) : $.pointerValue<Exclude<yarpctls.OutboundTLSConfigProvider, null>>(tlsConfigProvider)).ClientTLSConfig(c.SpiffeIDs)
			let config: any = __goscriptTuple3[0]
			let err = __goscriptTuple3[1]
			if (err != null) {
				return [null, err]
			}
			return [$.arrayToSlice<__goscript_options.DialOption | null>([__goscript_options.DialerTLSConfig(config)]), null]
		}

		if (!c.Enabled) {
			return [null, null]
		}
		let creds = credentials.NewClientTLSFromCert(null, "")
		let option = __goscript_options.DialerCredentials(creds)
		return [$.arrayToSlice<__goscript_options.DialOption | null>([option]), null]
	}

	static __typeInfo = $.registerStructType(
		"grpc.OutboundTLSConfig",
		() => new OutboundTLSConfig(),
		() => [{ name: "dialOptions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo)) }, { type: "error" }] }],
		OutboundTLSConfig,
		() => [{ name: "Enabled", key: "Enabled", type: /* @__PURE__ */ $.basicType("bool"), tag: "config:\"enabled\"" }, { name: "Mode", key: "Mode", type: /* @__PURE__ */ $.basicType("uint16", "tls.Mode"), tag: "config:\"mode,interpolate\"" }, { name: "SpiffeIDs", key: "SpiffeIDs", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "config:\"spiffe-ids\"" }]
	)
}

export class OutboundKeepaliveConfig {
	public get Enabled(): boolean {
		return this._fields.Enabled
	}

	public set Enabled(value: boolean) {
		this._fields.Enabled = value
	}

	public get Time(): string {
		return this._fields.Time
	}

	public set Time(value: string) {
		this._fields.Time = value
	}

	public get Timeout(): string {
		return this._fields.Timeout
	}

	public set Timeout(value: string) {
		this._fields.Timeout = value
	}

	public get PermitWithoutStream(): boolean {
		return this._fields.PermitWithoutStream
	}

	public set PermitWithoutStream(value: boolean) {
		this._fields.PermitWithoutStream = value
	}

	public _fields: {
		Enabled: boolean
		Time: string
		Timeout: string
		PermitWithoutStream: boolean
	}

	constructor(init?: Partial<{Enabled?: boolean, Time?: string, Timeout?: string, PermitWithoutStream?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Enabled: init?.Enabled ?? (false as boolean),
			Time: init?.Time ?? ("" as string),
			Timeout: init?.Timeout ?? ("" as string),
			PermitWithoutStream: init?.PermitWithoutStream ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundKeepaliveConfig {
		return new OutboundKeepaliveConfig(this, true)
	}

	public __goscriptAssign(source: OutboundKeepaliveConfig): void {
		const target = this._fields
		const values = source._fields
		target.Enabled = values.Enabled
		target.Time = values.Time
		target.Timeout = values.Timeout
		target.PermitWithoutStream = values.PermitWithoutStream
	}

	public dialOptions(): [$.Slice<__goscript_options.DialOption | null>, $.GoError] {
		const c = this;
		if (!c.Enabled) {
			return [null, null]
		}

		let err: $.GoError = null! as $.GoError

		// gRPC keepalive expects time to be minimum 10s.
		// read more: https://pkg.go.dev/google.golang.org/grpc/keepalive#ClientParameters
		let keepaliveTime = 10000000000n
		if (!$.stringEqual(c.Time, "")) {
			let __goscriptTuple4: any = time.ParseDuration(c.Time)
			keepaliveTime = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return [null, fmt.Errorf("could not parse gRPC keepalive time: %v", (err as any))]
			}
		}

		// gRPC keepalive defaults timeout to 20s.
		// read more: https://pkg.go.dev/google.golang.org/grpc/keepalive#ClientParameters
		let keepaliveTimeout = 20000000000n
		if (!$.stringEqual(c.Timeout, "")) {
			let __goscriptTuple5: any = time.ParseDuration(c.Timeout)
			keepaliveTimeout = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
			if (err != null) {
				return [null, fmt.Errorf("could not parse gRPC keepalive timeout: %v", (err as any))]
			}
		}

		let option = __goscript_options.KeepaliveParams(new keepalive.ClientParameters({Time: keepaliveTime, Timeout: keepaliveTimeout, PermitWithoutStream: c.PermitWithoutStream}, true))
		return [$.arrayToSlice<__goscript_options.DialOption | null>([option]), null]
	}

	static __typeInfo = $.registerStructType(
		"grpc.OutboundKeepaliveConfig",
		() => new OutboundKeepaliveConfig(),
		() => [{ name: "dialOptions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo)) }, { type: "error" }] }],
		OutboundKeepaliveConfig,
		() => [{ name: "Enabled", key: "Enabled", type: /* @__PURE__ */ $.basicType("bool"), tag: "config:\"enabled\"" }, { name: "Time", key: "Time", type: /* @__PURE__ */ $.basicType("string"), tag: "config:\"time\"" }, { name: "Timeout", key: "Timeout", type: /* @__PURE__ */ $.basicType("string"), tag: "config:\"timeout\"" }, { name: "PermitWithoutStream", key: "PermitWithoutStream", type: /* @__PURE__ */ $.basicType("bool"), tag: "config:\"permit-without-stream\"" }]
	)
}

export class OutboundConfig {
	public get PeerChooser(): yarpcconfig.PeerChooser {
		return this._fields.PeerChooser
	}

	public set PeerChooser(value: yarpcconfig.PeerChooser) {
		this._fields.PeerChooser = value
	}

	// Address to connect to if no peer options set.
	public get Address(): string {
		return this._fields.Address
	}

	public set Address(value: string) {
		this._fields.Address = value
	}

	public get TLS(): OutboundTLSConfig {
		return this._fields.TLS
	}

	public set TLS(value: OutboundTLSConfig) {
		this._fields.TLS = value
	}

	// Compressor to use by default if the server side supports it
	public get Compressor(): string {
		return this._fields.Compressor
	}

	public set Compressor(value: string) {
		this._fields.Compressor = value
	}

	public get Keepalive(): OutboundKeepaliveConfig {
		return this._fields.Keepalive
	}

	public set Keepalive(value: OutboundKeepaliveConfig) {
		this._fields.Keepalive = value
	}

	public _fields: {
		PeerChooser: yarpcconfig.PeerChooser
		Address: string
		TLS: OutboundTLSConfig
		Compressor: string
		Keepalive: OutboundKeepaliveConfig
	}

	constructor(init?: Partial<{PeerChooser?: yarpcconfig.PeerChooser, Address?: string, TLS?: OutboundTLSConfig, Compressor?: string, Keepalive?: OutboundKeepaliveConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			PeerChooser: init?.PeerChooser ? init.PeerChooser.clone() : new yarpcconfig.PeerChooser(undefined, true),
			Address: init?.Address ?? ("" as string),
			TLS: init?.TLS ? init.TLS.clone() : new OutboundTLSConfig(undefined, true),
			Compressor: init?.Compressor ?? ("" as string),
			Keepalive: init?.Keepalive ? init.Keepalive.clone() : new OutboundKeepaliveConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundConfig {
		return new OutboundConfig(this, true)
	}

	public __goscriptAssign(source: OutboundConfig): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.PeerChooser, values.PeerChooser)
		target.Address = values.Address
		$.assignStruct(target.TLS, values.TLS)
		target.Compressor = values.Compressor
		$.assignStruct(target.Keepalive, values.Keepalive)
	}

	public async dialOptions(kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null, tlsConfigProvider: yarpctls.OutboundTLSConfigProvider | null): globalThis.Promise<[$.Slice<__goscript_options.DialOption | null>, $.GoError]> {
		const c = this;
		let __goscriptTuple1: any = await c.TLS.dialOptions(tlsConfigProvider)
		let opts: $.Slice<__goscript_options.DialOption | null> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple2: any = c.Keepalive.dialOptions()
		let keepaliveOpts: $.Slice<__goscript_options.DialOption | null> = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}

		opts = $.appendSlice(opts, keepaliveOpts, $.appendZeros.nil)
		return [opts, null]
	}

	public BuildPeerChooser(transport: any, identify: any, kit: any): any {
		return $.pointerValue<yarpcconfig.PeerChooser>(this.PeerChooser).BuildPeerChooser(transport, identify, kit)
	}

	public Empty(): any {
		return $.pointerValue<yarpcconfig.PeerChooser>(this.PeerChooser).Empty()
	}

	static __typeInfo = $.registerStructType(
		"grpc.OutboundConfig",
		() => new OutboundConfig(),
		() => [{ name: "dialOptions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo)) }, { type: "error" }] }, { name: "BuildPeerChooser", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Chooser" }, { type: "error" }] }, { name: "Empty", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }],
		OutboundConfig,
		() => [{ name: "PeerChooser", key: "PeerChooser", type: "yarpcconfig.PeerChooser", anonymous: true }, { name: "Address", key: "Address", type: /* @__PURE__ */ $.basicType("string"), tag: "config:\"address,interpolate\"" }, { name: "TLS", key: "TLS", type: "grpc.OutboundTLSConfig", tag: "config:\"tls\"" }, { name: "Compressor", key: "Compressor", type: /* @__PURE__ */ $.basicType("string"), tag: "config:\"compressor\"" }, { name: "Keepalive", key: "Keepalive", type: "grpc.OutboundKeepaliveConfig", tag: "config:\"grpc-keepalive\"" }]
	)
}

export class transportSpec {
	public get TransportOptions(): $.Slice<__goscript_options.TransportOption | null> {
		return this._fields.TransportOptions
	}

	public set TransportOptions(value: $.Slice<__goscript_options.TransportOption | null>) {
		this._fields.TransportOptions = value
	}

	public get InboundOptions(): $.Slice<__goscript_options.InboundOption | null> {
		return this._fields.InboundOptions
	}

	public set InboundOptions(value: $.Slice<__goscript_options.InboundOption | null>) {
		this._fields.InboundOptions = value
	}

	public get OutboundOptions(): $.Slice<__goscript_options.OutboundOption | null> {
		return this._fields.OutboundOptions
	}

	public set OutboundOptions(value: $.Slice<__goscript_options.OutboundOption | null>) {
		this._fields.OutboundOptions = value
	}

	public get DialOptions(): $.Slice<__goscript_options.DialOption | null> {
		return this._fields.DialOptions
	}

	public set DialOptions(value: $.Slice<__goscript_options.DialOption | null>) {
		this._fields.DialOptions = value
	}

	public _fields: {
		TransportOptions: $.Slice<__goscript_options.TransportOption | null>
		InboundOptions: $.Slice<__goscript_options.InboundOption | null>
		OutboundOptions: $.Slice<__goscript_options.OutboundOption | null>
		DialOptions: $.Slice<__goscript_options.DialOption | null>
	}

	constructor(init?: Partial<{TransportOptions?: $.Slice<__goscript_options.TransportOption | null>, InboundOptions?: $.Slice<__goscript_options.InboundOption | null>, OutboundOptions?: $.Slice<__goscript_options.OutboundOption | null>, DialOptions?: $.Slice<__goscript_options.DialOption | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			TransportOptions: init?.TransportOptions ?? (null! as $.Slice<__goscript_options.TransportOption | null>),
			InboundOptions: init?.InboundOptions ?? (null! as $.Slice<__goscript_options.InboundOption | null>),
			OutboundOptions: init?.OutboundOptions ?? (null! as $.Slice<__goscript_options.OutboundOption | null>),
			DialOptions: init?.DialOptions ?? (null! as $.Slice<__goscript_options.DialOption | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): transportSpec {
		return new transportSpec(this, true)
	}

	public __goscriptAssign(source: transportSpec): void {
		const target = this._fields
		const values = source._fields
		target.TransportOptions = values.TransportOptions
		target.InboundOptions = values.InboundOptions
		target.OutboundOptions = values.OutboundOptions
		target.DialOptions = values.DialOptions
	}

	public async buildInbound(inboundConfig: InboundConfig | $.VarRef<InboundConfig> | null, tr: transport.Transport | null, _p2: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null): globalThis.Promise<[transport.Inbound | null, $.GoError]> {
		const t: transportSpec | $.VarRef<transportSpec> | null = this;
		const inboundConfig$: InboundConfig = inboundConfig == null ? $.pointerTarget<InboundConfig>(inboundConfig) : (inboundConfig as any).__isVarRef === true ? (inboundConfig as any).value : (inboundConfig as any).__goValue === undefined ? (inboundConfig as any) : $.pointerTarget<InboundConfig>(inboundConfig)
		let __goscriptTuple6: any = $.typeAssertTuple<__goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null>(tr, /* @__PURE__ */ $.pointerType("grpc.Transport"))
		let trans: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return [null, newTransportCastError(tr)]
		}
		if ($.stringEqual((inboundConfig$ as InboundConfig).Address, "")) {
			return [null, newRequiredFieldMissingError("address")]
		}
		let [listener, err] = net.Listen("tcp", (inboundConfig$ as InboundConfig).Address)
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple7: any = (inboundConfig$ as InboundConfig).inboundOptions()
		let __goscriptShadow1: $.Slice<__goscript_options.InboundOption | null> = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot build gRPC inbound from given configuration: %v", (err as any))]
		}
		return [$.interfaceValue<transport.Inbound | null>(await (trans !== null && (trans as any).__isVarRef !== true && (trans as any).__goValue === undefined ? ((trans as any) as __goscript_transport.Transport).NewInbound(listener, $.appendSlice($.pointerValue<transportSpec>(t).InboundOptions, __goscriptShadow1, $.appendZeros.nil)) : __goscript_transport.Transport.prototype.NewInbound.call(trans, listener, $.appendSlice($.pointerValue<transportSpec>(t).InboundOptions, __goscriptShadow1, $.appendZeros.nil))), "*grpc.Inbound", /* @__PURE__ */ $.pointerType("grpc.Inbound")), null]
	}

	public async buildOutbound(outboundConfig: OutboundConfig | $.VarRef<OutboundConfig> | null, tr: transport.Transport | null, kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null): globalThis.Promise<[__goscript_outbound.Outbound | $.VarRef<__goscript_outbound.Outbound> | null, $.GoError]> {
		const t: transportSpec | $.VarRef<transportSpec> | null = this;
		const t$: transportSpec = t == null ? $.pointerTarget<transportSpec>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<transportSpec>(t)
		const outboundConfig$: OutboundConfig = outboundConfig == null ? $.pointerTarget<OutboundConfig>(outboundConfig) : (outboundConfig as any).__isVarRef === true ? (outboundConfig as any).value : (outboundConfig as any).__goValue === undefined ? (outboundConfig as any) : $.pointerTarget<OutboundConfig>(outboundConfig)
		let __goscriptTuple8: any = $.typeAssertTuple<__goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null>(tr, /* @__PURE__ */ $.pointerType("grpc.Transport"))
		let trans: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (!ok) {
			return [null, newTransportCastError(tr)]
		}

		let __goscriptTuple9: any = await $.markAsStructValue($.cloneStructValue((outboundConfig$ as OutboundConfig))).dialOptions(kit, $.pointerValue<__goscript_options.outboundOptions>(await __goscript_options.newOutboundOptions((t$ as transportSpec).OutboundOptions)).tlsConfigProvider)
		let dialOpts: $.Slice<__goscript_options.DialOption | null> = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}

		let opts: $.Slice<__goscript_options.DialOption | null> = $.appendSlice(dialOpts, (t$ as transportSpec).DialOptions, $.appendZeros.nil)
		let dialer: __goscript_dialer.Dialer | $.VarRef<__goscript_dialer.Dialer> | null = await __goscript_transport.Transport.prototype.NewDialer.call(trans, $.appendSlice($.arrayToSlice<__goscript_options.DialOption | null>([__goscript_options.DialerDestinationServiceName((kit !== null && (kit as any).__isVarRef !== true && (kit as any).__goValue === undefined ? ((kit as any) as yarpcconfig.Kit).OutboundServiceName() : yarpcconfig.Kit.prototype.OutboundServiceName.call(kit)))]), opts, $.appendZeros.nil))
		let chooser: peer.Chooser | null = null! as peer.Chooser | null
		if ($.markAsStructValue($.cloneStructValue((outboundConfig$ as OutboundConfig).PeerChooser)).Empty()) {
			if ($.stringEqual((outboundConfig$ as OutboundConfig).Address, "")) {
				return [null, newRequiredFieldMissingError("address")]
			}
			chooser = $.interfaceValue<peer.Chooser | null>(peerchooser.NewSingle($.namedValueInterfaceValue<peer.Identifier | null>((outboundConfig$ as OutboundConfig).Address, "hostport.PeerIdentifier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.interfaceValue<peer.Transport | null>(dialer, "*grpc.Dialer", /* @__PURE__ */ $.pointerType("grpc.Dialer"))), "*peer.Single", /* @__PURE__ */ $.pointerType("peer.Single"))
		} else {
			let __goscriptShadow2: $.GoError = null! as $.GoError
			let __goscriptTuple10: any = $.markAsStructValue($.cloneStructValue((outboundConfig$ as OutboundConfig).PeerChooser)).BuildPeerChooser($.interfaceValue<peer.Transport | null>(dialer, "*grpc.Dialer", /* @__PURE__ */ $.pointerType("grpc.Dialer")), hostport.Identify, kit)
			chooser = __goscriptTuple10[0]
			__goscriptShadow2 = __goscriptTuple10[1]
			if (__goscriptShadow2 != null) {
				return [null, __goscriptShadow2]
			}
		}

		let outboundOpts: $.Slice<__goscript_options.OutboundOption | null> = $.arrayToSlice<__goscript_options.OutboundOption | null>([__goscript_options.OutboundCompressor((kit !== null && (kit as any).__isVarRef !== true && (kit as any).__goValue === undefined ? ((kit as any) as yarpcconfig.Kit).Compressor((outboundConfig$ as OutboundConfig).Compressor) : yarpcconfig.Kit.prototype.Compressor.call(kit, (outboundConfig$ as OutboundConfig).Compressor)))])
		outboundOpts = $.appendSlice(outboundOpts, (t$ as transportSpec).OutboundOptions, $.appendZeros.nil)
		return [await (trans !== null && (trans as any).__isVarRef !== true && (trans as any).__goValue === undefined ? ((trans as any) as __goscript_transport.Transport).NewOutbound(chooser, outboundOpts) : __goscript_transport.Transport.prototype.NewOutbound.call(trans, chooser, outboundOpts)), null]
	}

	public async buildStreamOutbound(outboundConfig: OutboundConfig | $.VarRef<OutboundConfig> | null, tr: transport.Transport | null, kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null): globalThis.Promise<[transport.StreamOutbound | null, $.GoError]> {
		const t: transportSpec | $.VarRef<transportSpec> | null = this;
		const __goscriptReturn2 = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as transportSpec).buildOutbound(outboundConfig, tr, kit) : transportSpec.prototype.buildOutbound.call(t, outboundConfig, tr, kit))
		return [$.interfaceValue<transport.StreamOutbound | null>(__goscriptReturn2[0], "*grpc.Outbound", /* @__PURE__ */ $.pointerType("grpc.Outbound")), __goscriptReturn2[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async buildTransport(transportConfig: TransportConfig | $.VarRef<TransportConfig> | null, kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null): globalThis.Promise<[transport.Transport | null, $.GoError]> {
		const t: transportSpec | $.VarRef<transportSpec> | null = this;
		const transportConfig$: TransportConfig = transportConfig == null ? $.pointerTarget<TransportConfig>(transportConfig) : (transportConfig as any).__isVarRef === true ? (transportConfig as any).value : (transportConfig as any).__goValue === undefined ? (transportConfig as any) : $.pointerTarget<TransportConfig>(transportConfig)
		let options: $.Slice<__goscript_options.TransportOption | null> = $.pointerValue<transportSpec>(t).TransportOptions
		if ((transportConfig$ as TransportConfig).ServerMaxRecvMsgSize > 0) {
			options = $.appendOne(options, __goscript_options.ServerMaxRecvMsgSize((transportConfig$ as TransportConfig).ServerMaxRecvMsgSize), $.appendZeros.nil)
		}
		if ((transportConfig$ as TransportConfig).ServerMaxSendMsgSize > 0) {
			options = $.appendOne(options, __goscript_options.ServerMaxSendMsgSize((transportConfig$ as TransportConfig).ServerMaxSendMsgSize), $.appendZeros.nil)
		}
		if ((transportConfig$ as TransportConfig).ClientMaxRecvMsgSize > 0) {
			options = $.appendOne(options, __goscript_options.ClientMaxRecvMsgSize((transportConfig$ as TransportConfig).ClientMaxRecvMsgSize), $.appendZeros.nil)
		}
		if ((transportConfig$ as TransportConfig).ClientMaxSendMsgSize > 0) {
			options = $.appendOne(options, __goscript_options.ClientMaxSendMsgSize((transportConfig$ as TransportConfig).ClientMaxSendMsgSize), $.appendZeros.nil)
		}
		if ((transportConfig$ as TransportConfig).ServerMaxHeaderListSize > 0) {
			options = $.appendOne(options, __goscript_options.ServerMaxHeaderListSize((transportConfig$ as TransportConfig).ServerMaxHeaderListSize), $.appendZeros.nil)
		}
		if ((transportConfig$ as TransportConfig).ServerHeaderTableSize > 0) {
			options = $.appendOne(options, __goscript_options.ServerHeaderTableSize((transportConfig$ as TransportConfig).ServerHeaderTableSize), $.appendZeros.nil)
		}
		if ((transportConfig$ as TransportConfig).ClientMaxHeaderListSize > 0) {
			options = $.appendOne(options, __goscript_options.ClientMaxHeaderListSize((transportConfig$ as TransportConfig).ClientMaxHeaderListSize), $.appendZeros.nil)
		}
		if ((transportConfig$ as TransportConfig).NumStreamWorkers > 0) {
			options = $.appendOne(options, __goscript_options.NumStreamWorkers((transportConfig$ as TransportConfig).NumStreamWorkers), $.appendZeros.nil)
		}
		let [backoffStrategy, err] = $.markAsStructValue($.cloneStructValue((transportConfig$ as TransportConfig).Backoff)).Strategy()
		if (err != null) {
			return [null, err]
		}
		options = $.append(options, __goscript_options.BackoffStrategy(backoffStrategy), __goscript_options.ServiceName((kit !== null && (kit as any).__isVarRef !== true && (kit as any).__goValue === undefined ? ((kit as any) as yarpcconfig.Kit).ServiceName() : yarpcconfig.Kit.prototype.ServiceName.call(kit))), $.appendZeros.nil)
		return [$.interfaceValue<transport.Transport | null>(__goscript_transport.newTransport(await __goscript_options.newTransportOptions(options)), "*grpc.Transport", /* @__PURE__ */ $.pointerType("grpc.Transport")), null]
	}

	public async buildUnaryOutbound(outboundConfig: OutboundConfig | $.VarRef<OutboundConfig> | null, tr: transport.Transport | null, kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null): globalThis.Promise<[transport.UnaryOutbound | null, $.GoError]> {
		const t: transportSpec | $.VarRef<transportSpec> | null = this;
		const __goscriptReturn3 = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as transportSpec).buildOutbound(outboundConfig, tr, kit) : transportSpec.prototype.buildOutbound.call(t, outboundConfig, tr, kit))
		return [$.interfaceValue<transport.UnaryOutbound | null>(__goscriptReturn3[0], "*grpc.Outbound", /* @__PURE__ */ $.pointerType("grpc.Outbound")), __goscriptReturn3[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"grpc.transportSpec",
		() => new transportSpec(),
		() => [{ name: "buildInbound", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Inbound" }, { type: "error" }], pointerReceiver: true }, { name: "buildOutbound", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("grpc.Outbound") }, { type: "error" }], pointerReceiver: true }, { name: "buildStreamOutbound", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.StreamOutbound" }, { type: "error" }], pointerReceiver: true }, { name: "buildTransport", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Transport" }, { type: "error" }], pointerReceiver: true }, { name: "buildUnaryOutbound", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.UnaryOutbound" }, { type: "error" }], pointerReceiver: true }],
		transportSpec,
		() => [{ name: "TransportOptions", key: "TransportOptions", type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.TransportOption", params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo)) }, { name: "InboundOptions", key: "InboundOptions", type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.InboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo)) }, { name: "OutboundOptions", key: "OutboundOptions", type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.OutboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.outboundOptions")], results: [] } as $.FunctionTypeInfo)) }, { name: "DialOptions", key: "DialOptions", type: /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo)) }]
	)
}

export async function TransportSpec(opts: $.Slice<__goscript_options.Option | null>): globalThis.Promise<yarpcconfig.TransportSpec> {
	let __goscriptTuple0: any = newTransportSpec(opts)
	let __goscriptShadow0: transportSpec | $.VarRef<transportSpec> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.panic((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return new yarpcconfig.TransportSpec({Name: "grpc", BuildTransport: $.interfaceValue($.functionValue(((__receiver) => (transportConfig: TransportConfig | $.VarRef<TransportConfig> | null, kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null) => __receiver.buildTransport(transportConfig, kit))($.pointerValue<transportSpec>(__goscriptShadow0)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.TransportConfig"), /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.Transport", "error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*transportSpec).buildTransport-fm"), "func(transportConfig *grpc.TransportConfig, kit *yarpcconfig.Kit) (transport.Transport, error)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.TransportConfig"), /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.Transport", "error"] } as $.FunctionTypeInfo)), BuildInbound: $.interfaceValue($.functionValue(((__receiver) => (inboundConfig: InboundConfig | $.VarRef<InboundConfig> | null, tr: transport.Transport | null, _p2: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null) => __receiver.buildInbound(inboundConfig, tr, _p2))($.pointerValue<transportSpec>(__goscriptShadow0)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.InboundConfig"), "transport.Transport", /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.Inbound", "error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*transportSpec).buildInbound-fm"), "func(inboundConfig *grpc.InboundConfig, tr transport.Transport, _ *yarpcconfig.Kit) (transport.Inbound, error)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.InboundConfig"), "transport.Transport", /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.Inbound", "error"] } as $.FunctionTypeInfo)), BuildUnaryOutbound: $.interfaceValue($.functionValue(((__receiver) => (outboundConfig: OutboundConfig | $.VarRef<OutboundConfig> | null, tr: transport.Transport | null, kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null) => __receiver.buildUnaryOutbound(outboundConfig, tr, kit))($.pointerValue<transportSpec>(__goscriptShadow0)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.OutboundConfig"), "transport.Transport", /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.UnaryOutbound", "error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*transportSpec).buildUnaryOutbound-fm"), "func(outboundConfig *grpc.OutboundConfig, tr transport.Transport, kit *yarpcconfig.Kit) (transport.UnaryOutbound, error)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.OutboundConfig"), "transport.Transport", /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.UnaryOutbound", "error"] } as $.FunctionTypeInfo)), BuildStreamOutbound: $.interfaceValue($.functionValue(((__receiver) => (outboundConfig: OutboundConfig | $.VarRef<OutboundConfig> | null, tr: transport.Transport | null, kit: yarpcconfig.Kit | $.VarRef<yarpcconfig.Kit> | null) => __receiver.buildStreamOutbound(outboundConfig, tr, kit))($.pointerValue<transportSpec>(__goscriptShadow0)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.OutboundConfig"), "transport.Transport", /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.StreamOutbound", "error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*transportSpec).buildStreamOutbound-fm"), "func(outboundConfig *grpc.OutboundConfig, tr transport.Transport, kit *yarpcconfig.Kit) (transport.StreamOutbound, error)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.OutboundConfig"), "transport.Transport", /* @__PURE__ */ $.pointerType("yarpcconfig.Kit")], results: ["transport.StreamOutbound", "error"] } as $.FunctionTypeInfo))}, true)
}

export function newTransportSpec(opts: $.Slice<__goscript_options.Option | null>): [transportSpec | $.VarRef<transportSpec> | null, $.GoError] {
	let __goscriptShadow3: transportSpec | $.VarRef<transportSpec> | null = new transportSpec()
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_options.Option | null)
		{
			const __goscriptTypeSwitchValue = o
			switch (true) {
				case $.typeAssert<__goscript_options.TransportOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.TransportOption", params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo)).ok:
					{
						let opt: __goscript_options.TransportOption | null = $.typeAssert<__goscript_options.TransportOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.TransportOption", params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo)).value
						$.pointerValue<transportSpec>(__goscriptShadow3).TransportOptions = $.appendOne($.pointerValue<transportSpec>(__goscriptShadow3).TransportOptions, opt, $.appendZeros.nil)
					}
					break
				case $.typeAssert<__goscript_options.InboundOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.InboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo)).ok:
					{
						let opt: __goscript_options.InboundOption | null = $.typeAssert<__goscript_options.InboundOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.InboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo)).value
						$.pointerValue<transportSpec>(__goscriptShadow3).InboundOptions = $.appendOne($.pointerValue<transportSpec>(__goscriptShadow3).InboundOptions, opt, $.appendZeros.nil)
					}
					break
				case $.typeAssert<__goscript_options.OutboundOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.OutboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.outboundOptions")], results: [] } as $.FunctionTypeInfo)).ok:
					{
						let opt: __goscript_options.OutboundOption | null = $.typeAssert<__goscript_options.OutboundOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.OutboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.outboundOptions")], results: [] } as $.FunctionTypeInfo)).value
						$.pointerValue<transportSpec>(__goscriptShadow3).OutboundOptions = $.appendOne($.pointerValue<transportSpec>(__goscriptShadow3).OutboundOptions, opt, $.appendZeros.nil)
					}
					break
				case $.typeAssert<__goscript_options.DialOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo)).ok:
					{
						let opt: __goscript_options.DialOption | null = $.typeAssert<__goscript_options.DialOption | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo)).value
						$.pointerValue<transportSpec>(__goscriptShadow3).DialOptions = $.appendOne($.pointerValue<transportSpec>(__goscriptShadow3).DialOptions, opt, $.appendZeros.nil)
					}
					break
				default:
					{
						let opt: any = __goscriptTypeSwitchValue
						return [null, fmt.Errorf("unknown option of type %T: %v", (o as any), (o as any))]
					}
					break
			}
		}
	}
	return [__goscriptShadow3, null]
}

export function newTransportCastError(tr: transport.Transport | null): $.GoError {
	return fmt.Errorf("could not cast %T to a *grpc.Transport", (tr as any))
}

export function newRequiredFieldMissingError(field: string): $.GoError {
	return fmt.Errorf("required field missing: %v", field)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Identifier: (receiver: any, ...args: any[]) => (hostport.PeerIdentifier_Identifier as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "hostport.PeerIdentifier"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Identifier", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
