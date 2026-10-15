// Generated file based on flag.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/encoding/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"

export type boolValue = boolean

$.registerNamedValueType(
	"*flag.boolValue",
	{Get: (receiver: any, ...args: any[]) => (boolValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), IsBoolFlag: (receiver: any, ...args: any[]) => (boolValue_IsBoolFlag as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (boolValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (boolValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("IsBoolFlag", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type boolFlag = {
	IsBoolFlag(): boolean
	Set(_p0: string): $.GoError | globalThis.Promise<$.GoError>
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"flag.boolFlag",
	null,
	[$.methodSignature("IsBoolFlag", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Set", [/* @__PURE__ */ $.basicType("string")], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type intValue = number

$.registerNamedValueType(
	"*flag.intValue",
	{Get: (receiver: any, ...args: any[]) => (intValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (intValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (intValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type int64Value = bigint

$.registerNamedValueType(
	"*flag.int64Value",
	{Get: (receiver: any, ...args: any[]) => (int64Value_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (int64Value_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (int64Value_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type uintValue = number

$.registerNamedValueType(
	"*flag.uintValue",
	{Get: (receiver: any, ...args: any[]) => (uintValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (uintValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (uintValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type uint64Value = bigint

$.registerNamedValueType(
	"*flag.uint64Value",
	{Get: (receiver: any, ...args: any[]) => (uint64Value_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (uint64Value_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (uint64Value_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type stringValue = string

$.registerNamedValueType(
	"*flag.stringValue",
	{Get: (receiver: any, ...args: any[]) => (stringValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (stringValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (stringValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["val", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type float64Value = number

$.registerNamedValueType(
	"*flag.float64Value",
	{Get: (receiver: any, ...args: any[]) => (float64Value_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (float64Value_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (float64Value_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type durationValue = bigint

$.registerNamedValueType(
	"*flag.durationValue",
	{Get: (receiver: any, ...args: any[]) => (durationValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (durationValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (durationValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type funcValue = ((_p0: string) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"flag.funcValue",
	{Set: (receiver: any, ...args: any[]) => (funcValue_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (funcValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*flag.funcValue",
	{Set: (receiver: any, ...args: any[]) => (funcValue_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (funcValue_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type boolFuncValue = ((_p0: string) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"flag.boolFuncValue",
	{IsBoolFlag: (receiver: any, ...args: any[]) => (boolFuncValue_IsBoolFlag as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (boolFuncValue_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (boolFuncValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsBoolFlag", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*flag.boolFuncValue",
	{IsBoolFlag: (receiver: any, ...args: any[]) => (boolFuncValue_IsBoolFlag as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (boolFuncValue_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (boolFuncValue_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsBoolFlag", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Value = {
	Set(_p0: string): $.GoError | globalThis.Promise<$.GoError>
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"flag.Value",
	null,
	[$.methodSignature("Set", [/* @__PURE__ */ $.basicType("string")], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Getter = {
	Get(): any
	Set(_p0: string): $.GoError | globalThis.Promise<$.GoError>
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"flag.Getter",
	null,
	[$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [/* @__PURE__ */ $.basicType("string")], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ErrorHandling = number

export class textValue {
	public get p(): encoding.TextUnmarshaler | null {
		return this._fields.p
	}

	public set p(value: encoding.TextUnmarshaler | null) {
		this._fields.p = value
	}

	public _fields: {
		p: encoding.TextUnmarshaler | null
	}

	constructor(init?: Partial<{p?: encoding.TextUnmarshaler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as encoding.TextUnmarshaler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): textValue {
		return new textValue(this, true)
	}

	public __goscriptAssign(source: textValue): void {
		const target = this._fields
		const values = source._fields
		target.p = $.assignFieldValue(target.p, values.p, "encoding.TextUnmarshaler")
	}

	public Get(): any {
		const v = this;
		return (v.p as any)
	}

	public async Set(s: string): globalThis.Promise<$.GoError> {
		const v = this;
		return $.pointerValue<Exclude<encoding.TextUnmarshaler, null>>(v.p).UnmarshalText($.stringToBytes(s))
	}

	public async String(): globalThis.Promise<string> {
		const v = this;
		{
			let [m, ok] = $.typeAssertTuple<encoding.TextMarshaler | null>(v.p, "encoding.TextMarshaler")
			if (ok) {
				{
					let __goscriptTuple1: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(m)).MarshalText()
					let b: $.Slice<number> = __goscriptTuple1[0]
					let err = __goscriptTuple1[1]
					if (err == null) {
						return $.bytesToString(b)
					}
				}
			}
		}
		return ""
	}

	static __typeInfo = $.registerStructType(
		"flag.textValue",
		() => new textValue(),
		() => [$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		textValue,
		() => [/* @__PURE__ */ $.structField("p", "encoding.TextUnmarshaler", [0], 0, false, { pkgPath: "flag" })]
	)
}

export class FlagSet {
	// Usage is the function called when an error occurs while parsing flags.
	// The field is a function (not a method) that may be changed to point to
	// a custom error handler. What happens after Usage is called depends
	// on the ErrorHandling setting; for the command line, this defaults
	// to ExitOnError, which exits the program after calling Usage.
	public get Usage(): (() => void) | null {
		return this._fields.Usage
	}

	public set Usage(value: (() => void) | null) {
		this._fields.Usage = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get parsed(): boolean {
		return this._fields.parsed
	}

	public set parsed(value: boolean) {
		this._fields.parsed = value
	}

	public get actual(): globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null {
		return this._fields.actual
	}

	public set actual(value: globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null) {
		this._fields.actual = value
	}

	public get formal(): globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null {
		return this._fields.formal
	}

	public set formal(value: globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null) {
		this._fields.formal = value
	}

	public get args(): $.Slice<string> {
		return this._fields.args
	}

	public set args(value: $.Slice<string>) {
		this._fields.args = value
	}

	public get errorHandling(): ErrorHandling {
		return this._fields.errorHandling
	}

	public set errorHandling(value: ErrorHandling) {
		this._fields.errorHandling = value
	}

	public get output(): io.Writer | null {
		return this._fields.output
	}

	public set output(value: io.Writer | null) {
		this._fields.output = value
	}

	public get undef(): globalThis.Map<string, string> | null {
		return this._fields.undef
	}

	public set undef(value: globalThis.Map<string, string> | null) {
		this._fields.undef = value
	}

	public _fields: {
		Usage: (() => void) | null
		name: string
		parsed: boolean
		actual: globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null
		formal: globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null
		args: $.Slice<string>
		errorHandling: ErrorHandling
		output: io.Writer | null
		undef: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{Usage?: (() => void) | null, name?: string, parsed?: boolean, actual?: globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null, formal?: globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null, args?: $.Slice<string>, errorHandling?: ErrorHandling, output?: io.Writer | null, undef?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Usage: init?.Usage ?? (null! as (() => void) | null),
			name: init?.name ?? ("" as string),
			parsed: init?.parsed ?? (false as boolean),
			actual: init?.actual ?? (null! as globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null),
			formal: init?.formal ?? (null! as globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null),
			args: init?.args ?? (null! as $.Slice<string>),
			errorHandling: init?.errorHandling ?? (0 as ErrorHandling),
			output: init?.output ?? (null! as io.Writer | null),
			undef: init?.undef ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FlagSet {
		return new FlagSet(this, true)
	}

	public __goscriptAssign(source: FlagSet): void {
		const target = this._fields
		const values = source._fields
		target.Usage = values.Usage
		target.name = values.name
		target.parsed = values.parsed
		target.actual = values.actual
		target.formal = values.formal
		target.args = values.args
		target.errorHandling = values.errorHandling
		target.output = $.assignFieldValue(target.output, values.output, "io.Writer")
		target.undef = values.undef
	}

	public Arg(i: number): string {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f)
		if ((i < 0) || (i >= $.sliceLen((f$ as FlagSet).args))) {
			return ""
		}
		return $.arrayIndex((f$ as FlagSet).args!, i)
	}

	public Args(): $.Slice<string> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return $.pointerValue<FlagSet>(f).args
	}

	public async Bool(name: string, value: boolean, usage: string): globalThis.Promise<$.VarRef<boolean> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p = $.varRef<boolean>(false)
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).BoolVar(p, name, value, usage) : FlagSet.prototype.BoolVar.call(f, p, name, value, usage))
		return p
	}

	public async BoolFunc(name: string, usage: string, fn: ((_p0: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>($.namedFunction(fn, "flag.boolFuncValue", ({ kind: $.TypeKind.Function, name: "flag.boolFuncValue", params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)), "flag.boolFuncValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), name, usage)
	}

	public async BoolVar(p: $.VarRef<boolean> | null, name: string, value: boolean, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newBoolValue(value, p), "*flag.boolValue", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), name, usage)
	}

	public async Duration(name: string, value: time.Duration, usage: string): globalThis.Promise<$.VarRef<time.Duration> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p: $.VarRef<time.Duration> | null = $.varRef<time.Duration>(0n)
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).DurationVar(p, name, value, usage) : FlagSet.prototype.DurationVar.call(f, p, name, value, usage))
		return p
	}

	public async DurationVar(p: $.VarRef<time.Duration> | null, name: string, value: time.Duration, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newDurationValue(value, p), "*flag.durationValue", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()), name, usage)
	}

	public ErrorHandling(): ErrorHandling {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return $.pointerValue<FlagSet>(f).errorHandling
	}

	public async Float64(name: string, value: number, usage: string): globalThis.Promise<$.VarRef<number> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p = $.varRef<number>(0)
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Float64Var(p, name, value, usage) : FlagSet.prototype.Float64Var.call(f, p, name, value, usage))
		return p
	}

	public async Float64Var(p: $.VarRef<number> | null, name: string, value: number, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newFloat64Value(value, p), "*flag.float64Value", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic11()), name, usage)
	}

	public async Func(name: string, usage: string, fn: ((_p0: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>($.namedFunction(fn, "flag.funcValue", ({ kind: $.TypeKind.Function, name: "flag.funcValue", params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)), "flag.funcValue", __goscriptStatic14(), __goscriptStatic15(), __goscriptStatic16()), name, usage)
	}

	public Init(name: string, errorHandling: ErrorHandling): void {
		let f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f);
		;(f$ as FlagSet).name = name;
		;(f$ as FlagSet).errorHandling = errorHandling
	}

	public async Int(name: string, value: number, usage: string): globalThis.Promise<$.VarRef<number> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p = $.varRef<number>(0)
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).IntVar(p, name, value, usage) : FlagSet.prototype.IntVar.call(f, p, name, value, usage))
		return p
	}

	public async Int64(name: string, value: bigint, usage: string): globalThis.Promise<$.VarRef<bigint> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p = $.varRef<bigint>(0n)
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Int64Var(p, name, value, usage) : FlagSet.prototype.Int64Var.call(f, p, name, value, usage))
		return p
	}

	public async Int64Var(p: $.VarRef<bigint> | null, name: string, value: bigint, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newInt64Value(value, p), "*flag.int64Value", __goscriptStatic17(), __goscriptStatic18(), __goscriptStatic11()), name, usage)
	}

	public async IntVar(p: $.VarRef<number> | null, name: string, value: number, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newIntValue(value, p), "*flag.intValue", __goscriptStatic19(), __goscriptStatic20(), __goscriptStatic11()), name, usage)
	}

	public Lookup(name: string): Flag | $.VarRef<Flag> | null {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return $.mapGet<string, Flag | $.VarRef<Flag> | null, Flag | $.VarRef<Flag> | null>($.pointerValue<FlagSet>(f).formal, name, null)[0]
	}

	public NArg(): number {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return $.sliceLen($.pointerValue<FlagSet>(f).args)
	}

	public NFlag(): number {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return $.len($.pointerValue<FlagSet>(f).actual)
	}

	public Name(): string {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return $.pointerValue<FlagSet>(f).name
	}

	public Output(): io.Writer | null {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f)
		if ((f$ as FlagSet).output == null) {
			return $.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File"))
		}
		return (f$ as FlagSet).output
	}

	public async Parse(_arguments: $.Slice<string>): globalThis.Promise<$.GoError> {
		let f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f);
		;(f$ as FlagSet).parsed = true;
		;(f$ as FlagSet).args = _arguments
		while (true) {
			let [seen, err] = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).parseOne() : FlagSet.prototype.parseOne.call(f))
			if (seen) {
				continue
			}
			if (err == null) {
				break
			}
			switch ((f$ as FlagSet).errorHandling) {
				case 0:
				{
					return err
					break
				}
				case 1:
				{
					if ($.comparableEqual(err, ErrHelp)) {
						os.Exit(0)
					}
					os.Exit(2)
					break
				}
				case 2:
				{
					$.panic((err as any))
					break
				}
			}
		}
		return null
	}

	public Parsed(): boolean {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return $.pointerValue<FlagSet>(f).parsed
	}

	public async PrintDefaults(): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let isZeroValueErrs: $.Slice<$.GoError> = null! as $.Slice<$.GoError>
		await FlagSet.prototype.VisitAll.call(f, $.functionValue(async (flag: Flag | $.VarRef<Flag> | null): globalThis.Promise<void> => {
			let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "  -%s", $.pointerValue<Flag>(flag).Name)
			let [name, usage] = await UnquoteUsage(flag)
			if ($.stringLen(name) > 0) {
				b.value.WriteString(" ")
				b.value.WriteString(name)
			}
			// Boolean flags of one ASCII letter are so common we
			// treat them specially, putting their usage on the same line.
			if (b.value.Len() <= 4) {
				b.value.WriteString("\t")
			} else {
				// Four spaces before the tab triggers good alignment
				// for both 4- and 8-space tab stops.
				b.value.WriteString("\n    \t")
			}
			b.value.WriteString(strings.ReplaceAll(usage, "\n", "\n    \t"))

			// Print the default value only if it differs to the zero value
			// for this flag type.
			{
				let [isZero, err] = await isZeroValue(flag, $.pointerValue<Flag>(flag).DefValue)
				if (err != null) {
					isZeroValueErrs = $.appendOne(isZeroValueErrs, err, $.appendZeros.nil)
				} else {
					if (!isZero) {
						{
							let [, ok] = $.typeAssertTuple<$.VarRef<stringValue> | null>($.pointerValue<Flag>(flag).Value, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string", "flag.stringValue")))
							if (ok) {
								// put quotes on the value
								await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, " (default %q)", $.pointerValue<Flag>(flag).DefValue)
							} else {
								await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, " (default %v)", $.pointerValue<Flag>(flag).DefValue)
							}
						}
					}
				}
			}
			await fmt.Fprint($.pointerValueOrNil((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Output() : FlagSet.prototype.Output.call(f)))!, b.value.String(), "\n")
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("flag.Flag")], results: [] } as $.FunctionTypeInfo)))
		// If calling String on any zero flag.Values triggered a panic, print
		// the messages after the full set of defaults so that the programmer
		// knows to fix the panic.
		{
			let errs: $.Slice<$.GoError> = isZeroValueErrs
			if ($.sliceLen(errs) > 0) {
				await fmt.Fprintln($.pointerValueOrNil((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Output() : FlagSet.prototype.Output.call(f)))!)
				for (let __goscriptRangeTarget0 = errs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let err = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.GoError)
					await fmt.Fprintln($.pointerValueOrNil((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Output() : FlagSet.prototype.Output.call(f)))!, (err as any))
				}
			}
		}
	}

	public async Set(name: string, value: string): globalThis.Promise<$.GoError> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet)["set"](name, value) : FlagSet.prototype.set.call(f, name, value))
	}

	public SetOutput(output: io.Writer | null): void {
		let f: FlagSet | $.VarRef<FlagSet> | null = this;
		$.pointerValue<FlagSet>(f).output = output
	}

	public async String(name: string, value: string, usage: string): globalThis.Promise<$.VarRef<string> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p = $.varRef<string>("")
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).StringVar(p, name, value, usage) : FlagSet.prototype.StringVar.call(f, p, name, value, usage))
		return p
	}

	public async StringVar(p: $.VarRef<string> | null, name: string, value: string, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newStringValue(value, p), "*flag.stringValue", __goscriptStatic21(), __goscriptStatic22(), __goscriptStatic23()), name, usage)
	}

	public async TextVar(p: encoding.TextUnmarshaler | null, name: string, value: encoding.TextMarshaler | null, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Var($.interfaceValue<Value | null>(await newTextValue(value, p), "flag.textValue", "flag.textValue"), name, usage) : FlagSet.prototype.Var.call(f, $.interfaceValue<Value | null>(await newTextValue(value, p), "flag.textValue", "flag.textValue"), name, usage))
	}

	public async Uint(name: string, value: number, usage: string): globalThis.Promise<$.VarRef<number> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p = $.varRef<number>(0)
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).UintVar(p, name, value, usage) : FlagSet.prototype.UintVar.call(f, p, name, value, usage))
		return p
	}

	public async Uint64(name: string, value: bigint, usage: string): globalThis.Promise<$.VarRef<bigint> | null> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let p = $.varRef<bigint>(0n)
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Uint64Var(p, name, value, usage) : FlagSet.prototype.Uint64Var.call(f, p, name, value, usage))
		return p
	}

	public async Uint64Var(p: $.VarRef<bigint> | null, name: string, value: bigint, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newUint64Value(value, p), "*flag.uint64Value", __goscriptStatic24(), __goscriptStatic25(), __goscriptStatic11()), name, usage)
	}

	public async UintVar(p: $.VarRef<number> | null, name: string, value: number, usage: string): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		await FlagSet.prototype.Var.call(f, $.namedValueInterfaceValue<Value | null>(newUintValue(value, p), "*flag.uintValue", __goscriptStatic26(), __goscriptStatic27(), __goscriptStatic11()), name, usage)
	}

	public async Var(value: Value | null, name: string, usage: string): globalThis.Promise<void> {
		let f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f)
		// Flag must not begin "-" or contain "=".
		if (strings.HasPrefix(name, "-")) {
			$.panic(await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).sprintf("flag %q begins with -", $.arrayToSlice<any>([name])) : FlagSet.prototype.sprintf.call(f, "flag %q begins with -", $.arrayToSlice<any>([name]))))
		} else {
			if (strings.Contains(name, "=")) {
				$.panic(await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).sprintf("flag %q contains =", $.arrayToSlice<any>([name])) : FlagSet.prototype.sprintf.call(f, "flag %q contains =", $.arrayToSlice<any>([name]))))
			}
		}

		// Remember the default value as a string; it won't change.
		let flag: Flag | $.VarRef<Flag> | null = (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (value !== null && (value as any).__isVarRef !== true && (value as any).__goValue === undefined ? (value as Exclude<Value, null>) : $.pointerValue<Exclude<Value, null>>(value)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new Flag({Name: name, Usage: usage, Value: value, DefValue: __goscriptLiteralField0}) })())
		let [, alreadythere] = $.mapGet<string, Flag | $.VarRef<Flag> | null, Flag | $.VarRef<Flag> | null>((f$ as FlagSet).formal, name, null)
		if (alreadythere) {
			let msg: string = ""
			if ($.stringEqual((f$ as FlagSet).name, "")) {
				msg = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).sprintf("flag redefined: %s", $.arrayToSlice<any>([name])) : FlagSet.prototype.sprintf.call(f, "flag redefined: %s", $.arrayToSlice<any>([name])))
			} else {
				msg = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).sprintf("%s flag redefined: %s", $.arrayToSlice<any>([(f$ as FlagSet).name, name])) : FlagSet.prototype.sprintf.call(f, "%s flag redefined: %s", $.arrayToSlice<any>([(f$ as FlagSet).name, name])))
			}
			$.panic(msg)
		}
		{
			let pos = $.mapGet<string, string, string>((f$ as FlagSet).undef, name, "")[0]
			if (!$.stringEqual(pos, "")) {
				$.panic(await fmt.Sprintf("flag %s set at %s before being defined", name, pos))
			}
		}
		if ((f$ as FlagSet).formal == null) {
			;(f$ as FlagSet).formal = $.makeMap<string, Flag | $.VarRef<Flag> | null>()
		}
		$.mapSet((f$ as FlagSet).formal, name, flag)
	}

	public async Visit(fn: ((_p0: Flag | $.VarRef<Flag> | null) => void) | null): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		for (let __goscriptRangeTarget1 = sortFlags($.pointerValue<FlagSet>(f).actual), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let flag = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Flag | $.VarRef<Flag> | null)
			void (__goscriptAwait = fn!(flag), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async VisitAll(fn: ((_p0: Flag | $.VarRef<Flag> | null) => void) | null): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		for (let __goscriptRangeTarget2 = sortFlags($.pointerValue<FlagSet>(f).formal), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let flag = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Flag | $.VarRef<Flag> | null)
			void (__goscriptAwait = fn!(flag), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async defaultUsage(): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f)
		if ($.stringEqual((f$ as FlagSet).name, "")) {
			await fmt.Fprintf($.pointerValueOrNil((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Output() : FlagSet.prototype.Output.call(f)))!, "Usage:\n")
		} else {
			await fmt.Fprintf($.pointerValueOrNil((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Output() : FlagSet.prototype.Output.call(f)))!, "Usage of %s:\n", (f$ as FlagSet).name)
		}
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).PrintDefaults() : FlagSet.prototype.PrintDefaults.call(f))
	}

	public async failf(format: string, a: $.Slice<any>): globalThis.Promise<$.GoError> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let msg = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).sprintf(format, a) : FlagSet.prototype.sprintf.call(f, format, a))
		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).usage() : FlagSet.prototype.usage.call(f))
		return errors.New(msg)
	}

	public async parseOne(): globalThis.Promise<[boolean, $.GoError]> {
		let f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f)
		if ($.sliceLen((f$ as FlagSet).args) == 0) {
			return [false, null]
		}
		let s = $.arrayIndex((f$ as FlagSet).args!, 0)
		if (($.stringLen(s) < 2) || ($.indexString(s, 0) != 45)) {
			return [false, null]
		}
		let numMinuses = 1
		if ($.indexString(s, 1) == 45) {
			numMinuses++
			if ($.stringLen(s) == 2) {
				;(f$ as FlagSet).args = $.goSlice((f$ as FlagSet).args, 1, undefined)
				return [false, null]
			}
		}
		let name = $.sliceStringOrBytes(s, numMinuses, undefined)
		if ((($.stringLen(name) == 0) || ($.indexString(name, 0) == 45)) || ($.indexString(name, 0) == 61)) {
			return [false, await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).failf("bad flag syntax: %s", $.arrayToSlice<any>([s])) : FlagSet.prototype.failf.call(f, "bad flag syntax: %s", $.arrayToSlice<any>([s])))]
		}

		// it's a flag. does it have an argument?
		;(f$ as FlagSet).args = $.goSlice((f$ as FlagSet).args, 1, undefined)
		let hasValue = false
		let value = ""
		for (let i = 1; i < $.stringLen(name); i++) {
			if ($.indexString(name, i) == 61) {
				value = $.sliceStringOrBytes(name, i + 1, undefined)
				hasValue = true
				name = $.sliceStringOrBytes(name, 0, i)
				break
			}
		}

		let __goscriptTuple2: any = $.mapGet<string, Flag | $.VarRef<Flag> | null, Flag | $.VarRef<Flag> | null>((f$ as FlagSet).formal, name, null)
		let flag: Flag | $.VarRef<Flag> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		let flag$: Flag = flag == null ? $.pointerTarget<Flag>(flag) : (flag as any).__isVarRef === true ? (flag as any).value : (flag as any).__goValue === undefined ? (flag as any) : $.pointerTarget<Flag>(flag)
		if (!ok) {
			if (($.stringEqual(name, "help")) || ($.stringEqual(name, "h"))) {
				await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).usage() : FlagSet.prototype.usage.call(f))
				return [false, ErrHelp]
			}
			return [false, await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).failf("flag provided but not defined: -%s", $.arrayToSlice<any>([name])) : FlagSet.prototype.failf.call(f, "flag provided but not defined: -%s", $.arrayToSlice<any>([name])))]
		}

		{
			let [fv, __goscriptShadow0] = $.typeAssertTuple<boolFlag | null>((flag$ as Flag).Value, "flag.boolFlag")
			if (__goscriptShadow0 && (__goscriptAwait = (fv !== null && (fv as any).__isVarRef !== true && (fv as any).__goValue === undefined ? (fv as Exclude<boolFlag, null>) : $.pointerValue<Exclude<boolFlag, null>>(fv)).IsBoolFlag(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				if (hasValue) {
					{
						let err = (__goscriptAwait = (fv !== null && (fv as any).__isVarRef !== true && (fv as any).__goValue === undefined ? (fv as Exclude<boolFlag, null>) : $.pointerValue<Exclude<boolFlag, null>>(fv)).Set(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return [false, await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).failf("invalid boolean value %q for -%s: %v", $.arrayToSlice<any>([value, name, (err as any)])) : FlagSet.prototype.failf.call(f, "invalid boolean value %q for -%s: %v", $.arrayToSlice<any>([value, name, (err as any)])))]
						}
					}
				} else {
					{
						let err = (__goscriptAwait = (fv !== null && (fv as any).__isVarRef !== true && (fv as any).__goValue === undefined ? (fv as Exclude<boolFlag, null>) : $.pointerValue<Exclude<boolFlag, null>>(fv)).Set("true"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return [false, await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).failf("invalid boolean flag %s: %v", $.arrayToSlice<any>([name, (err as any)])) : FlagSet.prototype.failf.call(f, "invalid boolean flag %s: %v", $.arrayToSlice<any>([name, (err as any)])))]
						}
					}
				}
			} else {
				// It must have a value, which might be the next argument.
				if (!hasValue && ($.sliceLen((f$ as FlagSet).args) > 0)) {
					// value is the next arg
					hasValue = true
					let __goscriptAssign0_0: string = $.arrayIndex((f$ as FlagSet).args!, 0)
					let __goscriptAssign0_1: $.Slice<string> = $.goSlice((f$ as FlagSet).args, 1, undefined)
					value = __goscriptAssign0_0;
					;(f$ as FlagSet).args = __goscriptAssign0_1
				}
				if (!hasValue) {
					return [false, await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).failf("flag needs an argument: -%s", $.arrayToSlice<any>([name])) : FlagSet.prototype.failf.call(f, "flag needs an argument: -%s", $.arrayToSlice<any>([name])))]
				}
				{
					let err = (__goscriptAwait = $.pointerValue<Exclude<Value, null>>((flag$ as Flag).Value).Set(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						return [false, await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).failf("invalid value %q for flag -%s: %v", $.arrayToSlice<any>([value, name, (err as any)])) : FlagSet.prototype.failf.call(f, "invalid value %q for flag -%s: %v", $.arrayToSlice<any>([value, name, (err as any)])))]
					}
				}
			}
		}
		if ((f$ as FlagSet).actual == null) {
			;(f$ as FlagSet).actual = $.makeMap<string, Flag | $.VarRef<Flag> | null>()
		}
		$.mapSet((f$ as FlagSet).actual, name, flag)
		return [true, null]
	}

	public async ["set"](name: string, value: string): globalThis.Promise<$.GoError> {
		let f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f)
		let __goscriptTuple3: any = $.mapGet<string, Flag | $.VarRef<Flag> | null, Flag | $.VarRef<Flag> | null>((f$ as FlagSet).formal, name, null)
		let flag: Flag | $.VarRef<Flag> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			// Remember that a flag that isn't defined is being set.
			// We return an error in this case, but in addition if
			// subsequently that flag is defined, we want to panic
			// at the definition point.
			// This is a problem which occurs if both the definition
			// and the Set call are in init code and for whatever
			// reason the init code changes evaluation order.
			// See issue 57411.
			let [, file, line, __goscriptShadow1] = runtime.Caller(2)
			if (!__goscriptShadow1) {
				file = "?"
				line = 0
			}
			if ((f$ as FlagSet).undef == null) {
				;(f$ as FlagSet).undef = $.makeMap<string, string>([])
			}
			$.mapSet((f$ as FlagSet).undef, name, await fmt.Sprintf("%s:%d", file, $.basicInterfaceValue(line, "int")))

			return fmt.Errorf("no such flag -%v", name)
		}
		let err = (__goscriptAwait = $.pointerValue<Exclude<Value, null>>($.pointerValue<Flag>(flag).Value).Set(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return err
		}
		if ((f$ as FlagSet).actual == null) {
			;(f$ as FlagSet).actual = $.makeMap<string, Flag | $.VarRef<Flag> | null>()
		}
		$.mapSet((f$ as FlagSet).actual, name, flag)
		return null
	}

	public async sprintf(format: string, a: $.Slice<any>): globalThis.Promise<string> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		let msg = await fmt.Sprintf(format, ...(a ?? []))
		await fmt.Fprintln($.pointerValueOrNil((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).Output() : FlagSet.prototype.Output.call(f)))!, msg)
		return msg
	}

	public async usage(): globalThis.Promise<void> {
		const f: FlagSet | $.VarRef<FlagSet> | null = this;
		const f$: FlagSet = f == null ? $.pointerTarget<FlagSet>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FlagSet>(f)
		if ((f$ as FlagSet).Usage == null) {
			await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FlagSet).defaultUsage() : FlagSet.prototype.defaultUsage.call(f))
		} else {
			void (__goscriptAwait = (f$ as FlagSet).Usage!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"flag.FlagSet",
		() => new FlagSet(),
		() => [$.methodSignature("Arg", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Args", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Bool", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("bool")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))], true), $.methodSignature("BoolFunc", [["name", /* @__PURE__ */ $.basicType("string")], ["usage", /* @__PURE__ */ $.basicType("string")], ["fn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("BoolVar", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("bool")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Duration", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], true), $.methodSignature("DurationVar", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("ErrorHandling", [], [/* @__PURE__ */ $.basicType("int", "flag.ErrorHandling")], true), $.methodSignature("Float64", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float64")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))], true), $.methodSignature("Float64Var", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float64")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Func", [["name", /* @__PURE__ */ $.basicType("string")], ["usage", /* @__PURE__ */ $.basicType("string")], ["fn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Init", [["name", /* @__PURE__ */ $.basicType("string")], ["errorHandling", /* @__PURE__ */ $.basicType("int", "flag.ErrorHandling")]], [], true), $.methodSignature("Int", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Int64", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], true), $.methodSignature("Int64Var", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("IntVar", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Lookup", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("flag.Flag")], true), $.methodSignature("NArg", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("NFlag", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Output", [], ["io.Writer"], true), $.methodSignature("Parse", [["arguments", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["error"], true), $.methodSignature("Parsed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("PrintDefaults", [], [], true), $.methodSignature("Set", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("SetOutput", [["output", "io.Writer"]], [], true), $.methodSignature("String", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("StringVar", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("TextVar", [["p", "encoding.TextUnmarshaler"], ["name", /* @__PURE__ */ $.basicType("string")], ["value", "encoding.TextMarshaler"], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Uint", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))], true), $.methodSignature("Uint64", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint64")], ["usage", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))], true), $.methodSignature("Uint64Var", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint64")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("UintVar", [["p", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))], ["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Var", [["value", "flag.Value"], ["name", /* @__PURE__ */ $.basicType("string")], ["usage", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Visit", [["fn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("flag.Flag")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("VisitAll", [["fn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("flag.Flag")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("defaultUsage", [], [], true), $.methodSignature("failf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("parseOne", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("set", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("sprintf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("usage", [], [], true)],
		FlagSet,
		() => [/* @__PURE__ */ $.structField("Usage", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "flag" }), /* @__PURE__ */ $.structField("parsed", /* @__PURE__ */ $.basicType("bool"), [2], 24, false, { pkgPath: "flag" }), /* @__PURE__ */ $.structField("actual", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("flag.Flag")), [3], 32, false, { pkgPath: "flag" }), /* @__PURE__ */ $.structField("formal", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("flag.Flag")), [4], 40, false, { pkgPath: "flag" }), /* @__PURE__ */ $.structField("args", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 48, false, { pkgPath: "flag" }), /* @__PURE__ */ $.structField("errorHandling", /* @__PURE__ */ $.basicType("int", "flag.ErrorHandling"), [6], 72, false, { pkgPath: "flag" }), /* @__PURE__ */ $.structField("output", "io.Writer", [7], 80, false, { pkgPath: "flag" }), /* @__PURE__ */ $.structField("undef", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [8], 96, false, { pkgPath: "flag" })]
	)
}

export class Flag {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Usage(): string {
		return this._fields.Usage
	}

	public set Usage(value: string) {
		this._fields.Usage = value
	}

	public get Value(): Value | null {
		return this._fields.Value
	}

	public set Value(value: Value | null) {
		this._fields.Value = value
	}

	public get DefValue(): string {
		return this._fields.DefValue
	}

	public set DefValue(value: string) {
		this._fields.DefValue = value
	}

	public _fields: {
		Name: string
		Usage: string
		Value: Value | null
		DefValue: string
	}

	constructor(init?: Partial<{Name?: string, Usage?: string, Value?: Value | null, DefValue?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Usage: init?.Usage ?? ("" as string),
			Value: init?.Value ?? (null! as Value | null),
			DefValue: init?.DefValue ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Flag {
		return new Flag(this, true)
	}

	public __goscriptAssign(source: Flag): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Usage = values.Usage
		target.Value = $.assignFieldValue(target.Value, values.Value, "flag.Value")
		target.DefValue = values.DefValue
	}

	static __typeInfo = $.registerStructType(
		"flag.Flag",
		() => new Flag(),
		() => [],
		Flag,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Usage", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Value", "flag.Value", [2], 32, true), /* @__PURE__ */ $.structField("DefValue", /* @__PURE__ */ $.basicType("string"), [3], 48, true)]
	)
}

export const ContinueOnError: ErrorHandling = 0

export const ExitOnError: ErrorHandling = 1

export const PanicOnError: ErrorHandling = 2

export let ErrHelp: $.GoError = errors.New("flag: help requested")

export function __goscript_set_ErrHelp(__goscriptValue: $.GoError): void {
	ErrHelp = __goscriptValue
}

export let errParse: $.GoError = errors.New("parse error")

export function __goscript_set_errParse(__goscriptValue: $.GoError): void {
	errParse = __goscriptValue
}

export let errRange: $.GoError = errors.New("value out of range")

export function __goscript_set_errRange(__goscriptValue: $.GoError): void {
	errRange = __goscriptValue
}

export function numError(err: $.GoError): $.GoError {
	let __goscriptTuple0: any = $.typeAssertTuple<strconv.NumError | $.VarRef<strconv.NumError> | null>(err, /* @__PURE__ */ $.pointerType("strconv.NumError"))
	let ne: strconv.NumError | $.VarRef<strconv.NumError> | null = __goscriptTuple0[0]
	let ok = __goscriptTuple0[1]
	let ne$: strconv.NumError = ne == null ? $.pointerTarget<strconv.NumError>(ne) : (ne as any).__isVarRef === true ? (ne as any).value : (ne as any).__goValue === undefined ? (ne as any) : $.pointerTarget<strconv.NumError>(ne)
	if (!ok) {
		return err
	}
	if ($.comparableEqual((ne$ as strconv.NumError).Err, strconv.ErrSyntax)) {
		return errParse
	}
	if ($.comparableEqual((ne$ as strconv.NumError).Err, strconv.ErrRange)) {
		return errRange
	}
	return err
}

export function newBoolValue(val: boolean, p: $.VarRef<boolean> | null): $.VarRef<boolValue> | null {
	p!.value = val
	return p
}

export function boolValue_Set(b: $.VarRef<boolValue> | null, s: string): $.GoError {
	let [v, err] = strconv.ParseBool(s)
	if (err != null) {
		err = errParse
	}
	b!.value = v
	return err
}

export function boolValue_Get(b: $.VarRef<boolValue> | null): any {
	return $.pointerValue<boolValue>(b)
}

export function boolValue_String(b: $.VarRef<boolValue> | null): string {
	return strconv.FormatBool($.pointerValue<boolValue>(b))
}

export function boolValue_IsBoolFlag(b: $.VarRef<boolValue> | null): boolean {
	return true
}

export function newIntValue(val: number, p: $.VarRef<number> | null): $.VarRef<intValue> | null {
	p!.value = val
	return p
}

export function intValue_Set(i: $.VarRef<intValue> | null, s: string): $.GoError {
	let [v, err] = strconv.ParseInt(s, 0, 64)
	if (err != null) {
		err = numError(err)
	}
	i!.value = $.int(v)
	return err
}

export function intValue_Get(i: $.VarRef<intValue> | null): any {
	return $.basicInterfaceValue($.int($.pointerValue<intValue>(i)), "int")
}

export function intValue_String(i: $.VarRef<intValue> | null): string {
	return strconv.Itoa($.int($.pointerValue<intValue>(i)))
}

export function newInt64Value(val: bigint, p: $.VarRef<bigint> | null): $.VarRef<int64Value> | null {
	p!.value = val
	return p
}

export function int64Value_Set(i: $.VarRef<int64Value> | null, s: string): $.GoError {
	let [v, err] = strconv.ParseInt(s, 0, 64)
	if (err != null) {
		err = numError(err)
	}
	i!.value = $.int64(v)
	return err
}

export function int64Value_Get(i: $.VarRef<int64Value> | null): any {
	return $.basicInterfaceValue($.int64($.pointerValue<int64Value>(i)), "int64")
}

export function int64Value_String(i: $.VarRef<int64Value> | null): string {
	return strconv.FormatInt($.int64($.pointerValue<int64Value>(i)), 10)
}

export function newUintValue(val: number, p: $.VarRef<number> | null): $.VarRef<uintValue> | null {
	p!.value = val
	return p
}

export function uintValue_Set(i: $.VarRef<uintValue> | null, s: string): $.GoError {
	let [v, err] = strconv.ParseUint(s, 0, 64)
	if (err != null) {
		err = numError(err)
	}
	i!.value = $.uint(v, 64)
	return err
}

export function uintValue_Get(i: $.VarRef<uintValue> | null): any {
	return $.basicInterfaceValue($.uint($.pointerValue<uintValue>(i), 64), "uint")
}

export function uintValue_String(i: $.VarRef<uintValue> | null): string {
	return strconv.FormatUint($.uint64($.pointerValue<uintValue>(i)), 10)
}

export function newUint64Value(val: bigint, p: $.VarRef<bigint> | null): $.VarRef<uint64Value> | null {
	p!.value = val
	return p
}

export function uint64Value_Set(i: $.VarRef<uint64Value> | null, s: string): $.GoError {
	let [v, err] = strconv.ParseUint(s, 0, 64)
	if (err != null) {
		err = numError(err)
	}
	i!.value = $.uint64(v)
	return err
}

export function uint64Value_Get(i: $.VarRef<uint64Value> | null): any {
	return $.basicInterfaceValue($.uint64($.pointerValue<uint64Value>(i)), "uint64")
}

export function uint64Value_String(i: $.VarRef<uint64Value> | null): string {
	return strconv.FormatUint($.uint64($.pointerValue<uint64Value>(i)), 10)
}

export function newStringValue(val: string, p: $.VarRef<string> | null): $.VarRef<stringValue> | null {
	p!.value = val
	return p
}

export function stringValue_Set(s: $.VarRef<stringValue> | null, val: string): $.GoError {
	s!.value = val
	return null
}

export function stringValue_Get(s: $.VarRef<stringValue> | null): any {
	return $.pointerValue<stringValue>(s)
}

export function stringValue_String(s: $.VarRef<stringValue> | null): string {
	return $.pointerValue<stringValue>(s)
}

export function newFloat64Value(val: number, p: $.VarRef<number> | null): $.VarRef<float64Value> | null {
	p!.value = val
	return p
}

export function float64Value_Set(f: $.VarRef<float64Value> | null, s: string): $.GoError {
	let [v, err] = strconv.ParseFloat(s, 64)
	if (err != null) {
		err = numError(err)
	}
	f!.value = v
	return err
}

export function float64Value_Get(f: $.VarRef<float64Value> | null): any {
	return $.basicInterfaceValue($.pointerValue<float64Value>(f), "float64")
}

export function float64Value_String(f: $.VarRef<float64Value> | null): string {
	return strconv.FormatFloat($.pointerValue<float64Value>(f), 103, -1, 64)
}

export function newDurationValue(val: time.Duration, p: $.VarRef<time.Duration> | null): $.VarRef<durationValue> | null {
	p!.value = val
	return p
}

export function durationValue_Set(d: $.VarRef<durationValue> | null, s: string): $.GoError {
	let [v, err] = time.ParseDuration(s)
	if (err != null) {
		err = errParse
	}
	d!.value = $.int64(v)
	return err
}

export function durationValue_Get(d: $.VarRef<durationValue> | null): any {
	return $.namedValueInterfaceValue<any>($.int64($.pointerValue<durationValue>(d)), "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function durationValue_String(d: $.VarRef<durationValue> | null): string {
	return time.Duration_String($.pointerValue<time.Duration>(d))
}

export async function newTextValue(val: encoding.TextMarshaler | null, p: encoding.TextUnmarshaler | null): globalThis.Promise<textValue> {
	let ptrVal = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((p as any))))
	if ($.markAsStructValue($.cloneStructValue(ptrVal)).Kind() != 22) {
		$.panic("variable value type must be a pointer")
	}
	let defVal = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((val as any))))
	if ($.markAsStructValue($.cloneStructValue(defVal)).Kind() == 22) {
		defVal = $.assignStruct(defVal, $.markAsStructValue($.cloneStructValue(defVal)).Elem())
	}
	if (!$.comparableEqual($.markAsStructValue($.cloneStructValue(defVal)).Type(), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(ptrVal)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		$.panic(await fmt.Sprintf("default type does not match variable type: %v != %v", ($.markAsStructValue($.cloneStructValue(defVal)).Type() as any), ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(ptrVal)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))
	}
	$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptrVal)).Elem())).Set($.markAsStructValue($.cloneStructValue(defVal)))
	return new textValue({p: p}, true)
}

