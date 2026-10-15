// Generated file based on template.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as fmtsort from "@goscript/internal/fmtsort/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as os from "@goscript/os/index.js"

import * as path from "@goscript/path/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as maps from "@goscript/maps/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_exec from "./exec.gs.ts"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"

import * as __goscript_option from "./option.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/fmtsort/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "@goscript/text/template/parse/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/os/index.js"
import "@goscript/path/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/maps/index.js"
import "@goscript/sync/index.js"
import "./exec.gs.ts"
import "./funcs.gs.ts"
import "./helper.gs.ts"
import "./option.gs.ts"

$.registerTypePackagePath("text/template", ["template.common", "template.Template"])

export class common {
	public get tmpl(): globalThis.Map<string, Template | $.VarRef<Template> | null> | null {
		return this._fields.tmpl
	}

	public set tmpl(value: globalThis.Map<string, Template | $.VarRef<Template> | null> | null) {
		this._fields.tmpl = value
	}

	public get muTmpl(): sync.RWMutex {
		return this._fields.muTmpl
	}

	public set muTmpl(value: sync.RWMutex) {
		this._fields.muTmpl = value
	}

	public get option(): __goscript_option.option {
		return this._fields.option
	}

	public set option(value: __goscript_option.option) {
		this._fields.option = value
	}

	// We use two maps, one for parsing and one for execution.
	// This separation makes the API cleaner since it doesn't
	// expose reflection to the client.
	public get muFuncs(): sync.RWMutex {
		return this._fields.muFuncs
	}

	public set muFuncs(value: sync.RWMutex) {
		this._fields.muFuncs = value
	}

	public get parseFuncs(): __goscript_funcs.FuncMap {
		return this._fields.parseFuncs
	}

	public set parseFuncs(value: __goscript_funcs.FuncMap) {
		this._fields.parseFuncs = value
	}

	public get execFuncs(): globalThis.Map<string, reflect.Value> | null {
		return this._fields.execFuncs
	}

	public set execFuncs(value: globalThis.Map<string, reflect.Value> | null) {
		this._fields.execFuncs = value
	}

	public _fields: {
		tmpl: globalThis.Map<string, Template | $.VarRef<Template> | null> | null
		muTmpl: sync.RWMutex
		option: __goscript_option.option
		muFuncs: sync.RWMutex
		parseFuncs: __goscript_funcs.FuncMap
		execFuncs: globalThis.Map<string, reflect.Value> | null
	}

