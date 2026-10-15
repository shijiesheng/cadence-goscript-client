// Generated file based on matchers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("github.com/golang/mock/gomock", ["gomock.Matcher", "gomock.matcher", "gomock.StringerFunc", "gomock.GotFormatter", "gomock.GotFormatterFunc", "gomock.anyMatcher", "gomock.eqMatcher", "gomock.nilMatcher", "gomock.notMatcher", "gomock.assignableToTypeOfMatcher", "gomock.allMatcher", "gomock.lenMatcher", "gomock.inAnyOrderMatcher"])

export type Matcher = {
	Matches(x: any): boolean | globalThis.Promise<boolean>
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"gomock.Matcher",
	null,
	[$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type StringerFunc = (() => string | globalThis.Promise<string>) | null

$.registerNamedValueType(
	"gomock.StringerFunc",
	{String: (receiver: any, ...args: any[]) => (StringerFunc_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*gomock.StringerFunc",
	{String: (receiver: any, ...args: any[]) => (StringerFunc_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type GotFormatter = {
	Got(got: any): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"gomock.GotFormatter",
	null,
	[$.methodSignature("Got", [["got", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("string")])]
);

export type GotFormatterFunc = ((got: any) => string | globalThis.Promise<string>) | null

$.registerNamedValueType(
	"gomock.GotFormatterFunc",
	{Got: (receiver: any, ...args: any[]) => (GotFormatterFunc_Got as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Got", [["got", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*gomock.GotFormatterFunc",
	{Got: (receiver: any, ...args: any[]) => (GotFormatterFunc_Got as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Got", [["got", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("string")])]
);

export class anyMatcher {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): anyMatcher {
		return new anyMatcher(this, true)
	}

	public __goscriptAssign(source: anyMatcher): void {
	}

	public Matches(_p0: any): boolean {
		return true
	}

	public String(): string {
		return "is anything"
	}

	static __typeInfo = $.registerStructType(
		"gomock.anyMatcher",
		() => new anyMatcher(),
		() => [$.methodSignature("Matches", [{ kind: $.TypeKind.Interface, methods: [] }], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		anyMatcher,
		() => []
	)
}

export class eqMatcher {
	public get x(): any {
		return this._fields.x
	}

	public set x(value: any) {
		this._fields.x = value
	}

	public _fields: {
		x: any
	}

	constructor(init?: Partial<{x?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): eqMatcher {
		return new eqMatcher(this, true)
	}

	public __goscriptAssign(source: eqMatcher): void {
		const target = this._fields
		const values = source._fields
		target.x = $.assignFieldValue(target.x, values.x, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Matches(x: any): globalThis.Promise<boolean> {
		const e = this;
		// In case, some value is nil
		if ((e.x == null) || (x == null)) {
			return reflect.DeepEqual(e.x, x)
		}

		// Check if types assignable and convert them to common type
		let x1Val = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(e.x)))
		let x2Val = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(x)))

		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(x1Val)).Type()).AssignableTo($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(x2Val)).Type())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			let x1ValConverted = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(x1Val)).Convert($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(x2Val)).Type())!)))
			return reflect.DeepEqual($.markAsStructValue($.cloneStructValue(x1ValConverted)).Interface(), $.markAsStructValue($.cloneStructValue(x2Val)).Interface())
		}

		return false
	}

	public async String(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("is equal to %v (%T)", e.x, e.x)
	}

	static __typeInfo = $.registerStructType(
		"gomock.eqMatcher",
		() => new eqMatcher(),
		() => [$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		eqMatcher,
		() => [/* @__PURE__ */ $.structField("x", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class nilMatcher {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nilMatcher {
		return new nilMatcher(this, true)
	}

	public __goscriptAssign(source: nilMatcher): void {
	}

	public Matches(x: any): boolean {
		if (x == null) {
			return true
		}

		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(x)))
		switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
			case reflect.Chan:
			case reflect.Func:
			case reflect.Interface:
			case reflect.Map:
			case reflect.Ptr:
			case reflect.Slice:
			{
				return $.markAsStructValue($.cloneStructValue(v)).IsNil()
				break
			}
		}

		return false
	}

	public String(): string {
		return "is nil"
	}

	static __typeInfo = $.registerStructType(
		"gomock.nilMatcher",
		() => new nilMatcher(),
		() => [$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		nilMatcher,
		() => []
	)
}

export class notMatcher {
	public get m(): Matcher | null {
		return this._fields.m
	}

	public set m(value: Matcher | null) {
		this._fields.m = value
	}

	public _fields: {
		m: Matcher | null
	}

	constructor(init?: Partial<{m?: Matcher | null}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ?? (null! as Matcher | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): notMatcher {
		return new notMatcher(this, true)
	}

	public __goscriptAssign(source: notMatcher): void {
		const target = this._fields
		const values = source._fields
		target.m = $.assignFieldValue(target.m, values.m, "gomock.Matcher")
	}

	public async Matches(x: any): globalThis.Promise<boolean> {
		const n = this;
		return !(__goscriptAwait = $.pointerValue<Exclude<Matcher, null>>(n.m).Matches(x), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async String(): globalThis.Promise<string> {
		const n = this;
		return $.concatString(($.concatString("not(", (__goscriptAwait = $.pointerValue<Exclude<Matcher, null>>(n.m).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), ")")
	}

	static __typeInfo = $.registerStructType(
		"gomock.notMatcher",
		() => new notMatcher(),
		() => [$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		notMatcher,
		() => [/* @__PURE__ */ $.structField("m", "gomock.Matcher", [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class assignableToTypeOfMatcher {
	public get targetType(): reflect.Type | null {
		return this._fields.targetType
	}

	public set targetType(value: reflect.Type | null) {
		this._fields.targetType = value
	}

	public _fields: {
		targetType: reflect.Type | null
	}

	constructor(init?: Partial<{targetType?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			targetType: init?.targetType ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): assignableToTypeOfMatcher {
		return new assignableToTypeOfMatcher(this, true)
	}

	public __goscriptAssign(source: assignableToTypeOfMatcher): void {
		const target = this._fields
		const values = source._fields
		target.targetType = $.assignFieldValue(target.targetType, values.targetType, "reflect.Type")
	}

	public async Matches(x: any): globalThis.Promise<boolean> {
		const m = this;
		return $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(x)).AssignableTo($.pointerValueOrNil(m.targetType)!)
	}

	public async String(): globalThis.Promise<string> {
		const m = this;
		return $.concatString("is assignable to ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(m.targetType).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"gomock.assignableToTypeOfMatcher",
		() => new assignableToTypeOfMatcher(),
		() => [$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		assignableToTypeOfMatcher,
		() => [/* @__PURE__ */ $.structField("targetType", "reflect.Type", [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class allMatcher {
	public get matchers(): $.Slice<Matcher | null> {
		return this._fields.matchers
	}

	public set matchers(value: $.Slice<Matcher | null>) {
		this._fields.matchers = value
	}

	public _fields: {
		matchers: $.Slice<Matcher | null>
	}

	constructor(init?: Partial<{matchers?: $.Slice<Matcher | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			matchers: init?.matchers ?? (null! as $.Slice<Matcher | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): allMatcher {
		return new allMatcher(this, true)
	}

	public __goscriptAssign(source: allMatcher): void {
		const target = this._fields
		const values = source._fields
		target.matchers = values.matchers
	}

	public async Matches(x: any): globalThis.Promise<boolean> {
		const am = this;
		for (let __goscriptRangeTarget0 = am.matchers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Matcher | null)
			if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<Matcher, null>) : $.pointerValue<Exclude<Matcher, null>>(m)).Matches(x), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return false
			}
		}
		return true
	}

	public async String(): globalThis.Promise<string> {
		const am = this;
		let ss: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(am.matchers), "string")
		for (let __goscriptRangeTarget1 = am.matchers, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let matcher = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Matcher | null)
			ss = $.appendOne(ss, (__goscriptAwait = (matcher !== null && (matcher as any).__isVarRef !== true && (matcher as any).__goValue === undefined ? (matcher as Exclude<Matcher, null>) : $.pointerValue<Exclude<Matcher, null>>(matcher)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return strings.Join(ss, "; ")
	}

	static __typeInfo = $.registerStructType(
		"gomock.allMatcher",
		() => new allMatcher(),
		() => [$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		allMatcher,
		() => [/* @__PURE__ */ $.structField("matchers", /* @__PURE__ */ $.sliceType("gomock.Matcher"), [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class lenMatcher {
	public get i(): number {
		return this._fields.i
	}

	public set i(value: number) {
		this._fields.i = value
	}

	public _fields: {
		i: number
	}

	constructor(init?: Partial<{i?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			i: init?.i ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lenMatcher {
		return new lenMatcher(this, true)
	}

	public __goscriptAssign(source: lenMatcher): void {
		const target = this._fields
		const values = source._fields
		target.i = values.i
	}

	public Matches(x: any): boolean {
		const m = this;
		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(x)))
		switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
			case reflect.Array:
			case reflect.Chan:
			case reflect.Map:
			case reflect.Slice:
			case reflect.String:
			{
				return $.markAsStructValue($.cloneStructValue(v)).Len() == m.i
				break
			}
			default:
			{
				return false
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async String(): globalThis.Promise<string> {
		const m = this;
		return fmt.Sprintf("has length %d", $.basicInterfaceValue(m.i, "int"))
	}

	static __typeInfo = $.registerStructType(
		"gomock.lenMatcher",
		() => new lenMatcher(),
		() => [$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		lenMatcher,
		() => [/* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export class inAnyOrderMatcher {
	public get x(): any {
		return this._fields.x
	}

	public set x(value: any) {
		this._fields.x = value
	}

	public _fields: {
		x: any
	}

	constructor(init?: Partial<{x?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			x: init?.x ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inAnyOrderMatcher {
		return new inAnyOrderMatcher(this, true)
	}

	public __goscriptAssign(source: inAnyOrderMatcher): void {
		const target = this._fields
		const values = source._fields
		target.x = $.assignFieldValue(target.x, values.x, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Matches(x: any): globalThis.Promise<boolean> {
		const m = this;
		let [given, ok] = m.prepareValue(x)
		if (!ok) {
			return false
		}
		let __goscriptTuple0: any = m.prepareValue(m.x)
		let wanted = __goscriptTuple0[0]
		ok = __goscriptTuple0[1]
		if (!ok) {
			return false
		}

		if ($.markAsStructValue($.cloneStructValue(given)).Len() != $.markAsStructValue($.cloneStructValue(wanted)).Len()) {
			return false
		}

		let usedFromGiven: $.Slice<boolean> = $.makeSlice<boolean>($.markAsStructValue($.cloneStructValue(given)).Len(), undefined, "boolean")
		let foundFromWanted: $.Slice<boolean> = $.makeSlice<boolean>($.markAsStructValue($.cloneStructValue(wanted)).Len(), undefined, "boolean")
		for (let __goscriptSliceWindow0 = $.sliceRange(usedFromGiven), __goscriptSliceWindow1 = $.sliceRange(foundFromWanted), i = 0; i < $.markAsStructValue($.cloneStructValue(wanted)).Len(); i++) {
			let wantedMatcher = Eq($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(wanted)).Index(i))).Interface())
			for (let j = 0; j < $.markAsStructValue($.cloneStructValue(given)).Len(); j++) {
				if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as boolean)) {
					continue
				}
				if ((__goscriptAwait = (wantedMatcher !== null && (wantedMatcher as any).__isVarRef !== true && (wantedMatcher as any).__goValue === undefined ? (wantedMatcher as Exclude<Matcher, null>) : $.pointerValue<Exclude<Matcher, null>>(wantedMatcher)).Matches($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(given)).Index(j))).Interface()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = true;
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = true
					break
				}
			}
		}

		let missingFromWanted = 0
		for (let __goscriptRangeTarget2 = foundFromWanted, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let found = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as boolean)
			if (!found) {
				missingFromWanted++
			}
		}
		let extraInGiven = 0
		for (let __goscriptRangeTarget3 = usedFromGiven, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let used = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as boolean)
			if (!used) {
				extraInGiven++
			}
		}

		return (extraInGiven == 0) && (missingFromWanted == 0)
	}

	public async String(): globalThis.Promise<string> {
		const m = this;
		return fmt.Sprintf("has the same elements as %v", m.x)
	}

	public prepareValue(x: any): [reflect.Value, boolean] {
		const m = this;
		let xValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(x)))
		switch ($.markAsStructValue($.cloneStructValue(xValue)).Kind()) {
			case reflect.Slice:
			case reflect.Array:
			{
				return [$.markAsStructValue($.cloneStructValue(xValue)), true]
				break
			}
			default:
			{
				return [$.markAsStructValue(new reflect.Value()), false]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"gomock.inAnyOrderMatcher",
		() => new inAnyOrderMatcher(),
		() => [$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("prepareValue", [["x", { kind: $.TypeKind.Interface, methods: [] }]], ["reflect.Value", /* @__PURE__ */ $.basicType("bool")])],
		inAnyOrderMatcher,
		() => [/* @__PURE__ */ $.structField("x", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export function WantFormatter(s: fmt.Stringer | null, m: Matcher | null): Matcher | null {
	type matcher = {
		Matches(x: any): boolean | globalThis.Promise<boolean>
	}

	$.registerInterfaceType(
		"gomock.matcher",
		null,
		[$.methodSignature("Matches", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")])]
	);

	return $.interfaceValue<Matcher | null>($.anonymousStructValue({matcher: (m as matcher | null), Stringer: s}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("matcher", "gomock.matcher", [0], 0, false, { pkgPath: "github.com/golang/mock/gomock", anonymous: true }), /* @__PURE__ */ $.structField("Stringer", "fmt.Stringer", [1], 16, true, { anonymous: true })] }), "struct{gomock.matcher; fmt.Stringer}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("matcher", "gomock.matcher", [0], 0, false, { pkgPath: "github.com/golang/mock/gomock", anonymous: true }), /* @__PURE__ */ $.structField("Stringer", "fmt.Stringer", [1], 16, true, { anonymous: true })] })
}

export async function StringerFunc_String(f: StringerFunc | null): globalThis.Promise<string> {
	return f!()
}

export async function GotFormatterFunc_Got(f: GotFormatterFunc | null, got: any): globalThis.Promise<string> {
	return f!(got)
}

export function GotFormatterAdapter(s: GotFormatter | null, m: Matcher | null): Matcher | null {
	return $.interfaceValue<Matcher | null>($.anonymousStructValue({GotFormatter: s, Matcher: m}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("GotFormatter", "gomock.GotFormatter", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Matcher", "gomock.Matcher", [1], 16, true, { anonymous: true })] }), "struct{gomock.GotFormatter; gomock.Matcher}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("GotFormatter", "gomock.GotFormatter", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Matcher", "gomock.Matcher", [1], 16, true, { anonymous: true })] })
}

export function All(ms: $.Slice<Matcher | null>): Matcher | null {
	return $.interfaceValue<Matcher | null>(new allMatcher({matchers: ms}, true), "gomock.allMatcher", "gomock.allMatcher")
}

export function Any(): Matcher | null {
	return $.interfaceValue<Matcher | null>(new anyMatcher(undefined, true), "gomock.anyMatcher", "gomock.anyMatcher")
}

export function Eq(x: any): Matcher | null {
	return $.interfaceValue<Matcher | null>(new eqMatcher({x: x}, true), "gomock.eqMatcher", "gomock.eqMatcher")
}

export function Len(i: number): Matcher | null {
	return $.interfaceValue<Matcher | null>(new lenMatcher({i: i}, true), "gomock.lenMatcher", "gomock.lenMatcher")
}

export function Nil(): Matcher | null {
	return $.interfaceValue<Matcher | null>(new nilMatcher(undefined, true), "gomock.nilMatcher", "gomock.nilMatcher")
}

export function Not(x: any): Matcher | null {
	{
		let [m, ok] = $.typeAssertTuple<Matcher | null>(x, "gomock.Matcher")
		if (ok) {
			return $.interfaceValue<Matcher | null>(new notMatcher({m: m}, true), "gomock.notMatcher", "gomock.notMatcher")
		}
	}
	return $.interfaceValue<Matcher | null>((() => { const __goscriptLiteralField0 = Eq(x); return new notMatcher({m: __goscriptLiteralField0}, true) })(), "gomock.notMatcher", "gomock.notMatcher")
}

export function AssignableToTypeOf(x: any): Matcher | null {
	{
		let [xt, ok] = $.typeAssertTuple<reflect.Type | null>(x, "reflect.Type")
		if (ok) {
			return $.interfaceValue<Matcher | null>(new assignableToTypeOfMatcher({targetType: xt}, true), "gomock.assignableToTypeOfMatcher", "gomock.assignableToTypeOfMatcher")
		}
	}
	return $.interfaceValue<Matcher | null>((() => { const __goscriptLiteralField1 = reflect.TypeOf(x); return new assignableToTypeOfMatcher({targetType: __goscriptLiteralField1}, true) })(), "gomock.assignableToTypeOfMatcher", "gomock.assignableToTypeOfMatcher")
}

export function InAnyOrder(x: any): Matcher | null {
	return $.interfaceValue<Matcher | null>(new inAnyOrderMatcher({x: x}, true), "gomock.inAnyOrderMatcher", "gomock.inAnyOrderMatcher")
}

var __goscriptAwait: any
