// Generated file based on visualize.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as template from "@goscript/text/template/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/text/template/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/reflect/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.VisualizeOption", "dig.visualizeOptions", "dig.visualizeErrorOption"])

export type VisualizeOption = {
	applyVisualizeOption(_p0: visualizeOptions | $.VarRef<visualizeOptions> | null): void
}

$.registerInterfaceType(
	"dig.VisualizeOption",
	null,
	[$.methodSignature("applyVisualizeOption", [/* @__PURE__ */ $.pointerType("dig.visualizeOptions")])]
);

export class visualizeOptions {
	public get VisualizeError(): $.GoError {
		return this._fields.VisualizeError
	}

	public set VisualizeError(value: $.GoError) {
		this._fields.VisualizeError = value
	}

	public _fields: {
		VisualizeError: $.GoError
	}

	constructor(init?: Partial<{VisualizeError?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			VisualizeError: init?.VisualizeError ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): visualizeOptions {
		return new visualizeOptions(this, true)
	}

	public __goscriptAssign(source: visualizeOptions): void {
		const target = this._fields
		const values = source._fields
		target.VisualizeError = $.assignFieldValue(target.VisualizeError, values.VisualizeError, "error")
	}

	static __typeInfo = $.registerStructType(
		"dig.visualizeOptions",
		() => new visualizeOptions(),
		() => [],
		visualizeOptions,
		() => [/* @__PURE__ */ $.structField("VisualizeError", "error", [0], 0, true)]
	)
}

export class visualizeErrorOption {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): visualizeErrorOption {
		return new visualizeErrorOption(this, true)
	}

	public __goscriptAssign(source: visualizeErrorOption): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("VisualizeError(%v)", (o.err as any))
	}

	public applyVisualizeOption(opt: visualizeOptions | $.VarRef<visualizeOptions> | null): void {
		const o = this;
		$.pointerValue<visualizeOptions>(opt).VisualizeError = o.err
	}

	static __typeInfo = $.registerStructType(
		"dig.visualizeErrorOption",
		() => new visualizeErrorOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyVisualizeOption", [["opt", /* @__PURE__ */ $.pointerType("dig.visualizeOptions")]])],
		visualizeErrorOption,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export function VisualizeError(err: $.GoError): VisualizeOption | null {
	return $.interfaceValue<VisualizeOption | null>(new visualizeErrorOption({err: err}, true), "dig.visualizeErrorOption", "dig.visualizeErrorOption")
}

export function updateGraph(dg: dot.Graph | $.VarRef<dot.Graph> | null, err: $.GoError): $.GoError {
	let errs: $.Slice<__goscript_error.errVisualizer | null> = null! as $.Slice<__goscript_error.errVisualizer | null>
	// Unwrap error to find the root cause.
	while (true) {
		{
			let [ev, ok] = $.typeAssertTuple<__goscript_error.errVisualizer | null>(err, "dig.errVisualizer")
			if (ok) {
				errs = $.appendOne(errs, ev, $.appendZeros.nil)
			}
		}
		let e: $.GoError = errors.Unwrap($.pointerValueOrNil(err)!)
		if (e == null) {
			break
		}
		err = e
	}

	// If there are no errVisualizers included, we do not modify the graph.
	if ($.sliceLen(errs) == 0) {
		return null
	}

	// We iterate in reverse because the last element is the root cause.
	for (let __goscriptSliceWindow0 = $.sliceRange(errs), i = $.sliceLen(errs) - 1; i >= 0; i--) {
		$.pointerValue<Exclude<__goscript_error.errVisualizer, null>>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_error.errVisualizer | null)).updateGraph(dg)
	}

	// Remove non-error entries from the graph for readability.
	void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as dot.Graph).PruneSuccess() : dot.Graph.prototype.PruneSuccess.call(dg))

	return null
}

