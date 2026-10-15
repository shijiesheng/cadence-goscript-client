// Generated file based on template.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as fs2 from "@goscript/io/fs/index.js"

import * as os from "@goscript/os/index.js"

import * as path from "@goscript/path/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as sync from "@goscript/sync/index.js"

import * as template from "@goscript/text/template/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as __goscript_attr_string from "./attr_string.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_delim_string from "./delim_string.gs.ts"

import * as __goscript_element_string from "./element_string.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_escape from "./escape.gs.ts"

import * as __goscript_jsctx_string from "./jsctx_string.gs.ts"

import * as __goscript_state_string from "./state_string.gs.ts"

import * as __goscript_urlpart_string from "./urlpart_string.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/os/index.js"
import "@goscript/path/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/sync/index.js"
import "@goscript/text/template/index.js"
import "@goscript/text/template/parse/index.js"
import "./attr_string.gs.ts"
import "./context.gs.ts"
import "./delim_string.gs.ts"
import "./element_string.gs.ts"
import "./error.gs.ts"
import "./escape.gs.ts"
import "./jsctx_string.gs.ts"
import "./state_string.gs.ts"
import "./urlpart_string.gs.ts"

$.registerTypePackagePath("html/template", ["template.Template", "template.nameSpace"])

export type FuncMap = template.FuncMap

export class Template {
	// Sticky error if escaping fails, or escapeOK if succeeded.
	public get escapeErr(): $.GoError {
		return this._fields.escapeErr
	}

	public set escapeErr(value: $.GoError) {
		this._fields.escapeErr = value
	}

	// We could embed the text/template field, but it's safer not to because
	// we need to keep our version of the name space and the underlying
	// template's in sync.
	public get text(): template.Template | $.VarRef<template.Template> | null {
		return this._fields.text
	}

	public set text(value: template.Template | $.VarRef<template.Template> | null) {
		this._fields.text = value
	}

	// The underlying template's parse tree, updated to be HTML-safe
	// after the first execution.
	public get Tree(): parse.Tree | $.VarRef<parse.Tree> | null {
		return this._fields.Tree
	}

	public set Tree(value: parse.Tree | $.VarRef<parse.Tree> | null) {
		this._fields.Tree = value
	}

	public get nameSpace(): nameSpace | $.VarRef<nameSpace> | null {
		return this._fields.nameSpace
	}

	public set nameSpace(value: nameSpace | $.VarRef<nameSpace> | null) {
		this._fields.nameSpace = value
	}

	public _fields: {
		escapeErr: $.GoError
		text: template.Template | $.VarRef<template.Template> | null
		Tree: parse.Tree | $.VarRef<parse.Tree> | null
		nameSpace: nameSpace | $.VarRef<nameSpace> | null
	}

	constructor(init?: Partial<{escapeErr?: $.GoError, text?: template.Template | $.VarRef<template.Template> | null, Tree?: parse.Tree | $.VarRef<parse.Tree> | null, nameSpace?: nameSpace | $.VarRef<nameSpace> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			escapeErr: init?.escapeErr ?? (null! as $.GoError),
			text: init?.text ?? (null! as template.Template | $.VarRef<template.Template> | null),
			Tree: init?.Tree ?? (null! as parse.Tree | $.VarRef<parse.Tree> | null),
			nameSpace: init?.nameSpace ?? (null! as nameSpace | $.VarRef<nameSpace> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Template {
		return new Template(this, true)
	}

	public __goscriptAssign(source: Template): void {
		const target = this._fields
		const values = source._fields
		target.escapeErr = $.assignFieldValue(target.escapeErr, values.escapeErr, "error")
		target.text = values.text
		target.Tree = values.Tree
		target.nameSpace = values.nameSpace
	}

	public async AddParseTree(name: string, tree: parse.Tree | $.VarRef<parse.Tree> | null): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		let t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		{
			let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).checkCanParse() : Template.prototype.checkCanParse.call(t))
			if (err != null) {
				return [null, err]
			}
		}

		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let __goscriptTuple0: any = await template.Template.prototype.AddParseTree.call((t$ as Template).text, name, tree)
		let text: template.Template | $.VarRef<template.Template> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		let ret: Template | $.VarRef<Template> | null = new Template({escapeErr: null, text: text, Tree: $.pointerValue<template.Template>(text).Tree, nameSpace: (t$ as Template).nameSpace})
		$.mapSet($.pointerValue<nameSpace>((t$ as Template).nameSpace)._set, name, ret)
		return [ret, null]
	}

