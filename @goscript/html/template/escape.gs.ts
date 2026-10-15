// Generated file based on escape.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as html from "@goscript/html/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as io from "@goscript/io/index.js"

import * as maps from "@goscript/maps/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as template2 from "@goscript/text/template/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_attr_string from "./attr_string.gs.ts"

import * as __goscript_content from "./content.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_css from "./css.gs.ts"

import * as __goscript_delim_string from "./delim_string.gs.ts"

import * as __goscript_element_string from "./element_string.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_html from "./html.gs.ts"

import * as __goscript_js from "./js.gs.ts"

import * as __goscript_jsctx_string from "./jsctx_string.gs.ts"

import * as __goscript_state_string from "./state_string.gs.ts"

import * as __goscript_template from "./template.gs.ts"

import * as __goscript_transition from "./transition.gs.ts"

import * as __goscript_url from "./url.gs.ts"

import * as __goscript_urlpart_string from "./urlpart_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/html/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/index.js"
import "@goscript/maps/index.js"
import "@goscript/regexp/index.js"
import "@goscript/text/template/index.js"
import "@goscript/text/template/parse/index.js"
import "@goscript/sync/index.js"
import "./attr_string.gs.ts"
import "./content.gs.ts"
import "./context.gs.ts"
import "./css.gs.ts"
import "./delim_string.gs.ts"
import "./element_string.gs.ts"
import "./error.gs.ts"
import "./html.gs.ts"
import "./js.gs.ts"
import "./jsctx_string.gs.ts"
import "./state_string.gs.ts"
import "./template.gs.ts"
import "./transition.gs.ts"
import "./url.gs.ts"
import "./urlpart_string.gs.ts"

$.registerTypePackagePath("html/template", ["template.escaper", "template.rangeContext"])

export class escaper {
	// ns is the nameSpace that this escaper is associated with.
	public get ns(): __goscript_template.nameSpace | $.VarRef<__goscript_template.nameSpace> | null {
		return this._fields.ns
	}

	public set ns(value: __goscript_template.nameSpace | $.VarRef<__goscript_template.nameSpace> | null) {
		this._fields.ns = value
	}

	// output[templateName] is the output context for a templateName that
	// has been mangled to include its input context.
	public get output(): globalThis.Map<string, __goscript_context.context> | null {
		return this._fields.output
	}

	public set output(value: globalThis.Map<string, __goscript_context.context> | null) {
		this._fields.output = value
	}

	// derived[c.mangle(name)] maps to a template derived from the template
	// named name templateName for the start context c.
	public get derived(): globalThis.Map<string, template2.Template | $.VarRef<template2.Template> | null> | null {
		return this._fields.derived
	}

	public set derived(value: globalThis.Map<string, template2.Template | $.VarRef<template2.Template> | null> | null) {
		this._fields.derived = value
	}

	// called[templateName] is a set of called mangled template names.
	public get called(): globalThis.Map<string, boolean> | null {
		return this._fields.called
	}

	public set called(value: globalThis.Map<string, boolean> | null) {
		this._fields.called = value
	}

	// xxxNodeEdits are the accumulated edits to apply during commit.
	// Such edits are not applied immediately in case a template set
	// executes a given template in different escaping contexts.
	public get actionNodeEdits(): globalThis.Map<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>> | null {
		return this._fields.actionNodeEdits
	}

	public set actionNodeEdits(value: globalThis.Map<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>> | null) {
		this._fields.actionNodeEdits = value
	}

	public get templateNodeEdits(): globalThis.Map<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string> | null {
		return this._fields.templateNodeEdits
	}

	public set templateNodeEdits(value: globalThis.Map<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string> | null) {
		this._fields.templateNodeEdits = value
	}

	public get textNodeEdits(): globalThis.Map<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>> | null {
		return this._fields.textNodeEdits
	}

	public set textNodeEdits(value: globalThis.Map<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>> | null) {
		this._fields.textNodeEdits = value
	}

	// rangeContext holds context about the current range loop.
	public get rangeContext(): rangeContext | $.VarRef<rangeContext> | null {
		return this._fields.rangeContext
	}

	public set rangeContext(value: rangeContext | $.VarRef<rangeContext> | null) {
		this._fields.rangeContext = value
	}

	public _fields: {
		ns: __goscript_template.nameSpace | $.VarRef<__goscript_template.nameSpace> | null
		output: globalThis.Map<string, __goscript_context.context> | null
		derived: globalThis.Map<string, template2.Template | $.VarRef<template2.Template> | null> | null
		called: globalThis.Map<string, boolean> | null
		actionNodeEdits: globalThis.Map<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>> | null
		templateNodeEdits: globalThis.Map<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string> | null
		textNodeEdits: globalThis.Map<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>> | null
		rangeContext: rangeContext | $.VarRef<rangeContext> | null
	}