export async function funcValue_Set(f: funcValue | null, s: string): globalThis.Promise<$.GoError> {
	return f!(s)
}

export function funcValue_String(f: funcValue | null): string {
	return ""
}

export async function boolFuncValue_Set(f: boolFuncValue | null, s: string): globalThis.Promise<$.GoError> {
	return f!(s)
}

export function boolFuncValue_String(f: boolFuncValue | null): string {
	return ""
}

export function boolFuncValue_IsBoolFlag(f: boolFuncValue | null): boolean {
	return true
}

export function sortFlags(flags: globalThis.Map<string, Flag | $.VarRef<Flag> | null> | null): $.Slice<Flag | $.VarRef<Flag> | null> {
	let result: $.Slice<Flag | $.VarRef<Flag> | null> = $.makeSlice<Flag | $.VarRef<Flag> | null>($.len(flags))
	let i = 0
	for (const [__rangeKey, f] of flags?.entries() ?? []) {
		$.sliceElems(result!)[$.sliceSlot(result!, i)] = f
		i++
	}
	slices.SortFunc(result, $.functionValue((a: Flag | $.VarRef<Flag> | null, b: Flag | $.VarRef<Flag> | null): number => {
		return strings.Compare($.pointerValue<Flag>(a).Name, $.pointerValue<Flag>(b).Name)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("flag.Flag"), /* @__PURE__ */ $.pointerType("flag.Flag")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)))
	return result
}

