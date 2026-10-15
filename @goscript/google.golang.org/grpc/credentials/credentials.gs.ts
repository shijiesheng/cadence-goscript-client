// Generated file based on credentials.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"

import * as icredentials from "@goscript/google.golang.org/grpc/internal/credentials/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/google.golang.org/grpc/attributes/index.js"
import "@goscript/google.golang.org/grpc/internal/credentials/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

$.registerTypePackagePath("google.golang.org/grpc/credentials", ["credentials.PerRPCCredentials", "credentials.SecurityLevel", "credentials.CommonAuthInfo", "credentials.ProtocolInfo", "credentials.AuthInfo", "credentials.TransportCredentials", "credentials.Bundle", "credentials.RequestInfo", "credentials.ClientHandshakeInfo", "credentials.internalInfo", "credentials.ChannelzSecurityInfo", "credentials.ChannelzSecurityValue", "credentials.OtherChannelzSecurityValue"])

export type PerRPCCredentials = {
	GetRequestMetadata(ctx: context.Context | null, uri: $.Slice<string>): [globalThis.Map<string, string> | null, $.GoError]
	RequireTransportSecurity(): boolean
}

$.registerInterfaceType(
	"credentials.PerRPCCredentials",
	null,
	[$.methodSignature("GetRequestMetadata", [["ctx", "context.Context"], ["uri", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), "error"]), $.methodSignature("RequireTransportSecurity", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type SecurityLevel = number

$.registerNamedValueType(
	"credentials.SecurityLevel",
	{String: (receiver: any, ...args: any[]) => (SecurityLevel_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*credentials.SecurityLevel",
	{String: (receiver: any, ...args: any[]) => (SecurityLevel_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type AuthInfo = {
	AuthType(): string
}

$.registerInterfaceType(
	"credentials.AuthInfo",
	null,
	[$.methodSignature("AuthType", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type TransportCredentials = {
	ClientHandshake(_p0: context.Context | null, _p1: string, _p2: net.Conn | null): [net.Conn | null, AuthInfo | null, $.GoError] | globalThis.Promise<[net.Conn | null, AuthInfo | null, $.GoError]>
	Clone(): TransportCredentials | null | globalThis.Promise<TransportCredentials | null>
	Info(): ProtocolInfo
	OverrideServerName(_p0: string): $.GoError
	ServerHandshake(_p0: net.Conn | null): [net.Conn | null, AuthInfo | null, $.GoError] | globalThis.Promise<[net.Conn | null, AuthInfo | null, $.GoError]>
}

$.registerInterfaceType(
	"credentials.TransportCredentials",
	null,
	[$.methodSignature("ClientHandshake", ["context.Context", /* @__PURE__ */ $.basicType("string"), "net.Conn"], ["net.Conn", "credentials.AuthInfo", "error"]), $.methodSignature("Clone", [], ["credentials.TransportCredentials"]), $.methodSignature("Info", [], ["credentials.ProtocolInfo"]), $.methodSignature("OverrideServerName", [/* @__PURE__ */ $.basicType("string")], ["error"]), $.methodSignature("ServerHandshake", ["net.Conn"], ["net.Conn", "credentials.AuthInfo", "error"])]
);

export type Bundle = {
	NewWithMode(mode: string): [Bundle | null, $.GoError]
	PerRPCCredentials(): PerRPCCredentials | null
	TransportCredentials(): TransportCredentials | null
}

$.registerInterfaceType(
	"credentials.Bundle",
	null,
	[$.methodSignature("NewWithMode", [["mode", /* @__PURE__ */ $.basicType("string")]], ["credentials.Bundle", "error"]), $.methodSignature("PerRPCCredentials", [], ["credentials.PerRPCCredentials"]), $.methodSignature("TransportCredentials", [], ["credentials.TransportCredentials"])]
);

export type ChannelzSecurityInfo = {
	GetSecurityValue(): ChannelzSecurityValue | null | globalThis.Promise<ChannelzSecurityValue | null>
}

$.registerInterfaceType(
	"credentials.ChannelzSecurityInfo",
	null,
	[$.methodSignature("GetSecurityValue", [], ["credentials.ChannelzSecurityValue"])]
);

export type ChannelzSecurityValue = {
	isChannelzSecurityValue(): void
}

$.registerInterfaceType(
	"credentials.ChannelzSecurityValue",
	null,
	[$.methodSignature("isChannelzSecurityValue")]
);

export class CommonAuthInfo {
	public get SecurityLevel(): SecurityLevel {
		return this._fields.SecurityLevel
	}

	public set SecurityLevel(value: SecurityLevel) {
		this._fields.SecurityLevel = value
	}

	public _fields: {
		SecurityLevel: SecurityLevel
	}

	constructor(init?: Partial<{SecurityLevel?: SecurityLevel}>, __goscriptValue?: boolean) {
		this._fields = {
			SecurityLevel: init?.SecurityLevel ?? (0 as SecurityLevel)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CommonAuthInfo {
		return new CommonAuthInfo(this, true)
	}

	public __goscriptAssign(source: CommonAuthInfo): void {
		const target = this._fields
		const values = source._fields
		target.SecurityLevel = values.SecurityLevel
	}

	public GetCommonAuthInfo(): CommonAuthInfo {
		const c = this;
		return (c).clone()
	}

	static __typeInfo = $.registerStructType(
		"credentials.CommonAuthInfo",
		() => new CommonAuthInfo(),
		() => [$.methodSignature("GetCommonAuthInfo", [], ["credentials.CommonAuthInfo"])],
		CommonAuthInfo,
		() => [/* @__PURE__ */ $.structField("SecurityLevel", /* @__PURE__ */ $.basicType("int", "credentials.SecurityLevel"), [0], 0, true)]
	)
}

export class ProtocolInfo {
	// ProtocolVersion is the gRPC wire protocol version.
	public get ProtocolVersion(): string {
		return this._fields.ProtocolVersion
	}

	public set ProtocolVersion(value: string) {
		this._fields.ProtocolVersion = value
	}

	// SecurityProtocol is the security protocol in use.
	public get SecurityProtocol(): string {
		return this._fields.SecurityProtocol
	}

	public set SecurityProtocol(value: string) {
		this._fields.SecurityProtocol = value
	}

	// SecurityVersion is the security protocol version.  It is a static version string from the
	// credentials, not a value that reflects per-connection protocol negotiation.  To retrieve
	// details about the credentials used for a connection, use the Peer's AuthInfo field instead.
	//
	// Deprecated: please use Peer.AuthInfo.
	public get SecurityVersion(): string {
		return this._fields.SecurityVersion
	}

	public set SecurityVersion(value: string) {
		this._fields.SecurityVersion = value
	}

	// ServerName is the user-configured server name.
	public get ServerName(): string {
		return this._fields.ServerName
	}

	public set ServerName(value: string) {
		this._fields.ServerName = value
	}

	public _fields: {
		ProtocolVersion: string
		SecurityProtocol: string
		SecurityVersion: string
		ServerName: string
	}

	constructor(init?: Partial<{ProtocolVersion?: string, SecurityProtocol?: string, SecurityVersion?: string, ServerName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ProtocolVersion: init?.ProtocolVersion ?? ("" as string),
			SecurityProtocol: init?.SecurityProtocol ?? ("" as string),
			SecurityVersion: init?.SecurityVersion ?? ("" as string),
			ServerName: init?.ServerName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProtocolInfo {
		return new ProtocolInfo(this, true)
	}

	public __goscriptAssign(source: ProtocolInfo): void {
		const target = this._fields
		const values = source._fields
		target.ProtocolVersion = values.ProtocolVersion
		target.SecurityProtocol = values.SecurityProtocol
		target.SecurityVersion = values.SecurityVersion
		target.ServerName = values.ServerName
	}

	static __typeInfo = $.registerStructType(
		"credentials.ProtocolInfo",
		() => new ProtocolInfo(),
		() => [],
		ProtocolInfo,
		() => [/* @__PURE__ */ $.structField("ProtocolVersion", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("SecurityProtocol", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("SecurityVersion", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("ServerName", /* @__PURE__ */ $.basicType("string"), [3], 48, true)]
	)
}

export class RequestInfo {
	// The method passed to Invoke or NewStream for this RPC. (For proto methods, this has the format "/some.Service/Method")
	public get Method(): string {
		return this._fields.Method
	}

	public set Method(value: string) {
		this._fields.Method = value
	}

	// AuthInfo contains the information from a security handshake (TransportCredentials.ClientHandshake, TransportCredentials.ServerHandshake)
	public get AuthInfo(): AuthInfo | null {
		return this._fields.AuthInfo
	}

	public set AuthInfo(value: AuthInfo | null) {
		this._fields.AuthInfo = value
	}

	public _fields: {
		Method: string
		AuthInfo: AuthInfo | null
	}

	constructor(init?: Partial<{Method?: string, AuthInfo?: AuthInfo | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Method: init?.Method ?? ("" as string),
			AuthInfo: init?.AuthInfo ?? (null! as AuthInfo | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequestInfo {
		return new RequestInfo(this, true)
	}

	public __goscriptAssign(source: RequestInfo): void {
		const target = this._fields
		const values = source._fields
		target.Method = values.Method
		target.AuthInfo = $.assignFieldValue(target.AuthInfo, values.AuthInfo, "credentials.AuthInfo")
	}

	static __typeInfo = $.registerStructType(
		"credentials.RequestInfo",
		() => new RequestInfo(),
		() => [],
		RequestInfo,
		() => [/* @__PURE__ */ $.structField("Method", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("AuthInfo", "credentials.AuthInfo", [1], 16, true)]
	)
}

export class ClientHandshakeInfo {
	// Attributes contains the attributes for the address. It could be provided
	// by the gRPC, resolver, balancer etc.
	public get Attributes(): attributes.Attributes | $.VarRef<attributes.Attributes> | null {
		return this._fields.Attributes
	}

	public set Attributes(value: attributes.Attributes | $.VarRef<attributes.Attributes> | null) {
		this._fields.Attributes = value
	}

	public _fields: {
		Attributes: attributes.Attributes | $.VarRef<attributes.Attributes> | null
	}

	constructor(init?: Partial<{Attributes?: attributes.Attributes | $.VarRef<attributes.Attributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Attributes: init?.Attributes ?? (null! as attributes.Attributes | $.VarRef<attributes.Attributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientHandshakeInfo {
		return new ClientHandshakeInfo(this, true)
	}

	public __goscriptAssign(source: ClientHandshakeInfo): void {
		const target = this._fields
		const values = source._fields
		target.Attributes = values.Attributes
	}

	static __typeInfo = $.registerStructType(
		"credentials.ClientHandshakeInfo",
		() => new ClientHandshakeInfo(),
		() => [],
		ClientHandshakeInfo,
		() => [/* @__PURE__ */ $.structField("Attributes", /* @__PURE__ */ $.pointerType("attributes.Attributes"), [0], 0, true)]
	)
}

export class OtherChannelzSecurityValue {
	public get ChannelzSecurityValue(): ChannelzSecurityValue | null {
		return this._fields.ChannelzSecurityValue
	}

	public set ChannelzSecurityValue(value: ChannelzSecurityValue | null) {
		this._fields.ChannelzSecurityValue = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Value(): proto.Message | null {
		return this._fields.Value
	}

	public set Value(value: proto.Message | null) {
		this._fields.Value = value
	}

	public _fields: {
		ChannelzSecurityValue: ChannelzSecurityValue | null
		Name: string
		Value: proto.Message | null
	}

	constructor(init?: Partial<{ChannelzSecurityValue?: ChannelzSecurityValue | null, Name?: string, Value?: proto.Message | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ChannelzSecurityValue: init?.ChannelzSecurityValue ?? (null! as ChannelzSecurityValue | null),
			Name: init?.Name ?? ("" as string),
			Value: init?.Value ?? (null! as proto.Message | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OtherChannelzSecurityValue {
		return new OtherChannelzSecurityValue(this, true)
	}

	public __goscriptAssign(source: OtherChannelzSecurityValue): void {
		const target = this._fields
		const values = source._fields
		target.ChannelzSecurityValue = $.assignFieldValue(target.ChannelzSecurityValue, values.ChannelzSecurityValue, "credentials.ChannelzSecurityValue")
		target.Name = values.Name
		target.Value = $.assignFieldValue(target.Value, values.Value, "protoreflect.ProtoMessage")
	}

	public isChannelzSecurityValue(): any {
		return $.pointerValue<Exclude<ChannelzSecurityValue | null, null>>(this.ChannelzSecurityValue).isChannelzSecurityValue()
	}

	static __typeInfo = $.registerStructType(
		"credentials.OtherChannelzSecurityValue",
		() => new OtherChannelzSecurityValue(),
		() => [$.methodSignature("isChannelzSecurityValue")],
		OtherChannelzSecurityValue,
		() => [/* @__PURE__ */ $.structField("ChannelzSecurityValue", "credentials.ChannelzSecurityValue", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Value", "protoreflect.ProtoMessage", [2], 32, true)]
	)
}

export const InvalidSecurityLevel: SecurityLevel = 0

export const NoSecurity: SecurityLevel = 1

export const IntegrityOnly: SecurityLevel = 2

export const PrivacyAndIntegrity: SecurityLevel = 3

export async function SecurityLevel_String(s: SecurityLevel): globalThis.Promise<string> {
	switch (s) {
		case 1:
		{
			return "NoSecurity"
			break
		}
		case 2:
		{
			return "IntegrityOnly"
			break
		}
		case 3:
		{
			return "PrivacyAndIntegrity"
			break
		}
	}
	return fmt.Sprintf("invalid SecurityLevel: %v", $.basicInterfaceValue($.int(s), "int"))
}

export let ErrConnDispatched: $.GoError = errors.New("credentials: rawConn is dispatched out of gRPC")

export function __goscript_set_ErrConnDispatched(__goscriptValue: $.GoError): void {
	ErrConnDispatched = __goscriptValue
}

export async function RequestInfoFromContext(ctx: context.Context | null): globalThis.Promise<[RequestInfo, boolean]> {
	let ri: RequestInfo = new RequestInfo(undefined, true)
	let ok: boolean = false
	let __goscriptTuple0: any = $.typeAssertTuple<RequestInfo>(await icredentials.RequestInfoFromContext(ctx), "credentials.RequestInfo")
	ri = $.assignStruct(ri, __goscriptTuple0[0])
	ok = __goscriptTuple0[1]
	return [(ri).clone(), ok]
}

export async function ClientHandshakeInfoFromContext(ctx: context.Context | null): globalThis.Promise<ClientHandshakeInfo> {
	let [chi, ] = $.typeAssertTuple<ClientHandshakeInfo>(await icredentials.ClientHandshakeInfoFromContext(ctx), "credentials.ClientHandshakeInfo")
	return (chi).clone()
}

export async function CheckSecurityLevel(ai: AuthInfo | null, level: SecurityLevel): globalThis.Promise<$.GoError> {
	type internalInfo = {
		GetCommonAuthInfo(): CommonAuthInfo
	}

	$.registerInterfaceType(
		"credentials.internalInfo",
		null,
		[$.methodSignature("GetCommonAuthInfo", [], ["credentials.CommonAuthInfo"])]
	);
	if (ai == null) {
		return errors.New("AuthInfo is nil")
	}
	{
		let [ci, ok] = $.typeAssertTuple<internalInfo | null>(ai, "credentials.internalInfo")
		if (ok) {
			// CommonAuthInfo.SecurityLevel has an invalid value.
			if (((__goscriptAwait = (ci !== null && (ci as any).__isVarRef !== true && (ci as any).__goValue === undefined ? (ci as Exclude<internalInfo, null>) : $.pointerValue<Exclude<internalInfo, null>>(ci)).GetCommonAuthInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as CommonAuthInfo).SecurityLevel == 0) {
				return null
			}
			if (((__goscriptAwait = (ci !== null && (ci as any).__isVarRef !== true && (ci as any).__goValue === undefined ? (ci as Exclude<internalInfo, null>) : $.pointerValue<Exclude<internalInfo, null>>(ci)).GetCommonAuthInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as CommonAuthInfo).SecurityLevel < level) {
				return fmt.Errorf("requires SecurityLevel %v; connection has %v", $.namedValueInterfaceValue<any>(level, "credentials.SecurityLevel", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(((__goscriptAwait = (ci !== null && (ci as any).__isVarRef !== true && (ci as any).__goValue === undefined ? (ci as Exclude<internalInfo, null>) : $.pointerValue<Exclude<internalInfo, null>>(ci)).GetCommonAuthInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as CommonAuthInfo).SecurityLevel, "credentials.SecurityLevel", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			}
		}
	}
	// The condition is satisfied or AuthInfo struct does not implement GetCommonAuthInfo() method.
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (SecurityLevel_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "credentials.SecurityLevel"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
