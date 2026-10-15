// Generated file based on nettrace.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("internal/nettrace", ["nettrace.TraceKey", "nettrace.LookupIPAltResolverKey", "nettrace.Trace"])

export class TraceKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TraceKey {
		return new TraceKey(this, true)
	}

	public __goscriptAssign(source: TraceKey): void {
	}

	static __typeInfo = $.registerStructType(
		"nettrace.TraceKey",
		() => new TraceKey(),
		() => [],
		TraceKey,
		() => []
	)
}

export class LookupIPAltResolverKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LookupIPAltResolverKey {
		return new LookupIPAltResolverKey(this, true)
	}

	public __goscriptAssign(source: LookupIPAltResolverKey): void {
	}

	static __typeInfo = $.registerStructType(
		"nettrace.LookupIPAltResolverKey",
		() => new LookupIPAltResolverKey(),
		() => [],
		LookupIPAltResolverKey,
		() => []
	)
}

export class Trace {
	// DNSStart is called with the hostname of a DNS lookup
	// before it begins.
	public get DNSStart(): ((name: string) => void) | null {
		return this._fields.DNSStart
	}

	public set DNSStart(value: ((name: string) => void) | null) {
		this._fields.DNSStart = value
	}

	// DNSDone is called after a DNS lookup completes (or fails).
	// The coalesced parameter is whether singleflight de-duped
	// the call. The addrs are of type net.IPAddr but can't
	// actually be for circular dependency reasons.
	public get DNSDone(): ((netIPs: $.Slice<any>, coalesced: boolean, err: $.GoError) => void) | null {
		return this._fields.DNSDone
	}

	public set DNSDone(value: ((netIPs: $.Slice<any>, coalesced: boolean, err: $.GoError) => void) | null) {
		this._fields.DNSDone = value
	}

	// ConnectStart is called before a Dial, excluding Dials made
	// during DNS lookups. In the case of DualStack (Happy Eyeballs)
	// dialing, this may be called multiple times, from multiple
	// goroutines.
	public get ConnectStart(): ((network: string, addr: string) => void) | null {
		return this._fields.ConnectStart
	}

	public set ConnectStart(value: ((network: string, addr: string) => void) | null) {
		this._fields.ConnectStart = value
	}

	// ConnectDone is called after a Dial with the results, excluding
	// Dials made during DNS lookups. It may also be called multiple
	// times, like ConnectStart.
	public get ConnectDone(): ((network: string, addr: string, err: $.GoError) => void) | null {
		return this._fields.ConnectDone
	}

	public set ConnectDone(value: ((network: string, addr: string, err: $.GoError) => void) | null) {
		this._fields.ConnectDone = value
	}

	public _fields: {
		DNSStart: ((name: string) => void) | null
		DNSDone: ((netIPs: $.Slice<any>, coalesced: boolean, err: $.GoError) => void) | null
		ConnectStart: ((network: string, addr: string) => void) | null
		ConnectDone: ((network: string, addr: string, err: $.GoError) => void) | null
	}

	constructor(init?: Partial<{DNSStart?: ((name: string) => void) | null, DNSDone?: ((netIPs: $.Slice<any>, coalesced: boolean, err: $.GoError) => void) | null, ConnectStart?: ((network: string, addr: string) => void) | null, ConnectDone?: ((network: string, addr: string, err: $.GoError) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			DNSStart: init?.DNSStart ?? (null! as ((name: string) => void) | null),
			DNSDone: init?.DNSDone ?? (null! as ((netIPs: $.Slice<any>, coalesced: boolean, err: $.GoError) => void) | null),
			ConnectStart: init?.ConnectStart ?? (null! as ((network: string, addr: string) => void) | null),
			ConnectDone: init?.ConnectDone ?? (null! as ((network: string, addr: string, err: $.GoError) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Trace {
		return new Trace(this, true)
	}

	public __goscriptAssign(source: Trace): void {
		const target = this._fields
		const values = source._fields
		target.DNSStart = values.DNSStart
		target.DNSDone = values.DNSDone
		target.ConnectStart = values.ConnectStart
		target.ConnectDone = values.ConnectDone
	}

	static __typeInfo = $.registerStructType(
		"nettrace.Trace",
		() => new Trace(),
		() => [],
		Trace,
		() => [/* @__PURE__ */ $.structField("DNSStart", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("DNSDone", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), /* @__PURE__ */ $.basicType("bool"), "error"], results: [] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("ConnectStart", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [2], 16, true), /* @__PURE__ */ $.structField("ConnectDone", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "error"], results: [] } as $.FunctionTypeInfo), [3], 24, true)]
	)
}
