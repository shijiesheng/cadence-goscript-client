// Generated file based on restricter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/x/restriction", ["restriction.Checker", "restriction.Tuple", "restriction.checker"])

export type Checker = {
	Check(encoding: transport.Encoding, transportName: string): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"restriction.Checker",
	null,
	[$.methodSignature("Check", [["encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding")], ["transportName", /* @__PURE__ */ $.basicType("string")]], ["error"])]
);

export class Tuple {
	public get Transport(): string {
		return this._fields.Transport
	}

	public set Transport(value: string) {
		this._fields.Transport = value
	}

	public get Encoding(): transport.Encoding {
		return this._fields.Encoding
	}

	public set Encoding(value: transport.Encoding) {
		this._fields.Encoding = value
	}

	public _fields: {
		Transport: string
		Encoding: transport.Encoding
	}

	constructor(init?: Partial<{Transport?: string, Encoding?: transport.Encoding}>, __goscriptValue?: boolean) {
		this._fields = {
			Transport: init?.Transport ?? ("" as string),
			Encoding: init?.Encoding ?? ("" as transport.Encoding)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Tuple {
		return new Tuple(this, true)
	}

	public __goscriptAssign(source: Tuple): void {
		const target = this._fields
		const values = source._fields
		target.Transport = values.Transport
		target.Encoding = values.Encoding
	}

	public async String(): globalThis.Promise<string> {
		const t = this;
		return fmt.Sprintf("%s/%s", t.Transport, $.namedValueInterfaceValue<any>(t.Encoding, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")))
	}

	public Validate(): $.GoError {
		const t = this;
		if (($.stringEqual(t.Transport, "")) || ($.stringEqual(t.Encoding, ""))) {
			return errors.New("tuple missing must have all fields set")
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"restriction.Tuple",
		() => new Tuple(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Validate", [], ["error"])],
		Tuple,
		() => [/* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding"), [1], 16, true)]
	)
}

export class checker {
	public get availableMsg(): string {
		return this._fields.availableMsg
	}

	public set availableMsg(value: string) {
		this._fields.availableMsg = value
	}

	public get tuples(): globalThis.Map<Tuple, {}> | null {
		return this._fields.tuples
	}

	public set tuples(value: globalThis.Map<Tuple, {}> | null) {
		this._fields.tuples = value
	}

	public _fields: {
		availableMsg: string
		tuples: globalThis.Map<Tuple, {}> | null
	}

	constructor(init?: Partial<{availableMsg?: string, tuples?: globalThis.Map<Tuple, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			availableMsg: init?.availableMsg ?? ("" as string),
			tuples: init?.tuples ?? (null! as globalThis.Map<Tuple, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): checker {
		return new checker(this, true)
	}

	public __goscriptAssign(source: checker): void {
		const target = this._fields
		const values = source._fields
		target.availableMsg = values.availableMsg
		target.tuples = values.tuples
	}

	public async Check(encoding: transport.Encoding, transportName: string): globalThis.Promise<$.GoError> {
		const r: checker | $.VarRef<checker> | null = this;
		const r$: checker = r == null ? $.pointerTarget<checker>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<checker>(r)
		let t = new Tuple({Transport: transportName, Encoding: encoding}, true)

		{
			let [, ok] = $.mapGet<Tuple, {}, {}>((r$ as checker).tuples, t, {})
			if (ok) {
				return null
			}
		}

		return fmt.Errorf("%q is not a whitelisted combination, available: %q", await t.String(), (r$ as checker).availableMsg)
	}

	static __typeInfo = $.registerStructType(
		"restriction.checker",
		() => new checker(),
		() => [$.methodSignature("Check", [["encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding")], ["transportName", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		checker,
		() => [/* @__PURE__ */ $.structField("availableMsg", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/x/restriction" }), /* @__PURE__ */ $.structField("tuples", /* @__PURE__ */ $.mapType("restriction.Tuple", { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/x/restriction" })]
	)
}

export async function NewChecker(tuples: $.Slice<Tuple>): globalThis.Promise<[Checker | null, $.GoError]> {
	if ($.sliceLen(tuples) == 0) {
		return [null, errors.New("NewChecker requires at least one whitelisted tuple")]
	}

	let m: globalThis.Map<Tuple, {}> | null = $.makeMap<Tuple, {}>()
	for (let __goscriptRangeTarget0 = tuples, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let t = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Tuple)).clone()
		{
			let err = t.Validate()
			if (err != null) {
				return [null, err]
			}
		}
		$.mapSet(m, (t).clone(), {})
	}

	let elements: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(tuples), "string")
	for (let __goscriptRangeTarget1 = tuples, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let t = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Tuple)).clone()
		elements = $.appendOne(elements, await $.markAsStructValue($.cloneStructValue(t)).String())
	}

	return [$.interfaceValue<Checker | null>((() => { const __goscriptLiteralField0 = strings.Join(elements, ","); return new checker({tuples: m, availableMsg: __goscriptLiteralField0}) })(), "*restriction.checker", /* @__PURE__ */ $.pointerType("restriction.checker")), null]
}