export async function VisitAll(fn: ((_p0: Flag | $.VarRef<Flag> | null) => void) | null): globalThis.Promise<void> {
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).VisitAll(fn) : FlagSet.prototype.VisitAll.call(CommandLine, fn))
}

export async function Visit(fn: ((_p0: Flag | $.VarRef<Flag> | null) => void) | null): globalThis.Promise<void> {
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Visit(fn) : FlagSet.prototype.Visit.call(CommandLine, fn))
}

export function Lookup(name: string): Flag | $.VarRef<Flag> | null {
	return $.mapGet<string, Flag | $.VarRef<Flag> | null, Flag | $.VarRef<Flag> | null>($.pointerValue<FlagSet>(CommandLine).formal, name, null)[0]
}

export async function Set(name: string, value: string): globalThis.Promise<$.GoError> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet)["set"](name, value) : FlagSet.prototype.set.call(CommandLine, name, value))
}

export async function isZeroValue(flag: Flag | $.VarRef<Flag> | null, value: string): globalThis.Promise<[boolean, $.GoError]> {
	let ok: boolean = false
	let err: $.GoError = null! as $.GoError
	const __defer = new $.AsyncDisposableStack()
	try {
		const flag$: Flag = flag == null ? $.pointerTarget<Flag>(flag) : (flag as any).__isVarRef === true ? (flag as any).value : (flag as any).__goValue === undefined ? (flag as any) : $.pointerTarget<Flag>(flag)
		// Build a zero value of the flag's Value type, and see if the
		// result of calling its String method equals the value passed in.
		// This works unless the Value type is itself an interface type.
		let typ: reflect.Type | null = reflect.TypeOf(((flag$ as Flag).Value as any))
		let z: reflect.Value = $.markAsStructValue(new reflect.Value())
		if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			z = $.assignStruct(z, reflect.New($.pointerValueOrNil((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
		} else {
			z = $.assignStruct(z, reflect.Zero($.pointerValueOrNil(typ)!))
		}
		// Catch panics calling the String method, which shouldn't prevent the
		// usage message from being printed, but that we should report to the
		// user so that they know to fix their code.
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			{
				let e = $.recover()
				if (e != null) {
					if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
						typ = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					err = fmt.Errorf("panic calling String method on zero %v for flag %s: %v", (typ as any), (flag$ as Flag).Name, e)
				}
			}
		})() })
		const __goscriptReturn0: [boolean, $.GoError] = [$.stringEqual(value, (__goscriptAwait = $.pointerValue<Exclude<Value, null>>($.mustTypeAssert<Value | null>($.markAsStructValue($.cloneStructValue(z)).Interface(), "flag.Value")).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), null]
		ok = __goscriptReturn0[0]
		err = __goscriptReturn0[1]
		await __defer.dispose()
		return [ok, err]
		await __defer.dispose()
	} catch (e) {
		await __defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return [ok, err]
}

export async function UnquoteUsage(flag: Flag | $.VarRef<Flag> | null): globalThis.Promise<[string, string]> {
	let name: string = ""
	let usage: string = ""
	const flag$: Flag = flag == null ? $.pointerTarget<Flag>(flag) : (flag as any).__isVarRef === true ? (flag as any).value : (flag as any).__goValue === undefined ? (flag as any) : $.pointerTarget<Flag>(flag)
	// Look for a back-quoted name, but avoid the strings package.
	usage = (flag$ as Flag).Usage
	for (let i = 0; i < $.stringLen(usage); i++) {
		if ($.indexString(usage, i) == 96) {
			for (let j = i + 1; j < $.stringLen(usage); j++) {
				if ($.indexString(usage, j) == 96) {
					name = $.sliceStringOrBytes(usage, i + 1, j)
					usage = $.concatString(($.concatString($.sliceStringOrBytes(usage, undefined, i), name)), $.sliceStringOrBytes(usage, j + 1, undefined))
					return [name, usage]
				}
			}
			break
		}
	}
	// No explicit name, so use type if we can find one.
	name = "value"
	{
		const __goscriptTypeSwitchValue = (flag$ as Flag).Value
		switch (true) {
			case $.typeAssert<boolFlag | null>(__goscriptTypeSwitchValue, "flag.boolFlag").ok:
				{
					let fv: boolFlag | null = $.typeAssert<boolFlag | null>(__goscriptTypeSwitchValue, "flag.boolFlag").value
					if ((__goscriptAwait = (fv !== null && (fv as any).__isVarRef !== true && (fv as any).__goValue === undefined ? (fv as Exclude<boolFlag, null>) : $.pointerValue<Exclude<boolFlag, null>>(fv)).IsBoolFlag(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						name = ""
					}
				}
				break
			case $.typeAssert<$.VarRef<durationValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "flag.durationValue"))).ok:
				{
					let fv: $.VarRef<durationValue> | null = $.typeAssert<$.VarRef<durationValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "flag.durationValue"))).value
					name = "duration"
				}
				break
			case $.typeAssert<$.VarRef<float64Value> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64", "flag.float64Value"))).ok:
				{
					let fv: $.VarRef<float64Value> | null = $.typeAssert<$.VarRef<float64Value> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64", "flag.float64Value"))).value
					name = "float"
				}
				break
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "flag.intValue"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "flag.int64Value"))):
				{
					let fv = __goscriptTypeSwitchValue
					name = "int"
				}
				break
			case $.typeAssert<$.VarRef<stringValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string", "flag.stringValue"))).ok:
				{
					let fv: $.VarRef<stringValue> | null = $.typeAssert<$.VarRef<stringValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string", "flag.stringValue"))).value
					name = "string"
				}
				break
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint", "flag.uintValue"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64", "flag.uint64Value"))):
				{
					let fv = __goscriptTypeSwitchValue
					name = "uint"
				}
				break
		}
	}
	return [name, usage]
}

