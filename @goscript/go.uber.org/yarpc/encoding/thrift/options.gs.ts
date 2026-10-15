// Generated file based on options.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.clientConfig", "thrift.ClientOption", "thrift.registerConfig", "thrift.RegisterOption", "thrift.Option", "thrift.envelopedOption", "thrift.multiplexedOption", "thrift.namedOption", "thrift.protocolOption", "thrift.noWireOption"])

export type ClientOption = {
	applyClientOption(_p0: clientConfig | $.VarRef<clientConfig> | null): void
}

$.registerInterfaceType(
	"thrift.ClientOption",
	null,
	[$.methodSignature("applyClientOption", [/* @__PURE__ */ $.pointerType("thrift.clientConfig")])]
);

export type RegisterOption = {
	applyRegisterOption(_p0: registerConfig | $.VarRef<registerConfig> | null): void
}

$.registerInterfaceType(
	"thrift.RegisterOption",
	null,
	[$.methodSignature("applyRegisterOption", [/* @__PURE__ */ $.pointerType("thrift.registerConfig")])]
);

export type Option = {
	applyClientOption(_p0: clientConfig | $.VarRef<clientConfig> | null): void
	applyRegisterOption(_p0: registerConfig | $.VarRef<registerConfig> | null): void
}

$.registerInterfaceType(
	"thrift.Option",
	null,
	[$.methodSignature("applyClientOption", [/* @__PURE__ */ $.pointerType("thrift.clientConfig")]), $.methodSignature("applyRegisterOption", [/* @__PURE__ */ $.pointerType("thrift.registerConfig")])]
);

export class clientConfig {
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public get Protocol(): protocol.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: protocol.Protocol | null) {
		this._fields.Protocol = value
	}

	public get Enveloping(): boolean {
		return this._fields.Enveloping
	}

	public set Enveloping(value: boolean) {
		this._fields.Enveloping = value
	}

	public get Multiplexed(): boolean {
		return this._fields.Multiplexed
	}

	public set Multiplexed(value: boolean) {
		this._fields.Multiplexed = value
	}

	public get NoWire(): boolean {
		return this._fields.NoWire
	}

	public set NoWire(value: boolean) {
		this._fields.NoWire = value
	}

	public _fields: {
		ServiceName: string
		Protocol: protocol.Protocol | null
		Enveloping: boolean
		Multiplexed: boolean
		NoWire: boolean
	}

	constructor(init?: Partial<{ServiceName?: string, Protocol?: protocol.Protocol | null, Enveloping?: boolean, Multiplexed?: boolean, NoWire?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string),
			Protocol: init?.Protocol ?? (null! as protocol.Protocol | null),
			Enveloping: init?.Enveloping ?? (false as boolean),
			Multiplexed: init?.Multiplexed ?? (false as boolean),
			NoWire: init?.NoWire ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientConfig {
		return new clientConfig(this, true)
	}

	public __goscriptAssign(source: clientConfig): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "protocol.Protocol")
		target.Enveloping = values.Enveloping
		target.Multiplexed = values.Multiplexed
		target.NoWire = values.NoWire
	}

	static __typeInfo = $.registerStructType(
		"thrift.clientConfig",
		() => new clientConfig(),
		() => [],
		clientConfig,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Protocol", "protocol.Protocol", [1], 16, true), /* @__PURE__ */ $.structField("Enveloping", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("Multiplexed", /* @__PURE__ */ $.basicType("bool"), [3], 33, true), /* @__PURE__ */ $.structField("NoWire", /* @__PURE__ */ $.basicType("bool"), [4], 34, true)]
	)
}