export let _graphTmpl: template.Template | $.VarRef<template.Template> | null = await template.Must(...((await template.Template.prototype.Parse.call(await template.Template.prototype.Funcs.call(template.New("DotGraph"), $.makeMap<string, any>([["quote", $.interfaceValue($.goFunc(strconv.Quote, "strconv.Quote"), "func(s string) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))]])), "digraph {\n\trankdir=RL;\n\tgraph [compound=true];\n\t{{range $g := .Groups}}\n\t\t{{- quote .String}} [{{.Attributes}}];\n\t\t{{range .Results}}\n\t\t\t{{- quote $g.String}} -> {{quote .String}};\n\t\t{{end}}\n\t{{end -}}\n\t{{range $index, $ctor := .Ctors}}\n\t\tsubgraph cluster_{{$index}} {\n\t\t\t{{ with .Package }}label = {{ quote .}};\n\t\t\t{{ end -}}\n\n\t\t\tconstructor_{{$index}} [shape=plaintext label={{quote .Name}}];\n\t\t\t{{with .ErrorType}}color={{.Color}};{{end}}\n\t\t\t{{range .Results}}\n\t\t\t\t{{- quote .String}} [{{.Attributes}}];\n\t\t\t{{end}}\n\t\t}\n\t\t{{range .Params}}\n\t\t\tconstructor_{{$index}} -> {{quote .String}} [ltail=cluster_{{$index}}{{if .Optional}} style=dashed{{end}}];\n\t\t{{end}}\n\t\t{{range .GroupParams}}\n\t\t\tconstructor_{{$index}} -> {{quote .String}} [ltail=cluster_{{$index}}];\n\t\t{{end -}}\n\t{{end}}\n\t{{range .Failed.TransitiveFailures}}\n\t\t{{- quote .String}} [color=orange];\n\t{{end -}}\n\t{{range .Failed.RootCauses}}\n\t\t{{- quote .String}} [color=red];\n\t{{end}}\n}")) as [template.Template | $.VarRef<template.Template> | null, $.GoError]))

export function __goscript_set__graphTmpl(__goscriptValue: template.Template | $.VarRef<template.Template> | null): void {
	_graphTmpl = __goscriptValue
}

export async function Visualize(c: __goscript_container.Container | $.VarRef<__goscript_container.Container> | null, w: io.Writer | null, opts: $.Slice<VisualizeOption | null>): globalThis.Promise<$.GoError> {
	let dg: dot.Graph | $.VarRef<dot.Graph> | null = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_container.Container).createGraph() : __goscript_container.Container.prototype.createGraph.call(c))

	let options: $.VarRef<visualizeOptions> = $.varRef(new visualizeOptions(undefined, true))
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as VisualizeOption | null)
		void (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<VisualizeOption, null>) : $.pointerValue<Exclude<VisualizeOption, null>>(o)).applyVisualizeOption(options), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	if (options.value.VisualizeError != null) {
		{
			let err = updateGraph(dg, options.value.VisualizeError)
			if (err != null) {
				return err
			}
		}
	}

	return (_graphTmpl !== null && (_graphTmpl as any).__isVarRef !== true && (_graphTmpl as any).__goValue === undefined ? ((_graphTmpl as any) as template.Template).Execute(w, $.interfaceValue(dg, "*dot.Graph", /* @__PURE__ */ $.pointerType("dot.Graph"))) : template.Template.prototype.Execute.call(_graphTmpl, w, $.interfaceValue(dg, "*dot.Graph", /* @__PURE__ */ $.pointerType("dot.Graph"))))
}

export function CanVisualizeError(err: $.GoError): boolean {
	while (true) {
		{
			let [, ok] = $.typeAssertTuple<__goscript_error.errVisualizer | null>(err, "dig.errVisualizer")
			if (ok) {
				return true
			}
		}
		let e: $.GoError = errors.Unwrap($.pointerValueOrNil(err)!)
		if (e == null) {
			break
		}
		err = e
	}

	return false
}

export function newDotCtor(n: __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null): dot.Ctor | $.VarRef<dot.Ctor> | null {
	const n$: __goscript__constructor.constructorNode = n == null ? $.pointerTarget<__goscript__constructor.constructorNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript__constructor.constructorNode>(n)
	return new dot.Ctor({ID: (n$ as __goscript__constructor.constructorNode).id, Name: $.pointerValue<digreflect.Func>((n$ as __goscript__constructor.constructorNode).location).Name, Package: $.pointerValue<digreflect.Func>((n$ as __goscript__constructor.constructorNode).location).Package, File: $.pointerValue<digreflect.Func>((n$ as __goscript__constructor.constructorNode).location).File, Line: $.pointerValue<digreflect.Func>((n$ as __goscript__constructor.constructorNode).location).Line})
}

var __goscriptAwait: any