export async function PrintDefaults(): globalThis.Promise<void> {
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).PrintDefaults() : FlagSet.prototype.PrintDefaults.call(CommandLine))
}

export var Usage: (() => void) | null

export async function __goscript_init_Usage(): globalThis.Promise<void> {
	if (((Usage) as any) === undefined) {
		Usage = $.functionValue(async (): globalThis.Promise<void> => {
	await fmt.Fprintf($.pointerValueOrNil((CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Output() : FlagSet.prototype.Output.call(CommandLine)))!, "Usage of %s:\n", $.arrayIndex(os.Args!, 0))
	await PrintDefaults()
}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
	}
}

export function __goscript_get_Usage(): (() => void) | null {
	if (((Usage) as any) === undefined) {
		throw new globalThis.Error("goscript package variable Usage read before initialization")
	}
	return Usage
}

export function __goscript_set_Usage(__goscriptValue: (() => void) | null): void {
	Usage = __goscriptValue
}

export function NFlag(): number {
	return $.len($.pointerValue<FlagSet>(CommandLine).actual)
}

export function Arg(i: number): string {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Arg(i) : FlagSet.prototype.Arg.call(CommandLine, i))
}

export function NArg(): number {
	return $.sliceLen($.pointerValue<FlagSet>(CommandLine).args)
}

