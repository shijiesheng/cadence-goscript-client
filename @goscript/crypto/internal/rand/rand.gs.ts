// Generated file based on rand.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as boring from "@goscript/crypto/internal/boring/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as randutil from "@goscript/crypto/internal/randutil/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as io from "@goscript/io/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_rand_fips140v1_26 from "./rand_fips140v1.26.gs.ts"

import * as __goscript_random_fips140v1_28 from "./random_fips140v1.28.gs.ts"
import "@goscript/crypto/internal/boring/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/randutil/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/index.js"
import "./rand_fips140v1.26.gs.ts"
import "./random_fips140v1.28.gs.ts"

$.registerTypePackagePath("crypto/internal/rand", ["rand.reader"])

export type defaultReader = drbg.DefaultReader

export class reader {
	public get defaultReader(): defaultReader {
		return this._fields.defaultReader
	}

	public set defaultReader(value: defaultReader) {
		this._fields.defaultReader = value
	}

	public _fields: {
		defaultReader: defaultReader
	}

	constructor(init?: Partial<{defaultReader?: defaultReader}>, __goscriptValue?: boolean) {
		this._fields = {
			defaultReader: init?.defaultReader ? init.defaultReader.clone() : new drbg.DefaultReader(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): reader {
		return new reader(this, true)
	}

	public __goscriptAssign(source: reader): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.defaultReader, values.defaultReader)
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const r = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		if (boring.Enabled) {
			{
				let [, __goscriptShadow0] = boring.randReader_Read(boring.RandReader, b)
				if (__goscriptShadow0 != null) {
					$.panic($.concatString("crypto/rand: boring RandReader failed: ", (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow0)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
			}
			return [$.sliceLen(b), null]
		}
		await drbg.Read(b)
		return [$.sliceLen(b), null]
	}

	static __typeInfo = $.registerStructType(
		"rand.reader",
		() => new reader(),
		() => [$.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		reader,
		() => [/* @__PURE__ */ $.structField("defaultReader", "drbg.DefaultReader", [0], 0, false, { pkgPath: "crypto/internal/rand", anonymous: true })]
	)
}

export let Reader: io.Reader | null = $.interfaceValue<io.Reader | null>(new reader(undefined, true), "rand.reader", "rand.reader")

export function __goscript_set_Reader(__goscriptValue: io.Reader | null): void {
	Reader = __goscriptValue
}

export function SetTestingReader(r: io.Reader | null): void {
	testingReader = r
	__goscript_rand_fips140v1_26.fips140SetTestingReader(r)
}

export let testingReader: io.Reader | null = null! as io.Reader | null

export function __goscript_set_testingReader(__goscriptValue: io.Reader | null): void {
	testingReader = __goscriptValue
}

export let cryptocustomrand: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("cryptocustomrand")

export function __goscript_set_cryptocustomrand(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	cryptocustomrand = __goscriptValue
}

export async function CustomReader(r: io.Reader | null): globalThis.Promise<io.Reader | null> {
	if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(cryptocustomrand)), "1")) {
		if (!__goscript_random_fips140v1_28.IsDefaultReader(r)) {
			if (!$.comparableEqual(r, testingReader)) {
				await randutil.MaybeReadByte(r)
			}
			godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(cryptocustomrand))
		}
		return r
	}
	return Reader
}

var __goscriptAwait: any
