// Generated file based on insecure.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as net from "@goscript/net/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/context/index.js"
import "@goscript/net/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"

$.registerTypePackagePath("google.golang.org/grpc/credentials/insecure", ["insecure.insecureTC", "insecure.info", "insecure.insecureBundle"])

export class insecureTC {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): insecureTC {
		return new insecureTC(this, true)
	}

	public __goscriptAssign(source: insecureTC): void {
	}

	public ClientHandshake(_p0: context.Context | null, _p1: string, conn: net.Conn | null): [net.Conn | null, credentials.AuthInfo | null, $.GoError] {
		return [conn, $.interfaceValue<credentials.AuthInfo | null>(new info({CommonAuthInfo: new credentials.CommonAuthInfo({SecurityLevel: 1}, true)}, true), "insecure.info", "insecure.info"), null]
	}

	public Clone(): credentials.TransportCredentials | null {
		return $.interfaceValue<credentials.TransportCredentials | null>(new insecureTC(undefined, true), "insecure.insecureTC", "insecure.insecureTC")
	}

	public Info(): credentials.ProtocolInfo {
		return new credentials.ProtocolInfo({SecurityProtocol: "insecure"}, true)
	}

	public OverrideServerName(_p0: string): $.GoError {
		return null
	}

	public ServerHandshake(conn: net.Conn | null): [net.Conn | null, credentials.AuthInfo | null, $.GoError] {
		return [conn, $.interfaceValue<credentials.AuthInfo | null>(new info({CommonAuthInfo: new credentials.CommonAuthInfo({SecurityLevel: 1}, true)}, true), "insecure.info", "insecure.info"), null]
	}

	static __typeInfo = $.registerStructType(
		"insecure.insecureTC",
		() => new insecureTC(),
		() => [$.methodSignature("ClientHandshake", [["_", "context.Context"], ["_", /* @__PURE__ */ $.basicType("string")], ["conn", "net.Conn"]], ["net.Conn", "credentials.AuthInfo", "error"]), $.methodSignature("Clone", [], ["credentials.TransportCredentials"]), $.methodSignature("Info", [], ["credentials.ProtocolInfo"]), $.methodSignature("OverrideServerName", [/* @__PURE__ */ $.basicType("string")], ["error"]), $.methodSignature("ServerHandshake", [["conn", "net.Conn"]], ["net.Conn", "credentials.AuthInfo", "error"])],
		insecureTC,
		() => []
	)
}

export class info {
	public get CommonAuthInfo(): credentials.CommonAuthInfo {
		return this._fields.CommonAuthInfo
	}

	public set CommonAuthInfo(value: credentials.CommonAuthInfo) {
		this._fields.CommonAuthInfo = value
	}

	public _fields: {
		CommonAuthInfo: credentials.CommonAuthInfo
	}

	constructor(init?: Partial<{CommonAuthInfo?: credentials.CommonAuthInfo}>, __goscriptValue?: boolean) {
		this._fields = {
			CommonAuthInfo: init?.CommonAuthInfo ? init.CommonAuthInfo.clone() : new credentials.CommonAuthInfo(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): info {
		return new info(this, true)
	}

	public __goscriptAssign(source: info): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CommonAuthInfo, values.CommonAuthInfo)
	}

	public AuthType(): string {
		return "insecure"
	}

	public GetCommonAuthInfo(): any {
		return $.pointerValue<credentials.CommonAuthInfo>(this.CommonAuthInfo).GetCommonAuthInfo()
	}

	static __typeInfo = $.registerStructType(
		"insecure.info",
		() => new info(),
		() => [$.methodSignature("AuthType", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GetCommonAuthInfo", [], ["credentials.CommonAuthInfo"])],
		info,
		() => [/* @__PURE__ */ $.structField("CommonAuthInfo", "credentials.CommonAuthInfo", [0], 0, true, { anonymous: true })]
	)
}

export class insecureBundle {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): insecureBundle {
		return new insecureBundle(this, true)
	}

	public __goscriptAssign(source: insecureBundle): void {
	}

	public NewWithMode(_p0: string): [credentials.Bundle | null, $.GoError] {
		return [$.interfaceValue<credentials.Bundle | null>(new insecureBundle(undefined, true), "insecure.insecureBundle", "insecure.insecureBundle"), null]
	}

	public PerRPCCredentials(): credentials.PerRPCCredentials | null {
		return null
	}

	public TransportCredentials(): credentials.TransportCredentials | null {
		return NewCredentials()
	}

	static __typeInfo = $.registerStructType(
		"insecure.insecureBundle",
		() => new insecureBundle(),
		() => [$.methodSignature("NewWithMode", [/* @__PURE__ */ $.basicType("string")], ["credentials.Bundle", "error"]), $.methodSignature("PerRPCCredentials", [], ["credentials.PerRPCCredentials"]), $.methodSignature("TransportCredentials", [], ["credentials.TransportCredentials"])],
		insecureBundle,
		() => []
	)
}

export function NewCredentials(): credentials.TransportCredentials | null {
	return $.interfaceValue<credentials.TransportCredentials | null>(new insecureTC(undefined, true), "insecure.insecureTC", "insecure.insecureTC")
}

export function NewBundle(): credentials.Bundle | null {
	return $.interfaceValue<credentials.Bundle | null>(new insecureBundle(undefined, true), "insecure.insecureBundle", "insecure.insecureBundle")
}