export function Args(): $.Slice<string> {
	return $.pointerValue<FlagSet>(CommandLine).args
}

export async function BoolVar(p: $.VarRef<boolean> | null, name: string, value: boolean, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newBoolValue(value, p), "*flag.boolValue", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), name, usage)
}

export async function Bool(name: string, value: boolean, usage: string): globalThis.Promise<$.VarRef<boolean> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Bool(name, value, usage) : FlagSet.prototype.Bool.call(CommandLine, name, value, usage))
}

export async function IntVar(p: $.VarRef<number> | null, name: string, value: number, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newIntValue(value, p), "*flag.intValue", __goscriptStatic19(), __goscriptStatic20(), __goscriptStatic11()), name, usage)
}

export async function Int(name: string, value: number, usage: string): globalThis.Promise<$.VarRef<number> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Int(name, value, usage) : FlagSet.prototype.Int.call(CommandLine, name, value, usage))
}

export async function Int64Var(p: $.VarRef<bigint> | null, name: string, value: bigint, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newInt64Value(value, p), "*flag.int64Value", __goscriptStatic17(), __goscriptStatic18(), __goscriptStatic11()), name, usage)
}

export async function Int64(name: string, value: bigint, usage: string): globalThis.Promise<$.VarRef<bigint> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Int64(name, value, usage) : FlagSet.prototype.Int64.call(CommandLine, name, value, usage))
}