export class registerConfig {
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public get Protocol(): protocol.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: protocol.Protocol | null) {
		this._fields.Protocol = value
	}

	public get Enveloping(): boolean {
		return this._fields.Enveloping
	}

	public set Enveloping(value: boolean) {
		this._fields.Enveloping = value
	}

	public get NoWire(): boolean {
		return this._fields.NoWire
	}

	public set NoWire(value: boolean) {
		this._fields.NoWire = value
	}

	public _fields: {
		ServiceName: string
		Protocol: protocol.Protocol | null
		Enveloping: boolean
		NoWire: boolean
	}

	constructor(init?: Partial<{ServiceName?: string, Protocol?: protocol.Protocol | null, Enveloping?: boolean, NoWire?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string),
			Protocol: init?.Protocol ?? (null! as protocol.Protocol | null),
			Enveloping: init?.Enveloping ?? (false as boolean),
			NoWire: init?.NoWire ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): registerConfig {
		return new registerConfig(this, true)
	}

	public __goscriptAssign(source: registerConfig): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "protocol.Protocol")
		target.Enveloping = values.Enveloping
		target.NoWire = values.NoWire
	}

	static __typeInfo = $.registerStructType(
		"thrift.registerConfig",
		() => new registerConfig(),
		() => [],
		registerConfig,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Protocol", "protocol.Protocol", [1], 16, true), /* @__PURE__ */ $.structField("Enveloping", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("NoWire", /* @__PURE__ */ $.basicType("bool"), [3], 33, true)]
	)
}

export class envelopedOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): envelopedOption {
		return new envelopedOption(this, true)
	}

	public __goscriptAssign(source: envelopedOption): void {
	}

	public applyClientOption(c: clientConfig | $.VarRef<clientConfig> | null): void {
		const e = this;
		$.pointerValue<clientConfig>(c).Enveloping = true
	}

	public applyRegisterOption(c: registerConfig | $.VarRef<registerConfig> | null): void {
		const e = this;
		$.pointerValue<registerConfig>(c).Enveloping = true
	}

	static __typeInfo = $.registerStructType(
		"thrift.envelopedOption",
		() => new envelopedOption(),
		() => [$.methodSignature("applyClientOption", [["c", /* @__PURE__ */ $.pointerType("thrift.clientConfig")]]), $.methodSignature("applyRegisterOption", [["c", /* @__PURE__ */ $.pointerType("thrift.registerConfig")]])],
		envelopedOption,
		() => []
	)
}

export class multiplexedOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): multiplexedOption {
		return new multiplexedOption(this, true)
	}

	public __goscriptAssign(source: multiplexedOption): void {
	}

	public applyClientOption(c: clientConfig | $.VarRef<clientConfig> | null): void {
		$.pointerValue<clientConfig>(c).Multiplexed = true
	}

	static __typeInfo = $.registerStructType(
		"thrift.multiplexedOption",
		() => new multiplexedOption(),
		() => [$.methodSignature("applyClientOption", [["c", /* @__PURE__ */ $.pointerType("thrift.clientConfig")]])],
		multiplexedOption,
		() => []
	)
}

export class namedOption {
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public _fields: {
		ServiceName: string
	}

	constructor(init?: Partial<{ServiceName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): namedOption {
		return new namedOption(this, true)
	}

	public __goscriptAssign(source: namedOption): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
	}

	public applyClientOption(c: clientConfig | $.VarRef<clientConfig> | null): void {
		const n = this;
		const c$: clientConfig = c == null ? $.pointerTarget<clientConfig>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<clientConfig>(c)
		if ($.stringEqual((c$ as clientConfig).ServiceName, "")) {
			;(c$ as clientConfig).ServiceName = n.ServiceName
		}
	}

	public applyRegisterOption(c: registerConfig | $.VarRef<registerConfig> | null): void {
		const n = this;
		const c$: registerConfig = c == null ? $.pointerTarget<registerConfig>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<registerConfig>(c)
		if ($.stringEqual((c$ as registerConfig).ServiceName, "")) {
			;(c$ as registerConfig).ServiceName = n.ServiceName
		}
	}