	constructor(init?: Partial<{tmpl?: globalThis.Map<string, Template | $.VarRef<Template> | null> | null, muTmpl?: sync.RWMutex, option?: __goscript_option.option, muFuncs?: sync.RWMutex, parseFuncs?: __goscript_funcs.FuncMap, execFuncs?: globalThis.Map<string, reflect.Value> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			tmpl: init?.tmpl ?? (null! as globalThis.Map<string, Template | $.VarRef<Template> | null> | null),
			muTmpl: init?.muTmpl ? $.markAsStructValue($.cloneStructValue(init.muTmpl)) : $.markAsStructValue(new sync.RWMutex()),
			option: init?.option ? init.option.clone() : new __goscript_option.option(undefined, true),
			muFuncs: init?.muFuncs ? $.markAsStructValue($.cloneStructValue(init.muFuncs)) : $.markAsStructValue(new sync.RWMutex()),
			parseFuncs: init?.parseFuncs ?? (null! as __goscript_funcs.FuncMap),
			execFuncs: init?.execFuncs ?? (null! as globalThis.Map<string, reflect.Value> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): common {
		return new common(this, true)
	}

	public __goscriptAssign(source: common): void {
		const target = this._fields
		const values = source._fields
		target.tmpl = values.tmpl
		$.assignStruct(target.muTmpl, values.muTmpl)
		$.assignStruct(target.option, values.option)
		$.assignStruct(target.muFuncs, values.muFuncs)
		target.parseFuncs = values.parseFuncs
		target.execFuncs = values.execFuncs
	}

	static __typeInfo = $.registerStructType(
		"template.common",
		() => new common(),
		() => [],
		common,
		() => [/* @__PURE__ */ $.structField("tmpl", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("template.Template")), [0], 0, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("muTmpl", "sync.RWMutex", [1], 8, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("option", "template.option", [2], 32, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("muFuncs", "sync.RWMutex", [3], 40, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("parseFuncs", "template.FuncMap", [4], 64, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("execFuncs", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "reflect.Value"), [5], 72, false, { pkgPath: "text/template" })]
	)
}

export class Template {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get Tree(): parse.Tree | $.VarRef<parse.Tree> | null {
		return this._fields.Tree
	}

	public set Tree(value: parse.Tree | $.VarRef<parse.Tree> | null) {
		this._fields.Tree = value
	}

	public get common(): common | $.VarRef<common> | null {
		return this._fields.common
	}

	public set common(value: common | $.VarRef<common> | null) {
		this._fields.common = value
	}

	public get leftDelim(): string {
		return this._fields.leftDelim
	}

	public set leftDelim(value: string) {
		this._fields.leftDelim = value
	}

	public get rightDelim(): string {
		return this._fields.rightDelim
	}

	public set rightDelim(value: string) {
		this._fields.rightDelim = value
	}

	public _fields: {
		name: string
		Tree: parse.Tree | $.VarRef<parse.Tree> | null
		common: common | $.VarRef<common> | null
		leftDelim: string
		rightDelim: string
	}

	constructor(init?: Partial<{name?: string, Tree?: parse.Tree | $.VarRef<parse.Tree> | null, common?: common | $.VarRef<common> | null, leftDelim?: string, rightDelim?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			Tree: init?.Tree ?? (null! as parse.Tree | $.VarRef<parse.Tree> | null),
			common: init?.common ?? (null! as common | $.VarRef<common> | null),
			leftDelim: init?.leftDelim ?? ("" as string),
			rightDelim: init?.rightDelim ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Template {
		return new Template(this, true)
	}

	public __goscriptAssign(source: Template): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.Tree = values.Tree
		target.common = values.common
		target.leftDelim = values.leftDelim
		target.rightDelim = values.rightDelim
	}

	public async AddParseTree(name: string, tree: parse.Tree | $.VarRef<parse.Tree> | null): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		await $.pointerValue<common>((t$ as Template).common).muTmpl.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<common>((t$ as Template).common).muTmpl), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let nt: Template | $.VarRef<Template> | null = t
		if (!$.stringEqual(name, (t$ as Template).name)) {
			nt = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).New(name) : Template.prototype.New.call(t, name))
		}
		// Even if nt == t, we need to install it in the common.tmpl map.
		if (await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).associate(nt, tree) : Template.prototype.associate.call(t, nt, tree)) || ($.pointerValue<Template>(nt).Tree == null)) {
			$.pointerValue<Template>(nt).Tree = tree
		}
		return [nt, null]
	}