export async function UintVar(p: $.VarRef<number> | null, name: string, value: number, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newUintValue(value, p), "*flag.uintValue", __goscriptStatic26(), __goscriptStatic27(), __goscriptStatic11()), name, usage)
}

export async function Uint(name: string, value: number, usage: string): globalThis.Promise<$.VarRef<number> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Uint(name, value, usage) : FlagSet.prototype.Uint.call(CommandLine, name, value, usage))
}

export async function Uint64Var(p: $.VarRef<bigint> | null, name: string, value: bigint, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newUint64Value(value, p), "*flag.uint64Value", __goscriptStatic24(), __goscriptStatic25(), __goscriptStatic11()), name, usage)
}

export async function Uint64(name: string, value: bigint, usage: string): globalThis.Promise<$.VarRef<bigint> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Uint64(name, value, usage) : FlagSet.prototype.Uint64.call(CommandLine, name, value, usage))
}

export async function StringVar(p: $.VarRef<string> | null, name: string, value: string, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newStringValue(value, p), "*flag.stringValue", __goscriptStatic21(), __goscriptStatic22(), __goscriptStatic23()), name, usage)
}

export async function String(name: string, value: string, usage: string): globalThis.Promise<$.VarRef<string> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).String(name, value, usage) : FlagSet.prototype.String.call(CommandLine, name, value, usage))
}

