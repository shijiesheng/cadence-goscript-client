// Generated file based on provide.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as graph from "@goscript/go.uber.org/dig/internal/graph/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/go.uber.org/dig/internal/graph/index.js"
import "@goscript/math/rand/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.ProvideOption", "dig.provideOptions", "dig.provideNameOption", "dig.provideGroupOption", "dig.ID", "dig.ProvideInfo", "dig.Input", "dig.Output", "dig.fillProvideInfoOption", "dig.provideAsOption", "dig.provideLocationOption", "dig.provideExportOption", "dig.provider", "dig.connectionVisitor"])

export type ProvideOption = {
	applyProvideOption(_p0: provideOptions | $.VarRef<provideOptions> | null): void
}

$.registerInterfaceType(
	"dig.ProvideOption",
	null,
	[$.methodSignature("applyProvideOption", [/* @__PURE__ */ $.pointerType("dig.provideOptions")])]
);

export type provideNameOption = string

$.registerNamedValueType(
	"dig.provideNameOption",
	{String: (receiver: any, ...args: any[]) => (provideNameOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideNameOption_applyProvideOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opt", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])]
);

$.registerNamedValueType(
	"*dig.provideNameOption",
	{String: (receiver: any, ...args: any[]) => (provideNameOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideNameOption_applyProvideOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opt", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])]
);

export type provideGroupOption = string

$.registerNamedValueType(
	"dig.provideGroupOption",
	{String: (receiver: any, ...args: any[]) => (provideGroupOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideGroupOption_applyProvideOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opt", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])]
);

$.registerNamedValueType(
	"*dig.provideGroupOption",
	{String: (receiver: any, ...args: any[]) => (provideGroupOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideGroupOption_applyProvideOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opt", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])]
);

export type ID = number

export type provideAsOption = $.Slice<any>

$.registerNamedType("dig.provideAsOption", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }));

$.registerNamedValueType(
	"dig.provideAsOption",
	{String: (receiver: any, ...args: any[]) => (provideAsOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideAsOption_applyProvideOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opts", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])]
);

$.registerNamedValueType(
	"*dig.provideAsOption",
	{String: (receiver: any, ...args: any[]) => (provideAsOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideAsOption_applyProvideOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opts", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])]
);

export type provider = {
	CType(): reflect.Type | null
	Call(_p0: __goscript_container.containerStore | null): $.GoError | globalThis.Promise<$.GoError>
	ID(): dot.CtorID
	Location(): digreflect.Func | $.VarRef<digreflect.Func> | null
	Order(_p0: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null): number
	OrigScope(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
	ParamList(): __goscript_param.paramList
	ResultList(): __goscript_result.resultList
}

$.registerInterfaceType(
	"dig.provider",
	null,
	[$.methodSignature("CType", [], ["reflect.Type"]), $.methodSignature("Call", ["dig.containerStore"], ["error"]), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uintptr", "dot.CtorID")]), $.methodSignature("Location", [], [/* @__PURE__ */ $.pointerType("digreflect.Func")]), $.methodSignature("Order", [/* @__PURE__ */ $.pointerType("dig.Scope")], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("OrigScope", [], [/* @__PURE__ */ $.pointerType("dig.Scope")]), $.methodSignature("ParamList", [], ["dig.paramList"]), $.methodSignature("ResultList", [], ["dig.resultList"])]
);

export class provideOptions {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Group(): string {
		return this._fields.Group
	}

	public set Group(value: string) {
		this._fields.Group = value
	}

	public get Info(): ProvideInfo | $.VarRef<ProvideInfo> | null {
		return this._fields.Info
	}

	public set Info(value: ProvideInfo | $.VarRef<ProvideInfo> | null) {
		this._fields.Info = value
	}

	public get As(): $.Slice<any> {
		return this._fields.As
	}

	public set As(value: $.Slice<any>) {
		this._fields.As = value
	}

	public get Location(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.Location
	}

	public set Location(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.Location = value
	}

	public get Exported(): boolean {
		return this._fields.Exported
	}

	public set Exported(value: boolean) {
		this._fields.Exported = value
	}

	public get Callback(): ((_p0: __goscript_callback.CallbackInfo) => void) | null {
		return this._fields.Callback
	}

	public set Callback(value: ((_p0: __goscript_callback.CallbackInfo) => void) | null) {
		this._fields.Callback = value
	}

	public _fields: {
		Name: string
		Group: string
		Info: ProvideInfo | $.VarRef<ProvideInfo> | null
		As: $.Slice<any>
		Location: digreflect.Func | $.VarRef<digreflect.Func> | null
		Exported: boolean
		Callback: ((_p0: __goscript_callback.CallbackInfo) => void) | null
	}

	constructor(init?: Partial<{Name?: string, Group?: string, Info?: ProvideInfo | $.VarRef<ProvideInfo> | null, As?: $.Slice<any>, Location?: digreflect.Func | $.VarRef<digreflect.Func> | null, Exported?: boolean, Callback?: ((_p0: __goscript_callback.CallbackInfo) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Group: init?.Group ?? ("" as string),
			Info: init?.Info ?? (null! as ProvideInfo | $.VarRef<ProvideInfo> | null),
			As: init?.As ?? (null! as $.Slice<any>),
			Location: init?.Location ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			Exported: init?.Exported ?? (false as boolean),
			Callback: init?.Callback ?? (null! as ((_p0: __goscript_callback.CallbackInfo) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): provideOptions {
		return new provideOptions(this, true)
	}

	public __goscriptAssign(source: provideOptions): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Group = values.Group
		target.Info = values.Info
		target.As = values.As
		target.Location = values.Location
		target.Exported = values.Exported
		target.Callback = values.Callback
	}

	public async Validate(): globalThis.Promise<$.GoError> {
		const o: provideOptions | $.VarRef<provideOptions> | null = this;
		const o$: provideOptions = o == null ? $.pointerTarget<provideOptions>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<provideOptions>(o)
		if ($.stringLen((o$ as provideOptions).Group) > 0) {
			if ($.stringLen((o$ as provideOptions).Name) > 0) {
				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot use named values with value groups: name:%q provided with group:%q", (o$ as provideOptions).Name, (o$ as provideOptions).Group), null), "dig.errInvalidInput", "dig.errInvalidInput")
			}
		}

		// Names must be representable inside a backquoted string. The only
		// limitation for raw string literals as per
		// https://golang.org/ref/spec#raw_string_lit is that they cannot contain
		// backquotes.
		if (strings.ContainsRune((o$ as provideOptions).Name, 96)) {
			return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid dig.Name(%q): names cannot contain backquotes", (o$ as provideOptions).Name), null), "dig.errInvalidInput", "dig.errInvalidInput")
		}
		if (strings.ContainsRune((o$ as provideOptions).Group, 96)) {
			return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid dig.Group(%q): group names cannot contain backquotes", (o$ as provideOptions).Group), null), "dig.errInvalidInput", "dig.errInvalidInput")
		}

		for (let __goscriptRangeTarget0 = (o$ as provideOptions).As, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let i = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
			let t = reflect.TypeOf(i)

			if (t == null) {
				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("invalid dig.As(nil): argument must be a pointer to an interface", null), "dig.errInvalidInput", "dig.errInvalidInput")
			}

			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid dig.As(%v): argument must be a pointer to an interface", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")
			}

			let pointingTo = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (pointingTo !== null && (pointingTo as any).__isVarRef !== true && (pointingTo as any).__goValue === undefined ? (pointingTo as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(pointingTo)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 20) {
				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid dig.As(*%v): argument must be a pointer to an interface", (pointingTo as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"dig.provideOptions",
		() => new provideOptions(),
		() => [$.methodSignature("Validate", [], ["error"], true)],
		provideOptions,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Group", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Info", /* @__PURE__ */ $.pointerType("dig.ProvideInfo"), [2], 32, true), /* @__PURE__ */ $.structField("As", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [3], 40, true), /* @__PURE__ */ $.structField("Location", /* @__PURE__ */ $.pointerType("digreflect.Func"), [4], 64, true), /* @__PURE__ */ $.structField("Exported", /* @__PURE__ */ $.basicType("bool"), [5], 72, true), /* @__PURE__ */ $.structField("Callback", ({ kind: $.TypeKind.Function, name: "dig.Callback", params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo), [6], 80, true)]
	)
}

export class ProvideInfo {
	public get ID(): ID {
		return this._fields.ID
	}

	public set ID(value: ID) {
		this._fields.ID = value
	}

	public get Inputs(): $.Slice<Input | $.VarRef<Input> | null> {
		return this._fields.Inputs
	}

	public set Inputs(value: $.Slice<Input | $.VarRef<Input> | null>) {
		this._fields.Inputs = value
	}

	public get Outputs(): $.Slice<Output | $.VarRef<Output> | null> {
		return this._fields.Outputs
	}

	public set Outputs(value: $.Slice<Output | $.VarRef<Output> | null>) {
		this._fields.Outputs = value
	}

	public _fields: {
		ID: ID
		Inputs: $.Slice<Input | $.VarRef<Input> | null>
		Outputs: $.Slice<Output | $.VarRef<Output> | null>
	}

	constructor(init?: Partial<{ID?: ID, Inputs?: $.Slice<Input | $.VarRef<Input> | null>, Outputs?: $.Slice<Output | $.VarRef<Output> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as ID),
			Inputs: init?.Inputs ?? (null! as $.Slice<Input | $.VarRef<Input> | null>),
			Outputs: init?.Outputs ?? (null! as $.Slice<Output | $.VarRef<Output> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProvideInfo {
		return new ProvideInfo(this, true)
	}

	public __goscriptAssign(source: ProvideInfo): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.Inputs = values.Inputs
		target.Outputs = values.Outputs
	}

	static __typeInfo = $.registerStructType(
		"dig.ProvideInfo",
		() => new ProvideInfo(),
		() => [],
		ProvideInfo,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int", "dig.ID"), [0], 0, true), /* @__PURE__ */ $.structField("Inputs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Input")), [1], 8, true), /* @__PURE__ */ $.structField("Outputs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Output")), [2], 32, true)]
	)
}

export class Input {
	public get t(): reflect.Type | null {
		return this._fields.t
	}

	public set t(value: reflect.Type | null) {
		this._fields.t = value
	}

	public get optional(): boolean {
		return this._fields.optional
	}

	public set optional(value: boolean) {
		this._fields.optional = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get group(): string {
		return this._fields.group
	}

	public set group(value: string) {
		this._fields.group = value
	}

	public _fields: {
		t: reflect.Type | null
		optional: boolean
		name: string
		group: string
	}

	constructor(init?: Partial<{t?: reflect.Type | null, optional?: boolean, name?: string, group?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as reflect.Type | null),
			optional: init?.optional ?? (false as boolean),
			name: init?.name ?? ("" as string),
			group: init?.group ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Input {
		return new Input(this, true)
	}

	public __goscriptAssign(source: Input): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "reflect.Type")
		target.optional = values.optional
		target.name = values.name
		target.group = values.group
	}

	public async String(): globalThis.Promise<string> {
		const i: Input | $.VarRef<Input> | null = this;
		const i$: Input = i == null ? $.pointerTarget<Input>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Input>(i)
		let toks: $.Slice<string> = $.makeSlice<string>(0, 3, "string")
		let t = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((i$ as Input).t).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((i$ as Input).optional) {
			toks = $.appendOne(toks, "optional")
		}
		if (!$.stringEqual((i$ as Input).name, "")) {
			toks = $.appendOne(toks, await fmt.Sprintf("name = %q", (i$ as Input).name))
		}
		if (!$.stringEqual((i$ as Input).group, "")) {
			toks = $.appendOne(toks, await fmt.Sprintf("group = %q", (i$ as Input).group))
		}

		if ($.sliceLen(toks) == 0) {
			return t
		}
		return fmt.Sprintf("%v[%v]", t, strings.Join(toks, ", "))
	}

	static __typeInfo = $.registerStructType(
		"dig.Input",
		() => new Input(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Input,
		() => [/* @__PURE__ */ $.structField("t", "reflect.Type", [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("optional", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("group", /* @__PURE__ */ $.basicType("string"), [3], 40, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class Output {
	public get t(): reflect.Type | null {
		return this._fields.t
	}

	public set t(value: reflect.Type | null) {
		this._fields.t = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get group(): string {
		return this._fields.group
	}

	public set group(value: string) {
		this._fields.group = value
	}

	public _fields: {
		t: reflect.Type | null
		name: string
		group: string
	}

	constructor(init?: Partial<{t?: reflect.Type | null, name?: string, group?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as reflect.Type | null),
			name: init?.name ?? ("" as string),
			group: init?.group ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Output {
		return new Output(this, true)
	}

	public __goscriptAssign(source: Output): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "reflect.Type")
		target.name = values.name
		target.group = values.group
	}

	public async String(): globalThis.Promise<string> {
		const o: Output | $.VarRef<Output> | null = this;
		const o$: Output = o == null ? $.pointerTarget<Output>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Output>(o)
		let toks: $.Slice<string> = $.makeSlice<string>(0, 2, "string")
		let t = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((o$ as Output).t).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!$.stringEqual((o$ as Output).name, "")) {
			toks = $.appendOne(toks, await fmt.Sprintf("name = %q", (o$ as Output).name))
		}
		if (!$.stringEqual((o$ as Output).group, "")) {
			toks = $.appendOne(toks, await fmt.Sprintf("group = %q", (o$ as Output).group))
		}

		if ($.sliceLen(toks) == 0) {
			return t
		}
		return fmt.Sprintf("%v[%v]", t, strings.Join(toks, ", "))
	}

	static __typeInfo = $.registerStructType(
		"dig.Output",
		() => new Output(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Output,
		() => [/* @__PURE__ */ $.structField("t", "reflect.Type", [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("group", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class fillProvideInfoOption {
	public get info(): ProvideInfo | $.VarRef<ProvideInfo> | null {
		return this._fields.info
	}

	public set info(value: ProvideInfo | $.VarRef<ProvideInfo> | null) {
		this._fields.info = value
	}

	public _fields: {
		info: ProvideInfo | $.VarRef<ProvideInfo> | null
	}

	constructor(init?: Partial<{info?: ProvideInfo | $.VarRef<ProvideInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			info: init?.info ?? (null! as ProvideInfo | $.VarRef<ProvideInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fillProvideInfoOption {
		return new fillProvideInfoOption(this, true)
	}

	public __goscriptAssign(source: fillProvideInfoOption): void {
		const target = this._fields
		const values = source._fields
		target.info = values.info
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("FillProvideInfo(%p)", $.interfaceValue(o.info, "*dig.ProvideInfo", /* @__PURE__ */ $.pointerType("dig.ProvideInfo")))
	}

	public applyProvideOption(opts: provideOptions | $.VarRef<provideOptions> | null): void {
		const o = this;
		$.pointerValue<provideOptions>(opts).Info = o.info
	}

	static __typeInfo = $.registerStructType(
		"dig.fillProvideInfoOption",
		() => new fillProvideInfoOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opts", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])],
		fillProvideInfoOption,
		() => [/* @__PURE__ */ $.structField("info", /* @__PURE__ */ $.pointerType("dig.ProvideInfo"), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class provideLocationOption {
	public get loc(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.loc
	}

	public set loc(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.loc = value
	}

	public _fields: {
		loc: digreflect.Func | $.VarRef<digreflect.Func> | null
	}

	constructor(init?: Partial<{loc?: digreflect.Func | $.VarRef<digreflect.Func> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			loc: init?.loc ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): provideLocationOption {
		return new provideLocationOption(this, true)
	}

	public __goscriptAssign(source: provideLocationOption): void {
		const target = this._fields
		const values = source._fields
		target.loc = values.loc
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("LocationForPC(%v)", $.interfaceValue(o.loc, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
	}

	public applyProvideOption(opts: provideOptions | $.VarRef<provideOptions> | null): void {
		const o = this;
		$.pointerValue<provideOptions>(opts).Location = o.loc
	}

	static __typeInfo = $.registerStructType(
		"dig.provideLocationOption",
		() => new provideLocationOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opts", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])],
		provideLocationOption,
		() => [/* @__PURE__ */ $.structField("loc", /* @__PURE__ */ $.pointerType("digreflect.Func"), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class provideExportOption {
	public get exported(): boolean {
		return this._fields.exported
	}

	public set exported(value: boolean) {
		this._fields.exported = value
	}

	public _fields: {
		exported: boolean
	}

	constructor(init?: Partial<{exported?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			exported: init?.exported ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): provideExportOption {
		return new provideExportOption(this, true)
	}

	public __goscriptAssign(source: provideExportOption): void {
		const target = this._fields
		const values = source._fields
		target.exported = values.exported
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("Export(%v)", o.exported)
	}

	public applyProvideOption(opts: provideOptions | $.VarRef<provideOptions> | null): void {
		const o = this;
		$.pointerValue<provideOptions>(opts).Exported = o.exported
	}

	static __typeInfo = $.registerStructType(
		"dig.provideExportOption",
		() => new provideExportOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opts", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])],
		provideExportOption,
		() => [/* @__PURE__ */ $.structField("exported", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class connectionVisitor {
	public get s(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.s
	}

	public set s(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.s = value
	}

	// If this points to a non-nil value, we've already encountered an error
	// and should stop traversing.
	public get err(): $.VarRef<$.GoError> | null {
		return this._fields.err
	}

	public set err(value: $.VarRef<$.GoError> | null) {
		this._fields.err = value
	}

	// Map of keys provided to path that provided this. The path is a string
	// documenting which positional return value or dig.Out attribute is
	// providing this particular key.
	//
	// For example, "[0].Foo" indicates that the value was provided by the Foo
	// attribute of the dig.Out returned as the first result of the
	// constructor.
	public get keyPaths(): globalThis.Map<__goscript_container.key, string> | null {
		return this._fields.keyPaths
	}

	public set keyPaths(value: globalThis.Map<__goscript_container.key, string> | null) {
		this._fields.keyPaths = value
	}

	// We track the path to the current result here. For example, this will
	// be, ["[1]", "Foo", "Bar"] when we're visiting Bar in,
	//
	//   func() (io.Writer, struct {
	//     dig.Out
	//
	//     Foo struct {
	//       dig.Out
	//
	//       Bar io.Reader
	//     }
	//   })
	public get currentResultPath(): $.Slice<string> {
		return this._fields.currentResultPath
	}

	public set currentResultPath(value: $.Slice<string>) {
		this._fields.currentResultPath = value
	}

	public _fields: {
		s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
		err: $.VarRef<$.GoError> | null
		keyPaths: globalThis.Map<__goscript_container.key, string> | null
		currentResultPath: $.Slice<string>
	}

	constructor(init?: Partial<{s?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, err?: $.VarRef<$.GoError> | null, keyPaths?: globalThis.Map<__goscript_container.key, string> | null, currentResultPath?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null),
			err: init?.err ?? (null! as $.VarRef<$.GoError> | null),
			keyPaths: init?.keyPaths ?? (null! as globalThis.Map<__goscript_container.key, string> | null),
			currentResultPath: init?.currentResultPath ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): connectionVisitor {
		return new connectionVisitor(this, true)
	}

	public __goscriptAssign(source: connectionVisitor): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
		target.err = values.err
		target.keyPaths = values.keyPaths
		target.currentResultPath = values.currentResultPath
	}

	public AnnotateWithField(f: __goscript_result.resultObjectField): __goscript_result.resultVisitor | null {
		let cv: connectionVisitor = this;
		cv.currentResultPath = $.appendOne(cv.currentResultPath, f.FieldName)
		return $.interfaceValue<__goscript_result.resultVisitor | null>((cv).clone(), "dig.connectionVisitor", "dig.connectionVisitor")
	}

	public async AnnotateWithPosition(i: number): globalThis.Promise<__goscript_result.resultVisitor | null> {
		let cv: connectionVisitor = this;
		cv.currentResultPath = $.appendOne(cv.currentResultPath, await fmt.Sprintf("[%d]", $.basicInterfaceValue(i, "int")))
		return $.interfaceValue<__goscript_result.resultVisitor | null>((cv).clone(), "dig.connectionVisitor", "dig.connectionVisitor")
	}

	public async Visit(res: __goscript_result.result | null): globalThis.Promise<__goscript_result.resultVisitor | null> {
		let cv: connectionVisitor = this;
		// Already failed. Stop looking.
		if ($.pointerValue<$.GoError>(cv.err) != null) {
			return null
		}

		let path = strings.Join(cv.currentResultPath, ".")

		{
			const __goscriptTypeSwitchValue = res
			switch (true) {
				case $.typeAssert<__goscript_result.resultSingle>(__goscriptTypeSwitchValue, "dig.resultSingle").ok:
					{
						let r: __goscript_result.resultSingle = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_result.resultSingle>(__goscriptTypeSwitchValue, "dig.resultSingle").value))
						let k = new __goscript_container.key({name: r.Name, t: r.Type}, true)

						{
							let err = await $.markAsStructValue($.cloneStructValue(cv)).checkKey((k).clone(), path)
							if (err != null) {
								cv.err!.value = err
								return null
							}
						}
						for (let __goscriptRangeTarget2 = r.As, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
							let asType = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as reflect.Type | null)
							let __goscriptShadow0 = new __goscript_container.key({name: r.Name, t: asType}, true)
							{
								let err = await $.markAsStructValue($.cloneStructValue(cv)).checkKey((__goscriptShadow0).clone(), path)
								if (err != null) {
									cv.err!.value = err
									return null
								}
							}
						}
					}
					break
				case $.typeAssert<__goscript_result.resultGrouped>(__goscriptTypeSwitchValue, "dig.resultGrouped").ok:
					{
						let r: __goscript_result.resultGrouped = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_result.resultGrouped>(__goscriptTypeSwitchValue, "dig.resultGrouped").value))
						let k = new __goscript_container.key({group: r.Group, t: r.Type}, true)
						$.mapSet(cv.keyPaths, (k).clone(), path)
						for (let __goscriptRangeTarget3 = r.As, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
							let asType = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Type | null)
							let __goscriptShadow1 = new __goscript_container.key({group: r.Group, t: asType}, true)
							$.mapSet(cv.keyPaths, (__goscriptShadow1).clone(), path)
						}
					}
					break
			}
		}

		return $.interfaceValue<__goscript_result.resultVisitor | null>((cv).clone(), "dig.connectionVisitor", "dig.connectionVisitor")
	}

	public async checkKey(k: __goscript_container.key, path: string): globalThis.Promise<$.GoError> {
		const cv = this;
		using __defer = new $.DisposableStack()
		__defer.defer(() => { ((): void => {
			$.mapSet(cv.keyPaths, (k).clone(), path)
		})() })
		{
			let [conflict, ok] = $.mapGet<__goscript_container.key, string, string>(cv.keyPaths, k, "")
			if (ok) {
				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot provide %v from %v", $.interfaceValue((k).clone(), "dig.key", "dig.key"), path), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("already provided by %v", conflict), null), "dig.errInvalidInput", "dig.errInvalidInput")), "dig.errInvalidInput", "dig.errInvalidInput")
			}
		}
		{
			let ps: $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null> = $.mapGet<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>>($.pointerValue<__goscript_scope.Scope>(cv.s).providers, k, null)[0]
			if ($.sliceLen(ps) > 0) {
				let cons: $.Slice<string> = $.makeSlice<string>($.sliceLen(ps), undefined, "string")
				for (let __goscriptRangeTarget4 = ps, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow0 = $.sliceRange(cons), i = 0; i < __goscriptRangeWindow4.length; i++) {
					let p = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null);
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await fmt.Sprint($.interfaceValue((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript__constructor.constructorNode).Location() : __goscript__constructor.constructorNode.prototype.Location.call(p)), "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
				}

				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot provide %v from %v", $.interfaceValue((k).clone(), "dig.key", "dig.key"), path), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("already provided by %v", strings.Join(cons, "; ")), null), "dig.errInvalidInput", "dig.errInvalidInput")), "dig.errInvalidInput", "dig.errInvalidInput")
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"dig.connectionVisitor",
		() => new connectionVisitor(),
		() => [$.methodSignature("AnnotateWithField", [["f", "dig.resultObjectField"]], ["dig.resultVisitor"]), $.methodSignature("AnnotateWithPosition", [["i", /* @__PURE__ */ $.basicType("int")]], ["dig.resultVisitor"]), $.methodSignature("Visit", [["res", "dig.result"]], ["dig.resultVisitor"]), $.methodSignature("checkKey", [["k", "dig.key"], ["path", /* @__PURE__ */ $.basicType("string")]], ["error"])],
		connectionVisitor,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("dig.Scope"), [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("err", /* @__PURE__ */ $.pointerType("error"), [1], 8, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("keyPaths", /* @__PURE__ */ $.mapType("dig.key", /* @__PURE__ */ $.basicType("string")), [2], 16, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("currentResultPath", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 24, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export function Name(name: string): ProvideOption | null {
	return $.namedValueInterfaceValue<ProvideOption | null>(name, "dig.provideNameOption", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function provideNameOption_String(o: provideNameOption): globalThis.Promise<string> {
	return fmt.Sprintf("Name(%q)", o)
}

export function provideNameOption_applyProvideOption(o: provideNameOption, opt: provideOptions | $.VarRef<provideOptions> | null): void {
	$.pointerValue<provideOptions>(opt).Name = o
}

export function Group(group: string): ProvideOption | null {
	return $.namedValueInterfaceValue<ProvideOption | null>(group, "dig.provideGroupOption", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())
}

export async function provideGroupOption_String(o: provideGroupOption): globalThis.Promise<string> {
	return fmt.Sprintf("Group(%q)", o)
}

export function provideGroupOption_applyProvideOption(o: provideGroupOption, opt: provideOptions | $.VarRef<provideOptions> | null): void {
	$.pointerValue<provideOptions>(opt).Group = o
}

export function FillProvideInfo(info: ProvideInfo | $.VarRef<ProvideInfo> | null): ProvideOption | null {
	return $.interfaceValue<ProvideOption | null>(new fillProvideInfoOption({info: info}, true), "dig.fillProvideInfoOption", "dig.fillProvideInfoOption")
}

export function As(i: $.Slice<any>): ProvideOption | null {
	return $.namedValueInterfaceValue<ProvideOption | null>((i as provideAsOption), "dig.provideAsOption", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7())
}

export async function provideAsOption_String(o: provideAsOption): globalThis.Promise<string> {
	let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = bytes.NewBufferString("As(")
	for (let __goscriptRangeTarget1 = o, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let iface = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as any)
		if (i > 0) {
			bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), ", ")
		}
		bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(iface)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), ")")
	return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
}

export function provideAsOption_applyProvideOption(o: provideAsOption, opts: provideOptions | $.VarRef<provideOptions> | null): void {
	const opts$: provideOptions = opts == null ? $.pointerTarget<provideOptions>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<provideOptions>(opts);
	;(opts$ as provideOptions).As = $.appendSlice((opts$ as provideOptions).As, o, $.appendZeros.nil)
}

export function LocationForPC(pc: number): ProvideOption | null {
	return $.interfaceValue<ProvideOption | null>((() => { const __goscriptLiteralField0 = digreflect.InspectFuncPC(pc); return new provideLocationOption({loc: __goscriptLiteralField0}, true) })(), "dig.provideLocationOption", "dig.provideLocationOption")
}

export function Export(_export: boolean): ProvideOption | null {
	return $.interfaceValue<ProvideOption | null>(new provideExportOption({exported: _export}, true), "dig.provideExportOption", "dig.provideExportOption")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (provideNameOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideNameOption_applyProvideOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "dig.provideNameOption"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opt", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (provideGroupOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideGroupOption_applyProvideOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "dig.provideGroupOption"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({String: (receiver: any, ...args: any[]) => (provideAsOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyProvideOption: (receiver: any, ...args: any[]) => (provideAsOption_applyProvideOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "dig.provideAsOption"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyProvideOption", [["opts", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])])
}

var __goscriptAwait: any