	public async Clone(): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((t$ as Template).escapeErr != null) {
			return [null, fmt.Errorf("html/template: cannot Clone %q after it has executed", (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).Name() : Template.prototype.Name.call(t)))]
		}
		let __goscriptTuple1: any = await template.Template.prototype.Clone.call((t$ as Template).text)
		let textClone: template.Template | $.VarRef<template.Template> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		let ns: nameSpace | $.VarRef<nameSpace> | null = new nameSpace({_set: $.makeMap<string, Template | $.VarRef<Template> | null>()})
		$.assignStruct($.pointerValue<nameSpace>(ns).esc, __goscript_escape.makeEscaper(ns))
		let ret: Template | $.VarRef<Template> | null = new Template({escapeErr: null, text: textClone, Tree: $.pointerValue<template.Template>(textClone).Tree, nameSpace: ns})
		let ret$: Template = ret == null ? $.pointerTarget<Template>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<Template>(ret)
		$.mapSet($.pointerValue<nameSpace>((ret$ as Template).nameSpace)._set, (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as Template).Name() : Template.prototype.Name.call(ret)), ret)
		for (let __goscriptRangeTarget0 = await (textClone !== null && (textClone as any).__isVarRef !== true && (textClone as any).__goValue === undefined ? ((textClone as any) as template.Template).Templates() : template.Template.prototype.Templates.call(textClone)), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let x = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as template.Template | $.VarRef<template.Template> | null)
			let name = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as template.Template).Name() : template.Template.prototype.Name.call(x))
			let src: Template | $.VarRef<Template> | null = $.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<nameSpace>((t$ as Template).nameSpace)._set, name, null)[0]
			if ((src == null) || ($.pointerValue<Template>(src).escapeErr != null)) {
				return [null, fmt.Errorf("html/template: cannot Clone %q after it has executed", (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).Name() : Template.prototype.Name.call(t)))]
			}
			$.pointerValue<template.Template>(x).Tree = parse.Tree.prototype.Copy.call($.pointerValue<template.Template>(x).Tree)
			$.mapSet($.pointerValue<nameSpace>((ret$ as Template).nameSpace)._set, name, new Template({escapeErr: null, text: x, Tree: $.pointerValue<template.Template>(x).Tree, nameSpace: (ret$ as Template).nameSpace}))
		}
		// Return the template associated with the name of this template.
		return [$.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<nameSpace>((ret$ as Template).nameSpace)._set, (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as Template).Name() : Template.prototype.Name.call(ret)), null)[0], null]
	}

	public async DefinedTemplates(): globalThis.Promise<string> {
		const t: Template | $.VarRef<Template> | null = this;
		return template.Template.prototype.DefinedTemplates.call($.pointerValue<Template>(t).text)
	}

	public Delims(left: string, right: string): Template | $.VarRef<Template> | null {
		const t: Template | $.VarRef<Template> | null = this;
		template.Template.prototype.Delims.call($.pointerValue<Template>(t).text, left, right)
		return t
	}

	public async Execute(wr: io.Writer | null, data: any): globalThis.Promise<$.GoError> {
		const t: Template | $.VarRef<Template> | null = this;
		{
			let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).escape() : Template.prototype.escape.call(t))
			if (err != null) {
				return err
			}
		}
		return template.Template.prototype.Execute.call($.pointerValue<Template>(t).text, wr, data)
	}

	public async ExecuteTemplate(wr: io.Writer | null, name: string, data: any): globalThis.Promise<$.GoError> {
		const t: Template | $.VarRef<Template> | null = this;
		let __goscriptTuple2: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).lookupAndEscapeTemplate(name) : Template.prototype.lookupAndEscapeTemplate.call(t, name))
		let tmpl: Template | $.VarRef<Template> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		return template.Template.prototype.Execute.call($.pointerValue<Template>(tmpl).text, wr, data)
	}

	public async Funcs(funcMap: FuncMap): globalThis.Promise<Template | $.VarRef<Template> | null> {
		const t: Template | $.VarRef<Template> | null = this;
		await template.Template.prototype.Funcs.call($.pointerValue<Template>(t).text, funcMap)
		return t
	}

	public async Lookup(name: string): globalThis.Promise<Template | $.VarRef<Template> | null> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		return $.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<nameSpace>((t$ as Template).nameSpace)._set, name, null)[0]
	}

	public Name(): string {
		const t: Template | $.VarRef<Template> | null = this;
		return template.Template.prototype.Name.call($.pointerValue<Template>(t).text)
	}

	public async New(name: string): globalThis.Promise<Template | $.VarRef<Template> | null> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template)["new"](name) : Template.prototype.new.call(t, name))
	}

	public Option(opt: $.Slice<string>): Template | $.VarRef<Template> | null {
		const t: Template | $.VarRef<Template> | null = this;
		template.Template.prototype.Option.call($.pointerValue<Template>(t).text, opt)
		return t
	}

	public async Parse(text: string): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		{
			let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).checkCanParse() : Template.prototype.checkCanParse.call(t))
			if (err != null) {
				return [null, err]
			}
		}

		let __goscriptTuple3: any = await template.Template.prototype.Parse.call((t$ as Template).text, text)
		let ret: template.Template | $.VarRef<template.Template> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}

		// In general, all the named templates might have changed underfoot.
		// Regardless, some new ones may have been defined.
		// The template.Template set has been updated; update ours.
		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		for (let __goscriptRangeTarget1 = await (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as template.Template).Templates() : template.Template.prototype.Templates.call(ret)), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as template.Template | $.VarRef<template.Template> | null)
			let name = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as template.Template).Name() : template.Template.prototype.Name.call(v))
			let tmpl: Template | $.VarRef<Template> | null = $.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<nameSpace>((t$ as Template).nameSpace)._set, name, null)[0]
			if (tmpl == null) {
				tmpl = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template)["new"](name) : Template.prototype.new.call(t, name))
			}
			$.pointerValue<Template>(tmpl).text = v
			$.pointerValue<Template>(tmpl).Tree = $.pointerValue<template.Template>(v).Tree
		}
		return [t, null]
	}

	public async ParseFS(fs: fs2.FS | null, patterns: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		return parseFS(t, fs, patterns)
	}

	public async ParseFiles(filenames: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		return parseFiles(t, readFileOS, filenames)
	}

	public async ParseGlob(pattern: string): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		return parseGlob(t, pattern)
	}

	public async Templates(): globalThis.Promise<$.Slice<Template | $.VarRef<Template> | null>> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		let ns: nameSpace | $.VarRef<nameSpace> | null = $.pointerValue<Template>(t).nameSpace
		let ns$: nameSpace = ns == null ? $.pointerTarget<nameSpace>(ns) : (ns as any).__isVarRef === true ? (ns as any).value : (ns as any).__goValue === undefined ? (ns as any) : $.pointerTarget<nameSpace>(ns)
		await (ns$ as nameSpace).mu.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ns$ as nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		// Return a slice so we don't expose the map.
		let m: $.Slice<Template | $.VarRef<Template> | null> = $.makeSlice<Template | $.VarRef<Template> | null>(0, $.len((ns$ as nameSpace)._set))
		for (const [__rangeKey, v] of (ns$ as nameSpace)._set?.entries() ?? []) {
			m = $.appendOne(m, v, $.appendZeros.nil)
		}
		return m
	}

	public async checkCanParse(): globalThis.Promise<$.GoError> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		if (t == null) {
			return null
		}
		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		if ($.pointerValue<nameSpace>((t$ as Template).nameSpace).escaped) {
			return fmt.Errorf("html/template: cannot Parse after Execute")
		}
		return null
	}

	public async escape(): globalThis.Promise<$.GoError> {
		let t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		$.pointerValue<nameSpace>((t$ as Template).nameSpace).escaped = true
		if ((t$ as Template).escapeErr == null) {
			if ((t$ as Template).Tree == null) {
				return fmt.Errorf("template: %q is an incomplete or empty template", (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).Name() : Template.prototype.Name.call(t)))
			}
			{
				let err = await __goscript_escape.escapeTemplate(t, $.interfaceValue<parse.Node | null>($.pointerValue<parse.Tree>($.pointerValue<template.Template>((t$ as Template).text).Tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).Name() : Template.prototype.Name.call(t)))
				if (err != null) {
					return err
				}
			}
		} else {
			if (!$.comparableEqual((t$ as Template).escapeErr, escapeOK)) {
				return (t$ as Template).escapeErr
			}
		}
		return null
	}

	public async lookupAndEscapeTemplate(name: string): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		let t: Template | $.VarRef<Template> | null = this;
		let tmpl: Template | $.VarRef<Template> | null = null! as Template | $.VarRef<Template> | null
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		await $.pointerValue<nameSpace>((t$ as Template).nameSpace).mu.Lock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<nameSpace>((t$ as Template).nameSpace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })
		$.pointerValue<nameSpace>((t$ as Template).nameSpace).escaped = true
		tmpl = $.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<nameSpace>((t$ as Template).nameSpace)._set, name, null)[0]
		if (tmpl == null) {
			const __goscriptReturn3: [Template | $.VarRef<Template> | null, $.GoError] = [null, fmt.Errorf("html/template: %q is undefined", name)]
			tmpl = __goscriptReturn3[0]
			err = __goscriptReturn3[1]
			__defer.dispose()
			return [tmpl, err]
		}
		if (($.pointerValue<Template>(tmpl).escapeErr != null) && (!$.comparableEqual($.pointerValue<Template>(tmpl).escapeErr, escapeOK))) {
			const __goscriptReturn4: [Template | $.VarRef<Template> | null, $.GoError] = [null, $.pointerValue<Template>(tmpl).escapeErr]
			tmpl = __goscriptReturn4[0]
			err = __goscriptReturn4[1]
			__defer.dispose()
			return [tmpl, err]
		}
		if (($.pointerValue<template.Template>($.pointerValue<Template>(tmpl).text).Tree == null) || ($.pointerValue<parse.Tree>($.pointerValue<template.Template>($.pointerValue<Template>(tmpl).text).Tree).Root == null)) {
			const __goscriptReturn5: [Template | $.VarRef<Template> | null, $.GoError] = [null, fmt.Errorf("html/template: %q is an incomplete template", name)]
			tmpl = __goscriptReturn5[0]
			err = __goscriptReturn5[1]
			__defer.dispose()
			return [tmpl, err]
		}
		if (await template.Template.prototype.Lookup.call((t$ as Template).text, name) == null) {
			$.panic("html/template internal error: template escaping out of sync")
		}
		if ($.pointerValue<Template>(tmpl).escapeErr == null) {
			err = await __goscript_escape.escapeTemplate(tmpl, $.interfaceValue<parse.Node | null>($.pointerValue<parse.Tree>($.pointerValue<template.Template>($.pointerValue<Template>(tmpl).text).Tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")), name)
		}
		const __goscriptReturn6: [Template | $.VarRef<Template> | null, $.GoError] = [tmpl, err]
		tmpl = __goscriptReturn6[0]
		err = __goscriptReturn6[1]
		__defer.dispose()
		return [tmpl, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public ["new"](name: string): Template | $.VarRef<Template> | null {
		const t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		let tmpl: Template | $.VarRef<Template> | null = (() => { const __goscriptLiteralField0 = template.Template.prototype.New.call((t$ as Template).text, name); return new Template({escapeErr: null, text: __goscriptLiteralField0, Tree: null, nameSpace: (t$ as Template).nameSpace}) })()
		let tmpl$: Template = tmpl == null ? $.pointerTarget<Template>(tmpl) : (tmpl as any).__isVarRef === true ? (tmpl as any).value : (tmpl as any).__goValue === undefined ? (tmpl as any) : $.pointerTarget<Template>(tmpl)
		{
			let __goscriptTuple4: any = $.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<nameSpace>((tmpl$ as Template).nameSpace)._set, name, null)
			let existing: Template | $.VarRef<Template> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				let emptyTmpl: Template | $.VarRef<Template> | null = New((existing !== null && (existing as any).__isVarRef !== true && (existing as any).__goValue === undefined ? ((existing as any) as Template).Name() : Template.prototype.Name.call(existing)))
				$.assignStruct($.pointerValue<Template>(existing), $.pointerValue<Template>(emptyTmpl))
			}
		}
		$.mapSet($.pointerValue<nameSpace>((tmpl$ as Template).nameSpace)._set, name, tmpl)
		return tmpl
	}

	static __typeInfo = $.registerStructType(
		"template.Template",
		() => new Template(),
		() => [$.methodSignature("AddParseTree", [["name", /* @__PURE__ */ $.basicType("string")], ["tree", /* @__PURE__ */ $.pointerType("parse.Tree")]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("DefinedTemplates", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Delims", [["left", /* @__PURE__ */ $.basicType("string")], ["right", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Execute", [["wr", "io.Writer"], ["data", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("ExecuteTemplate", [["wr", "io.Writer"], ["name", /* @__PURE__ */ $.basicType("string")], ["data", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("Funcs", [["funcMap", "template.FuncMap"]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Lookup", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("New", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Option", [["opt", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Parse", [["text", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("ParseFS", [["fs", "fs.FS"], ["patterns", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("ParseFiles", [["filenames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("ParseGlob", [["pattern", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("Templates", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("template.Template"))], true), $.methodSignature("checkCanParse", [], ["error"], true), $.methodSignature("escape", [], ["error"], true), $.methodSignature("lookupAndEscapeTemplate", [["name", /* @__PURE__ */ $.basicType("string")]], [["tmpl", /* @__PURE__ */ $.pointerType("template.Template")], ["err", "error"]], true), $.methodSignature("new", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true)],
		Template,
		() => [/* @__PURE__ */ $.structField("escapeErr", "error", [0], 0, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("text", /* @__PURE__ */ $.pointerType("template.Template"), [1], 16, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("Tree", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 24, true), /* @__PURE__ */ $.structField("nameSpace", /* @__PURE__ */ $.pointerType("template.nameSpace"), [3], 32, false, { pkgPath: "html/template", anonymous: true })]
	)
}

export class nameSpace {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get _set(): globalThis.Map<string, Template | $.VarRef<Template> | null> | null {
		return this._fields._set
	}

	public set _set(value: globalThis.Map<string, Template | $.VarRef<Template> | null> | null) {
		this._fields._set = value
	}

	public get escaped(): boolean {
		return this._fields.escaped
	}

	public set escaped(value: boolean) {
		this._fields.escaped = value
	}

	public get esc(): __goscript_escape.escaper {
		return this._fields.esc
	}

	public set esc(value: __goscript_escape.escaper) {
		this._fields.esc = value
	}

	public _fields: {
		mu: sync.Mutex
		_set: globalThis.Map<string, Template | $.VarRef<Template> | null> | null
		escaped: boolean
		esc: __goscript_escape.escaper
	}

	constructor(init?: Partial<{mu?: sync.Mutex, _set?: globalThis.Map<string, Template | $.VarRef<Template> | null> | null, escaped?: boolean, esc?: __goscript_escape.escaper}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			_set: init?._set ?? (null! as globalThis.Map<string, Template | $.VarRef<Template> | null> | null),
			escaped: init?.escaped ?? (false as boolean),
			esc: init?.esc ? init.esc.clone() : new __goscript_escape.escaper(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nameSpace {
		return new nameSpace(this, true)
	}

	public __goscriptAssign(source: nameSpace): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target._set = values._set
		target.escaped = values.escaped
		$.assignStruct(target.esc, values.esc)
	}

	static __typeInfo = $.registerStructType(
		"template.nameSpace",
		() => new nameSpace(),
		() => [],
		nameSpace,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("set", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("template.Template")), [1], 8, false, { key: "_set", pkgPath: "html/template" }), /* @__PURE__ */ $.structField("escaped", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("esc", "template.escaper", [3], 24, false, { pkgPath: "html/template" })]
	)
}

export let escapeOK: $.GoError = fmt.Errorf("template escaped correctly")

export function __goscript_set_escapeOK(__goscriptValue: $.GoError): void {
	escapeOK = __goscriptValue
}

export function New(name: string): Template | $.VarRef<Template> | null {
	let ns: nameSpace | $.VarRef<nameSpace> | null = new nameSpace({_set: $.makeMap<string, Template | $.VarRef<Template> | null>()})
	$.assignStruct($.pointerValue<nameSpace>(ns).esc, __goscript_escape.makeEscaper(ns))
	let tmpl: Template | $.VarRef<Template> | null = (() => { const __goscriptLiteralField1 = template.New(name); return new Template({escapeErr: null, text: __goscriptLiteralField1, Tree: null, nameSpace: ns}) })()
	$.mapSet($.pointerValue<nameSpace>($.pointerValue<Template>(tmpl).nameSpace)._set, name, tmpl)
	return tmpl
}

export function Must(t: Template | $.VarRef<Template> | null, err: $.GoError): Template | $.VarRef<Template> | null {
	if (err != null) {
		$.panic((err as any))
	}
	return t
}

export async function ParseFiles(filenames: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
	return parseFiles(null, readFileOS, filenames)
}

export async function parseFiles(t: Template | $.VarRef<Template> | null, readFile: ((_p0: string) => [string, $.Slice<number>, $.GoError] | globalThis.Promise<[string, $.Slice<number>, $.GoError]>) | null, filenames: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
	{
		let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).checkCanParse() : Template.prototype.checkCanParse.call(t))
		if (err != null) {
			return [null, err]
		}
	}

	if ($.sliceLen(filenames) == 0) {
		// Not really a problem, but be consistent.
		return [null, fmt.Errorf("html/template: no files named in call to ParseFiles")]
	}
	for (let __goscriptRangeTarget2 = filenames, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let filename = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		let __goscriptTuple5: any = await readFile!(filename)
		let name = __goscriptTuple5[0]
		let b: $.Slice<number> = __goscriptTuple5[1]
		let err = __goscriptTuple5[2]
		if (err != null) {
			return [null, err]
		}
		let s = $.bytesToString(b)
		// First template becomes return value if not already defined,
		// and we use that one for subsequent New calls to associate
		// all the templates together. Also, if this file has the same name
		// as t, this file becomes the contents of t, so
		//  t, err := New(name).Funcs(xxx).ParseFiles(name)
		// works. Otherwise we create a new template associated with t.
		let tmpl: Template | $.VarRef<Template> | null = null! as Template | $.VarRef<Template> | null
		if (t == null) {
			t = New(name)
		}
		if ($.stringEqual(name, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).Name() : Template.prototype.Name.call(t)))) {
			tmpl = t
		} else {
			tmpl = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).New(name) : Template.prototype.New.call(t, name))
		}
		let __goscriptTuple6: any = await (tmpl !== null && (tmpl as any).__isVarRef !== true && (tmpl as any).__goValue === undefined ? ((tmpl as any) as Template).Parse(s) : Template.prototype.Parse.call(tmpl, s))
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
	}
	return [t, null]
}

export async function ParseGlob(pattern: string): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
	return parseGlob(null, pattern)
}

export async function parseGlob(t: Template | $.VarRef<Template> | null, pattern: string): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
	{
		let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).checkCanParse() : Template.prototype.checkCanParse.call(t))
		if (err != null) {
			return [null, err]
		}
	}
	let __goscriptTuple7: any = filepath.Glob(pattern)
	let filenames: $.Slice<string> = __goscriptTuple7[0]
	let err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	if ($.sliceLen(filenames) == 0) {
		return [null, fmt.Errorf("html/template: pattern matches no files: %#q", pattern)]
	}
	return parseFiles(t, readFileOS, filenames)
}

export function IsTrue(val: any): [boolean, boolean] {
	let truth: boolean = false
	let ok: boolean = false
	return template.IsTrue(val)
}

export async function ParseFS(fs: fs2.FS | null, patterns: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
	return parseFS(null, fs, patterns)
}

export async function parseFS(t: Template | $.VarRef<Template> | null, fsys: fs2.FS | null, patterns: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
	let filenames: $.Slice<string> = null! as $.Slice<string>
	for (let __goscriptRangeTarget3 = patterns, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let pattern = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		let __goscriptTuple8: any = await fs2.Glob($.pointerValueOrNil(fsys)!, pattern)
		let list: $.Slice<string> = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		if ($.sliceLen(list) == 0) {
			return [null, fmt.Errorf("template: pattern matches no files: %#q", pattern)]
		}
		filenames = $.appendSlice(filenames, list)
	}
	return parseFiles(t, readFileFS(fsys), filenames)
}

export async function readFileOS(file: string): globalThis.Promise<[string, $.Slice<number>, $.GoError]> {
	let name: string = ""
	let b: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	name = filepath.Base(file)
	let __goscriptTuple9: any = await os.ReadFile(file)
	b = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	return [name, b, err]
}

export function readFileFS(fsys: fs2.FS | null): ((_p0: string) => [string, $.Slice<number>, $.GoError] | globalThis.Promise<[string, $.Slice<number>, $.GoError]>) | null {
	return $.functionValue(async (file: string): globalThis.Promise<[string, $.Slice<number>, $.GoError]> => {
		let name: string = ""
		let b: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		name = path.Base(file)
		let __goscriptTuple10: any = await fs2.ReadFile($.pointerValueOrNil(fsys)!, file)
		b = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		return [name, b, err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}
