// Generated file based on attributes.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("google.golang.org/grpc/attributes", ["attributes.Attributes"])

export class Attributes {
	public get m(): globalThis.Map<any, any> | null {
		return this._fields.m
	}

	public set m(value: globalThis.Map<any, any> | null) {
		this._fields.m = value
	}

	public _fields: {
		m: globalThis.Map<any, any> | null
	}

	constructor(init?: Partial<{m?: globalThis.Map<any, any> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ?? (null! as globalThis.Map<any, any> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Attributes {
		return new Attributes(this, true)
	}

	public __goscriptAssign(source: Attributes): void {
		const target = this._fields
		const values = source._fields
		target.m = values.m
	}

	public async Equal(o: Attributes | $.VarRef<Attributes> | null): globalThis.Promise<boolean> {
		const a: Attributes | $.VarRef<Attributes> | null = this;
		const a$: Attributes = a == null ? $.pointerTarget<Attributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Attributes>(a)
		const o$: Attributes = o == null ? $.pointerTarget<Attributes>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Attributes>(o)
		if ((a == null) && (o == null)) {
			return true
		}
		if ((a == null) || (o == null)) {
			return false
		}
		if ($.len((a$ as Attributes).m) != $.len((o$ as Attributes).m)) {
			return false
		}
		for (const [k, v] of (a$ as Attributes).m?.entries() ?? []) {
			let [ov, ok] = $.mapGet<any, any, any>((o$ as Attributes).m, k, null)
			if (!ok) {
				// o missing element of a
				return false
			}
			{
				let [eq, __goscriptShadow0] = $.typeAssertTuple<any>(v, { kind: $.TypeKind.Interface, methods: [{ name: "Equal", args: [{ name: "o", type: { kind: $.TypeKind.Interface, methods: [] } }], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
				if (__goscriptShadow0) {
					if (!(__goscriptAwait = (eq !== null && (eq as any).__isVarRef !== true && (eq as any).__goValue === undefined ? (eq as any) : $.pointerValue<any>(eq)).Equal(ov), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return false
					}
				} else {
					if (!$.comparableEqual(v, ov)) {
						// Fallback to a standard equality check if Value is unimplemented.
						return false
					}
				}
			}
		}
		return true
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const a: Attributes | $.VarRef<Attributes> | null = this;
		return [$.stringToBytes(await (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as Attributes).String() : Attributes.prototype.String.call(a))), null]
	}

	public async String(): globalThis.Promise<string> {
		const a: Attributes | $.VarRef<Attributes> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		sb.value.WriteString("{")
		let first = true
		for (const [k, v] of $.pointerValue<Attributes>(a).m?.entries() ?? []) {
			if (!first) {
				sb.value.WriteString(", ")
			}
			sb.value.WriteString(await fmt.Sprintf("%q: %q ", await str(k), await str(v)))
			first = false
		}
		sb.value.WriteString("}")
		return sb.value.String()
	}

	public Value(key: any): any {
		const a: Attributes | $.VarRef<Attributes> | null = this;
		if (a == null) {
			return null
		}
		return $.mapGet<any, any, any>($.pointerValue<Attributes>(a).m, key, null)[0]
	}

	public WithValue(key: any, value: any): Attributes | $.VarRef<Attributes> | null {
		const a: Attributes | $.VarRef<Attributes> | null = this;
		const a$: Attributes = a == null ? $.pointerTarget<Attributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Attributes>(a)
		if (a == null) {
			return New(key, value)
		}
		let n: Attributes | $.VarRef<Attributes> | null = new Attributes({m: $.makeMap<any, any>()})
		let n$: Attributes = n == null ? $.pointerTarget<Attributes>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Attributes>(n)
		for (let [k, v] of (a$ as Attributes).m?.entries() ?? []) {
			$.mapSet((n$ as Attributes).m, k, v)
		}
		$.mapSet((n$ as Attributes).m, key, value)
		return n
	}

	static __typeInfo = $.registerStructType(
		"attributes.Attributes",
		() => new Attributes(),
		() => [$.methodSignature("Equal", [["o", /* @__PURE__ */ $.pointerType("attributes.Attributes")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("WithValue", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("attributes.Attributes")], true)],
		Attributes,
		() => [/* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType({ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { pkgPath: "google.golang.org/grpc/attributes" })]
	)
}

export function New(key: any, value: any): Attributes | $.VarRef<Attributes> | null {
	return new Attributes({m: $.makeMap<any, any>([[key, value]])})
}

export async function str(x: any): globalThis.Promise<string> {
	let s: string = ""
	{
		let [v, ok] = $.typeAssertTuple<fmt.Stringer | null>(x, "fmt.Stringer")
		if (ok) {
			return fmt.Sprint((v as any))
		} else {
			{
				let [__goscriptShadow1, __goscriptShadow2] = $.typeAssertTuple<string>(x, /* @__PURE__ */ $.basicType("string"))
				if (__goscriptShadow2) {
					return __goscriptShadow1
				}
			}
		}
	}
	return fmt.Sprintf("<%p>", x)
}

var __goscriptAwait: any
