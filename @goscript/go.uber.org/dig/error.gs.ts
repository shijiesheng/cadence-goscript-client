// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/math/rand/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./graph.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.Error", "dig.digError", "dig.PanicError", "dig.errInvalidInput", "dig.errProvide", "dig.errConstructorFailed", "dig.errArgumentsFailed", "dig.errMissingDependencies", "dig.errParamSingleFailed", "dig.errParamGroupFailed", "dig.missingType", "dig.errMissingTypes", "dig.errVisualizer"])

export type Error = {
	Error(): string | globalThis.Promise<string>
	writeMessage(w: io.Writer | null, v: string): void
}

$.registerInterfaceType(
	"dig.Error",
	null,
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])]
);

export type digError = {
	Error(): string | globalThis.Promise<string>
	Format(f: fmt.State | null, verb: number): void
	writeMessage(w: io.Writer | null, v: string): void
}

$.registerInterfaceType(
	"dig.digError",
	null,
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["f", "fmt.State"], ["verb", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])]
);

export type errMissingTypes = $.Slice<missingType>

$.registerNamedType("dig.errMissingTypes", /* @__PURE__ */ $.sliceType("dig.missingType"));

$.registerNamedValueType(
	"dig.errMissingTypes",
	{Error: (receiver: any, ...args: any[]) => (errMissingTypes_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (errMissingTypes_Format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), updateGraph: (receiver: any, ...args: any[]) => (errMissingTypes_updateGraph as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), writeMessage: (receiver: any, ...args: any[]) => (errMissingTypes_writeMessage as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("updateGraph", [["g", /* @__PURE__ */ $.pointerType("dot.Graph")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*dig.errMissingTypes",
	{Error: (receiver: any, ...args: any[]) => (errMissingTypes_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (errMissingTypes_Format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), updateGraph: (receiver: any, ...args: any[]) => (errMissingTypes_updateGraph as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), writeMessage: (receiver: any, ...args: any[]) => (errMissingTypes_writeMessage as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("updateGraph", [["g", /* @__PURE__ */ $.pointerType("dot.Graph")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])]
);

export type errVisualizer = {
	updateGraph(_p0: dot.Graph | $.VarRef<dot.Graph> | null): void
}

$.registerInterfaceType(
	"dig.errVisualizer",
	null,
	[$.methodSignature("updateGraph", [/* @__PURE__ */ $.pointerType("dot.Graph")])]
);

export class PanicError {
	// The function the panic occurred at
	public get fn(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.fn
	}

	public set fn(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.fn = value
	}

	// The panic that was returned from recover()
	public get Panic(): any {
		return this._fields.Panic
	}

	public set Panic(value: any) {
		this._fields.Panic = value
	}

	public _fields: {
		fn: digreflect.Func | $.VarRef<digreflect.Func> | null
		Panic: any
	}

	constructor(init?: Partial<{fn?: digreflect.Func | $.VarRef<digreflect.Func> | null, Panic?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			fn: init?.fn ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			Panic: init?.Panic ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PanicError {
		return new PanicError(this, true)
	}

	public __goscriptAssign(source: PanicError): void {
		const target = this._fields
		const values = source._fields
		target.fn = values.fn
		target.Panic = $.assignFieldValue(target.Panic, values.Panic, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.PanicError", "dig.PanicError"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		if ((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(w)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (c == 118)) {
			await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "panic: %q in func: %+v", e.Panic, $.interfaceValue(e.fn, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
		} else {
			await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "panic: %q in func: %v", e.Panic, $.interfaceValue(e.fn, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
		}
	}

	static __typeInfo = $.registerStructType(
		"dig.PanicError",
		() => new PanicError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]])],
		PanicError,
		() => [/* @__PURE__ */ $.structField("fn", /* @__PURE__ */ $.pointerType("digreflect.Func"), [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("Panic", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, true)]
	)
}

export class errInvalidInput {
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	public get Cause(): $.GoError {
		return this._fields.Cause
	}

	public set Cause(value: $.GoError) {
		this._fields.Cause = value
	}

	public _fields: {
		Message: string
		Cause: $.GoError
	}

	constructor(init?: Partial<{Message?: string, Cause?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? ("" as string),
			Cause: init?.Cause ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errInvalidInput {
		return new errInvalidInput(this, true)
	}

	public __goscriptAssign(source: errInvalidInput): void {
		const target = this._fields
		const values = source._fields
		target.Message = values.Message
		target.Cause = $.assignFieldValue(target.Cause, values.Cause, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errInvalidInput", "dig.errInvalidInput"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await formatError($.interfaceValue<digError | null>((e).clone(), "dig.errInvalidInput", "dig.errInvalidInput"), w, c)
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Cause
	}

	public async writeMessage(w: io.Writer | null, _p1: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, e.Message)
	}

	static __typeInfo = $.registerStructType(
		"dig.errInvalidInput",
		() => new errInvalidInput(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Unwrap", [], ["error"]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["_", /* @__PURE__ */ $.basicType("string")]])],
		errInvalidInput,
		() => [/* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Cause", "error", [1], 16, true)]
	)
}

export class errProvide {
	public get Func(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.Func
	}

	public set Func(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.Func = value
	}

	public get Reason(): $.GoError {
		return this._fields.Reason
	}

	public set Reason(value: $.GoError) {
		this._fields.Reason = value
	}

	public _fields: {
		Func: digreflect.Func | $.VarRef<digreflect.Func> | null
		Reason: $.GoError
	}

	constructor(init?: Partial<{Func?: digreflect.Func | $.VarRef<digreflect.Func> | null, Reason?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Func: init?.Func ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			Reason: init?.Reason ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errProvide {
		return new errProvide(this, true)
	}

	public __goscriptAssign(source: errProvide): void {
		const target = this._fields
		const values = source._fields
		target.Func = values.Func
		target.Reason = $.assignFieldValue(target.Reason, values.Reason, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errProvide", "dig.errProvide"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await formatError($.interfaceValue<digError | null>((e).clone(), "dig.errProvide", "dig.errProvide"), w, c)
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Reason
	}

	public async writeMessage(w: io.Writer | null, verb: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, $.concatString("cannot provide function ", verb), $.interfaceValue(e.Func, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
	}

	static __typeInfo = $.registerStructType(
		"dig.errProvide",
		() => new errProvide(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Unwrap", [], ["error"]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["verb", /* @__PURE__ */ $.basicType("string")]])],
		errProvide,
		() => [/* @__PURE__ */ $.structField("Func", /* @__PURE__ */ $.pointerType("digreflect.Func"), [0], 0, true), /* @__PURE__ */ $.structField("Reason", "error", [1], 8, true)]
	)
}

export class errConstructorFailed {
	public get Func(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.Func
	}

	public set Func(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.Func = value
	}

	public get Reason(): $.GoError {
		return this._fields.Reason
	}

	public set Reason(value: $.GoError) {
		this._fields.Reason = value
	}

	public _fields: {
		Func: digreflect.Func | $.VarRef<digreflect.Func> | null
		Reason: $.GoError
	}

	constructor(init?: Partial<{Func?: digreflect.Func | $.VarRef<digreflect.Func> | null, Reason?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Func: init?.Func ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			Reason: init?.Reason ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errConstructorFailed {
		return new errConstructorFailed(this, true)
	}

	public __goscriptAssign(source: errConstructorFailed): void {
		const target = this._fields
		const values = source._fields
		target.Func = values.Func
		target.Reason = $.assignFieldValue(target.Reason, values.Reason, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errConstructorFailed", "dig.errConstructorFailed"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await formatError($.interfaceValue<digError | null>((e).clone(), "dig.errConstructorFailed", "dig.errConstructorFailed"), w, c)
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Reason
	}

	public async writeMessage(w: io.Writer | null, verb: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, $.concatString("received non-nil error from function ", verb), $.interfaceValue(e.Func, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
	}

	static __typeInfo = $.registerStructType(
		"dig.errConstructorFailed",
		() => new errConstructorFailed(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Unwrap", [], ["error"]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["verb", /* @__PURE__ */ $.basicType("string")]])],
		errConstructorFailed,
		() => [/* @__PURE__ */ $.structField("Func", /* @__PURE__ */ $.pointerType("digreflect.Func"), [0], 0, true), /* @__PURE__ */ $.structField("Reason", "error", [1], 8, true)]
	)
}

export class errArgumentsFailed {
	public get Func(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.Func
	}

	public set Func(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.Func = value
	}

	public get Reason(): $.GoError {
		return this._fields.Reason
	}

	public set Reason(value: $.GoError) {
		this._fields.Reason = value
	}

	public _fields: {
		Func: digreflect.Func | $.VarRef<digreflect.Func> | null
		Reason: $.GoError
	}

	constructor(init?: Partial<{Func?: digreflect.Func | $.VarRef<digreflect.Func> | null, Reason?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Func: init?.Func ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			Reason: init?.Reason ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errArgumentsFailed {
		return new errArgumentsFailed(this, true)
	}

	public __goscriptAssign(source: errArgumentsFailed): void {
		const target = this._fields
		const values = source._fields
		target.Func = values.Func
		target.Reason = $.assignFieldValue(target.Reason, values.Reason, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errArgumentsFailed", "dig.errArgumentsFailed"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await formatError($.interfaceValue<digError | null>((e).clone(), "dig.errArgumentsFailed", "dig.errArgumentsFailed"), w, c)
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Reason
	}

	public async writeMessage(w: io.Writer | null, verb: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, $.concatString("could not build arguments for function ", verb), $.interfaceValue(e.Func, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
	}

	static __typeInfo = $.registerStructType(
		"dig.errArgumentsFailed",
		() => new errArgumentsFailed(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Unwrap", [], ["error"]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["verb", /* @__PURE__ */ $.basicType("string")]])],
		errArgumentsFailed,
		() => [/* @__PURE__ */ $.structField("Func", /* @__PURE__ */ $.pointerType("digreflect.Func"), [0], 0, true), /* @__PURE__ */ $.structField("Reason", "error", [1], 8, true)]
	)
}

export class errMissingDependencies {
	public get Func(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.Func
	}

	public set Func(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.Func = value
	}

	public get Reason(): $.GoError {
		return this._fields.Reason
	}

	public set Reason(value: $.GoError) {
		this._fields.Reason = value
	}

	public _fields: {
		Func: digreflect.Func | $.VarRef<digreflect.Func> | null
		Reason: $.GoError
	}

	constructor(init?: Partial<{Func?: digreflect.Func | $.VarRef<digreflect.Func> | null, Reason?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Func: init?.Func ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			Reason: init?.Reason ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errMissingDependencies {
		return new errMissingDependencies(this, true)
	}

	public __goscriptAssign(source: errMissingDependencies): void {
		const target = this._fields
		const values = source._fields
		target.Func = values.Func
		target.Reason = $.assignFieldValue(target.Reason, values.Reason, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errMissingDependencies", "dig.errMissingDependencies"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await formatError($.interfaceValue<digError | null>((e).clone(), "dig.errMissingDependencies", "dig.errMissingDependencies"), w, c)
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Reason
	}

	public async writeMessage(w: io.Writer | null, verb: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, $.concatString("missing dependencies for function ", verb), $.interfaceValue(e.Func, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
	}

	static __typeInfo = $.registerStructType(
		"dig.errMissingDependencies",
		() => new errMissingDependencies(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Unwrap", [], ["error"]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["verb", /* @__PURE__ */ $.basicType("string")]])],
		errMissingDependencies,
		() => [/* @__PURE__ */ $.structField("Func", /* @__PURE__ */ $.pointerType("digreflect.Func"), [0], 0, true), /* @__PURE__ */ $.structField("Reason", "error", [1], 8, true)]
	)
}

export class errParamSingleFailed {
	public get Key(): __goscript_container.key {
		return this._fields.Key
	}

	public set Key(value: __goscript_container.key) {
		this._fields.Key = value
	}

	public get Reason(): $.GoError {
		return this._fields.Reason
	}

	public set Reason(value: $.GoError) {
		this._fields.Reason = value
	}

	public get CtorID(): dot.CtorID {
		return this._fields.CtorID
	}

	public set CtorID(value: dot.CtorID) {
		this._fields.CtorID = value
	}

	public _fields: {
		Key: __goscript_container.key
		Reason: $.GoError
		CtorID: dot.CtorID
	}

	constructor(init?: Partial<{Key?: __goscript_container.key, Reason?: $.GoError, CtorID?: dot.CtorID}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ? init.Key.clone() : new __goscript_container.key(undefined, true),
			Reason: init?.Reason ?? (null! as $.GoError),
			CtorID: init?.CtorID ?? (0 as dot.CtorID)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errParamSingleFailed {
		return new errParamSingleFailed(this, true)
	}

	public __goscriptAssign(source: errParamSingleFailed): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Key, values.Key)
		target.Reason = $.assignFieldValue(target.Reason, values.Reason, "error")
		target.CtorID = values.CtorID
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errParamSingleFailed", "dig.errParamSingleFailed"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await formatError($.interfaceValue<digError | null>((e).clone(), "dig.errParamSingleFailed", "dig.errParamSingleFailed"), w, c)
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Reason
	}

	public updateGraph(g: dot.Graph | $.VarRef<dot.Graph> | null): void {
		const e = this;
		let failed: dot.Result | $.VarRef<dot.Result> | null = new dot.Result({Node: new dot.Node({Name: e.Key.name, Group: e.Key.group, Type: e.Key.t})})
		void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as dot.Graph).FailNodes($.arrayToSlice<dot.Result | $.VarRef<dot.Result> | null>([failed]), e.CtorID) : dot.Graph.prototype.FailNodes.call(g, $.arrayToSlice<dot.Result | $.VarRef<dot.Result> | null>([failed]), e.CtorID))
	}

	public async writeMessage(w: io.Writer | null, _p1: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, "failed to build %v", $.interfaceValue((e.Key).clone(), "dig.key", "dig.key"))
	}

	static __typeInfo = $.registerStructType(
		"dig.errParamSingleFailed",
		() => new errParamSingleFailed(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Unwrap", [], ["error"]), $.methodSignature("updateGraph", [["g", /* @__PURE__ */ $.pointerType("dot.Graph")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["_", /* @__PURE__ */ $.basicType("string")]])],
		errParamSingleFailed,
		() => [/* @__PURE__ */ $.structField("Key", "dig.key", [0], 0, true), /* @__PURE__ */ $.structField("Reason", "error", [1], 48, true), /* @__PURE__ */ $.structField("CtorID", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), [2], 64, true)]
	)
}

export class errParamGroupFailed {
	public get Key(): __goscript_container.key {
		return this._fields.Key
	}

	public set Key(value: __goscript_container.key) {
		this._fields.Key = value
	}

	public get Reason(): $.GoError {
		return this._fields.Reason
	}

	public set Reason(value: $.GoError) {
		this._fields.Reason = value
	}

	public get CtorID(): dot.CtorID {
		return this._fields.CtorID
	}

	public set CtorID(value: dot.CtorID) {
		this._fields.CtorID = value
	}

	public _fields: {
		Key: __goscript_container.key
		Reason: $.GoError
		CtorID: dot.CtorID
	}

	constructor(init?: Partial<{Key?: __goscript_container.key, Reason?: $.GoError, CtorID?: dot.CtorID}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ? init.Key.clone() : new __goscript_container.key(undefined, true),
			Reason: init?.Reason ?? (null! as $.GoError),
			CtorID: init?.CtorID ?? (0 as dot.CtorID)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errParamGroupFailed {
		return new errParamGroupFailed(this, true)
	}

	public __goscriptAssign(source: errParamGroupFailed): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Key, values.Key)
		target.Reason = $.assignFieldValue(target.Reason, values.Reason, "error")
		target.CtorID = values.CtorID
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errParamGroupFailed", "dig.errParamGroupFailed"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await formatError($.interfaceValue<digError | null>((e).clone(), "dig.errParamGroupFailed", "dig.errParamGroupFailed"), w, c)
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Reason
	}

	public updateGraph(g: dot.Graph | $.VarRef<dot.Graph> | null): void {
		const e = this;
		void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as dot.Graph).FailGroupNodes(e.Key.group, e.Key.t, e.CtorID) : dot.Graph.prototype.FailGroupNodes.call(g, e.Key.group, e.Key.t, e.CtorID))
	}

	public async writeMessage(w: io.Writer | null, _p1: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, "could not build value group %v", $.interfaceValue((e.Key).clone(), "dig.key", "dig.key"))
	}

	static __typeInfo = $.registerStructType(
		"dig.errParamGroupFailed",
		() => new errParamGroupFailed(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Unwrap", [], ["error"]), $.methodSignature("updateGraph", [["g", /* @__PURE__ */ $.pointerType("dot.Graph")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["_", /* @__PURE__ */ $.basicType("string")]])],
		errParamGroupFailed,
		() => [/* @__PURE__ */ $.structField("Key", "dig.key", [0], 0, true), /* @__PURE__ */ $.structField("Reason", "error", [1], 48, true), /* @__PURE__ */ $.structField("CtorID", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), [2], 64, true)]
	)
}

export class missingType {
	public get Key(): __goscript_container.key {
		return this._fields.Key
	}

	public set Key(value: __goscript_container.key) {
		this._fields.Key = value
	}

	// If non-empty, we will include suggestions for what the user may have
	// meant.
	public get suggestions(): $.Slice<__goscript_container.key> {
		return this._fields.suggestions
	}

	public set suggestions(value: $.Slice<__goscript_container.key>) {
		this._fields.suggestions = value
	}

	public _fields: {
		Key: __goscript_container.key
		suggestions: $.Slice<__goscript_container.key>
	}

	constructor(init?: Partial<{Key?: __goscript_container.key, suggestions?: $.Slice<__goscript_container.key>}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ? init.Key.clone() : new __goscript_container.key(undefined, true),
			suggestions: init?.suggestions ?? (null! as $.Slice<__goscript_container.key>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): missingType {
		return new missingType(this, true)
	}

	public __goscriptAssign(source: missingType): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Key, values.Key)
		target.suggestions = values.suggestions
	}

	public async Format(w: fmt.State | null, v: number): globalThis.Promise<void> {
		const mt = this;
		let plusV = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(w)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (v == 118)

		await fmt.Fprint($.pointerValueOrNil((w as io.Writer | null))!, $.interfaceValue((mt.Key).clone(), "dig.key", "dig.key"))
		switch ($.sliceLen(mt.suggestions)) {
			case 0:
			{
				if (plusV) {
					await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, " (did you mean to Provide it?)")
				}
				break
			}
			case 1:
			{
				let sug = ($.arrayIndex(mt.suggestions!, 0)).clone()
				if (plusV) {
					await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, " (did you mean to use %v?)", $.interfaceValue((sug).clone(), "dig.key", "dig.key"))
				} else {
					await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, " (did you mean %v?)", $.interfaceValue((sug).clone(), "dig.key", "dig.key"))
				}
				break
			}
			default:
			{
				if (plusV) {
					await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, " (did you mean to use one of ")
				} else {
					await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, " (did you mean ")
				}

				let lastIdx = $.sliceLen(mt.suggestions) - 1
				for (let __goscriptRangeTarget0 = mt.suggestions, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
					let sug = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_container.key)).clone()
					if (i > 0) {
						await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, ", ")
						if (i == lastIdx) {
							await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, "or ")
						}
					}
					await fmt.Fprint($.pointerValueOrNil((w as io.Writer | null))!, $.interfaceValue((sug).clone(), "dig.key", "dig.key"))
				}
				await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, "?)")
				break
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"dig.missingType",
		() => new missingType(),
		() => [$.methodSignature("Format", [["w", "fmt.State"], ["v", /* @__PURE__ */ $.basicType("int32")]])],
		missingType,
		() => [/* @__PURE__ */ $.structField("Key", "dig.key", [0], 0, true), /* @__PURE__ */ $.structField("suggestions", /* @__PURE__ */ $.sliceType("dig.key"), [1], 48, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export async function formatError(e: digError | null, w: fmt.State | null, v: number): globalThis.Promise<void> {
	let multiline = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(w)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (v == 118)
	let verb = "%v"
	if (multiline) {
		verb = "%+v"
	}

	// "context: " or "context:\n"
	void (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<digError, null>) : $.pointerValue<Exclude<digError, null>>(e)).writeMessage((w as io.Writer | null), verb), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// Will route back to this function recursively if next error
	// is also wrapped and points back here
	let wrappedError = errors.Unwrap($.pointerValueOrNil((e as $.GoError))!)
	if (wrappedError == null) {
		return
	}
	await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, ":")
	if (multiline) {
		await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, "\n")
	} else {
		await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, " ")
	}
	await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, verb, (wrappedError as any))
}

export function RootCause(err: $.GoError): $.GoError {
	let de: $.VarRef<Error | null> = $.varRef(null! as Error | null)
	// Dig down to first non dig.Error, or bottom of chain
	for (; errors.As($.pointerValueOrNil(err)!, $.interfaceValue(de, "*dig.Error", /* @__PURE__ */ $.pointerType("dig.Error"))); err = errors.Unwrap($.pointerValueOrNil((de.value as $.GoError))!)) {
	}

	if (err == null) {
		return (de.value as $.GoError)
	}

	return err
}

export function newErrInvalidInput(msg: string, cause: $.GoError): errInvalidInput {
	return new errInvalidInput({Message: msg, Cause: cause}, true)
}

export async function newErrMissingTypes(c: __goscript_container.containerStore | null, k: __goscript_container.key): globalThis.Promise<errMissingTypes> {
	// Possible types we will look for in the container. We will always look
	// for pointers to the requested type and some extras on a per-Kind basis.
	let suggestions: $.Slice<reflect.Type | null> = $.arrayToSlice<reflect.Type | null>([reflect.PtrTo($.pointerValueOrNil(k.t)!)])

	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
		// The user requested a pointer but maybe we have a value.
		suggestions = $.appendOne(suggestions, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.appendZeros.nil)
	}

	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
		// Maybe the user meant a slice of pointers while we have the slice of elements
		suggestions = $.appendOne(suggestions, reflect.SliceOf($.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))!), $.appendZeros.nil)

		// Maybe the user meant a slice of elements while we have the slice of pointers
		let sliceElement = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((__goscriptAwait = (sliceElement !== null && (sliceElement as any).__isVarRef !== true && (sliceElement as any).__goValue === undefined ? (sliceElement as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(sliceElement)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			suggestions = $.appendOne(suggestions, reflect.SliceOf($.pointerValueOrNil((__goscriptAwait = (sliceElement !== null && (sliceElement as any).__isVarRef !== true && (sliceElement as any).__goValue === undefined ? (sliceElement as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(sliceElement)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!), $.appendZeros.nil)
		}
	}

	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 17) {
		// Maybe the user meant an array of pointers while we have the array of elements
		suggestions = $.appendOne(suggestions, reflect.ArrayOf((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValueOrNil(reflect.PtrTo($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))!), $.appendZeros.nil)

		// Maybe the user meant an array of elements while we have the array of pointers
		let arrayElement = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((__goscriptAwait = (arrayElement !== null && (arrayElement as any).__isVarRef !== true && (arrayElement as any).__goValue === undefined ? (arrayElement as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(arrayElement)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
			suggestions = $.appendOne(suggestions, reflect.ArrayOf((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValueOrNil((__goscriptAwait = (arrayElement !== null && (arrayElement as any).__isVarRef !== true && (arrayElement as any).__goValue === undefined ? (arrayElement as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(arrayElement)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!), $.appendZeros.nil)
		}
	}

	let knownTypes: $.Slice<reflect.Type | null> = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).knownTypes(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<reflect.Type | null>)
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 20) {
		// Maybe we have an implementation of the interface.
		for (let __goscriptRangeTarget1 = knownTypes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let t = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as reflect.Type | null)
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil(k.t)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				suggestions = $.appendOne(suggestions, t, $.appendZeros.nil)
			}
		}
	} else {
		// Maybe we have an interface that this type implements.
		for (let __goscriptRangeTarget2 = knownTypes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let t = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as reflect.Type | null)
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 20) {
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(k.t).Implements($.pointerValueOrNil(t)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					suggestions = $.appendOne(suggestions, t, $.appendZeros.nil)
				}
			}
		}
	}

	// range through c.providers is non-deterministic. Let's sort the list of
	// suggestions.
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((suggestions as __goscript_container.byTypeName), "dig.byTypeName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

	let mt = new missingType({Key: k}, true)
	for (let __goscriptRangeTarget3 = suggestions, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let t = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Type | null)
		if ($.sliceLen(((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).getValueProviders(k.name, t), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_provide.provider | null>)) > 0) {
			k.t = t
			mt.suggestions = $.appendOne(mt.suggestions, (k).clone())
		}
	}

	return ($.arrayToSlice<missingType>([(mt).clone()]) as errMissingTypes)
}

export async function errMissingTypes_Error(e: errMissingTypes): globalThis.Promise<string> {
	return fmt.Sprint($.namedValueInterfaceValue<any>(e, "dig.errMissingTypes", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
}

export async function errMissingTypes_writeMessage(e: errMissingTypes, w: io.Writer | null, v: string): globalThis.Promise<void> {

	let multiline = $.stringEqual(v, "%+v")

	if ($.sliceLen((e as errMissingTypes)) == 1) {
		await io.WriteString($.pointerValueOrNil(w)!, "missing type:")
	} else {
		await io.WriteString($.pointerValueOrNil(w)!, "missing types:")
	}

	if (!multiline) {
		// With %v, we need a space between : since the error
		// won't be on a new line.
		await io.WriteString($.pointerValueOrNil(w)!, " ")
	}

	for (let __goscriptRangeTarget4 = e, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let mt = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as missingType)).clone()
		if (multiline) {
			await io.WriteString($.pointerValueOrNil(w)!, "\n\t- ")
		} else {
			if (i > 0) {
				await io.WriteString($.pointerValueOrNil(w)!, "; ")
			}
		}

		if (multiline) {
			await fmt.Fprintf($.pointerValueOrNil(w)!, "%+v", $.interfaceValue((mt).clone(), "dig.missingType", "dig.missingType"))
		} else {
			await fmt.Fprintf($.pointerValueOrNil(w)!, "%v", $.interfaceValue((mt).clone(), "dig.missingType", "dig.missingType"))
		}
	}
}

export async function errMissingTypes_Format(e: errMissingTypes, w: fmt.State | null, c: number): globalThis.Promise<void> {
	await formatError($.namedValueInterfaceValue<digError | null>(e, "dig.errMissingTypes", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), w, c)
}

export function errMissingTypes_updateGraph(e: errMissingTypes, g: dot.Graph | $.VarRef<dot.Graph> | null): void {
	let missing: $.Slice<dot.Result | $.VarRef<dot.Result> | null> = $.makeSlice<dot.Result | $.VarRef<dot.Result> | null>($.sliceLen((e as errMissingTypes)))

	for (let __goscriptRangeTarget5 = e, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow0 = $.sliceRange(missing), i = 0; i < __goscriptRangeWindow5.length; i++) {
		let mt = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as missingType)).clone();
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = new dot.Result({Node: new dot.Node({Name: mt.Key.name, Group: mt.Key.group, Type: mt.Key.t})})
	}
	void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as dot.Graph).AddMissingNodes(missing) : dot.Graph.prototype.AddMissingNodes.call(g, missing))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_container.byTypeName_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_container.byTypeName_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_container.byTypeName_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("reflect.Type", "dig.byTypeName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Error: (receiver: any, ...args: any[]) => (errMissingTypes_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (errMissingTypes_Format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), updateGraph: (receiver: any, ...args: any[]) => (errMissingTypes_updateGraph as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), writeMessage: (receiver: any, ...args: any[]) => (errMissingTypes_writeMessage as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType("dig.missingType", "dig.errMissingTypes"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("updateGraph", [["g", /* @__PURE__ */ $.pointerType("dot.Graph")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptAwait: any