	static __typeInfo = $.registerStructType(
		"thrift.namedOption",
		() => new namedOption(),
		() => [$.methodSignature("applyClientOption", [["c", /* @__PURE__ */ $.pointerType("thrift.clientConfig")]]), $.methodSignature("applyRegisterOption", [["c", /* @__PURE__ */ $.pointerType("thrift.registerConfig")]])],
		namedOption,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class protocolOption {
	public get Protocol(): protocol.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: protocol.Protocol | null) {
		this._fields.Protocol = value
	}

	public _fields: {
		Protocol: protocol.Protocol | null
	}

	constructor(init?: Partial<{Protocol?: protocol.Protocol | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Protocol: init?.Protocol ?? (null! as protocol.Protocol | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): protocolOption {
		return new protocolOption(this, true)
	}

	public __goscriptAssign(source: protocolOption): void {
		const target = this._fields
		const values = source._fields
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "protocol.Protocol")
	}

	public applyClientOption(c: clientConfig | $.VarRef<clientConfig> | null): void {
		const p = this;
		$.pointerValue<clientConfig>(c).Protocol = p.Protocol
	}

	public applyRegisterOption(c: registerConfig | $.VarRef<registerConfig> | null): void {
		const p = this;
		$.pointerValue<registerConfig>(c).Protocol = p.Protocol
	}

	static __typeInfo = $.registerStructType(
		"thrift.protocolOption",
		() => new protocolOption(),
		() => [$.methodSignature("applyClientOption", [["c", /* @__PURE__ */ $.pointerType("thrift.clientConfig")]]), $.methodSignature("applyRegisterOption", [["c", /* @__PURE__ */ $.pointerType("thrift.registerConfig")]])],
		protocolOption,
		() => [/* @__PURE__ */ $.structField("Protocol", "protocol.Protocol", [0], 0, true)]
	)
}

export class noWireOption {
	public get Enable(): boolean {
		return this._fields.Enable
	}

	public set Enable(value: boolean) {
		this._fields.Enable = value
	}

	public _fields: {
		Enable: boolean
	}

	constructor(init?: Partial<{Enable?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Enable: init?.Enable ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noWireOption {
		return new noWireOption(this, true)
	}

	public __goscriptAssign(source: noWireOption): void {
		const target = this._fields
		const values = source._fields
		target.Enable = values.Enable
	}

	public applyClientOption(c: clientConfig | $.VarRef<clientConfig> | null): void {
		const nw = this;
		$.pointerValue<clientConfig>(c).NoWire = nw.Enable
	}

	public applyRegisterOption(c: registerConfig | $.VarRef<registerConfig> | null): void {
		const nw = this;
		$.pointerValue<registerConfig>(c).NoWire = nw.Enable
	}

	static __typeInfo = $.registerStructType(
		"thrift.noWireOption",
		() => new noWireOption(),
		() => [$.methodSignature("applyClientOption", [["c", /* @__PURE__ */ $.pointerType("thrift.clientConfig")]]), $.methodSignature("applyRegisterOption", [["c", /* @__PURE__ */ $.pointerType("thrift.registerConfig")]])],
		noWireOption,
		() => [/* @__PURE__ */ $.structField("Enable", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export let Enveloped: Option | null = $.interfaceValue<Option | null>(new envelopedOption(undefined, true), "thrift.envelopedOption", "thrift.envelopedOption")

export function __goscript_set_Enveloped(__goscriptValue: Option | null): void {
	Enveloped = __goscriptValue
}

export let Multiplexed: ClientOption | null = $.interfaceValue<ClientOption | null>(new multiplexedOption(undefined, true), "thrift.multiplexedOption", "thrift.multiplexedOption")

export function __goscript_set_Multiplexed(__goscriptValue: ClientOption | null): void {
	Multiplexed = __goscriptValue
}

export function Named(n: string): Option | null {
	return $.interfaceValue<Option | null>(new namedOption({ServiceName: n}, true), "thrift.namedOption", "thrift.namedOption")
}

export function Protocol(p: protocol.Protocol | null): Option | null {
	return $.interfaceValue<Option | null>(new protocolOption({Protocol: p}, true), "thrift.protocolOption", "thrift.protocolOption")
}

export function NoWire(enable: boolean): Option | null {
	return $.interfaceValue<Option | null>(new noWireOption({Enable: enable}, true), "thrift.noWireOption", "thrift.noWireOption")
}