	public async Clone(): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		let t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		let nt: Template | $.VarRef<Template> | null = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).copy(null) : Template.prototype.copy.call(t, null))
		let nt$: Template = nt == null ? $.pointerTarget<Template>(nt) : (nt as any).__isVarRef === true ? (nt as any).value : (nt as any).__goValue === undefined ? (nt as any) : $.pointerTarget<Template>(nt)
		void (nt !== null && (nt as any).__isVarRef !== true && (nt as any).__goValue === undefined ? ((nt as any) as Template).init() : Template.prototype.init.call(nt))
		if ((t$ as Template).common == null) {
			return [nt, null]
		}
		$.assignStruct($.pointerValue<common>((nt$ as Template).common).option, $.pointerValue<common>((t$ as Template).common).option)
		await $.pointerValue<common>((t$ as Template).common).muTmpl.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<common>((t$ as Template).common).muTmpl), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		for (let [k, v] of $.pointerValue<common>((t$ as Template).common).tmpl?.entries() ?? []) {
			if ($.stringEqual(k, (t$ as Template).name)) {
				$.mapSet($.pointerValue<common>((nt$ as Template).common).tmpl, (t$ as Template).name, nt)
				continue
			}
			// The associated templates share nt's common structure.
			let tmpl: Template | $.VarRef<Template> | null = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Template).copy((nt$ as Template).common) : Template.prototype.copy.call(v, (nt$ as Template).common))
			$.mapSet($.pointerValue<common>((nt$ as Template).common).tmpl, k, tmpl)
		}
		await $.pointerValue<common>((t$ as Template).common).muFuncs.RLock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<common>((t$ as Template).common).muFuncs), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		maps.Copy($.pointerValue<common>((nt$ as Template).common).parseFuncs, $.pointerValue<common>((t$ as Template).common).parseFuncs)
		maps.Copy($.pointerValue<common>((nt$ as Template).common).execFuncs, $.pointerValue<common>((t$ as Template).common).execFuncs)
		return [nt, null]
	}

	public async DefinedTemplates(): globalThis.Promise<string> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		if ((t$ as Template).common == null) {
			return ""
		}
		let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await $.pointerValue<common>((t$ as Template).common).muTmpl.RLock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<common>((t$ as Template).common).muTmpl), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		for (const [name, __goscriptRangeShadow0] of $.pointerValue<common>((t$ as Template).common).tmpl?.entries() ?? []) {
			if (($.pointerValue<Template>(__goscriptRangeShadow0).Tree == null) || ($.pointerValue<parse.Tree>($.pointerValue<Template>(__goscriptRangeShadow0).Tree).Root == null)) {
				continue
			}
			if (b.value.Len() == 0) {
				b.value.WriteString("; defined templates are: ")
			} else {
				b.value.WriteString(", ")
			}
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "%q", name)
		}
		return b.value.String()
	}

	public Delims(left: string, right: string): Template | $.VarRef<Template> | null {
		let t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t));
		;(t$ as Template).leftDelim = left;
		;(t$ as Template).rightDelim = right
		return t
	}

	public async Execute(wr: io.Writer | null, data: any): globalThis.Promise<$.GoError> {
		const t: Template | $.VarRef<Template> | null = this;
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).execute(wr, data) : Template.prototype.execute.call(t, wr, data))
	}

	public async ExecuteTemplate(wr: io.Writer | null, name: string, data: any): globalThis.Promise<$.GoError> {
		const t: Template | $.VarRef<Template> | null = this;
		let tmpl: Template | $.VarRef<Template> | null = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).Lookup(name) : Template.prototype.Lookup.call(t, name))
		if (tmpl == null) {
			return fmt.Errorf("template: no template %q associated with template %q", name, $.pointerValue<Template>(t).name)
		}
		return (tmpl !== null && (tmpl as any).__isVarRef !== true && (tmpl as any).__goValue === undefined ? ((tmpl as any) as Template).Execute(wr, data) : Template.prototype.Execute.call(tmpl, wr, data))
	}

	public async Funcs(funcMap: __goscript_funcs.FuncMap): globalThis.Promise<Template | $.VarRef<Template> | null> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		await $.pointerValue<common>((t$ as Template).common).muFuncs.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<common>((t$ as Template).common).muFuncs), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		await __goscript_funcs.addValueFuncs($.pointerValue<common>((t$ as Template).common).execFuncs, funcMap)
		__goscript_funcs.addFuncs($.pointerValue<common>((t$ as Template).common).parseFuncs, funcMap)
		return t
	}

	public async Lookup(name: string): globalThis.Promise<Template | $.VarRef<Template> | null> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		if ((t$ as Template).common == null) {
			return null
		}
		await $.pointerValue<common>((t$ as Template).common).muTmpl.RLock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<common>((t$ as Template).common).muTmpl), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		return $.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<common>((t$ as Template).common).tmpl, name, null)[0]
	}

	public Name(): string {
		const t: Template | $.VarRef<Template> | null = this;
		return $.pointerValue<Template>(t).name
	}

	public New(name: string): Template | $.VarRef<Template> | null {
		const t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		let nt: Template | $.VarRef<Template> | null = new Template({name: name, common: (t$ as Template).common, leftDelim: (t$ as Template).leftDelim, rightDelim: (t$ as Template).rightDelim})
		return nt
	}

	public Option(opt: $.Slice<string>): Template | $.VarRef<Template> | null {
		const t: Template | $.VarRef<Template> | null = this;
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		for (let __goscriptRangeTarget0 = opt, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).setOption(s) : Template.prototype.setOption.call(t, s))
		}
		return t
	}

	public async Parse(text: string): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		await $.pointerValue<common>((t$ as Template).common).muFuncs.RLock()
		let __goscriptTuple0: any = await parse.Parse((t$ as Template).name, text, (t$ as Template).leftDelim, (t$ as Template).rightDelim, $.arrayToSlice<globalThis.Map<string, any> | null>([$.pointerValue<common>((t$ as Template).common).parseFuncs, __goscript_funcs.builtins()]))
		let trees: globalThis.Map<string, parse.Tree | $.VarRef<parse.Tree> | null> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		$.pointerValue<common>((t$ as Template).common).muFuncs.RUnlock()
		if (err != null) {
			return [null, err]
		}
		// Add the newly parsed trees, including the one for t, into our common structure.
		for (const [name, tree] of trees?.entries() ?? []) {
			{
				let [, __goscriptShadow0] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).AddParseTree(name, tree) : Template.prototype.AddParseTree.call(t, name, tree))
				if (__goscriptShadow0 != null) {
					return [null, __goscriptShadow0]
				}
			}
		}
		return [t, null]
	}

	public async ParseFS(fsys: fs.FS | null, patterns: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		return __goscript_helper.parseFS(t, fsys, patterns)
	}

	public async ParseFiles(filenames: $.Slice<string>): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		return __goscript_helper.parseFiles(t, __goscript_helper.readFileOS, filenames)
	}

	public async ParseGlob(pattern: string): globalThis.Promise<[Template | $.VarRef<Template> | null, $.GoError]> {
		const t: Template | $.VarRef<Template> | null = this;
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
		return __goscript_helper.parseGlob(t, pattern)
	}

	public async Templates(): globalThis.Promise<$.Slice<Template | $.VarRef<Template> | null>> {
		const t: Template | $.VarRef<Template> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		if ((t$ as Template).common == null) {
			return null
		}
		// Return a slice so we don't expose the map.
		await $.pointerValue<common>((t$ as Template).common).muTmpl.RLock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<common>((t$ as Template).common).muTmpl), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		let m: $.Slice<Template | $.VarRef<Template> | null> = $.makeSlice<Template | $.VarRef<Template> | null>(0, $.len($.pointerValue<common>((t$ as Template).common).tmpl))
		for (const [__rangeKey, v] of $.pointerValue<common>((t$ as Template).common).tmpl?.entries() ?? []) {
			m = $.appendOne(m, v, $.appendZeros.nil)
		}
		return m
	}

	public async associate(_new: Template | $.VarRef<Template> | null, tree: parse.Tree | $.VarRef<parse.Tree> | null): globalThis.Promise<boolean> {
		let t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		const _new$: Template = _new == null ? $.pointerTarget<Template>(_new) : (_new as any).__isVarRef === true ? (_new as any).value : (_new as any).__goValue === undefined ? (_new as any) : $.pointerTarget<Template>(_new)
		if (!$.pointerEqual((_new$ as Template).common, (t$ as Template).common)) {
			$.panic("internal error: associate not common")
		}
		{
			let old: Template | $.VarRef<Template> | null = $.mapGet<string, Template | $.VarRef<Template> | null, Template | $.VarRef<Template> | null>($.pointerValue<common>((t$ as Template).common).tmpl, (_new$ as Template).name, null)[0]
			if (((old != null) && await parse.IsEmptyTree($.interfaceValue<parse.Node | null>($.pointerValue<parse.Tree>(tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")))) && ($.pointerValue<Template>(old).Tree != null)) {
				// If a template by that name exists,
				// don't replace it with an empty template.
				return false
			}
		}
		$.mapSet($.pointerValue<common>((t$ as Template).common).tmpl, (_new$ as Template).name, _new)
		return true
	}

	public copy(c: common | $.VarRef<common> | null): Template | $.VarRef<Template> | null {
		const t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		return new Template({name: (t$ as Template).name, Tree: (t$ as Template).Tree, common: c, leftDelim: (t$ as Template).leftDelim, rightDelim: (t$ as Template).rightDelim})
	}

	public async execute(wr: io.Writer | null, data: any): globalThis.Promise<$.GoError> {
		const t: Template | $.VarRef<Template> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
			const __goscriptDeferArg0 = err
			__defer.defer(() => { __goscript_exec.errRecover(__goscriptDeferArg0) })
			let [value, ok] = $.typeAssertTuple<reflect.Value>(data, "reflect.Value")
			if (!ok) {
				value = $.assignStruct(value, reflect.ValueOf(data))
			}
			let __goscriptShadow1: __goscript_exec.state | $.VarRef<__goscript_exec.state> | null = new __goscript_exec.state({tmpl: t, wr: wr, vars: $.arrayToSlice<__goscript_exec.variable>([new __goscript_exec.variable({name: "$", value: $.markAsStructValue($.cloneStructValue(value))}, true)])})
			if (((t$ as Template).Tree == null) || ($.pointerValue<parse.Tree>((t$ as Template).Tree).Root == null)) {
				await __goscript_exec.state.prototype.errorf.call(__goscriptShadow1, "%q is an incomplete or empty template", $.arrayToSlice<any>([(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).Name() : Template.prototype.Name.call(t))]))
			}
			await __goscript_exec.state.prototype.walk.call(__goscriptShadow1, $.markAsStructValue($.cloneStructValue(value)), $.interfaceValue<parse.Node | null>($.pointerValue<parse.Tree>((t$ as Template).Tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")))
			__defer.dispose()
			return err.value
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err.value
	}

	public init(): void {
		let t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		if ((t$ as Template).common == null) {
			let c: common | $.VarRef<common> | null = new common()
			let c$: common = c == null ? $.pointerTarget<common>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<common>(c);
			;(c$ as common).tmpl = $.makeMap<string, Template | $.VarRef<Template> | null>();
			;(c$ as common).parseFuncs = $.makeMap<string, any>();
			;(c$ as common).execFuncs = $.makeMap<string, reflect.Value>();
			;(t$ as Template).common = c
		}
	}

	public setOption(opt: string): void {
		let t: Template | $.VarRef<Template> | null = this;
		const t$: Template = t == null ? $.pointerTarget<Template>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Template>(t)
		if ($.stringEqual(opt, "")) {
			$.panic("empty option string")
		}

		{
			let [key, value, ok] = strings.Cut(opt, "=")
			if (ok) {
				switch (key) {
					case "missingkey":
					{
						switch (value) {
							case "invalid":
							case "default":
							{
								$.pointerValue<common>((t$ as Template).common).option.missingKey = 0
								return
								break
							}
							case "zero":
							{
								$.pointerValue<common>((t$ as Template).common).option.missingKey = 1
								return
								break
							}
							case "error":
							{
								$.pointerValue<common>((t$ as Template).common).option.missingKey = 2
								return
								break
							}
						}
						break
					}
				}
			}
		}
		$.panic($.concatString("unrecognized option: ", opt))
	}

	public Copy(): any {
		return $.pointerValue<parse.Tree>(this.Tree).Copy()
	}

	public async ErrorContext(n: any): globalThis.Promise<any> {
		return await $.pointerValue<parse.Tree>(this.Tree).ErrorContext(n)
	}

	static __typeInfo = $.registerStructType(
		"template.Template",
		() => new Template(),
		() => [$.methodSignature("AddParseTree", [["name", /* @__PURE__ */ $.basicType("string")], ["tree", /* @__PURE__ */ $.pointerType("parse.Tree")]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("DefinedTemplates", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Delims", [["left", /* @__PURE__ */ $.basicType("string")], ["right", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Execute", [["wr", "io.Writer"], ["data", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("ExecuteTemplate", [["wr", "io.Writer"], ["name", /* @__PURE__ */ $.basicType("string")], ["data", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("Funcs", [["funcMap", "template.FuncMap"]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Lookup", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("New", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Option", [["opt", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("Parse", [["text", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("ParseFS", [["fsys", "fs.FS"], ["patterns", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("ParseFiles", [["filenames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("ParseGlob", [["pattern", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("template.Template"), "error"], true), $.methodSignature("Templates", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("template.Template"))], true), $.methodSignature("associate", [["new", /* @__PURE__ */ $.pointerType("template.Template")], ["tree", /* @__PURE__ */ $.pointerType("parse.Tree")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("copy", [["c", /* @__PURE__ */ $.pointerType("template.common")]], [/* @__PURE__ */ $.pointerType("template.Template")], true), $.methodSignature("execute", [["wr", "io.Writer"], ["data", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("init", [], [], true), $.methodSignature("setOption", [["opt", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Copy", [], [/* @__PURE__ */ $.pointerType("parse.Tree")]), $.methodSignature("ErrorContext", [["n", "parse.Node"]], [["location", /* @__PURE__ */ $.basicType("string")], ["context", /* @__PURE__ */ $.basicType("string")]])],
		Template,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("Tree", /* @__PURE__ */ $.pointerType("parse.Tree"), [1], 16, true, { anonymous: true }), /* @__PURE__ */ $.structField("common", /* @__PURE__ */ $.pointerType("template.common"), [2], 24, false, { pkgPath: "text/template", anonymous: true }), /* @__PURE__ */ $.structField("leftDelim", /* @__PURE__ */ $.basicType("string"), [3], 32, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("rightDelim", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "text/template" })]
	)
}

export function New(name: string): Template | $.VarRef<Template> | null {
	let t: Template | $.VarRef<Template> | null = new Template({name: name})
	void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Template).init() : Template.prototype.init.call(t))
	return t
}