export async function Float64Var(p: $.VarRef<number> | null, name: string, value: number, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newFloat64Value(value, p), "*flag.float64Value", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic11()), name, usage)
}

export async function Float64(name: string, value: number, usage: string): globalThis.Promise<$.VarRef<number> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Float64(name, value, usage) : FlagSet.prototype.Float64.call(CommandLine, name, value, usage))
}

export async function DurationVar(p: $.VarRef<time.Duration> | null, name: string, value: time.Duration, usage: string): globalThis.Promise<void> {
	await FlagSet.prototype.Var.call(CommandLine, $.namedValueInterfaceValue<Value | null>(newDurationValue(value, p), "*flag.durationValue", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()), name, usage)
}

export async function Duration(name: string, value: time.Duration, usage: string): globalThis.Promise<$.VarRef<time.Duration> | null> {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Duration(name, value, usage) : FlagSet.prototype.Duration.call(CommandLine, name, value, usage))
}

export async function TextVar(p: encoding.TextUnmarshaler | null, name: string, value: encoding.TextMarshaler | null, usage: string): globalThis.Promise<void> {
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Var($.interfaceValue<Value | null>(await newTextValue(value, p), "flag.textValue", "flag.textValue"), name, usage) : FlagSet.prototype.Var.call(CommandLine, $.interfaceValue<Value | null>(await newTextValue(value, p), "flag.textValue", "flag.textValue"), name, usage))
}

