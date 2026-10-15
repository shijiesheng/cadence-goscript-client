// Generated file based on valueparser.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/strconv/index.js"

$.registerTypePackagePath("github.com/prometheus/procfs/internal/util", ["util.ValueParser"])

export class ValueParser {
	public get v(): string {
		return this._fields.v
	}

	public set v(value: string) {
		this._fields.v = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		v: string
		err: $.GoError
	}

	constructor(init?: Partial<{v?: string, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ?? ("" as string),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ValueParser {
		return new ValueParser(this, true)
	}

	public __goscriptAssign(source: ValueParser): void {
		const target = this._fields
		const values = source._fields
		target.v = values.v
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Err(): $.GoError {
		const vp: ValueParser | $.VarRef<ValueParser> | null = this;
		return $.pointerValue<ValueParser>(vp).err
	}

	public Int(): number {
		const vp: ValueParser | $.VarRef<ValueParser> | null = this;
		return $.int((vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as ValueParser).int64() : ValueParser.prototype.int64.call(vp)))
	}

	public PInt64(): $.VarRef<bigint> | null {
		const vp: ValueParser | $.VarRef<ValueParser> | null = this;
		if ($.pointerValue<ValueParser>(vp).err != null) {
			return null
		}

		let v = $.varRef((vp !== null && (vp as any).__isVarRef !== true && (vp as any).__goValue === undefined ? ((vp as any) as ValueParser).int64() : ValueParser.prototype.int64.call(vp)))
		return v
	}

	public PUInt64(): $.VarRef<bigint> | null {
		let vp: ValueParser | $.VarRef<ValueParser> | null = this;
		const vp$: ValueParser = vp == null ? $.pointerTarget<ValueParser>(vp) : (vp as any).__isVarRef === true ? (vp as any).value : (vp as any).__goValue === undefined ? (vp as any) : $.pointerTarget<ValueParser>(vp)
		if ((vp$ as ValueParser).err != null) {
			return null
		}

		// A base value of zero makes ParseInt infer the correct base using the
		// string's prefix, if any.
		const base: number = 0
		let __goscriptTuple0: any = strconv.ParseUint((vp$ as ValueParser).v, 0, 64)
		let v = $.varRef(__goscriptTuple0[0])
		let err = __goscriptTuple0[1]
		if (err != null) {
			;(vp$ as ValueParser).err = err
			return null
		}

		return v
	}

	public int64(): bigint {
		let vp: ValueParser | $.VarRef<ValueParser> | null = this;
		const vp$: ValueParser = vp == null ? $.pointerTarget<ValueParser>(vp) : (vp as any).__isVarRef === true ? (vp as any).value : (vp as any).__goValue === undefined ? (vp as any) : $.pointerTarget<ValueParser>(vp)
		if ((vp$ as ValueParser).err != null) {
			return 0n
		}

		// A base value of zero makes ParseInt infer the correct base using the
		// string's prefix, if any.
		const base: number = 0
		let __goscriptTuple1: any = strconv.ParseInt((vp$ as ValueParser).v, 0, 64)
		let v = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			;(vp$ as ValueParser).err = err
			return 0n
		}

		return v
	}

	static __typeInfo = $.registerStructType(
		"util.ValueParser",
		() => new ValueParser(),
		() => [$.methodSignature("Err", [], ["error"], true), $.methodSignature("Int", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("PInt64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], true), $.methodSignature("PUInt64", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))], true), $.methodSignature("int64", [], [/* @__PURE__ */ $.basicType("int64")], true)],
		ValueParser,
		() => [/* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/prometheus/procfs/internal/util" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "github.com/prometheus/procfs/internal/util" })]
	)
}

export function NewValueParser(v: string): ValueParser | $.VarRef<ValueParser> | null {
	return new ValueParser({v: v})
}
