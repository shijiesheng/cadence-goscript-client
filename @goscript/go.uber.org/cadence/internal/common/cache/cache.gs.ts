// Generated file based on cache.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/cache", ["cache.Cache", "cache.Options", "cache.RemovedFunc"])

export type Cache = {
	Delete(key: string): void
	Exist(key: string): boolean | globalThis.Promise<boolean>
	Get(key: string): any | globalThis.Promise<any>
	Put(key: string, value: any): any | globalThis.Promise<any>
	PutIfNotExist(key: string, value: any): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
	Release(key: string): void
	Size(): number | globalThis.Promise<number>
}

$.registerInterfaceType(
	"cache.Cache",
	null,
	[$.methodSignature("Delete", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Exist", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Get", [["key", /* @__PURE__ */ $.basicType("string")]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Put", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("PutIfNotExist", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("Release", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type RemovedFunc = ((_p0: any) => void) | null

export class Options {
	// TTL controls the time-to-live for a given cache entry.  Cache entries that
	// are older than the TTL will not be returned
	public get TTL(): time.Duration {
		return this._fields.TTL
	}

	public set TTL(value: time.Duration) {
		this._fields.TTL = value
	}

	// InitialCapacity controls the initial capacity of the cache
	public get InitialCapacity(): number {
		return this._fields.InitialCapacity
	}

	public set InitialCapacity(value: number) {
		this._fields.InitialCapacity = value
	}

	// Pin prevents in-use objects from getting evicted
	public get Pin(): boolean {
		return this._fields.Pin
	}

	public set Pin(value: boolean) {
		this._fields.Pin = value
	}

	// RemovedFunc is an optional function called when an element
	// is scheduled for deletion
	public get RemovedFunc(): ((_p0: any) => void) | null {
		return this._fields.RemovedFunc
	}

	public set RemovedFunc(value: ((_p0: any) => void) | null) {
		this._fields.RemovedFunc = value
	}

	public _fields: {
		TTL: time.Duration
		InitialCapacity: number
		Pin: boolean
		RemovedFunc: ((_p0: any) => void) | null
	}

	constructor(init?: Partial<{TTL?: time.Duration, InitialCapacity?: number, Pin?: boolean, RemovedFunc?: ((_p0: any) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TTL: init?.TTL ?? (0n as time.Duration),
			InitialCapacity: init?.InitialCapacity ?? (0 as number),
			Pin: init?.Pin ?? (false as boolean),
			RemovedFunc: init?.RemovedFunc ?? (null! as ((_p0: any) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Options {
		return new Options(this, true)
	}

	public __goscriptAssign(source: Options): void {
		const target = this._fields
		const values = source._fields
		target.TTL = values.TTL
		target.InitialCapacity = values.InitialCapacity
		target.Pin = values.Pin
		target.RemovedFunc = values.RemovedFunc
	}

	static __typeInfo = $.registerStructType(
		"cache.Options",
		() => new Options(),
		() => [],
		Options,
		() => [/* @__PURE__ */ $.structField("TTL", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("InitialCapacity", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Pin", /* @__PURE__ */ $.basicType("bool"), [2], 16, true), /* @__PURE__ */ $.structField("RemovedFunc", ({ kind: $.TypeKind.Function, name: "cache.RemovedFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), [3], 24, true)]
	)
}