export async function Func(name: string, usage: string, fn: ((_p0: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Func(name, usage, fn) : FlagSet.prototype.Func.call(CommandLine, name, usage, fn))
}

export async function BoolFunc(name: string, usage: string, fn: ((_p0: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<void> {
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).BoolFunc(name, usage, fn) : FlagSet.prototype.BoolFunc.call(CommandLine, name, usage, fn))
}

export async function Var(value: Value | null, name: string, usage: string): globalThis.Promise<void> {
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Var(value, name, usage) : FlagSet.prototype.Var.call(CommandLine, value, name, usage))
}

export async function Parse(): globalThis.Promise<void> {
	// Ignore errors; CommandLine is set for ExitOnError.
	await (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Parse($.goSlice(os.Args, 1, undefined)) : FlagSet.prototype.Parse.call(CommandLine, $.goSlice(os.Args, 1, undefined)))
}

export function Parsed(): boolean {
	return (CommandLine !== null && (CommandLine as any).__isVarRef !== true && (CommandLine as any).__goValue === undefined ? ((CommandLine as any) as FlagSet).Parsed() : FlagSet.prototype.Parsed.call(CommandLine))
}

export let CommandLine: FlagSet | $.VarRef<FlagSet> | null = null! as FlagSet | $.VarRef<FlagSet> | null

export function __goscript_set_CommandLine(__goscriptValue: FlagSet | $.VarRef<FlagSet> | null): void {
	CommandLine = __goscriptValue
}

function __goscriptInit0(): void {
	// It's possible for execl to hand us an empty os.Args.
	if ($.sliceLen(os.Args) == 0) {
		CommandLine = NewFlagSet("", 1)
	} else {
		CommandLine = NewFlagSet($.arrayIndex(os.Args!, 0), 1)
	}

	// Override generic FlagSet default Usage with call to global Usage.
	// Note: This is not CommandLine.Usage = Usage,
	// because we want any eventual call to use any updated value of Usage,
	// not the value it has when this line is run.
	$.pointerValue<FlagSet>(CommandLine).Usage = commandLineUsage
}

export async function commandLineUsage(): globalThis.Promise<void> {
	void (__goscriptAwait = __goscript_get_Usage()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function NewFlagSet(name: string, errorHandling: ErrorHandling): FlagSet | $.VarRef<FlagSet> | null {
	let f: FlagSet | $.VarRef<FlagSet> | null = new FlagSet({name: name, errorHandling: errorHandling})
	$.pointerValue<FlagSet>(f).Usage = $.functionValue(((__receiver) => () => __receiver.defaultUsage())($.pointerValue<FlagSet>(f)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "flag.(*FlagSet).defaultUsage-fm")
	return f
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsBoolFlag: (receiver: any, ...args: any[]) => (boolFuncValue_IsBoolFlag as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (boolFuncValue_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (boolFuncValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (({ kind: $.TypeKind.Function, name: "flag.boolFuncValue", params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsBoolFlag", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Get: (receiver: any, ...args: any[]) => (boolValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), IsBoolFlag: (receiver: any, ...args: any[]) => (boolValue_IsBoolFlag as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (boolValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (boolValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool", "flag.boolValue")))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("IsBoolFlag", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({Get: (receiver: any, ...args: any[]) => (durationValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (durationValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (durationValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "flag.durationValue")))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({Get: (receiver: any, ...args: any[]) => (float64Value_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (float64Value_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (float64Value_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64", "flag.float64Value")))
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ({Set: (receiver: any, ...args: any[]) => (funcValue_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (funcValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= (({ kind: $.TypeKind.Function, name: "flag.funcValue", params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= ([$.methodSignature("Set", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ({Get: (receiver: any, ...args: any[]) => (int64Value_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (int64Value_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (int64Value_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic18$value: any
function __goscriptStatic18(): any {
	return __goscriptStatic18$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "flag.int64Value")))
}

var __goscriptStatic19$value: any
function __goscriptStatic19(): any {
	return __goscriptStatic19$value ??= ({Get: (receiver: any, ...args: any[]) => (intValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (intValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (intValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic20$value: any
function __goscriptStatic20(): any {
	return __goscriptStatic20$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "flag.intValue")))
}

var __goscriptStatic21$value: any
function __goscriptStatic21(): any {
	return __goscriptStatic21$value ??= ({Get: (receiver: any, ...args: any[]) => (stringValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (stringValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (stringValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic22$value: any
function __goscriptStatic22(): any {
	return __goscriptStatic22$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string", "flag.stringValue")))
}

var __goscriptStatic23$value: any
function __goscriptStatic23(): any {
	return __goscriptStatic23$value ??= ([$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Set", [["val", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic24$value: any
function __goscriptStatic24(): any {
	return __goscriptStatic24$value ??= ({Get: (receiver: any, ...args: any[]) => (uint64Value_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (uint64Value_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (uint64Value_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic25$value: any
function __goscriptStatic25(): any {
	return __goscriptStatic25$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64", "flag.uint64Value")))
}

var __goscriptStatic26$value: any
function __goscriptStatic26(): any {
	return __goscriptStatic26$value ??= ({Get: (receiver: any, ...args: any[]) => (uintValue_Get as any)(receiver, ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (uintValue_Set as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (uintValue_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic27$value: any
function __goscriptStatic27(): any {
	return __goscriptStatic27$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint", "flag.uintValue")))
}

var __goscriptAwait: any

await __goscript_init_Usage()

__goscriptInit0()
