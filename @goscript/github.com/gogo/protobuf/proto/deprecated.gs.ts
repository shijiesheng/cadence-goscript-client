// Generated file based on deprecated.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import type * as __goscript_lib from "./lib.gs.ts"
import "@goscript/errors/index.js"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.Stats"])

export class Stats {
	public get Emalloc(): bigint {
		return this._fields.Emalloc
	}

	public set Emalloc(value: bigint) {
		this._fields.Emalloc = value
	}

	public get Dmalloc(): bigint {
		return this._fields.Dmalloc
	}

	public set Dmalloc(value: bigint) {
		this._fields.Dmalloc = value
	}

	public get Encode(): bigint {
		return this._fields.Encode
	}

	public set Encode(value: bigint) {
		this._fields.Encode = value
	}

	public get Decode(): bigint {
		return this._fields.Decode
	}

	public set Decode(value: bigint) {
		this._fields.Decode = value
	}

	public get Chit(): bigint {
		return this._fields.Chit
	}

	public set Chit(value: bigint) {
		this._fields.Chit = value
	}

	public get Cmiss(): bigint {
		return this._fields.Cmiss
	}

	public set Cmiss(value: bigint) {
		this._fields.Cmiss = value
	}

	public get Size(): bigint {
		return this._fields.Size
	}

	public set Size(value: bigint) {
		this._fields.Size = value
	}

	public _fields: {
		Emalloc: bigint
		Dmalloc: bigint
		Encode: bigint
		Decode: bigint
		Chit: bigint
		Cmiss: bigint
		Size: bigint
	}

	constructor(init?: Partial<{Emalloc?: bigint, Dmalloc?: bigint, Encode?: bigint, Decode?: bigint, Chit?: bigint, Cmiss?: bigint, Size?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Emalloc: init?.Emalloc ?? (0n as bigint),
			Dmalloc: init?.Dmalloc ?? (0n as bigint),
			Encode: init?.Encode ?? (0n as bigint),
			Decode: init?.Decode ?? (0n as bigint),
			Chit: init?.Chit ?? (0n as bigint),
			Cmiss: init?.Cmiss ?? (0n as bigint),
			Size: init?.Size ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stats {
		return new Stats(this, true)
	}

	public __goscriptAssign(source: Stats): void {
		const target = this._fields
		const values = source._fields
		target.Emalloc = values.Emalloc
		target.Dmalloc = values.Dmalloc
		target.Encode = values.Encode
		target.Decode = values.Decode
		target.Chit = values.Chit
		target.Cmiss = values.Cmiss
		target.Size = values.Size
	}

	static __typeInfo = $.registerStructType(
		"proto.Stats",
		() => new Stats(),
		() => [],
		Stats,
		() => [/* @__PURE__ */ $.structField("Emalloc", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Dmalloc", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("Encode", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("Decode", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("Chit", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("Cmiss", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true)]
	)
}

export function GetStats(): Stats {
	return new Stats(undefined, true)
}

export function MarshalMessageSet(_p0: any): [$.Slice<number>, $.GoError] {
	return [null, errors.New("proto: not implemented")]
}

export function UnmarshalMessageSet(_p0: $.Slice<number>, _p1: any): $.GoError {
	return errors.New("proto: not implemented")
}

export function MarshalMessageSetJSON(_p0: any): [$.Slice<number>, $.GoError] {
	return [null, errors.New("proto: not implemented")]
}

export function UnmarshalMessageSetJSON(_p0: $.Slice<number>, _p1: any): $.GoError {
	return errors.New("proto: not implemented")
}

export function RegisterMessageSetType(_p0: __goscript_lib.Message | null, _p1: number, _p2: string): void {
}