	constructor(init?: Partial<{ns?: __goscript_template.nameSpace | $.VarRef<__goscript_template.nameSpace> | null, output?: globalThis.Map<string, __goscript_context.context> | null, derived?: globalThis.Map<string, template2.Template | $.VarRef<template2.Template> | null> | null, called?: globalThis.Map<string, boolean> | null, actionNodeEdits?: globalThis.Map<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>> | null, templateNodeEdits?: globalThis.Map<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string> | null, textNodeEdits?: globalThis.Map<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>> | null, rangeContext?: rangeContext | $.VarRef<rangeContext> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ns: init?.ns ?? (null! as __goscript_template.nameSpace | $.VarRef<__goscript_template.nameSpace> | null),
			output: init?.output ?? (null! as globalThis.Map<string, __goscript_context.context> | null),
			derived: init?.derived ?? (null! as globalThis.Map<string, template2.Template | $.VarRef<template2.Template> | null> | null),
			called: init?.called ?? (null! as globalThis.Map<string, boolean> | null),
			actionNodeEdits: init?.actionNodeEdits ?? (null! as globalThis.Map<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>> | null),
			templateNodeEdits: init?.templateNodeEdits ?? (null! as globalThis.Map<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string> | null),
			textNodeEdits: init?.textNodeEdits ?? (null! as globalThis.Map<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>> | null),
			rangeContext: init?.rangeContext ?? (null! as rangeContext | $.VarRef<rangeContext> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): escaper {
		return new escaper(this, true)
	}

	public __goscriptAssign(source: escaper): void {
		const target = this._fields
		const values = source._fields
		target.ns = values.ns
		target.output = values.output
		target.derived = values.derived
		target.called = values.called
		target.actionNodeEdits = values.actionNodeEdits
		target.templateNodeEdits = values.templateNodeEdits
		target.textNodeEdits = values.textNodeEdits
		target.rangeContext = values.rangeContext
	}

	public arbitraryTemplate(): __goscript_template.Template | $.VarRef<__goscript_template.Template> | null {
		const e: escaper | $.VarRef<escaper> | null = this;
		for (const [__rangeKey, t] of $.pointerValue<__goscript_template.nameSpace>($.pointerValue<escaper>(e).ns)._set?.entries() ?? []) {
			return t
		}
		$.panic("no templates in name space")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async commit(): globalThis.Promise<void> {
		let e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		for (const [name, __rangeValue] of (e$ as escaper).output?.entries() ?? []) {
			await template2.Template.prototype.Funcs.call(await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).template(name) : escaper.prototype.template.call(e, name)), __goscript_get_funcMap())
		}
		// Any template from the name space associated with this escaper can be used
		// to add derived templates to the underlying text/template name space.
		let tmpl: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).arbitraryTemplate() : escaper.prototype.arbitraryTemplate.call(e))
		for (const [__rangeKey, t] of (e$ as escaper).derived?.entries() ?? []) {
			{
				let [, err] = await template2.Template.prototype.AddParseTree.call($.pointerValue<__goscript_template.Template>(tmpl).text, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as template2.Template).Name() : template2.Template.prototype.Name.call(t)), $.pointerValue<template2.Template>(t).Tree)
				if (err != null) {
					$.panic("error adding derived template")
				}
			}
		}
		for (const [n, s] of (e$ as escaper).actionNodeEdits?.entries() ?? []) {
			ensurePipelineContains($.pointerValue<parse.ActionNode>(n).Pipe, s)
		}
		for (let [n, name] of (e$ as escaper).templateNodeEdits?.entries() ?? []) {
			$.pointerValue<parse.TemplateNode>(n).Name = name
		}
		for (let [n, s] of (e$ as escaper).textNodeEdits?.entries() ?? []) {
			$.pointerValue<parse.TextNode>(n).Text = s
		}
		// Reset state that is specific to this commit so that the same changes are
		// not re-applied to the template on subsequent calls to commit.
		;(e$ as escaper).called = $.makeMap<string, boolean>();
		;(e$ as escaper).actionNodeEdits = $.makeMap<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>>(undefined, /* @__PURE__ */ $.pointerType("parse.ActionNode"));
		;(e$ as escaper).templateNodeEdits = $.makeMap<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string>(undefined, /* @__PURE__ */ $.pointerType("parse.TemplateNode"));
		;(e$ as escaper).textNodeEdits = $.makeMap<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>>(undefined, /* @__PURE__ */ $.pointerType("parse.TextNode"))
	}

	public async computeOutCtx(c: __goscript_context.context, t: template2.Template | $.VarRef<template2.Template> | null): globalThis.Promise<__goscript_context.context> {
		const e: escaper | $.VarRef<escaper> | null = this;
		// Propagate context over the body.
		let [c1, ok] = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeTemplateBody($.markAsStructValue($.cloneStructValue(c)), t) : escaper.prototype.escapeTemplateBody.call(e, $.markAsStructValue($.cloneStructValue(c)), t))
		if (!ok) {
			// Look for a fixed point by assuming c1 as the output context.
			{
				let [c2, ok2] = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeTemplateBody($.markAsStructValue($.cloneStructValue(c1)), t) : escaper.prototype.escapeTemplateBody.call(e, $.markAsStructValue($.cloneStructValue(c1)), t))
				if (ok2) {
					let __goscriptAssign1_0: __goscript_context.context = $.markAsStructValue($.cloneStructValue(c2))
					let __goscriptAssign1_1: boolean = true
					c1 = $.assignStruct(c1, __goscriptAssign1_0)
					ok = __goscriptAssign1_1
				}
			}
		}
		if (!ok && (c1.state != 27)) {
			return (await (async () => { const __goscriptLiteralField1 = await __goscript_error.errorf(6, $.interfaceValue<parse.Node | null>($.pointerValue<parse.Tree>($.pointerValue<template2.Template>(t).Tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")), 0, "cannot compute output context for template %s", $.arrayToSlice<any>([(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as template2.Template).Name() : template2.Template.prototype.Name.call(t))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField1})) })())
		}
		return $.markAsStructValue($.cloneStructValue(c1))
	}

	public async editActionNode(n: parse.ActionNode | $.VarRef<parse.ActionNode> | null, cmds: $.Slice<string>): globalThis.Promise<void> {
		let e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		{
			let [, ok] = $.mapGet<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>, $.Slice<string>>((e$ as escaper).actionNodeEdits, n, null)
			if (ok) {
				$.panic(await fmt.Sprintf("node %s shared between templates", $.interfaceValue(n, "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode"))))
			}
		}
		$.mapSet((e$ as escaper).actionNodeEdits, n, cmds)
	}

	public async editTemplateNode(n: parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, callee: string): globalThis.Promise<void> {
		let e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		{
			let [, ok] = $.mapGet<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string, string>((e$ as escaper).templateNodeEdits, n, "")
			if (ok) {
				$.panic(await fmt.Sprintf("node %s shared between templates", $.interfaceValue(n, "*parse.TemplateNode", /* @__PURE__ */ $.pointerType("parse.TemplateNode"))))
			}
		}
		$.mapSet((e$ as escaper).templateNodeEdits, n, callee)
	}

	public async editTextNode(n: parse.TextNode | $.VarRef<parse.TextNode> | null, text: $.Slice<number>): globalThis.Promise<void> {
		let e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		{
			let [, ok] = $.mapGet<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>, $.Slice<number>>((e$ as escaper).textNodeEdits, n, null)
			if (ok) {
				$.panic(await fmt.Sprintf("node %s shared between templates", $.interfaceValue(n, "*parse.TextNode", /* @__PURE__ */ $.pointerType("parse.TextNode"))))
			}
		}
		$.mapSet((e$ as escaper).textNodeEdits, n, text)
	}

	public async escape(c: __goscript_context.context, n: parse.Node | null): globalThis.Promise<__goscript_context.context> {
		let e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		{
			const __goscriptTypeSwitchValue = n
			switch (true) {
				case $.typeAssert<parse.ActionNode | $.VarRef<parse.ActionNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ActionNode")).ok:
					{
						let n: parse.ActionNode | $.VarRef<parse.ActionNode> | null = $.typeAssert<parse.ActionNode | $.VarRef<parse.ActionNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ActionNode")).value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeAction($.markAsStructValue($.cloneStructValue(c)), n) : escaper.prototype.escapeAction.call(e, $.markAsStructValue($.cloneStructValue(c)), n))
					}
					break
				case $.typeAssert<parse.BreakNode | $.VarRef<parse.BreakNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BreakNode")).ok:
					{
						let n: parse.BreakNode | $.VarRef<parse.BreakNode> | null = $.typeAssert<parse.BreakNode | $.VarRef<parse.BreakNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BreakNode")).value
						c.n = $.interfaceValue<parse.Node | null>(n, "*parse.BreakNode", /* @__PURE__ */ $.pointerType("parse.BreakNode"))
						$.pointerValue<rangeContext>((e$ as escaper).rangeContext).breaks = $.appendOne($.pointerValue<rangeContext>((e$ as escaper).rangeContext).breaks, $.markAsStructValue($.cloneStructValue(c)))
						return $.markAsStructValue(new __goscript_context.context({state: 30}))
					}
					break
				case $.typeAssert<parse.CommentNode | $.VarRef<parse.CommentNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.CommentNode")).ok:
					{
						let n: parse.CommentNode | $.VarRef<parse.CommentNode> | null = $.typeAssert<parse.CommentNode | $.VarRef<parse.CommentNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.CommentNode")).value
						return $.markAsStructValue($.cloneStructValue(c))
					}
					break
				case $.typeAssert<parse.ContinueNode | $.VarRef<parse.ContinueNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ContinueNode")).ok:
					{
						let n: parse.ContinueNode | $.VarRef<parse.ContinueNode> | null = $.typeAssert<parse.ContinueNode | $.VarRef<parse.ContinueNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ContinueNode")).value
						c.n = $.interfaceValue<parse.Node | null>(n, "*parse.ContinueNode", /* @__PURE__ */ $.pointerType("parse.ContinueNode"))
						$.pointerValue<rangeContext>((e$ as escaper).rangeContext).continues = $.appendOne($.pointerValue<rangeContext>((e$ as escaper).rangeContext).continues, $.markAsStructValue($.cloneStructValue(c)))
						return $.markAsStructValue(new __goscript_context.context({state: 30}))
					}
					break
				case $.typeAssert<parse.IfNode | $.VarRef<parse.IfNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IfNode")).ok:
					{
						let n: parse.IfNode | $.VarRef<parse.IfNode> | null = $.typeAssert<parse.IfNode | $.VarRef<parse.IfNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IfNode")).value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeBranch(c, $.fieldRef($.pointerValue<parse.IfNode>(n)._fields, "BranchNode"), "if") : escaper.prototype.escapeBranch.call(e, c, $.fieldRef($.pointerValue<parse.IfNode>(n)._fields, "BranchNode"), "if"))
					}
					break
				case $.typeAssert<parse.ListNode | $.VarRef<parse.ListNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ListNode")).ok:
					{
						let n: parse.ListNode | $.VarRef<parse.ListNode> | null = $.typeAssert<parse.ListNode | $.VarRef<parse.ListNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ListNode")).value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeList($.markAsStructValue($.cloneStructValue(c)), n) : escaper.prototype.escapeList.call(e, $.markAsStructValue($.cloneStructValue(c)), n))
					}
					break
				case $.typeAssert<parse.RangeNode | $.VarRef<parse.RangeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.RangeNode")).ok:
					{
						let n: parse.RangeNode | $.VarRef<parse.RangeNode> | null = $.typeAssert<parse.RangeNode | $.VarRef<parse.RangeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.RangeNode")).value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeBranch(c, $.fieldRef($.pointerValue<parse.RangeNode>(n)._fields, "BranchNode"), "range") : escaper.prototype.escapeBranch.call(e, c, $.fieldRef($.pointerValue<parse.RangeNode>(n)._fields, "BranchNode"), "range"))
					}
					break
				case $.typeAssert<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TemplateNode")).ok:
					{
						let n: parse.TemplateNode | $.VarRef<parse.TemplateNode> | null = $.typeAssert<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TemplateNode")).value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeTemplate($.markAsStructValue($.cloneStructValue(c)), n) : escaper.prototype.escapeTemplate.call(e, $.markAsStructValue($.cloneStructValue(c)), n))
					}
					break
				case $.typeAssert<parse.TextNode | $.VarRef<parse.TextNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TextNode")).ok:
					{
						let n: parse.TextNode | $.VarRef<parse.TextNode> | null = $.typeAssert<parse.TextNode | $.VarRef<parse.TextNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TextNode")).value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeText($.markAsStructValue($.cloneStructValue(c)), n) : escaper.prototype.escapeText.call(e, $.markAsStructValue($.cloneStructValue(c)), n))
					}
					break
				case $.typeAssert<parse.WithNode | $.VarRef<parse.WithNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.WithNode")).ok:
					{
						let n: parse.WithNode | $.VarRef<parse.WithNode> | null = $.typeAssert<parse.WithNode | $.VarRef<parse.WithNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.WithNode")).value
						return (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeBranch(c, $.fieldRef($.pointerValue<parse.WithNode>(n)._fields, "BranchNode"), "with") : escaper.prototype.escapeBranch.call(e, c, $.fieldRef($.pointerValue<parse.WithNode>(n)._fields, "BranchNode"), "with"))
					}
					break
			}
		}
		$.panic($.concatString(($.concatString("escaping ", (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<parse.Node, null>) : $.pointerValue<Exclude<parse.Node, null>>(n)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), " is unimplemented"))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async escapeAction(c: __goscript_context.context, n: parse.ActionNode | $.VarRef<parse.ActionNode> | null): globalThis.Promise<__goscript_context.context> {
		const e: escaper | $.VarRef<escaper> | null = this;
		const n$: parse.ActionNode = n == null ? $.pointerTarget<parse.ActionNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<parse.ActionNode>(n)
		if ($.sliceLen($.pointerValue<parse.PipeNode>((n$ as parse.ActionNode).Pipe).Decl) != 0) {
			// A local variable assignment, not an interpolation.
			return $.markAsStructValue($.cloneStructValue(c))
		}
		c = $.assignStruct(c, nudge($.markAsStructValue($.cloneStructValue(c))))
		// Check for disallowed use of predefined escapers in the pipeline.
		for (let __goscriptRangeTarget1 = $.pointerValue<parse.PipeNode>((n$ as parse.ActionNode).Pipe).Cmds, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), pos = 0; pos < __goscriptRangeWindow1.length; pos++) {
			let idNode = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + pos] as parse.CommandNode | $.VarRef<parse.CommandNode> | null)
			let __goscriptTuple0: any = $.typeAssertTuple<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>($.arrayIndex($.pointerValue<parse.CommandNode>(idNode).Args!, 0), /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))
			let node: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (!ok) {
				// A predefined escaper "esc" will never be found as an identifier in a
				// Chain or Field node, since:
				// - "esc.x ..." is invalid, since predefined escapers return strings, and
				//   strings do not have methods, keys or fields.
				// - "... .esc" is invalid, since predefined escapers are global functions,
				//   not methods or fields of any types.
				// Therefore, it is safe to ignore these two node types.
				continue
			}
			let ident = $.pointerValue<parse.IdentifierNode>(node).Ident
			{
				let [, __goscriptShadow0] = $.mapGet<string, boolean, boolean>(predefinedEscapers, ident, false)
				if (__goscriptShadow0) {
					if ((pos < ($.sliceLen($.pointerValue<parse.PipeNode>((n$ as parse.ActionNode).Pipe).Cmds) - 1)) || (((c.state == 7) && (c.delim == 3)) && ($.stringEqual(ident, "html")))) {
						return (await (async () => { const __goscriptLiteralField2 = await __goscript_error.errorf(11, $.interfaceValue<parse.Node | null>(n, "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode")), (n$ as parse.ActionNode).Line, "predefined escaper %q disallowed in template", $.arrayToSlice<any>([ident])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField2})) })())
					}
				}
			}
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 3, "string")
		switch (c.state) {
			case 27:
			{
				return $.markAsStructValue($.cloneStructValue(c))
				break
			}
			case 8:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			{
				switch (c.urlPart) {
					case 0:
					{
						s = $.appendOne(s, "_html_template_urlfilter")
					}
					case 1:
					{
						switch (c.state) {
							case 20:
							case 21:
							{
								s = $.appendOne(s, "_html_template_cssescaper")
								break
							}
							default:
							{
								s = $.appendOne(s, "_html_template_urlnormalizer")
								break
							}
						}
						break
					}
					case 2:
					{
						s = $.appendOne(s, "_html_template_urlescaper")
						break
					}
					case 3:
					{
						return (await (async () => { const __goscriptLiteralField3 = await __goscript_error.errorf(1, $.interfaceValue<parse.Node | null>(n, "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode")), (n$ as parse.ActionNode).Line, "%s appears in an ambiguous context within a URL", $.arrayToSlice<any>([$.interfaceValue(n, "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode"))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField3})) })())
						break
					}
					default:
					{
						$.panic(__goscript_urlpart_string.urlPart_String(c.urlPart))
						break
					}
				}
				break
			}
			case 28:
			{
				break
			}
			case 29:
			{
				if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(htmlmetacontenturlescape)), "0")) {
					s = $.appendOne(s, "_html_template_urlfilter")
				} else {
					// We don't have a great place to increment this, since it's hard to
					// know if we actually escape any urls in _html_template_urlfilter,
					// since it has no information about what context it is being
					// executed in etc. This is probably the best we can do.
					godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(htmlmetacontenturlescape))
				}
				break
			}
			case 10:
			{
				s = $.appendOne(s, "_html_template_jsvalescaper")
				// A slash after a value starts a div operator.
				c.jsCtx = 1
				break
			}
			case 11:
			case 12:
			{
				s = $.appendOne(s, "_html_template_jsstrescaper")
				break
			}
			case 13:
			{
				s = $.appendOne(s, "_html_template_jstmpllitescaper")
				break
			}
			case 14:
			{
				s = $.appendOne(s, "_html_template_jsregexpescaper")
				break
			}
			case 19:
			{
				s = $.appendOne(s, "_html_template_cssvaluefilter")
				break
			}
			case 0:
			{
				s = $.appendOne(s, "_html_template_htmlescaper")
				break
			}
			case 6:
			{
				s = $.appendOne(s, "_html_template_rcdataescaper")
				break
			}
			case 7:
			{
				break
			}
			case 2:
			case 1:
			{
				c.state = 2
				s = $.appendOne(s, "_html_template_htmlnamefilter")
				break
			}
			case 9:
			{
				s = $.appendOne(s, "_html_template_srcsetescaper")
				break
			}
			default:
			{
				if (__goscript_context.isComment(c.state)) {
					s = $.appendOne(s, "_html_template_commentescaper")
				} else {
					$.panic($.concatString("unexpected state ", __goscript_state_string.state_String(c.state)))
				}
				break
			}
		}
		switch (c.delim) {
			case 0:
			{
				break
			}
			case 3:
			{
				s = $.appendOne(s, "_html_template_nospaceescaper")
				break
			}
			default:
			{
				s = $.appendOne(s, "_html_template_attrescaper")
				break
			}
		}
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).editActionNode(n, s) : escaper.prototype.editActionNode.call(e, n, s))
		return $.markAsStructValue($.cloneStructValue(c))
	}

	public async escapeBranch(c: __goscript_context.context, n: parse.BranchNode | $.VarRef<parse.BranchNode> | null, nodeName: string): globalThis.Promise<__goscript_context.context> {
		let e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		const n$: parse.BranchNode = n == null ? $.pointerTarget<parse.BranchNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<parse.BranchNode>(n)
		if ($.stringEqual(nodeName, "range")) {
			;(e$ as escaper).rangeContext = new rangeContext({outer: (e$ as escaper).rangeContext})
		}
		let c0 = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeList(c.clone(), (n$ as parse.BranchNode).List) : escaper.prototype.escapeList.call(e, c.clone(), (n$ as parse.BranchNode).List))
		if ($.stringEqual(nodeName, "range")) {
			if (c0.state != 27) {
				c0 = $.assignStruct(c0, await joinRange($.markAsStructValue($.cloneStructValue(c0)), (e$ as escaper).rangeContext))
			}
			;(e$ as escaper).rangeContext = $.pointerValue<rangeContext>((e$ as escaper).rangeContext).outer
			if (c0.state == 27) {
				return $.markAsStructValue($.cloneStructValue(c0))
			}

			// The "true" branch of a "range" node can execute multiple times.
			// We check that executing n.List once results in the same context
			// as executing n.List twice.
			;(e$ as escaper).rangeContext = new rangeContext({outer: (e$ as escaper).rangeContext})
			let [c1, ] = await escaper.prototype.escapeListConditionally.call(e, $.markAsStructValue($.cloneStructValue(c0)), (n$ as parse.BranchNode).List, (null as ((_p0: escaper | $.VarRef<escaper> | null, _p1: __goscript_context.context) => boolean | globalThis.Promise<boolean>) | null))
			c0 = $.assignStruct(c0, await join(c0, c1, $.interfaceValue<parse.Node | null>(n, "*parse.BranchNode", /* @__PURE__ */ $.pointerType("parse.BranchNode")), nodeName))
			if (c0.state == 27) {
				;(e$ as escaper).rangeContext = $.pointerValue<rangeContext>((e$ as escaper).rangeContext).outer
				// Make clear that this is a problem on loop re-entry
				// since developers tend to overlook that branch when
				// debugging templates.
				$.pointerValue<__goscript_error.Error>(c0.err).Line = (n$ as parse.BranchNode).Line
				$.pointerValue<__goscript_error.Error>(c0.err).Description = $.concatString("on range loop re-entry: ", $.pointerValue<__goscript_error.Error>(c0.err).Description)
				return $.markAsStructValue($.cloneStructValue(c0))
			}
			c0 = $.assignStruct(c0, await joinRange($.markAsStructValue($.cloneStructValue(c0)), (e$ as escaper).rangeContext));
			;(e$ as escaper).rangeContext = $.pointerValue<rangeContext>((e$ as escaper).rangeContext).outer
			if (c0.state == 27) {
				return $.markAsStructValue($.cloneStructValue(c0))
			}
		}
		let c1 = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escapeList(c.clone(), (n$ as parse.BranchNode).ElseList) : escaper.prototype.escapeList.call(e, c.clone(), (n$ as parse.BranchNode).ElseList))
		return join(c0, c1, $.interfaceValue<parse.Node | null>(n, "*parse.BranchNode", /* @__PURE__ */ $.pointerType("parse.BranchNode")), nodeName)
	}

	public async escapeList(c: __goscript_context.context, n: parse.ListNode | $.VarRef<parse.ListNode> | null): globalThis.Promise<__goscript_context.context> {
		const e: escaper | $.VarRef<escaper> | null = this;
		if (n == null) {
			return $.markAsStructValue($.cloneStructValue(c))
		}
		for (let __goscriptRangeTarget2 = $.pointerValue<parse.ListNode>(n).Nodes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as parse.Node | null)
			c = $.assignStruct(c, await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).escape($.markAsStructValue($.cloneStructValue(c)), m) : escaper.prototype.escape.call(e, $.markAsStructValue($.cloneStructValue(c)), m)))
			if (c.state == 30) {
				break
			}
		}
		return $.markAsStructValue($.cloneStructValue(c))
	}

	public async escapeListConditionally(c: __goscript_context.context, n: parse.ListNode | $.VarRef<parse.ListNode> | null, filter: ((_p0: escaper | $.VarRef<escaper> | null, _p1: __goscript_context.context) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<[__goscript_context.context, boolean]> {
		const e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		let e1 = $.varRef(makeEscaper((e$ as escaper).ns))
		e1.value.rangeContext = (e$ as escaper).rangeContext
		// Make type inferences available to f.
		maps.Copy(e1.value.output, (e$ as escaper).output)
		c = $.assignStruct(c, await e1.value.escapeList($.markAsStructValue($.cloneStructValue(c)), n))
		let ok = (filter != null) && (__goscriptAwait = filter!(e1, $.markAsStructValue($.cloneStructValue(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (ok) {
			// Copy inferences and edits from e1 back into e.
			maps.Copy((e$ as escaper).output, e1.value.output)
			maps.Copy((e$ as escaper).derived, e1.value.derived)
			maps.Copy((e$ as escaper).called, e1.value.called)
			for (const [k, v] of e1.value.actionNodeEdits?.entries() ?? []) {
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).editActionNode(k, v) : escaper.prototype.editActionNode.call(e, k, v))
			}
			for (const [k, v] of e1.value.templateNodeEdits?.entries() ?? []) {
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).editTemplateNode(k, v) : escaper.prototype.editTemplateNode.call(e, k, v))
			}
			for (const [k, v] of e1.value.textNodeEdits?.entries() ?? []) {
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).editTextNode(k, v) : escaper.prototype.editTextNode.call(e, k, v))
			}
		}
		return [$.markAsStructValue($.cloneStructValue(c)), ok]
	}

	public async escapeTemplate(c: __goscript_context.context, n: parse.TemplateNode | $.VarRef<parse.TemplateNode> | null): globalThis.Promise<__goscript_context.context> {
		const e: escaper | $.VarRef<escaper> | null = this;
		const n$: parse.TemplateNode = n == null ? $.pointerTarget<parse.TemplateNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<parse.TemplateNode>(n)
		let __goscriptTuple1: any = await escaper.prototype.escapeTree.call(e, c, $.interfaceValue<parse.Node | null>(n, "*parse.TemplateNode", /* @__PURE__ */ $.pointerType("parse.TemplateNode")), (n$ as parse.TemplateNode).Name, (n$ as parse.TemplateNode).Line)
		c = $.assignStruct(c, __goscriptTuple1[0])
		let name = __goscriptTuple1[1]
		if (!$.stringEqual(name, (n$ as parse.TemplateNode).Name)) {
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).editTemplateNode(n, name) : escaper.prototype.editTemplateNode.call(e, n, name))
		}
		return $.markAsStructValue($.cloneStructValue(c))
	}

	public async escapeTemplateBody(c: __goscript_context.context, t: template2.Template | $.VarRef<template2.Template> | null): globalThis.Promise<[__goscript_context.context, boolean]> {
		let e: escaper | $.VarRef<escaper> | null = this;
		let filter: ((e1: escaper | $.VarRef<escaper> | null, c1: __goscript_context.context) => boolean | globalThis.Promise<boolean>) | null = $.functionValue((e1: escaper | $.VarRef<escaper> | null, c1: __goscript_context.context): boolean => {
			if (c1.state == 27) {
				// Do not update the input escaper, e.
				return false
			}
			if (!$.mapGet<string, boolean, boolean>($.pointerValue<escaper>(e1).called, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as template2.Template).Name() : template2.Template.prototype.Name.call(t)), false)[0]) {
				// If t is not recursively called, then c1 is an
				// accurate output context.
				return true
			}
			// c1 is accurate if it matches our assumed output context.
			return $.markAsStructValue($.cloneStructValue(c)).eq(c1)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("template.escaper"), "template.context"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
		// We need to assume an output context so that recursive template calls
		// take the fast path out of escapeTree instead of infinitely recurring.
		// Naively assuming that the input context is the same as the output
		// works >90% of the time.
		$.mapSet($.pointerValue<escaper>(e).output, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as template2.Template).Name() : template2.Template.prototype.Name.call(t)), $.markAsStructValue($.cloneStructValue(c)))
		return escaper.prototype.escapeListConditionally.call(e, $.markAsStructValue($.cloneStructValue(c)), $.pointerValue<parse.Tree>($.pointerValue<template2.Template>(t).Tree).Root, filter)
	}

	public async escapeText(c: __goscript_context.context, n: parse.TextNode | $.VarRef<parse.TextNode> | null): globalThis.Promise<__goscript_context.context> {
		const e: escaper | $.VarRef<escaper> | null = this;
		const n$: parse.TextNode = n == null ? $.pointerTarget<parse.TextNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<parse.TextNode>(n)
		let s: $.Slice<number> = (n$ as parse.TextNode).Text
		let written = 0
		let i = 0
		let b: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
		for (let __goscriptSliceWindow0 = $.sliceRange(s); i != __goscriptSliceWindow0.length; ) {
			let [c1, nread] = await contextAfterText($.markAsStructValue($.cloneStructValue(c)), $.goSlice(s, i, undefined))
			let i1: number = i + nread
			if ((c.state == 0) || (c.state == 6)) {
				let end = i1
				if (c1.state != c.state) {
					for (let j: number = end - 1; j >= i; j--) {
						if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as number) == 60) {
							end = j
							break
						}
					}
				}
				for (let j = i; j < end; j++) {
					if ((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as number) == 60) && !bytes.HasPrefix(bytes.ToUpper($.goSlice(s, j, undefined)), doctypeBytes)) {
						bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>(b), $.goSlice(s, written, j))
						bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(b), "&lt;")
						written = j + 1
					}
				}
			} else {
				if (__goscript_context.isComment(c.state) && (c.delim == 0)) {
					switch (c.state) {
						case 15:
						{
							if (bytes.ContainsAny($.goSlice(s, written, i1), "\n\r\xe2\x80\xa8\xe2\x80\xa9")) {
								bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(b), 10)
							} else {
								bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(b), 32)
							}
							break
						}
						case 25:
						{
							bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(b), 32)
							break
						}
					}
					written = i1
				}
			}
			if (((c.state != c1.state) && __goscript_context.isComment(c1.state)) && (c1.delim == 0)) {
				// Preserve the portion between written and the comment start.
				let cs = i1 - 2
				if ((c1.state == 5) || (c1.state == 17)) {
					// "<!--" instead of "/*" or "//"
					cs = cs - (2)
				} else {
					if (c1.state == 18) {
						// "-->" instead of "/*" or "//"
						cs = cs - (1)
					}
				}
				bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>(b), $.goSlice(s, written, cs))
				written = i1
			}
			if (__goscript_context.isInScriptLiteral(c.state) && await containsSpecialScriptTag($.goSlice(s, i, i1))) {
				bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>(b), $.goSlice(s, written, i))
				bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>(b), await escapeSpecialScriptTags($.goSlice(s, i, i1)))
				written = i1
			}
			if ((i == i1) && (c.state == c1.state)) {
				$.panic(await fmt.Sprintf("infinite loop from %v to %v on %q..%q", $.interfaceValue($.markAsStructValue($.cloneStructValue(c)), "template.context", "template.context"), $.interfaceValue($.markAsStructValue($.cloneStructValue(c1)), "template.context", "template.context"), $.interfaceValue($.goSlice(s, undefined, i), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.interfaceValue($.goSlice(s, i, undefined), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
			}
			let __goscriptAssign2_0: __goscript_context.context = $.markAsStructValue($.cloneStructValue(c1))
			let __goscriptAssign2_1: number = i1
			c = $.assignStruct(c, __goscriptAssign2_0)
			i = __goscriptAssign2_1
		}

		if ((written != 0) && (c.state != 27)) {
			if (!__goscript_context.isComment(c.state) || (c.delim != 0)) {
				bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>(b), $.goSlice((n$ as parse.TextNode).Text, written, undefined))
			}
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).editTextNode(n, bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(b))) : escaper.prototype.editTextNode.call(e, n, bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(b))))
		}
		return $.markAsStructValue($.cloneStructValue(c))
	}

	public async escapeTree(c: __goscript_context.context, node: parse.Node | null, name: string, line: number): globalThis.Promise<[__goscript_context.context, string]> {
		let e: escaper | $.VarRef<escaper> | null = this;
		const e$: escaper = e == null ? $.pointerTarget<escaper>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<escaper>(e)
		// Mangle the template name with the input context to produce a reliable
		// identifier.
		let dname = await c.mangle(name)
		$.mapSet((e$ as escaper).called, dname, true)
		{
			let [out, ok] = $.mapGet<string, __goscript_context.context, __goscript_context.context>((e$ as escaper).output, dname, $.markAsStructValue(new __goscript_context.context()))
			if (ok) {
				// Already escaped.
				return [$.markAsStructValue($.cloneStructValue(out)), dname]
			}
		}
		let t: template2.Template | $.VarRef<template2.Template> | null = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).template(name) : escaper.prototype.template.call(e, name))
		if (t == null) {
			// Two cases: The template exists but is empty, or has never been mentioned at
			// all. Distinguish the cases in the error messages.
			if ($.mapGet<string, __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, __goscript_template.Template | $.VarRef<__goscript_template.Template> | null>($.pointerValue<__goscript_template.nameSpace>((e$ as escaper).ns)._set, name, null)[0] != null) {
				return [(await (async () => { const __goscriptLiteralField4 = await __goscript_error.errorf(5, node, line, "%q is an incomplete or empty template", $.arrayToSlice<any>([name])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField4})) })()), dname]
			}
			return [(await (async () => { const __goscriptLiteralField5 = await __goscript_error.errorf(5, node, line, "no such template %q", $.arrayToSlice<any>([name])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField5})) })()), dname]
		}
		if (!$.stringEqual(dname, name)) {
			// Use any template derived during an earlier call to escapeTemplate
			// with different top level templates, or clone if necessary.
			let dt: template2.Template | $.VarRef<template2.Template> | null = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).template(dname) : escaper.prototype.template.call(e, dname))
			if (dt == null) {
				dt = template2.New(dname)
				$.pointerValue<template2.Template>(dt).Tree = (() => { const __goscriptLiteralField6 = parse.ListNode.prototype.CopyList.call($.pointerValue<parse.Tree>($.pointerValue<template2.Template>(t).Tree).Root); return new parse.Tree({Name: dname, Root: __goscriptLiteralField6}) })()
				$.mapSet((e$ as escaper).derived, dname, dt)
			}
			t = dt
		}
		return [await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).computeOutCtx(c, t) : escaper.prototype.computeOutCtx.call(e, c, t)), dname]
	}

	public async template(name: string): globalThis.Promise<template2.Template | $.VarRef<template2.Template> | null> {
		const e: escaper | $.VarRef<escaper> | null = this;
		// Any template from the name space associated with this escaper can be used
		// to look up templates in the underlying text/template name space.
		let t: template2.Template | $.VarRef<template2.Template> | null = await template2.Template.prototype.Lookup.call($.pointerValue<__goscript_template.Template>((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as escaper).arbitraryTemplate() : escaper.prototype.arbitraryTemplate.call(e))).text, name)
		if (t == null) {
			t = $.mapGet<string, template2.Template | $.VarRef<template2.Template> | null, template2.Template | $.VarRef<template2.Template> | null>($.pointerValue<escaper>(e).derived, name, null)[0]
		}
		return t
	}

	static __typeInfo = $.registerStructType(
		"template.escaper",
		() => new escaper(),
		() => [$.methodSignature("arbitraryTemplate", [], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("commit", [], [], true), $.methodSignature("computeOutCtx", [["c", "template.context"], ["t", /* @__PURE__ */ $.pointerType("template.Template")]], ["template.context"], true), $.methodSignature("editActionNode", [["n", /* @__PURE__ */ $.pointerType("parse.ActionNode")], ["cmds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("editTemplateNode", [["n", /* @__PURE__ */ $.pointerType("parse.TemplateNode")], ["callee", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("editTextNode", [["n", /* @__PURE__ */ $.pointerType("parse.TextNode")], ["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("escape", [["c", "template.context"], ["n", "parse.Node"]], ["template.context"], true), $.methodSignature("escapeAction", [["c", "template.context"], ["n", /* @__PURE__ */ $.pointerType("parse.ActionNode")]], ["template.context"], true), $.methodSignature("escapeBranch", [["c", "template.context"], ["n", /* @__PURE__ */ $.pointerType("parse.BranchNode")], ["nodeName", /* @__PURE__ */ $.basicType("string")]], ["template.context"], true), $.methodSignature("escapeList", [["c", "template.context"], ["n", /* @__PURE__ */ $.pointerType("parse.ListNode")]], ["template.context"], true), $.methodSignature("escapeListConditionally", [["c", "template.context"], ["n", /* @__PURE__ */ $.pointerType("parse.ListNode")], ["filter", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("template.escaper"), "template.context"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["template.context", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("escapeTemplate", [["c", "template.context"], ["n", /* @__PURE__ */ $.pointerType("parse.TemplateNode")]], ["template.context"], true), $.methodSignature("escapeTemplateBody", [["c", "template.context"], ["t", /* @__PURE__ */ $.pointerType("template.Template")]], ["template.context", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("escapeText", [["c", "template.context"], ["n", /* @__PURE__ */ $.pointerType("parse.TextNode")]], ["template.context"], true), $.methodSignature("escapeTree", [["c", "template.context"], ["node", "parse.Node"], ["name", /* @__PURE__ */ $.basicType("string")], ["line", /* @__PURE__ */ $.basicType("int")]], ["template.context", /* @__PURE__ */ $.basicType("string")], true), $.methodSignature("template", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true)],
		escaper,
		() => [/* @__PURE__ */ $.structField("ns", /* @__PURE__ */ $.pointerType("template.nameSpace"), [0], 0, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("output", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "template.context"), [1], 8, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("derived", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("template.Template")), [2], 16, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("called", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")), [3], 24, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("actionNodeEdits", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("parse.ActionNode"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [4], 32, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("templateNodeEdits", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("parse.TemplateNode"), /* @__PURE__ */ $.basicType("string")), [5], 40, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("textNodeEdits", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("parse.TextNode"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [6], 48, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("rangeContext", /* @__PURE__ */ $.pointerType("template.rangeContext"), [7], 56, false, { pkgPath: "html/template" })]
	)
}

export class rangeContext {
	public get outer(): rangeContext | $.VarRef<rangeContext> | null {
		return this._fields.outer
	}

	public set outer(value: rangeContext | $.VarRef<rangeContext> | null) {
		this._fields.outer = value
	}

	public get breaks(): $.Slice<__goscript_context.context> {
		return this._fields.breaks
	}

	public set breaks(value: $.Slice<__goscript_context.context>) {
		this._fields.breaks = value
	}

	public get continues(): $.Slice<__goscript_context.context> {
		return this._fields.continues
	}

	public set continues(value: $.Slice<__goscript_context.context>) {
		this._fields.continues = value
	}

	public _fields: {
		outer: rangeContext | $.VarRef<rangeContext> | null
		breaks: $.Slice<__goscript_context.context>
		continues: $.Slice<__goscript_context.context>
	}

	constructor(init?: Partial<{outer?: rangeContext | $.VarRef<rangeContext> | null, breaks?: $.Slice<__goscript_context.context>, continues?: $.Slice<__goscript_context.context>}>, __goscriptValue?: boolean) {
		this._fields = {
			outer: init?.outer ?? (null! as rangeContext | $.VarRef<rangeContext> | null),
			breaks: init?.breaks ?? (null! as $.Slice<__goscript_context.context>),
			continues: init?.continues ?? (null! as $.Slice<__goscript_context.context>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rangeContext {
		return new rangeContext(this, true)
	}

	public __goscriptAssign(source: rangeContext): void {
		const target = this._fields
		const values = source._fields
		target.outer = values.outer
		target.breaks = values.breaks
		target.continues = values.continues
	}

	static __typeInfo = $.registerStructType(
		"template.rangeContext",
		() => new rangeContext(),
		() => [],
		rangeContext,
		() => [/* @__PURE__ */ $.structField("outer", /* @__PURE__ */ $.pointerType("template.rangeContext"), [0], 0, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("breaks", /* @__PURE__ */ $.sliceType("template.context"), [1], 8, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("continues", /* @__PURE__ */ $.sliceType("template.context"), [2], 32, false, { pkgPath: "html/template" })]
	)
}

export const filterFailsafe: string = "ZgotmplZ"

export async function escapeTemplate(tmpl: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, node: parse.Node | null, name: string): globalThis.Promise<$.GoError> {
	const tmpl$: __goscript_template.Template = tmpl == null ? $.pointerTarget<__goscript_template.Template>(tmpl) : (tmpl as any).__isVarRef === true ? (tmpl as any).value : (tmpl as any).__goValue === undefined ? (tmpl as any) : $.pointerTarget<__goscript_template.Template>(tmpl)
	let [c, ] = await $.pointerValue<__goscript_template.nameSpace>((tmpl$ as __goscript_template.Template).nameSpace).esc.escapeTree($.markAsStructValue(new __goscript_context.context()), node, name, 0)
	let err: $.GoError = null! as $.GoError
	if (c.err != null) {
		let __goscriptAssign0_0: $.GoError = $.interfaceValue<$.GoError>(c.err, "*template.Error", /* @__PURE__ */ $.pointerType("template.Error"))
		let __goscriptAssign0_1: string = name
		err = __goscriptAssign0_0
		$.pointerValue<__goscript_error.Error>(c.err).Name = __goscriptAssign0_1
	} else {
		if (c.state != 0) {
			err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("ends in a non-text context: %v", $.interfaceValue($.markAsStructValue($.cloneStructValue(c)), "template.context", "template.context")); return new __goscript_error.Error({ErrorCode: 4, Node: null, Name: name, Line: 0, Description: __goscriptLiteralField0}) })()), "*template.Error", /* @__PURE__ */ $.pointerType("template.Error"))
		}
	}
	if (err != null) {
		// Prevent execution of unsafe templates.
		{
			let t: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null = $.mapGet<string, __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, __goscript_template.Template | $.VarRef<__goscript_template.Template> | null>($.pointerValue<__goscript_template.nameSpace>((tmpl$ as __goscript_template.Template).nameSpace)._set, name, null)[0]
			if (t != null) {
				$.pointerValue<__goscript_template.Template>(t).escapeErr = err
				$.pointerValue<template2.Template>($.pointerValue<__goscript_template.Template>(t).text).Tree = null
				$.pointerValue<__goscript_template.Template>(t).Tree = null
			}
		}
		return err
	}
	await $.pointerValue<__goscript_template.nameSpace>((tmpl$ as __goscript_template.Template).nameSpace).esc.commit()
	{
		let t: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null = $.mapGet<string, __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, __goscript_template.Template | $.VarRef<__goscript_template.Template> | null>($.pointerValue<__goscript_template.nameSpace>((tmpl$ as __goscript_template.Template).nameSpace)._set, name, null)[0]
		if (t != null) {
			$.pointerValue<__goscript_template.Template>(t).escapeErr = __goscript_template.escapeOK
			$.pointerValue<__goscript_template.Template>(t).Tree = $.pointerValue<template2.Template>($.pointerValue<__goscript_template.Template>(t).text).Tree
		}
	}
	return null
}

export async function evalArgs(args: $.Slice<any>): globalThis.Promise<string> {
	// Optimization for simple common case of a single string argument.
	if ($.sliceLen(args) == 1) {
		{
			let [s, ok] = $.typeAssertTuple<string>($.arrayIndex(args!, 0), /* @__PURE__ */ $.basicType("string"))
			if (ok) {
				return s
			}
		}
	}
	for (let __goscriptRangeTarget0 = args, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let arg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any);
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = await __goscript_content.indirectToStringerOrError(arg)
	}
	return fmt.Sprint(...(args ?? []))
}

export var funcMap: template2.FuncMap

export function __goscript_init_funcMap(): void {
	if (((funcMap) as any) === undefined) {
		funcMap = $.makeMap<string, any>([["_html_template_attrescaper", $.interfaceValue($.goFunc(__goscript_html.attrEscaper, "html/template.attrEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_commentescaper", $.interfaceValue($.goFunc(__goscript_html.commentEscaper, "html/template.commentEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_cssescaper", $.interfaceValue($.goFunc(__goscript_css.cssEscaper, "html/template.cssEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_cssvaluefilter", $.interfaceValue($.goFunc(__goscript_css.cssValueFilter, "html/template.cssValueFilter"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_htmlnamefilter", $.interfaceValue($.goFunc(__goscript_html.htmlNameFilter, "html/template.htmlNameFilter"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_htmlescaper", $.interfaceValue($.goFunc(__goscript_html.htmlEscaper, "html/template.htmlEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_jsregexpescaper", $.interfaceValue($.goFunc(__goscript_js.jsRegexpEscaper, "html/template.jsRegexpEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_jsstrescaper", $.interfaceValue($.goFunc(__goscript_js.jsStrEscaper, "html/template.jsStrEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_jstmpllitescaper", $.interfaceValue($.goFunc(__goscript_js.jsTmplLitEscaper, "html/template.jsTmplLitEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_jsvalescaper", $.interfaceValue($.goFunc(__goscript_js.jsValEscaper, "html/template.jsValEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_nospaceescaper", $.interfaceValue($.goFunc(__goscript_html.htmlNospaceEscaper, "html/template.htmlNospaceEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_rcdataescaper", $.interfaceValue($.goFunc(__goscript_html.rcdataEscaper, "html/template.rcdataEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_srcsetescaper", $.interfaceValue($.goFunc(__goscript_url.srcsetFilterAndEscaper, "html/template.srcsetFilterAndEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_urlescaper", $.interfaceValue($.goFunc(__goscript_url.urlEscaper, "html/template.urlEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_urlfilter", $.interfaceValue($.goFunc(__goscript_url.urlFilter, "html/template.urlFilter"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_html_template_urlnormalizer", $.interfaceValue($.goFunc(__goscript_url.urlNormalizer, "html/template.urlNormalizer"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["_eval_args_", $.interfaceValue($.goFunc(evalArgs, "html/template.evalArgs"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))]])
	}
}

export function __goscript_get_funcMap(): template2.FuncMap {
	if (((funcMap) as any) === undefined) {
		__goscript_init_funcMap()
	}
	return funcMap
}

export function __goscript_set_funcMap(__goscriptValue: template2.FuncMap): void {
	funcMap = __goscriptValue
}

export function makeEscaper(n: __goscript_template.nameSpace | $.VarRef<__goscript_template.nameSpace> | null): escaper {
	return new escaper({ns: n, output: $.makeMap<string, __goscript_context.context>([]), derived: $.makeMap<string, template2.Template | $.VarRef<template2.Template> | null>([]), called: $.makeMap<string, boolean>([]), actionNodeEdits: $.makeMap<parse.ActionNode | $.VarRef<parse.ActionNode> | null, $.Slice<string>>([], /* @__PURE__ */ $.pointerType("parse.ActionNode")), templateNodeEdits: $.makeMap<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null, string>([], /* @__PURE__ */ $.pointerType("parse.TemplateNode")), textNodeEdits: $.makeMap<parse.TextNode | $.VarRef<parse.TextNode> | null, $.Slice<number>>([], /* @__PURE__ */ $.pointerType("parse.TextNode")), rangeContext: null}, true)
}

export let debugAllowActionJSTmpl: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("jstmpllitinterp")

export function __goscript_set_debugAllowActionJSTmpl(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	debugAllowActionJSTmpl = __goscriptValue
}

export let htmlmetacontenturlescape: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("htmlmetacontenturlescape")

export function __goscript_set_htmlmetacontenturlescape(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	htmlmetacontenturlescape = __goscriptValue
}

export function ensurePipelineContains(p: parse.PipeNode | $.VarRef<parse.PipeNode> | null, s: $.Slice<string>): void {
	const p$: parse.PipeNode = p == null ? $.pointerTarget<parse.PipeNode>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parse.PipeNode>(p)
	if ($.sliceLen(s) == 0) {
		// Do not rewrite pipeline if we have no escapers to insert.
		return
	}
	// Precondition: p.Cmds contains at most one predefined escaper and the
	// escaper will be present at p.Cmds[len(p.Cmds)-1]. This precondition is
	// always true because of the checks in escapeAction.
	let pipelineLen = $.sliceLen((p$ as parse.PipeNode).Cmds)
	if (pipelineLen > 0) {
		let lastCmd: parse.CommandNode | $.VarRef<parse.CommandNode> | null = $.arrayIndex((p$ as parse.PipeNode).Cmds!, pipelineLen - 1)
		let lastCmd$: parse.CommandNode = lastCmd == null ? $.pointerTarget<parse.CommandNode>(lastCmd) : (lastCmd as any).__isVarRef === true ? (lastCmd as any).value : (lastCmd as any).__goValue === undefined ? (lastCmd as any) : $.pointerTarget<parse.CommandNode>(lastCmd)
		{
			let __goscriptTuple2: any = $.typeAssertTuple<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>($.arrayIndex((lastCmd$ as parse.CommandNode).Args!, 0), /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))
			let idNode: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				{
					let esc = $.pointerValue<parse.IdentifierNode>(idNode).Ident
					if ($.mapGet<string, boolean, boolean>(predefinedEscapers, esc, false)[0]) {
						// Pipeline ends with a predefined escaper.
						if (($.sliceLen((p$ as parse.PipeNode).Cmds) == 1) && ($.sliceLen((lastCmd$ as parse.CommandNode).Args) > 1)) {
							// Special case: pipeline is of the form {{ esc arg1 arg2 ... argN }},
							// where esc is the predefined escaper, and arg1...argN are its arguments.
							// Convert this into the equivalent form
							// {{ _eval_args_ arg1 arg2 ... argN | esc }}, so that esc can be easily
							// merged with the escapers in s.
							$.sliceElems((lastCmd$ as parse.CommandNode).Args!)[$.sliceSlot((lastCmd$ as parse.CommandNode).Args!, 0)] = $.interfaceValue<parse.Node | null>(parse.IdentifierNode.prototype.SetPos.call(parse.IdentifierNode.prototype.SetTree.call(parse.NewIdentifier("_eval_args_"), null), $.pointerValue<Exclude<parse.Node, null>>($.arrayIndex((lastCmd$ as parse.CommandNode).Args!, 0)).Position()), "*parse.IdentifierNode", /* @__PURE__ */ $.pointerType("parse.IdentifierNode"));
							;(p$ as parse.PipeNode).Cmds = appendCmd((p$ as parse.PipeNode).Cmds, newIdentCmd(esc, parse.Pos_Position((p$ as parse.PipeNode).Pos)))
							pipelineLen++
						}
						// If any of the commands in s that we are about to insert is equivalent
						// to the predefined escaper, use the predefined escaper instead.
						let dup = false
						for (let __goscriptRangeTarget3 = s, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
							let escaper = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as string)
							if (escFnsEq(esc, escaper)) {
								;(__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] = $.pointerValue<parse.IdentifierNode>(idNode).Ident
								dup = true
							}
						}
						if (dup) {
							// The predefined escaper will already be inserted along with the
							// escapers in s, so do not copy it to the rewritten pipeline.
							pipelineLen--
						}
					}
				}
			}
		}
	}
	// Rewrite the pipeline, creating the escapers in s at the end of the pipeline.
	let newCmds: $.Slice<parse.CommandNode | $.VarRef<parse.CommandNode> | null> = $.makeSlice<parse.CommandNode | $.VarRef<parse.CommandNode> | null>(pipelineLen, pipelineLen + $.sliceLen(s))
	let insertedIdents: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>()
	for (let __goscriptSliceWindow1 = $.sliceRange(newCmds), i = 0; i < pipelineLen; i++) {
		let cmd: parse.CommandNode | $.VarRef<parse.CommandNode> | null = $.arrayIndex((p$ as parse.PipeNode).Cmds!, i);
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = cmd
		{
			let __goscriptTuple3: any = $.typeAssertTuple<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>($.arrayIndex($.pointerValue<parse.CommandNode>(cmd).Args!, 0), /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))
			let idNode: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				$.mapSet(insertedIdents, normalizeEscFn($.pointerValue<parse.IdentifierNode>(idNode).Ident), true)
			}
		}
	}
	for (let __goscriptRangeTarget4 = s, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let name = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
		if (!$.mapGet<string, boolean, boolean>(insertedIdents, normalizeEscFn(name), false)[0]) {
			// When two templates share an underlying parse tree via the use of
			// AddParseTree and one template is executed after the other, this check
			// ensures that escapers that were already inserted into the pipeline on
			// the first escaping pass do not get inserted again.
			newCmds = appendCmd(newCmds, newIdentCmd(name, parse.Pos_Position((p$ as parse.PipeNode).Pos)))
		}
	}
	;(p$ as parse.PipeNode).Cmds = newCmds
}

export let predefinedEscapers: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([["html", true], ["urlquery", true]])

export function __goscript_set_predefinedEscapers(__goscriptValue: globalThis.Map<string, boolean> | null): void {
	predefinedEscapers = __goscriptValue
}

export let equivEscapers: globalThis.Map<string, string> | null = $.makeMap<string, string>([["_html_template_attrescaper", "html"], ["_html_template_htmlescaper", "html"], ["_html_template_rcdataescaper", "html"], ["_html_template_urlescaper", "urlquery"], ["_html_template_urlnormalizer", "urlquery"]])

export function __goscript_set_equivEscapers(__goscriptValue: globalThis.Map<string, string> | null): void {
	equivEscapers = __goscriptValue
}

export function escFnsEq(a: string, b: string): boolean {
	return $.stringEqual(normalizeEscFn(a), normalizeEscFn(b))
}

export function normalizeEscFn(e: string): string {
	{
		let norm = $.mapGet<string, string, string>(equivEscapers, e, "")[0]
		if (!$.stringEqual(norm, "")) {
			return norm
		}
	}
	return e
}

export let redundantFuncs: globalThis.Map<string, globalThis.Map<string, boolean> | null> | null = $.makeMap<string, globalThis.Map<string, boolean> | null>([["_html_template_commentescaper", $.makeMap<string, boolean>([["_html_template_attrescaper", true], ["_html_template_htmlescaper", true]])], ["_html_template_cssescaper", $.makeMap<string, boolean>([["_html_template_attrescaper", true]])], ["_html_template_jsregexpescaper", $.makeMap<string, boolean>([["_html_template_attrescaper", true]])], ["_html_template_jsstrescaper", $.makeMap<string, boolean>([["_html_template_attrescaper", true]])], ["_html_template_jstmpllitescaper", $.makeMap<string, boolean>([["_html_template_attrescaper", true]])], ["_html_template_urlescaper", $.makeMap<string, boolean>([["_html_template_urlnormalizer", true]])]])

export function __goscript_set_redundantFuncs(__goscriptValue: globalThis.Map<string, globalThis.Map<string, boolean> | null> | null): void {
	redundantFuncs = __goscriptValue
}

export function appendCmd(cmds: $.Slice<parse.CommandNode | $.VarRef<parse.CommandNode> | null>, cmd: parse.CommandNode | $.VarRef<parse.CommandNode> | null): $.Slice<parse.CommandNode | $.VarRef<parse.CommandNode> | null> {
	{
		let n = $.sliceLen(cmds)
		if (n != 0) {
			let __goscriptTuple4: any = $.typeAssertTuple<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>($.arrayIndex($.pointerValue<parse.CommandNode>($.arrayIndex(cmds!, n - 1)).Args!, 0), /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))
			let last: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = __goscriptTuple4[0]
			let okLast = __goscriptTuple4[1]
			let __goscriptTuple5: any = $.typeAssertTuple<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>($.arrayIndex($.pointerValue<parse.CommandNode>(cmd).Args!, 0), /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))
			let next: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = __goscriptTuple5[0]
			let okNext = __goscriptTuple5[1]
			if ((okLast && okNext) && $.mapGet<string, boolean, boolean>($.mapGet<string, globalThis.Map<string, boolean> | null, globalThis.Map<string, boolean> | null>(redundantFuncs, $.pointerValue<parse.IdentifierNode>(last).Ident, null)[0], $.pointerValue<parse.IdentifierNode>(next).Ident, false)[0]) {
				return cmds
			}
		}
	}
	return $.appendOne(cmds, cmd, $.appendZeros.nil)
}

export function newIdentCmd(identifier: string, pos: parse.Pos): parse.CommandNode | $.VarRef<parse.CommandNode> | null {
	return new parse.CommandNode({NodeType: 4, Args: $.arrayToSlice<parse.Node | null>([$.interfaceValue<parse.Node | null>(parse.IdentifierNode.prototype.SetPos.call(parse.IdentifierNode.prototype.SetTree.call(parse.NewIdentifier(identifier), null), pos), "*parse.IdentifierNode", /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))])})
}

export function nudge(c: __goscript_context.context): __goscript_context.context {
	switch (c.state) {
		case 1:
		{
			c.state = 2
			break
		}
		case 4:
		{
			let __goscriptAssign3_0: __goscript_context.state = $.arrayIndex(__goscript_transition.__goscript_get_attrStartStates(), c.attr)
			let __goscriptAssign3_1: __goscript_context.delim = 3
			let __goscriptAssign3_2: __goscript_context.attr = 0
			c.state = __goscriptAssign3_0
			c.delim = __goscriptAssign3_1
			c.attr = __goscriptAssign3_2
			break
		}
		case 3:
		{
			let __goscriptAssign4_0: __goscript_context.state = 2
			let __goscriptAssign4_1: __goscript_context.attr = 0
			c.state = __goscriptAssign4_0
			c.attr = __goscriptAssign4_1
			break
		}
	}
	return $.markAsStructValue($.cloneStructValue(c))
}

export async function join(a: __goscript_context.context, b: __goscript_context.context, node: parse.Node | null, nodeName: string): globalThis.Promise<__goscript_context.context> {
	if (a.state == 27) {
		return $.markAsStructValue($.cloneStructValue(a))
	}
	if (b.state == 27) {
		return $.markAsStructValue($.cloneStructValue(b))
	}
	if (a.state == 30) {
		return $.markAsStructValue($.cloneStructValue(b))
	}
	if (b.state == 30) {
		return $.markAsStructValue($.cloneStructValue(a))
	}
	if (a.eq(b)) {
		return $.markAsStructValue($.cloneStructValue(a))
	}

	let c = $.markAsStructValue($.cloneStructValue(a))
	c.urlPart = b.urlPart
	if (c.eq(b)) {
		// The contexts differ only by urlPart.
		c.urlPart = 3
		return $.markAsStructValue($.cloneStructValue(c))
	}

	c = $.assignStruct(c, a)
	c.jsCtx = b.jsCtx
	if (c.eq(b)) {
		// The contexts differ only by jsCtx.
		c.jsCtx = 2
		return $.markAsStructValue($.cloneStructValue(c))
	}

	// Allow a nudged context to join with an unnudged one.
	// This means that
	//   <p title={{if .C}}{{.}}{{end}}
	// ends in an unquoted value state even though the else branch
	// ends in stateBeforeValue.
	{
		let __goscriptShadow1 = nudge($.markAsStructValue($.cloneStructValue(a)))
		let d = nudge($.markAsStructValue($.cloneStructValue(b)))
		if (!(__goscriptShadow1.eq(a) && d.eq(b))) {
			{
				let e = await join(__goscriptShadow1, d, node, nodeName)
				if (e.state != 27) {
					return $.markAsStructValue($.cloneStructValue(e))
				}
			}
		}
	}

	return (await (async () => { const __goscriptLiteralField7 = await __goscript_error.errorf(3, node, 0, "{{%s}} branches end in different contexts: %v, %v", $.arrayToSlice<any>([nodeName, $.interfaceValue($.markAsStructValue($.cloneStructValue(a)), "template.context", "template.context"), $.interfaceValue($.markAsStructValue($.cloneStructValue(b)), "template.context", "template.context")])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField7})) })())
}

export async function joinRange(c0: __goscript_context.context, rc: rangeContext | $.VarRef<rangeContext> | null): globalThis.Promise<__goscript_context.context> {
	const rc$: rangeContext = rc == null ? $.pointerTarget<rangeContext>(rc) : (rc as any).__isVarRef === true ? (rc as any).value : (rc as any).__goValue === undefined ? (rc as any) : $.pointerTarget<rangeContext>(rc)
	// Merge contexts at break and continue statements into overall body context.
	// In theory we could treat breaks differently from continues, but for now it is
	// enough to treat them both as going back to the start of the loop (which may then stop).
	for (let __goscriptRangeTarget5 = (rc$ as rangeContext).breaks, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let c = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_context.context)))
		c0 = $.assignStruct(c0, await join(c0, $.markAsStructValue($.cloneStructValue(c)), c.n, "range"))
		if (c0.state == 27) {
			$.pointerValue<__goscript_error.Error>(c0.err).Line = $.pointerValue<parse.BreakNode>($.mustTypeAssert<parse.BreakNode | $.VarRef<parse.BreakNode> | null>(c.n, /* @__PURE__ */ $.pointerType("parse.BreakNode"))).Line
			$.pointerValue<__goscript_error.Error>(c0.err).Description = $.concatString("at range loop break: ", $.pointerValue<__goscript_error.Error>(c0.err).Description)
			return $.markAsStructValue($.cloneStructValue(c0))
		}
	}
	for (let __goscriptRangeTarget6 = (rc$ as rangeContext).continues, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let c = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript_context.context)))
		c0 = $.assignStruct(c0, await join(c0, $.markAsStructValue($.cloneStructValue(c)), c.n, "range"))
		if (c0.state == 27) {
			$.pointerValue<__goscript_error.Error>(c0.err).Line = $.pointerValue<parse.ContinueNode>($.mustTypeAssert<parse.ContinueNode | $.VarRef<parse.ContinueNode> | null>(c.n, /* @__PURE__ */ $.pointerType("parse.ContinueNode"))).Line
			$.pointerValue<__goscript_error.Error>(c0.err).Description = $.concatString("at range loop continue: ", $.pointerValue<__goscript_error.Error>(c0.err).Description)
			return $.markAsStructValue($.cloneStructValue(c0))
		}
	}
	return $.markAsStructValue($.cloneStructValue(c0))
}

export var delimEnds: string[]

export function __goscript_init_delimEnds(): void {
	if (((delimEnds) as any) === undefined) {
		delimEnds = $.arrayValue(["", "\"", "'", " \t\n\x0c\r>"])
	}
}

export function __goscript_get_delimEnds(): string[] {
	if (((delimEnds) as any) === undefined) {
		__goscript_init_delimEnds()
	}
	return delimEnds
}

export function __goscript_set_delimEnds(__goscriptValue: string[]): void {
	delimEnds = __goscriptValue
}

export let specialScriptTagRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("(?i)<(script|/script|!--)")

export function __goscript_set_specialScriptTagRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	specialScriptTagRE = __goscriptValue
}

export let specialScriptTagReplacement: $.Slice<number> = new Uint8Array([92, 120, 51, 67, 36, 49])

export function __goscript_set_specialScriptTagReplacement(__goscriptValue: $.Slice<number>): void {
	specialScriptTagReplacement = __goscriptValue
}

export async function containsSpecialScriptTag(s: $.Slice<number>): globalThis.Promise<boolean> {
	return (specialScriptTagRE !== null && (specialScriptTagRE as any).__isVarRef !== true && (specialScriptTagRE as any).__goValue === undefined ? ((specialScriptTagRE as any) as regexp.Regexp).Match(s) : regexp.Regexp.prototype.Match.call(specialScriptTagRE, s))
}

export async function escapeSpecialScriptTags(s: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	return (specialScriptTagRE !== null && (specialScriptTagRE as any).__isVarRef !== true && (specialScriptTagRE as any).__goValue === undefined ? ((specialScriptTagRE as any) as regexp.Regexp).ReplaceAll(s, specialScriptTagReplacement) : regexp.Regexp.prototype.ReplaceAll.call(specialScriptTagRE, s, specialScriptTagReplacement))
}

export let doctypeBytes: $.Slice<number> = new Uint8Array([60, 33, 68, 79, 67, 84, 89, 80, 69])

export function __goscript_set_doctypeBytes(__goscriptValue: $.Slice<number>): void {
	doctypeBytes = __goscriptValue
}

export async function contextAfterText(c: __goscript_context.context, s: $.Slice<number>): globalThis.Promise<[__goscript_context.context, number]> {
	if (c.delim == 0) {
		let [c1, i] = __goscript_transition.tSpecialTagEnd(c, s)
		if (i == 0) {
			// A special end tag (`</script>`) has been seen and
			// all content preceding it has been consumed.
			return [$.markAsStructValue($.cloneStructValue(c1)), 0]
		}
		// Consider all content up to any end tag.
		return $.arrayIndex(__goscript_transition.__goscript_get_transitionFunc(), c.state)!($.markAsStructValue($.cloneStructValue(c)), $.goSlice(s, undefined, i))
	}

	// We are at the beginning of an attribute value.

	let i = bytes.IndexAny(s, $.arrayIndex(__goscript_get_delimEnds(), c.delim))
	if (i == -1) {
		i = $.sliceLen(s)
	}
	if (c.delim == 3) {
		// https://www.w3.org/TR/html5/syntax.html#attribute-value-(unquoted)-state
		// lists the runes below as error characters.
		// Error out because HTML parsers may differ on whether
		// "<a id= onclick=f("     ends inside id's or onclick's value,
		// "<a class=`foo "        ends inside a value,
		// "<a style=font:'Arial'" needs open-quote fixup.
		// IE treats '`' as a quotation character.
		{
			let j = bytes.IndexAny($.goSlice(s, undefined, i), "\"'<=`")
			if (j >= 0) {
				return [(await (async () => { const __goscriptLiteralField8 = await __goscript_error.errorf(2, null, 0, "%q in unquoted attr: %q", $.arrayToSlice<any>([$.interfaceValue($.goSlice(s, j, j + 1), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.interfaceValue($.goSlice(s, undefined, i), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField8})) })()), $.sliceLen(s)]
			}
		}
	}
	if (i == $.sliceLen(s)) {
		// Remain inside the attribute.
		// Decode the value so non-HTML rules can easily handle
		//     <button onclick="alert(&quot;Hi!&quot;)">
		// without having to entity decode token boundaries.
		for (let u: $.Slice<number> = $.stringToBytes(await html.UnescapeString($.bytesToString(s))); $.sliceLen(u) != 0; ) {
			let [c1, i1] = await $.arrayIndex(__goscript_transition.__goscript_get_transitionFunc(), c.state)!($.markAsStructValue($.cloneStructValue(c)), u)
			let __goscriptAssign5_0: __goscript_context.context = $.markAsStructValue($.cloneStructValue(c1))
			let __goscriptAssign5_1: $.Slice<number> = $.goSlice(u, i1, undefined)
			c = $.assignStruct(c, __goscriptAssign5_0)
			u = __goscriptAssign5_1
		}
		return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
	}

	let __goscriptShadow2 = c.element

	// If this is a non-JS "type" attribute inside "script" tag, do not treat the contents as JS.
	if ((((c.state == 7) && (c.element == 1)) && (c.attr == 2)) && !__goscript_js.isJSType($.bytesToString($.goSlice(s, undefined, i)))) {
		__goscriptShadow2 = 0
	}

	if (c.delim != 3) {
		// Consume any quote.
		i++
	}
	// On exiting an attribute, we discard all state information
	// except the state and element.
	return [$.markAsStructValue(new __goscript_context.context({state: 1, element: __goscriptShadow2})), i]
}

export async function HTMLEscape(w: io.Writer | null, b: $.Slice<number>): globalThis.Promise<void> {
	await template2.HTMLEscape(w, b)
}

export async function HTMLEscapeString(s: string): globalThis.Promise<string> {
	return template2.HTMLEscapeString(s)
}

export async function HTMLEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	return template2.HTMLEscaper(args)
}

export async function JSEscape(w: io.Writer | null, b: $.Slice<number>): globalThis.Promise<void> {
	await template2.JSEscape(w, b)
}

export async function JSEscapeString(s: string): globalThis.Promise<string> {
	return template2.JSEscapeString(s)
}

export async function JSEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	return template2.JSEscaper(args)
}

export async function URLQueryEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	return template2.URLQueryEscaper(args)
}

var __goscriptAwait: any
